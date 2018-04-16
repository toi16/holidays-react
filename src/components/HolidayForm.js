import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Input } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { holidayUpdate } from '../actions';
 

class HolidayForm extends Component {
    
    render() {
        return (
            <View>
                <Text>Start Date</Text>
                <DatePicker
                    style={styles.datePickerStyle}
                    iconComponent={
                        <Icon
                            name='calendar'
                            size={24}
                            color='blue'
                        />
                    }
                    date={this.props.start}
                    mode="date"
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    minDate="01-04-2018"
                    maxDate="01-04-2030"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 5,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }

                    }}
                    onDateChange={value => this.props.holidayUpdate({ prop: 'start', value })}
                />

                <Text>Start End</Text>
                <DatePicker
                    style={styles.datePickerStyle}
                    iconComponent={
                        <Icon
                            name='calendar'
                            size={24}
                            color='blue'
                        />
                    }
                    date={this.props.end}
                    mode="date"
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    minDate="01-04-2018"
                    maxDate="01-04-2030"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 5,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }

                    }}
                    onDateChange={value => this.props.holidayUpdate({ prop: 'end', value })}
                />

                <Input
                    leftIcon={
                        <Icon
                            name='file-text'
                            size={24}
                            color='black'
                        />
                    }
                    label="Description"
                    value={this.props.description}
                    onChangeText={value => this.props.holidayUpdate({ prop: 'description', value })}
                />
            </View>
        );
    }
}

const styles = {
    datePickerStyle: {
        height: 50,
        width: 250,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 30
    }
};

const mapStateToProps = (state) => {
    const { start, end, description } = state.holidayForm;

    return { start, end, description };
};

export default connect(mapStateToProps, { holidayUpdate })(HolidayForm);
