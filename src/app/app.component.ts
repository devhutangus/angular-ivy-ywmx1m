import { Component, OnInit } from '@angular/core';
import studentData from './data.json';
import { StudentScore } from './student.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // studentScore: /*fill_in*/ = studentData; <- Missing Type
  constructor() {}

  ngOnInit() {}

  // addTen() {
  //   console.log(
  //     'Result of Add Ten',
  //     this.studentScore./*fill_in*/((r) => r./*fill_in*/)
  //   );
  // }

  // calculateTotal() {
  //   console.log(
  //     'Result of Total',
  //     this.studentScore./*fill_in*/((acc, value) => (/*fill_in*/), 0)
  //   );
  // }

  // filterGrade() {
  //   console.log(
  //     'Result of Less Than',
  //     this.studentScore./*fill_in*/((val) => val./*fill_in*/)
  //   );
  // }

  // calculateAverage() {
  //   let length = /*fill_in*/;
  //   let average = this.studentScore./*fill_in*/(
  //     (acc, value) => (acc += value.maths),
  //     0
  //   );
  //   console.log('Result of Average', average / length);
  // }
}
