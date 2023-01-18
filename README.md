
# Notes App

Command-line notes application built using Node.js and the yargs library. The app allows users to create, read, update, and delete notes via simple command line commands.
The app uses yargs to parse command line arguments, making it easy for users to interact with the application. The commands are well-documented and include options for specifying a note's title and body.
The app uses file system to store the notes, it could be easily modified to use a database for more robust storage solution.

Some of the commands supported by the app are:

add : To add a new note
remove : To remove a note
list : To list all notes
read : To read a note


## Run Locally

Clone the project

```bash
  git clone https://github.com/Riyas-iqbal/Notes-App
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start --options
```
### Options

Add note

```bash
  npm start add --title="Your title.." --body="Your body.."
```

This will create a ``notes.json`` file in your current directory.

Remove note

```bash
  npm start remove --title="Your title.."
```