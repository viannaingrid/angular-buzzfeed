import { Component } from '@angular/core';
import quizz_questions  from '../../../assets/data/quizz_questions.json'

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent {

  title:string = ""

  questions:any
  questionsSelected:any

  answers:string[] = []
  answersSelected:string = ""

  questionIndex:number = 0
  questionMaxIndex:number = 0

  finished:boolean = false

  constructor(){

  }

  ngOnInit() : void {
    if(quizz_questions){
      this.finished = false
      this.title = quizz_questions.title

      this.questions = quizz_questions.questions
      this.questionsSelected = this.questions[this.questionIndex]

      this.questionIndex = 0
      this.questionMaxIndex = this.questions.length

    }
  }

  playerChoice(value:string){
    this.answers.push(value)
  }

  async nextStep(){
    this.questionIndex++

    if(this.questionMaxIndex > this.questionIndex){
      this.questionsSelected = this.questions[this.questionIndex]
    }else{
      this.finished = true
    }
  }
}
