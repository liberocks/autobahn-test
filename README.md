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