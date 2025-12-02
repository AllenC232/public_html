document.addEventListener("DOMContentLoaded", () => {

    console.log("JS Loaded Successfully!");

    const body = document.body;
    const headerTitle = document.querySelector(".site-title");

    function toggleBackground() {
        if (body.style.backgroundColor === "rgb(240, 240, 240)") {
            body.style.backgroundColor = "";
        } else {
            body.style.backgroundColor = "rgb(240, 240, 240)";
        }
    }

    const title = document.getElementById("main-article-title");
    const mainImage = document.querySelector(".placeholder-image img");
    const essayButton = document.querySelector(".read-full-link");

    function changeContent() {
        if (title) {
            title.textContent = "Awareness Begins With You";
        }
        if (mainImage) {
            mainImage.src = "images/libro800x600.png";
        }
    }

    const part2Title = document.getElementById("articles-title");
    const part2BackLink = document.querySelector(".back-link");

    function highlightPart2Title() {
        if (part2Title.style.borderBottomColor === "red") {
            part2Title.style.borderBottomColor = "";
            part2Title.style.color = "";
        } else {
            part2Title.style.borderBottomColor = "red";
            part2Title.style.color = "#8b0000";
        }
    }

    const worksCitedList = document.querySelector(".works-cited");

    function addCitationExample(event) {
        event.preventDefault();
        if (worksCitedList) {
            const newItem = document.createElement("li");
            newItem.textContent = "New Citation Added Dynamically: Smith, J. The Science of Critical Thinking. Academic Press, 2024.";
            worksCitedList.appendChild(newItem);
            this.removeEventListener("click", addCitationExample);
            console.log("New citation added!");
        }
    }

    if (headerTitle) {
        headerTitle.addEventListener("click", toggleBackground);
    }

    if (essayButton) {
        essayButton.addEventListener("click", changeContent);
    }

    if (part2Title) {
        part2Title.addEventListener("mouseover", highlightPart2Title);
        part2Title.addEventListener("mouseout", highlightPart2Title);
    }

    if (worksCitedList) {
        const firstCitation = worksCitedList.querySelector("li:first-child");
        if (firstCitation) {
            firstCitation.addEventListener("click", addCitationExample);
        }
    }
});