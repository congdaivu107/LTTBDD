import {StatusBar} from 'expo-status-bar';
import {Text, StyleSheet, View,Image,TextInput,Pressable,FlatList} from 'react-native'
import { NavigationAction } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React,{useEffect, useState} from 'react';
import { ScrollView } from 'react-native';

const Screen2=({navigation,route})=>{
    const [users, setUser] = useState({});
    useEffect(()=>{
        fetch("https://654daceccbc325355741c7cc.mockapi.io/users" + route.params?.id)
        .then((response) => response.json())
        .then((json) => setUser(json));
    },[users.todo])
    return(
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
                <Image source={require('../assets/Icon Button 11.png')} style={{width:45, height:45}}></Image>
                <View style={{flexDirection:'row', marginLeft: 110}}>
                    <Image source={{uri: users.image}} style={{width:50, height:50, borderRadius: '50%', backgroundColor:"rgba(217, 203, 246, 1"}}></Image>
                    <View>
                        <Text style={{fontSize:20, fontWeight: "700"}}>Hi {users.name}</Text>
                        <Text style={{fontSize:16, color:'gray',fontWeight:"600"}}>Have agrate day a head</Text>
                    </View> 
                </View>
            </View>
            <View style={{width:350, height:50,flexDirection:'row',borderWidth:1, borderRadius:5, margin: 20}}>
                <Image source={require('../assets/search.png')} style={{width:30, height:30, marginLeft:5, margin:10}}></Image>
                <TextInput placeholder='Rearch' style={{fontSize:16, marginLeft:5, width: 325, height:40, margin:5, borderColor: 'white'}}></TextInput>
            </View>
            <View style={{margin:10}}>
                <ScrollView>
                    <View style={{alignItems:'center'}}>
                        <FlatList 
                        data={users.todo}
                        renderItem={({item})=>(
                            <View style={{flexDirection:'row', width: 300, height: 45, borderRadius: 20, backgroundColor:"#DEE1E6", justifyContent:'space-around', alignItems:'center',margin:10}}>
                                <Image source={require('../assets/Frame.png')} style={{width:25, height:25, resizeMode:'contain' }}></Image>
                                <Text style={{fontSize: 18, fontWeight:'450'}}>{item.content}</Text>
                                <Image source={require("../assets/Frame1.png")} style={{width:25, height:25, resizeMode:'contain'}}></Image>
                            </View>
                        )}
                        >

                        </FlatList>
                    </View>
                </ScrollView>
            </View>
            <Pressable
            onPress={()=> navigation.navigate('Screen3', {users})}
            style={{width: 75, height: 75, backgroundColor: '#00BDD6', margin: 15, borderRadius: 100}}>
                <Image source={require('../assets/Vector 49.png')} style={{width:30, height:30, margin:23}}></Image>
            </Pressable>
        </View>
    );
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
