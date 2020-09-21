import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import Home from '../pages/Home';
import Wellcome from '../pages/Wellcome';
import Info from '../pages/Info';
import Tips from '../pages/Tips';
const AppStack = createStackNavigator();
function RouterMain() {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <AppStack.Navigator>
                <AppStack.Screen
                    options={{
                        headerShown: false,
                    }}
                    component={Wellcome}
                    name='Wellcome'
                />
                <AppStack.Screen
                    options={{
                        headerShown: false,
                    }}
                    component={Home}
                    name='Home'
                />
                <AppStack.Screen
                    options={{
                        headerShown: false,
                    }}
                    component={Info}
                    name='Info'
                />
                <AppStack.Screen
                    options={{
                        headerShown: true,
                        title: 'Informações',
                        headerBackTitle: '',
                        headerBackTitleVisible: false
                    }}
                    component={Tips}
                    name='Tips'
                />
            </AppStack.Navigator>
        </NavigationContainer>

    );
}
export default RouterMain;