import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';
import { ToastrService } from 'ngx-toastr';
import { NgxRolesService, NgxPermissionsService } from 'ngx-permissions';
import { TranslateService } from '@ngx-translate/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

import { User } from './../../../../../shared/models/user.model';

import { ProjectService } from '../../../../../core/services/project.service';
import { UserService } from '../../../../../core/services/user.service';
import { ClientService } from '../../../../../core/services/client.service';
import { TeamService } from '../../../../../core/services/team.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';

import { ProjectImportComponent } from './../../components/project-import/project-import.component'

import { DatatablesResponse } from '../../../../../core/helpers/datatables-response.helper';
import { project_status_key_value, project_rapp_key_value, ProjectLogos } from "./../../../../../core/helpers/pm-helper";
import { environment } from '../../../../../../environments/environment';

import 'datatables.net';
import 'datatables.net-bs4';

@Component({
	selector: 'app-project-list',
	templateUrl: './project-list.component.html',
	styleUrls: ['./project-list.component.scss'],
	preserveWhitespaces: true
})

export class ProjectListComponent implements OnInit {
	public apiUrl = environment.apiUrl;
	public modalRef: BsModalRef;
	@ViewChild(DataTableDirective, { static: true })
	dtElement: DataTableDirective;
	dtTrigger: Subject<any> = new Subject();
	dtOptions: any = {};
	projectCount: any;
	countStatus: any;
	statusfilterId: number;
	loginUser: any;
	clt:any =0;
	tm: any =0;
	ty: any =3;
	yrs: any =0;
	cl: any;
	permissions: any;
	projects = [];
	List = [];
	Team = [];
	Client = [];
	userLists = [];
	isPageLoaded = false;
	projectstatusKeyValue = project_status_key_value;
	projectrappKeyValue = project_rapp_key_value;
	logos = ProjectLogos;
	exportAsConfig: ExportAsConfig = {
		type: 'pdf',
		elementIdOrContent: 'projects_table',
	};
	modalConfigs = {
		animated: true,
		keyboard: true,
		backdrop: true,
		ignoreBackdropClick: false,
		class: "inmodal modal-dialog-centered modal-md animated fadeIn"
	};

	constructor(
		public translate: TranslateService,
		public ngxRolesService: NgxRolesService,
		private modalService: BsModalService,
		private http: HttpClient,
		private router: Router,
		private route: ActivatedRoute,
		private exportAsService: ExportAsService,
		private toastr: ToastrService,
		private projectService: ProjectService,
		private teamService: TeamService,
		private userService: UserService,
		private clientService: ClientService,
		private authenticationService: AuthenticationService,
		private ngxPermissionsService: NgxPermissionsService
	) {
		this.authenticationService.loginUser.subscribe(x => this.loginUser = x);
		this.ngxPermissionsService.permissions$.subscribe((permissions) => {
            this.permissions = permissions;
        });
	}

	ngOnInit() {
		this.getUserkeyBy();
		this.loadProjectDatatable();
        this.getAllClient();
		this.getAllTeam();
	}

	getUserkeyBy() {
		this.userService.getUserkeyBy().subscribe(data => {
			this.userLists = data;
		});
	}
	getAllClient() {
		this.clientService.getAll().subscribe(data => {
			this.Client = data;

		});
	}
	getAllTeam() {
		this.teamService.getAll().subscribe(data => {
			this.Team = data;

		});
	}
	loadProjectDatatable() {
		this.statusfilterId = 0;
		if (this.route.snapshot.params['statusId'])
			this.statusfilterId = this.route.snapshot.params['statusId'];
			if (this.route.snapshot.params['client'])
			this.cl = this.route.snapshot.params['client'];
		let that = this;
		this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: that.loginUser.settings.tables_pagination_limit,
			serverSide: true,
			searching: true,
			responsive: true,
			processing: true,
			dom: '<"html5buttons"B>ltfrtip',
			order: [0],
			columns: [
				{
					'sortable': true,
					'width': "3%",
					'target': [0]
				},
				{
					'sortable': true,
					'width': "10%",
					'target': [1]
				},
				{
					'sortable': true,
					'width': "8%",
					'target': [2]
				},
				{
					'sortable': true,
					'width': "8%",
					'target': [3]
				},
				{
					'sortable': true,
					'width': "8%",
					'target': [4]
				},
				{
					'sortable': true,
					'width': "8%",
					'target': [5]
				},
				{
					'sortable': true,
					'width': "8%",
					'target': [6]
				},
				{
					'sortable': true,
					'width': "8%",
					'target': [7]
				},
				{
					'sortable': true,
					'width': "8%",
					'target': [8]
				},
				{
					'sortable': true,
					'width': "8%",
					'target': [9]
				},
				{
					'sortable': true,
					'width': "5%",
					'target': [10]
				}

			],
			buttons: [
				{
					extend: 'csv',
					title: this.translate.instant('projects.title'),
					className: "btn btn-datatable-gredient",
					action: function (e, dt, node, config) {
						that.exportFiles('csv')
					}
				}, {
					extend: 'excel',
					title: this.translate.instant('projects.title'),
					className: "btn btn-datatable-gredient",
					action: function (e, dt, node, config) {
						that.exportFiles('xlsx')
					}
				}, {
					extend: 'pdf',
					title: this.translate.instant('projects.title'),
					className: "btn btn-datatable-gredient",
					action: function (e, dt, node, config) {
						that.exportFiles('pdf')
					}
				}
			],
			language: {
				"sEmptyTable":  this.translate.instant('common.datatable.sEmptyTable'),
				"sInfo":           this.translate.instant('common.datatable.sInfo'),
				"sInfoEmpty":      this.translate.instant('common.datatable.sInfoEmpty'),
				"sSearch": "",
				"sInfoPostFix":    this.translate.instant('common.datatable.sInfoPostFix'),
				"sInfoThousands":  this.translate.instant('common.datatable.sInfoThousands'),
				"sLengthMenu":     this.translate.instant('common.datatable.sLengthMenu'),
				"sLoadingRecords": this.translate.instant('common.datatable.sLoadingRecords'),
				"sProcessing":     this.translate.instant('common.datatable.sProcessing'),
				"sZeroRecords":    this.translate.instant('common.datatable.sZeroRecords'),
				"sSearchPlaceholder": this.translate.instant('common.datatable.sSearchPlaceholder'),
				"oPaginate": {
					"sFirst":    this.translate.instant('common.datatable.oPaginate.sFirst'),
					"sLast":     this.translate.instant('common.datatable.oPaginate.sLast'),
					"sNext":     this.translate.instant('common.datatable.oPaginate.sNext'),
					"sPrevious": this.translate.instant('common.datatable.oPaginate.sPrevious')
				},
				"oAria": {
					"sSortAscending":  this.translate.instant('common.datatable.oAria.sSortAscending'),
					"sSortDescending": this.translate.instant('common.datatable.oAria.sSortDescending')
				}
			},
			ajax: (dataTablesParameters: any, callback) => {
				dataTablesParameters = {
					columns: dataTablesParameters.columns,
					draw: dataTablesParameters.draw,
					length: dataTablesParameters.length,
					order: dataTablesParameters.order,
					search: dataTablesParameters.search,
					start: dataTablesParameters.start,
					statusId: this.statusfilterId,
					client: this.cl, 
				}
				this.http
					.post<DatatablesResponse>(this.apiUrl + '/api/all-projects', dataTablesParameters, {})
					.subscribe(resp => {
						this.isPageLoaded = true
						this.projects = resp.data;
						console.log(this.projects);

						this.List = resp.data;
						this.countStatus = resp;
						this.countStatus = this.countStatus.statusCount;

						callback({
							recordsTotal: resp.recordsTotal,
							recordsFiltered: resp.recordsFiltered,
							data: [],
						});

					});
			}
		};
	}
    searchClient(event){
		if (event.target.value == 0)
		{
			this.clt = 0;
			this.projects = this.List;
		}else{
		this.clt = event.target.value;
		this.projects = this.List;
		this.projects = this.projects.filter(a=>{ 
			
			return a.client_id == event.target.value });}
        if(this.tm != 0)
		{
			this.projects = this.projects.filter(a=>{ 
			
				return a.assign_to == this.tm });
		}
		if(this.yrs != 0)
		{
			this.projects = this.projects.filter(a=>{ 
				const d = new Date(a.created_at);
				return d.getFullYear() == this.yrs });
		}
		if(this.ty != 3)
		{
			this.projects = this.projects.filter(a=>{ 
				return a.type == this.ty });
		}
     
	}
	searchTeam(event){
		if (event.target.value == 0)
		{
			this.tm = 0;
			this.projects = this.List;
		}else{
		this.tm = event.target.value;
		this.projects = this.List;
		this.projects = this.projects.filter(a=>{ 
			
			return a.assign_to == event.target.value });}
     
			if(this.yrs != 0)
			{
				this.projects = this.projects.filter(a=>{ 
					const d = new Date(a.created_at);
					return d.getFullYear() == this.yrs });
			}
			if(this.ty != 3)
			{
				this.projects = this.projects.filter(a=>{ 
					return a.type == this.ty });
			}
			if(this.clt != 0)
			{
				this.projects = this.projects.filter(a=>{ 
			
					return a.client_id == this.clt });
			}

	}
	searchYears(event){
		if (event.target.value == 0)
		{
			this.yrs =0;
			this.projects = this.List;
		}else{
		this.yrs = event.target.value;
		this.projects = this.List;
		this.projects = this.projects.filter(a=>{ 
			const d = new Date(a.created_at);
			return d.getFullYear() == event.target.value });}
			if(this.tm != 0)
			{
				this.projects = this.projects.filter(a=>{ 
				
					return a.assign_to == this.tm });
			}
			if(this.ty != 3)
			{
				this.projects = this.projects.filter(a=>{ 
					return a.type == this.ty });
			}
			if(this.clt != 0)
			{
				this.projects = this.projects.filter(a=>{ 
			
					return a.client_id == this.clt });
			}
	}
	searchType(event){
		if (event.target.value == 3)
		{
			this.ty =3;
			this.projects = this.List;
		}else{
			this.ty = event.target.value;
		this.projects = this.List;
		this.projects = this.projects.filter(a=>{ 
			return a.type == event.target.value });
		}
		
			if(this.tm != 0)
			{
				this.projects = this.projects.filter(a=>{ 
				
					return a.assign_to == this.tm });
			}
			if(this.yrs != 0)
			{
				this.projects = this.projects.filter(a=>{ 
					const d = new Date(a.created_at);
					return d.getFullYear() == this.yrs });
			}
			if(this.clt != 0)
			{
				this.projects = this.projects.filter(a=>{ 
			
					return a.client_id == this.clt });
			}
	}
	getCheckPermission(project, action) {
		if( ( action == 'edit' && this.permissions.projects_edit ) || ( action == 'delete' && this.permissions.projects_delete) ) {
			let role = this.ngxRolesService.getRole('admin');
		
			if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
				return true;
			}

			if(project.pivot[action]) {
				return true;
			}
		}
		return false;
	}

	getTranslateStatus(statusKey) {
		return this.projectstatusKeyValue[statusKey];
	}
	getTranslateRapp(rap) {
		return this.projectrappKeyValue[rap];
	}
	ngAfterViewInit(): void {
		this.dtTrigger.next();
		this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
			dtInstance.columns().every(function () {
				const that = this;
				$('input', this.footer()).on('keyup change', function () {
					if (that.search() !== this['value']) {
						that.search(this['value']).draw();
					}
				});
			});
		});
	}

	ngOnDestroy(): void {
		this.dtTrigger.unsubscribe();
	}

	rerender(): void {
		this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
			dtInstance.destroy();
			setTimeout(() => {
				this.dtTrigger.next();

				if(this.projects.length > 0) {
					$('.tfoot_dt').addClass('d-none');
				} else {
					$('.tfoot_dt').removeClass('d-none');
				}
			});
		});
	}

	exportFiles(type) {
		this.exportAsConfig.type = type;
		this.exportAsService.save(this.exportAsConfig, this.translate.instant('projects.title')).subscribe(() => {});
	}

	deleteProject(id) {
		Swal.fire({
			title: this.translate.instant('common.swal.title'),
			text: this.translate.instant('common.swal.text4'),
			type: 'warning',
			showCancelButton: true,
			confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
			cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
		}).then((result) => {
			if (result.value) {
				this.projectService.delete(id, { 'ProjectLogos' : this.logos } ).subscribe(data => {
					this.toastr.success(this.translate.instant('projects.messages.delete'), this.translate.instant('projects.title'));
					this.rerender();
				});
			}
		});
	}
    toutfilter(){

}
	changeProjectStatus(projectIDs: any, status: any) {
		let changeProject = {
			ids: projectIDs,
			status: status.id
		}
		this.projectService.changeStatus(changeProject)
			.subscribe(
				data => {
					this.toastr.success(this.translate.instant('projects.messages.status'), this.translate.instant('projects.title'));
					this.rerender();
				});
	}
	changeProjectRapp(projectIDs: any, rap: any) {
		let changeProject = {
			ids: projectIDs,
			rapport: rap.id
		}
		this.projectService.changeRapp(changeProject)
			.subscribe(
				data => {
					this.toastr.success(this.translate.instant('projects.messages.status'), this.translate.instant('projects.title'));
					this.rerender();
				});
	}
	filterByStatus(statusID) {
		this.router.routeReuseStrategy.shouldReuseRoute = () => false;
		this.router.navigate(['projects', statusID]);
	}
	filterByClient(client) {
		this.router.routeReuseStrategy.shouldReuseRoute = () => false;
		this.router.navigate(['projects/societe', client.target.value]);
	}

	openProjectImportModal() {
		this.modalRef = this.modalService.show(ProjectImportComponent, this.modalConfigs);
		this.modalRef.content.event.subscribe(data => {
			this.toastr.success(this.translate.instant('projects.messages.import'), this.translate.instant('projects.title'));
			this.rerender();
		});
	}

	saveProjectDetail(index, name, value) {
		this.projects[index][name] = value;
		this.projectService.update(this.projects[index])
			.subscribe(
				data => {
					this.toastr.success(this.translate.instant('projects.messages.update'), this.translate.instant('projects.title'));
					this.rerender();
				});
	}
	
}