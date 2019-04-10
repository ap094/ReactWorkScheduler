import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
 Dialog, DialogActions, DialogContent, DialogTitle, Avatar, Grid
} from '@material-ui/core'
import deepOrange from '@material-ui/core/colors/deepOrange'

const styles = {
    avatar: {
      color: '#fff',
      backgroundColor: deepOrange[500],
    }
};

class EmployeeDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  handleClose = () => {
    this.setState({ open: false });
    this.props.resetEventState()
  };


  render() {
    const { classes } = this.props;
    const {employee} = this.props
    let employeeInfo =  employee.slotName.split(' ')
    let firstName = employeeInfo[0]
    let lastName = employeeInfo[1]

    return (
      <Fragment>
        <Dialog
            open={this.state.open}
            onClose={this.handleClose}
        >
            <DialogTitle>
                Employee Information
                <hr/>
            </DialogTitle>
            <DialogContent>
                <Grid container justify="flex-start" alignItems="flex-start">
                    <Avatar className={classes.avatar}>{firstName.charAt(0)}{lastName.charAt(0)}</Avatar> 
                    <p className="userInfo">{firstName} {lastName}</p>
                </Grid>
            </DialogContent>
            <DialogActions>
                <button onClick={this.handleClose} className="btn btn-primary btn-sm">
                Close
                </button>
            </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

EmployeeDialog.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(EmployeeDialog);