let snackbtn=document.querySelector(".btn-primary")
let snackbar = document.querySelector(".snackbar")
const snackshow=()=>{
   snackbar.classList.add("show")
   setTimeout(()=>{snackbar.classList.remove("show")},3000)
}
if(snackbtn){
    snackbtn.addEventListener("click",snackshow)
}
console.log(snackbtn)