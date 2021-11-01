import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import styles from './TweetDetail.style';

import BackIcon from '../../assets/svg/blueBack.svg';
import ProfileIcon from '../../assets/svg/profile.svg';
import ActivityIcon from '../../assets/svg/activity.svg';
import CommentIcon from '../../assets/svg/comment.svg';
import RetweetIcon from '../../assets/svg/retweet.svg';
import HeartIcon from '../../assets/svg/heart.svg';
import ShareIcon from '../../assets/svg/share.svg';
import ArrowIcon from '../../assets/svg/downArrow.svg';
import LinkImageIcon from '../../assets/svg/linkImage.svg';

const TweetDetail = props => {
  const handlePage = () => {
    props.navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => handlePage()}>
            <BackIcon style={styles.icon} width="10" height="17" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Tweet</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.topContainer}>
            <View style={styles.top}>
              <ProfileIcon width="55" height="55" />
              <View style={styles.nameContainer}>
                <Text style={styles.nameText}>Pixsellz</Text>
                <Text style={styles.username}>@pixsellz</Text>
              </View>
            </View>
            <ArrowIcon width="15" height="15" style={styles.arrowIcon} />
          </View>
          <View style={styles.tweetContainer}>
            <Text style={styles.tweetText}>Must have icon collections</Text>
            <View style={styles.linkContainer}>
              <View style={styles.linkImage}>
                <LinkImageIcon />
              </View>
              <View style={styles.linkContent}>
                <Text style={styles.linkContentText}>
                  The Best Free Icon Packs Everyone Must Download in 2020 |
                  GraphicM...
                </Text>
                <Text style={styles.linkContentLink}>graphicmama.com</Text>
              </View>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>17:18 · 2/14/20 · </Text>
            <Text style={styles.app}>Twitter Web App</Text>
          </View>
          <View style={styles.activityContainer}>
            <ActivityIcon style={styles.activityIcon} />
            <Text style={styles.activityText}>View Tweet activity</Text>
          </View>
          <View style={styles.statistics}>
            <Text style={styles.countText}>10</Text>
            <Text style={styles.sortText}>Like</Text>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <CommentIcon width="18" height="18" style={styles.buttonIcon} />
            </View>
            <View style={styles.button}>
              <RetweetIcon width="22" height="15" style={styles.buttonIcon} />
            </View>
            <View style={styles.button}>
              <HeartIcon width="18" height="18" style={styles.buttonIcon} />
            </View>
            <View style={styles.button}>
              <ShareIcon width="18" height="18" style={styles.buttonIcon} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <ProfileIcon width="30" height="30" />
        <TextInput
          placeholder="Yanıtını tweetle"
          placeholderTextColor="#808e95"
          style={styles.input}
          multiline
        />
      </View>
    </View>
  );
};

export default TweetDetail;
