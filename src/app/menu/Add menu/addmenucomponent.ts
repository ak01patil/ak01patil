import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { MasterServices } from '../../_services/master.service';
import { DropDownModel } from '../../_models/DropDownModel';
import { MenuServices } from '../../_services/menu.service';
import { NotificationService } from '../../_services/notification.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
// import { User } from 'src/app/_models';
// import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './MenuADD.html',
  // templateUrl:'./addmenucomponent.html'
  
})
export class addmenucomponent implements  OnInit {
  model: any = {};
  marked = false;
  landpage = false;
  menuid: any;
  menuName!: any[];
  modulelst!: DropDownModel[];
  jsonsavelist: any[] = [];
  private sub: any;
  menuname!: any;
  foredit!: string;
  userid: any;
  subpage: boolean = false;
  id!: number;
  from!: string;
  finalsequence: number = 0;
  forstr!: string;
  modelOption: NgbModalOptions = {
    centered: true,
    backdrop: "static",
    keyboard: false
  }
  constructor(
    private router: Router, private Masterservice: MasterServices,
   private menuservice:MenuServices,
    private notifyService: NotificationService,
    private modalService: NgbModal, 
    private route: ActivatedRoute) {

  }
 
  ngOnInit(): void {
    this.model.userid = localStorage.getItem('userid');
    this.id = Number(localStorage.getItem("menuuserid"));
    this.route.queryParams.subscribe(params => {
      this.from = params['from'];
      this.forstr = params['forstr'];
    });
    this.menuservice.getmodulelst(this.model)
      .subscribe(value => {
        this.modulelst = value;
        
      });
    
    this.model.from = this.from;
    if (this.id != null && this.from == "group") {
    
      this.model.resourcegroupid = this.id;
      this.model.userId = 0;
    } else if (this.model.from == "User") {
      this.model.userId = this.id
  
    }
    if (this.forstr == "new") {
     // this.model.parentId=this.id;
    // alert("ADD PARENTID"+localStorage.getItem("parentid"));
      this.model.parentId = localStorage.getItem("parentid");
    }
    if (this.forstr == "edit") {
      this.model.id = localStorage.getItem("menuid");
      this.model.id=0;
      this.menuservice.getallmenudata(this.model)
        .subscribe(value => {
          this.model.modulename = value.modulename;
          this.model.pagename = value.pagename;
          this.model.sequence = value.sequence;
          this.model.userId = value.userId;
          this.model.id = value.id;
          this.menuName = value.pagelst;
          this.model.pageid = value.pageid;
          this.model.parentId = value.parentId;
          this.model.moduleid = value.moduleid;
          this.finalsequence = this.model.sequence;
          this.model.resourcegroupid = value.resourcegroupid
          if (value.isSubMenu == "Y") {
            this.marked = true;
            this.subpage = true;
          } else {
            this.subpage = false;
          }
          if (value.landPage == "Y") {
            this.landpage = true;
          }
        });
    } else {
      this.model.parentId = localStorage.getItem('parentid');
      this.model.sequence = localStorage.getItem('sequence')
    }
    this.menuname = localStorage.getItem("Menuname");
    let l1 = (<HTMLInputElement>document.getElementById('lable4'));
    l1.className = "active";
    //   if (this.id != null && this.id > 0) {
    //     this.model.userId = this.id
    //   }else{


    //   }

    //   if (this.from != null && this.from!=""&&this.from=="group") {
    //     this.model.from = this.from
    //     this.model.resourcegroupid=this.id;
    //     this.model.userId=0;
    //   }
    //   this.model.parentId = localStorage.getItem('menuid');
    //   this.menuname=localStorage.getItem("Menuname");

    //  if(this.forstr=="edit"){
    //   this.Masterservice.getallmenudata(this.model)
    //   .subscribe(value => {
    //     this.model=value;
    //     alert(value.isSubMenu);
    //     alert(value.landPage)

    //     if(value.isSubMenu=="Y"){
    //      this.marked=true
    //     }
    //     if(value.landPage=="Y"){
    //       this.landpage=true;
    //     }
    //   });

    //  }
  

  }
  toggleVisibility(e: any) {
    this.marked = e.target.checked;
  }
  togglelandpage(e: any) {
    this.landpage = e.target.checked;
  }
  cancle() {
    this.router.navigate(['Menu By User']);
  }

  


  changeseq() {
    if (this.model.sequence < this.finalsequence) {
      // const modelref = this.modalService.open(notificationMessage, this.modelOption);
      // modelref.componentInstance.title = "Save Message";
      // modelref.componentInstance.massage = "Save Successfully";
      // modelref.componentInstance.flag = true;
       this.notifyService.showRroor("Sequence is Not Less Than Current","Oops");
      this.model.sequence = this.finalsequence;
      return;
    }
  }
  btnsave() {

    if (this.model.sequence < this.finalsequence) {
      // const modelref = this.modalService.open(notificationMessage, this.modelOption);
      // modelref.componentInstance.title = "Save Message";
      // modelref.componentInstance.massage = "Save Successfully";
      // // modelref.componentInstance.flag = true;
      // this.model.sequence = this.finalsequence;
      this.notifyService.showSuccess("Save Successfully","success");
      return;
    }
    this.model.groupId = localStorage.getItem('groupId');
    if (this.landpage) {
      this.model.landPage = 'Y';
    }
    if (this.marked) {
      this.model.isSubMenu = 'Y';
    }

    this.model.parentId = localStorage.getItem('parentid');
     this.model.userId =localStorage.getItem('menuuserid');
     this.model.userid = localStorage.getItem('userid');
     this.model.from = this.from;
    if (this.id != null && this.from == "group") {
     this.model.resourcegroupid=this.id;
    this.model.userId = 0;
    }

    this.jsonsavelist.push({
      from: this.model.from,
      moduleid: this.model.moduleid,
      pageid: this.model.pageid,
      parentId: this.model.parentId,
      resourcegroupid: this.model.resourcegroupid,
      sequence: this.model.sequence,
      modulename: this.model.modulename,
      pagename: this.model.pagename,
      isSubMenu:this.model.subpage,
      menuname:this.menuname
    })  
    this.model.jsonsavelist=this.jsonsavelist
    this.menuservice.savemenubyuser(this.model)
      .subscribe(value => {
        if (value.status == "OK") {
          // const modelref = this.modalService.open(notificationMessage, this.modelOption);
          // modelref.componentInstance.title = "Save Message";
          // modelref.componentInstance.massage = "Save Successfully";
          // modelref.componentInstance.flag = true;
          // let navigationExtras: NavigationExtras = {
          //   queryParams: {
          //     'id': this.model.userId,
          //     'from': this.model.from
          //   }
          // };
          this.notifyService.showSuccess(value.message,"success");
          
          if (this.model.from == "group") {
            let navigationExtras: NavigationExtras = {
              queryParams: {
                'id': this.model.resourcegroupid,
                'from': "group"
              }
            };
            // this.router.navigate(['bmstree'], navigationExtras);
          } else {
            let navigationExtras: NavigationExtras = {
              queryParams: {
                'id': this.model.userId,
                'from': "User"
              }
            };
            // this.router.navigate(['bmstree'], navigationExtras);
          }
          // this.router.navigate(['bmstree'], navigationExtras);
        }
        console.log('value  ' + value.message);
        this.router.navigate(['home']);
      });
      if (this.model.from == "group") {
        let navigationExtras: NavigationExtras = {
          queryParams: {
            'id': this.model.resourcegroupid,
            'from': "group"
          }
        };
        // this.router.navigate(['bmstree'], navigationExtras);
      } else {
        let navigationExtras: NavigationExtras = {
          queryParams: {
            'id': this.model.userId,
            'from': "User"
          }
        };
        // this.router.navigate(['bmstree'], navigationExtras);
      }
      // let navigationExtras: NavigationExtras = {
      //   queryParams: {
      //     'id': this.model.userId,
      //     'from': "User"
      //   }
      // };
      // this.router.navigate(['bmstree'], navigationExtras);

    }
  

  onChangeMenu(event: any) {
    const value = event.target.value
    console.log(value)
    this.model.pageid = value;
   for(let i=0; this.menuName.length ; i++){
    if(value==this.menuName[i].id){
      this.model.pagename=this.menuName[i].dspname;
      this.model.modulename=this.menuName[i].modulename;
    }
   }
  }
  onChangeModule(event: any) {
    console.log(event)
    const value = event.target.value
    this.model.moduleid = value;
    this.menuservice.getmenuName(this.model)
      .subscribe(value => {
        this.menuName = value;
      });
  }


  toggleIssubmenu($event: any) {
    if ($event.target.checked == true) {
      this.subpage = true;
      this.model.subpage='Y';
      this.model.pageid=1;
    
    } else {
      this.subpage = false;
      this.model.subpage='N';
    }
  }

}
