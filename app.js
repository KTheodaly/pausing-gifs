//array for the buttons we will display without the user inputting anything
var topics = ["floof", "YAS", "rude", "spooky", "ugly", "oops", "pupper", "boogie", "no", "omg"];

$(document).ready(function () {
    renderButton();
    function renderButton() {
        $("#allbuttons").empty();
        //here's my for loop to create the buttons
        for (var i = 0; i < topics.length; i++) {

            var newButton = $("<button>");
            newButton.addClass("itembutton");
            newButton.addClass("btn btn-success");
            newButton.text(topics[i]);
            newButton.attr("data-name", topics[i]);
            $("#allbuttons").append(newButton);
            //this should append it to my all buttons div
        }
    }
    //trying to create buttons for the user input
    $("#addbutton").on("click", function (event) {

        event.preventDefault();
        var addedData = $("#userinput").val().trim();
        if (addedData != "") {
            topics.push(addedData);
            renderButton();
            $("#userinput").val(" ");
        }

    });
    //onclick for the button class to display data we will pull
    $(document).on("click", ".itembutton", displayInfo);

    function displayInfo() {
        var itemName = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=food+" + itemName + "&rating=g&limit=10&api_key=qjFxu5atMh8ac6HoyhWZX6FyzvgyMnTD";
        $("#mainimages").empty();

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            var results = response.data;

            for (var i = 0; i < results.length; i++) {

                var dataImage = $("<img>");
                dataImage.attr("src", results[i].images.fixed_height_still.url);
                dataImage.attr("data-still", results[i].images.fixed_height_still.url);
                dataImage.attr("data-animate", results[i].images.fixed_height.url);
                dataImage.addClass("gif");
                dataImage.attr("data-state", "still");


                // assign variables for our data
                var gifRating = results[i].rating;
                var divRating = $("<p>").text("Rating: " + gifRating);

                //append our gifs to the divs 

                $("#mainimages").append(dataImage);
                $("#mainimages").append(divRating);
            }
        });
    }
    //this is just like the cat image, animal vs still
    $("#mainimages").on("click", ".gif", function () {
        //but maybe i cant use the div ID not sure what to target 
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }
        else if (state === "animate") {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });
})
