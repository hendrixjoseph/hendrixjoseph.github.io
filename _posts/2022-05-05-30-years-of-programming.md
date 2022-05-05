---
layout: post
title: 30 Years of Programming & My First Programs
tags: [programming]
image: /images/ms-dos/qbasic-screenshot.png
---

The other day I was thinking about how much experience I have programming. After all, that's a common question that comes up in job interviews.

Which led me to wonder how long ago I wrote my first program. That was a very long time ago - after all, I've been using computers since I was in the single digits. I'm sure I also wrote my first program when I was in the single digits.

I know I didn't program on the first computer I ever used - a Tandy (probably a [Tandy 1000](https://en.wikipedia.org/wiki/Tandy_1000)) that I remember my grandpa getting. It didn't have a hard drive - and what program we ran depended on what floppy disk (and I'm talking about 5'¼' floppies that were actually *floppy*) we put in it. The only things we did on that thing were play games like Hangman and T-Road, or print out birthday cards on its dot matrix printer.

{% include image.html src="/images/tandy-hangman.png" alt="Hangman on the Tandy" caption="Hangman on the Tandy. Source <http://toastytech.com/guis/deskmate3.html>" %}

It wasn't until my mom brought home a computer from her work that things began to get interesting. It was a PC in the 86 series - either a 286, 386, or 486 or even all of the above since they upgraded her over the years - loaded with MS-DOS. Eventually, it even had [Windows 3.1](https://en.wikipedia.org/wiki/Windows_3.1x).

In addition to playing games and visiting [BBSs](https://en.wikipedia.org/wiki/Bulletin_board_system), I liked to poke around the file system. I noticed there were three types of files that ran: .exe files, .com files, and .bat files. I also knew I could edit text files with the EDIT command.

So I opened up an EXE file with the EDIT command, only to be greeted with a bunch of gobbledygook:

{% include image.html src="/images/ms-dos/move.exe-in-edit.exe-screenshot.png" alt="An EXE file open in the MS-DOS EDIT program." caption="An EXE file open in the MS-DOS EDIT program. Screenshot taken from <https://www.pcjs.org/software/pcx86/sys/dos/microsoft/6.22/>" %}

This didn't deter me - instead, I made my own EXE file with a bunch of gobbledygook.

When I ran the program, the computer reset. I thought *I just wrote a program that resets the computer!*

So is this the first program I wrote? Was it even a program?

I don't know the answer to that, but I do know I also took a peek at the BAT files.

BAT files - or more accurately MS-DOS Batch files - are simply a list of command prompt commands. BAT files still exist today - you can script standard command prompt commands - or even PowerShell commands. But what made this like "programming" is that certain commands such as IF that were useless if you were typing yourself, but valuable when scripting.

I remember making a few text-based games where you can go to only a few places. And one of those places was grandma's house.

Finally, I stumbled across QBasic. An actual honest-to-goodness programming language.

{% include image.html src="/images/ms-dos/qbasic-screenshot.png" alt="QBasic's splash screen." caption="QBasic's splash screen. Screenshot taken from <https://www.pcjs.org/software/pcx86/sys/dos/microsoft/6.22/>" %}

After going through a Basic programming book over a couple of nights (its title was something like *Basic Programming for Ages 1 through 100*) I was simply fascinated by the things I could do.

One game I made was a simple number guessing game. The computer chose a number between one and a hundred, and you had to guess what it was in a certain number of guesses. Each guess and the computer would tell you if the number was higher or lower. (Binary search, anyone?)

My most ambitious project involved an animation of Mario walking across the screen. And I say ambitious because I never got it to work quite right - QBasic could only output text, so I drew each frame only to clear the screen and draw the next frame. Frames per second? More like frames per minute.

Onto the original question - how long ago was this? It was sometime after my mom remarried (so after July 1992) but before [Windows 95](https://en.wikipedia.org/wiki/Windows_95) (so before August 1995, although we probably didn't get it right away). This means I was somewhere between 8 and 11.

As of today, that could mean I have upwards of 30 years of programming experience.
