import React, {Component} from 'react'
import Scheduler, {AddMorePopover, SchedulerData, ViewTypes, DATE_FORMAT, DemoData} from '../scheduler/index'
import withDragDropContext from './withDnDContext'
import moment from 'moment'
import 'moment/locale/hr'
import '../scheduler/css/style.css'
import 'antd/lib/style/index.css'
import '../css/basic.css'
import EditEventForm from './EditEventForm'
import demoData from '../scheduler/DemoData'
import AddEventForm from './AddEventForm'
import AddIcon from '@material-ui/icons/Add';
import {Fab} from '@material-ui/core'


class Basic extends Component{
    constructor(props){
        super(props);

        let today = moment().format(DATE_FORMAT);
        let schedulerData = new SchedulerData(today, ViewTypes.Week, false, false);

        schedulerData.localeMoment.locale('hr');
        schedulerData.setResources(DemoData.resources);
        schedulerData.setEvents(DemoData.events);
        this.state = {
            viewModel: schedulerData,
            headerItem: undefined,
            left: 0,
            top: 0,
            height: 0,
            eventToEdit: null,
            events: demoData.events,
            resources: demoData.resources,
            colors: demoData.colors,
            visible: false
        }
    }

    nonAgendaCellHeaderTemplateResolver = (schedulerData, item, formattedDateItems, style) => {
        let datetime = schedulerData.localeMoment(item.time);
        let isCurrentDate = false;
  
        if (schedulerData.viewType === ViewTypes.Day) {
            isCurrentDate = datetime.isSame(new Date(), 'hour');
        }
        else {
            isCurrentDate = datetime.isSame(new Date(), 'day');
        }
  
        if (isCurrentDate) {
            style.backgroundColor = '#118dea';
            style.color = 'white';
        }
  
        return (
            <th key={item.time} className={`header3-text`} style={style}>
                {
                    formattedDateItems.map((formattedItem, index) => (
                        <div key={index}
                             dangerouslySetInnerHTML={{__html: formattedItem.replace(/[0-9]/g, '<b>$&</b>')}}/>
                    ))
                }
            </th>
        );
    }

    handleEventToEditState = () => {
        this.setState({
            eventToEdit: null
        })
    }
    
    handleEventUpdateState = (data) => {
       let events = this.state.viewModel.events;
       events = events.map(event => {
           if(event.id === data.id){
               event.id = data.id;
               event.title = data.title;
               event.start = data.start;
               event.end = data.end;
               event.resourceId = data.resourceId;
           }
        });
    }

    /*****************ADD EVENT*******************/
    showModal = () => {
        this.setState({ visible: true });
    }
    handleCancel = () => {
        this.setState({ visible: false });
    }
    handleCreate = () => {
        const form = this.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            this.addEvent(values.title, values.start, values.end, values.resourceId, values.bgColor)
            form.resetFields();
            this.setState({ visible: false });
        });
        
    }
    saveFormRef = (form) => {
        this.form = form;
    }
    /*******************************************/
    render(){
        const {viewModel, eventToEdit} = this.state;

        let popover = <div />;
        if (this.state.headerItem !== undefined) {
            popover =
                <AddMorePopover 
                    headerItem={this.state.headerItem} 
                    eventItemClick={this.eventClicked}
                    schedulerData={viewModel}
                    closeAction={this.onSetAddMoreState} 
                    left={this.state.left} 
                    top={this.state.top}
                    height={this.state.height} 
                    moveEvent={this.moveEvent}
                    viewEventClick={this.edit}
                    viewEventText="Edit"
                    viewEvent2Click={this.delete}
                    viewEvent2Text="Delete"
                />;
        }
        
        let editEvent = <div/>;
        if(eventToEdit)
        {
            editEvent = 
            <EditEventForm 
                event={eventToEdit}
                onCreate={this.handleEventUpdateState}
                resetEventState={this.handleEventToEditState}
            />;
        }

        let leftCustomHeader = (
            <div>
                <Fab onClick={this.showModal} color="primary">
                    <AddIcon/>
                </Fab>
                <br/>
                <AddEventForm
                    ref={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    addEvent={this.addEvent}
                    employees={this.state.resources}
                    colors={this.state.colors}
                />
            </div>
        );

        return (

            <div>
                <div>
                    <Scheduler 
                        schedulerData={viewModel}
                        prevClick={this.prevClick}
                        nextClick={this.nextClick}
                        onSelectDate={this.onSelectDate}
                        onViewChange={this.onViewChange}
                        eventItemClick={this.eventClicked}
                        viewEventClick={this.edit}
                        viewEventText="Edit"
                        viewEvent2Click={this.delete}
                        viewEvent2Text="Delete"
                        updateEventStart={this.updateEventStart}
                        updateEventEnd={this.updateEventEnd}
                        moveEvent={this.moveEvent}
                        newEvent={this.newEvent}
                        onSetAddMoreState={this.onSetAddMoreState}
                        nonAgendaCellHeaderTemplateResolver = {this.nonAgendaCellHeaderTemplateResolver}
                        leftCustomHeader={leftCustomHeader}
                    />
                    {popover}
                </div>
                {editEvent}
            </div>
            
        )
    }

    addEvent = (titleName, start, end, slotId, color) =>{
        let schedulerData = this.state.viewModel;
        let newId = 0;
        schedulerData.events.forEach((item) => {
            if(item.id >= newId)
            newId = item.id + 1;
        });

        let newEvent = {
            id: newId,
            title: titleName,
            start: start,
            end: end,
            resourceId: slotId,
            bgColor: color
        }   
        schedulerData.addEvent(newEvent);
        this.setState({
            viewModel: schedulerData
        })
    }

    addResource = (resourceName) => {
        let schedulerData = this.state.viewModel;
        let newFreshId = schedulerData.resources.length + 1;
        let newFreshName = resourceName;
        schedulerData.addResource({id: newFreshId, name: newFreshName});
        this.setState({
            viewModel: schedulerData
        })
    }

    prevClick = (schedulerData)=> {
        schedulerData.prev();
        schedulerData.setEvents(DemoData.events);
        this.setState({
            viewModel: schedulerData
        })
    }

    nextClick = (schedulerData)=> {
        schedulerData.next();
        schedulerData.setEvents(DemoData.events);
        this.setState({
            viewModel: schedulerData
        })
    }

    onViewChange = (schedulerData, view) => {
        schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
        schedulerData.setEvents(DemoData.events);
        this.setState({
            viewModel: schedulerData
        })
    }

    onSelectDate = (schedulerData, date) => {
        schedulerData.setDate(date);
        schedulerData.setEvents(DemoData.events);
        this.setState({
            viewModel: schedulerData
        })
    }

    newEvent = (schedulerData, slotId, slotName, start, end) => {
        let newFreshId = 0;
        schedulerData.events.forEach((item) => {
            if(item.id >= newFreshId)
                newFreshId = item.id + 1;
        });

        let newEvent = {
            id: newFreshId,
            title: 'New event',
            start: start,
            end: end,
            resourceId: slotId,
            bgColor: 'green'
        }   

        schedulerData.addEvent(newEvent);
        this.setState({
            viewModel: schedulerData
        })
    }

    updateEventStart = (schedulerData, event, newStart) => {
        schedulerData.updateEventStart(event, newStart);
        this.setState({
            viewModel: schedulerData
        })
    }

    updateEventEnd = (schedulerData, event, newEnd) => {
        schedulerData.updateEventEnd(event, newEnd);
        this.setState({
            viewModel: schedulerData
        })
    }

    moveEvent = (schedulerData, event, slotId, slotName, start, end) => {
        schedulerData.moveEvent(event, slotId, slotName, start, end);
        this.setState({
            viewModel: schedulerData
        })
    }

    edit = (schedulerData, event) => {
        this.setState({
            viewModel: schedulerData,
            eventToEdit: event
        });
    };

    delete = (schedulerData, event) => {
        if(window.confirm(`Do you want to remove this event?`)){
            schedulerData.removeEventById(event.id);
        }
        this.setState({
            viewModel: schedulerData
        })
    };

    onSetAddMoreState = (newState) => {
        if (newState === undefined) {
            this.setState({
                headerItem: undefined,
                left: 0,
                top: 0,
                height: 0
            });
        }
        else {
            this.setState({
                ...newState,
            });
        }
    }
}

export default withDragDropContext(Basic)