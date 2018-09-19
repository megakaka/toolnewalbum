package main

import (
	"fmt"
	"log"
	"net/http"
)

var port = "6767"

func main() {
	http.HandleFunc("/api/", apiHandler)
	fmt.Println("Server started on port")
	log.Fatal(http.ListenAndServe(":"+port, nil))
}

func apiHandler(w http.ResponseWriter, r *http.Request) {
	logRequest(r)
	enableCors(&w)
	fmt.Fprintf(w, "hello")
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

func logRequest(request *http.Request) {
	fmt.Println(request)
	fmt.Print("request received:")
	fmt.Println("ip" + request.Referer())
}
