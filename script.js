var currentDay = $('#currentDay');

// displays the current time and day
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm a');
  currentDay.text(rightNow);
}

setInterval(displayTime, 1000);

$(".saveBtn").on("click", function () {
  
  console.log(this);
  var text = $(this).siblings(".description").val(); 
  var time = $(this).parent().attr("id"); 
  
  //set items in local storage.
  localStorage.setItem(time, text);
})

function hourTracker() {
  //get current number of hours.
  var currentHour = moment().hour(); // use of moment.js

$(".time-block").each(function () {
  var blockHour = parseInt($(this).attr("id").split("hour")[1]);
  console.log(blockHour, currentHour)


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

hourTracker(); 