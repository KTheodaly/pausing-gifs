//create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`.
var topicsVar = {
    topics: ["floof", "YAS", "Rude", "Spooky", "Ugly", "help", "pupper", "boogie", "no", "omg"],
    input = ($("input")),
    newTopic = $input.val().toLowerCase(),


    //Your app should take the topics in this array and create buttons in your HTML.
    // * Try using a loop that appends a button for each string in the array.

    addGif: function () {
        for (i = 0; i < topics.length; i++) {
            var gifBtn = $("<button>");
            gifBtn.val(topics[i]);
            gifBtn.text(topics[i]);
            gifBtn.attr("onclick", "topicsVar.addGif(this)");
            topics.append(gifBtn);
        }
        var topics = $("#topics");
        $topics.empty();
        if (newTopic == ! "") {
            this.topics.push(newTopic);
        }
        $input.val("");


        //When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

        //$("#button").on("click", function () {

        // Storing our giphy API URL 
        // var queryURL = "https://api.giphy.com/v1/gifs/search?" + "q=" + topic + "&apikey=qjFxu5atMh8ac6HoyhWZX6FyzvgyMnTD" + "&limit=10";

        // Perfoming an AJAX GET request to our queryURL
        // $.ajax({
        //  url: queryURL,
        //  method: "GET"
        //  })

        // After the data from the AJAX request comes back
        //   .then(function (response) {

        // Saving the image_original_url property
        //    var imageUrl = response.data.image_original_url;

        // Creating and storing an image tag
        //    var catImage = $("<img>");

        // Setting the catImage src attribute to imageUrl
        //    catImage.attr("src", imageUrl);
        //    catImage.attr("alt", "cat image");

        // Prepending the catImage to the images div
        //    $("#images").prepend(catImage);



        //When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

        //    gifMove: function (gifClicked) {
        //create a variable named dataType that is equal to value data-type
        //        var dataType = gifClicked.getAttribute("data-type");
        //if the variable a just made equal to that value is exactly equal to still, then set the src attribute to data-animate (from pausing gifs activity in class)
        //        if (dataType === "still") {
        //       $(this).attr("src", $(this).attr("data-animate"));
        //       $(this).attr("data-state", "animate");
        //        } else {
        //       $(this).attr("src", $(this).attr("data-still"));
        //       $(this).attr("data-state", "still");
    }
}
                });
        });
    }

//Under every gif, display its rating (PG, G, so on).
//* This data is provided by the GIPHY API.
//* Only once you get images displaying with button presses should you move on to the next step.

//6. Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.

//Calls the Giphy API and searches for gifs based on the topic button selected
