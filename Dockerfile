# Multi-stage: build Eleventy, serve with Nginx
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.27-alpine AS serve
# Pre-built auth file — used by nginx auth_basic for /private/
# If you don't need protected posts, just leave the file empty or remove
# the /private/ block from nginx.conf.
COPY --from=build /app/.htpasswd /etc/nginx/.htpasswd
COPY --from=build /app/_site /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
