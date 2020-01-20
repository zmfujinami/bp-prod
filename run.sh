#!/usr/bin/env bash
SCRIPT_DIR=$(cd $(dirname $0); pwd)
cd $SCRIPT_DIR/docker
docker-compose stop
docker-compose up -d
docker exec bp-api npm run dev &
docker exec bp-vue npm run serve &