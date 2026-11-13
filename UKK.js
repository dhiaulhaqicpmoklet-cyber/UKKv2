
const studentName = document.getElementById('name');
const studentClass = document.getElementById('studentClass');
const studentAttendanceNumber = document.getElementById('studentAttendanceN');
const studentAttendance = document.getElementById('studentAttendanceS');
const assignmentScore = document.getElementById('assignment');
const midtermScore = document.getElementById('midterm');
const finalExam = document.getElementById('final');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const errorMsg = document.getElementById('errorMsgt');

    if (errorMsg) errorMsg.textContent = '';

    if (studentName.value.trim() === '') {
        errorMsg.textContent = 'Please enter Student Name.';
        return;
    } else if (studentClass.value.trim() === '') {
        errorMsg.textContent = 'Please enter Student Class.';
        return;
    } else if (studentAttendanceNumber.value === '') {
        errorMsg.textContent = 'Please enter Student Attendance Number.';
        return;
    } else if (studentAttendance.value === '') {
        errorMsg.textContent = 'Please enter Student Attendance Score.';
        return;
    } else if (assignmentScore.value === '') {
        errorMsg.textContent = 'Please enter Student Assignment Score.';
        return;
    } else if (midtermScore.value === '') {
        errorMsg.textContent = 'Please enter Student Midterm Score.';
        return;
    } else if (finalExam.value === '') {
        errorMsg.textContent = 'Please enter Student Final Exam Score.';
        return;
    }

    const attendance = Number(studentAttendance.value);
    const assignment = Number(assignmentScore.value);
    const midterm = Number(midtermScore.value);
    const final = Number(finalExam.value);

    if (
        attendance < 0 ||
        assignment < 0 || assignment > 100 ||
        midterm < 0 || midterm > 100 ||
        final < 0 || final > 100
    ) {
        errorMsg.textContent = 'Please enter valid scores.';
        return;
    }

    const finalGrade =
        (assignment * 0.3) +
        (midterm * 0.3) +
        (final * 0.35) +
        (attendance * 0.05);

    document.getElementById('studentn').innerText = studentName.value;
    document.getElementById('studentc').innerText = studentClass.value;
    document.getElementById('studentat').innerText = studentAttendanceNumber.value;
    document.getElementById('studentatn').innerText = attendance;
    document.getElementById('studenta').innerText = assignment;
    document.getElementById('studentm').innerText = midterm;
    document.getElementById('studentf').innerText = final;
    document.getElementById('studentanswere').innerText = finalGrade.toFixed(2);

    console.log(finalGrade);
});

const dis = document.getElementById('display');

dis.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.toggle('light-mode');
});
