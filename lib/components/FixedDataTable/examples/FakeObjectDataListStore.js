'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var faker = require('faker');

var FakeObjectDataListStore = (function () {
  function FakeObjectDataListStore( /* number */size) {
    _classCallCheck(this, FakeObjectDataListStore);

    this.size = size || 2000;
    this._cache = [];
  }

  _createClass(FakeObjectDataListStore, [{
    key: 'createFakeRowObjectData',
    value: function createFakeRowObjectData( /* number */index) /* object */{
      return {
        id: index,
        avartar: faker.image.avatar(),
        city: faker.address.city(),
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        street: faker.address.streetName(),
        zipCode: faker.address.zipCode(),
        date: faker.date.past(),
        bs: faker.company.bs(),
        catchPhrase: faker.company.catchPhrase(),
        companyName: faker.company.companyName(),
        words: faker.lorem.words(),
        sentence: faker.lorem.sentence()
      };
    }
  }, {
    key: 'getObjectAt',
    value: function getObjectAt( /* number */index) /* ?object */{
      if (index < 0 || index > this.size) {
        return undefined;
      }
      if (this._cache[index] === undefined) {
        this._cache[index] = this.createFakeRowObjectData(index);
      }
      return this._cache[index];
    }

    /**
    * Populates the entire cache with data.
    * Use with Caution! Behaves slowly for large sizes
    * ex. 100,000 rows
    */
  }, {
    key: 'getAll',
    value: function getAll() {
      if (this._cache.length < this.size) {
        for (var i = 0; i < this.size; i++) {
          this.getObjectAt(i);
        }
      }
      return this._cache.slice();
    }
  }, {
    key: 'getSize',
    value: function getSize() {
      return this.size;
    }
  }]);

  return FakeObjectDataListStore;
})();

module.exports = FakeObjectDataListStore;