const fs = require('fs')

const getNotes = () => {
    fs.readFileSync('notes.json')
    console.log('Your Notes...')
}

const addNotes = (title, body) => {
    const notes = loadNotes()
    
    notes.push({
        title,
        body
    })

    saveNotes(notes)
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

module.exports = { addNotes, getNotes }