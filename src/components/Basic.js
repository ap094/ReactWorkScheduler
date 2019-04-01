import React, {Component} from 'react'
import moment from 'moment'
import 'moment/locale/hr'
import Scheduler, {AddMorePopover, SchedulerData, ViewTypes, DATE_FORMAT, DemoData} from 'react-big-scheduler'
import withDragDropContext from './withDnDContext'
import 'react-big-scheduler/lib/css/style.css'
import '../css/basic.css'
import 'antd/lib/style/index.css'

class Basic extends Component{
    constructor(props){
        super(props);

        let today = moment().format(DATE_FORMAT);
        let schedulerData = new SchedulerData(today, ViewTypes.Week, false, false, {
            dayMaxEvents: 3,
            weekMaxEvents: 3,
            monthMaxEvents: 3,
            besidesWidth: 40,
            tableHeaderHeight: 50,
            dayCellWidth: 45,
            eventItemHeight: 40,
            eventItemLineHeight: 42,
            dayStartFrom: 5,
            resourceName: 'Employees',            
            nonAgendaDayCellHeaderFormat: 'HH:mm',
            views: [
                {viewName: 'Dan', viewType: ViewTypes.Day, showAgenda: false, isEventPerspective: false},
                {viewName: 'Tjedan', viewType: ViewTypes.Week, showAgenda: false, isEventPerspective: false},
                {viewName: 'Mjesec', viewType: ViewTypes.Month, showAgenda: false, isEventPerspective: false}
            ],
        });

        schedulerData.localeMoment.locale('hr');
        schedulerData.setResources(DemoData.resources);
        schedulerData.setEvents(DemoData.events);
        this.state = {
            viewModel: schedulerData,
            headerItem: undefined,
            left: 0,
            top: 0,
            height: 0,
            title: "New event"
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

  /*onHandleChange(event) {
        this.setState({
            title: event.target.value
        });
    }
    onChangeLink() {
        this.setState ({
            title: this.state.title
        });
    } */

    render(){
        const {viewModel} = this.state;

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
                    />
                    {popover}
                </div>
            {/*<div className="changeTitle">
                    <input 
                        value={this.state.title} 
                        onChange={(event) => this.onHandleChange(event)}>
                    </input>
                    <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary btn-sm">Change title</button>
                </div> */}
            </div>
        )
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
            title: this.state.title,
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

        alert("You just clicked on edit button!");
  
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