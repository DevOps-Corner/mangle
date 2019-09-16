import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcenterComponent } from './vcenter.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { EndpointService } from '../endpoint.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { of } from 'rxjs';

describe('VcenterComponent', () => {
  let component: VcenterComponent;
  let endpointService: EndpointService;
  let fixture: ComponentFixture<VcenterComponent>;

  let ep_data: any = { "id": null, "name": "vcenter_ep", "endPointType": "VCENTER", "credentialsName": "vcenter_cred", "vcenterConnectionProperties": { "hostname": "0.0.0.0", "vcenterAdapterProperties": { "vcenterAdapterUrl": "http://0.0.0.0", "username": "admin", "password": "" } } };
  let ep_data_id: any = { "id": "with_id", "name": "vcenter_ep", "endPointType": "VCENTER", "credentialsName": "vcenter_cred", "vcenterConnectionProperties": { "hostname": "0.0.0.0", "vcenterAdapterProperties": { "vcenterAdapterUrl": "http://0.0.0.0", "username": "admin", "password": "" } } };
  let cred_data: any = { "name": "vcenter_cred", "userName": "root", "password": "machine_pass" };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        CommonModule,
        ClarityModule,
        RouterTestingModule.withRoutes([{ path: 'vcenter', component: VcenterComponent }])
      ],
      declarations: [VcenterComponent],
      providers: [
        EndpointService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
    endpointService = TestBed.get(EndpointService);
    spyOn(endpointService, 'getEndpoints').and.returnValue(of([ep_data]));
    spyOn(endpointService, 'getCredentials').and.returnValue(of([cred_data]));
    fixture = TestBed.createComponent(VcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate endpoint form', () => {
    component.populateEndpointForm(ep_data);
    expect(component.disableSubmit).toBe(true);
  });

  it('should get endpoints', () => {
    component.getEndpoints();
    expect(component.endpoints[0].name).toBe("vcenter_ep");
    expect(endpointService.getEndpoints).toHaveBeenCalled();
  });

  it('should get credentials', () => {
    component.getCredentials();
    expect(component.credentials[0].name).toBe("vcenter_cred");
    expect(endpointService.getCredentials).toHaveBeenCalled();
  });

  it('should add or update endpoint', () => {
    //add endpoint
    spyOn(endpointService, 'addEndpoint').and.returnValue(of(ep_data_id));
    component.addOrUpdateEndpoint(ep_data);
    expect(component.successAlertMessage).toBeTruthy();
    expect(component.endpoints[0].name).toBe("vcenter_ep");
    expect(endpointService.addEndpoint).toHaveBeenCalled();
    expect(endpointService.getEndpoints).toHaveBeenCalled();
    //update endpoint
    spyOn(endpointService, 'updateEndpoint').and.returnValue(of(ep_data_id));
    component.addOrUpdateEndpoint(ep_data_id);
    expect(component.successAlertMessage).toBeTruthy();
    expect(component.endpoints[0].name).toBe("vcenter_ep");
    expect(endpointService.updateEndpoint).toHaveBeenCalled();
    expect(endpointService.getEndpoints).toHaveBeenCalled();
  });

  it('should delete endpoint', () => {
    spyOn(endpointService, 'deleteEndpoint').and.returnValue(of({}));
    spyOn(window, 'confirm').and.callFake(function () { return true; });
    component.deleteEndpoint(ep_data.name);
    expect(component.successAlertMessage).toBeTruthy();
    expect(endpointService.deleteEndpoint).toHaveBeenCalled();
  });

  it('should add vcenter credential', () => {
    spyOn(endpointService, 'addVcenterCredential').and.returnValue(of(cred_data));
    component.populateEndpointForm(ep_data);
    component.addVcenterCredential(cred_data);
    expect(component.successAlertMessage).toBeTruthy();
    expect(endpointService.addVcenterCredential).toHaveBeenCalled();
    expect(component.credentials[0].name).toBe("vcenter_cred");
    expect(endpointService.getCredentials).toHaveBeenCalled();
  });

  it('should test endpoint connection', () => {
    spyOn(endpointService, 'testEndpointConnection').and.returnValue(of(ep_data));
    component.testEndpointConnection(true, ep_data);
    expect(component.successAlertMessage).toBeTruthy();
    expect(component.disableSubmit).toBe(false);
    expect(endpointService.testEndpointConnection).toHaveBeenCalled();
  });

});
