'use strict';

//Ajax Object
let Ajax = {
    init() {
        this.ajaxobj = false;
        try {
            this.ajaxobj = new XMLHttpRequest();
        } catch(err) {
            window.alert(err.message + " Get yourself a browser ;)");
        }
    },
    
/*
 * method: getFile
 * @param filename: url of wanted file
 * @param callback: function to handle response
 */
    getFile(filename, callback) {
        try {
            this.ajaxobj.addEventListener('load', function(ev) {    
                callback(ev);
            });
            this.ajaxobj.open("GET", filename);
            this.ajaxobj.send("https://consolwebapi.pay4it.dk/api/Devices/Detail?deviceID=562");
        } catch(err) {
            window.alert(err.message + 'WTF');
        } 
    }
}

export {Ajax};