import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import styles from './Profile.style';

import ProfileIcon from '../../assets/svg/profile.svg';
import LinkIcon from '../../assets/svg/link.svg';
import CalendarIcon from '../../assets/svg/calendar.svg';
import BackButtonIcon from '../../assets/svg/back.svg';

import Tweets from '../../components/ProfileTweetCard/Tweets/Tweets';
import Replies from '../../components/ProfileTweetCard/Replies/Replies';
import Media from '../../components/ProfileTweetCard/Media/Media';
import Likes from '../../components/ProfileTweetCard/Likes/Likes';

const Tab = createMaterialTopTabNavigator();

const Profile = props => {
  const handleGoBack = () => {
    props.navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => handleGoBack()}>
          <View style={styles.backButton}>
            <BackButtonIcon />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerText}>Digital Goodies Team</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.top}>
          <ProfileIcon style={styles.profileIcon} />
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Profili düzenle</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>Pixsellz</Text>
        <Text style={styles.username}>@pixsellz</Text>
        <Text style={styles.about}>
          Digital Goodies Team - Web & Mobile UI/UX development; Graphics;
          Illustrations
        </Text>
        <View style={styles.linkContainer}>
          <LinkIcon style={styles.icon} />
          <Text style={styles.linkText}>pixsellz.io</Text>
          <CalendarIcon style={styles.icon} />
          <Text style={styles.dateText}>Eylül 2018 tarihinde katıldı</Text>
        </View>
        <View style={styles.statistics}>
          <Text style={styles.following}>200</Text>
          <Text style={styles.followingText}>Takip edilen</Text>
          <Text style={styles.followers}>200</Text>
          <Text style={styles.followersText}>Takipçi</Text>
        </View>
      </View>
      <Tab.Navigator
        initialRouteName="Tweets"
        screenOptions={{
          tabBarActiveTintColor: '#4C9EEB',
          tabBarInactiveTintColor: '#687684',
          tabBarLabelStyle: {fontSize: 12},
        }}>
        <Tab.Screen
          name="Tweets"
          component={Tweets}
          options={{tabBarLabel: 'Tweetler'}}
        />
        <Tab.Screen
          name="Replies"
          component={Replies}
          options={{tabBarLabel: 'Yanıtlar'}}
        />
        <Tab.Screen
          name="Media"
          component={Media}
          options={{tabBarLabel: 'Medya'}}
        />
        <Tab.Screen
          name="Likes"
          component={Likes}
          options={{tabBarLabel: 'Tepkiler'}}
        />
      </Tab.Navigator>
    </View>
  );
};

export default Profile;
