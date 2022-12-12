import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../config/colors'
import fonts from '../../assets/fonts'
// const interrail = require('interrail')
//  const interrail = require('interrail')
// import interrail from 'interrail'
const Dummy = () => {


    const searchstation = () => {

        interrail.stations.search('Ljubl', { results: 1 }).then(
            console.log(results)
        )
    }


    return (
        <SafeAreaView>
            <TouchableOpacity style={{ width: 90, height: 50, alignSelf: 'center', top: 50, backgroundColor: colors.blue, borderRadius: 10, justifyContent: 'center' }}
                onPress={() => searchstation()}>
                <Text style={{ color: colors.white, fontSize: 25, textAlign: 'center' }}>Hit Me</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Dummy

const styles = StyleSheet.create({})