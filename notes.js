const fs = require('fs')

const getNotes = () => {
    fs.readFileSync('notes.json')
    console.log('Your Notes...')
}

const addNotes = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => {
        return note.title === title
    })

    if (duplicateNotes.length == 0) {
        notes.push({
            title,
            body
        })

        console.log('New note added')
        saveNotes(notes)
    } else {
        console.log('Title ',title,' Already exist')
    }

}

const removeNote = (title) => {
    const note = loadNotes()
    const newNote = note.filter((note) => {
        return note.title !== title
    })
    if (note.length == newNote.length) console.log('title not found')
    else console.log('title removed')
    saveNotes(newNote)
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

module.exports = { addNotes, getNotes, removeNote }