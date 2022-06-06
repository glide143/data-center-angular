import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-node-detail',
  templateUrl: './node-detail.component.html',
  styleUrls: ['./node-detail.component.css']
})
export class NodeDetailComponent {
  @Input() node: any;

  constructor(public activeModal: NgbActiveModal) { }

  isDanger(prop: any) {
    return this.node[prop].used / this.node[prop].available > 0.7;
  }

  getType(prop: any) {
    return (this.isDanger(prop)) ? 'danger' : 'success';
  }

}
