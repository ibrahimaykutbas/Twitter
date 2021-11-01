import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './Member.style';

import ProfileIcon from '../../../assets/svg/profile.svg';
import MemberProfileIcon from '../../../assets/svg/memberProfile.svg';
import MemberProfileIcon1 from '../../../assets/svg/memberProfile1.svg';

const Member = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cardContainer}>
        <View style={styles.info}>
          <Text style={styles.name}>Joshua Lawrence</Text>
          <Text style={styles.subject}>D-teams</Text>
          <Text style={styles.member}>277 üyeler</Text>
        </View>
        <View style={styles.image}>
          <MemberProfileIcon />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardContainer}>
        <View style={styles.info}>
          <Text style={styles.name}>Pixsellz Team</Text>
          <Text style={styles.subject}>start-up</Text>
          <Text style={styles.member}>77 üyeler</Text>
        </View>
        <View style={styles.image}>
          <ProfileIcon />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardContainer}>
        <View style={styles.info}>
          <Text style={styles.name}>Pixsellz Team</Text>
          <Text style={styles.subject}>gadgets</Text>
          <Text style={styles.member}>88 üyeler · 5 aboneler</Text>
        </View>
        <View style={styles.image}>
          <ProfileIcon />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardContainer}>
        <View style={styles.info}>
          <Text style={styles.name}>Pixsellz Team</Text>
          <Text style={styles.subject}>designer</Text>
          <Text style={styles.member}>68 üyeler</Text>
        </View>
        <View style={styles.image}>
          <ProfileIcon />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardContainer}>
        <View style={styles.info}>
          <Text style={styles.name}>Pixsellz Team</Text>
          <Text style={styles.subject}>designer</Text>
          <Text style={styles.member}>88 üyeler · 11 aboneler</Text>
        </View>
        <View style={styles.image}>
          <MemberProfileIcon1 />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Member;

/* 
  <Text style={styles.headerText}>
        You haven’t created or subscribed to any Lists
      </Text>
      <Text style={styles.text}>When you do, it’ll show up here.</Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Create a List</Text>
      </TouchableOpacity>

*/
