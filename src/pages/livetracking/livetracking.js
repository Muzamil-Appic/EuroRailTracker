import { Button, View, Text, TouchableOpacity, TextInput, Platform, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveHeight, responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import styles from './livetracking-styles'
import { colors } from '../../config/colors'
import Backsvg from '../../assets/svgs/back.svg'
import fonts from '../../assets/fonts'
import { traindummydata } from '../../config/constants'
import TargetBlack from '../../assets/svgs/target-locating-search-goal-find-32129 .svg'
import { LocationIcon } from '../../assets/svgs/index'
import DisabledLocationIcon from '../../assets/svgs/target-gps-off-mission-goal-32128'
import Modal from "react-native-modal";
export default function LiveTracking({ navigation }) {

    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const renderfunction = ({ item }) => {
        console.log(item);
        return (
            <View style={{ height: rh(8), borderBottomColor: colors.blue, borderBottomWidth: 1, alignContent: 'center', justifyContent: 'center', marginHorizontal: rw(8), bottom: rh(1) }}>
                {item.active === 'yes' ?
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} onPress={toggleModal}>
                        <Text style={{ textAlign: 'center', fontFamily: fonts.robotobold, fontSize: 15, fontWeight: '400', color: colors.black }}>{item.trainname}</Text>
                        <TargetBlack width={'34px'} height={'34px'} />
                    </TouchableOpacity>
                    :
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ textAlign: 'center', fontFamily: fonts.robotobold, fontSize: 15, fontWeight: '400', color: 'white' }}>{item.trainname}</Text>
                        <DisabledLocationIcon width={'34px'} height={'34px'} />
                    </View>
                }

            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', height: rh(7), backgroundColor: colors.blue, alignItems: 'center', }}>
                <TouchableOpacity style={{ marginHorizontal: rw(5), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.goBack()}>
                    <Backsvg width={'10px'} height={'16px'} />
                </TouchableOpacity>
                <Text style={{ color: colors.white, fontSize: 18, fontFamily: fonts.robotobold, fontWeight: '600' }}>Live Tracking</Text>

            </View>
            <View style={{ height: rh(7), width: rw(90), backgroundColor: '#919191', borderRadius: 30, justifyContent: 'center', alignSelf: 'center', marginVertical: rh(1) }}>
                <TextInput placeholder='Search' style={{ paddingLeft: 20, paddingBottom: Platform.OS === 'android' ? 5 : 0, color: colors.black }} />
            </View>
            <View style={{ height: rh(8), borderBottomColor: colors.blue, borderBottomWidth: 1, alignContent: 'center', justifyContent: 'center', marginHorizontal: rw(8) }}>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ textAlign: 'center', fontFamily: fonts.robotobold, fontSize: 15, fontWeight: '400', color: colors.blue }}>All Live Trains</Text>
                    <TargetBlack width={'34px'} height={'34px'} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={traindummydata}
                keyExtractor={item => item.id}
                renderItem={renderfunction}
            />


            <View style={{ flex: 1 }}>


                <Modal isVisible={isModalVisible}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <View style={{ height: rh(23), backgroundColor: colors.white, borderRadius: 10 }}>
                            <View style={{ marginVertical: rh(2), marginHorizontal: rw(4) }}>
                                <Text style={{ fontFamily: fonts.robotobold, fontSize: 20, fontWeight: '900', color: colors.blue }}>Select Train Type</Text>
                            </View>
                            <View style={{ height: rh(0.2), backgroundColor: '#919191', marginHorizontal: rw(4) }}>
                            </View>
                            <View >
                                <TouchableOpacity style={{ marginVertical: rh(2), marginHorizontal: rw(4) }} onPress={() => { navigation.navigate('AllupTrains'), setModalVisible(false) }}>
                                    <Text style={{ fontFamily: fonts.robotobold, fontSize: 16, fontWeight: '400', color: colors.black }}>All UP Trains</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginVertical: rh(1), marginHorizontal: rw(4) }}>
                                    <Text style={{ fontFamily: fonts.robotobold, fontSize: 16, fontWeight: '400', color: colors.black }}>All Down Trains</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View >



        </SafeAreaView >
    )
}