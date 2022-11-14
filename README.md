# Autobahn Dashboard

## Tech stacks
- [React](https://reactjs.org/) for front-end framework
- [Recoil](https://recoiljs.org/) for state management
- [Tailwind](https://tailwindcss.com/) for front-end styling
- [React Query](https://tanstack.com/query) for data fetching
- [MySQL](https://www.mysql.com/)
- [NestJS](https://nestjs.com/)

## System Diagram
![System Diagram](/docs/system-diagram.png)

## Simple Demo
![Demo](/docs/demo.gif)

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