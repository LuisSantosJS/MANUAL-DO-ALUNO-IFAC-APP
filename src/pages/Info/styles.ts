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
        borderColor:'#6CECA8',
        position:'absolute',
        left: width - (width * 0.15),
        top: width*0.1,
        alignItems:'center',
        justifyContent:'center'
    },
    closeImage:{
        width: width * 0.04,
        height: width * 0.04
    },
    tab: {
        width: '100%',
        height: width * 0.15,
        backgroundColor: '#E5E5E5',
        borderTopWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderColor: '#141414'
    },
    iconBar: {
        width: width * 0.08,
        height: width * 0.08
    },
    gridItems:{
        width:'100%',
        height:'35%',
        alignItems:'center',
        justifyContent:'space-around'
    },
    imageContainer: {
        width: width * 0.2,
        height: width * 0.2
    },
    betaView:{
        width:width*0.3,
        height: width*0.08,
        borderRadius: width*0.1,
        backgroundColor:'#6CECA8',
        alignItems:'center',
        justifyContent:'center'

    },
    betaText:{
        color: 'white'
    },
    manualText:{
        color:'#141414',
        fontSize: width*0.055,
        width:'80%',
        textAlign:'center',
        fontWeight: 'bold'
    },
    manualBody:{
        color:'#141414',
        fontSize: width*0.04,
        width:'70%',
        textAlign:'center'
    }
});
export default styles;