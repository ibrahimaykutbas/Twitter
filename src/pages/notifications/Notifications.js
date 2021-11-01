import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import styles from './Notifications.style';

import FloatingBottom from '../../components/FloatingBottom/FloatingBottom';
import InputModel from '../../components/InputModel/InputModel';

import SettingIcon from '../../assets/svg/settings.svg';
import AccountIcon from '../../assets/svg/account.svg';

import AllCard from '../../components/NotificationCard/AllCard/AllCard';
import MentionCard from '../../components/NotificationCard/MentionCard/MentionCard';

const Tab = createMaterialTopTabNavigator();

const Notifications = () => {
  const [inputModelVisible, setInputModalVisible] = useState(false);

  const handleInputToggle = () => {
    setInputModalVisible(!inputModelVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <AccountIcon width="32" height="32" />
        <Text style={styles.headerTitle}>Bildirimler</Text>
        <SettingIcon width="22.64" height="21.75" />
      </View>
      <Tab.Navigator
        initialRouteName="Tweets"
        screenOptions={{
          tabBarActiveTintColor: '#4C9EEB',
          tabBarInactiveTintColor: '#687684',
          tabBarLabelStyle: {fontSize: 12},
        }}>
        <Tab.Screen
          name="All"
          component={AllCard}
          options={{tabBarLabel: 'Tümü'}}
        />
        <Tab.Screen
          name="Mentions"
          component={MentionCard}
          options={{tabBarLabel: 'Bahsedenler'}}
        />
      </Tab.Navigator>
      <FloatingBottom onPress={handleInputToggle} />
      <InputModel
        visible={inputModelVisible}
        onClose={handleInputToggle}
        placeholder="Ne oluyor?"
      />
    </View>
  );
};

export default Notifications;
