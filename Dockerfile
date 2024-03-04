FROM node

RUN npm install --production
RUN npm run build
CMD ["npm", "run"]