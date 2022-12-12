import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { mvs } from '../../../config/metrices'
import { colors } from '../../../config/colors'
import fonts from '../../../assets/fonts'

export default SigninButton = ({ title, onsubmit }) => {
    return (
        <View style={styles.outerview}>
            <TouchableOpacity onPress={onsubmit} style={styles.buttonstyle}>
                <Text style={styles.textstyle}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    buttonstyle: {
        backgroundColor: "#407BFF",
        height: mvs(45),
        width: mvs(150),
        justifyContent: 'center',
        borderRadius: mvs(30)

    },
    outerview: {
        flex: 1,
        marginTop: mvs(10)
    },
    textstyle: {
        textAlign: 'center',
        color: colors.white,
        fontFamily: fonts.robotobold,
        fontWeight: '700'
    },

})