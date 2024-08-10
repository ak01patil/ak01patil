import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { SearchMenuItemModel } from './SearchMenuItemModel';
import { Location, DatePipe } from '@angular/common'
import { DropDownModel } from '../../_models/DropDownModel';
import { MenuServices } from '../../_services/menu.service';
import { AlertService } from '../../_services/alert.service';
import { MasterServices } from '../../_services';
// import { usertwofieldModel } from './usertwofieldModel';

@Component({
    selector: 'app-login',
    templateUrl: 'SearchMenuItem.html'
})
export class SearchMenuItem implements OnInit {
    p:any;
    model: any = {};
    public i: any = 0;
    datalst:SearchMenuItemModel[]=[];
    datalst1:SearchMenuItemModel[]=[];
    public searchtype: DropDownModel[] = [
        { id: 1, "name": "All" },
        { id: 2, "name": "Module" },
        { id: 3, "name": "Page" },
    ];
    constructor(
         private route: ActivatedRoute,
         private menuservice:MenuServices,
         private alertService: AlertService,
        private userService: MasterServices,
         private router: Router, private location: Location,) {
    }
 ngOnInit(){
    
        this.getAllpages();
    
 }
 getAllpages(){
    this.menuservice.getAllpages(this.model)
    .subscribe(value => {
       this.datalst=[];
       this.datalst1 = [];
       value.forEach((item) => this.datalst1.push({ "id": item.id ,"modulename": item.modulename, "pagename": item.pagename, "itemname": item.itemname }));
       this.datalst = this.datalst1;
   })

 }
 onSelect(value:any) {
    this.model.txtselect = value;
}
 btnsearch($event:any) {
    if (this.model.txtselect == "All") {
        this.getAllpages()
        this.model.txtserch = null;
    }
    else if (this.model.txtselect == "Module") {

        if (this.model.txtserch == null || this.model.txtserch == "") {
            // alert("Enter Criteria To Search")
            return;
        }
        else {
            this.datalst1 = [];
            this.datalst.forEach((item) => {
                if ((item.modulename.toLowerCase()).match(this.model.txtserch.toLowerCase().trim())) {
                    this.datalst1.push({ "id": item.id ,"modulename": item.modulename, "pagename": item.pagename, "itemname": item.itemname });
                }
            });
            this.datalst = this.datalst1;
        }
    }
    else if (this.model.txtselect == "Page") {
        if (this.model.txtserch == null || this.model.txtserch == "") {
            // alert("Enter Criteria To Search")
            return;
        }
        else {
          
            this.datalst1 = [];
            this.datalst.forEach((item) => {
                if ((item.pagename.toLowerCase()).match(this.model.txtserch.toLowerCase().trim())) {
                    this.datalst1.push({ "id": item.id ,"modulename": item.modulename, "pagename": item.pagename, "itemname": item.itemname  });
                }
            });
            this.datalst = this.datalst1;
        }
    }

}

 btnedit(id:any,modulename:any,pagename:any,itemname:any){
    let navigationExtras: NavigationExtras = {
        queryParams: {
            "id": id,
            "modelname":modulename,
            "pagename":pagename,
            "itemname":itemname,
        }
    };
    this.router.navigate(['/Defineitme'], navigationExtras);
    
 }
}
