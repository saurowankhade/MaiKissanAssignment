import { useNavigation } from '@react-navigation/native'
import { checkUserLogin } from './../../FirebaseSetup/Auth';
import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'

const SplashScreen = () => {
    const navigation = useNavigation();
    
    useEffect(() => {
        const timeout = setTimeout(async () => {
            const res = await checkUserLogin();
            if (res.status === 200) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Listing' }],
                });
            } else {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Signup' }],
                });
            }
        }, 3000);

        return () => clearTimeout(timeout); 
    }, []);

  return (
    <View className='flex flex-col h-full'>
        <View className='justify-center w-full items-center h-full '>
            <Image className='h-32 w-32 animate-spin ' source={require('./../../API.png')} />
            <Text className='absolute bottom-10 text-base animate-bounce '>
                Design by Saurabh Wankhade
            </Text>
        </View>
    </View>
  )
}

export default SplashScreen;
