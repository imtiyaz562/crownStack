import React,{useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack'
import { View, Text,Image,ScrollView,SafeAreaView,FlatList,TouchableOpacity} from 'react-native'
import { StatusBar } from 'react-native'
import {SplashScreenFirst}  from '../SplashScreen/SplashScreen'
import Home from '../Home/Home'
import Details from '../Details/Details'
const RootStack = createStackNavigator()
const RootStackScreen = (props) => {
	useEffect(()=>{
		StatusBar.setBackgroundColor('#015f5e', true);
    	StatusBar.setBarStyle('light-content', true);
	},[])
    return(
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, headerShown: true,headerStyle: {
				backgroundColor: '#014c4a',color:'#fff'}, headerTitleStyle: {color:'#fff',alignSelf: 'center'}, 
            }} FlashMessage position="top">
                <RootStack.Screen name="plashSreen" component={SplashScreenFirst} options={{headerShown: false}}/>
                <RootStack.Screen name="Home" component={Home}  options={{title : 'Songs', headerLeft : () => {} }}/>
                <RootStack.Screen name="Details" component={Details}  options={{title : 'Sogn Details',headerLeft : () => {}}}/>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}
export default RootStackScreen