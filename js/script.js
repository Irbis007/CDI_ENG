

const questionWrapper = document.querySelectorAll('.question-wrapper');

questionWrapper.forEach((item, i) =>{
    item.addEventListener('click', ()=>{
        item.classList.toggle('active');
    });
});


const expertTabButtons = document.querySelectorAll('.expert .tab-button');
const expertTabContents = document.querySelectorAll('.expert .tab-content');

expertTabButtons.forEach((item, i) => {
    item.addEventListener('click', () =>{
        removeActiveExpert();
        item.classList.add('active');
        expertTabContents[i].classList.add('active');
    });
});

function removeActiveExpert() {
    for(let i = 0; i < expertTabButtons.length; i++){
        expertTabButtons[i].classList.remove('active');
        expertTabContents[i].classList.remove('active');
    };
};



const feedbackTabButtons = document.querySelectorAll('.feedback .tab-button');
const feedbackTabContentsImg = document.querySelectorAll('.feedback .tab-content_img');
const feedbackTabContentsText = document.querySelectorAll('.feedback .tab-content_text');

feedbackTabButtons.forEach((item, i) => {
    item.addEventListener('click', () =>{
        removeActiveFeedback()
        item.classList.add('active');
        feedbackTabContentsImg[i].classList.add('active');
        feedbackTabContentsText[i].classList.add('active');
    });
});

function removeActiveFeedback() {
    for(let i = 0; i < feedbackTabButtons.length; i++){
        feedbackTabButtons[i].classList.remove('active');
        feedbackTabContentsImg[i].classList.remove('active');
        feedbackTabContentsText[i].classList.remove('active');
    };
};
