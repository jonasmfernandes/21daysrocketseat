const toggle = document.getElementById('toggleDark')
const body = document.querySelector('body')
const text = document.getElementById('text')
const jonas = document.getElementById('jonas')

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon')
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white'
        text.style.background = 'white'
        body.style.color = '#1a1a1a'
        body.style.transition = '1s'
        text.style.transition = '1s'
        toggle.style.background = 'white'
        toggle.style.color = '#1a1a1a'
        toggle.style.transition = '1s'
        jonas.style.background = 'white'
        jonas.style.color = '#1a1a1a'
        jonas.style.transition = '1s'
    } else {
        body.style.background = '#1a1a1a'
        text.style.background = '#1a1a1a'
        text.style.transition = '1s'
        body.style.color = 'white'
        body.style.transition = '1s'
        toggle.style.transition = '1s'
        toggle.style.background = '#1a1a1a'
        toggle.style.color = 'white'
        jonas.style.transition = '1s'
        jonas.style.color = 'white'
        jonas.style.background = '#1a1a1a'
    }
})

