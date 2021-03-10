import React, {useState, useEffect, useCallback} from 'react';
import {View, SafeAreaView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useNavigation} from '@react-navigation/native';

import {PlaceRow} from './components';

import styles from './styles';

const homePlace = {
  description: 'Home',
  geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
};
const workPlace = {
  description: 'Work',
  geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
};

export const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);
  const navigation = useNavigation();

  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResults', {
        originPlace,
        destinationPlace,
      });
    }
  };

  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="De onde?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details}, checkNavigation);
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          currentLocation
          currentLocationLabel="Posição atual"
          styles={{
            textInput: styles.textInput,
            container: styles.autoCompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyDNL9baUOD_DdkJl6C7PCdcgAEr8Vl3dhI',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
        />

        <GooglePlacesAutocomplete
          placeholder="Para onde?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
            setDestinationPlace({data, details}, checkNavigation);
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {...styles.autoCompleteContainer, top: 55},
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyDNL9baUOD_DdkJl6C7PCdcgAEr8Vl3dhI',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
        />

        {/* Circle near Origin input */}

        <View style={styles.circle} />

        {/* Line between dots */}
        <View style={styles.line} />

        {/* Square near Destination input*/}
        <View style={styles.square} />
      </View>
    </SafeAreaView>
  );
};
