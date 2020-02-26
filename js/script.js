// function that builds a grid in the "container"
function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $(".container").append("<div class='grid'></div>");
        }
    }
    $(".grid").width(960/x);
    $(".grid").height(960/x);
}

// function that clears the grid
function clearGrid() {
    $(".grid").remove();
}

// function that prompts the user to select the number of boxes in a new grid
// the function then also creates that new grid
function refreshGrid() {
    var z = prompt("How many boxes per side?");
    clearGrid();
    createGrid(z);
}

// create a 16x16 grid when the page loads
// creates a hover effect that changes the color of a square to black when the mouse passes over it, leaving a (pixel) trail through the grid
// allows the click of a button to prompt the user to create a new grid
$(document).ready(function() {
    createGrid(50);

    // $(".grid").mouseover(function() {
    //     $(this).css("background-color", "black");
    // });

    $(".newGrid").click(function() {
        refreshGrid();

        // $(".grid").mouseover(function() {
        //     $(this).css("background-color", "black");
        // });
    });

    /*http://jsfiddle.net/f5EMT/1/*/
    var mousePosition;
    var offset = [0,0];
    var div;
    var isDown = false;

    div = document.getElementById('myColorPicker');

    div.addEventListener('mousedown', function(e) {
        isDown = true;
        offset = [
            div.offsetLeft - e.clientX,
            div.offsetTop - e.clientY
        ];
    }, true);

    document.addEventListener('mouseup', function() {
        isDown = false;
    }, true);

    document.addEventListener('mousemove', function(event) {
        event.preventDefault();
        if (isDown) {
            mousePosition = {

                x : event.clientX,
                y : event.clientY
            };
            div.style.left = (mousePosition.x + offset[0]) + 'px';
            div.style.top  = (mousePosition.y + offset[1]) + 'px';
        }
    }, true);

    div.container.addEventListener("mousemove",function(e){
    // http://jsfiddle.net/Meligy/2kyaJ/3/
    setInterval(function(){
        var $sample1 = $("#magentaID");
        var $sample2 = $("#redID");
        var $sample3 = $("#blueID");
        var $sample4 = $("#yellowID");
        var $sample5 = $("#cyanID");
        if($sample1.is(":hover")) {
            selectedColor="magenta";
        }
        else if($sample2.is(":hover")){
            selectedColor="red";
        }
        else if($sample3.is(":hover")){
            selectedColor="blue";
        }
        else if($sample4.is(":hover")){
            selectedColor="yellow";
        }
        else if($sample5.is(":hover")){
            selectedColor="cyan";
        }
        else {
           //
        }
    }, 200);
},false);

});
