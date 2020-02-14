Start Minikube

```
minikube start
minikube dashboard
```

Build images

```
./build.sh
```

Start

```
./start.sh
```

Check the result

```
open http://$(minikube ip):30003
```

Port Forward (No needed!)

```
kubectl port-forward service/api-service 3002
open http://localhost:3002
```

Log

```
kubectl logs api-deployment-7f86877d4d-cr8g8
```

Stop

```
./stop/sh
```
