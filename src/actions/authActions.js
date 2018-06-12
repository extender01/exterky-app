import { firebase } from "../firebase/firebase";


export const prihlasit = (login, password) => {
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


export const odhlasit = () => {
  return () => {
    return firebase.auth().signOut().then(() => {
        console.log("uzivatel odhlasen")
    }).catch((error) => {
        console.log(error)
    });
  }
}

