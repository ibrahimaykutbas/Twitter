import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import styles from './Draw.style';

import ProfileIcon from '../../assets/svg/profile.svg';
import DrawProfileIcon from '../../assets/svg/drawProfile.svg';
import DrawListsIcon from '../../assets/svg/drawLists.svg';
import DrawTopicsIcon from '../../assets/svg/drawTopics.svg';
import DrawBookmarksIcon from '../../assets/svg/drawBookmarks.svg';
import DrawMomentsIcon from '../../assets/svg/drawMoments.svg';
import UnionIcon from '../../assets/svg/union.svg';

const Draw = (props, {navigation}) => {
  const handlePage = name => {
    props.navigation.navigate(name);
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.userInfo}>
          <TouchableOpacity onPress={() => handlePage('ProfilePage')}>
            <ProfileIcon width="55" height="55" />
            <Text style={styles.name}>Pixsellz</Text>
            <Text style={styles.username}>@pixsellz</Text>
          </TouchableOpacity>
          <View style={styles.statistics}>
            <Text style={styles.following}>200</Text>
            <Text style={styles.followingText}>Takip edilen</Text>
            <Text style={styles.followers}>200</Text>
            <Text style={styles.followersText}>Takipçi</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handlePage('ProfilePage')}>
              <DrawProfileIcon width="16.5" height="20.5" />
              <Text style={styles.buttonText}>Profil</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handlePage('ListPage')}>
              <DrawListsIcon width="16.5" height="20.5" />
              <Text style={styles.buttonText}>Listeler</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <DrawTopicsIcon width="16.5" height="20.5" />
              <Text style={styles.buttonText}>Konular</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <DrawBookmarksIcon width="16.5" height="20.5" />
              <Text style={styles.buttonText}>Yer işaretleri</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <DrawMomentsIcon width="16.5" height="20.5" />
              <Text style={styles.buttonText}>Anlar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.appInfoContainer}>
          <Text
            style={styles.appInfoText}
            onPress={() => handlePage('SettingsAndPrivacyPage')}>
            Ayarlar ve gizlilik
          </Text>
          <Text style={styles.appInfoText}>Yardım Merkezi</Text>
        </View>
      </DrawerContentScrollView>

      <View style={styles.footer}>
        <UnionIcon />
        <UnionIcon />
      </View>

      {/* <DrawerItem icon={() => <UnionIcon />} label="" /> */}
    </View>
  );
};

export default Draw;
