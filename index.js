// for show header in mobile
let menu=document.querySelector(".header__menu__lap");
let background = document.querySelector(".background-black");
let header__menu=document.querySelector(".header__menu");
header__menu.addEventListener("click",(e)=>{
    menu.classList.add("show");
})
header__menu.addEventListener("click",(e)=>{
    background.classList.toggle("show");
});
background.addEventListener("click", (e) => {
  background.classList.remove("show");
  menu.classList.remove("show");
});
// for animated imgs
let imgs=document.querySelectorAll("img#animated");
let isShow=(element)=>{
    let hightuser=window.scrollY;
    let objecthight=element.getBoundingClientRect().top;
    let result=hightuser+objecthight;
    if(result-500<=window.scrollY){
        element.classList.add("show");
    }
}
window.addEventListener("scroll",(e)=>{
    imgs.forEach(img=>{
        isShow(img);
    })
})
