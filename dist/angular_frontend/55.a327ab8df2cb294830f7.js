(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"5Llw":function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),u=e("0bV8"),i=function(l){return new u.a(l,"../assets/i18n/",".json")},a=function(){return function(){}}(),o=e("pMnS"),r=e("ZYCi"),d=e("Ip0R"),c=e("eajB"),p=e("lqqz"),m=e("NJnL"),s=e("A7o+"),f=e("CLR+"),g=e("AytR"),v=function(){function l(l,n){this.teamService=l,this.http=n,this.apiUrl=g.a.apiUrl,this.isPageLoaded=!1}return l.prototype.ngOnInit=function(){this.getTeamForTeamBoard()},l.prototype.getTeamForTeamBoard=function(){var l=this;this.teamService.getTeamForTeamBoard().subscribe((function(n){l.teams=n,l.isPageLoaded=!0}))},l}(),R=e("t/Na"),x=t["ɵcrt"]({encapsulation:0,styles:[[""]],data:{}});function b(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,0,null,null,0,"img",[["alt","Profile"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,t["ɵinlineInterpolate"](2,"",n.component.apiUrl,"/uploads/profile/",n.parent.parent.context.$implicit.avatar,""))}))}function I(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,0,null,null,0,"img",[["alt","Profile"],["src","../assets/img/profile_small.jpg"]],null,null,null,null,null))],null,null)}function C(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,16777216,null,null,8,"a",[["class","btn btn-profile-info rounded-circle text-dark popover-item images"],["placement","top"]],[[1,"target",0],[8,"href",4],[1,"aria-describedby",0]],[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["ɵnov"](l,1).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u}),null,null)),t["ɵdid"](1,671744,null,0,r.RouterLinkWithHref,[r.Router,r.ActivatedRoute,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["ɵpad"](2,2),t["ɵdid"](3,212992,null,0,c.c,[t.ViewContainerRef,p.a,c.a,t.ElementRef,t.Renderer2,m.a],{tooltip:[0,"tooltip"],placement:[1,"placement"]},null),t["ɵpid"](131072,s.i,[s.j,t.ChangeDetectorRef]),(l()(),t["ɵand"](16777216,null,null,1,null,b)),t["ɵdid"](6,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["ɵand"](16777216,null,null,1,null,I)),t["ɵdid"](8,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["ɵand"](0,null,null,0))],(function(l,n){var e=l(n,2,0,"/users/profile",n.parent.context.$implicit.id);l(n,1,0,e),l(n,3,0,t["ɵinlineInterpolate"](3,"",t["ɵunv"](n,3,0,t["ɵnov"](n,4).transform("teams.title2"))," - ",n.parent.context.$implicit.firstname," ",n.parent.context.$implicit.lastname,""),"top"),l(n,6,0,n.parent.context.$implicit.avatar&&n.parent.parent.context.$implicit.team_leader==n.parent.context.$implicit.id),l(n,8,0,!n.parent.context.$implicit.avatar&&n.parent.parent.context.$implicit.team_leader==n.parent.context.$implicit.id)}),(function(l,n){l(n,0,0,t["ɵnov"](n,1).target,t["ɵnov"](n,1).href,t["ɵnov"](n,3).ariaDescribedby)}))}function h(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),t["ɵand"](16777216,null,null,1,null,C)),t["ɵdid"](2,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,n.parent.context.$implicit.team_leader==n.context.$implicit.id)}),null)}function w(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,0,null,null,0,"img",[["alt","Profile"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,t["ɵinlineInterpolate"](2,"",n.component.apiUrl,"/uploads/profile/",n.parent.context.$implicit.avatar,""))}))}function N(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,0,null,null,0,"img",[["alt","Profile"],["src","../assets/img/profile_small.jpg"]],null,null,null,null,null))],null,null)}function y(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,16777216,null,null,10,"a",[["class","btn rounded-circle text-dark"],["placement","top"]],[[1,"target",0],[8,"href",4],[1,"aria-describedby",0]],[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["ɵnov"](l,4).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u}),null,null)),t["ɵprd"](512,null,d["ɵNgClassImpl"],d["ɵNgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["ɵdid"](2,278528,null,0,d.NgClass,[d["ɵNgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["ɵpod"](3,{"btn-profile-info popover-item":0,"btn-profile-danger":1,"popover-item":2}),t["ɵdid"](4,671744,null,0,r.RouterLinkWithHref,[r.Router,r.ActivatedRoute,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["ɵpad"](5,2),t["ɵdid"](6,212992,null,0,c.c,[t.ViewContainerRef,p.a,c.a,t.ElementRef,t.Renderer2,m.a],{tooltip:[0,"tooltip"],placement:[1,"placement"]},null),(l()(),t["ɵand"](16777216,null,null,1,null,w)),t["ɵdid"](8,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["ɵand"](16777216,null,null,1,null,N)),t["ɵdid"](10,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["ɵand"](0,null,null,0))],(function(l,n){var e=l(n,3,0,n.context.odd,n.context.even,0!=n.context.index);l(n,2,0,"btn rounded-circle text-dark",e);var u=l(n,5,0,"/users/profile",n.context.$implicit.id);l(n,4,0,u),l(n,6,0,t["ɵinlineInterpolate"](2,"",n.context.$implicit.firstname," ",n.context.$implicit.lastname,""),"top"),l(n,8,0,n.context.$implicit.avatar),l(n,10,0,!n.context.$implicit.avatar)}),(function(l,n){l(n,0,0,t["ɵnov"](n,4).target,t["ɵnov"](n,4).href,t["ɵnov"](n,6).ariaDescribedby)}))}function $(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t["ɵted"](1,null,["",""]))],null,(function(l,n){l(n,1,0,(null==n.parent.context.$implicit.project?null:n.parent.context.$implicit.project.length)||"0")}))}function k(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,0,null,null,27,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),t["ɵeld"](1,0,null,null,26,"div",[["class","card"]],null,null,null,null,null)),(l()(),t["ɵeld"](2,0,null,null,8,"div",[["class","team-boards-head d-flex justify-content-between mb-3"]],null,null,null,null,null)),(l()(),t["ɵeld"](3,0,null,null,1,"h4",[["class","sub-title"]],null,null,null,null,null)),(l()(),t["ɵted"](4,null,[""," - ",""])),(l()(),t["ɵeld"](5,0,null,null,2,"div",[["class","people-lists ml-4 mr-3"]],null,null,null,null,null)),(l()(),t["ɵand"](16777216,null,null,1,null,h)),t["ɵdid"](7,278528,null,0,d.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["ɵeld"](8,0,null,null,2,"div",[["class","people-lists"]],null,null,null,null,null)),(l()(),t["ɵand"](16777216,null,null,1,null,y)),t["ɵdid"](10,278528,null,0,d.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["ɵeld"](11,0,null,null,16,"div",[["class","team-details"]],null,null,null,null,null)),(l()(),t["ɵeld"](12,0,null,null,0,"p",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t["ɵeld"](13,0,null,null,14,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["ɵeld"](14,0,null,null,6,"div",[["class","col-lg-12 col-xl-6"]],null,null,null,null,null)),(l()(),t["ɵeld"](15,0,null,null,5,"div",[["class","team-details-box"]],null,null,null,null,null)),(l()(),t["ɵeld"](16,0,null,null,2,"h6",[],null,null,null,null,null)),(l()(),t["ɵted"](17,null,["",""])),t["ɵpid"](131072,s.i,[s.j,t.ChangeDetectorRef]),(l()(),t["ɵand"](16777216,null,null,1,null,$)),t["ɵdid"](20,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["ɵeld"](21,0,null,null,6,"div",[["class","col-lg-12 col-xl-6"]],null,null,null,null,null)),(l()(),t["ɵeld"](22,0,null,null,5,"div",[["class","team-details-box"]],null,null,null,null,null)),(l()(),t["ɵeld"](23,0,null,null,2,"h6",[],null,null,null,null,null)),(l()(),t["ɵted"](24,null,["",""])),t["ɵpid"](131072,s.i,[s.j,t.ChangeDetectorRef]),(l()(),t["ɵeld"](26,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t["ɵted"](27,null,["",""]))],(function(l,n){l(n,7,0,n.context.$implicit.members),l(n,10,0,n.context.$implicit.members),l(n,20,0,n.context.$implicit.project)}),(function(l,n){l(n,4,0,n.context.index+1,n.context.$implicit.team_name),l(n,12,0,n.context.$implicit.description),l(n,17,0,t["ɵunv"](n,17,0,t["ɵnov"](n,18).transform("projects.title"))),l(n,24,0,t["ɵunv"](n,24,0,t["ɵnov"](n,25).transform("teams.create.fields.members"))),l(n,27,0,n.context.$implicit.members.length)}))}function L(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["ɵand"](16777216,null,null,1,null,k)),t["ɵdid"](2,278528,null,0,d.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.teams)}),null)}function T(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["ɵeld"](1,0,null,null,4,"div",[["class","col-sm-12 text-center"]],null,null,null,null,null)),(l()(),t["ɵeld"](2,0,null,null,0,"img",[["src","assets/img/norecord-img.png"],["width","50"]],null,null,null,null,null)),(l()(),t["ɵeld"](3,0,null,null,2,"p",[["class","mt-1"]],null,null,null,null,null)),(l()(),t["ɵted"](4,null,["",""])),t["ɵpid"](131072,s.i,[s.j,t.ChangeDetectorRef])],null,(function(l,n){l(n,4,0,t["ɵunv"](n,4,0,t["ɵnov"](n,5).transform("common.empty_message.teams")))}))}function F(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,0,null,null,4,"section",[["class","team-boards"]],null,null,null,null,null)),(l()(),t["ɵand"](16777216,null,null,1,null,L)),t["ɵdid"](2,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["ɵand"](16777216,null,null,1,null,T)),t["ɵdid"](4,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,2,0,0!=(null==e.teams?null:e.teams.length)),l(n,4,0,0==(null==e.teams?null:e.teams.length))}),null)}function _(l){return t["ɵvid"](0,[(l()(),t["ɵand"](16777216,null,null,1,null,F)),t["ɵdid"](1,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,1,0,n.component.isPageLoaded)}),null)}function j(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,0,null,null,1,"app-team-board",[],null,null,null,_,x)),t["ɵdid"](1,114688,null,0,v,[f.a,R.c],null,null)],(function(l,n){l(n,1,0)}),null)}var D=t["ɵccf"]("app-team-board",v,j,{},{},[]),V=e("Xg1U"),O=e("z5nN"),P=e("ES0t"),A=e("atuK"),M=e("5m66"),E=e("gIcY"),K=e("OZfm"),S=e("a5Sb"),z=e("ARl4"),U=e("Xo4C"),B=e("M44Q"),q=e("DQlY"),Q=e("1EpG"),Z={permissions:{only:["teams_view"]}},G=function(){return function(){}}(),H=e("QpxQ"),J=e("PCNd");e.d(n,"TeamBoardModuleNgFactory",(function(){return Y}));var Y=t["ɵcmf"](a,[],(function(l){return t["ɵmod"]([t["ɵmpd"](512,t.ComponentFactoryResolver,t["ɵCodegenComponentFactoryResolver"],[[8,[o.a,D,V.a,O.a,O.b,P.a,A.e,A.a,A.c,A.b,A.d,M.b]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["ɵmpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[t.LOCALE_ID,[2,d["ɵangular_packages_common_common_a"]]]),t["ɵmpd"](4608,E.A,E.A,[]),t["ɵmpd"](4608,E.f,E.f,[]),t["ɵmpd"](4608,K.a,K.a,[]),t["ɵmpd"](4608,m.a,m.a,[t.NgZone,t.RendererFactory2,t.PLATFORM_ID]),t["ɵmpd"](4608,p.a,p.a,[t.ComponentFactoryResolver,t.NgZone,t.Injector,m.a,t.ApplicationRef]),t["ɵmpd"](4608,S.d,S.d,[R.c]),t["ɵmpd"](4608,S.c,S.c,[]),t["ɵmpd"](4608,z.q,z.q,[]),t["ɵmpd"](4608,z.v,z.v,[]),t["ɵmpd"](4608,z.x,z.x,[]),t["ɵmpd"](4608,z.a,z.a,[]),t["ɵmpd"](4608,z.h,z.h,[]),t["ɵmpd"](4608,z.d,z.d,[]),t["ɵmpd"](4608,z.k,z.k,[]),t["ɵmpd"](4608,z.n,z.n,[]),t["ɵmpd"](4608,z.w,z.w,[z.x,z.n]),t["ɵmpd"](4608,c.a,c.a,[]),t["ɵmpd"](5120,s.f,i,[R.c]),t["ɵmpd"](4608,s.c,s.e,[]),t["ɵmpd"](4608,s.h,s.d,[]),t["ɵmpd"](4608,s.b,s.a,[]),t["ɵmpd"](4608,s.j,s.j,[s.k,s.f,s.c,s.h,s.b,s.l,s.m]),t["ɵmpd"](4608,d.DatePipe,d.DatePipe,[t.LOCALE_ID]),t["ɵmpd"](4608,U.a,U.a,[]),t["ɵmpd"](4608,B.a,B.a,[]),t["ɵmpd"](4608,q.b,q.b,[t.RendererFactory2,p.a]),t["ɵmpd"](1073742336,d.CommonModule,d.CommonModule,[]),t["ɵmpd"](1073742336,r.RouterModule,r.RouterModule,[[2,r["ɵangular_packages_router_router_a"]],[2,r.Router]]),t["ɵmpd"](1073742336,G,G,[]),t["ɵmpd"](1073742336,c.d,c.d,[]),t["ɵmpd"](1073742336,q.e,q.e,[]),t["ɵmpd"](1073742336,s.g,s.g,[]),t["ɵmpd"](1073742336,E.z,E.z,[]),t["ɵmpd"](1073742336,E.j,E.j,[]),t["ɵmpd"](1073742336,E.w,E.w,[]),t["ɵmpd"](1073742336,H.c,H.c,[]),t["ɵmpd"](1073742336,K.d,K.d,[]),t["ɵmpd"](1073742336,S.a,S.a,[]),t["ɵmpd"](1073742336,Q.NgxPermissionsModule,Q.NgxPermissionsModule,[]),t["ɵmpd"](1073742336,z.r,z.r,[]),t["ɵmpd"](1073742336,z.g,z.g,[]),t["ɵmpd"](1073742336,J.a,J.a,[]),t["ɵmpd"](1073742336,a,a,[]),t["ɵmpd"](1024,r.ROUTES,(function(){return[[{path:"",canActivate:[Q.NgxPermissionsGuard],component:v,data:Z}]]}),[]),t["ɵmpd"](256,H.d,H.e,[]),t["ɵmpd"](256,s.m,void 0,[]),t["ɵmpd"](256,s.l,void 0,[])])}))}}]);