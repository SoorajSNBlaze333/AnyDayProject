import { auth , provider } from '../config/firebase';
import { LoggedIn, LoggedOut , getCheckIn , setCheckIn} from '../Redux/actions/actions';
import { store } from '../Redux/reducers/rootreducer';
import { firestoreDb } from '../config/firestore';
import moment from 'moment';

//Google sign in using provider from firebase
export const login = () => {
  auth.signInWithPopup(provider)
    .then((result) => {
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
      store.dispatch(LoggedIn(result.user));
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

export const getCheckInStatus = (uid) => {
  return firestoreDb.collection("checkIns").doc(uid).get()
    .then(function (doc) {
      if (doc.exists) {
        store.dispatch(getCheckIn(doc.data()));
      }
      else {
        return false
      }
    });
}

export const logCheckIn = (uid) => {
  firestoreDb.collection("checkIns").doc(uid).set({
    uid: uid,
    checkInDate: moment().format("MM-DD-YYYY"),
    checkInTime: moment().unix(),
    checkOutTime: null,
    text: ''
  })
  .then(function () {
    console.log("Checked In successfully");
    })
  .catch(function (error) {
    console.error("Error Checking in : ", error);
    });
  getCheckInStatus(uid);
}

export const updateCheckIn = (uid , text , time) => {
  firestoreDb.collection("checkIns").doc(uid).update({
    text: text,
    checkOutTime : time
  })
  getCheckInStatus(uid);
}