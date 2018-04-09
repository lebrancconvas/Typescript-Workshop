var color;
(function (color) {
    color[color["red"] = 16] = "red";
    color[color["blue"] = 17] = "blue";
    color[color["green"] = 17] = "green";
})(color || (color = {}));
console.log(color.green);
