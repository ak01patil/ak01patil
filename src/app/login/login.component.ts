
import { User } from '../_models/user';
import { DropDownModel } from '../_models/DropDownModel';
import { Observable, Subscription } from 'rxjs';

import { AlertService } from '../_services/alert.service';
import { AuthenticationService } from '../_services/authentication.service';
import { EncrDecrService } from '../_services/EncrDecrService';
import { NotificationService } from '../_services/notification.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  model: any = {};
    loading = false;
    user = new User();
    // returnUrl!: string;
    allpatientnames: DropDownModel[] = [];
    private subscription!: Subscription;
    private timer!: Observable<any>;
    public showloader: boolean = false;
    passaw: any;
    constructor(
        private router: Router,
        private alert :AlertService,
        private authenticationService: AuthenticationService,
        private EncrDecr: EncrDecrService,
        private notifyService: NotificationService
      ) {

       }

    ngOnInit() {
        const user = new User();
        this.authenticationService.logout();
    }
    login() {

        if(this.model.username==null && this.model.username == ""){
            this.notifyService.showWarn("Please Login Name!", "Warning");
        }
        if(this.model.password==null && this.model.password == ""){
            this.notifyService.showWarn("Please Login Password!", "Warning");
        }
        this.loading = true
        this.authenticationService.logout();
        const user = new User();
        if (this.model.password == null||this.model.password=="" ) {
            this.notifyService.showRroor("Password is Required !!", " Opps");
            return;
        } else {
            var encrypted = this.EncrDecr.set('UMJ3wfzn@kMpARd', this.model.password);
            this.model.password = encrypted
        }
        this.authenticationService.login(this.model)
            .subscribe(
                (data:any)=> {
                  
                    // this.router.navigate(['./NewAppointment']);
                    // alert(data.message)

                    if (data.message == "SUCCESS") {

                        localStorage.setItem('profile', JSON.stringify(this.model));
                        localStorage.setItem('username', data.username);
                        localStorage.setItem('firstName', data.firstName);
                        localStorage.setItem('userid', data.id.toString());
                        localStorage.setItem('Token', data.token);
                        localStorage.setItem('AccessToken',data.accessToken);//for validate Api's
                        localStorage.setItem('dbName', data.dbName);
                        localStorage.setItem('usergroupid', data.usergroupid);
                        localStorage.setItem('landpage', data.landpage)
                        localStorage.setItem('companyName', data.companyName)
                        localStorage.setItem('defaultlocation', data.defaultlocation.toString())
                        localStorage.setItem('imgname', data.imgname);
                        localStorage.setItem('pagetype', data.pagetype.toString());
                        localStorage.setItem('mtop', data.mtop.toString());
                        localStorage.setItem('mbottom', data.mbottom.toString());
                        localStorage.setItem('mleft', data.mleft.toString());
                        localStorage.setItem('mright', data.mright.toString());
                        localStorage.setItem('fontsize', data.fontsize.toString());
                        localStorage.setItem('fullname', data.fullname);
                        localStorage.setItem('drflag', data.drflag);
                        localStorage.setItem('frontOfficeflag', data.frontOfficeflag);
                        // localStorage.setItem('companyCode', data.companyCode);
                        localStorage.setItem('doctorflag', data.doctorflag.toString());
                        this.router.navigate(['HeaderComponent']);

                        // var user = new User();
                        // user.trnid = Number(localStorage.getItem('userid'));
                        // this.transactionservice.getdefaultclinic(user)
                        // .then(
                        //     data => {



                        //     },
                        //  error => {
                        //   this.alertService.error(error);
                        //   });
                        //   this.router.navigate([localStorage.getItem('landpage')])
                         this.notifyService.showSuccess("Login Successfully!", "Success");
                        this.loading = false;
                        this.notifyService.showSuccess("Login Successfully!", "Success");
                    } else {
                        //this.alertService.error(data.message);
                        // alert("Invalid User name & Password");
                        this.notifyService.showRroor("Invalid User name & Password", "Error");
                        this.loading = false;
                    }
                },
                (error: any) => {
                    // alert("error")
                    this.notifyService.showRroor("error", "Error");
                    this.loading = false;
                });
        if (this.loading) {
            this.authenticationService.logisLoginValueset();
        } else {
            this.authenticationService.logout();
            this.notifyService.showSuccess("Logout Successfully!", "Success");
        }

    }

}
