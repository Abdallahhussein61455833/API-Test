import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HeroComponent,title:'home'},
    {path:'about', component:AboutComponent,title:'about'},
    {path:'portfolio', component:PortfolioComponent,title:'portfolio'},
    {path:'contact', component:ContactComponent,title:'contact'},

];
