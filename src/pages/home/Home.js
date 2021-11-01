import React, {useState} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';

import styles from './Home.style';

import FloatingBottom from '../../components/FloatingBottom/FloatingBottom';
import InputModel from '../../components/InputModel/InputModel';

import FeatureIcon from '../../assets/svg/feature.svg';
import LogoIcon from '../../assets/svg/logo.svg';
import AccountIcon from '../../assets/svg/account.svg';

import TweetCard from '../../components/TweetCard/TweetCard';

const Home = props => {
  const [inputModelVisible, setInputModalVisible] = useState(false);

  const handlePage = () => {
    props.navigation.navigate('TabNavigator');
  };

  const handleInputToggle = () => {
    setInputModalVisible(!inputModelVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => handlePage()}>
          <AccountIcon width="32" height="32" />
        </TouchableOpacity>
        <LogoIcon width="27" height="22" />
        <FeatureIcon width="22.64" height="21.75" />
      </View>
      <ScrollView>
        <TweetCard props={props} />
      </ScrollView>

      <FloatingBottom onPress={handleInputToggle} />
      <InputModel
        visible={inputModelVisible}
        onClose={handleInputToggle}
        placeholder="Ne oluyor?"
      />
    </View>
  );
};

export default Home;
