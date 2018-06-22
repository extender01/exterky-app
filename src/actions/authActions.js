import { firebase } from "../firebase/firebase";




export const prihlasit = (email) => ({
  type: "LOGIN",
  email
});


export const startPrihlasit = (login, password) => {
  return () => {
    console.log("pokus o prihlaseni");
    return firebase.auth().signInWithEmailAndPassword(login, password)
    .then(() => {
        console.log("promise spusten");
        console.log("v actions", login, password)
        
       
      
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, "chyba", errorMessage);
      // ...
    });
  }
}


export const odhlasit = () => ({
  type: "LOGOUT"
});


export const startOdhlasit = () => {
  return () => {
    return firebase.auth().signOut().then(() => {
        console.log("uzivatel odhlasen")
    }).catch((error) => {
        console.log(error)
    });
  }
}

