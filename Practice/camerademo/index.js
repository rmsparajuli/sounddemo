import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles'
export default class CameraDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name:'Ramesh',
       
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles._insideContainer}>
        <Text style={styles._forText}> This is camera demo </Text>
        </View>
        <FlatList
            data={[{key:this.state.name}]}
            renderItem={ ({item})=> {
                return(
                    <View>
                        <Text style={styles._forText}> {item.key} </Text>
                    </View>
                )
            }  }
        />
      </View>
    );
  }
}
