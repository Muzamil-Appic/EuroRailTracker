import { View, Text, ImageBackground, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import splashpng from '../../assets/png/splaspng.png'
import styles from './signin-styles'
import { EuroRailTrackerLogo } from '../../assets/svgs/index'
import { mvs } from '../../config/metrices'
import TextInputComp from '../../components/atoms/txtinput/txtinput'
import Signinbutton from '../../components/atoms/buttons/signinbutton'
import { responsiveHeight, responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { SafeAreaView } from 'react-native-safe-area-context'

const Signin = ({ navigation }) => {
    const [email, setemail] = useState('')
    const [city, setcity] = useState('')
    const [phoneno, setphoneno] = useState('')


    const submitfunction = () => {
        navigation.navigate('Home')
    }


    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={splashpng} resizeMode="cover" style={styles.image} >
                <View style={{ alignItems: 'center', }}>
                    <View style={{ bottom: mvs(35) }}>
                        <EuroRailTrackerLogo height={'140px'} wodth={'160px'} />
                    </View>
                    <TextInputComp placeholder={"Email"} onTermchange={e => setemail(e)} />
                    <TextInputComp placeholder={"City"} onTermchange={e => setcity(e)} />
                    <TextInputComp placeholder={"Phone No"} onTermchange={e => setphoneno(e)} />
                    <Signinbutton title={"Submit"} onsubmit={() => submitfunction()} />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Signin