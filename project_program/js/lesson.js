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

//TAB SLIDER
const tabContentBlocks=document.querySelectorAll('.tab_content_block')
const tabs=document.querySelectorAll('.tab_content_item')
const tabsParent=document.querySelector('.tab_content_items')
let currentTab=0;

const hideTabContent=()=>{
    tabContentBlocks.forEach(tabContentBlock=>{
        tabContentBlock.style.display='none';
    })
    tabs.forEach(tab=>{
        tab.classList.remove('tab_content_item_active')
    })
}
const showTabContent=(tabIndex=0)=>{
    tabContentBlocks[tabIndex].style.display='block'
    tabs[tabIndex].classList.add('tab_content_item_active')
}

const automaticSlider=(tabIndex)=>{
    hideTabContent()
    currentTab=(currentTab+1)%tabs.length
    showTabContent(currentTab)
}


hideTabContent()
showTabContent()
setInterval(automaticSlider, 4000)

tabsParent.onclick = (event)=>{
    if (event.target.classList.contains('tab_content_item')){
        tabs.forEach((tab, tabIndex)=>{
            if (event.target===tab){
                hideTabContent()
                currentTab=tabIndex
                showTabContent(currentTab)
            }
        })
    }
}

//convertor
const som=document.querySelector('#som')
const usd=document.querySelector('#usd')
const euro=document.querySelector('#eur')

const convertor=(element, targetElement,targetElement2, current)=>{
    element.oninput=()=>{
        const xhr=new XMLHttpRequest()
        xhr.open('GET','../data/converter.json')
        xhr.setRequestHeader('Content-type', 'application/json')
        xhr.send()
        xhr.onload=()=>{
            const data=JSON.parse(xhr.response)
            switch (current) {
                case 'som':
                    targetElement.value=(element.value/data.usd).toFixed(2)
                    targetElement2.value=(element.value/data.euro).toFixed(2)
                    break
                case 'usd':
                    targetElement.value=(element.value*data.usd).toFixed(2)
                    targetElement2.value=(targetElement.value/data.euro).toFixed(2)
                    break
                case 'euro':
                    targetElement.value=(element.value/data.usd*data.euro).toFixed(2)
                    targetElement2.value=(element.value*data.euro).toFixed(2)
                    break
                default:
                    break
            }
        }
    }
}
convertor(som, usd,euro, 'som')
convertor(usd, som,euro, 'usd')
convertor(euro, usd,som, 'euro')

//CARD SWITCHER
const card=document.querySelector('.card'),
    btnNext=document.querySelector('#btn-next'),
    btnPrev=document.querySelector('#btn-prev')
let count=1
const doFetch=()=>{
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response=>response.json())
        .then(data=>{
            card.innerHTML=`
            <p>${data.title}</p>
            <p style="color: ${data.completed ? 'green':'red'} ">${data.completed}</p>
            <span>${data.id}</span>
            `
        })
}
doFetch()
btnNext.addEventListener('click',()=>{
    count++
    if (count>200){
        count=1
    }
    doFetch()
})

btnPrev.addEventListener('click',()=>{
    count--
    if (count<1){
        count=200
    }
    doFetch()
})

//2 пунк дз fetch request

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(data=>console.log(data))


