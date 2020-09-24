/**
 * The module would be used as:
 *
 * import Form from './Form';
 * new Form;
 */
export default class Form {
  /**
   * Initialize the class.
   *
   * @return {Void}
   */
  constructor() {
    this.form();
    this.handler();
  }

  /**
   * Build and insert the form into the body DOM element.
   *
   * @return {Void}
   */
  form() {
    document.body.innerHTML = (`
      <div class="error-message">
        <h1>No no no you didn't fill out the form right!</h1>
      </div>

      <form id="feedback">
        <input type="radio" id="delighted" name="delighted" checked="checked" required /> Delighted
        <input type="checkbox" id="donate" name="donate" /> Donate<br />
        <input type="radio" id="not-delighted" name="delighted" required /> Not delighted
        <input type="text" id="reason" name="reason" /> Reason<br />
        <input type="submit" value="Submit"/>
      </form>
    `);
  }

  /**
   * Handle the form validation and submission.
   * This handler is not clean and would be broken down
   * quite a bit more so it is not lumped together into
   * a single method.
   *
   * @return {Void}
   */
  handler() {
    const error = document.getElementsByClassName('error-message');
    const delighted = document.getElementById('delighted');
    const notDelighted = document.getElementById('not-delighted');
    const donate = document.getElementById('donate');
    const reason = document.getElementById('reason');
    const feedback = document.getElementById('feedback');

    error[0].style.display = 'none';

    delighted.addEventListener('click', () => {
      donate.disabled = false;
      reason.value = '';
    });

    notDelighted.addEventListener('click', () => {
      donate.disabled = true;
      donate.checked = false;
    });

    feedback.addEventListener('submit', (event) => {
      const validate = (delighted.checked || notDelighted.checked && reason.value !== '');

      if (validate) {
        window.location = 'https://isitchristmas.com/';
      } else {
        error[0].style.display = 'block';
      }

      event.preventDefault();
    });
  }
}
