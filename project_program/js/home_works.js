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

let position = 0;
let direction = 1;
const blockWidth=parentBlock.clientWidth-childBlock.clientWidth;
const doAnimation = () => {
    position += 5 * direction;
    if (position >= blockWidth) {
        direction = -1;
    } else if (position <= 0) {
        direction = 1;
    }
    childBlock.style.left = position + 'px';
    animation();
};
function animation() {
    setTimeout(doAnimation, 50);
}

animation();

