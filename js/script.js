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

    const structureTabButtons = document.querySelectorAll(".structure .tab-button");
    const structureTabContents = document.querySelectorAll(".structure .tab-content");

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
    addActiveExpert(structureTabButtons, structureTabContents);

    const expertSliderTabs = document.querySelectorAll(".expert-slider-content");
    const expertSliderContent = document.querySelectorAll(".expert-tab_block");

    function expertSldierTabs(i, numberOfSliderContent, sliderTabs, sliderContent) {
        for (let i = 0; i < sliderTabs.length; i++) {
            sliderTabs[i].classList.remove("active");
            if (sliderContent[i]) {
                sliderContent[i].classList.remove("active");
            }
        }
        expertSliderTabs[i].classList.add("active");
        expertSliderContent[numberOfSliderContent].classList.add("active");
    }

    expertSliderTabs.forEach((item, i) => {
        item.addEventListener("click", () => {
            if (((i + 1) / 4).toString().slice(2) == "25") {
                expertSldierTabs(i, 0, expertSliderTabs, expertSliderContent);
            } else if (((i + 1) / 4).toString().slice(2) == "5") {
                expertSldierTabs(i, 1, expertSliderTabs, expertSliderContent);
            } else if (((i + 1) / 4).toString().slice(2) == "75") {
                expertSldierTabs(i, 2, expertSliderTabs, expertSliderContent);
            } else {
                expertSldierTabs(i, 3, expertSliderTabs, expertSliderContent);
            }
        });
    });

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
        if (listOfNumberWrapper && numberParrent && arrOfNumber) {
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
    function createSlider(sliderWrapper, sliderItem, arrowPrev, arrowNext, itemShow) {
        let stepWidth = sliderItem[0].clientWidth + 20;

        let sliderStep = 0;

        arrowPrev.addEventListener("click", () => {
            if (sliderStep > 0) {
                sliderStep--;
            }
            sliderWrapper.style.transform = `translateX(${-sliderStep * stepWidth}px)`;
        });

        arrowNext.addEventListener("click", () => {
            if (sliderStep <= sliderItem.length - itemShow) {
                sliderStep++;
            }
            sliderWrapper.style.transform = `translateX(${-sliderStep * stepWidth}px)`;
        });
    }

    const sliderWrapper = document.querySelector(".course .slider-window");
    const sliderItem = document.querySelectorAll(".course .course-wrapper");
    const arrowPrev = document.querySelector(".course .slider-arrow.prev");
    const arrowNext = document.querySelector(".course .slider-arrow.next");
    if (window.innerWidth > 991) {
        createSlider(sliderWrapper, sliderItem, arrowPrev, arrowNext, 5);
    } else if (window.innerWidth > 767 && window.innerWidth < 992) {
        createSlider(sliderWrapper, sliderItem, arrowPrev, arrowNext, 4);
    } else if (window.innerWidth > 576 && window.innerWidth < 768) {
        createSlider(sliderWrapper, sliderItem, arrowPrev, arrowNext, 3);
    } else if (window.innerWidth < 577) {
        createSlider(sliderWrapper, sliderItem, arrowPrev, arrowNext, 2);
    } 

    const expertSliderWrapper = document.querySelector(".expert .slider-window");
    const expertSliderItem = document.querySelectorAll(".expert .expert-slider-content");
    const expertArrowPrev = document.querySelector(".expert .slider-arrow.prev");
    const expertArrowNext = document.querySelector(".expert .slider-arrow.next");
    if (window.innerWidth > 1200 ) {
        createSlider(expertSliderWrapper, expertSliderItem, expertArrowPrev, expertArrowNext, 7);
    } else if (window.innerWidth > 991 && window.innerWidth < 1201) {
        createSlider(expertSliderWrapper, expertSliderItem, expertArrowPrev, expertArrowNext, 6);
    } else if (window.innerWidth > 767 && window.innerWidth < 992) {
        createSlider(expertSliderWrapper, expertSliderItem, expertArrowPrev, expertArrowNext, 5);
    } else if (window.innerWidth > 576 && window.innerWidth < 768) {
        createSlider(expertSliderWrapper, expertSliderItem, expertArrowPrev, expertArrowNext, 4);
    } else if (window.innerWidth < 577) {
        createSlider(expertSliderWrapper, expertSliderItem, expertArrowPrev, expertArrowNext, 3);
    } 
    
});
