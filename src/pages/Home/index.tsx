import React from 'react';
import {
    View,
    StatusBar,
    Image, Text
} from 'react-native';
import styles from './styles';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, TouchableWithoutFeedback, RectButton } from 'react-native-gesture-handler';
const Avatar = require('../../assets/avatar.png');
const Calendario = require('../../assets/calendario.png');
const Alarm = require('../../assets/alarm.png');
const Dicas = require('../../assets/dicas.png');
const Virus = require('../../assets/virus.png');
const HomeIcon = require('../../assets/home.png');
const CallIcon = require('../../assets/cell.png');
const SobreIcon = require('../../assets/sobre.png');
const Share = require('../../assets/share.png');
const Home: React.FC = () => {
    const navigation = useNavigation();
    const handleInfo = () =>{
        navigation.navigate('Info')
    }
    const handleTips = () =>{
        navigation.navigate('Tips')
    }
    return (
        <>
            <View style={{ width: '100%', backgroundColor: '#6CECA8', height: getStatusBarHeight(true) }} />
            <StatusBar backgroundColor={'#6CECA8'} barStyle={'dark-content'} />
            <View style={styles.container}>
                <View style={styles.containerHeaderView}>
                    <Text style={styles.textHeader}>
                        MANUAL DO ALUNO
                </Text>
                    <Text style={styles.textHeaderSub}>
                        INSTITUTO FEDERAL - AC
                </Text>
                </View>
                <View style={styles.viewer}>
                    <View style={styles.containerAvatar}>
                        <Image source={Avatar} resizeMode={'contain'} />
                    </View>
                    <View style={styles.containerTextInfoUser}>
                        <Text style={styles.textNameUser}>Luis Santos</Text>
                        <Text style={styles.textCourseUser}>Redes de Computadores</Text>
                    </View>
                    <View style={styles.containerMenu}>
                        <View style={styles.gridItemH}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.itemButtom}>
                                <Image style={styles.itemImageItem} resizeMode={'contain'} source={Calendario} />
                                <Text style={styles.textItem}>Agenda do estudante</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} style={styles.itemButtom}>
                                <Image style={styles.itemImageItem} resizeMode={'contain'} source={Alarm} />
                                <Text style={styles.textItem}>Consultar horário</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.gridItemH}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.itemButtom}>
                                <Image style={styles.itemImageItem} resizeMode={'contain'} source={Virus} />
                                <Text style={styles.textItem}>Regulamentos</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleTips} activeOpacity={0.8} style={styles.itemButtom}>
                                <Image style={styles.itemImageItem} resizeMode={'contain'} source={Dicas} />
                                <Text style={styles.textItem}>Dicas</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.tab}>
                <Image style={styles.iconBar} source={CallIcon} />
                <Image style={styles.iconBar} source={HomeIcon} />
                <TouchableWithoutFeedback onPress={handleInfo}>
                    <Image style={styles.iconBar} source={SobreIcon} />
                </TouchableWithoutFeedback>
            </View>
            <RectButton style={styles.compratilhar}>
            <Image style={styles.iconBar} source={Share} />
            </RectButton>
        </>
    );
}

export default Home;