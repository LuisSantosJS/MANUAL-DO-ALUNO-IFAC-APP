import React, { useState } from 'react';
import {
    View,
    TouchableWithoutFeedback,
    Image,
    Text,
    TouchableOpacity,
    Dimensions,
    StatusBar

} from 'react-native';
import styles from './styles';
import Icon from '../../assets/icons/icons';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useNavigation } from '@react-navigation/native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const HomeIcon = require('../../assets/home.png');
const CallIcon = require('../../assets/cell.png');
const SobreIcon = require('../../assets/sobre.png');
const Pero = require('../../assets/pero.png');
const Tips: React.FC = () => {
    const navigation = useNavigation();
    const HandleBack = () => {
        navigation.goBack()
    }
    const HandleInfo = () => {
        navigation.navigate('Info')
    }
    const [isNext, setIsNext] = useState<boolean>(false);

    return (
        <>
            <View style={{ width: '100%', backgroundColor: 'white', height: getStatusBarHeight(true) }} />
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <View style={styles.container}>
                <Image style={styles.pero} source={Pero} />
                <View style={styles.viewInfo}>
                    {isNext ?
                        <Text style={styles.headetTitle}>Como me cadastrar
                        no SIGAA?</Text> :
                        <Text style={styles.headetTitle}>INFORMAÇÕES</Text>
                    }
                    {isNext ?
                        <Text style={styles.bodyText}>
                            Você certamente já ouviu falar nessa SIGLA não é
                            mesmo? lá é onde você vai controlar suas notas,
                            enviar trabalhos e etc...
                            para se cadastrar basta <Text style={{ color: '#6CECA8' }}>CLICAR AQUI</Text>.
                                 </Text> :
                        <Text style={styles.bodyText}>
                            Todos nós sabemos como é difícil está por dentro
                            de tudo no instituto, pensando nisso separamos
                            algumas dicas para você estudante.
                 </Text>}
                    <TouchableOpacity onPress={() => setIsNext(!isNext)} activeOpacity={0.6} style={styles.buttonArrow}>
                        <Icon.MaterialIcons name='keyboard-arrow-right' size={width * 0.1} color={'white'} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.tab}>
                <TouchableWithoutFeedback>
                    <Image style={styles.iconBar} source={CallIcon} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback  onPress={HandleBack}>
                    <Image style={styles.iconBar} source={HomeIcon} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={HandleInfo}>
                    <Image style={styles.iconBar} source={SobreIcon} />
                </TouchableWithoutFeedback>
            </View>
        </>
    )
}
export default Tips;