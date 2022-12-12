import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { mvs } from '../../../config/metrices'
import { colors } from '../../../config/colors'

const Headers = () => {
    return (
        <View style={styles.container}>

        </View>
    )
}

export default Headers

const styles = StyleSheet.create({
    container: {
        height: mvs(55),
        backgroundColor: colors.blue
    }
})