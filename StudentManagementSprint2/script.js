// Dummy student credentials
const validUser = {
    username: "student",
    password: "1234"
};

// Monthly activities array
const activities = [
    { id: 1, subject: "Maths", activity: "Create project file with tables 12 to 19" },
    { id: 2, subject: "Maths", activity: "Solve 20 algebra problems" },
    { id: 3, subject: "Science", activity: "Prepare plant cell diagram" },
    { id: 4, subject: "Science", activity: "Write notes on photosynthesis" }
];

// Login function
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === validUser.username && pass === validUser.password) {
        window.location.href = "welcome.html";
    } else {
        document.getElementById("error").innerText = "Invalid Credentials";
    }
}

// Navigate to monthly page
function goToMonthly() {
    window.location.href = "monthly.html";
}

// Show activities based on subject
function showActivities() {
    let subject = document.getElementById("subject").value;
    let list = document.getElementById("activityList");
    list.innerHTML = "";

    activities
        .filter(item => item.subject === subject)
        .forEach(item => {
            let li = document.createElement("li");
            li.innerText = item.activity;
            list.appendChild(li);
        });
}
