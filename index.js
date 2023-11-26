const sidebarbtn = document.querySelector(".toggle-btn")
const  sidebar = document.querySelector("aside")
sidebarbtn.addEventListener("click",()=>{
    document.body.classList.toggle("active")
})