# # Use official nginx image as the base image
# FROM nginx:latest

# # Copy the build output to replace the default nginx contents.
# COPY /dist/contact-ui /usr/share/nginx/html

# # Expose port 80
EXPOSE 80
FROM node:20-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
# Serve Application using Nginx Server
FROM nginx:alpine
COPY --from=build /app/dist/contact-ui/ /usr/share/nginx/html
EXPOSE 80
