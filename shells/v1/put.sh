#!/bin/bash

if [ $# -ne 3 ]; then
  echo "Usage: $0 <json-file> <id> <api_key>"
  exit
fi

curl -X PUT -d @$1 http://localhost:1337/api/v1/ship/$2?api_key=$3 --header "Content-Type:application/json"
echo
