import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    closeView: {
        width: width * 0.11,
        height: width * 0.11,
        borderRadius: (width * 0.11) / 2,
        backgroundColor:'white',
        borderWidth: 2,
        borderColor:'green',
        position:'absolute',
        left: width - (width * 0.15),
        top: width*0.1
    }
});
export default styles;