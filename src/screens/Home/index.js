import React from 'react';
import {View, Dimensions} from 'react-native';

import {HomeMap, CovidMessage, HomeSearch} from '../../components';

export const Home = () => {
  return (
    <View style={{height: Dimensions.get('window').height - 400}}>
      <HomeMap />

      {/* Covid Message */}
      <CovidMessage />
      {/* Bottom Comp */}
      <HomeSearch />
    </View>
  );
};
