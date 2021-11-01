import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './Messages.style';

import FloatingBottom from '../../components/FloatingBottom/FloatingBottom';

import SettingIcon from '../../assets/svg/settings.svg';
import AccountIcon from '../../assets/svg/account.svg';

import MessageCard from '../../components/MessageCard/MessageCard';

const Messages = props => {
  const handlePage = () => {
    props.navigation.navigate('MessagesSettingsPage');
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <AccountIcon width="32" height="32" />
        <Text style={styles.headerTitle}>Mesajlar</Text>
        <TouchableOpacity onPress={() => handlePage()}>
          <SettingIcon width="22.64" height="21.75" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Kişi ve grupları ara"
          placeholderTextColor="#808e95"
          style={styles.input}
        />
      </View>
      <MessageCard />

      <FloatingBottom page="Message" />
    </View>
  );
};

export default Messages;
