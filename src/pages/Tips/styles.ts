import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white'
    },
    tab: {
        width: '100%',
        height: width * 0.15,
        backgroundColor: '#E5E5E5',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderColor: '#141414'
    },
    iconBar: {
        width: width * 0.08,
        height: width * 0.08
    },
    viewInfo:{
        width:'100%',
        height:'50%',
        alignItems:'center',
        justifyContent:'space-around'
    },
    buttonArrow: {
        width: width * 0.17,
        height: width * 0.17,
        borderRadius: (width * 0.17) / 2,
        backgroundColor: '#6CECA8',
        alignItems:'center',
        justifyContent:'center'
    },
    headetTitle:{
        color:'#6CECA8',
        fontSize: width*0.07,
        fontWeight: 'bold',
        width: '80%',
        textAlign:'center',
    },
    bodyText:{
        fontSize: width*0.04,
        textAlign:'center',
        width: '80%',
        color: '#141414'
    },
    pero:{
        width: width*0.5,
        height:width*0.5
    }
})
export default styles;