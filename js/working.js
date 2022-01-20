// Starting of Search box
function opensearchbox() {
    let serachSection = document.getElementById('search-section');
    serachSection.style.display = "block";
    document.getElementById('search-icon').style.display = "none";
    document.getElementById('mycart').style.display = "none";
}
function showSearchMycartIcons() {
    document.getElementById('search-section').style.display = "none";
    document.getElementById('search-icon').style.display = "inline-block";
    document.getElementById('mycart').style.display = "inline-block";
} // Ending of Search box

// Starting of Image Carousel
var slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const indicators = document.querySelector('.indicators');
let i = 0;

//For manual change

prev.addEventListener("click", function () {
    if (i == 0) {
        i = slides.length - 1;
    } else {
        i--;
    }
    changeSlide();
    updateCircleIndicator()
});

next.addEventListener("click", function () {
    if (i == slides.length - 1) {
        i = 0;
    } else {
        i++;
    }
    changeSlide();
    updateCircleIndicator()
});


// Adding Indicators
function circleIndicators() {
    for (let i = 0; i < slides.length; i++) {
        const div = document.createElement("div");
        div.innerHTML = i + 1;
        div.setAttribute("id", i);
        div.setAttribute("onclick", "indicateSlide(this.id)");
        if (i == 0) {
            div.className = "active";
        }
        indicators.appendChild(div);

    }
}
circleIndicators();
function updateCircleIndicator() {
    for (let i = 0; i < indicators.children.length; i++) {
        indicators.children[i].classList.remove("active");

    }
    indicators.children[i].classList.add("active");
}
function indicateSlide(m) {
    i = m;
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[i].classList.add("active");

    updateCircleIndicator();
}



function changeSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[i].classList.add("active");
}


//Ending of Image Carousel

//  For Active Content in Account page

function changeProfileContent() {
    let content_wrapper = document.querySelectorAll(".content-wrapper");
    for (let x = 0; x < content_wrapper.length; x++) {
        if (content_wrapper[x].hasAttribute("id") == true) {
            content_wrapper[x].removeAttribute("id");
        }
    }
    content_wrapper[0].setAttribute("id", "active_content");
}

function changeOrderContent() {

    let content_wrapper = document.querySelectorAll(".content-wrapper");
    for (let x = 0; x < content_wrapper.length; x++) {
        if (content_wrapper[x].hasAttribute("id") == true) {
            content_wrapper[x].removeAttribute("id");
        }
    }
    content_wrapper[1].setAttribute("id", "active_content");
}
function changeReviewContent() {
    let content_wrapper = document.querySelectorAll(".content-wrapper");
    for (let x = 0; x < content_wrapper.length; x++) {
        if (content_wrapper[x].hasAttribute("id") == true) {
            content_wrapper[x].removeAttribute("id");
        }
    }
    content_wrapper[2].setAttribute("id", "active_content");
}

function changeWishlistContent() {
    let content_wrapper = document.querySelectorAll(".content-wrapper");
    for (let x = 0; x < content_wrapper.length; x++) {
        if (content_wrapper[x].hasAttribute("id") == true) {
            content_wrapper[x].removeAttribute("id");
        }
    }
    content_wrapper[3].setAttribute("id", "active_content");
}


