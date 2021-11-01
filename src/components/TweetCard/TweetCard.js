import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './TweetCard.style';

import CommentIcon from '../../assets/svg/comment.svg';
import RetweetIcon from '../../assets/svg/retweet.svg';
import HeartIcon from '../../assets/svg/heart.svg';
import ShareIcon from '../../assets/svg/share.svg';

import MarthaIcon from '../../assets/svg/Martha.svg';
import MaximmilianIcon from '../../assets/svg/Maximmilian.svg';
import TabithaPotterIcon from '../../assets/svg/TabithaPotter.svg';
import KarennneIcon from '../../assets/svg/Karennne.svg';

import ArrowIcon from '../../assets/svg/downArrow.svg';
import SmallHeartIcon from '../../assets/svg/smallHeart.svg';
import SmallRetweetIcon from '../../assets/svg/smallRetweet.svg';
import LineIcon from '../../assets/svg/line.svg';

const TweetCard = ({props}) => {
  const handlePage = () => {
    props.navigation.navigate('TweetDetailPage');
  };
  return (
    <>
      <TouchableOpacity onPress={() => handlePage()}>
        <View style={styles.innerContainer}>
          <View style={styles.account}>
            <MarthaIcon width="55" height="55" style={styles.profileIcon} />
            <LineIcon width="37" height="65.5" style={styles.line} />
            <MarthaIcon width="37" height="37" />
          </View>
          <View style={styles.content}>
            <View style={styles.situation}>
              <SmallHeartIcon style={styles.situationIcon} />
              <Text style={styles.situationText}>
                Kieron Dotson and Zack John liked
              </Text>
            </View>
            <View style={styles.header}>
              <View style={styles.user}>
                <Text style={styles.name}>Martha Craig</Text>
                <Text style={styles.username}>@craig_love </Text>
                <Text style={styles.dateText}>·12h </Text>
              </View>
              <ArrowIcon style={styles.arrowIcon} />
            </View>
            <View style={styles.tweetContainer}>
              <Text style={styles.tweet}>
                UXR/UX: You can only bring one item to a remote island to assist
                your research of native use of tools and usability. What do you
                bring? <Text style={styles.hashtag}>#TellMeAboutYou</Text>
              </Text>
            </View>
            <View style={styles.footer}>
              <View style={styles.info}>
                <CommentIcon
                  width="15"
                  height="14.51"
                  style={styles.infoIcon}
                />
                <Text style={styles.countText}>28</Text>
              </View>
              <View style={styles.info}>
                <RetweetIcon width="15" height="15" style={styles.infoIcon} />
                <Text style={styles.countText}>5</Text>
              </View>
              <View style={styles.info}>
                <HeartIcon width="15" height="14" style={styles.infoIcon} />
                <Text style={styles.countText}>21</Text>
              </View>
              <View>
                <ShareIcon width="15" height="14" />
              </View>
            </View>
            <TouchableOpacity style={styles.threadContainer}>
              <Text style={styles.threadText}>Show this thread</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handlePage()}>
        <View style={styles.innerContainer}>
          <View style={styles.account}>
            <MaximmilianIcon
              width="55"
              height="55"
              style={styles.profileIcon}
            />
          </View>
          <View style={styles.content}>
            <View style={styles.situation}>
              <SmallHeartIcon style={styles.situationIcon} />
              <Text style={styles.situationText}>Zack John liked</Text>
            </View>
            <View style={styles.header}>
              <View style={styles.user}>
                <Text style={styles.name}>Maximmilian</Text>
                <Text style={styles.username}>@maxjacobson </Text>
                <Text style={styles.dateText}>·3h </Text>
              </View>
              <ArrowIcon style={styles.arrowIcon} />
            </View>
            <View style={styles.tweetContainer}>
              <Text style={styles.tweet}>Y’all ready for this next post?</Text>
            </View>

            <View style={styles.footer}>
              <View style={styles.info}>
                <CommentIcon
                  width="15"
                  height="14.51"
                  style={styles.infoIcon}
                />
                <Text style={styles.countText}>46</Text>
              </View>
              <View style={styles.info}>
                <RetweetIcon width="15" height="15" style={styles.infoIcon} />
                <Text style={styles.countText}>18</Text>
              </View>
              <View style={styles.info}>
                <HeartIcon width="15" height="15" style={styles.infoIcon} />
                <Text style={styles.countText}>363</Text>
              </View>
              <View>
                <ShareIcon width="15" height="14" />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handlePage()}>
        <View style={styles.innerContainer}>
          <View style={styles.account}>
            <TabithaPotterIcon
              width="55"
              height="55"
              style={styles.profileIcon}
            />
          </View>
          <View style={styles.content}>
            <View style={styles.situation}>
              <SmallRetweetIcon style={styles.situationIcon} />
              <Text style={styles.situationText}>Kieron Dotson Retweeted</Text>
            </View>
            <View style={styles.header}>
              <View style={styles.user}>
                <Text style={styles.name}>Tabitha Potter</Text>
                <Text style={styles.username}>@mis_potter </Text>
                <Text style={styles.dateText}>·14h </Text>
              </View>
              <ArrowIcon style={styles.arrowIcon} />
            </View>
            <View style={styles.tweetContainer}>
              <Text style={styles.tweet}>
                Kobe’s passing is really sticking w/ me in a way I didn’t
                expect.
              </Text>
              <Text style={styles.tweet}>
                He was an icon, the kind of person who wouldn’t die this way. My
                wife compared it to Princess Di’s accident.
              </Text>
              <Text style={styles.tweet}>
                But the end can happen for anyone at any time, & I can’t help
                but think of anything else lately.
              </Text>
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
                <RetweetIcon width="15" height="15" style={styles.infoIcon} />
                <Text style={styles.countText}>1</Text>
              </View>
              <View style={styles.info}>
                <HeartIcon width="15" height="15" style={styles.infoIcon} />
                <Text style={styles.countText}>11</Text>
              </View>
              <View>
                <ShareIcon width="15" height="14" />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handlePage()}>
        <View style={styles.innerContainer}>
          <View style={styles.account}>
            <KarennneIcon width="55" height="55" style={styles.profileIcon} />
          </View>
          <View style={styles.content}>
            <View style={styles.situation}>
              <SmallHeartIcon style={styles.situationIcon} />
              <Text style={styles.situationText}>Zack John liked</Text>
            </View>
            <View style={styles.header}>
              <View style={styles.user}>
                <Text style={styles.name}>Tabitha Potter</Text>
                <Text style={styles.username}>@mis_potter </Text>
                <Text style={styles.dateText}>·14h </Text>
              </View>
              <ArrowIcon style={styles.arrowIcon} />
            </View>
            <View style={styles.tweetContainer}>
              <Text style={styles.tweet}>
                Kobe’s passing is really sticking w/ me in a way I didn’t
                expect.
              </Text>
              <Text style={styles.tweet}>
                He was an icon, the kind of person who wouldn’t die this way. My
                wife compared it to Princess Di’s accident.
              </Text>
              <Text style={styles.tweet}>
                But the end can happen for anyone at any time, & I can’t help
                but think of anything else lately.
              </Text>
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
                <RetweetIcon width="15" height="15" style={styles.infoIcon} />
                <Text style={styles.countText}>1</Text>
              </View>
              <View style={styles.info}>
                <HeartIcon width="15" height="15" style={styles.infoIcon} />
                <Text style={styles.countText}>11</Text>
              </View>
              <View style={styles.sharedIcon}>
                <ShareIcon width="15" height="14" />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default TweetCard;
