#!/bin/bash

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/seed/*.json"

for f in $DIR; do
  curl -X POST -d @$f http://localhost:1337/api/v1/ship --header "Content-Type:application/json"
  echo -e "\n"
done
