const chalk = require('chalk')
const fs = require('fs')

const addNotes = (title, body) => {
    if (!title || !body) {
        console.log(chalk.bgRed('provide title and body'))
        return false
    }
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => {
        return note.title === title
    })

    const duplicateNote = notes.find( note => note.title === title )

    if (duplicateNotes.length == 0) {
        notes.push({
            title,
            body
        })

        console.log(chalk.bgGreen('New note added'))
        saveNotes(notes)
    } else {
        console.log(chalk.bgRed('Title ', title, ' Already exist'))
    }
}

const removeNote = (title) => {
    const note = loadNotes()
    const newNote = note.filter(note => note.title !== title)
    if (note.length == newNote.length) console.log(chalk.bgRed('title not found!'))
    else console.log(chalk.bgGreen('title removed!'))
    saveNotes(newNote)
}

const listNotes = () => {
    console.log('Your Notes list')
    const notes = loadNotes()
    notes.forEach( note => console.log(chalk.bgRed(note.title)))
}


const readNote = (title)=> {
    const notes = loadNotes()
    const note = notes.find(note=>note.title == title)
    if (note) {
        console.log(chalk.bgGreen(note.title)+'\n'+note.body)
    } else {
        console.log(chalk.bgRed('Note Doesnt exist'))
    }
}

const saveNotes = (notes) => {
    try {
        const newNotes = JSON.stringify(notes)
        fs.writeFileSync('notes.json', newNotes)
    } catch (error) {
        console.log(error)
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        console.log('File not found!')
        return []
    }
}

module.exports = { addNotes, getNotes, removeNote, listNotes, readNote }