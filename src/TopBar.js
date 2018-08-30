import React from 'react';
import { PropTypes } from 'prop-types'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class TopBar extends React.Component {
    render() {
        return (
            <AppBar position="fixed" color="default" style={{background: '#2296f3', color: 'white'}}>
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        {this.props.value}
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

TopBar.propTypes = {
    value: PropTypes.string.isRequired
};
