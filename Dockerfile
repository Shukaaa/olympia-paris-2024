FROM nginx:1.25.1

COPY dist/gui /app/

EXPOSE 80
