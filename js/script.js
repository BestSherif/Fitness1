"use strict";

let ulList = document.querySelectorAll(".nav-menu__list-item");
console.log(ulList);
let firstItem = ulList[0].innerHTML;
console.log(firstItem);
firstItem.style.color = `red`;
