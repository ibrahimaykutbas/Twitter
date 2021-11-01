import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import styles from './AllCard.style';

import StarIcon from '../../../assets/svg/star.svg';
import ArrowIcon from '../../../assets/svg/downArrow.svg';

import NotificationProfilIcon from '../../../assets/svg/notificationProfil.svg';
import NotificationProfilIcon1 from '../../../assets/svg/notificationProfil1.svg';
import NotificationProfilIcon2 from '../../../assets/svg/notificationProfil2.svg';

const AllCard = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.logo}>
            <StarIcon style={styles.startIcon} />
            <NotificationProfilIcon width="37" heigth="37" />
          </View>
          <ArrowIcon style={styles.arrowIcon} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.infoText}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>
              Saad Drusteer
            </Text>
            <Text>'in Tweetini kaçırdıysanız</Text>
          </Text>
          <Text style={styles.contentText}>
            🔥 Are you using WordPress and migrating to the JAMstack? I wrote up
            a case study about how Smashing Magazine moved to JAMstack and saw
            great performance improvements and better security.
          </Text>
          <Text style={styles.contentText}>
            smashingdrusteer.com/2020/01/migrat...
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.logo}>
            <StarIcon style={styles.startIcon} />
            <NotificationProfilIcon1 width="37" heigth="37" />
          </View>
          <ArrowIcon style={styles.arrowIcon} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.infoText}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>
              Saad Drusteer
            </Text>
            <Text>'in Tweetini kaçırdıysanız</Text>
          </Text>
          <Text style={styles.contentText}>
            Creating meaningful experiences: an Introduction to User Experience
            design
          </Text>
          <Text style={styles.contentText}>owww.ly/p0fx50y5CoO</Text>
          <Text style={styles.contentText}>
            #ux #uxdesign #uxresearch #userresearch #research #productdesing
            #webdesign #userexperience #startup #digital #design #diseno
            #psychology #servicedesign #conversion pic.twitter.com/wgpLcbkomN
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.logo}>
            <StarIcon style={styles.startIcon} />
            <NotificationProfilIcon2 width="37" heigth="37" />
          </View>
          <ArrowIcon style={styles.arrowIcon} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.infoText}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>
              Saad Drusteer
            </Text>
            <Text>'in Tweetini kaçırdıysanız</Text>
          </Text>
          <Text style={styles.contentText}>
            I’m always surprised how few designers are also serious gamers.
            Curious why that
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default AllCard;
