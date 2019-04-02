import ViewTypes from './ViewTypes'
import SummaryPos from './SummaryPos'

export default {
    schedulerWidth: '100%',
    besidesWidth: 40,
    schedulerMaxHeight: 0,
    tableHeaderHeight: 50,

    agendaResourceTableWidth: 160,
    agendaMaxEventWidth: 100,

    dayResourceTableWidth: 160,
    weekResourceTableWidth: '16%',
    monthResourceTableWidth: 160,
    quarterResourceTableWidth: 160,
    yearResourceTableWidth: 160,
    customResourceTableWidth: 160,

    dayCellWidth: 45,
    weekCellWidth: '12%',
    monthCellWidth: 80,
    quarterCellWidth: 80,
    yearCellWidth: 80,
    customCellWidth: 80,

    dayMaxEvents: 3,
    weekMaxEvents: 3,
    monthMaxEvents: 3,
    quarterMaxEvents: 99,
    yearMaxEvents: 99,
    customMaxEvents: 99,

    eventItemHeight: 40,
    eventItemLineHeight: 42,
    nonAgendaSlotMinHeight: 0,
    dayStartFrom: 5,
    dayStopTo: 23,
    defaultEventBgColor: '#80C5F6',
    selectedAreaColor: '#7EC2F3',
    nonWorkingTimeHeadColor: '#999999',
    nonWorkingTimeHeadBgColor: '#fff0f6',
    nonWorkingTimeBodyBgColor: '#fff0f6',
    summaryColor: '#666',
    summaryPos: SummaryPos.TopRight,

    startResizable: true,
    endResizable: true,
    movable: true,
    creatable: true,
    crossResourceMove: true,
    checkConflict: false,
    scrollToSpecialMomentEnabled: true,
    eventItemPopoverEnabled: true,
    calendarPopoverEnabled: true,
    recurringEventsEnabled: true,
    headerEnabled: true,
    displayWeekend: true,
    relativeMove: true,

    resourceName: 'Employees',
    taskName: 'Task Name',
    agendaViewHeader: 'Agenda',
    addMorePopoverHeaderFormat: 'D.MMM, YYYY dddd',
    eventItemPopoverDateFormat: 'D.MMM',
    nonAgendaDayCellHeaderFormat: 'HH:mm',
    nonAgendaOtherCellHeaderFormat: 'ddd D/M',

    minuteStep: 30,

    views: [
        {viewName: 'Dan', viewType: ViewTypes.Day, showAgenda: false, isEventPerspective: false},
        {viewName: 'Tjedan', viewType: ViewTypes.Week, showAgenda: false, isEventPerspective: false},
        {viewName: 'Mjesec', viewType: ViewTypes.Month, showAgenda: false, isEventPerspective: false}
    ],
}
