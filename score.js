var storedScores = JSON.parse(localStorage.getItem("userData"));
var ScoresArea = document.querySelector("#highScoresList");
var backBtn = document.querySelector("#backButton");


function displayScores() {
    if (storedScores !== null) {
        var scoreList = document.createElement("ol");
        scoreList.className = "scoreListClass";
        for (var i = 0; i < storedScores.length; i++) {
            var initials = storedScores[i].inits;
            var scores = storedScores[i].userScore
            var scoreEntry = document.createElement("li");
            scoreEntry.innerHTML = initials + " - " + scores;
            scoreList.appendChild(scoreEntry);
        }
        ScoresArea.appendChild(scoreList);
    }
};

displayScores();

backBtn.addEventListener("click", function () {
    location.href = "index.html";
});

