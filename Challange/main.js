// (function() {
//   function Question(question) {
//     console.log("0:Praveen");
//     console.log("1:anu");
//     console.log("2:Web Developer");
//     return function(answer) {
//       let ans = prompt(question);
//       let total = 0;
//       if (answer === ans) {
//         console.log("Correct");
//         total += 1;
//         console.log(`Your score is ${total}`);
//       } else {
//         console.log("Wrong!!");
//       }
//     };
//   }
//   let qus = [
//     "What is my Name??",
//     "What is my GF name?",
//     "What is my Designation"
//   ];
//   let randomNum = Math.floor(Math.random() * 3);
//   let ans = ["0", "1", "2"];

//   console.log(randomNum);
//   Question(qus[randomNum])(ans[randomNum]);
// })();

// // Question("What is my GF name?")("1");

// (function() {
//   function Question(question, answer, current) {
//     this.question = question;
//     this.answer = answer;
//     this.current = current;
//   }

//   Question.prototype.displayQuestion = function() {
//     console.log(this.question);
//     for (let i = 0; i < this.answer.length; i++) {
//       console.log(`${i} : ${this.answer[i]}`);
//     }
//   };

//   Question.prototype.choose = function(ans, callBack) {
//     let scr;
//     if (ans === this.current) {
//       console.log("Wow!!! Correct Answer!!!");
//       scr = callBack(true);
//     } else {
//       console.log("Try Again :(");
//       scr = callBack(false);
//     }
//     this.displayScore(scr);
//   };

//   Question.prototype.displayScore = function(score) {
//     console.log("Your Current Score " + score);
//     console.log("-------------------------------");
//   };

//   let q1 = new Question("What is my name ??", ["Praveen", "Kumar", "Anbu"], 0);

//   let q2 = new Question(
//     "What is my Mother's Name ??",
//     ["Ramya", "Malathi", "Rukumani"],
//     1
//   );

//   let q3 = new Question(
//     "What is my Father's Name ??",
//     ["Praveen", "Gowtham", "Prakasam"],
//     2
//   );

//   let q4 = new Question(
//     "What is my Brother's Name ??",
//     ["Praveen", "Gowtham", "Anbu"],
//     1
//   );

//   let qus = [q1, q2, q3, q4];

//   function score() {
//     let sc = 0;
//     return function(current) {
//       if (current) {
//         return sc++;
//       }
//       return sc;
//     };
//   }
//   var keepScore = score();

//   function loop() {
//     let n = Math.floor(Math.random() * qus.length);

//     qus[n].displayQuestion();
//     let ans = prompt("Choose Your Answer");
//     if (ans !== "exit") {
//       qus[n].choose(parseInt(ans), keepScore);
//       loop();
//     }
//   }
//   loop();
// })();
/*
(function() {
  function Question(question, answer, correct) {
    this.question = question;
    this.answer = answer;
    this.correct = correct;
  }

  Question.prototype.createQuestion = function() {
    console.log(this.question);
    for (let i = 0; i < this.answer.length; i++) {
      console.log(`${i} : ${this.answer[i]}`);
    }
  };

  Question.prototype.createAnswer = function(ans, callBack) {
    let number;
    if (ans === this.correct) {
      console.log("Correct Answer!!!");
      number = callBack(true);
    } else {
      console.log("Wrong One :(");
      number = callBack(false);
    }
    this.createCounter(number);
  };

  Question.prototype.createCounter = function(number) {
    console.log("Your Score is :" + number);
    console.log("---------------------------------------");
  };

  let q1 = new Question("What is my name ??", ["Ravi", "Praveen", "Raju"], 1);
  let q2 = new Question(
    "What is my Fathers name ??",
    ["loganathan", "Praveen", "Raju"],
    0
  );
  let q3 = new Question(
    "What is my Mother name ??",
    ["Ravi", "Praveen", "Malathi"],
    2
  );
  let q4 = new Question(
    "What is my Brother name ??",
    ["Ravi", "Gowtham", "Raju"],
    1
  );
  let qus = [q1, q2, q3, q4];

  function score() {
    let point = 1;
    return function(trf) {
      if (trf === true) {
        return point++;
      }
      return point;
    };
  }
  let count = score();
  function loop() {
    let random = Math.floor(Math.random() * qus.length);

    qus[random].createQuestion();

    let ans = prompt("Choose the Answer...");
    if (ans !== "exit") {
      qus[random].createAnswer(parseInt(ans), count);
      loop();
    }
  }
  loop();
})();
*/

//ES6
{
  class Question {
    constructor(question, answer, correct) {
      this.question = question;
      this.answer = answer;
      this.correct = correct;
    }
    createQuestion() {
      console.log(`${this.question}`);

      for (let [idx, element] of this.answer.entries()) {
        console.log(`${idx}:${element}`);
      }
    }

    createAnswer(ans, score) {
      let number;
      if (this.correct !== ans) {
        console.log("Wrong Answer");
        number = score(false);
      } else {
        console.log("Answer is Correct!!!");
        number = score(true);
      }
      this.createCount(number);
    }
    createCount(number) {
      console.log(`Your Score is ${number}`);
    }
  }

  let q1, q2, q3, q4, qus, random, ans;

  q1 = new Question("What is my name???", ["Praveen", "Kumar", "ragul"], 0);
  q2 = new Question(
    "What is my fathers name???",
    ["Praveen", "Kumar", "Appa"],
    2
  );
  q3 = new Question(
    "What is my Mothers name???",
    ["Praveen", "Malathi", "ragul"],
    1
  );
  q4 = new Question(
    "What is my Brothers name???",
    ["anna", "Kumar", "ragul"],
    0
  );

  qus = [q1, q2, q3, q4];

  function score() {
    let num = 0;
    return trf => {
      if (trf !== true) {
        return num;
      } else {
        return ++num;
      }
    };
  }
  let count = score();

  function loop() {
    random = Math.floor(Math.random() * qus.length);

    qus[random].createQuestion();

    ans = prompt("Choose the Answer");

    if (ans !== "exit") {
      qus[random].createAnswer(parseInt(ans), count);
      loop();
    }
  }
  loop();
}