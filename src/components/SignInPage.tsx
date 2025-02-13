import { useState } from 'react';
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Svg, { Path, Defs, ClipPath, Rect, G } from "react-native-svg";
import Toast from 'react-native-toast-message';

const SignInPage = () => {

    const [userEmail,setUserEmail] = useState('');
    const [userPassword,setUserPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading,setIsLoading] = useState(false);

    const handleSubmit = ()=>{
        setIsLoading(true);
          if(userEmail === '' ){
            Toast.show({
                type: "error",
                text1: "Opps! Looks like you miss email.",
              });
          } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)){
            Toast.show({
                type: "error",
                text1: "Opps! Invalid Email address.",
              });
          } else if(userPassword === ''){
            Toast.show({
                type: "error",
                text1: "Opps! Looks like you miss Password.",
              });
          } else if (userPassword.length < 7) {
            Toast.show({type:'error',text1:'Password must be at least 7 characters 🔴'})
        } else if (!/[0-9]/.test(userPassword)) {
            Toast.show({type:'error',text1:'Password must contain at least one number 🔢'})
        } else if (!/[!@#$%^&*]/.test(userPassword)) {
            Toast.show({type:'error',text1:'Password must contain at least one special character 💥'})
        } else  {
           setIsLoading(true);
        } 
    }

    const handleSignUpButton = ()=>{

    }

    return (
        <View className='flex h-full justify-center  border-red-700 items-center bg-slate-100'>
            <View className=' bg-white p-2 rounded-md shadow-md w-[300px]'>
                <Text className='text-xl text-center mb-3 mt-5 font-bold'>Login In</Text>
                <View className='p-2'>
                    <View className='mt-2 flex-row items-center  w-full border mb-2 h-10 rounded-full'>
                        <View className='ml-4'>
                            <Svg className='m'
                                width={25}
                                height={20}
                                viewBox="0 0 25 20"
                                fill="none"
                            >
                                <Path
                                    d="M25 2.5C25 1.125 23.875 0 22.5 0H2.5C1.125 0 0 1.125 0 2.5V17.5C0 18.875 1.125 20 2.5 20H22.5C23.875 20 25 18.875 25 17.5V2.5ZM22.5 2.5L12.5 8.75L2.5 2.5H22.5ZM22.5 17.5H2.5V5L12.5 11.25L22.5 5V17.5Z"
                                    fill="black"
                                />
                            </Svg>
                        </View>
                        <View className='w-full'>
                            <TextInput
                                className=" w-fit h-full flex-1 ml-2 text-gray-700 "
                                placeholder="Email"
                                placeholderTextColor="#999"
                                keyboardType="email-address"
                                onChangeText={(text)=>{setUserEmail(text)}}
                            />
                        </View>
                    </View>

                    <View className='mt-2 flex-row items-center  w-full border mb-2 h-10 rounded-full'>
                        <View className='ml-4'>
                            <Svg
                                width={20}
                                height={27}
                                viewBox="0 0 20 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path
                                    d="M10 20.25C9.33696 20.25 8.70107 19.9866 8.23223 19.5178C7.76339 19.0489 7.5 18.413 7.5 17.75C7.5 16.3625 8.6125 15.25 10 15.25C10.663 15.25 11.2989 15.5134 11.7678 15.9822C12.2366 16.4511 12.5 17.087 12.5 17.75C12.5 18.413 12.2366 19.0489 11.7678 19.5178C11.2989 19.9866 10.663 20.25 10 20.25ZM17.5 24V11.5H2.5V24H17.5ZM17.5 9C18.163 9 18.7989 9.26339 19.2678 9.73223C19.7366 10.2011 20 10.837 20 11.5V24C20 24.663 19.7366 25.2989 19.2678 25.7678C18.7989 26.2366 18.163 26.5 17.5 26.5H2.5C1.83696 26.5 1.20107 26.2366 0.732233 25.7678C0.263392 25.2989 0 24.663 0 24V11.5C0 10.1125 1.1125 9 2.5 9H3.75V6.5C3.75 4.8424 4.40848 3.25269 5.58058 2.08058C6.75269 0.90848 8.3424 0.25 10 0.25C10.8208 0.25 11.6335 0.411661 12.3918 0.725753C13.1501 1.03984 13.8391 1.50022 14.4194 2.08058C14.9998 2.66095 15.4602 3.34994 15.7742 4.10823C16.0883 4.86651 16.25 5.67924 16.25 6.5V9H17.5ZM10 2.75C9.00544 2.75 8.05161 3.14509 7.34835 3.84835C6.64509 4.55161 6.25 5.50544 6.25 6.5V9H13.75V6.5C13.75 5.50544 13.3549 4.55161 12.6517 3.84835C11.9484 3.14509 10.9946 2.75 10 2.75Z"
                                    fill="black"
                                />
                            </Svg>
                        </View>

                        <View className='w-[84%] flex-row  items-center '>
                            <TextInput
                                className=" h-full flex-1 ml-2 w-fit text-gray-700 "
                                placeholder="Password" 
                                placeholderTextColor="#999"
                                secureTextEntry={showPassword}
                                
                                onChangeText={(text)=>{setUserPassword(text)}}
                            />
                            <View className="">
                                {
                                    showPassword ? <Svg onPress={()=>{setShowPassword(!showPassword)}} width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <Defs>
                                            <ClipPath id="clip0_210_378">
                                                <Rect width={24} height={24} fill="white" />
                                            </ClipPath>
                                        </Defs>
                                        <G clipPath="url(#clip0_210_378)">
                                            <Path
                                                d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                                                stroke="#1E1E1E"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <Path
                                                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                                                stroke="#1E1E1E"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </G>
                                    </Svg> : <Svg onPress={()=>{setShowPassword(!showPassword)}} width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <Defs>
                                            <ClipPath id="clip0_210_393">
                                                <Rect width={24} height={24} fill="white" />
                                            </ClipPath>
                                        </Defs>
                                        <G clipPath="url(#clip0_210_393)">
                                            <Path
                                                d="M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.6819 3.96914 7.65661 6.06 6.06M9.9 4.24C10.5883 4.07888 11.2931 3.99834 12 4C19 4 23 12 23 12C22.393 13.1356 21.6691 14.2047 20.84 15.19M14.12 14.12C13.8454 14.4147 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.481 9.80385 14.1962C9.51897 13.9113 9.29439 13.5719 9.14351 13.1984C8.99262 12.8248 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2218 9.18488 10.8538C9.34884 10.4859 9.58525 10.1546 9.88 9.88M1 1L23 23"
                                                stroke="#1E1E1E"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </G>
                                    </Svg>

                                }
                            </View>
                        </View>

                    </View>

                    {/* Sign Up Button */}
                    <View className='items-center flex-col'>
                        {
                            isLoading ? 
                            <ActivityIndicator className='mt-3' size="large" color="#c084fc" />
                            : 
                            <TouchableOpacity onPress={handleSubmit}
                            className="mt-2 justify-center flex justify-center w-[140px] bg-purple-400 py-2 rounded-full"
                        >
                            <Text className="text-white text-center text-lg font-bold">Sign In</Text>
                        </TouchableOpacity>
                        }
                    </View>


                    <View className="mt-5 flex-row justify-center">
                        <Text className="text-gray-600">Don`t Have account ?</Text>
                        <TouchableOpacity>
                            <Text onPress={handleSignUpButton} className="text-purple-800 font-bold ml-1">Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View>
    )
}

export default SignInPage
