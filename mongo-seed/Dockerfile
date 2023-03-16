FROM mongo:latest

COPY event.json /event.json
CMD mongoimport --host mongodb --authenticationDatabase admin --username root --password rootpassword --db tmsysboot --collection event --type json --file /event.json --jsonArray

COPY users.json /users.json
CMD mongoimport --host mongodb --authenticationDatabase admin --username root --password rootpassword --db tmsysboot --collection users --type json --file /users.json --jsonArray