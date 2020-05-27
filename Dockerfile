FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY app/ /var/www/app
EXPOSE 8080


