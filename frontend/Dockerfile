# Node LTS
FROM node:20-alpine

# Application directory
WORKDIR /app

# Install dependencies first (better Docker cache)
COPY package.json yarn.lock ./

RUN yarn install

# Copy project
COPY . .

# Next.js default port
EXPOSE 3000

# Development server
CMD ["yarn", "dev"]