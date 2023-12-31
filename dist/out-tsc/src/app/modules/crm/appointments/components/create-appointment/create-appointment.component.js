import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { ClientService } from '../../../../../core/services/client.service';
import { ProviderService } from '../../../../../core/services/provider.service';
import { AppointmentsService } from '../../../../../core/services/appointments.service';
import * as moment from 'moment';
var CreateAppointmentComponent = /** @class */ (function () {
    function CreateAppointmentComponent(translate, bsCreateModalRef, formBuilder, toastr, clientService, providerService, appointmentsService) {
        this.translate = translate;
        this.bsCreateModalRef = bsCreateModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.clientService = clientService;
        this.providerService = providerService;
        this.appointmentsService = appointmentsService;
        this.event = new EventEmitter();
        this.minDate = new Date;
        this.clients = [];
        this.isFormSubmitted = false;
        this.isPageLoad = false;
    }
    CreateAppointmentComponent.prototype.ngOnInit = function () {
        this.onClose = new Subject();
        this.getClients();
    };
    CreateAppointmentComponent.prototype.loadForm = function () {
        this.createAppointmentForm = this.formBuilder.group({
            title: [null, [Validators.required, Validators.maxLength(255)]],
            client_id: [null],
            provider_id: [null, Validators.required],
            attendees: [null, Validators.required],
            start_date_time: [null, Validators.required],
            end_date_time: [null, Validators.required],
            location: [''],
            note: ['']
        });
        this.isPageLoad = true;
        this.checkAvailabilities(false);
    };
    Object.defineProperty(CreateAppointmentComponent.prototype, "appointmentControl", {
        get: function () { return this.createAppointmentForm.controls; },
        enumerable: false,
        configurable: true
    });
    CreateAppointmentComponent.prototype.startDateChange = function (startDate) {
        this.createAppointmentForm.patchValue({ end_date_time: new Date(startDate.value) });
        this.checkAvailabilities(true);
    };
    CreateAppointmentComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getAll()
            .subscribe(function (data) {
            _this.clients = data;
            _this.getProviders();
        });
    };
    CreateAppointmentComponent.prototype.getProviders = function () {
        var _this = this;
        this.providerService.getAll()
            .subscribe(function (data) {
            _this.providers = data;
            _this.loadForm();
        });
    };
    CreateAppointmentComponent.prototype.checkAvailabilities = function (isValid) {
        var _this = this;
        if (!this.createAppointmentForm.value.provider_id && isValid) {
            this.toastr.error(this.translate.instant('appointments.create.error_messages.message9'), this.translate.instant('appointments.title'));
            return false;
        }
        this.createAppointmentForm.value.start_date_time = moment(this.createAppointmentForm.value.start_date_time).format('YYYY-MM-DD HH:mm:ss');
        this.appointmentsService.getAppointmentAvailabilities(this.createAppointmentForm.value)
            .subscribe(function (data) {
            _this.availabileSlots = data;
        });
    };
    CreateAppointmentComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createAppointmentForm.invalid) {
            return;
        }
        this.createAppointmentForm.value.start_date_time = moment(this.createAppointmentForm.value.start_date_time).format('YYYY-MM-DD HH:mm:ss');
        this.createAppointmentForm.value.end_date_time = moment(this.createAppointmentForm.value.end_date_time).format('YYYY-MM-DD HH:mm:ss');
        this.appointmentsService.create(this.createAppointmentForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('appointments.messages.create'), _this.translate.instant('appointments.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        });
    };
    CreateAppointmentComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsCreateModalRef.hide();
    };
    CreateAppointmentComponent = __decorate([
        Component({
            selector: 'app-create-appointment',
            templateUrl: './create-appointment.component.html',
            styleUrls: ['./create-appointment.component.scss']
        }),
        __metadata("design:paramtypes", [TranslateService,
            BsModalRef,
            FormBuilder,
            ToastrService,
            ClientService,
            ProviderService,
            AppointmentsService])
    ], CreateAppointmentComponent);
    return CreateAppointmentComponent;
}());
export { CreateAppointmentComponent };
//# sourceMappingURL=create-appointment.component.js.map