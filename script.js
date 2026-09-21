function sendMessage(){

let name=document.getElementById("name").value;

let email=document.getElementById("email").value;

let message=document.getElementById("message").value;

if(name=="" || email=="" || message==""){

alert("Please fill all the fields.");

}

else{

alert("Thank you! Your message has been sent successfully.");

document.getElementById("name").value="";

document.getElementById("email").value="";

document.getElementById("message").value="";

}

}

function generateCareer() {

    let interest = document.getElementById("interest").value;
    let skill = document.getElementById("skill").value;
    let goal = document.getElementById("goal").value;

    if (interest === "" || skill === "" || goal === "") {
        alert("Please select all the options.");
        return;
    }

    let career = "";
    let explanation = "";
    let roadmap = "";

    // Artificial Intelligence
    if (
        (interest === "ai" && skill === "python") ||
        (goal === "ai" && skill === "python") ||
        (interest === "ai" && goal === "ai")
    ) {

        career = "AI Engineer";

        explanation =
            "Your combination of Artificial Intelligence interest, programming skills, and AI-focused goals aligns with an AI Engineering career path.";

        roadmap =
            "Python → Data Structures → Machine Learning → Deep Learning → AI Projects";

    }

    // Data Science
    else if (
        (interest === "data" && skill === "sql") ||
        (interest === "data" && goal === "data") ||
        (goal === "data" && skill === "python")
    ) {

        career = "Data Scientist";

        explanation =
            "Your interest in data, analytical skills, and data-focused career goals make Data Science a suitable career path.";

        roadmap =
            "Python → SQL → Statistics → Data Analysis → Machine Learning → Data Projects";

    }

    // Web Development
    else if (
        (interest === "web" && skill === "htmlcss") ||
        (interest === "web" && goal === "development")
    ) {

        career = "Web Developer";

        explanation =
            "Your interest in web development and focus on building software suggest a Web Development career path.";

        roadmap =
            "HTML → CSS → JavaScript → Responsive Design → Frontend Projects";

    }

    // Software Development
    else if (
        (interest === "software" && goal === "development") ||
        (interest === "software" && skill === "problem-solving") ||
        (goal === "development" && skill === "java")
    ) {

        career = "Software Developer";

        explanation =
            "Your software development interest, programming skills, and problem-solving focus align with a Software Developer career path.";

        roadmap =
            "Programming → Data Structures → Algorithms → Databases → Software Projects";

    }

    // Cloud Engineering
    else if (
        (interest === "cloud" && goal === "cloud") ||
        (interest === "cloud" && skill === "python") ||
        (goal === "cloud" && skill === "problem-solving")
    ) {

        career = "Cloud Engineer";

        explanation =
            "Your interest in cloud technologies and career goals suggest a Cloud Engineering career path.";

        roadmap =
            "Networking → Linux → Cloud Fundamentals → AWS/Azure → Deployment → Cloud Projects";

    }

    // General recommendation
    else {

        if (interest === "ai") {
            career = "AI Engineer";
            explanation =
                "Your interest in Artificial Intelligence makes AI Engineering a potential career direction.";
            roadmap =
                "Python → Data Structures → Machine Learning → Deep Learning → AI Projects";
        }

        else if (interest === "data") {
            career = "Data Scientist";
            explanation =
                "Your interest in Data & Analytics makes Data Science a potential career direction.";
            roadmap =
                "Python → SQL → Statistics → Data Analysis → Machine Learning";
        }

        else if (interest === "web") {
            career = "Web Developer";
            explanation =
                "Your interest in Web Development makes Web Development a potential career direction.";
            roadmap =
                "HTML → CSS → JavaScript → Responsive Design → Projects";
        }

        else if (interest === "software") {
            career = "Software Developer";
            explanation =
                "Your interest in Software Development makes Software Development a potential career direction.";
            roadmap =
                "Programming → Data Structures → Algorithms → Databases → Projects";
        }

        else {
            career = "Cloud Engineer";
            explanation =
                "Your interest in Cloud Computing makes Cloud Engineering a potential career direction.";
            roadmap =
                "Networking → Linux → Cloud Fundamentals → Deployment → Cloud Projects";
        }
    }

    let result = document.getElementById("careerResult");

    if (!result) {

        result = document.createElement("div");

        result.id = "careerResult";
        result.className = "card career-result";

        document.querySelector(".assessment").appendChild(result);
    }

    result.innerHTML = `
        <h3>🎯 Recommended Career</h3>

        <h2>${career}</h2>

        <p>${explanation}</p>

        <p>
            <strong>Your Skill:</strong> ${skill}
        </p>

        <p>
            <strong>Suggested Roadmap:</strong><br>
            ${roadmap}
        </p>
    `;
    localStorage.setItem("recommendedCareer", career);
    localStorage.setItem("careerExplanation", explanation);
    localStorage.setItem("careerRoadmap", roadmap);
    localStorage.setItem("careerSkill", skill);
}

window.addEventListener("DOMContentLoaded", function () {

    let dashboardCareer = document.getElementById("dashboardCareer");

    if (dashboardCareer) {

        let savedCareer = localStorage.getItem("recommendedCareer");

        if (savedCareer) {

            dashboardCareer.innerHTML =
                "Your Recommended Career:<br><br><strong>" + savedCareer + "</strong>";

        }

    }

});