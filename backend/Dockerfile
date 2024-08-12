# Use an official Node.js image to build the React app
FROM node:16 as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json 
COPY package.json .

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# # Expose port 3500 to serve the app
EXPOSE 3500

# Start Nginx
CMD ["npm", "run","dev"]
