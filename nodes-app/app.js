const chalk = require('chalk')
const validator = require('validator')
const yargs = require('yargs')

const getNotes = require('./notes.js')
const msg = getNotes()
console.log(msg)
console.log(validator.isEmail('shabnam@gmail.com'))
const greenmsg = chalk.green('success!')
console.log(greenmsg)
console.log(process.argv[2])

//version

yargs.version('1.1.0')


//create add command
yargs.command({
    command:'add',
    describe:'add a new node',
    handler: function()
    {
    console.log('adding a new note')
    }
})


//create remove command
yargs.command({
    command: 'remove',
    decribe: 'remove a note',
    handler:  function()
    {
      console.log('removing a note')
    }
})


//create list command
yargs.command({
    command: 'list',
    desribe: 'list the notes',
    builder:
    {
        title:{ 
            describe:'note',
            type: 'string'
        }
    }, 
  handler: function(){
        console.log('listing the notes')
    }
}) 


//create read command
yargs.command({
    command: 'read',
    describe: 'read the note',
    handler: function()

    {
        console.log('read the notes')

    }
})

//practice work
yargs.command({
    command: 'add',
    describe: 'add a note',
    builder:{
          body:{
        describe:'note body',
        demandoption: true,
        type: string
     }},
     handler: function(argv) {
     console.log('body:' + argv.body)
    }
})
console.log(yargs.argv)

