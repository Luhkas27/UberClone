import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {HomeNavigator, CustomDrawer} from '../index';

const Drawer = createDrawerNavigator();

const DummyScreen = ({name}) => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>{name}</Text>
  </View>
);

export const RouterNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={HomeNavigator} />

        <Drawer.Screen name="Suas Viagens">
          {() => <DummyScreen name="Suas Viagens" />}
        </Drawer.Screen>

        <Drawer.Screen name="Ajuda">
          {() => <DummyScreen name="Ajuda" />}
        </Drawer.Screen>

        <Drawer.Screen name="Carteira">
          {() => <DummyScreen name="Carteira" />}
        </Drawer.Screen>

        <Drawer.Screen name="Configurações">
          {() => <DummyScreen name="Configurações" />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
