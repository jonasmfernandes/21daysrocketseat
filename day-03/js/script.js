document.getElementById('button').onmouseover = function(){mouseOver()}
document.getElementById('button').onmouseout = function(){mouseOut()}
const body = document.querySelector('body');
const shadow = document.getElementById('btn');
const title = 'Created by Jonas Fernandes. Thank you! :)'
function mouseOver(){
    body.style.background = 'white'
    shadow.style.background = 'white'
    shadow.style.transition = '1s'
    body.style.transition = '1s'

}
function mouseOut(){
    body.style.background = '#1a1a1a'
    body.style.transition = '1s'
    shadow.style.transition = '1s'
    shadow.style.background = '#1a1a1a'
}

function clickFunction(){
    document.querySelector('#button').innerHTML = title
    document.querySelector('#button').style.transition = '1s'
}