const question = new Map();
question.set('question', 'What is my name');
question.set(1, 'Ravi');
question.set(2, 'Praveen');
question.set(3, 'gowtham');
question.set(4, 'Ragul');
question.set('correct', 2);
question.set(true, 'Answer is Correct');
question.set(false, 'Answer is Wrong');

console.log(question.get('question'));

for (let [key, value] of question.entries()) {
    if (typeof (key) === 'number') {
        console.log(`Answer ${key} : ${value}`);
    }
}

const ans = parseInt(prompt('Choose the answer'));

console.log(question.get(ans === question.get('correct')));