import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-elements';
import { holidayUpdate, holidayCreate } from '../actions';
// import { Card, CardSection, Button } from '../components/common';
import HolidayForm from '../components/HolidayForm';

class AddScreen extends Component {
    onButtonPress = () => {
        const { start, end, description } = this.props;
        this.props.holidayCreate({ start, end, description });
    }

    render() {
        return (
            <Card>
                <Text>Create a Holiday</Text>
                <HolidayForm {...this.props} />
                
                    <Button
                        onPress={this.onButtonPress}
                        backgroundColor='#03A9F4'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 20 }}
                        title='CREATE'
                    />
                        
                </Card>
            
        );
    }
}

const mapStateToProps = (state) => {
    const { start, end, description } = state.holidayForm;

    return { start, end, description };
};

export default connect(mapStateToProps, { holidayUpdate, holidayCreate })(AddScreen);
