//PHONE CHECKER lesson1
const phoneInput = document.getElementById('phone_input')
const phoneButton = document.getElementById('phone_button')
const phoneResult = document.getElementById('phone_result')

const regExp = /^\+996 ([2579]\d{2})|312 \d{2}-\d{2}-\d{2}$/
phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
        phoneInput.value = ' '
    } else {
        phoneResult.innerHTML = 'incorrect value'
        phoneResult.style.color = 'red'
        phoneInput.value = ' '
    }
}

//TAB SLIDER
const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')
const hideTabContent = () => {
    tabContentBlocks.forEach(tabContentBlock => {
        tabContentBlock.style.display = 'none'
    })
    tabs.forEach(tab => {
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (tabIndex = 0) => {
    tabContentBlocks[tabIndex].style.display = 'block'
    tabs[tabIndex].classList.add('tab_content_item_active')
}

let currentTab = 0;
const automaticSlider = (tabIndex) => {
    hideTabContent()
    currentTab = (currentTab + 1) % tabs.length
    showTabContent(currentTab)
}
hideTabContent()
showTabContent()
setInterval(automaticSlider, 4000)

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab, tabIndex) => {
            if (event.target === tab) {
                hideTabContent()
                currentTab = tabIndex
                showTabContent(currentTab)
            }
        })
    }
}

//convertor
const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#eur')

const converter = async (element, targetElement, targetElement2, current) => {
    element.oninput = async () => {
        try {
            const response = await fetch('../data/converter.json')
            const data = await response.json()
            switch (current) {
                case 'som':
                    targetElement.value = (element.value / data.usd).toFixed(2)
                    targetElement2.value = (element.value / data.euro).toFixed(2)
                    break;
                case 'usd':
                    targetElement.value = (element.value / data.euro * data.usd).toFixed(2)
                    targetElement2.value = (element.value * data.usd).toFixed(2)
                    break;
                case 'euro':
                    targetElement.value = (element.value * data.euro).toFixed(2)
                    targetElement2.value = (element.value / data.usd * data.euro).toFixed(2)
                    break;
                default:
                    break
            }
        } catch (e) {
            console.log(e.message)
        }
    }

}

converter(som, usd, euro, 'som')
converter(usd, euro, som, 'usd')
converter(euro, som, usd, 'euro')

//CARD SWITCHER
const card = document.querySelector('.card'),
    btnNext = document.querySelector('#btn-next'),
    btnPrev = document.querySelector('#btn-prev')
let count = 1
const doFetch = async () => {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        const data = await response.json()
        card.innerHTML = `
            <p ">${data.title}</p>
            <p style="color: ${data.completed ? 'green' : 'red'} ">${data.completed}</p>
            <span>${data.id}</span>
            `
    }catch (e){
        console.log(e.message)
    }
}
doFetch()

btnNext.addEventListener('click', () => {
    count++
    if (count > 200) {
        count = 1
    }
    doFetch()
})

btnPrev.addEventListener('click', () => {
    count--
    if (count < 1) {
        count = 200
    }
    doFetch()
})

//2 пунк дз fetch request

const doRequest = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        console.log(data)
    } catch (e) {
        console.log(e.message)
    }
}
doRequest()
//WEATHER
const cityNameInput = document.querySelector('.cityName'),
    city = document.querySelector('.city'),
    temp = document.querySelector('.temp')

const BASE_URL = 'http://api.openweathermap.org'
const API_KEY = 'e417df62e04d3b1b111abeab19cea714'
cityNameInput.addEventListener('input', async (event) => {
    try {
        const response = await fetch(`${BASE_URL}/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}`)
        const data = await response.json()
        city.innerHTML = data.name ? data.name : 'Город не найден...'
        temp.innerHTML = data?.main?.temp ? Math.round(data.main.temp - 273.15) + '&deg; C' : '...'
    } catch (e) {
        console.log(e.message)
    }
})
