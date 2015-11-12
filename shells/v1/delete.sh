#!/bin/bash

if [ $# -ne 2 ]; then
  echo "Usage: $0 <id> <api_key>"
  exit
fi

curl -X DELETE http://localhost:1337/api/v1/ship/$1?api_key=$2 --header "Content-Type:application/json"
