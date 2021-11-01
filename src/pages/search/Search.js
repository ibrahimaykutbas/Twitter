import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import styles from './Search.style';

import CloseButtonIcon from '../../assets/svg/close.svg';
import SearchArrowIcon from '../../assets/svg/searchArrow.svg';
import VerifyIcon from '../../assets/svg/verify.svg';
import SearchUserIcon from '../../assets/svg/searchUser.svg';
import SearchUserIcon1 from '../../assets/svg/searchUser1.svg';
import SearchUserIcon2 from '../../assets/svg/searchUser2.svg';
import SearchUserIcon3 from '../../assets/svg/searchUser3.svg';
import MarthaIcon from '../../assets/svg/Martha.svg';

const Search = props => {
  const handlePage = () => {
    props.navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TextInput
          placeholder="Twitterda Ara"
          placeholderTextColor="#808e95"
          style={styles.input}
        />
        <TouchableOpacity>
          <Text style={styles.cancel} onPress={() => handlePage()}>
            İptal
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Son aramalar</Text>
        <CloseButtonIcon style={styles.closeButton} />
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.users}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.user}>
              <SearchUserIcon />
              <View style={styles.userHeader}>
                <Text style={styles.name}>Sab Khasa...</Text>
              </View>
              <Text style={styles.username}>@s_khasan...</Text>
            </View>
            <View style={styles.user}>
              <MarthaIcon />
              <View style={styles.userHeader}>
                <Text style={styles.name}>Martha Cr...</Text>
              </View>
              <Text style={styles.username}>@craig_love</Text>
            </View>
            <View style={styles.user}>
              <SearchUserIcon1 />
              <View style={styles.userHeader}>
                <Text style={styles.name}>Tibitha P...</Text>
                <VerifyIcon />
              </View>
              <Text style={styles.username}>@mis_potter</Text>
            </View>
            <View style={styles.user}>
              <SearchUserIcon2 />
              <View style={styles.userHeader}>
                <Text style={styles.name}>Figma</Text>
                <VerifyIcon />
              </View>
              <Text style={styles.username}>@figmadesi...</Text>
            </View>
            <View style={styles.user}>
              <SearchUserIcon3 />
              <View style={styles.userHeader}>
                <Text style={styles.name}>Figma Plugins</Text>
                <VerifyIcon />
              </View>
              <Text style={styles.username}>@FigmaPlugins</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.line} />
        <View style={styles.searched}>
          <Text style={styles.searchedName}>skhasanov</Text>
          <SearchArrowIcon />
        </View>
      </View>
    </View>
  );
};

export default Search;
