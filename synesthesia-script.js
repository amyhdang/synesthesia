/*minimum of 50 lines of code, excluding comments*/

var width = 1200;
var height = 100;
var margin = 40;

var svg = d3.select("#circle-container")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .style("background-color","inherit");

var color = d3.scaleOrdinal()
  .domain(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
  "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3",
  "4", "5", "6", "7", "8", "9", "!", "?", ";", ":", ".", ",", " ", "'", "-"])
  .range(["#fffd7d","#efe4c5","#ff6252","#c8adb8","#561f4b","#d4c8e9","#82d88d",
  "#9bd3e3","#ecd1d1","#f7a766","#bfbaba","#d9e8ca","#9c0000","#ffc8ff","#ffffca",
  "#df6767","#4e4242","#178677","#c92b00","#ffdc54","#d39a9b","#a5a5e9","#7088f2",
  "#a9d6cc","#ffffff","#000000", "none", "none", "none", "none", "none", "none",
  "none", "none", "none", "none", "none", "none", "none", "none", "none",
  "none", "none", "none", "none", "none"]); //can i use an if statement in fill to make it more elegant?


var visualizeButton = d3.select("#visualize-button");
visualizeButton.on("click", createCircles);

function createCircles() {
  var text = d3.select("#inputText").property("value");
  var lowercaseText = text.toLowerCase();
  var letters = lowercaseText.split("");

  var spacing = (width - 2*margin)/letters.length;
  var x = margin + spacing/2; 

  for(var i = 0; i < letters.length; i++) {
    var letter = letters[i];
    svg.append("circle")
      .attr("cx", x)
      .attr("cy", 50)
      .attr("r", 25)
      .attr("opacity", 0.5)
      .attr("fill", function() {
        return color(letter);
      });
    x += spacing;
  }
}

var clearButton = d3.select("#clear-button");
clearButton.on("click", removeCircles);

function removeCircles() {
  d3.selectAll("circle")
    .remove();
}

$(".arrow1").click(function() {
  $("html, body").animate({
    scrollTop: $(".description").offset().top},
    "slow");
});

$(".arrow2").click(function() {
  $("html, body").animate({
    scrollTop: $(".add-text-container").offset().top},
    "slow");
});

$(".top-button").click(function() {
  $("html, body").animate({
    scrollTop: $(".first-half").offset().top},
    "slow");
});
