class XHR {
  constructor() {
    let self = this;
  }

  fetch(url, params) {
    let self = this;
    let xhr = new XMLHttpRequest();

    params || (params = { method: 'GET' });

    // 发送请求
    xhr.open(params.method.toLowerCase(), url, true);
    xhr.withCredentials = true;

    // set Headers
    let header = params.headers || params.header;
    if (typeof header == 'object') {
      for (let key in header) {
        xhr.setRequestHeader(key.toLowerCase(), header[key]);
      }
    }

    // form-data开启上传
    if (params.body instanceof FormData) {
      // 重置上传头部Content-Type
      xhr.setRequestHeader('content-type', 'multipart/form-data; boundary');

      // 上传开始
      xhr.upload.onloadstart = self.xhrUploadStart;

      // 上传结束
      xhr.upload.onloadend = self.xhrUploadComplete;
    }

    // 发送数据
    params.body && xhr.send(params.body);
    // 解析数据
    xhr.json = function() {
      let that = this;
      return new Promise((resolve, reject) => {
        xhr.onloadend = function() {
          let json = that.responseText;
          typeof json == 'object' && resolve(json) || resolve(JSON.parse(json));
        };
      });
    };

    return Promise.resolve(xhr);
  }

  xhrUploadStart(e) {
    let self = this;
    self.startTime = +new Date;
  }

  xhrUploadComplete(e) {
    let self = this;
    self.finishTime = +new Date;
  }

  post(url, params) {
    let self = this;
    params.method = 'POST';
    return self.fetch.call(self, url, params);
  }

  get(url, params) {
    let self = this;
    params.method = 'GET';
    return self.fetch.call(self, url, params);
  }

  put(url, params) {
    let self = this;
    params.method = 'PUT';
    return self.fetch.call(self, url, params);
  }

  delete(url, params) {
    let self = this;
    params.method = 'DELETE';
    return self.fetch.call(self, url, params);
  }

}

let xhr = new XHR();

export default xhr;
