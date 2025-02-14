import { View, Text, ActivityIndicator, FlatList, RefreshControl, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';
import Card from './Card';
import ShimmerCard from './ShimmerCard ';
import Svg, { G, Path, ClipPath, Rect, Defs } from "react-native-svg";

const ListingPage = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [startNo, setStartNo] = useState(10); 
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    
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

    return (
       <View>
        <View className='shadow-lg rounded-full flex flex-row items-center justify-between ml-4 mt-5 mb-5 mr-4'>
            <View className=''>
                <Text  className='text-[28px]'>Namaste 🙏</Text>
            </View>
            <View className=''>
            <Svg width={50} height={50} viewBox="0 0 60 60" fill="none">
      <G clipPath="url(#clip0)">
        <Path
          d="M30.0004 7.42664C24.2126 7.42664 19.5039 12.1353 19.5039 17.9232C19.5039 20.7322 20.6117 23.9197 22.4672 26.4498C24.5659 29.3115 27.2414 30.8875 30.0004 30.8875C32.7596 30.8875 35.435 29.3116 37.5338 26.4498C39.3894 23.9197 40.4971 20.7322 40.4971 17.9232C40.4971 12.1353 35.7883 7.42664 30.0004 7.42664ZM30.0004 28.6496C28.0018 28.6496 25.9139 27.3655 24.2718 25.1263C22.7113 22.9985 21.7418 20.2384 21.7418 17.9232C21.7418 13.3693 25.4466 9.66455 30.0004 9.66455C34.5543 9.66455 38.2591 13.3693 38.2591 17.9232C38.2592 22.6513 34.3706 28.6496 30.0004 28.6496Z"
          fill="black"
        />
        <Path
          d="M30.0002 0C16.3202 0 5.19043 11.1296 5.19043 24.8098C5.19043 38.4898 16.32 49.6195 30.0002 49.6195C43.6804 49.6195 54.81 38.49 54.81 24.8098C54.81 11.1296 43.6802 0 30.0002 0ZM30.0002 47.3816C25.5096 47.3815 21.3214 46.0629 17.8016 43.7932C17.924 40.3664 19.4753 37.1536 22.102 34.923C23.1458 34.0367 24.6699 33.9398 25.8948 34.6821C27.2179 35.4838 28.5993 35.8904 30.0006 35.8904C31.4017 35.8904 32.7827 35.484 34.1051 34.6827C35.3287 33.9412 36.8488 34.0344 37.8876 34.9147C40.5163 37.1421 42.0764 40.3641 42.1986 43.7935C38.6788 46.063 34.4906 47.3816 30.0002 47.3816ZM44.308 42.2544C43.8248 38.7509 42.0685 35.5241 39.3344 33.2073C37.5605 31.7043 34.9928 31.528 32.9453 32.7688C31.0096 33.9416 28.9908 33.9415 27.0547 32.7682C25.0047 31.5259 22.4325 31.7066 20.6533 33.2173C17.9216 35.5371 16.1723 38.7546 15.6904 42.2529C10.6493 38.1098 7.42834 31.829 7.42834 24.8099C7.42834 12.3636 17.5541 2.23791 30.0002 2.23791C42.4464 2.23791 52.5721 12.3636 52.5721 24.8098C52.5721 31.8298 49.3504 38.1113 44.308 42.2544Z"
          fill="black"
        />
        <Path
          d="M45.1769 52.5718H14.8231C14.2051 52.5718 13.7041 53.0728 13.7041 53.6907C13.7041 54.3087 14.2051 54.8097 14.8231 54.8097H45.1769C45.7948 54.8097 46.2958 54.3087 46.2958 53.6907C46.296 53.0728 45.7948 52.5718 45.1769 52.5718Z"
          fill="black"
        />
        <Path
          d="M45.1769 57.7621H14.8231C14.2051 57.7621 13.7041 58.2631 13.7041 58.881C13.7041 59.499 14.2051 60 14.8231 60H45.1769C45.7948 60 46.2958 59.499 46.2958 58.881C46.296 58.2631 45.7948 57.7621 45.1769 57.7621Z"
          fill="black"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect width={60} height={60} fill="white" />
        </ClipPath>
      </Defs>
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
       </View>
    );
};

export default ListingPage;
