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

    if (interest === "ai" || goal === "ai") {

        career = "AI Engineer";

        explanation =
            "Your interest in Artificial Intelligence and goal of building AI solutions make AI Engineering a suitable career path. Focus on Python, Machine Learning, Deep Learning, SQL, and Data Structures.";

    } 
    else if (interest === "data" || goal === "data") {

        career = "Data Scientist";

        explanation =
            "Your interest in data and analytics suggests a career path in Data Science. Focus on Python, SQL, statistics, data analysis, and machine learning.";

    } 
    else if (interest === "web") {

        career = "Web Developer";

        explanation =
            "Your interest in web development makes Web Development a suitable career path. Focus on HTML, CSS, JavaScript, responsive design, and frontend development.";

    } 
    else if (interest === "software" || goal === "development") {

        career = "Software Developer";

        explanation =
            "Your interest in software development suggests a Software Developer career path. Focus on programming, data structures, algorithms, databases, and software development practices.";

    } 
    else if (interest === "cloud" || goal === "cloud") {

        career = "Cloud Engineer";

        explanation =
            "Your interest in cloud computing suggests a Cloud Engineering career path. Focus on cloud platforms, networking, operating systems, security, and deployment.";

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
    `;
}