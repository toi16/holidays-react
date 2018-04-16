import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { TabNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Icon from 'react-native-vector-icons/FontAwesome';
import reducers from './reducers';

import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import HolidayScreen from './screens/HolidayScreen';
import AddScreen from './screens/AddScreen';
import SettingsScreen from './screens/SettingsScreen';
import EditScreen from './screens/EditScreen';


class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDxKpOMDZPumQWnNSUA6_WRaKcQHHnhF4g',
            authDomain: 'manager-7ff67.firebaseapp.com',
            databaseURL: 'https://manager-7ff67.firebaseio.com',
            projectId: 'manager-7ff67',
            storageBucket: 'manager-7ff67.appspot.com',
            messagingSenderId: '779606209015'
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        const MainNavigator = TabNavigator({
            welcome: { screen: WelcomeScreen },
            auth: { screen: AuthScreen },
            main: {
                screen: TabNavigator({
                    holidays: {
                        screen: HolidayScreen,
                        navigationOptions: {
                            tabBarLabel: 'HOLIDAY',
                            tabBarIcon: () => <Icon name='user-o' size={35} style={{ color: 'gray' }} />
                        }
                    },
                    add: { screen: AddScreen },
                    edit: { screen: EditScreen },
                    settings: { screen: SettingsScreen }
                }, {
                        tabBarPosition: 'bottom',
                        swipeEnabled: false,
                        tabBarOptions: {
                            labelStyle: { fontSize: 12 }
                        }
                    })
            }

        }, {
                tabBarPosition: 'bottom',
                swipeEnabled: false,
                navigationOptions: {
                    tabBarVisible: false
                }

            });

        return (
            <Provider store={store}>
                <MainNavigator />
            </Provider>
        );
    }
}

export default App; 
