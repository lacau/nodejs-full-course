const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = load()
    const duplicate = notes.filter((note) => {
        return note.title === title
    })

    if(duplicate.length !== 0) {
        console.log(chalk.red('Note title already exists'))
        return
    }

    notes.push({
        title: title,
        body: body
    })

    save(notes)
    console.log(chalk.green('New note added'))
}

const delNote = (title) => {
    const notes = load()
    const notesToKeep = notes.filter((note) => {
        return note.title !== title
    })

    if(notes.length === notesToKeep.length) {
        console.log(chalk.red('Note not found'))
    } else {
        save(notesToKeep)
        console.log(chalk.green('Note deleted'))
    }
}

const save = (notes) => {
    const dataJSON = JSON.stringify(notes)

    fs.writeFileSync('notes.json', dataJSON)
}

const load = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()

        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNode: addNote,
    delNote: delNote
}