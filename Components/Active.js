import React from 'react';
import {Text, View,StyleSheet,FlatList} from 'react-native';
import {Container, Button,Body,Title,Right,Header,Left} from 'native-base';
import ListItem from './Todos';
import Icon from "react-native-vector-icons/FontAwesome";

export default class Active extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

   static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="bolt" size={24} color={tintColor} />
    )
  };

    render(){
    if (this.state.loading) {
        return <Expo.AppLoading />;
    }

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <FlatList
          data={this.props.screenProps.todos.filter(x => x.checked == false)}
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
};