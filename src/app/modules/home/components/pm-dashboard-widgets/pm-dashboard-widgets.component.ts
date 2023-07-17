import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from './../../../../core/services/dashboard.service';

@Component({
	selector: 'app-pm-dashboard-widgets',
	templateUrl: './pm-dashboard-widgets.component.html',
	styleUrls: ['./pm-dashboard-widgets.component.scss']
})

export class PmDashboardWidgetsComponent implements OnInit {
	@Input() dashboardLists;
	@Input() dashboardLists1;
	@Input() loginUser;
	@Input() dashboardSettings;
	centre:any;
	constructor(
		private dashboardService: DashboardService,
	) { }

	ngOnInit() {
		this.getProjectCountCentre(0);
		console.log(this.dashboardLists1);
	}
	getProjectCountCentre(length) {
		this.dashboardService.getProjectCountCentre(length)
			.subscribe(
				data => {
					this.centre = data;
				});
	}
}
