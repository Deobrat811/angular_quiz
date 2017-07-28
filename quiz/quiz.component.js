"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var quiz_service_1 = require("./quiz.service");
var QuizComponent = (function () {
    function QuizComponent(quizserObj) {
        this.quizserObj = quizserObj;
        this.questionnum = 1;
        this.marks = 0;
        this.quesitr = 0;
        this.start = true;
    }
    QuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quizserObj.getQuestion().subscribe(function (questions) { return _this.questions = questions; });
    };
    QuizComponent.prototype.nextQuestion = function () {
        this.quesitr = this.quesitr + 1;
        if (this.option == this.question.answer) {
            this.marks = this.marks + 1;
            console.log(this.marks);
        }
        this.question = this.questions[this.quesitr];
        this.questionnum = this.questionnum + 1;
    };
    QuizComponent.prototype.startQuiz = function () {
        this.question = this.questions[this.quesitr];
        this.start = false;
    };
    return QuizComponent;
}());
QuizComponent = __decorate([
    core_1.Component({
        selector: 'my-quiz',
        templateUrl: './quiz.component.html',
        styleUrls: ['./quiz.component.css'],
        providers: [quiz_service_1.QuizService]
    }),
    __metadata("design:paramtypes", [quiz_service_1.QuizService])
], QuizComponent);
exports.QuizComponent = QuizComponent;
//# sourceMappingURL=quiz.component.js.map