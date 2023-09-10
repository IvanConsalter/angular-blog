import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from '../../shared/data/data';
import { Notice } from 'src/app/shared/models/notice.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  data = data;
  id: number | undefined;
  notice: Notice;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;

    if(this.id) {
      this.setValuesToComponent(this.id)
    } else {
      this.router.navigate(['']);
    }
  }

  setValuesToComponent(id: number | null){
    this.notice = data.filter(article => article.id == id)[0]
  }

}
