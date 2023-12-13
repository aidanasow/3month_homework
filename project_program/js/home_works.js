//GMAIL BLOCK HOMEWORK1 part1
const gmailInput=document.getElementById('gmail_input')
const gmailBtn=document.getElementById('gmail_button')
const gmailResult=document.getElementById('gmail_result')
const regExp= /^[a-zA-Z0-9._]+@gmail.com$/
    gmailBtn.onclick=()=>{
    if (regExp.test(gmailInput.value)){
        gmailInput.style.borderColor="green"
        gmailResult.innerText='Your gmail is saved'
        gmailInput.value=' '
        gmailResult.style.color='green'
    } else {
        gmailInput.style.borderColor="red"
        gmailResult.innerText='Your gmail is not correct'
        gmailResult.style.color='red'
    }
}

//move_block HOMEWORK1 part2

const parentBlock=document.querySelector('.parent_block');
const childBlock=document.querySelector('.child_block');

let positionX = 0;
let positionY = 0;
const freeWidth=parentBlock.clientWidth-childBlock.clientWidth;
const doAnimation = () => {
    if (positionX < freeWidth && positionY===0) {
        positionX++
        childBlock.style.left=`${positionX}px`
        setTimeout(doAnimation, 5)
    } else if(positionX>=freeWidth && positionY<freeWidth){
        positionY++
        childBlock.style.top=`${positionY}px`
        setTimeout(doAnimation, 5)
    } else if (positionX>0 && positionY===freeWidth){
        positionX--
        childBlock.style.left=`${positionX}px`
        setTimeout(doAnimation, 5)
    } else if (positionX===0 && positionY>0){
        positionY--
        childBlock.style.top=`${positionY}px`
        setTimeout(doAnimation, 5)
    }
}

doAnimation()

//STOPWATCH BLOCK

const minutes=document.getElementById('minutes')
const seconds=document.getElementById('seconds')
const startBtn=document.getElementById('start')
const stopBtn=document.getElementById('stop')
const resetBtn=document.getElementById('reset')

let currentMinutes=0;
let currentSeconds=0;
let interval;

const start=()=>{
    currentSeconds++
    seconds.innerHTML='0'+currentSeconds;
    if (currentSeconds>9){
        seconds.innerHTML=currentSeconds;
    }
    if (currentSeconds>59){
        currentMinutes++;
        minutes.innerHTML='0'+currentMinutes;
        currentSeconds=0;
        seconds.innerHTML='0'+currentSeconds;
    }
    if (currentMinutes>9){
        minutes.innerHTML=currentMinutes;
    }
}

startBtn.addEventListener('click',()=>{
    clearInterval(interval)
    interval=setInterval(start, 1000)
})
stopBtn.addEventListener('click', ()=>{
    clearInterval(interval);
})
resetBtn.onclick=()=> {
    clearInterval(interval);
    currentSeconds=0
    currentMinutes=0
    seconds.innerHTML = '00'
    minutes.innerHTML = '00'
}
