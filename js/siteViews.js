var siteViews = function(response) {
    document.getElementById('visits').innerText = response.value;
}

var midnightsViews = function(response) {
    document.getElementById('hits').innerText = response.value;
}