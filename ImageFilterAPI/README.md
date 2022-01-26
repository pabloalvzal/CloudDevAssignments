# Udagram Image Filtering Microservice

Simple API service deployed to ElasticBeanstalk to fetch an image from a public S3 bucket.

To test go to:

http://imagefilterapi-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://public-images-484401254725-dev.s3.amazonaws.com/Scheveningen.jpeg

## Tasks
### Setup Node Environment

You'll need to create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`

### Create a new endpoint in the server.ts file

The starter code has a task for you to complete an endpoint in `./src/server.ts` which uses query parameter to download an image from a public URL, filter the image, and return the result.

We've included a few helper functions to handle some of these concepts and we're importing it for you at the top of the `./src/server.ts`  file.

```typescript
import {filterImageFromURL, deleteLocalFiles} from './util/util';
```

### Deploying your system

Follow the process described in the course to 

1. Setup a new application:

    ```bash
    eb init --profile ud
    ```
2. Create new environment to deploy your image-filter serviceand:

    ```bash
    eb create --profile ud
    ```

3. Push changes:

    ```bash
    eb deploy
    ```




