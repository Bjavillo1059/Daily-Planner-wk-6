// Global variable declaration
var timeDisplayEl = $('#time-display');
var displayTableEl = $('#display-table');
var modalClickEl = $('#hourly-modal');
var modalFormEl = $('#modal-form')
var modalCloseEl = $('#modal-btn');
var modalTitleEl = $('#modal-title-input');
var modalDescriptionEl = $('#modal-description-input');
var modalPriorityEl = $('modal-priority-input');
var modalTaskStatusEl = $('modal-status-input');
var modalSubmit = $('#submit-info');


// displaying the time
function displayDate() {
  var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  $('#time-display').text(currentTime);
}

// create element for modal --done
// creat time input for modal --done
// create title input for modal --done
// create desciption input for modal --done
// create priority dropdown for modal --done
// create dropdown window for when time has past (need to add class color change to column when selected)
// add a delete btn to remove input information from table --done
// make modal disappear once info is input
// 

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

// handle project form submission
function modalFormSubmit(event) {
  event.preventDefault();

  var projectName = projectNameInputEl.val().trim();
  var projectType = projectTypeInputEl.val().trim();
  var hourlyRate = hourlyRateInputEl.val().trim();
  var dueDate = dueDateInputEl.val().trim();

  printProjectData(projectName, projectType, hourlyRate, dueDate);

  projectFormEl[0].reset();
}

setInterval(displayDate, 1000);