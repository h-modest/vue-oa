import _ from 'lodash';

const dict = {
  'name': '姓名',
};

let i18n = {};
i18n.translate = text => {
  if (_.has(dict, text)) {
    return dict[text];
  } else {
    return text;
  }
};

export const __ = i18n.translate;
