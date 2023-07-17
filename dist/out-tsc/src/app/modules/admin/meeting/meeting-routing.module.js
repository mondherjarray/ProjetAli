import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { MeetingComponent } from './pages/meeting/meeting.component';
import { MeetingDetailComponent } from './pages/meeting-detail/meeting-detail.component';
var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                canActivate: [NgxPermissionsGuard],
                component: MeetingComponent,
                data: {
                    permissions: {
                        only: ['admin', 'super_admin', 'meetings_view']
                    }
                }
            },
            {
                path: 'detail/:id',
                component: MeetingDetailComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    breadcrumbs: {
                        text: "common.detail",
                        icon: "fa fa-briefcase",
                        hasParams: true,
                        show: true,
                        isHome: true
                    },
                    permissions: {
                        only: ['admin', 'super_admin', 'meetings_view']
                    }
                }
            },
            {
                path: ':statusId',
                component: MeetingComponent
            }
        ]
    }
];
var MeetingRoutingModule = /** @class */ (function () {
    function MeetingRoutingModule() {
    }
    MeetingRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], MeetingRoutingModule);
    return MeetingRoutingModule;
}());
export { MeetingRoutingModule };
//# sourceMappingURL=meeting-routing.module.js.map