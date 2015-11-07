#!/bin/bash

if [ $# -ne 1 ]; then
  echo "Usage: $0 <id>"
  exit
fi

curl -X DELETE http://localhost:1337/api/v1/ship/$1 --header "Content-Type:application/json" &> /dev/null
