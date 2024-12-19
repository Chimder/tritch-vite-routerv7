FROM node:20-alpine as dependencies-env
RUN npm i -g pnpm
COPY . /app

FROM dependencies-env as development-dependencies-env
COPY ./package.json pnpm-lock.yaml /app/
WORKDIR /app
RUN pnpm i --frozen-lockfile

FROM dependencies-env as production-dependencies-env
COPY ./package.json pnpm-lock.yaml /app/
WORKDIR /app
RUN pnpm i --prod --frozen-lockfile

FROM dependencies-env AS build-env
COPY ./package.json pnpm-lock.yaml /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app

ENV VITE_BACK_API=${VITE_BACK_API}
ENV VITE_PUBLIC_CLIENT_ID=${VITE_PUBLIC_CLIENT_ID}
ENV VITE_PUBLIC_CLIENT_SECRET=${VITE_PUBLIC_CLIENT_SECRET}

RUN pnpm build

FROM dependencies-env
COPY ./package.json pnpm-lock.yaml /app/
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
WORKDIR /app

EXPOSE 8080

CMD ["pnpm", "start"]