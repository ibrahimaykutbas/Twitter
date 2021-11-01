import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import styles from './MessageCard.style';

import MessageProfileIcon from '../../assets/svg/messageProfile.svg';
import MessageProfileIcon1 from '../../assets/svg/messageProfile1.svg';
import MessageProfileIcon2 from '../../assets/svg/messageProfile2.svg';
import MessageProfileIcon3 from '../../assets/svg/messageProfile3.svg';
import MessageProfileIcon4 from '../../assets/svg/messageProfile4.svg';
import MessageProfileIcon5 from '../../assets/svg/messageProfile5.svg';
import MessageProfileIcon6 from '../../assets/svg/messageProfile6.svg';
import MessageProfileIcon7 from '../../assets/svg/messageProfile7.svg';

const MessageCard = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.innerContainer}>
          <MessageProfileIcon style={styles.profileIcon} />
          <View style={styles.content}>
            <View style={styles.userContainer}>
              <Text style={styles.name}>AzizDjan</Text>
              <Text style={styles.username}>@A_AzizDjan</Text>
            </View>
            <Text style={styles.messageText}>
              You: You’re very welcome AzizDjan!
            </Text>
          </View>
          <Text style={styles.date}>2/12/19</Text>
        </View>
        <View style={styles.innerContainer}>
          <MessageProfileIcon1 style={styles.profileIcon} />
          <View style={styles.content}>
            <View style={styles.userContainer}>
              <Text style={styles.name}>Andrew Parker</Text>
              <Text style={styles.username}>@andrewww_</Text>
            </View>
            <Text style={styles.messageText}>You accepted the request</Text>
          </View>
          <Text style={styles.date}>1/12/19</Text>
        </View>
        <View style={styles.activeInnerContainer}>
          <MessageProfileIcon2 style={styles.profileIcon} />
          <View style={styles.content}>
            <View style={styles.userContainer}>
              <Text style={styles.name}>Komol Kuchkarov</Text>
              <Text style={styles.username}>@kkuchkarov</Text>
            </View>
            <Text style={styles.messageText}>You accepted the request</Text>
          </View>
          <Text style={styles.date}>1/12/19</Text>
        </View>
        <View style={styles.innerContainer}>
          <MessageProfileIcon3 style={styles.profileIcon} />
          <View style={styles.content}>
            <View style={styles.userContainer}>
              <Text style={styles.name}>karennne</Text>
              <Text style={styles.username}>@karennne</Text>
            </View>
            <Text style={styles.messageText}>
              You: I would greatly appreciate if you could retweet this if you
              think its worthy :)
            </Text>
          </View>
          <Text style={styles.date}>26/6/19</Text>
        </View>
        <View style={styles.innerContainer}>
          <MessageProfileIcon4 style={styles.profileIcon} />
          <View style={styles.content}>
            <View style={styles.userContainer}>
              <Text style={styles.name}>Maximillian</Text>
              <Text style={styles.username}>@maxjacobson</Text>
            </View>
            <Text style={styles.messageText}>
              sent you a link: Hello Pixsellz
            </Text>
          </View>
          <Text style={styles.date}>22/5/19</Text>
        </View>
        <View style={styles.innerContainer}>
          <MessageProfileIcon5 style={styles.profileIcon} />
          <View style={styles.content}>
            <View style={styles.userContainer}>
              <Text style={styles.name}>Martha Craig</Text>
              <Text style={styles.username}>@craig_love</Text>
            </View>
            <Text style={styles.messageText}>
              You: Just started 5 months ago
            </Text>
          </View>
          <Text style={styles.date}>2/5/19</Text>
        </View>
        <View style={styles.innerContainer}>
          <MessageProfileIcon6 style={styles.profileIcon} />
          <View style={styles.content}>
            <View style={styles.userContainer}>
              <Text style={styles.name}>Martin Randolph</Text>
              <Text style={styles.username}>@martini_rond</Text>
            </View>
            <Text style={styles.messageText}>You accepted the request</Text>
          </View>
          <Text style={styles.date}>7/3/19</Text>
        </View>
        <View style={styles.innerContainer}>
          <MessageProfileIcon7 style={styles.profileIcon} />
          <View style={styles.content}>
            <View style={styles.userContainer}>
              <Text style={styles.name}>Kieron Dotson </Text>
              <Text style={styles.username}>@kiero_d</Text>
            </View>
            <Text style={styles.messageText}>
              You: Hi Kiero, let me see what I can do gfor you. I will get back
              to you soon. Our
            </Text>
          </View>
          <Text style={styles.date}>2/3/19</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default MessageCard;
