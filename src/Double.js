/**
 * The module would be used as:
 *
 * import Double from './Double';
 * new Double;
 */
export default class Double {
  /**
   * Initialize the class.
   *
   * @return {Void}
   */
  constructor() {
    this.form();
    this.setup();
  }

  /**
   * Build and insert the form into the body DOM element.
   *
   * @return {Void}
   */
  form() {
    document.body.innerHTML = (`
      <form>
        <input id="value" type="text" value="1"/>
        <input id="double" type="button" value="Double"/>
      </form>
    `);
  }

  /**
   * Setup the elements and event listeners to handle the doubling
   * of the form input.
   *
   * @return {Void}
   */
  setup() {
    const double = document.getElementById('double');

    double.addEventListener('click', () => {
      const element = document.getElementById('value');
      const value = parseInt(element.value);

      if (Number.isInteger(value)) {
        element.value = (value + value);
      }
    });
  }
}
