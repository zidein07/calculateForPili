var allTask = {
    labelOne: $('#labelOne'),
    addition: $('#addition'),
    subtraction: $('#subtraction'),
    multiplication: $('#multiplication'),
    division: $('#division'),
    labelToo: $('#labelToo'),
    answer: $('#answer'),
    logicalAnswer: $('#logicalAnswer')
};

allTask.answer.on('click', function () {
   var writeTextFotInputOne = allTask.labelOne.val().length;
   var writeTextFotInputToo = allTask.labelToo.val().length;
});