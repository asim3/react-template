import React from 'react';
import styles from "./styles"
import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';


export default function Component() {
  return (
    <View style={styles.scroll_view}>
      <Link href={'/modal'} asChild>
        <Button title='Component 4' />
      </Link>
    </View>
  );
};
