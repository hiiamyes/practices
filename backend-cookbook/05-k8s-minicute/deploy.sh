eval $(minikube docker-env)
kubectl apply -f api-deployment.yaml
eval $(minikube docker-env -u)
