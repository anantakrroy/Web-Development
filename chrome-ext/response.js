function getResponse() {
    var userResponse = document.getElementsByName("userResponse");
    for (var i = 0; i < userResponse.length; i++) {
        if (userResponse[i].checked) {
            document.querySelector('button').disabled = true;
            document.querySelector('form').hidden = true;
            addWaitGreet();
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
        } else {
            width -= 5;
            duration--;
            console.log(width);
            getProgress[0].style.width = width + '%';
            getProgress[0].innerHTML = duration + 's';
        }
    }
}

function destroyButton() {
    var startBtn = document.querySelector('button');
    startBtn.remove();
}

function addWaitGreet() {
    var infoPara = document.createElement('div');
    var infoParaText = document.createTextNode("Waiting for all responses...");
    infoPara.appendChild(infoParaText);
    var infoPosition = document.getElementsByClassName('row')[2].childNodes[1].childNodes[1].childNodes[0];
    infoPara.insertBefore(infoPara, infoPosition);
}
