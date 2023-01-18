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
    const notes = notes.stringify()
    fs.writeFileSync('notes.json',notes)
}


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.stringify()
        return JSON.parse(dataJSON)
    } catch (e) {
        console.log('File not found!')
    }
}




module.exports = { addNotes, getNotes }