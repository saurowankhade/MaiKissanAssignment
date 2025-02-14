import { Image, View } from 'react-native'
import React, { useState } from 'react'
import { Text } from 'react-native'

import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

const Details = ({ route }) => {
  const navigation = useNavigation();
  const { data, image } = route.params || {};
  const { id, userId, body, title } = data || {};
  const [isLoad, setIsLoad] = useState(true);
  return (
   <SafeAreaView>
    <View className='h-full '>
      <View className='shadow-lg rounded-full flex flex-row items-center justify-between ml-4 mt-5 mb-5 mr-4'>
        <View className=''>
          <Svg onPress={() => { navigation.goBack() }} width="30" height="30" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M4.50053 14.0317H35.4096C35.8195 14.0317 36.2126 14.1898 36.5024 14.4711C36.7923 14.7524 36.9551 15.1339 36.9551 15.5317C36.9551 15.9296 36.7923 16.3111 36.5024 16.5924C36.2126 16.8737 35.8195 17.0317 35.4096 17.0317H4.50053C4.09065 17.0317 3.69756 16.8737 3.40773 16.5924C3.1179 16.3111 2.95508 15.9296 2.95508 15.5317C2.95508 15.1339 3.1179 14.7524 3.40773 14.4711C3.69756 14.1898 4.09065 14.0317 4.50053 14.0317Z" fill="black" />
            <Path d="M4.68753 15.5317L17.502 28.3827C17.7921 28.6737 17.9551 29.0684 17.9551 29.48C17.9551 29.8915 17.7921 30.2862 17.502 30.5772C17.2119 30.8683 16.8184 31.0317 16.4081 31.0317C15.9978 31.0317 15.6043 30.8683 15.3142 30.5772L1.40899 16.629C1.2651 16.485 1.15095 16.314 1.07306 16.1257C0.995171 15.9374 0.955078 15.7356 0.955078 15.5317C0.955078 15.3279 0.995171 15.126 1.07306 14.9378C1.15095 14.7495 1.2651 14.5784 1.40899 14.4345L15.3142 0.486238C15.6043 0.195227 15.9978 0.0317383 16.4081 0.0317383C16.8184 0.0317383 17.2119 0.195227 17.502 0.486238C17.7921 0.77725 17.9551 1.17195 17.9551 1.5835C17.9551 1.99505 17.7921 2.38975 17.502 2.68076L4.68753 15.5317Z" fill="black" />
          </Svg>
        </View>
      </View>

      <ScrollView>
      <View className=''
        style={{
          padding: 5,
          backgroundColor: 'white',
          borderRadius: 10,
          flex: 1,
          flexDirection: 'column',
          gap: 5,
        }}
      >
        <Text className='font-mono  mb-2'
          style={{
            textAlign: 'center',
            fontSize: 20,
            marginTop: 10,
            fontWeight: 'bold',
          }}
        >
          {title}
        </Text>
        {isLoad && (
          <ShimmerPlaceholder
            style={{
              height: 200,
              width: '100%',
              borderRadius: 10,
              marginVertical: 10,
            }}
          />
        )}
        <Image
          onLoadEnd={() => {
            setIsLoad(false);
          }}
          className={isLoad ? 'h-0' : 'h-[200px]'}
          source={{ uri: `${image}` }}
        />
        <Text className=' p-1 text-justify'>
          {body} 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus iste officia debitis aspernatur, doloremque modi vero ullam! Fugit maiores pariatur minima impedit nobis consectetur aspernatur necessitatibus quidem soluta tenetur?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum similique, labore corrupti est quidem autem eaque laborum voluptates debitis natus nam rerum cum alias, magni quo provident. Voluptate, doloremque nam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus iste officia debitis aspernatur, doloremque modi vero ullam! Fugit maiores pariatur minima impedit nobis consectetur aspernatur necessitatibus quidem soluta tenetur?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum similique, labore corrupti est quidem autem eaque laborum voluptates debitis natus nam rerum cum alias, magni quo provident. Voluptate, doloremque nam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus iste officia debitis aspernatur, doloremque modi vero ullam! Fugit maiores pariatur minima impedit nobis consectetur aspernatur necessitatibus quidem soluta tenetur?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum similique, labore corrupti est quidem autem eaque laborum voluptates debitis natus nam rerum cum alias, magni quo provident. Voluptate, doloremque nam.
        </Text>
      </View>
      </ScrollView>

     
    </View>
   </SafeAreaView>
  )
}

export default Details
