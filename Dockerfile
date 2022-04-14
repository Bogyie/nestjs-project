# Step 1
## base image for step 1: Node 16
FROM node:16 AS builder
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build



# Step 2
## bse image for step 2: Node 10-alpine
FROM node:16-alpine
WORKDIR /app

COPY --from=builder /app ./

CMD ["npm", "run", "start"]
