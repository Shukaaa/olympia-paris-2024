FROM nginx:1.25.1

COPY dist/gui /app/
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
