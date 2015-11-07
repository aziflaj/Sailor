#!/bin/bash

curl -X DELETE http://localhost:1337/api/v1/ship/563b157125bc62d234edefa2 --header "Content-Type:application/json" &> /dev/null
