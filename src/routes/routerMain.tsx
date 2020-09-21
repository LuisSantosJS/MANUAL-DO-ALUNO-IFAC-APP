import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Wellcome from '../pages/Wellcome';


const AppStack = createStackNavigator();
function RouterMain() {
    return (
        <NavigationContainer>
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
            </AppStack.Navigator>
        </NavigationContainer>

    );
}
export default RouterMain;