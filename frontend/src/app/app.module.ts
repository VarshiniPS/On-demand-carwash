import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { HomepageComponent } from './homepage/homepage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { OwlModule } from 'ngx-owl-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactusComponent } from './contactus/contactus.component';
import { CarmodelComponent } from './carmodel/carmodel.component';
import { SeriesComponent } from './series/series.component';
import { CarbrandComponent } from './carbrand/carbrand.component';
import { OrderComponent } from './order/order.component';
import { HeadComponent } from './head/head.component';
import { LoginmemberComponent } from './loginmember/loginmember.component';
import { NgxStripeModule } from 'ngx-stripe'
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AdminComponent } from './admin/admin.component';
import { WasherComponent } from './washer/washer.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { IconheaderComponent } from './iconheader/iconheader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    AboutusComponent,
    FooterComponent,
    HeaderComponent,
    ServicesComponent,
    ContactusComponent,
    CarmodelComponent,
    SeriesComponent,
    CarbrandComponent,
    OrderComponent,
    HeadComponent,
    LoginmemberComponent,

    AdminComponent,
    WasherComponent,
    IconheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OwlModule,
    NgbModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    NgxStripeModule.forRoot('pk_test_51Iyk3ESHHhnGOdvyTR2WBQ8MJ56c4QhbRnC3Xyz1buMArCvPp4QTtZfM2LtXLisGY54scWIjiC8cfB3dUiv9BHjt00l8XmE7SC')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
