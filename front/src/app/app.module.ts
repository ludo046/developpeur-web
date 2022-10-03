import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componants/header/header.component';
import { HomeComponent } from './componants/home/home/home.component';
import { CompetencesComponent } from './componants/menu/competences/competences.component';
import { RealisationComponent } from './componants/menu/realisation/realisation.component';
import { ContactComponent } from './componants/menu/contact/contact.component';
import { RegisterComponent } from './componants/menu/auth/register/register.component';
import { LoginComponent } from './componants/menu/auth/login/login.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsersService } from './service/users/users.service';
import { AuthInterceptor } from './auth-interceptor';
import { ThanksComponent } from './componants/thanks/thanks.component';
import { NgImageAsParticlesModule } from 'ng-image-as-particles';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';

export const ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'competences', component: CompetencesComponent},
  {path: 'realisations', component: RealisationComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'auth', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'merci', component: ThanksComponent},
  {path: '', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CompetencesComponent,
    RealisationComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    ThanksComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    HttpClientModule,
    NgImageAsParticlesModule,
    NgxGoogleAnalyticsModule.forRoot('G-3LFRGJ04RM')
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}, UsersService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
