/**
 * The module would be used as:
 *
 * import Sort from './Sort';
 * new Sort;
 */
export default class Sort {
  /**
   * Sort the JSON string by price first but if two items have
   * the same price sort the items by price and name.
   *
   * Think that was the question!
   *
   * @return {Void}
   */
  sortByPriceAscending(jsonString) {
    const object = JSON.parse(jsonString);
    const items =  object.sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);

      if (priceA === priceB) {
        return (a.name > b.name ? 1 : -1);
      }

      return priceA - priceB;
    });

    return JSON.stringify(items);
  }
}
