import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent} from './homepage/homepage.component';
import { CarmodelComponent } from './carmodel/carmodel.component';
import { SeriesComponent } from './series/series.component';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'carmodel',component:CarmodelComponent},
  {path:'series',component:SeriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
