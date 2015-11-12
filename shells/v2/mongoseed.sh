#!/bin/bash

mongoimport --db ships --collection ship --file ships.json
mongoimport --db ships --collection user --file users.json
