import Author from './author.js';
import ResultItemDTO from './resultItemDTO.js';

class ResultsDTO {
  author;
  categories;
  items;

  constructor() {
    this.author = new Author('Manuel', 'Fabri');
  }

  static fromMeliResults(meliResults) {
    const relevantMeliResults = meliResults.results.slice(0, 4);
    const mappedDTO = new ResultsDTO();
    mappedDTO.categories = [...new Set(relevantMeliResults.map((item) => item.category_id))]; // @TODO: Validar si esperaban esto, xq no hay otra cat.
    mappedDTO.items = relevantMeliResults.map((item) => ResultItemDTO.fromMeliResultItem(item));
    return mappedDTO;
  }
}

export default ResultsDTO;
