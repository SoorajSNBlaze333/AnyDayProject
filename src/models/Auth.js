import { auth , provider } from '../config/firebase';
import {  logOutUser , loginUser, loginSuccess, loginFailure, requestCheckInStatus, successCheckInStatus, noCheckInStatus , errorCheckInStatus , requestLeaveFormSubmit , successLeaveFormSubmit , failureLeaveFormSubmit } from '../Redux/actions/actions';
import { store } from '../Redux/store/store';
import { firestoreDb } from '../config/firestore';
import moment from 'moment';

//convert unix timestamp to normal time
export const convertUnix = (unixtimestamp) => {
  let theDate = new Date(unixtimestamp * 1000);
  let hours = theDate.getHours();
  let minutes = theDate.getMinutes();
  let post = "AM";
  if (hours < 12) {
    post = "AM"
  }
  else {
    post = "PM"
  }
  let time = hours + ':' + minutes + ' ' + post;
  return time;
}

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

//get the user status if he/she has checked in or checked out
export const getCheckInStatus = (user) => {
  store.dispatch((dispatch) => {
    dispatch(requestCheckInStatus())
    firestoreDb.collection("checkIns").where("uid","==",user.uid).where("checkInDate","==",moment().format('DD-MM-YYYY')).get()
      .then(function (querySnapshot) {
        if (querySnapshot.size > 0) {
          querySnapshot.forEach(function (doc) {
          dispatch(successCheckInStatus(doc.data()))
          })
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
export const checkInFirestore = (user) => {
    firestoreDb.collection("checkIns").add({
      uid: user.uid,
      checkInDate: moment().format('DD-MM-YYYY'),
      checkInTime: moment().unix(),
      checkOutMessage: null,
      checkOutTime : null
    })
      .then(function () {
        console.log("Checked In successfully");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
}

//check out of firestore
export const checkOutFirestore = (user, message) => {
  store.dispatch((dispatch) => {
    dispatch(requestCheckInStatus())
    firestoreDb.collection("checkIns").where("uid", "==", user.uid).where("checkInDate", "==", moment().format('DD-MM-YYYY'))
      .get()
      .then(function (querySnapshot) {
        if (querySnapshot.size > 0) {
          querySnapshot.forEach(function (doc) {
            firestoreDb.collection("checkIns").doc(doc.id).update({
              checkOutTime: moment().unix(),
              checkOutMessage: message
            })
          })
        }
        store.dispatch((dispatch) => {
          dispatch(requestCheckInStatus())
          firestoreDb.collection("checkIns").where("uid", "==", user.uid).where("checkInDate", "==", moment().format('DD-MM-YYYY')).get()
            .then(function (querySnapshot) {
              if (querySnapshot.size > 0) {
                querySnapshot.forEach(function (doc) {
                  dispatch(successCheckInStatus(doc.data()))
                })
              }
              else {
                dispatch(noCheckInStatus())
              }
            })
            .catch(function (error) {
              dispatch(errorCheckInStatus(error))
            })
        })
      })
      .catch(function (error) {
        dispatch(errorCheckInStatus(error))
      })
  })
}

//submit leaveform
export const leaveFormSubmit = (user, fromDate, toDate, reason , nod) => {
  store.dispatch((dispatch) => {
    dispatch(requestLeaveFormSubmit())
    firestoreDb.collection("leaveform").add({
      uid: user.uid,
      fromDate: fromDate,
      toDate: toDate,
      reason: reason,
      numberOfDays: nod
    })
      .then(function () {
        dispatch(successLeaveFormSubmit("Successfully submitted"))
        console.log("Leave Form submitted successfully");
      })
      .catch(function (error) {
        dispatch(failureLeaveFormSubmit(error))
        console.error("Error submitting leave form : ", error);
      });
  })

}

//submit ideas to ideapad
export const ideaPadSubmitIdea = (user, idea) => {
  firestoreDb.collection("ideapad").add({
    name: user.displayName,
    idea: idea
  })
    .then(function () {
      console.log("Idea submitted successfully");
    })
    .catch(function (error) {
      console.error("Error submitting idea : ", error);
    });
}