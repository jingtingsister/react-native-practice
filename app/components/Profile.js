import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class Profile extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.text}>
            Welcome to member area
          </Text>
        </View> 
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2896d3',
  },
  text: {
    color: '#fff'
  }
});


