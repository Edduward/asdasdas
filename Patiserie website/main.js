const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);



// POPUP


// 1
document.querySelector("#open-popup1").addEventListener('click',function() {
    document.querySelector('#modal-container1').classList.add("show");
})
document.querySelector("#close1").addEventListener('click',function() {
    document.querySelector('#modal-container1').classList.remove("show");
})

// 2
document.querySelector("#open-popup2").addEventListener('click',function() {
    document.querySelector('#modal-container2').classList.add("show");
})
document.querySelector("#close2").addEventListener('click',function() {
    document.querySelector('#modal-container2').classList.remove("show");
})

// 3
document.querySelector("#open-popup3").addEventListener('click',function() {
    document.querySelector('#modal-container3').classList.add("show");
})
document.querySelector("#close3").addEventListener('click',function() {
    document.querySelector('#modal-container3').classList.remove("show");
})

// 4
document.querySelector("#open-popup4").addEventListener('click',function() {
    document.querySelector('#modal-container4').classList.add("show");
})
document.querySelector("#close4").addEventListener('click',function() {
    document.querySelector('#modal-container4').classList.remove("show");
})

// 5
document.querySelector("#open-popup5").addEventListener('click',function() {
    document.querySelector('#modal-container5').classList.add("show");
})
document.querySelector("#close5").addEventListener('click',function() {
    document.querySelector('#modal-container5').classList.remove("show");
})

// 6
document.querySelector("#open-popup6").addEventListener('click',function() {
    document.querySelector('#modal-container6').classList.add("show");
})
document.querySelector("#close6").addEventListener('click',function() {
    document.querySelector('#modal-container6').classList.remove("show");
})
