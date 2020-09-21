import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column-reverse',
        justifyContent: 'space-between',
        backgroundColor: '#6CECA8'
    },
    viewer: {
        width: '100%',
        height: '80%',
        backgroundColor: 'white',
        borderTopLeftRadius: width * 0.1,
        borderTopRightRadius: width * 0.1
    }
});
export default styles;