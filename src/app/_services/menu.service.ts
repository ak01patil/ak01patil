import { Observable } from 'rxjs';
import { CustomerInput } from '../_models/CustomerInput';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { common } from "./common";
import { DropDownModel } from '../_models/DropDownModel';
import { Mainmenumodel } from '../_models/Mainmenumodel';
import { SaveSuccessModel } from '../_models/SaveSucessModel';
// import { addmenucomponentModel } from '../menu/Add menu/addmenucomponentmodel';
import { SearchMenuItemModel } from '../menu/Menu_Items/SearchMenuItemModel';
import { SearchUserGroupModel } from '../menu/UserGroup/SearchUserGroupModel';
import { User } from '../_models/user';
import { HttpErrorHandler } from './http-error-handler.service';
import { addmenucomponentModel } from '../menu/Add menu/addmenucomponentmodel';

@Injectable({ providedIn: 'root' })
export class MenuServices {

  private url: String = common.s1;
  private customersUrl = this.url;
  private dbname: any = "dbtsepl";
  constructor(private http: HttpClient,
  ) {
  }

  getmenubyuser(mainumodel: addmenucomponentModel): Observable<any[]> {
    const httpOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('Token'),
        'Token': "" +localStorage.getItem('Token'),
        'dbName': localStorage.getItem('dbName')== null ? this.dbname : localStorage.getItem("dbName")
      })
    };
    return this.http.post<any>(this.customersUrl + 'api/menu/menuofUserforjosn', mainumodel, httpOptions1);
  }



  getTreebyUserid(mainumodel: addmenucomponentModel): Observable<any[]> {
    const httpOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('Token'),
        'Token': "" +localStorage.getItem('Token'),
        'dbName': localStorage.getItem('dbName')== null ? this.dbname : localStorage.getItem("dbName")
      })
    };
    return this.http.post<any>(this.customersUrl + 'api/menu/menubyuser', mainumodel, httpOptions1);
  }

  cleargroupall(user: User): Observable<Mainmenumodel[]> {
    const httpOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('Token'),
        'Token': "" +localStorage.getItem('Token'),
        'dbName': localStorage.getItem('dbName')== null ? this.dbname : localStorage.getItem("dbName")
      })
    };
    return this.http.post<Mainmenumodel[]>(this.customersUrl + 'api/menu/cleargroupall', user, httpOptions1);
  }
  updatemenubyuser(mainumodel: addmenucomponentModel): Observable<any[]> {
    const httpOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('Token'),
        'Token': "" +localStorage.getItem('Token'),
        'dbName': localStorage.getItem('dbName')== null ? this.dbname : localStorage.getItem("dbName")
      })
    };
    return this.http.post<any[]>(this.customersUrl + 'api/menu/updatemenubyuser', mainumodel, httpOptions1);
  }

  deletemenubyuser(mainumodel: addmenucomponentModel): Observable<any[]> {
    const httpOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('Token'),
        'Token': "" +localStorage.getItem('Token'),
        'dbName': localStorage.getItem('dbName')== null ? this.dbname : localStorage.getItem("dbName")
      })
    };
    return this.http.post<any[]>(this.customersUrl + 'api/menu/deletemenubyuser', mainumodel, httpOptions1);
  }
  getmodulelst(mainumodel: addmenucomponentModel): Observable<any[]> {
    const httpOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('Token'),
        'Token': "" +localStorage.getItem('Token'),
        'dbName': localStorage.getItem('dbName')== null ? this.dbname : localStorage.getItem("dbName")
      })
    };
    return this.http.post<any[]>(this.customersUrl + 'api/menu/getmodulelst', mainumodel, httpOptions1);
  }
  getallmenudata(user: addmenucomponentModel): Observable<addmenucomponentModel> {
    const httpOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('Token'),
        'Token': "" +localStorage.getItem('Token'),
        'dbName': localStorage.getItem('dbName')== null ? this.dbname : localStorage.getItem("dbName")
      })
    };
    return this.http.post<addmenucomponentModel>(this.customersUrl + 'api/menu/getallmenudata', user, httpOptions1);
  }
  savemenubyuser(mainumodel: addmenucomponentModel): Observable<SaveSuccessModel> {
    const httpOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('Token'),
        'Token': "" +localStorage.getItem('Token'),
        'dbName': localStorage.getItem('dbName')== null ? this.dbname : localStorage.getItem("dbName")
      })
    };
    return this.http.post<SaveSuccessModel>(this.customersUrl + 'api/menu/savemenubyuserforjson', mainumodel, httpOptions1);
  }
  getmenuName(mainumodel: addmenucomponentModel): Observable<any[]> {
    const httpOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('Token'),
        'Token': "" +localStorage.getItem('Token'),
        'dbName': localStorage.getItem('dbName')== null ? this.dbname : localStorage.getItem("dbName")
      })
    };
    return this.http.post<any[]>(this.customersUrl + 'api/menu/menubymenname', mainumodel, httpOptions1);
  }

  SaveItemname(mainumodel: SearchMenuItemModel): Observable<SaveSuccessModel> {
    const httpOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('Token'),
        'Token': "" +localStorage.getItem('Token'),
        'dbName': localStorage.getItem('dbName')== null ? this.dbname : localStorage.getItem("dbName")
      })
    };
    return this.http.post<SaveSuccessModel>(this.customersUrl + 'api/menu/SaveItemname', mainumodel, httpOptions1);
  }

  // usergrouplst(model: employeeHomemodel): Observable<employeeHomemodel[]> {
  //   const httpOptions1 = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
  //       'Token': "" + localStorage.getItem('Token'),
  //       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
  //     })
  //   };
  //   return this.http.post<employeeHomemodel[]>(this.customersUrl + 'api/master/getusergroup', model, httpOptions1);
  // }

  getAllpages(mainumodel: addmenucomponentModel): Observable<SearchMenuItemModel[]> {
    const httpOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('Token'),
        'Token': "" +localStorage.getItem('Token'),
        'dbName': localStorage.getItem('dbName')== null ? this.dbname : localStorage.getItem("dbName")
      })
    };
    return this.http.post<SearchMenuItemModel[]>(this.customersUrl + 'api/menu/getAllitempage', mainumodel, httpOptions1);
  }

  getallActiveuser(user: User): Observable<DropDownModel[]> {
    const httpOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('Token'),
        'Token': "" +localStorage.getItem('Token'),
        'dbName': localStorage.getItem('dbName')== null ? this.dbname : localStorage.getItem("dbName")
      })
    };
    return this.http.post<DropDownModel[]>(this.customersUrl + 'api/menu/getallActiveuser', user, httpOptions1);
  }
  getAllgroup(user: User): Observable<SearchUserGroupModel[]> {
    const httpOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('Token'),
        'Token': "" +localStorage.getItem('Token'),
        'dbName': localStorage.getItem('dbName')== null ? this.dbname : localStorage.getItem("dbName")
      })
    };
    return this.http.post<SearchUserGroupModel[]>(this.customersUrl + 'api/menu/getAllgroup', user, httpOptions1);
  }


SaveUserGroup(mainumodel: SearchUserGroupModel): Observable<SaveSuccessModel> {
  const httpOptions1 = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('Token'),
      'Token': "" +localStorage.getItem('Token'),
        'dbName': localStorage.getItem('dbName')== null ? this.dbname : localStorage.getItem("dbName")
    })
  };
  return this.http.post<SaveSuccessModel>(this.customersUrl + 'api/menu/SaveUserGroup', mainumodel, httpOptions1);
}
deletegroup(mainumodel: SearchUserGroupModel): Observable<SaveSuccessModel> {
  const httpOptions1 = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('Token'),
      'Token': "" +localStorage.getItem('Token'),
        'dbName': localStorage.getItem('dbName')== null ? this.dbname : localStorage.getItem("dbName")
    })
  };
  return this.http.post<SaveSuccessModel>(this.customersUrl + 'api/menu/deletegroup', mainumodel, httpOptions1);
}
}