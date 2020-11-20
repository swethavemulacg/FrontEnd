import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RefundServiceService } from '../refund-service.service';
import { Refund } from '../view-policies/view-policies.component';

@Component({
  selector: 'app-update-policy',
  templateUrl: './update-policy.component.html',
  styleUrls: ['./update-policy.component.css']
})
export class UpdatePolicyComponent implements OnInit {

  refundData: Refund;

  constructor(private activatedRouter: ActivatedRoute, private service: RefundServiceService, private router: Router) { }

  ngOnInit(): void {
    const id = +this.activatedRouter.snapshot.paramMap.get("policyId");
    this.service.getPolicyByPolicyId(id).subscribe(data => {
      console.log(data);
      this.refundData = data
    }, err => console.log(err));
    console.log(this.refundData);
  }

  updateData(form: NgForm) {
    console.log(form.value);
    this.service.updatePolicy(form.value).subscribe(data => {
      console.log(data);
      this.router.navigate(['/view-policies']);
    }
      , err => console.log(err));

  }

  
}
