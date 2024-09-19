FROM node:20-slim

WORKDIR /app

COPY frontend/package.json .

# Uncomment if you face UNABLE_TO_GET_ISSUER_CERT_LOCALLY uncomment the next line
#RUN npm config set strict-ssl false
RUN npm install

COPY frontend .

RUN npm run build

EXPOSE 8000

# Set default command to start
CMD ["npx", "serve", "-s", "-l", "8000", "dist"]