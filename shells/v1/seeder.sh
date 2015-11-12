#!/bin/bash

if [ $# -ne 2 ]; then
  echo "Usage: $0 <json-file> <api_key>"
  exit
fi

curl -X POST -d @$1 http://localhost:1337/api/v1/ship?api_key=$2 --header "Content-Type:application/json"
