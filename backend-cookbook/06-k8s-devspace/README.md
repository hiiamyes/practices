```
minikube start --kubernetes-version v1.14.0

npm install -g devspace
devspace upgrade
devspace use context minikube
devspace use namespace minikube
devspace dev
```
