import { SpaceNamespaceService } from './../space-namespace.service';
import { NoNotifications } from './../../../../shared/no-notifications.service';
import { Notifications } from 'ngx-base';
import { SpaceNamespace } from './../space-namespace';
import { EnvironmentDetailComponent } from './../detail/detail.app.component';
import { ServiceModule } from './../../service/service.module';
import { ReplicaSetModule } from './../../replicaset/replicaset.module';
import { PodModule } from './../../pod/pod.module';
import { EventModule } from './../../event/event.module';
import { ConfigMapModule } from './../../configmap/configmap.module';
import { DeploymentModule } from './../../deployment/deployment.module';
import { EnvironmentRoutingModule } from './../environment-routing.module';
import { TreeModule } from 'angular2-tree-component';
import { TreeListModule, SlideOutPanelModule } from 'ngx-widgets';
import { TestAppModule } from './../../../../app.test.module';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { MockBackend } from "@angular/http/testing";
import { RequestOptions, BaseRequestOptions, Http } from "@angular/http";
import { RestangularModule } from "ng2-restangular";
import { AppListPageComponent } from "./list-page.app.component";
import { AppListComponent } from "../list/list.app.component";
import { AppListToolbarComponent } from "../list-toolbar/list-toolbar.app.component";
import { Fabric8CommonModule } from "../../../../common/common.module";
import { KubernetesStoreModule } from "../../../kubernetes.store.module";
import { ModalModule } from "ng2-modal";
import { MomentModule } from "angular2-moment";
import { FormsModule } from "@angular/forms";
import { KubernetesComponentsModule } from "../../../components/components.module";

describe('AppListPage', () => {
  let component: AppListPageComponent;
  let fixture: ComponentFixture<AppListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        Fabric8CommonModule,
        RouterTestingModule.withRoutes([]),
        RestangularModule.forRoot(),
        FormsModule,
        MomentModule,
        ModalModule,
        KubernetesStoreModule,
        KubernetesComponentsModule,
        TestAppModule,
        TreeListModule,
        TreeModule,
        EnvironmentRoutingModule,
        DeploymentModule,
        ConfigMapModule,
        EventModule,
        PodModule,
        ReplicaSetModule,
        ServiceModule,
        SlideOutPanelModule,
      ],
      declarations: [
        AppListPageComponent,
        AppListComponent,
        AppListToolbarComponent,
        EnvironmentDetailComponent,
      ],
      providers: [
        {
          provide: SpaceNamespace,
          useClass: SpaceNamespaceService
        },
        {
          provide: Notifications,
          useClass: NoNotifications
        },
        MockBackend,
        { provide: RequestOptions, useClass: BaseRequestOptions },
        {
          provide: Http, useFactory: (backend, options) => {
            return new Http(backend, options);
          }, deps: [MockBackend, RequestOptions],
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
