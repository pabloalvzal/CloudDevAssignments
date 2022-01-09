import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;

  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  });

  // Sampel image for query value:
  // http://localhost:8082/filteredimage?image_url=https://public-images-484401254725-dev.s3.amazonaws.com/Scheveningen.jpeg
  app.get('/filteredimage', async (req, res) => {
    let file: string;
    if ('image_url' in req.query) {
      file = await filterImageFromURL(req.query.image_url);
      res.sendFile(file, (err?: Error) => {
        if (!err) {
          return deleteLocalFiles([file])
        }
        res.send(`Error while sending image file: ${err.message}`)
      });
    } else {
      return res.send("Did you include the image URL query?")
    }
  })

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();