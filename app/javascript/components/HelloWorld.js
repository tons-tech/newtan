import React from "react"
import PropTypes from "prop-types"
import Button from '@material-ui/core/Button';

class HelloWorld extends React.Component {
    render () {
        return (
            <React.Fragment>
                Greeting: {this.props.greeting}

                <Button variant="raised" color="primary">
                    Hello World
                </Button>
            </React.Fragment>
        );
    }
}

HelloWorld.propTypes = {
    greeting: PropTypes.string
};
export default HelloWorld
