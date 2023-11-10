import {StatusBar} from 'expo-status-bar';
import {Text, StyleSheet, View,Image,TextInput,Pressable,FlatList} from 'react-native'
import { NavigationAction } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React,{useEffect, useState} from 'react';
import { ScrollView } from 'react-native';

const Screen2=({navigation})=>{
    return(
        <View>
            <Text>Screen2</Text>
        </View>
    )
}
export default Screen2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
