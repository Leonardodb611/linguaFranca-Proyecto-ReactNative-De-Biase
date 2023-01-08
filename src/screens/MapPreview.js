import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import  MAP  from '../constants/Map'


const MapPreview = ({location, children}) => {

    
    const mapPreviewUrl = location
    ? `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=13&size=600x300&maptype=roadmap
    &markers=color:blue%7Clabel:S%7C${location.lat},${location.lng}&markers=color:green%7Clabel:G%7C${location.lat},${location.lng}
    &markers=color:red%7Clabel:C%7C${location.lat},${location.lng}
    &key=${MAP.API_KEY}`
    : "";

    
  return (
    <View style={styles.mapPreview}>
      {location ? (
        <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} />
      ) : (
        children
      )}
    </View>
  )
}

export default MapPreview

const styles = StyleSheet.create({
    mapPreview: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    mapImage: {
        width: 400,
        height: 400,
        borderRadius: 10,
        marginBottom: 20
    }
})