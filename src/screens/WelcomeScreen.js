import React, { Component } from 'react';
import Slides from '../components/Slides';

const SLIDE_DATA = [
    { text: 'Welcome to the Holidays App !!' },
    { text: 'Use this to keep a record of your Holiday Entitlement' },
    { text: 'Add a holiday and fly away !!' }
];

class WelcomeScreen extends Component {
    onSlidesComplete = () => {
        this.props.navigation.navigate('auth');
    }

    render() {
        return (
            <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
        );
    }
}

export default WelcomeScreen;
