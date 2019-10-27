let budgetController = (function () {
    let x = 25;

    let add = function (a) {
        sum = x + a;
        return ('Answer is :' + sum);
    }

    return {
        test: function (b) {
            return add(b);
        }
    }
})();

let uiController = (function () {

})();

let control = (function (budgetCtrl, uiCtrl) {

    let z = budgetCtrl.test(5);

    return {
        anotherTest: function () {
            console.log(z);
        }
    }

})(budgetController, uiController);