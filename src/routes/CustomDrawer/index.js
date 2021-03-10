import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

export const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor: '#212121', padding: 15}}>
        {/* User Row */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: '#cacaca',
              width: 50,
              height: 50,
              borderRadius: 25,
              marginRight: 10,
            }}
          />
          <View>
            <Text style={{color: '#fff', fontSize: 24}}>Lucas Cardoso</Text>
            <Text style={{color: 'lightgrey'}}>5.00 *</Text>
          </View>
        </View>

        {/* Messages Row */}
        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#919191',
            paddingVertical: 5,
            marginVertical: 10,
          }}>
          <Pressable onPress={() => console.warn('Mensagens')}>
            <Text style={{color: '#dddddd', paddingVertical: 5}}>
              Mensagens
            </Text>
          </Pressable>
        </View>

        {/* Do more */}
        <Pressable onPress={() => console.warn('Faça dinheiro dirigindo')}>
          <Text style={{color: '#dddddd', paddingVertical: 5}}>
            Faça mais com sua conta
          </Text>
        </Pressable>

        {/* Make money */}
        <Pressable onPress={() => console.warn('Faça dinheiro dirigindo')}>
          <Text style={{color: '#fff', paddingVertical: 5}}>
            Faça dinheiro dirigindo
          </Text>
        </Pressable>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
