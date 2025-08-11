FROM node:18   
# using official Node.js image for building the Docker image
WORKDIR /app	
# assign /app as the official working director INSIDE THE CONTAINER
COPY package*.json ./  
# Copy all the dependency file ending with .json to the COntainer from Project directory
RUN npm install  
# the commands that needs to be executed in the Container
COPY . .
# Copy all the remaining files from the Project Directory to the container wokring directory /app
EXPOSE 3000
#informs Docker that the application will listen to the port 3000
CMD ["node", "index.js"]
# Default command to be executed in the application using Node.js

