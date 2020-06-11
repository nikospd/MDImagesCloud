# MDImagesCloud

### Docker
* docker build -t mdcimage:latest .
* docker run -p 8000:8080 -tdi --name mdContainer mdcimage

And then type `localhost:8000` to your browser to access into the app 

### Kubernetes 

* `sudo apt-get install conntrack -y`
* Single node cluster with minikube. `sudo minikube start --driver=none`


Apply deployment and service with kubectl
* `kubectl apply -f deployment.yaml`
* `kubectl apply -f service.yaml`
* check all the parts of the cluster: `kubectl get all`