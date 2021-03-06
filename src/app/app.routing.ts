import {Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { PageListComponent } from './components/page/page-list/page-list.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { PageNewComponent } from './components/page/page-new/page-new.component';
import { WidgetChooserComponent } from './components/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { WidgetListComponent } from './components/widget/widget-list/widget-list.component';
import { WidgetHeaderComponent } from './components/widget/widget-edit/widget-header/widget-header.component';
import { WidgetImageComponent } from './components/widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import { WidgetHtmlComponent } from './components/widget/widget-edit/widget-html/widget-html.component';
import {WidgetTextComponent} from './components/widget/widget-edit/widget-text/widget-text.component';
import {FlickrImageSearchComponent} from "./components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component";
import {AuthGuard} from './services/auth-guard.service';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'profile/websitenew', component: WebsiteNewComponent},
  {path: 'profile/websitelist/:webId/websiteedit', component: WebsiteEditComponent},
  {path: 'profile/websitelist', component: WebsiteListComponent},
  {path: 'profile/websitelist/:webId/pagenew', component: PageNewComponent},
  {path: 'profile/websitelist/:webId/pagelist/:pageId/pageedit', component: PageEditComponent},
  {path: 'profile/websitelist/:webId/pagelist', component: PageListComponent},
  {path: 'profile/websitelist/:webId/pagelist/:pageId/widgetlist/:wdgId/widgetheader', component: WidgetHeaderComponent},
  {path: 'profile/websitelist/:webId/pagelist/:pageId/widgetlist/:wdgId/widgethtml', component: WidgetHtmlComponent},
  {path: 'profile/websitelist/:webId/pagelist/:pageId/widgetlist/:wdgId/widgettext', component: WidgetTextComponent},
  {path: 'profile/websitelist/:webId/pagelist/:pageId/widgetlist/:wdgId/widgetimage', component: WidgetImageComponent},
  {path: 'profile/websitelist/:webId/pagelist/:pageId/widgetlist/:wdgId/widgetyoutube', component: WidgetYoutubeComponent},
  {path: 'profile/websitelist/:webId/pagelist/:pageId/widgetlist/:wdgId/widgetedit', component: WidgetEditComponent},
  {path: 'profile/websitelist/:webId/pagelist/:pageId/widgetlist', component: WidgetListComponent},
  {path: 'profile/websitelist/:webId/pagelist/:pageId/widgetchooser', component: WidgetChooserComponent},
  {path: 'profile/websitelist/:webId/pagelist/:pageId/widgetnew/:type', component: WidgetEditComponent},
  {path: 'profile/websitelist/:webId/pagelist/:pageId/widgetlist/:wdgId/flickrsearch', component: FlickrImageSearchComponent},
  {path: 'profile/websitelist/:webId/pagelist/:pageId/widgetlist/flickrsearch', component: FlickrImageSearchComponent},
];

export const routing = RouterModule.forRoot(appRoutes);
