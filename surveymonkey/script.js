document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const recommend = document.getElementById("recommend").value;
    const comments = document.getElementById("comments").value;

    const rating = document.querySelector('input[name="rating"]:checked');

    const selectedFeatures = [];
    const featureBoxes = document.querySelectorAll('input[name="features"]:checked');

    featureBoxes.forEach(function(box) {
        selectedFeatures.push(box.value);
    });

    const message =
        "Thank you, " + name + "!" +
        "<br><br>Email: " + email +
        "<br>Favorite Subject: " + subject +
        "<br>Class Rating: " + (rating ? rating.value : "No rating selected") +
        "<br>Recommended: " + recommend +
        "<br>Features to Improve: " + (selectedFeatures.length > 0 ? selectedFeatures.join(", ") : "None selected") +
        "<br>Comments: " + (comments ? comments : "No additional comments");

    document.getElementById("resultMessage").innerHTML = message;
    document.getElementById("resultBox").style.display = "block";

    document.getElementById("surveyForm").reset();
});