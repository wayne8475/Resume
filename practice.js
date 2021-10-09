//Linear Progress Bar
var progressBar = document.getElementById("progress-done");
var startbtn = document.getElementById("startbtn");
var counter = 0;
//Circular Progress Bar
var circleBar = document.getElementById("circleBar");
var circleText = document.getElementById("circleText");
var startbtnC = document.getElementById("startbtnC");
var circleshadow = document.getElementById("outerCircle");
var counterC = 0;
//Caculator
var caculatorbtn = document.getElementById("caculatbtn");
var resultzone = document.getElementById("resultzone");
var num = 0;

function startBar() {
    startbtn.classList.remove("btn-danger");
    startbtn.classList.add("btn-success");
    startbtn.textContent = "Reset";
    startbtn.setAttribute('onclick','resetBar()');
    progressBar.style.transition = "width 5s linear 2s";
    progressBar.style.opacity = 1;
    progressBar.style.width = "100%";
    counter = -35;
    var percent = setInterval(percentage, 50);
    function percentage(){
        if(counter >= 100){
            clearInterval(percent);
        }
        else if(counter< 0){
            counter++;
        }
        else{
            counter++;
            progressBar.textContent = counter +"%";
        }
    }
}

function resetBar() {
    counter = 100;
    startbtn.classList.remove("btn-success");
    startbtn.classList.add("btn-danger");
    startbtn.textContent = "Start";
    progressBar.style.transition = "none";
    progressBar.style.width = "0%";
    progressBar.textContent = "0%";
    progressBar.style.opacity = 0;
    startbtn.setAttribute('onclick','startBar()');
}

function startBarC() {
    startbtnC.classList.remove("btn-danger");
    startbtnC.classList.add("btn-success");
    startbtnC.textContent = "Reset";
    startbtnC.setAttribute('onclick','resetBarC()');
    circleBar.style.strokeDashoffset = 450;
    circleBar.style.opacity = 1;
    counterC = 0;
    circleBar.style.animation = "circleAnimation 5.5s linear forwards";
    circleBar.style.animationPlayState = "running";
    circleshadow.style.animationPlayState = "running";
    var percent = setInterval(percentage, 50);
    function percentage(){
        if(counterC >= 100){
            clearInterval(percent);
        }
        else{
            counterC++;
            circleText.textContent = counterC +"%";
        }
    }
}

function resetBarC() {
    counterC = 100;
    startbtnC.classList.remove("btn-success");
    startbtnC.classList.add("btn-danger");
    startbtnC.textContent = "Start";
    circleBar.style.animation = "none";
    circleBar.style.strokeDashoffset = 450;
    circleText.textContent = "0%";
    circleBar.style.opacity = 0;
    startbtnC.setAttribute('onclick','startBarC()');
    circleshadow.style.animationPlayState = "paused";
}

function caculator(){
    caculatorbtn.classList.remove("btn-danger");
    caculatorbtn.classList.add("btn-success");
    caculatorbtn.textContent = "重置結果";
    caculatorbtn.setAttribute('onclick','resetcalculator()');
    caculatorbtn.setAttribute('disabled','true');
    num = 0;
    var oddsum = 0;
    var calculator = setInterval(sumofodd, 100);
    function sumofodd(){
        if(num > 100){
            clearInterval(calculator);
            resultzone.innerHTML += '<br>The result is : <strong style = "color:rgb(255, 150, 150);">'+ oddsum + '</strong>';
            resultzone.scrollTop = resultzone.scrollHeight;
            caculatorbtn.removeAttribute('disabled');
        }
        else if(num % 2 == 0){
            num++;
        }
        else{
            resultzone.innerHTML += '<br>' + oddsum +' + <strong style = "color:yellow;">'+ num +'</strong> = '+ (oddsum+num);
            resultzone.scrollTop = resultzone.scrollHeight;
            oddsum+=num;
            num++;
        }
    }
}

function resetcalculator(){
    caculatorbtn.classList.remove("btn-success");
    caculatorbtn.classList.add("btn-danger");
    caculatorbtn.textContent = "開始計算";
    caculatorbtn.setAttribute('onclick','caculator()');
    resultzone.textContent = "Waiting to  start ...";
}