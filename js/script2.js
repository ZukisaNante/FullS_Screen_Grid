//Sets important constants and variables

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");


defaultGrid();
//Creates a default grid sized 16x16 
function defaultGrid() {
    makeRows(100);
    makeColumns(50);
}

//Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    //Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

//Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};

$(document).ready(function(){
  $(".cell").on("click", function(){
    $(this).css("background-color", "contextmenu");
  });

  $(".cell").on("mouseover", function(){
    $(this).css("background-color", "black");
  });

  /*colour picker function */

var idto = "";
$(document).bind("contextmenu", function (event) {
    event.preventDefault();
    $("<div class='custom-menu'><b>Background Color:</b><br /><div style=\"width:100%;background-color:blue\" data-color='blue' >Blue</div><div data-color='aqua' style=\"width:100%;background-color:aqua\"  data-propid='2'>Aqua</div><div data-color='aquamarine' style=\"width:100%;background-color:aquamarine\">Aquamarine</div><div style=\"width:100%;background-color:green\">Green</div><div style=\"width:100%;background-color:darkgreen\">Dark Green</div>")
        .appendTo("body")
        .css({
        top: event.pageY + "px",
        left: event.pageX + "px"
    });
    idto = event.target.id
}).bind("click", function (event) {    
    $("div.custom-menu").hide();
});

$("body").on('click', ".custom-menu div", function() {
    $("#"+idto+"").css("background", $(this).attr('data-color'));  
    $("input[name=property"+(idto.charAt(1))+"]").val($(this).attr('data-color'));
})

});


