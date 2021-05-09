import Author from './author.js';
import Price from './price.js';

class ItemDetailDTO {
  author;
  item;

  constructor() {
    this.author = new Author('Manuel', 'Fabri');
  }

  static fromMeliResponses(meliDetailResponse, meliDescriptionResponse, meliBreadcrumbResponse) {
    const mappedDTO = new ItemDetailDTO();
    mappedDTO.item = {
      id: meliDetailResponse.id,
      title: meliDetailResponse.title,
      price: new Price(meliDetailResponse.currency_id, meliDetailResponse.price), // @TODO: Consultar con que prop mapea 'decimals'
      picture: meliDetailResponse.pictures[0].secure_url,
      condition: meliDetailResponse.condition,
      free_shipping: meliDetailResponse.shipping.free_shipping,
      sold_quantity: meliDetailResponse.sold_quantity,
      bredcrumb_path_data: meliBreadcrumbResponse,
    };
    mappedDTO.item.description = meliDescriptionResponse.plain_text;
    return mappedDTO;
  }
}

export default ItemDetailDTO;
