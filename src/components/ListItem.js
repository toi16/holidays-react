import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Card } from 'react-native-elements';
// import { CardSection } from '../components/common';

class ListItem extends Component {
    onRowPress = () => {
        const { start, end, description } = this.props.holiday;

        this.props.navigation.navigate('edit', { start, end, description });
        //Actions.employeeEdit({ employee: this.props.employee });
    }

    render() {
        const { start, end, description } = this.props.holiday;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress}>
                <View>
                    <Card>
                        <Text style={styles.titleStyle}>
                            <Text style={styles.contentStyle}>Start Date: {start}</Text>
                            <Text style={styles.contentStyle}>End Date: {end}</Text>
                            <Text style={styles.contentStyle}>Description: {description}</Text>
                        </Text>
                    </Card>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    contentStyle: {
        alignContent: 'center'

    }
};

export default ListItem;
