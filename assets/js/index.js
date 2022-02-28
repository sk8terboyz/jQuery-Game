
// Array of hints to display to the user when requested
hints = ["Look Left", "Look Right"];
// Hint counter to keep track of which hint is to be displayed
hintCounter = 0;
// Display hints automatically based on user input and display new hints each time
$("#hints").on("click", function() {
    $(".hints__container").fadeIn("slow");
    if(hintCounter >= hints.length) {
        $("#hint-title").text("Hints Unavailable");
        $("#hint-content").text("There are no more hints available")
    } else {
        $("#hint-title").text("Hint #" + hintCounter);
        hintCounter++;        
    }
})

// close out of the hint pop-up box
$("#hint-close").on("click", function() {
    $(".hints__container").fadeOut("slow");
});
$("#hint-x").on("click", function() {
    $(".hints__container").fadeOut("slow");
});


