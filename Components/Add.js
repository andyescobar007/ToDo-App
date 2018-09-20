import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Add extends React.Component {
    render() {
      return (
        <ActionButton buttonColor="#443ce7" onPress={() => this.props.func()}/>
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