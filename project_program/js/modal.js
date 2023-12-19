//MODAL
const modal=document.querySelector('.modal')
const modalTrigger=document.querySelector('#btn-get')
const modalCloseButton=document.querySelector('.modal_close')
const body=document.querySelector('body')

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


setTimeout(openModal, 10000)


let counter =document.documentElement.scrollHeight*0.72
window.addEventListener("scroll",render=()=>{
    console.log(window.scrollY, counter)
    if(window.scrollY>=(counter) ){
        openModal()
        window.removeEventListener('scroll',render)
    }
})

