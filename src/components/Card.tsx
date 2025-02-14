import { Image, View } from 'react-native'
import React, { useState } from 'react'
import { Text } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

const Card = ({data}) => {
    const {id,userId,body,title} = data || {} ;
    const [isLoad,setIsLoad] = useState(true);
    const Urls = ['https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg','https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=600']
    const randomIndex = Math.floor(Math.random() * Urls.length);
  return (
    <View className='mb-2 p-2 rounded-md border '>
        <View className='' key={data.title} style={{padding:5,backgroundColor:'white',borderRadius:10,flex:1,flexDirection:'column',gap:5}}>
            <Text style={{textAlign:'center',fontSize:20,marginTop:10,fontWeight:'bold'}}>{title}</Text>
            {
                isLoad && <ShimmerPlaceholder style={{ height: 200, width: '100%', borderRadius: 10, marginVertical: 10 }} />
            }
            <Image onLoadEnd={()=>{setIsLoad(false)}} className={isLoad ? 'h-0' : 'h-[200px]'}   source={{uri:`${Urls[randomIndex]}`}} />
            <Text style={{padding:2,marginLeft:3,textAlign:'left',fontSize:16,fontWeight:300}}>{body}</Text>
        </View>
    </View>
  )
}

export default Card
