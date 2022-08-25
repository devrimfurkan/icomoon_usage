import React from 'react';
import { View, Text } from 'react-native';
import {  createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoon from './resources/fonts/selection.json';
const Icon = createIconSetFromIcoMoon(icoMoon);

export default function App(){
  return(
    <View>
      <Icon name="star-empty" size={80} color="#bf1313" />
      <Icon name="star-full" size={80} color="#bf1313" />
      <Icon name="heart" size={80} color="#bf1313" />
      <Icon name="quill" size={80} color="#bf1313" />
    </View>
  )
}