import { View, Text, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import Styles from './splas-styles'
import splashpng from '../../assets/png/splaspng.png'
import styles from './splas-styles'
import { EuroRailTrackerLogo } from '../../assets/svgs/index'

const Splash = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Signin')
    }, 3000);

  }, [])


  return (
    <View style={Styles.container}>
      <ImageBackground source={splashpng} resizeMode="cover" style={styles.image} >
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <EuroRailTrackerLogo height={'140px'} wodth={'160px'} />
          <Text style={styles.txt}>Euro Rail Tracker</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Splash