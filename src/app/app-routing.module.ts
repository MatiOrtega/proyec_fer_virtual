import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home', component:MainComponent},
 // {path:'/login', component:loginComponent},
 // {path:'/Em', component:EmComponent},
 //{path:'/Pago', component:PagoComponent},
 //{path:'**', component:  pagenotfoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
