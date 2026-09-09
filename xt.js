const videotimes = document.getElementsByClassName("videotime")

console.log(videotimes)

const videotime = [...videotimes]

const target = document.getElementById("test")

const times = videotime.map(time => time.textContent)

console.log(times)

//this is the part where I realised it was 1am and that I would need
// to destructure and convert all possible youtube timestamps to 
//add them up which im too tired for after work

/*

.split(':') splits into array of numbers
switch statement uses array.length to decide what conversion for each grouping of time
everything becomes seconds
then switch statement turns seconds to minutes starting from the
largest ((seconds)// 31556952 >= 1){ array.push that same
equation, and pass seconds % 31556952 down the line to months

seconds // 2629743.83 for month
seconds // 604800 for week
seconds // 86400 for a day
seconds // 3600 hour
seconds// 60 minute
seconds // 1 second
then turn the array to a string


*/