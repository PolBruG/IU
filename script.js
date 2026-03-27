function myAccFunc() {
    var x = document.getElementById("demoAcc");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-blue";
    } else { 
        x.className = x.className.replace(" w3-show", "");
        x.previousElementSibling.className = x.previousElementSibling.className.replace(" w3-blue", "");
    }
}

function myAccFunc2() {
    var x = document.getElementById("demoAcc2");
    if (x.className.indexOf("w3-show") == -1) {
	x.className += " w3-show";
	x.previousElementSibling.className += " w3-grey";
    } else { 
	x.className = x.className.replace(" w3-show", "");
	x.previousElementSibling.className = x.previousElementSibling.className.replace(" w3-grey", "");
    }
}

function myAccFunc3() {
    var x = document.getElementById("demoAcc3");
    if (x.className.indexOf("w3-show") == -1) {
	x.className += " w3-show";
	x.previousElementSibling.className += " w3-grey";
    } else { 
	x.className = x.className.replace(" w3-show", "");
	x.previousElementSibling.className = x.previousElementSibling.className.replace(" w3-grey", "");
    }
}

function myAccFunc4() {
    var x = document.getElementById("demoAcc4");
    if (x.className.indexOf("w3-show") == -1) {
	x.className += " w3-show";
	x.previousElementSibling.className += " w3-grey";
    }
    else { 
	x.className = x.className.replace(" w3-show", "");
	x.previousElementSibling.className = x.previousElementSibling.className.replace(" w3-grey", "");
    }
}
function myDropFunc() {
    var x = document.getElementById("demoDrop");
    if (x.className.indexOf("w3-show") == -1) {
	x.className += " w3-show";
	x.previousElementSibling.className += " w3-green";
    }
    else { 
	x.className = x.className.replace(" w3-show", "");
	x.previousElementSibling.className = x.previousElementSibling.className.replace(" w3-green", "");
    }
}

function openNav() {
    document.getElementById("mySidebar").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
}

function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
		
function toggleEstat(boto) {	
    if (boto.innerHTML === "ON") {	
        boto.innerHTML = "OFF";
        boto.classList.remove("w3-green");
        boto.classList.add("w3-red");
    } else {
        boto.innerHTML = "ON";
        boto.classList.remove("w3-red");
        boto.classList.add("w3-green");
    }
    
}
		
function obrirDesplegable(id) {	
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show"; 
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }	
}
