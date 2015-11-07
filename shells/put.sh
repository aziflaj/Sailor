#!/bin/bash

curl -X PUT -d @details.json http://localhost:1337/api/v1/ship/563b157125bc62d234edefa3 --header "Content-Type:application/json" &> /dev/null
