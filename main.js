

    // Initialize Firebase
    var firebaseConfig = {
        apiKey: "AIzaSyB6Zpb5fK5nIXcKimn_PPF0wYQ3hr3OMME",
        authDomain: "coding-knights-d3294.firebaseapp.com",
        databaseURL: "https://coding-knights-d3294-default-rtdb.firebaseio.com",
        projectId: "coding-knights-d3294",
        storageBucket: "coding-knights-d3294.appspot.com",
        messagingSenderId: "325992911075",
        appId: "1:325992911075:web:58e08cfc021a85096835d6",
        measurementId: "G-CR8B7TTF13"
    };
    

    
    function submitdata() {
      var name = document.getElementById("name").value;
      var title = document.getElementById("title").value;
      var value3 = document.getElementById("message").value;

      firebase.database().ref('data').push({
        value1: value1,
        value2: value2,
        value3: value3
      });

        document.getElementById("input1").value = "";
        document.getElementById("input2").value = "";
        document.getElementById("input3").value = "";
                        }