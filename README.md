# Galaxeye-assignment
## Steps need to be executed to test the code

### The normal way:
- Store the data in your local database MongoDB Compass
- Connect to the database
- In command prompt:<br/>
  #### In one terminal
      - cd backend<br/>
      - npm install<br/>
      - npm run dev<br/>
      - The terminal should look like:<br/>
        Connected to MongoDB<br/>
        Server Running on port 3500<br/>
  -In different terminal:
      - cd frontend
      - npm install
      - npm start

### By using docker compose:
- Install the docker in your machine
- Change mongo_uri from mongodb://localhost:27017/galaxyeye to mongodb://mongo:27017/galaxyeye in dbConn.js
- In command prompt run docker-compose up --build

## Demo video
https://drive.google.com/file/d/1qW7zgt2MrIzuueZwDFqvJ7K11WDMO9Ut/view?usp=sharing
        
