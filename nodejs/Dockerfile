FROM mhart/alpine-node
RUN apk add --update git && rm -rf /tmp/* /var/cache/apk/*
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY * /usr/src/app/
RUN npm install

EXPOSE 8090
CMD [ "npm", "start" ]