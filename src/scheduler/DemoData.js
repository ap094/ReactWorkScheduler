const DemoData = {
    resources: [
        {
            id: 'r1',
            name: 'Ante Antic',
        },
        {
            id: 'r2',
            name: 'Mate Matic',
        },
        {
            id: 'r3',
            name: 'Sime Simic',
        },
        {
            id: 'r4',
            name: 'Jure Juric',
        },
        {
            id: 'r5',
            name: 'Ivo Ivic',
        },
        {
            id: 'r6',
            name: 'Luka Lukic',
        },
        {
            id: 'r7',
            name: 'Kreso Kresic',
        }
    ],
    events: [
        {
            id: 1,
            start: new Date('2019-04-09 09:30:00'),
            end: new Date('2019-04-09 13:30:00'),
            resourceId: 'r2',
            title: 'I am finished',

        },
        {
            id: 2,
            start: new Date('2019-04-18 12:30:00'),
            end: new Date('2019-04-26 23:30:00'),
            resourceId: 'r2',
            title: 'I am not resizable',
            resizable: false
        },
        {
            id: 3,
            start: new Date('2019-04-19 12:30:00'),
            end: new Date('2019-04-20 23:30:00'),
            resourceId: 'r3',
            title: 'I am not movable',
            movable: false
        },
        {
            id: 4,
            start: new Date('2019-04-19 14:30:00'),
            end: new Date('2019-04-20 23:30:00'),
            resourceId: 'r4',
            title: 'I am not start-resizable',
            startResizable: false,
        },
        {
            id: 5,
            start: new Date('2019-04-19 15:30:00'),
            end: new Date('2019-04-20 23:30:00'),
            resourceId: 'r5',
            title: 'I am not end-resizable',
            endResizable: false
        },
        {
            id: 6,
            start: new Date('2019-04-19 15:35:00'),
            end: new Date('2019-04-19 23:30:00'),
            resourceId: 'r6',
            title: 'I am normal'
        },
        {
            id: 7,
            start: new Date('2019-04-19 15:40:00'),
            end: new Date('2019-04-20 23:30:00'),
            resourceId: 'r7',
            title: 'I am exceptional',
            bgColor: '#FA9E95'
        },
        {
            id: 8,
            start: new Date('2019-04-19 15:50:00'),
            end: new Date('2019-04-19 23:30:00'),
            resourceId: 'r1',
            title: 'I am locked',
            movable: false,
            resizable: false,
            bgColor: 'red'
        },
        {
            id: 9,
            start: new Date('2019-04-19 16:30:00'),
            end: new Date('2019-04-27 23:30:00'),
            resourceId: 'r1',
            title: 'R1 has many tasks 1'
        },
        {
            id: 10,
            start: new Date('2019-04-19 17:30:00'),
            end: new Date('2019-04-19 23:30:00'),
            resourceId: 'r1',
            title: 'R1 has recurring tasks every week on Tuesday, Friday',
            rrule: 'FREQ=WEEKLY;DTSTART=20191219T013000Z;BYDAY=TU,FR',
            bgColor: '#f759ab'
        },
        {
            id: 11,
            start: new Date('2019-04-19 18:30:00'),
            end: new Date('2019-04-20 23:30:00'),
            resourceId: 'r1',
            title: 'R1 has many tasks 3'
        },
        {
            id: 12,
            start: new Date('2019-04-20 18:30:00'),
            end: new Date('2019-04-20 23:30:00'),
            resourceId: 'r1',
            title: 'R1 has many tasks 4'
        },
        {
            id: 13,
            start: new Date('2019-04-21 18:30:00'),
            end: new Date('2019-04-24 23:30:00'),
            resourceId: 'r1',
            title: 'R1 has many tasks 5'
        },
        {
            id: 14,
            start: new Date('2019-04-23 18:30:00'),
            end: new Date('2019-04-27 23:30:00'),
            resourceId: 'r1',
            title: 'R1 has many tasks 6'
        }
    ],
    colors: [
        { value: "default", label: "Default", color: "#80C5F6" },
        { value: "blue", label: "Blue", color: "#0052CC" },
        { value: "green", label: "Green", color: "#36B37E" },
        { value: "orange", label: "Orange", color: "#FF8B00" },
        { value: "purple", label: "Purple", color: "#5243AA" },
        { value: "red", label: "Red", color: "#FF5630" },
        { value: "silver", label: "Silver", color: "#666666" }
    ]
}

export default DemoData
