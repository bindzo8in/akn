# syntax=docker/dockerfile:1

# ============================================================
# 1. Dependencies
# ============================================================

FROM node:22-alpine AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable && \
    corepack prepare pnpm@12.5.1 --activate

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml* ./

RUN pnpm config set ignore-scripts false && \
    pnpm install --frozen-lockfile


# ============================================================
# 2. Builder
# ============================================================

FROM node:22-alpine AS builder

RUN apk add --no-cache libc6-compat

WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable && \
    corepack prepare pnpm@12.5.1 --activate

# Reuse dependencies
COPY --from=deps /app/node_modules ./node_modules

# Copy application source
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

# ============================================================
# Build Next.js
# ============================================================

RUN --mount=type=secret,id=NEXT_PUBLIC_BUSINESS_NAME,env=NEXT_PUBLIC_BUSINESS_NAME \
    --mount=type=secret,id=NEXT_PUBLIC_TAGLINE,env=NEXT_PUBLIC_TAGLINE \
    --mount=type=secret,id=NEXT_PUBLIC_ENGINEER_NAME,env=NEXT_PUBLIC_ENGINEER_NAME \
    --mount=type=secret,id=NEXT_PUBLIC_ENGINEER_DEGREE,env=NEXT_PUBLIC_ENGINEER_DEGREE \
    --mount=type=secret,id=NEXT_PUBLIC_PHONE_PRIMARY,env=NEXT_PUBLIC_PHONE_PRIMARY \
    --mount=type=secret,id=NEXT_PUBLIC_PHONE_SECONDARY,env=NEXT_PUBLIC_PHONE_SECONDARY \
    --mount=type=secret,id=NEXT_PUBLIC_EMAIL,env=NEXT_PUBLIC_EMAIL \
    --mount=type=secret,id=NEXT_PUBLIC_LOCATION_PRIMARY,env=NEXT_PUBLIC_LOCATION_PRIMARY \
    --mount=type=secret,id=NEXT_PUBLIC_LOCATION_SECONDARY,env=NEXT_PUBLIC_LOCATION_SECONDARY \
    --mount=type=secret,id=NEXT_PUBLIC_LOCATION_STATE,env=NEXT_PUBLIC_LOCATION_STATE \
    --mount=type=secret,id=NEXT_PUBLIC_ADDRESS_STREET,env=NEXT_PUBLIC_ADDRESS_STREET \
    --mount=type=secret,id=NEXT_PUBLIC_ADDRESS_FULL,env=NEXT_PUBLIC_ADDRESS_FULL \
    --mount=type=secret,id=NEXT_PUBLIC_INSTAGRAM_HANDLE,env=NEXT_PUBLIC_INSTAGRAM_HANDLE \
    --mount=type=secret,id=NEXT_PUBLIC_INSTAGRAM_URL,env=NEXT_PUBLIC_INSTAGRAM_URL \
    --mount=type=secret,id=NEXT_PUBLIC_YOUTUBE_HANDLE,env=NEXT_PUBLIC_YOUTUBE_HANDLE \
    --mount=type=secret,id=NEXT_PUBLIC_YOUTUBE_URL,env=NEXT_PUBLIC_YOUTUBE_URL \
    --mount=type=secret,id=NEXT_PUBLIC_WORKING_HOURS_WEEKDAY,env=NEXT_PUBLIC_WORKING_HOURS_WEEKDAY \
    --mount=type=secret,id=NEXT_PUBLIC_WORKING_HOURS_SUNDAY,env=NEXT_PUBLIC_WORKING_HOURS_SUNDAY \
    --mount=type=secret,id=NEXT_PUBLIC_SITE_URL,env=NEXT_PUBLIC_SITE_URL \
    --mount=type=secret,id=NEXT_PUBLIC_FOUNDED_YEAR,env=NEXT_PUBLIC_FOUNDED_YEAR \
    --mount=type=secret,id=RESEND_API_KEY,env=RESEND_API_KEY \
    --mount=type=secret,id=RESEND_FROM_EMAIL,env=RESEND_FROM_EMAIL \
    --mount=type=secret,id=RESEND_TO_EMAIL,env=RESEND_TO_EMAIL \
    pnpm run build


# ============================================================
# 3. Production Runner
# ============================================================

FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN apk add --no-cache libc6-compat

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs


# ============================================================
# Static assets
# ============================================================

COPY --from=builder /app/public ./public

COPY --from=builder \
    --chown=nextjs:nodejs \
    /app/.next/standalone ./

COPY --from=builder \
    --chown=nextjs:nodejs \
    /app/.next/static ./.next/static


# ============================================================
# Runtime
# ============================================================

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]