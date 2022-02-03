FROM node:16.13.2
WORKDIR /app/
COPY ./ /app/
RUN npm install
RUN npm build
EXPOSE 4000
CMD ["npm", "start"]