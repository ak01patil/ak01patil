import { Injectable } from "@angular/core";
// import { common } from "./common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Mainmenumodel } from "../_models/Mainmenumodel";
import { Observable } from "rxjs";
import { User } from "../_models/user";
import { common } from "./common";

// import { departmentModel } from "../Master/department/departmentModel";
// import { unitMeasureModel } from "../Master/unitMeasure/unitMeasureModel";
// import { designationModel } from "../Master/designation/designationModel";
// import { userHomemodel } from "../Master/user/userHomemodel";


// import { activityModel } from "../Master/activity/activityModel";
// import { commonMasterModel } from "../Master/commonMaster/commonMasterModel";
// import { UserActivityModel } from "../Master/userActivityAccess/userActivityModel";
// import { workflowrolemodel } from "../Master/workflow-role/workflow-rolemainpageModel";
// import { paramconfmodel } from "../Master/paramConf/paramconfmodel";
// import { microbeMastermodel } from "../Master/microbe-master/microbeMastermodel";
// import { activityparamModel } from "../Master/activityparam/activityparamModel";
// import { isolatemodel } from "../Transactions/Isolate/isolatemodel";
// import { newactivityparamModel } from "../Master/activityparam/newactivityparamModel";





@Injectable({ providedIn: 'root' })
export class MasterServices {

 
  
  DeleteWorkflowrole(user: any) {
    throw new Error('Method not implemented.');
  }
  // private handleError!: HandleError;
  private url: String = common.s1;
  private customersUrl = this.url;
  private dbname: any = "dbtsepl";

  constructor(private http: HttpClient) {
  }


  getmenubyuser(user: User): Observable<Mainmenumodel[]> {
    const httpOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('Token'),
        'Token': "" + localStorage.getItem('Token'),
        'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")

      })
    };
    return this.http.post<Mainmenumodel[]>(this.customersUrl + 'api/menu/menuofUserforjosn', user, httpOptions1);
  }

//   saveunitofmeasure(model: unitMeasureModel): Observable<unitMeasureModel[]> {
//     const httpOptions1 = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//         'Token': "" + localStorage.getItem('Token'),
//         'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//       })
//     };
//     return this.http.post<unitMeasureModel[]>(this.customersUrl + 'api/master/saveunitofmeasure', model, httpOptions1);
//   }
//   getunitofmeasureByID(user: User): Observable<unitMeasureModel> {
//     const httpOptions1 = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//         'Token': "" + localStorage.getItem('Token'),
//         'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//       })
//     };
//     return this.http.post<unitMeasureModel>(this.customersUrl + 'api/master/getunitofmesureById', user, httpOptions1);
//   }

//   saveDepartment(model: departmentModel): Observable<departmentModel[]> {
//     const httpOptions1 = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//         'Token': "" + localStorage.getItem('Token'),
//         'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//       })
//     };
//     return this.http.post<departmentModel[]>(this.customersUrl + 'api/master/savedepartment', model, httpOptions1);
//   }

//   getdepartmentById(user: User): Observable<departmentModel> {
//     const httpOptions1 = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//         'Token': "" + localStorage.getItem('Token'),
//         'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//       })
//     };
//     return this.http.post<departmentModel>(this.customersUrl + 'api/master/getdepartmentById', user, httpOptions1);
//   }
//   getSearchForDepartmentHome(model: departmentModel): Observable<departmentModel[]> {
//     const httpOptions1 = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//         'Token': "" + localStorage.getItem('Token'),
//         'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//       })
//     };
//     return this.http.post<departmentModel[]>(this.customersUrl + 'api/master/getSearchForDepartmentHome', model, httpOptions1);
//   }

//   DeleteDepartment(user: User): Observable<departmentModel[]> {
//     const httpOptions1 = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//         'Token': "" + localStorage.getItem('Token'),
//         'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//       })
//     };
//     return this.http.post<departmentModel[]>(this.customersUrl + 'api/master/dltdepartment', user, httpOptions1);
//   }

//   DltStatusForDepatrment(model: departmentModel): Observable<departmentModel[]> {
//     const httpOptions1 = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//         'Token': "" + localStorage.getItem('Token'),
//         'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//       })
//     };
//     return this.http.post<departmentModel[]>(this.customersUrl + 'api/master/departmentdelstatus', model, httpOptions1);
//   }

//   getDepartment(model: departmentModel): Observable<departmentModel[]> {
//     const httpOptions1 = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//         'Token': "" + localStorage.getItem('Token'),
//         'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//       })
//     };
//     return this.http.post<departmentModel[]>(this.customersUrl + 'api/master/getdepartment', model, httpOptions1);
//   }


//   savedesignation(model: designationModel): Observable<designationModel> {
//     const httpOptions1 = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//         'Token': "" + localStorage.getItem('Token'),
//         'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//       })
//     };
//     return this.http.post<designationModel>(this.customersUrl + 'api/master/savedesignation', model, httpOptions1);
//   }
//   getdesignationbyid(model: designationModel): Observable<designationModel> {
//     const httpOptions1 = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//         'Token': "" + localStorage.getItem('Token'),
//         'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//       })
//     };
//     return this.http.post<designationModel>(this.customersUrl + 'api/master/getdesignation', model, httpOptions1);
//   }
  
//   getdesignation(model: designationModel): Observable<designationModel[]> {
//     const httpOptions1 = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//         'Token': "" + localStorage.getItem('Token'),
//         'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//       })
//     };
//     return this.http.post<designationModel[]>(this.customersUrl + 'api/master/getdesignationall', model, httpOptions1);
//   }

//   DesignationchnageStatus(model: designationModel): Observable<designationModel[]> {
//     const httpOptions1 = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//         'Token': "" + localStorage.getItem('Token'),
//         'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//       })
//     };

//     return this.http.post<designationModel[]>(this.customersUrl + 'api/master/degination', model, httpOptions1);
//   }

//   getSearchForDesignation(model: designationModel): Observable<designationModel[]> {

//     const httpOptions1 = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//         'Token': "" + localStorage.getItem('Token'),
//         'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//       })
//     };

//     return this.http.post<designationModel[]>(this.customersUrl + 'api/master/getSearchForDesignation', model, httpOptions1);

//   }
//   getempmasterfroEmp(user: userHomemodel): Observable<userHomemodel[]> {
//     const httpOptions1 = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//         'Token': "" + localStorage.getItem('Token'),
//         'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//       })
//     };
//     return this.http.post<userHomemodel[]>(this.customersUrl + 'api/master/getempmasterfroEmp', user, httpOptions1);

//   }

//   getSearchForEmployeeMaster(userHomemodel: userHomemodel): Observable<userHomemodel[]> {
//     const httpOptions1 = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//         'Token': "" + localStorage.getItem('Token'),
//         'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//       })
//     };
//     return this.http.post<userHomemodel[]>(this.customersUrl + 'api/master/getSearchForEmployeeMaster', userHomemodel, httpOptions1);

//   }

//   EmployeeDeletestatus(model: userHomemodel): Observable<userHomemodel[]> {
//     const httpOptions1 = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//         'Token': "" + localStorage.getItem('Token'),
//         'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//       })
//     };
//     return this.http.post<userHomemodel[]>(this.customersUrl + 'api/master/Employeechangedeletstatus', model, httpOptions1);

//   }

//   getunitofmeasure(user: unitMeasureModel): Observable<unitMeasureModel[]> {
//     const httpOptions1 = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//         'Token': "" + localStorage.getItem('Token'),
//         'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//       })
//     };
//     return this.http.post<unitMeasureModel[]>(this.customersUrl + 'api/master/getunitofmeasure', user, httpOptions1);

//   }
//   unitmesuredelstatus(model: unitMeasureModel): Observable<unitMeasureModel[]> {
//     const httpOptions1 = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//         'Token': "" + localStorage.getItem('Token'),
//         'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//       })
//     };
//     return this.http.post<unitMeasureModel[]>(this.customersUrl + 'api/master/unitmesuredelstatus', model, httpOptions1);
//   }
//   getSearchForUnitOfMeasur(user: unitMeasureModel): Observable<unitMeasureModel[]> {
//     const httpOptions1 = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//         'Token': "" + localStorage.getItem('Token'),
//         'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//       })
//     };
//     return this.http.post<unitMeasureModel[]>(this.customersUrl + 'api/master/getSearchForUnitOfMeasur', user, httpOptions1);
    
//   }
//     saveEmployeeMaster(user: userHomemodel): Observable<userHomemodel[]> {
//       const httpOptions1 = {
//         headers: new HttpHeaders({
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//           'Token': "" + localStorage.getItem('Token'),
//           'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//         })
//       };
//       return this.http.post<userHomemodel[]>(this.customersUrl + 'api/master/saveemployeemaster', user, httpOptions1);
//     }
//     getEmployeeById(user: User): Observable<userHomemodel> {
//       const httpOptions1 = {
//         headers: new HttpHeaders({
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//           'Token': "" + localStorage.getItem('Token'),
//           'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//         })
//       };
//       return this.http.post<userHomemodel>(this.customersUrl + 'api/master/getEmployeedByid', user, httpOptions1);
//     }

//     getDepartmentforEmpMaster(model: departmentModel): Observable<departmentModel[]> {
//       const httpOptions1 = {
//         headers: new HttpHeaders({
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//           'Token': "" + localStorage.getItem('Token'),
//           'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//         })
//       };
//       return this.http.post<departmentModel[]>(this.customersUrl + 'api/master/getdepartmentForEmployee', model, httpOptions1);
//     }
//     getDesignationforEmpMaster(model: designationModel): Observable<designationModel[]> {
//       const httpOptions1 = {
//         headers: new HttpHeaders({
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//           'Token': "" + localStorage.getItem('Token'),
//           'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//         })
//       };
//       return this.http.post<designationModel[]>(this.customersUrl + 'api/master/getdesignationall', model, httpOptions1);
//     }
//     getband(model: userHomemodel): Observable<userHomemodel[]> {
//       const httpOptions1 = {
//         headers: new HttpHeaders({
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//           'Token': "" + localStorage.getItem('Token'),
//           'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//         })
//       };
//       return this.http.post<userHomemodel[]>(this.customersUrl + 'api/master/getbandForTask', model, httpOptions1);
//     }

//     getactivityById(user: User): Observable<activityModel> {
//       const httpOptions1 = {
//         headers: new HttpHeaders({
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//           'Token': "" + localStorage.getItem('Token'),
//           'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//         })
//       };
//           return this.http.post<activityModel>(this.customersUrl + 'api/master/getactivityById', user, httpOptions1);
//     }

//     changePassword(model: userHomemodel): Observable<userHomemodel[]> {
//       const httpOptions1 = {
//         headers: new HttpHeaders({
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//           'Token': "" + localStorage.getItem('Token'),
//           'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//         })
//       };
//       return this.http.post<userHomemodel[]>(this.customersUrl + 'api/auth/changePassword', model, httpOptions1);

//     }
  
//     saveactivity(model: activityModel): Observable<activityModel[]> {
//       const httpOptions1 = {
//         headers: new HttpHeaders({
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//           'Token': "" + localStorage.getItem('Token'),
//           'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//         })
//       };
//       return this.http.post<activityModel[]>(this.customersUrl + 'api/master/saveactivity', model, httpOptions1);
//     }


//   saveworkrole(model: workflowrolemodel): Observable<workflowrolemodel[]> {
//     const httpOptions1 = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//         'Token': "" + localStorage.getItem('Token'),
//         'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//       })
//     };
//     return this.http.post<workflowrolemodel[]>(this.customersUrl + 'api/master/saveworkrole', model, httpOptions1);
//   }

//   getallworkflow(model: workflowrolemodel): Observable<workflowrolemodel[]> {
//     const httpOptions1 = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//         'Token': "" + localStorage.getItem('Token'),
//         'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//       })
//     };
//     return this.http.post<workflowrolemodel[]>(this.customersUrl + 'api/master/getallworkflow', model, httpOptions1);
//   }


//     getactivity(model: activityModel): Observable<activityModel[]> {
//       const httpOptions1 = {
//         headers: new HttpHeaders({
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//           'Token': "" + localStorage.getItem('Token'),
//           'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//         })
//       };
//       return this.http.post<activityModel[]>(this.customersUrl + 'api/master/getactivity', model, httpOptions1);
//     }

//     DltStatusForActivity(model: activityModel): Observable<activityModel[]> {
//       const httpOptions1 = {
//         headers: new HttpHeaders({
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//           'Token': "" + localStorage.getItem('Token'),
//           'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//         })
//       };
//       return this.http.post<activityModel[]>(this.customersUrl + 'api/master/activitydelstatus', model, httpOptions1);
//     }

//     getSearchForActivityHome(model: activityModel): Observable<activityModel[]> {
//       const httpOptions1 = {
//         headers: new HttpHeaders({
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//           'Token': "" + localStorage.getItem('Token'),
//           'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//         })
//       };
//       return this.http.post<activityModel[]>(this.customersUrl + 'api/master/getSearchForActivityHome', model, httpOptions1);
//     }
     

//     getworkflowbyid(model: workflowrolemodel): Observable<workflowrolemodel> {
//       const httpOptions1 = {
//         headers: new HttpHeaders({
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//           'Token': "" + localStorage.getItem('Token'),
//           'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//         })
//       };
//       return this.http.post<workflowrolemodel>(this.customersUrl + 'api/master/getworkflowbyid', model, httpOptions1);
//     }
//     Deleteworkflowrole(model:workflowrolemodel): Observable<workflowrolemodel> {
//       const httpOptions1 = {
//         headers: new HttpHeaders({
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//           'Token': "" + localStorage.getItem('Token'),
//           'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//         })
//       };
//       return this.http.post<workflowrolemodel>(this.customersUrl + 'api/master/workflowtdelstatus', model, httpOptions1);
//     }
//     getSearchForcommonMaster(user: commonMasterModel): Observable<commonMasterModel[]> {
//       const httpOptions1 = {
//         headers: new HttpHeaders({
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//           'Token': "" + localStorage.getItem('Token'),
//           'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//         })
//       };
//       return this.http.post<commonMasterModel[]>(this.customersUrl + 'api/master/getSearchForcommonMaster', user, httpOptions1);
      
//     }
//     getCommonMaster(user: commonMasterModel): Observable<commonMasterModel[]> {
//       const httpOptions1 = {
//         headers: new HttpHeaders({
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//           'Token': "" + localStorage.getItem('Token'),
//           'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//         })
//       };
//       return this.http.post<commonMasterModel[]>(this.customersUrl + 'api/master/getCommonMaster', user, httpOptions1);
    
//     }
//     savecommonmastertype(model: commonMasterModel): Observable<commonMasterModel> {
//       const httpOptions1 = {
//         headers: new HttpHeaders({
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//           'Token': "" + localStorage.getItem('Token'),
//           'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//         })
//       };
//       return this.http.post<commonMasterModel>(this.customersUrl + 'api/master/savecommonmastertype', model, httpOptions1);
//     }
    
//     getCommasterType(user: User): Observable<commonMasterModel[]> {
//       const httpOptions1 = {
//         headers: new HttpHeaders({
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//           'Token': "" + localStorage.getItem('Token'),
//           'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//         })
//       };
//       return this.http.post<commonMasterModel[]>(this.customersUrl + 'api/master/getCommasterType', user, httpOptions1);
    
//     }
//     getmasterttypeByID(user: User): Observable<commonMasterModel> {
//       const httpOptions1 = {
//         headers: new HttpHeaders({
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//           'Token': "" + localStorage.getItem('Token'),
//           'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//         })
//       };
//       return this.http.post<commonMasterModel>(this.customersUrl + 'api/master/getmasterttypeByID', user, httpOptions1);
//     }
    
// getcommasterTypeByID(user: User): Observable<commonMasterModel> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<commonMasterModel>(this.customersUrl + 'api/master/getcommasterTypeByID', user, httpOptions1);
// }
// savecommonmaster(model: commonMasterModel): Observable<commonMasterModel> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<commonMasterModel>(this.customersUrl + 'api/master/savecommonmaster', model, httpOptions1);
// }
// getcommasterByID(user: User): Observable<commonMasterModel> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<commonMasterModel>(this.customersUrl + 'api/master/getcommasterByID', user, httpOptions1);
// }
// gettypeformasterByID(user: User): Observable<commonMasterModel> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<commonMasterModel>(this.customersUrl + 'api/master/gettypeformasterByID', user, httpOptions1);
// }
// changeStatusForCommonMaster(model: commonMasterModel): Observable<commonMasterModel[]> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<commonMasterModel[]>(this.customersUrl + 'api/master/changeStatusForCommonMaster', model, httpOptions1);
// }
// changeStatusForCommonMasterType(model: commonMasterModel): Observable<commonMasterModel[]> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<commonMasterModel[]>(this.customersUrl + 'api/master/changeStatusForCommonMasterType', model, httpOptions1);
// }
// // getAllActivities(model: UserActivityModel): Observable<UserActivityModel[]> {
// //   const httpOptions1 = {
// //     headers: new HttpHeaders({
// //       'Content-Type': 'application/json',
// //       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
// //     })
// //   };
// //   return this.http.post<UserActivityModel[]>(this.customersUrl + 'api/master/getactivity', model, httpOptions1);
// // }
// getresourceByroleId(user: UserActivityModel): Observable<UserActivityModel[]> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//       return this.http.post<UserActivityModel[]>(this.customersUrl + 'api/master/getresourceByroleId', user, httpOptions1);
// }
// getAllactivity(usrActivityModel: UserActivityModel): Observable<UserActivityModel[]> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<UserActivityModel[]>(this.customersUrl + 'api/master/getAllactivity', usrActivityModel, httpOptions1);
// }
// saveUserActivityAceess(user: UserActivityModel): Observable<UserActivityModel> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//     })
//   };
//   return this.http.post<UserActivityModel>(this.customersUrl + 'api/master/saveUserActivityAceess', user, httpOptions1);
// }
// getCheckboxes(usrActivityModel: UserActivityModel): Observable<UserActivityModel[]> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<UserActivityModel[]>(this.customersUrl + 'api/master/getCheckboxes', usrActivityModel, httpOptions1);
// }


// saveParameters(model: paramconfmodel): Observable<paramconfmodel[]> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<paramconfmodel[]>(this.customersUrl + 'api/master/saveParameters', model, httpOptions1);
// }
// getParamconf(model: activityparamModel): Observable<paramconfmodel> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<paramconfmodel>(this.customersUrl + 'api/master/getParamconf', model, httpOptions1);
// }
// getParamconfNew(model: newactivityparamModel): Observable<paramconfmodel> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<paramconfmodel>(this.customersUrl + 'api/master/getParamconf', model, httpOptions1);
// }
// getmicrobemasterhome(model: microbeMastermodel): Observable<microbeMastermodel[]> {
//   const httpOptions1 = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//     'Token': "" + localStorage.getItem('Token'),
//     'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//   })
// };
// return this.http.post<microbeMastermodel[]>(this.customersUrl + 'api/master/getmicrobemasterhome', model, httpOptions1);
// }
    
// getCommasterTypeformicrobe(user: User): Observable<commonMasterModel[]> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<commonMasterModel[]>(this.customersUrl + 'api/master/getCommasterTypeformicrobe', user, httpOptions1);

// }

// getCommonMastermicrobe(user: commonMasterModel): Observable<commonMasterModel[]> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<commonMasterModel[]>(this.customersUrl + 'api/master/getCommonMastermicrobe', user, httpOptions1);
//   // getCommonMaster
// }

// saveMicrobemaster(model: microbeMastermodel): Observable<microbeMastermodel[]> {
//   const httpOptions1 = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//     'Token': "" + localStorage.getItem('Token'),
//     'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//   })
// };
// return this.http.post<microbeMastermodel[]>(this.customersUrl + 'api/master/saveMicrobemaster', model, httpOptions1);
// }
// saveActivityParameters(model: activityparamModel): Observable<activityparamModel> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<activityparamModel>(this.customersUrl + 'api/master/saveActivityParameters', model, httpOptions1);
// }
// saveActivityParametersNew(model: newactivityparamModel): Observable<activityparamModel> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<activityparamModel>(this.customersUrl + 'api/master/saveActivityParameters', model, httpOptions1);
// }
// // savesampleinverd

// getmicrobemasterById(user: microbeMastermodel): Observable<microbeMastermodel> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<microbeMastermodel>(this.customersUrl + 'api/master/getmicrobemasterById', user, httpOptions1);
// }


// deletemicrobeStatus(model: microbeMastermodel): Observable<microbeMastermodel[]> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<microbeMastermodel[]>(this.customersUrl + 'api/master/deletemicrobeStatus', model, httpOptions1);

// }

// getSearchForMicrobemaster(microbeMastermodel: microbeMastermodel): Observable<microbeMastermodel[]> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<microbeMastermodel[]>(this.customersUrl + 'api/master/getSearchForMicrobemaster', microbeMastermodel, httpOptions1);

// }

// getacttransactionByid(user: User): Observable<activityModel> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<activityModel>(this.customersUrl + 'api/master/getacttransactionByid', user, httpOptions1);
// }


// getCommonMastermicrobeforGenus(user: commonMasterModel): Observable<commonMasterModel[]> {

//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };


//   return this.http.post<commonMasterModel[]>(this.customersUrl + 'api/master/getCommonMastermicrobeforGenus', user, httpOptions1);
//   // getCommonMaster
// }


// getCommonMasterforspecies(user: commonMasterModel): Observable<commonMasterModel[]> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<commonMasterModel[]>(this.customersUrl + 'api/master/getCommonMasterforspecies', user, httpOptions1);
 

// }
// getCommasterTypefordropdown(user: User): Observable<commonMasterModel[]> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<commonMasterModel[]>(this.customersUrl + 'api/master/getCommasterTypefordropdown', user, httpOptions1);

// }

// getactivityforparamconf(model: activityModel): Observable<activityModel[]> {

//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };

//   return this.http.post<activityModel[]>(this.customersUrl + 'api/master/getactivityforparamconf', model, httpOptions1);
// }

// getCommasterTypefordependacy(user: User): Observable<commonMasterModel[]> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<commonMasterModel[]>(this.customersUrl + 'api/master/getCommasterTypefordependacy', user, httpOptions1);

// }

// gettypeformasterByIDfordependancy(user: commonMasterModel): Observable<commonMasterModel> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<commonMasterModel>(this.customersUrl + 'api/master/gettypeformasterByIDfordependancy', user, httpOptions1);
// }
// getCommonMasterfordependancy(commonMasterModel: commonMasterModel): Observable<commonMasterModel[]> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<commonMasterModel[]>(this.customersUrl + 'api/master/getCommonMasterfordependancy', commonMasterModel, httpOptions1);

// }
// savecommonmasterdependancy(model: commonMasterModel): Observable<commonMasterModel> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<commonMasterModel>(this.customersUrl + 'api/master/savecommonmasterdependancy', model, httpOptions1);
// }
// // savecommonmastersavecommonmaster


// getLevel2ActivityByid(user: User): Observable<activityModel> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<activityModel>(this.customersUrl + 'api/master/getLevel2ActivityByid', user, httpOptions1);
// }
// getActivityParametersByid(user: User): Observable<activityModel> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<activityModel>(this.customersUrl + 'api/master/getActivityParametersByid', user, httpOptions1);
// }
// // getAccessDetails(user: UserActivityModel): Observable<UserActivityModel> {
// //   const httpOptions1 = {
// //     headers: new HttpHeaders({
// //       'Content-Type': 'application/json',
// //       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
// //     })
// //   };
// //   return this.http.post<UserActivityModel>(this.customersUrl + 'api/master/getAccessDetails', user, httpOptions1);
// // }
// getAllactivityByid(usrActivityModel: UserActivityModel): Observable<UserActivityModel[]> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<UserActivityModel[]>(this.customersUrl + 'api/master/getAllactivityByid', usrActivityModel, httpOptions1);
// }

// usergrouplst(model: userHomemodel): Observable<userHomemodel[]> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<userHomemodel[]>(this.customersUrl + 'api/master/getusergroup', model, httpOptions1);
// }
// getUsractById(user: User): Observable<UserActivityModel[]> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<UserActivityModel[]>(this.customersUrl + 'api/master/getUsractById', user, httpOptions1);
// }


}
