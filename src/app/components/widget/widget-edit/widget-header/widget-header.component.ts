import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../../services/website.service.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {PageService} from '../../../../services/page.service.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  name: string;
  webId: string;
  pgId: string;
  wdgId: string;
  size: string;
  text: string;
  width: string;
  url: string;
  wdgs: any[];
  widget: any;
  type: string;

  constructor(private wdgservice: WidgetService,
              private pageservice: PageService,
              private webservice: WebsiteService,
              private route: ActivatedRoute,
			  private router: Router) {
  }

  updateWidget(text, size) {
    this.widget = {
      '_id': this.wdgId,
      'type': 'HEADER',
      '_page': this.pgId,
      'size': size,
      'text': text,
      'width': '100%',
      'url':'he'
    }

    this.route.params.subscribe(params => {
      this.webId = params['webId'];
      this.pgId = params['pageId'];
      this.wdgId = params['wdgId'];
      return this.wdgservice.updateWidget(this.wdgId, this.widget).subscribe(
        (wdg) => {
          this.wdgs = this.wdgs;
		  this.router.navigate(['/profile', 'websitelist',this.webId,'pagelist',this.pgId,'widgetlist']);
        });
    });
  }

  deleteWidget() {
    this.route.params.subscribe(params => {
      this.webId = params['webId'];
      this.pgId = params['pageId'];
      this.wdgId = params['wdgId'];
      return this.wdgservice.deleteWidget(this.pgId, this.wdgId).subscribe(
        (wdgs) => {
          this.wdgs = this.wdgs;
		  this.router.navigate(['/profile', 'websitelist',this.webId,'pagelist',this.pgId,'widgetlist']);
        });
    });

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.webId = params['webId'];
      this.pgId = params['pageId'];
      this.wdgId = params['wdgId'];
	  this.type = 'HEADER';
      this.wdgservice.findWidgetById(this.wdgId).subscribe(
        (wdg) => {
          this.widget = wdg;
          // this.text = this.widget.text;
          // this.url = this.widget.url;
          // this.size = this.widget.size;
          // this.width = this.widget.width;
		  this.type = 'HEADER';
        });
	  this.wdgservice.findWidgetsByPageId(this.pgId).subscribe(
        (webs) => {
          this.wdgs = webs;
        });
    });
  }
}
