//PHONE CHECKER lesson1
const  phoneInput=document.getElementById('phone_input')
const  phoneButton=document.getElementById('phone_button')
const  phoneResult=document.getElementById('phone_result')

const regExp=/^\+996 ([2579]\d{2})|312 \d{2}-\d{2}-\d{2}$/
phoneButton.onclick=()=>{
    if (regExp.test(phoneInput.value)){
        phoneResult.innerHTML='OK'
        phoneResult.style.color='green'
        phoneInput.value=' '
    } else{
        phoneResult.innerHTML='incorrect value'
        phoneResult.style.color='red'
        phoneInput.value=' '
    }
}