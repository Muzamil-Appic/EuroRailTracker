import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { mvs } from '../../../config/metrices'
import { colors } from '../../../config/colors'

export default TextInputComp = ({ placeholder, onTermchange, term }) => {
    return (
        <View style={styles.textinputview}>
            <TextInput placeholder={placeholder} value={term} onChangeText={onTermchange} style={styles.txtinputstyle} placeholderTextColor=
                {colors.placeholder} />
        </View>
    )
}



const styles = StyleSheet.create({
    txtinputstyle: {
        fontSize: mvs(14),
        padding: 13,



    },
    textinputview: {
        backgroundColor: colors.txtinputbackground,
        width: mvs(360),
        borderRadius: mvs(8),
        elevation: 5,
        marginTop: mvs(25),
        bottom: mvs(20)

    }
})