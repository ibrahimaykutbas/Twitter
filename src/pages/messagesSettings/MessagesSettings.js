import React, {useState} from 'react';
import {View, Text, Switch, TouchableOpacity} from 'react-native';

import styles from './MessagesSettings.style';

import BackIcon from '../../assets/svg/blueBack.svg';

const MessagesSettings = props => {
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
        <Text style={styles.headerTitle}>Mesaj Ayarları</Text>
        <TouchableOpacity onPress={() => handlePage()}>
          <Text style={styles.done}>Tamamlandı</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.contentHeader}>Gizlilik</Text>

      <View style={styles.innerContainer}>
        <View style={styles.innerContainerHeader}>
          <Text style={styles.innerContainerHeaderText}>
            Herhangi birinden mesaj al
          </Text>
          <Switch
            trackColor={{false: '#E9E9EA', true: '#59BC6C'}}
            thumbColor="{isEnabled ? '#FFFFFF' : '#FFFFFF'}"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Text style={styles.contentText}>
          Şu adresten Direkt Mesaj istekleri alabileceksiniz: Twitter'daki
          herhangi biri, onları takip etmeseniz bile.
          <Text style={styles.link}> Daha fazla bilgi edin</Text>
        </Text>

        <View style={styles.line} />

        <View style={styles.innerContainerHeader}>
          <Text style={styles.innerContainerHeaderText}>Kalite filtresi</Text>
          <Switch
            trackColor={{false: '#E9E9EA', true: '#59BC6C'}}
            thumbColor="{isEnabled ? '#FFFFFF' : '#FFFFFF'}"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Text style={styles.contentText}>
          Düşük kaliteli mesajları Direkt Mesaj isteklerinizden filtreler.
          <Text style={styles.link}> Daha fazla bilgi edin</Text>
        </Text>

        <View style={styles.line} />

        <View style={styles.innerContainerHeader}>
          <Text style={styles.innerContainerHeaderText}>
            Okundu bilgilerini göster
          </Text>
          <Switch
            trackColor={{false: '#E9E9EA', true: '#59BC6C'}}
            thumbColor="{isEnabled ? '#FFFFFF' : '#FFFFFF'}"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Text style={styles.contentText}>
          Biri size bir mesaj gönderdiğinde, sohbetteki kişiler onu gördüğünüzde
          bunu bilecektir. Bu ayarı kapatırsanız, diğerlerinden gelen okundu
          bilgilerini göremezsiniz.
          <Text style={styles.link}> Daha fazla bilgi edin</Text>
        </Text>
      </View>
    </View>
  );
};

export default MessagesSettings;
