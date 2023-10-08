import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image, Button } from 'react-native'
import React from 'react'
import { Checkbox } from "react-native-paper";


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
 const s2_c =()=>{
    return(
        <View style={styles.container}>
           <View style={styles.Viewin}>
            <Text  style={styles.text1}>PASSWORD<br/>GENERATOR</Text>
            <View style={styles.InputPassword}>
           <TextInput style={styles.txtPassword} />
         </View>


         <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
          <Text style={styles.InputText}>Password length</Text>
          <TextInput style={styles.txtlength}></TextInput>
         </View>

              <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
            <Text style={styles.InputText}>Include lower case letters</Text>
            <Checkbox.Item style={styles.check} status="checked" color='white'/>
         </View>

         <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={styles.InputText}>Include upcase letters</Text>
            <Checkbox.Item style={styles.check}status="unchecked" color='white'  />
         </View>


         <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={styles.InputText}>Include number</Text>
            <Checkbox.Item style={styles.check} status="checked" color='white'/>
         </View>


         <View style={{flexDirection: 'row', marginTop: 15,}}>
            <Text style={styles.InputText}>Include special symbol</Text>
            <Checkbox.Item style={styles.check} status="unchecked" color='white'/>
         </View>


         <View style={{alignItems:"center"}}>    
              <TouchableOpacity style={styles.btnGenerate}>
                <Text style={styles.txtGenerate}>GENERATE PASSWORD</Text>        
              </TouchableOpacity>
        </View>
         
           </View>
          
        </View>
    )

 }
 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3B3B98',
      alignItems:"center",
      justifyContent:'center',
      width: 360,
      height: 640,

    
    },
    Viewin:{
        backgroundColor: '#23235B',
        width:' 322px',
        height: '660px',
        borderRadius: '15px',

    },
    check:{
        flexDirection:'column',
        with:25,
        height:25,
        justifyContent:'space-between',
        alignItems :'flex-start',
        left :'60'
      
    
    

    },
    txtPassword:{
        width:"297px",
        height:"55px",
        backgroundColor:"#151537",
        paddingLeft:"40px"
      },
      InputPassword : {
        paddingTop:"40px",
         alignItems:'center',
      },
    text1:{
        
        Width: 181,
        height:64,
        fontFamily:'Roboto',
        fontSize:'25px',
        fontWeight:700,
        LineHeight :'29.3px',
        marginTop: 25,
        
        textAlign: 'center',
        color: "#FFFFFF",
        
    },
    InputText:{
        marginTop: 25,
        marginLeft: 15,
        fontSize: 20,
        fontWeight:700,
        color:"white",
      },
      txtlength:{
        marginTop: 25,
        marginLeft: 25,
        width: 118,
        height: 33,
        backgroundColor: "#FFFFFF",
        },
        btnGenerate:{
            marginTop: 25,
            width:"300px",
            height:"50px",
            backgroundColor:"#3B3B98",
            borderRadius:5,
            justifyContent:"center",
            alignItems:"center"
          },
          txtGenerate:{
            color: 'white',
            fontWeight: 700,
            fontSize: 21,
            textAlign: 'center',
          }

    });export default s2_c