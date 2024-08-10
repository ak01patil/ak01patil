import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

// import { User } from 'src/app/_models';
import { Location, DatePipe } from '@angular/common'
import { SearchMenuItemModel } from './SearchMenuItemModel';
import { User } from '../../_models/user';
import { MasterServices, TransactionServices } from '../../_services';
import { AlertService } from '../../_services/alert.service';
import { MenuServices } from '../../_services/menu.service';
// import { viLocale } from 'ngx-bootstrap';
// import { MenuServices } from 'src/app/_services/MenuServices';

// import { usertwofieldModel } from './usertwofieldModel';



@Component({
    selector: 'app-login',
    templateUrl: 'DefineMenuItem.html'
})
export class DefineMenuItem implements OnInit {
    model: any = {};
    public i: any = 0;
    user = new User();
    userList2: any;
    lastkeydown2: number = 0;
    id!: number;
    constructor(
        private alertService: AlertService,
        private userService: MasterServices,
        private route: ActivatedRoute,
        private menuservice:MenuServices,
        private router: Router,
        private location: Location,
        private datePipe: DatePipe,
        private transactionService: TransactionServices,
        private MasterService : MasterServices
    ) {
    }
ngOnInit(){
    this.route.queryParams.subscribe(params => {
        this.model.id = + params["id"];
        this.model.modelname= params["modelname"];
        this.model.pagename= params["pagename"];
        this.model.itemname= params["itemname"];

    });
  
}
btnsave(){
    this.menuservice.SaveItemname(this.model)
    .subscribe(value => {
       if(value.status=="OK"){
           this.alertService.success ("Done");
           this.router.navigate(['/Menu'])
       }
       if(value.status=="NO"){
        this.alertService.success("Oops Something Wrong");
       }
    })
}
btncancle(){
    this.router.navigate(['/Menu'])
}
}