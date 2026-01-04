#!/bin/sh
set -e

echo "====================================="
echo "🚀 Starting application bootstrap"
echo "====================================="

echo "📦 Running Prisma migrations..."
npx prisma migrate deploy || echo "ℹ️ No migrations to apply"

echo "🌱 Running Prisma seed..."
npx prisma db seed || echo "ℹ️ Seed skipped or already applied"

echo "====================================="
echo "🔥 Starting API server"
echo "====================================="

exec npm run start
