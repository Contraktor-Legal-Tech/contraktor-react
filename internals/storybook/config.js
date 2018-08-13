import { configure } from '@storybook/react';

const requireStories = require.context('../../src', true, /\.stories\.jsx?$/);

function loadStories() {
  requireStories.keys().forEach((filename) => requireStories(filename));
}

configure(loadStories, module);
