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

switch (timestamp.length){
case(3):

seconds += timestamp[2] * 3600)
// fallthrough is intentional

case(2):

seconds += (timestamp[1] * 60)
caes(1):

seconds += timestamp[0]

}


then switch statement turns seconds to minutes starting from the
largest ((seconds)// 31556952 >= 1){ array.push that same
equation, and pass seconds % 31556952 down the line to months

function convert(rate, seconds){
    if (Math.floor(seconds/rate) >= 1){
    finalTimeStampArray.push(Math.floor(seconds/rate))
    return (seconds%rate)
    }
}


    if (seconds//31556952 >= 1){
        finalTimeStampArray.push(seconds//31556952)
        seconds = seconds%31556952}
    if (seconds // 604800 >= 1){
        finalTimeStampArray.push(seconds//604800)
        seconds = seconds % 604800}
    if (seconds//86400 >= 1){
        finalTimeStampArray.push(seconds//86400)
        seconds = seconds % 86400}
    if (seconds//3600 >= 1){
        finalTimeStampArray.push(seconds//3600)
        seconds = seconds % 3600}
    if (seconds//60 >= 1){
        finalTimeStampArray.push(seconds//60)
        seconds = seconds % 60}
    finalTimeStampArray.push(seconds//1)
    



seconds // 2629743.83 for month
seconds // 604800 for week
seconds // 86400 for a day
seconds // 3600 hour
seconds// 60 minute
seconds // 1 second
then turn the array to a string


*/