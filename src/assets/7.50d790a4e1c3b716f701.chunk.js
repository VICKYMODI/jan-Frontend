webpackJsonp([7],{"1K6I":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("WT6e"),i=n("Xjw4"),r=n("7DMc"),a=n("8nFs"),s=n("z6At"),c=n("oM2X"),l=n("nhD7"),d=n("qHcm"),u=n("bfOx"),m=n("R4TA"),g=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},h=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(i,r){function a(t){try{c(o.next(t))}catch(t){r(t)}}function s(t){try{c(o.throw(t))}catch(t){r(t)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,s)}c((o=o.apply(t,e||[])).next())})},v=this&&this.__generator||function(t,e){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(i=o[2&r[0]?"return":r[0]?"throw":"next"])&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[0,i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(t){r=[6,t],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}},f=r.FormControlDirective.prototype.ngOnChanges;r.FormControlDirective.prototype.ngOnChanges=function(){return this.form.nativeElement=this.valueAccessor._elementRef.nativeElement,f.apply(this,arguments)};var b=r.FormControlName.prototype.ngOnChanges;r.FormControlName.prototype.ngOnChanges=function(){var t=b.apply(this,arguments);try{return this.control.nativeElement=this.valueAccessor._elementRef?this.valueAccessor._elementRef.nativeElement:this.valueAccessor.elem.nativeElement,t}catch(t){console.log(t)}};var y=function(){function t(t,e,n,o,i){this.router=t,this.commonService=e,this.stateService=n,this.loginService=o,this.workflowServiceCustomer=i}return t.prototype.ngOnInit=function(){var t=this;this.commonService.clearAlertMessage(),this.commonService.adjustTopScrollBar(),this.landingPageForm=new r.FormGroup({zipcode:new r.FormControl("",[r.Validators.required,r.Validators.minLength(5),r.Validators.maxLength(5)])}),this.commonService.isCustomerRole()&&1==this.commonService.isCustomerRole()?(this.loginService.logoutWithoutRedirect().subscribe(function(e){t.commonService.removeAllCookie(),t.commonService.clearLocalStorage(),t.checkLoginAndRedirect()},function(e){t.commonService.removeAllCookie(),t.commonService.clearLocalStorage(),t.checkLoginAndRedirect()}),this.workflowServiceCustomer.cancleAllPendingObservables(),this.workflowServiceCustomer.resetRatePageVariables(),this.workflowServiceCustomer.resetSteps(),this.workflowServiceCustomer.removeWorkFlowFromLocalStorage()):this.checkLoginAndRedirect()},t.prototype.checkLoginAndRedirect=function(){if(this.commonService.checkLoginWithOutRedirect())switch(JSON.parse(this.commonService.getCookie(m.a.USER)).role){case 0:this.router.navigateByUrl("/"+m.b.ADMIN);break;case 1:case 2:this.router.navigateByUrl("/"+m.b.EMPLOYE);break;case 4:this.router.navigateByUrl("/"+m.b.CUSTOMER+"/"+m.b.CUSTOMER_QUOTE)}this.landingPageForm=new r.FormGroup({zipcode:new r.FormControl("",[r.Validators.required,r.Validators.minLength(5),r.Validators.maxLength(5)])}),setTimeout(function(){$(".selectpicker").selectpicker({selectOnTab:!0}),$("#zipcode").focus()},100)},t.prototype.agentLogin=function(){this.router.navigateByUrl("/"+m.b.LOGIN_PATH)},t.prototype.checkZipCodeIsValidOrNot=function(){return p(this,void 0,void 0,function(){var t=this;return v(this,function(e){return[2,new Promise(function(e){null!=t.landingPageForm.controls.zipcode.value&&""!=t.landingPageForm.controls.zipcode.value?t.stateService.findStateAndCountryByZipcode(t.landingPageForm.controls.zipcode.value).subscribe(function(n){return p(t,void 0,void 0,function(){return v(this,function(t){return null==n.data.zipCode.error?"TX"!==n.data.zipCode.state?(this.landingPageForm.controls.zipcode.setErrors({invalidState:!0}),e("")):e(""):(this.landingPageForm.controls.zipcode.setErrors({invalidZipCode:!0}),e("")),[2]})})},function(e){return p(t,void 0,void 0,function(){return v(this,function(t){return 0==e.status||JSON.parse(e._body).error,[2]})})}):e("")})]})})},t.prototype.submitForm=function(){return p(this,void 0,void 0,function(){var t,e,n=this;return v(this,function(o){switch(o.label){case 0:return this.commonService.showLoadingImageInButton("#btnGetQuote"),[4,this.checkZipCodeIsValidOrNot()];case 1:return o.sent(),this.landingPageForm.valid?(this.router.navigate(["/"+m.b.CUSTOMER+"/"+m.b.CUSTOMER_QUOTE],{queryParams:{zipcode:this.landingPageForm.controls.zipcode.value}}),setTimeout(function(){n.commonService.removeLoadingImageInButton("#btnGetQuote")},50*m.a.SELECT_PICKER_REFRESH_TIME)):(this.landingPageForm.valid||(t=Object.keys(this.landingPageForm.controls).map(function(t){return n.landingPageForm.controls[t]}).filter(function(t){return t.invalid})).length>0&&(e=t[0].nativeElement,$(e).focus()),this.commonService.removeLoadingImageInButton("#btnGetQuote")),[2]}})})},t.prototype.customerLogin=function(){this.commonService.showLoadingImageInButton("#btnContinuePreviousQuote"),this.router.navigateByUrl("/"+m.b.CUSTOMER+"/"+m.b.CUSTOMER_QUOTE+"/"+m.b.CUSTOMER_QUOTE_VERSIONS_PAGE),this.commonService.removeLoadingImageInButton("#btnContinuePreviousQuote")},t.prototype.SearchPolicyForMakePayment=function(){this.commonService.showLoadingImageInButton("#MakePayment"),this.router.navigateByUrl("/"+m.b.CUSTOMER+"/"+m.b.CUSTOMER_POLICY+"/"+m.b.CUSTOMER_SEARCH_POLICY_INFO_PAGE),this.commonService.removeLoadingImageInButton("#MakePayment")},t=g([Object(o.Component)({selector:"home-component",template:n("RbXt")}),h("design:paramtypes",[u.b,s.a,c.a,l.a,d.a])],t)}(),S=[{path:"",component:y}],P=u.c.forChild(S);n.d(e,"HomeModule",function(){return E});var C=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},E=function(){function t(){}return t=C([Object(o.NgModule)({imports:[i.CommonModule,r.FormsModule,r.ReactiveFormsModule,P,a.a],declarations:[y]})],t)}()},RbXt:function(t,e){t.exports='<header class="landing-header">\n\t<div class="container">\n\t\t<div class="row">\n\t\t\t<div class="col-sm-6 col-xs-6">\n\t\t\t\t<a href="javascript:void(0)">\n\t\t\t\t\t<img class="img-responsive landing-logo" src="../../../../assets/images/logo.png">\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class="col-sm-6 col-xs-6">\n\t\t\t\t<ul class="list-inline">\n\t\t\t\t\t<li><a href="tel:+18444397868"><img src="../../../../assets/images/landing-cell-phone.png"> 1-844-4EZ-QUOTE <br/> <span class="pull-right hidden-xs"> (439-7868)</span></a></li>\n\t\t\t\t\t<li><a href="javascript:void(0);" (click)="agentLogin()"><i class="fa fa-user"></i> <span class="hidden-xs">Login</span></a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</header>\n<section class="landing-block" style="">\n\t<div class="container">\n\t\t<div class="row">\n\t\t\t<div class="col-sm-8 ">\n\t\t\t\t<img src="../../../../assets/images/landing_page_arrow.png" class="arrow hidden-xs" />\n\t\t\t\t<h3>Get auto insurance</h3>\n\t\t\t\t<h4>You could save over <span>$518!</span></h4>\n\t\t\t\t<img src="../../../../assets/images/landing_page_bg_mobile.jpg" class="visible-xs" />\n\t\t\t</div>\n\t\t\t<div class="col-sm-4 col-xs-12 landing-block-inner">\n\t\t\t\t<form class="form-inline landing-form-div" [formGroup]="landingPageForm">\n    \t\t\t\t<div class="form-group">\n      \t\t\t\t\t<input type="tel" class="form-control" name="zipcode" id="zipcode"\n                            minlength="5" maxlength="5" placeholder="Enter Zip code" title="Enter Zip code"\n                            formControlName="zipcode" (blur)="checkZipCodeIsValidOrNot()"\n                            required="required"\n                            [ngClass]="{ \'quote-has-error\': ((landingPageForm.controls[\'zipcode\'].hasError(\'required\') || \n\t                \t\tlandingPageForm.controls[\'zipcode\'].hasError(\'invalidZipCode\') || \n\t                \t\tlandingPageForm.controls[\'zipcode\'].hasError(\'invalidState\')) && \n\t                \t\tlandingPageForm.controls[\'zipcode\'].touched) ||\n\t                  \t\tlandingPageForm.controls[\'zipcode\'].hasError(\'anotherZipcode\')}" \n\t                \tcontainerClass="errorTooltip" \n\t                \ttooltip="{{ (landingPageForm.controls[\'zipcode\'].hasError(\'required\') ? \'Zip code is required\' : \n\t                \t\t(landingPageForm.controls[\'zipcode\'].hasError(\'invalidZipCode\') ? \'Invalid zip code\' : \n\t                \t\t(landingPageForm.controls[\'zipcode\'].hasError(\'anotherZipcode\') ? errorMessage : \n\t                \t\t(landingPageForm.controls[\'zipcode\'].hasError(\'invalidState\') ? \'Please enter Texas Zipcode\' : \'Valid zip code\'))))}}" \n\t                \t[isDisabled]=" !landingPageForm.controls[\'zipcode\'].invalid || !landingPageForm.controls[\'zipcode\'].touched"\n                            />\n    \t\t\t\t</div>\n    \t\t\t\t<button type="submit" id="btnGetQuote" class="btn btn-orange" (click)="submitForm()">Get Quote</button>\n  \t\t\t\t</form>\n\t\t\t\t  <button id="btnContinuePreviousQuote" class="btn btn-gray" (click)="customerLogin()"><i class="fa fa-play"></i> Continue Previous Quote</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<footer class="customer-footer text-center">\n\t<div class="container">\n\t\t<div class="row">\n\t\t\t<div class="col-sm-12 col-md-10 col-md-offset-1">\n\t\t\t\t\t<ul class="list-inline">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\tNEED HELP?\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class="list-inline" style="margin: 10px;">\n\t\t\t\t\t\t\t<button id="MakePayment" class="btn btn-orange" (click)="SearchPolicyForMakePayment()">Make a Payment</button>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class="hidden-xs">OR</li>\n\t\t\t\t\t\t<li class="call-details"><img src="../../../../assets/images/customer-images/footer-call-img.png"> \n\t\t\t\t\t\t\t<a href="tel:+18444397868"><strong>1-844-4EZ-QUOTE</strong><strong class="text-right hidden-xs">(439-7868)</strong></a><span>Mon-Fri 9AM to 7 PM<br>Sat 10AM - 4 PM</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class="hidden-xs"><img src="../../../../assets/images/customer-images/footer-helper-img.png"></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<p>Copyright @ 2018</p>\n\t\t\t\t\t<p><a href="javascript:void(0);">AAAA Insurance Company Limited</a></p>\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</footer>\n'}});