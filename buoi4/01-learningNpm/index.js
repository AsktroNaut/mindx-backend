const jsonExport = require('jsonexport');

const contacts = [
    {
        name: 'Vo tuan',
        age: 24,
        course: 'fullstack'
    },
    {
        name: 'Vo Dai',
        age: 36

    }
]



jsonExport(contacts, function(err, csv){
    if (err) return console.error(err);
    console.log(csv);
});