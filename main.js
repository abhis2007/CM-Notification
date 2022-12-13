// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
    apiKey: "AIzaSyDcsJ3dxu42nkjuSZiSCex-vN-frsiOGt8",
    authDomain: "cm-notification-c7670.firebaseapp.com",
    databaseURL: "https://cm-notification-c7670-default-rtdb.firebaseio.com",
    projectId: "cm-notification-c7670",
    storageBucket: "cm-notification-c7670.appspot.com",
    messagingSenderId: "570459484661",
    appId: "1:570459484661:web:18852bb40188442077b0bc",
    measurementId: "G-0V14TB0VG6"
  };
  firebase.initializeApp(firebaseConfig);
  var messagesRef = firebase.database().ref("Notifications");

// Submit form
function pushNotification(e){
    var content = document.getElementById("Notification").value;
    saveMessage(content);
    document.getElementById('form').reset();
}

function saveMessage(_message){
//   var newMessageRef = messagesRef.push();
  messagesRef.set({
    messages:_message
  });

}

messagesRef.once("value", function(snapshot){
    var data = snapshot.val() ;
    for(var val in data){
        
        document.getElementById("txt").innerHTML = data[val] ;
    }
  })