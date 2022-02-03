FROM node:16.13.2
WORKDIR /app/
COPY ./ /app/
RUN npm install
RUN npm build
RUN npm install serve -g
EXPOSE 4000
CMD ["serve", "-s", "build"]