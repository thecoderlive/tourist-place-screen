import React from 'react'
import { Image, Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import PlacesList from './PlacesList'

const Tourist = () => (
<ScrollView style={styles.tourist} showsVerticalScrollIndicator={false}>
<Image
    style={styles.company_logo}
    source={{uri: item.company_logo}}
    />
<Text style={styles.place_title}>{item.place_title}</Text>
<PlacesList item={item.places_list}/>
</ScrollView>
)

export default Tourist;

const styles = StyleSheet.create({
    'company_logo': {
        'width': '55vw',
        'height': '30vw',
        'alignSelf': 'center',
        'marginVertical': 40
    },
    'place_title': {
        'color': '#080707',
        'fontSize': 20,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'alignSelf': 'center',
        'marginBottom': 15
    }
});