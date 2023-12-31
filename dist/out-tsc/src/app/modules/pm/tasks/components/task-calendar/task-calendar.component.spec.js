import { async, TestBed } from '@angular/core/testing';
import { TaskCalendarComponent } from './task-calendar.component';
describe('TaskCalendarComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TaskCalendarComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TaskCalendarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=task-calendar.component.spec.js.map