#!/bin/bash

CONTAINER_NAME=mysql

if ! docker ps --format '{{.Names}}' | grep -w "$CONTAINER_NAME" &>/dev/null; then
  docker run \
    -d \
    --name="$CONTAINER_NAME" --env="MYSQL_ROOT_PASSWORD=$CONTAINER_NAME" \
    --publish 6603:3306 \
    --volume=/Users/bastian.bueld/Desktop/DemoProjects/SpringGuide/docker/mysql/conf.d \
    mysql
else
  docker start "$CONTAINER_NAME" || echo "There was an error, might the Container be running already?"
fi

