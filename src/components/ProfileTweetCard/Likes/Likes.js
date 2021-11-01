import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

import styles from '../profileTweetCard.style';

import CommentIcon from '../../../assets/svg/comment.svg';
import RetweetIcon from '../../../assets/svg/retweet.svg';
import ActiveHeartIcon from '../../../assets/svg/activeHeart.svg';
import ShareIcon from '../../../assets/svg/share.svg';

import ProfileIcon from '../../../assets/svg/profile.svg';

import ArrowIcon from '../../../assets/svg/downArrow.svg';
import ActivityIcon from '../../../assets/svg/activity.svg';
import LikeMediaIcon from '../../../assets/svg/likeMedia.svg';

const Likes = () => {
  return (
    <ScrollView>
      <TouchableOpacity>
        <View style={styles.innerContainer}>
          <View style={styles.account}>
            <ProfileIcon width="55" height="55" style={styles.profileIcon} />
          </View>
          <View style={styles.content}>
            <View style={styles.header}>
              <View style={styles.user}>
                <Text style={styles.name}>Pixsellz</Text>
                <Text style={styles.username}>@pixsellz· </Text>
                <Text style={styles.dateText}>6d</Text>
              </View>
              <ArrowIcon style={styles.arrowIcon} />
            </View>
            <View style={styles.tweetContainer}>
              <Text style={styles.tweetBlack}>
                When we first launched Vector Mockups, I had wrote that in 2018
                our free product downloads was 28K+ and we had set a goal to
                double this figure by the end of 2019. Today our team and I are
                glad to announce tgat we aave easily hit our goals with 47k+
                downloads in 2019.
              </Text>
              <View style={styles.linkContainer}>
                <View style={styles.linkImage}>
                  <LikeMediaIcon />
                </View>
              </View>
              <TouchableOpacity style={styles.threadContainer}>
                <Text style={styles.threadText}>Show this thread</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.footer}>
              <View style={styles.footerLeft}>
                <View style={styles.info}>
                  <CommentIcon
                    width="15"
                    height="14.51"
                    style={styles.infoIcon}
                  />
                  <Text style={styles.countText}>1</Text>
                </View>
                <View style={styles.info}>
                  <RetweetIcon
                    width="17.88"
                    height="12.98"
                    style={styles.infoIcon}
                  />
                  <Text style={styles.countText}>1</Text>
                </View>
                <View style={styles.info}>
                  <ActiveHeartIcon
                    width="15"
                    height="14"
                    style={styles.infoIcon}
                  />
                  <Text style={styles.countText}>3</Text>
                </View>
                <View>
                  <ShareIcon width="15.25" height="14.8" />
                </View>
              </View>
              <View style={styles.footerRight}>
                <ActivityIcon width="15" height="15" />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Likes;
