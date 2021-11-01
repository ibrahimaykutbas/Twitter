import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeIcon from '../assets/svg/home.svg';
import SearchIcon from '../assets/svg/search.svg';
import NotificationIcon from '../assets/svg/notifications.svg';
import MessageIcon from '../assets/svg/messages.svg';

import FocusHomeIcon from '../assets/svg/focusHome.svg';
import FocusSearchIcon from '../assets/svg/focusSearch.svg';
import FocusNotificationIcon from '../assets/svg/focusNotifications.svg';
import FocusMessageIcon from '../assets/svg/focusMessages.svg';

import Home from '../pages/home/Home';
import Trends from '../pages/trends/Trends';
import Notifications from '../pages/notifications/Notifications';
import Messages from '../pages/messages/Messages';

const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomePage"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            !focused ? <HomeIcon /> : <FocusHomeIcon />,
          title: '',
        }}
      />
      <Tab.Screen
        name="TrendsPage"
        component={Trends}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            !focused ? <SearchIcon /> : <FocusSearchIcon />,
          title: '',
        }}
      />
      <Tab.Screen
        name="NotificationsPage"
        component={Notifications}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            !focused ? <NotificationIcon /> : <FocusNotificationIcon />,
          title: '',
        }}
      />
      <Tab.Screen
        name="MessagesPage"
        component={Messages}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            !focused ? <MessageIcon /> : <FocusMessageIcon />,
          title: '',
        }}
      />
    </Tab.Navigator>
  );
};

export default StackNavigator;
