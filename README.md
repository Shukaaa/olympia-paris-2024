Pull the Docker image for the front-end:
```
docker pull shukaaa/olympia-front-end:latest
```

Run the Docker image for the front-end:
```
docker run -d -p 80:6000 --name olympia-front-end shukaaa/olympia-front-end:latest
```
