import React, { useEffect, useState } from 'react';
import styles from "./styles"
import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';


export default function Component() {
  const [MyCount1, setMyCount1] = useState(411);
  const [MyCount2, setMyCount2] = useState(422);

  useEffect(() => {
    console.log("MyCount1 =", MyCount1);
    console.log("MyCount2 =", MyCount2);

    return () => {
      // cleanup function
      setMyCount1(9991)
      console.log("my cleanup function", MyCount2);
    }
  }, [MyCount2]); // will run only if MyCount2 changes

  return (
    <View style={styles.scroll_view}>
      <Text>MyCount1 = {MyCount1}</Text>
      <Text>MyCount2 = {MyCount2}</Text>
      <Button title='Component 4.1: MyCount1 + 1' onPress={() => setMyCount1(MyCount1 + 1)} />
      <Button title='Component 4.2: MyCount2 + 1' onPress={() => setMyCount2(MyCount2 + 1)} />
    </View>
  );
};
