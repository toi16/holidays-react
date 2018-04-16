import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { holidaysFetch } from '../actions';
import ListItem from '../components/ListItem';

class HolidayScreen extends Component {
    componentWillMount() {
        this.props.holidaysFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ holidays }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(holidays);
    }

    renderRow(holiday) {
        return <ListItem holiday={holiday} />;
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    const holidays = _.map(state.holidays, (val, uid) => {
        return { ...val, uid };
    });

    return { holidays };
};

export default connect(mapStateToProps, { holidaysFetch })(HolidayScreen);
