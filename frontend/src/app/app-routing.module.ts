import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent} from './homepage/homepage.component';
import { ServicesComponent } from './services/services.component';
import { HeaderComponent } from './header/header.component'
import { CarbrandComponent} from './carbrand/carbrand.component'
import { LoginmemberComponent } from './loginmember/loginmember.component';
import { AdminComponent } from './admin/admin.component';
import { HeadComponent } from './head/head.component';
import { OrderComponent } from './order/order.component';
import { WasherComponent } from './washer/washer.component';
import { TrackorderComponent } from './trackorder/trackorder.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const routes: Routes = [
  {path:'',component:HeaderComponent},
  {path:'head',component:HeadComponent},
  {path:'carbrand',component:CarbrandComponent},
  {path:'carmodel',component:ServicesComponent},
  {path:'member',component:LoginmemberComponent},
  {path:'adash',component:AdminComponent},
  {path:'order',component:OrderComponent},
  {path:'washer',component:WasherComponent},
  {path:'trackorder',component:TrackorderComponent},
  {path:'thankyou',component:ThankyouComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
