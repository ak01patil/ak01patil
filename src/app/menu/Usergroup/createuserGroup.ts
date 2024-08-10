import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { createuserGroupHomeModel } from './createuserGroupHomeModel';
import { AlertService } from '../../_services/alert.service';
import { MasterServices } from '../../_services';
import { MenuServices } from '../../_services/menu.service';

@Component({
  selector: 'app-cluster',
  templateUrl: './createuserGroup.html'
})
export class createuserGroup implements OnInit {
  bandHomePageModel = new createuserGroupHomeModel();
  bandListByid!: createuserGroupHomeModel[];
  modelOption: NgbModalOptions = {
    centered: true,
    backdrop: "static",
    keyboard: false
  }

  constructor(
    private alertService: AlertService, private masterServices: MasterServices, private menuservice:MenuServices,
    private route: ActivatedRoute, private router: Router, private modalService: NgbModal,
  ) { }
  id!: number;
  model: any = {};

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.id = + params["id"];
    // });
    // if (this.id != null && this.id > 0) {
    //   let user = new User();
    //   user.trnid = this.id;
    //   this.masterServices.getbandByid(user)
    //     .subscribe(
    //       data => {
    //         this.bandHomePageModel = data;
    //         this.bandListByid = data.bandlstByid;
    //       }
    //     );
    // }

  }

  btnadd() {
    this.menuservice.SaveUserGroup(this.model)
      .subscribe(value => {
        if (value.status == "OK") {
          this.alertService.success("Done");
          this.router.navigate(["newGrouphome"]);
          this.ngOnInit()
        }
        if (value.status == "NO") {
          this.alertService.error("Oops");
        }
      })
  }
  cancle() {
    this.router.navigate(["newGrouphome"]);
  }
}
