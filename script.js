const latestEdguyAlbum = new Date("07/14/2017");
const today = new Date();
const timeDifference = today.getTime() - latestEdguyAlbum.getTime();
const days = Math.floor(timeDifference / (1000 * 3600 * 24));
document.querySelector("h1").innerHTML = days + " DAYS";
