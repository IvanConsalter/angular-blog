import { Component, OnInit, Input } from '@angular/core';
import { Notice } from 'src/app/shared/models/notice.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('notice') notice: Notice;

  constructor() { }

  ngOnInit(): void {
  }

  limitString(input: string, maxLength: number = 90): string {
    if (input.length <= maxLength) {
      return input;
    } else {
      const truncatedString = input.substring(0, maxLength);
      return truncatedString + "...";
    }
  }

}
