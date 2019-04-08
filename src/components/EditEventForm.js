import React, { Fragment } from 'react';
import {
 Dialog, DialogActions, DialogContent, DialogTitle, TextField
} from '@material-ui/core'

export default class EditEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      event: { ...this.props.event },
      updatedEvent:{
        id: '',
        title: '',
        start: '',
        end: '',
        resourceId: ''
      },
    };
  }

  componentDidMount(){ 
    this.setState({
      updatedEvent:{
        id: this.state.event.id,
        title: this.state.event.title,
        start: this.state.event.start,
        end: this.state.event.end,
        resourceId: this.state.event.resourceId,
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
    const newEvent = this.state.updatedEvent
    const {schedulerData} = this.props
    let events = schedulerData.events;

    events = events.map(event => {
        if(event.id === newEvent.id){
            event.id = newEvent.id;
            event.title = newEvent.title;
            event.start = newEvent.start;
            event.end = newEvent.end;
            event.resourceId = newEvent.resourceId;
            schedulerData.moveEvent(event, event.resourceId, event.title, event.start, event.end)
        }
    });

    this.handleClose()
  };

  handleChange = (name) => event => {
    this.setState({
      updatedEvent: {
        ...this.state.updatedEvent,
        [name]: event.target.value 
      }
    });
  };

  render() {
    const {updatedEvent:{title, start, end}} = this.state;
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
                <button onClick={this.handleClose} className="btn btn-primary btn-sm">
                Cancel
                </button>
                <button onClick={this.handleSubmit} className="btn btn-success btn-sm">
                Update
                </button>
            </DialogActions>
        </Dialog>
    </Fragment>

    );
  }
}