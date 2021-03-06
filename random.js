var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
    var number = Math.random()
    if (number < 0.4){
    makeRect(76,45,10,10,"#333333",1)
    makeRect(114,45,10,10,"#333333",1)
    makeEllipse(85,70,5,15,"#4d4d4d",1)
    makeEllipse(100,70,5,15,"#333333",1)
    makeEllipse(114,70,5,15,"#4d4d4d",1)
    makeEllipse(100,50,20,30,"#737373",1)
    makeCircle(100,50,18,"#333333",1)
    makeCircle(100,50,15,"#a3c2c2",1)
    makeCircle(20,20,10,"#ffffff",0.15)
    makeCircle(20,20,5,"#ffffff",0.20)
    makeCircle(20,20,1,"#ffffff",1)
    makeCircle(40,50,1,"#ffffff",1)
    makeCircle(40,50,5,"#ffffff",0.30)
    makeCircle(70,80,1,"#ffffff",1)
    makeCircle(70,80,3,"#ffffff",0.10)
    makeCircle(5,90,4,"#ffffff",0.30)
    makeCircle(5,90,1,"#ffffff",1)
    makeCircle(100,10,6,"#ffffff",0.26)
    makeCircle(100,10,2,"#ffffff",1)
    makeCircle(150,30,5,"#ffffff",0.15)
    makeCircle(150,30,2,"#ffffff",0.40)
    makeCircle(150,30,1,"#ffffff",1)
    makeCircle(70,200,5,"#ffffff",0.30)
    makeCircle(70,200,1,"#ffffff",1)
    makeCircle(100,50,13,"#ebebb7",1)
    makeCircle(100,50,12,"#efefc3",1)
    }else{
        makeRect(76,45,10,10,"#ff0000",1)
    makeRect(114,45,10,10,"#ff0000",1)
    makeEllipse(85,70,5,15,"#4d4d4d",1)
    makeEllipse(100,70,5,15,"#ffff00",1)
    makeEllipse(114,70,5,15,"#4d4d4d",1)
    makeEllipse(100,50,20,30,"#0000cc",1)
    makeCircle(100,50,18,"#333333",1)
    makeCircle(100,50,15,"#a3c2c2",1)
    makeCircle(20,20,10,"#ffffff",0.15)
    makeCircle(20,20,5,"#ffffff",0.20)
    makeCircle(20,20,1,"#ffffff",1)
    makeCircle(40,50,1,"#ffffff",1)
    makeCircle(40,50,5,"#ffffff",0.30)
    makeCircle(70,80,1,"#ffffff",1)
    makeCircle(70,80,3,"#ffffff",0.10)
    makeCircle(5,90,4,"#ffffff",0.30)
    makeCircle(5,90,1,"#ffffff",1)
    makeCircle(100,10,6,"#ffffff",0.26)
    makeCircle(100,10,2,"#ffffff",1)
    makeCircle(150,30,5,"#ffffff",0.15)
    makeCircle(150,30,2,"#ffffff",0.40)
    makeCircle(150,30,1,"#ffffff",1)
    makeCircle(70,200,5,"#ffffff",0.30)
    makeCircle(70,200,1,"#ffffff",1)
    makeCircle(100,50,13,"#ebebb7",1)
    makeCircle(100,50,12,"#efefc3",1)
}
}

// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
    var spaceShip = Math.random()
    if(spaceShip < 0.2){
   makeImage("https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSXmQJpOhEIFi9bH3TzNcraTEOd_oVFELdEctL7APyQS42CE1yy",0,0,259,194)
    makeRect(76,45,10,10,"#333333",1)
    makeRect(114,45,10,10,"#333333",1)
    makeEllipse(85,70,5,15,"#4d4d4d",1)
    makeEllipse(100,70,5,15,"#333333",1)
    makeEllipse(114,70,5,15,"#4d4d4d",1)
    makeEllipse(100,50,20,30,"#737373",1)
    makeCircle(100,50,18,"#333333",1)
    makeCircle(100,50,15,"#a3c2c2",1)
    makeCircle(100,50,13,"#ebebb7",1)
    makeCircle(100,50,12,"#efefc3",1)
    makeCircle(90,80,15,"#d9d9d9",0.25)
    makeCircle(105,85,16,"#d9d9d9",0.20)
    makeCircle(100,120,45,"#b32d00",1)
    makeCircle(95,85,8,"#802000",0.35)
    makeCircle(84,90,4,"#802000",0.35)
    }else{
    makeRect(76,45,10,10,"#333333",1)
    makeRect(114,45,10,10,"#333333",1)
    makeEllipse(85,70,5,15,"#4d4d4d",1)
    makeEllipse(100,70,5,15,"#333333",1)
    makeEllipse(114,70,5,15,"#4d4d4d",1)
    makeEllipse(100,50,20,30,"#737373",1)
    makeCircle(100,50,18,"#333333",1)
    makeCircle(100,50,15,"#a3c2c2",1)
    makeCircle(100,50,13,"#ebebb7",1)
    makeCircle(100,50,12,"#efefc3",1)
    makeCircle(90,80,15,"#d9d9d9",0.25)
    makeCircle(105,85,16,"#d9d9d9",0.20)
    makeCircle(100,120,45,"#0066cc",1)
    makeCircle(95,85,8,"#339933",1)
    makeCircle(84,90,4,"#339933",1)
}
}

// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
    var alienHello = Math.random()
    if(alienHello < 0.5){
    makeImage("https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS-zcIh1pmtNCdrpvgES-Xq1a3V1PdA0ThfVdMaS6AlHjznbwhi",0,0,284,177)
    makeRect(76,45,10,10,"#40ff00",1)
    makeRect(114,45,10,10,"#40ff00",1)
    makeEllipse(85,70,5,15,"#40ff00",1)
    makeEllipse(100,70,5,15,"#33cc00",1)
    makeEllipse(114,70,5,15,"#40ff00",1)
    makeEllipse(100,50,20,30,"#737373",1)
    makeCircle(100,50,18,"#333333",1)
    makeCircle(100,50,15,"#a3c2c2",1)
    makeCircle(100,50,13,"#ebebb7",1)
    makeCircle(100,50,12,"#efefc3",1)
 }else{
    makeRect(90,70,20,40,"#ffff66",0.30)
    makeRect(76,45,10,10,"#40ff00",1)
    makeRect(114,45,10,10,"#40ff00",1)
    makeEllipse(85,70,5,15,"#40ff00",1)
    makeEllipse(100,70,5,15,"#33cc00",1)
    makeEllipse(114,70,5,15,"#40ff00",1)
    makeEllipse(100,50,20,30,"#737373",1)
    makeCircle(100,50,18,"#333333",1)
    makeCircle(100,50,15,"#a3c2c2",1)
    makeCircle(100,50,13,"#b366ff",1)
    makeCircle(100,50,12,"#cc99ff",1)
    makeCircle(95,50,3,"#26004d",1)
    makeCircle(105,50,3,"#26004d",1)
}
}




// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    // Generate a random number between 0 and 1, and store it in a variable.
    var randomScene = Math.random()
    // If the number is less than 0.33, call the function to create your first scene.
    if(randomScene < 0.33){
    createFirstScene()
    
    // Else, if the number is less than 0.67, call the function to create your second scene.
    }else if(randomScene < 0.67){
       createSecondScene() 
    
    
    // Else, call the function to create your third scene.
    
    }else{
    createThirdScene()
}
    }


// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}