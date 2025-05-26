// ye cursor ka code hai - custom cursor banane ke liye
let mouseCursor = null;
let cursorDot = null;
let isMoving = false;  // extra variable but might need later
let lastX = 0;
let lastY = 0;

// cursor elements init karo
function init_cursor() {
    mouseCursor = document.querySelector(".cursor");
    cursorDot = document.querySelector(".cursor-dot");
    
    if(!mouseCursor || !cursorDot) {
        console.log("cursor elements nahi mile :(");
        return;
    }

    // basic movement
    document.addEventListener("mousemove", function(e) {
        // thoda delay add kiya hai movement me
        setTimeout(() => {
            lastX = e.clientX;
            lastY = e.clientY;
            updateCursor(e.clientX, e.clientY);
        }, 5);
    });

    // clickable elements pe hover effect
    const clickableStuff = document.querySelectorAll(
        "a, button, input, .btn-action, .card, .product-item"
    );

    // hover effects add karo
    clickableStuff.forEach((elem) => {
        elem.addEventListener("mouseenter", function() {
            mouseCursor.classList.add("hover");
            cursorDot.style.transform = "scale(0)";  // dot ko chota kardo
            // TODO: add more hover effects later
        });

        elem.addEventListener("mouseleave", function() {
            mouseCursor.classList.remove("hover");
            cursorDot.style.transform = "scale(1)";
        });
    });

    // click effect
    document.addEventListener("click", function(e) {
        createRipple(e.clientX, e.clientY);
        
        // cursor ko bhi thoda bounce karo
        mouseCursor.style.transform = "scale(0.8)";
        setTimeout(() => {
            mouseCursor.style.transform = "scale(1)";
        }, 150);
    });
}

// cursor position update karne ka function
function updateCursor(x, y) {
    if(!mouseCursor || !cursorDot) return;  // safety check

    // main cursor
    mouseCursor.style.left = x + "px";
    mouseCursor.style.top = y + "px";
    
    // dot cursor - thoda smooth movement
    cursorDot.style.left = x + "px";
    cursorDot.style.top = y + "px";
}

// click pe ripple effect
function createRipple(x, y) {
    const ripple = document.createElement("div");
    ripple.className = "ripple";
    
    // position set karo
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    
    // random size for variety
    const size = Math.random() * 20 + 90; // 90-110px range
    ripple.style.width = size + "px";
    ripple.style.height = size + "px";
    
    document.body.appendChild(ripple);
    
    // cleanup after animation
    ripple.addEventListener("animationend", function() {
        ripple.remove();
    });
}

// cursor hide/show on window focus
document.addEventListener("visibilitychange", function() {
    if(document.hidden) {
        mouseCursor.style.display = "none";
        cursorDot.style.display = "none";
    } else {
        mouseCursor.style.display = "block";
        cursorDot.style.display = "block";
    }
});

// initialize when DOM loads
document.addEventListener("DOMContentLoaded", init_cursor);

// backup init - kabhi kabhi DOMContentLoaded miss ho jata hai
setTimeout(init_cursor, 1000); 