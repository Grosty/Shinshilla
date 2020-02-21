'use strict';

function typeText(elems) {
    let li = Array.from(document.querySelectorAll(elems));
    let liText = li.map((el)=>{
        return el.innerText;
    });
    li.forEach((it, indx)=> {
        let ofH = it.getBoundingClientRect().height + 'px';
        let ofW = it.getBoundingClientRect().width + 'px';
        it.innerText = '';
        it.style.minHeight = ofH;
        it.style.minWidth = ofW;
    });
    let line = 0;
    let count = 0;

    function lineText() {
        let timerID = setTimeout(()=>{
            li[line].innerHTML += liText[line][count];
            count++;

            if(count >= liText[line].length){
                count = 0;
                line++;
                if(line >= liText.length){
                    clearTimeout(timerID);
                    li.forEach((it)=> {
                        it.style.minHeight = 'auto';
                        it.style.minWidth = 'auto';
                    });
                    return true;
                }
            }
            lineText();
        }, 5);
    }
    lineText();
}

let windowHeight = document.documentElement.clientHeight;
let first = '.rent-list-wrap li';
let parent = document.querySelector(first).closest("ul");

let second = '.advantages_item li';
let parent2 = document.querySelector(second).closest("ul");

function scroll1(){
    if(parent.getBoundingClientRect().top + parent.offsetHeight/3 < windowHeight) {
        typeText(first);
        window.removeEventListener('scroll', scroll1);
    }
}
function scroll2(){
    if(parent2.getBoundingClientRect().top + parent2.offsetHeight/3 < windowHeight) {
        typeText(second);
        window.removeEventListener('scroll', scroll2);
    }
}


window.addEventListener('scroll', scroll1);
window.addEventListener('scroll', scroll2);

window.addEventListener('scroll', ()=>{
    if(pageYOffset > 30) {
        document.querySelector('.header').classList.add('headerScroll');
    } else {
        document.querySelector('.header').classList.remove('headerScroll');
    }
});
