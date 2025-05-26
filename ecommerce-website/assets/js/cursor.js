
let mouseCursor = null;
let cursorDot = null;
let isMoving = false;  
let lastX = 0;
let lastY = 0;


function init_cursor() {
    mouseCursor = document.querySelector(".cursor");
    cursorDot = document.querySelector(".cursor-dot");
    
    if(!mouseCursor || !cursorDot) {
        console.log("cursor elements nahi mile :(");
        return;
    }

   
    document.addEventListener("mousemove", function(e) {
      
        setTimeout(() => {
            lastX = e.clientX;
            lastY = e.clientY;
            updateCursor(e.clientX, e.clientY);
        }, 5);
    });

  
    const clickableStuff = document.querySelectorAll(
        "a, button, input, .btn-action, .card, .product-item"
    );

    clickableStuff.forEach((elem) => {
        elem.addEventListener("mouseenter", function() {
            mouseCursor.classList.add("hover");
            cursorDot.style.transform = "scale(0)";  
           
        });

        elem.addEventListener("mouseleave", function() {
            mouseCursor.classList.remove("hover");
            cursorDot.style.transform = "scale(1)";
        });
    });

  
    document.addEventListener("click", function(e) {
        createRipple(e.clientX, e.clientY);
        
       
        mouseCursor.style.transform = "scale(0.8)";
        setTimeout(() => {
            mouseCursor.style.transform = "scale(1)";
        }, 150);
    });
}


function updateCursor(x, y) {
    if(!mouseCursor || !cursorDot) return;  

   
    mouseCursor.style.left = x + "px";
    mouseCursor.style.top = y + "px";
    
    
    cursorDot.style.left = x + "px";
    cursorDot.style.top = y + "px";
}

function createRipple(x, y) {
    const ripple = document.createElement("div");
    ripple.className = "ripple";
    
   
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    
   
    const size = Math.random() * 20 + 90; 
    ripple.style.width = size + "px";
    ripple.style.height = size + "px";
    
    document.body.appendChild(ripple);
    
 
    ripple.addEventListener("animationend", function() {
        ripple.remove();
    });
}


document.addEventListener("visibilitychange", function() {
    if(document.hidden) {
        mouseCursor.style.display = "none";
        cursorDot.style.display = "none";
    } else {
        mouseCursor.style.display = "block";
        cursorDot.style.display = "block";
    }
});


document.addEventListener("DOMContentLoaded", init_cursor);


setTimeout(init_cursor, 1000); 