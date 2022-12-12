import { Text, View, StyleSheet } from "react-native"
import fonts from "../../assets/fonts";
import { colors } from "../../config/colors";
import { mvs } from "../../config/metrices";
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    txt:
    {
        fontSize: 24,
        color: colors.black,
        fontWeight: '600',
        fontFamily: fonts.robotobold,
        marginVertical: mvs(15)
    }


})
export default styles;