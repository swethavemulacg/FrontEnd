import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookingRefundDTO } from './refund-policies/refund-policies.component';
import { Refund } from './view-policies/view-policies.component';

@Injectable({
  providedIn: 'root'
})
export class RefundServiceService {

  myURL = 'http://localhost:8080/api';
  myURL1 ="http://localhost:8084/api";

  constructor(private http : HttpClient) { }

    postData(AirlineRefundPolicy){
      return this.http.post<any>(`${this.myURL}/refundpolicy`, AirlineRefundPolicy);
    }

    getData(){
      return this.http.get<any>(`${this.myURL}/all`);
    }

    deletePolicy(id:number){
      return this.http.delete<any>(`${this.myURL}/policies/`+id);
    }

    getRefundData(bookingId: number){
      return this.http.get<BookingRefundDTO[]>(`${this.myURL1}/booking/`+bookingId);
    }

    getPolicyByPolicyId(policyId: number){
      return this.http.get<any>(`${this.myURL1}/`+policyId);
    }

    updatePolicy(policy: Refund){
      return this.http.put<any>(`${this.myURL1}/policies/`+policy.policyID,policy);
    }

}
