var currentDay = $('#currentDay');

// displays the current time and day
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  currentDay.text(rightNow);
}
// sets interval to display milleseconds
setInterval(displayTime, 1000);

// the save button function starts on click 
$(".saveBtn").on("click", function () {
  // the jquery refers to DOM elements, parent attribute for each hour and its siblings
  var text = $(this).siblings(".description").val(); 
  var time = $(this).parent().attr("id"); 
  
  //sets items in local storage.
  localStorage.setItem(time, text);
})
// hour tracker gets the current hour for the scheduler using moment.js
function hourTracker() {

  var currentHour = moment().hour();

  // the time block function splits the hour blocks
$(".time-block").each(function () {
  var blockHour = parseInt($(this).attr("id").split("hour")[1]);

// if block hour is less than current hour, this is considered the past and uses the class to set the color
// else if block hour is strict equal to current hour it adds the class that is present
// else then it makes it set to future
  if (blockHour < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
  }
  else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
  }
  else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
  }
})
// these set each hour of scheduler to local storage

  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  
}
// ends with hour tracker
hourTracker(); 