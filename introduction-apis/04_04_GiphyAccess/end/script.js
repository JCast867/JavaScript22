var request = new XMLHttpRequest();

request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=zmSWMv4OKkrWbtcj3GnlBwDkUJR7MVXl&tag=squirrel&rating=g');

request.onload = function() {
	var response = request.response;
	var parsedData = JSON.parse(response);
	console.log(parsedData);
	var originalUrl = parsedData.data.images.original.url;
	console.log(originalUrl);
};

request.send();