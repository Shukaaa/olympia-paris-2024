FROM caddy:alpine

COPY dist/gui /app/
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80
