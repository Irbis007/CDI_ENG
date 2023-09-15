document.addEventListener("DOMContentLoaded", () => {

    // QUESTION ACCARDEON
    const questionWrapper = document.querySelectorAll(".question-wrapper");

    questionWrapper.forEach((item, i) => {
        item.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });


    // EXPERT TAB
    const expertTabButtons = document.querySelectorAll(".expert .tab-button");
    const expertTabContents = document.querySelectorAll(".expert .tab-content");

    expertTabButtons.forEach((item, i) => {
        item.addEventListener("click", () => {
            removeActiveExpert();
            item.classList.add("active");
            expertTabContents[i].classList.add("active");
        });
    });

    function removeActiveExpert() {
        for (let i = 0; i < expertTabButtons.length; i++) {
            expertTabButtons[i].classList.remove("active");
            expertTabContents[i].classList.remove("active");
        }
    }


    // FEEDBACK TAB
    const feedbackTabButtons = document.querySelectorAll(".feedback .tab-button");
    const feedbackTabContentsImg = document.querySelectorAll(".feedback .tab-content_img");
    const feedbackTabContentsText = document.querySelectorAll(".feedback .tab-content_text");

    feedbackTabButtons.forEach((item, i) => {
        item.addEventListener("click", () => {
            removeActiveFeedback();
            item.classList.add("active");
            feedbackTabContentsImg[i].classList.add("active");
            feedbackTabContentsText[i].classList.add("active");
        });
    });

    function removeActiveFeedback() {
        for (let i = 0; i < feedbackTabButtons.length; i++) {
            feedbackTabButtons[i].classList.remove("active");
            feedbackTabContentsImg[i].classList.remove("active");
            feedbackTabContentsText[i].classList.remove("active");
        }
    }


    // NUMBER ANIMATION
    const hamburger = document.querySelector(".hamburger");
    const headerNav = document.querySelector(".header-nav");

    hamburger.addEventListener("click", () => {
        headerNav.classList.toggle("active");
    });

    const time = 5000;
    const timeStep = 1;

    function outNum(num, elem) {
        let e = elem;
        n = 0;
        let t = Math.round(time / (num / timeStep));
        let interval = setInterval(() => {
            n = n + timeStep;
            if (n == num || n > num) {
                clearInterval(interval);
            }
            e.innerHTML = `${n}+`;
        }, t);
    }

    const advanceNumbers = document.querySelectorAll(".advance-number");
    const advancesNumber = [20, 8, 10];

    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                advanceNumbers.forEach((item, i) => {
                    outNum(advancesNumber[i], item);
                });
                observer.unobserve(advances);
            }
        });
    }

    const advances = document.querySelector(".advances");
    const observer = new IntersectionObserver(handleIntersection);
    observer.observe(advances);



    // SLIDER
    const sliderWrapper = document.querySelector(".course-window");
    const sliderItem = document.querySelectorAll(".course-wrapper");

    const arrowPrev = document.querySelector(".course-arrow.prev");
    const arrowNext = document.querySelector(".course-arrow.next");

    let stepWidth;

    if (window.innerWidth > 991) {
        stepWidth = sliderItem[0].clientWidth + 40;
    } else if (window.innerWidth > 767 && window.innerWidth < 991) {
        stepWidth = sliderItem[0].clientWidth + 30;
    } else if (window.innerWidth > 576 && window.innerWidth < 767) {
        stepWidth = sliderItem[0].clientWidth + 20;
    } else if (window.innerWidth < 576) {
        stepWidth = sliderItem[0].clientWidth + 18 + 33;
    }

    let sliderStep = 0;

    console.log(stepWidth);

    arrowPrev.addEventListener("click", () => {
        if (sliderStep > 0) {
            sliderStep--;
        }
        sliderWrapper.style.transform = `translateX(${-sliderStep * stepWidth}px)`;
    });

    arrowNext.addEventListener("click", () => {
        if (window.innerWidth > 991) {
            if (sliderStep <= sliderItem.length - 5) {
                sliderStep++;
            }
        } else if (window.innerWidth > 767 && window.innerWidth < 991) {
            if (sliderStep <= sliderItem.length - 4) {
                sliderStep++;
            }
        } else if (window.innerWidth > 576 && window.innerWidth < 767) {
            if (sliderStep <= sliderItem.length - 3) {
                sliderStep++;
            }
        } else if (window.innerWidth < 576) {
            if (sliderStep <= sliderItem.length - 2) {
                sliderStep++;
            }
        }
        sliderWrapper.style.transform = `translateX(${-sliderStep * stepWidth}px)`;
    });
});
