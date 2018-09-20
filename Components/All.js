import React from 'react';
import {Text, View,FlatList } from 'react-native';
import Add from './Add';
import {Container, Button,Body,Title,Right,Header,Left} from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome";
import ListItem from './Todos'


export default class All extends React.Component {
   
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="list-alt" size={24} color={tintColor} />
    )
  };
    render(){

    return(  
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <FlatList
          data={this.props.screenProps.todos}
          renderItem={({ item }) => (
            <ListItem
              task={item}
              toggleCheck={this.props.screenProps.toggleCheck}
              deleteTask={this.props.screenProps.deleteTask}
            />
          )}
          keyExtractor={(item, index) => item.id}
          style={{ flex: 1, marginTop: 20, width: "100%" }}
        />
      </View>
    )
}

}