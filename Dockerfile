FROM node

WORKDIR /usr/app
COPY ./ /usr/app

RUN npm install --omit=dev
RUN npm i sharp
RUN npm run build
CMD ["npm", "start"]