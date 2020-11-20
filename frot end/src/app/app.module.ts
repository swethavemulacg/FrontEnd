import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { FeedbackComponent } from './feedback/feedback.component';
import { GetFeedbacksComponent } from './get-feedbacks/get-feedbacks.component';
import { RefundsComponent } from './refunds/refunds.component';
import { RequestComponent } from './request/request.component';
import { MyFeedbackComponent } from './my-feedback/my-feedback.component';
import { EditFeedbackComponent } from './edit-feedback/edit-feedback.component';
import { RefundPoliciesComponent } from './refund-policies/refund-policies.component';
import { ViewPoliciesComponent } from './view-policies/view-policies.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { FeedbackSearchPipe } from './feedback-search.pipe';
import { MyPoliciesComponent } from './my-policies/my-policies.component';
import { HomeComponent } from './home/home.component';
import { UpdatePolicyComponent } from './update-policy/update-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    HeaderComponent,
    GetFeedbacksComponent,
    MyFeedbackComponent,
    EditFeedbackComponent,
    RefundPoliciesComponent,
    RefundsComponent,
    RequestComponent,
    ViewPoliciesComponent,
    RegisterComponent,
    LoginComponent,
    ResetPasswordComponent,
    AdminHomeComponent,
    UserHomeComponent,
    AddAdminComponent,
    FeedbackSearchPipe,
    MyPoliciesComponent,
    HomeComponent,
    UpdatePolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
