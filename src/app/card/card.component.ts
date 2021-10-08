import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() username: string = '';
  @Input() email: string = '';
  @Input() phone: string = '';
  @Input() website: string = '';

}
