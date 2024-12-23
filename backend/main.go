package main

import (
	"log"
	"net/http"

	"github.com/liminal-harmonic/infrastructure-setup-spike/backend/handlers"
)

func main() {
	http.HandleFunc("/hello", handlers.HelloHandler)

	log.Println("Starting server on :8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatalf("Could not start server: %s\n", err.Error())
	}
} 