import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import Navigate from './Components/Navigate';
import Dialog from './Components/DialogComponent';
import { Header } from "react-native-elements";
import * as firebase from 'firebase';

///Firebase Base de Datos
var firebaseconfig = {
  apiKey: "AIzaSyCfD6Y9NJfyoD3QKk5SAFc1m0dHgEVa-60",
  authDomain: "todolist-bf44d.firebaseapp.com",
  databaseURL: "https://todolist-bf44d.firebaseio.com",
  projectId: "todolist-bf44d",
  storageBucket: "todolist-bf44d.appspot.com",
  messagingSenderId: "794491965807"
};
firebase.initializeApp(firebaseconfig);
let db=firebase.database().ref('/todoItems');

export default class Checked extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      //todos: [{id:(1).toString(),todo:'Sacar la basura',checked:false}],
      todos:[],
      showdialog: false,
      //cont : 2
    };
    this.showdialogs = this.showdialogs.bind(this);
  }

  componentDidMount(){
    this.cargarTodoItems(firebase.database().ref('/todoItems'));
  }

  cargarTodoItems(tasksRef) {
    tasksRef.on('value', (dataSnapshot) => {
      var tasks = [];
      dataSnapshot.forEach((child) => {
        tasks.push(
          {
            id:child.key,
            todo: child.val().todo,
            checked: child.val().checked,
        });
      });
    this.setState({todos:tasks});
    });
    }

  showdialogs(){
    if(this.state.showdialog){
      this.setState({showdialog : false})
    }else{
      this.setState({showdialog : true})
    }
  }
 toggleCheck = id => {
    let newList = this.state.todos;
    let index = newList.findIndex(x => x.id == id);
    if (newList[index].checked) {
      newList[index].checked = false;
      db.child(id).update({checked:false})
    } else {
      newList[index].checked = true;
      db.child(id).update({checked:true});
    }
    this.setState({ todos: newList });
  };

  deleteTask = id => {
    let newList = this.state.todos.filter(x => x.id != id);
    firebase.database().ref('/todoItems').child(id).remove();
    this.setState({ todos: newList });
  };

  eliminarTarea(tarea){
    firebase.database().ref('/todoItems').child(tarea['.key']).remove();

  };

  sendInput = inputText => {
    this.setState({showdialog : false})
    let newCont = this.state.cont + 1;
    var key=firebase.database().ref('/todoItems').push().key;
    let newItem = {
      //id: newCont.toString(),
      id:key,
      todo: inputText,
      checked: false
    };
    //firebase.database().ref('/todoItems').push(newItem);
    firebase.database().ref('/todoItems').child(key).set(newItem);
    
    let newList = this.state.todos;
    newList.push(newItem);
    this.setState({ todos: newList, cont: newCont });
  };

    render() {
      return (
        <View style={{ flex: 1}}>
        <Header
          centerComponent={{
            text: "ToDo ANDY",
            style: { color: "#fff", fontSize: 22 }
          }}
          backgroundColor="#93b8d8"
        />
        <Navigate
        screenProps={{
          todos: this.state.todos,
          toggleCheck: this.toggleCheck,
          deleteTask: this.deleteTask,
         // eliminarTarea: this.eliminarTarea,
        }}/>
        <ActionButton
          buttonColor="#1fa382"
          offsetY = {65}
          onPress={() => {
            this.setState({
              showdialog : true
            })}}
        />
        	{this.state.showdialog  && <Dialog isVisible = {this.showdialogs} in = {this.sendInput}/>}
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },
  });