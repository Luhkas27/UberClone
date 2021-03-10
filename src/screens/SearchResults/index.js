import React from 'react';
import {View, Dimensions} from 'react-native';
import {useRoute} from '@react-navigation/native';

import {RouteMap, UberTypes} from '../../components';

export const SearchResults = () => {
  const route = useRoute();

  console.log(route.params);

  const {originPlace, destinationPlace} = route.params;

  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>

      <View style={{height: 400}}>
        <UberTypes />
      </View>
    </View>
  );
};
