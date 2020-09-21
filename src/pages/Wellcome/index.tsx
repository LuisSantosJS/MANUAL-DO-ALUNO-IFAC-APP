import React, { useState } from 'react';
import {
    Image,
    View,
    Text,
    Dimensions,
    TextInput,
    TouchableOpacity,
    Platform
} from 'react-native';
import styles from './styles';
import Icon from '../../assets/icons/icons';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const IfacLogo = require('../../assets/ifac.png');
const Inicial = require('../../assets/inicial.png');
const Person = require('../../assets/person.png')
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Wellcome: React.FC = () => {
    const navigation = useNavigation();
    const [isNext, setIsNext] = useState<boolean>(false);
    return (
        <>
            <View style={{ width: '100%', backgroundColor: 'white', height: getStatusBarHeight(true) }} />
            <View style={styles.container}>
                <View style={[styles.gridCollumm, { height:  Platform.OS == 'ios' ?'20%' : '15%', top: Platform.OS == 'android' ? 12 : 0 }]}>
                    <Image style={styles.imageContainer} resizeMode={'contain'} source={IfacLogo} />
                    <View style={styles.betaView}>
                        <Text style={styles.betaText}>BETA 1.0</Text>
                    </View>
                </View>
                <View style={styles.gridCollumm}>
                    <Image style={styles.imageContainerInicial} resizeMode={'contain'} source={Inicial} />
                </View>
                <View style={[styles.gridCollumm, { height: '50%' }]}>
                    {isNext ?
                        <Text style={styles.textTitle}>Antes de começar</Text> :
                        <Text style={styles.textTitle}>Olá estudante</Text>}
                    {isNext ?
                        <Text style={styles.textBody}>Queremos te conhecer melhor, escolha os seguintes
                        dados para darmos continuidade ao aplicativo.</Text> :
                        <Text style={styles.textBody}>
                            Nosso manual do aluno foi desenvolvido
                            com intuito de trazer praticidade para o aluno
                            no âmbito educacional,
                            por favor esteja cliente de nossos
                    <Text style={[styles.textBody, { color: '#6CECA8' }]}> TERMOS DE USO</Text>
                        </Text>}
                    {isNext ? <React.Fragment>
                        <View style={styles.inputView2}>
                            <DropDownPicker
                                items={[
                                    { label: 'SELECIONE SEU CURSO', value: 'SELECIONE SEU CURSO', },
                                    { label: 'REDES DE COMPUATADORES', value: 'REDES DE COMPUTADORES' },
                                    { label: 'INFORMÁTICA', value: 'INFORMATICA' },
                                    { label: 'EDIFICAÇÕES', value: 'EDIFICACOES' },
                                ]}
                                defaultValue={'SELECIONE SEU CURSO'}
                                containerStyle={{ height: '100%', width: '100%' }}

                                itemStyle={{
                                    justifyContent: 'flex-start'
                                }}
                                dropDownStyle={{ backgroundColor: '#E5E5E5' }}
                                onChangeItem={item => console.log(item)
                                }
                            />
                        </View>
                        <View style={styles.inputView2}>
                            <DropDownPicker
                                items={[
                                    { label: 'PERIODO/ANO', value: 'PERIODO/ANO', },
                                    { label: '2017', value: '2017' },
                                    { label: '2018', value: '2018' },
                                    { label: '2019', value: '2019' },
                                    { label: '2020', value: '2020' },
                                ]}
                                defaultValue={'PERIODO/ANO'}
                                containerStyle={{ height: '100%', width: '100%' }}
                                itemStyle={{
                                    justifyContent: 'flex-start'
                                }}

                                dropDownStyle={{ backgroundColor: '#E5E5E5' }}
                                onChangeItem={item => console.log(item)
                                }
                            />
                        </View>
                    </React.Fragment> :
                        <View style={styles.inputView}>
                            <View style={styles.viewIcon}>
                                <Image style={styles.imageContainerInput} resizeMode={'contain'} source={Person} />
                            </View>
                            <TextInput
                                style={styles.input}
                                placeholder={'Digite seu nome'}
                            />
                        </View>}
                    <View style={[styles.viewBackView, isNext ? {} : { justifyContent: 'center' }]}>
                        <TouchableOpacity onPress={() => isNext ? navigation.navigate('Home') : setIsNext(true)} activeOpacity={0.6} style={styles.buttonArrow}>
                            <Icon.MaterialIcons name='keyboard-arrow-right' size={width * 0.1} color={'white'} />
                        </TouchableOpacity>
                        {isNext && <TouchableOpacity onPress={() => setIsNext(false)} activeOpacity={0.6} style={styles.buttonArrow}>
                            <Icon.MaterialIcons name='keyboard-arrow-left' size={width * 0.1} color={'white'} />
                        </TouchableOpacity>}
                    </View>

                </View>
            </View>

        </>
    );
}

export default Wellcome;