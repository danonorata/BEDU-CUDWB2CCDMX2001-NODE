const http = require("http");
const url = require("url");

function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}




const server = http.createServer(function(request, response) {
  const information = url.parse(request.url, true);

  if (information.pathname === "/add") {

    let n = parseInt(information.query.a, 10);
    response.end(String(factorial(n)));

  } else {
    response.writeHead(404, {
      "Content-Type": "text/plain; charset=utf-8"
    });
    response.end("No macayu carnal...");
  }
});


server.listen(8080, function() {
  console.log("Échale, ya te conectaste al 8080");
});
