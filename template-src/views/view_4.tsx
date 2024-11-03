import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';


export default function View_4() {
  return (
    <View>
      <Text>View_4 Page</Text>

      <Link href={'main/search'} asChild>
        <Button title='Search' />
      </Link>
      
      <Link href={'(authentication)/login'} asChild >
        <Button title='Goto Login' />
      </Link>
      
      <Link href={'(authentication)/logout'} asChild>
        <Button title='Goto Logout' />
      </Link>
      
      <Link href={'/modal'} asChild>
        <Button title='Goto modal' />
      </Link>
      
      <Link href={'main/user/2'} asChild>
        <Button title='Goto Profile 2' />
      </Link>
      
      <Link href={'main/user/3'} asChild>
        <Button title='Goto Profile 3' />
      </Link>
      
      <Link href={'main/user/asim'} asChild>
        <Button title='Goto Profile asim' />
      </Link>
      
      <Link href={'(other)/about'} asChild>
        <Button title='About' />
      </Link>
      
      <Link href={'(other)/conditions'} asChild>
        <Button title='Conditions' />
      </Link>
      
      <Link href={'(other)/terms'} asChild>
        <Button title='Terms' />
      </Link>
    </View>
  );
};
