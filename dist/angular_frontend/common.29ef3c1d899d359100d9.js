(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8oze":function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var i=function(){function t(){}return t.prototype.transform=function(t,n){return t.split(" ").map((function(t){return t.charAt(0)})).join("").toUpperCase()},t}()},"9EwZ":function(t,n,e){"use strict";e.d(n,"a",(function(){return l})),e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e("CcnG"),e("gIcY");var i=function(){function t(t){this.cdr=t,this.onChange=Function.prototype,this.onTouched=Function.prototype}return Object.defineProperty(t.prototype,"value",{get:function(){return this._value},set:function(t){this._value=t},enumerable:!0,configurable:!0}),t.prototype.writeValue=function(t){this._value=t,this.cdr.markForCheck()},t.prototype.registerOnChange=function(t){this.onChange=t},t.prototype.registerOnTouched=function(t){this.onTouched=t},t}(),l=function(){function t(t,n,e,i){this.el=t,this.cdr=n,this.group=e,this.renderer=i,this.onChange=Function.prototype,this.onTouched=Function.prototype}return Object.defineProperty(t.prototype,"value",{get:function(){return this.group?this.group.value:this._value},set:function(t){this.group?this.group.value=t:this._value=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"disabled",{get:function(){return this._disabled},set:function(t){this._disabled=t,this.setDisabledState(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isActive",{get:function(){return this.btnRadio===this.value},enumerable:!0,configurable:!0}),t.prototype.onClick=function(){this.el.nativeElement.attributes.disabled||!this.uncheckable&&this.btnRadio===this.value||(this.value=this.uncheckable&&this.btnRadio===this.value?void 0:this.btnRadio,this._onChange(this.value))},t.prototype.ngOnInit=function(){this.uncheckable=void 0!==this.uncheckable},t.prototype.onBlur=function(){this.onTouched()},t.prototype._onChange=function(t){if(this.group)return this.group.onTouched(),void this.group.onChange(t);this.onTouched(),this.onChange(t)},t.prototype.writeValue=function(t){this.value=t,this.cdr.markForCheck()},t.prototype.registerOnChange=function(t){this.onChange=t},t.prototype.registerOnTouched=function(t){this.onTouched=t},t.prototype.setDisabledState=function(t){t?this.renderer.setAttribute(this.el.nativeElement,"disabled","disabled"):this.renderer.removeAttribute(this.el.nativeElement,"disabled")},t}(),r=function(){function t(){}return t.forRoot=function(){return{ngModule:t,providers:[]}},t}()},"9bPP":function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return u})),e.d(n,"d",(function(){return a}));var i=e("CcnG"),l=e("rpEJ"),r=function(){return function(){this.closeOthers=!1,this.isAnimated=!1}}(),o=function(){function t(t){this.isAnimated=!1,this.groups=[],Object.assign(this,t)}return t.prototype.closeOtherPanels=function(t){this.closeOthers&&this.groups.forEach((function(n){n!==t&&(n.isOpen=!1)}))},t.prototype.addGroup=function(t){t.isAnimated=this.isAnimated,this.groups.push(t)},t.prototype.removeGroup=function(t){var n=this.groups.indexOf(t);-1!==n&&this.groups.splice(n,1)},t}(),a=function(){function t(t){this.isAnimated=!1,this.isOpenChange=new i.EventEmitter,this._isOpen=!1,this.accordion=t}return Object.defineProperty(t.prototype,"isOpen",{get:function(){return this._isOpen},set:function(t){var n=this;t!==this.isOpen&&(t&&this.accordion.closeOtherPanels(this),this._isOpen=t,Promise.resolve(null).then((function(){n.isOpenChange.emit(t)})).catch((function(t){console.log(t)})))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isBs3",{get:function(){return Object(l.e)()},enumerable:!0,configurable:!0}),t.prototype.ngOnInit=function(){this.panelClass=this.panelClass||"panel-default",this.accordion.addGroup(this)},t.prototype.ngOnDestroy=function(){this.accordion.removeGroup(this)},t.prototype.toggleOpen=function(){this.isDisabled||(this.isOpen=!this.isOpen)},t}(),u=function(){function t(){}return t.forRoot=function(){return{ngModule:t,providers:[r]}},t}()},BX4E:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"d",(function(){return s})),e.d(n,"a",(function(){return p})),e.d(n,"c",(function(){return c}));var i=e("CcnG"),l=(e("9bPP"),e("Ip0R")),r=e("yD1i"),o=e("ihYY"),a=i["ɵcrt"]({encapsulation:0,styles:["[_nghost-%COMP%]   .card-header.panel-enabled[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .card-header.panel-disabled[_ngcontent-%COMP%]   .btn.btn-link[_ngcontent-%COMP%]{cursor:default;text-decoration:none}"],data:{}});function u(t){return i["ɵvid"](0,[(t()(),i["ɵeld"](0,0,null,null,4,"button",[["class","btn btn-link"],["type","button"]],null,null,null,null,null)),i["ɵprd"](512,null,l["ɵNgClassImpl"],l["ɵNgClassR2Impl"],[i.IterableDiffers,i.KeyValueDiffers,i.ElementRef,i.Renderer2]),i["ɵdid"](2,278528,null,0,l.NgClass,[l["ɵNgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i["ɵpod"](3,{"text-muted":0}),(t()(),i["ɵted"](4,null,[" "," "]))],(function(t,n){var e=t(n,3,0,n.component.isDisabled);t(n,2,0,"btn btn-link",e)}),(function(t,n){t(n,4,0,n.component.heading)}))}function s(t){return i["ɵvid"](0,[(t()(),i["ɵeld"](0,0,null,null,14,"div",[["class","panel card"]],null,null,null,null,null)),i["ɵprd"](512,null,l["ɵNgClassImpl"],l["ɵNgClassR2Impl"],[i.IterableDiffers,i.KeyValueDiffers,i.ElementRef,i.Renderer2]),i["ɵdid"](2,278528,null,0,l.NgClass,[l["ɵNgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(t()(),i["ɵeld"](3,0,null,null,7,"div",[["class","panel-heading card-header"],["role","tab"]],null,[[null,"click"]],(function(t,n,e){var i=!0;return"click"===n&&(i=!1!==t.component.toggleOpen()&&i),i}),null,null)),i["ɵprd"](512,null,l["ɵNgClassImpl"],l["ɵNgClassR2Impl"],[i.IterableDiffers,i.KeyValueDiffers,i.ElementRef,i.Renderer2]),i["ɵdid"](5,278528,null,0,l.NgClass,[l["ɵNgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(t()(),i["ɵeld"](6,0,null,null,4,"div",[["class","panel-title"]],null,null,null,null,null)),(t()(),i["ɵeld"](7,0,null,null,3,"div",[["class","accordion-toggle"],["role","button"]],[[1,"aria-expanded",0]],null,null,null,null)),(t()(),i["ɵand"](16777216,null,null,1,null,u)),i["ɵdid"](9,16384,null,0,l.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),i["ɵncd"](null,0),(t()(),i["ɵeld"](11,0,null,null,3,"div",[["class","panel-collapse collapse"],["role","tabpanel"]],[[2,"collapse",null],[2,"in",null],[2,"show",null],[1,"aria-expanded",0],[1,"aria-hidden",0],[2,"collapsing",null]],null,null,null,null)),i["ɵdid"](12,8404992,null,0,r.a,[i.ElementRef,i.Renderer2,o.b],{isAnimated:[0,"isAnimated"],collapse:[1,"collapse"]},null),(t()(),i["ɵeld"](13,0,null,null,1,"div",[["class","panel-body card-block card-body"]],null,null,null,null,null)),i["ɵncd"](null,1)],(function(t,n){var e=n.component;t(n,2,0,"panel card",e.panelClass),t(n,5,0,"panel-heading card-header",e.isDisabled?"panel-disabled":"panel-enabled"),t(n,9,0,e.heading),t(n,12,0,e.isAnimated,!e.isOpen)}),(function(t,n){t(n,7,0,n.component.isOpen),t(n,11,0,i["ɵnov"](n,12).isCollapse,i["ɵnov"](n,12).isExpanded,i["ɵnov"](n,12).isExpanded,i["ɵnov"](n,12).isExpanded,i["ɵnov"](n,12).isCollapsed,i["ɵnov"](n,12).isCollapsing)}))}var p=i["ɵcrt"]({encapsulation:2,styles:[],data:{}});function c(t){return i["ɵvid"](0,[i["ɵncd"](null,0)],null,null)}},"CLR+":function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var i=e("AytR"),l=e("CcnG"),r=e("t/Na"),o=function(){function t(t){this.http=t,this.apiUrl=i.a.apiUrl}return t.prototype.getAll=function(){return this.http.get(this.apiUrl+"/api/teams")},t.prototype.getById=function(t){return this.http.get(this.apiUrl+"/api/teams/"+t)},t.prototype.create=function(t){return this.http.post(this.apiUrl+"/api/teams",t)},t.prototype.update=function(t){return this.http.put(this.apiUrl+"/api/teams/"+t.id,t)},t.prototype.delete=function(t){return this.http.delete(this.apiUrl+"/api/teams/"+t)},t.prototype.getTeamForTeamBoard=function(){return this.http.get(this.apiUrl+"/api/teams/teamboard")},t.prototype.import=function(t){return this.http.post(this.apiUrl+"/api/teams/import",t)},t.ngInjectableDef=l["ɵɵdefineInjectable"]({factory:function(){return new t(l["ɵɵinject"](r.c))},token:t,providedIn:"root"}),t}()},Juhs:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var i=e("AytR"),l=e("CcnG"),r=e("t/Na"),o=function(){function t(t){this.http=t,this.apiUrl=i.a.apiUrl}return t.prototype.getAll=function(){return this.http.get(this.apiUrl+"/api/incident")},t.prototype.getById=function(t){return this.http.get(this.apiUrl+"/api/incident/"+t)},t.prototype.create=function(t){return this.http.post(this.apiUrl+"/api/incident",t)},t.prototype.update=function(t){return this.http.put(this.apiUrl+"/api/incident/"+t.id,t)},t.prototype.delete=function(t){return this.http.delete(this.apiUrl+"/api/incident/"+t)},t.prototype.updateNotes=function(t){return this.http.put(this.apiUrl+"/api/incident/notes/"+t.id,t)},t.prototype.changeStatus=function(t){return this.http.post(this.apiUrl+"/api/incident/"+t.id+"/change-status",{status:t.status})},t.prototype.changeSeverity=function(t){return this.http.post(this.apiUrl+"/api/incident/"+t.id+"/change-severity",{priority:t.priority})},t.prototype.getIncidentPermission=function(t,n){return this.http.get(this.apiUrl+"/api/incident/"+t+"/permission/"+n,{})},t.prototype.getIncidentForKanban=function(t){return this.http.post(this.apiUrl+"/api/incident/kanban",t)},t.prototype.updateKanbanStatusList=function(t){return this.http.post(this.apiUrl+"/api/incident/update-kanban",t)},t.prototype.getIncidentForCalendar=function(t){return void 0===t&&(t={}),this.http.post(this.apiUrl+"/api/incident/calendar",t)},t.ngInjectableDef=l["ɵɵdefineInjectable"]({factory:function(){return new t(l["ɵɵinject"](r.c))},token:t,providedIn:"root"}),t}()},KKAd:function(t,n,e){"use strict";e.d(n,"a",(function(){return l})),e.d(n,"b",(function(){return i}));var i=function(){function t(){}var n;return n=t,t.isString=function(t){return"string"==typeof t||t instanceof String},t.caseInsensitiveSort=function(t,e){return n.isString(t)&&n.isString(e)?t.localeCompare(e):n.defaultCompare(t,e)},t.defaultCompare=function(t,n){return t===n?0:null==t?1:null==n?-1:t>n?1:-1},t.parseExpression=function(t){return(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split(".")},t.getValue=function(t,n){for(var e=0,i=n.length;e<i;++e){if(!t)return;var l=n[e];if(!(l in t))return;t="function"==typeof t[l]?t[l]():t[l]}return t},t.setValue=function(t,n,e){var i;for(i=0;i<e.length-1;i++)t=t[e[i]];t[e[i]]=n},t.prototype.transform=function(t,n,e,i,l){return void 0===i&&(i=!1),t?Array.isArray(n)?this.multiExpressionTransform(t,n,e,i,l):Array.isArray(t)?this.sortArray(t.slice(),n,e,i,l):"object"==typeof t?this.transformObject(Object.assign({},t),n,e,i,l):t:t},t.prototype.sortArray=function(t,e,i,l,r){var o,a=e&&-1!==e.indexOf(".");a&&(e=n.parseExpression(e)),o=r&&"function"==typeof r?r:l?n.caseInsensitiveSort:n.defaultCompare;var u=t.sort((function(t,i){return e?a?o(n.getValue(t,e),n.getValue(i,e)):t&&i?o(t[e],i[e]):o(t,i):o(t,i)}));return i?u.reverse():u},t.prototype.transformObject=function(t,e,i,l,r){var o=n.parseExpression(e),a=o.pop(),u=n.getValue(t,o);return Array.isArray(u)||(o.push(a),a=null,u=n.getValue(t,o)),u?(n.setValue(t,this.transform(u,a,i,l),o),t):t},t.prototype.multiExpressionTransform=function(t,n,e,i,l){var r=this;return void 0===i&&(i=!1),n.reverse().reduce((function(t,n){return r.transform(t,n,e,i,l)}),t)},t}(),l=function(){return function(){}}()},PMH4:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var i=e("AytR"),l=e("CcnG"),r=e("t/Na"),o=function(){function t(t){this.http=t,this.apiUrl=i.a.apiUrl}return t.prototype.getAll=function(){return this.http.get(this.apiUrl+"/api/estimate-setting")},t.prototype.create=function(t){return this.http.post(this.apiUrl+"/api/estimate-setting",t)},t.ngInjectableDef=l["ɵɵdefineInjectable"]({factory:function(){return new t(l["ɵɵinject"](r.c))},token:t,providedIn:"root"}),t}()},RQsH:function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));var i=e("CcnG"),l=function(){function t(t){this.renderer=t,this.isEditView=!1,this.updateValue=new i.EventEmitter}return t.prototype.ngOnInit=function(){},t.prototype.getValue=function(t){var n=this;if(null!=this.options&&this.selectedValue){var e=this.options.find((function(t){return t.value==n.selectedValue}));return null!=e?e.label:this.selectedValue}},t.prototype.showEditable=function(){var t=this;this.value=this.selectedValue,this.isEditView=!0,this.docEditUnlisten=this.renderer.listenGlobal("document","click",(function(n){t.container.nativeElement.contains(n.target)||t.showDetail()}))},t.prototype.save=function(){this.updateValue.emit(this.value)},t.prototype.showDetail=function(){this.isEditView=!1},t.prototype.select=function(t,n){n.isValueSelected=!0},t}()},XWna:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var i=e("AytR"),l=e("CcnG"),r=e("t/Na"),o=function(){function t(t){this.http=t,this.apiUrl=i.a.apiUrl}return t.prototype.getAll=function(){return this.http.get(this.apiUrl+"/api/departments")},t.prototype.getDepartmentRoles=function(){return this.http.get(this.apiUrl+"/api/get-department-roles")},t.prototype.getById=function(t){return this.http.get(this.apiUrl+"/api/departments/"+t)},t.prototype.create=function(t){return this.http.post(this.apiUrl+"/api/departments",t)},t.prototype.update=function(t){return this.http.put(this.apiUrl+"/api/departments/"+t.id,t)},t.prototype.delete=function(t){return this.http.delete(this.apiUrl+"/api/departments/"+t)},t.prototype.deleteDepartmentRole=function(t,n){return this.http.delete(this.apiUrl+"/api/departments/"+t+"/"+n)},t.prototype.getDepartmentDetail=function(t,n){return this.http.get(this.apiUrl+"/api/departments/"+t+"/"+n)},t.prototype.updateDepartmentDetail=function(t,n,e){return this.http.put(this.apiUrl+"/api/departments/"+t+"/"+n,e)},t.prototype.getDepartmentsClientsRoles=function(){return this.http.get(this.apiUrl+"/api/departments/clients-roles")},t.ngInjectableDef=l["ɵɵdefineInjectable"]({factory:function(){return new t(l["ɵɵinject"](r.c))},token:t,providedIn:"root"}),t}()},YgTD:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var i=e("AytR"),l=e("CcnG"),r=e("t/Na"),o=function(){function t(t){this.http=t,this.apiUrl=i.a.apiUrl}return t.prototype.getAll=function(){return this.http.get(this.apiUrl+"/api/roles")},t.prototype.getById=function(t){return this.http.get(this.apiUrl+"/api/roles/"+t)},t.prototype.create=function(t){return this.http.post(this.apiUrl+"/api/roles",t)},t.prototype.update=function(t){return this.http.put(this.apiUrl+"/api/roles/"+t.id,t)},t.prototype.delete=function(t){return this.http.delete(this.apiUrl+"/api/roles/"+t)},t.ngInjectableDef=l["ɵɵdefineInjectable"]({factory:function(){return new t(l["ɵɵinject"](r.c))},token:t,providedIn:"root"}),t}()},Z8vF:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var i=e("AytR"),l=e("CcnG"),r=e("t/Na"),o=function(){function t(t){this.http=t,this.apiUrl=i.a.apiUrl}return t.prototype.getAll=function(t){return this.http.get(this.apiUrl+"/api/holidays?year="+t)},t.prototype.getById=function(t){return this.http.get(this.apiUrl+"/api/holidays/"+t)},t.prototype.create=function(t){return this.http.post(this.apiUrl+"/api/holidays",t)},t.prototype.update=function(t){return this.http.put(this.apiUrl+"/api/holidays/"+t.id,t)},t.prototype.delete=function(t){return this.http.delete(this.apiUrl+"/api/holidays/"+t)},t.prototype.yearAllHolidays=function(t){return this.http.post(this.apiUrl+"/api/all-year-holidays",{year:t})},t.ngInjectableDef=l["ɵɵdefineInjectable"]({factory:function(){return new t(l["ɵɵinject"](r.c))},token:t,providedIn:"root"}),t}()},e58V:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var i=e("AytR"),l=e("CcnG"),r=e("t/Na"),o=function(){function t(t){this.http=t,this.apiUrl=i.a.apiUrl}return t.prototype.getAll=function(){return this.http.get(this.apiUrl+"/api/providers")},t.prototype.getById=function(t){return this.http.get(this.apiUrl+"/api/providers/"+t)},t.prototype.create=function(t){return this.http.post(this.apiUrl+"/api/providers",t)},t.prototype.update=function(t){return this.http.put(this.apiUrl+"/api/providers/"+t.id,t)},t.prototype.delete=function(t){return this.http.delete(this.apiUrl+"/api/providers/"+t)},t.ngInjectableDef=l["ɵɵdefineInjectable"]({factory:function(){return new t(l["ɵɵinject"](r.c))},token:t,providedIn:"root"}),t}()},eLYy:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var i=function(){function t(){}return t.prototype.transform=function(t,n){for(t=(t=t.replace("[","")).replace("]","");t.indexOf('"')>-1;)t=t.replace('"',"");return t.split(",")},t}()},"k94/":function(t,n,e){"use strict";var i=e("CcnG"),l=e("A7o+"),r=e("gIcY"),o=e("gMr2"),a=e("QpxQ"),u=e("Ip0R");e("RQsH"),e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return d}));var s=i["ɵcrt"]({encapsulation:0,styles:[["ng-select[required][_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{border-left:5px solid red}ng-select[required].selected[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{border-left:5px solid green}.ng-invalid[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%]{display:block}.editable-inline[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{margin-bottom:0;width:100%}.editable-inline[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{color:#fff!important;margin-left:10px;border-radius:50%;width:40px;height:40px;border:0}.editable-inline[_ngcontent-%COMP%]   .btn.btn-inline-submit[_ngcontent-%COMP%]{background-image:linear-gradient(to right,#25aae1,#2bb673);box-shadow:0 4px 15px 0 rgba(49,196,190,.75)}.editable-inline[_ngcontent-%COMP%]   .btn.btn-inline-cancel[_ngcontent-%COMP%]{background-image:linear-gradient(to right,#29323c,#4e4376);box-shadow:0 4px 15px 0 rgba(45,54,65,.75)}.editable-inline[_ngcontent-%COMP%]   .editable-label[_ngcontent-%COMP%]{cursor:pointer;text-decoration:none}.editable-inline[_ngcontent-%COMP%]   .editable-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{float:right;padding-right:10px;cursor:pointer;color:#999;display:none}.editable-inline[_ngcontent-%COMP%]   .editable-label[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{display:block}"]],data:{}});function p(t){return i["ɵvid"](0,[(t()(),i["ɵeld"](0,0,null,null,3,"span",[],null,null,null,null,null)),(t()(),i["ɵted"](1,null,["",""])),i["ɵpod"](2,{elementFor:0}),i["ɵpid"](131072,l.i,[l.j,i.ChangeDetectorRef])],null,(function(t,n){var e=n.component,l=i["ɵunv"](n,1,0,i["ɵnov"](n,3).transform("shared.inline_edit.error_messages.message1",t(n,2,0,e.elementFor)));t(n,1,0,l)}))}function c(t){return i["ɵvid"](0,[(t()(),i["ɵeld"](0,0,null,null,39,"form",[["class","form-inline editableForm"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(t,n,e){var l=!0,r=t.component;return"submit"===n&&(l=!1!==i["ɵnov"](t,2).onSubmit(e)&&l),"reset"===n&&(l=!1!==i["ɵnov"](t,2).onReset()&&l),"ngSubmit"===n&&(l=!1!==r.save()&&l),l}),null,null)),i["ɵdid"](1,16384,null,0,r.C,[],null,null),i["ɵdid"](2,4210688,[["form",4]],0,r.r,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),i["ɵprd"](2048,null,r.c,null,[r.r]),i["ɵdid"](4,16384,null,0,r.q,[[4,r.c]],null,null),(t()(),i["ɵeld"](5,0,null,null,1,"label",[["class","sr-only"],["for","txtField"]],null,null,null,null,null)),(t()(),i["ɵted"](6,null,["",""])),(t()(),i["ɵeld"](7,0,null,null,29,"div",[["class","input-group"]],null,null,null,null,null)),(t()(),i["ɵeld"](8,0,null,null,24,"ng-select",[["bindLabel","label"],["bindValue","value"],["class","ng-select"],["labelForId","txtField"],["role","listbox"]],[[1,"required",0],[2,"ng-select-single",null],[2,"ng-select-typeahead",null],[2,"ng-select-multiple",null],[2,"ng-select-taggable",null],[2,"ng-select-searchable",null],[2,"ng-select-opened",null],[2,"ng-select-disabled",null],[2,"ng-select-filtered",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"select"],[null,"keydown"]],(function(t,n,e){var l=!0,r=t.component;return"keydown"===n&&(l=!1!==i["ɵnov"](t,11).handleKeyDown(e)&&l),"ngModelChange"===n&&(l=!1!==(r.value=e)&&l),"select"===n&&(l=!1!==r.select(e,i["ɵnov"](t,11))&&l),l}),o.b,o.a)),i["ɵdid"](9,16384,null,0,r.x,[],{required:[0,"required"]},null),i["ɵprd"](1024,null,r.m,(function(t){return[t]}),[r.x]),i["ɵdid"](11,4964352,[["select_component",4]],12,a.a,[[8,null],[8,null],[8,null],a.b,a.d,i.ElementRef,i.ChangeDetectorRef,a.l],{bindLabel:[0,"bindLabel"],bindValue:[1,"bindValue"],placeholder:[2,"placeholder"],closeOnSelect:[3,"closeOnSelect"],selectOnTab:[4,"selectOnTab"],labelForId:[5,"labelForId"],searchable:[6,"searchable"],items:[7,"items"]},null),i["ɵqud"](335544320,2,{optionTemplate:0}),i["ɵqud"](335544320,3,{optgroupTemplate:0}),i["ɵqud"](335544320,4,{labelTemplate:0}),i["ɵqud"](335544320,5,{multiLabelTemplate:0}),i["ɵqud"](335544320,6,{headerTemplate:0}),i["ɵqud"](335544320,7,{footerTemplate:0}),i["ɵqud"](335544320,8,{notFoundTemplate:0}),i["ɵqud"](335544320,9,{typeToSearchTemplate:0}),i["ɵqud"](335544320,10,{loadingTextTemplate:0}),i["ɵqud"](335544320,11,{tagTemplate:0}),i["ɵqud"](335544320,12,{loadingSpinnerTemplate:0}),i["ɵqud"](603979776,13,{ngOptions:1}),i["ɵpod"](24,{elementFor:0}),i["ɵpid"](131072,l.i,[l.j,i.ChangeDetectorRef]),i["ɵprd"](1024,null,r.n,(function(t){return[t]}),[a.a]),i["ɵdid"](27,671744,null,0,r.s,[[2,r.c],[6,r.m],[8,null],[6,r.n]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),i["ɵprd"](2048,null,r.o,null,[r.s]),i["ɵdid"](29,16384,null,0,r.p,[[4,r.o]],null,null),i["ɵprd"](512,null,u["ɵNgClassImpl"],u["ɵNgClassR2Impl"],[i.IterableDiffers,i.KeyValueDiffers,i.ElementRef,i.Renderer2]),i["ɵdid"](31,278528,null,0,u.NgClass,[u["ɵNgClassImpl"]],{ngClass:[0,"ngClass"]},null),i["ɵpod"](32,{"is-invalid":0}),(t()(),i["ɵeld"](33,0,null,null,1,"button",[["class","btn btn-inline-submit"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(t()(),i["ɵeld"](34,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-check"]],null,null,null,null,null)),(t()(),i["ɵeld"](35,0,null,null,1,"button",[["class","btn btn-inline-cancel"],["type","button"]],null,[[null,"click"]],(function(t,n,e){var i=!0;return"click"===n&&(i=!1!==t.component.showDetail()&&i),i}),null,null)),(t()(),i["ɵeld"](36,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-times"]],null,null,null,null,null)),(t()(),i["ɵeld"](37,0,null,null,2,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(t()(),i["ɵand"](16777216,null,null,1,null,p)),i["ɵdid"](39,16384,null,0,u.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(t,n){var e=n.component;t(n,9,0,e.isRequired);var l=i["ɵunv"](n,11,2,i["ɵnov"](n,25).transform("shared.inline_edit.placeholders.placeholder2",t(n,24,0,e.elementFor)));t(n,11,0,"label","value",l,!1,!0,"txtField",!0,e.options),t(n,27,0,e.name,e.value);var r=t(n,32,0,i["ɵnov"](n,11).isValueSelected);t(n,31,0,r),t(n,39,0,i["ɵnov"](n,11).isValueSelected)}),(function(t,n){var e=n.component;t(n,0,0,i["ɵnov"](n,4).ngClassUntouched,i["ɵnov"](n,4).ngClassTouched,i["ɵnov"](n,4).ngClassPristine,i["ɵnov"](n,4).ngClassDirty,i["ɵnov"](n,4).ngClassValid,i["ɵnov"](n,4).ngClassInvalid,i["ɵnov"](n,4).ngClassPending),t(n,6,0,e.txtField),t(n,8,1,[i["ɵnov"](n,9).required?"":null,!i["ɵnov"](n,11).multiple,i["ɵnov"](n,11).typeahead,i["ɵnov"](n,11).multiple,i["ɵnov"](n,11).addTag,i["ɵnov"](n,11).searchable,i["ɵnov"](n,11).isOpen,i["ɵnov"](n,11).disabled,i["ɵnov"](n,11).filtered,i["ɵnov"](n,29).ngClassUntouched,i["ɵnov"](n,29).ngClassTouched,i["ɵnov"](n,29).ngClassPristine,i["ɵnov"](n,29).ngClassDirty,i["ɵnov"](n,29).ngClassValid,i["ɵnov"](n,29).ngClassInvalid,i["ɵnov"](n,29).ngClassPending]),t(n,33,0,!i["ɵnov"](n,2).valid)}))}function d(t){return i["ɵvid"](0,[i["ɵqud"](402653184,1,{container:0}),(t()(),i["ɵeld"](1,0,[[1,0],["container",1]],null,6,"div",[["class","editable-container editable-inline"]],null,null,null,null,null)),(t()(),i["ɵeld"](2,0,null,null,3,"div",[["class","editable-label"]],[[8,"hidden",0]],null,null,null,null)),(t()(),i["ɵted"](3,null,["","   "])),(t()(),i["ɵeld"](4,0,null,null,1,"span",[],null,[[null,"click"]],(function(t,n,e){var i=!0;return"click"===n&&(i=!1!==t.component.showEditable()&&i),i}),null,null)),(t()(),i["ɵeld"](5,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-pencil"]],null,null,null,null,null)),(t()(),i["ɵand"](16777216,null,null,1,null,c)),i["ɵdid"](7,16384,null,0,u.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(t,n){t(n,7,0,n.component.isEditView)}),(function(t,n){var e=n.component;t(n,2,0,e.isEditView),t(n,3,0,e.getValue(e.options))}))}},p1jQ:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return a}));var i=e("mrSG"),l=e("SN/6"),r=e("Ip0R"),o=function(t){function n(n){var e=t.call(this)||this;return e.locale=n,e}return i.__extends(n,t),n.prototype.month=function(t){return""+t.title},n.prototype.week=function(t){return"<b>"+new r.DatePipe(this.locale).transform(t.start,"h:m a",this.locale)+"</b> "+t.title},n.prototype.day=function(t){return"<b>"+new r.DatePipe(this.locale).transform(t.start,"h:m a",this.locale)+"</b> "+t.title},n}(l.e),a=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(n,t),n.prototype.dayViewHour=function(t){var n=t.date,e=t.locale;return new r.DatePipe(e).transform(n,"HH:mm",e)},n.prototype.weekViewHour=function(t){return this.dayViewHour({date:t.date,locale:t.locale})},n}(l.b)},pKUh:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return s}));var i=e("CcnG"),l=e("YAQW"),r=e("Ip0R"),o=i["ɵcrt"]({encapsulation:0,styles:["[_nghost-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item.disabled[_ngcontent-%COMP%]   a.disabled[_ngcontent-%COMP%]{cursor:default}"],data:{}});function a(t){return i["ɵvid"](0,[(t()(),i["ɵeld"](0,0,null,null,1,"span",[["class","bs-remove-tab"]],null,[[null,"click"]],(function(t,n,e){var i=!0,l=t.component;return"click"===n&&(e.preventDefault(),i=!1!==l.removeTab(t.parent.context.$implicit)&&i),i}),null,null)),(t()(),i["ɵted"](-1,null,[" ❌"]))],null,null)}function u(t){return i["ɵvid"](0,[(t()(),i["ɵeld"](0,0,null,null,9,"li",[],[[2,"active",null],[2,"disabled",null]],[[null,"keydown"]],(function(t,n,e){var i=!0;return"keydown"===n&&(i=!1!==t.component.keyNavActions(e,t.context.index)&&i),i}),null,null)),i["ɵprd"](512,null,r["ɵNgClassImpl"],r["ɵNgClassR2Impl"],[i.IterableDiffers,i.KeyValueDiffers,i.ElementRef,i.Renderer2]),i["ɵdid"](2,278528,null,0,r.NgClass,[r["ɵNgClassImpl"]],{ngClass:[0,"ngClass"]},null),i["ɵpad"](3,2),(t()(),i["ɵeld"](4,0,null,null,5,"a",[["class","nav-link"],["href","javascript:void(0);"]],[[1,"id",0],[2,"active",null],[2,"disabled",null]],[[null,"click"]],(function(t,n,e){var i=!0;return"click"===n&&(i=0!=(t.context.$implicit.active=!0)&&i),i}),null,null)),(t()(),i["ɵeld"](5,16777216,null,null,2,"span",[],null,null,null,null,null)),i["ɵdid"](6,16384,null,0,l.a,[i.ViewContainerRef],{ngTransclude:[0,"ngTransclude"]},null),(t()(),i["ɵted"](7,null,["",""])),(t()(),i["ɵand"](16777216,null,null,1,null,a)),i["ɵdid"](9,16384,null,0,r.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(t,n){var e=t(n,3,0,"nav-item",n.context.$implicit.customClass||"");t(n,2,0,e),t(n,6,0,n.context.$implicit.headingRef),t(n,9,0,n.context.$implicit.removable)}),(function(t,n){t(n,0,0,n.context.$implicit.active,n.context.$implicit.disabled),t(n,4,0,n.context.$implicit.id?n.context.$implicit.id+"-link":"",n.context.$implicit.active,n.context.$implicit.disabled),t(n,7,0,n.context.$implicit.heading)}))}function s(t){return i["ɵvid"](0,[(t()(),i["ɵeld"](0,0,null,null,4,"ul",[["class","nav"]],null,[[null,"click"]],(function(t,n,e){var i=!0;return"click"===n&&(i=!1!==e.preventDefault()&&i),i}),null,null)),i["ɵprd"](512,null,r["ɵNgClassImpl"],r["ɵNgClassR2Impl"],[i.IterableDiffers,i.KeyValueDiffers,i.ElementRef,i.Renderer2]),i["ɵdid"](2,278528,null,0,r.NgClass,[r["ɵNgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(t()(),i["ɵand"](16777216,null,null,1,null,u)),i["ɵdid"](4,278528,null,0,r.NgForOf,[i.ViewContainerRef,i.TemplateRef,i.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(t()(),i["ɵeld"](5,0,null,null,1,"div",[["class","tab-content"]],null,null,null,null,null)),i["ɵncd"](null,0)],(function(t,n){var e=n.component;t(n,2,0,"nav",e.classMap),t(n,4,0,e.tabs)}),null)}},sCkY:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("CcnG"),l=function(){function t(){this.maxSelectedItems=-1,this.checklistChange=new i.EventEmitter}return t.prototype.ngOnChanges=function(){this.isChecked=(this.checklist||[]).indexOf(this.checklistValue)>=0},t.prototype.triggerOnChange=function(t){var n,e=t.target,i=this.checklist||[];if(e&&e.checked)-1===this.maxSelectedItems||i.length<this.maxSelectedItems?(n=i.concat([this.checklistValue]),this.checklistChange.emit(n)):e.checked=!1;else{var l=i.indexOf(this.checklistValue);n=i.slice(0,l).concat(i.slice(l+1)),this.checklistChange.emit(n)}},t.decorators=[{type:i.Directive,args:[{host:{"(change)":"triggerOnChange($event)","[checked]":"isChecked"},selector:"[checklist]"}]}],t.ctorParameters=function(){return[]},t.propDecorators={checklist:[{type:i.Input}],checklistValue:[{type:i.Input}],maxSelectedItems:[{type:i.Input}],checklistChange:[{type:i.Output}]},t}();n.ChecklistDirective=l},wRq3:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("Ip0R"),l=e("CcnG"),r=e("sCkY"),o=function(){function t(){}return t.decorators=[{type:l.NgModule,args:[{declarations:[r.ChecklistDirective],exports:[r.ChecklistDirective],imports:[i.CommonModule]}]}],t.ctorParameters=function(){return[]},t}();n.ChecklistModule=o},wVZe:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var i=e("AytR"),l=e("CcnG"),r=e("t/Na"),o=function(){function t(t){this.http=t,this.apiUrl=i.a.apiUrl}return t.prototype.getAll=function(){return this.http.get(this.apiUrl+"/api/defect")},t.prototype.getById=function(t){return this.http.get(this.apiUrl+"/api/defect/"+t)},t.prototype.create=function(t){return this.http.post(this.apiUrl+"/api/defect",t)},t.prototype.update=function(t){return this.http.put(this.apiUrl+"/api/defect/"+t.id,t)},t.prototype.delete=function(t){return this.http.delete(this.apiUrl+"/api/defect/"+t)},t.prototype.updateNotes=function(t){return this.http.put(this.apiUrl+"/api/defect/notes/"+t.id,t)},t.prototype.changeStatus=function(t){return this.http.post(this.apiUrl+"/api/defect/"+t.id+"/change-status",{status:t.status})},t.prototype.changeSeverity=function(t){return this.http.post(this.apiUrl+"/api/defect/"+t.id+"/change-severity",{severity:t.severity})},t.prototype.getDefectPermission=function(t,n){return this.http.get(this.apiUrl+"/api/defect/"+t+"/permission/"+n,{})},t.prototype.getDefectForKanban=function(t){return this.http.post(this.apiUrl+"/api/defect/kanban",t)},t.prototype.updateKanbanStatusList=function(t){return this.http.post(this.apiUrl+"/api/defect/update-kanban",t)},t.prototype.getDefectForCalendar=function(t){return void 0===t&&(t={}),this.http.post(this.apiUrl+"/api/defect/calendar",t)},t.ngInjectableDef=l["ɵɵdefineInjectable"]({factory:function(){return new t(l["ɵɵinject"](r.c))},token:t,providedIn:"root"}),t}()},zCBn:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var i=e("AytR"),l=e("CcnG"),r=e("t/Na"),o=function(){function t(t){this.http=t,this.apiUrl=i.a.apiUrl}return t.prototype.create=function(t){return this.http.post(this.apiUrl+"/api/tasks",t)},t.prototype.getAll=function(){return this.http.get(this.apiUrl+"/api/tasks")},t.prototype.getById=function(t){return this.http.get(this.apiUrl+"/api/tasks/"+t)},t.prototype.update=function(t){return this.http.put(this.apiUrl+"/api/tasks/"+t.id,t)},t.prototype.delete=function(t){return this.http.delete(this.apiUrl+"/api/tasks/"+t)},t.prototype.getTaskActivity=function(t){return this.http.get(this.apiUrl+"/api/activities/Task/"+t)},t.prototype.changeStatus=function(t){return this.http.post(this.apiUrl+"/api/tasks/"+t.id+"/change-status",{status:t.status})},t.prototype.changePriority=function(t){return this.http.post(this.apiUrl+"/api/tasks/"+t.id+"/change-priority",{priority:t.priority})},t.prototype.updateNotes=function(t){return this.http.put(this.apiUrl+"/api/tasks/notes/"+t.id,t)},t.prototype.getParentTask=function(t){return this.http.get(this.apiUrl+"/api/tasks/"+t+"/parent-task",{})},t.prototype.getTaskForTaskBoard=function(t){return this.http.post(this.apiUrl+"/api/taskboard",t)},t.prototype.updateStatusList=function(t){return this.http.post(this.apiUrl+"/api/tasks/status-list",t)},t.prototype.getTaskPermission=function(t,n){return this.http.get(this.apiUrl+"/api/tasks/"+t+"/permission/"+n,{})},t.prototype.getCalendarTasks=function(){return this.http.get(this.apiUrl+"/api/tasks/calendar")},t.prototype.convertSprintTaskToTask=function(t){return this.http.post(this.apiUrl+"/api/tasks/convertsprinttask-to-task",t)},t.ngInjectableDef=l["ɵɵdefineInjectable"]({factory:function(){return new t(l["ɵɵinject"](r.c))},token:t,providedIn:"root"}),t}()}}]);