// Diyorbek Website Script 3.4


console.log("Diyorbek Website 3.4 ishga tushdi!");


// Online status

function checkOnline(){

    if(navigator.onLine){

        console.log("Internet: Online");

    }else{

        console.log("Internet: Offline");

    }

}

window.addEventListener("online",checkOnline);
window.addEventListener("offline",checkOnline);

checkOnline();



// Live Clock

const clock = document.createElement("div");

clock.className = "clock";

document.body.appendChild(clock);


function updateClock(){

    let time = new Date();

    clock.innerHTML = time.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();




// Scroll progress bar

const progress = document.createElement("div");

progress.className="progress";

document.body.appendChild(progress);


window.addEventListener("scroll",()=>{

    let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    let scrolled =
    (window.scrollY / height) * 100;


    progress.style.width = scrolled + "%";

});




// Cursor effect

const cursor = document.createElement("div");

cursor.className="cursor";

document.body.appendChild(cursor);


document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});




// Keyboard shortcut

document.addEventListener("keydown",(e)=>{


    if(e.key === "Home"){

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    }


});




// Button animation

document.querySelectorAll(".button").forEach(btn=>{


    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });


    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });


});



// Year

const year = document.getElementById("year");

if(year){

    year.textContent =
    new Date().getFullYear();

}
