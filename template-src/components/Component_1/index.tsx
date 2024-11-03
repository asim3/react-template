import React from 'react';
import styles from "./styles"
import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';


type ComponentProps = {
  title: string,
  paragraph?: string // the paragraph is optional
}


const Component = ({ title, paragraph='My default paragraph' }: ComponentProps) => {
  return (
    <View style={styles.container}>
      <Text>Component_1: { title }</Text>
      <Text>{ paragraph }</Text>
    </View>
  );
};


export default Component;
