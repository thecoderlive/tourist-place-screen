import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const placesListItem = ({ item }) => (
<View style={styles.places_list_item}>
<Image
    style={styles.place_img}
    source={{uri: item.place_img}}
    />
<Text style={styles.place_text}>{item.place_text}</Text>
</View>
  );

const PlacesList = ({ item }) => (
<FlatList
    style={styles.places_list}
    data={item}
    renderItem={placesListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default PlacesList;

const styles = StyleSheet.create({
    'place_img': {
        'width': '40vw',
        'height': '60vw',
        'marginTop': 5
    },
    'place_text': {
        'color': '#060505',
        'fontSize': 15,
        'fontWeight': '700',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});