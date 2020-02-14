#!/bin/sh
eval $(minikube docker-env)
docker build -t api services/api
docker image prune -f
eval $(minikube docker-env -u)
