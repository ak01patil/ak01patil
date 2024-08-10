import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { createuserGroupHomeModel } from './createuserGroupHomeModel';
import { SearchUserGroupModel } from '../UserGroup/SearchUserGroupModel';
import { DropDownModel } from '../../_models/DropDownModel';
import { User } from '../../_models/user';
import { MasterServices } from '../../_services';
import { AlertService } from '../../_services/alert.service';
import { MenuServices } from '../../_services/menu.service';
import { MessageService } from '../../_services/message.service';
import { NotificationService } from '../../_services/notification.service';


@Component({
  templateUrl: './createuserGroupHome.html'
})
export class createuserGroupHome implements OnInit {
  user = new User();
  modelOption: NgbModalOptions = {
    centered: true,
    backdrop: "static",
    keyboard: false
  }
  // p: any;
  // public i: any;
  model1 = new createuserGroupHomeModel();
  createuserGroupHomeModel = new createuserGroupHomeModel();
  id!: number;
  p!: any;
  model: any = {};
  public i: any = 0;
  grouplst: SearchUserGroupModel[] = [];
  grouplst1: SearchUserGroupModel[] = [];
  public searchtype: DropDownModel[] = [
    { id: 1, "name": "All" },
    { id: 2, "name": "Group" },

  ];
  constructor(
    private messageService: MessageService,
    private alertService: AlertService,
    private masterServices: MasterServices,
    private menuservice:MenuServices,
    private notifyService: NotificationService,
    private modalService: NgbModal,
    private router: Router,) { }

  ngOnInit(): void {
    this.getAllgroup()
    localStorage.setItem('formname', "")
  }


  changeStatus(id: number, status: string) {
    // this.bandHomePageModel.id = id;
    //   // this.bandHomePageModel.activeStatus = status
    //   this.masterServices.onSelectbandchangedeletstatus1(this.model).subscribe((response: any) => {
    //     if (response.status === 'Success') {
    //       const modelref = this.modalService.open(notificationMessage, this.modelOption);
    //       modelref.componentInstance.title = "Delete Message";
    //       modelref.componentInstance.massage = response.message;
    //       modelref.componentInstance.flag = true;
    //     }
    //     else if (response.status1 === 'Success2') {
    //       const modelref = this.modalService.open(notificationMessage, this.modelOption);
    //       modelref.componentInstance.title = "Delete Message";
    //       modelref.componentInstance.massage = response.rescoremessage;
    //       modelref.componentInstance.flag = true;
    //     }
    //     else {
    //       const modelref = this.modalService.open(notificationMessage, this.modelOption);
    //       modelref.componentInstance.title = "Message";
    //       modelref.componentInstance.massage = response.message;
    //       modelref.componentInstance.flag = false;

    //     }
    //   }, error => { console.log(error) })
  }
  // getsearch() {
  // this.bandHomePageModel.userID = Number(localStorage.getItem('userid'));
  // this.masterServices.getSearchForBand(this.bandHomePageModel)
  //   .subscribe(value => {
  //     this.bandlst = [];
  //     this.bandlst = value
  //   });
  getAllgroup() {
    this.menuservice.getAllgroup(this.model)
      .subscribe(value => {
        this.grouplst = value;
        this.grouplst1 = [];
        value.forEach((item) => this.grouplst1.push({ "id": item.id, "groupname": item.groupname, "srno": item.srno, "updategroupname": item.updategroupname }));
        this.grouplst = this.grouplst1;
      })

  }
  btnedit(id: any, name: any) {
    this.model.id = id;
    this.model.updategroupname = name;
  }

  btnnew() {
    this.model.id = null;
    this.model.updategroupname = null;
    this.router.navigate(['newGroup']);

  }
  btndelet(id: any) {
    this.model.id = id;
    this.i = confirm("Do you want to delete this record ?");
    if (this.i == true) {
      this.menuservice.deletegroup(this.model)
        .subscribe(value => {
          if (value.status == "OK") {
            this.alertService.success("Done");
            this.ngOnInit()
          }
        })
    } else {
      // alert("You have selected cancel...");
    }
  }

  btnmenu(id: any,name: any) {
    this.model.id = id;
    this.model.updategroupname = name;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        'id': id,
        'from': "group"
      }
    };
    this.router.navigate(['bmstree'], navigationExtras);
  }

  cancel() {
    this.router.navigate(["./homepage"])
  }
  loadonce() {
    window.location.reload();
  }
}