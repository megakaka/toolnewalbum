package main

import (
	"fmt"
	"log"
	"net/http"
)

var port = "8080"

func main() {
	http.HandleFunc("/api/", apiHandler)
	fmt.Println("Server started on port")
	log.Fatal(http.ListenAndServe(":"+port, nil))
}

func apiHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("request received")
	enableCors(&w)
	fmt.Fprintf(w, "hello")
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}
