export const signIn = credentials => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		firebase
			.auth()
			.signInWithEmailAndPassword(credentials.email, credentials.password)
			.then(() => {
				dispatch({ type: 'LOGIN_SUCCESS' });
			})
			.catch(err => {
				dispatch({ type: 'LOGIN_ERROR', err });
			});
	};
};

export const signOut = () => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		firebase
			.auth()
			.signOut()
			.then(() => {
				dispatch({ type: 'SIGNOUT_SUCCESS' });
			});
	};
};

export const signUp = newUser => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firebase = getFirebase();
		const firestore = getFirestore();

		firebase
			.auth()
			.createUserWithEmailAndPassword(newUser.email, newUser.password)
			.then(resp => {
				console.log(newUser);
				return firestore
					.collection('users')
					.doc(resp.user.email)
					.set({
						name: newUser.name,
						email: newUser.email,
						player: [3380, 3479, 3504, 3577, 3660, 3969],
						score: 0,
						avatar: newUser.avatar,
						isCoach: false
					});
			})
			.then(() => {
				dispatch({ type: 'SIGNUP_SUCCESS' });
			})
			.catch(err => {
				dispatch({ type: 'SIGNUP_ERROR', err });
			});
	};
};
