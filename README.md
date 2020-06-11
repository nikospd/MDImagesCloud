# MDImagesCloud

### Docker
* docker build -t mdcimage:latest .
* docker run -p 8000:8080 -tdi --name mdContainer mdcimage

And then type `localhost:8000` to your browser to access into the app 

### Kubernetes 

* `sudo apt-get install conntrack -y`
* Single node cluster with minikube. `sudo minikube start --driver=none`


* Single node cluster with minikube. --driver=docker
* Start dashboard: `minikube dashboard`
* On the host machine start an ssh proxy for port forwarding: 
`ssh $USER@$ADDRESS -L $DASHBOARD-PORT:localhost:$DASHBOARD-PORT -fN`

Because its a local docker image, we need to build it first, inside our minikube VM. 
* `eval $(minikube docker-env)`
* `docker build -t mdcimage:latest .`
* `docker run -p 8000:8080 -tdi --name mdContainer mdcimage`
* confirm the correct installation with `minikube ssh` and `docker images`

Apply deployment and service with kubectl
* `kubectl apply -f deployment.yaml`
* `kubectl apply -f service.yaml`
* check all the parts of the cluster: `kubectl get all`