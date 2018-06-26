import { CompositeDisposable } from 'atom';
import { tidy_html5 as tidy } from 'tidy-html5';

import config from './config';

module.exports = {
  config: config,
  subscriptions: null,
  defaultOptions: {
    'quiet': true,
    'show-body-only': true,
    'show-errors': 0,
    'show-warnings': false
  },

  activate(): void {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable;

    // Register command that displays Hello World
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'tidy:document': () => this.tidyDocument(),
      'tidy:selection': () => this.tidySelection()
    }));
  },

  deactivate(): void {
    this.subscriptions.dispose();
  },

  tidyDocument(): void {
    const editor = atom.workspace.getActiveTextEditor();
    if (editor == null) {
      return atom.beep();
    }

    const scopeName = editor.getGrammar().scopeName;
    if (!scopeName.startsWith('text.html')) {
      return atom.beep();
    }

    let input, output;

    input = editor.getText();
    try {
      output = this.tidy(input);
      editor.setText(output);
    } catch (e) {
      console.error(e);
    }
  },

  tidySelection(): void {
    const editor = atom.workspace.getActiveTextEditor();
    if (editor == null) {
      return atom.beep();
    }

    const scopeName = editor.getGrammar().scopeName;
    if (!scopeName.startsWith('text.html')) {
      return atom.beep();
    }

    let input, output;

    input = editor.getLastSelection().getText();
    try {
      output = this.tidy(input);
      editor.setText(output);
    } catch (e) {
      console.error(e);
    }
  },

  tidy(input: string): string {
      let output;

      try {
        output = tidy(input, this.defaultOptions).trim();
      } catch (e) {
        console.error(e);
        if (typeof input !== 'undefined') return input;
      }

      return output;
  }
};
