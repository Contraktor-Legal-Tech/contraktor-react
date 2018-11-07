import { configure, addDecorator } from '@storybook/react';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';
import { addLocaleData } from 'react-intl';
import { configureActions } from '@storybook/addon-actions';

// Load the locale data for all your defined locales
import enLocaleData from 'react-intl/locale-data/en';
import ptLocaleData from 'react-intl/locale-data/pt';

import '../styles/global-styles';

import messages from '../../src/messages';

// Add locale data
addLocaleData(enLocaleData);
addLocaleData(ptLocaleData);

// Set intl configuration
setIntlConfig({
  locales: ['en-US', 'pt-BR'],
  defaultLocale: 'pt-BR',
  getMessages: (locale) => messages[locale]
});

// Register decorators
addDecorator(withIntl);

configureActions({
  limit: 20
});

function loadStories() {
  const stories = require.context('../../src', true, /\.stories\.jsx?$/);
  stories.keys().forEach((filename) => stories(filename));
}

// Run storybook
configure(loadStories, module);
