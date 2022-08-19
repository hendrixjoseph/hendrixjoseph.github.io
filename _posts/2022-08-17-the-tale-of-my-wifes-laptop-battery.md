---
layout: post
title: The Tale of my Wife's Laptop Battery
tags: [fitness, math]
keywords: [laptop, battery, hp, hp pavilion]
---

Many moons ago - back in 2017 I think - I bought my wife an [HP Pavilion](https://www.amazon.com/s?k=HP+Pavilion&tag=hendrixjoseph-20). Or rather we bought it together for her.

For the most part, she's liked it. She has had a couple of complaints - mainly that it seemed slow at times.

After making sure she closed all 100 or so browser tabs, I maxed out her [RAM](https://www.amazon.com/s?k=HP+Pavilion+ram&rh=n%3A17923671011%2Cn%3A172500&tag=hendrixjoseph-20) and later upgraded here hard drive to a [solid state drive](https://www.amazon.com/gp/product/B089C73T72?tag=hendrixjoseph-20).

Most recently - and I'm impressed she noticed - she said her battery percentage was decreasing.

The thing is - the laptop is almost always plugged in. There's no reason is should ever be that much less than 100%.

But despite being always plugged in, the percentage started to creep down. 75%. 50%. 25%.

It didn't go down as fast as if it weren't plugged in - this was over weeks and months.

So I ran the PowerShell command `powercfg /BATTERYREPORT` and it generated the following HTML:

<iframe width="700" height="500" sandbox="allow-scripts" srcdoc="<!DOCTYPE html>
<html xmlns='http://www.w3.org/1999/xhtml' xmlns:ms='urn:schemas-microsoft-com:xslt' xmlns:bat='http://schemas.microsoft.com/battery/2012' xmlns:js='http://microsoft.com/kernel'>
<head>
<meta http-equiv='X-UA-Compatible' content='IE=edge'/>
<meta name='ReportUtcOffset' content='-4:00'/>
<title>Battery report</title>
<style>
body {
font-family: Segoe UI Light;
letter-spacing: 0.02em;
background-color: #181818;
color: #F0F0F0;
margin-left: 5.5em;
}
h1 {
color: #11D8E8;
font-size: 42pt;
}
h2 {
font-size: 15pt;
color: #11EEF4;
margin-top: 4em;
margin-bottom: 0em;
letter-spacing: 0.08em;
}
td {
padding-left: 0.3em;
padding-right: 0.3em;
}
.nobatts {
font-family: Segoe UI Semibold;
background: #272727;
color: #ACAC60;
font-size: 13pt;
padding-left:0.4em;
padding-right:0.4em;
padding-top:0.3em;
padding-bottom:0.3em;
}
.explanation {
color: #777777;
font-size: 12pt;
margin-bottom: 1em;
}
.explanation2 {
color: #777777;
font-size: 12pt;
margin-bottom: 0.1em;
}
table {
border-width: 0;
table-layout: fixed;
font-family: Segoe UI Light;
letter-spacing: 0.02em;
background-color: #181818;
color: #f0f0f0;
}
.even { background: #272727; }
.odd { background: #1E1E1E; }
.even.suspend { background: #1A1A28; }
.odd.suspend { background: #1A1A2C; }
thead {
font-family: Segoe UI Semibold;
font-size: 85%;
color: #BCBCBC;
}
text {
font-size: 12pt;
font-family: Segoe UI Light;
fill: #11EEF4;
}
.centered { text-align: center; }
.label {
font-family: Segoe UI Semibold;
font-size: 85%;
color: #BCBCBC;
}
.dc.even { background: #40182C; }
.dc.odd { background: #30141F; }
td.colBreak {
padding: 0;
width: 0.15em;
}
td.state { text-align: center; }
td.hms {
font-family: Segoe UI Symbol;
text-align: right;
padding-right: 3.4em;
}
td.dateTime { font-family: Segoe UI Symbol; }
td.nullValue { text-align: center; }
td.percent {
font-family: Segoe UI Symbol;
text-align: right;
padding-right: 2.5em;
}
col:first-child { width: 13em; }
col.col2 { width: 10.4em; }
col.percent { width: 7.5em; }
td.mw {
text-align: right;
padding-right: 2.5em;
}
td.acdc { text-align: center; }
span.date {
display: inline-block;
width: 5.5em;
}
span.time {
text-align: right;
width: 4.2em;
display: inline-block;
}
text { font-family: Segoe UI Symbol; }
.noncontigbreak {
height: 0.3em;
background-color: #1A1A28;
}
</style>
<script>
// Formats a number using the current locale (to handle the 1000's separator).
// The result is rounded so no decimal point is shown.
function numberToLocaleString(value) {
var localeString = Math.round(parseFloat(value + '')).toLocaleString();
return localeString.substring(0, localeString.indexOf('.'));
}
function padLeft(number, length) {
var str = '' + number;
while (str.length < length) {
str = '0' + str;
}
return str;
}
// Returns the number of milliseconds between 2 date-times represented as strings.
function msBetween(startTime, endTime) {
return startTime > endTime
? msBetween(endTime, startTime)
: parseDateTime(endTime) - parseDateTime(startTime);
}
var dateFormat = /(\d{4})-(\d{2})-(\d{2})[T](\d{2}):(\d{2}):(\d{2})/
// Parses a date-time string and returns a Date (i.e. number of milliseconds)
function parseDateTime(value) {
if (!value) {
return 0;
}
var match = dateFormat.exec(value)
if (!match) {
return 0;
}
return Date.parse(match[1] + '/' + match[2] + '/' +
match[3] + ' ' + match[4] + ':' +
match[5] + ':' + match[6])
}
// Parses just the date portion of a date-time string and returns a Date
// (i.e. number of milliseconds)
function parseDate(value) {
if (!value) {
return 0;
}
var match = dateFormat.exec(value)
if (!match) {
return 0;
}
return Date.parse(match[1] + '/' + match[2] + '/' + match[3])
}
var durationFormat = /P((\d+)D)?T((\d+)H)?((\d+)M)?(\d+)S/
// Convert a string of the form P10DT1H15M40S to a count of milliseconds
function parseDurationToMs(value) {
var match = durationFormat.exec(value)
if (!match) {
return 0
}
var days = parseInt(match[2] || '0');
var hrs = parseInt(match[4] || '0');
var mins = parseInt(match[6] || '0');
var secs = parseInt(match[7] || '0');
return ((((((days * 24) + hrs) * 60) + mins) * 60) +  secs) * 1000;
}
// Converts milliseconds to days
function msToDays(ms) {
return (ms / 1000 / 60 / 60 / 24);
}
function daysToMs(days) {
return (days * 24 * 60 * 60 * 1000);
}
// Formats a number of milliseconds as h:mm:ss
function formatDurationMs(value) {
var ms = parseInt(value);
var secs = ms / 1000;
var mins = secs / 60;
var hrs = Math.floor(mins / 60);
mins = Math.floor(mins % 60);
secs = Math.floor(secs % 60);
return hrs + ':' + padLeft(mins,2) + ':' + padLeft(secs,2);
}
// Converts a millisecond timestamp to a day and month string
// Note: dayOffset is forward from date.
function dateToDayAndMonth(ms, dayOffset) {
var adjustedDate = new Date(ms + (dayOffset * 24 * 60 * 60 * 1000));
return padLeft(adjustedDate.getMonth() + 1, 2) + '-' +
padLeft(adjustedDate.getDate(), 2);
}
// Takes a millisecond timestamp and returns a new millisecond timestamp
// rounded down to the current day.
function dateFloor(ms) {
var dt = new Date(ms);
return Date.parse(dt.getFullYear() + '/' + (dt.getMonth() + 1) + '/' + dt.getDate());
}
Timegraph = {
axisTop: 9.5,
axisRight: 24.5,
axisBottom: 25.5,
axisLeft: 25.5,
ticks: 10,
// Maximum number of 24 hour ticks for showing 12 and 6 hour ticks
ticks12Hour: 8,
ticks6Hour: 4,
// Shading
lineColor: '#B82830',
shadingColor: '#4d1d35',
precompute: function (graph) {
var canvas = graph.canvas;
var data = graph.data;
var min = 0;
var max = 0;
graph.height = canvas.height - Timegraph.axisTop - Timegraph.axisBottom;
graph.width = canvas.width - Timegraph.axisLeft - Timegraph.axisRight;
for (var i = 0; i < data.length; i++) {
data[i].t0 = parseDateTime(data[i].x0);
data[i].t1 = parseDateTime(data[i].x1);
if (i == 0) {
min = data[i].t0;
max = data[i].t1;
}
if (data[i].t0 < min) {
min = data[i].t0;
}
if (data[i].t1 > max) {
max = data[i].t1;
}
data[i].yy0 =
Timegraph.axisTop + graph.height - data[i].y0 * graph.height;
data[i].yy1 =
Timegraph.axisTop + graph.height - data[i].y1 * graph.height;
}
if (graph.startTime != null) {
graph.startMs = parseDateTime(graph.startTime);
} else {
graph.startMs = min;
}
graph.endMs = max;
graph.durationMs = max - min;
},
drawFrame: function (graph) {
var canvas = graph.canvas;
var context = graph.context;
graph.width =
canvas.width - Timegraph.axisRight - Timegraph.axisLeft;
graph.height =
canvas.height - Timegraph.axisTop - Timegraph.axisBottom;
context.beginPath();
context.moveTo(Timegraph.axisLeft, Timegraph.axisTop);
context.lineTo(Timegraph.axisLeft + graph.width,
Timegraph.axisTop);
context.lineTo(Timegraph.axisLeft + graph.width,
Timegraph.axisTop + graph.height);
context.lineTo(Timegraph.axisLeft,
Timegraph.axisTop + graph.height);
context.lineTo(Timegraph.axisLeft, Timegraph.axisTop);
context.strokeStyle = '#c0c0c0';
context.stroke();
},
drawRange: function (graph) {
var canvas = graph.canvas;
var context = graph.context;
context.font = '12pt Segoe UI';
context.fillStyle = '#00b0f0';
context.fillText('%', 0, Timegraph.axisTop + 5, Timegraph.axisLeft);
var tickSpacing = graph.height / 10;
var offset = Timegraph.axisTop + tickSpacing;
var tickValue = 90;
for (var i = 0; i < 9; i++) {
context.beginPath();
context.moveTo(Timegraph.axisLeft, offset);
context.lineTo(Timegraph.axisLeft + graph.width,
offset);
context.stroke();
context.fillText(tickValue.toString(),
0,
offset + 5,
Timegraph.axisLeft);
offset += tickSpacing;
tickValue -= 10;
}
},
drawDomain: function (graph, start, end) {
var canvas = graph.canvas;
var context = graph.context;
var data = graph.data;
var duration = end - start;
if ((end < start)) {
return;
}
var startDay = dateFloor(start);
var t0 = startDay;
var t1 = dateFloor(end);
var dayOffset = 0;
if (start > t0) {
t0 = t0 + daysToMs(1);
dayOffset++;
}
if (t0 >= t1) {
return;
}
var increment =
Math.max(Math.floor((t1 - t0) / daysToMs(Timegraph.ticks)), 1);
var incrementMs = daysToMs(increment);
var spacing = (incrementMs / duration) * graph.width;
var offset = (t0 - start) / duration;
var ticksCount = Math.floor((t1 - t0) / incrementMs);
for (offset = offset * graph.width + Timegraph.axisLeft;
offset < (graph.width + Timegraph.axisLeft);
offset += spacing) {
context.beginPath();
context.moveTo(offset, Timegraph.axisTop);
context.lineTo(offset, Timegraph.axisTop + graph.height);
context.stroke();
context.fillText(dateToDayAndMonth(startDay, dayOffset),
offset,
Timegraph.axisTop + graph.height + 15,
spacing);
dayOffset += increment;
}
},
plot: function (graph, start, end) {
var canvas = graph.canvas;
var context = graph.context
var data = graph.data;
if ((end < start)) {
return;
}
var duration = end - start;
Timegraph.drawDomain(graph, start, end);
context.fillStyle = Timegraph.shadingColor;
for (var i = 0; i < data.length - 1; i++) {
if ((data[i].t0 < start) || (data[i].t0 > end) ||
(data[i].t1 > end)) {
continue;
}
var x1 = (data[i].t0 - start) / duration;
x1 = x1 * graph.width + Timegraph.axisLeft;
var x2 = (data[i].t1 - start) / duration;
x2 = x2 * graph.width + Timegraph.axisLeft;
context.globalAlpha = 0.3;
context.fillRect(x1, Timegraph.axisTop, (x2 - x1), graph.height);
context.globalAlpha = 1;
context.beginPath();
context.strokeStyle = Timegraph.lineColor;
context.lineWidth = 1.5;
context.moveTo(x1, data[i].yy0);
context.lineTo(x2, data[i].yy1);
context.stroke();
}
},
draw: function (graph) {
var canvas = document.getElementById(graph.element);
if (canvas == null) {
return;
}
var context = canvas.getContext('2d');
if (context == null) {
return;
}
graph.width = 0;
graph.height = 0;
graph.context = context;
graph.canvas = canvas;
Timegraph.precompute(graph);
Timegraph.drawFrame(graph);
Timegraph.drawRange(graph);
Timegraph.plot(graph, graph.startMs, graph.endMs);
}
};
drainGraphData = [
];
function main() {
Timegraph.draw({
element: 'drain-graph',
data: drainGraphData,
startTime: '2022-06-22T20:23:01',
endTime: '2022-06-25T20:23:09',
});
}
if (window.addEventListener != null) {
window.addEventListener('load', main, false);
} else if (window.attachEvent != null) {
window.attachEvent('onload', main);
}
</script>
</head>
<body>
<h1>Battery report</h1>
<table style='margin-bottom: 6em;'><col/>
<tr><td class='label'>COMPUTER NAME</td><td>BETH</td></tr><tr><td class='label'>SYSTEM PRODUCT NAME</td><td>HP HP Pavilion Notebook</td></tr>
<tr><td class='label'>BIOS</td><td>F.80 06/14/2016</td></tr>
<tr><td class='label'>OS BUILD</td><td>19041.1.amd64fre.vb_release.191206-1406</td></tr>
<tr><td class='label'>PLATFORM ROLE</td><td>Mobile</td></tr>
<tr><td class='label'>CONNECTED STANDBY</td><td>Not supported</td></tr>
<tr><td class='label'>REPORT TIME</td><td class='dateTime'><span class='date'>2022-06-25 </span><span class='time'>20:23:09</span></td></tr>
</table>
<h2>Installed batteries</h2>
<div class='explanation'>Information about each currently installed battery</div>
<table>
<colgroup><col style='width: 15em;'/><col style='width: 14em;'/></colgroup>
<thead><tr><td> </td><td>BATTERY</td></tr></thead>
<tr><td><span class='label'>NAME</span></td><td>Primary</td></tr><tr><td><span class='label'>MANUFACTURER</span></td><td>Hewlett-Packard</td></tr>
<tr><td><span class='label'>SERIAL NUMBER</span></td><td>-</td></tr>
<tr><td><span class='label'>CHEMISTRY</span></td><td>LION</td></tr><tr><td><span class='label'>DESIGN CAPACITY</span></td><td>24,627 mWh</td></tr>
<tr style='height:0.4em;'></tr><tr><td><span class='label'>FULL CHARGE CAPACITY</span></td><td>24,627 mWh</td></tr>
<tr><td><span class='label'>CYCLE COUNT</span></td><td>-</td></tr>
</table>
<h2>Recent usage</h2>
<div class='explanation'>
Power states over the last 3 days
</div>
<table>
<colgroup><col/><col class='col2'/><col style='width: 4.2em;'/><col class='percent'/><col style='width: 11em;'/></colgroup>
<thead>
<tr><td>START TIME</td><td class='centered'>STATE</td><td class='centered'>SOURCE</td><td colspan='2' class='centered'>CAPACITY REMAINING</td></tr>
</thead>
<tr class='even  1'><td class='dateTime'><span class='date'>2022-06-22</span><span class='time'>20:54:00</span></td><td class='state'>Active</td><td class='acdc'>AC</td><td class='percent'>10 %</td><td class='mw'>2,368 mWh</td></tr>
<tr class='odd  2'><td class='dateTime'><span class='date'>2022-06-25 </span><span class='time'>20:23:01</span></td><td class='state'>Report generated</td><td class='acdc'>AC</td><td class='percent'>10 %</td><td class='mw'>2,368 mWh</td></tr>
</table>
<h2>Battery usage</h2>
<div class='explanation'>
Battery drains over the last 3 days
</div>
<canvas id='drain-graph' width='864' height='400'></canvas>
<table><colgroup><col/><col class='col2'/><col style='width: 10em;'/><col class='percent'/><col style='width: 11em;'/></colgroup><thead><tr><td>
START TIME
</td><td class='centered'>
STATE
</td><td class='centered'>
DURATION
</td><td class='centered' colspan='2'>
ENERGY DRAINED
</td></tr></thead><tr class='even'><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr></table><h2>
Usage history
</h2><div class='explanation2'>
History of system usage on AC and battery
</div><table><colgroup><col/><col class='col2'/><col style='width: 10em;'/><col style=''/><col style='width: 10em;'/><col style='width: 10em;'/><col style=''/></colgroup>
<thead>
<tr><td> </td><td colspan='2' class='centered'>BATTERY DURATION</td><td class='colBreak'> </td><td colspan='3' class='centered'>AC DURATION</td></tr>
<tr><td>PERIOD</td><td class='centered'>ACTIVE</td><td class='centered'>CONNECTED STANDBY</td><td class='colBreak'> </td><td class='centered'>ACTIVE</td><td class='centered'>CONNECTED STANDBY</td></tr>
</thead>
<tr class='even  1'><td class='dateTime'>2017-07-03 - 2017-07-09</td><td class='hms'>0:00:09</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>22:45:16</td><td class='nullValue'>-</td></tr><tr class='odd  2'><td class='dateTime'>2017-07-09
- 2017-07-16</td><td class='hms'>0:12:32</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>22:03:57</td><td class='nullValue'>-</td></tr><tr class='even  3'><td class='dateTime'>2017-07-16
- 2017-07-23</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>15:53:12</td><td class='nullValue'>-</td></tr>
<tr class='odd  4'><td class='dateTime'>2017-07-23
- 2017-07-30</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>14:43:42</td><td class='nullValue'>-</td></tr>
<tr class='even  5'><td class='dateTime'>2017-07-30
- 2017-08-06</td><td class='hms'>3:05:07</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>10:36:48</td><td class='nullValue'>-</td></tr>
<tr class='odd  6'><td class='dateTime'>2017-08-06
- 2017-08-19</td><td class='hms'>0:14:09</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>12:36:18</td><td class='nullValue'>-</td></tr>
<tr class='even  7'><td class='dateTime'>2017-08-19
- 2017-08-24</td><td class='hms'>0:37:43</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr class='odd  8'><td class='dateTime'>2017-08-24
- 2017-08-27</td><td class='hms'>0:28:35</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>1:36:59</td><td class='nullValue'>-</td></tr>
<tr class='even  9'><td class='dateTime'>2017-08-27
- 2017-09-03</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>1:44:51</td><td class='nullValue'>-</td></tr>
<tr class='odd  10'><td class='dateTime'>2017-09-03
- 2017-09-10</td><td class='hms'>0:01:05</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>1:46:29</td><td class='nullValue'>-</td></tr>
<tr class='even  11'><td class='dateTime'>2017-09-10
- 2017-09-24</td><td class='hms'>8:35:18</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>33:53:06</td><td class='nullValue'>-</td></tr>
<tr class='odd  12'><td class='dateTime'>2017-09-24
- 2017-10-22</td><td class='hms'>3:34:13</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:27:25</td><td class='nullValue'>-</td></tr>
<tr class='even  13'><td class='dateTime'>2017-10-22
- 2017-11-06</td><td class='hms'>6:38:13</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:37:49</td><td class='nullValue'>-</td></tr>
<tr class='odd  14'><td class='dateTime'>2017-11-06
- 2017-11-12</td><td class='hms'>7:02:04</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr class='even  15'><td class='dateTime'>2017-11-12
- 2017-11-20</td><td class='hms'>7:44:45</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:40:22</td><td class='nullValue'>-</td></tr>
<tr class='odd  16'><td class='dateTime'>2017-11-20
- 2017-11-26</td><td class='hms'>22:37:37</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>1:48:40</td><td class='nullValue'>-</td></tr>
<tr class='even  17'><td class='dateTime'>2017-11-26
- 2017-12-03</td><td class='hms'>6:12:10</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:32:39</td><td class='nullValue'>-</td></tr>
<tr class='odd  18'><td class='dateTime'>2017-12-03
- 2017-12-10</td><td class='hms'>12:22:46</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>1:42:10</td><td class='nullValue'>-</td></tr>
<tr class='even  19'><td class='dateTime'>2017-12-10
- 2017-12-17</td><td class='hms'>21:45:34</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:10:23</td><td class='nullValue'>-</td></tr>
<tr class='odd  20'><td class='dateTime'>2017-12-17
- 2017-12-26</td><td class='hms'>2:37:41</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>25:13:44</td><td class='nullValue'>-</td></tr>
<tr class='even  21'><td class='dateTime'>2017-12-26
- 2018-01-01</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>5:10:16</td><td class='nullValue'>-</td></tr>
<tr class='odd  22'><td class='dateTime'>2018-01-01
- 2018-01-07</td><td class='hms'>26:38:12</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>49:53:01</td><td class='nullValue'>-</td></tr>
<tr class='even  23'><td class='dateTime'>2018-01-07
- 2018-01-14</td><td class='hms'>0:35:45</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>9:44:08</td><td class='nullValue'>-</td></tr>
<tr class='odd  24'><td class='dateTime'>2018-01-14
- 2018-01-21</td><td class='hms'>2:15:47</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>7:21:27</td><td class='nullValue'>-</td></tr>
<tr class='even  25'><td class='dateTime'>2018-01-21
- 2018-01-28</td><td class='hms'>27:00:36</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>79:12:39</td><td class='nullValue'>-</td></tr>
<tr class='odd  26'><td class='dateTime'>2018-01-28
- 2018-02-04</td><td class='hms'>25:13:48</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>91:15:39</td><td class='nullValue'>-</td></tr>
<tr class='even  27'><td class='dateTime'>2018-02-04
- 2018-02-11</td><td class='hms'>18:11:35</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>102:47:13</td><td class='nullValue'>-</td></tr>
<tr class='odd  28'><td class='dateTime'>2018-02-11
- 2018-02-18</td><td class='hms'>0:34:24</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>13:54:44</td><td class='nullValue'>-</td></tr>
<tr class='even  29'><td class='dateTime'>2018-02-18
- 2018-02-25</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>7:10:56</td><td class='nullValue'>-</td></tr>
<tr class='odd  30'><td class='dateTime'>2018-02-25
- 2018-03-04</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>13:01:57</td><td class='nullValue'>-</td></tr>
<tr class='even  31'><td class='dateTime'>2018-03-04
- 2018-03-11</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>30:11:52</td><td class='nullValue'>-</td></tr>
<tr class='odd  32'><td class='dateTime'>2018-03-11
- 2018-03-18</td><td class='hms'>0:35:22</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>51:25:28</td><td class='nullValue'>-</td></tr>
<tr class='even  33'><td class='dateTime'>2018-03-18
- 2018-03-25</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>9:28:14</td><td class='nullValue'>-</td></tr>
<tr class='odd  34'><td class='dateTime'>2018-03-25
- 2018-04-02</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:51:46</td><td class='nullValue'>-</td></tr>
<tr class='even  35'><td class='dateTime'>2018-04-02
- 2018-04-08</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:52:25</td><td class='nullValue'>-</td></tr>
<tr class='odd  36'><td class='dateTime'>2018-04-08
- 2018-04-15</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>13:57:43</td><td class='nullValue'>-</td></tr>
<tr class='even  37'><td class='dateTime'>2018-04-15
- 2018-04-22</td><td class='hms'>0:18:28</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>24:50:39</td><td class='nullValue'>-</td></tr>
<tr class='odd  38'><td class='dateTime'>2018-04-22
- 2018-04-30</td><td class='hms'>0:20:12</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>32:36:30</td><td class='nullValue'>-</td></tr>
<tr class='even  39'><td class='dateTime'>2018-04-30
- 2018-05-07</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>142:43:18</td><td class='nullValue'>-</td></tr>
<tr class='odd  40'><td class='dateTime'>2018-05-07
- 2018-05-13</td><td class='hms'>1:27:47</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>206:52:17</td><td class='nullValue'>-</td></tr>
<tr class='even  41'><td class='dateTime'>2018-05-13
- 2018-05-21</td><td class='hms'>2:48:34</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>14:36:13</td><td class='nullValue'>-</td></tr>
<tr class='odd  42'><td class='dateTime'>2018-05-21
- 2018-05-27</td><td class='hms'>0:55:51</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>5:29:04</td><td class='nullValue'>-</td></tr>
<tr class='even  43'><td class='dateTime'>2018-05-27
- 2018-06-03</td><td class='hms'>10:15:07</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>223:57:51</td><td class='nullValue'>-</td></tr>
<tr class='odd  44'><td class='dateTime'>2018-06-03
- 2018-06-11</td><td class='hms'>0:23:24</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>11:12:50</td><td class='nullValue'>-</td></tr>
<tr class='even  45'><td class='dateTime'>2018-06-11
- 2018-06-17</td><td class='hms'>0:24:54</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>8:22:50</td><td class='nullValue'>-</td></tr>
<tr class='odd  46'><td class='dateTime'>2018-06-17
- 2018-06-25</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:44:39</td><td class='nullValue'>-</td></tr>
<tr class='even  47'><td class='dateTime'>2018-06-25
- 2018-07-03</td><td class='hms'>0:56:43</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>1:13:41</td><td class='nullValue'>-</td></tr>
<tr class='odd  48'><td class='dateTime'>2018-07-03
- 2018-07-08</td><td class='hms'>0:17:03</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:26:12</td><td class='nullValue'>-</td></tr>
<tr class='even  49'><td class='dateTime'>2018-07-08
- 2018-07-15</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>6:08:03</td><td class='nullValue'>-</td></tr>
<tr class='odd  50'><td class='dateTime'>2018-07-15
- 2018-07-24</td><td class='hms'>0:14:05</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>1:10:51</td><td class='nullValue'>-</td></tr>
<tr class='even  51'><td class='dateTime'>2018-07-24
- 2018-07-29</td><td class='hms'>2:07:02</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>4:39:18</td><td class='nullValue'>-</td></tr>
<tr class='odd  52'><td class='dateTime'>2018-07-29
- 2018-08-05</td><td class='hms'>2:11:01</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>5:25:34</td><td class='nullValue'>-</td></tr>
<tr class='even  53'><td class='dateTime'>2018-08-05
- 2018-08-15</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:37:48</td><td class='nullValue'>-</td></tr>
<tr class='odd  54'><td class='dateTime'>2018-08-15
- 2018-08-19</td><td class='hms'>6:08:09</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>19:58:50</td><td class='nullValue'>-</td></tr>
<tr class='even  55'><td class='dateTime'>2018-08-19
- 2018-08-26</td><td class='hms'>1:22:14</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>5:15:59</td><td class='nullValue'>-</td></tr>
<tr class='odd  56'><td class='dateTime'>2018-08-26
- 2018-09-02</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:11:39</td><td class='nullValue'>-</td></tr>
<tr class='even  57'><td class='dateTime'>2018-09-02
- 2018-09-10</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:16:09</td><td class='nullValue'>-</td></tr>
<tr class='odd  58'><td class='dateTime'>2018-09-10
- 2018-09-17</td><td class='hms'>0:00:10</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:11:36</td><td class='nullValue'>-</td></tr>
<tr class='even  59'><td class='dateTime'>2018-09-17
- 2018-09-23</td><td class='hms'>0:00:10</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>11:57:02</td><td class='nullValue'>-</td></tr>
<tr class='odd  60'><td class='dateTime'>2018-09-23
- 2018-09-30</td><td class='hms'>0:00:10</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>14:03:55</td><td class='nullValue'>-</td></tr>
<tr class='even  61'><td class='dateTime'>2018-09-30
- 2018-10-07</td><td class='hms'>1:04:20</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:12:51</td><td class='nullValue'>-</td></tr>
<tr class='odd  62'><td class='dateTime'>2018-10-07
- 2018-10-14</td><td class='hms'>2:21:26</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>8:11:41</td><td class='nullValue'>-</td></tr>
<tr class='even  63'><td class='dateTime'>2018-10-14
- 2018-10-28</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>1:26:08</td><td class='nullValue'>-</td></tr>
<tr class='odd  64'><td class='dateTime'>2018-10-28
- 2018-11-04</td><td class='hms'>2:21:26</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>11:02:55</td><td class='nullValue'>-</td></tr>
<tr class='even  65'><td class='dateTime'>2018-11-04
- 2018-11-13</td><td class='hms'>1:00:38</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:53:15</td><td class='nullValue'>-</td></tr>
<tr class='odd  66'><td class='dateTime'>2018-11-13
- 2018-11-19</td><td class='hms'>1:02:12</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:58:58</td><td class='nullValue'>-</td></tr>
<tr class='even  67'><td class='dateTime'>2018-11-19
- 2018-11-25</td><td class='hms'>0:32:29</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:45:05</td><td class='nullValue'>-</td></tr>
<tr class='odd  68'><td class='dateTime'>2018-11-25
- 2018-12-05</td><td class='hms'>0:55:05</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:03:47</td><td class='nullValue'>-</td></tr>
<tr class='even  69'><td class='dateTime'>2018-12-05
- 2018-12-09</td><td class='hms'>1:27:35</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>12:57:45</td><td class='nullValue'>-</td></tr>
<tr class='odd  70'><td class='dateTime'>2018-12-09
- 2018-12-16</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>7:50:36</td><td class='nullValue'>-</td></tr>
<tr class='even  71'><td class='dateTime'>2018-12-16
- 2018-12-24</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>14:08:37</td><td class='nullValue'>-</td></tr>
<tr class='odd  72'><td class='dateTime'>2018-12-24
- 2019-01-01</td><td class='hms'>0:14:49</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>16:21:40</td><td class='nullValue'>-</td></tr>
<tr class='even  73'><td class='dateTime'>2019-01-01
- 2019-01-06</td><td class='hms'>1:12:35</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>27:41:40</td><td class='nullValue'>-</td></tr>
<tr class='odd  74'><td class='dateTime'>2019-01-06
- 2019-01-13</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:15:41</td><td class='nullValue'>-</td></tr>
<tr class='even  75'><td class='dateTime'>2019-01-13
- 2019-01-21</td><td class='hms'>1:50:26</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>83:01:49</td><td class='nullValue'>-</td></tr>
<tr class='odd  76'><td class='dateTime'>2019-01-21
- 2019-01-27</td><td class='hms'>1:23:22</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>1:04:20</td><td class='nullValue'>-</td></tr>
<tr class='even  77'><td class='dateTime'>2019-01-27
- 2019-02-03</td><td class='hms'>0:53:21</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:13:21</td><td class='nullValue'>-</td></tr>
<tr class='odd  78'><td class='dateTime'>2019-02-03
- 2019-02-10</td><td class='hms'>1:18:20</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:49:26</td><td class='nullValue'>-</td></tr>
<tr class='even  79'><td class='dateTime'>2019-02-10
- 2019-02-17</td><td class='hms'>1:01:40</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:07:33</td><td class='nullValue'>-</td></tr>
<tr class='odd  80'><td class='dateTime'>2019-02-17
- 2019-02-26</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:57:13</td><td class='nullValue'>-</td></tr>
<tr class='even  81'><td class='dateTime'>2019-02-26
- 2019-03-05</td><td class='hms'>1:37:02</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>1:02:37</td><td class='nullValue'>-</td></tr>
<tr class='odd  82'><td class='dateTime'>2019-03-05
- 2019-03-15</td><td class='hms'>0:19:54</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr class='even  83'><td class='dateTime'>2019-03-15
- 2019-03-17</td><td class='hms'>2:21:42</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>6:21:44</td><td class='nullValue'>-</td></tr>
<tr class='odd  84'><td class='dateTime'>2019-03-17
- 2019-03-24</td><td class='hms'>0:00:03</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>5:10:57</td><td class='nullValue'>-</td></tr>
<tr class='even  85'><td class='dateTime'>2019-03-24
- 2019-04-01</td><td class='hms'>0:49:54</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>1:23:50</td><td class='nullValue'>-</td></tr>
<tr class='odd  86'><td class='dateTime'>2019-04-01
- 2019-04-07</td><td class='hms'>0:50:10</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>7:24:08</td><td class='nullValue'>-</td></tr>
<tr class='even  87'><td class='dateTime'>2019-04-07
- 2019-04-14</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:31:25</td><td class='nullValue'>-</td></tr>
<tr class='odd  88'><td class='dateTime'>2019-04-14
- 2019-04-21</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:35:52</td><td class='nullValue'>-</td></tr>
<tr class='even  89'><td class='dateTime'>2019-04-21
- 2019-04-28</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:45:57</td><td class='nullValue'>-</td></tr>
<tr class='odd  90'><td class='dateTime'>2019-04-28
- 2019-05-05</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:54:31</td><td class='nullValue'>-</td></tr>
<tr class='even  91'><td class='dateTime'>2019-05-05
- 2019-05-22</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:33:09</td><td class='nullValue'>-</td></tr>
<tr class='odd  92'><td class='dateTime'>2019-05-22
- 2019-05-31</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr class='even  93'><td class='dateTime'>2019-05-31
- 2019-06-02</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>1:48:27</td><td class='nullValue'>-</td></tr>
<tr class='odd  94'><td class='dateTime'>2019-06-02
- 2019-06-09</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr class='even  95'><td class='dateTime'>2019-06-09
- 2019-06-17</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>77:27:16</td><td class='nullValue'>-</td></tr>
<tr class='odd  96'><td class='dateTime'>2019-06-17
- 2019-06-25</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:34:58</td><td class='nullValue'>-</td></tr>
<tr class='even  97'><td class='dateTime'>2019-06-25
- 2019-06-30</td><td class='hms'>0:17:48</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:22:35</td><td class='nullValue'>-</td></tr>
<tr class='odd  98'><td class='dateTime'>2019-06-30
- 2019-07-08</td><td class='hms'>0:55:38</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>6:12:21</td><td class='nullValue'>-</td></tr>
<tr class='even  99'><td class='dateTime'>2019-07-08
- 2019-07-16</td><td class='hms'>1:32:05</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:25:12</td><td class='nullValue'>-</td></tr>
<tr class='odd  100'><td class='dateTime'>2019-07-16
- 2019-07-28</td><td class='hms'>3:02:21</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>9:20:59</td><td class='nullValue'>-</td></tr>
<tr class='even  101'><td class='dateTime'>2019-07-28
- 2019-08-04</td><td class='hms'>0:17:25</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>5:39:11</td><td class='nullValue'>-</td></tr>
<tr class='odd  102'><td class='dateTime'>2019-08-04
- 2019-08-11</td><td class='hms'>3:36:01</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>93:29:07</td><td class='nullValue'>-</td></tr>
<tr class='even  103'><td class='dateTime'>2019-08-11
- 2019-08-20</td><td class='hms'>4:39:15</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>19:03:50</td><td class='nullValue'>-</td></tr>
<tr class='odd  104'><td class='dateTime'>2019-08-20
- 2019-08-26</td><td class='hms'>0:46:37</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>4:52:58</td><td class='nullValue'>-</td></tr>
<tr class='even  105'><td class='dateTime'>2019-08-26
- 2019-09-01</td><td class='hms'>1:37:29</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>16:08:51</td><td class='nullValue'>-</td></tr>
<tr class='odd  106'><td class='dateTime'>2019-09-01
- 2019-09-08</td><td class='hms'>5:30:10</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>60:22:43</td><td class='nullValue'>-</td></tr>
<tr class='even  107'><td class='dateTime'>2019-09-08
- 2019-09-15</td><td class='hms'>0:50:27</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>19:53:41</td><td class='nullValue'>-</td></tr>
<tr class='odd  108'><td class='dateTime'>2019-09-15
- 2019-09-22</td><td class='hms'>0:24:26</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>8:43:38</td><td class='nullValue'>-</td></tr>
<tr class='even  109'><td class='dateTime'>2019-09-22
- 2019-09-29</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>9:50:33</td><td class='nullValue'>-</td></tr>
<tr class='odd  110'><td class='dateTime'>2019-09-29
- 2019-10-06</td><td class='hms'>0:45:36</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>11:08:26</td><td class='nullValue'>-</td></tr>
<tr class='even  111'><td class='dateTime'>2019-10-06
- 2019-10-13</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>9:32:52</td><td class='nullValue'>-</td></tr>
<tr class='odd  112'><td class='dateTime'>2019-10-13
- 2019-10-20</td><td class='hms'>0:33:26</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>13:39:09</td><td class='nullValue'>-</td></tr>
<tr class='even  113'><td class='dateTime'>2019-10-20
- 2019-10-27</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>10:49:34</td><td class='nullValue'>-</td></tr>
<tr class='odd  114'><td class='dateTime'>2019-10-27
- 2019-11-03</td><td class='hms'>0:54:05</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>9:38:47</td><td class='nullValue'>-</td></tr>
<tr class='even  115'><td class='dateTime'>2019-11-03
- 2019-11-10</td><td class='hms'>0:18:39</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>9:14:25</td><td class='nullValue'>-</td></tr>
<tr class='odd  116'><td class='dateTime'>2019-11-10
- 2019-11-17</td><td class='hms'>1:41:11</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>44:44:23</td><td class='nullValue'>-</td></tr>
<tr class='even  117'><td class='dateTime'>2019-11-17
- 2019-11-24</td><td class='hms'>0:19:47</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>30:27:42</td><td class='nullValue'>-</td></tr>
<tr class='odd  118'><td class='dateTime'>2019-11-24
- 2019-12-01</td><td class='hms'>3:35:45</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>82:22:43</td><td class='nullValue'>-</td></tr>
<tr class='even  119'><td class='dateTime'>2019-12-01
- 2019-12-08</td><td class='hms'>3:15:34</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>7:15:04</td><td class='nullValue'>-</td></tr>
<tr class='odd  120'><td class='dateTime'>2019-12-08
- 2019-12-15</td><td class='hms'>8:01:15</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>97:11:25</td><td class='nullValue'>-</td></tr>
<tr class='even  121'><td class='dateTime'>2019-12-15
- 2019-12-22</td><td class='hms'>0:20:21</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>8:44:30</td><td class='nullValue'>-</td></tr>
<tr class='odd  122'><td class='dateTime'>2019-12-22
- 2020-01-03</td><td class='hms'>7:55:03</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>85:13:38</td><td class='nullValue'>-</td></tr>
<tr class='even  123'><td class='dateTime'>2020-01-03
- 2020-01-06</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:27:27</td><td class='nullValue'>-</td></tr>
<tr class='odd  124'><td class='dateTime'>2020-01-06
- 2020-01-13</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:04:12</td><td class='nullValue'>-</td></tr>
<tr class='even  125'><td class='dateTime'>2020-01-13
- 2020-01-20</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>4:31:21</td><td class='nullValue'>-</td></tr>
<tr class='odd  126'><td class='dateTime'>2020-01-20
- 2020-01-26</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>1:41:18</td><td class='nullValue'>-</td></tr>
<tr class='even  127'><td class='dateTime'>2020-01-26
- 2020-02-02</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:04:32</td><td class='nullValue'>-</td></tr>
<tr class='odd  128'><td class='dateTime'>2020-02-02
- 2020-02-09</td><td class='hms'>2:50:33</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>6:37:19</td><td class='nullValue'>-</td></tr>
<tr class='even  129'><td class='dateTime'>2020-02-09
- 2020-02-16</td><td class='hms'>2:50:33</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>8:14:13</td><td class='nullValue'>-</td></tr>
<tr class='odd  130'><td class='dateTime'>2020-02-16
- 2020-02-24</td><td class='hms'>3:40:31</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>1:50:52</td><td class='nullValue'>-</td></tr>
<tr class='even  131'><td class='dateTime'>2020-02-24
- 2020-03-02</td><td class='hms'>3:39:57</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:30:16</td><td class='nullValue'>-</td></tr>
<tr class='odd  132'><td class='dateTime'>2020-03-02
- 2020-03-08</td><td class='hms'>6:21:51</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>7:11:17</td><td class='nullValue'>-</td></tr>
<tr class='even  133'><td class='dateTime'>2020-03-08
- 2020-03-15</td><td class='hms'>1:48:42</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>17:35:18</td><td class='nullValue'>-</td></tr>
<tr class='odd  134'><td class='dateTime'>2020-03-15
- 2020-03-22</td><td class='hms'>1:31:54</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>24:41:47</td><td class='nullValue'>-</td></tr>
<tr class='even  135'><td class='dateTime'>2020-03-22
- 2020-03-29</td><td class='hms'>17:22:17</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>6:59:15</td><td class='nullValue'>-</td></tr>
<tr class='odd  136'><td class='dateTime'>2020-03-29
- 2020-04-05</td><td class='hms'>18:18:38</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>11:24:59</td><td class='nullValue'>-</td></tr>
<tr class='even  137'><td class='dateTime'>2020-04-05
- 2020-04-12</td><td class='hms'>1:09:47</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>9:01:04</td><td class='nullValue'>-</td></tr>
<tr class='odd  138'><td class='dateTime'>2020-04-12
- 2020-04-19</td><td class='hms'>20:52:24</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>34:02:54</td><td class='nullValue'>-</td></tr>
<tr class='even  139'><td class='dateTime'>2020-04-19
- 2020-04-26</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>22:51:39</td><td class='nullValue'>-</td></tr>
<tr class='odd  140'><td class='dateTime'>2020-04-26
- 2020-05-03</td><td class='hms'>22:14:16</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>71:39:40</td><td class='nullValue'>-</td></tr>
<tr class='even  141'><td class='dateTime'>2020-05-03
- 2020-05-10</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>13:40:29</td><td class='nullValue'>-</td></tr>
<tr class='odd  142'><td class='dateTime'>2020-05-10
- 2020-05-17</td><td class='hms'>2:17:16</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>16:03:01</td><td class='nullValue'>-</td></tr>
<tr class='even  143'><td class='dateTime'>2020-05-17
- 2020-05-24</td><td class='hms'>7:53:53</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>27:09:40</td><td class='nullValue'>-</td></tr>
<tr class='odd  144'><td class='dateTime'>2020-05-24
- 2020-05-31</td><td class='hms'>0:35:23</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>9:26:22</td><td class='nullValue'>-</td></tr>
<tr class='even  145'><td class='dateTime'>2020-05-31
- 2020-06-07</td><td class='hms'>0:03:05</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>4:55:57</td><td class='nullValue'>-</td></tr>
<tr class='odd  146'><td class='dateTime'>2020-06-07
- 2020-06-14</td><td class='hms'>9:27:25</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>47:35:36</td><td class='nullValue'>-</td></tr>
<tr class='even  147'><td class='dateTime'>2020-06-14
- 2020-06-21</td><td class='hms'>2:33:15</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:31:47</td><td class='nullValue'>-</td></tr>
<tr class='odd  148'><td class='dateTime'>2020-06-21
- 2020-07-06</td><td class='hms'>3:52:50</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:38:31</td><td class='nullValue'>-</td></tr>
<tr class='even  149'><td class='dateTime'>2020-07-06
- 2020-07-12</td><td class='hms'>5:59:58</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>1:01:35</td><td class='nullValue'>-</td></tr>
<tr class='odd  150'><td class='dateTime'>2020-07-12
- 2020-07-19</td><td class='hms'>5:35:08</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:06:18</td><td class='nullValue'>-</td></tr>
<tr class='even  151'><td class='dateTime'>2020-07-19
- 2020-07-27</td><td class='hms'>3:56:13</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:14:22</td><td class='nullValue'>-</td></tr>
<tr class='odd  152'><td class='dateTime'>2020-07-27
- 2020-08-02</td><td class='hms'>29:31:14</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>20:15:33</td><td class='nullValue'>-</td></tr>
<tr class='even  153'><td class='dateTime'>2020-08-02
- 2020-08-09</td><td class='hms'>0:48:40</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:13:18</td><td class='nullValue'>-</td></tr>
<tr class='odd  154'><td class='dateTime'>2020-08-09
- 2020-08-16</td><td class='hms'>3:23:48</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:10:40</td><td class='nullValue'>-</td></tr>
<tr class='even  155'><td class='dateTime'>2020-08-16
- 2020-08-24</td><td class='hms'>2:21:54</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:10:36</td><td class='nullValue'>-</td></tr>
<tr class='odd  156'><td class='dateTime'>2020-08-24
- 2020-08-31</td><td class='hms'>3:38:51</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:14:13</td><td class='nullValue'>-</td></tr>
<tr class='even  157'><td class='dateTime'>2020-08-31
- 2020-09-09</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:29:46</td><td class='nullValue'>-</td></tr>
<tr class='odd  158'><td class='dateTime'>2020-09-09
- 2020-09-14</td><td class='hms'>10:52:33</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>8:21:46</td><td class='nullValue'>-</td></tr>
<tr class='even  159'><td class='dateTime'>2020-09-14
- 2020-09-20</td><td class='hms'>16:17:26</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>10:02:54</td><td class='nullValue'>-</td></tr>
<tr class='odd  160'><td class='dateTime'>2020-09-20
- 2020-09-28</td><td class='hms'>5:36:33</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:04:28</td><td class='nullValue'>-</td></tr>
<tr class='even  161'><td class='dateTime'>2020-09-28
- 2020-10-06</td><td class='hms'>4:43:26</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:22:13</td><td class='nullValue'>-</td></tr>
<tr class='odd  162'><td class='dateTime'>2020-10-06
- 2020-10-12</td><td class='hms'>67:05:10</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr class='even  163'><td class='dateTime'>2020-10-12
- 2020-10-18</td><td class='hms'>4:33:35</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:08:55</td><td class='nullValue'>-</td></tr>
<tr class='odd  164'><td class='dateTime'>2020-10-18
- 2020-10-28</td><td class='hms'>92:20:19</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>6:54:48</td><td class='nullValue'>-</td></tr>
<tr class='even  165'><td class='dateTime'>2020-10-28
- 2020-11-04</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>1:13:16</td><td class='nullValue'>-</td></tr>
<tr class='odd  166'><td class='dateTime'>2020-11-04
- 2020-11-09</td><td class='hms'>1:41:48</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:13:22</td><td class='nullValue'>-</td></tr>
<tr class='even  167'><td class='dateTime'>2020-11-09
- 2020-11-15</td><td class='hms'>2:01:48</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>1:01:33</td><td class='nullValue'>-</td></tr>
<tr class='odd  168'><td class='dateTime'>2020-11-15
- 2020-11-22</td><td class='hms'>5:56:28</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>1:50:15</td><td class='nullValue'>-</td></tr>
<tr class='even  169'><td class='dateTime'>2020-11-22
- 2020-11-30</td><td class='hms'>0:35:19</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:31:47</td><td class='nullValue'>-</td></tr>
<tr class='odd  170'><td class='dateTime'>2020-11-30
- 2020-12-06</td><td class='hms'>3:30:30</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:31:50</td><td class='nullValue'>-</td></tr>
<tr class='even  171'><td class='dateTime'>2020-12-06
- 2020-12-13</td><td class='hms'>3:04:11</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>23:11:56</td><td class='nullValue'>-</td></tr>
<tr class='odd  172'><td class='dateTime'>2020-12-13
- 2020-12-22</td><td class='hms'>44:00:41</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>1:19:01</td><td class='nullValue'>-</td></tr>
<tr class='even  173'><td class='dateTime'>2020-12-22
- 2020-12-27</td><td class='hms'>0:48:53</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr class='odd  174'><td class='dateTime'>2020-12-27
- 2021-01-06</td><td class='hms'>2:13:13</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr class='even  175'><td class='dateTime'>2021-01-06
- 2021-01-10</td><td class='hms'>2:24:09</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr class='odd  176'><td class='dateTime'>2021-01-10
- 2021-01-17</td><td class='hms'>11:27:04</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>1:36:38</td><td class='nullValue'>-</td></tr>
<tr class='even  177'><td class='dateTime'>2021-01-17
- 2021-01-24</td><td class='hms'>4:00:42</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>1:30:01</td><td class='nullValue'>-</td></tr>
<tr class='odd  178'><td class='dateTime'>2021-01-24
- 2021-01-31</td><td class='hms'>3:40:25</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>5:27:43</td><td class='nullValue'>-</td></tr>
<tr class='even  179'><td class='dateTime'>2021-01-31
- 2021-02-08</td><td class='hms'>3:46:05</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:00:36</td><td class='nullValue'>-</td></tr>
<tr class='odd  180'><td class='dateTime'>2021-02-08
- 2021-02-17</td><td class='hms'>1:31:05</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>1:28:13</td><td class='nullValue'>-</td></tr>
<tr class='even  181'><td class='dateTime'>2021-02-17
- 2021-02-21</td><td class='hms'>2:58:09</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>4:50:30</td><td class='nullValue'>-</td></tr>
<tr class='odd  182'><td class='dateTime'>2021-02-21
- 2021-03-01</td><td class='hms'>5:41:00</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:54:05</td><td class='nullValue'>-</td></tr>
<tr class='even  183'><td class='dateTime'>2021-03-01
- 2021-03-07</td><td class='hms'>4:19:31</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr class='odd  184'><td class='dateTime'>2021-03-07
- 2021-03-15</td><td class='hms'>3:43:35</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr class='even  185'><td class='dateTime'>2021-03-15
- 2021-03-30</td><td class='hms'>5:19:45</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:14:35</td><td class='nullValue'>-</td></tr>
<tr class='odd  186'><td class='dateTime'>2021-03-30
- 2021-04-07</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr class='even  187'><td class='dateTime'>2021-04-07
- 2021-04-12</td><td class='hms'>0:00:03</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:02:27</td><td class='nullValue'>-</td></tr>
<tr class='odd  188'><td class='dateTime'>2021-04-12
- 2021-04-25</td><td class='hms'>0:34:19</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>11:03:00</td><td class='nullValue'>-</td></tr>
<tr class='even  189'><td class='dateTime'>2021-04-25
- 2021-05-02</td><td class='hms'>0:15:40</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:08:24</td><td class='nullValue'>-</td></tr>
<tr class='odd  190'><td class='dateTime'>2021-05-02
- 2021-05-09</td><td class='hms'>0:42:02</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>1:06:14</td><td class='nullValue'>-</td></tr>
<tr class='even  191'><td class='dateTime'>2021-05-09
- 2021-05-23</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>4:32:05</td><td class='nullValue'>-</td></tr>
<tr class='odd  192'><td class='dateTime'>2021-05-23
- 2021-06-02</td><td class='hms'>3:13:28</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr class='even  193'><td class='dateTime'>2021-06-02
- 2021-06-07</td><td class='hms'>0:14:14</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:42:18</td><td class='nullValue'>-</td></tr>
<tr class='odd  194'><td class='dateTime'>2021-06-07
- 2021-06-13</td><td class='hms'>0:33:43</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>67:18:24</td><td class='nullValue'>-</td></tr>
<tr class='even  195'><td class='dateTime'>2021-06-13
- 2021-06-28</td><td class='hms'>3:20:42</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>23:03:37</td><td class='nullValue'>-</td></tr>
<tr class='odd  196'><td class='dateTime'>2021-06-28
- 2021-07-06</td><td class='hms'>5:33:03</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>90:22:09</td><td class='nullValue'>-</td></tr>
<tr class='even  197'><td class='dateTime'>2021-07-06
- 2021-07-15</td><td class='hms'>1:07:42</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr class='odd  198'><td class='dateTime'>2021-07-15
- 2021-07-20</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr class='even  199'><td class='dateTime'>2021-07-20
- 2021-07-25</td><td class='hms'>1:49:50</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr class='odd  200'><td class='dateTime'>2021-07-25
- 2021-08-05</td><td class='hms'>4:07:41</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:05:25</td><td class='nullValue'>-</td></tr>
<tr class='even  201'><td class='dateTime'>2021-08-05
- 2021-08-08</td><td class='hms'>0:40:57</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:00:25</td><td class='nullValue'>-</td></tr>
<tr class='odd  202'><td class='dateTime'>2021-08-08
- 2021-08-16</td><td class='hms'>7:51:54</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:20:02</td><td class='nullValue'>-</td></tr>
<tr class='even  203'><td class='dateTime'>2021-08-16
- 2021-08-25</td><td class='hms'>24:45:15</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>45:37:03</td><td class='nullValue'>-</td></tr>
<tr class='odd  204'><td class='dateTime'>2021-08-25
- 2021-08-29</td><td class='hms'>0:38:53</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr class='even  205'><td class='dateTime'>2021-08-29
- 2021-09-06</td><td class='hms'>1:49:52</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr class='odd  206'><td class='dateTime'>2021-09-06
- 2021-09-15</td><td class='hms'>2:07:34</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr class='even  207'><td class='dateTime'>2021-09-15
- 2021-09-19</td><td class='hms'>0:01:07</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:57:05</td><td class='nullValue'>-</td></tr>
<tr class='odd  208'><td class='dateTime'>2021-09-19
- 2021-09-28</td><td class='hms'>2:23:27</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:02:31</td><td class='nullValue'>-</td></tr>
<tr class='even  209'><td class='dateTime'>2021-09-28
- 2021-10-03</td><td class='hms'>0:32:22</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:05:04</td><td class='nullValue'>-</td></tr>
<tr class='odd  210'><td class='dateTime'>2021-10-03
- 2021-10-12</td><td class='hms'>2:18:39</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr class='even  211'><td class='dateTime'>2021-10-12
- 2021-10-17</td><td class='hms'>1:00:28</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr class='odd  212'><td class='dateTime'>2021-10-17
- 2021-10-25</td><td class='hms'>5:14:24</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:02:43</td><td class='nullValue'>-</td></tr>
<tr class='even  213'><td class='dateTime'>2021-10-25
- 2021-11-10</td><td class='hms'>6:26:37</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr class='odd  214'><td class='dateTime'>2021-11-10
- 2021-11-15</td><td class='hms'>0:32:14</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr class='even  215'><td class='dateTime'>2021-11-15
- 2021-11-21</td><td class='hms'>1:48:38</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>28:14:00</td><td class='nullValue'>-</td></tr>
<tr class='odd  216'><td class='dateTime'>2021-11-21
- 2021-11-28</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>74:06:47</td><td class='nullValue'>-</td></tr>
<tr class='even  217'><td class='dateTime'>2021-11-28
- 2021-12-05</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>7:40:08</td><td class='nullValue'>-</td></tr>
<tr class='odd  218'><td class='dateTime'>2021-12-05
- 2021-12-12</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>6:36:58</td><td class='nullValue'>-</td></tr>
<tr class='even  219'><td class='dateTime'>2021-12-12
- 2021-12-19</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>6:20:05</td><td class='nullValue'>-</td></tr>
<tr class='odd  220'><td class='dateTime'>2021-12-19
- 2021-12-26</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:47:57</td><td class='nullValue'>-</td></tr>
<tr class='even  221'><td class='dateTime'>2021-12-26
- 2022-01-02</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>5:23:07</td><td class='nullValue'>-</td></tr>
<tr class='odd  222'><td class='dateTime'>2022-01-02
- 2022-01-09</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>5:36:59</td><td class='nullValue'>-</td></tr>
<tr class='even  223'><td class='dateTime'>2022-01-09
- 2022-01-16</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>1:32:04</td><td class='nullValue'>-</td></tr>
<tr class='odd  224'><td class='dateTime'>2022-01-16
- 2022-01-23</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:58:00</td><td class='nullValue'>-</td></tr>
<tr class='even  225'><td class='dateTime'>2022-01-23
- 2022-01-30</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:50:14</td><td class='nullValue'>-</td></tr>
<tr class='odd  226'><td class='dateTime'>2022-01-30
- 2022-02-06</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:31:37</td><td class='nullValue'>-</td></tr>
<tr class='even  227'><td class='dateTime'>2022-02-06
- 2022-02-13</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:58:40</td><td class='nullValue'>-</td></tr>
<tr class='odd  228'><td class='dateTime'>2022-02-13
- 2022-02-20</td><td class='hms'>0:09:28</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>5:26:23</td><td class='nullValue'>-</td></tr>
<tr class='even  229'><td class='dateTime'>2022-02-20
- 2022-02-27</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:15:29</td><td class='nullValue'>-</td></tr>
<tr class='odd  230'><td class='dateTime'>2022-02-27
- 2022-03-06</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr class='even  231'><td class='dateTime'>2022-03-06
- 2022-03-13</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:43:46</td><td class='nullValue'>-</td></tr>
<tr class='odd  232'><td class='dateTime'>2022-03-13
- 2022-03-20</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>1:57:10</td><td class='nullValue'>-</td></tr>
<tr class='even  233'><td class='dateTime'>2022-03-20
- 2022-03-27</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>7:32:47</td><td class='nullValue'>-</td></tr>
<tr class='odd  234'><td class='dateTime'>2022-03-27
- 2022-04-03</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:10:18</td><td class='nullValue'>-</td></tr>
<tr class='even  235'><td class='dateTime'>2022-04-03
- 2022-04-10</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:13:06</td><td class='nullValue'>-</td></tr>
<tr class='odd  236'><td class='dateTime'>2022-04-10
- 2022-04-17</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:25:31</td><td class='nullValue'>-</td></tr>
<tr class='even  237'><td class='dateTime'>2022-04-17
- 2022-04-24</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>50:39:16</td><td class='nullValue'>-</td></tr>
<tr class='odd  238'><td class='dateTime'>2022-04-24
- 2022-05-01</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:58:46</td><td class='nullValue'>-</td></tr>
<tr class='even  239'><td class='dateTime'>2022-05-01
- 2022-05-08</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>6:26:30</td><td class='nullValue'>-</td></tr>
<tr class='odd  240'><td class='dateTime'>2022-05-08
- 2022-05-15</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:15:09</td><td class='nullValue'>-</td></tr>
<tr class='even  241'><td class='dateTime'>2022-05-15
- 2022-05-22</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:36:01</td><td class='nullValue'>-</td></tr>
<tr class='odd  242'><td class='dateTime'>2022-05-22
- 2022-05-29</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>57:00:53</td><td class='nullValue'>-</td></tr>
<tr class='even  243'><td class='dateTime'>2022-05-29
- 2022-06-05</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:29:48</td><td class='nullValue'>-</td></tr>
<tr class='odd  244'><td class='dateTime'>2022-06-05
- 2022-06-12</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:31:13</td><td class='nullValue'>-</td></tr>
<tr class='even  245'><td class='dateTime'>2022-06-12</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:22:23</td><td class='nullValue'>-</td></tr>
<tr class='odd  246'><td class='dateTime'>2022-06-13</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:20:08</td><td class='nullValue'>-</td></tr>
<tr class='even  247'><td class='dateTime'>2022-06-14</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr class='odd  248'><td class='dateTime'>2022-06-15</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:54:49</td><td class='nullValue'>-</td></tr>
<tr class='even  249'><td class='dateTime'>2022-06-16</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:00:29</td><td class='nullValue'>-</td></tr>
<tr class='odd  250'><td class='dateTime'>2022-06-17</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:01:27</td><td class='nullValue'>-</td></tr>
<tr class='even  251'><td class='dateTime'>2022-06-18</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:20:41</td><td class='nullValue'>-</td></tr>
<tr class='odd  252'><td class='dateTime'>2022-06-19</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr class='even  253'><td class='dateTime'>2022-06-20</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>1:17:56</td><td class='nullValue'>-</td></tr>
<tr class='odd  254'><td class='dateTime'>2022-06-21</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr class='even  255'><td class='dateTime'>2022-06-22</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr class='odd  256'><td class='dateTime'>2022-06-23</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:20:49</td><td class='nullValue'>-</td></tr>
<tr class='even  257'><td class='dateTime'>2022-06-24</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr></table><h2>
Battery capacity history
</h2><div class='explanation'>
Charge capacity history of the system's batteries
</div><table><colgroup><col/><col class='col2'/><col style='width: 10em;'/></colgroup><thead><tr><td><span>PERIOD</span></td><td class='centered'>
FULL CHARGE CAPACITY
</td><td class='centered'>
DESIGN CAPACITY
</td></tr></thead><tr class='even  1'><td class='dateTime'>2017-07-03
- 2017-07-09</td><td class='mw'>37,551 mWh
</td><td class='mw'>37,551 mWh
</td></tr>
<tr class='odd  2'><td class='dateTime'>2017-07-09
- 2017-07-16</td><td class='mw'>37,762 mWh
</td><td class='mw'>37,762 mWh
</td></tr>
<tr class='even  3'><td class='dateTime'>2017-07-16
- 2017-07-23</td><td class='mw'>37,765 mWh
</td><td class='mw'>37,765 mWh
</td></tr>
<tr class='odd  4'><td class='dateTime'>2017-07-23
- 2017-07-30</td><td class='mw'>37,757 mWh
</td><td class='mw'>37,757 mWh
</td></tr>
<tr class='even  5'><td class='dateTime'>2017-07-30
- 2017-08-06</td><td class='mw'>38,023 mWh
</td><td class='mw'>38,023 mWh
</td></tr>
<tr class='odd  6'><td class='dateTime'>2017-08-06
- 2017-08-19</td><td class='mw'>37,876 mWh
</td><td class='mw'>37,876 mWh
</td></tr>
<tr class='even  7'><td class='dateTime'>2017-08-19
- 2017-08-24</td><td class='mw'>37,889 mWh
</td><td class='mw'>37,889 mWh
</td></tr>
<tr class='odd  8'><td class='dateTime'>2017-08-24
- 2017-08-27</td><td class='mw'>38,446 mWh
</td><td class='mw'>38,446 mWh
</td></tr>
<tr class='even  9'><td class='dateTime'>2017-08-27
- 2017-09-03</td><td class='mw'>37,071 mWh
</td><td class='mw'>37,071 mWh
</td></tr>
<tr class='odd  10'><td class='dateTime'>2017-09-03
- 2017-09-10</td><td class='mw'>37,107 mWh
</td><td class='mw'>37,107 mWh
</td></tr>
<tr class='even  11'><td class='dateTime'>2017-09-10
- 2017-09-24</td><td class='mw'>37,743 mWh
</td><td class='mw'>37,743 mWh
</td></tr>
<tr class='odd  12'><td class='dateTime'>2017-09-24
- 2017-10-22</td><td class='mw'>37,581 mWh
</td><td class='mw'>37,581 mWh
</td></tr>
<tr class='even  13'><td class='dateTime'>2017-10-22
- 2017-11-06</td><td class='mw'>37,279 mWh
</td><td class='mw'>37,279 mWh
</td></tr>
<tr class='odd  14'><td class='dateTime'>2017-11-06
- 2017-11-12</td><td class='mw'>35,994 mWh
</td><td class='mw'>35,994 mWh
</td></tr>
<tr class='even  15'><td class='dateTime'>2017-11-12
- 2017-11-20</td><td class='mw'>35,994 mWh
</td><td class='mw'>35,994 mWh
</td></tr>
<tr class='odd  16'><td class='dateTime'>2017-11-20
- 2017-11-26</td><td class='mw'>36,777 mWh
</td><td class='mw'>36,777 mWh
</td></tr>
<tr class='even  17'><td class='dateTime'>2017-11-26
- 2017-12-03</td><td class='mw'>35,743 mWh
</td><td class='mw'>35,743 mWh
</td></tr>
<tr class='odd  18'><td class='dateTime'>2017-12-03
- 2017-12-10</td><td class='mw'>35,638 mWh
</td><td class='mw'>35,638 mWh
</td></tr>
<tr class='even  19'><td class='dateTime'>2017-12-10
- 2017-12-17</td><td class='mw'>35,551 mWh
</td><td class='mw'>35,551 mWh
</td></tr>
<tr class='odd  20'><td class='dateTime'>2017-12-17
- 2017-12-26</td><td class='mw'>35,046 mWh
</td><td class='mw'>35,046 mWh
</td></tr>
<tr class='even  21'><td class='dateTime'>2017-12-26
- 2018-01-01</td><td class='mw'>35,046 mWh
</td><td class='mw'>35,046 mWh
</td></tr>
<tr class='odd  22'><td class='dateTime'>2018-01-01
- 2018-01-07</td><td class='mw'>35,262 mWh
</td><td class='mw'>35,262 mWh
</td></tr>
<tr class='even  23'><td class='dateTime'>2018-01-07
- 2018-01-14</td><td class='mw'>35,046 mWh
</td><td class='mw'>35,046 mWh
</td></tr>
<tr class='odd  24'><td class='dateTime'>2018-01-14
- 2018-01-21</td><td class='mw'>35,046 mWh
</td><td class='mw'>35,046 mWh
</td></tr>
<tr class='even  25'><td class='dateTime'>2018-01-21
- 2018-01-28</td><td class='mw'>35,192 mWh
</td><td class='mw'>35,192 mWh
</td></tr>
<tr class='odd  26'><td class='dateTime'>2018-01-28
- 2018-02-04</td><td class='mw'>35,137 mWh
</td><td class='mw'>35,137 mWh
</td></tr>
<tr class='even  27'><td class='dateTime'>2018-02-04
- 2018-02-11</td><td class='mw'>35,099 mWh
</td><td class='mw'>35,099 mWh
</td></tr>
<tr class='odd  28'><td class='dateTime'>2018-02-11
- 2018-02-18</td><td class='mw'>34,431 mWh
</td><td class='mw'>34,431 mWh
</td></tr>
<tr class='even  29'><td class='dateTime'>2018-02-18
- 2018-02-25</td><td class='mw'>34,099 mWh
</td><td class='mw'>34,099 mWh
</td></tr>
<tr class='odd  30'><td class='dateTime'>2018-02-25
- 2018-03-04</td><td class='mw'>34,099 mWh
</td><td class='mw'>34,099 mWh
</td></tr>
<tr class='even  31'><td class='dateTime'>2018-03-04
- 2018-03-11</td><td class='mw'>34,077 mWh
</td><td class='mw'>34,077 mWh
</td></tr>
<tr class='odd  32'><td class='dateTime'>2018-03-11
- 2018-03-18</td><td class='mw'>33,928 mWh
</td><td class='mw'>33,928 mWh
</td></tr>
<tr class='even  33'><td class='dateTime'>2018-03-18
- 2018-03-25</td><td class='mw'>33,626 mWh
</td><td class='mw'>33,626 mWh
</td></tr>
<tr class='odd  34'><td class='dateTime'>2018-03-25
- 2018-04-02</td><td class='mw'>33,626 mWh
</td><td class='mw'>33,626 mWh
</td></tr>
<tr class='even  35'><td class='dateTime'>2018-04-02
- 2018-04-08</td><td class='mw'>33,626 mWh
</td><td class='mw'>33,626 mWh
</td></tr>
<tr class='odd  36'><td class='dateTime'>2018-04-08
- 2018-04-15</td><td class='mw'>33,733 mWh
</td><td class='mw'>33,733 mWh
</td></tr>
<tr class='even  37'><td class='dateTime'>2018-04-15
- 2018-04-22</td><td class='mw'>33,798 mWh
</td><td class='mw'>33,798 mWh
</td></tr>
<tr class='odd  38'><td class='dateTime'>2018-04-22
- 2018-04-30</td><td class='mw'>34,099 mWh
</td><td class='mw'>34,099 mWh
</td></tr>
<tr class='even  39'><td class='dateTime'>2018-04-30
- 2018-05-07</td><td class='mw'>34,099 mWh
</td><td class='mw'>34,099 mWh
</td></tr>
<tr class='odd  40'><td class='dateTime'>2018-05-07
- 2018-05-13</td><td class='mw'>34,113 mWh
</td><td class='mw'>34,113 mWh
</td></tr>
<tr class='even  41'><td class='dateTime'>2018-05-13
- 2018-05-21</td><td class='mw'>35,994 mWh
</td><td class='mw'>35,994 mWh
</td></tr>
<tr class='odd  42'><td class='dateTime'>2018-05-21
- 2018-05-27</td><td class='mw'>35,994 mWh
</td><td class='mw'>35,994 mWh
</td></tr>
<tr class='even  43'><td class='dateTime'>2018-05-27
- 2018-06-03</td><td class='mw'>34,825 mWh
</td><td class='mw'>34,825 mWh
</td></tr>
<tr class='odd  44'><td class='dateTime'>2018-06-03
- 2018-06-11</td><td class='mw'>35,520 mWh
</td><td class='mw'>35,520 mWh
</td></tr>
<tr class='even  45'><td class='dateTime'>2018-06-11
- 2018-06-17</td><td class='mw'>35,757 mWh
</td><td class='mw'>35,757 mWh
</td></tr>
<tr class='odd  46'><td class='dateTime'>2018-06-17
- 2018-06-25</td><td class='mw'>35,994 mWh
</td><td class='mw'>35,994 mWh
</td></tr>
<tr class='even  47'><td class='dateTime'>2018-06-25
- 2018-07-03</td><td class='mw'>35,994 mWh
</td><td class='mw'>35,994 mWh
</td></tr>
<tr class='odd  48'><td class='dateTime'>2018-07-03
- 2018-07-08</td><td class='mw'>35,994 mWh
</td><td class='mw'>35,994 mWh
</td></tr>
<tr class='even  49'><td class='dateTime'>2018-07-08
- 2018-07-15</td><td class='mw'>35,889 mWh
</td><td class='mw'>35,889 mWh
</td></tr>
<tr class='odd  50'><td class='dateTime'>2018-07-15
- 2018-07-24</td><td class='mw'>35,520 mWh
</td><td class='mw'>35,520 mWh
</td></tr>
<tr class='even  51'><td class='dateTime'>2018-07-24
- 2018-07-29</td><td class='mw'>35,520 mWh
</td><td class='mw'>35,520 mWh
</td></tr>
<tr class='odd  52'><td class='dateTime'>2018-07-29
- 2018-08-05</td><td class='mw'>35,520 mWh
</td><td class='mw'>35,520 mWh
</td></tr>
<tr class='even  53'><td class='dateTime'>2018-08-05
- 2018-08-15</td><td class='mw'>35,520 mWh
</td><td class='mw'>35,520 mWh
</td></tr>
<tr class='odd  54'><td class='dateTime'>2018-08-15
- 2018-08-19</td><td class='mw'>35,574 mWh
</td><td class='mw'>35,574 mWh
</td></tr>
<tr class='even  55'><td class='dateTime'>2018-08-19
- 2018-08-26</td><td class='mw'>35,994 mWh
</td><td class='mw'>35,994 mWh
</td></tr>
<tr class='odd  56'><td class='dateTime'>2018-08-26
- 2018-09-02</td><td class='mw'>35,994 mWh
</td><td class='mw'>35,994 mWh
</td></tr>
<tr class='even  57'><td class='dateTime'>2018-09-02
- 2018-09-10</td><td class='mw'>35,575 mWh
</td><td class='mw'>35,575 mWh
</td></tr>
<tr class='odd  58'><td class='dateTime'>2018-09-10
- 2018-09-17</td><td class='mw'>35,520 mWh
</td><td class='mw'>35,520 mWh
</td></tr>
<tr class='even  59'><td class='dateTime'>2018-09-17
- 2018-09-23</td><td class='mw'>35,673 mWh
</td><td class='mw'>35,673 mWh
</td></tr>
<tr class='odd  60'><td class='dateTime'>2018-09-23
- 2018-09-30</td><td class='mw'>35,701 mWh
</td><td class='mw'>35,701 mWh
</td></tr>
<tr class='even  61'><td class='dateTime'>2018-09-30
- 2018-10-07</td><td class='mw'>35,994 mWh
</td><td class='mw'>35,994 mWh
</td></tr>
<tr class='odd  62'><td class='dateTime'>2018-10-07
- 2018-10-14</td><td class='mw'>35,823 mWh
</td><td class='mw'>35,823 mWh
</td></tr>
<tr class='even  63'><td class='dateTime'>2018-10-14
- 2018-10-28</td><td class='mw'>34,573 mWh
</td><td class='mw'>34,573 mWh
</td></tr>
<tr class='odd  64'><td class='dateTime'>2018-10-28
- 2018-11-04</td><td class='mw'>35,184 mWh
</td><td class='mw'>35,184 mWh
</td></tr>
<tr class='even  65'><td class='dateTime'>2018-11-04
- 2018-11-13</td><td class='mw'>35,046 mWh
</td><td class='mw'>35,046 mWh
</td></tr>
<tr class='odd  66'><td class='dateTime'>2018-11-13
- 2018-11-19</td><td class='mw'>35,046 mWh
</td><td class='mw'>35,046 mWh
</td></tr>
<tr class='even  67'><td class='dateTime'>2018-11-19
- 2018-11-25</td><td class='mw'>34,445 mWh
</td><td class='mw'>34,445 mWh
</td></tr>
<tr class='odd  68'><td class='dateTime'>2018-11-25
- 2018-12-05</td><td class='mw'>33,626 mWh
</td><td class='mw'>33,626 mWh
</td></tr>
<tr class='even  69'><td class='dateTime'>2018-12-05
- 2018-12-09</td><td class='mw'>33,959 mWh
</td><td class='mw'>33,959 mWh
</td></tr>
<tr class='odd  70'><td class='dateTime'>2018-12-09
- 2018-12-16</td><td class='mw'>33,925 mWh
</td><td class='mw'>33,925 mWh
</td></tr>
<tr class='even  71'><td class='dateTime'>2018-12-16
- 2018-12-24</td><td class='mw'>34,128 mWh
</td><td class='mw'>34,128 mWh
</td></tr>
<tr class='odd  72'><td class='dateTime'>2018-12-24
- 2019-01-01</td><td class='mw'>34,117 mWh
</td><td class='mw'>34,117 mWh
</td></tr>
<tr class='even  73'><td class='dateTime'>2019-01-01
- 2019-01-06</td><td class='mw'>34,099 mWh
</td><td class='mw'>34,099 mWh
</td></tr>
<tr class='odd  74'><td class='dateTime'>2019-01-06
- 2019-01-13</td><td class='mw'>34,099 mWh
</td><td class='mw'>34,099 mWh
</td></tr>
<tr class='even  75'><td class='dateTime'>2019-01-13
- 2019-01-21</td><td class='mw'>34,089 mWh
</td><td class='mw'>34,089 mWh
</td></tr>
<tr class='odd  76'><td class='dateTime'>2019-01-21
- 2019-01-27</td><td class='mw'>33,788 mWh
</td><td class='mw'>33,788 mWh
</td></tr>
<tr class='even  77'><td class='dateTime'>2019-01-27
- 2019-02-03</td><td class='mw'>34,573 mWh
</td><td class='mw'>34,573 mWh
</td></tr>
<tr class='odd  78'><td class='dateTime'>2019-02-03
- 2019-02-10</td><td class='mw'>34,573 mWh
</td><td class='mw'>34,573 mWh
</td></tr>
<tr class='even  79'><td class='dateTime'>2019-02-10
- 2019-02-17</td><td class='mw'>34,563 mWh
</td><td class='mw'>34,563 mWh
</td></tr>
<tr class='odd  80'><td class='dateTime'>2019-02-17
- 2019-02-26</td><td class='mw'>34,262 mWh
</td><td class='mw'>34,262 mWh
</td></tr>
<tr class='even  81'><td class='dateTime'>2019-02-26
- 2019-03-05</td><td class='mw'>34,573 mWh
</td><td class='mw'>34,573 mWh
</td></tr>
<tr class='odd  82'><td class='dateTime'>2019-03-05
- 2019-03-15</td><td class='mw'>34,573 mWh
</td><td class='mw'>34,573 mWh
</td></tr>
<tr class='even  83'><td class='dateTime'>2019-03-15
- 2019-03-17</td><td class='mw'>34,536 mWh
</td><td class='mw'>34,536 mWh
</td></tr>
<tr class='odd  84'><td class='dateTime'>2019-03-17
- 2019-03-24</td><td class='mw'>34,099 mWh
</td><td class='mw'>34,099 mWh
</td></tr>
<tr class='even  85'><td class='dateTime'>2019-03-24
- 2019-04-01</td><td class='mw'>34,099 mWh
</td><td class='mw'>34,099 mWh
</td></tr>
<tr class='odd  86'><td class='dateTime'>2019-04-01
- 2019-04-07</td><td class='mw'>34,166 mWh
</td><td class='mw'>34,166 mWh
</td></tr>
<tr class='even  87'><td class='dateTime'>2019-04-07
- 2019-04-14</td><td class='mw'>34,916 mWh
</td><td class='mw'>34,916 mWh
</td></tr>
<tr class='odd  88'><td class='dateTime'>2019-04-14
- 2019-04-21</td><td class='mw'>35,046 mWh
</td><td class='mw'>35,046 mWh
</td></tr>
<tr class='even  89'><td class='dateTime'>2019-04-21
- 2019-04-28</td><td class='mw'>35,046 mWh
</td><td class='mw'>35,046 mWh
</td></tr>
<tr class='odd  90'><td class='dateTime'>2019-04-28
- 2019-05-05</td><td class='mw'>35,046 mWh
</td><td class='mw'>35,046 mWh
</td></tr>
<tr class='even  91'><td class='dateTime'>2019-05-05
- 2019-05-22</td><td class='mw'>35,046 mWh
</td><td class='mw'>35,046 mWh
</td></tr>
<tr class='odd  92'><td class='dateTime'>2019-05-22
- 2019-05-31</td><td class='mw'>35,046 mWh
</td><td class='mw'>35,046 mWh
</td></tr>
<tr class='even  93'><td class='dateTime'>2019-05-31
- 2019-06-02</td><td class='mw'>35,046 mWh
</td><td class='mw'>35,046 mWh
</td></tr>
<tr class='odd  94'><td class='dateTime'>2019-06-02
- 2019-06-09</td><td class='mw'>35,046 mWh
</td><td class='mw'>35,046 mWh
</td></tr>
<tr class='even  95'><td class='dateTime'>2019-06-09
- 2019-06-17</td><td class='mw'>35,046 mWh
</td><td class='mw'>35,046 mWh
</td></tr>
<tr class='odd  96'><td class='dateTime'>2019-06-17
- 2019-06-25</td><td class='mw'>35,453 mWh
</td><td class='mw'>35,453 mWh
</td></tr>
<tr class='even  97'><td class='dateTime'>2019-06-25
- 2019-06-30</td><td class='mw'>35,520 mWh
</td><td class='mw'>35,520 mWh
</td></tr>
<tr class='odd  98'><td class='dateTime'>2019-06-30
- 2019-07-08</td><td class='mw'>35,637 mWh
</td><td class='mw'>35,637 mWh
</td></tr>
<tr class='even  99'><td class='dateTime'>2019-07-08
- 2019-07-16</td><td class='mw'>35,994 mWh
</td><td class='mw'>35,994 mWh
</td></tr>
<tr class='odd  100'><td class='dateTime'>2019-07-16
- 2019-07-28</td><td class='mw'>35,790 mWh
</td><td class='mw'>35,790 mWh
</td></tr>
<tr class='even  101'><td class='dateTime'>2019-07-28
- 2019-08-04</td><td class='mw'>34,573 mWh
</td><td class='mw'>34,573 mWh
</td></tr>
<tr class='odd  102'><td class='dateTime'>2019-08-04
- 2019-08-11</td><td class='mw'>35,302 mWh
</td><td class='mw'>35,302 mWh
</td></tr>
<tr class='even  103'><td class='dateTime'>2019-08-11
- 2019-08-20</td><td class='mw'>35,143 mWh
</td><td class='mw'>35,143 mWh
</td></tr>
<tr class='odd  104'><td class='dateTime'>2019-08-20
- 2019-08-26</td><td class='mw'>35,520 mWh
</td><td class='mw'>35,520 mWh
</td></tr>
<tr class='even  105'><td class='dateTime'>2019-08-26
- 2019-09-01</td><td class='mw'>35,520 mWh
</td><td class='mw'>35,520 mWh
</td></tr>
<tr class='odd  106'><td class='dateTime'>2019-09-01
- 2019-09-08</td><td class='mw'>34,976 mWh
</td><td class='mw'>34,976 mWh
</td></tr>
<tr class='even  107'><td class='dateTime'>2019-09-08
- 2019-09-15</td><td class='mw'>34,273 mWh
</td><td class='mw'>34,273 mWh
</td></tr>
<tr class='odd  108'><td class='dateTime'>2019-09-15
- 2019-09-22</td><td class='mw'>34,446 mWh
</td><td class='mw'>34,446 mWh
</td></tr>
<tr class='even  109'><td class='dateTime'>2019-09-22
- 2019-09-29</td><td class='mw'>34,099 mWh
</td><td class='mw'>34,099 mWh
</td></tr>
<tr class='odd  110'><td class='dateTime'>2019-09-29
- 2019-10-06</td><td class='mw'>34,099 mWh
</td><td class='mw'>34,099 mWh
</td></tr>
<tr class='even  111'><td class='dateTime'>2019-10-06
- 2019-10-13</td><td class='mw'>34,099 mWh
</td><td class='mw'>34,099 mWh
</td></tr>
<tr class='odd  112'><td class='dateTime'>2019-10-13
- 2019-10-20</td><td class='mw'>34,099 mWh
</td><td class='mw'>34,099 mWh
</td></tr>
<tr class='even  113'><td class='dateTime'>2019-10-20
- 2019-10-27</td><td class='mw'>33,299 mWh
</td><td class='mw'>33,299 mWh
</td></tr>
<tr class='odd  114'><td class='dateTime'>2019-10-27
- 2019-11-03</td><td class='mw'>33,152 mWh
</td><td class='mw'>33,152 mWh
</td></tr>
<tr class='even  115'><td class='dateTime'>2019-11-03
- 2019-11-10</td><td class='mw'>33,152 mWh
</td><td class='mw'>33,152 mWh
</td></tr>
<tr class='odd  116'><td class='dateTime'>2019-11-10
- 2019-11-17</td><td class='mw'>33,189 mWh
</td><td class='mw'>33,189 mWh
</td></tr>
<tr class='even  117'><td class='dateTime'>2019-11-17
- 2019-11-24</td><td class='mw'>33,152 mWh
</td><td class='mw'>33,152 mWh
</td></tr>
<tr class='odd  118'><td class='dateTime'>2019-11-24
- 2019-12-01</td><td class='mw'>33,176 mWh
</td><td class='mw'>33,176 mWh
</td></tr>
<tr class='even  119'><td class='dateTime'>2019-12-01
- 2019-12-08</td><td class='mw'>33,152 mWh
</td><td class='mw'>33,152 mWh
</td></tr>
<tr class='odd  120'><td class='dateTime'>2019-12-08
- 2019-12-15</td><td class='mw'>32,998 mWh
</td><td class='mw'>32,998 mWh
</td></tr>
<tr class='even  121'><td class='dateTime'>2019-12-15
- 2019-12-22</td><td class='mw'>30,784 mWh
</td><td class='mw'>30,784 mWh
</td></tr>
<tr class='odd  122'><td class='dateTime'>2019-12-22
- 2020-01-03</td><td class='mw'>32,479 mWh
</td><td class='mw'>32,479 mWh
</td></tr>
<tr class='even  123'><td class='dateTime'>2020-01-03
- 2020-01-06</td><td class='mw'>31,258 mWh
</td><td class='mw'>31,258 mWh
</td></tr>
<tr class='odd  124'><td class='dateTime'>2020-01-06
- 2020-01-13</td><td class='mw'>31,258 mWh
</td><td class='mw'>31,258 mWh
</td></tr>
<tr class='even  125'><td class='dateTime'>2020-01-13
- 2020-01-20</td><td class='mw'>32,172 mWh
</td><td class='mw'>32,172 mWh
</td></tr>
<tr class='odd  126'><td class='dateTime'>2020-01-20
- 2020-01-26</td><td class='mw'>33,626 mWh
</td><td class='mw'>33,626 mWh
</td></tr>
<tr class='even  127'><td class='dateTime'>2020-01-26
- 2020-02-02</td><td class='mw'>33,221 mWh
</td><td class='mw'>33,221 mWh
</td></tr>
<tr class='odd  128'><td class='dateTime'>2020-02-02
- 2020-02-09</td><td class='mw'>33,152 mWh
</td><td class='mw'>33,152 mWh
</td></tr>
<tr class='even  129'><td class='dateTime'>2020-02-09
- 2020-02-16</td><td class='mw'>32,339 mWh
</td><td class='mw'>32,339 mWh
</td></tr>
<tr class='odd  130'><td class='dateTime'>2020-02-16
- 2020-02-24</td><td class='mw'>29,363 mWh
</td><td class='mw'>29,363 mWh
</td></tr>
<tr class='even  131'><td class='dateTime'>2020-02-24
- 2020-03-02</td><td class='mw'>29,363 mWh
</td><td class='mw'>29,363 mWh
</td></tr>
<tr class='odd  132'><td class='dateTime'>2020-03-02
- 2020-03-08</td><td class='mw'>26,995 mWh
</td><td class='mw'>26,995 mWh
</td></tr>
<tr class='even  133'><td class='dateTime'>2020-03-08
- 2020-03-15</td><td class='mw'>28,087 mWh
</td><td class='mw'>28,087 mWh
</td></tr>
<tr class='odd  134'><td class='dateTime'>2020-03-15
- 2020-03-22</td><td class='mw'>28,470 mWh
</td><td class='mw'>28,470 mWh
</td></tr>
<tr class='even  135'><td class='dateTime'>2020-03-22
- 2020-03-29</td><td class='mw'>29,849 mWh
</td><td class='mw'>29,849 mWh
</td></tr>
<tr class='odd  136'><td class='dateTime'>2020-03-29
- 2020-04-05</td><td class='mw'>31,785 mWh
</td><td class='mw'>31,785 mWh
</td></tr>
<tr class='even  137'><td class='dateTime'>2020-04-05
- 2020-04-12</td><td class='mw'>30,784 mWh
</td><td class='mw'>30,784 mWh
</td></tr>
<tr class='odd  138'><td class='dateTime'>2020-04-12
- 2020-04-19</td><td class='mw'>31,023 mWh
</td><td class='mw'>31,023 mWh
</td></tr>
<tr class='even  139'><td class='dateTime'>2020-04-19
- 2020-04-26</td><td class='mw'>30,310 mWh
</td><td class='mw'>30,310 mWh
</td></tr>
<tr class='odd  140'><td class='dateTime'>2020-04-26
- 2020-05-03</td><td class='mw'>30,835 mWh
</td><td class='mw'>30,835 mWh
</td></tr>
<tr class='even  141'><td class='dateTime'>2020-05-03
- 2020-05-10</td><td class='mw'>33,626 mWh
</td><td class='mw'>33,626 mWh
</td></tr>
<tr class='odd  142'><td class='dateTime'>2020-05-10
- 2020-05-17</td><td class='mw'>32,644 mWh
</td><td class='mw'>32,644 mWh
</td></tr>
<tr class='even  143'><td class='dateTime'>2020-05-17
- 2020-05-24</td><td class='mw'>31,646 mWh
</td><td class='mw'>31,646 mWh
</td></tr>
<tr class='odd  144'><td class='dateTime'>2020-05-24
- 2020-05-31</td><td class='mw'>29,837 mWh
</td><td class='mw'>29,837 mWh
</td></tr>
<tr class='even  145'><td class='dateTime'>2020-05-31
- 2020-06-07</td><td class='mw'>29,837 mWh
</td><td class='mw'>29,837 mWh
</td></tr>
<tr class='odd  146'><td class='dateTime'>2020-06-07
- 2020-06-14</td><td class='mw'>30,758 mWh
</td><td class='mw'>30,758 mWh
</td></tr>
<tr class='even  147'><td class='dateTime'>2020-06-14
- 2020-06-21</td><td class='mw'>32,121 mWh
</td><td class='mw'>32,121 mWh
</td></tr>
<tr class='odd  148'><td class='dateTime'>2020-06-21
- 2020-07-06</td><td class='mw'>32,678 mWh
</td><td class='mw'>32,678 mWh
</td></tr>
<tr class='even  149'><td class='dateTime'>2020-07-06
- 2020-07-12</td><td class='mw'>32,386 mWh
</td><td class='mw'>32,386 mWh
</td></tr>
<tr class='odd  150'><td class='dateTime'>2020-07-12
- 2020-07-19</td><td class='mw'>31,247 mWh
</td><td class='mw'>31,247 mWh
</td></tr>
<tr class='even  151'><td class='dateTime'>2020-07-19
- 2020-07-27</td><td class='mw'>30,784 mWh
</td><td class='mw'>30,784 mWh
</td></tr>
<tr class='odd  152'><td class='dateTime'>2020-07-27
- 2020-08-02</td><td class='mw'>31,613 mWh
</td><td class='mw'>31,613 mWh
</td></tr>
<tr class='even  153'><td class='dateTime'>2020-08-02
- 2020-08-09</td><td class='mw'>32,056 mWh
</td><td class='mw'>32,056 mWh
</td></tr>
<tr class='odd  154'><td class='dateTime'>2020-08-09
- 2020-08-16</td><td class='mw'>31,038 mWh
</td><td class='mw'>31,038 mWh
</td></tr>
<tr class='even  155'><td class='dateTime'>2020-08-16
- 2020-08-24</td><td class='mw'>30,310 mWh
</td><td class='mw'>30,310 mWh
</td></tr>
<tr class='odd  156'><td class='dateTime'>2020-08-24
- 2020-08-31</td><td class='mw'>30,310 mWh
</td><td class='mw'>30,310 mWh
</td></tr>
<tr class='even  157'><td class='dateTime'>2020-08-31
- 2020-09-09</td><td class='mw'>30,310 mWh
</td><td class='mw'>30,310 mWh
</td></tr>
<tr class='odd  158'><td class='dateTime'>2020-09-09
- 2020-09-14</td><td class='mw'>30,467 mWh
</td><td class='mw'>30,467 mWh
</td></tr>
<tr class='even  159'><td class='dateTime'>2020-09-14
- 2020-09-20</td><td class='mw'>29,936 mWh
</td><td class='mw'>29,936 mWh
</td></tr>
<tr class='odd  160'><td class='dateTime'>2020-09-20
- 2020-09-28</td><td class='mw'>32,205 mWh
</td><td class='mw'>32,205 mWh
</td></tr>
<tr class='even  161'><td class='dateTime'>2020-09-28
- 2020-10-06</td><td class='mw'>32,205 mWh
</td><td class='mw'>32,205 mWh
</td></tr>
<tr class='odd  162'><td class='dateTime'>2020-10-06
- 2020-10-12</td><td class='mw'>32,205 mWh
</td><td class='mw'>32,205 mWh
</td></tr>
<tr class='even  163'><td class='dateTime'>2020-10-12
- 2020-10-18</td><td class='mw'>32,205 mWh
</td><td class='mw'>32,205 mWh
</td></tr>
<tr class='odd  164'><td class='dateTime'>2020-10-18
- 2020-10-28</td><td class='mw'>30,985 mWh
</td><td class='mw'>30,985 mWh
</td></tr>
<tr class='even  165'><td class='dateTime'>2020-10-28
- 2020-11-04</td><td class='mw'>30,310 mWh
</td><td class='mw'>30,310 mWh
</td></tr>
<tr class='odd  166'><td class='dateTime'>2020-11-04
- 2020-11-09</td><td class='mw'>30,310 mWh
</td><td class='mw'>30,310 mWh
</td></tr>
<tr class='even  167'><td class='dateTime'>2020-11-09
- 2020-11-15</td><td class='mw'>30,310 mWh
</td><td class='mw'>30,310 mWh
</td></tr>
<tr class='odd  168'><td class='dateTime'>2020-11-15
- 2020-11-22</td><td class='mw'>29,591 mWh
</td><td class='mw'>29,591 mWh
</td></tr>
<tr class='even  169'><td class='dateTime'>2020-11-22
- 2020-11-30</td><td class='mw'>27,942 mWh
</td><td class='mw'>27,942 mWh
</td></tr>
<tr class='odd  170'><td class='dateTime'>2020-11-30
- 2020-12-06</td><td class='mw'>26,801 mWh
</td><td class='mw'>26,801 mWh
</td></tr>
<tr class='even  171'><td class='dateTime'>2020-12-06
- 2020-12-13</td><td class='mw'>26,926 mWh
</td><td class='mw'>26,926 mWh
</td></tr>
<tr class='odd  172'><td class='dateTime'>2020-12-13
- 2020-12-22</td><td class='mw'>27,942 mWh
</td><td class='mw'>27,942 mWh
</td></tr>
<tr class='even  173'><td class='dateTime'>2020-12-22
- 2020-12-27</td><td class='mw'>27,942 mWh
</td><td class='mw'>27,942 mWh
</td></tr>
<tr class='odd  174'><td class='dateTime'>2020-12-27
- 2021-01-06</td><td class='mw'>24,154 mWh
</td><td class='mw'>24,154 mWh
</td></tr>
<tr class='even  175'><td class='dateTime'>2021-01-06
- 2021-01-10</td><td class='mw'>24,154 mWh
</td><td class='mw'>24,154 mWh
</td></tr>
<tr class='odd  176'><td class='dateTime'>2021-01-10
- 2021-01-17</td><td class='mw'>24,261 mWh
</td><td class='mw'>24,261 mWh
</td></tr>
<tr class='even  177'><td class='dateTime'>2021-01-17
- 2021-01-24</td><td class='mw'>24,684 mWh
</td><td class='mw'>24,684 mWh
</td></tr>
<tr class='odd  178'><td class='dateTime'>2021-01-24
- 2021-01-31</td><td class='mw'>27,942 mWh
</td><td class='mw'>27,942 mWh
</td></tr>
<tr class='even  179'><td class='dateTime'>2021-01-31
- 2021-02-08</td><td class='mw'>27,942 mWh
</td><td class='mw'>27,942 mWh
</td></tr>
<tr class='odd  180'><td class='dateTime'>2021-02-08
- 2021-02-17</td><td class='mw'>27,942 mWh
</td><td class='mw'>27,942 mWh
</td></tr>
<tr class='even  181'><td class='dateTime'>2021-02-17
- 2021-02-21</td><td class='mw'>27,228 mWh
</td><td class='mw'>27,228 mWh
</td></tr>
<tr class='odd  182'><td class='dateTime'>2021-02-21
- 2021-03-01</td><td class='mw'>29,360 mWh
</td><td class='mw'>29,360 mWh
</td></tr>
<tr class='even  183'><td class='dateTime'>2021-03-01
- 2021-03-07</td><td class='mw'>29,567 mWh
</td><td class='mw'>29,567 mWh
</td></tr>
<tr class='odd  184'><td class='dateTime'>2021-03-07
- 2021-03-15</td><td class='mw'>29,837 mWh
</td><td class='mw'>29,837 mWh
</td></tr>
<tr class='even  185'><td class='dateTime'>2021-03-15
- 2021-03-30</td><td class='mw'>27,039 mWh
</td><td class='mw'>27,039 mWh
</td></tr>
<tr class='odd  186'><td class='dateTime'>2021-03-30
- 2021-04-07</td><td class='mw'>27,469 mWh
</td><td class='mw'>27,469 mWh
</td></tr>
<tr class='even  187'><td class='dateTime'>2021-04-07
- 2021-04-12</td><td class='mw'>27,469 mWh
</td><td class='mw'>27,469 mWh
</td></tr>
<tr class='odd  188'><td class='dateTime'>2021-04-12
- 2021-04-25</td><td class='mw'>26,909 mWh
</td><td class='mw'>26,909 mWh
</td></tr>
<tr class='even  189'><td class='dateTime'>2021-04-25
- 2021-05-02</td><td class='mw'>26,522 mWh
</td><td class='mw'>26,522 mWh
</td></tr>
<tr class='odd  190'><td class='dateTime'>2021-05-02
- 2021-05-09</td><td class='mw'>26,522 mWh
</td><td class='mw'>26,522 mWh
</td></tr>
<tr class='even  191'><td class='dateTime'>2021-05-09
- 2021-05-23</td><td class='mw'>26,522 mWh
</td><td class='mw'>26,522 mWh
</td></tr>
<tr class='odd  192'><td class='dateTime'>2021-05-23
- 2021-06-02</td><td class='mw'>26,522 mWh
</td><td class='mw'>26,522 mWh
</td></tr>
<tr class='even  193'><td class='dateTime'>2021-06-02
- 2021-06-07</td><td class='mw'>26,553 mWh
</td><td class='mw'>26,553 mWh
</td></tr>
<tr class='odd  194'><td class='dateTime'>2021-06-07
- 2021-06-13</td><td class='mw'>30,176 mWh
</td><td class='mw'>30,176 mWh
</td></tr>
<tr class='even  195'><td class='dateTime'>2021-06-13
- 2021-06-28</td><td class='mw'>29,837 mWh
</td><td class='mw'>29,837 mWh
</td></tr>
<tr class='odd  196'><td class='dateTime'>2021-06-28
- 2021-07-06</td><td class='mw'>28,732 mWh
</td><td class='mw'>28,732 mWh
</td></tr>
<tr class='even  197'><td class='dateTime'>2021-07-06
- 2021-07-15</td><td class='mw'>26,995 mWh
</td><td class='mw'>26,995 mWh
</td></tr>
<tr class='odd  198'><td class='dateTime'>2021-07-15
- 2021-07-20</td><td class='mw'>26,995 mWh
</td><td class='mw'>26,995 mWh
</td></tr>
<tr class='even  199'><td class='dateTime'>2021-07-20
- 2021-07-25</td><td class='mw'>26,995 mWh
</td><td class='mw'>26,995 mWh
</td></tr>
<tr class='odd  200'><td class='dateTime'>2021-07-25
- 2021-08-05</td><td class='mw'>27,329 mWh
</td><td class='mw'>27,329 mWh
</td></tr>
<tr class='even  201'><td class='dateTime'>2021-08-05
- 2021-08-08</td><td class='mw'>28,416 mWh
</td><td class='mw'>28,416 mWh
</td></tr>
<tr class='odd  202'><td class='dateTime'>2021-08-08
- 2021-08-16</td><td class='mw'>28,303 mWh
</td><td class='mw'>28,303 mWh
</td></tr>
<tr class='even  203'><td class='dateTime'>2021-08-16
- 2021-08-25</td><td class='mw'>24,627 mWh
</td><td class='mw'>24,627 mWh
</td></tr>
<tr class='odd  204'><td class='dateTime'>2021-08-25
- 2021-08-29</td><td class='mw'>24,627 mWh
</td><td class='mw'>24,627 mWh
</td></tr>
<tr class='even  205'><td class='dateTime'>2021-08-29
- 2021-09-06</td><td class='mw'>24,627 mWh
</td><td class='mw'>24,627 mWh
</td></tr>
<tr class='odd  206'><td class='dateTime'>2021-09-06
- 2021-09-15</td><td class='mw'>24,627 mWh
</td><td class='mw'>24,627 mWh
</td></tr>
<tr class='even  207'><td class='dateTime'>2021-09-15
- 2021-09-19</td><td class='mw'>24,627 mWh
</td><td class='mw'>24,627 mWh
</td></tr>
<tr class='odd  208'><td class='dateTime'>2021-09-19
- 2021-09-28</td><td class='mw'>25,372 mWh
</td><td class='mw'>25,372 mWh
</td></tr>
<tr class='even  209'><td class='dateTime'>2021-09-28
- 2021-10-03</td><td class='mw'>26,995 mWh
</td><td class='mw'>26,995 mWh
</td></tr>
<tr class='odd  210'><td class='dateTime'>2021-10-03
- 2021-10-12</td><td class='mw'>26,995 mWh
</td><td class='mw'>26,995 mWh
</td></tr>
<tr class='even  211'><td class='dateTime'>2021-10-12
- 2021-10-17</td><td class='mw'>26,995 mWh
</td><td class='mw'>26,995 mWh
</td></tr>
<tr class='odd  212'><td class='dateTime'>2021-10-17
- 2021-10-25</td><td class='mw'>28,196 mWh
</td><td class='mw'>28,196 mWh
</td></tr>
<tr class='even  213'><td class='dateTime'>2021-10-25
- 2021-11-10</td><td class='mw'>28,416 mWh
</td><td class='mw'>28,416 mWh
</td></tr>
<tr class='odd  214'><td class='dateTime'>2021-11-10
- 2021-11-15</td><td class='mw'>28,416 mWh
</td><td class='mw'>28,416 mWh
</td></tr>
<tr class='even  215'><td class='dateTime'>2021-11-15
- 2021-11-21</td><td class='mw'>26,247 mWh
</td><td class='mw'>26,247 mWh
</td></tr>
<tr class='odd  216'><td class='dateTime'>2021-11-21
- 2021-11-28</td><td class='mw'>25,101 mWh
</td><td class='mw'>25,101 mWh
</td></tr>
<tr class='even  217'><td class='dateTime'>2021-11-28
- 2021-12-05</td><td class='mw'>26,394 mWh
</td><td class='mw'>26,394 mWh
</td></tr>
<tr class='odd  218'><td class='dateTime'>2021-12-05
- 2021-12-12</td><td class='mw'>26,522 mWh
</td><td class='mw'>26,522 mWh
</td></tr>
<tr class='even  219'><td class='dateTime'>2021-12-12
- 2021-12-19</td><td class='mw'>26,159 mWh
</td><td class='mw'>26,159 mWh
</td></tr>
<tr class='odd  220'><td class='dateTime'>2021-12-19
- 2021-12-26</td><td class='mw'>25,101 mWh
</td><td class='mw'>25,101 mWh
</td></tr>
<tr class='even  221'><td class='dateTime'>2021-12-26
- 2022-01-02</td><td class='mw'>25,101 mWh
</td><td class='mw'>25,101 mWh
</td></tr>
<tr class='odd  222'><td class='dateTime'>2022-01-02
- 2022-01-09</td><td class='mw'>25,101 mWh
</td><td class='mw'>25,101 mWh
</td></tr>
<tr class='even  223'><td class='dateTime'>2022-01-09
- 2022-01-16</td><td class='mw'>25,101 mWh
</td><td class='mw'>25,101 mWh
</td></tr>
<tr class='odd  224'><td class='dateTime'>2022-01-16
- 2022-01-23</td><td class='mw'>25,101 mWh
</td><td class='mw'>25,101 mWh
</td></tr>
<tr class='even  225'><td class='dateTime'>2022-01-23
- 2022-01-30</td><td class='mw'>25,101 mWh
</td><td class='mw'>25,101 mWh
</td></tr>
<tr class='odd  226'><td class='dateTime'>2022-01-30
- 2022-02-06</td><td class='mw'>24,706 mWh
</td><td class='mw'>24,706 mWh
</td></tr>
<tr class='even  227'><td class='dateTime'>2022-02-06
- 2022-02-13</td><td class='mw'>23,988 mWh
</td><td class='mw'>23,988 mWh
</td></tr>
<tr class='odd  228'><td class='dateTime'>2022-02-13
- 2022-02-20</td><td class='mw'>19,418 mWh
</td><td class='mw'>19,418 mWh
</td></tr>
<tr class='even  229'><td class='dateTime'>2022-02-20
- 2022-02-27</td><td class='mw'>19,418 mWh
</td><td class='mw'>19,418 mWh
</td></tr>
<tr class='odd  230'><td class='dateTime'>2022-02-27
- 2022-03-06</td><td class='mw'>19,418 mWh
</td><td class='mw'>19,418 mWh
</td></tr>
<tr class='even  231'><td class='dateTime'>2022-03-06
- 2022-03-13</td><td class='mw'>21,485 mWh
</td><td class='mw'>21,485 mWh
</td></tr>
<tr class='odd  232'><td class='dateTime'>2022-03-13
- 2022-03-20</td><td class='mw'>24,627 mWh
</td><td class='mw'>24,627 mWh
</td></tr>
<tr class='even  233'><td class='dateTime'>2022-03-20
- 2022-03-27</td><td class='mw'>24,627 mWh
</td><td class='mw'>24,627 mWh
</td></tr>
<tr class='odd  234'><td class='dateTime'>2022-03-27
- 2022-04-03</td><td class='mw'>24,627 mWh
</td><td class='mw'>24,627 mWh
</td></tr>
<tr class='even  235'><td class='dateTime'>2022-04-03
- 2022-04-10</td><td class='mw'>24,627 mWh
</td><td class='mw'>24,627 mWh
</td></tr>
<tr class='odd  236'><td class='dateTime'>2022-04-10
- 2022-04-17</td><td class='mw'>25,708 mWh
</td><td class='mw'>25,708 mWh
</td></tr>
<tr class='even  237'><td class='dateTime'>2022-04-17
- 2022-04-24</td><td class='mw'>27,942 mWh
</td><td class='mw'>27,942 mWh
</td></tr>
<tr class='odd  238'><td class='dateTime'>2022-04-24
- 2022-05-01</td><td class='mw'>25,128 mWh
</td><td class='mw'>25,128 mWh
</td></tr>
<tr class='even  239'><td class='dateTime'>2022-05-01
- 2022-05-08</td><td class='mw'>20,365 mWh
</td><td class='mw'>20,365 mWh
</td></tr>
<tr class='odd  240'><td class='dateTime'>2022-05-08
- 2022-05-15</td><td class='mw'>21,716 mWh
</td><td class='mw'>21,716 mWh
</td></tr>
<tr class='even  241'><td class='dateTime'>2022-05-15
- 2022-05-22</td><td class='mw'>23,680 mWh
</td><td class='mw'>23,680 mWh
</td></tr>
<tr class='odd  242'><td class='dateTime'>2022-05-22
- 2022-05-29</td><td class='mw'>23,680 mWh
</td><td class='mw'>23,680 mWh
</td></tr>
<tr class='even  243'><td class='dateTime'>2022-05-29
- 2022-06-05</td><td class='mw'>23,680 mWh
</td><td class='mw'>23,680 mWh
</td></tr>
<tr class='odd  244'><td class='dateTime'>2022-06-05
- 2022-06-12</td><td class='mw'>23,680 mWh
</td><td class='mw'>23,680 mWh
</td></tr>
<tr class='even  245'><td class='dateTime'>2022-06-12</td><td class='mw'>23,680 mWh
</td><td class='mw'>23,680 mWh
</td></tr>
<tr class='odd  246'><td class='dateTime'>2022-06-13</td><td class='mw'>23,680 mWh
</td><td class='mw'>23,680 mWh
</td></tr>
<tr class='even  247'><td class='dateTime'>2022-06-14</td><td class='mw'>23,680 mWh
</td><td class='mw'>23,680 mWh
</td></tr>
<tr class='odd  248'><td class='dateTime'>2022-06-15</td><td class='mw'>23,680 mWh
</td><td class='mw'>23,680 mWh
</td></tr>
<tr class='even  249'><td class='dateTime'>2022-06-16</td><td class='mw'>23,680 mWh
</td><td class='mw'>23,680 mWh
</td></tr>
<tr class='odd  250'><td class='dateTime'>2022-06-17</td><td class='mw'>23,680 mWh
</td><td class='mw'>23,680 mWh
</td></tr>
<tr class='even  251'><td class='dateTime'>2022-06-18</td><td class='mw'>23,680 mWh
</td><td class='mw'>23,680 mWh
</td></tr>
<tr class='odd  252'><td class='dateTime'>2022-06-19</td><td class='mw'>23,680 mWh
</td><td class='mw'>23,680 mWh
</td></tr>
<tr class='even  253'><td class='dateTime'>2022-06-20</td><td class='mw'>23,680 mWh
</td><td class='mw'>23,680 mWh
</td></tr>
<tr class='odd  254'><td class='dateTime'>2022-06-21</td><td class='mw'>23,680 mWh
</td><td class='mw'>23,680 mWh
</td></tr>
<tr class='even  255'><td class='dateTime'>2022-06-22</td><td class='mw'>23,680 mWh
</td><td class='mw'>23,680 mWh
</td></tr>
<tr class='odd  256'><td class='dateTime'>2022-06-23</td><td class='mw'>23,680 mWh
</td><td class='mw'>23,680 mWh
</td></tr>
<tr class='even  257'><td class='dateTime'>2022-06-24</td><td class='mw'>23,680 mWh
</td><td class='mw'>23,680 mWh
</td></tr></table><h2>
Battery life estimates
</h2><div class='explanation2'>
Battery life estimates based on observed drains
</div><table><colgroup><col/><col class='col2'/><col style='width: 10em;'/><col style=''/><col style='width: 10em;'/><col style='width: 10em;'/><col style='width: 10em;'/></colgroup><thead><tr class='rowHeader'><td> </td><td colspan='2' class='centered'>
AT FULL CHARGE
</td><td class='colBreak'> </td><td colspan='2' class='centered'>
AT DESIGN CAPACITY
</td></tr>
<tr class='rowHeader'><td>
PERIOD
</td><td class='centered'><span>ACTIVE</span></td><td class='centered'><span>CONNECTED STANDBY</span></td><td class='colBreak'> </td><td class='centered'><span>ACTIVE</span></td><td class='centered'><span>CONNECTED STANDBY</span></td></tr></thead><tr style='vertical-align:top' class='even  1'><td class='dateTime'>2017-07-03
- 2017-07-09</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  2'><td class='dateTime'>2017-07-09
- 2017-07-16</td><td class='hms'>2:04:54</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:04:54</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  3'><td class='dateTime'>2017-07-16
- 2017-07-23</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  4'><td class='dateTime'>2017-07-23
- 2017-07-30</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  5'><td class='dateTime'>2017-07-30
- 2017-08-06</td><td class='hms'>4:51:25</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>4:51:25</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  6'><td class='dateTime'>2017-08-06
- 2017-08-19</td><td class='hms'>2:05:43</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:05:43</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  7'><td class='dateTime'>2017-08-19
- 2017-08-24</td><td class='hms'>3:52:06</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:52:06</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  8'><td class='dateTime'>2017-08-24
- 2017-08-27</td><td class='hms'>3:30:57</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:30:57</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  9'><td class='dateTime'>2017-08-27
- 2017-09-03</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  10'><td class='dateTime'>2017-09-03
- 2017-09-10</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  11'><td class='dateTime'>2017-09-10
- 2017-09-24</td><td class='hms'>4:10:24</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>4:10:24</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  12'><td class='dateTime'>2017-09-24
- 2017-10-22</td><td class='hms'>3:56:05</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:56:05</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  13'><td class='dateTime'>2017-10-22
- 2017-11-06</td><td class='hms'>3:27:34</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:27:34</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  14'><td class='dateTime'>2017-11-06
- 2017-11-12</td><td class='hms'>2:56:14</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:56:14</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  15'><td class='dateTime'>2017-11-12
- 2017-11-20</td><td class='hms'>3:07:52</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:07:52</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  16'><td class='dateTime'>2017-11-20
- 2017-11-26</td><td class='hms'>3:13:04</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:13:04</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  17'><td class='dateTime'>2017-11-26
- 2017-12-03</td><td class='hms'>3:28:03</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:28:03</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  18'><td class='dateTime'>2017-12-03
- 2017-12-10</td><td class='hms'>3:27:00</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:27:00</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  19'><td class='dateTime'>2017-12-10
- 2017-12-17</td><td class='hms'>3:42:13</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:42:13</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  20'><td class='dateTime'>2017-12-17
- 2017-12-26</td><td class='hms'>3:36:04</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:36:04</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  21'><td class='dateTime'>2017-12-26
- 2018-01-01</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  22'><td class='dateTime'>2018-01-01
- 2018-01-07</td><td class='hms'>3:37:56</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:37:56</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  23'><td class='dateTime'>2018-01-07
- 2018-01-14</td><td class='hms'>2:35:37</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:35:37</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  24'><td class='dateTime'>2018-01-14
- 2018-01-21</td><td class='hms'>3:09:35</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:09:35</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  25'><td class='dateTime'>2018-01-21
- 2018-01-28</td><td class='hms'>3:30:31</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:30:31</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  26'><td class='dateTime'>2018-01-28
- 2018-02-04</td><td class='hms'>3:35:09</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:35:09</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  27'><td class='dateTime'>2018-02-04
- 2018-02-11</td><td class='hms'>3:32:20</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:32:20</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  28'><td class='dateTime'>2018-02-11
- 2018-02-18</td><td class='hms'>2:11:37</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:11:37</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  29'><td class='dateTime'>2018-02-18
- 2018-02-25</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  30'><td class='dateTime'>2018-02-25
- 2018-03-04</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  31'><td class='dateTime'>2018-03-04
- 2018-03-11</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  32'><td class='dateTime'>2018-03-11
- 2018-03-18</td><td class='hms'>2:29:01</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:29:01</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  33'><td class='dateTime'>2018-03-18
- 2018-03-25</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  34'><td class='dateTime'>2018-03-25
- 2018-04-02</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  35'><td class='dateTime'>2018-04-02
- 2018-04-08</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  36'><td class='dateTime'>2018-04-08
- 2018-04-15</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  37'><td class='dateTime'>2018-04-15
- 2018-04-22</td><td class='hms'>4:23:34</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>4:23:34</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  38'><td class='dateTime'>2018-04-22
- 2018-04-30</td><td class='hms'>6:03:28</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>6:03:28</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  39'><td class='dateTime'>2018-04-30
- 2018-05-07</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  40'><td class='dateTime'>2018-05-07
- 2018-05-13</td><td class='hms'>3:37:59</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:37:59</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  41'><td class='dateTime'>2018-05-13
- 2018-05-21</td><td class='hms'>3:17:05</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:17:05</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  42'><td class='dateTime'>2018-05-21
- 2018-05-27</td><td class='hms'>2:31:35</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:31:35</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  43'><td class='dateTime'>2018-05-27
- 2018-06-03</td><td class='hms'>3:20:07</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:20:07</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  44'><td class='dateTime'>2018-06-03
- 2018-06-11</td><td class='hms'>2:39:31</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:39:31</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  45'><td class='dateTime'>2018-06-11
- 2018-06-17</td><td class='hms'>2:36:38</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:36:38</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  46'><td class='dateTime'>2018-06-17
- 2018-06-25</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  47'><td class='dateTime'>2018-06-25
- 2018-07-03</td><td class='hms'>2:52:25</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:52:25</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  48'><td class='dateTime'>2018-07-03
- 2018-07-08</td><td class='hms'>2:09:34</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:09:34</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  49'><td class='dateTime'>2018-07-08
- 2018-07-15</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  50'><td class='dateTime'>2018-07-15
- 2018-07-24</td><td class='hms'>2:12:01</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:12:01</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  51'><td class='dateTime'>2018-07-24
- 2018-07-29</td><td class='hms'>3:06:48</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:06:48</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  52'><td class='dateTime'>2018-07-29
- 2018-08-05</td><td class='hms'>3:05:23</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:05:23</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  53'><td class='dateTime'>2018-08-05
- 2018-08-15</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  54'><td class='dateTime'>2018-08-15
- 2018-08-19</td><td class='hms'>3:03:07</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:03:07</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  55'><td class='dateTime'>2018-08-19
- 2018-08-26</td><td class='hms'>2:44:28</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:44:28</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  56'><td class='dateTime'>2018-08-26
- 2018-09-02</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  57'><td class='dateTime'>2018-09-02
- 2018-09-10</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  58'><td class='dateTime'>2018-09-10
- 2018-09-17</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  59'><td class='dateTime'>2018-09-17
- 2018-09-23</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  60'><td class='dateTime'>2018-09-23
- 2018-09-30</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  61'><td class='dateTime'>2018-09-30
- 2018-10-07</td><td class='hms'>2:54:36</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:54:36</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  62'><td class='dateTime'>2018-10-07
- 2018-10-14</td><td class='hms'>3:01:18</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:01:18</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  63'><td class='dateTime'>2018-10-14
- 2018-10-28</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  64'><td class='dateTime'>2018-10-28
- 2018-11-04</td><td class='hms'>2:58:04</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:58:04</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  65'><td class='dateTime'>2018-11-04
- 2018-11-13</td><td class='hms'>2:46:11</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:46:11</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  66'><td class='dateTime'>2018-11-13
- 2018-11-19</td><td class='hms'>3:11:46</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:11:46</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  67'><td class='dateTime'>2018-11-19
- 2018-11-25</td><td class='hms'>2:27:38</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:27:38</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  68'><td class='dateTime'>2018-11-25
- 2018-12-05</td><td class='hms'>2:10:21</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:10:21</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  69'><td class='dateTime'>2018-12-05
- 2018-12-09</td><td class='hms'>2:16:31</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:16:31</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  70'><td class='dateTime'>2018-12-09
- 2018-12-16</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  71'><td class='dateTime'>2018-12-16
- 2018-12-24</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  72'><td class='dateTime'>2018-12-24
- 2019-01-01</td><td class='hms'>2:32:29</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:32:29</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  73'><td class='dateTime'>2019-01-01
- 2019-01-06</td><td class='hms'>2:48:35</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:48:35</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  74'><td class='dateTime'>2019-01-06
- 2019-01-13</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  75'><td class='dateTime'>2019-01-13
- 2019-01-21</td><td class='hms'>2:27:12</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:27:12</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  76'><td class='dateTime'>2019-01-21
- 2019-01-27</td><td class='hms'>3:05:51</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:05:51</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  77'><td class='dateTime'>2019-01-27
- 2019-02-03</td><td class='hms'>2:24:14</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:24:14</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  78'><td class='dateTime'>2019-02-03
- 2019-02-10</td><td class='hms'>2:48:11</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:48:11</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  79'><td class='dateTime'>2019-02-10
- 2019-02-17</td><td class='hms'>3:00:00</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:00:00</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  80'><td class='dateTime'>2019-02-17
- 2019-02-26</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  81'><td class='dateTime'>2019-02-26
- 2019-03-05</td><td class='hms'>3:01:37</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:01:37</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  82'><td class='dateTime'>2019-03-05
- 2019-03-15</td><td class='hms'>2:41:25</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:41:25</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  83'><td class='dateTime'>2019-03-15
- 2019-03-17</td><td class='hms'>2:46:39</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:46:39</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  84'><td class='dateTime'>2019-03-17
- 2019-03-24</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  85'><td class='dateTime'>2019-03-24
- 2019-04-01</td><td class='hms'>2:51:05</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:51:05</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  86'><td class='dateTime'>2019-04-01
- 2019-04-07</td><td class='hms'>2:52:20</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:52:20</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  87'><td class='dateTime'>2019-04-07
- 2019-04-14</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  88'><td class='dateTime'>2019-04-14
- 2019-04-21</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  89'><td class='dateTime'>2019-04-21
- 2019-04-28</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  90'><td class='dateTime'>2019-04-28
- 2019-05-05</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  91'><td class='dateTime'>2019-05-05
- 2019-05-22</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  92'><td class='dateTime'>2019-05-22
- 2019-05-31</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  93'><td class='dateTime'>2019-05-31
- 2019-06-02</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  94'><td class='dateTime'>2019-06-02
- 2019-06-09</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  95'><td class='dateTime'>2019-06-09
- 2019-06-17</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  96'><td class='dateTime'>2019-06-17
- 2019-06-25</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  97'><td class='dateTime'>2019-06-25
- 2019-06-30</td><td class='hms'>3:10:43</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:10:43</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  98'><td class='dateTime'>2019-06-30
- 2019-07-08</td><td class='hms'>2:54:25</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:54:25</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  99'><td class='dateTime'>2019-07-08
- 2019-07-16</td><td class='hms'>3:14:23</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:14:23</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  100'><td class='dateTime'>2019-07-16
- 2019-07-28</td><td class='hms'>3:11:23</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:11:23</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  101'><td class='dateTime'>2019-07-28
- 2019-08-04</td><td class='hms'>1:55:34</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>1:55:34</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  102'><td class='dateTime'>2019-08-04
- 2019-08-11</td><td class='hms'>2:56:56</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:56:56</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  103'><td class='dateTime'>2019-08-11
- 2019-08-20</td><td class='hms'>3:15:29</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:15:29</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  104'><td class='dateTime'>2019-08-20
- 2019-08-26</td><td class='hms'>2:46:28</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:46:28</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  105'><td class='dateTime'>2019-08-26
- 2019-09-01</td><td class='hms'>3:12:23</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:12:23</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  106'><td class='dateTime'>2019-09-01
- 2019-09-08</td><td class='hms'>3:21:30</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:21:30</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  107'><td class='dateTime'>2019-09-08
- 2019-09-15</td><td class='hms'>2:53:50</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:53:50</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  108'><td class='dateTime'>2019-09-15
- 2019-09-22</td><td class='hms'>4:13:53</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>4:13:53</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  109'><td class='dateTime'>2019-09-22
- 2019-09-29</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  110'><td class='dateTime'>2019-09-29
- 2019-10-06</td><td class='hms'>3:13:07</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:13:07</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  111'><td class='dateTime'>2019-10-06
- 2019-10-13</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  112'><td class='dateTime'>2019-10-13
- 2019-10-20</td><td class='hms'>2:51:57</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:51:57</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  113'><td class='dateTime'>2019-10-20
- 2019-10-27</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  114'><td class='dateTime'>2019-10-27
- 2019-11-03</td><td class='hms'>3:00:17</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:00:17</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  115'><td class='dateTime'>2019-11-03
- 2019-11-10</td><td class='hms'>2:43:10</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:43:10</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  116'><td class='dateTime'>2019-11-10
- 2019-11-17</td><td class='hms'>2:52:57</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:52:57</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  117'><td class='dateTime'>2019-11-17
- 2019-11-24</td><td class='hms'>2:53:05</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:53:05</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  118'><td class='dateTime'>2019-11-24
- 2019-12-01</td><td class='hms'>2:49:48</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:49:48</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  119'><td class='dateTime'>2019-12-01
- 2019-12-08</td><td class='hms'>3:04:59</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:04:59</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  120'><td class='dateTime'>2019-12-08
- 2019-12-15</td><td class='hms'>2:58:21</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:58:21</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  121'><td class='dateTime'>2019-12-15
- 2019-12-22</td><td class='hms'>3:08:58</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:08:58</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  122'><td class='dateTime'>2019-12-22
- 2020-01-03</td><td class='hms'>3:06:09</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:06:09</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  123'><td class='dateTime'>2020-01-03
- 2020-01-06</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  124'><td class='dateTime'>2020-01-06
- 2020-01-13</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  125'><td class='dateTime'>2020-01-13
- 2020-01-20</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  126'><td class='dateTime'>2020-01-20
- 2020-01-26</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  127'><td class='dateTime'>2020-01-26
- 2020-02-02</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  128'><td class='dateTime'>2020-02-02
- 2020-02-09</td><td class='hms'>2:55:33</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:55:33</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  129'><td class='dateTime'>2020-02-09
- 2020-02-16</td><td class='hms'>2:51:15</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:51:15</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  130'><td class='dateTime'>2020-02-16
- 2020-02-24</td><td class='hms'>3:09:53</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:09:53</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  131'><td class='dateTime'>2020-02-24
- 2020-03-02</td><td class='hms'>2:59:26</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:59:26</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  132'><td class='dateTime'>2020-03-02
- 2020-03-08</td><td class='hms'>2:55:31</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:55:31</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  133'><td class='dateTime'>2020-03-08
- 2020-03-15</td><td class='hms'>2:11:33</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:11:33</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  134'><td class='dateTime'>2020-03-15
- 2020-03-22</td><td class='hms'>4:11:07</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>4:11:07</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  135'><td class='dateTime'>2020-03-22
- 2020-03-29</td><td class='hms'>2:58:01</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:58:01</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  136'><td class='dateTime'>2020-03-29
- 2020-04-05</td><td class='hms'>2:32:39</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:32:39</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  137'><td class='dateTime'>2020-04-05
- 2020-04-12</td><td class='hms'>2:17:27</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:17:27</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  138'><td class='dateTime'>2020-04-12
- 2020-04-19</td><td class='hms'>2:31:04</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:31:04</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  139'><td class='dateTime'>2020-04-19
- 2020-04-26</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  140'><td class='dateTime'>2020-04-26
- 2020-05-03</td><td class='hms'>2:31:04</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:31:04</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  141'><td class='dateTime'>2020-05-03
- 2020-05-10</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  142'><td class='dateTime'>2020-05-10
- 2020-05-17</td><td class='hms'>2:43:07</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:43:07</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  143'><td class='dateTime'>2020-05-17
- 2020-05-24</td><td class='hms'>2:37:32</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:37:32</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  144'><td class='dateTime'>2020-05-24
- 2020-05-31</td><td class='hms'>2:39:12</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:39:12</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  145'><td class='dateTime'>2020-05-31
- 2020-06-07</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  146'><td class='dateTime'>2020-06-07
- 2020-06-14</td><td class='hms'>2:38:50</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:38:50</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  147'><td class='dateTime'>2020-06-14
- 2020-06-21</td><td class='hms'>3:12:28</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:12:28</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  148'><td class='dateTime'>2020-06-21
- 2020-07-06</td><td class='hms'>3:25:56</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:25:56</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  149'><td class='dateTime'>2020-07-06
- 2020-07-12</td><td class='hms'>2:45:12</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:45:12</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  150'><td class='dateTime'>2020-07-12
- 2020-07-19</td><td class='hms'>2:43:47</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:43:47</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  151'><td class='dateTime'>2020-07-19
- 2020-07-27</td><td class='hms'>2:41:37</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:41:37</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  152'><td class='dateTime'>2020-07-27
- 2020-08-02</td><td class='hms'>2:49:52</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:49:52</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  153'><td class='dateTime'>2020-08-02
- 2020-08-09</td><td class='hms'>2:11:45</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:11:45</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  154'><td class='dateTime'>2020-08-09
- 2020-08-16</td><td class='hms'>2:40:55</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:40:55</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  155'><td class='dateTime'>2020-08-16
- 2020-08-24</td><td class='hms'>3:17:25</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:17:25</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  156'><td class='dateTime'>2020-08-24
- 2020-08-31</td><td class='hms'>2:40:59</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:40:59</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  157'><td class='dateTime'>2020-08-31
- 2020-09-09</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  158'><td class='dateTime'>2020-09-09
- 2020-09-14</td><td class='hms'>2:51:20</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:51:20</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  159'><td class='dateTime'>2020-09-14
- 2020-09-20</td><td class='hms'>2:49:16</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:49:16</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  160'><td class='dateTime'>2020-09-20
- 2020-09-28</td><td class='hms'>3:13:56</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:13:56</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  161'><td class='dateTime'>2020-09-28
- 2020-10-06</td><td class='hms'>2:50:33</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:50:33</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  162'><td class='dateTime'>2020-10-06
- 2020-10-12</td><td class='hms'>152:04:24</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>152:04:24</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  163'><td class='dateTime'>2020-10-12
- 2020-10-18</td><td class='hms'>2:40:22</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:40:22</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  164'><td class='dateTime'>2020-10-18
- 2020-10-28</td><td class='hms'>9:43:41</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>9:43:41</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  165'><td class='dateTime'>2020-10-28
- 2020-11-04</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  166'><td class='dateTime'>2020-11-04
- 2020-11-09</td><td class='hms'>2:35:07</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:35:07</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  167'><td class='dateTime'>2020-11-09
- 2020-11-15</td><td class='hms'>2:45:51</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:45:51</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  168'><td class='dateTime'>2020-11-15
- 2020-11-22</td><td class='hms'>2:11:47</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:11:47</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  169'><td class='dateTime'>2020-11-22
- 2020-11-30</td><td class='hms'>3:09:24</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:09:24</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  170'><td class='dateTime'>2020-11-30
- 2020-12-06</td><td class='hms'>2:38:49</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:38:49</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  171'><td class='dateTime'>2020-12-06
- 2020-12-13</td><td class='hms'>2:33:59</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:33:59</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  172'><td class='dateTime'>2020-12-13
- 2020-12-22</td><td class='hms'>26:29:48</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>26:29:48</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  173'><td class='dateTime'>2020-12-22
- 2020-12-27</td><td class='hms'>2:24:12</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:24:12</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  174'><td class='dateTime'>2020-12-27
- 2021-01-06</td><td class='hms'>2:13:13</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:13:13</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  175'><td class='dateTime'>2021-01-06
- 2021-01-10</td><td class='hms'>2:04:36</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:04:36</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  176'><td class='dateTime'>2021-01-10
- 2021-01-17</td><td class='hms'>2:05:15</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:05:15</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  177'><td class='dateTime'>2021-01-17
- 2021-01-24</td><td class='hms'>2:19:23</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:19:23</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  178'><td class='dateTime'>2021-01-24
- 2021-01-31</td><td class='hms'>2:18:20</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:18:20</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  179'><td class='dateTime'>2021-01-31
- 2021-02-08</td><td class='hms'>2:36:55</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:36:55</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  180'><td class='dateTime'>2021-02-08
- 2021-02-17</td><td class='hms'>2:38:03</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:38:03</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  181'><td class='dateTime'>2021-02-17
- 2021-02-21</td><td class='hms'>2:13:00</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:13:00</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  182'><td class='dateTime'>2021-02-21
- 2021-03-01</td><td class='hms'>2:38:56</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:38:56</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  183'><td class='dateTime'>2021-03-01
- 2021-03-07</td><td class='hms'>2:30:01</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:30:01</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  184'><td class='dateTime'>2021-03-07
- 2021-03-15</td><td class='hms'>2:33:06</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:33:06</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  185'><td class='dateTime'>2021-03-15
- 2021-03-30</td><td class='hms'>2:52:13</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:52:13</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  186'><td class='dateTime'>2021-03-30
- 2021-04-07</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  187'><td class='dateTime'>2021-04-07
- 2021-04-12</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  188'><td class='dateTime'>2021-04-12
- 2021-04-25</td><td class='hms'>4:38:33</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>4:38:33</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  189'><td class='dateTime'>2021-04-25
- 2021-05-02</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  190'><td class='dateTime'>2021-05-02
- 2021-05-09</td><td class='hms'>2:27:06</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:27:06</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  191'><td class='dateTime'>2021-05-09
- 2021-05-23</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  192'><td class='dateTime'>2021-05-23
- 2021-06-02</td><td class='hms'>2:18:54</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:18:54</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  193'><td class='dateTime'>2021-06-02
- 2021-06-07</td><td class='hms'>1:28:39</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>1:28:39</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  194'><td class='dateTime'>2021-06-07
- 2021-06-13</td><td class='hms'>1:47:24</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>1:47:24</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  195'><td class='dateTime'>2021-06-13
- 2021-06-28</td><td class='hms'>2:55:37</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:55:37</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  196'><td class='dateTime'>2021-06-28
- 2021-07-06</td><td class='hms'>2:34:14</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:34:14</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  197'><td class='dateTime'>2021-07-06
- 2021-07-15</td><td class='hms'>2:04:28</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:04:28</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  198'><td class='dateTime'>2021-07-15
- 2021-07-20</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  199'><td class='dateTime'>2021-07-20
- 2021-07-25</td><td class='hms'>2:02:44</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:02:44</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  200'><td class='dateTime'>2021-07-25
- 2021-08-05</td><td class='hms'>2:22:55</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:22:55</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  201'><td class='dateTime'>2021-08-05
- 2021-08-08</td><td class='hms'>3:08:59</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:08:59</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  202'><td class='dateTime'>2021-08-08
- 2021-08-16</td><td class='hms'>2:26:07</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:26:07</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  203'><td class='dateTime'>2021-08-16
- 2021-08-25</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  204'><td class='dateTime'>2021-08-25
- 2021-08-29</td><td class='hms'>2:24:25</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:24:25</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  205'><td class='dateTime'>2021-08-29
- 2021-09-06</td><td class='hms'>2:58:30</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:58:30</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  206'><td class='dateTime'>2021-09-06
- 2021-09-15</td><td class='hms'>2:54:33</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:54:33</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  207'><td class='dateTime'>2021-09-15
- 2021-09-19</td><td class='hms'>0:58:08</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>0:58:08</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  208'><td class='dateTime'>2021-09-19
- 2021-09-28</td><td class='hms'>2:40:05</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:40:05</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  209'><td class='dateTime'>2021-09-28
- 2021-10-03</td><td class='hms'>2:47:40</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:47:40</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  210'><td class='dateTime'>2021-10-03
- 2021-10-12</td><td class='hms'>2:48:09</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:48:09</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  211'><td class='dateTime'>2021-10-12
- 2021-10-17</td><td class='hms'>1:38:28</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>1:38:28</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  212'><td class='dateTime'>2021-10-17
- 2021-10-25</td><td class='hms'>3:21:15</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:21:15</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  213'><td class='dateTime'>2021-10-25
- 2021-11-10</td><td class='hms'>3:05:34</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>3:05:34</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  214'><td class='dateTime'>2021-11-10
- 2021-11-15</td><td class='hms'>2:41:10</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:41:10</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  215'><td class='dateTime'>2021-11-15
- 2021-11-21</td><td class='hms'>2:52:00</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:52:00</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  216'><td class='dateTime'>2021-11-21
- 2021-11-28</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  217'><td class='dateTime'>2021-11-28
- 2021-12-05</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  218'><td class='dateTime'>2021-12-05
- 2021-12-12</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  219'><td class='dateTime'>2021-12-12
- 2021-12-19</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  220'><td class='dateTime'>2021-12-19
- 2021-12-26</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  221'><td class='dateTime'>2021-12-26
- 2022-01-02</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  222'><td class='dateTime'>2022-01-02
- 2022-01-09</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  223'><td class='dateTime'>2022-01-09
- 2022-01-16</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  224'><td class='dateTime'>2022-01-16
- 2022-01-23</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  225'><td class='dateTime'>2022-01-23
- 2022-01-30</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  226'><td class='dateTime'>2022-01-30
- 2022-02-06</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  227'><td class='dateTime'>2022-02-06
- 2022-02-13</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  228'><td class='dateTime'>2022-02-13
- 2022-02-20</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  229'><td class='dateTime'>2022-02-20
- 2022-02-27</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  230'><td class='dateTime'>2022-02-27
- 2022-03-06</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  231'><td class='dateTime'>2022-03-06
- 2022-03-13</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  232'><td class='dateTime'>2022-03-13
- 2022-03-20</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  233'><td class='dateTime'>2022-03-20
- 2022-03-27</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  234'><td class='dateTime'>2022-03-27
- 2022-04-03</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  235'><td class='dateTime'>2022-04-03
- 2022-04-10</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  236'><td class='dateTime'>2022-04-10
- 2022-04-17</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  237'><td class='dateTime'>2022-04-17
- 2022-04-24</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  238'><td class='dateTime'>2022-04-24
- 2022-05-01</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  239'><td class='dateTime'>2022-05-01
- 2022-05-08</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  240'><td class='dateTime'>2022-05-08
- 2022-05-15</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  241'><td class='dateTime'>2022-05-15
- 2022-05-22</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  242'><td class='dateTime'>2022-05-22
- 2022-05-29</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  243'><td class='dateTime'>2022-05-29
- 2022-06-05</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  244'><td class='dateTime'>2022-06-05
- 2022-06-12</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  245'><td class='dateTime'>2022-06-12</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  246'><td class='dateTime'>2022-06-13</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  247'><td class='dateTime'>2022-06-14</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  248'><td class='dateTime'>2022-06-15</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  249'><td class='dateTime'>2022-06-16</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  250'><td class='dateTime'>2022-06-17</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  251'><td class='dateTime'>2022-06-18</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  252'><td class='dateTime'>2022-06-19</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  253'><td class='dateTime'>2022-06-20</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  254'><td class='dateTime'>2022-06-21</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  255'><td class='dateTime'>2022-06-22</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='odd  256'><td class='dateTime'>2022-06-23</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr>
<tr style='vertical-align:top' class='even  257'><td class='dateTime'>2022-06-24</td><td class='nullValue'>-</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='nullValue'>-</td><td class='nullValue'>-</td></tr></table><div class='explanation2' style='margin-top: 1em; margin-bottom: 0.4em;'>
Current estimate of battery life based on all observed drains since OS install
</div><table><colgroup><col/><col class='col2'/><col style='width: 10em;'/><col style=''/><col style='width: 10em;'/><col style='width: 10em;'/><col style='width: 10em;'/></colgroup><tr class='even' style='vertical-align:top'><td>
Since OS install
</td><td class='hms'>2:47:11</td><td class='nullValue'>-</td><td class='colBreak'> </td><td class='hms'>2:47:11</td><td class='nullValue'>-</td></tr></table><br/><br/><br/></body></html>">
</iframe>

Yep - the battery was about dead. After all, it's been five years.

I ordered a new one with as as much amp-hours as I can find - a [NinjaBatt Pro Battery 2600mAh](https://www.amazon.com/dp/B07KWXHLWT?tag=hendrixjoseph-20) - and replaced her old one.

And her battery is now happily at 100% again.