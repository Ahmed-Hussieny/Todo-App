import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import { StyleSheet, 
        Text,
        TouchableOpacity,
        View
 } from 'react-native';

 export default function TodoItems({ item ,presshandle}){
        return (
               
                <TouchableOpacity onPress={()=> presshandle(item.Key)}>
                <View style={styles.item}>
                     <MaterialIcons name='delete' size={18} color='#333'/>
                  <Text style={styles.itemText}>{item.text}</Text>
                </View>
                
                      </TouchableOpacity>
        )


    
 }
 const styles=StyleSheet.create({
        item:{
                padding:16,
                margin:16,
                borderColor:'#bbb',
                borderWidth:1,
                borderStyle:'dashed',
                borderRadius:10,
                flexDirection:'row'
        },
        itemText:{
              marginLeft:10,
        }
 })