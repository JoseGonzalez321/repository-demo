'use strict';

import TinyEmitter from 'tiny-emitter';

class RssFeedEmitter extends TinyEmitter {
  constructor() {
    super();
  }

  add() {
    return 'add';
  }

  remove() {
    return 'remove';
  }

  list() {
    return 'list';
  }

  destroy() {
    return 'destroy';
  }
}

export default RssFeedEmitter;
