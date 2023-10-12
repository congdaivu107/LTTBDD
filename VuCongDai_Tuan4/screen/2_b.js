import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image, Button } from 'react-native'
import React from 'react'


const s2_b = () =>
{
    return(
        <View style={styles.container}>
            <View style ={{flexDirection:"row"}}>
             <Image style={styles.imge} source={require('../assets/usb.png')}></Image>
             <Text style={styles.text1}>USB Bluetooth Music Receiver<br/>HJX-001-Biến loa thường thành loa<br/>bluetoot</Text>
             </View>

             <View style ={{flexDirection:"row"}}>
             <Text style={styles.text2} >Cực kỳ hài lòng</Text>
             </View>
       
              <View style ={{flexDirection:"row"}}>
              <Image style={{width:'39px',height:'39px'}} 
              source={require('../assets/Star 1.png')}/>
              <Image style={{width:'39px',height:'39px'}} 
              source={require('../assets/Star 1.png')}/>
              <Image style={{width:'39px',height:'39px'}} 
              source={require('../assets/Star 1.png')}/>
              <Image style={{width:'39px',height:'39px'}} 
              source={require('../assets/Star 1.png')}/>
              <Image style={{width:'39px',height:'39px'}} 
              source={require('../assets/Star 1.png')}/>

             
              </View>
              <View style ={{flexDirection :'row'}}>
             
                <TouchableOpacity style={styles.touchable}>
                    <Image style={{width:'39px',height:'32px'}} 
                    source={require('../assests/camera.png')}/>
                 <Text style={{ fontSize: "18px", fontWeight: 700 , textAlign: 'center'}}>  Thêm hình ảnh</Text>
                </TouchableOpacity>
                

              </View>

              <View style={styles.re31}>
              <TextInput style={styles.txtSYL} placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"  />
              <TextInput style={styles.txtSYL} placeholder="thích về sản phẩm"  />

              <Text style={{position:"absolute",bottom:0,right:0, fontWeight: 700, fontSize:12}}>https://meet.google.com/nsj-ojwi-xpp</Text>
              
              </View>
              <View style ={{flexDirection :'row'}}>
              <TouchableOpacity style={styles.BtnSend}>
               <View>
                 <Text style={{ fontSize: "18px", fontWeight: 700 , textAlign: 'center', color: "white"}}>Gửi</Text>
                 </View>
                </TouchableOpacity>
                </View>
        </View>
    )


    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems:"center",
      justifyContent :'space-around'
     
      

    },
    imge: {
       width: 70,
       height: 70,
       paddingLeft: 13,
       paddingTop: 16
    },
    text1 :{
        fontSize :18,
        fontFamily:'Roboto',
        fontWeight:700

    },
    text2:{

        fontSize :18,
        fontFamily:'Roboto',
        fontWeight:700
    },
    
      
        
    
    touchable: {
        flexDirection: 'row',
        borderRadius: 5,
        width: "293px",
        height: "68px",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid var(--Purple, #1511EB)",
    
       
      },
      re31:{
    
        width: 293,
        height: 222,
        ustifyContent: "center",
        alignItems: "center",
        borderRadius: 5, 
        border: "1px solid var(--Gray, #C4C4C4) ",
        
      },
      txtSYL: {
        fontWeight: 700,
        fontSize: 18,
        lineHeight: 21,
        color: "#C4C4C4",
    },
    BtnSend:{
    backgroundColor: "#0D5DB6",
    width: "289px",
    height: "41px",
    borderRadius: "5px",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "40px",
    border: "1px solid var(#0D5DB6)",
    }
});
export default s2_b
