#!/bin/bash

if [ $# -ne 2 ]; then
  echo "Usage: $0 <json-file> <id>"
  exit
fi


curl -X PUT -d @$1 http://localhost:1337/api/v1/ship/$2 --header "Content-Type:application/json" &> /dev/null
