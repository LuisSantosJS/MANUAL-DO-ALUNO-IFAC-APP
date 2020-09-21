import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF'
    },
    gridCollumm: {
        width: '100%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imageContainer: {
        width: width * 0.2,
        height: width * 0.2
    },
    imageContainerInicial: {
        width: width * 0.5,
        height: width * 0.5
    },
    textBody: {
        width: '90%',
        color: '#141414',
        fontSize: width * 0.045,
        textAlign: 'center'
    },
    textTitle: {
        color: '#6CECA8',
        fontSize: width * 0.08,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    inputView: {
        width: '80%',
        height: width * 0.12,
        borderRadius: width * 0.055,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#191919',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputView2: {
        width: '80%',
        height: width * 0.12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    viewIcon: {
        height: '100%',
        width: '15%',
        alignItems: "center",
        justifyContent: 'center'

    },
    input: {
        height: '100%',
        width: '85%',

    },
    imageContainerInput: {
        width: width * 0.08,
        height: width * 0.08
    },
    viewBackView: {
        width: '90%',
        height: width * 0.3,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonArrow: {
        width: width * 0.17,
        height: width * 0.17,
        borderRadius: (width * 0.17) / 2,
        backgroundColor: '#6CECA8',
        alignItems:'center',
        justifyContent:'center'
    }
});
export default styles;