import { Injectable } from "@angular/core";
import { common } from "./common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../_models/user";

import { SaveSuccessModel } from "../_models/SaveSucessModel";

@Injectable()
export class TransactionServices {
 

  private url: String = common.s1;
  private customersUrl = this.url;
  private dbname: any = "dbtsepl";
  constructor(private http: HttpClient) {
  }

  checklogin(user: User): Observable<SaveSuccessModel> {
    const httpOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('Token'),
        'Token': "" + localStorage.getItem('Token'),
        'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName") 

      })
    };
    return this.http.post<SaveSuccessModel>(this.customersUrl + 'api/transaction/checklogin', user, httpOptions1);
  }



//   savesampleinverd(model: sampleInwardmodel): Observable<sampleInwardmodel[]> {
//       const httpOptions1 = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//         'Token': "" + localStorage.getItem('Token'),
//         'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//       })
//     };
//     return this.http.post<sampleInwardmodel[]>(this.customersUrl + 'api/transaction/savesampleinverd', model, httpOptions1);
//   }
//   getsamphome(model: sampleInwardmodel): Observable<sampleInwardmodel[]> {
//     const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<sampleInwardmodel[]>(this.customersUrl + 'api/transaction/getsamphome', model, httpOptions1);
// }
  
// getsapleivertById(user: User): Observable<sampleInwardmodel> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<sampleInwardmodel>(this.customersUrl + 'api/transaction/getsapleivertById', user, httpOptions1);
// }


// changesampleinStatus(model: sampleInwardmodel): Observable<sampleInwardmodel[]> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<sampleInwardmodel[]>(this.customersUrl + 'api/transaction/changesampleinStatus', model, httpOptions1);

// }



// getSearchForsampleinward(sampleInwardmodel: sampleInwardmodel): Observable<sampleInwardmodel[]> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<sampleInwardmodel[]>(this.customersUrl + 'api/transaction/getSearchForsampleinward', sampleInwardmodel, httpOptions1);

// }



// getOtpForIsolated(user: isolatemodel): Observable<isolatemodel[]> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<isolatemodel[]>(this.customersUrl + 'api/transaction/getOtpForIsolated', user, httpOptions1);
// }


// getoverwrightotp(user: isolatemodel): Observable<isolatemodel> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<isolatemodel>(this.customersUrl + 'api/transaction/getoverwrightotp', user, httpOptions1);
// }



// saveisolatecodereplacetootp(model: isolatemodel): Observable<isolatemodel[]> {
//   const httpOptions1 = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//     'Token': "" + localStorage.getItem('Token'),
//     'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//   })
// };
// return this.http.post<isolatemodel[]>(this.customersUrl + 'api/transaction/saveisolatecodereplacetootp', model, httpOptions1);
// }
// saveisolatecode(model: isolatemodel): Observable<isolatemodel[]> {
//   const httpOptions1 = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//     'Token': "" + localStorage.getItem('Token'),
//     'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//   })
// };
// return this.http.post<isolatemodel[]>(this.customersUrl + 'api/transaction/saveisolatecode', model, httpOptions1);
// }


// getfindisolate(isolatemodel: isolatemodel): Observable<isolatemodel[]> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<isolatemodel[]>(this.customersUrl + 'api/transaction/getfindisolate', isolatemodel, httpOptions1);

// }

// getactitransctionhome(model: isolatemodel): Observable<isolatemodel[]> {
//   const httpOptions1 = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//     'Token': "" + localStorage.getItem('Token'),
//     'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//   })
// };
// return this.http.post<isolatemodel[]>(this.customersUrl + 'api/transaction/getactitransctionhome', model, httpOptions1);
// }

// getSearchForactitransaction(model: isolatemodel): Observable<isolatemodel[]> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<isolatemodel[]>(this.customersUrl + 'api/transaction/getSearchForactitransaction', model, httpOptions1);

// }
// getmicrobeidentificationByid(user: User): Observable<microbeMastermodel> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<microbeMastermodel>(this.customersUrl + 'api/transaction/getmicrobeidentificationByid', user, httpOptions1);
// }
// savemicrobidentification(model: microbeMastermodel): Observable<microbeMastermodel> {
//   const httpOptions1 = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//     'Token': "" + localStorage.getItem('Token'),
//     'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//   })
// };
// return this.http.post<microbeMastermodel>(this.customersUrl + 'api/transaction/savemicrobidentification', model, httpOptions1);
// }

// getMasterData(user: commonMasterModel): Observable<commonMasterModel[]> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<commonMasterModel[]>(this.customersUrl + 'api/transaction/getMasterData', user, httpOptions1);

// }
// getDependancyData(user: commonMasterModel): Observable<commonMasterModel[]> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<commonMasterModel[]>(this.customersUrl + 'api/transaction/getDependancyData', user, httpOptions1);

// }

// getLevel2ActivityHome(model: isolatemodel): Observable<isolatemodel[]> {
//   const httpOptions1 = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//     'Token': "" + localStorage.getItem('Token'),
//     'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//   })
// };
// return this.http.post<isolatemodel[]>(this.customersUrl + 'api/transaction/getLevel2ActivityHome', model, httpOptions1);
// }
// findisolaecodeforplantassesment(isolatemodel: isolatemodel): Observable<isolatemodel[]> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<isolatemodel[]>(this.customersUrl + 'api/transaction/findisolaecodeforplantassesment', isolatemodel, httpOptions1);


//   // getfindisolate
// }
// saveLevel2ActivityPlantassisscode(model: isolatemodel): Observable<isolatemodel[]> {
//   const httpOptions1 = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//     'Token': "" + localStorage.getItem('Token'),
//     'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//   })
// };
// return this.http.post<isolatemodel[]>(this.customersUrl + 'api/transaction/saveLevel2ActivityPlantassisscode', model, httpOptions1);
// // saveisolatecode
// }

// getSearchForLevel2actitransaction(model: isolatemodel): Observable<isolatemodel[]> {
//   const httpOptions1 = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//       'Token': "" + localStorage.getItem('Token'),
//       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//     })
//   };
//   return this.http.post<isolatemodel[]>(this.customersUrl + 'api/transaction/getSearchForLevel2actitransaction', model, httpOptions1);
//   // getSearchForactitransaction
// }


// getSearchAllForMicrobeHome(model: searchMicrobemodel): Observable<searchMicrobemodel[]> {
//   const httpOptions1 = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//     'Token': "" + localStorage.getItem('Token'),
//     'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//   })
// };
// return this.http.post<searchMicrobemodel[]>(this.customersUrl + 'api/transaction/getSearchAllForMicrobeHome', model, httpOptions1);
// }
// getParamiterForSearchMicrobe(model: searchMicrobemodel): Observable<searchMicrobemodel> {
//   const httpOptions1 = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//     'Token': "" + localStorage.getItem('Token'),
//     'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//   })
// };
// return this.http.post<searchMicrobemodel>(this.customersUrl + 'api/transaction/getParamiterForSearchMicrobe', model, httpOptions1);
// }

// // getParametersByid(model: searchMicrobemodel): Observable<searchMicrobemodel> {
// //   const httpOptions1 = {
// //     headers: new HttpHeaders({
// //       'Content-Type': 'application/json',
// //       'Authorization': 'Bearer ' + localStorage.getItem('Token'),
// //       'Token': "" + localStorage.getItem('Token'),
// //       'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
// //     })
// //   };
// //   return this.http.post<searchMicrobemodel>(this.customersUrl + 'api/transaction/getParametersByid', model, httpOptions1);
// // }
// postSearchmic(model: searchMicrobemodel): Observable<searchMicrobemodel[]> {
//   const httpOptions1 = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//     'Token': "" + localStorage.getItem('Token'),
//     'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//   })
// };
// return this.http.post<searchMicrobemodel[]>(this.customersUrl + 'api/transaction/postSearchmic', model, httpOptions1);
// }
// postSearchmicBySamplenov(model: isolatemodel): Observable<searchMicrobemodel[]> {
//   const httpOptions1 = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer ' + localStorage.getItem('Token'),
//     'Token': "" + localStorage.getItem('Token'),
//     'dbName': localStorage.getItem("dbName") == null ? this.dbname : localStorage.getItem("dbName")
//   })
// };
// return this.http.post<searchMicrobemodel[]>(this.customersUrl + 'api/transaction/postSearchmicBySamplenov', model, httpOptions1);
// }


}