document.addEventListener("DOMContentLoaded", () => {
    // QUESTION ACCARDEON
    const questionWrapper = document.querySelectorAll(".question-wrapper");

    questionWrapper.forEach((item, i) => {
        item.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });

    // EXPERT TAB
    const firstExpertTabButtons = document.querySelectorAll(".first-expert .tab-button");
    const firstExpertTabContents = document.querySelectorAll(".first-expert .tab-content");

    const secondExpertTabButtons = document.querySelectorAll(".second-expert .tab-button");
    const secondExpertTabContents = document.querySelectorAll(".second-expert .tab-content");

    function addActiveExpert(tabButtons, tabContent) {
        tabButtons.forEach((item, i) => {
            item.addEventListener("click", () => {
                removeActiveExpert(tabButtons, tabContent);
                item.classList.add("active");
                tabContent[i].classList.add("active");
            });
        });
    }

    function removeActiveExpert(tabButtons, tabContent) {
        for (let i = 0; i < tabButtons.length; i++) {
            tabButtons[i].classList.remove("active");
            tabContent[i].classList.remove("active");
        }
    }

    addActiveExpert(firstExpertTabButtons, firstExpertTabContents);
    addActiveExpert(secondExpertTabButtons, secondExpertTabContents);

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

    const hamburger = document.querySelector(".hamburger");
    const headerNav = document.querySelector(".header-nav");

    hamburger.addEventListener("click", () => {
        headerNav.classList.toggle("active");
    });

    // NUMBER ANIMATION
    const time = 10000;
    const step = 1;

    function outNum(num, elem) {
        n = 0;
        let t = Math.round(time / num);
        let interval = setInterval(() => {
            n = n + step;
            if (n == num) {
                clearInterval(interval);
            } else if (n > num) {
                elem.innerHTML = `${num}+`;
                clearInterval(interval);
                return;
            }
            elem.innerHTML = `${n}+`;
        }, t);
    }

    function startObserve(arrOfNumber, listOfNumberWrapper, numberParrent) {
        function handleIntersection(entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    listOfNumberWrapper.forEach((item, i) => {
                        outNum(arrOfNumber[i], item);
                    });
                    observer.unobserve(numberParrent);
                }
            });
        }

        const observer = new IntersectionObserver(handleIntersection);
        observer.observe(numberParrent);
    }

    startObserve(
        [20, 9, 11],
        document.querySelectorAll(".first-expert .advance-number"),
        document.querySelector(".first-expert .advances")
    );
    startObserve(
        [20, 1, 30],
        document.querySelectorAll(".second-expert .advance-number"),
        document.querySelector(".second-expert .advances")
    );

    // SLIDER
    const sliderWrapper = document.querySelector(".course .slider-window");
    const sliderItem = document.querySelectorAll(".course .course-wrapper");

    const arrowPrev = document.querySelector(".course .slider-arrow.prev");
    const arrowNext = document.querySelector(".course .slider-arrow.next");

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

    arrowPrev.addEventListener("click", () => {
        if (sliderStep > 0) {
            sliderStep--;
        }
        console.log(1);
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


    const experSliderWrapper = document.querySelector(".expert .slider-window");
    const experSliderItem = document.querySelectorAll(".expert .expert-slider_content");

    const experArrowPrev = document.querySelector(".expert .slider-arrow.prev");
    const expertArrowNext = document.querySelector(".expert .slider-arrow.next");


    let expertStepWidth;

    if (window.innerWidth > 991) {
        expertStepWidth = experSliderItem[0].clientWidth + 40;
    } else if (window.innerWidth > 767 && window.innerWidth < 991) {
        expertStepWidth = experSliderItem[0].clientWidth + 30;
    } else if (window.innerWidth > 576 && window.innerWidth < 767) {
        expertStepWidth = experSliderItem[0].clientWidth + 20;
    } else if (window.innerWidth < 576) {
        expertStepWidth = experSliderItem[0].clientWidth + 18 + 33;
    }

    let experSliderStep = 0;

    experArrowPrev.addEventListener("click", () => {
        if (experSliderStep > 0) {
            experSliderStep--;
        }
        experSliderWrapper.style.transform = `translateX(${-experSliderStep * expertStepWidth}px)`;
    });
    

    expertArrowNext.addEventListener("click", () => {
        if (window.innerWidth > 991) {
            if (experSliderStep <= experSliderItem.length - 13) {
                experSliderStep++;
            }
        } else if (window.innerWidth > 767 && window.innerWidth < 991) {
            if (experSliderStep <= experSliderItem.length - 4) {
                experSliderStep++;
            }
        } else if (window.innerWidth > 576 && window.innerWidth < 767) {
            if (experSliderStep <= experSliderItem.length - 3) {
                experSliderStep++;
            }
        } else if (window.innerWidth < 576) {
            if (experSliderStep <= experSliderItem.length - 2) {
                experSliderStep++;
            }
        }
        experSliderWrapper.style.transform = `translateX(${-experSliderStep * expertStepWidth}px)`;
    });

});
