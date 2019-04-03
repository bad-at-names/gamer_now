// export const getTeam = (credentials) => {
//     return (dispatch, getState, { getFirebase, getFirestore}) => {
//         const firebase = getFirebase();
//         const firestore = getFirestore();

//         firebase.auth.getIdToken(
//             this.auth.uid
//         ).then((resp) => {
//         firestore.collection('users').doc(resp.user.uid).getState({
//             offense: this.offense,
//             tank: this.tank,
//             support: this.support
//         })
//         }).then(() => {
//             dispatch({ type: 'GET_TEAM_SUCCESS'});
//         }).catch((err) => {
//             dispatch({ type: 'GET_TEAM_ERROR', err})
//         })
//     }
// }

export const updateTeam = (pId) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        console.log("yes");
        firebase.auth.getIdToken(
            this.auth.uid
        ).then((resp) => {
        firestore.collection('users').doc(resp.user.uid).set({
            score: 5
        })
        }).then(() => {
            dispatch({ type: 'UPDATE_TEAM_SUCCESS'});
        }).catch((err) => {
            dispatch({ type: 'UPDATE_TEAM_ERROR', err})
        })
    }
}

export const displayTeam = (credentials) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth.getIdToken(
            this.auth.uid
        ).then((resp) => {
        firestore.collection('users').doc(resp.user.uid).get({
            player: this.users.player,
            // console.log(offence)
        })
        }).then(() => {
            dispatch({ type: 'UPDATE_TEAM_SUCCESS'});
        }).catch((err) => {
            dispatch({ type: 'UPDATE_TEAM_ERROR', err})
        })
    }
}
