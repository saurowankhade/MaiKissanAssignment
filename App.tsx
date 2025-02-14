import { getApp } from '@react-native-firebase/app';

import auth, { firebase } from '@react-native-firebase/auth';
import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { signinUser } from './FirebaseSetup/Auth';

import Toast from 'react-native-toast-message';
import ListingPage from './src/components/ListingPage';
import SignUpPage from './src/components/SignUpPage';


const App = () => {

  return (
    <SafeAreaView>
      <View>
      {/* <SignUpPage /> */}
      {/* <ListingPage /> */}


      <ListingPage />
     
      {/* <SignInPage /> */}
      {/* <SignPage /> */}
      {/* <Text>Hele</Text> */}
      </View>
      {/* <Demo /> */}
      <Toast />
    </SafeAreaView>
  );
};

export default App;
