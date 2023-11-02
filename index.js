"use strict";
let container = document.createElement("div");
container.setAttribute("class", "container");

let innercontainer = document.createElement("div");
innercontainer.setAttribute("class", "innercontainer");

let Three_Btn=document.createElement("div");
Three_Btn.id="three_Btn"
let Btn_1 = document.createElement("button");
Btn_1.setAttribute("id", "Btn_1");

let Btn_2 = document.createElement("button");
Btn_2.setAttribute("id", "Btn_2");

let Btn_3 = document.createElement("button");
Btn_3.setAttribute("id", "Btn_3");
Three_Btn.append(Btn_1,Btn_2,Btn_3)

let Para=document.createElement("div");
Para.id="Para"
let p_content=document.createElement("div");
p_content.id="P_Content";
Para.appendChild(p_content)


container.append(innercontainer)
innercontainer.append(Three_Btn,Para);
document.body.append(container);

//..................Set Time Out methods........//
// Btn_1.style.backgroundColor = "red";

let a = 0;
let Red = 10;

function Signal() {

    if (a <= 10) {

        Btn_1.classList.add("btn_1");
        Btn_3.classList.remove("btn_3")
        Para.innerHTML = Red;
        Red--;
    }
    else if (a == 11 || a == 18 || a == 30) {
        if (a == 11) {
            Red = 5
        }
        else if (a == 30) {
            a = 0
            Red = 10;
        }
        else {
            Red = 10;
        }
    }
    else if (a >= 11 && a <= 17) {
        Btn_2.classList.add("btn_2")
        Btn_1.classList.remove("btn_1");

        Para.innerHTML = Red;
        Red--;

    }
    else if (a >= 17 && a <= 29) {
        Btn_2.classList.remove("btn_2")
        Btn_3.classList.add("btn_3")

        Para.innerHTML = Red;
        Red--
    }
    a++;
}
setInterval(Signal, 1000)
