# Autobahn Dashboard

## Quickstart
```
docker-compose -f docker-compose.dev.yaml up --build
```

## How to seed the database
```
cd api
cp env.sample .env
npm install
npm run seed
```

# How to create a new user
```
curl -X 'POST' \
  'http://0.0.0.0:8000/auth/sign-up' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "admin",
  "email": "admin@admin.com",
  "password": "admin"
}'
```