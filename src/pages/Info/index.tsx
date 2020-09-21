import React from 'react';
import {
    View,
    Image,
    TouchableWithoutFeedback,
    StatusBar,
    Text
} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
const Close = require('../../assets/close.png');
const HomeIcon = require('../../assets/home.png');
const CallIcon = require('../../assets/cell.png');
const SobreIcon = require('../../assets/sobre.png');
const IfacLogo = require('../../assets/ifac.png');
const Info: React.FC = () => {
    const navigation = useNavigation();
    const HandleBack = () => {
        navigation.goBack()
    }
    return (
        <>
            <View style={{ width: '100%', backgroundColor: 'white', height: getStatusBarHeight(true) }} />
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <View style={styles.container}>
                <View style={[styles.gridItems, { height: '10%', }]} />
                <View style={[styles.gridItems, { height: '20%', }]}>
                    <Image style={styles.imageContainer} resizeMode={'contain'} source={IfacLogo} />
                    <View style={styles.betaView}>
                        <Text style={styles.betaText}>BETA 1.0</Text>
                    </View>
                </View>
                <View style={[styles.gridItems, { justifyContent: 'center', height: '20%' }]}>
                    <Text style={styles.manualText}>MANUAL DO ESTUDANTE</Text>
                    <Text style={styles.manualBody}>
                        Criado por estudantes do instituto para trazer
                        praticidade na vida do estudante que está
                        ingressando na instituição.
                    </Text>
                </View>
                <View style={[styles.gridItems, { height: '20%', justifyContent:'flex-start' }]}>
                    <Text style={styles.manualText}>DESENVOLVEDORES</Text>
                    <Text>Luis Santos - luis@roxytech.com.br</Text>
                    <Text>Will Silva - willdeveloper@roxytech.com.br</Text>
                </View>
            </View>

            <TouchableWithoutFeedback onPress={HandleBack}>
                <View style={styles.closeView}>
                    <Image style={styles.closeImage} source={Close} />
                </View>
            </TouchableWithoutFeedback>

            <View style={styles.tab}>
                <TouchableWithoutFeedback>
                    <Image style={styles.iconBar} source={CallIcon} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={HandleBack}>
                    <Image style={styles.iconBar} source={HomeIcon} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => { }}>
                    <Image style={styles.iconBar} source={SobreIcon} />
                </TouchableWithoutFeedback>
            </View>

        </>
    );
}
export default Info;