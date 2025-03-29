To run the repository:

git clone https://github.com/MANE-PRO/Appreciation.git

CREATE A .env file in backend directory with following info

DB_HOST
DB_USER
DB_PASSWORD
DB_NAME
DB_PORT
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
SECRET_KEY

#Assuming in root project directory

cd frontend && npm install && npm run build

cd ..

cd backend

npm install

node server.js

Project shall run on http://localhost:8000

