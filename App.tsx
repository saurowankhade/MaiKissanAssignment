import { getApp } from '@react-native-firebase/app';

import auth, { firebase } from '@react-native-firebase/auth';
import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { signinUser } from './FirebaseSetup/Auth';
import SignInPage from './src/components/SignPage';


const App = () => {
  
   const send =  async ()=>{
    signinUser('xyz@gmail.com','12345678');
  }

  return (
    <SafeAreaView>
      <SignInPage />
    </SafeAreaView>
  );
};

export default App;
