import { AfterViewInit, Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
// import { MenuServices } from "../_services/MenuServices";
// import { ITreeOptions, TREE_ACTIONS, TreeNode, TreeModel } from 'angular-tree-component';
import { MasterServices } from "../_services";
import { AlertService } from "../_services/alert.service";

import { style } from "@angular/animations";
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
import { MenuServices } from "../_services/menu.service";
import { NotificationService } from "../_services/notification.service";

// import { BsLocaleService } from "ngx-bootstrap/modal";


@Component({
  selector: 'app-meeting',
  templateUrl: './bmstree.html'


})
export class bmstree implements AfterViewInit, OnInit {

  model: any = {};
  doCut = false;
  nodes !: any;
  private sub: any;
  id !: number;
  str !: string;
  // model: any;
  userid!: any;
  menuid: any;
  ischselected: boolean = false;
  menuname: any;
  issub: any;
  todate!: Date;
  loading: boolean = false;
  modelOption: NgbModalOptions = {
    centered: true,
    backdrop: "static",
    keyboard: false
  }
  constructor(
    private alertService: AlertService, private masterServices: MasterServices, private notifyService: NotificationService,
    private route: ActivatedRoute, private router: Router, private modalService: NgbModal, private menuservice: MenuServices,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = + params['id'];
      this.str = params['from'];


    });

    if (this.id != null && this.id > 0) {
      this.model.userId = this.id

      this.model.userid = Number(localStorage.getItem('userid'));
    }
    if (this.str != null && this.str != "") {
      this.model.from = this.str;
    }

    this.model.userId = this.id
    // this.loading=true;
    this.menuservice.getTreebyUserid(this.model)
      .subscribe(value => {
        this.nodes = value;
        localStorage.setItem('menutree', this.nodes);
       
      });
    // this.loading=false;
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo')
    }
  }
  reloadItems(params: any) { }
  ngAfterViewInit(): void {



  }

  selectToDate(date: any) { }
  Add() {
    this.model.userid = Number(localStorage.getItem('userid'));
    this.model.menuId = this.menuid;
    // alert("this.model.userId" + this.model.userId)
    localStorage.setItem('menuid', this.menuid);
    localStorage.setItem('Menuname', this.menuname);
    localStorage.setItem('menuuserid', this.model.userId);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        'id': this.model.userId,
        'from': this.model.from,
        'forstr': "new"
      }
    };

    if (this.issub == false) {
      // alert("You cann't add sub menu");
      return;
    }
    // alert("Add " + this.menuname);

    this.router.navigate(['menu2'], navigationExtras);
  }
  Cleargroup() {
    this.model.id = Number(localStorage.getItem('userid'));
    this.menuservice.cleargroupall(this.model)
      .subscribe(value => {

      })
  }
  Edit() {
    // this.model.parentid= this.menuid
    this.model.userid = Number(localStorage.getItem('userid'));
    this.model.menuId = this.menuid;
    localStorage.setItem('menuid', this.menuid);
    localStorage.setItem('Menuname', this.menuname)
    localStorage.setItem('menuuserid', this.model.userId);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        'id': this.model.userId,
        'from': this.model.from,
        'forstr': "edit"
      }
    };
    this.router.navigate(['menu2'], navigationExtras);
  }

  Delete() {
    this.model.parentid = this.menuid
    this.model.menuId = this.menuid;
    this.model.userId = this.id;
    this.menuservice.deletemenubyuser(this.model)
      .subscribe((value: any) => {
        console.log(value)
        if (value.status === 'OK') {

          this.notifyService.showSuccess("Menu Deleted Successfully !!", " Save Message!");
          // this.router.navigate(["new"]);
        } else {
          this.notifyService.showRroor("Save Failed", " Oops!");
        }
        this.alertService.getMessage();
      })
  }
  Update() {
    this.model.usergroupid = this.model.userId
    this.model.id = Number(localStorage.getItem('userid'));
    this.model.menuId = this.menuid

    this.menuservice.updatemenubyuser(this.model)
      .subscribe((value: any) => {
        console.log(value)
        if (value.status === 'OK') {
          // const modelref = this.modalService.open(notificationMessage, this.modelOption);
          // modelref.componentInstance.title = "Save Message";
          // modelref.componentInstance.massage = "User Group Updated Sucessfully";
          // modelref.componentInstance.flag = true;

          this.notifyService.showSuccess("User Group Updated Sucessfully", " Save Message!");
          this.router.navigate(["new"]);
        } else {
          // const modelref = this.modalService.open(notificationMessage, this.modelOption);
          // modelref.componentInstance.title = "Oops !";
          // modelref.componentInstance.massage = "Sorry ! But This Feature Only for Groups";
          // modelref.componentInstance.flag = false;
          this.notifyService.showRroor("Sorry ! But This Feature Only for Groups", " Oops!");
        }

      })
  }

  mytry() {
  }

  setvaluenode0() {

    if (this.ischselected == true) {
      this.ischselected = false;
    } else {
      localStorage.setItem('userid', this.userid)
      localStorage.setItem('parentid', '0');
      localStorage.setItem('Menuname', this.menuname);
    }
  }

  setvaluenode(menuid: any, menuname: any, issub: any) {
    if (this.ischselected == false) {

      this.menuid = menuid;
      this.menuname = menuname
      this.model.selected = menuname
      this.issub = issub;
      this.ischselected = true;
      this.model.userid = this.id;
      localStorage.setItem('userid', this.userid)
      localStorage.setItem('parentid', this.menuid);
      localStorage.setItem('Menuname', this.menuname);

    }
    return;
  }
}   