import Author from './author.js';
import ResultItemDTO from './resultItemDTO.js';

class ResultsDTO {
  author;
  categories;
  items;

  static fromMeliResults(meliResults) {
    const mappedDTO = new ResultsDTO();
    mappedDTO.author = new Author('Manuel', 'Fabri');
    mappedDTO.categories = [
      ...new Set(meliResults.results.map((item) => item.category_id)),
    ]; // @TODO: Validar si esperaban esto, xq no hay otra cat.
    mappedDTO.items = meliResults.results.map((item) =>
      ResultItemDTO.fromMeliResultItem(item)
    );
    return mappedDTO;
  }
}

export default ResultsDTO;
