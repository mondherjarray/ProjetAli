import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { SettingService } from '../../../../core/services/setting.service';
var EmailNotificationsComponent = /** @class */ (function () {
    function EmailNotificationsComponent(translate, toastr, settingService) {
        this.translate = translate;
        this.toastr = toastr;
        this.settingService = settingService;
    }
    EmailNotificationsComponent.prototype.ngOnInit = function () { };
    EmailNotificationsComponent.prototype.saveNotification = function () {
        var _this = this;
        this.settingService.create(this.settings)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('settings.messages.update'), _this.translate.instant('settings.title'));
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], EmailNotificationsComponent.prototype, "settings", void 0);
    EmailNotificationsComponent = __decorate([
        Component({
            selector: 'app-email-notifications',
            templateUrl: './email-notifications.component.html',
            styleUrls: ['./email-notifications.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            ToastrService,
            SettingService])
    ], EmailNotificationsComponent);
    return EmailNotificationsComponent;
}());
export { EmailNotificationsComponent };
//# sourceMappingURL=email-notifications.component.js.map