import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { SearchUserGroupModel } from './SearchUserGroupModel';
import { DropDownModel } from '../../_models/DropDownModel';
import { MasterServices } from '../../_services';
import { AlertService } from '../../_services/alert.service';
import { MenuServices } from '../../_services/menu.service';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
    selector: 'app-login',
    templateUrl: './usergroup1.html'
})
export class SearchUserGroup implements OnInit {
    p: any;
    model: any = {};
    public i: any = 0;
    grouplst: SearchUserGroupModel[] = [];
    grouplst1: SearchUserGroupModel[] = [];
    public searchtype: DropDownModel[] = [
        { id: 1, "name": "All" },
        { id: 2, "name": "Group" },

    ];
    // modalRef!: BsModalRef;

    constructor(
        private menuservice:MenuServices,
        private MasterService: MasterServices,
        private alertService: AlertService,
        private router: Router) {
    }
    ngOnInit() {
        this.getAllgroup();
    }
    getAllgroup() {
        this.menuservice.getAllgroup(this.model)
            .subscribe(value => {
                this.grouplst = value;
                this.grouplst1 = [];
                value.forEach((item) => this.grouplst1.push({ "id": item.id, "groupname": item.groupname, "srno": item.srno, "updategroupname": item.updategroupname }));
                this.grouplst = this.grouplst1;
            })

    }
    btnedit(id: any, name: any, usergroup: TemplateRef<any>) {
        this.model.id = id;
        this.model.updategroupname = name;
        let l1 = (<HTMLInputElement>document.getElementById('lable1'));
        l1.className = "active";

    }

    // btnnew(usergroup: TemplateRef<any>) {
    //     this.model.id = null;
    //     this.model.updategroupname = null;
    //     this.modalRef = this.modalService.show(usergroup, {
    //         class: 'modal-lg'
    //     });
    // }
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

    // btnadd(event: any) {
    //     if (this.model.updategroupname == null || this.model.updategroupname == "") {
    //         this.alertService.error(" oops !Enter User Group");
    //         this.modalRef.hide();
    //         return;
    //     }
    //     this.MasterService.SaveUserGroup(this.model)
    //         .subscribe(value => {
    //             if (value.status == "OK") {
    //                 this.alertService.success("Done");
    //                 this.modalRef.hide();
    //                 this.ngOnInit()
    //             }
    //             if (value.status == "NO") {
    //                 this.alertService.error("Oops");
    //             }
    //         })
    // }

    btnmenu(id: any) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                'id': id,
                'from': "group"
            }
        };
        this.router.navigate(['contextmenue'], navigationExtras);
    }
    onSelect(value: any) {
        this.model.txtselect = value;
    }
    btnsearch($event: any) {
        if (this.model.txtselect == "All") {
            this.getAllgroup()
            this.model.txtserch = null;
        }
        else if (this.model.txtselect == "Group") {

            if (this.model.txtserch == null || this.model.txtserch == "") {
                // alert("Enter Criteria To Search")
                return;
            }
            else {
                this.grouplst1 = [];
                this.grouplst.forEach((item) => {
                    if ((item.groupname.toLowerCase()).match(this.model.txtserch.toLowerCase().trim())) {
                        this.grouplst1.push({ "id": item.id, "groupname": item.groupname, "srno": item.srno, "updategroupname": item.updategroupname });
                    }
                });
                this.grouplst = this.grouplst1;
            }
        }


    }
}