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



