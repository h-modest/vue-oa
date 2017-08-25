import _ from 'lodash';
import moment from 'moment';

export function timestamp(t) {
  if (t) {
    return +new Date(t);
  } else {
    return +new Date();
  }
}

export function log(type, ...messages) {
  let t = moment();
  let time = t.format('HH:mm:ss.SSS');
  if (_.isUndefined(type)) {
    type = 'common';
  }
  let logger;
  if (/err/.test(type)) {
    logger = 'error';
  } else if (/info/.test(type)) {
    logger = 'info';
  } else {
    logger = 'log';
  }
  let params = [
    '%c[' + time + '] %c' + type + '%c',
    'color: blue',
    'color: #999',
    'color: #000',
  ];
  if (process.env.NODE_ENV != 'production') {
    console[logger].apply(console, params.concat(messages));
  }
}

log.error = (message) => {
  log('error', message);
};

log.info = (message) => {
  log('info', message);
};

log.log = (message) => {
  log('log', message);
};

/**
 * Filter Array
 *
 * @param list array
 * @param filter keyword
 * @param filter_key array_keyword_name
 *
 *
 */
export function filterList(list, filter, filter_key) {
  return _.filter(list, item => {
    if (!filter) {
      return true;
    }
    for (let key in item) {
      if (filter_key.indexOf(key) >= 0){
        let value = item[key];
        if (typeof value === 'string') {
          if (value.indexOf(filter) >= 0) {
            return true;
          }
        }
      };
    }
    return false;
  });
}
