import React,{useState} from 'react';
import { StyleSheet, 
        Text,
        TextInput,
        Button,
        View
 } from 'react-native';
 
 export default function AddTodo({submitHandeler}){
    const [text,setText]=useState('');
 
 const ChangeHandeler=(val)=>{
    setText(val);
 }
    return(
        <View>
            <TextInput 
            style={styles.input}
            placeholder='New todo....'
            onChangeText={ChangeHandeler}
            />
            <Button onPress={()=>submitHandeler(text)} title='add todo' color='blue'/>
        </View>
    )


}
const styles=StyleSheet.create({
  input:{
    margin:10,
    paddingHorizontal:8,
    paddingVertical:6,
    borderBottomWidth:1,
    borderBottomColor:'#ddd'
  }
})