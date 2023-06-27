const firebaseConfig = {
    apiKey: "AIzaSyChEhwMX4-AT7bmcusA9-8fnZ9Id0wLXM0",
    authDomain: "estou-sem-criatividade.firebaseapp.com",
    databaseURL: "https://estou-sem-criatividade-default-rtdb.firebaseio.com",
    projectId: "estou-sem-criatividade",
    storageBucket: "estou-sem-criatividade.appspot.com",
    messagingSenderId: "452737135408",
    appId: "1:452737135408:web:45fabf46bf253be967cef5",
    measurementId: "G-Q34HEJLT8Z"
  };

  function addRoom()
  {

    room_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name", room_name);
    window.location = "chat_page.html";

  }

  function getData()
  {

    firebase.database().ref("/").on('value' , function(snapshot)
    {document.getElementById("output").innerHTML =  ""  ;
  napshot.forEach(function(childSnapshot)  {childKey = childSnapshot.key;
            room_names = childKey;
          //comece aqui//
        <div Id = "room_name_div"></div>
          //termine aqui//
        });
      });

  }

  getData();



function redirectToRoomName()
{

  localStorage.setItem("room_name", room_name);
  window.location = "chat_page.html";

}