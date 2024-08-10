// import { Injectable } from "@angular/core";

import { Injectable } from "@angular/core";

import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  showSuccess(message: string | undefined, title: string | undefined) {
    this.toastr.success(message, title)
  }
  showRroor(message: string | undefined, title: string | undefined) {
    this.toastr.error(message, title);

  }
  showWarn(message: string | undefined, title: string | undefined) {
    this.toastr.warning(message, title)
  }
}
