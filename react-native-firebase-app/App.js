/*
  1.First create project under firebase console 
 */
import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {f, database, auth} from './config/config';
// import console = require('console');

export default class App extends React.Component {

	constructor(props) 
	{
		super(props);
		//calling function
		// this.registerUser('testemailaddress@gmail.com', 'fakepasword');

		//sign out
		// auth.signOut()
		// .then(() => {
		// 	console.log('logged out...')
		// }).catch((error) => {
		// 	console.log('Error...!', error);
		// })

		//check if user is logged in and how to log out
		f.auth().onAuthStateChanged(function(user) {
			if(user) {
				//logged in 
				console.log('logged in', user);
			} else {
				//logged out
				console.log('logged out', user);
			}
		})
	 }

//facebook

async loginWithFacebook () {
	const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
		'920482205003045', 
		//APP_ID available in facebook developers
		{ permissions: ['public_profile'] }
	);

	if(type === 'success') {
	  const credential = f.auth().FacebookAuthProvider.credential(token);
	  f.auth().signInWithCredential(credential).catch((error) => {
		  console.log('Error....', error);
	  })
	}
}
	 
	 //To register user in firebase
	registerUser = (email, password) => {
		console.log(email, password);
		//promises
		auth.createUserWithEmailAndPassword(email, password)
		.then((user) => console.log(email, password, user))
		.catch((error) => console.log('error logging in ', error));
	 }
	 
	 render() {
		return (
		  <View style={styles.container}>
			 <Text>Open up App.js to start working on your app!</Text>
			 <TouchableHighlight
			 onPress={() => this.loginWithFacebook()} style={{backgroundColor:'green'}}>
				 <Text style = {{color:'white'}}>LogIn With Facebook</Text>
			 </TouchableHighlight>
		  </View>
		);
	 }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
