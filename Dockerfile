# syntax=docker/dockerfile:1
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ENV NITRO_PRESET=node-server
ENV VITE_AUTH_ENABLED=false
RUN npm run build:node

FROM node:22-alpine AS app
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000
COPY --from=build /app/.output ./.output
COPY --from=build /app/node_modules/@electric-sql/pglite/dist/pglite.data /app/.output/server/_libs/pglite.data
COPY --from=build /app/node_modules/@electric-sql/pglite/dist/pglite.wasm /app/.output/server/_libs/pglite.wasm
COPY --from=build /app/node_modules/@electric-sql/pglite/dist/initdb.wasm /app/.output/server/_libs/initdb.wasm
USER node
EXPOSE 3000
HEALTHCHECK --interval=15s --timeout=5s --start-period=20s --retries=8 \
  CMD node -e "fetch('http://127.0.0.1:3000/').then((r)=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
CMD ["node", ".output/server/index.mjs"]
