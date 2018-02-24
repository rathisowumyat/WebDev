import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../../../models/user.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  name: String;
  userId: String;
  webId: String;
  ws: Website[];
  username: String;
  desc: String;

  errorMsg = 'Invalid developer!';

  constructor(private webservice: WebsiteService,
              private userservice: UserService,
              private route: ActivatedRoute) {  }

  updateWebsite(name, desc) {
    this.webservice.updateWebsite(this.webId,
      new Website(this.webId,
        name,
        this.userId,
        desc));
    alert('Website of id ' + this.webId + ' updated successfully for user ' + '\'' + this.username + '\'');
  }

  deleteWebsite() {
    this.webservice.deleteWebsite(this.webId);
    alert('Website of id ' + this.webId + ' deleted successfully for user ' + '\'' + this.username + '\'');
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['userId'];
      this.webId = params['webId'];
      this.username = this.userservice.findUserById(this.userId).username;
      this.ws = this.webservice.findWebsitesByUser(this.userId);
    });
  }

}