import { StyleSheet } from 'react-native';
import { Dimensions, Platform } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#6CECA8'
    },
    viewer: {
        width: '100%',
        height: '75%',
        backgroundColor: 'white',
        borderTopLeftRadius: width * 0.1,
        borderTopRightRadius: width * 0.1,
        elevation: 2,
        shadowOffset: { width: 4, height: 4 },
        shadowColor: "black",
        shadowOpacity: 0.3,
        shadowRadius: 8,
        alignItems: 'center',

    },
    gridItemH: {
        width: '90%',
        height: '35%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    containerAvatar: {
        width: width * 0.35,
        top: -((width * 0.35) / 3),
        height: width * 0.35,
        borderRadius: (width * 0.35) / 2,
        backgroundColor: '#E5E5E5',
        alignItems: 'center',
        justifyContent: 'center',

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
    containerMenu: {
        width: '100%',
        height: '65%',
        alignItems: 'center',
        top: -((width * 0.35) / 4),
        justifyContent: 'space-around'
    },
    textHeader: {
        color: 'white',
        fontSize: width * 0.06
    },
    textHeaderSub: {
        color: 'white',
        fontSize: width * 0.035
    },
    containerHeaderView: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '20%',
        width: '100%'
    },
    itemButtom: {
        height: width * 0.3,
        width: width * 0.3,
        backgroundColor: '#6CECA8',
        borderRadius: width * 0.07,
        elevation: 2,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "black",
        shadowOpacity: 0.3,
        shadowRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerTextInfoUser: {
        width: '100%',
        height: '10%',
        top: -((width * 0.35) / 4),
        alignItems: 'center',
        justifyContent: 'center'
    },
    textNameUser: {
        color: '#808080',
        fontSize: width * 0.06
    },
    textCourseUser: {
        color: '#808080',
        fontSize: width * 0.04
    },
    textItem: {
        fontSize: width * 0.04,
        color: 'white',
        textAlign: 'center'
    },
    itemImageItem: {
        height: width * 0.11,
        width: width * 0.11,
    },
    iconBar: {
        width: width * 0.08,
        height: width * 0.08
    },
    compratilhar: {
        position: 'absolute',
        width: width * 0.15,
        height: width * 0.15,
        borderRadius: (width * 0.15) / 2,
        backgroundColor: '#4CDF83',
        left: width - (width*0.18),
        top: Platform.OS == 'ios' ? height - (width*0.30) :height - (width*0.20) ,
        elevation: 2000,
        shadowOffset: { width: 8, height: 8 },
        shadowColor: "black",
        shadowOpacity: 0.4,
        shadowRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default styles;