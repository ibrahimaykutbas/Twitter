import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './Subscribed.style';

const Subscribed = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Herhangi bir Liste oluşturmadınız veya abone olmadınız
      </Text>
      <Text style={styles.text}>Bunu yaptığınızda, burada görünecektir.</Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Liste oluştur</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Subscribed;
