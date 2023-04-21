

// element = document.querySelector('.popup');
// console.log("hiii");
// if (element != null){
//     console.log("zoho");
    
// }
// else {
//     element.addEventListener('click', function(){
//         var popup = document.createElement("div");
//         popup.classList.add("popup");
//         var content = document.createElement("div");
//         content.classList.add("popup-content");
//         content.innerHTML = "<p>Hello World!</p>";
//         popup.appendChild(content);
//         document.body.appendChild(popup);
        
//         // Remove the event listener to prevent the popup from being created again
//         this.removeEventListener('transitionend', arguments.callee);
//       });
// }

// var wid;
// let row = document.getElementsByClassName("gyro");

// function calcwidth(){
//     wid=window.innerWidth;
//     row[0].className = row[0].className.replace("row-cols-3", " ");
//     row[0].className = row[0].className.replace("row-cols-2", " ");
//     row[0].className = row[0].className.replace("row-cols-1", " ");

//     if (wid < 1100 && wid > 650){
//         row[0].className += " row-cols-2";
//     } else if (wid < 650){
//         row[0].className += " row-cols-1";
//     }else if (wid > 1100){
//         row[0].className += " row-cols-3";
//     }
// }
window.addEventListener("resize", changesrc);
changesrc();
var wid;

function changesrc() {
    wid = window.innerWidth;
    var but = document.getElementById("navv");
    console.log("hi");
    if (wid < 800 && wid) {
        console.log("never");
        but.style.display = "block";
    } else {
        console.log("no");
    }
}

// const hamburger = document.querySelector('.navbar-burger');
// const sideNav = document.querySelector('.menu');

// hamburger.addEventListener('click', () => {
//   sideNav.classList.toggle('show');
// });

