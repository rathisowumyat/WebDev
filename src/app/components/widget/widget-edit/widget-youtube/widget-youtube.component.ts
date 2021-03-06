import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../../services/website.service.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {PageService} from '../../../../services/page.service.client';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
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

  updateWidget(	text, url, width) {
    this.widget = {
      '_id': this.wdgId,
      'type': 'YOUTUBE',
      '_page': this.pgId,
      'size': '1',
      'text': text,
      'width': width,
      'url':url
    }

    this.route.params.subscribe(params => {
      this.webId = params['webId'];
      this.pgId = params['pageId'];
      this.wdgId = params['wdgId'];
      return this.wdgservice.updateWidget(this.wdgId, this.widget).subscribe(
        (wdg) => {
          this.wdgs = wdg;
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
		      this.router.navigate(['/profile', 'websitelist',this.webId,'pagelist',this.pgId,'widgetlist']);
          this.wdgs = wdgs;
        });
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.webId = params['webId'];
      this.pgId = params['pageId'];
      this.wdgId = params['wdgId'];
	    this.type = 'YOUTUBE';
      this.wdgservice.findWidgetById(this.wdgId).subscribe(
        (wdg) => {
          this.widget = wdg;
          this.text = this.widget.text;
          this.url = this.widget.url;
          this.size = this.widget.size;
          this.width = this.widget.width;
        });
	    this.wdgservice.findWidgetsByPageId(this.pgId).subscribe(
        (webs) => {
          this.wdgs = webs;
        });
    });
  }
}
