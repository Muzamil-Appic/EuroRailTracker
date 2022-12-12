import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../pages/splash/splash'
import Signin from '../pages/signin/signin';
import Home from '../pages/home/home';
import Dummy from '../pages/dummy/dummy';
import LiveTracking from '../pages/livetracking/livetracking'
import AllupTrains from '../pages/alluptrains/alluptrains'
const Stack = createNativeStackNavigator();
const RootNavigations = () => {
    return (
        <View style={styles.container}>
            <NavigationContainer >
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}
                    initialRouteName="Splash"
                >
                    <Stack.Screen name="Splash" component={Splash} />
                    <Stack.Screen name='Signin' component={Signin} />
                    <Stack.Screen name='Home' component={Home} />
                    <Stack.Screen name='Dummy' component={Dummy} />
                    <Stack.Screen name='LiveTracking' component={LiveTracking} />
                    <Stack.Screen name='AllupTrains' component={AllupTrains}/>
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}

export default RootNavigations

const styles = StyleSheet.create({
    container: { flex: 1 }


})