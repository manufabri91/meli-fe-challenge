import Price from './price.js';

class ResultItemDTO {
  id;
  title;
  price;
  picture;
  condition;
  free_shipping;
  city;

  static fromMeliResultItem(meliResultItem) {
    const mappedDTO = new ResultItemDTO();
    mappedDTO.id = meliResultItem.id;
    mappedDTO.title = meliResultItem.title;
    mappedDTO.price = new Price(meliResultItem.currency_id, meliResultItem.price); // @TODO: Consultar con que prop mapea 'decimals'
    mappedDTO.picture = meliResultItem.thumbnail;
    mappedDTO.condition = meliResultItem.condition;
    mappedDTO.free_shipping = meliResultItem.shipping.free_shipping;
    mappedDTO.city = meliResultItem.address.city_name;
    return mappedDTO;
  }
}

export default ResultItemDTO;
