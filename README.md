# MDImagesCloud
If you want to run only the application assuming that you have a ready mysql database up and running, first thing you have to change the db credentials inside the `index.js` file.

```
cd app
npm install
npm start
``` 

### Docker
This option is when you want to run the application along with a mysql database into docker containers. 

Initialize and run the containers with `docker-compose up`.

You can delete the containers with `docker-compose down` 

You can start and stop the containers with `docker-compose start/stop`

And then type `localhost:3004` to your browser to access into the app 

### Kubernetes 
This option is for running this containers inside a cluster. Tested with kubernetes minikube for single node cluster


* `sudo apt-get install conntrack -y`
* Single node cluster with minikube. `sudo minikube start --driver=none`


Apply deployment and service with kubectl
* `kubectl apply -f deployment.yaml`
* `kubectl apply -f service.yaml`
* check all the parts of the cluster: `kubectl get all`