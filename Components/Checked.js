import React from 'react';
import {Text, View,FlatList,StyleSheet } from 'react-native';
import {Container, Button,Body,Title,Right,Header,Left} from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome";
import ListItem from "./Todos";

export default class Checked extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

   static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="check-square" size={24} color={tintColor} />
    )
  };
  
    render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <FlatList
          data={this.props.screenProps.todos.filter(x => x.checked == true)}
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
    );
  }
}