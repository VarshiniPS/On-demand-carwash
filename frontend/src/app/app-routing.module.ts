import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent} from './homepage/homepage.component';
import { CarmodelComponent } from './carmodel/carmodel.component';
import { ServicesComponent } from './services/services.component';
import { HeaderComponent } from './header/header.component'
import { SeriesComponent } from './series/series.component';
const routes: Routes = [
  {path:'',component:HeaderComponent},
  {path:'services',component:ServicesComponent},
  {path:'carmodel',component:CarmodelComponent},
  {path:'series',component:SeriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
