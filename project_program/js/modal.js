//MODAL
const modal=document.querySelector('.modal')
const modalTrigger=document.querySelector('#btn-get')
const modalCloseButton=document.querySelector('.modal_close')

const openModal=()=>{
    modal.style.display='block'
    document.body.style.overflow='hidden'
}
const closeModal=()=>{
    modal.style.display='none'
    document.body.style.overflow=''

}
modalTrigger.onclick=()=>openModal()
modalCloseButton.onclick=()=> closeModal()
modal.onclick=(event)=>{
    if(event.target===modal) {
        closeModal()
    }
}


// setTimeout(openModal, 10000)


let counter =document.documentElement.scrollHeight*0.72
window.addEventListener("scroll",render=()=>{
    if(window.scrollY>=(counter) ){
        openModal()
        window.removeEventListener('scroll',render)
    }
})

//post data
const form=document.querySelector('form')
const postData=(url='', data={})=>{
    fetch(url, {
        method: 'POST',
        headers:{"Content-type": "application/json"},
        body: JSON.stringify(data)
    })
}

const bindPostData=(formElement)=>{
    formElement.onsubmit=(event)=>{
        event.preventDefault()
        const formData=new FormData(formElement)
        const userinfo={}
        formData.forEach((item, index)=>{
            userinfo[index]=item
        })
        if (window.location.pathname==='/project/index.html'){
            postData('server.php', userinfo)
        }else {
            postData('../server.php', userinfo)
        }
    }
}
bindPostData(form)


