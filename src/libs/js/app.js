require('../css/app.css')

var NoteManager = require('./mod/note-manger.js');
var Event = require('./mod/event.js')
var WaterFall = require('./mod/waterfall.js')

// require('./mod/datePicker.js')

NoteManager.load();

$('.add-note').on('click',function(){
    NoteManager.add();
})

Event.on('waterfall',function(){
    WaterFall.init($('#content'))
})




