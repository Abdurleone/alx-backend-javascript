/* eslint-disable import/no-named-as-default-member */
/* eslint-disable jest/require-hook */
// eslint-disable-next-line import/no-named-as-default
import handleResponseFromAPI from './2-then';

const promise = Promise.resolve();
handleResponseFromAPI(promise);
