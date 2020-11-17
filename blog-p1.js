// ScrollReveal ---------------------

ScrollReveal().reveal('article');
ScrollReveal().reveal('h1', { delay: 471 });
ScrollReveal().reveal('h2', { delay: 563 });

// ScrollReveal FIN---------------------


// !ALERT Pop-up --------------------------
function popup() { alert("502UNKNOW FATAL ERROR 4673-  non, bienvenue et amuse toi bien !") }

setTimeout(popup, 3000);

// !ALERT Pop-up FIN --------------------------

// Menu Burger -----------------------

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// Menu Burger FIN-----------------------