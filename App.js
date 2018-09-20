import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import Navigate from './Components/Navigate';
import Dialog from './Components/DialogComponent';
import { Header } from "react-native-elements";


export default class Checked extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{id:(1).toString(),todo:'Sacar la basura',checked:false}],
      showdialog: false,
      cont : 2
    };
    this.showdialogs = this.showdialogs.bind(this);
  }
  showdialogs()
  {
    if(this.state.showdialog)
    {
      this.setState(
        {
          showdialog : false
        }
      )
    }else
    {
      this.setState(
        {
          showdialog : true
        }
      )
    }
  }
 toggleCheck = id => {
    let newList = this.state.todos;
    let index = newList.findIndex(x => x.id == id);
    if (newList[index].checked) {
      newList[index].checked = false;
    } else {
      newList[index].checked = true;
    }

    this.setState({ todos: newList });
  };

  deleteTask = id => {
    let newList = this.state.todos.filter(x => x.id != id);
    this.setState({ todos: newList });
  };

  sendInput = inputText => {
    this.setState(
      {
        showdialog : false
      }
    )
    let newCont = this.state.cont + 1;
    let newItem = {
      id: newCont.toString(),
      todo: inputText,
      checked: false
    };
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
          deleteTask: this.deleteTask
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