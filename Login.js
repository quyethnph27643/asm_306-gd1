import { StyleSheet, Text, TextInput, TextInputBase, View,Image, TouchableOpacity, Pressable} from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Hello</Text>
      <Text style={[styles.text2,{color:'#1877F2'}]}>Again!</Text>

        <Text>Username</Text>
        <TextInput style={styles.textInput}></TextInput>
            
        <Text>Password</Text>
        <TextInput style={styles.textInput}> </TextInput>

        <Text style={{marginLeft:210}}>Forgot the password ?</Text>    
        <TouchableOpacity
        style= {styles.butonLogin}
        
      >
        <Text>Login</Text>
        </TouchableOpacity >
        <Text style={styles.text3}>Or Login with</Text>
        <View style={styles.view1}>
        <Pressable style={styles.butonScoial}>
            <Image style={styles.imgScoial} source={require('./img/fb.png')}/>
            
        </Pressable>

        <Pressable style={styles.butonScoial}>
            <Image style={styles.imgScoial} source={require('./img/google.png')}/>
            
        </Pressable>
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
       flex: 1,
        marginStart: 10,
        marginEnd: 10,
        flexDirection: 'column',
    },
    text1:{
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#050505'
    },
    text2:{
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    textInput:{
        height: 48,
        borderRadius: 10,
        borderWidth:1,
        marginTop:4,
    },
    butonLogin:{
        height: 50,
        backgroundColor:'#1877F2',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    text3:{
        marginTop: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    imgScoial:{
        width: 45,
        height: 45,
        marginEnd:10,
    },
    butonScoial: {
        flexDirection: 'row',
        width: 174,
        height: 50,  
        marginTop: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignContent: 'center',
    },
    view1:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});