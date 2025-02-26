#!/bin/bash

# start frontend
cd frontend
ng serve &
FRONTEND_PID=$!
cd ..

# start backend
cd backend
go run . &
BACKEND_PID=$!
cd ..

# Wait for both processes to finish
echo "Frontend (PID: $FRONTEND_PID) and Backend (PID: $BACKEND_PID) are running."

# Catch SIGINT (Ctrl+C) to terminate both processes
trap "kill $FRONTEND_PID $BACKEND_PID; exit" SIGINT

wait