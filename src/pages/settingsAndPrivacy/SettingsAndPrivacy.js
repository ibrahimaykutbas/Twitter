import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './SettingsAndPrivacy.style';

import BackIcon from '../../assets/svg/blueBack.svg';
import RightArrowIcon from '../../assets/svg/rightArrow.svg';

const SettingsAndPrivacy = props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  const handlePage = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => handlePage()}>
          <BackIcon width="9.91" height="17" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ayarlar ve gizlilik</Text>
        <TouchableOpacity onPress={() => handlePage()}>
          <Text style={styles.done}>Tamamlandı</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.contentHeader}>@pixsellz</Text>

      <View style={styles.innerContainer}>
        <View style={styles.innerContainerHeader}>
          <Text style={styles.innerContainerHeaderText}>Hesap</Text>
          <RightArrowIcon />
        </View>

        <View style={styles.line} />

        <View style={styles.innerContainerHeader}>
          <Text style={styles.innerContainerHeaderText}>
            Gizlilik ve güvenlik
          </Text>
          <RightArrowIcon />
        </View>

        <View style={styles.line} />

        <View style={styles.innerContainerHeader}>
          <Text style={styles.innerContainerHeaderText}>Bildirimler</Text>
          <RightArrowIcon />
        </View>

        <View style={styles.line} />

        <View style={styles.innerContainerHeader}>
          <Text style={styles.innerContainerHeaderText}>İçerik tercihleri</Text>
          <RightArrowIcon />
        </View>
      </View>

      <Text style={styles.contentHeader}>Genel</Text>

      <View style={styles.innerContainer}>
        <View style={styles.innerContainerHeader}>
          <Text style={styles.innerContainerHeaderText}>Ekran ve ses</Text>
          <RightArrowIcon />
        </View>

        <View style={styles.line} />

        <View style={styles.innerContainerHeader}>
          <Text style={styles.innerContainerHeaderText}>Veri kullanımı</Text>
          <RightArrowIcon />
        </View>

        <View style={styles.line} />

        <View style={styles.innerContainerHeader}>
          <Text style={styles.innerContainerHeaderText}>Ulaşılabilirlik</Text>
          <RightArrowIcon />
        </View>

        <View style={styles.line} />

        <View style={styles.innerContainerHeader}>
          <Text style={styles.innerContainerHeaderText}>Twitter hakkında</Text>
          <RightArrowIcon />
        </View>

        <View style={styles.line} />

        <View style={styles.innerContainerHeader}>
          <Text style={styles.warning}>
            Genel ayarlar, bu cihazdaki tüm Twitter hesaplarınızı etkiler.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SettingsAndPrivacy;
