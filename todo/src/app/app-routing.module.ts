import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from './login/login.component'
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListComponent } from './list/list.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SalesComponent } from './sales/sales.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'welcome/: name', component: WelcomeComponent, canActivate: [RouteGuardService]},
  {path: 'list', component: ListComponent, canActivate: [RouteGuardService]},
  {path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]},
  {path: 'todo/:id', component: TodoComponent, canActivate: [RouteGuardService]},
  {path: 'sidebar', component: SidebarComponent, canActivate: [RouteGuardService]},
  {path: 'sales', component: SalesComponent, canActivate: [RouteGuardService]},
  {path: 'signup', component:SignupComponent},
  {path: 'todoreduxlist', component:TodoComponent,canActivate:[RouteGuardService]},
 
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
