function createSurveyResponse(
    person,
    q1Choice,
    q2Choice,
    q3Choice,
    q4Choice,
    q5Choice,
    q6Choice,
    q7Choice,
    q8Choice,
    q9Choice,
    q10Choice
) {
    return {
        person: person,
        q1: {
            Daily: q1Choice === "Daily",
            Weekly: q1Choice === "Weekly",
            Monthly: q1Choice === "Monthly",
            Rarely: q1Choice === "Rarely"
        },
        q2: {
            Paperback: q2Choice === "Paperback",
            Hardcover: q2Choice === "Hardcover",
            Ebook: q2Choice === "Ebook",
            Audiobook: q2Choice === "Audiobook"
        },
        q3: {
            Fantasy: q3Choice === "Fantasy",
            Mystery: q3Choice === "Mystery",
            History: q3Choice === "History",
            Science: q3Choice === "Science"
        },
        q4: {
            OnlineAds: q4Choice === "OnlineAds",
            Friends: q4Choice === "Friends",
            SocialMedia: q4Choice === "SocialMedia",
            StoreDisplay: q4Choice === "StoreDisplay"
        },
        q5: {
            Digital: q5Choice === "Digital",
            Physical: q5Choice === "Physical",
            Both: q5Choice === "Both"
        },
        q6: {
            OneBook: q6Choice === "OneBook",
            TwoToThree: q6Choice === "TwoToThree",
            FourToFive: q6Choice === "FourToFive",
            SixPlus: q6Choice === "SixPlus"
        },
        q7: {
            OnlineStore: q7Choice === "OnlineStore",
            Bookstore: q7Choice === "Bookstore",
            Library: q7Choice === "Library",
            Borrowed: q7Choice === "Borrowed"
        },
        q8: {
            Yes: q8Choice === "Yes",
            No: q8Choice === "No"
        },
        q9: {
            Morning: q9Choice === "Morning",
            Afternoon: q9Choice === "Afternoon",
            Night: q9Choice === "Night"
        },
        q10: {
            Recommend: q10Choice === "Recommend",
            NotRecommend: q10Choice === "NotRecommend"
        }
    };
}

const surveyResponses = [
    createSurveyResponse("Levi", "Daily", "Paperback", "Fantasy", "Friends", "Physical", "TwoToThree", "OnlineStore", "Yes", "Afternoon", "Recommend"),
    createSurveyResponse("Ava", "Weekly", "Hardcover", "Mystery", "OnlineAds", "Digital", "OneBook", "Bookstore", "Yes", "Morning", "Recommend"),
    createSurveyResponse("Mason", "Monthly", "Ebook", "History", "SocialMedia", "Digital", "FourToFive", "OnlineStore", "No", "Night", "NotRecommend")
];

for (let i = 0; i < surveyResponses.length; i++) {
    console.log("Survey Response " + (i + 1));
    console.log(surveyResponses[i]);
}