import React from 'react';
import {TouchableOpacity} from 'react-native';

import TweetIcon from '../../assets/svg/sendTweet.svg';
import MemberIcon from '../../assets/svg/member.svg';
import MessageIcon from '../../assets/svg/addMessage.svg';

import styles from './FloatingButton.style';
const FloatingBottom = ({onPress, page}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {page === 'List' ? (
        <MemberIcon />
      ) : page === 'Message' ? (
        <MessageIcon />
      ) : (
        <TweetIcon />
      )}
    </TouchableOpacity>
  );
};

export default FloatingBottom;
