import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert, FlatList} from "react-native";
import * as Location from "expo-location";
import { useNavigation, useRoute } from "@react-navigation/native";
import MapPreview from './MapPreview'
import { insertAddress, fetchAddress } from '../db'

const LocationSelector = () => {

   const [pickedLocation, setPickedLocation] = useState()
   const [locations, setLocation] = useState([])
   let ubicacion = <View></View>

   

   const handleGetLocation = async () => {

      console.log('inicio')

        const isLocationOk = await verifyPermissions()
        if(!isLocationOk)return

        console.log('inicio1')
        const location = await Location.getCurrentPositionAsync({
            timeout: 5000
        })

        console.log('inicio22')
        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        })

        const result = await insertAddress(pickedLocation.lat, pickedLocation.lng)
        
        console.log(result)
   }

   
     const loadAddress = async () => {
      
          const result = await fetchAddress();
          console.log(result.rows._array[0])
          setLocation(result.rows._array)
      
    };
    
    
    
   

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

   const Item = ({ item }) => (
    <View >
      <Text>{item.lat}{item.lng}</Text>
    </View>
  );

  if(locations.length > 0){
    ubicacion = <View>
          
          
          <FlatList
            data={locations}
            renderItem={Item}
          />
          </View>
  }
   
    

  return (
    <View style={styles.item}>
      <MapPreview location={pickedLocation} style={styles.preview}>
        <Text>Location en proceso...</Text>
      </MapPreview>
      <Button title= "obtener location"
        onPress={handleGetLocation}>
  
      </Button>
      <Button title= "obtener location1111"
        onPress={loadAddress}>
  
      </Button>

      {ubicacion}
      
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