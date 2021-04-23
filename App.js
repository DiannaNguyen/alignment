import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import Home from './src/screens/Home';
import Horoscope from './src/screens/Horoscope';
import Colors from './src/consts/colors';

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<StatusBar barStyle='dark-content' backgroundColor={Colors.white} />
			<Stack.Navigator>
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='Horoscope' component={Horoscope} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
