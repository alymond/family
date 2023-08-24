import express from 'express';

import family from './family'
import member from './member'

const router = express.Router();

export default (): express.Router => {
    family(router);
    member(router);

  return router;
};