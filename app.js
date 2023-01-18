// const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')


yargs.version('1.1.0')


// Add a Note
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title: {
            describe:'Note title',
            demandOptions: true,
            type:'string'
        },
        body: {
            describe:'Note body',
            demandOptions: true,
            type:'string'
        }
    },
    handler: (argv) => {
        notes.addNotes(argv.title,argv.body)
    }
})

//remove a note
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOptions: true,
            type: 'string'
        }
    },
    handler:(argv)=>{
        notes.removeNote(argv.title)
    }
})

yargs.argv