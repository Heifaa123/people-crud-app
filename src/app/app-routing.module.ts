import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Page404Component } from './page404/page404.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { AgencyServiceComponent } from './agency-service/agency-service.component';
import { Test2Component } from './test2/test2.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'navbar',
    component:NavbarComponent
  },
  {
    path:'add-user',
    component:AddUserComponent
  },
  {
    path:'update-user/:id',
    component:UpdateUserComponent
  },
 
  {
    path:'people-list',
    component:PeopleListComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'test',
    component:TestComponent
  },
  {
    path:'agency',
    component:AgencyServiceComponent
  },
  {
    path:'test2',
    component:Test2Component
  },
   {
    path:'page404',
    component:Page404Component
  },
  {
    path:'**',
    component:Page404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
