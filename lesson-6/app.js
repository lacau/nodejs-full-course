const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

const command = process.argv[2]

yargs.command({
    command: 'add',
    describe: 'Add new note',
    handler: function () {
        console.log('Adding new note')
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

console.log(yargs.argv)