import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import * as Location from "expo-location";
import { useNavigation, useRoute } from "@react-navigation/native";
import MapPreview from './MapPreview'

const LocationSelector = () => {

   const [pickedLocation, setPickedLocation] = useState()

   console.log(pickedLocation)

   const handleGetLocation = async () => {
    
        const isLocationOk = await verifyPermissions()
        if(!isLocationOk)return

        const location = await Location.getCurrentPositionAsync({
            timeout: 5000
        })

        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        })

        
   }

   const verifyPermissions = async () => {
        const {status} = await Location.requestForegroundPermissionsAsync()

        if (status !== 'granted') {
            Alert.alert (
                'permisos insuficientes',
                'necesitas dar permisos',
                [{text: 'ok'}]
            )

            return false
        }
        
        return true
   }

  return (
    <View style={styles.item}>
      <MapPreview location={pickedLocation} style={styles.preview}>
        <Text>Location en proceso...</Text>
      </MapPreview>
      <Button title= "obtener location"
        onPress={handleGetLocation}>
        

      </Button>
    </View>
  )
}

export default LocationSelector

const styles = StyleSheet.create({
    item: {
        
        justifyContent:'center',
        alignItems:'center',
        marginTop: '10%'
       
      },
    preview: {
        width: '100%',
        height:'80%',
        marginBottom: 10,
        justifyContent:'center',
        alignItems: 'center'
    }
})