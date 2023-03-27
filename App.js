import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, 
         TouchableOpacity,
         Button,
         Text,
         View,
        TextInput ,
        FlatList,
        ImageBackground ,
        ScrollView,Alert,
        TouchableWithoutFeedback,
        Keyboard

      } from 'react-native';
import Sandbox from './Components/sandbox';
import Header from './Components/Header';
import TodoItems from './Components/TodoItems';
import AddTodo from './Components/addTodo';
export default function App() {
    const[todos ,settodos]=useState([
      {text :'Buy coffee' ,Key :'1'},
      {text :'create app' ,Key :'2'},
      {text :'play any thing' ,Key :'3'},
      {text :'Buy coffee' ,Key :'4'}
    ]);
    const presshandle =(Key)=>{
     settodos((prev)=>{
      return prev.filter(todo => todo.Key != Key);
     });
    }
    const submitHandeler =(text)=>{
      if(text.length>3){
          settodos((prev)=>{
                  return [
                    {text:text,Key:Math.random().toString()},
                    ...prev
                  ]
                }) 
      }else{Alert.alert('OOPS!','Must be over 3 chars long',[
        {text:'Understod',onpress:()=>console.log('alert closed')}
      ])}
    }
  return (
 
    // <Sandbox />

    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
        <View style={styles.container}>
          <Header/>
        <View style={styles.content}>

          <AddTodo submitHandeler={submitHandeler}/>
          <View style={styles.list}>
            <FlatList 
            data={todos}
            renderItem={({ item })=>(
              <TodoItems item={item} presshandle={presshandle}/>
            )}
            />
          </View>
        </View>
        </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  content:{
    padding:40,
    flex: 1,
    
  },list:{
    flex: 1,
    marginTop:20
    
    
    
  }
});
