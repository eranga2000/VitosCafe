const searchicon1 = document.querySelector('#searchicon1');
const srchicon1 = document.querySelector('#srchicon1');
const search1 = document.querySelector('#searchinput1');

searchicon1.addEventListener('click',function(){
search1.style.display = 'flex';
searchicon1.style.display = 'none';
})

const searchicon2 = document.querySelector('#searchicon2');
const srchicon2 = document.querySelector('#srchicon2');
const search2 = document.querySelector('#searchinput2');

searchicon2.addEventListener('click',function(){
    search2.style.display = 'flex';
    searchicon2.style.display = 'none';
    })

const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');

bar.addEventListener('click', function(){
    setTimeout(()=>{
        cross.style.display ='block';
    },200);
    headerbar.style.right = '0%';
})

cross.addEventListener('click',function(){
    cross.style.display = 'none';
    headerbar.style.right = '-100%';
    })

// contact us js
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// about us


/* slider javascript  */
// Slider JavaScript
 const slider = document.querySelector('.storyslider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicators = document.querySelectorAll('.controls ul li');

let sectionIndex = 0;


function updateSlider() {
  slider.style.transform = `translateX(-${sectionIndex * 25}%)`;
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('selectedslide', index === sectionIndex);
  });
}

function onLeftArrowClick() {
  sectionIndex = Math.max(sectionIndex - 1, 0);
  updateSlider();
}


function onRightArrowClick() {
  sectionIndex = Math.min(sectionIndex + 1, indicators.length - 1);
  updateSlider();
}


leftArrow.addEventListener('click', onLeftArrowClick);
rightArrow.addEventListener('click', onRightArrowClick);


indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    sectionIndex = index;
    updateSlider();
  });
});


updateSlider();
 




