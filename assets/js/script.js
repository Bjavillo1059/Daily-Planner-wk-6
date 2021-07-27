// Global variable declaration
var timeDisplayEl = $('#time-display');
// var listedTimeGroup = $('.listed-time')
var editBtn = $('.custom-btn')

// displaying the time
function displayCurrentTD() {
    var currentTime = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(currentTime);
  }

setInterval(displayCurrentTD, 1000);
console.log(displayCurrentTD);

editBtn.addEventListner('click', function() {
  console.log(editBtn);

});

// When the user clicks on the button, open the modal
editBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}