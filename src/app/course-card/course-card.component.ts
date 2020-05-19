import { Component, Input, OnInit  } from '@angular/core';
//import { CARDS } from '../../db-data'; Use only if you use it as a direct input in @Input() i.e.: title:string;
import { Card } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  card:Card;

  constructor() { }

  ngOnInit(): void {
  }

}
