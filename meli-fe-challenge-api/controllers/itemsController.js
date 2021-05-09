import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import ResultsDTO from '../models/resultsDTO.js';
import ItemDetailDTO from '../models/itemDetailDTO.js';

dotenv.config();

const router = express.Router();
const meliUrl = process.env.MELI_API_URL;

router.route('/').get((req, res, next) => {
  const queryParams = req.query;
  axios
    .get(`${meliUrl}/sites/MLA/search`, {
      params: { ...queryParams },
    })
    .then((response) => res.json(ResultsDTO.fromMeliResults(response.data)))
    .catch((err) => res.status(424).send(err));
});

router.route('/:id').get((req, res, next) => {
  const id = req.params.id;
  const itemUrl = `${meliUrl}/items/${id}`;
  const itemDescriptionUrl = `${meliUrl}/items/${id}/description`;
  const itemBreadcrumbUrl = `${meliUrl}/items/${id}/breadcrumb`;
  const getItemInformation = () => axios.get(itemUrl);
  const getItemDescription = () => axios.get(itemDescriptionUrl);
  const getItemBreadcrumbUrl = () => axios.get(itemBreadcrumbUrl);
  Promise.all([
    getItemInformation(),
    getItemDescription(),
    getItemBreadcrumbUrl(),
  ])
    .then(
      ([itemInfoResponse, itemDescriptionResponse, itemBreadcrumbResponse]) =>
        res.json(
          ItemDetailDTO.fromMeliResponses(
            itemInfoResponse.data,
            itemDescriptionResponse.data,
            itemBreadcrumbResponse.data
          )
        )
    )
    .catch((err) => res.status(424).send(err));
});

export default router;
