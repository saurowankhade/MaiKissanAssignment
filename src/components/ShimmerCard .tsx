import React from 'react';
import { View, Text } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

const ShimmerCard = () => {
  return (
    <View className="mb-3 p-3 rounded-lg border bg-white shadow-md">
      {/* Title Placeholder */}
      <ShimmerPlaceholder style={{ height: 20, width: '60%', alignSelf: 'center', borderRadius: 5 }} />

      {/* Image Placeholder */}
      <ShimmerPlaceholder style={{ height: 200, width: '100%', borderRadius: 10, marginVertical: 10 }} />

      {/* Text Placeholder */}
      <ShimmerPlaceholder style={{ height: 16, width: '90%', borderRadius: 5, marginBottom: 5 }} />
      <ShimmerPlaceholder style={{ height: 16, width: '80%', borderRadius: 5 }} />
    </View>
  );
};

export default ShimmerCard;
