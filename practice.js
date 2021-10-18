//Linear Progress Bar
const progressBar = document.getElementById("progress-done");
const startbtn = document.getElementById("startbtn");
var counter = 0;
//Circular Progress Bar
const circleBar = document.getElementById("circleBar");
const circleText = document.getElementById("circleText");
const startbtnC = document.getElementById("startbtnC");
const circleshadow = document.getElementById("outerCircle");
var counterC = 0;
//Caculator
const caculatorbtn = document.getElementById("caculatbtn");
const resultzone = document.getElementById("resultzone");
var num = 0;
//Temperature 
const tempbtn = document.getElementById("tempbtn");
const sortbtn = document.getElementById("sortbtn");
const tempzone = document.getElementById("tempzone");
const sortzone = document.getElementById("sortzone");
const tempMap = new Map();
var tempnum = 1;
//Html DOM
const langbtn = document.getElementById("langbtn");
const phead = document.getElementById("phead");
const btncollection = phead.getElementsByTagName("button");

//Linear Progress Bar
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

//Circular Progress Bar
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

//Caculator
function caculator(){
    caculatorbtn.classList.remove("btn-danger");
    caculatorbtn.classList.add("btn-success");
    caculatorbtn.textContent = "Reset 重置結果";
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
    caculatorbtn.textContent = "Start 開始計算";
    caculatorbtn.setAttribute('onclick','caculator()');
    resultzone.textContent = "Waiting to  start ...";
}

//Temperature 
function convertCtoF(cel){
    return (cel * 9 / 5 + 32);
}

function generateTemp(){
    tempbtn.classList.remove("btn-danger");
    tempbtn.classList.add("btn-success");
    tempbtn.textContent = "Reset 清空結果";
    tempbtn.setAttribute('onclick','resetTemp()');
    tempbtn.setAttribute('disabled','true');
    var createmap = setInterval(sumofodd, 100);
    tempnum = 1;
    tempMap.clear();
    function sumofodd(){
        if(tempnum > 30){
            clearInterval(createmap);
            tempbtn.removeAttribute('disabled');
            sortbtn.removeAttribute('disabled');
        }
        else{
            let C = parseInt(Math.random() * 100);
            let F = convertCtoF(C);
            tempzone.innerHTML += '<br>' + tempnum + ' : [ <strong style = "color:yellow;">' + C +' °C</strong> = <strong style = "color:lightblue;">'+ F +' °F</strong> ]';
            tempzone.scrollTop = tempzone.scrollHeight;
            tempMap.set(C,F);
            tempnum++;
        }
    }
}

function resetTemp(){
    tempbtn.classList.remove("btn-success");
    tempbtn.classList.add("btn-danger");
    tempbtn.textContent = "Start 開始生成";
    tempbtn.setAttribute('onclick','generateTemp()');
    tempzone.textContent = "Click the start button to generate 30 pairs of temperatures ...";
    sortzone.textContent = "← You have to generate the map first...";
    tempMap.clear();
}

function sortMap(){
    let sortArray = [];
    sortArray = Array.from(tempMap.entries());
    sortArray.sort(function(a,b){return a[0]-b[0]});
    sortzone.innerHTML = JSON.stringify(sortArray);
    sortzone.innerHTML += '<br><strong style = "color:tomato;">↙Press the Reset button to restart.</strong>'
    sortbtn.setAttribute('disabled','true');
}
/*
function sortMap(){
    let sortArray = [];
    sortArray = Array.from(tempMap.entries());
    sortArray.sort(function(a,b){return a[1]-b[1]});
    for (let i in sortArray) {
        sortzone.innerHTML += JSON.stringify(sortArray[i]) + '&emsp;';
    }
}
*/

function langzhTW(){
    langbtn.classList.remove("btn-danger");
    langbtn.classList.add("btn-success");
    langbtn.setAttribute('onclick','langEN()');
    langbtn.innerHTML = '<i class="bi bi-translate"></i>&nbsp;Switch to English';
    phead.children[1].children[0].children[1].innerHTML = "詭鎮奇談卡牌版主遊戲";
    phead.children[1].children[0].children[2].innerHTML = "NT$ 1,990";
    phead.children[1].children[0].children[3].innerHTML = "熱銷五年的《詭鎮奇談卡牌版》主遊戲修訂版 位於美國麻薩諸塞州的阿卡姆市不斷發生怪異事件，一切的跡象都顯示與遠古的邪神脫離不了關係。你們要化身為調查員，透過各種不同的卡牌解決神秘事件，並保持自身的理智。";
    phead.children[1].children[0].children[4].href = "https://www.gokids.com.tw/product/detail1375";
    phead.children[2].children[0].children[1].innerHTML = "瘋狂詭宅 第二版 桌上遊戲";
    phead.children[2].children[0].children[2].innerHTML = "NT$ 3,250";
    phead.children[2].children[0].children[3].innerHTML = "在神祕的豪宅中，一一出現奇怪的現象。遊戲的每個回合分為兩個階段，分別是「調查階段」與「神秘階段」，兩個階段會不斷輪替直到玩家獲勝或全部陣亡。準備好享受面對極限下的求生與體驗恐怖詭譎的氣氛吧！";
    phead.children[2].children[0].children[4].href = "https://www.gokids.com.tw/product/detail795";
    phead.children[3].children[0].children[1].innerHTML = "深入絕地: 暗黑世界傳說";
    phead.children[3].children[0].children[2].innerHTML = "NT$ 5,200";
    phead.children[3].children[0].children[3].innerHTML = "經典奇幻冒險角色扮演遊戲《深入絕地》最新系列作！玩家在這款合作型冒險遊戲中，將扮演人類、精靈、矮人等奇幻異世界種族，對抗潛伏在特瑞諾斯大陸的邪惡勢力，展開又一次傳說對決。";
    phead.children[3].children[0].children[4].href = "https://www.gokids.com.tw/product/detail1291";
    phead.children[4].children[0].children[1].innerHTML = "深淵之中";
    phead.children[4].children[0].children[2].innerHTML = "NT$ 2,400";
    phead.children[4].children[0].children[3].innerHTML = "當恐怖的深潛者從海洋深處的碎隙中湧出，任何玩家都可能是隱藏的邪惡異教徒或恐怖的混血深潛者。不要背對著別人——如果不想讓你們的船葬身海底，你必須使盡渾身解數、與成群的深潛者戰鬥、找出變節者，並駕駛大西洋號安全返航！";
    phead.children[4].children[0].children[4].href = "https://www.gokids.com.tw/product/detail1364";
    for (let i = 1; i < btncollection.length; i++) {
        btncollection[i].style.backgroundColor = "tomato";
    }
}

function langEN(){
    langbtn.classList.remove("btn-success");
    langbtn.classList.add("btn-danger");
    langbtn.setAttribute('onclick','langzhTW()');
    langbtn.innerHTML = '<i class="bi bi-translate"></i>&nbsp;切換成繁體中文';
    phead.children[1].children[0].children[1].innerHTML = "Arkham Horror Lcg: Revised Core Set";
    phead.children[1].children[0].children[2].innerHTML = "$59.95";
    phead.children[1].children[0].children[3].innerHTML = "Investigate the horrors of Arkham while courting cosmic doom.";
    phead.children[1].children[0].children[4].href = "https://shop.asmodee.com/arkham-horror-lcg-5-revised-core-set-ahc60";
    phead.children[2].children[0].children[1].innerHTML = "Mansion of Madness 2nd Editio";
    phead.children[2].children[0].children[2].innerHTML = "$109.99";
    phead.children[2].children[0].children[3].innerHTML = "Unravel mysteries in Arkham with your investigative team in this app-guided game.";
    phead.children[2].children[0].children[4].href = "https://shop.asmodee.com/mansions-of-madness-2nd-edition-mad20";
    phead.children[3].children[0].children[1].innerHTML = "Descent: Legends of the Dark";
    phead.children[3].children[0].children[2].innerHTML = "$174.95";
    phead.children[3].children[0].children[3].innerHTML = "An app-driven dungeon crawl set in the world of Terrinoth.";
    phead.children[3].children[0].children[4].href = "https://shop.asmodee.com/descent-5-legends-of-the-dark-dle01";
    phead.children[4].children[0].children[1].innerHTML = "Unfathomable";
    phead.children[4].children[0].children[2].innerHTML = "$79.95";
    phead.children[4].children[0].children[3].innerHTML = "Traitors and Terror. Immerse yourself among the passengers and crew of SS Atlantica.";
    phead.children[4].children[0].children[4].href = "https://shop.asmodee.com/unfathomable-unf01";
    for (let i = 1; i < btncollection.length; i++) {
        btncollection[i].style.backgroundColor = "black";
    }
}