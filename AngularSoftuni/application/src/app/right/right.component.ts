import { Component, OnInit, Input } from '@angular/core';
import { CausesService } from '../causes.service';
import { ICause } from '../shared/interfaces/cause';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {

  @Input() selectedCause2: ICause;

  get selectedCause() {
    return this.causesService.selectedCause;
  }

  constructor(private causesService: CausesService){  }


  ngOnInit() {
  }

}
