import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {
    createAppContainer, createStackNavigator
} from 'react-navigation'
import AddNewContactScreen from './screens/AddNewContactScreen';
import EditContactScreen from './screens/EditContactScreen';
import HomeScreen from './screens/HomeScreen';
import ViewContactScreen from './screens/ViewContactScreen';
// import screens from screens folder
const AppContainer = createStackNavigator({
    addcontact:{screen:AddNewContactScreen},
    editcontact:{screen:EditContactScreen},
    home:{screen:HomeScreen},
    viewcontact:{screen:ViewContactScreen}
})

export default createAppContainer(AppContainer)