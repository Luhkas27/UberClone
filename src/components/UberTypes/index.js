import React from 'react';
import {View, Text, Pressable} from 'react-native';

import {UberTypeRow} from '..';

import typesData from '../../data/types';

import styles from './styles';

export const UberTypes = () => {
  const confirm = () => {
    console.warn('confirm');
  };

  return (
    <View>
      {typesData.map((type) => (
        <UberTypeRow key={type.id} type={type} />
      ))}

      <Pressable
        onPress={confirm}
        style={{
          height: 45,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
          marginHorizontal: 10,
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Confirmar Uber</Text>
      </Pressable>
    </View>
  );
};
