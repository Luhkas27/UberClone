import React from 'react';
import {View, Text, Pressable} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

export const HomeSearch = () => {
  const navigation = useNavigation();

  const goToSearch = () => {
    navigation.navigate('DestinationSearch');
  };
  return (
    <View>
      {/* Input Box */}
      <Pressable onPress={goToSearch} style={styles.inputBox}>
        <Text style={styles.inputText}>Para onde?</Text>

        <View style={styles.timeContainer}>
          <AntDesign name="clockcircle" size={16} color="#535353" />
          <Text>Agora</Text>
          <MaterialIcons name="keyboard-arrow-down" size={16} />
        </View>
      </Pressable>

      {/* Previous destination */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name="clockcircle" size={20} color="#fff" />
        </View>
        <Text style={styles.destinationText}>Spin Hotel</Text>
      </View>

      {/* Home destination */}
      <View style={styles.row}>
        <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
          <Entypo name="home" size={20} color="#fff" />
        </View>
        <Text style={styles.destinationText}>Spin Hotel</Text>
      </View>
    </View>
  );
};
