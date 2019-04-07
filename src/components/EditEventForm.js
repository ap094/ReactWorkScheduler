import React, { Fragment } from 'react';
import {
  Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField
} from '@material-ui/core'

export default class EditEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      event: { ...this.props.event },
      formEvent:{
        id: '',
        title: '',
        start: '',
        end: '',
        resourceId: ''
      }
    };
    
  }

  componentDidMount(){ 
    this.setState({
      formEvent:{
        id: this.state.event.id,
        title: this.state.event.title,
        start: this.state.event.start,
        end: this.state.event.end,
        resourceId:this.state.event.resourceId,
      }
    });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.resetEventState()

  };

  handleSubmit = () => {
    const data = this.state.formEvent
    this.props.onCreate(data)
    this.setState({
      formEvent:{
        id: '',
        title: '',
        start: '',
        end: '',
        resourceId: ''
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
                <Button onClick={this.handleSubmit} color="primary">
                Update
                </Button>
            </DialogActions>
        </Dialog>
    </Fragment>

    );
  }
}