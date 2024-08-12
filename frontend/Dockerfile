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

# # Build the React app
# RUN npm run build

# # Use a lightweight web server to serve the React app
# FROM nginx:alpine

# # Copy the build output to Nginx's HTML directory
# COPY --from=build /app/build /usr/share/nginx/html

# # Expose port 3000 to serve the app
EXPOSE 3000

# Start Nginx
CMD ["npm", "start"]
