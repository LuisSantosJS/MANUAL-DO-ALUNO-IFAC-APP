import React from 'react';
import { View } from 'react-native';
import RouterMain from './routes/routerMain';
import { getStatusBarHeight } from 'react-native-status-bar-height';
const App: React.FC = () => {
    return (
        <>
            <View style={{ width: '100%', backgroundColor:'#6CECA8', height: getStatusBarHeight(true) }} />
            <RouterMain />
        </>
    );
}
export default App;