// get the url params
const urlParams = new URLSearchParams(window.location.search);
// get q from the url params
const searchValue = urlParams.get('q');
// turn the q into a %-type value that can be put into a website url
const encodedValue = encodeURIComponent(searchValue);
let cutEncodedValue;

// function to redirect to different url
function redirect(url) {
    window.location.replace(url);
}

// seeing if the %-type that is to be given has !yt or !gh in the end, then passing it to the correct website url.
if (encodedValue.endsWith("!yt")) {
    cutEncodedValue = encodedValue.slice(0, -3);
    redirect(`https://www.youtube.com/results?search_query=${cutEncodedValue}`)
} else if (encodedValue.endsWith("!gh")) {
    cutEncodedValue = encodedValue.slice(0, -3)
    redirect(`https://github.com/search?q=${cutEncodedValue}&type=repositories`)
} else if (encodedValue.endsWith("!ghu")) {
    cutEncodedValue = encodedValue.slice(0, -4)
    redirect(`https://github.com/search?q=${cutEncodedValue}&type=users`)
} else {
    redirect(`https://www.google.com/search?q=${encodedValue}`)
}
