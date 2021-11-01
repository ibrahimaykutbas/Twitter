import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Modal from 'react-native-modal';

import styles from './InputModel.style';

import ProfileIcon from '../../assets/svg/profile.svg';
import CameraIcon from '../../assets/svg/camera.svg';
import ImageIcon from '../../assets/svg/image.svg';
import ImageIcon1 from '../../assets/svg/image1.svg';
import ImageIcon2 from '../../assets/svg/image2.svg';
import ImageIcon3 from '../../assets/svg/image3.svg';
import GalleryIcon from '../../assets/svg/gallery.svg';
import GifIcon from '../../assets/svg/gif.svg';
import StatIcon from '../../assets/svg/stat.svg';
import LocationIcon from '../../assets/svg/location.svg';
import AddIcon from '../../assets/svg/add.svg';
import VerticalSperatorIcon from '../../assets/svg/verticalSperator.svg';
import TickIcon from '../../assets/svg/tick.svg';

const InputModel = ({visible, onClose, placeholder, title}) => {
  const [text, setText] = useState('');

  return (
    <Modal
      isVisible={visible}
      swipeDirection="up"
      onSwipeComplete={onClose}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.cancel} onPress={onClose}>
            İptal
          </Text>
          <TouchableOpacity
            style={
              text.length > 0
                ? styles.tweetActiveButtonText
                : styles.tweetButton
            }
            disabled={text.length > 0 ? false : true}
            onPress={onClose}>
            <Text style={styles.tweetButtonText}>Tweet</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tweetContainer}>
          <View style={styles.tweetHeader}>
            <ProfileIcon width="37" heigth="37" />
            <TextInput
              placeholder={placeholder}
              placeholderTextColor="#687684"
              onChangeText={setText}
              value={text}
              multiline
              style={styles.input}
            />
          </View>
          <View style={styles.tweetFooter}>
            <View style={styles.gallery}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.camera}>
                  <CameraIcon />
                </View>
                <ImageIcon style={styles.media} />
                <ImageIcon1 style={styles.media} />
                <ImageIcon2 style={styles.media} />
                <ImageIcon3 style={styles.media} />
              </ScrollView>
            </View>
            <View style={styles.extra}>
              <View style={styles.leftButtons}>
                <GalleryIcon />
                <GifIcon />
                <StatIcon />
                <LocationIcon />
              </View>
              <View style={styles.rightButtons}>
                <TickIcon />
                <VerticalSperatorIcon heigth="26" />
                <AddIcon />
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default InputModel;
