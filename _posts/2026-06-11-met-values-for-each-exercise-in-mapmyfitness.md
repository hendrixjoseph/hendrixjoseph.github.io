---
layout: post
title: MET Values for each Exercise in MapMyFitness
tags: [health]
keywords: [fitness]
---

Sometimes I want to do an exercise and record it in MapMyFitness, but MapMyFitness doesn't have that particular exercise. So I choose the next-closest exercise.

For instance, sometimes I *ruck* - I walk around the neighborhood wearing a backpack with weights. (I use [a HYPERWEAR® Rucking Backpack](https://www.amazon.com/dp/B0CTFQ6R4X/?tag=hendrixjoseph-20) with [Yes4All Rucking Weights](https://www.amazon.com/dp/B09T66GRVQ/?tag=hendrixjoseph-20)). In those cases, I choose the next closest activity - in the case of rucking, I choose one of *Hiking, Light or No Pack*, *Hiking, Medium Pack*, or *Hiking, Heavy Pack* depending on how much weight I'm carrying.

I was wondering, however, how close were these options to my actual exercise? Most exercises have an associated MET value, or [metabolic equivalent of task](https://en.wikipedia.org/wiki/Metabolic_equivalent_of_task). Most common exercises have published MET values. MET values determine how many calories a given activity burns per unit time and can generally be thought of as a multiple of the calories burned at rest. Therefore, for the same person and duration, an exercise with a MET value of 4 would burn roughly twice as many calories as an exercise with a MET value of 2.

MapMyFitness doesn't show the MET value when you choose an exercise. It does, however, expose it via the API. So I retrieved the data from the API and compiled it into the table below.

The API is documented at <https://developer.mapmyfitness.com/docs/v71_Activity_Type/>. The actual endpoint I hit is <https://web-api.mapmyfitness.com/v7.2/activity_type/>. (You'll probably get an HTTP ERROR 401 if you click on that link - it needs a special header value called a *bearer token* that isn't easily passed via a simple browser session).

One thing that was interesting about the response is that some exercises didn't have a single MET value - they had several depending on the speed. For instance, the exercise *Walk* has a MET value of 3.0, but also 21 different MET values ranging from a MET value of 2 at a speed of 0.44704 to a MET value of 23 at a speed of 6.25856. The values appear to be meters per second, based on the corresponding paces: 0.44704 m/s is a pace of 60 minutes / mile and 6.25856 is a pace of just over 4 minutes / mile. The faster the walk, the greater the MET value.

The table below lists the MapMyFitness MET values for every activity type currently exposed by the API. Activities that have multiple speed-dependent MET values are marked with an asterisk (\*).

## MapMyFitness MET Values

<table id="activity-table">
<thead>
 <tr>
    <th><span></span>Activity Name</th>
    <th><span></span>MET value</th>
 </tr>
 <tr>
    <th>
        <input id="name-filter" list="activity-names"/>
    </th>
    <th>
        <input id="min-mets-filter" type="range" min="0" max="15" step="0.5" value="15" />
        <input id="max-mets-filter" type="range" min="0" max="15" step="0.5" value="15" />
    </th>
 </tr>
</thead>
<tbody>
<tr><td>10-Minute Trainer</td><td>7</td></tr>
<tr><td>10Acious: Abs</td><td>7</td></tr>
<tr><td>10Acious: Arms</td><td>7</td></tr>
<tr><td>10Acious: Butt</td><td>7</td></tr>
<tr><td>10Acious: Full Body</td><td>7</td></tr>
<tr><td>10Acious: HIIT</td><td>7</td></tr>
<tr><td>10Acious: Legs</td><td>7</td></tr>
<tr><td>10Acious: Plyo</td><td>7</td></tr>
<tr><td>10Acious: Power Flex</td><td>7</td></tr>
<tr><td>10Acious: Shoulders</td><td>7</td></tr>
<tr><td>10Acious: Upper Body</td><td>7</td></tr>
<tr><td>21 Day Challenge</td><td>8</td></tr>
<tr><td>21 Day Fix</td><td>7</td></tr>
<tr><td>21 Day Fix Extreme</td><td>7</td></tr>
<tr><td>21s - EZ Bar</td><td>6</td></tr>
<tr><td>22 Minute Hard Corp</td><td>7</td></tr>
<tr><td>3 Week Yoga Retreat</td><td>3</td></tr>
<tr><td>30 Day Fitness Challenge</td><td>5.5</td></tr>
<tr><td>7 Minute Workout</td><td>5.5</td></tr>
<tr><td>8 Count Body Builders</td><td>6</td></tr>
<tr><td>80 Day Obsession</td><td>7</td></tr>
<tr><td>9Round</td><td>5</td></tr>
<tr><td>Aaptiv</td><td>6</td></tr>
<tr><td>Ab Roller</td><td>6</td></tr>
<tr><td>Abdominals</td><td>6</td></tr>
<tr><td>Abdominals with Weights, Other</td><td>6</td></tr>
<tr><td>Abs</td><td>6</td></tr>
<tr><td>Abs Video</td><td>3.5</td></tr>
<tr><td>Action Cricket / Indoor Cricket</td><td>5</td></tr>
<tr><td>Active Release Treatment</td><td>1.3</td></tr>
<tr><td>Activity Tracker</td><td>0</td></tr>
<tr><td>Adventure Race / Event</td><td>5.5</td></tr>
<tr><td>Aerobic</td><td>6.5</td></tr>
<tr><td>Aerobics</td><td>6.5</td></tr>
<tr><td>Aikido</td><td>10</td></tr>
<tr><td>Airbike*</td><td>8</td></tr>
<tr><td>Airplane</td><td>1.5</td></tr>
<tr><td>Alternate Heel Touchers</td><td>6</td></tr>
<tr><td>Aqua Fit</td><td>4</td></tr>
<tr><td>Aquaforme</td><td>4</td></tr>
<tr><td>Aquathlon</td><td>7</td></tr>
<tr><td>Arc Trainer</td><td>8</td></tr>
<tr><td>Arnold Dumbbell Press</td><td>6</td></tr>
<tr><td>Around the Worlds</td><td>6</td></tr>
<tr><td>Asana Rebel</td><td>4</td></tr>
<tr><td>Ashtanga Yoga</td><td>7</td></tr>
<tr><td>Back Extensions</td><td>6</td></tr>
<tr><td>Backcountry Skiing</td><td>7</td></tr>
<tr><td>Badminton</td><td>4.5</td></tr>
<tr><td>Ball Floor Bridge, Abdominals</td><td>6</td></tr>
<tr><td>Ball Floor Bridge, Lower Back</td><td>6</td></tr>
<tr><td>Ball Knee Raise - Supine</td><td>6</td></tr>
<tr><td>Ballet</td><td>4.5</td></tr>
<tr><td>Ballroom Dancing</td><td>4.8</td></tr>
<tr><td>Ballroom Dancing</td><td>4.5</td></tr>
<tr><td>Barbell Curl - Lying Against Incline</td><td>6</td></tr>
<tr><td>Barbell Curl - Seated, Concentration</td><td>6</td></tr>
<tr><td>Barbell Curl - Standing</td><td>6</td></tr>
<tr><td>Barbell Deadlift</td><td>6</td></tr>
<tr><td>Barbell Step Ups</td><td>6</td></tr>
<tr><td>Barre Workout</td><td>5.5</td></tr>
<tr><td>Barre3</td><td>5</td></tr>
<tr><td>Barry's Bootcamp</td><td>7</td></tr>
<tr><td>Baseball</td><td>5</td></tr>
<tr><td>Basic Training</td><td>5.5</td></tr>
<tr><td>Basketball</td><td>6</td></tr>
<tr><td>BBG</td><td>5.5</td></tr>
<tr><td>Beach Cruiser*</td><td>8</td></tr>
<tr><td>Beach Volleyball</td><td>8</td></tr>
<tr><td>Beachbody Video</td><td>5.5</td></tr>
<tr><td>Beginner Bootcamp: Basics</td><td>7</td></tr>
<tr><td>Beginner Bootcamp: Circuit</td><td>7</td></tr>
<tr><td>Beginner Bootcamp: Lower Body</td><td>7</td></tr>
<tr><td>Beginner Bootcamp: Punches & Kicks</td><td>7</td></tr>
<tr><td>Beginner Bootcamp: Upper Body</td><td>7</td></tr>
<tr><td>Belly Dancing</td><td>4.5</td></tr>
<tr><td>Bench Dips</td><td>6</td></tr>
<tr><td>Bench Press - Barbell, Declined</td><td>6</td></tr>
<tr><td>Bench Press - Barbell, Flat</td><td>6</td></tr>
<tr><td>Bench Press - Barbell, Flat, Wide Grip</td><td>6</td></tr>
<tr><td>Bench Press - Barbell, Inclined</td><td>6</td></tr>
<tr><td>Bench Press - Dumbbell, Flat</td><td>6</td></tr>
<tr><td>Bench Press - Dumbbells, Inclined</td><td>6</td></tr>
<tr><td>Bench Press - Dumbell Declined</td><td>6</td></tr>
<tr><td>Bench Press - Inclined, Hammer Grip</td><td>6</td></tr>
<tr><td>Bench Press - Machine</td><td>6</td></tr>
<tr><td>Bench Press - Smith Machine</td><td>6</td></tr>
<tr><td>Bench Press Chest Close-Grip</td><td>6</td></tr>
<tr><td>Bench Press Triceps Close-Grip</td><td>6</td></tr>
<tr><td>Bent Over Dumbbell Row</td><td>6</td></tr>
<tr><td>Bent-Arm Dumbbell Pullover</td><td>6</td></tr>
<tr><td>BetterMe</td><td>5.5</td></tr>
<tr><td>Biceps</td><td>6</td></tr>
<tr><td>Biceps with Weights, Other</td><td>6</td></tr>
<tr><td>Bicycle Kicks</td><td>6</td></tr>
<tr><td>Bike</td><td>7</td></tr>
<tr><td>Bike Ride*</td><td>8</td></tr>
<tr><td>Bike Ride Commute, Fixed Gear*</td><td>8</td></tr>
<tr><td>Bike Ride Commute, Mountain Biking*</td><td>8.5</td></tr>
<tr><td>Bike Ride Commute, Road Cycling*</td><td>8</td></tr>
<tr><td>Bikram</td><td>10</td></tr>
<tr><td>Bird Dogs, Abdominals</td><td>6</td></tr>
<tr><td>Bird Dogs, Lower Back</td><td>6</td></tr>
<tr><td>BLT</td><td>6.5</td></tr>
<tr><td>BMX*</td><td>8</td></tr>
<tr><td>Board Diving</td><td>6</td></tr>
<tr><td>Body Attack</td><td>5.5</td></tr>
<tr><td>Body Beast</td><td>7</td></tr>
<tr><td>Body Combat</td><td>8</td></tr>
<tr><td>Body Combat, Misc.</td><td>7</td></tr>
<tr><td>Body Pump</td><td>8</td></tr>
<tr><td>Body Weight Squats</td><td>6</td></tr>
<tr><td>Bodybuilding.com</td><td>5.5</td></tr>
<tr><td>Boosted Board</td><td>3</td></tr>
<tr><td>Bootcamp</td><td>8</td></tr>
<tr><td>Bootcamp Workout</td><td>8</td></tr>
<tr><td>BOSU Step Over, Hamstrings</td><td>6</td></tr>
<tr><td>BOSU Step Over, Quads</td><td>6</td></tr>
<tr><td>Bouldering</td><td>10</td></tr>
<tr><td>Bowflex Max Trainer</td><td>8</td></tr>
<tr><td>Bowflex Treadclimber</td><td>7</td></tr>
<tr><td>Bowling</td><td>3</td></tr>
<tr><td>Boxing Class</td><td>6</td></tr>
<tr><td>Boxing, Indoor</td><td>5.5</td></tr>
<tr><td>Boxing, Machine</td><td>9</td></tr>
<tr><td>Brazil Butt Lift</td><td>7</td></tr>
<tr><td>Brick</td><td>5.5</td></tr>
<tr><td>Brick Session</td><td>8</td></tr>
<tr><td>Brick Workout*</td><td>8</td></tr>
<tr><td>Brisk Walk*</td><td>3</td></tr>
<tr><td>British Military Fitness</td><td>8</td></tr>
<tr><td>Butterfly</td><td>6</td></tr>
<tr><td>Byron Front raises</td><td>6</td></tr>
<tr><td>C25K*</td><td>8</td></tr>
<tr><td>Cable Chop</td><td>6</td></tr>
<tr><td>Cable Crossover</td><td>6</td></tr>
<tr><td>Cable Curl - Lying</td><td>6</td></tr>
<tr><td>Cable Curl - Overhead</td><td>6</td></tr>
<tr><td>Cable Curl - Preacher Curl</td><td>6</td></tr>
<tr><td>Cable Curl - Standing</td><td>6</td></tr>
<tr><td>Cable Curl - Standing, One Arm</td><td>6</td></tr>
<tr><td>Cable Curl- High pulley</td><td>6</td></tr>
<tr><td>Cable internal rotation</td><td>6</td></tr>
<tr><td>Cable Press - One Arm, Rotate</td><td>6</td></tr>
<tr><td>Cable Pulls, Middle Back Alternating</td><td>6</td></tr>
<tr><td>Cable Pulls, Upper Back Alternating</td><td>6</td></tr>
<tr><td>Cable Rope Rear-Delt Rows</td><td>6</td></tr>
<tr><td>Cable Seated Rear Lateral Raise</td><td>6</td></tr>
<tr><td>Calf Press - Leg press machine</td><td>6</td></tr>
<tr><td>Calf Raise - Barbell, seated</td><td>6</td></tr>
<tr><td>Calf raise - barbell, standing</td><td>6</td></tr>
<tr><td>Calf raise - Dumbbell, seated, one leg</td><td>6</td></tr>
<tr><td>Calf raise - dumbell standing</td><td>6</td></tr>
<tr><td>Calf raise - seated, machine</td><td>6</td></tr>
<tr><td>Calf raise - smith machine, reversed</td><td>6</td></tr>
<tr><td>Calf raise - with bands</td><td>6</td></tr>
<tr><td>Calf-Machine Shoulder Shrug</td><td>6</td></tr>
<tr><td>Calisthenics</td><td>8</td></tr>
<tr><td>Calves</td><td>6</td></tr>
<tr><td>Calves with Weights, Other</td><td>6</td></tr>
<tr><td>Camp Gladiator</td><td>7</td></tr>
<tr><td>Camping</td><td>5.5</td></tr>
<tr><td>Canoeing</td><td>5.5</td></tr>
<tr><td>Canoeing, High Intensity</td><td>12</td></tr>
<tr><td>Canoeing, Low Intensity</td><td>3.5</td></tr>
<tr><td>Canoeing, Medium Intensity</td><td>7</td></tr>
<tr><td>Car</td><td>1.5</td></tr>
<tr><td>Cardio Sculpt: Dance Sculpt</td><td>7</td></tr>
<tr><td>Cardio Sculpt: Explosion</td><td>7</td></tr>
<tr><td>Cardio Sculpt: Kick & Sculpt</td><td>7</td></tr>
<tr><td>Cardio Sculpt: Lower Body Burn</td><td>7</td></tr>
<tr><td>Cardio Sculpt: Power</td><td>7</td></tr>
<tr><td>Cardio Sculpt: Punch & Sculpt</td><td>7</td></tr>
<tr><td>Cardiovascular (CV) Circuit Training</td><td>8</td></tr>
<tr><td>Carrying Child, Walk*</td><td>3.3</td></tr>
<tr><td>Casual Walk*</td><td>3</td></tr>
<tr><td>Centr</td><td>5.5</td></tr>
<tr><td>Ceroc</td><td>4.5</td></tr>
<tr><td>ChaLEAN Extreme</td><td>8</td></tr>
<tr><td>Cheerleading</td><td>5.5</td></tr>
<tr><td>Chest</td><td>6</td></tr>
<tr><td>Chest with Weights, Other</td><td>6</td></tr>
<tr><td>Chicometrics</td><td>8</td></tr>
<tr><td>Chin-ups, Biceps</td><td>6</td></tr>
<tr><td>Chin-ups, Upper Back</td><td>6</td></tr>
<tr><td>Circle Swim</td><td>7</td></tr>
<tr><td>Circuit Training</td><td>5.5</td></tr>
<tr><td>Cize</td><td>7</td></tr>
<tr><td>Class Workout</td><td>5.5</td></tr>
<tr><td>Cleaning (Light)</td><td>2.5</td></tr>
<tr><td>Climbing Stairs, Indoor Running</td><td>15</td></tr>
<tr><td>Climbing Stairs, Indoor Walking</td><td>8</td></tr>
<tr><td>Climbing Stairs, Running</td><td>15</td></tr>
<tr><td>Climbing Stairs, Walking</td><td>8</td></tr>
<tr><td>Club Pilates</td><td>5</td></tr>
<tr><td>Computrainer*</td><td>8</td></tr>
<tr><td>Concentration Curl</td><td>6</td></tr>
<tr><td>Conditioning</td><td>2.5</td></tr>
<tr><td>Core de Force</td><td>7</td></tr>
<tr><td>Core Secret Ball</td><td>3.5</td></tr>
<tr><td>CorePower Yoga</td><td>5</td></tr>
<tr><td>Couch to 5K*</td><td>8</td></tr>
<tr><td>Country Heat</td><td>5.5</td></tr>
<tr><td>Cricket</td><td>5</td></tr>
<tr><td>Cross Country Hiking</td><td>6</td></tr>
<tr><td>Cross Country Running*</td><td>8</td></tr>
<tr><td>Cross Country Skiing*</td><td>8</td></tr>
<tr><td>Cross Country, Winter</td><td>7</td></tr>
<tr><td>Cross Trainer</td><td>8</td></tr>
<tr><td>Cross Trainer</td><td>8</td></tr>
<tr><td>CrossFit Class</td><td>8</td></tr>
<tr><td>CrossFit Video</td><td>8</td></tr>
<tr><td>Cruiser Bike*</td><td>8</td></tr>
<tr><td>Crunch - Cable</td><td>6</td></tr>
<tr><td>Crunch - Cross Body</td><td>6</td></tr>
<tr><td>Crunch - Decline</td><td>6</td></tr>
<tr><td>Crunch - Decline Reverse</td><td>6</td></tr>
<tr><td>Crunch - Excercise Ball</td><td>6</td></tr>
<tr><td>Crunch - Legs on Exercise Ball</td><td>6</td></tr>
<tr><td>Crunch - Machine</td><td>6</td></tr>
<tr><td>Crunch - Oblique</td><td>6</td></tr>
<tr><td>Crunch - Reverse</td><td>6</td></tr>
<tr><td>Crunch- Decline Oblique</td><td>6</td></tr>
<tr><td>Crunches</td><td>6</td></tr>
<tr><td>Crunches and Leg Lifts</td><td>6</td></tr>
<tr><td>Cuban Press</td><td>6</td></tr>
<tr><td>Curling</td><td>4.5</td></tr>
<tr><td>Curves</td><td>3.5</td></tr>
<tr><td>Cybex UBE</td><td>9</td></tr>
<tr><td>CycleBar</td><td>7</td></tr>
<tr><td>CycloCross*</td><td>8</td></tr>
<tr><td>Cyclocross Event/Race*</td><td>8</td></tr>
<tr><td>Daily Burn</td><td>5.5</td></tr>
<tr><td>Dance / Yoga</td><td>6.5</td></tr>
<tr><td>Dance Class</td><td>6.5</td></tr>
<tr><td>Dance Video</td><td>5.5</td></tr>
<tr><td>Dance, Indoor</td><td>4.5</td></tr>
<tr><td>Dead Bugs</td><td>6</td></tr>
<tr><td>Deep Tissue Massage</td><td>1.3</td></tr>
<tr><td>Dips, Chest</td><td>6</td></tr>
<tr><td>Dips, Machine</td><td>6</td></tr>
<tr><td>Dips, Triceps</td><td>6</td></tr>
<tr><td>Disc Golf*</td><td>4</td></tr>
<tr><td>Dog Run*</td><td>8</td></tr>
<tr><td>Dog Walk*</td><td>3</td></tr>
<tr><td>Double Stroller, Run*</td><td>4.5</td></tr>
<tr><td>Double Stroller, Walk*</td><td>4.5</td></tr>
<tr><td>Double Time</td><td>7</td></tr>
<tr><td>Double Track, Mountain Biking*</td><td>8.5</td></tr>
<tr><td>Downhill Mountain Biking*</td><td>8.5</td></tr>
<tr><td>Downhill Skiing</td><td>5</td></tr>
<tr><td>Dragon Boat</td><td>5.5</td></tr>
<tr><td>Drumming</td><td>4.5</td></tr>
<tr><td>Dumbbell Curl - Incline</td><td>6</td></tr>
<tr><td>Dumbbell Curl - Incline Inner</td><td>6</td></tr>
<tr><td>Dumbbell Curl - One-Arm, Incline Bench</td><td>6</td></tr>
<tr><td>Dumbbell Curl - Seated</td><td>6</td></tr>
<tr><td>Dumbbell Curl - Seated, InnerBicep</td><td>6</td></tr>
<tr><td>Dumbbell Curl - Standing</td><td>6</td></tr>
<tr><td>Dumbbell Lying Pronation</td><td>6</td></tr>
<tr><td>Dumbbell Rear Lunge</td><td>6</td></tr>
<tr><td>Dumbbell side bend</td><td>6</td></tr>
<tr><td>Easy Jog*</td><td>8</td></tr>
<tr><td>Easy Training Ride, Mountain Biking*</td><td>8.5</td></tr>
<tr><td>Easy Training Ride, Road Cycling*</td><td>8</td></tr>
<tr><td>Echelon</td><td>5.5</td></tr>
<tr><td>Electric Bicycle*</td><td>8</td></tr>
<tr><td>Elliptical Bike*</td><td>8</td></tr>
<tr><td>Elliptical, Machine</td><td>5</td></tr>
<tr><td>Elliptical, Run*</td><td>8</td></tr>
<tr><td>ElliptiGo*</td><td>8</td></tr>
<tr><td>Erg Machine</td><td>7</td></tr>
<tr><td>Ergometer</td><td>9</td></tr>
<tr><td>EverybodyFights</td><td>5</td></tr>
<tr><td>Exercise ball pull in</td><td>6</td></tr>
<tr><td>External Rotation</td><td>6</td></tr>
<tr><td>EZ-Bar Curl</td><td>6</td></tr>
<tr><td>EZ-Bar Curl - Close Grip</td><td>6</td></tr>
<tr><td>F45 Training</td><td>7</td></tr>
<tr><td>Family Run*</td><td>8</td></tr>
<tr><td>Family Walk*</td><td>3</td></tr>
<tr><td>Farming</td><td>5.5</td></tr>
<tr><td>Fartleks</td><td>5.5</td></tr>
<tr><td>Fartleks*</td><td>8</td></tr>
<tr><td>Fastball</td><td>5</td></tr>
<tr><td>Fat Tire Bike*</td><td>8</td></tr>
<tr><td>Fencing</td><td>6</td></tr>
<tr><td>Fhitting Room</td><td>7</td></tr>
<tr><td>Field Hockey</td><td>8</td></tr>
<tr><td>Fight</td><td>12</td></tr>
<tr><td>FireFighting</td><td>5.5</td></tr>
<tr><td>Fishing</td><td>3</td></tr>
<tr><td>Fit Body Boot Camp</td><td>7</td></tr>
<tr><td>Fitball</td><td>3.5</td></tr>
<tr><td>Fitbit Coach</td><td>5.5</td></tr>
<tr><td>Fitbod</td><td>5.5</td></tr>
<tr><td>Fitbug Activity</td><td>5.5</td></tr>
<tr><td>Fitness App</td><td>5</td></tr>
<tr><td>Fitness Band</td><td>0</td></tr>
<tr><td>FitOn</td><td>5.5</td></tr>
<tr><td>Fitplan</td><td>5.5</td></tr>
<tr><td>Fixed Gear (Fixie)*</td><td>8</td></tr>
<tr><td>Floorball</td><td>7</td></tr>
<tr><td>Flutter Kicks</td><td>6</td></tr>
<tr><td>Fly</td><td>1.5</td></tr>
<tr><td>Flyes - Cable, Flat Bench</td><td>6</td></tr>
<tr><td>Flyes - Cable, Inclined Bench</td><td>6</td></tr>
<tr><td>Flyes - Dumbbell, Declined</td><td>6</td></tr>
<tr><td>Flyes - Dumbbell, Flat</td><td>6</td></tr>
<tr><td>Flyes - Dumbbell, Inclined Bench</td><td>6</td></tr>
<tr><td>Flywheel</td><td>8</td></tr>
<tr><td>Focus T25</td><td>7</td></tr>
<tr><td>Football Game, Tackle</td><td>10</td></tr>
<tr><td>Football Practice</td><td>8</td></tr>
<tr><td>Football, 11-a-Side Touch</td><td>8</td></tr>
<tr><td>Football, 5-a-Side Touch</td><td>8</td></tr>
<tr><td>Football, Australian</td><td>8</td></tr>
<tr><td>Football, Casual </td><td>5.5</td></tr>
<tr><td>Football, Competitive</td><td>8</td></tr>
<tr><td>Forearms</td><td>6</td></tr>
<tr><td>Forearms with Weights, Other</td><td>6</td></tr>
<tr><td>Freeletics</td><td>5.5</td></tr>
<tr><td>Front Barbell Squat</td><td>6</td></tr>
<tr><td>Front Cable Raise</td><td>6</td></tr>
<tr><td>Front Dumbbell Raise</td><td>6</td></tr>
<tr><td>Front Incline Shoulder Raise</td><td>6</td></tr>
<tr><td>Front plate raise</td><td>6</td></tr>
<tr><td>Front Raise and Pullover</td><td>6</td></tr>
<tr><td>Full Range-of-Motion Lat Pulldown</td><td>6</td></tr>
<tr><td>Games</td><td>4.5</td></tr>
<tr><td>Gardening</td><td>5.5</td></tr>
<tr><td>General</td><td>5.5</td></tr>
<tr><td>General BMX*</td><td>8</td></tr>
<tr><td>General Cruiser Bike Ride*</td><td>8</td></tr>
<tr><td>General Cyclocross*</td><td>8</td></tr>
<tr><td>General Fixed Gear Ride*</td><td>8</td></tr>
<tr><td>General Hike</td><td>7</td></tr>
<tr><td>General Hybrid Cycling*</td><td>8</td></tr>
<tr><td>General Lap Swim</td><td>7</td></tr>
<tr><td>General Lawn Mowing</td><td>5.5</td></tr>
<tr><td>General Mountain Biking*</td><td>8.5</td></tr>
<tr><td>General Recumbent Bike*</td><td>8</td></tr>
<tr><td>General Road Cycling*</td><td>8</td></tr>
<tr><td>General Run*</td><td>8</td></tr>
<tr><td>General Skiing</td><td>7</td></tr>
<tr><td>General Spa Treatment</td><td>1.3</td></tr>
<tr><td>General Sports</td><td>5.5</td></tr>
<tr><td>General Strength Training</td><td>5.5</td></tr>
<tr><td>General Total Body</td><td>6</td></tr>
<tr><td>General Track Cycling*</td><td>8</td></tr>
<tr><td>General Unicycling*</td><td>8</td></tr>
<tr><td>General Upper Body</td><td>6</td></tr>
<tr><td>General Walk*</td><td>3</td></tr>
<tr><td>General Workout Video</td><td>5.5</td></tr>
<tr><td>Generic</td><td>5.5</td></tr>
<tr><td>GetFit</td><td>5.5</td></tr>
<tr><td>Gilad</td><td>6.5</td></tr>
<tr><td>Gironda Sternum Chins</td><td>6</td></tr>
<tr><td>Golf</td><td>4.5</td></tr>
<tr><td>Golf, Walk*</td><td>3</td></tr>
<tr><td>Group Ride, Mountain Biking*</td><td>8.5</td></tr>
<tr><td>Group Ride, Road Cycling*</td><td>8</td></tr>
<tr><td>Group Run*</td><td>8</td></tr>
<tr><td>Group Swimming</td><td>6</td></tr>
<tr><td>Group Walk*</td><td>3</td></tr>
<tr><td>Gym Intervals</td><td>5</td></tr>
<tr><td>Gym Workout</td><td>5.5</td></tr>
<tr><td>Gym, Misc.</td><td>6</td></tr>
<tr><td>Gymnastics</td><td>4</td></tr>
<tr><td>Hack Squat</td><td>6</td></tr>
<tr><td>Hammer Curl - Cable, Rope Attachment</td><td>6</td></tr>
<tr><td>Hammer Curl - Standing</td><td>6</td></tr>
<tr><td>Hamstrings</td><td>6</td></tr>
<tr><td>Hamstrings with Weights, Other</td><td>6</td></tr>
<tr><td>Hand Cycle</td><td>8</td></tr>
<tr><td>Handball</td><td>12</td></tr>
<tr><td>Hang Gliding</td><td>3.5</td></tr>
<tr><td>Hanging Leg Raises</td><td>6</td></tr>
<tr><td>Hanging pike</td><td>6</td></tr>
<tr><td>Hash Run*</td><td>8</td></tr>
<tr><td>Health Club</td><td>5.5</td></tr>
<tr><td>Heavy Kettle: Basics</td><td>7</td></tr>
<tr><td>Heavy Kettle: Blast</td><td>7</td></tr>
<tr><td>Heavy Kettle: Build</td><td>7</td></tr>
<tr><td>Helicopter</td><td>2</td></tr>
<tr><td>HIIT</td><td>5.5</td></tr>
<tr><td>Hike</td><td>7</td></tr>
<tr><td>Hiking, Heavy Pack</td><td>9</td></tr>
<tr><td>Hiking, Light or No Pack</td><td>7</td></tr>
<tr><td>Hiking, Medium Pack</td><td>8</td></tr>
<tr><td>Hill Workout, Mountain Biking*</td><td>8.5</td></tr>
<tr><td>Hill Workout, Run*</td><td>8</td></tr>
<tr><td>Hill Workout, Walk*</td><td>3</td></tr>
<tr><td>Hills</td><td>7</td></tr>
<tr><td>Hip Hop Dancing</td><td>4.5</td></tr>
<tr><td>Hip Lifts</td><td>6</td></tr>
<tr><td>Hockey</td><td>8</td></tr>
<tr><td>Home Workout</td><td>3.5</td></tr>
<tr><td>Horseback Riding</td><td>4</td></tr>
<tr><td>Hot Yoga</td><td>8</td></tr>
<tr><td>House Work</td><td>2.5</td></tr>
<tr><td>Hula</td><td>4.5</td></tr>
<tr><td>Hunt Fitness</td><td>3.5</td></tr>
<tr><td>Hunting, Walk*</td><td>3</td></tr>
<tr><td>Hybrid Cycling*</td><td>8</td></tr>
<tr><td>Hybrid Cycling, Shopping / Errands*</td><td>8</td></tr>
<tr><td>Ice Hockey</td><td>8</td></tr>
<tr><td>Ice Skating</td><td>7</td></tr>
<tr><td>Incline Flyes - With a Twist</td><td>6</td></tr>
<tr><td>Incline Shoulder Raise</td><td>6</td></tr>
<tr><td>Incline Trainer*</td><td>8</td></tr>
<tr><td>Indoor Bike Ride*</td><td>8</td></tr>
<tr><td>Indoor Bike, Trainer*</td><td>8</td></tr>
<tr><td>Indoor Run / Jog*</td><td>8</td></tr>
<tr><td>Indoor Soccer</td><td>7</td></tr>
<tr><td>Indoor Sport / Other Activity</td><td>5.5</td></tr>
<tr><td>Indoor Sport, Other</td><td>4.5</td></tr>
<tr><td>Indoor Swim</td><td>6</td></tr>
<tr><td>Indoor Swim Race/Event</td><td>10</td></tr>
<tr><td>Indoor Track, Run*</td><td>8</td></tr>
<tr><td>Indoor Track, Walk*</td><td>3</td></tr>
<tr><td>Indoor Volleyball</td><td>4</td></tr>
<tr><td>Indoor Winter Sport / Activity</td><td>7</td></tr>
<tr><td>Inline / Roller Hockey</td><td>7.5</td></tr>
<tr><td>Inline Skating</td><td>7.5</td></tr>
<tr><td>Insanity</td><td>10</td></tr>
<tr><td>Insanity Cardio Power & Resistance</td><td>8</td></tr>
<tr><td>Insanity Cardio Recovery</td><td>8</td></tr>
<tr><td>Insanity Core Cardio & Balance</td><td>6</td></tr>
<tr><td>Insanity Dig Deeper</td><td>11</td></tr>
<tr><td>Insanity Interval Plyo</td><td>13</td></tr>
<tr><td>Insanity Max</td><td>5.5</td></tr>
<tr><td>Insanity Max Cardio Conditioning</td><td>12</td></tr>
<tr><td>Insanity Max Interval Circuit</td><td>10</td></tr>
<tr><td>Insanity Max Recovery</td><td>6</td></tr>
<tr><td>Insanity Plyometric Cardio Circuit</td><td>13</td></tr>
<tr><td>Insanity Pure Cardio & Cardio Abs</td><td>10</td></tr>
<tr><td>Interval Training, Mountain Biking*</td><td>8.5</td></tr>
<tr><td>Interval Training, Run*</td><td>8</td></tr>
<tr><td>Intervals, Walk*</td><td>3</td></tr>
<tr><td>Intimacy</td><td>4.5</td></tr>
<tr><td>Inverted Row, Middle Back</td><td>6</td></tr>
<tr><td>Inverted Row, Upper Back</td><td>6</td></tr>
<tr><td>Iron cross</td><td>6</td></tr>
<tr><td>Ironsize: Abs</td><td>7</td></tr>
<tr><td>Ironsize: Cardio</td><td>7</td></tr>
<tr><td>Ironsize: Chest & Triceps</td><td>7</td></tr>
<tr><td>Ironsize: Compound Training Cardio</td><td>7</td></tr>
<tr><td>Ironsize: Compound Training Combo</td><td>7</td></tr>
<tr><td>Ironsize: Compound Training Strength</td><td>7</td></tr>
<tr><td>Ironsize: Legs</td><td>7</td></tr>
<tr><td>Ironsize: Lower Body</td><td>7</td></tr>
<tr><td>Ironsize: Shoulders, Back & Biceps</td><td>7</td></tr>
<tr><td>Ironsize: Upper Body</td><td>7</td></tr>
<tr><td>Jacobs Ladder</td><td>11</td></tr>
<tr><td>Japanese Taiko</td><td>9</td></tr>
<tr><td>Jillian Michaels</td><td>5.5</td></tr>
<tr><td>Judo</td><td>10</td></tr>
<tr><td>Jujitsu</td><td>10</td></tr>
<tr><td>Jump Rope</td><td>10</td></tr>
<tr><td>Jump Rope/Core</td><td>10</td></tr>
<tr><td>JumpStart: Abs</td><td>7</td></tr>
<tr><td>JumpStart: Cardio</td><td>7</td></tr>
<tr><td>JumpStart: Lower Body</td><td>7</td></tr>
<tr><td>JumpStart: Upper Body</td><td>7</td></tr>
<tr><td>Karate</td><td>10</td></tr>
<tr><td>Kayak</td><td>5</td></tr>
<tr><td>Kettlebell</td><td>3.5</td></tr>
<tr><td>Kickball</td><td>7</td></tr>
<tr><td>Kickbike*</td><td>8</td></tr>
<tr><td>Kickboxing Class</td><td>7</td></tr>
<tr><td>Kickboxing, Machine</td><td>8</td></tr>
<tr><td>Kickboxing, Martial Arts</td><td>10</td></tr>
<tr><td>Kinesis</td><td>5.5</td></tr>
<tr><td>Kitesurfing</td><td>5.5</td></tr>
<tr><td>Kung Fu</td><td>10</td></tr>
<tr><td>Lacrosse</td><td>8</td></tr>
<tr><td>Lap Swim</td><td>7</td></tr>
<tr><td>Laps, General</td><td>7</td></tr>
<tr><td>Lat Pulldown - Close-Grip</td><td>6</td></tr>
<tr><td>Lat Pulldown - Underhand</td><td>6</td></tr>
<tr><td>Lat Pulldown - V-Bar</td><td>6</td></tr>
<tr><td>Lat Pulldown - Wide Grip</td><td>6</td></tr>
<tr><td>Lat Pulldown, Middle Back Alternating</td><td>6</td></tr>
<tr><td>Lat Pulldown, Upper Back Alternating</td><td>6</td></tr>
<tr><td>Latin Dance</td><td>4.5</td></tr>
<tr><td>Lean 30: Ab Blast</td><td>7</td></tr>
<tr><td>Lean 30: Athletic Stretch</td><td>7</td></tr>
<tr><td>Lean 30: Body Blast Cardio</td><td>7</td></tr>
<tr><td>Lean 30: Lower Body Blast</td><td>7</td></tr>
<tr><td>Lean 30: Total Body</td><td>7</td></tr>
<tr><td>Lean 30: Upper Body Blast</td><td>7</td></tr>
<tr><td>Leg Curls - Lying</td><td>6</td></tr>
<tr><td>Leg Curls - Seated</td><td>6</td></tr>
<tr><td>Leg Curls - Standing</td><td>6</td></tr>
<tr><td>Leg extensions</td><td>6</td></tr>
<tr><td>Leg press</td><td>6</td></tr>
<tr><td>Leg Pull-in</td><td>6</td></tr>
<tr><td>Legs</td><td>5</td></tr>
<tr><td>Long Run*</td><td>8</td></tr>
<tr><td>Long Walk*</td><td>3</td></tr>
<tr><td>Longboarding</td><td>5</td></tr>
<tr><td>Low Pulley Row to Neck</td><td>6</td></tr>
<tr><td>Lower Back</td><td>6</td></tr>
<tr><td>Lower Back with Weights, Other</td><td>6</td></tr>
<tr><td>Lower Body</td><td>6</td></tr>
<tr><td>Lower Body with Weights, Other</td><td>6</td></tr>
<tr><td>Lower Body, General</td><td>6</td></tr>
<tr><td>Lunge Matrix, Hamstrings</td><td>6</td></tr>
<tr><td>Lunge Matrix, Quads</td><td>6</td></tr>
<tr><td>Lunge with Rotation, Abdominals</td><td>6</td></tr>
<tr><td>Lunge with Rotation, Hamstrings</td><td>6</td></tr>
<tr><td>Lunge with Rotation, Quads</td><td>6</td></tr>
<tr><td>Lunges with Dumbbell, Hamstrings</td><td>6</td></tr>
<tr><td>Lunges with Dumbbell, Quads</td><td>6</td></tr>
<tr><td>Lunges with Medicine Ball, Hamstrings</td><td>6</td></tr>
<tr><td>Lunges with Medicine Ball, Quads</td><td>6</td></tr>
<tr><td>Lunges with Medicine Ball, Shoulders</td><td>6</td></tr>
<tr><td>Lying Face Down Plate Neck Resistance</td><td>6</td></tr>
<tr><td>Lying Face-Up Plate Neck Resistance</td><td>6</td></tr>
<tr><td>Machine Workout</td><td>5.5</td></tr>
<tr><td>Machine Workout, Misc.</td><td>5.5</td></tr>
<tr><td>Martial Arts</td><td>10</td></tr>
<tr><td>Martial Arts, General</td><td>10</td></tr>
<tr><td>Mat Workout</td><td>3.5</td></tr>
<tr><td>Medicine Ball</td><td>3.5</td></tr>
<tr><td>Medicine Ball Pullovers</td><td>6</td></tr>
<tr><td>Meditation</td><td>1</td></tr>
<tr><td>Medium Intensity, Mountain Biking*</td><td>8.5</td></tr>
<tr><td>Middle Back</td><td>6</td></tr>
<tr><td>Middle Back with Weights, Other</td><td>6</td></tr>
<tr><td>MindBody</td><td>5.5</td></tr>
<tr><td>Misc Tasks (Light)</td><td>2.5</td></tr>
<tr><td>Misc Tasks (Moderate)</td><td>3.5</td></tr>
<tr><td>Mixed Martial Arts</td><td>10</td></tr>
<tr><td>Moped</td><td>2.5</td></tr>
<tr><td>Mopping</td><td>3.5</td></tr>
<tr><td>Motocross</td><td>4</td></tr>
<tr><td>Motorcycle</td><td>2.5</td></tr>
<tr><td>Motorcycle / Scooter</td><td>5.5</td></tr>
<tr><td>Mountain Biking*</td><td>8.5</td></tr>
<tr><td>Mountain Biking Race/Event*</td><td>8.5</td></tr>
<tr><td>Mountain Biking, Extreme*</td><td>8.5</td></tr>
<tr><td>Mountain Biking, High Intensity*</td><td>8.5</td></tr>
<tr><td>Mountain Biking, Light Intensity*</td><td>8.5</td></tr>
<tr><td>Mountain Biking, Long Distance*</td><td>8.5</td></tr>
<tr><td>Mountain Biking, Moderate Hills*</td><td>8.5</td></tr>
<tr><td>Mountaineering</td><td>7</td></tr>
<tr><td>Mowing Lawn (Riding Mower)</td><td>2.5</td></tr>
<tr><td>Muay Thai</td><td>6.5</td></tr>
<tr><td>Musical Instrument</td><td>4.5</td></tr>
<tr><td>Musical Instrument, All</td><td>4.5</td></tr>
<tr><td>NBCU Radius</td><td>8</td></tr>
<tr><td>Neck with Weights</td><td>6</td></tr>
<tr><td>Neck with Weights, Other</td><td>6</td></tr>
<tr><td>Netball</td><td>6</td></tr>
<tr><td>NeuStep</td><td>9</td></tr>
<tr><td>New York Body</td><td>3.5</td></tr>
<tr><td>Nexersys Round</td><td>9</td></tr>
<tr><td>Nexersys Workout</td><td>5.5</td></tr>
<tr><td>Nia</td><td>10</td></tr>
<tr><td>Nordic Rollerskiing</td><td>7</td></tr>
<tr><td>Nordic Skiing*</td><td>87</td></tr>
<tr><td>Nordic Track</td><td>7</td></tr>
<tr><td>Nordic, Walk*</td><td>3</td></tr>
<tr><td>November Project</td><td>7</td></tr>
<tr><td>Olympic Weightlifting</td><td>6</td></tr>
<tr><td>One Leg Bridges</td><td>6</td></tr>
<tr><td>One-Arm Dumbbell Row</td><td>6</td></tr>
<tr><td>Open Water Swim</td><td>6</td></tr>
<tr><td>Opposite Leg Toe touch</td><td>6</td></tr>
<tr><td>Orangetheory</td><td>7</td></tr>
<tr><td>Orienteering</td><td>9</td></tr>
<tr><td>P90X</td><td>8</td></tr>
<tr><td>P90X Ab Ripper X</td><td>6</td></tr>
<tr><td>P90X Back & Biceps</td><td>6</td></tr>
<tr><td>P90X CardioX</td><td>8</td></tr>
<tr><td>P90X Chest & Back</td><td>7</td></tr>
<tr><td>P90X Chest, Shoulders & Triceps</td><td>7</td></tr>
<tr><td>P90X Core Synergistics</td><td>7.5</td></tr>
<tr><td>P90X Kenpo</td><td>8</td></tr>
<tr><td>P90X Legs & Back</td><td>7</td></tr>
<tr><td>P90X Plyometrics</td><td>13</td></tr>
<tr><td>P90X Shoulders and Arms</td><td>6</td></tr>
<tr><td>P90X X Stretch</td><td>2.5</td></tr>
<tr><td>P90X YogaX</td><td>4</td></tr>
<tr><td>P90X2</td><td>7</td></tr>
<tr><td>P90X3</td><td>7</td></tr>
<tr><td>Paddle</td><td>5.5</td></tr>
<tr><td>Peloton*</td><td>8</td></tr>
<tr><td>Personal Training</td><td>6</td></tr>
<tr><td>Pickleball</td><td>5</td></tr>
<tr><td>Pilates</td><td>5.5</td></tr>
<tr><td>Pilates ProWorks</td><td>5</td></tr>
<tr><td>Pilates Video</td><td>3.5</td></tr>
<tr><td>Piloxing</td><td>5.5</td></tr>
<tr><td>Piyo</td><td>7</td></tr>
<tr><td>PiYo</td><td>6</td></tr>
<tr><td>Plank Hold</td><td>6</td></tr>
<tr><td>Plate twist</td><td>6</td></tr>
<tr><td>Plie Dumbbell Squat</td><td>6</td></tr>
<tr><td>Pliometrics</td><td>6</td></tr>
<tr><td>Plogging*</td><td>8</td></tr>
<tr><td>Plyometrics</td><td>3.5</td></tr>
<tr><td>Pole Video</td><td>4.5</td></tr>
<tr><td>Pool Games / Lessons</td><td>6</td></tr>
<tr><td>Power Walk*</td><td>3</td></tr>
<tr><td>Power Walk*</td><td>3</td></tr>
<tr><td>Power Yoga</td><td>7</td></tr>
<tr><td>Powerboat</td><td>2</td></tr>
<tr><td>Preacher Curl</td><td>6</td></tr>
<tr><td>Preacher Curl - Machine</td><td>6</td></tr>
<tr><td>ProSkils: Basketball</td><td>7</td></tr>
<tr><td>ProSkils: Extreme Sports</td><td>7</td></tr>
<tr><td>ProSkils: Football</td><td>7</td></tr>
<tr><td>ProSkils: MMA</td><td>7</td></tr>
<tr><td>ProSkils: Soccer</td><td>7</td></tr>
<tr><td>ProSkils: Track & Field</td><td>7</td></tr>
<tr><td>PT Session</td><td>8</td></tr>
<tr><td>Pull Ups</td><td>8</td></tr>
<tr><td>Pull Ups, Dips</td><td>8</td></tr>
<tr><td>Pullups</td><td>6</td></tr>
<tr><td>Pullups - V-Bar</td><td>6</td></tr>
<tr><td>Pump</td><td>6.5</td></tr>
<tr><td>Pure Barre</td><td>5</td></tr>
<tr><td>Push Ups</td><td>8</td></tr>
<tr><td>Push Ups - Spiderman</td><td>6</td></tr>
<tr><td>Push Ups, Leglifts</td><td>8</td></tr>
<tr><td>Push Ups, Sit Ups</td><td>8</td></tr>
<tr><td>Push-ups</td><td>6</td></tr>
<tr><td>Push-ups - Dumbbell</td><td>6</td></tr>
<tr><td>Push-ups - Feet on Exercise Ball</td><td>6</td></tr>
<tr><td>Push-ups - Modified</td><td>6</td></tr>
<tr><td>Push-ups - Pike Up</td><td>6</td></tr>
<tr><td>Push-ups - Spiderman</td><td>6</td></tr>
<tr><td>Push-ups, Pike Up</td><td>6</td></tr>
<tr><td>Pushups - Hands Close Together</td><td>6</td></tr>
<tr><td>Pushups, Pullups, Torso</td><td>8</td></tr>
<tr><td>Pyramid Pull Ups</td><td>8</td></tr>
<tr><td>Quads</td><td>6</td></tr>
<tr><td>Quads - Ball</td><td>6</td></tr>
<tr><td>Quads with Weights, Other</td><td>6</td></tr>
<tr><td>Quick Run*</td><td>8</td></tr>
<tr><td>Quick Walk*</td><td>3</td></tr>
<tr><td>Racquetball</td><td>7</td></tr>
<tr><td>Randonneur / Touring*</td><td>8</td></tr>
<tr><td>Rear Delt Raise - Dumbbell, Bent-Over</td><td>6</td></tr>
<tr><td>Rear Delt Raise - Dumbbell, Lying</td><td>6</td></tr>
<tr><td>Rear Delt Row - Barbell, Standing</td><td>6</td></tr>
<tr><td>Recovery*</td><td>8</td></tr>
<tr><td>Recovery</td><td>1.3</td></tr>
<tr><td>Recovery and Form</td><td>7</td></tr>
<tr><td>Recovery, Mountain Biking*</td><td>8.5</td></tr>
<tr><td>Recumbent Bike*</td><td>8</td></tr>
<tr><td>Reformer Workout</td><td>3.5</td></tr>
<tr><td>Rep Endurance</td><td>6.5</td></tr>
<tr><td>Resistance Circuit Training</td><td>8</td></tr>
<tr><td>Rest Day</td><td>1</td></tr>
<tr><td>Retro Running*</td><td>7</td></tr>
<tr><td>Reverse Barbell Curl, Biceps</td><td>6</td></tr>
<tr><td>Reverse Barbell Curl, Forearms</td><td>6</td></tr>
<tr><td>Reverse Cable Curl, Biceps</td><td>6</td></tr>
<tr><td>Reverse Cable Curl, Forearms</td><td>6</td></tr>
<tr><td>Reverse flyes</td><td>6</td></tr>
<tr><td>Road Cycling*</td><td>8</td></tr>
<tr><td>Road Cycling Race/Event*</td><td>8</td></tr>
<tr><td>Road Cycling, High Intensity*</td><td>8</td></tr>
<tr><td>Road Cycling, Hill Workout*</td><td>8</td></tr>
<tr><td>Road Cycling, Indoor*</td><td>8</td></tr>
<tr><td>Road Cycling, Interval Training*</td><td>8</td></tr>
<tr><td>Road Cycling, Light Intensity*</td><td>8</td></tr>
<tr><td>Road Cycling, Long Distance*</td><td>8</td></tr>
<tr><td>Road Cycling, Medium Intensity*</td><td>8</td></tr>
<tr><td>Road Cycling, Moderate Hills*</td><td>8</td></tr>
<tr><td>Road Cycling, Recovery*</td><td>8</td></tr>
<tr><td>Rock Climb</td><td>7</td></tr>
<tr><td>Rock Climbing, Indoor</td><td>11</td></tr>
<tr><td>Rock Climbing, Outdoor</td><td>7</td></tr>
<tr><td>Roller Skating / Skiing</td><td>5.5</td></tr>
<tr><td>Rollerblading</td><td>7.5</td></tr>
<tr><td>Romanian Deadlift, Hamstrings</td><td>6</td></tr>
<tr><td>Romanian Deadlift, Lower Back</td><td>6</td></tr>
<tr><td>Rowing</td><td>6</td></tr>
<tr><td>Rowing / Crew</td><td>12</td></tr>
<tr><td>Rowing Machine</td><td>9</td></tr>
<tr><td>Rugby</td><td>10</td></tr>
<tr><td>Rumble Boxing</td><td>5</td></tr>
<tr><td>Run*</td><td>8</td></tr>
<tr><td>Run Commute*</td><td>8</td></tr>
<tr><td>Run Race/Event*</td><td>8</td></tr>
<tr><td>Russian Twist</td><td>6</td></tr>
<tr><td>Sailing</td><td>3</td></tr>
<tr><td>Sailing, Competitive</td><td>5</td></tr>
<tr><td>Sailing, General</td><td>3</td></tr>
<tr><td>Salsa</td><td>4.5</td></tr>
<tr><td>Scissor Kick</td><td>6</td></tr>
<tr><td>Scooter</td><td>2.5</td></tr>
<tr><td>Scuba Diving</td><td>5.5</td></tr>
<tr><td>Scuba Diving, Swim</td><td>7</td></tr>
<tr><td>Seated Cable Eows</td><td>6</td></tr>
<tr><td>Seated Leg Tucks</td><td>6</td></tr>
<tr><td>Shopping</td><td>3</td></tr>
<tr><td>Shoulder press - barbell, sitting</td><td>6</td></tr>
<tr><td>Shoulder press - barbell, standing</td><td>6</td></tr>
<tr><td>Shoulder press - dumbbell, one arm</td><td>6</td></tr>
<tr><td>Shoulder Press - Dumbbell, Palms In</td><td>6</td></tr>
<tr><td>Shoulder Press - Dumbbell, Seated</td><td>6</td></tr>
<tr><td>Shoulder press - machine</td><td>6</td></tr>
<tr><td>Shoulders</td><td>6</td></tr>
<tr><td>Shoulders with Weights, Other</td><td>6</td></tr>
<tr><td>Shoveling</td><td>5.5</td></tr>
<tr><td>Shred415</td><td>7</td></tr>
<tr><td>Shrugs - Barbell</td><td>6</td></tr>
<tr><td>Shrugs - Barbell, Behind Back</td><td>6</td></tr>
<tr><td>Shrugs - Cable</td><td>6</td></tr>
<tr><td>Shrugs - Dumbbell</td><td>6</td></tr>
<tr><td>Side Crunch - Ball</td><td>6</td></tr>
<tr><td>Side lateral raise</td><td>6</td></tr>
<tr><td>Side Lateral Raise - Seated</td><td>6</td></tr>
<tr><td>Sight Seeing*</td><td>3</td></tr>
<tr><td>Singing</td><td>5.5</td></tr>
<tr><td>Single Stroller, Run*</td><td>4</td></tr>
<tr><td>Single Stroller, Walk*</td><td>4</td></tr>
<tr><td>Single Track, Mountain Biking*</td><td>8.5</td></tr>
<tr><td>Singles</td><td>8</td></tr>
<tr><td>Sit Ups</td><td>8</td></tr>
<tr><td>Sit Ups, Push Ups</td><td>8</td></tr>
<tr><td>Sitting</td><td>3.8</td></tr>
<tr><td>Skate</td><td>8</td></tr>
<tr><td>Skate Skiing*</td><td>8</td></tr>
<tr><td>Skateboarding</td><td>5.5</td></tr>
<tr><td>Ski Surf</td><td>3</td></tr>
<tr><td>Skiers Edge</td><td>7</td></tr>
<tr><td>Skiing</td><td>7</td></tr>
<tr><td>Skull Crushers</td><td>6</td></tr>
<tr><td>Skydiving</td><td>5.5</td></tr>
<tr><td>Slim in 6</td><td>7</td></tr>
<tr><td>SLT</td><td>6</td></tr>
<tr><td>Snorkeling</td><td>5</td></tr>
<tr><td>Snow / Ice</td><td>7</td></tr>
<tr><td>Snow Shoeing</td><td>8</td></tr>
<tr><td>Snowboarding</td><td>6</td></tr>
<tr><td>Snowmobile Riding</td><td>7</td></tr>
<tr><td>Snowshoeing</td><td>7</td></tr>
<tr><td>Soccer, Sport</td><td>7</td></tr>
<tr><td>Softball</td><td>5.5</td></tr>
<tr><td>Softball</td><td>5</td></tr>
<tr><td>Solidcore</td><td>7</td></tr>
<tr><td>Soul Survivor - 1 hour*</td><td>8</td></tr>
<tr><td>SoulCycle*</td><td>8</td></tr>
<tr><td>Sparring</td><td>9</td></tr>
<tr><td>Speed Work*</td><td>8</td></tr>
<tr><td>Speed Workout</td><td>10</td></tr>
<tr><td>Spider Curl</td><td>6</td></tr>
<tr><td>Spiderman Walk</td><td>6</td></tr>
<tr><td>Spin</td><td>10.5</td></tr>
<tr><td>Spinning Class</td><td>7</td></tr>
<tr><td>Spinning, Indoor</td><td>5.5</td></tr>
<tr><td>Spinning, Indoor *</td><td>8</td></tr>
<tr><td>Splint squat push press</td><td>6</td></tr>
<tr><td>Split Squat Push Press</td><td>6</td></tr>
<tr><td>Split squats</td><td>6</td></tr>
<tr><td>Sport / Other Activity</td><td>5.5</td></tr>
<tr><td>Sports Conditioning</td><td>8</td></tr>
<tr><td>Sprints*</td><td>8</td></tr>
<tr><td>Squash</td><td>12</td></tr>
<tr><td>Squat Press and Rotate, Quads</td><td>6</td></tr>
<tr><td>Squat Press and Rotate, Shoulders</td><td>6</td></tr>
<tr><td>Squats - Barbell</td><td>6</td></tr>
<tr><td>Stability Ball climbers</td><td>6</td></tr>
<tr><td>Stair Machine</td><td>8</td></tr>
<tr><td>Stairs, Indoor Run*</td><td>9</td></tr>
<tr><td>Stairs, Walk*</td><td>8</td></tr>
<tr><td>Stand Up Paddling</td><td>6</td></tr>
<tr><td>Standing Low-Pulley Deltoid Raise</td><td>6</td></tr>
<tr><td>Stationary Bike*</td><td>7</td></tr>
<tr><td>Stationary Bike, Machine</td><td>7</td></tr>
<tr><td>Step Aerobics Class</td><td>9</td></tr>
<tr><td>Step Up with Curl, Biceps</td><td>6</td></tr>
<tr><td>Step Up with Curl, Quads</td><td>6</td></tr>
<tr><td>Steps, Machine</td><td>9</td></tr>
<tr><td>Stiff-Legged Barbell Deadlift, Hamstrings</td><td>6</td></tr>
<tr><td>Stiff-Legged Barbell Deadlift, Lower Back</td><td>6</td></tr>
<tr><td>Stiff-Legged Dumbbell Deadlift, Hamstrings</td><td>6</td></tr>
<tr><td>Stiff-Legged Dumbbell Deadlift, Lower Back</td><td>6</td></tr>
<tr><td>Straight-Arm Pulldown</td><td>6</td></tr>
<tr><td>Strength Training</td><td>5.5</td></tr>
<tr><td>Strength Training with Weights, Other</td><td>5.5</td></tr>
<tr><td>Stretch / Sculpt</td><td>2.5</td></tr>
<tr><td>Strong by Zumba</td><td>4.5</td></tr>
<tr><td>Supermans</td><td>6</td></tr>
<tr><td>Surfing</td><td>3</td></tr>
<tr><td>Surfing, Swim</td><td>6</td></tr>
<tr><td>Sweat with Kayla</td><td>5.5</td></tr>
<tr><td>Swedish Massage</td><td>1.3</td></tr>
<tr><td>Swim</td><td>6</td></tr>
<tr><td>Swim Class / Aerobics</td><td>6.5</td></tr>
<tr><td>Swim Indoor, Long Distance</td><td>7</td></tr>
<tr><td>Sworkit</td><td>5.5</td></tr>
<tr><td>T-Bar Row - Lying</td><td>6</td></tr>
<tr><td>T-Bar Row - Standing</td><td>6</td></tr>
<tr><td>Tabata</td><td>5.5</td></tr>
<tr><td>Table Tennis</td><td>4</td></tr>
<tr><td>Tae Bo</td><td>3.5</td></tr>
<tr><td>Tae Kwon Do</td><td>10</td></tr>
<tr><td>Tai Cheng</td><td>6</td></tr>
<tr><td>Tai Chi</td><td>4</td></tr>
<tr><td>Taper*</td><td>8</td></tr>
<tr><td>Tapout XT</td><td>5.5</td></tr>
<tr><td>Tempo Run*</td><td>8</td></tr>
<tr><td>Tennis</td><td>5.5</td></tr>
<tr><td>Tennis, Doubles</td><td>8</td></tr>
<tr><td>The Bean</td><td>3.5</td></tr>
<tr><td>Thigh abductor</td><td>6</td></tr>
<tr><td>Time Trial*</td><td>8</td></tr>
<tr><td>Titan Workout</td><td>5.5</td></tr>
<tr><td>Title Boxing</td><td>6</td></tr>
<tr><td>Toe Touchers</td><td>6</td></tr>
<tr><td>Tone It Up</td><td>5.5</td></tr>
<tr><td>Total Body, General Gym</td><td>5.5</td></tr>
<tr><td>Total Body, Other</td><td>6</td></tr>
<tr><td>Total Body, Weights</td><td>6</td></tr>
<tr><td>Touring Bike*</td><td>8</td></tr>
<tr><td>Track Cycling*</td><td>8</td></tr>
<tr><td>Track Run*</td><td>8</td></tr>
<tr><td>Traditional Winter Cross Country</td><td>7</td></tr>
<tr><td>Trail Run*</td><td>8</td></tr>
<tr><td>Trampoline</td><td>3.5</td></tr>
<tr><td>Trampoline, Miniature</td><td>7</td></tr>
<tr><td>Traps</td><td>6</td></tr>
<tr><td>Traps with Weights, Other</td><td>6</td></tr>
<tr><td>Treadmill, General*</td><td>9</td></tr>
<tr><td>Treadmill, Run*</td><td>9</td></tr>
<tr><td>Treadmill, Walk*</td><td>3</td></tr>
<tr><td>Treadmill/Spin</td><td>8</td></tr>
<tr><td>Trekking</td><td>7</td></tr>
<tr><td>Triathlon</td><td>5.5</td></tr>
<tr><td>Triathlon Race</td><td>10</td></tr>
<tr><td>Tricep Extension - Barbell, Lying</td><td>6</td></tr>
<tr><td>Tricep Extension - Dumbbell, Lying</td><td>6</td></tr>
<tr><td>Tricep Extension - Dumbbell, One Arm</td><td>6</td></tr>
<tr><td>Tricep Extension - Dumbbell, Pronated</td><td>6</td></tr>
<tr><td>Tricep Extension - Dumbbell, Standing</td><td>6</td></tr>
<tr><td>Tricep Extension - EZ-Bar, Seated, Overhead</td><td>6</td></tr>
<tr><td>Tricep Extension - Lying, Cable</td><td>6</td></tr>
<tr><td>Tricep Extension - Overhead, Cable</td><td>6</td></tr>
<tr><td>Tricep Extension- Dumbbell, Lying, Supine</td><td>6</td></tr>
<tr><td>Tricep Kickbacks - Dumbbell</td><td>6</td></tr>
<tr><td>Tricep Press- Dumbbell, Seated</td><td>6</td></tr>
<tr><td>Tricep pushdowns - Incline Bench</td><td>6</td></tr>
<tr><td>Tricep Pushdowns - One Arm</td><td>6</td></tr>
<tr><td>Tricep Pushdowns - Rope</td><td>6</td></tr>
<tr><td>Tricep Pushdowns - Straight Bar</td><td>6</td></tr>
<tr><td>Tricep Pushdowns - V-bar</td><td>6</td></tr>
<tr><td>Triceps</td><td>6</td></tr>
<tr><td>Triceps with Weights, Other</td><td>6</td></tr>
<tr><td>Trikke*</td><td>12</td></tr>
<tr><td>Triple Threat: Abs</td><td>7</td></tr>
<tr><td>Triple Threat: Arms</td><td>7</td></tr>
<tr><td>Triple Threat: Butt</td><td>7</td></tr>
<tr><td>Triple Threat: Extreme</td><td>7</td></tr>
<tr><td>Triple Threat: Legs</td><td>7</td></tr>
<tr><td>Triple Threat: Total Body</td><td>7</td></tr>
<tr><td>TRX Suspension Training</td><td>8</td></tr>
<tr><td>Tyson Shakers</td><td>6</td></tr>
<tr><td>Ultimate</td><td>8</td></tr>
<tr><td>Ultralight</td><td>2</td></tr>
<tr><td>Unicycling*</td><td>8</td></tr>
<tr><td>Unicycling, Long Distance*</td><td>8</td></tr>
<tr><td>Upper Back</td><td>6</td></tr>
<tr><td>Upper Back with Weights, Other</td><td>6</td></tr>
<tr><td>Upper Body</td><td>6</td></tr>
<tr><td>Upper Body with Weights, Other</td><td>6</td></tr>
<tr><td>Upright Rows - Barbell</td><td>6</td></tr>
<tr><td>Upright Rows - Cable</td><td>6</td></tr>
<tr><td>Upright Rows - Dumbbell</td><td>6</td></tr>
<tr><td>V-sits</td><td>6</td></tr>
<tr><td>Vacuuming</td><td>3.5</td></tr>
<tr><td>Various</td><td>9</td></tr>
<tr><td>Vehicle</td><td>1.5</td></tr>
<tr><td>Venom for Radius I</td><td>7</td></tr>
<tr><td>Venom for Radius II</td><td>7</td></tr>
<tr><td>Venom for Radius III</td><td>7</td></tr>
<tr><td>Venom for Radius IV</td><td>7</td></tr>
<tr><td>Venom for Radius V</td><td>7</td></tr>
<tr><td>Venom for Radius VI</td><td>7</td></tr>
<tr><td>Versa Climber</td><td>14.6</td></tr>
<tr><td>Video Workout</td><td>5.5</td></tr>
<tr><td>Vinyasa</td><td>7</td></tr>
<tr><td>Volleyball</td><td>5.5</td></tr>
<tr><td>Volt Athletics</td><td>5.5</td></tr>
<tr><td>Wakeboarding</td><td>5.5</td></tr>
<tr><td>Walk*</td><td>3</td></tr>
<tr><td>Walk Commute*</td><td>3</td></tr>
<tr><td>Walk Race/Event*</td><td>3</td></tr>
<tr><td>Walking</td><td>3.5</td></tr>
<tr><td>Washboard by Basheerah: Ab Sculpt</td><td>7</td></tr>
<tr><td>Washboard by Basheerah: Chisled Abs</td><td>7</td></tr>
<tr><td>Washboard by Keoni</td><td>7</td></tr>
<tr><td>Water Aerobics</td><td>4</td></tr>
<tr><td>Water Polo</td><td>10</td></tr>
<tr><td>Water Running</td><td>8</td></tr>
<tr><td>Water Skiing</td><td>6</td></tr>
<tr><td>Water Skiing, Swim</td><td>6</td></tr>
<tr><td>Weaponry</td><td>5.5</td></tr>
<tr><td>Weight Workout</td><td>6</td></tr>
<tr><td>Weighted Ball Hyperextension</td><td>6</td></tr>
<tr><td>Wheelchair*</td><td>8</td></tr>
<tr><td>Whitewater Rafting</td><td>5</td></tr>
<tr><td>Wind Surfing</td><td>5.5</td></tr>
<tr><td>Winsor Pilates</td><td>2.5</td></tr>
<tr><td>Winter Sport / Activity</td><td>7</td></tr>
<tr><td>Wood Chopping</td><td>5.5</td></tr>
<tr><td>Workout</td><td>5.5</td></tr>
<tr><td>Wrestling</td><td>5.5</td></tr>
<tr><td>Wrist Curl - Barbell, Palms-Down</td><td>6</td></tr>
<tr><td>Wrist Curl - Barbell, Palms-Up</td><td>6</td></tr>
<tr><td>Wrist Curl - Barbell, Standing, Behind the Back</td><td>6</td></tr>
<tr><td>Wrist Curl - Cable</td><td>6</td></tr>
<tr><td>Wrist Curl - Dumbbell, Palms Up</td><td>6</td></tr>
<tr><td>Wrist Curl - Dumbbell, Palms-Down</td><td>6</td></tr>
<tr><td>Wrist Roller</td><td>6</td></tr>
<tr><td>Yard Work</td><td>5.5</td></tr>
<tr><td>Yard Work, General</td><td>3</td></tr>
<tr><td>Yoga Class</td><td>7</td></tr>
<tr><td>Yoga Six</td><td>5</td></tr>
<tr><td>Yoga to the People</td><td>5</td></tr>
<tr><td>Yoga Video</td><td>5.5</td></tr>
<tr><td>Yoga, General</td><td>7</td></tr>
<tr><td>Yoga, Sport</td><td>7</td></tr>
<tr><td>YogaWorks</td><td>5</td></tr>
<tr><td>Yolates</td><td>5.5</td></tr>
<tr><td>You Workout</td><td>3.5</td></tr>
<tr><td>Yourself Fitness Video</td><td>3.5</td></tr>
<tr><td>Yourshape</td><td>5.5</td></tr>
<tr><td>Youtube Workout</td><td>5.5</td></tr>
<tr><td>YouV2</td><td>5.5</td></tr>
<tr><td>Zottman Curl, Biceps</td><td>6</td></tr>
<tr><td>Zottman Curl, Forearms</td><td>6</td></tr>
<tr><td>Zumba</td><td>4.5</td></tr>
<tr><td>Zwift</td><td>6</td></tr>
</tbody>
</table>

<datalist id="activity-names">
<option value="10-Minute Trainer"></option>
<option value="10Acious: Abs"></option>
<option value="10Acious: Arms"></option>
<option value="10Acious: Butt"></option>
<option value="10Acious: Full Body"></option>
<option value="10Acious: HIIT"></option>
<option value="10Acious: Legs"></option>
<option value="10Acious: Plyo"></option>
<option value="10Acious: Power Flex"></option>
<option value="10Acious: Shoulders"></option>
<option value="10Acious: Upper Body"></option>
<option value="21 Day Challenge"></option>
<option value="21 Day Fix"></option>
<option value="21 Day Fix Extreme"></option>
<option value="21s - EZ Bar"></option>
<option value="22 Minute Hard Corp"></option>
<option value="3 Week Yoga Retreat"></option>
<option value="30 Day Fitness Challenge"></option>
<option value="7 Minute Workout"></option>
<option value="8 Count Body Builders"></option>
<option value="80 Day Obsession"></option>
<option value="9Round"></option>
<option value="Aaptiv"></option>
<option value="Ab Roller"></option>
<option value="Abdominals"></option>
<option value="Abdominals with Weights, Other"></option>
<option value="Abs"></option>
<option value="Abs Video"></option>
<option value="Action Cricket / Indoor Cricket"></option>
<option value="Active Release Treatment"></option>
<option value="Activity Tracker"></option>
<option value="Adventure Race / Event"></option>
<option value="Aerobic"></option>
<option value="Aerobics"></option>
<option value="Aikido"></option>
<option value="Airbike"></option>
<option value="Airplane"></option>
<option value="Alternate Heel Touchers"></option>
<option value="Aqua Fit"></option>
<option value="Aquaforme"></option>
<option value="Aquathlon"></option>
<option value="Arc Trainer"></option>
<option value="Arnold Dumbbell Press"></option>
<option value="Around the Worlds"></option>
<option value="Asana Rebel"></option>
<option value="Ashtanga Yoga"></option>
<option value="Back Extensions"></option>
<option value="Backcountry Skiing"></option>
<option value="Badminton"></option>
<option value="Ball Floor Bridge, Abdominals"></option>
<option value="Ball Floor Bridge, Lower Back"></option>
<option value="Ball Knee Raise - Supine"></option>
<option value="Ballet"></option>
<option value="Ballroom Dancing"></option>
<option value="Ballroom Dancing"></option>
<option value="Barbell Curl - Lying Against Incline"></option>
<option value="Barbell Curl - Seated, Concentration"></option>
<option value="Barbell Curl - Standing"></option>
<option value="Barbell Deadlift"></option>
<option value="Barbell Step Ups"></option>
<option value="Barre Workout"></option>
<option value="Barre3"></option>
<option value="Barry's Bootcamp"></option>
<option value="Baseball"></option>
<option value="Basic Training"></option>
<option value="Basketball"></option>
<option value="BBG"></option>
<option value="Beach Cruiser"></option>
<option value="Beach Volleyball"></option>
<option value="Beachbody Video"></option>
<option value="Beginner Bootcamp: Basics"></option>
<option value="Beginner Bootcamp: Circuit"></option>
<option value="Beginner Bootcamp: Lower Body"></option>
<option value="Beginner Bootcamp: Punches & Kicks"></option>
<option value="Beginner Bootcamp: Upper Body"></option>
<option value="Belly Dancing"></option>
<option value="Bench Dips"></option>
<option value="Bench Press - Barbell, Declined"></option>
<option value="Bench Press - Barbell, Flat"></option>
<option value="Bench Press - Barbell, Flat, Wide Grip"></option>
<option value="Bench Press - Barbell, Inclined"></option>
<option value="Bench Press - Dumbbell, Flat"></option>
<option value="Bench Press - Dumbbells, Inclined"></option>
<option value="Bench Press - Dumbell Declined"></option>
<option value="Bench Press - Inclined, Hammer Grip"></option>
<option value="Bench Press - Machine"></option>
<option value="Bench Press - Smith Machine"></option>
<option value="Bench Press Chest Close-Grip"></option>
<option value="Bench Press Triceps Close-Grip"></option>
<option value="Bent Over Dumbbell Row"></option>
<option value="Bent-Arm Dumbbell Pullover"></option>
<option value="BetterMe"></option>
<option value="Biceps"></option>
<option value="Biceps with Weights, Other"></option>
<option value="Bicycle Kicks"></option>
<option value="Bike"></option>
<option value="Bike Ride"></option>
<option value="Bike Ride Commute, Fixed Gear"></option>
<option value="Bike Ride Commute, Mountain Biking"></option>
<option value="Bike Ride Commute, Road Cycling"></option>
<option value="Bikram"></option>
<option value="Bird Dogs, Abdominals"></option>
<option value="Bird Dogs, Lower Back"></option>
<option value="BLT"></option>
<option value="BMX"></option>
<option value="Board Diving"></option>
<option value="Body Attack"></option>
<option value="Body Beast"></option>
<option value="Body Combat"></option>
<option value="Body Combat, Misc."></option>
<option value="Body Pump"></option>
<option value="Body Weight Squats"></option>
<option value="Bodybuilding.com"></option>
<option value="Boosted Board"></option>
<option value="Bootcamp"></option>
<option value="Bootcamp Workout"></option>
<option value="BOSU Step Over, Hamstrings"></option>
<option value="BOSU Step Over, Quads"></option>
<option value="Bouldering"></option>
<option value="Bowflex Max Trainer"></option>
<option value="Bowflex Treadclimber"></option>
<option value="Bowling"></option>
<option value="Boxing Class"></option>
<option value="Boxing, Indoor"></option>
<option value="Boxing, Machine"></option>
<option value="Brazil Butt Lift"></option>
<option value="Brick"></option>
<option value="Brick Session"></option>
<option value="Brick Workout"></option>
<option value="Brisk Walk"></option>
<option value="British Military Fitness"></option>
<option value="Butterfly"></option>
<option value="Byron Front raises"></option>
<option value="C25K"></option>
<option value="Cable Chop"></option>
<option value="Cable Crossover"></option>
<option value="Cable Curl - Lying"></option>
<option value="Cable Curl - Overhead"></option>
<option value="Cable Curl - Preacher Curl"></option>
<option value="Cable Curl - Standing"></option>
<option value="Cable Curl - Standing, One Arm"></option>
<option value="Cable Curl- High pulley"></option>
<option value="Cable internal rotation"></option>
<option value="Cable Press - One Arm, Rotate"></option>
<option value="Cable Pulls, Middle Back Alternating"></option>
<option value="Cable Pulls, Upper Back Alternating"></option>
<option value="Cable Rope Rear-Delt Rows"></option>
<option value="Cable Seated Rear Lateral Raise"></option>
<option value="Calf Press - Leg press machine"></option>
<option value="Calf Raise - Barbell, seated"></option>
<option value="Calf raise - barbell, standing"></option>
<option value="Calf raise - Dumbbell, seated, one leg"></option>
<option value="Calf raise - dumbell standing"></option>
<option value="Calf raise - seated, machine"></option>
<option value="Calf raise - smith machine, reversed"></option>
<option value="Calf raise - with bands"></option>
<option value="Calf-Machine Shoulder Shrug"></option>
<option value="Calisthenics"></option>
<option value="Calves"></option>
<option value="Calves with Weights, Other"></option>
<option value="Camp Gladiator"></option>
<option value="Camping"></option>
<option value="Canoeing"></option>
<option value="Canoeing, High Intensity"></option>
<option value="Canoeing, Low Intensity"></option>
<option value="Canoeing, Medium Intensity"></option>
<option value="Car"></option>
<option value="Cardio Sculpt: Dance Sculpt"></option>
<option value="Cardio Sculpt: Explosion"></option>
<option value="Cardio Sculpt: Kick & Sculpt"></option>
<option value="Cardio Sculpt: Lower Body Burn"></option>
<option value="Cardio Sculpt: Power"></option>
<option value="Cardio Sculpt: Punch & Sculpt"></option>
<option value="Cardiovascular (CV) Circuit Training"></option>
<option value="Carrying Child, Walk"></option>
<option value="Casual Walk"></option>
<option value="Centr"></option>
<option value="Ceroc"></option>
<option value="ChaLEAN Extreme"></option>
<option value="Cheerleading"></option>
<option value="Chest"></option>
<option value="Chest with Weights, Other"></option>
<option value="Chicometrics"></option>
<option value="Chin-ups, Biceps"></option>
<option value="Chin-ups, Upper Back"></option>
<option value="Circle Swim"></option>
<option value="Circuit Training"></option>
<option value="Cize"></option>
<option value="Class Workout"></option>
<option value="Cleaning (Light)"></option>
<option value="Climbing Stairs, Indoor Running"></option>
<option value="Climbing Stairs, Indoor Walking"></option>
<option value="Climbing Stairs, Running"></option>
<option value="Climbing Stairs, Walking"></option>
<option value="Club Pilates"></option>
<option value="Computrainer"></option>
<option value="Concentration Curl"></option>
<option value="Conditioning"></option>
<option value="Core de Force"></option>
<option value="Core Secret Ball"></option>
<option value="CorePower Yoga"></option>
<option value="Couch to 5K"></option>
<option value="Country Heat"></option>
<option value="Cricket"></option>
<option value="Cross Country Hiking"></option>
<option value="Cross Country Running"></option>
<option value="Cross Country Skiing"></option>
<option value="Cross Country, Winter"></option>
<option value="Cross Trainer"></option>
<option value="Cross Trainer"></option>
<option value="CrossFit Class"></option>
<option value="CrossFit Video"></option>
<option value="Cruiser Bike"></option>
<option value="Crunch - Cable"></option>
<option value="Crunch - Cross Body"></option>
<option value="Crunch - Decline"></option>
<option value="Crunch - Decline Reverse"></option>
<option value="Crunch - Excercise Ball"></option>
<option value="Crunch - Legs on Exercise Ball"></option>
<option value="Crunch - Machine"></option>
<option value="Crunch - Oblique"></option>
<option value="Crunch - Reverse"></option>
<option value="Crunch- Decline Oblique"></option>
<option value="Crunches"></option>
<option value="Crunches and Leg Lifts"></option>
<option value="Cuban Press"></option>
<option value="Curling"></option>
<option value="Curves"></option>
<option value="Cybex UBE"></option>
<option value="CycleBar"></option>
<option value="CycloCross"></option>
<option value="Cyclocross Event/Race"></option>
<option value="Daily Burn"></option>
<option value="Dance / Yoga"></option>
<option value="Dance Class"></option>
<option value="Dance Video"></option>
<option value="Dance, Indoor"></option>
<option value="Dead Bugs"></option>
<option value="Deep Tissue Massage"></option>
<option value="Dips, Chest"></option>
<option value="Dips, Machine"></option>
<option value="Dips, Triceps"></option>
<option value="Disc Golf"></option>
<option value="Dog Run"></option>
<option value="Dog Walk"></option>
<option value="Double Stroller, Run"></option>
<option value="Double Stroller, Walk"></option>
<option value="Double Time"></option>
<option value="Double Track, Mountain Biking"></option>
<option value="Downhill Mountain Biking"></option>
<option value="Downhill Skiing"></option>
<option value="Dragon Boat"></option>
<option value="Drumming"></option>
<option value="Dumbbell Curl - Incline"></option>
<option value="Dumbbell Curl - Incline Inner"></option>
<option value="Dumbbell Curl - One-Arm, Incline Bench"></option>
<option value="Dumbbell Curl - Seated"></option>
<option value="Dumbbell Curl - Seated, InnerBicep"></option>
<option value="Dumbbell Curl - Standing"></option>
<option value="Dumbbell Lying Pronation"></option>
<option value="Dumbbell Rear Lunge"></option>
<option value="Dumbbell side bend"></option>
<option value="Easy Jog"></option>
<option value="Easy Training Ride, Mountain Biking"></option>
<option value="Easy Training Ride, Road Cycling"></option>
<option value="Echelon"></option>
<option value="Electric Bicycle"></option>
<option value="Elliptical Bike"></option>
<option value="Elliptical, Machine"></option>
<option value="Elliptical, Run"></option>
<option value="ElliptiGo"></option>
<option value="Erg Machine"></option>
<option value="Ergometer"></option>
<option value="EverybodyFights"></option>
<option value="Exercise ball pull in"></option>
<option value="External Rotation"></option>
<option value="EZ-Bar Curl"></option>
<option value="EZ-Bar Curl - Close Grip"></option>
<option value="F45 Training"></option>
<option value="Family Run"></option>
<option value="Family Walk"></option>
<option value="Farming"></option>
<option value="Fartleks"></option>
<option value="Fartleks"></option>
<option value="Fastball"></option>
<option value="Fat Tire Bike"></option>
<option value="Fencing"></option>
<option value="Fhitting Room"></option>
<option value="Field Hockey"></option>
<option value="Fight"></option>
<option value="FireFighting"></option>
<option value="Fishing"></option>
<option value="Fit Body Boot Camp"></option>
<option value="Fitball"></option>
<option value="Fitbit Coach"></option>
<option value="Fitbod"></option>
<option value="Fitbug Activity"></option>
<option value="Fitness App"></option>
<option value="Fitness Band"></option>
<option value="FitOn"></option>
<option value="Fitplan"></option>
<option value="Fixed Gear (Fixie)"></option>
<option value="Floorball"></option>
<option value="Flutter Kicks"></option>
<option value="Fly"></option>
<option value="Flyes - Cable, Flat Bench"></option>
<option value="Flyes - Cable, Inclined Bench"></option>
<option value="Flyes - Dumbbell, Declined"></option>
<option value="Flyes - Dumbbell, Flat"></option>
<option value="Flyes - Dumbbell, Inclined Bench"></option>
<option value="Flywheel"></option>
<option value="Focus T25"></option>
<option value="Football Game, Tackle"></option>
<option value="Football Practice"></option>
<option value="Football, 11-a-Side Touch"></option>
<option value="Football, 5-a-Side Touch"></option>
<option value="Football, Australian"></option>
<option value="Football, Casual "></option>
<option value="Football, Competitive"></option>
<option value="Forearms"></option>
<option value="Forearms with Weights, Other"></option>
<option value="Freeletics"></option>
<option value="Front Barbell Squat"></option>
<option value="Front Cable Raise"></option>
<option value="Front Dumbbell Raise"></option>
<option value="Front Incline Shoulder Raise"></option>
<option value="Front plate raise"></option>
<option value="Front Raise and Pullover"></option>
<option value="Full Range-of-Motion Lat Pulldown"></option>
<option value="Games"></option>
<option value="Gardening"></option>
<option value="General"></option>
<option value="General BMX"></option>
<option value="General Cruiser Bike Ride"></option>
<option value="General Cyclocross"></option>
<option value="General Fixed Gear Ride"></option>
<option value="General Hike"></option>
<option value="General Hybrid Cycling"></option>
<option value="General Lap Swim"></option>
<option value="General Lawn Mowing"></option>
<option value="General Mountain Biking"></option>
<option value="General Recumbent Bike"></option>
<option value="General Road Cycling"></option>
<option value="General Run"></option>
<option value="General Skiing"></option>
<option value="General Spa Treatment"></option>
<option value="General Sports"></option>
<option value="General Strength Training"></option>
<option value="General Total Body"></option>
<option value="General Track Cycling"></option>
<option value="General Unicycling"></option>
<option value="General Upper Body"></option>
<option value="General Walk"></option>
<option value="General Workout Video"></option>
<option value="Generic"></option>
<option value="GetFit"></option>
<option value="Gilad"></option>
<option value="Gironda Sternum Chins"></option>
<option value="Golf"></option>
<option value="Golf, Walk"></option>
<option value="Group Ride, Mountain Biking"></option>
<option value="Group Ride, Road Cycling"></option>
<option value="Group Run"></option>
<option value="Group Swimming"></option>
<option value="Group Walk"></option>
<option value="Gym Intervals"></option>
<option value="Gym Workout"></option>
<option value="Gym, Misc."></option>
<option value="Gymnastics"></option>
<option value="Hack Squat"></option>
<option value="Hammer Curl - Cable, Rope Attachment"></option>
<option value="Hammer Curl - Standing"></option>
<option value="Hamstrings"></option>
<option value="Hamstrings with Weights, Other"></option>
<option value="Hand Cycle"></option>
<option value="Handball"></option>
<option value="Hang Gliding"></option>
<option value="Hanging Leg Raises"></option>
<option value="Hanging pike"></option>
<option value="Hash Run"></option>
<option value="Health Club"></option>
<option value="Heavy Kettle: Basics"></option>
<option value="Heavy Kettle: Blast"></option>
<option value="Heavy Kettle: Build"></option>
<option value="Helicopter"></option>
<option value="HIIT"></option>
<option value="Hike"></option>
<option value="Hiking, Heavy Pack"></option>
<option value="Hiking, Light or No Pack"></option>
<option value="Hiking, Medium Pack"></option>
<option value="Hill Workout, Mountain Biking"></option>
<option value="Hill Workout, Run"></option>
<option value="Hill Workout, Walk"></option>
<option value="Hills"></option>
<option value="Hip Hop Dancing"></option>
<option value="Hip Lifts"></option>
<option value="Hockey"></option>
<option value="Home Workout"></option>
<option value="Horseback Riding"></option>
<option value="Hot Yoga"></option>
<option value="House Work"></option>
<option value="Hula"></option>
<option value="Hunt Fitness"></option>
<option value="Hunting, Walk"></option>
<option value="Hybrid Cycling"></option>
<option value="Hybrid Cycling, Shopping / Errands"></option>
<option value="Ice Hockey"></option>
<option value="Ice Skating"></option>
<option value="Incline Flyes - With a Twist"></option>
<option value="Incline Shoulder Raise"></option>
<option value="Incline Trainer"></option>
<option value="Indoor Bike Ride"></option>
<option value="Indoor Bike, Trainer"></option>
<option value="Indoor Run / Jog"></option>
<option value="Indoor Soccer"></option>
<option value="Indoor Sport / Other Activity"></option>
<option value="Indoor Sport, Other"></option>
<option value="Indoor Swim"></option>
<option value="Indoor Swim Race/Event"></option>
<option value="Indoor Track, Run"></option>
<option value="Indoor Track, Walk"></option>
<option value="Indoor Volleyball"></option>
<option value="Indoor Winter Sport / Activity"></option>
<option value="Inline / Roller Hockey"></option>
<option value="Inline Skating"></option>
<option value="Insanity"></option>
<option value="Insanity Cardio Power & Resistance"></option>
<option value="Insanity Cardio Recovery"></option>
<option value="Insanity Core Cardio & Balance"></option>
<option value="Insanity Dig Deeper"></option>
<option value="Insanity Interval Plyo"></option>
<option value="Insanity Max"></option>
<option value="Insanity Max Cardio Conditioning"></option>
<option value="Insanity Max Interval Circuit"></option>
<option value="Insanity Max Recovery"></option>
<option value="Insanity Plyometric Cardio Circuit"></option>
<option value="Insanity Pure Cardio & Cardio Abs"></option>
<option value="Interval Training, Mountain Biking"></option>
<option value="Interval Training, Run"></option>
<option value="Intervals, Walk"></option>
<option value="Intimacy"></option>
<option value="Inverted Row, Middle Back"></option>
<option value="Inverted Row, Upper Back"></option>
<option value="Iron cross"></option>
<option value="Ironsize: Abs"></option>
<option value="Ironsize: Cardio"></option>
<option value="Ironsize: Chest & Triceps"></option>
<option value="Ironsize: Compound Training Cardio"></option>
<option value="Ironsize: Compound Training Combo"></option>
<option value="Ironsize: Compound Training Strength"></option>
<option value="Ironsize: Legs"></option>
<option value="Ironsize: Lower Body"></option>
<option value="Ironsize: Shoulders, Back & Biceps"></option>
<option value="Ironsize: Upper Body"></option>
<option value="Jacobs Ladder"></option>
<option value="Japanese Taiko"></option>
<option value="Jillian Michaels"></option>
<option value="Judo"></option>
<option value="Jujitsu"></option>
<option value="Jump Rope"></option>
<option value="Jump Rope/Core"></option>
<option value="JumpStart: Abs"></option>
<option value="JumpStart: Cardio"></option>
<option value="JumpStart: Lower Body"></option>
<option value="JumpStart: Upper Body"></option>
<option value="Karate"></option>
<option value="Kayak"></option>
<option value="Kettlebell"></option>
<option value="Kickball"></option>
<option value="Kickbike"></option>
<option value="Kickboxing Class"></option>
<option value="Kickboxing, Machine"></option>
<option value="Kickboxing, Martial Arts"></option>
<option value="Kinesis"></option>
<option value="Kitesurfing"></option>
<option value="Kung Fu"></option>
<option value="Lacrosse"></option>
<option value="Lap Swim"></option>
<option value="Laps, General"></option>
<option value="Lat Pulldown - Close-Grip"></option>
<option value="Lat Pulldown - Underhand"></option>
<option value="Lat Pulldown - V-Bar"></option>
<option value="Lat Pulldown - Wide Grip"></option>
<option value="Lat Pulldown, Middle Back Alternating"></option>
<option value="Lat Pulldown, Upper Back Alternating"></option>
<option value="Latin Dance"></option>
<option value="Lean 30: Ab Blast"></option>
<option value="Lean 30: Athletic Stretch"></option>
<option value="Lean 30: Body Blast Cardio"></option>
<option value="Lean 30: Lower Body Blast"></option>
<option value="Lean 30: Total Body"></option>
<option value="Lean 30: Upper Body Blast"></option>
<option value="Leg Curls - Lying"></option>
<option value="Leg Curls - Seated"></option>
<option value="Leg Curls - Standing"></option>
<option value="Leg extensions"></option>
<option value="Leg press"></option>
<option value="Leg Pull-in"></option>
<option value="Legs"></option>
<option value="Long Run"></option>
<option value="Long Walk"></option>
<option value="Longboarding"></option>
<option value="Low Pulley Row to Neck"></option>
<option value="Lower Back"></option>
<option value="Lower Back with Weights, Other"></option>
<option value="Lower Body"></option>
<option value="Lower Body with Weights, Other"></option>
<option value="Lower Body, General"></option>
<option value="Lunge Matrix, Hamstrings"></option>
<option value="Lunge Matrix, Quads"></option>
<option value="Lunge with Rotation, Abdominals"></option>
<option value="Lunge with Rotation, Hamstrings"></option>
<option value="Lunge with Rotation, Quads"></option>
<option value="Lunges with Dumbbell, Hamstrings"></option>
<option value="Lunges with Dumbbell, Quads"></option>
<option value="Lunges with Medicine Ball, Hamstrings"></option>
<option value="Lunges with Medicine Ball, Quads"></option>
<option value="Lunges with Medicine Ball, Shoulders"></option>
<option value="Lying Face Down Plate Neck Resistance"></option>
<option value="Lying Face-Up Plate Neck Resistance"></option>
<option value="Machine Workout"></option>
<option value="Machine Workout, Misc."></option>
<option value="Martial Arts"></option>
<option value="Martial Arts, General"></option>
<option value="Mat Workout"></option>
<option value="Medicine Ball"></option>
<option value="Medicine Ball Pullovers"></option>
<option value="Meditation"></option>
<option value="Medium Intensity, Mountain Biking"></option>
<option value="Middle Back"></option>
<option value="Middle Back with Weights, Other"></option>
<option value="MindBody"></option>
<option value="Misc Tasks (Light)"></option>
<option value="Misc Tasks (Moderate)"></option>
<option value="Mixed Martial Arts"></option>
<option value="Moped"></option>
<option value="Mopping"></option>
<option value="Motocross"></option>
<option value="Motorcycle"></option>
<option value="Motorcycle / Scooter"></option>
<option value="Mountain Biking"></option>
<option value="Mountain Biking Race/Event"></option>
<option value="Mountain Biking, Extreme"></option>
<option value="Mountain Biking, High Intensity"></option>
<option value="Mountain Biking, Light Intensity"></option>
<option value="Mountain Biking, Long Distance"></option>
<option value="Mountain Biking, Moderate Hills"></option>
<option value="Mountaineering"></option>
<option value="Mowing Lawn (Riding Mower)"></option>
<option value="Muay Thai"></option>
<option value="Musical Instrument"></option>
<option value="Musical Instrument, All"></option>
<option value="NBCU Radius"></option>
<option value="Neck with Weights"></option>
<option value="Neck with Weights, Other"></option>
<option value="Netball"></option>
<option value="NeuStep"></option>
<option value="New York Body"></option>
<option value="Nexersys Round"></option>
<option value="Nexersys Workout"></option>
<option value="Nia"></option>
<option value="Nordic Rollerskiing"></option>
<option value="Nordic Skiing"></option>
<option value="Nordic Track"></option>
<option value="Nordic, Walk"></option>
<option value="November Project"></option>
<option value="Olympic Weightlifting"></option>
<option value="One Leg Bridges"></option>
<option value="One-Arm Dumbbell Row"></option>
<option value="Open Water Swim"></option>
<option value="Opposite Leg Toe touch"></option>
<option value="Orangetheory"></option>
<option value="Orienteering"></option>
<option value="P90X"></option>
<option value="P90X Ab Ripper X"></option>
<option value="P90X Back & Biceps"></option>
<option value="P90X CardioX"></option>
<option value="P90X Chest & Back"></option>
<option value="P90X Chest, Shoulders & Triceps"></option>
<option value="P90X Core Synergistics"></option>
<option value="P90X Kenpo"></option>
<option value="P90X Legs & Back"></option>
<option value="P90X Plyometrics"></option>
<option value="P90X Shoulders and Arms"></option>
<option value="P90X X Stretch"></option>
<option value="P90X YogaX"></option>
<option value="P90X2"></option>
<option value="P90X3"></option>
<option value="Paddle"></option>
<option value="Peloton"></option>
<option value="Personal Training"></option>
<option value="Pickleball"></option>
<option value="Pilates"></option>
<option value="Pilates ProWorks"></option>
<option value="Pilates Video"></option>
<option value="Piloxing"></option>
<option value="Piyo"></option>
<option value="PiYo"></option>
<option value="Plank Hold"></option>
<option value="Plate twist"></option>
<option value="Plie Dumbbell Squat"></option>
<option value="Pliometrics"></option>
<option value="Plogging"></option>
<option value="Plyometrics"></option>
<option value="Pole Video"></option>
<option value="Pool Games / Lessons"></option>
<option value="Power Walk"></option>
<option value="Power Walk"></option>
<option value="Power Yoga"></option>
<option value="Powerboat"></option>
<option value="Preacher Curl"></option>
<option value="Preacher Curl - Machine"></option>
<option value="ProSkils: Basketball"></option>
<option value="ProSkils: Extreme Sports"></option>
<option value="ProSkils: Football"></option>
<option value="ProSkils: MMA"></option>
<option value="ProSkils: Soccer"></option>
<option value="ProSkils: Track & Field"></option>
<option value="PT Session"></option>
<option value="Pull Ups"></option>
<option value="Pull Ups, Dips"></option>
<option value="Pullups"></option>
<option value="Pullups - V-Bar"></option>
<option value="Pump"></option>
<option value="Pure Barre"></option>
<option value="Push Ups"></option>
<option value="Push Ups - Spiderman"></option>
<option value="Push Ups, Leglifts"></option>
<option value="Push Ups, Sit Ups"></option>
<option value="Push-ups"></option>
<option value="Push-ups - Dumbbell"></option>
<option value="Push-ups - Feet on Exercise Ball"></option>
<option value="Push-ups - Modified"></option>
<option value="Push-ups - Pike Up"></option>
<option value="Push-ups - Spiderman"></option>
<option value="Push-ups, Pike Up"></option>
<option value="Pushups - Hands Close Together"></option>
<option value="Pushups, Pullups, Torso"></option>
<option value="Pyramid Pull Ups"></option>
<option value="Quads"></option>
<option value="Quads - Ball"></option>
<option value="Quads with Weights, Other"></option>
<option value="Quick Run"></option>
<option value="Quick Walk"></option>
<option value="Racquetball"></option>
<option value="Randonneur / Touring"></option>
<option value="Rear Delt Raise - Dumbbell, Bent-Over"></option>
<option value="Rear Delt Raise - Dumbbell, Lying"></option>
<option value="Rear Delt Row - Barbell, Standing"></option>
<option value="Recovery"></option>
<option value="Recovery"></option>
<option value="Recovery and Form"></option>
<option value="Recovery, Mountain Biking"></option>
<option value="Recumbent Bike"></option>
<option value="Reformer Workout"></option>
<option value="Rep Endurance"></option>
<option value="Resistance Circuit Training"></option>
<option value="Rest Day"></option>
<option value="Retro Running"></option>
<option value="Reverse Barbell Curl, Biceps"></option>
<option value="Reverse Barbell Curl, Forearms"></option>
<option value="Reverse Cable Curl, Biceps"></option>
<option value="Reverse Cable Curl, Forearms"></option>
<option value="Reverse flyes"></option>
<option value="Road Cycling"></option>
<option value="Road Cycling Race/Event"></option>
<option value="Road Cycling, High Intensity"></option>
<option value="Road Cycling, Hill Workout"></option>
<option value="Road Cycling, Indoor"></option>
<option value="Road Cycling, Interval Training"></option>
<option value="Road Cycling, Light Intensity"></option>
<option value="Road Cycling, Long Distance"></option>
<option value="Road Cycling, Medium Intensity"></option>
<option value="Road Cycling, Moderate Hills"></option>
<option value="Road Cycling, Recovery"></option>
<option value="Rock Climb"></option>
<option value="Rock Climbing, Indoor"></option>
<option value="Rock Climbing, Outdoor"></option>
<option value="Roller Skating / Skiing"></option>
<option value="Rollerblading"></option>
<option value="Romanian Deadlift, Hamstrings"></option>
<option value="Romanian Deadlift, Lower Back"></option>
<option value="Rowing"></option>
<option value="Rowing / Crew"></option>
<option value="Rowing Machine"></option>
<option value="Rugby"></option>
<option value="Rumble Boxing"></option>
<option value="Run"></option>
<option value="Run Commute"></option>
<option value="Run Race/Event"></option>
<option value="Russian Twist"></option>
<option value="Sailing"></option>
<option value="Sailing, Competitive"></option>
<option value="Sailing, General"></option>
<option value="Salsa"></option>
<option value="Scissor Kick"></option>
<option value="Scooter"></option>
<option value="Scuba Diving"></option>
<option value="Scuba Diving, Swim"></option>
<option value="Seated Cable Eows"></option>
<option value="Seated Leg Tucks"></option>
<option value="Shopping"></option>
<option value="Shoulder press - barbell, sitting"></option>
<option value="Shoulder press - barbell, standing"></option>
<option value="Shoulder press - dumbbell, one arm"></option>
<option value="Shoulder Press - Dumbbell, Palms In"></option>
<option value="Shoulder Press - Dumbbell, Seated"></option>
<option value="Shoulder press - machine"></option>
<option value="Shoulders"></option>
<option value="Shoulders with Weights, Other"></option>
<option value="Shoveling"></option>
<option value="Shred415"></option>
<option value="Shrugs - Barbell"></option>
<option value="Shrugs - Barbell, Behind Back"></option>
<option value="Shrugs - Cable"></option>
<option value="Shrugs - Dumbbell"></option>
<option value="Side Crunch - Ball"></option>
<option value="Side lateral raise"></option>
<option value="Side Lateral Raise - Seated"></option>
<option value="Sight Seeing"></option>
<option value="Singing"></option>
<option value="Single Stroller, Run"></option>
<option value="Single Stroller, Walk"></option>
<option value="Single Track, Mountain Biking"></option>
<option value="Singles"></option>
<option value="Sit Ups"></option>
<option value="Sit Ups, Push Ups"></option>
<option value="Sitting"></option>
<option value="Skate"></option>
<option value="Skate Skiing"></option>
<option value="Skateboarding"></option>
<option value="Ski Surf"></option>
<option value="Skiers Edge"></option>
<option value="Skiing"></option>
<option value="Skull Crushers"></option>
<option value="Skydiving"></option>
<option value="Slim in 6"></option>
<option value="SLT"></option>
<option value="Snorkeling"></option>
<option value="Snow / Ice"></option>
<option value="Snow Shoeing"></option>
<option value="Snowboarding"></option>
<option value="Snowmobile Riding"></option>
<option value="Snowshoeing"></option>
<option value="Soccer, Sport"></option>
<option value="Softball"></option>
<option value="Softball"></option>
<option value="Solidcore"></option>
<option value="Soul Survivor - 1 hour"></option>
<option value="SoulCycle"></option>
<option value="Sparring"></option>
<option value="Speed Work"></option>
<option value="Speed Workout"></option>
<option value="Spider Curl"></option>
<option value="Spiderman Walk"></option>
<option value="Spin"></option>
<option value="Spinning Class"></option>
<option value="Spinning, Indoor"></option>
<option value="Spinning, Indoor "></option>
<option value="Splint squat push press"></option>
<option value="Split Squat Push Press"></option>
<option value="Split squats"></option>
<option value="Sport / Other Activity"></option>
<option value="Sports Conditioning"></option>
<option value="Sprints"></option>
<option value="Squash"></option>
<option value="Squat Press and Rotate, Quads"></option>
<option value="Squat Press and Rotate, Shoulders"></option>
<option value="Squats - Barbell"></option>
<option value="Stability Ball climbers"></option>
<option value="Stair Machine"></option>
<option value="Stairs, Indoor Run"></option>
<option value="Stairs, Walk"></option>
<option value="Stand Up Paddling"></option>
<option value="Standing Low-Pulley Deltoid Raise"></option>
<option value="Stationary Bike"></option>
<option value="Stationary Bike, Machine"></option>
<option value="Step Aerobics Class"></option>
<option value="Step Up with Curl, Biceps"></option>
<option value="Step Up with Curl, Quads"></option>
<option value="Steps, Machine"></option>
<option value="Stiff-Legged Barbell Deadlift, Hamstrings"></option>
<option value="Stiff-Legged Barbell Deadlift, Lower Back"></option>
<option value="Stiff-Legged Dumbbell Deadlift, Hamstrings"></option>
<option value="Stiff-Legged Dumbbell Deadlift, Lower Back"></option>
<option value="Straight-Arm Pulldown"></option>
<option value="Strength Training"></option>
<option value="Strength Training with Weights, Other"></option>
<option value="Stretch / Sculpt"></option>
<option value="Strong by Zumba"></option>
<option value="Supermans"></option>
<option value="Surfing"></option>
<option value="Surfing, Swim"></option>
<option value="Sweat with Kayla"></option>
<option value="Swedish Massage"></option>
<option value="Swim"></option>
<option value="Swim Class / Aerobics"></option>
<option value="Swim Indoor, Long Distance"></option>
<option value="Sworkit"></option>
<option value="T-Bar Row - Lying"></option>
<option value="T-Bar Row - Standing"></option>
<option value="Tabata"></option>
<option value="Table Tennis"></option>
<option value="Tae Bo"></option>
<option value="Tae Kwon Do"></option>
<option value="Tai Cheng"></option>
<option value="Tai Chi"></option>
<option value="Taper"></option>
<option value="Tapout XT"></option>
<option value="Tempo Run"></option>
<option value="Tennis"></option>
<option value="Tennis, Doubles"></option>
<option value="The Bean"></option>
<option value="Thigh abductor"></option>
<option value="Time Trial"></option>
<option value="Titan Workout"></option>
<option value="Title Boxing"></option>
<option value="Toe Touchers"></option>
<option value="Tone It Up"></option>
<option value="Total Body, General Gym"></option>
<option value="Total Body, Other"></option>
<option value="Total Body, Weights"></option>
<option value="Touring Bike"></option>
<option value="Track Cycling"></option>
<option value="Track Run"></option>
<option value="Traditional Winter Cross Country"></option>
<option value="Trail Run"></option>
<option value="Trampoline"></option>
<option value="Trampoline, Miniature"></option>
<option value="Traps"></option>
<option value="Traps with Weights, Other"></option>
<option value="Treadmill, General"></option>
<option value="Treadmill, Run"></option>
<option value="Treadmill, Walk"></option>
<option value="Treadmill/Spin"></option>
<option value="Trekking"></option>
<option value="Triathlon"></option>
<option value="Triathlon Race"></option>
<option value="Tricep Extension - Barbell, Lying"></option>
<option value="Tricep Extension - Dumbbell, Lying"></option>
<option value="Tricep Extension - Dumbbell, One Arm"></option>
<option value="Tricep Extension - Dumbbell, Pronated"></option>
<option value="Tricep Extension - Dumbbell, Standing"></option>
<option value="Tricep Extension - EZ-Bar, Seated, Overhead"></option>
<option value="Tricep Extension - Lying, Cable"></option>
<option value="Tricep Extension - Overhead, Cable"></option>
<option value="Tricep Extension- Dumbbell, Lying, Supine"></option>
<option value="Tricep Kickbacks - Dumbbell"></option>
<option value="Tricep Press- Dumbbell, Seated"></option>
<option value="Tricep pushdowns - Incline Bench"></option>
<option value="Tricep Pushdowns - One Arm"></option>
<option value="Tricep Pushdowns - Rope"></option>
<option value="Tricep Pushdowns - Straight Bar"></option>
<option value="Tricep Pushdowns - V-bar"></option>
<option value="Triceps"></option>
<option value="Triceps with Weights, Other"></option>
<option value="Trikke"></option>
<option value="Triple Threat: Abs"></option>
<option value="Triple Threat: Arms"></option>
<option value="Triple Threat: Butt"></option>
<option value="Triple Threat: Extreme"></option>
<option value="Triple Threat: Legs"></option>
<option value="Triple Threat: Total Body"></option>
<option value="TRX Suspension Training"></option>
<option value="Tyson Shakers"></option>
<option value="Ultimate"></option>
<option value="Ultralight"></option>
<option value="Unicycling"></option>
<option value="Unicycling, Long Distance"></option>
<option value="Upper Back"></option>
<option value="Upper Back with Weights, Other"></option>
<option value="Upper Body"></option>
<option value="Upper Body with Weights, Other"></option>
<option value="Upright Rows - Barbell"></option>
<option value="Upright Rows - Cable"></option>
<option value="Upright Rows - Dumbbell"></option>
<option value="V-sits"></option>
<option value="Vacuuming"></option>
<option value="Various"></option>
<option value="Vehicle"></option>
<option value="Venom for Radius I"></option>
<option value="Venom for Radius II"></option>
<option value="Venom for Radius III"></option>
<option value="Venom for Radius IV"></option>
<option value="Venom for Radius V"></option>
<option value="Venom for Radius VI"></option>
<option value="Versa Climber"></option>
<option value="Video Workout"></option>
<option value="Vinyasa"></option>
<option value="Volleyball"></option>
<option value="Volt Athletics"></option>
<option value="Wakeboarding"></option>
<option value="Walk"></option>
<option value="Walk Commute"></option>
<option value="Walk Race/Event"></option>
<option value="Walking"></option>
<option value="Washboard by Basheerah: Ab Sculpt"></option>
<option value="Washboard by Basheerah: Chisled Abs"></option>
<option value="Washboard by Keoni"></option>
<option value="Water Aerobics"></option>
<option value="Water Polo"></option>
<option value="Water Running"></option>
<option value="Water Skiing"></option>
<option value="Water Skiing, Swim"></option>
<option value="Weaponry"></option>
<option value="Weight Workout"></option>
<option value="Weighted Ball Hyperextension"></option>
<option value="Wheelchair"></option>
<option value="Whitewater Rafting"></option>
<option value="Wind Surfing"></option>
<option value="Winsor Pilates"></option>
<option value="Winter Sport / Activity"></option>
<option value="Wood Chopping"></option>
<option value="Workout"></option>
<option value="Wrestling"></option>
<option value="Wrist Curl - Barbell, Palms-Down"></option>
<option value="Wrist Curl - Barbell, Palms-Up"></option>
<option value="Wrist Curl - Barbell, Standing, Behind the Back"></option>
<option value="Wrist Curl - Cable"></option>
<option value="Wrist Curl - Dumbbell, Palms Up"></option>
<option value="Wrist Curl - Dumbbell, Palms-Down"></option>
<option value="Wrist Roller"></option>
<option value="Yard Work"></option>
<option value="Yard Work, General"></option>
<option value="Yoga Class"></option>
<option value="Yoga Six"></option>
<option value="Yoga to the People"></option>
<option value="Yoga Video"></option>
<option value="Yoga, General"></option>
<option value="Yoga, Sport"></option>
<option value="YogaWorks"></option>
<option value="Yolates"></option>
<option value="You Workout"></option>
<option value="Yourself Fitness Video"></option>
<option value="Yourshape"></option>
<option value="Youtube Workout"></option>
<option value="YouV2"></option>
<option value="Zottman Curl, Biceps"></option>
<option value="Zottman Curl, Forearms"></option>
<option value="Zumba"></option>
<option value="Zwift"></option>
</datalist>

<script>
const nameFilter = document.getElementById("name-filter");
const minMetsFilter = document.getElementById("min-mets-filter");

Object.defineProperty(minMetsFilter, "realValue", {
    get() {
        return 15 - parseFloat(this.value);
    },
    set(realValue) {
        this.value = 15 - realValue;
    }
});

const maxMetsFilter = document.getElementById("max-mets-filter");

Object.defineProperty(maxMetsFilter, "realValue", {
    get() {
        return parseFloat(this.value);
    },
    set(realValue) {
        this.title = realValue;
        this.value = realValue;
    }
});

const table = document.getElementById("activity-table");

function filterTable() {
    const nameText = nameFilter.value.toLowerCase();
    const minMet = minMetsFilter.realValue;
    const maxMet = maxMetsFilter.realValue;

    const rows = table.querySelectorAll("tbody tr");

    rows.forEach(row => {
        const name = row.cells[0].textContent.toLowerCase();
        const met = parseFloat(row.cells[1].textContent);

        row.hidden = !name.includes(nameText) || met < minMet || (met > maxMet && maxMet < 15);
    });
}

function filterMets(thisFilter, otherFilter) {
    return () => {
        const minMet = minMetsFilter.realValue;
        const maxMet = maxMetsFilter.realValue;
            
        if (minMet > maxMet) {
            otherFilter.realValue = thisFilter.realValue;
        }
        
        minMetsFilter.title = minMetsFilter.realValue;
        maxMetsFilter.title = maxMetsFilter.realValue;

        filterTable();
    }
}

nameFilter.addEventListener("input", filterTable);
minMetsFilter.addEventListener("input", filterMets(minMetsFilter, maxMetsFilter));
maxMetsFilter.addEventListener("input", filterMets(maxMetsFilter, minMetsFilter));

function sortTable(columnIndex, ascending) {
    const tbody = table.querySelector("tbody");
    const rows = Array.from(table.querySelectorAll("tbody tr"));

    rows.sort((a, b) => {
        const aText = a.cells[columnIndex].textContent.trim();
        const bText = b.cells[columnIndex].textContent.trim();

        const aNum = parseFloat(aText);
        const bNum = parseFloat(bText);

        let comparison;

        if (aText == aNum && bText == bNum) {
            comparison = aNum - bNum;
        } else {
            comparison = aText.localeCompare(bText);
        }

        return ascending ? comparison : -comparison;
    });

    rows.forEach(row => tbody.appendChild(row));
}

const ascendingMap = new Map();

table.querySelectorAll("thead tr:first-child th").forEach((th, columnIndex) => {
    th.style.cursor = "pointer";
    const indicator = th.querySelector("span");

    th.addEventListener("click", () => {
        const nextAscending = !ascendingMap.getOrInsert(columnIndex, false);
        ascendingMap.set(columnIndex, nextAscending);
        sortTable(columnIndex, nextAscending);
        indicator.textContent = nextAscending ? "▲" : "▼";
    });
});
</script>

<style>
input#name-filter {
    width: calc(100% - 2rem);
}

input#min-mets-filter, input#max-mets-filter {
    width: calc(50% - 2rem);
    vertical-align: middle;
}

input#min-mets-filter {
    rotate: 180deg;
}

table#activity-table {
    table-layout: fixed;
}

table#activity-table tbody td:nth-child(2) {
    text-align: right;
}
</style>

## Notes

These values were retrieved from the MapMyFitness API as of June 2026. Future updates to the API may change the available activity types or MET values.