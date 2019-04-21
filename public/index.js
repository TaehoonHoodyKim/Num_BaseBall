firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.displayName;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});



function googleLogin(){
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
     var token = result.credential.accessToken;
     var user = result.user;
   
     console.log(token)
     console.log(user)
  }).catch(function(error) {
     var errorCode = error.code;
     var errorMessage = error.message;
   
     console.log(error.code)
     console.log(error.message)
  });

  // var userEmail = document.getElementById("email_field").value;
  // var userPass = document.getElementById("password_field").value;

  // firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;

  //   window.alert("Error : " + errorMessage);

  //   // ...
  // });

}

function anonLogin(){
  firebase.auth().signInAnonymously().then(function() {

     console.log('Logged in as Anonymous!')
     
     }).catch(function(error) {
     var errorCode = error.code;
     var errorMessage = error.message;
     console.log(errorCode);
     console.log(errorMessage);
  });
}

function logout(){
  firebase.auth().signOut()
}
