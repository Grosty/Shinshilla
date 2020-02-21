// 'use strict';
//
// let li = Array.from(document.querySelectorAll('.rent-list-wrap li'));
// let li2 = Array.from(document.querySelectorAll('.advantages_item li'));
//
//
// let liText = li.map((el)=>{
//     return el.innerText;
// });
//
// li.forEach((it, indx)=> {
//     let ofH = it.offsetHeight;
//     let ofW = it.offsetWidth;
//     it.innerText = '';
//     it.style.height = ofH + 'px';
//     it.style.width = ofW + 'px';
// });
//
// function typeText() {
//     let line = 0;
//     let count = 0;
//
//     function lineText() {
//         let timerID = setTimeout(()=>{
//             li[line].innerHTML += liText[line][count];
//             count++;
//
//             if(count >= liText[line].length){
//                 count = 0;
//                 line++;
//                 if(line >= liText.length){
//                     clearTimeout(timerID);
//                     return true;
//                 }
//             }
//             lineText();
//         }, 5);
//     }
//     lineText();
// }
//
// typeText();




// li.forEach((it, indx)=>{
//     let ofH = it.offsetHeight;
//     let ofW = it.offsetWidth;
//     it.innerText = '';
//     it.style.height = ofH + 'px';
//     it.style.width = ofW + 'px';
//
//
//
//     function text(){
//         let count = 0;
//         let out = '';
//
//         function line() {
//             let timerID = setTimeout(()=>{
//
//                 // out = liText[indx][count];
//                 // it.innerHTML += out;
//                 it.innerHTML += liText[indx][count];
//                 count++;
//
//                 if(count >= liText[indx].length){
//                     clearTimeout(timerID);
//                     return true;
//                 }
//                 line();
//             }, 50);
//         }
//         line();
//     }
//     text();
// });
