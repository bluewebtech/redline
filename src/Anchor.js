/**
 * The module would be used as:
 *
 * import Anchor from './Anchor';
 * const anchor = new Anchor;
 * anchor.updateATag('https://www.google.com/', 'https://www.w3schools.com/');
 */
export default class Anchor {
  /**
   * Initialize the class.
   *
   * @return {Void}
   */
  constructor() {
    document.body.innerHTML = "<a href='https://www.google.com/'>Original</a>";
  }

  /**
   * Replace all {originalLink} anchor href attributes with {newLink}.
   *
   * @return {Void}
   */
  updateATag(originalLink, newLink) {
    let anchors = document.getElementsByTagName('a');

    for (let i = 0; i < anchors.length; i++) {
      if (anchors[i].href === originalLink) {
        anchors[i].href = newLink;
      }
    }
  }
}
