const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

const command = process.argv[2]

yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('# Adding new note')
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

yargs.command({
    command: 'del',
    describe: 'Delete note',
    handler: function () {
        console.log('Deleting note')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read note',
    handler: function () {
        console.log('Reading note')
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {
        console.log('Listing all notes')
    }
})

yargs.parse()
//console.log(yargs.argv)