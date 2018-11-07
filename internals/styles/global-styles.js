import { injectGlobal, keyframes } from 'styled-components';

import 'sanitize.css/sanitize.css';

// import 'semantic-ui-css/components/reset.css';
// import 'semantic-ui-css/components/site.css';
import 'semantic-ui-css/components/icon.css';
import 'semantic-ui-css/components/accordion.css';
import 'semantic-ui-css/components/comment.css';
import 'semantic-ui-css/components/feed.css';
import 'semantic-ui-css/components/image.css';
import 'semantic-ui-css/components/menu.css';
import 'semantic-ui-css/components/rail.css';
import 'semantic-ui-css/components/shape.css';
import 'semantic-ui-css/components/table.css';
import 'semantic-ui-css/components/ad.css';
import 'semantic-ui-css/components/container.css';
import 'semantic-ui-css/components/flag.css';
import 'semantic-ui-css/components/input.css';
import 'semantic-ui-css/components/message.css';
import 'semantic-ui-css/components/rating.css';
import 'semantic-ui-css/components/sidebar.css';
import 'semantic-ui-css/components/tab.css';
import 'semantic-ui-css/components/breadcrumb.css';
import 'semantic-ui-css/components/dimmer.css';
import 'semantic-ui-css/components/form.css';
import 'semantic-ui-css/components/item.css';
import 'semantic-ui-css/components/modal.css';
import 'semantic-ui-css/components/transition.css';
import 'semantic-ui-css/components/button.css';
import 'semantic-ui-css/components/divider.css';
import 'semantic-ui-css/components/grid.css';
import 'semantic-ui-css/components/label.css';
import 'semantic-ui-css/components/nag.css';
import 'semantic-ui-css/components/reveal.css';
import 'semantic-ui-css/components/statistic.css';
import 'semantic-ui-css/components/video.css';
import 'semantic-ui-css/components/card.css';
import 'semantic-ui-css/components/dropdown.css';
import 'semantic-ui-css/components/header.css';
import 'semantic-ui-css/components/list.css';
import 'semantic-ui-css/components/popup.css';
import 'semantic-ui-css/components/search.css';
import 'semantic-ui-css/components/step.css';
import 'semantic-ui-css/components/checkbox.css';
import 'semantic-ui-css/components/embed.css';
import 'semantic-ui-css/components/loader.css';
import 'semantic-ui-css/components/progress.css';
import 'semantic-ui-css/components/segment.css';
import 'semantic-ui-css/components/sticky.css';

import theme from './theme';
import { Layers } from './constants';

const loader = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
  }

  html {
    font-size: ${theme.fontSize};
  }

  body {
    margin: 0px;
    padding: 0px;
    background: ${theme.backgroundColor};
    font-family: ${theme.pageFont};
    font-size: ${theme.fontSize};
    line-height: ${theme.lineHeight};
    color: ${theme.textColor};

    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
  }

  #appRoot {
    height: 100%;
    min-height: 100%;

    > div {
      height: 100%;
      min-height: 100%;
      display: flex;
      flex-direction: column;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.headerFont};
    font-weight: 400;
    line-height: ${theme.headerLineHeight};
    color: ${theme.headerColor};
    margin: 0 0 0.675em 0;
    padding: 0;

    &:last-child {
      margin: 0;
    }
  }

  input {
    font-family: ${theme.headerFont};
  }

  p {
    margin: 0 0 0.675em 0;
    padding: 0;

    &:last-child {
      margin: 0;
    }
  }

  strong {
    font-weight: 500;
    color: ${theme.strongColor};
  }

  a {
    color: ${theme.linkColor};
    text-decoration: none;
  }

  a:hover,
  a:focus {
    color: ${theme.linkColorHover};
    text-decoration: none;
  }

  .notification {
    text-align: center;
  }

  /* SemanticUI overrides */
  .ui.loader:after {
    animation: ${loader} 0.6s infinite linear;
  }

  .ui.menu {
    box-shadow: none;
  }

  .ui.menu .item > .label {
    margin-left: 0;
  }

  .ui.menu .item:before {
    display: none;
  }

  .ui.secondary.vertical.menu .item,
  .ui.secondary.vertical.menu>.item {
    margin-left: 0;
    margin-right: 0;
    border-radius: 0 !important;
  }

  .ui.inverted a {
    text-decoration: none;
  }

  .ui.inverted.popup {
    background-color: ${theme.tooltipBackgrounColor};
    color: ${theme.textColor};
    .header {
      color: ${theme.textColor};
    }
    .content{

    }
    &::before {
      background-color: ${theme.tooltipBackgrounColor};
    }
  }

  .ui.inverted.top.popup:before,
  .ui.inverted.bottom.popup:before{
    background-color: ${theme.tooltipBackgrounColor};
  }

  .ui.dropdown.fat > .dropdown.icon {
    margin-top: -1px;
  }

  .ui.form .field.field label,
  .field.field label,
  label {
    color: ${theme.headerColor};
    font-size: 0.875em;
    font-weight: 500;
  }

  .ui.modal > .close {
    top: 1.0535rem;
    right: 1rem;
    color: rgba(0,0,0,.7);
  }

  .ui.page.dimmer {
    z-index: ${Layers.MODAL};
  }

  .ui.search.dropdown {
    min-width: 3em;
  }

  .ui.search.button.dropdown {
    min-width: 120px;

    .dropdown.icon {
      float: right;
    }
  }

  .ui.dimmer {
    background-color: rgba(0, 0, 0, 0.25);
  }

  /* do not hide messages in forms without errors */
  .ui.form .message {
    display: block !important;
  }

  .ui.form input:not([type]),
  .ui.form input[type="date"],
  .ui.form input[type="datetime-local"],
  .ui.form input[type="email"],
  .ui.form input[type="number"],
  .ui.form input[type="password"],
  .ui.form input[type="search"],
  .ui.form input[type="tel"],
  .ui.form input[type="time"],
  .ui.form input[type="text"],
  .ui.form input[type="file"],
  .ui.form input[type="url"],
  .ui.form textarea {
    font-family: ${theme.headerFont};
  }

  /* ICONS */
  .icon {
    color: ${theme.iconColor};
  }

  a:hover,
  a:focus {
    > .icon {
      color: ${theme.linkColorHover};
    }
  }

  /* FORM */
  .ui.form .field label {
    color: ${theme.mutedTextColor};
    font-size: 0.875em;
    font-weight: normal;
  }

  /* DROPDOWN */
  .ui.dropdown:not(.button) > .default.text,
  .ui.default.dropdown:not(.button) > .text {
    color: ${theme.mutedTextColor};
  }
  .ui.search.dropdown > .text {
    min-width: 3em;
  }

  i.icon.file.outline.text:before {
      content: "\\F15C";
  }

  /* BUTTONS */
  .ui.button {
    font-family: ${theme.buttonFont};
    font-size: 1em;
    font-weight: 500;
    padding: 1rem 5rem 1rem 5rem;

    &.compact {
      padding: 0.625rem 1.875rem 0.625rem 1.875rem;
    }

    &.circular {
      padding: 1em;
    }

    &.primary {
      background: ${theme.primaryButton.background};
      color: ${theme.primaryButton.color};
      border: 1px solid ${theme.primaryButton.border};

      &:hover,
      &:focus {
        background: ${theme.primaryButton.hover.background};
        color: ${theme.primaryButton.hover.color};
        border-color: ${theme.primaryButton.hover.border};
      }

      &:active {
        background: ${theme.primaryButton.active.background};
        color: ${theme.primaryButton.active.color};
        border-color: ${theme.primaryButton.active.border};
      }

      &:disabled {
        background: ${theme.primaryButton.disabled.background};
        color: ${theme.primaryButton.disabled.color};
        border-color: ${theme.primaryButton.disabled.border};
      }
    }

    &.secondary {
      background: ${theme.secondaryButton.background};
      color: ${theme.secondaryButton.color};
      border: 1px solid ${theme.primaryButton.border};

      &:hover,
      &:focus {
        background: ${theme.secondaryButton.hover.background};
        color: ${theme.secondaryButton.hover.color};
        border-color: ${theme.primaryButton.hover.border};
      }

      &:active {
        background: ${theme.secondaryButton.active.background};
        color: ${theme.secondaryButton.active.color};
        border-color: ${theme.primaryButton.active.border};
      }

      &:disabled {
        background: ${theme.secondaryButton.disabled.background};
        color: ${theme.secondaryButton.disabled.color};
        border-color: ${theme.primaryButton.disabled.border};
      }
    }
  }

  .ui.modal .actions > .button {
    padding: 1rem;
  }

  .ui.modal .header,
  .ui.steps .step .title{
    font-family: ${theme.headerFont}
  }

  .ui.modals.transition.visible.active{
    display: flex !important;
    div.ui.modal.transition.visible.active{
      margin: 0 !important;
    }
  }

  .\_pendo-badge\_ {
    z-index: 1090 !important;
  }

  /* ReactDayPicker */
  .DayPicker {
    .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
      background-color: ${theme.primaryColor};
      border-radius: 0;
    }
  }
  .DayPicker:not(.DayPicker--interactionDisabled) {
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
      background-color: ${theme.secondaryBackgroundColor};
      border-radius: 0;
    }
  }

  /* GOOGLE PICKER Z-INDEX */
  .picker-dialog {
    z-index: ${Layers.MODAL} !important;
  }
  .picker-dialog-bg {
    z-index: ${Layers.MODAL - 1} !important;
  }
`;
