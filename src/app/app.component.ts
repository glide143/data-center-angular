import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alertRef?: ComponentRef<AlertComponent>;
  @ViewChild(DashboardComponent) dashboard: DashboardComponent;
  @ViewChild('alertBox', { read: ViewContainerRef }) alertBox:
    ViewContainerRef;

  constructor(private viewContainerRef: ViewContainerRef) { }

  alert(date: any) {
    if (!this.alertRef) {
      // ComponentFactoryResolver is DEPRECATED 
      // const alertComponent = this.viewContainerRef.
      //   resolveComponentFactory(AlertComponent);
      this.alertRef = this.alertBox.createComponent(AlertComponent);
    }
    this.alertRef.instance.date = date;
    this.alertRef.changeDetectorRef.detectChanges();
    // setTimeout(() => this.destroyAlert(), 4500);
  }

  destroyAlert() {
    if (this.alertRef) {
      this.alertRef.destroy();
      delete this.alertRef;
    }
  }

  refresh() {
    this.dashboard.generateData();
  }
}
