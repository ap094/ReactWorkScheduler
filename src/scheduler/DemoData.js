const DemoData = {
    resources: [
        {
            id: 'r1',
            name: 'Ante Antic',
            weeklyWorkingHours: 40
        },
        {
            id: 'r2',
            name: 'Mate Matic',
            weeklyWorkingHours: 30
        },
        {
            id: 'r3',
            name: 'Sime Simic',
            weeklyWorkingHours: 40
        },
        {
            id: 'r4',
            name: 'Jure Juric',
            weeklyWorkingHours: 30
        },
        {
            id: 'r5',
            name: 'Ivo Ivic',
            weeklyWorkingHours: 30
        },
        {
            id: 'r6',
            name: 'Luka Lukic',
            weeklyWorkingHours: 40
        },
        {
            id: 'r7',
            name: 'Kreso Kresic',
            weeklyWorkingHours: 40
        }
    ],
    events: [
         {
            id: 1,
            start: new Date('2019-04-11 09:30:00'),
            end: new Date('2019-04-11 13:30:00'),
            resourceId: 'r1',
            title: '09:30-13:30',
            bgColor: 'red'

        },
        {
            id: 2,
            start: new Date('2019-04-08 08:30:00'),
            end: new Date('2019-04-08 23:30:00'),
            resourceId: 'r1',
            title: '08:30-23:30',
            bgColor: 'red'
        },
        {
            id: 3,
            start: new Date('2019-04-09 12:30:00'),
            end: new Date('2019-04-09 23:30:00'),
            resourceId: 'r2',
            title: '12:30-23:30',
            bgColor: '#7c586d'
        },
        {
            id: 4,
            start: new Date('2019-04-10 14:30:00'),
            end: new Date('2019-04-10 23:30:00'),
            resourceId: 'r2',
            title: '14:30-23:30',
            bgColor: '#7c586d'
        },
        {
            id: 5,
            start: new Date('2019-04-08 15:30:00'),
            end: new Date('2019-04-08 23:30:00'),
            resourceId: 'r3',
            title: '15:30-23:30',
            bgColor: 'orange'
        },
        {
            id: 6,
            start: new Date('2019-04-12 15:35:00'),
            end: new Date('2019-04-12 23:30:00'),
            resourceId: 'r3',
            title: '15:35-23:30',
            bgColor: 'orange'
        },
        {
            id: 7,
            start: new Date('2019-04-09 15:40:00'),
            end: new Date('2019-04-09 23:30:00'),
            resourceId: 'r4',
            title: '15:40-23:30',
            bgColor: '#FA9E95'
        },
        {
            id: 8,
            start: new Date('2019-04-11 15:50:00'),
            end: new Date('2019-04-11 23:30:00'),
            resourceId: 'r4',
            title: '15:50-23:30',
            bgColor: '#FA9E95'
        },
        {
            id: 9,
            start: new Date('2019-04-09 16:30:00'),
            end: new Date('2019-04-09 23:30:00'),
            resourceId: 'r5',
            title: '16:30-23:30',
            bgColor: 'purple'
        },
        {
            id: 10,
            start: new Date('2019-04-11 17:30:00'),
            end: new Date('2019-04-11 23:30:00'),
            resourceId: 'r5',
            title: '17:30-23:30',
            rrule: 'FREQ=WEEKLY;DTSTART=20190411T013000Z;BYDAY=TU,FR',
            bgColor: 'purple'
        },
        {
            id: 11,
            start: new Date('2019-04-08 18:30:00'),
            end: new Date('2019-04-08 23:30:00'),
            resourceId: 'r6',
            title: '18:30-23:30',
            bgColor: 'blue'
        },
        {
            id: 12,
            start: new Date('2019-04-10 18:30:00'),
            end: new Date('2019-04-10 23:30:00'),
            resourceId: 'r6',
            title: '18:30-23:30',
            bgColor: 'blue'
        },
        {
            id: 13,
            start: new Date('2019-04-10 18:30:00'),
            end: new Date('2019-04-10 23:30:00'),
            resourceId: 'r7',
            title: '18:30-23:30',
            bgColor: '#746048'
        },
        {
            id: 14,
            start: new Date('2019-04-08 18:30:00'),
            end: new Date('2019-04-08 23:30:00'),
            resourceId: 'r7',
            title: '18:30-23:30',
            bgColor: '#746048'
        },
        {
            id: 15,
            start: new Date('2019-04-09 08:30:00'),
            end: new Date('2019-04-09 23:30:00'),
            resourceId: 'r7',
            title: '18:30-23:30',
            bgColor: '#746048'
        },
        {
            id: 16,
            start: new Date('2019-04-11 08:30:00'),
            end: new Date('2019-04-11 23:30:00'),
            resourceId: 'r7',
            title: '18:30-23:30',
            bgColor: '#746048'
        },
        {
            id: 17,
            start: new Date('2019-04-12 08:30:00'),
            end: new Date('2019-04-12 23:30:00'),
            resourceId: 'r7',
            title: '18:30-23:30',
            bgColor: '#746048'
        } 
    ],
    colors: [
        { value: "red", label: "Crvena", color: "#FF5630" },
        { value: "purple", label: "Ljubičasta", color: "#5243AA" },
        { value: "orange", label: "Narančasta", color: "#FF8B00" },
        { value: "blue", label: "Plava", color: "#0052CC" },
        { value: "silver", label: "Siva", color: "#666666" },
        { value: "green", label: "Zelena", color: "#36B37E" },
    ]
}

export default DemoData
