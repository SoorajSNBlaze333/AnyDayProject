import { auth , provider } from '../config/firebase';
import {  logOutUser , loginUser, loginSuccess, loginFailure, requestCheckInStatus, recieveCheckInStatus, noCheckInStatus , errorCheckInStatus } from '../Redux/actions/actions';
import { store } from '../Redux/store/store';
import { firestoreDb } from '../config/firestore';



//Google sign in using provider from firebase
export const logIn = () => {
  store.dispatch((dispatch) => {
    dispatch(loginUser())
    auth.signInWithPopup(provider)
      .then((result) => {
        dispatch(loginSuccess(result.user))
        addUser(result)
      })
      .catch((error) => {
        dispatch(loginFailure(error))
      })
  })
}



//add logged in user to firestore
const addUser = (result) => {
      firestoreDb.collection("users").doc(result.user.uid).set({
        uid: result.user.uid,
        name: result.user.displayName,
        email: result.user.email,
      })
        .then(function () {
          console.log("Data written successfully");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
}



//Google sign out
export const logOut = () => {
  auth.signOut()
    .then(() => {
      store.dispatch(logOutUser());
     });
}




//Check if check in data for the user exists
export const getCheckInStatus = (uid) => {
   store.dispatch((dispatch) => {
     dispatch(requestCheckInStatus())
     firestoreDb.collection("checkIns").doc(uid).get()
      .then(function (doc) {
        if (doc.exists) {
          dispatch(recieveCheckInStatus(doc.data()))
        }
        else {
          dispatch(noCheckInStatus())
        }
      })
      .catch(function (error) {
        dispatch(errorCheckInStatus(error))
      })
  })
}

//check into firestore
