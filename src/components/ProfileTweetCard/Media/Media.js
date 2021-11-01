import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

import styles from '../profileTweetCard.style';

import CommentIcon from '../../../assets/svg/comment.svg';
import RetweetIcon from '../../../assets/svg/retweet.svg';
import HeartIcon from '../../../assets/svg/heart.svg';
import ShareIcon from '../../../assets/svg/share.svg';

import ProfileIcon from '../../../assets/svg/profile.svg';

import ArrowIcon from '../../../assets/svg/downArrow.svg';
import ActivityIcon from '../../../assets/svg/activity.svg';
import LinkImageIcon from '../../../assets/svg/linkImage.svg';

const Media = () => {
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
                <Text style={styles.username}>@pixsellz </Text>
                <Text style={styles.dateText}>·23/12/19 </Text>
              </View>
              <ArrowIcon style={styles.arrowIcon} />
            </View>
            <View style={styles.tweetContainer}>
              <Text style={styles.tweetBlack}>
                Freebie Alert! ⚠ Mobile Apps Library consists of 120+
                reconstructed screens of four popular mobile apps.
              </Text>
              <Text style={styles.tweet}>
                Download:
                <Text style={styles.hashtag}> apps.pixsellz.io</Text>
              </Text>
              <Text style={styles.hashtag}>
                #freebie #uidesign #whatsapp #messenger #instagram #sketchapp
                #figma
              </Text>
              <View style={styles.linkContainer}>
                <View style={styles.linkImage}>
                  <LinkImageIcon />
                </View>
                <View style={styles.linkContent}>
                  <Text
                    style={styles.linkContentText}
                    numberOfLines={2}
                    ellipsizeMode="tail">
                    The Best Free Icon Packs Everyone Must Download in 2020 |
                    GraphicM...
                  </Text>
                  <Text style={styles.linkContentLink}>graphicmama.com</Text>
                </View>
              </View>
            </View>
            <View style={styles.footer}>
              <View style={styles.footerLeft}>
                <View style={styles.info}>
                  <CommentIcon
                    width="15"
                    height="14.51"
                    style={styles.infoIcon}
                  />
                  <Text style={styles.countText}></Text>
                </View>
                <View style={styles.info}>
                  <RetweetIcon
                    width="17.88"
                    height="12.98"
                    style={styles.infoIcon}
                  />
                  <Text style={styles.countText}></Text>
                </View>
                <View style={styles.info}>
                  <HeartIcon width="15" height="14" style={styles.infoIcon} />
                  <Text style={styles.countText}>1</Text>
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

export default Media;
