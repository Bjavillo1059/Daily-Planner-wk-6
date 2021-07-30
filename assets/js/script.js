// Global variable declaration
var timeDisplayEl = $('#time-display');
var displayTableEl = $('#display-table');

var modalClickEl = $('#hourly-modal');
var modalFormEl = $('#modal-form')
var modalCloseEl = $('#modal-btn');
var modalTimeEl = $('#modal-time-input');
var modalTitleEl = $('#modal-title-input');
var modalDescriptionEl = $('#modal-description-input');
var modalPriorityEl = $('#modal-priority-input');
var modalTaskStatusEl = $('#modal-status-input');
var modalSubmit = $('#submit-info');
var modalStatusArr = ["Completed", "Not Completed", "Time Remains", "On hold"]
var modalTaskText = modalTaskStatusEl.text(modalStatusArr);




// displaying the time
function displayDate() {
  var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  $('#time-display').text(currentTime);
}

setInterval(displayDate, 1000);

var currentHour = moment().hour() // get a number from 24 hr clock (0-23)
var listItems = $('li')
for (let i = 0; i < listItems.length; i++) {
  if ((i + 8) < currentHour) {  
    $(listItems[i]).addClass('past') // adding a class of past to listItem
  } else if ((i + 8) == currentHour) {
    $(listItems[i]).addClass('present') // adding a class of present to listItem
  } else ((i + 8) > currentHour) 
    $(listItems[i]).addClass('future')
}

// date selected needs to be saved to calender link
// create element for modal --done
// creat time input for modal --done
// create title input for modal --done
// create desciption input for modal --done
// create priority dropdown for modal --done
// create dropdown window for when time has past (need to add class color change to column when selected) --working
// make modal disappear once info is input
// make a color change to the task status block when a certain text is written
// adding elements dynamically

renderLastRegistered();

function renderLastRegistered() {
  var listItems = $('li')

  for (let i = 0; i < listItems.length; i++) {
    var Id = $(listItems[i]).attr('id')
    var storageItem = localStorage.getItem(Id) // looking for info items in localStorage
    if (storageItem) { //undefined or holding value
      var p = $('<p>') // make p tag with jquery
      $(listItems[i]).append(p) // appending p tag to current list item
      p.text(JSON.parse(storageItem).description) // value added to p tag
      // console.log(storageItem)
    }
  }
}

// turn into array
// for loop cycle through list items
// 


modalFormEl.on('submit', function (e) {
  e.preventDefault();
  const data = {
    time: modalTimeEl.val(),
    title: modalTitleEl.val(),
    description: modalDescriptionEl.val(),
    priority: modalPriorityEl.val(),
    status: modalTaskStatusEl.val()
  }
  console.log(data);

  // if (modalTaskText === 'Completed') {
  //   $('#modal-status-input').addClass('text-white', 'bg-success');
  // } else if (modalTaskText === 'Not Completed') {
  //   $('#modal-status-input').addClass('text-white', 'bg-danger');
  // } else if (modalTaskText === 'Time Remains') {
  //   $('#modal-status-input').addClass('bg-warning');
  // } else (modalTaskText === 'On Hold')
  // $('#modal-status-input').addClass('text-white', 'bg-dark');



  localStorage.setItem(data.time, JSON.stringify(data));

  // var time = modalTimeEl.val();
  // var title = modalTitleEl.val();
  // localStorage.setItem("title", data.title);

  // var description = modalDescriptionEl.val();
  // localStorage.setItem("description", data.description);

  // var priority = modalPriorityEl.val();
  // localStorage.setItem("priority", data.priority);

  // var status = modalTaskStatusEl.val();
  // localStorage.setItem("status", data.status);

  renderLastRegistered();
});



function displayModalData(time, title, description, priority) {
  var displayTableRowEl = $('<tr>');

  var displayTimeTdEl = $('<td>').addClass('p-2').text(time);

  var displayTitleTdEl = $('<td>').addClass('p-2').text(title);

  var displayDescriptTdEl = $('<td>').addClass('p-2').text(description);

  var displayPriorityTdEl = $('<td>').addClass('p-2').text(priority);

  var deleteInfoBtn = $('<td>')
    .addClass('p-2 delete-info-btn text-center')
    .text('X');

  displayTableRowEl.append(
    displayTimeTdEl,
    displayTitleTdEl,
    displayDescriptTdEl,
    displayPriorityTdEl,
    deleteInfoBtn
  );

  displayTableEl.append(displayTableRowEl);

  modalClickEl.modal('hide');
}

function modalDeleteForm(event) {
  console.log(event.target);
  var btnClicked = $(event.target);
  btnClicked.parent('tr').remove();
}

displayTableEl.on('click', '.delete-info-btn', modalDeleteForm);