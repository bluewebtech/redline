/**
 * The module would be used as:
 *
 * import Sort from './Sort';
 * new Sort;
 */
export default class Sort {
  sortByPriceAscending(jsonString) {
    const object = JSON.parse(jsonString);
    const items =  object.sort((a, b) => {
      if (a.price === b.price) {
        return a.name;
      }

      return parseFloat(a.price) - parseFloat(b.price);
    });

    return JSON.stringify(items);
  }
}
