import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import styles from './MentionCard.style';

import NotificationProfilIcon from '../../../assets/svg/Mariane.svg';
import NotificationProfilIcon1 from '../../../assets/svg/Crown.svg';

import CommentIcon from '../../../assets/svg/comment.svg';
import RetweetIcon from '../../../assets/svg/retweet.svg';
import HeartIcon from '../../../assets/svg/heart.svg';
import ActivRetweetIcon from '../../../assets/svg/activeRetweet.svg';
import ActiveHeartIcon from '../../../assets/svg/activeHeart.svg';
import ShareIcon from '../../../assets/svg/share.svg';

import ArrowIcon from '../../../assets/svg/downArrow.svg';
import MediaIcon from '../../../assets/svg/media.svg';
import MediaIcon1 from '../../../assets/svg/media1.svg';

const AllCard = () => {
  return (
    <ScrollView>
      <TouchableOpacity>
        <View style={styles.innerContainer}>
          <View style={styles.account}>
            <NotificationProfilIcon
              width="55"
              height="55"
              style={styles.profileIcon}
            />
          </View>
          <View style={styles.content}>
            <View style={styles.header}>
              <View style={styles.user}>
                <Text style={styles.name}>Mariane</Text>
                <Text style={styles.username}>@marianeee</Text>
                <Text style={styles.dateText}>·1/21/20 </Text>
              </View>
              <ArrowIcon style={styles.arrowIcon} />
            </View>
            <View style={styles.tweetContainer}>
              <Text style={styles.tweet}>Hey</Text>
              <Text style={[styles.tweet, styles.hashtag]}>
                @theflaticon @iconmonstr @pixsellz @dan ielbruce_ @romanshamin
                @_vect_ @glyphish !
              </Text>
              <Text style={styles.tweet}>
                Check our our new article “Top Icons Packs and Resources for
                Web”. You are in! 😎
              </Text>
              <Text style={styles.tweet}>
                👉 marianeee.com/blog/top-icons...
              </Text>
              <View style={styles.mediaContainer}>
                <MediaIcon width="301" height="162" style={styles.mediaImage} />

                <View style={styles.mediaTextContainer}>
                  <Text style={styles.mediaTextHeader}>
                    Top Icons Packs and Resources for Web
                  </Text>
                  <Text style={styles.mediaTexLink}>flatlogic.com</Text>
                </View>
              </View>
            </View>
            <View style={styles.footer}>
              <View style={styles.info}>
                <CommentIcon
                  width="15"
                  height="14.51"
                  style={styles.infoIcon}
                />
                <Text style={styles.countText}>7</Text>
              </View>
              <View style={styles.info}>
                <ActivRetweetIcon
                  width="18.38"
                  height="13.48"
                  style={styles.infoIcon}
                />
                <Text style={styles.activeRetweetText}>1</Text>
              </View>
              <View style={styles.info}>
                <ActiveHeartIcon
                  width="15"
                  height="15"
                  style={styles.infoIcon}
                />
                <Text style={styles.activeCountText}>3</Text>
              </View>
              <View style={styles.info}>
                <ShareIcon width="15" height="14" />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.innerContainer}>
          <View style={styles.account}>
            <NotificationProfilIcon1
              width="55"
              height="55"
              style={styles.profileIcon}
            />
          </View>
          <View style={styles.content}>
            <View style={styles.header}>
              <View style={styles.user}>
                <Text style={styles.name}>CrownList LLC</Text>
                <Text style={styles.username}>@crownlistllc </Text>
                <Text style={styles.dateText}>·1/9/20 </Text>
              </View>
              <ArrowIcon style={styles.arrowIcon} />
            </View>
            <View style={styles.tweetContainer}>
              <Text style={styles.tweet}>
                Fragments Android Wireframe Kit UX Wire was jusr featured in
                today’s
                <Text style={styles.hashtag}> crownlistllc.com </Text>
                newsletter via
                <Text style={styles.hashtag}> @pixsellz</Text>
              </Text>

              <View style={styles.mediaContainer}>
                <MediaIcon style={styles.mediaImage} />
                <View style={styles.mediaTextContainer}>
                  <Text style={styles.mediaTextHeader}>
                    Top Icons Packs and Resources for Web
                  </Text>
                  <Text style={styles.mediaTexLink}>flatlogic.com</Text>
                </View>
              </View>
            </View>
            <View style={styles.footer}>
              <View style={styles.info}>
                <CommentIcon
                  width="15"
                  height="14.51"
                  style={styles.infoIcon}
                />
                <Text style={styles.countText}>7</Text>
              </View>
              <View style={styles.info}>
                <ActivRetweetIcon
                  width="18.38"
                  height="13.48"
                  style={styles.infoIcon}
                />
                <Text style={styles.activeRetweetText}>1</Text>
              </View>
              <View style={styles.info}>
                <ActiveHeartIcon
                  width="15"
                  height="15"
                  style={styles.infoIcon}
                />
                <Text style={styles.activeCountText}>3</Text>
              </View>
              <View style={styles.info}>
                <ShareIcon width="15" height="14" />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AllCard;
