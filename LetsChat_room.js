var firebaseConfig = {
    apiKey: "AIzaSyDcfkMgSkzGdMtCF2azVWnDEZFX29z28Ws",
    authDomain: "letschat-b6b8f.firebaseapp.com",
    databaseURL: "https://letschat-b6b8f-default-rtdb.firebaseio.com",
    projectId: "letschat-b6b8f",
    storageBucket: "letschat-b6b8f.appspot.com",
    messagingSenderId: "369367619051",
    appId: "1:369367619051:web:1782ec208bc07a339575ae"
};

firebase.initializeApp(firebaseConfig);

greeting = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome, " + greeting + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "LetsChat_page.html";
}

function getData() {
    firebase.database().ref("/").on('value',function(snapshot) {
        document.getElementById("LetsChat_output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
        Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+ Room_names +" onclick='redirectToRoom(this.id)'>#" + Room_names + "</div> <hr>";
       document.getElementById("LetsChat_output").innerHTML += row;
    });
  });
}
getData();

function redirectToRoom(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "LetsChat_page.html";
}

function Logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "LetsChat_page.html";
}