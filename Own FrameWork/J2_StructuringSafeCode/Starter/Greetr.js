(function(global,$){
    var Greetr = function(firstName,lastName,language){
        return new Greetr.init(firstName,lastName,language);
    }
    Greetr.prototype = {};
    Greetr.init = function(firstName,lastName,language){
        var self = this;
        self.firstName = firstName || "Sai";
        self.lastName = lastName || "Krishna";
        self.language = language || "en";
    }
    Greetr.init.prototype = Greetr.prototype;
    global.Greetr = global.G$ = Greetr;
    
}(window,jQuery));
