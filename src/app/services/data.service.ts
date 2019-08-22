import { Question } from './../models/Question';
import { Injectable } from '@angular/core';
// import { Question } from '../models/Question';
// import {http} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  questions: Question[];

  constructor() {
    // this.questions = [
    //   {
    //     text: 'whats the market rate',
    //     answer: '1200BTC',
    //     hide: true
    //   },
    //   {
    //     text: 'whats the Fav Crypto',
    //     answer: 'Waves',
    //     hide: true
    //   },
    //   {
    //     text: 'whats the market Share',
    //     answer: 'unknowm',
    //     hide: true
    //   },
    //   {
    //     text: 'whats the market located',
    //     answer: 'International trade fair',
    //     hide: true
    //   }
    // ]
   }
// Get questions Local storage
    getQuestions(){
       if(localStorage.getItem('question') === null){
         this.questions = [];
       } else {
         this.questions = JSON.parse(localStorage.getItem('questions'));
       }
       return this.questions;
    }

    // add question to local storage
    addQuestion(question: Question){
       this.questions.unshift(question);

       //Initialize local variable
       let questions;

       if(localStorage.getItem('question') === null){
        this.questions = [];
        // Push new question the question function param
        questions.unshift(question);

        // set new array to local storage
        localStorage.setItem('question', JSON.stringify(questions));

      } else {
          questions = JSON.parse(localStorage.getItem(questions));

          // Add new question
          questions.unshift(question);
          // Reset Local storage
          localStorage.setItem('questions', JSON.stringify(questions));
          // this.questions =   JSON.parse(localStorage.getItem('questions'));

      }

    }


    // remove queston from local storage
    removeQuestion(question: Question){
// tslint:disable-next-line: prefer-for-of
      for(let i = 0; i < this.questions.length; i++){
// tslint:disable-next-line: triple-equals
        if(question == this.questions[i]) {
          this.questions.splice(i, 1);
          localStorage.setItem('question', JSON.stringify(this.questions));
        }
      }
    }
}

