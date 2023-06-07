// ФИЛЬТР
const list = document.querySelector('.list');
const filterBox = document.querySelectorAll('.box');

function filter(){
    list.addEventListener('click', event =>{
        if (event.target.tagName !=='LI') return false;
    
        const targetId = event.target.dataset.id
        console.log(targetId)

        filterBox.forEach( elem => {
            elem.style.display = 'flex'
            if (!elem.classList.contains(targetId)) {
                elem.style.display = 'none';
            }
        })
    
    });
};
filter();

// БУРГЕР МЕНЮ В ХЕДЕРЕ
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("open")
    })
});

// МОДАЛЬНОЕ ОКНО (ПОЧЕМУ ТАК СЛОЖНО??????)
document.addEventListener("DOMContentLoaded", function() {   //ОТКРЫТЬ
    document.getElementById("opendd-modal").addEventListener("click", function(){ 
        document.getElementById("my-modal").classList.add("opend")
    })
});
document.addEventListener("DOMContentLoaded", function() {   //ЗАКРЫТЬ НА КНОПКУ
    document.getElementById("close-my-modal-btn").addEventListener("click", function(){
        document.getElementById("my-modal").classList.remove("opend")
    })
});
window.addEventListener('keydown', (e) => {                  //ЗАКРЫТЬ НА ESC
    if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("opend")
        
    }
});


document.querySelector("#my-modal .boxa").addEventListener('click', event =>{   //ЗАКРЫТЬ НА ПУСТУЮ ЧАСТЬ
    event._IsClickWithInModal = true;
});
document.querySelector("#my-modal").addEventListener('click', event =>{
    if (event._IsClickWithInModal) return;
    event.currentTarget.classList.remove('opend')
})

//СЛАЙДЕР
let offset = 1;
const sliderLine = document.querySelector('.line');

document.querySelector('.next').addEventListener("click", function() {
    offset = offset + 280;
    if (offset > 1120){
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
}) 

document.querySelector('.prev').addEventListener("click", function() {
    offset = offset - 280;
    if (offset < 0){
        offset = 1120;
    }
    sliderLine.style.left = -offset + 'px';
})

// аккордион
document.querySelectorAll('.accordion').forEach((el) => {
    el.addEventListener('click', () => {

        let text = el.nextElementSibling;
        console.log(text)

        if(text.style.maxHeight){
            document.querySelectorAll('.text').forEach((el) => el.style.maxHeight = null)
        } else{
            document.querySelectorAll('.text').forEach((el) => el.style.maxHeight = null)
            text.style.maxHeight = text.scrollHeight + 'px'
        }

    })
})

// ТАБЫ
const tabsItem = document.querySelectorAll('.item');
const tabsBlocks = document.querySelectorAll('.blocks');

tabsItem.forEach(function(item){
    item.addEventListener("click", function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId)

        console.log(tabId)

        tabsItem.forEach(function(item){
            item.classList.remove('active');

        })

        tabsBlocks.forEach(function(item){
            item.classList.remove('active');

        })

        currentBtn.classList.add('active');
        currentTab.classList.add('active')
    })
})