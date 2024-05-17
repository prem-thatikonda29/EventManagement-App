import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';


import HomePage from './screens/homepage';
import EventPage from './screens/events';
import EsportsPage from './screens/sports';
import MeetupPage from './screens/meetups';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarShowLabel : false,
                tabBarActiveTintColor : '#FFFFFF',
                tabBarInactiveTintColor : '#CDCDCD',
                tabBarStyle : {backgroundColor : '#A975FF'}
            }}>
                <Tab.Screen name="Home" component={HomePage} options={{
                    tabBarIcon : ({ color }) => <Ionicons name="home" size={35} color={ color } style={{marginTop : 12}}/>, headerShown : false
                }}/>
                <Tab.Screen name="Events" component={EventPage} options={{
                    tabBarIcon : ({ color }) => <Ionicons name="code" size={35}
                    color={ color } style={{marginTop : 12}}/>, headerShown : false
                }}/>
                <Tab.Screen name="Music" component={EsportsPage} options={{
                    tabBarIcon : ({ color }) => <Ionicons name="football" size={35}
                    color={ color } style={{marginTop : 12}}/>, headerShown : false
                }}/>
                <Tab.Screen name="Community" component={MeetupPage} options={{
                    tabBarIcon : ({ color }) => <Ionicons name="laptop-sharp" size={35}
                    color={ color } style={{marginTop : 12}}/>, headerShown : false
                }}/>

            </Tab.Navigator>

        </NavigationContainer>
    // <HomePage/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
