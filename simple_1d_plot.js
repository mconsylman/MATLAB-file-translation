/**
 * A very rough plotting tool for visualizing 1D data
 * Syntax: plot(1D JS array of numerical type, canvas to render to)
 *
 * By: micah.consylman@axiosengineering.com
 * Date: 3/3/15
 */

function plot(array1D, canvas) {

    if (null==canvas || !canvas.getContext) return;

    var ctx=canvas.getContext("2d");
    var w = canvas.width;
    var h = canvas.height;

    // Clear plot from previous
    ctx.fillStyle = "#FFFFFF"; 
    ctx.fillRect(0, 0, w, h);


    ctx.strokeStyle = "rgb(128,128,128)";//gray 50%

    // draw x-axis
    var y0 = h * 0.5;

    // moveTo (x,y)
    ctx.beginPath();
    ctx.moveTo(0,y0); ctx.lineTo(w,y0);  // X axis
    ctx.stroke();


    // Data plot line
    ctx.strokeStyle = "blue";

    // Scale steps in x dir
    var length = array1D.length; // length of array
    var xStep = w/(length - 1);

    // Scale height in y dir
    var min = Math.min.apply(Math, array1D);
    var max = Math.max.apply(Math, array1D);

    // 2x the farthest outlier from x axis
    var yRange = Math.max(Math.abs(max), Math.abs(min)) * 2;

    var yScale = h / yRange;

    var yOffset = 0;
    var neg = 1;
    if(min < 0){
        yOffset = Math.abs(min);
        neg = -1;
    }


    var x, y;


    // Iterate though the array and draw values
    ctx.beginPath();
    for(var i =0; i < length; i++){
        x = i * xStep;
        y = ((neg * array1D[i]) + yOffset) * yScale;

        if(i == 0)
            ctx.moveTo(x,y);
        else{
            ctx.lineTo(x,y);
        }
        // Debug info:
        // console.log("x: " + x + ", y: " + y);
    }
    ctx.stroke();

    // // Debug info:
    //         console.log("height: " + h);
    //         console.log("width: " + w);
    //         console.log("min: " + min);
    //         console.log("max: " + max);
    //         console.log("yRange: " + yRange);
    //         console.log("yScale: " + yScale);
    //         console.log("yOffset: " + yOffset);

}
