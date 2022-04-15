const modal = document.querySelector(".modal-wrapper")
const openBtn = document.querySelector(".modal-btn")
const closeBtn = document.querySelector(".close-btn")

openBtn.addEventListener("click",()=>{
    modal.style.display="block"
})

closeBtn.addEventListener("click",()=>{
    modal.style.display="none"
})
