import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent} from './homepage/homepage.component';
import { CarmodelComponent } from './carmodel/carmodel.component';
import { ServicesComponent } from './services/services.component';
import { HeaderComponent } from './header/header.component'
import { CarbrandComponent} from './carbrand/carbrand.component'
import { LoginmemberComponent } from './loginmember/loginmember.component';
const routes: Routes = [
  {path:'',component:HeaderComponent},
  {path:'carbrand',component:CarbrandComponent},
  {path:'carmodel',component:ServicesComponent},
  {path:'member',component:LoginmemberComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
