//Tue Aug 27 2024 02:52:38 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const bdy_0xbee179 = require("crypto-js"),
  bdy_0x6851f3 = require("got"),
  bdy_0xe00f46 = process.env.SIGN_URL ? process.env.SIGN_URL : "";
let bdy_0x2c42c4 = {};
bdy_0xe00f46 ? console.log("🈯当前使用指定sign：" + bdy_0xe00f46 + "\n") : console.log("♻️当前使用内置sign(推荐)，自定义变量SIGN_URL\n");
function bdy_0x444e48(_0x996737 = "") {
  return _0x996737;
}
function bdy_0x822e31(_0x4fe403) {
  let _0x32b0d6 = [];
  for (let _0x10d312 of _0x4fe403.split("")) {
    let _0x5b9954 = _0x10d312.charCodeAt();
    _0x32b0d6 = _0x32b0d6.concat([(_0x5b9954 & 128) >> 7, (_0x5b9954 & 64) >> 6, (_0x5b9954 & 32) >> 5, (_0x5b9954 & 16) >> 4, (_0x5b9954 & 8) >> 3, (_0x5b9954 & 4) >> 2, (_0x5b9954 & 2) >> 1, _0x5b9954 & 1]);
  }
  return _0x32b0d6;
}
function bdy_0x20ae4a(_0x55bc72) {
  let _0x1b1f6d = Array.from({
    length: parseInt(_0x55bc72.length / 8)
  }).map(_0x371bdb => 0);
  for (let _0x448983 in _0x1b1f6d) {
    _0x1b1f6d[_0x448983] = _0x55bc72[_0x448983 * 8] << 7 | _0x55bc72[_0x448983 * 8 + 1] << 6 | _0x55bc72[_0x448983 * 8 + 2] << 5 | _0x55bc72[_0x448983 * 8 + 3] << 4 | _0x55bc72[_0x448983 * 8 + 4] << 3 | _0x55bc72[_0x448983 * 8 + 5] << 2 | _0x55bc72[_0x448983 * 8 + 6] << 1 | _0x55bc72[_0x448983 * 8 + 7];
  }
  return bdy_0x444e48(_0x1b1f6d);
}
function bdy_0x9b6102(_0x18bde0) {
  let _0x14b598 = [55, 146, 68, 104, 165, 61, 204, 127, 187, 15, 217, 136, 238, 154, 233, 90],
    _0x234824 = "80306f4370b39fd5630ad0529f77adb6";
  const _0x2fba99 = {
    length: _0x18bde0.length
  };
  let _0x130bc6 = Array.from(_0x2fba99).map(_0x42957f => 0),
    _0x38a6e6,
    _0x2b45bd,
    _0x16852d,
    _0x38a964;
  for (i in _0x130bc6) {
    _0x38a6e6 = _0x18bde0[i].charCodeAt();
    _0x16852d = _0x14b598[i & 15];
    _0x38a964 = _0x234824[i & 7].charCodeAt();
    _0x38a6e6 = _0x16852d ^ _0x38a6e6;
    _0x38a6e6 = _0x38a6e6 ^ _0x38a964;
    _0x38a6e6 = _0x38a6e6 + _0x16852d;
    _0x16852d = _0x16852d ^ _0x38a6e6;
    _0x2b45bd = _0x234824[i & 7].charCodeAt();
    _0x16852d = _0x16852d ^ _0x2b45bd;
    _0x130bc6[i] = _0x16852d & 255;
  }
  return bdy_0x444e48(_0x130bc6);
}
function bdy_0x58044e(_0xc2a653) {
  let _0x326c5b = [[0, 0], [1, 4], [2, 61], [3, 15], [4, 56], [5, 40], [6, 6], [7, 59], [8, 62], [9, 58], [10, 17], [11, 2], [12, 12], [13, 8], [14, 32], [15, 60], [16, 13], [17, 45], [18, 34], [19, 14], [20, 36], [21, 21], [22, 22], [23, 39], [24, 23], [25, 25], [26, 26], [27, 20], [28, 1], [29, 33], [30, 46], [31, 55], [32, 35], [33, 24], [34, 57], [35, 19], [36, 53], [37, 37], [38, 38], [39, 5], [40, 30], [41, 41], [42, 42], [43, 18], [44, 47], [45, 27], [46, 9], [47, 44], [48, 51], [49, 7], [50, 49], [51, 63], [52, 28], [53, 43], [54, 54], [55, 52], [56, 31], [57, 10], [58, 29], [59, 11], [60, 3], [61, 16], [62, 50], [63, 48]],
    _0x41836c = bdy_0x822e31(_0xc2a653),
    _0x5e4e45 = Array.from({
      length: _0x41836c.length
    }).map(_0x194079 => 0);
  for (let _0x523950 in _0x5e4e45) {
    _0x5e4e45[_0x326c5b[_0x523950][1]] = _0x41836c[_0x326c5b[_0x523950][0]];
  }
  return bdy_0x20ae4a(_0x5e4e45);
}
switch (bdy_0xe00f46) {
  case "nb":
    const bdy_0x149689 = {
      nb: nb
    };
    _0xf1f6le = bdy_0x149689;
    break;
}
function bdy_0x43492c(_0x4b6a09) {
  let _0xc6463 = [[0, 6, 0, 1], [1, 4, 1, 0], [2, 5, 0, 1], [3, 0, 0, 1], [4, 2, 0, 1], [5, 3, 0, 1], [6, 1, 1, 0], [7, 7, 0, 1]],
    _0x4dc1d0 = bdy_0x822e31(_0x4b6a09),
    _0x130bfa = [0, 0, 0, 0, 0, 0, 0, 0];
  for (var _0x12572f in _0x130bfa) {
    _0x4dc1d0[_0x12572f] == 0 ? _0x130bfa[_0xc6463[_0x12572f][1]] = _0xc6463[_0x12572f][2] : _0x130bfa[_0xc6463[_0x12572f][1]] = _0xc6463[_0x12572f][3];
  }
  return bdy_0x20ae4a(_0x130bfa);
}
function bdy_0x4893e8(_0x19ac2b) {
  let _0x1a4624 = [];
  for (let _0x4d46a5 = 0; _0x4d46a5 < _0x19ac2b.length; _0x4d46a5 += 8) {
    let _0x34a1a1 = _0x19ac2b.slice(_0x4d46a5, _0x4d46a5 + 8);
    _0x34a1a1.length == 1 ? _0x1a4624 = _0x1a4624.concat(bdy_0x43492c(_0x34a1a1)) : _0x1a4624 = _0x1a4624.concat(bdy_0x58044e(_0x34a1a1));
  }
  return _0x1a4624;
}
function bdy_0x307c9b(_0x539a11, _0x43ad2f, _0x29442a) {
  let _0x3ccb60 = [0, 1, 2];
  _0x29442a == 1 && (_0x3ccb60 = [1, 2, 0]);
  _0x29442a == 2 && (_0x3ccb60 = [2, 0, 1]);
  let _0x44f9e3 = _0x3ccb60[_0x43ad2f];
  if (_0x44f9e3 == 0) {
    return bdy_0x4893e8(_0x539a11);
  }
  if (_0x44f9e3 == 2) {
    return bdy_0x9b6102(_0x539a11);
  }
}
function bdy_0x1a3f2a(_0x262d08) {
  let _0x4999e1 = "",
    _0x45d4e3 = [],
    _0x13455b = "";
  const _0x4f81e1 = "KLMNOPQRSTABCDEFGHIJUVWXYZabcdopqrstuvwxefghijklmnyz0123456789+/";
  for (let _0x3e471d = 0; _0x3e471d < _0x262d08.length; _0x3e471d++) {
    _0x4999e1 += ("00000000" + _0x262d08.charCodeAt(_0x3e471d).toString(2)).slice(-8);
  }
  for (let _0x5dfe22 = 0; _0x5dfe22 < _0x4999e1.length; _0x5dfe22 += 6) {
    _0x45d4e3.push("000000" + _0x4999e1.substr(_0x5dfe22, 6));
  }
  for (let _0xf94966 = 0; _0xf94966 < _0x45d4e3.length; _0xf94966++) {
    _0x13455b += _0x4f81e1[parseInt(_0x45d4e3[_0xf94966], 2)];
  }
  if (_0x13455b.length % 4 == 2) {
    _0x13455b += "==";
  } else {
    _0x13455b.length % 4 == 3 && (_0x13455b += "=");
  }
  return _0x13455b;
}
function bdy_0x4720ba(_0x2fb135, _0x6a6769) {
  return Math.floor(Math.random() * (_0x6a6769 - _0x2fb135 + 1)) + _0x2fb135;
}
function bdy_0x53efc3(_0x2b80db) {
  let _0x22a8ad = {
    hdid: "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
    ts: Date.now(),
    ridx: -1,
    cipher: {
      area: bdy_0x1a3f2a("0_0_0_0"),
      d_model: bdy_0x1a3f2a("iPhone"),
      wifiBssid: bdy_0x1a3f2a(_0x2b80db.substr(0, 8)),
      osVersion: "CJS=",
      d_brand: "WQvrb21f",
      screen: bdy_0x1a3f2a(bdy_0x4720ba(393, 450) + "_" + bdy_0x4720ba(800, 900)),
      uuid: bdy_0x1a3f2a(_0x2b80db),
      aid: bdy_0x1a3f2a(_0x2b80db),
      openudid: bdy_0x1a3f2a(_0x2b80db)
    },
    ciphertype: 5,
    version: "1.2.0",
    appname: "com.360buy.jdmobile"
  };
  return encodeURIComponent(JSON.stringify(_0x22a8ad));
}
function bdy_0x430917(_0x5e6f63 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx") {
  var _0x573ade = new Date().getTime();
  typeof performance !== "undefined" && typeof performance.now === "function" && (_0x573ade += performance.now());
  var _0x2ef928 = _0x5e6f63.replace(/[xy]/g, function (_0x33dc95) {
    var _0x4bcae6 = (_0x573ade + Math.random() * 16) % 16 | 0;
    _0x573ade = Math.floor(_0x573ade / 16);
    return (_0x33dc95 == "x" ? _0x4bcae6 : _0x4bcae6 & 3 | 8).toString(16);
  });
  return _0x2ef928;
}
async function bdy_0x519798(_0x5b87c3, _0x22e027, _0x3e0580, _0x56b39b) {
  if (bdy_0xe00f46 != "" && _0x56b39b == undefined) {
    const _0x4efa23 = {
      fn: _0x5b87c3,
      body: _0x22e027
    };
    const _0x3b2588 = {
      limit: 1,
      methods: ["GET", "POST"]
    };
    const _0x2c7681 = {
      beforeRetry: [(_0x237066, _0x2fbf8d) => {
        _0x2fbf8d;
      }]
    };
    const _0x1a9de5 = {
      request: 30000
    };
    const _0x15c03c = {
      json: _0x4efa23,
      retry: _0x3b2588,
      hooks: _0x2c7681,
      timeout: _0x1a9de5
    };
    let _0x34098d = await bdy_0x6851f3.post(bdy_0xe00f46, _0x15c03c).json().catch(_0x44aaf1 => {
      console.log(_0x44aaf1.message);
      console.log("指定sign获取失败,请检查！\n");
      return "";
    });
    if (_0x34098d?.["body"]) {
      return _0x34098d?.["body"];
    } else {
      if (_0x34098d?.["data"]?.["convertUrl"]) {
        return _0x34098d?.["data"]?.["convertUrl"];
      }
    }
  } else {
    let _0xb65c18 = "android",
      _0x573511 = _0x3e0580 || "11.0.2",
      _0x32a36a = [[0, 2], [1, 1], [2, 0]],
      _0xc7ba00,
      _0x628609;
    [_0xc7ba00, _0x628609] = _0x32a36a[Math.floor(Math.random() * _0x32a36a.length)];
    let _0x53a50a = "1" + _0xc7ba00 + _0x628609,
      _0x2ffd58 = new Date().getTime();
    _0x22e027 = typeof _0x22e027 == "string" ? _0x22e027 : JSON.stringify(_0x22e027);
    let _0x4088d5 = new Buffer.from(_0x22e027).toString("latin1"),
      _0x26039e = bdy_0x430917(),
      _0x189234 = bdy_0x53efc3(_0x26039e),
      _0x2284a3 = "functionId=" + _0x5b87c3 + "&body=" + _0x4088d5 + "&uuid=" + _0x26039e + "&client=" + _0xb65c18 + "&clientVersion=" + _0x573511 + "&st=" + _0x2ffd58 + "&sv=" + _0x53a50a,
      _0x4660dc = bdy_0x307c9b(_0x2284a3, _0xc7ba00, _0x628609),
      _0x406208 = new Buffer.from(_0x4660dc).toString("base64"),
      _0x3d5158 = bdy_0xbee179.MD5(_0x406208).toString();
    return "clientVersion=" + _0x573511 + "&client=" + _0xb65c18 + "&networkType=wifi&ef=1&ep=" + _0x189234 + "&st=" + _0x2ffd58 + "&sign=" + _0x3d5158 + "&sv=" + _0x53a50a + "&body=" + encodeURIComponent(_0x22e027);
  }
}
async function bdy_0xcf5cbf(_0x5535f3, _0x18d170, _0x2e51fe) {
  let _0x478d7e = "",
    _0x2d759f = {
      fn: _0x5535f3,
      body: _0x18d170
    };
  _0x2e51fe && (_0x2d759f.ver = _0x2e51fe);
  const _0x46398c = {
    limit: 1,
    methods: ["GET", "POST"]
  };
  const _0x252190 = {
    beforeRetry: [(_0x5294c0, _0x574c64) => {
      _0x574c64;
    }]
  };
  const _0x979093 = {
    request: 30000
  };
  const _0x4dc575 = {
    json: _0x2d759f,
    retry: _0x46398c,
    hooks: _0x252190,
    timeout: _0x979093
  };
  _0x478d7e = await bdy_0x6851f3.post("https://6dy.jdpro.site/sign", _0x4dc575).json().catch(async _0x56de58 => {
    console.log("获取失败\n");
  });
  return _0x478d7e.body;
}
async function bdy_0x322505(_0x327c76, _0x32768d) {
  const _0x6185d6 = {
    fn: _0x327c76,
    body: _0x32768d
  };
  const _0x4c61 = {
    limit: 1,
    methods: ["GET", "POST"]
  };
  const _0x1b9551 = {
    beforeRetry: [(_0x4bcb70, _0x4d0a1a) => {
      _0x4d0a1a;
    }]
  };
  const _0x309588 = {
    request: 30000
  };
  const _0x109b00 = {
    json: _0x6185d6,
    retry: _0x4c61,
    hooks: _0x1b9551,
    timeout: _0x309588
  };
  let _0x660a9a = await bdy_0x6851f3.post("http://api.nolanstore.cc/sign", _0x109b00).json().catch(_0x2a7e6e => {
    console.log(_0x2a7e6e.message);
    console.log("sign获取失败,请检查网络！\n");
  });
  return _0x660a9a.body;
}
function bdy_0x512ccc(_0x227e00) {
  let {
      fn: _0x16b7a0,
      body: _0x1a364a,
      ver: _0x28e0ae,
      user: _0x7209a5
    } = _0x227e00,
    _0x60470b = "android",
    _0x2c0bf4 = _0x28e0ae || "11.0.2",
    _0x5197ad = [[0, 2], [1, 1], [2, 0]],
    _0x9de175,
    _0x4bc18d;
  [_0x9de175, _0x4bc18d] = _0x5197ad[Math.floor(Math.random() * _0x5197ad.length)];
  let _0x4f794c = "1" + _0x9de175 + _0x4bc18d,
    _0x3f65c0 = new Date().getTime(),
    _0x4f6db4 = typeof _0x1a364a == "string" ? _0x1a364a : JSON.stringify(_0x1a364a);
  if (bdy_0x2c42c4.user !== _0x7209a5) {
    bdy_0x2c42c4.uid = bdy_0x430917();
    bdy_0x2c42c4.ep = bdy_0x53efc3(bdy_0x2c42c4.uid);
    bdy_0x2c42c4.user = _0x7209a5;
  }
  let _0xf576e3 = new Buffer.from(_0x4f6db4).toString("latin1"),
    _0x1cba38 = "functionId=" + _0x16b7a0 + "&body=" + _0xf576e3 + "&uuid=" + bdy_0x2c42c4.uid + "&client=" + _0x60470b + "&clientVersion=" + _0x2c0bf4 + "&st=" + _0x3f65c0 + "&sv=" + _0x4f794c,
    _0x3de3ce = bdy_0x307c9b(_0x1cba38, _0x9de175, _0x4bc18d),
    _0x1a93ab = new Buffer.from(_0x3de3ce).toString("base64"),
    _0x25182d = bdy_0xbee179.MD5(_0x1a93ab).toString();
  return "clientVersion=" + _0x2c0bf4 + "&client=" + _0x60470b + "&networkType=wifi&ef=1&ep=" + bdy_0x2c42c4.ep + "&st=" + _0x3f65c0 + "&sign=" + _0x25182d + "&sv=" + _0x4f794c + "&body=" + encodeURIComponent(_0x4f6db4);
}
const bdy_0x210dc6 = {
  getbody: bdy_0x519798,
  getbody2: bdy_0x322505,
  getbody3: bdy_0xcf5cbf,
  getbody4: bdy_0x512ccc
};
module.exports = bdy_0x210dc6;