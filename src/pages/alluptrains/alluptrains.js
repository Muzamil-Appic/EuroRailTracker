import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './alluptrains-styles'
import { colors } from '../../config/colors'
import Backsvg from '../../assets/svgs/back.svg'
import fonts from '../../assets/fonts'
import { responsiveHeight, responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
const AllupTrains = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', height: rh(7), backgroundColor: colors.blue, alignItems: 'center', }}>
                <TouchableOpacity style={{ marginHorizontal: rw(5), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.goBack()}>
                    <Backsvg width={'10px'} height={'16px'} />
                </TouchableOpacity>
                <Text style={{ color: colors.white, fontSize: 18, fontFamily: fonts.robotobold, fontWeight: '600' }}>All UP Trains</Text>
            </View>

            <View style={{ flex: 1 }}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={{ flex: 1 }}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                </MapView>
            </View>
        </SafeAreaView>
    )
}

export default AllupTrains