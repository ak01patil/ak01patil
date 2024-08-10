import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BsModalService } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CareerComponent } from './career/career.component';
import { CompanyComponent } from './company/company.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { NotificationService } from './_services/notification.service';
import { MasterServices, TransactionServices } from './_services';
import { MenuServices } from './_services/menu.service';
import { CommonModule, DatePipe } from '@angular/common';
import { LocalStorageService } from './_services/local-storage.service';
// import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
// import { NgxPaginationModule } from 'ngx-pagination';
// import { NgxPaginationModule } from 'ngx-pagination'; 

import { TextRendererComponent } from './text-renderer/text-renderer.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    CareerComponent,
    CompanyComponent,
    ContactUsComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    // MenuComponent,
    ProductComponent,
    TextRendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,    
    ReactiveFormsModule,
    // NgxPaginationModule,
    // RouterModule.forRoot(routes),
    // ToastrModule.forRoot({
    //   preventDuplicates: true,
    //   closeButton:true,
    //   timeOut:2000,
    //   maxOpened:2,
    // }),
    HttpClientModule
  

  ],
  providers: [
    MasterServices,
    TransactionServices,
    MenuServices,
    DatePipe,
    BsModalService,
    LocalStorageService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
