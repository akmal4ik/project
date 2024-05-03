let modal = document.querySelector('.modal')
let btn = document.querySelector('.nav_btn')

btn.addEventListener('click', function(){
    modal.classList.style.display = 'block'
})

function x_btn(){
    modal.classList.remove('active')
}