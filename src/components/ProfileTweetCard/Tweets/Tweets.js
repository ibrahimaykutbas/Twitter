import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from '../profileTweetCard.style';

import CommentIcon from '../../../assets/svg/comment.svg';
import RetweetIcon from '../../../assets/svg/retweet.svg';
import HeartIcon from '../../../assets/svg/heart.svg';
import ShareIcon from '../../../assets/svg/share.svg';

import ProfileIcon from '../../../assets/svg/profile.svg';

import ArrowIcon from '../../../assets/svg/downArrow.svg';
import ActivityIcon from '../../../assets/svg/activity.svg';
import PinIcon from '../../../assets/svg/pin.svg';

const Tweets = () => {
  return (
    <>
      <TouchableOpacity>
        <View style={styles.innerContainer}>
          <View style={styles.account}>
            <ProfileIcon width="55" height="55" style={styles.profileIcon} />
          </View>
          <View style={styles.content}>
            <View style={styles.situation}>
              <PinIcon style={styles.situationIcon} />
              <Text style={styles.situationText}>Pinned Tweet</Text>
            </View>
            <View style={styles.header}>
              <View style={styles.user}>
                <Text style={styles.name}>Pixsellz</Text>
                <Text style={styles.username}>@pixsellz </Text>
                <Text style={styles.dateText}>·31/7/19 </Text>
              </View>
              <ArrowIcon style={styles.arrowIcon} />
            </View>
            <View style={styles.tweetContainer}>
              <Text style={styles.tweet}>
                Scheme Constructor - your ultimate prototyping kit for all UX
                web and mobileepp design!
              </Text>
              <Text style={styles.link}>constructor.pixsellz.io</Text>
              <Text style={styles.hashtag}>
                #prototyping #wireframe #uiux #ux
              </Text>
            </View>
            <View style={styles.footer}>
              <View style={styles.footerLeft}>
                <View style={styles.info}>
                  <CommentIcon
                    width="15"
                    height="14.51"
                    style={styles.infoIcon}
                  />
                  <Text style={styles.countText}>28</Text>
                </View>
                <View style={styles.info}>
                  <RetweetIcon
                    width="17.88"
                    height="12.98"
                    style={styles.infoIcon}
                  />
                  <Text style={styles.countText}>5</Text>
                </View>
                <View style={styles.info}>
                  <HeartIcon width="15" height="14" style={styles.infoIcon} />
                  <Text style={styles.countText}>21</Text>
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
    </>
  );
};

export default Tweets;
