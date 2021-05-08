import Price from './price.js';

class ResultItemDTO {
  id;
  title;
  price;
  picture;
  condition;
  free_shipping;

  static fromMeliResultItem(meliResultItem) {
    const mappedDTO = new ResultItemDTO();
    mappedDTO.id = meliResultItem.id;
    mappedDTO.title = meliResultItem.title;
    mappedDTO.price = new Price(
      meliResultItem.currency_id,
      meliResultItem.price
    ); // @TODO: Consultar con que prop mapea 'decimals'
    mappedDTO.picture = meliResultItem.thumbnail;
    mappedDTO.condition = meliResultItem.condition;
    return mappedDTO;
  }
}

export default ResultItemDTO;
