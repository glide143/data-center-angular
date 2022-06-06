import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NodeDetailComponent } from '../node-detail/node-detail.component';
@Component({
  selector: '[app-nodes-row]',
  templateUrl: './nodes-row.component.html',
  styleUrls: ['./nodes-row.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NodesRowComponent {
  @Input() node: any;

  constructor(private modalService: NgbModal) { }

  isDanger(prop: any) {
    return this.node[prop].used / this.node[prop].available > 0.7;
  }

  open(node: any) {
    const modal = this.modalService.open(NodeDetailComponent);
    modal.componentInstance.node = node;
  }

}
