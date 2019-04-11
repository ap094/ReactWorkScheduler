import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

class DeleteDialog extends React.Component {
    constructor(props)
    {
        super(props)

        this.state = {
            open: true,
            event: {...this.props.event}
          };
        
    }

  handleClose = () => {
    this.setState({ open: false });
    this.props.resetEventState()
  };
      
  handleSubmit = () =>
  {
      const {schedulerData} = this.props
      const {event} = this.state

      schedulerData.removeEventById(event.id);
      this.props.resetEventState()
  }
  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
        >
          <DialogTitle>
            Jeste li sigurni da želite izbrisati ovaj događaj?
            <hr/>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <button onClick={this.handleClose} className="btn btn-primary">
              Ne
            </button>
            <button onClick={this.handleSubmit} className="btn btn-danger">
              Da
            </button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default DeleteDialog;
