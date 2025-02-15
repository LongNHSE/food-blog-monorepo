FROM food-blog-builder AS base
WORKDIR /app

# Copy only the service code
COPY . .
RUN npx nx build nestjs-shop-service

CMD ["node", "dist/apps/nestjs-shop-service/main.js"]