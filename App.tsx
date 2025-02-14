import { getApp } from '@react-native-firebase/app';

import auth, { firebase } from '@react-native-firebase/auth';
import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import Toast from 'react-native-toast-message';
import ListingPage from './src/components/ListingPage';
import SignUpPage from './src/components/SignUpPage';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInPage from './src/components/SignInPage';
import Details from './src/components/Details';
import SplashScreen from './src/components/SplashScreen';


const App = () => {

  const Stack = createStackNavigator();

  return (

    <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Login" component={SignInPage} />
                <Stack.Screen name="Signup" component={SignUpPage} />
                <Stack.Screen name="Listing" component={ListingPage} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
    </NavigationContainer>


    // <SafeAreaView>
    //   <View>
    //   <ListingPage />
    //   </View>
    //   <View>
    //   {/* */}
    //   </View>
    //   <Toast />
    // </SafeAreaView>
  );
};

export default App;
