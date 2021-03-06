import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  name: string;
  webId: string;
  pgId: string;
  desc: string;
  ps: any[];

  constructor(private pageservice: PageService,
              private webservice: WebsiteService,
              private route: ActivatedRoute,
			        private router: Router) { }

  createPage(name, desc) {
    if (!name) {
      alert ('Please give name of page');
      return;
    }

    const pg = {
      'name': name,
      '_website': this.webId,
      'description': desc
    }
    this.route.params.subscribe(params => {
      return this.pageservice.createPage(this.webId, pg)
        .subscribe((pages) => {
          this.ps = pages;
		  this.router.navigate(['/profile', 'websitelist', this.webId, 'pagelist']);
        });
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.webId = params['webId'];
      this.pageservice.findPageForWebsite(this.webId).subscribe(
        (pages) => {
          this.ps = pages;
        });
    });
  }
}
