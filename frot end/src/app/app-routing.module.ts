import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AuthGuard } from './authguard';
import { AuthGuardLogin } from './authguard-login';
import { EditFeedbackComponent } from './edit-feedback/edit-feedback.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GetFeedbacksComponent } from './get-feedbacks/get-feedbacks.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyFeedbackComponent } from './my-feedback/my-feedback.component';
import { MyPoliciesComponent } from './my-policies/my-policies.component';
import { RefundPoliciesComponent } from './refund-policies/refund-policies.component';
import { RefundsComponent } from './refunds/refunds.component';
import { RegisterComponent } from './register/register.component';
import { RequestComponent } from './request/request.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UpdatePolicyComponent } from './update-policy/update-policy.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ViewPoliciesComponent } from './view-policies/view-policies.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path:'', redirectTo:'/home', pathMatch:"full"
    },
    {
      path:'add-feedback', component:FeedbackComponent, data:{roles :['ROLE_USER']}, canActivate : [AuthGuard]
    },
    {
      path:'get-feedbacks', component:GetFeedbacksComponent, data:{roles :['ROLE_ADMIN']}, canActivate : [AuthGuard]
    },
    {
      path:'my-feedback', component:MyFeedbackComponent, data:{roles :['ROLE_USER']}, canActivate : [AuthGuard]
    },
    {
      path:'edit-feedback', component:EditFeedbackComponent, data:{roles :['ROLE_USER']}, canActivate : [AuthGuard]
    },
    {
      path:'refund-policies', component:RefundPoliciesComponent, data:{roles :['ROLE_USER']}, canActivate : [AuthGuard]
    },
    {
      path:'request-refund', component:RequestComponent, data:{roles :['ROLE_ADMIN']}, canActivate : [AuthGuard]
    },
    {
      path:'refunds', component:RefundsComponent, data:{roles :['ROLE_USER']}, canActivate : [AuthGuard]
    },
    {
      path:'view-policies', component:ViewPoliciesComponent, data:{roles :['ROLE_ADMIN']}, canActivate : [AuthGuard]
    },
    {
      path:'policies', component:MyPoliciesComponent, data:{roles :['ROLE_USER']}, canActivate : [AuthGuard]
    },
    {
      path:'login-form', component:LoginComponent , canActivate : [AuthGuardLogin]
    },
    {
      path:'register-form', component:RegisterComponent
    },
    {
      path:'admin-form', component:AddAdminComponent, data:{roles :['ROLE_ADMIN']}, canActivate : [AuthGuard]
    },
    {
      path:'reset-form', component:ResetPasswordComponent
    },
    {
      path:'home', component:HomeComponent
    },
    {
      path:'admin-home', component:AdminHomeComponent
    },
    {
      path:'user-home', component:UserHomeComponent
    },
    {
      path:'update-policy/:policyId',component:UpdatePolicyComponent, data:{roles :['ROLE_ADMIN']}, canActivate : [AuthGuard]
    }
  ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
