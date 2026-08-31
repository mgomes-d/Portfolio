FROM node:22-alpine

WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

RUN npm install

# Copy the rest of the code
COPY . .

EXPOSE 5173

# Important: --host so it's accessible from outside the container
CMD ["npm", "run", "dev", "--", "--host"]