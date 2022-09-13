const toggle = document.getElementById('toggleDark')
const bg = document.querySelector('body')

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-brightness-high-fill')
    if(this.classList.toggle('bi-moon')){
        toggle.style.color = 'white'
        bg.style.background = '#1a1a1a'
        bg.style.transition = '0.5s'
        toggle.style.transition = '0.5s'
    } else {
        toggle.style.color = '#1a1a1a'
        bg.style.background = 'white'
        bg.style.transition = '0.5s'
        toggle.style.transition = '0.5s'

    }
})