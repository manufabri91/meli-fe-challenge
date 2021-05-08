import Author from './author.js';
import Price from './price.js';

class ItemDetailDTO {
  author;
  item;

  constructor() {
    this.author = new Author('Manuel', 'Fabri');
  }

  static fromMeliItemDetailAndDescription(
    meliDetailResponse,
    meliDescriptionResponse
  ) {
    const mappedDTO = new ItemDetailDTO();
    mappedDTO.item = {
      id: meliDetailResponse.id,
      title: meliDetailResponse.title,
      price: new Price(
        meliDetailResponse.currency_id,
        meliDetailResponse.price
      ), // @TODO: Consultar con que prop mapea 'decimals'
      picture: meliDetailResponse.pictures[0].url,
      condition: meliDetailResponse.condition,
      free_shipping: meliDetailResponse.shipping.free_shipping,
    };
    mappedDTO.item.description = meliDescriptionResponse.plain_text;
    return mappedDTO;
  }
}

export default ItemDetailDTO;
