eval $(minikube docker-env)
kubectl apply -f api-deployment.yaml
kubectl apply -f api-service.yaml
eval $(minikube docker-env -u)
