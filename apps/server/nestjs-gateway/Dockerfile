FROM food-blog-builder AS base
WORKDIR /app

# Copy only the service code
COPY . .
RUN npx nx build nestjs-gateway

CMD ["node", "dist/apps/nestjs-gateway/main.js"]
