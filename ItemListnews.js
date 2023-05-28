import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'

const ItemListnews = (props) => {
    const {dulieu} = props;        
  return (
   
        <View style={styles.container}>
      <Image style={styles.image1} source={{uri: dulieu.image}} />
      <View style={styles.content1}>
        <Text style={styles.textTitle}>{dulieu.title}</Text>
        <Text numberOfLines={2}>{dulieu.content}</Text>
    </View>    
    </View>
   
  )
}

export default ItemListnews

const styles = StyleSheet.create({
    container: {
        flex: 1,
         marginStart: 10,
         marginEnd: 10,
         flexDirection: 'row',
     },
    image1:{
        width: 96,
        height: 96,
        borderRadius:10,
    },
    textTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        
    },
    content1: {
        marginStart: 10,
        width: Dimensions.get('window').width-106
    }

})
