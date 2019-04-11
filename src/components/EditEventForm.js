import React from 'react';
import PropTypes from 'prop-types';
import {
 Dialog, DialogActions, DialogContent, DialogTitle, TextField
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import 'react-widgets/dist/css/react-widgets.css';
Moment.locale('hr')
momentLocalizer();

const styles = {
  dialog: {
    minHeight: '50vh',
    maxHeight: '60vh',
    width: "20%"
  },
};

class EditEventForm extends React.Component {
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
        resourceId: '',
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

    events.map(event => {
        if(event.id === newEvent.id){
            event.id = newEvent.id;
            event.title = newEvent.title;
            event.start = newEvent.start;
            event.end = newEvent.end;
            event.resourceId = newEvent.resourceId;
            schedulerData.moveEvent(event, event.resourceId, event.title, event.start, event.end)
        }
        return false
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
    const { classes } = this.props;

    return (
      <div>
        <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            classes={{ paper: classes.dialog }}
        >
            <DialogTitle>
                Uredi događaj
            </DialogTitle>
            <DialogContent>
                <form>
                  <TextField
                    label="Naziv događaja"
                    value={title}
                    onChange={this.handleChange('title')}
                    margin="normal"
                  />
                  <br/>
                  <span>Početni datum</span>
                  <DateTimePicker
                    value={start}
                    onChange={value => this.setState({ updatedEvent: { ...this.state.updatedEvent, start: value} })}
                    format='DD-MM-YYYY HH:mm'
                  />
                  <br/>
                  <span>Završni datum</span>
                  <DateTimePicker
                    value={end}
                    onChange={value => this.setState({ updatedEvent: { ...this.state.updatedEvent, end: value} })}
                    format='DD-MM-YYYY HH:mm'
                  />
                </form>
            </DialogContent>
            <DialogActions>
                <button onClick={this.handleClose} className="btn btn-primary btn-sm">
                Odustani
                </button>
                <button onClick={this.handleSubmit} className="btn btn-success btn-sm">
                Ažuriraj
                </button>
            </DialogActions>
        </Dialog>
      </div>
    );
  }
}

EditEventForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditEventForm);