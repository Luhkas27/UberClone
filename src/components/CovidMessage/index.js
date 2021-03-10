import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

export const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Viaje somente se necessário</Text>
      <Text style={styles.text}>
        Ajude a diminuir o contágio. Se você precisa viajar, por favor, tenha
        cuidado para sua segurança e segurança de nossa comunidade.
      </Text>
      <Text style={styles.learnMore}>Veja mais</Text>
    </View>
  );
};
