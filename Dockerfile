

# This is the build-container, we need node to build
FROM node:16 as build

# Set NODE_ENV to production to create a production-build of react
ENV NODE_ENV production

# Create a directory to use for building
RUN mkdir /app
# Set the build-directory as the working (and current) directory
WORKDIR /app

# We start by building just dependencies, this means that we can use cached dependencies
# if these files are not changed
COPY frontend/package.json .
# We are using yarn. If you use npm, this would be package-lock.json
COPY frontend/yarn.lock .
# Remove this if you are not using typescript. (but you should use typescript)
COPY frontend/tsconfig.json .
# Install dependencies
RUN yarn install --pure-lockfile

# Copy the actual code and public (static files)
COPY frontend/src src
COPY frontend/public public
# Build the dependencies. This will output to `/app/build` the static files which need to be served
# to the user
RUN yarn build


# We don't need the node-container in production, we just need something that can serve the static
# files to the user. Nginx is really good at this. `FROM` starts a new container
FROM nginx:1.15.12-alpine

# We copy the built files from the build-container. These files are in `/app/build` after the
# build-step above.
COPY --from=build /app/build /usr/share/nginx/html

# If you are using client routing you need to add some config to nginx.
COPY frontend/nginx_deployment/nginx.conf /etc/nginx/conf.d/default.conf