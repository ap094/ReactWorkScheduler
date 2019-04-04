import React, { Fragment } from 'react';
import AddIcon from '@material-ui/icons/Add';
import {
  Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Fab
} from '@material-ui/core'

export default class EditEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      event: { ...this.props.event },
      formEvent:{
        title: this.props.event.title,
        start: this.props.event.start,
        end: this.props.event.end,
      }
    };
    
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.eventState()

  };

  handleCloseSuccess = () => {
    this.props.onEditFinished(this.state.formEvent)
    this.props.eventState()
    this.setState({
      formEvent:{
          title: '',
          start: '',
          end: ''
      }
    });
    this.handleClose();
  };

  handleChange = (name) => event => {
    this.setState({
      formEvent: {
        ...this.state.formEvent,
        [name]: event.target.value 
      }
    });
  };

  render() {
    const {formEvent:{title, start, end}} = this.state;
    return (
    <Fragment>
{/*       <Fab onClick={this.handleClickOpen}>
        <AddIcon/>
      </Fab>  */}
        <Dialog
            open={this.state.open}
            onClose={this.handleClose}
        >
            <DialogTitle id="form-dialog-title">
                Edit event
            </DialogTitle>
            <DialogContent>
                <form>
                  <TextField
                    label="Title"
                    value={title}
                    onChange={this.handleChange('title')}
                    margin="normal"
                  />
                  <br/>
                  <TextField
                    label="Start date"
                    value={start}
                    onChange={this.handleChange('start')}
                    margin="normal"
                  />
                  <br/>
                  <TextField
                    label="End date"
                    value={end}
                    onChange={this.handleChange('end')}
                    margin="normal"
                  />
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleClose} color="secondary">
                Cancel
                </Button>
                <Button onClick={this.handleCloseSuccess} color="primary">
                Create
                </Button>
            </DialogActions>
        </Dialog>
    </Fragment>

    );
  }
}