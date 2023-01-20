function addUser() {
    var Username = document.getElementById("user_name").value;
    localStorage.setItem("user_name", Username);
    window.location = "LetsChat_room.html";
}