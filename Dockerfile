FROM daocloud.io/library/nginx:1.8
COPY nginx.conf /etc/nginx/
RUN rm /etc/nginx/conf.d/default.conf
COPY dist /home/dist
EXPOSE 80/tcp
ENTRYPOINT [ "nginx","g", "daemon off;" ]
