<<<<<<< HEAD
#generate code as per the other files
# Use an official Node.js runtime as a parent image
FROM node:14
# Set the working directory in the container
WORKDIR /app  
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install
# Copy the rest of the application code to the working directory
COPY . .  
# Expose the port the app runs on   
EXPOSE 3000
# Define the command to run the application
CMD ["npm", "start"]
=======
#generate code as per the other files
# Use an official Node.js runtime as a parent image
FROM node:14
# Set the working directory in the container
WORKDIR /app  
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install
# Copy the rest of the application code to the working directory
COPY . .  
# Expose the port the app runs on   
EXPOSE 3000
# Define the command to run the application
CMD ["npm", "start"]
>>>>>>> a24782a463ddfef10ca3fe7a51ed6f2e7fd18a5f
