"use strict";

var DATA = [
    {
        game: "Super Metroid",
        date: new Date("2015-12-1"),
        splits: [
            {
                name: "Ceres Escape",
                time: 186819,
            },
            {
                name: "Bomb Torizo",
                time: 302041,
            },
            {
                name: "Super Missile",
                time: 139399,
            },
        ]
    },
    {
        game: "Super Metroid",
        date: new Date("2015-12-16"),
        splits: [
            {
                name: "Ceres Escape",
                time: 176001,
            },
            {
                name: "Bomb Torizo",
                time: 312040,
            },
            {
                name: "Super Missile",
                time: 138498,
            },
        ]
    },
    {
        game: "Super Mario World",
        date: new Date("2015-12-10"),
        splits: [
            {
                name: "Yoshi's Island 2",
                time: 94001,
            },
            {
                name: "Yoshi's Island 3",
                time: 312040,
            },
            {
                name: "Super Missile",
                time: 138498,
            },
        ]
    },
];

$(document).ready(function() {
    for(let splitobj of DATA) {
        var div = $('<div>');
        div.append(
            "<h2>" + splitobj.game
            + " <small>" + splitobj.date
            + "</small></h2>"
        );

        var table = $("<table>").addClass('splits');
        var total = 0;
        for(let split of splitobj.splits) {
            var tr = $("<tr>");
            total += split.time;
            tr.append("<td>" + split.name
                    + "</td><td class='time'>" + total
                    + "</td>");
            table.append(tr);
        }

        div.append(table);
        $('#all-splits').append(div);
    }
});
