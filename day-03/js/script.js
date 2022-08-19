document.getElementById('button').onmouseover = function(){mouseOver()}
document.getElementById('button').onmouseout = function(){mouseOut()}
const body = document.querySelector('body');
const shadow = document.getElementById('btn');
const cd = document.getElementById('cd');
const cont = document.querySelector('.cont');
const title = 'Created by Jonas Fernandes. Thank you! :)'
function mouseOver(){
    body.style.background = 'white'
    shadow.style.background = 'white'
    shadow.style.transition = '1s'
    body.style.transition = '1s'
    cont.style.background = 'white'
    cont.style.transition = '1s'

}
function mouseOut(){
    body.style.background = '#2b2b2b'
    body.style.transition = '1s'
    shadow.style.transition = '1s'
    shadow.style.background = '#2b2b2b'
    cont.style.background = 'white'
    cont.style.transition = '1s'

}

function clickFunction(){
    document.querySelector('#button').innerHTML = title
    document.querySelector('#button').style.transition = '1s'
}