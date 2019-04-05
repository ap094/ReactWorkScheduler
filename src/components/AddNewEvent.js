import React, { Fragment } from 'react';
import AddIcon from '@material-ui/icons/Add';
import {
  MenuItem,InputLabel, FormControl, Select, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Fab
} from '@material-ui/core'


export default class AddNewEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      newEvent:{
        title: '',
        resource: '',
        start: '',
        end: ''
      }
    };
    
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = () => {

    const {newEvent} = this.state;
    this.props.onCreate(newEvent)
    this.setState({
        open: false,
        newEvent:{
            title: '',
            resource: '',
            start: '',
            end: ''
        }
    });

  };

  handleChange = (name) => event => {
    this.setState({
      newEvent: {
        ...this.state.newEvent,
        [name]: event.target.value
      }
    });
  };

  render() {
    const {newEvent:{title, start, end, resource}} = this.state;
    const employees = this.props.resources;

    return (
    <Fragment>
      <Fab onClick={this.handleClickOpen} color="primary" className="addIcon">
        <AddIcon/>
      </Fab> 
        <Dialog
            open={this.state.open}
            onClose={this.handleClose}
        >
            <DialogTitle id="form-dialog-title">
                Add event
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
                  <FormControl className="selectReso">
                    <InputLabel htmlFor="employees">Employees</InputLabel>
                    <Select
                        value={resource}
                        onChange={this.handleChange('resource')}
                    >
                    {employees.map((employe) =>
                        <MenuItem value={employe} key={employe.id}>{employe.name}</MenuItem>
                    )}
                   </Select>
                  </FormControl>
                  <br/>
                  <TextField
                    id="datetime-local"
                    label="Start date"
                    type="datetime-local"
                    onChange={this.handleChange('start')}
                    value={start}
                    InputLabelProps={{
                    shrink: true,
                    }}
                 />
                 <br/>
                <TextField
                    id="datetime-local"
                    label="End date"
                    type="datetime-local"
                    onChange={this.handleChange('end')}
                    value={end}
                    InputLabelProps={{
                    shrink: true,
                    }}
                 />
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleClose} color="secondary">
                Cancel
                </Button>
                <Button onClick={this.handleSubmit} color="primary">
                Create
                </Button>
            </DialogActions>
        </Dialog>
    </Fragment>

    );
  }
}