const allSurveyResponses = [];

document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const difficulty = document.getElementById("difficulty").value;
    const study = document.getElementById("study").value;
    const recommend = document.getElementById("recommend").value;
    const comments = document.getElementById("comments").value;

    const rating = document.querySelector('input[name="rating"]:checked');
    const confidence = document.querySelector('input[name="confidence"]:checked');

    const selectedFeatures = [];
    const featureBoxes = document.querySelectorAll('input[name="features"]:checked');

    featureBoxes.forEach(function(box) {
        selectedFeatures.push(box.value);
    });

    const surveyData = {
        name: name,
        email: email,
        subject: subject,
        rating: rating ? rating.value : "No rating selected",
        difficulty: difficulty,
        featuresToImprove: selectedFeatures,
        studyHabit: study,
        recommend: recommend,
        confidence: confidence ? confidence.value : "No confidence selected",
        comments: comments ? comments : "No additional comments"
    };

    allSurveyResponses.push(surveyData);

    const jsonData = JSON.stringify(surveyData, null, 4);
    const allJsonData = JSON.stringify(allSurveyResponses, null, 4);

    console.log("Latest Survey Response:");
    console.log(jsonData);

    console.log("All Survey Responses:");
    console.log(allJsonData);

    const message =
        "Survey submitted successfully!" +
        "<br><br><strong>Latest Response (JSON):</strong>" +
        "<pre>" + jsonData + "</pre>" +
        "<br><strong>All Responses Stored:</strong>" +
        "<pre>" + allJsonData + "</pre>";

    document.getElementById("resultMessage").innerHTML = message;
    document.getElementById("resultBox").style.display = "block";

    document.getElementById("surveyForm").reset();
});