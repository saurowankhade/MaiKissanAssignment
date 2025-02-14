import { View, Text, ActivityIndicator, FlatList, RefreshControl, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';
import Card from './Card';
import ShimmerCard from './ShimmerCard ';
import Svg, { G, Path, ClipPath, Rect, Defs } from "react-native-svg";
import Dialog from "react-native-dialog";
import { signOutUser } from './../../FirebaseSetup/Auth';
import { useNavigation } from '@react-navigation/native';

const ListingPage = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [startNo, setStartNo] = useState(10);
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    const navigation = useNavigation();

    const fetchPosts = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${startNo}`);
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: error.message,
            });
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchPosts();
    }, [startNo]);


    const loadMore = () => {
        if (startNo < 100) {
            setStartNo((prev) => prev + 10);
        }
    };

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setPosts([]);
            fetchPosts();
            setRefreshing(false);
        }, 1500);
    };

    const handlelogout = ()=>{
        signOutUser()
        .then((res)=>{
            if(res.status === 200){
                Toast.show({
                    type:'success',
                    text1:'Logout Successfully!'
                });

                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                });

            } else{
                Toast.show({
                    type:'error',
                    text1:'Failed to Logout!'
                });
            }
            setIsVisible(false);
        });
    }

    return (
        <View>
            <View className='shadow-lg rounded-full flex flex-row items-center justify-between ml-4 mt-5 mb-5 mr-4'>
                <View className=''>
                    <Text className=' font-mono text-[26px]'>Namaste 🙏 </Text>
                </View>
                <View className=''>
                    <Svg onPress={()=>{setIsVisible(true)}} width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M2.91699 9.47925C2.91699 5.85488 5.85513 2.91675 9.47949 2.91675H17.5003C20.7219 2.91675 23.3337 5.52842 23.3337 8.75008V10.2084C23.3337 11.0138 22.6808 11.6667 21.8753 11.6667C21.0699 11.6667 20.417 11.0138 20.417 10.2084V8.75008C20.417 7.13925 19.1112 5.83341 17.5003 5.83341H9.47949C7.46596 5.83341 5.83366 7.46571 5.83366 9.47925V25.5209C5.83366 27.5344 7.46596 29.1667 9.47949 29.1667H17.5003C19.1112 29.1667 20.417 27.861 20.417 26.2501V24.7917C20.417 23.9863 21.0699 23.3334 21.8753 23.3334C22.6808 23.3334 23.3337 23.9863 23.3337 24.7917V26.2501C23.3337 29.4717 20.7219 32.0834 17.5003 32.0834H9.47949C5.85513 32.0834 2.91699 29.1453 2.91699 25.5209V9.47925ZM26.6775 12.0939C27.247 11.5244 28.1704 11.5244 28.7398 12.0939L33.1148 16.4689C33.6843 17.0384 33.6843 17.9618 33.1148 18.5313L28.7398 22.9063C28.1704 23.4757 27.247 23.4757 26.6775 22.9063C26.108 22.3368 26.108 21.4134 26.6775 20.8439L28.563 18.9584H16.042C15.2366 18.9584 14.5837 18.3055 14.5837 17.5001C14.5837 16.6946 15.2366 16.0417 16.042 16.0417H28.563L26.6775 14.1563C26.108 13.5868 26.108 12.6634 26.6775 12.0939Z" fill="#0F1729" />
                    </Svg>

                </View>
            </View>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Card data={item} />}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={loading ? <ShimmerCard /> : null}
                refreshControl={
                    <RefreshControl className='bg-white'
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={['black']}
                    />
                }
            />

<View>
    <Dialog.Container visible={isVisible}>
      <Dialog.Title>Logout</Dialog.Title>
      <Dialog.Description>
        Are you Sure to logout ?
      </Dialog.Description>
      <Dialog.Button onPress={()=>{setIsVisible(false)}} label="No" />
      <Dialog.Button onPress={handlelogout} label="Yes" />
    </Dialog.Container>
  </View>

        </View>
    );
};

export default ListingPage;
