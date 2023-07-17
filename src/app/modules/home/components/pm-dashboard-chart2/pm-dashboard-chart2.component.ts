import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
	selector: 'app-pm-dashboard-chart2',
	templateUrl: './pm-dashboard-chart2.component.html',
	styleUrls: ['./pm-dashboard-chart2.component.scss']
})

export class PmDashboardChart2Component implements OnInit {
	@Input() monthlyReport: any;
	barChartLabels: string[] = [];
	currentDate : Date = new Date();
	barChartType = 'bar';
	barChartLegend = true;
	tasks = [];
	defects = [];
	incidents = [];
	barChartData: any[] = [];
	barChartOptions: any = {
		scaleShowVerticalLines: false,
		responsive: true,
		maintainAspectRatio: false
	};
	barChartColors: Array<any> = [{
			backgroundColor: 'rgba(255, 141, 96, 0.8)',
			borderColor: 'rgba(148,159,177,1)',
			pointBackgroundColor: 'rgba(148,159,177,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(148,159,177,0.8)'
		}, {
			backgroundColor: 'rgba(0, 157, 160, 0.8)',
			borderColor: 'rgba(148,159,177,1)',
			pointBackgroundColor: 'rgba(148,159,177,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(148,159,177,0.8)'
		}
	];

	constructor(public translate: TranslateService) {
		this.barChartLabels = this.translate.instant('months');
	}

	ngOnInit() {
		this.renderChart();
	}

	renderChart() {
		for(let iRow in this.monthlyReport) {
			this.tasks.push(this.monthlyReport[iRow].tasks);
			this.defects.push(this.monthlyReport[iRow].defects);
		
		}

		this.barChartData = [
			{ data: this.tasks, label: this.translate.instant('tasks.title') },
			{ data: this.defects, label: this.translate.instant('defects.title') },
		];
	}

}
