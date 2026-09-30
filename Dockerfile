FROM NODE

WORKDIR /app

COPY package* .json 
RUN npm install
COPY . .

CMD [ "NODE","server.js" ]