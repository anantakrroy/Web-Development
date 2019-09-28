function getResponse() {
    var userResponse = document.getElementsByName("userResponse");
    for (var i = 0; i < userResponse.length; i++) {
        if (userResponse[i].checked) {
            document.querySelector('button').disabled = true;
            document.querySelector('form').hidden = true;
            console.log(userResponse[i].value);
        }
    }
}

function enableSubmit() {
    var radioBtnsValue = document.querySelector('form').elements['userResponse'].value;
    if (radioBtnsValue === 'Yes' || radioBtnsValue === 'No') {
        document.querySelector('button').disabled = false;
    }

}

function timerStart() {
    document.querySelector('button').disabled = true;
    var getProgress = document.getElementsByClassName("progress-bar");
    var currLabel = getProgress[0].innerHTML;
    var timerInterval = setInterval(countdown, 1000);
    var currWidth = getProgress[0].style.width;
    var width = 100;
    var duration = 20;
    console.log(currLabel)
    function countdown() {
        if (width <= 0) {
            clearInterval(timerInterval);
            document.getElementsByClassName("progress").hidden = true;
        } else {
            width -= 5;
            duration--;
            console.log(width);
            getProgress[0].style.width = width + '%';
            getProgress[0].innerHTML = duration + 's';
        }
    }
}

function hideButtonShowMessage() {
    var startBtn = document.querySelector('button');
    var waitMsg = document.querySelector('p');
    startBtn.hidden = true;
    waitMsg.hidden = false;
}
