import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-elements';
import { holidaySave, holidayDelete, holidayUpdate } from '../actions';
import HolidayForm from '../components/HolidayForm';
import { Confirm } from '../components/common';

class EditScreen extends Component {
    state = { showModal: false };

    componentWillMount() {
        _.each(this.props.holiday, (value, prop) => {
            this.props.holidayUpdate({ prop, value });
        });
    }

    onButtonPress = () => {
        const { start, end, description } = this.props;
        this.props.holidaySave({ start, end, description, uid: this.props.holiday.uid });
    }

    onAccept() {
        const { uid } = this.props.holiday;

        this.props.holidayDelete({ uid });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <Card>
                <HolidayForm />
                <Button
                    title='Save Changes'
                    onPress={this.onButtonPress}
                />

                <Button
                    title='Delete Holiday'
                    onPress={() => this.setState({ showModal: !this.state.showModal })}
                />

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this ?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { start, end, description } = state.HolidayForm;

    return { start, end, description };
};

export default connect(
    mapStateToProps,
    {
        holidayUpdate,
        holidaySave,
        holidayDelete
    })(EditScreen);
