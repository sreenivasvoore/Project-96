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

room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");

function Send() {
      mssg = document.getElementById("mssg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: mssg,
            like: 0
      });
      document.getElementById("mssg").value = "";
}