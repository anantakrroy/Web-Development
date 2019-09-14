function submitEmail() {

    var attendingStudents = [];

    var emailList = document.getElementById("fillEmail");

    var selectedEmail = emailList.options[emailList.selectedIndex].text;

    if (selectedEmail) {
        emailList.disabled = true;
        attendingStudents.push = selectedEmail;
    }

    var disableButton = document.getElementById("submitAttendance");
    disableButton.disabled = true;

    return(attendingStudents);
}