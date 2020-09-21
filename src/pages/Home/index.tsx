import React from 'react';
import { View ,StatusBar} from 'react-native';
import styles from './styles';
const Home: React.FC = () => {
    return (
        <>
        <StatusBar backgroundColor={'#6CECA8'} barStyle={'dark-content'}/>
        <View style={styles.container}>
            <View style={styles.viewer}>

            </View>

        </View>
        </>
    );
}

export default Home;