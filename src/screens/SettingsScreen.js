import React, { Component } from 'react';
import { Text } from 'react-native';

class SettingsScreen extends Component {
    onSlidesComplete = () => {
        this.props.navigation.navigate('auth');
    }

    render() {
        return (
            <Text>Settings</Text>
        );
    }
}

export default SettingsScreen;
