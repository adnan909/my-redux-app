import React from 'react'
import {
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator,
    createSwitchNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    TabBarBottom,
    TabBarTop
} from "react-navigation"
import { Ionicons } from '@expo/vector-icons'

import Posts from '../components/posts'
import Counter from '../components/counter'
import Login from '../components/auth/index'
import Register from '../components/auth/register'
import Home from '../components/home/home'
import AuthLoading from '../components/auth/authLoading'
import Maps from '../components/maps/maps'





const TopBarNavigator = createMaterialTopTabNavigator({
    Login,
    Register
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Login') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'Register') {
                    iconName = `ios-add-circle${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarComponent: TabBarTop,
        tabBarPosition: 'top',
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        animationEnabled: false,
        swipeEnabled: false,
    }
)

const BottomBarNavigator = createBottomTabNavigator({
    Login,
    Register
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Login') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'Register') {
                    iconName = `ios-add-circle${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        animationEnabled: false,
        swipeEnabled: false,
    }
)


const Drawer = createDrawerNavigator(
    {
        Home,
        Counter,
        Posts,
        BottomBarNavigator,
        TopBarNavigator,
        Maps
    },
    {
        initialRouteName: 'Home'
    })
const authenticationNavigator = createStackNavigator(
    {
        Login,
        Register
    })

const AppNavigator = createSwitchNavigator(
    {
        AuthLoading,
        Auth: authenticationNavigator,
        Drawer
    },
    {
        initialRouteName: 'AuthLoading'
    }
)
const AppContainer = createAppContainer(AppNavigator)
export default AppContainer