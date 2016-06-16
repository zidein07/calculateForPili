var allTask = {
    labelOne: $('#labelOne'),
    addition: $('#addition'),
    subtraction: $('#subtraction'),
    multiplication: $('#multiplication'),
    division: $('#division'),
    labelTwo: $('#labelTwo'),
    logicalAnswer: $('#logicalAnswer'),
    compute: $('#compute')
};

allTask.logicalAnswer.on('click', function () {
    var answer = allTask.logicalAnswer.val();
    var writeTextForInputOne = allTask.labelOne.val();
    var writeTextForInputTwo = allTask.labelTwo.val();

    if (writeTextForInputOne === '' && writeTextForInputTwo === '' || writeTextForInputOne >= 16 && writeTextForInputTwo >= 16) {
        
    }
});