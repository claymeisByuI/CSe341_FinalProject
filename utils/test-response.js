// module.exports = class TestResponse {
//   statusCode = 0;
//   status(code) {
//     this.statusCode = code;
//     return this;
//   }
//   data = {};
//   json(data) {
//     this.data = data;
//   }
// };

class TestResponse {
  constructor() {
    this.statusCode = 200;
    this.data = null;
    this.headers = {};
  }

  status(code) {
    this.statusCode = code;
    return this;
  }

  send(data) {
    this.data = data;
    return this;
  }

  json(data) {
    this.data = data;
    return this;
  }

  setHeader(name, value) {
    this.headers[name] = value;
  }
}

module.exports = TestResponse;
