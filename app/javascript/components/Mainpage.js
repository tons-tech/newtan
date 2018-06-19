import React from "react";
import PropTypes from "prop-types";
import AppBar from '@material-ui/core/AppBar';

class Mainpage extends React.Component {
    render () {
        return (
            <React.Fragment>
                <AppBar
                    title={this.props.name}
                >
                    heyhey
                </AppBar>
            </React.Fragment>
        );
    }
}

Mainpage.propTypes = {
    name: PropTypes.string
};
export default Mainpage
