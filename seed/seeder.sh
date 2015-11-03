#!/bin/bash

for f in *.json; do
  curl -X POST -d @$f http://localhost:1337/api/v1/ship --header "Content-Type:application/json"
done
