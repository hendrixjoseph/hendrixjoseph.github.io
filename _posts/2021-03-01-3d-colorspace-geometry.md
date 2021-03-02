---
layout: post
title: 3D Colorspace Geometry
tags: [canvas, math, javascript, programming]
keywords: [three dimensions, sphere, cube, colorspace, spacecolor]
image: /images/covers/3d-colorspace-geometry.png
---

When most people think of three dimensions, they think of three positional (spatial) dimensions. Up & down, left & right, forward & back. I was thinking - instead of a positional dimension, what if we used something else that we can perceive such as color?

I decided to call this combination of color and space *colorspace*.

In this sense, the single word *colorspace* is analogous to [spacetime](https://en.wikipedia.org/wiki/Spacetime) rather than the two-word term [color space](https://en.wikipedia.org/wiki/Color_space) meaning how to organize colors.

Maybe I should've called it spacecolor, but that doesn't roll off the tongue quite the same, and I digress.

My initial thought was to apply this to three-dimensional objects to see what their four-dimensional counterparts would look like. For instance, I could construct a cube and color it to make it a tesseract. Instead, I simplified things and applied the concept to two-dimensional objects by adding a third color dimension.

## The Representation

I represented the shapes in a three-dimensional array of the first [octant](https://en.wikipedia.org/wiki/Octant_%28solid_geometry%29) of a 3D coordinate system.

An *octanct* is merely the 3D counterpart to the 2D *quadrant*. So the 2D equivalent of, say, a filled-in square would look something like this:

    0 0 0 0 0
    0 1 1 1 0
    0 1 1 1 0
    0 1 1 1 0
    0 0 0 0 0

A 3D filled-in cube would of similar dimensions would consist of five layers:

The first layer would be empty:

    0 0 0 0 0
    0 0 0 0 0
    0 0 0 0 0
    0 0 0 0 0
    0 0 0 0 0

The second through fourth layers would be:

    0 0 0 0 0
    0 1 1 1 0
    0 1 1 1 0
    0 1 1 1 0
    0 0 0 0 0

And the final, fifth layer would be empty:

    0 0 0 0 0
    0 0 0 0 0
    0 0 0 0 0
    0 0 0 0 0
    0 0 0 0 0

Note that this is a horrible, memory-inefficient way to store the data.

## The Tests

I decided to make my images on a 256 × 256 × 256 canvas.

That's an [HTML Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) where each canvas is 256 pixels wide and 256 pixels tall. Each pixel can be one of 256 gray colors - including black and white.

> Wait, shouldn't there be 256 bits of color? Well, yeah, but the normal RGB colors are only 24 bits - 8 bits for each color. "Normally" with 24 bits there are 2^24 colors, or 16,777,216 colors. With [256 bits](https://en.wikipedia.org/wiki/256-bit_computing), that's enough for 2^256 colors, 115,792,089,237,316,195,423,570,985,008,687,907,853,269,984,665,640,564,039,457,584,007,913,129,639,936 colors. I don't even know how to pronounce that number.

The gray color is specified by the *topmost color coordinate*. So if there is no color coordinate in a given (x,y) coordinate, then the color is <span style="background-color: #000000; color: white">000000 - black</span>. If the very tippy top coordinate in a given (x,y) coordinate has a value, then the color is <span style="background-color: #FFFFFF; color: black">FFFFFF - white</span>. If, say, the 127th is the "topmost" then the color is <span style="background-color: #747474; color: white">747474</span>.

Here's a 256 × 10 canvas representation of all the colors, along with the JavaScript necessary to make the colors:

<canvas id="grays" width="256" height="10"></canvas>

<script>
let grays = () => {
    let canvas = document.getElementById('grays')
    let ctx = canvas.getContext('2d')

    for (let i = 0; i < 256; i++) {
        ctx.fillStyle = `rgb(${i},${i},${i})`
        ctx.fillRect(i, 0, 1, 10)
    }
}

let functions = [grays]
</script>

And here's an empty 256 × 256 (i.e. black) canvas, along with the JavaScript to make said canvas:

<canvas id="empty" width="256" height="256"></canvas>

<script>
let empty = () => {
    let canvas = document.getElementById('empty')
    let ctx = canvas.getContext('2d')

    let space = Array.from({length: 256}, 
            () => Array.from({length: 256}, 
            () => Array.from({length: 256}, () => 0)))
   
    for (let x = 0; x < space.length; x++) {
        for (let y = 0; y < space[x].length; y++) {
            let color = space[x][y].reduce((color, position) => (color << 1) + position)
            ctx.fillStyle = `rgb(${color},${color},${color})`
            ctx.fillRect(x, y, 1, 1)
        }
    }
}

functions.push(empty)
</script>

> Note: the `let functions = [grays]` and `functions.push(empty)` at the end of each `script` tag allow me to defer the execution until later.

And now I will show a sphere and three instances of a cube:

### A Sphere

<canvas id="sphere" width="256" height="256"></canvas>

<script>
let sphere = () => {
    let canvas = document.getElementById('sphere')
    let ctx = canvas.getContext('2d')

    let size = 256

    let space = Array.from({length: size}, 
            () => Array.from({length: size},
            () => 0))

    let radiusSquared = Math.floor((size / 2) * (size / 2))
    let center = size / 2

    let isSpherePoint = (x,y,c) => (x - center) * (x - center)
                                     + (y - center) * (y - center) 
                                     + (c - center) * (c - center)
                                     < radiusSquared

    for (let x = 0; x < space.length; x++) {
        for (let y = 0; y < space[x].length; y++) {
            for (let c = 0; c < 256; c++) {
                if (isSpherePoint(x,y,c)) {
                    space[x][y] = Math.max(c, space[x][y])
                }
            }
        }
    }
   
    for (let x = 0; x < space.length; x++) {
        for (let y = 0; y < space[x].length; y++) {
            let color = space[x][y]
            ctx.fillStyle = `rgb(${color},${color},${color})`
            ctx.fillRect(x, y, 1, 1)
        }
    }
}

functions.push(sphere)
</script>

### A Cube - But Staring Straight On

<canvas id="cube" width="256" height="256"></canvas>

<script>
let cube = () => {
    let canvas = document.getElementById('cube')
    let ctx = canvas.getContext('2d')

    let space = Array.from({length: 256}, 
            () => Array.from({length: 256}, 
            () => 0))

    let isCubePoint = (x,y,c) => x > 50 && x < 206
                                && y > 50 && y < 206
                                && c > 50 && c < 206

    for (let x = 0; x < space.length; x++) {
        for (let y = 0; y < space[x].length; y++) {
            for (let c = 0; c < 256; c++) {
                if (isCubePoint(x,y,c)) {
                    space[x][y] = Math.max(c, space[x][y])
                }
            }
        }
    }

    for (let x = 0; x < space.length; x++) {
        for (let y = 0; y < space[x].length; y++) {
            let color = space[x][y]
            ctx.fillStyle = `rgb(${color},${color},${color})`
            ctx.fillRect(x, y, 1, 1)
        }
    }
}

functions.push(cube)
</script>

### A Rotated Cube - But Still Staring Straight On

<canvas id="rotatedCube" width="256" height="256"></canvas>

<script>
let rotatedCube = () => {
    let canvas = document.getElementById('rotatedCube')
    let ctx = canvas.getContext('2d')

    let space = Array.from({length: 256}, 
            () => Array.from({length: 256}, 
            () => 0))

    let center = 256 / 2

    let isCubePoint = (x,y,c) => x > 50 && x < 206
                        && y > 50 && y < 206
                        && c > 50 && c < 206

    let rotatedCoords = (x,y,c) => {
        let tx = x - center
        let ty = y - center
        let tc = c - center

        let rotx = 0.707 * tx - 0.707 * ty + 0 * tc
        let roty = 0.707 * tx + 0.707 * ty + 0 * tc
        let rotc = 0 * tx - 0 * ty + 1 * tc

        let newx = rotx + center
        let newy = roty + center
        let newc = rotc + center

        return {x: Math.floor(newx), y: Math.floor(newy), c: Math.floor(newc)}
    }

    for (let x = 0; x < space.length; x++) {
        for (let y = 0; y < space[x].length; y++) {
            for (let c = 0; c < 256; c++) {
                if (isCubePoint(x,y,c)) {
                    let coords = rotatedCoords(x,y,c)
                    space[coords.x][coords.y] = Math.max(coords.c, space[coords.x][coords.y])
                }
            }
        }
    }

    for (let x = 0; x < space.length; x++) {
        for (let y = 0; y < space[x].length; y++) {
            let color = space[x][y]
            ctx.fillStyle = `rgb(${color},${color},${color})`
            ctx.fillRect(x, y, 1, 1)
        }
    }
}

functions.push(rotatedCube)
</script>

## A Cube Rotated 45 on All Three Axis

<canvas id="rotatedCube2" width="256" height="256"></canvas>

<script>
let rotatedCube2 = () => {
    let canvas = document.getElementById('rotatedCube2')
    let ctx = canvas.getContext('2d')

    let space = Array.from({length: 256}, 
            () => Array.from({length: 256}, 
            () => 0))

    let center = 256 / 2

    let isCubePoint = (x,y,c) => x > 50 && x < 206
                        && y > 50 && y < 206
                        && c > 50 && c < 206

    let rotatedCoords = (x,y,c) => {
        let tx = x - center
        let ty = y - center
        let tc = c - center

        let rotx = 0.473 * tx - 0.301 * ty + 0.828 * tc
        let roty = 0.828 * tx + 0.473 * ty - 0.301 * tc
        let rotc = -0.301 * tx - 0.828 * ty + 0.473 * tc

        let newx = rotx + center
        let newy = roty + center
        let newc = rotc + center

        return {x: Math.floor(newx), y: Math.floor(newy), c: Math.floor(newc)}
    }

    for (let x = 0; x < space.length; x++) {
        for (let y = 0; y < space[x].length; y++) {
            for (let c = 0; c < 256; c++) {
                if (isCubePoint(x,y,c)) {
                    let coords = rotatedCoords(x,y,c)
                    space[coords.x][coords.y] = Math.max(coords.c, space[coords.x][coords.y])
                }
            }
        }
    }

    for (let x = 0; x < space.length; x++) {
        for (let y = 0; y < space[x].length; y++) {
            let color = space[x][y]
            ctx.fillStyle = `rgb(${color},${color},${color})`
            ctx.fillRect(x, y, 1, 1)
        }
    }
}

functions.push(rotatedCube2)
</script>

### The Deferred Execution

Execution is defered so I can have the following style tag applied first:

<style>
article div.entry canvas {
    border: 1px solid black;
}

article div.entry script, article div.entry style {
    display: block;
    white-space: pre;
    font-family:'Courier New', Courier, monospace;
}

article div.entry script:before {
    content: "<script>";
}

article div.entry script:after {
    content: "</script>";
}

article div.entry style:before {
    content: "<style>";
}

article div.entry style:after {
    content: "<\/style>";
}
</style>

And then execute:

<script>
functions.forEach(f => f())
</script>

## Final Comments

Interestingly enough, when more than one color depth was visible, it appeared, at least to me, to be three-dimensional in the "normal" three spatial dimensions.

Making something darker the further away it is isn't a new 3D graphics technique. In this [basic ray caster demo](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/A_basic_ray-caster) on Mozilla's website, the author notes that they "blended with a darker version of the color according to the distance to the wall" almost in passing, as if it's common knowledge.

So, yeah, nothing new there.

## Final Comment

To refresh my matrix multiplication math, I used this [3D Rotation Converter](https://www.andre-gaschler.com/rotationconverter/) and this [Matrix Multiplication Calculator](https://matrix.reshish.com/multCalculation.php).