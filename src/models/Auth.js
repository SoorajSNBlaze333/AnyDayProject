import { auth , provider } from '../config/firebase';
import { LoggedIn, LoggedOut , getCheckIn } from '../Redux/actions/actions';
import { store } from '../Redux/reducers/rootreducer';
import { firestoreDb } from '../config/firestore';
import moment from 'moment';

//Google sign in using provider from firebase
export const login = () => {
  auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      const userId = result.user.uid;
      firestoreDb.collection("users").doc(userId).set({
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
      store.dispatch(LoggedIn(user));
    });
}

//Google sign out
export const logout = () => {
  auth.signOut()
     .then(() => {
      store.dispatch(LoggedOut());
     });
}

//Used to authenticate user if refreshed
export const authenticate = () => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      store.dispatch(LoggedIn(user));
    }
    else {
      store.dispatch(LoggedOut());
    }
  })
}

export const checkInStatus = async(uid) => {
  return firestoreDb.collection("checkIns").doc(uid).get()
    .then(function (doc) {
      if (doc.exists) {
        store.dispatch(getCheckIn(doc.data()));
      }
    });
}

export const logCheckIn = (uid) => {
  firestoreDb.collection("checkIns").doc(uid).set({
    uid: uid,
    checkInDate: moment().toDate(),
    checkInTime: moment().toDate().getTime()
  })
  .then(function () {
    console.log("Checked In successfully");
    })
  .catch(function (error) {
    console.error("Error Checking in : ", error);
  });
}