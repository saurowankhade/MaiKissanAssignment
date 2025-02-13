import { getApp } from '@react-native-firebase/app';

import auth, { firebase } from '@react-native-firebase/auth';
import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { signinUser } from './FirebaseSetup/Auth';

import SignUpPage from './src/components/SignUpPage';
import SignPage from './src/components/SignPage';
import Toast from 'react-native-toast-message';
import SignInPage from './src/components/SignInPage';


const App = () => {
  
   const send =  async ()=>{
    signinUser('xyz@gmail.com','12345678');
  }

  return (
    <SafeAreaView>
      <View>
      {/* <SignUpPage /> */}
      <SignInPage />
      {/* <SignPage /> */}
      {/* <Text>Hele</Text> */}
      </View>

      <Toast />
    </SafeAreaView>
  );
};

export default App;
