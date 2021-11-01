import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import styles from './Lists.style';

import FloatingBottom from '../../components/FloatingBottom/FloatingBottom';

import BackIcon from '../../assets/svg/blueBack.svg';

import Subscribed from '../../components/List/Subscribed/Subscribed';
import Member from '../../components/List/Member/Member';

const Tab = createMaterialTopTabNavigator();

const Lists = props => {
  const handlePage = () => {
    props.navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => handlePage()}>
          <BackIcon width="10" height="17" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Listeler</Text>
      </View>
      <Tab.Navigator
        initialRouteName="Tweets"
        screenOptions={{
          tabBarActiveTintColor: '#4C9EEB',
          tabBarInactiveTintColor: '#687684',
          tabBarLabelStyle: {fontSize: 12},
        }}>
        <Tab.Screen
          name="Subscribed"
          component={Subscribed}
          options={{title: 'Abone olunan'}}
        />
        <Tab.Screen
          name="Member"
          component={Member}
          options={{title: 'Üye olunan'}}
        />
      </Tab.Navigator>
      <FloatingBottom page="List" />
    </View>
  );
};

export default Lists;
