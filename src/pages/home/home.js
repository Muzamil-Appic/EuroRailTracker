import { View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import styles from './home-styles'
import Headers from '../../components/atoms/header/header'
import { mvs } from '../../config/metrices'
import { TrainUpdated, TrainSchedules, LiveTracking, LiveFreight, EuroRailTrackerLogo, Menue, Notification, TrainLogoWhite, StationUpdate, StationSchedule } from '../../assets/svgs/index'
import { colors } from '../../config/colors'
import Ionicons from 'react-native-vector-icons/Ionicons'
import fonts from '../../assets/fonts'
import { responsiveHeight, responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>



            <View style={{ flexDirection: 'row', height: rh(7), backgroundColor: colors.blue, alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: rw(25), marginHorizontal: rw(6), justifyContent: 'space-between' }}>
                    <TrainLogoWhite width={'42px'} height={'38px'} />
                    <Text style={{ textAlign: 'center', color: colors.white, fontSize: 18, fontFamily: fonts.robotobold }}>Home</Text>
                </View>
                <View style={{ flexDirection: 'row', width: rw(16), marginHorizontal: rw(5), justifyContent: 'space-between', alignContent: 'center' }}>

                    <TouchableOpacity>
                        <Ionicons name='ios-notifications' size={30} color={colors.white} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name='ellipsis-vertical-sharp' size={30} color={colors.white} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={{ flex: 1 }}>
                <TouchableOpacity style={{ height: rh(6), width: rw(95), backgroundColor: colors.placeholder, top: rh(1), borderRadius: 10, justifyContent: 'center', alignContent: 'center', alignSelf: 'center' }}>
                    <Text style={{ textAlign: 'center', color: colors.white, fontFamily: fonts.robotobold, fontSize: 18, fontWeight: '500' }}>Add Post</Text>
                </TouchableOpacity>

                <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: rh(2) }}>
                    <TouchableOpacity onPress={() => navigation.navigate('LiveTracking')}>
                        <LiveTracking width={rw(94)} height={rh(20)} />
                    </TouchableOpacity>
                </View>

                <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                    <TouchableOpacity>
                        <LiveFreight width={rw(94)} height={rh(20)} />
                    </TouchableOpacity>
                </View>



                <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginHorizontal: rw(3) }}>
                    <TouchableOpacity>
                        <TrainUpdated width={rw(45)} height={rh(20)} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <TrainSchedules width={rw(45)} height={rh(20)} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginHorizontal: rw(3) }}>
                    <TouchableOpacity>
                        <StationUpdate width={rw(45)} height={rh(20)} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <StationSchedule width={rw(45)} height={rh(20)} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}