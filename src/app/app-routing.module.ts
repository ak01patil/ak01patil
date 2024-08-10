
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductComponent } from './product/product.component';
import { CompanyComponent } from './company/company.component';
import { CareerComponent } from './career/career.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextRendererComponent } from './text-renderer/text-renderer.component';

const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'product', component: ProductComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path:'CompanyComponent', component:CompanyComponent},
  { path:'career', component:CareerComponent},
  { path:'render', component:TextRendererComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
   
    // { path:'usergroup', component:SearchUserGroup}
 }
