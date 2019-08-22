import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import {Question} from '../../models/Question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
// tslint:disable-next-line: ban-types
  questions: Question[];
  constructor(public dataService: DataService) {  }

  ngOnInit() {
    this.questions = this.dataService.getQuestions();
  }

  addQuestion(question: Question){
    this.dataService.addQuestion(question);
  }
}
