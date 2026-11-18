
FROM nginx:stable-alpine

COPY index.html styles.css app.js /usr/share/nginx/html/

COPY images/ /usr/share/nginx/html/images/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
