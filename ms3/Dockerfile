# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./
RUN rm -rf node_modules

# Install the dependencies
RUN npm install

# Copy the remaining backend files to the container
COPY . .

# Expose the container port
EXPOSE 3003

# Start the backend server
CMD ["node", "server.js"]
