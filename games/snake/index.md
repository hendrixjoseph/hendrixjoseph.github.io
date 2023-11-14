---
layout: game
title: Snake Game
script: snake
excerpt: Snake Game
---

<div id="content">
    <div id="canvas"></div>
    <nav class="d-pad">
        <button class="up">🞁</button>
        <button class="right">🞂</button>
        <button class="down">🞃</button>
        <button class="left">🞀</button>
    </nav>
    <div id="controls">
        <span>Score: <span id="score">0</span></span>
        <span>Speed: <span id="speed">10</span></span>
        <button id="fullScreenButton">Full Screen</button>
    </div>
    <button id="installButton" hidden>Install</button>
</div>

## How to Play

Welcome to my Snake Game! In this classic arcade-style experience, your mission is to guide the hungry snake to consume as much food as possible without colliding with walls or itself. Here's a quick guide on how to play:

## Objective

The primary goal is to accumulate points by eating different types of food that appear on the game board. The snake will either grow longer or move faster with each meal, making maneuvering a bit trickier. Be cautious, though, as running into walls or your snake's own tail ends the game. Strive for a high score and challenge yourself to beat it in subsequent rounds.

## Controls

* Arrow Keys: Use the arrow keys (Up, Down, Left, Right) to control the snake's direction.
* Alternatively, use the on-screen buttons. Click the directional buttons to set the snake's direction.
* F Key: Press the "F" key or click the "Full Screen" button to toggle full screen mode.
* Click anywhere when the game is over to start a new game.

## Types of Food

### Red

* Appearance: Red star.
* Effect: Increases the snake's speed, allowing for quicker movements. Also increases the amount of points green stars give you.

### Green

* Appearance: Green star.
* Effect: Adds points to your score and makes your snake longer. The faster your snake, the more points you earn.

## Game Over

It's game over if any of the following occurs:

* The snake collides with itself.
* The snake collides with the game board's walls.

## Tips for Success

* Strategize: Plan your moves ahead to avoid trapping yourself.
* Speed Management: Balancing speed is crucial; don't make the snake too fast to control.
* Score Maximization: Prioritize scoring food for a higher overall score.

Have fun and may your snake grow long and prosperous! 🐍