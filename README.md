# Useful commands

* Clear out local mongo container.
```
docker ps -a | grep mongo | awk '{print $1}' | xargs docker rm && docker volume rm on-my-mind_mongodb_master_data;
```