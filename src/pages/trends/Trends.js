import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './Trends.style';

import FloatingBottom from '../../components/FloatingBottom/FloatingBottom';
import InputModel from '../../components/InputModel/InputModel';

import SettingIcon from '../../assets/svg/settings.svg';
import AccountIcon from '../../assets/svg/account.svg';
import SearchIcon from '../../assets/svg/search.svg';

const Trends = props => {
  const [inputModelVisible, setInputModalVisible] = useState(false);

  const handleInputToggle = () => {
    setInputModalVisible(!inputModelVisible);
  };

  const handlePage = () => {
    props.navigation.navigate('SearchPage', (props = {props}));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <AccountIcon width="32" height="32" />
        <TextInput
          placeholder="Twitterda Ara"
          placeholderTextColor="#808e95"
          style={styles.input}
          onPressIn={() => handlePage()}
        />
        <SettingIcon width="22.64" height="21.75" />
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Sizin için trendler</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Sizin için yeni trendler yok</Text>
          <Text style={styles.info}>
            Şu anda size gösterecek pek bir şey yok gibi görünüyor, ancak diğer
            alanlar için trendleri görün
          </Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Konum değiştir</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FloatingBottom onPress={handleInputToggle} />
      <InputModel
        visible={inputModelVisible}
        onClose={handleInputToggle}
        placeholder="Ne oluyor?"
      />
    </View>
  );
};

export default Trends;
