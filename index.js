document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("cek");

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const teacherN = document.getElementById("teacher").value.trim();
            const passwordA = document.getElementById("password").value;
            const errorMsg = document.getElementById("errorMsg");

            errorMsg.textContent = "";

            const namePart = teacherN.split(" ").filter((part) => part.length > 0);
            if (namePart.length < 2) {
                errorMsg.textContent = "Please enter your full name (first name and last name).";
                return;
            }

            if (passwordA !== "teacher") {
                errorMsg.textContent = "Please enter the correct Password.";
                return;
            }

            window.location.href = "ukk04112026.html";
        });
    }
});

let dis=document.getElementById('display');
        dis.addEventListener('click',function(){
            document.body.classList.toggle('light-mode');
            let modeT = document.body.classList.contains('light-mode');
})