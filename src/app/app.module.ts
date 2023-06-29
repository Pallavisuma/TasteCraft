import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule ,Routes} from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { HideshowDirective } from './hideshow.directive';
import { TagComponent } from './components/tag/tag.component';
import { CartComponent } from './components/cart/cart.component';
import { FoodpageComponent } from './components/foodpage/foodpage.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';





const appRoutes: Routes =[

 
  {path: 'home' , component: HomeComponent},
  {path:'search/:searchItem' ,component:HomeComponent},
  {path:'tag/:tag' ,component:HomeComponent},
  {path:'food/:id' ,component:FoodpageComponent},
  {path:'cart' ,component:CartComponent},
  {path:'login' ,component:LoginComponent},
  {path:'signup' ,component:SignupComponent},


 


]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    HideshowDirective,
    TagComponent,
    CartComponent,
    FoodpageComponent,
    LoginComponent,
    SignupComponent,
  
   
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
 
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing :true}),
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
