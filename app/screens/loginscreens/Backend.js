import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "IzaSyAk7qokfTvO7B-BPvjWUF9oHyGzRsMefxk",
    authDomain: "fithub-936fa.firebaseapp.com",
    databaseURL: "https://fithub-936fa.firebaseio.com",
    storageBucket: "fithub-936fa.appspot.com"
  };

  firebase.initializeApp(firebaseConfig);

  import { Container, Content, Header, Form, Input, Button, Label,} from 'native-base'
import { styles } from 'expo-ui-kit';

  export default class App extends React.Component {
      render() {
          return (
              <Container style= {styles.container}>
                  <Form>
                      <Item floatingLabel>
                          <Label>Email</Label>
                          <Input
                          autoCorrect= {false}
                          autoCapitalize= "none"
                          />

                      </Item>
                      
                      
                      <Item floatingLabel>
                          <Label>Password</Label>
                          <Input
                          secureTextEntry= {true}
                          autoCorrect= {false}
                          autoCapitalize= "none"
                          />
                      </Item>

                      <Button style={{marginTop:10}}
                      full
                      rounded
                      success
                      >
                          <Text>Login</Text>
                      </Button>
                  </Form>
              </Container>
          );
      }
  }

  const styles = StyleSheet.create( {
      container: {
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
          padding: 10
      },
  });