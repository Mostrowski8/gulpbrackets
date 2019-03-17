(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//global objects
var settings = {
    amount: "",
    phases: ""
}
//Ship object constructor
function Ship() {
    this.status = "";
    this.fields = [];
    this.hits = 0;
    this.status = "placed"
}
//game stats
var stats = {
    playershipspoints: [],
    enemyshipspoints: [],
    playerwin: false
}
//letter A String.fromCharCode(65)
var playerships = {

    single_deckers: [],

    two_deckers: [],

    three_deckers: [],

    four_deckers: [],

    five_deckers: []

}
var enemyships = {

    single_deckers: [],

    two_deckers: [],

    three_deckers: [],

    four_deckers: [],

    five_deckers: []

}




//board object
var playerboard = {
    rows: [],
    columns: [],
    fields: [],
    blocked: []
};
var enemyboard = {
    rows: [],
    columns: [],
    fields: [],
    blocked: []
};
//global variables
var amount;
var gamestarted = false;

var phases = [
    {
        phasename: "fivedeckerphase",
        done: false,
        shipsize: 5,
        //1
        phaseshipsleft: 1
    },
    {
        phasename: "fourdeckerphase",
        done: false,
        shipsize: 4,
        //2
        phaseshipsleft: 1
    },
    {
        phasename: "threedeckerphase",
        done: false,
        shipsize: 3,
        //3
        phaseshipsleft: 2
    },
    {
        phasename: "twodeckerphase",
        done: false,
        shipsize: 2,
        //5?
        phaseshipsleft: 1
    },
    {
        phasename: "onedeckerphase",
        done: false,
        shipsize: 1,
        //0
        phaseshipsleft: 0
    }
];

var enemyphases = [
    {
        phasename: "fivedeckerphase",
        done: false,
        shipsize: 5,
        //1
        phaseshipsleft: 1
    },
    {
        phasename: "fourdeckerphase",
        done: false,
        shipsize: 4,
        //2
        phaseshipsleft: 1
    },
    {
        phasename: "threedeckerphase",
        done: false,
        shipsize: 3,
        //3
        phaseshipsleft: 2
    },
    {
        phasename: "twodeckerphase",
        done: false,
        shipsize: 2,
        //5?
        phaseshipsleft: 1
    },
    {
        phasename: "onedeckerphase",
        done: false,
        shipsize: 1,
        //0
        phaseshipsleft: 0
    }
];

var resetphases = [
    {
        phasename: "fivedeckerphase",
        done: false,
        shipsize: 5,
        //1
        phaseshipsleft: 1
    },
    {
        phasename: "fourdeckerphase",
        done: false,
        shipsize: 4,
        //2
        phaseshipsleft: 1
    },
    {
        phasename: "threedeckerphase",
        done: false,
        shipsize: 3,
        //3
        phaseshipsleft: 2
    },
    {
        phasename: "twodeckerphase",
        done: false,
        shipsize: 2,
        //5?
        phaseshipsleft: 1
    },
    {
        phasename: "onedeckerphase",
        done: false,
        shipsize: 1,
        //0
        phaseshipsleft: 0
    }
];
//(function () {
//    phases.forEach(function (phase, index) {
//
//        enemyphases.push(phases[index]);
//
//    });
//})();

var currentenemyphase = 0;
var enemyshipsize;
var enemyallowed = true;
var enemyshipsplaceallowed = true;

//MODULE EXPORTS
module.exports = {
    settings: settings,
    Ship: function () {
        this.status = "";
        this.fields = [];
    },
    stats: stats,
    playerships: playerships,
    enemyships: enemyships,
    playerboard: playerboard,
    enemyboard: enemyboard,
    amount: amount,
    gamestarted: gamestarted,
    phases: phases,
    enemyphases: enemyphases,
    currentenemyphase: currentenemyphase,
    enemyshipsize: enemyshipsize,
    enemyallowed: enemyallowed,
    enemyshipsplaceallowed: enemyshipsplaceallowed,
    resetphases: resetphases
}

},{}],2:[function(require,module,exports){
//globals module import
var globals = require('./globals.js');
//var enemyshipstorage = require('./enemyshipstorage.js');
var settings = globals.settings;
var Ship = globals.Ship;
var stats = globals.stats;
var playerships = globals.playerships;
var enemyships = globals.enemyships;
var playerboard = globals.playerboard;
var enemyboard = globals.enemyboard;
var amount = globals.amount;
var gamestarted = globals.gamestarted;
var phases = globals.phases;
var enemyphases = globals.enemyphases;
var enemyallowed = globals.enemyallowed;
var enemyshipsplaceallowed = globals.enemyshipsplaceallowed;
var enemyshipsize = globals.enemyshipsize;
var currentenemyphase = globals.currentenemyphase;
var resetphases = globals.resetphases;
//globals module import
var turns = 0;
var shipstotal = 0;
var hits = 0;
var missedshots = 0;



//COS W ENEMYSHIPPLACING ROZWALA KIEDY ZMIENIASZ FIVDECKER






enemyboard.getenemyfieldname = function (asknumber) {
    enemyboard.fields.forEach(function (field, index) {
        if (asknumber == index) {
            return field.fieldname;
        }
    })
}

//jquery shaker animation
jQuery.fn.shake = function () {
    this.each(function (i) {
        $(this).css({
            "position": "relative",

        });
        for (var x = 1; x <= 3; x++) {
            $(this).animate({
                left: 20
            }, 40).animate({
                right: 40
            }, 50).animate({
                left: 0
            }, 40);
        }
    });
    return this;
}

//starting events
//popups
$('#demo').hide();
$('.fieldsform').hide();
$('#capacityalert').hide();
var customshow = 0;
$('#customizebtn').on('click', function () {
    switch (customshow) {
        case 0:
            $('.fieldsform').show();
            $('#customizebtn').html('Hide custom settings');

            customshow = 1;

            break;
        case 1:
            $('.fieldsform').hide();
            $('#customizebtn').html('Show custom settings');
            customshow = 0;

            break;
    }
});
var ref = $('#demo');
var popup = $('#startpopup');
var turnpopup = $('#turnpopup');


popup.hide();
turnpopup.hide();


$('#text-container').after('<button type="button" class="btn btn-primary btn-sx repositionbtn repositionbtn-two" style="width: 100%">REPOSITION SHIPS</button><br>');
$('.repositionbtn-two').hide();


$('#fieldamount').on('input', function () {
    $('#shaker').html('fields:&nbsp;' + this.value);
    shiplimiter();
});

var tempcheck = true;

function shiplimiter() {
    var customshipnumber = $('#fieldamount').val() * $('#fieldamount').val();
    console.log(customshipnumber);
    var temp = 0;
    phases.forEach(function (phase) {
        temp += (phase.shipsize * 3 + 3 * 2) * (phase.phaseshipsleft);
        console.log(phase.phasename);
        console.log(temp);
    });

    if (customshipnumber < temp) {
        console.log('limit the ships');
        var shipforms = document.getElementsByClassName("form-fleet");
        for (i = 0; i < shipforms.length; i++) {
            shipforms[i].max = shipforms[i].value;
            shipforms[i].style.color = "red";
            $('#capacityalert').show();
            //creatboard off
            $('#createbttn').off('click', boardcreationcheck);
            $('#createbttn').removeClass('btn-primary');
            tempcheck = false;
        }
    } else if (tempcheck === false) {
        $('#createbttn').one('click', boardcreationcheck);
        $('#createbttn').addClass('btn-primary');
        console.log("tempcheck back to true")
        tempcheck = true;
        var shipforms = document.getElementsByClassName("form-fleet");
        for (i = 0; i < shipforms.length; i++) {
            shipforms[i].max = 20;
            shipforms[i].style.color = "black";
            $('#capacityalert').hide();
        }
    }
}

function updatephases(e) {
    var tempid = e.target.id;
    var $tempvalue = e.target.value;
    console.log("tempid" + tempid + "tempvalue" + $tempvalue);
    switch (tempid) {
        case "Fivedeckers":
            phases[0].phaseshipsleft = parseInt($tempvalue, 10);
            enemyphases[0].phaseshipsleft = parseInt($tempvalue, 10);
            resetphases[0].phaseshipsleft = parseInt($tempvalue, 10);
            if (phases[0].phaseshipsleft === 0) {
                phases[0].done = true;
            } else {
                phases[0].done = false;
            }
            console.log("onphasechange", phases);

            break;
        case "Fourdeckers":
            phases[1].phaseshipsleft = parseInt($tempvalue, 10);
            enemyphases[1].phaseshipsleft = parseInt($tempvalue, 10);
            resetphases[1].phaseshipsleft = parseInt($tempvalue, 10);
            if (phases[1].phaseshipsleft === 0) {
                phases[1].done = true;
            } else {
                phases[1].done = false;
            }
            console.log("onphasechange", phases);
            break;
        case "Threedeckers":
            phases[2].phaseshipsleft = parseInt($tempvalue, 10);
            enemyphases[2].phaseshipsleft = parseInt($tempvalue, 10);
            resetphases[3].phaseshipsleft = parseInt($tempvalue, 10);
            if (phases[2].phaseshipsleft === 0) {
                phases[2].done = true;
            } else {
                phases[2].done = false;
            }
            console.log("onphasechange", phases);
            break;
        case "Twodeckers":
            phases[3].phaseshipsleft = parseInt($tempvalue, 10);
            enemyphases[3].phaseshipsleft = parseInt($tempvalue, 10);
            resetphases[3].phaseshipsleft = parseInt($tempvalue, 10);
            if (phases[3].phaseshipsleft === 0) {
                phases[3].done = true;
            } else {
                phases[3].done = false;
            }
            console.log("onphasechange", phases);
            break;
        case "Onedeckers":
            phases[4].phaseshipsleft = parseInt($tempvalue, 10);
            enemyphases[4].phaseshipsleft = parseInt($tempvalue, 10);
            resetphases[4].phaseshipsleft = parseInt($tempvalue, 10);
            if (phases[4].phaseshipsleft === 0) {
                phases[4].done = true;
            } else {
                phases[4].done = false;
            }
            console.log("onphasechange", phases);
    }
}
$('.form-fleet').on('input', updatephases);
$('.form-fleet').on('input', shiplimiter);



//placing ships
var shipsize;
var dirvertical = true;
var currentphase = 0;
var placeshipallowed;



function reset() {
    console.log("here reset")
    console.log("reset", resetphases);
    shipamount = 0;
    //Object.assign(phases, resetphases);
    phases = JSON.parse(JSON.stringify(resetphases));
    currentphase = 0;

    playerboard.blocked = [];
    playerboard.fields.blocked = [];
    for (i = 0; i < playerboard.fields.length; i++) {
        playerboard.fields[i].blocked = [];
    }
    phases.forEach(function (phase, index) {
        shipamount += phase.phaseshipsleft;
    });
    //still some blocked class or object
    //check shiplacing func

    playerships = {

        single_deckers: [],

        two_deckers: [],

        three_deckers: [],

        four_deckers: [],

        five_deckers: []

    }


}




function phasecheck() {
    console.log("phasechek fired", phases)
    if (phases[currentphase] && phases[currentphase].phaseshipsleft === 0) {
        phases[currentphase].done = true;
        currentphase++
        //console.log(currentphase);
        //console.log(phases[currentphase]);
        if (phases[currentphase] && phases[currentphase].phaseshipsleft === 0) {
            phasecheck();
        }
    }
    shipplacing();
};


function placeship(event) {
    console.log("placeship fired on ", 'target ', event.target, 'method', event.method, event.offset);
    if (placeshipallowed == true) {
        var temp = this.id;
        console.log("placeship fired", phases);
        phases[currentphase].phaseshipsleft--;
        console.log("placeship removing from phases", phases[currentphase].phasename, phases[currentphase].phaseshipsleft);
        console.log("placeship phases", phases);
        var temptwo = removeshipshadow.bind(event.target);
        temptwo();

        //create temprorary ship object
        var tempship = new Ship();
        tempship.shipsize = shipsize;
        tempship.status = "placed";
        tempship.hits = 0;
        tempship.adjacents = [];

        for (i = 0; i < playerboard.fields.length; i++) {
            if ("p" + playerboard.fields[i].fieldname == temp) {
                //console.log(i);
                if (dirvertical == true) {
                    for (var j = 0; j < shipsize; j++) {
                        tempship.fields.push("#p" + ((playerboard.fields[i + amount * j].fieldname)));
                        $("#p" + ((playerboard.fields[i + amount * j].fieldname))).addClass("placedship");
                        var linennumber = i + amount * j;
                        playerboard.fields[linennumber].empty = false;
                        playerboard.fields[linennumber].clicked = true;
                        playerboard.fields[linennumber].occupied = true;
                        //adjacents and blocked
                        var leftrestrictednumbers = [0];
                        var rightrestrictednumbers = [amount - 1];

                        for (q = 1; q <= amount; q++) {
                            rightrestrictednumbers.push((amount - 1) + (amount * q));
                            leftrestrictednumbers.push(amount * q);
                        }
                        //console.log(leftrestrictednumbers);
                        //console.log(rightrestrictednumbers);
                        var nonrestricted = true;
                        for (r = 0; r < amount; r++) {
                            if (i == leftrestrictednumbers[r]) {
                                if (i == leftrestrictednumbers[leftrestrictednumbers.length - 1 - shipsize]) {
                                    console.log("left exception");
                                    tempship.adjacents.push(linennumber, linennumber + 1, (linennumber - amount) + 1);
                                    playerboard.blocked.push(linennumber, linennumber + 1, (linennumber - amount) + 1),
                                        nonrestricted = false;
                                } else {
                                    console.log("left");
                                    tempship.adjacents.push(linennumber, linennumber + 1, linennumber + amount, (linennumber - amount) + 1, (linennumber + amount) + 1);
                                    playerboard.blocked.push(linennumber, linennumber + 1, linennumber + amount, (linennumber - amount) + 1, (linennumber + amount) + 1);
                                    nonrestricted = false;
                                }

                            } else if (i == rightrestrictednumbers[r]) {
                                console.log("right");
                                tempship.adjacents.push(linennumber, linennumber - 1, linennumber + amount, linennumber - amount, (linennumber - amount) - 1, (linennumber + amount) - 1);
                                playerboard.blocked.push(linennumber, linennumber - 1, linennumber + amount, linennumber - amount, (linennumber - amount) - 1, (linennumber + amount) - 1);
                                nonrestricted = false;
                            }
                        }
                        if (nonrestricted == true) {
                            //console.log("else why");
                            tempship.adjacents.push(linennumber, linennumber + 1, linennumber - 1, linennumber + amount, linennumber - amount, (linennumber - amount) + 1, (linennumber - amount) - 1, (linennumber + amount) + 1, (linennumber + amount) - 1);
                            playerboard.blocked.push(linennumber, linennumber + 1, linennumber - 1, linennumber + amount, linennumber - amount, (linennumber - amount) + 1, (linennumber - amount) - 1, (linennumber + amount) + 1, (linennumber + amount) - 1);
                        }



                        for (x = 0; x < playerboard.blocked.length; x++) {
                            var tempnuba = playerboard.blocked[x];
                            //console.log(tempnuba);

                            if (tempnuba >= 0 && tempnuba <= playerboard.fields.length) {
                                //console.log('tempnuba '+tempnuba);
                                playerboard.fields[tempnuba].blocked = true;
                            }
                        }
                    }
                    //direction horizontal
                } else {
                    for (var j = 0; j < shipsize; j++) {
                        tempship.fields.push("#p" + ((playerboard.fields[i + j].fieldname)));
                        $("#p" + ((playerboard.fields[i + j].fieldname))).addClass("placedship");
                        var linennumber = i + j;
                        playerboard.fields[linennumber].empty = false;
                        playerboard.fields[linennumber].clicked = true;
                        playerboard.fields[linennumber].occupied = true;
                        //adjacents and blocked
                        //adjacents and blocked
                        var leftrestrictednumbers = [0];
                        var rightrestrictednumbers = [amount - shipsize];

                        for (q = 1; q < amount; q++) {
                            rightrestrictednumbers.push(((amount - 1) + (amount * q)) - (shipsize - 1));
                            leftrestrictednumbers.push(amount * q);
                        }
                        //console.log(leftrestrictednumbers);
                        //console.log(rightrestrictednumbers);
                        var nonrestricted = true;
                        for (r = 0; r < amount; r++) {
                            if (i == leftrestrictednumbers[r]) {
                                if (i == leftrestrictednumbers[leftrestrictednumbers.length - 1]) {
                                    //console.log("workongsddfgsdg");
                                    nonrestricted = false;
                                    tempship.adjacents.push(linennumber, linennumber + 1, (linennumber - amount) + 1);
                                    playerboard.blocked.push(linennumber, linennumber + 1, (linennumber - amount), (linennumber - amount) + 1);
                                } else {
                                    //console.log("left");
                                    tempship.adjacents.push(linennumber, linennumber + 1, linennumber + amount, (linennumber - amount) + 1, (linennumber + amount) + 1);
                                    playerboard.blocked.push(linennumber, linennumber + 1, linennumber + amount, (linennumber - amount) + 1, (linennumber + amount) + 1);
                                    nonrestricted = false;
                                }

                            } else if (i == rightrestrictednumbers[r]) {
                                //console.log("right");
                                tempship.adjacents.push(linennumber, linennumber - 1, linennumber + amount, linennumber - amount, (linennumber - amount) - 1, (linennumber + amount) - 1);
                                playerboard.blocked.push(linennumber, linennumber - 1, linennumber + amount, linennumber - amount, (linennumber - amount) - 1, (linennumber + amount) - 1);
                                nonrestricted = false;
                            }
                        }
                        if (nonrestricted == true) {
                            //console.log("else why");
                            tempship.adjacents.push(linennumber, linennumber + 1, linennumber - 1, linennumber + amount, linennumber - amount, (linennumber - amount) + 1, (linennumber - amount) - 1, (linennumber + amount) + 1, (linennumber + amount) - 1);
                            playerboard.blocked.push(linennumber, linennumber + 1, linennumber - 1, linennumber + amount, linennumber - amount, (linennumber - amount) + 1, (linennumber - amount) - 1, (linennumber + amount) + 1, (linennumber + amount) - 1);
                        }





                        for (x = 0; x < playerboard.blocked.length; x++) {
                            var tempnuba = playerboard.blocked[x];
                            //console.log(tempnuba);
                            if (tempnuba >= 0 && tempnuba <= playerboard.fields.length - 1) {
                                //console.log('tempnumba2 '+tempnuba);
                                playerboard.fields[tempnuba].blocked = true;
                            }
                        }
                    }
                }
            }
        }


        //console.log('shipsleft' + phases[currentphase].phaseshipsleft + 'phasename' + phases[currentphase].phasename + 'done?' + phases[currentphase].done);

        //place shipobject in playerships
        if (shipsize == 5) {
            playerships.five_deckers.push(tempship);
        }
        if (shipsize == 4) {
            playerships.four_deckers.push(tempship);
        } else if (shipsize == 3) {
            playerships.three_deckers.push(tempship);
        } else if (shipsize == 2) {
            playerships.two_deckers.push(tempship);
        } else if (shipsize == 1) {
            playerships.single_deckers.push(tempship);
        }

        shipamount--
        $('#text-container').html('Place your ships by clicking on fields, right click to change the direction of the ship<br>Remaining ships: ');
        $('#text-container').append(shipamount);


        phasecheck();

    }

}
var allowed = true;

function shipshadow() {
    //console.log("shipshadoworks");

    var temp = this.id;
    var lastletters = [];
    for (k = shipsize; k > 0; k--) {
        lastletters.push((playerboard.fields[amount * (amount - k)].fieldname).substring(0, 1));
    }

    console.log("this id for shipshadow is " + temp + " " + lastletters);
    for (i = 0; i < playerboard.fields.length; i++) {

        if ("p" + playerboard.fields[i].fieldname == temp) {
            if (dirvertical == true) {

                for (m = 0; m < shipsize; m++) {
                    if ((i + amount * m) < playerboard.fields.length && playerboard.fields[i + amount * m].blocked == true) {
                        allowed = false;
                        placeshipallowed = false;
                        $("#p" + ((playerboard.fields[i + amount * m].fieldname))).addClass("blocked");

                    }
                }
                //2nd check
                for (j = 0; j < shipsize; j++) {

                    if (temp.substring(1, 2) == lastletters[1] || temp.substring(1, 2) == lastletters[2] || temp.substring(1, 2) == lastletters[3] ||
                        temp.substring(1, 2) == lastletters[4] || allowed == false) {
                        if ((i + amount * j) < playerboard.fields.length) {
                            allowed = false;
                            placeshipallowed = false;
                            $("#p" + ((playerboard.fields[i + amount * j].fieldname))).addClass("blocked");
                        }

                        //console.log("not working");
                        //blocked fields detector           
                    } else {

                        //thirdcheck
                        //IMPLEMENT UNDEFINED EXCEPT IN ENEMYCHECK NAOOOOOO!!!!!!

                        if (playerboard.fields[i + amount * j]) {
                            $("#p" + ((playerboard.fields[i + amount * j].fieldname))).addClass("shipshadow");
                            //console.log(i + " " + j + " " + ((playerboard.fields[i + amount * j].fieldname)));
                            placeshipallowed = true;
                        } else {
                            placeshipallowed = false;
                        }

                    }
                }

                //if dirvertical false
            } else {
                var allowed = true;
                for (m = 0; m < shipsize; m++) {
                    if ((i + m) < playerboard.fields.length && playerboard.fields[i + m].blocked == true) {
                        allowed = false;
                        placeshipallowed = false;
                    }
                }
                for (j = 0; j < shipsize; j++) {

                    if ((amount - shipsize) < parseInt(temp.substr(2, 10)) - 1 || allowed == false) {
                        if (playerboard.fields[i + j] && temp.substring(1, 2) == playerboard.fields[i + j].fieldname.substring(0, 1)) {
                            $("#p" + ((playerboard.fields[i + j].fieldname))).addClass("blocked");
                        }
                        placeshipallowed = false;
                    } else {
                        $("#p" + ((playerboard.fields[i + j].fieldname))).addClass("shipshadow");
                        placeshipallowed = true;
                        //console.log(i + " " + j + " " + ((playerboard.fields[i + j].fieldname)));

                    }
                }
            }
        }
    }
}

function removeshipshadow() {
    //console.log("shipshadow off");
    var temp = this.id;
    //console.log("this id for shipshadow is " + temp);
    for (i = 0; i < playerboard.fields.length; i++) {
        if ("p" + playerboard.fields[i].fieldname == temp) {
            if (dirvertical == true) {
                for (j = 0; j < shipsize; j++) {
                    if (playerboard.fields[i + amount * j]) {
                        $("#p" + ((playerboard.fields[i + amount * j].fieldname))).removeClass("shipshadow");
                        $("#p" + ((playerboard.fields[i + amount * j].fieldname))).removeClass("blocked");
                    }
                }
            } else {
                for (j = 0; j < shipsize; j++) {
                    if (playerboard.fields[i + j]) {
                        $("#p" + ((playerboard.fields[i + j].fieldname))).removeClass("shipshadow");
                        $("#p" + ((playerboard.fields[i + j].fieldname))).removeClass("blocked");
                    }
                }
            }
        }
    }
};

function onedeckerphase() {
    //setting up ship size

    shipsize = 1;
    console.log(phases);
    if (phases[currentphase].phaseshipsleft == 0) {
        phasecheck()
    }
};

function twodeckerphase() {
    //setting up ship size

    shipsize = 2;
    console.log(phases);
    if (phases[currentphase].phaseshipsleft == 0) {
        phasecheck()
    }
};

function threedeckerphase() {
    //setting up ship size

    shipsize = 3;
    console.log(phases);
    if (phases[currentphase].phaseshipsleft == 0) {
        phasecheck()
    }
};

//fourdeckerphase
function fourdeckerphase() {
    //setting up ship size

    shipsize = 4;
    console.log(phases);
    if (phases[currentphase].phaseshipsleft == 0) {
        phasecheck()
    }
};

function fivedeckerphase() {
    //setting up ship size
    shipsize = 5;
    console.log(phases);
    if (phases[currentphase].phaseshipsleft == 0) {
        phasecheck()
    }
};

$("#startgamebtn").on("click", function () {
    console.log(playerships);
    $(".pfield").off("click", placeship);
    popup.hide();
    turn();
    $('#text-container').html('Pick enemy field');
    _.each(playerships, function (shipset) {
        _.each(shipset, function (ships) {
            shipstotal++
        });
    });
});

$(".repositionbtn").on("click", function () {
    popup.hide();
    var playerdivs = document.getElementsByClassName('pfield');
    for (i = 0; i < playerdivs.length; i++) {
        playerdivs[i].classList.remove('placedship');
    }
    reset();
    $('#text-container').html('Place your ships by clicking on fields then click on the board to start<br>Remaining ships: ');
    $('#text-container').append(shipamount);
    $(".pfield").off("click", placeship);
    $(".pfield").one("click", placeship);
    $(".pfield").on("mouseover", shipshadow);
    $(".pfield").on("mouseleave", removeshipshadow);
    playerboard.fields.forEach(function (field, index) {
        field.empty = true;
        field.clicked = false;
        field.occupied = false;
    })
    playerboard.fields.forEach(function (field, index) {

        console.log("occupied ", field.occupied);
    })

    console.log("playershipsreset ", playerships);
    console.log("playerboard.blokd ", playerboard.blocked);
    shipplacing();
});



//STARTGAME FUNCTION
function startgame() {
    $(".pfield").off("mouseover", shipshadow);
    $(".pfield").off("mouseleave", removeshipshadow);
    //$(".pfield").off("click", placeship);
    $('.repositionbtn-two').hide();
    popup.show();
    console.log("playershipsreset ", playerships);
    console.log("playerboard.blokd ", playerboard.blocked);
    //create popper prompt to restart or start game     
}



function shipplacing() {

    if (phases[0].done == true) {
        if (phases[1].done == true) {
            if (phases[2].done == true) {
                if (phases[3].done == true) {
                    if (phases[4].done == true) {
                        startgame();
                    } else {
                        onedeckerphase();
                    }
                } else {
                    twodeckerphase();
                }
            } else {
                threedeckerphase();
            }
        } else {
            fourdeckerphase();
        }
    } else {
        fivedeckerphase();
    }
};



//function bound to playerfieldclickevent
function playerclick() {
    $(".pfield").off('click', playerclick);
    $('#text-container').html('Pick enemy field');
    turn();
};






function displaywingame() {
    $(".pfield").off('click', playerclick);
    $(".efield").off('click', enemyclick);
    $('body').append("<div class='endgame'><h1>YOU WIN</h1><br>turns: " + turns + "<br>ships total: " + shipstotal + "<br>hits: " + hits + "<br>missed shots: " + missedshots + "<br><br><button type='button' class='btn btn-primary btn-sx restarter'>Menu</button> </div>");
    $('.restarter').click(function () {
        location.reload();
    });
}



var turnsunken = false;

function enemyclicktwo(temp) {
    for (i = 0; i < enemyboard.fields.length; i++) {
        if ("e" + enemyboard.fields[i].fieldname == temp) {
            if (!enemyboard.fields[i].sunken && !enemyboard.fields[i].missed) {
                if (!enemyboard.fields[i].empty) {
                    $('#' + temp).removeClass("placedship");
                    $('#' + temp).addClass("sunken");
                    enemyboard.fields[i].sunken = true;
                    //console.log("BULLSEYE");
                    $('#text-container').html('HIT!');
                    hits++
                    $('#text-container').shake();
                    console.log(enemyships);
                    turnsunken = false
                    _.each(enemyships, function (shipset) {
                        _.each(shipset, function (ship) {
                            _.each(ship.fields, function (field) {
                                if (field == '#' + temp) {
                                    ship.hits++
                                    console.log(ship.fields, ship.hits);
                                }
                                if (ship.hits == ship.shipsize && ship.status != "sunken") {
                                    ship.status = "sunken";
                                    turnsunken = true;
                                    console.log(ship.fields, ship.status);
                                }
                            })
                        })
                    });


                    _.each(enemyships, function (shipset) {
                        _.each(shipset, function (ship) {
                            if (ship.status == "placed") {
                                shipset.clear = false;
                                return
                            } else {
                                shipset.clear = true;
                            }
                        })
                    })

                    var wingame = _.find(enemyships, function (shipset) {
                        return shipset.clear == false;

                    })

                    if (wingame == undefined) {
                        displaywingame();
                    }

                    setTimeout(function () {
                        if (turnsunken === false) {
                            $('#text-container').html('Pick another field');
                        } else {
                            $('#text-container').html('Ship sunken! Pick another field');
                        }
                    }, 1500);
                } else {
                    enemyboard.fields[i].missed = true;
                    $('#' + temp).addClass("missed");
                    //console.log("MISS");
                    $('#text-container').html('MISS!');
                    missedshots++
                    setTimeout(function () {
                        $('#text-container').html('Enemy turn...');
                        turnboarad();
                    }, 1200);
                    refreshed = false;
                    setTimeout(function () {

                        enemypick();
                    }, 3000);
                    //                    setTimeout(function () {
                    //                        $(".pfield").on('click', playerclick);
                    //                    }, 5000);
                }
            } else {

                //console.log("please pick an empty field");
            }
        }
    }
}

function turnboarad() {
    if (kliktemp == 1) {
        $("#demo").carousel('next');
        kliktemp = 0;
    } else {
        $("#demo").carousel('prev');
        kliktemp = 1;
    }
};

//function bound to clickenemyfieldevent
function enemyclick(event) {
    if (refreshed == true) {



        var temp = this.id;
        //console.log(temp);

        enemyclicktwo(temp);

    } else {

        enemyclicktwo(temp);

    }
};


//ENEMY SHIPS PLACING START

//gdzies jest zbyt duza rekurencja
//maximum call stack limit
//when i run this plaer placement event listener is not even on

//rekurenacja jest odpalana rowniez po wejsciuw sama siebie co oznacza zalew

//trzecia faza dostaje ststki na -1

//RETURN PO KAZDEJ REKURENCJIIIIIIIIII!!!!!!

function enemyphasecheck() {
    console.log("enemyphasechek launched for" + enemyphases[currentenemyphase].phasename + "and ships left is" + enemyphases[currentenemyphase].phaseshipsleft)
    if (enemyphases[currentenemyphase].phaseshipsleft == 0) {
        enemyphases[currentenemyphase].done = true;
        console.log("enemyphasechek phase done?" + enemyphases[currentenemyphase] + enemyphases[currentenemyphase].done)
        if (currentenemyphase < enemyphases.length - 1) {
            currentenemyphase++
            placeenemyships(amount);
            console.log(currentenemyphase)
        } else {
            return;
        }


        //console.log(currentenemyphase);
        //console.log(enemyphases[currentenemyphase].phasename);
        //one more loop if next phase has 0
        if (enemyphases[currentenemyphase].phaseshipsleft == 0) {
            console.log("enemyphasechek this was 0")
            enemyphasecheck();

        }
    } else {
        console.log("this pahse is not done" + currentenemyphase + " ships left" + enemyphases[currentenemyphase].phaseshipsleft)
        placeenemyships(amount);

    }
}


function placeshiphere(temp) {

    console.log("placeshiphere launched with temp" + temp)
    //left for dev
    if (enemyshipsplaceallowed == true) {
        //var temp = temp;
        console.log("enemyshipsplaceallowed in placeshiphere")
        enemyphases[currentenemyphase].phaseshipsleft--;
        var tempship = new Ship();
        tempship.shipsize = enemyshipsize;
        tempship.status = "placed";
        tempship.hits = 0;
        tempship.adjacents = [];
        for (i = 0; i < enemyboard.fields.length; i++) {
            if ("e" + enemyboard.fields[i].fieldname == temp) {
                console.log("placeshiphere tmep matched")
                if (dirvertical == true) {
                    console.log("dirvert placing")
                    for (var j = 0; j < enemyshipsize; j++) {



                        //SOMETIMES ERROR FIRES HERE AS UNDEFINED 
                        console.log("placing ship tile on " + enemyboard.fields[i + amount * j].fieldname + " fieldstatus " + enemyboard.fields[i + amount * j].fieldname.blocked);

                        tempship.fields.push("#e" + ((enemyboard.fields[i + amount * j].fieldname)));

                        //SOMETIMES ERROR FIRES HERE AS UNDEFINED 


                        $("#e" + ((enemyboard.fields[i + amount * j].fieldname))).addClass("eplacedship");
                        var linenumber = i + amount * j;
                        enemyboard.fields[linenumber].empty = false;
                        enemyboard.fields[linenumber].clicked = false;
                        enemyboard.fields[linenumber].occupied = false;
                        var leftrestrictednumbers = [0];
                        var rightrestrictednumbers = [amount - 1];

                        for (q = 1; q <= amount; q++) {
                            rightrestrictednumbers.push((amount - 1) + (amount * q));
                            leftrestrictednumbers.push(amount * q);
                        }
                        var nonrestricted = true;
                        for (r = 0; r < amount; r++) {
                            if (i == leftrestrictednumbers[r]) {
                                if (i == leftrestrictednumbers[leftrestrictednumbers.length - 1 - enemyshipsize]) {
                                    console.log("left exception");
                                    tempship.adjacents.push(linenumber, linenumber + 1, (linenumber - amount) + 1);
                                    enemyboard.blocked.push(linenumber, linenumber + 1, (linenumber - amount) + 1),
                                        nonrestricted = false;
                                } else {
                                    console.log("left");
                                    tempship.adjacents.push(linenumber, linenumber + 1, linenumber + amount, (linenumber - amount) + 1, (linenumber + amount) + 1);
                                    enemyboard.blocked.push(linenumber, linenumber + 1, linenumber + amount, (linenumber - amount) + 1, (linenumber + amount) + 1);
                                    nonrestricted = false;
                                } //lefterstricted
                            } else if (i == rightrestrictednumbers[r]) {
                                tempship.adjacents.push(linenumber, linenumber - 1, linenumber + amount, linenumber - amount, (linenumber - amount) - 1, (linenumber + amount) - 1);
                                enemyboard.blocked.push(linenumber, linenumber - 1, linenumber + amount, linenumber - amount, (linenumber - amount) - 1, (linenumber + amount) - 1);
                                nonrestricted = false;
                            } //rightrestricted
                        } //llop for restrictednumbers and creation of adajcents blocked
                        if (nonrestricted == true) {
                            tempship.adjacents.push(linenumber, linenumber + 1, linenumber - 1, linenumber + amount, linenumber - amount, (linenumber - amount) + 1, (linenumber - amount) - 1, (linenumber + amount) + 1, (linenumber + amount) - 1);
                            enemyboard.blocked.push(linenumber, linenumber + 1, linenumber - 1, linenumber + amount, linenumber - amount, (linenumber - amount) + 1, (linenumber - amount) - 1, (linenumber + amount) + 1, (linenumber + amount) - 1);
                        } //standard nonrestricted procedure
                        for (x = 0; x < playerboard.blocked.length; x++) {
                            var tempnuba = enemyboard.blocked[x];
                            if (tempnuba >= 0 && tempnuba <= enemyboard.fields.length) {
                                console.log("blocking initiated");
                                enemyboard.fields[tempnuba].blocked = true;
                            }
                        } //limiting blocked range to the board

                    }
                } ///dirvertical true
                else {
                    console.log("dirhoricon launched for placehere")
                    for (var j = 0; j < enemyshipsize; j++) {
                        tempship.fields.push("#e" + ((enemyboard.fields[i + j].fieldname)));
                        $("#e" + ((enemyboard.fields[i + j].fieldname))).addClass("eplacedship");
                        var linenumber = i + j;
                        enemyboard.fields[linenumber].empty = false;
                        enemyboard.fields[linenumber].clicked = true;
                        enemyboard.fields[linenumber].occupied = true;
                        var leftrestrictednumbers = [0];
                        var rightrestrictednumbers = [amount - enemyshipsize];
                        for (q = 1; q < amount; q++) {
                            rightrestrictednumbers.push(((amount - 1) + (amount * q)) - (enemyshipsize - 1));
                            leftrestrictednumbers.push(amount * q);
                        } //loop for adjacents
                        var nonrestricted = true;
                        for (r = 0; r < amount; r++) {
                            if (i == leftrestrictednumbers[r]) {
                                if (i == leftrestrictednumbers[leftrestrictednumbers.length - 1]) {
                                    console.log("workongsddfgsdg");
                                    nonrestricted = false;
                                    tempship.adjacents.push(linenumber, linenumber + 1, (linenumber - amount) + 1);
                                    enemyboard.blocked.push(linenumber, linenumber + 1, (linenumber - amount), (linenumber - amount) + 1);
                                } else {

                                    tempship.adjacents.push(linenumber, linenumber + 1, linenumber + amount, (linenumber - amount) + 1, (linenumber + amount) + 1);
                                    enemyboard.blocked.push(linenumber, linenumber + 1, linenumber + amount, (linenumber - amount) + 1, (linenumber + amount) + 1);
                                    nonrestricted = false;
                                }
                            } //if leftrestricted
                            else if (i == rightrestrictednumbers[r]) {
                                tempship.adjacents.push(linenumber, linenumber - 1, linenumber + amount, linenumber - amount, (linenumber - amount) - 1, (linenumber + amount) - 1);
                                enemyboard.blocked.push(linenumber, linenumber - 1, linenumber + amount, linenumber - amount, (linenumber - amount) - 1, (linenumber + amount) - 1);
                                nonrestricted = false;
                            } //if rightrestricted
                        }
                        if (nonrestricted == true) {
                            console.log("else why");
                            tempship.adjacents.push(linenumber, linenumber + 1, linenumber - 1, linenumber + amount, linenumber - amount, (linenumber - amount) + 1, (linenumber - amount) - 1, (linenumber + amount) + 1, (linenumber + amount) - 1);
                            enemyboard.blocked.push(linenumber, linenumber + 1, linenumber - 1, linenumber + amount, linenumber - amount, (linenumber - amount) + 1, (linenumber - amount) - 1, (linenumber + amount) + 1, (linenumber + amount) - 1);
                        }
                    } //main loop for dir horizontal
                }
            } // main match condition
        } // main loop with var i if placeshipaalowed end
        for (x = 0; x < enemyboard.blocked.length; x++) {
            var tempnuba = enemyboard.blocked[x];
            //console.log(tempnuba);
            if (tempnuba >= 0 && tempnuba < enemyboard.fields.length) {
                //console.log("enemyblock initiated");
                enemyboard.fields[tempnuba].blocked = true;
            }
        } //limiting blocked to playerboard
        //console.log("placement done for" + temp + "below ship")
        //console.log(tempship);
        if (enemyshipsize == 5) {
            enemyships.five_deckers.push(tempship);
        } else if (enemyshipsize == 4) {
            enemyships.four_deckers.push(tempship);
        } else if (enemyshipsize == 3) {
            enemyships.three_deckers.push(tempship);
        } else if (enemyshipsize == 2) {
            enemyships.two_deckers.push(tempship);
        } else if (enemyshipsize == 1) {
            enemyships.single_deckers.push(tempship);
        }

        enemyphasecheck()
        return;
    } else {
        shipcheckloop(enemyshipsize);
        return;
    } //if placeshipallowed true

};








function shipcheckloop(enemyenemyshipsize) {
    switch (dirvertical) {
        case true:
            dirvertical = false;
            break;
        case false:
            dirvertical = true;
            break;
    }
    //unlock above when horizontal debugged
    //console.log("shipchekloop fired")
    var blocked = enemyboard.blocked;
    //console.log("blocked fields: " + blocked)
    var randomnumber = Math.floor((Math.random() * (amount * amount)));
    //loop passing only if random choic is not blocked field 
    for (j = 0; j < blocked.length; j++) {
        //below filter for preventing placing on adjacent fields
        if (randomnumber == blocked[j]) {
            randomnumber = Math.floor((Math.random() * (amount * amount)));
            j = 0;
        }
    }
    //console.log("randomnumber" + randomnumber);
    //RANDOMNUMBER PASSED
    //check for remaining fields

    //temp is id
    var temp = "e" + enemyboard.fields[randomnumber].fieldname;
    //console.log("shipchekloop temp" + temp);
    //lastletters for edges check
    var lastletters = [];
    for (k = enemyshipsize; k > 0; k--) {
        lastletters.push((playerboard.fields[amount * (amount - k)].fieldname).substring(0, 1));
    }
    //console.log("lastletters" + lastletters);

    if (dirvertical == true) {
        console.log("dirvert chjeck launched")
        //1st check
        for (m = 0; m < enemyshipsize; m++) {

            //            console.log("vertcheckloop "+m+" "+(randomnumber + amount * m)+" is blocked? "+enemyboard.fields[randomnumber + amount * m].blocked);
            if ((randomnumber + amount * m) <
                enemyboard.fields.length && enemyboard.fields[randomnumber + amount * m].blocked == true) {
                enemyallowed = false;
                enemyshipsplaceallowed = false;
                console.log("1st check vert failed");
                shipcheckloop(enemyenemyshipsize);
                return;
            } else if ((randomnumber + amount * m) > enemyboard.fields.length) {
                enemyallowed = false;
                enemyshipsplaceallowed = false;
                console.log("1st check vert failed undef");
                shipcheckloop(enemyenemyshipsize);
                return;
            }
        }
        //2nd check

        for (j = 0; j < enemyshipsize; j++) {

            if (temp.substring(1, 2) == lastletters[1] || temp.substring(1, 2) == lastletters[2] || temp.substring(1, 2) == lastletters[3] || allowed == false) {
                if ((randomnumber + amount * j) < enemyboard.fields.length) {
                    //!!!!!failed - redo loop
                    console.log("2nd check vert fail")
                    shipcheckloop(enemyenemyshipsize);
                    return;
                }
            } else {
                //                console.log("placeshiphere" + temp)
                //                enemyshipsplaceallowed = true;
                //                placeshiphere(temp);
                if (playerboard.fields[randomnumber + amount * j]) {

                    //console.log(i + " " + j + " " + ((playerboard.fields[i + amount * j].fieldname)));
                    enemyshipsplaceallowed = true;
                    placeshiphere(temp);
                    return;
                } else {
                    enemyshipsplaceallowed = false;
                    shipchekloop(enemyenemyshipsize);
                    return;
                }
            }
        }
    }
    //dirvert not true
    else {
        var enemyallowed = true;
        //firstcheck
        for (m = 0; m < enemyshipsize; m++) {
            if ((randomnumber + m) < enemyboard.fields.length && enemyboard.fields[randomnumber + m].blocked == true) {
                enemyallowed = false;
                enemyshipsplaceallowed = false;
                console.log("1st check hor")
                shipcheckloop(enemyenemyshipsize);
                return;
            }
        }
        //secondcheck
        for (j = 0; j < enemyshipsize; j++) {

            if ((amount - enemyshipsize) < parseInt(temp.substr(2, 10)) - 1 || enemyallowed == false) {
                if (temp.substring(1, 2) == enemyboard.fields[randomnumber + j].fieldname.substring(0, 1)) {
                    //!!failed-redo
                    console.log("2nd check hor fail")
                    shipcheckloop(enemyenemyshipsize);
                    return;

                }
                console.log("wtf is this fail")
                enemyshipsplaceallowed = false;
                shipcheckloop(enemyenemyshipsize);
                return;

            } else {
                //pass!!!!!
                console.log("2nd check hor pass")
                enemyshipsplaceallowed = true;
                placeshiphere(temp);
                return;
            }
        }
    }


    //close if temp==temp_two block
};
//!!!!!!!!!!!!!! if not passed, run this loop again shipcheckloop(enemyenemyshipsize)
function onedeckerphaseloop() {

    enemyshipsize = 1;
    //one loop for check and place one ship
    if (enemyphases[currentenemyphase].phaseshipsleft == 0) {
        enemyphasecheck();

    } else {
        shipcheckloop();
    }
    //placeenemyships();
}



function twodeckerphaseloop() {

    enemyshipsize = 2;
    //one loop for check and place one ship
    if (enemyphases[currentenemyphase].phaseshipsleft == 0) {
        enemyphasecheck();

    } else {
        shipcheckloop();
    }
    //placeenemyships();
}


function threedeckerphaseloop() {
    console.log("three fired")

    enemyshipsize = 3;
    //one loop for check and place one ship
    if (enemyphases[currentenemyphase].phaseshipsleft == 0) {
        enemyphasecheck();

    } else {
        shipcheckloop();
    }
    //placeenemyships();
}



function fourdeckerphaseloop() {
    console.log("fourdeckerllop fired")

    enemyshipsize = 4;
    //one loop for check and place one ship
    if (enemyphases[currentenemyphase].phaseshipsleft == 0) {
        enemyphasecheck();

    } else {
        shipcheckloop();
    }
    //placeenemyships();
}


function fivedeckerphaseloop() {
    console.log("fivedeckerpahaseloop fired")

    enemyshipsize = 5;
    //one loop for check and place one ship
    if (enemyphases[currentenemyphase].phaseshipsleft == 0) {
        console.log("runnin phasecheck", enemyphases[currentenemyphase].phaseshipsleft == 0);
        enemyphasecheck();

    } else {
        shipcheckloop();
    }

    //placeenemyships();
}



function placeenemyships(amount) {

    //shipplaceing for enemy
    //loop1 - for all phases
    //loop2 - for each phase
    //loop3 - for each ship in phase until ships extracted
    //runnig fieldcheck based on shipshadow for each random field tossed.
    //when check is ok places a ship and removes one from enemypahses.phaseships
    //phasecheck, if pahse is 0 change phase, new loop2
    //run new loop 
    console.log("enemyphases", enemyphases)
    console.log("placeenemyships fired");
    if (enemyphases[0].done == true) {
        console.log("enemyphases[0] is done" + enemyphases[0])
        if (enemyphases[1].done == true) {
            console.log("enemyphases[1] is done" + enemyphases[1])
            if (enemyphases[2].done == true) {
                console.log("enemyphases[2] is done" + enemyphases[2])
                if (enemyphases[3].done == true) {
                    console.log("enemyphases[3] is done" + enemyphases[3])
                    if (enemyphases[4].done == true) {

                        console.log("FINITO");
                        return;
                    } else {
                        onedeckerphaseloop();
                        return;
                    }
                } else {
                    twodeckerphaseloop();
                    return;
                }
            } else {
                threedeckerphaseloop();
                return;
            }
        } else {
            fourdeckerphaseloop();
            return;
        }
    } else {
        console.log("enemyphases[0] is not done" + enemyphases[0])
        fivedeckerphaseloop();
        return;
    }


};





//END OF ENEMYSHIPPLACING HOLY SHIT
//var placeenemyships = require('./placeenemyships.js');
//end of enemyplacing

function showenemy (){
    
        if (kliktemp == 1) {
            $("#demo").carousel('next');
            kliktemp = 0;
        } else {
            $("#demo").carousel('prev');
            kliktemp = 1;
        }
        $(".eplacedship").addClass("placedship");
        $(".endgame").fadeOut(); 
};




//CREATE BOARD FUNCTION

function createboard(amount) {
    //fill board.rows and board.columns
    for (i = 0; i < amount; i++) {
        var templetter = String.fromCharCode(i + 65);
        var tempnumber = 1 + i;
        playerboard.rows.push(templetter);
        playerboard.columns.push(tempnumber);
        enemyboard.rows.push(templetter);
        enemyboard.columns.push(tempnumber);
    }
    //fill board.fields
    var columncounter = 0;
    var rowcounter = 0;
    for (i = 0; i < amount * amount; i++) {
        if (columncounter == amount) {
            columncounter = 0;
            rowcounter++;
        }

        playerboard.fields[i] = {
            row: playerboard.rows[rowcounter],
            column: playerboard.columns[columncounter],
            fieldname: playerboard.rows[rowcounter] + playerboard.columns[columncounter],
        };
        enemyboard.fields[i] = {
            row: enemyboard.rows[rowcounter],
            column: enemyboard.columns[columncounter],
            fieldname: enemyboard.rows[rowcounter] + enemyboard.columns[columncounter],
        };
        columncounter += 1;
    }

    //fill adjacent fields

    for (i = 0; i < playerboard.fields.length; i++) {

        if (i >= amount) {

            playerboard.fields[i].adjacent = [playerboard.fields[i + 1], playerboard.fields[i - 1], playerboard.fields[i + amount], playerboard.fields[i - amount]];
            enemyboard.fields[i].adjacent = [enemyboard.fields[i + 1], enemyboard.fields[i - 1], enemyboard.fields[i + amount], enemyboard.fields[i - amount]];
        } else {
            playerboard.fields[i].adjacent = [playerboard.fields[i + 1], playerboard.fields[i - 1], playerboard.fields[i + amount]];
            //additional properties to each field

            enemyboard.fields[i].adjacent = [enemyboard.fields[i + 1], enemyboard.fields[i - 1], enemyboard.fields[i + amount]];
        }
        //additional properties to each field
        enemyboard.fields.forEach(function (obj) {
            obj.empty = true;
            obj.clicked = false;
            obj.occupied = false;
            obj.sunken = false;
            obj.blocked = false;
        });
        playerboard.fields.forEach(function (obj) {
            obj.empty = true;
            obj.clicked = false;
            obj.occupied = false;
            obj.sunken = false
        });

    }

    //DOMbuild
    var playertemplate = $("<div class='playerboard'></div>");
    $("#playercol").append(playertemplate);
    var enemytemplate = $("<div class='enemyboard'></div>");
    $("#enemycol").append(enemytemplate);

    for (i = 0; i < playerboard.fields.length; i++) {
        var pidname = "p" + playerboard.fields[i].fieldname;
        var pidname = "p" + playerboard.fields[i].fieldname;
        var eidname = "e" + enemyboard.fields[i].fieldname;
        var ptemp = $("<div class='pfield'></div>").attr('id', pidname);
        var etemp = $("<div class='efield'></div>").attr('id', eidname);
        $(".playerboard").append(ptemp);
        $(".enemyboard").append(etemp);
    }
    //place enemy ships variables

    placeenemyships(amount);

    //marking function
    //    for (i = 0; i < enemyboard.fields.length; i++) {
    //        if (enemyboard.fields[i].occupied) {
    //            var temp2 = "e" + enemyboard.fields[i].fieldname;
    //            console.log(temp2);
    //            $('#' + temp2).addClass("placedship");
    //        }
    //    }




    //set height and width of fields
    var fieldsize = (parseFloat(100 / amount)).toString() + "%";
    $(".pfield").css("width", fieldsize);
    $(".pfield").css("height", fieldsize);
    $(".efield").css("width", fieldsize);
    $(".efield").css("height", fieldsize);



    //eventlistener for placing ships
    //UNCOMMENT TO MAKE IT WORK
    //$(".pfield").on('click', playerclick);

    //function for for changing direction
    $(".pfield").bind('contextmenu', function (e) {
        e.preventDefault();
        var tempx = removeshipshadow.bind(event.target);
        tempx();
        //console.log(removeshipshadow());
        if (dirvertical == true) {
            dirvertical = false;

            //            console.log(dirvertical);
        } else {
            dirvertical = true;

            //            console.log(dirvertical);
        }
        var tempy = shipshadow.bind(event.target);
        tempy();
    });



    //tutaj strzelanie we wroga
    $(".efield").on('click', enemyclick);
    currentphase = 0;
    console.log("phases on start", phases);
    $(".pfield").on("mouseover", shipshadow);
    $(".pfield").on("mouseleave", removeshipshadow);
    $(".pfield").one("click", placeship);
    $('#text-container').html('Place your ships by clicking on fields, right click to change the direction of the ship<br>Remaining ships: ');
    $('#text-container').append(shipamount);
    $('.repositionbtn-two').show();



    shipplacing();
}

//creation initiated
//createboard(10);

console.log("tis is playa" + playerboard);
console.log("tis is enemy" + enemyboard);





//BOOTSTRAP CAROUSEL HACK
var kliktemp = 1;
$("#klik").click(function () {
    if (kliktemp == 1) {
        $("#demo").carousel('next');
        kliktemp = 0;
    } else {
        $("#demo").carousel('prev');
        kliktemp = 1;
    }
    $(".eplacedship").addClass("placedship");
    $(".endgame").fadeOut();
});

//FUNCTION FOR STARTGAME
//game logic in another onclick
refreshed = false;




function turn() {
    turns++
    //console.log("game logic");
    refreshed = true;
    //hide or change present carousel onclick
    if (kliktemp == 1) {
        $("#demo").carousel('next');
        kliktemp = 0;
    } else {
        $("#demo").carousel('prev');
        kliktemp = 1;
    }
}

////////////////////////////////////////////////////////////
////////////// ENEMYPICKERRRRRRRRRRRRRR ///////////////////
///////////////////////////////////////////////////////////

var enemyai = {
    seekingadjacent: false,
    seekingvertical: null,
    seekhorizontal: null,
    misses: 0,
    //DIRFAILED FILLING UP WITH ARRAYS
    directionsfailed: [],
    currentdirection: null,
    sourcefieldnumber: null,
    currentfieldnumber: null,
    nextfield: null,
    didhit: false,
    directions: ["top", "right", "bottom", "left"],
    giverandomdirection: function(){
        var toremove = this.directionsfailed;

//toremove fills with undef rather than directions, means that undef is pushed? UNDEFS PUSHED

        console.log("TEST 4 toremove, undefs pushed in here?, other dirs lacking", toremove);
        var dirbank = this.directions.filter(function(direction, index){
        return toremove.indexOf(direction) < 0;
        });




        console.log("dirbank", dirbank);
        var dir = dirbank[Math.floor(Math.random()*dirbank.length)];
        (dir == undefined || dir == [])? dir = "something went wrong" : dir=dir;
        console.log("dir is", dir)
        return dir;
    }
};


function setalladjacentpicked(shipfields) {    
     shipfields.forEach(function(shipfield, shipindex){
        playerboard.fields.forEach(function(playerfield, playerindex){
            // console.log("FIELDNAMES", playerfield.fieldname, shipfield.substring(2,4));
               if (playerfield.fieldname === shipfield.substring(2,4)){
                   playerfield.adjacent.forEach(function(adjacentield, adjacentindex){
                   if(adjacentield){adjacentield.picked = true}
                       console.log("PLAYERFIELDHERE check adjacents below", playerfield);
                   })
               };
         })
     })
    console.log("setalladjacent fired");
console.log("SHIP SUNKEN HERE SHIPFIELDS BLOCK ADJACENT", shipfields);
console.log("check these fields here", playerboard.fields);
};



function losercheck(){
    var playerlose = true;
    _.each(playerships, function(shipset){
        _.each(shipset, function(ship){
            if (ship.status != "sunken") {
                playerlose = false;
            } 
        })
    })
if (playerlose === true) {
    $(".pfield").off('click', playerclick);
    $(".efield").off('click', enemyclick);
    $('body').append("<div class='endgame'><h1>YOU HAVE LOST</h1><br>turns: " + turns + "<br>ships total: " + shipstotal + "<br>hits: " + hits + "<br>missed shots: " + missedshots + "<br><br><button type='button' class='btn btn-primary btn-sx shower'>Show enemy ships</button> <button type='button' class='btn btn-primary btn-sx restarter'>Menu</button> </div>");
    $('.restarter').click(function () {
        location.reload();
    });
    $(".eplacedship").addClass("placedship");
    $(".shower").click(function(){
        console.log("showenemy click fired")
        showenemy();
    })
    return true;
}
return false;
}


function randomshot(randomnumber) {    
   playerboard.fields[randomnumber].picked = true;
            if (playerboard.fields[randomnumber].occupied) {
                var pidname = "#p" + playerboard.fields[randomnumber].fieldname;
                $(pidname).addClass("enemypicked");
                setTimeout(function () {
                    $('#text-container').html('HIT! Enemy picks another field');
                    $('#text-container').shake();
                    $(pidname).removeClass("placedship");
                    $(pidname).removeClass("enemypicked");
                    $(pidname).addClass("sunken");
                    enemyai.seekingadjacent = true;
                    enemyai.sourcefieldnumber = randomnumber;
                    _.each(playerships, function (shipset) {
                        _.each(shipset, function (ship) {
                            _.each(ship.fields, function (field) {
                                console.log("ship field sunken check fieldname", field);
                                if (pidname == field) {
                                    ship.hits++
                                    console.log(ship.hits)
                                    if (ship.hits == ship.shipsize) {
                                        ship.status = "sunken";
                                           enemyai.seekingadjacent = false;
                                            enemyai.directionsfailed = [];
                                            enemyai.directionprogress = [];
                                            enemyai.currentdirection = null;
                                            enemyai.sourcefield = null;
                                            enemyai.nextfield = null;
                                        enemyai.currentfieldnumber = null;
                                         enemyai.seekingvertical = null;
     enemyai.seekhorizontal = null;
     enemyai.didhit = false;
     console.log("ship sunken")
                                        //target = null;
                                    }
                                }
                            })
                        })
                    })
                   if (losercheck()){
                       return;
                   }
                    console.log("randomshot on ", pidname, enemyai);
                    enemypick();
                }, 2000);
            } else {
                var pidname = "#p" + playerboard.fields[randomnumber].fieldname;
                playerboard.fields[randomnumber].picked = true;
                $(pidname).addClass("enemypicked");
                setTimeout(function () {
                    $('#text-container').html('Miss! Click on the board for next turn');
                    setTimeout(function () {
                        $(".pfield").on('click', playerclick);
                    }, 500);
                    $(pidname).removeClass("enemypicked");
                    $(pidname).addClass("enemypicked-done");
                }, 1500);
            }  
}

function determinefield(newdir){
    var newdir = newdir;
    console.log("determinefield fired, currentdir is", enemyai.currentdirection)
    console.log("TEST3 NEWDIR WORKS? ", newdir)
    console.log("TEST3a currentfieldnumber passed?", enemyai.currentfieldnumber);
    var thisdir;
    switch (newdir){
    case "top":
    thisdir = enemyai.currentfieldnumber - amount;
    break;
    case "right":
    thisdir = enemyai.currentfieldnumber + 1;   
    break;
    case "bottom":
    thisdir = enemyai.currentfieldnumber + amount;    
    break;
    case "left":
    thisdir = enemyai.currentfieldnumber - 1;    
    break;
    default:
    //returning undef on right for some reason
    //WIESZA SIE NA TYM////////////////////////////////////////////////////////////////////////////////////////////////
thisdir = "depleted";
console.log("TEST 7 directions drained, returning depleted")
}
console.log("TEST4 determinefield fired end", thisdir, enemyai);
console.log("TEST4a thisdir", thisdir);
console.log(thisdir);
return thisdir;
}


function seekingadjacent(){
    //validation part
    console.log("seekingadajcent fired");
    if(enemyai.currentfieldnumber == null) {
    console.log(enemyai.currentfieldnumber, "currentfield null setting currentifeld as sourcenumber");
    enemyai.currentfieldnumber = enemyai.sourcefieldnumber;
    console.log(enemyai.currentfieldnumber);
    } 

//currentdir wirks? 
if(!enemyai.didhit){
    enemyai.currentdirection = enemyai.giverandomdirection();
    console.log ("TEST currentdirection works?", enemyai.currentdirection);
} else {
    (enemyai.currentdirection === "top" || enemyai.currentdirection === "bottom")? enemyai.seekingvertical = true : enemyai.seekhorizontal = true;
    if (enemyai.seekingvertical === true) {
        enemyai.directionsfailed.push("left", "right");
    } else if (enemyai.seekhorizontal) {
        enemyai.directionsfailed.push("top", "bottom");
    }
}
    
//currentdir works 
    
var newdir = enemyai.currentdirection;
//determinefield works? NOT WORKING!!!!!!
    var nextfieldnumber = determinefield(newdir);
    if (nextfieldnumber === "depleted") {
        enemyai.currentfieldnumber=enemyai.sourcefieldnumber;
        enemyai.nextfieldnumber=null;
        enemyai.directionsfailed = [];
        if (enemyai.seekingvertical === true) {
            enemyai.directionsfailed.push("left", "right");
        } else if (enemyai.seekhorizontal === true) {
            enemyai.directionsfailed.push("top", "bottom");
        }
        enemyai.didhit = false;
        enemyai.currentdirection = enemyai.giverandomdirection();
        newdir = enemyai.currentdirection;
        enemyai.nextfield = determinefield(enemyai.currentdirection);
        nextfieldnumber = enemyai.nextfield;

        //if not working then put seekingadjacent here and return
    }
   console.log("TEST2 determine field works? nextfieldnumber", nextfieldnumber);
    // enemyai.nextfield = playerboard.fields[nextfieldnumber];
    enemyai.nextfield = nextfieldnumber;
    var nextfield = enemyai.nextfield;

//why undef
    console.log("nextfieldnumber", nextfieldnumber, "nextfield", nextfield)
    if (playerboard.fields[nextfieldnumber] == null || playerboard.fields[nextfieldnumber] == undefined){
    
    console.log("nextfield null or undef, seeking adjacent again", nextfield);    
    seekingadjacent();    
    return;
    } else if (playerboard.fields[nextfieldnumber].picked){



        
// BUGGED ON TOP LAS TIME LOOP FIRING HERE????????????????


    //GIVING UNDEF?    
    enemyai.directionsfailed.push(enemyai.currentdirection);
    console.log("TEST5 directionsfailed pushing", enemyai.currentdirection)
    console.log("seekingadajcent but picked, return, nextfield is", playerboard.fields[nextfieldnumber]);    
    seekingadjacent();    
    return;    
    }
    //validated
    console.log("seekingadajcent on ", nextfield); 
    //hit or miss
    if (playerboard.fields[nextfieldnumber].occupied && !playerboard.fields[nextfieldnumber].picked) {
                var pidname = "#p" + playerboard.fields[nextfieldnumber].fieldname;
                $(pidname).addClass("enemypicked");
                playerboard.fields[nextfieldnumber].picked = true;
                setTimeout(function () {
                    $('#text-container').html('HIT! Enemy picks another field');
                    $('#text-container').shake();
                    $(pidname).removeClass("placedship");
                    $(pidname).removeClass("enemypicked");
                    $(pidname).addClass("sunken");

                    //where does it pass object instead of number? here? what is nectfield, number?
                    enemyai.currentfieldnumber = enemyai.nextfield;
                    enemyai.didhit = true;
                    _.each(playerships, function (shipset) {
        console.log("searching through ships")
                        _.each(shipset, function (ship) {
                            _.each(ship.fields, function (field) {
                                console.log("ship field sunken check", field);
                                if (pidname == field) {
                                    ship.hits++
                                    console.log("SHIP HITS! ", ship.hits)
                                    if (ship.hits == ship.shipsize) {
                                        console.log("TEST 9 SHIPSUNKEN");
                                        setalladjacentpicked(ship.fields);
                                        ship.status = "sunken";
                                           enemyai.seekingadjacent = false;
                                            enemyai.directionsfailed = [];
                                            enemyai.directionprogress = [];
                                            enemyai.currentdirection = null;
                                            enemyai.sourcefield = null;
                                            enemyai.nextfield = null;
                                        enemyai.currentfieldnumber = null;
                                         enemyai.seekingvertical = null;
                                        enemyai.seekhorizontal = null;
                                        enemyai.didhit = false;
                                        //target = null;
                                        //STUCK AFTER THIS WHEN RETURN TO SOURCE IS NEEDED
                                    }
                                }
                            })
                        })
                    })
                    if (losercheck()){
                        return;
                    }
                    console.log("still seekadjacent shot on ", pidname, enemyai);
                    enemypick();
                }, 2000);
            } else {
                var pidname = "#p" + playerboard.fields[nextfieldnumber].fieldname;
                playerboard.fields[nextfieldnumber].picked = true;
                if(enemyai.didhit){
                    enemyai.nextfieldnumber === "depleted";
                }
                enemyai.didhit = false;
                console.log("TEST6 dirfailed on miss pushing undef?", enemyai.currentdirection);
                //pushing undef?
                enemyai.directionsfailed.push(enemyai.currentdirection);
                $(pidname).addClass("enemypicked");
                setTimeout(function () {
                    $('#text-container').html('Miss! Click on the board for next turn');
                    setTimeout(function () {
                        $(".pfield").on('click', playerclick);
                    }, 500);
                    $(pidname).removeClass("enemypicked");
                    $(pidname).addClass("enemypicked-done");
                }, 1500);
            }
}



function enemypick() {
    if (!enemyai.seekingadjacent) {
        var randomnumber =  Math.floor((Math.random() * (playerboard.fields.length)));
        (playerboard.fields[randomnumber].picked)? enemypick() : randomshot(randomnumber); 
    } else {
        seekingadjacent();
    }   
}








////////////////////////////////////////////////////////////
//////////////ENEMYPICKERRRRRRRRRRRRRR/////////////////////
////////////////////////////////////////////////////////////





//number of ships
var shipamount = 0;
//counting down remaining ships
var clickcounter = 0;

//WHOLE FIELD CLICKING LOGIC DAMN
//function placingshipsclicker() {


function boardcreationcheck(e) {

    amount = parseInt($('#fieldamount').val());
    //console.log("amount is " + amount);
    phases.forEach(function (phase, index) {
        shipamount += phase.phaseshipsleft;
    });
    createboard(amount);
    $('#popupscontainer').hide();
    $('#demo').fadeIn();
    console.log("boardcreationcheck fired", phases);
}


//events
$('#createbttn').on('click', boardcreationcheck);

},{"./globals.js":1}]},{},[2]);
