import { Text, View, StyleSheet } from "react-native"
import fonts from "../../assets/fonts";
import { colors } from "../../config/colors";
import { mvs } from "../../config/metrices";

    const styles = StyleSheet.create({
        container: {
          ...StyleSheet.absoluteFillObject,
          height: 400,
          width: 400,
          justifyContent: 'flex-end',
          alignItems: 'center',
        },
        map: {
          ...StyleSheet.absoluteFillObject,
        }
       

})
export default styles;