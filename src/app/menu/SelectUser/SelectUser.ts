import { Component, OnInit, Inject, forwardRef } from "@angular/core";
// import { MasterModel } from "../../_models/MasterModel";
import { EventEmitter } from "@angular/core";
import { Router, ActivatedRoute, NavigationExtras } from "@angular/router";
import { Location, getNumberOfCurrencyDigits } from '@angular/common';
import { Subscription } from "rxjs";
import { Observable } from "rxjs";
import { User } from "../../_models/user";
import { DropDownModel } from "../../_models/DropDownModel";
import { MasterServices } from "../../_services";
import { AlertService } from "../../_services/alert.service";
import { MenuServices } from "../../_services/menu.service";

// import { NotificationService } from 'src/app/_services/notification.service';
declare var $: any;
@Component({
  selector: "app-login",
  //  moduleId: module.id,
  templateUrl: "SelectUser.html",
})
export class SelectUser implements OnInit {
  sum = 0;
  posts = " "
    .repeat(100)
    .split("")
    .map((s, i) => i + 1);

  str!: string;
  itemCount = 0;
  user = new User();
  model: any = {};
  private alllist: DropDownModel[] = [];
  private alllist1: DropDownModel[] = [];
  public lstuser: DropDownModel[] = [];
  id!: string;

  constructor(
    private Masterservice: MasterServices,
    private menuservice:MenuServices,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router,
   
    private location: Location,

  ) { }

  ngOnInit() {
    // this.user.token = localStorage.getItem('Token');
    this.model.userid =Number (localStorage.getItem('userid'));
    this.getalluser();
  }
  reloadItems(params:any) { }
  getalluser() {
    this.lstuser = [];
    let user = new User();
    this.lstuser.push({id:0,name:"Select User"});
    this.menuservice.getallActiveuser(user).subscribe((value: any[]) => {
      //this.docuser = [];
    
      value.forEach((item:any) =>
        this.lstuser.push({ id: item.id, name: item.name })
      );
      // tslint:disable-next-line:comment-format
      //this.lstuser = this.lstuser;
    });
   

  }
  onSelectuser(event:any) {
    console.log(event)
    const value = event.target.value
    this.model.id = value;
    
    if(value==0){
      this.alertService.error("Oops! Please Select Valid User");
      return;
    }
    this.model.id = value;
    // alert(value)
  }
  btngo() {
  
    if(this.model.id ==0){
      this.alertService.error("Oops! Please Select Valid User");
      return;
    }
    this.model.menuuserid=localStorage.setItem("menuuserid" ,this.id)

    let navigationExtras: NavigationExtras = {
      queryParams: {
        'id': this.model.id,
        'from': "User"
      }
    };
    this.router.navigate(['bmstree'], navigationExtras);
 
  }
  cancle(){
    this.router.navigate(["homepage"]);
   }
   getPagename(name:any){
    localStorage.setItem('commonrouting',name);
  } 
}
