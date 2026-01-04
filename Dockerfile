# ===============================
# BUILD STAGE
# ===============================
FROM node:20-alpine AS builder

WORKDIR /app


COPY package*.json ./
COPY prisma ./prisma

RUN npm ci


COPY . .

RUN npx prisma generate
RUN npm run build

# ===============================
# PRODUCTION STAGE
# ===============================
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/dist ./dist
COPY package*.json ./

ENV NODE_ENV=production

EXPOSE 3333

CMD sh -c "npx prisma migrate deploy && npx prisma db seed && node dist/server.js"
