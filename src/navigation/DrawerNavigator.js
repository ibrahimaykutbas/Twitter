import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import TabNavigator from './TabNavigator';

import Draw from '../pages/draw/Draw';

import Profile from '../pages/profile/Profile';
import List from '../pages/Lists/Lists';
import TweetDetail from '../pages/tweetDetail/TweetDetail';
import SettingsAndPrivacy from '../pages/settingsAndPrivacy/SettingsAndPrivacy';
import MessagesSettings from '../pages/messagesSettings/MessagesSettings';
import Search from '../pages/search/Search';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <Draw {...props} />}>
      <Drawer.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="ProfilePage"
        component={Profile}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="ListPage"
        component={List}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="TweetDetailPage"
        component={TweetDetail}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="SettingsAndPrivacyPage"
        component={SettingsAndPrivacy}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="MessagesSettingsPage"
        component={MessagesSettings}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="SearchPage"
        component={Search}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
