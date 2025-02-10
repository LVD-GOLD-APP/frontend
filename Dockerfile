# Stage 1: Install dependencies and build the Next.js app
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY yarn.lock package.json ./
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN yarn build

# Expose the port Next.js runs on
EXPOSE 3000

# Start the Next.js application
CMD ["yarn", "start"]
