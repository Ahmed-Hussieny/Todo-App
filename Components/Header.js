import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, 
        Text,
        View,
 } from 'react-native';

 export default function Header(){
    return (
        <View style={styles.header}>
        <Text style={styles.title}> MY TODO APP
        </Text>
    </View>
    )
 }
 const styles =StyleSheet.create({
    header:{
        height:80,
        paddingTop:30,
        backgroundColor:'black'
        ,marginTop:21,
    },
    title:{
        textAlign:'center',
        color:'#fff',
        fontSize:20,
        marginBottom:20,
        fontWeight:'bold',
    }
 });