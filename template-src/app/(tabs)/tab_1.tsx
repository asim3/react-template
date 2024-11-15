import { View, Text } from 'react-native';
import { Component_1 } from '@/components'


export default function Screen() {
  return (
    <View>
      <Text style={{ textAlign: 'center', fontSize: 27 }}>Screen 1</Text>

      <Component_1 title='view 1 title' paragraph='view 1 paragraph' />

    </View>
  );
};
