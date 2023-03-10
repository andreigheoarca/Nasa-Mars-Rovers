# Nasa Mars Rovers Gallery

This is also one of the projects that I had my mind set on doing ever since I learned fetch requests, only it initially it was supposed to use the NASA Apod API (Astronomy Photo of the Day) but as I was browsing the NASA Open API's I decided to settle on the Mars Rover API which returns back photos and mission data from the 3 rover missions on Mars as it seemed more interesting and also a bit more challenging. 

As soon as I took a look at the JSON data I decided that it would definitely be a good opportunity to practice pagination as well.

## Link

https://courageous-hummingbird-696a66.netlify.app/

## Usage
 
The functionality of the site is quite simple, the user can select between 3 of the Mars rovers (Curiosity, Opportunity and Spirit) from a dropdown menu, which, once chosen will display a gallery of photos captured by the specified rover along with some data specific to the rover mission, such as launch date, etc.

In the case of the Curiosity rover, there is quite a bit of data which is split into pages that contain 20 items per page. The user can choose the desired page by clicking on the desired number at the bottom or by clicking either the right or left arrow in order to move in increments of one.

## Project lookback and future considerations 

At this point, the project functionality was pretty straight forward as I was comfortable making fetch requests to an API and destructuring the JSON data. 

One of the big challenges that I faced was clearing the DOM data when choosing a rover as it initially added the data from the rovers all together, appending instead of replacing. I fixed this problem by clearing the innerHTML of the div container right before calling the function that displays the items in the DOM.

The next big challenge that I faced was of course the pagination which I definitely found to be quite complex and something that I have to practice more with as I relied a lot on a tutorial provided by John Smilga.
