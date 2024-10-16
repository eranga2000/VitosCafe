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
// food menu

    filterObjects("all");

    function filterObjects(c) {
      var x, i;
      x = document.getElementsByClassName("fitem");
      if (c == "all") {
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "flex";
        }
      } else {
        for (i = 0; i < x.length; i++) {
          if (x[i].classList.contains(c)) {
            x[i].style.display = "flex";
          } else {
            x[i].style.display = "none";
          }
        }
      }}
    
      // Add active class to the current button (highlight it)
    var btnContainer = document.getElementById("buttons"); // Change this to match your HTML
    var btns = btnContainer.getElementsByClassName("btn1");
    
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = btnContainer.getElementsByClassName("active");
        
        // Remove "active" class from the previously active button
        if (current.length > 0) {
          current[0].classList.remove("active");
        }
    
        // Add "active" class to the clicked button
        this.classList.add("active");
      });
    }
    
    /* favorite icon */
    // Make sure to wrap your code in a document ready function to ensure the DOM is fully loaded
    $(document).ready(function() {
      var selected = 'js-is-selected';
    
      $('.favorite').click(function() {
        if ($(this).hasClass(selected)) {
          $(this).removeClass(selected);
        } else {
          $(this).addClass(selected);
        }
      });
    });
    