(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
  new MutationObserver((s) => {
    for (const r of s)
      if (r.type === "childList")
        for (const a of r.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(s) {
    const r = {};
    return (
      s.integrity && (r.integrity = s.integrity),
      s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (r.credentials = "omit")
          : (r.credentials = "same-origin"),
      r
    );
  }
  function n(s) {
    if (s.ep) return;
    s.ep = !0;
    const r = t(s);
    fetch(s.href, r);
  }
})();
const ra = "181",
  pi = { ROTATE: 0, DOLLY: 1, PAN: 2 },
  di = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  yl = 0,
  wa = 1,
  El = 2,
  No = 1,
  Tl = 2,
  cn = 3,
  Rn = 0,
  Pt = 1,
  hn = 2,
  fn = 0,
  mi = 1,
  Ca = 2,
  Ra = 3,
  Pa = 4,
  Al = 5,
  kn = 100,
  wl = 101,
  Cl = 102,
  Rl = 103,
  Pl = 104,
  Dl = 200,
  Ll = 201,
  Ul = 202,
  Il = 203,
  mr = 204,
  xr = 205,
  Nl = 206,
  Fl = 207,
  Ol = 208,
  Bl = 209,
  zl = 210,
  kl = 211,
  Vl = 212,
  Gl = 213,
  Hl = 214,
  _r = 0,
  gr = 1,
  vr = 2,
  _i = 3,
  Mr = 4,
  Sr = 5,
  br = 6,
  yr = 7,
  Fo = 0,
  Wl = 1,
  Xl = 2,
  Cn = 0,
  Yl = 1,
  Zl = 2,
  ql = 3,
  Kl = 4,
  jl = 5,
  $l = 6,
  Jl = 7,
  Oo = 300,
  gi = 301,
  vi = 302,
  Er = 303,
  Tr = 304,
  Ps = 306,
  Ar = 1e3,
  un = 1001,
  wr = 1002,
  Ft = 1003,
  Ql = 1004,
  Yi = 1005,
  Gt = 1006,
  Bs = 1007,
  Gn = 1008,
  mn = 1009,
  Bo = 1010,
  zo = 1011,
  Ni = 1012,
  aa = 1013,
  Wn = 1014,
  dn = 1015,
  Ti = 1016,
  oa = 1017,
  la = 1018,
  Fi = 1020,
  ko = 35902,
  Vo = 35899,
  Go = 1021,
  Ho = 1022,
  qt = 1023,
  Oi = 1026,
  Bi = 1027,
  Wo = 1028,
  ca = 1029,
  ha = 1030,
  ua = 1031,
  da = 1033,
  ps = 33776,
  ms = 33777,
  xs = 33778,
  _s = 33779,
  Cr = 35840,
  Rr = 35841,
  Pr = 35842,
  Dr = 35843,
  Lr = 36196,
  Ur = 37492,
  Ir = 37496,
  Nr = 37808,
  Fr = 37809,
  Or = 37810,
  Br = 37811,
  zr = 37812,
  kr = 37813,
  Vr = 37814,
  Gr = 37815,
  Hr = 37816,
  Wr = 37817,
  Xr = 37818,
  Yr = 37819,
  Zr = 37820,
  qr = 37821,
  Kr = 36492,
  jr = 36494,
  $r = 36495,
  Jr = 36283,
  Qr = 36284,
  ea = 36285,
  ta = 36286,
  ec = 3200,
  tc = 3201,
  nc = 0,
  ic = 1,
  An = "",
  kt = "srgb",
  Mi = "srgb-linear",
  Ms = "linear",
  qe = "srgb",
  $n = 7680,
  Da = 519,
  sc = 512,
  rc = 513,
  ac = 514,
  Xo = 515,
  oc = 516,
  lc = 517,
  cc = 518,
  hc = 519,
  La = 35044,
  Ua = "300 es",
  Qt = 2e3,
  Ss = 2001;
function Yo(i) {
  for (let e = i.length - 1; e >= 0; --e) if (i[e] >= 65535) return !0;
  return !1;
}
function bs(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function uc() {
  const i = bs("canvas");
  return ((i.style.display = "block"), i);
}
const Ia = {};
function Na(...i) {
  const e = "THREE." + i.shift();
  console.log(e, ...i);
}
function De(...i) {
  const e = "THREE." + i.shift();
  console.warn(e, ...i);
}
function ht(...i) {
  const e = "THREE." + i.shift();
  console.error(e, ...i);
}
function zi(...i) {
  const e = i.join(" ");
  e in Ia || ((Ia[e] = !0), De(...i));
}
function dc(i, e, t) {
  return new Promise(function (n, s) {
    function r() {
      switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          s();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(r, t);
          break;
        default:
          n();
      }
    }
    setTimeout(r, t);
  });
}
class Kn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    (n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t));
  }
  hasEventListener(e, t) {
    const n = this._listeners;
    return n === void 0 ? !1 : n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    const n = this._listeners;
    if (n === void 0) return;
    const s = n[e];
    if (s !== void 0) {
      const r = s.indexOf(t);
      r !== -1 && s.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const n = t[e.type];
    if (n !== void 0) {
      e.target = this;
      const s = n.slice(0);
      for (let r = 0, a = s.length; r < a; r++) s[r].call(this, e);
      e.target = null;
    }
  }
}
const vt = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff",
  ],
  gs = Math.PI / 180,
  na = 180 / Math.PI;
function ki() {
  const i = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    vt[i & 255] +
    vt[(i >> 8) & 255] +
    vt[(i >> 16) & 255] +
    vt[(i >> 24) & 255] +
    "-" +
    vt[e & 255] +
    vt[(e >> 8) & 255] +
    "-" +
    vt[((e >> 16) & 15) | 64] +
    vt[(e >> 24) & 255] +
    "-" +
    vt[(t & 63) | 128] +
    vt[(t >> 8) & 255] +
    "-" +
    vt[(t >> 16) & 255] +
    vt[(t >> 24) & 255] +
    vt[n & 255] +
    vt[(n >> 8) & 255] +
    vt[(n >> 16) & 255] +
    vt[(n >> 24) & 255]
  ).toLowerCase();
}
function Oe(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function fc(i, e) {
  return ((i % e) + e) % e;
}
function zs(i, e, t) {
  return (1 - t) * i + t * e;
}
function Ci(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function wt(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const pc = { DEG2RAD: gs };
class Ie {
  constructor(e = 0, t = 0) {
    ((Ie.prototype.isVector2 = !0), (this.x = e), (this.y = t));
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return ((this.x = e), (this.y = t), this);
  }
  setScalar(e) {
    return ((this.x = e), (this.y = e), this);
  }
  setX(e) {
    return ((this.x = e), this);
  }
  setY(e) {
    return ((this.y = e), this);
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return ((this.x = e.x), (this.y = e.y), this);
  }
  add(e) {
    return ((this.x += e.x), (this.y += e.y), this);
  }
  addScalar(e) {
    return ((this.x += e), (this.y += e), this);
  }
  addVectors(e, t) {
    return ((this.x = e.x + t.x), (this.y = e.y + t.y), this);
  }
  addScaledVector(e, t) {
    return ((this.x += e.x * t), (this.y += e.y * t), this);
  }
  sub(e) {
    return ((this.x -= e.x), (this.y -= e.y), this);
  }
  subScalar(e) {
    return ((this.x -= e), (this.y -= e), this);
  }
  subVectors(e, t) {
    return ((this.x = e.x - t.x), (this.y = e.y - t.y), this);
  }
  multiply(e) {
    return ((this.x *= e.x), (this.y *= e.y), this);
  }
  multiplyScalar(e) {
    return ((this.x *= e), (this.y *= e), this);
  }
  divide(e) {
    return ((this.x /= e.x), (this.y /= e.y), this);
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[3] * n + s[6]),
      (this.y = s[1] * t + s[4] * n + s[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Oe(this.x, e.x, t.x)),
      (this.y = Oe(this.y, e.y, t.y)),
      this
    );
  }
  clampScalar(e, t) {
    return ((this.x = Oe(this.x, e, t)), (this.y = Oe(this.y, e, t)), this);
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Oe(n, e, t));
  }
  floor() {
    return ((this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this);
  }
  ceil() {
    return ((this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this);
  }
  round() {
    return ((this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this);
  }
  roundToZero() {
    return ((this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this);
  }
  negate() {
    return ((this.x = -this.x), (this.y = -this.y), this);
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Oe(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return ((this.x = e[t]), (this.y = e[t + 1]), this);
  }
  toArray(e = [], t = 0) {
    return ((e[t] = this.x), (e[t + 1] = this.y), e);
  }
  fromBufferAttribute(e, t) {
    return ((this.x = e.getX(t)), (this.y = e.getY(t)), this);
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      s = Math.sin(t),
      r = this.x - e.x,
      a = this.y - e.y;
    return (
      (this.x = r * n - a * s + e.x),
      (this.y = r * s + a * n + e.y),
      this
    );
  }
  random() {
    return ((this.x = Math.random()), (this.y = Math.random()), this);
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y);
  }
}
class Xn {
  constructor(e = 0, t = 0, n = 0, s = 1) {
    ((this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = s));
  }
  static slerpFlat(e, t, n, s, r, a, o) {
    let c = n[s + 0],
      l = n[s + 1],
      u = n[s + 2],
      d = n[s + 3],
      f = r[a + 0],
      m = r[a + 1],
      g = r[a + 2],
      M = r[a + 3];
    if (o <= 0) {
      ((e[t + 0] = c), (e[t + 1] = l), (e[t + 2] = u), (e[t + 3] = d));
      return;
    }
    if (o >= 1) {
      ((e[t + 0] = f), (e[t + 1] = m), (e[t + 2] = g), (e[t + 3] = M));
      return;
    }
    if (d !== M || c !== f || l !== m || u !== g) {
      let p = c * f + l * m + u * g + d * M;
      p < 0 && ((f = -f), (m = -m), (g = -g), (M = -M), (p = -p));
      let h = 1 - o;
      if (p < 0.9995) {
        const T = Math.acos(p),
          y = Math.sin(T);
        ((h = Math.sin(h * T) / y),
          (o = Math.sin(o * T) / y),
          (c = c * h + f * o),
          (l = l * h + m * o),
          (u = u * h + g * o),
          (d = d * h + M * o));
      } else {
        ((c = c * h + f * o),
          (l = l * h + m * o),
          (u = u * h + g * o),
          (d = d * h + M * o));
        const T = 1 / Math.sqrt(c * c + l * l + u * u + d * d);
        ((c *= T), (l *= T), (u *= T), (d *= T));
      }
    }
    ((e[t] = c), (e[t + 1] = l), (e[t + 2] = u), (e[t + 3] = d));
  }
  static multiplyQuaternionsFlat(e, t, n, s, r, a) {
    const o = n[s],
      c = n[s + 1],
      l = n[s + 2],
      u = n[s + 3],
      d = r[a],
      f = r[a + 1],
      m = r[a + 2],
      g = r[a + 3];
    return (
      (e[t] = o * g + u * d + c * m - l * f),
      (e[t + 1] = c * g + u * f + l * d - o * m),
      (e[t + 2] = l * g + u * m + o * f - c * d),
      (e[t + 3] = u * g - o * d - c * f - l * m),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    ((this._x = e), this._onChangeCallback());
  }
  get y() {
    return this._y;
  }
  set y(e) {
    ((this._y = e), this._onChangeCallback());
  }
  get z() {
    return this._z;
  }
  set z(e) {
    ((this._z = e), this._onChangeCallback());
  }
  get w() {
    return this._w;
  }
  set w(e) {
    ((this._w = e), this._onChangeCallback());
  }
  set(e, t, n, s) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = s),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t = !0) {
    const n = e._x,
      s = e._y,
      r = e._z,
      a = e._order,
      o = Math.cos,
      c = Math.sin,
      l = o(n / 2),
      u = o(s / 2),
      d = o(r / 2),
      f = c(n / 2),
      m = c(s / 2),
      g = c(r / 2);
    switch (a) {
      case "XYZ":
        ((this._x = f * u * d + l * m * g),
          (this._y = l * m * d - f * u * g),
          (this._z = l * u * g + f * m * d),
          (this._w = l * u * d - f * m * g));
        break;
      case "YXZ":
        ((this._x = f * u * d + l * m * g),
          (this._y = l * m * d - f * u * g),
          (this._z = l * u * g - f * m * d),
          (this._w = l * u * d + f * m * g));
        break;
      case "ZXY":
        ((this._x = f * u * d - l * m * g),
          (this._y = l * m * d + f * u * g),
          (this._z = l * u * g + f * m * d),
          (this._w = l * u * d - f * m * g));
        break;
      case "ZYX":
        ((this._x = f * u * d - l * m * g),
          (this._y = l * m * d + f * u * g),
          (this._z = l * u * g - f * m * d),
          (this._w = l * u * d + f * m * g));
        break;
      case "YZX":
        ((this._x = f * u * d + l * m * g),
          (this._y = l * m * d + f * u * g),
          (this._z = l * u * g - f * m * d),
          (this._w = l * u * d - f * m * g));
        break;
      case "XZY":
        ((this._x = f * u * d - l * m * g),
          (this._y = l * m * d - f * u * g),
          (this._z = l * u * g + f * m * d),
          (this._w = l * u * d + f * m * g));
        break;
      default:
        De("Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return (t === !0 && this._onChangeCallback(), this);
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      s = Math.sin(n);
    return (
      (this._x = e.x * s),
      (this._y = e.y * s),
      (this._z = e.z * s),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      s = t[4],
      r = t[8],
      a = t[1],
      o = t[5],
      c = t[9],
      l = t[2],
      u = t[6],
      d = t[10],
      f = n + o + d;
    if (f > 0) {
      const m = 0.5 / Math.sqrt(f + 1);
      ((this._w = 0.25 / m),
        (this._x = (u - c) * m),
        (this._y = (r - l) * m),
        (this._z = (a - s) * m));
    } else if (n > o && n > d) {
      const m = 2 * Math.sqrt(1 + n - o - d);
      ((this._w = (u - c) / m),
        (this._x = 0.25 * m),
        (this._y = (s + a) / m),
        (this._z = (r + l) / m));
    } else if (o > d) {
      const m = 2 * Math.sqrt(1 + o - n - d);
      ((this._w = (r - l) / m),
        (this._x = (s + a) / m),
        (this._y = 0.25 * m),
        (this._z = (c + u) / m));
    } else {
      const m = 2 * Math.sqrt(1 + d - n - o);
      ((this._w = (a - s) / m),
        (this._x = (r + l) / m),
        (this._y = (c + u) / m),
        (this._z = 0.25 * m));
    }
    return (this._onChangeCallback(), this);
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < 1e-8
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Oe(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const s = Math.min(1, t / n);
    return (this.slerp(e, s), this);
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w,
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      s = e._y,
      r = e._z,
      a = e._w,
      o = t._x,
      c = t._y,
      l = t._z,
      u = t._w;
    return (
      (this._x = n * u + a * o + s * l - r * c),
      (this._y = s * u + a * c + r * o - n * l),
      (this._z = r * u + a * l + n * c - s * o),
      (this._w = a * u - n * o - s * c - r * l),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t <= 0) return this;
    if (t >= 1) return this.copy(e);
    let n = e._x,
      s = e._y,
      r = e._z,
      a = e._w,
      o = this.dot(e);
    o < 0 && ((n = -n), (s = -s), (r = -r), (a = -a), (o = -o));
    let c = 1 - t;
    if (o < 0.9995) {
      const l = Math.acos(o),
        u = Math.sin(l);
      ((c = Math.sin(c * l) / u),
        (t = Math.sin(t * l) / u),
        (this._x = this._x * c + n * t),
        (this._y = this._y * c + s * t),
        (this._z = this._z * c + r * t),
        (this._w = this._w * c + a * t),
        this._onChangeCallback());
    } else
      ((this._x = this._x * c + n * t),
        (this._y = this._y * c + s * t),
        (this._z = this._z * c + r * t),
        (this._w = this._w * c + a * t),
        this.normalize());
    return this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(),
      t = 2 * Math.PI * Math.random(),
      n = Math.random(),
      s = Math.sqrt(1 - n),
      r = Math.sqrt(n);
    return this.set(
      s * Math.sin(e),
      s * Math.cos(e),
      r * Math.sin(t),
      r * Math.cos(t),
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this._onChangeCallback(),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return ((this._onChangeCallback = e), this);
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    (yield this._x, yield this._y, yield this._z, yield this._w);
  }
}
class F {
  constructor(e = 0, t = 0, n = 0) {
    ((F.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n));
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return ((this.x = e), (this.y = e), (this.z = e), this);
  }
  setX(e) {
    return ((this.x = e), this);
  }
  setY(e) {
    return ((this.y = e), this);
  }
  setZ(e) {
    return ((this.z = e), this);
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return ((this.x = e.x), (this.y = e.y), (this.z = e.z), this);
  }
  add(e) {
    return ((this.x += e.x), (this.y += e.y), (this.z += e.z), this);
  }
  addScalar(e) {
    return ((this.x += e), (this.y += e), (this.z += e), this);
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      this
    );
  }
  sub(e) {
    return ((this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this);
  }
  subScalar(e) {
    return ((this.x -= e), (this.y -= e), (this.z -= e), this);
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      this
    );
  }
  multiply(e) {
    return ((this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this);
  }
  multiplyScalar(e) {
    return ((this.x *= e), (this.y *= e), (this.z *= e), this);
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x),
      (this.y = e.y * t.y),
      (this.z = e.z * t.z),
      this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(Fa.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Fa.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      s = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[3] * n + r[6] * s),
      (this.y = r[1] * t + r[4] * n + r[7] * s),
      (this.z = r[2] * t + r[5] * n + r[8] * s),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      s = this.z,
      r = e.elements,
      a = 1 / (r[3] * t + r[7] * n + r[11] * s + r[15]);
    return (
      (this.x = (r[0] * t + r[4] * n + r[8] * s + r[12]) * a),
      (this.y = (r[1] * t + r[5] * n + r[9] * s + r[13]) * a),
      (this.z = (r[2] * t + r[6] * n + r[10] * s + r[14]) * a),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      s = this.z,
      r = e.x,
      a = e.y,
      o = e.z,
      c = e.w,
      l = 2 * (a * s - o * n),
      u = 2 * (o * t - r * s),
      d = 2 * (r * n - a * t);
    return (
      (this.x = t + c * l + a * d - o * u),
      (this.y = n + c * u + o * l - r * d),
      (this.z = s + c * d + r * u - a * l),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix,
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld,
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      s = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[4] * n + r[8] * s),
      (this.y = r[1] * t + r[5] * n + r[9] * s),
      (this.z = r[2] * t + r[6] * n + r[10] * s),
      this.normalize()
    );
  }
  divide(e) {
    return ((this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this);
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Oe(this.x, e.x, t.x)),
      (this.y = Oe(this.y, e.y, t.y)),
      (this.z = Oe(this.z, e.z, t.z)),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Oe(this.x, e, t)),
      (this.y = Oe(this.y, e, t)),
      (this.z = Oe(this.z, e, t)),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Oe(n, e, t));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return ((this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this);
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      s = e.y,
      r = e.z,
      a = t.x,
      o = t.y,
      c = t.z;
    return (
      (this.x = s * c - r * o),
      (this.y = r * a - n * c),
      (this.z = n * o - s * a),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return (ks.copy(this).projectOnVector(e), this.sub(ks));
  }
  reflect(e) {
    return this.sub(ks.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Oe(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      s = this.z - e.z;
    return t * t + n * n + s * s;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const s = Math.sin(t) * e;
    return (
      (this.x = s * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = s * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)),
      (this.y = n),
      (this.z = e * Math.cos(t)),
      this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return ((this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this);
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      s = this.setFromMatrixColumn(e, 2).length();
    return ((this.x = t), (this.y = n), (this.z = s), this);
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return ((this.x = e._x), (this.y = e._y), (this.z = e._z), this);
  }
  setFromColor(e) {
    return ((this.x = e.r), (this.y = e.g), (this.z = e.b), this);
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return ((this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this);
  }
  toArray(e = [], t = 0) {
    return ((e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e);
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2,
      t = Math.random() * 2 - 1,
      n = Math.sqrt(1 - t * t);
    return (
      (this.x = n * Math.cos(e)),
      (this.y = t),
      (this.z = n * Math.sin(e)),
      this
    );
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y, yield this.z);
  }
}
const ks = new F(),
  Fa = new Xn();
class Ue {
  constructor(e, t, n, s, r, a, o, c, l) {
    ((Ue.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, s, r, a, o, c, l));
  }
  set(e, t, n, s, r, a, o, c, l) {
    const u = this.elements;
    return (
      (u[0] = e),
      (u[1] = s),
      (u[2] = o),
      (u[3] = t),
      (u[4] = r),
      (u[5] = c),
      (u[6] = n),
      (u[7] = a),
      (u[8] = l),
      this
    );
  }
  identity() {
    return (this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      s = t.elements,
      r = this.elements,
      a = n[0],
      o = n[3],
      c = n[6],
      l = n[1],
      u = n[4],
      d = n[7],
      f = n[2],
      m = n[5],
      g = n[8],
      M = s[0],
      p = s[3],
      h = s[6],
      T = s[1],
      y = s[4],
      C = s[7],
      D = s[2],
      E = s[5],
      P = s[8];
    return (
      (r[0] = a * M + o * T + c * D),
      (r[3] = a * p + o * y + c * E),
      (r[6] = a * h + o * C + c * P),
      (r[1] = l * M + u * T + d * D),
      (r[4] = l * p + u * y + d * E),
      (r[7] = l * h + u * C + d * P),
      (r[2] = f * M + m * T + g * D),
      (r[5] = f * p + m * y + g * E),
      (r[8] = f * h + m * C + g * P),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      s = e[2],
      r = e[3],
      a = e[4],
      o = e[5],
      c = e[6],
      l = e[7],
      u = e[8];
    return (
      t * a * u - t * o * l - n * r * u + n * o * c + s * r * l - s * a * c
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      s = e[2],
      r = e[3],
      a = e[4],
      o = e[5],
      c = e[6],
      l = e[7],
      u = e[8],
      d = u * a - o * l,
      f = o * c - u * r,
      m = l * r - a * c,
      g = t * d + n * f + s * m;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const M = 1 / g;
    return (
      (e[0] = d * M),
      (e[1] = (s * l - u * n) * M),
      (e[2] = (o * n - s * a) * M),
      (e[3] = f * M),
      (e[4] = (u * t - s * c) * M),
      (e[5] = (s * r - o * t) * M),
      (e[6] = m * M),
      (e[7] = (n * c - l * t) * M),
      (e[8] = (a * t - n * r) * M),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, s, r, a, o) {
    const c = Math.cos(r),
      l = Math.sin(r);
    return (
      this.set(
        n * c,
        n * l,
        -n * (c * a + l * o) + a + e,
        -s * l,
        s * c,
        -s * (-l * a + c * o) + o + t,
        0,
        0,
        1,
      ),
      this
    );
  }
  scale(e, t) {
    return (this.premultiply(Vs.makeScale(e, t)), this);
  }
  rotate(e) {
    return (this.premultiply(Vs.makeRotation(-e)), this);
  }
  translate(e, t) {
    return (this.premultiply(Vs.makeTranslation(e, t)), this);
  }
  makeTranslation(e, t) {
    return (
      e.isVector2
        ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1)
        : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
      this
    );
  }
  makeRotation(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return (this.set(t, -n, 0, n, t, 0, 0, 0, 1), this);
  }
  makeScale(e, t) {
    return (this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this);
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let s = 0; s < 9; s++) if (t[s] !== n[s]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Vs = new Ue(),
  Oa = new Ue().set(
    0.4123908,
    0.3575843,
    0.1804808,
    0.212639,
    0.7151687,
    0.0721923,
    0.0193308,
    0.1191948,
    0.9505322,
  ),
  Ba = new Ue().set(
    3.2409699,
    -1.5373832,
    -0.4986108,
    -0.9692436,
    1.8759675,
    0.0415551,
    0.0556301,
    -0.203977,
    1.0569715,
  );
function mc() {
  const i = {
      enabled: !0,
      workingColorSpace: Mi,
      spaces: {},
      convert: function (s, r, a) {
        return (
          this.enabled === !1 ||
            r === a ||
            !r ||
            !a ||
            (this.spaces[r].transfer === qe &&
              ((s.r = pn(s.r)), (s.g = pn(s.g)), (s.b = pn(s.b))),
            this.spaces[r].primaries !== this.spaces[a].primaries &&
              (s.applyMatrix3(this.spaces[r].toXYZ),
              s.applyMatrix3(this.spaces[a].fromXYZ)),
            this.spaces[a].transfer === qe &&
              ((s.r = xi(s.r)), (s.g = xi(s.g)), (s.b = xi(s.b)))),
          s
        );
      },
      workingToColorSpace: function (s, r) {
        return this.convert(s, this.workingColorSpace, r);
      },
      colorSpaceToWorking: function (s, r) {
        return this.convert(s, r, this.workingColorSpace);
      },
      getPrimaries: function (s) {
        return this.spaces[s].primaries;
      },
      getTransfer: function (s) {
        return s === An ? Ms : this.spaces[s].transfer;
      },
      getToneMappingMode: function (s) {
        return (
          this.spaces[s].outputColorSpaceConfig.toneMappingMode || "standard"
        );
      },
      getLuminanceCoefficients: function (s, r = this.workingColorSpace) {
        return s.fromArray(this.spaces[r].luminanceCoefficients);
      },
      define: function (s) {
        Object.assign(this.spaces, s);
      },
      _getMatrix: function (s, r, a) {
        return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ);
      },
      _getDrawingBufferColorSpace: function (s) {
        return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace;
      },
      _getUnpackColorSpace: function (s = this.workingColorSpace) {
        return this.spaces[s].workingColorSpaceConfig.unpackColorSpace;
      },
      fromWorkingColorSpace: function (s, r) {
        return (
          zi(
            "ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().",
          ),
          i.workingToColorSpace(s, r)
        );
      },
      toWorkingColorSpace: function (s, r) {
        return (
          zi(
            "ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().",
          ),
          i.colorSpaceToWorking(s, r)
        );
      },
    },
    e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06],
    t = [0.2126, 0.7152, 0.0722],
    n = [0.3127, 0.329];
  return (
    i.define({
      [Mi]: {
        primaries: e,
        whitePoint: n,
        transfer: Ms,
        toXYZ: Oa,
        fromXYZ: Ba,
        luminanceCoefficients: t,
        workingColorSpaceConfig: { unpackColorSpace: kt },
        outputColorSpaceConfig: { drawingBufferColorSpace: kt },
      },
      [kt]: {
        primaries: e,
        whitePoint: n,
        transfer: qe,
        toXYZ: Oa,
        fromXYZ: Ba,
        luminanceCoefficients: t,
        outputColorSpaceConfig: { drawingBufferColorSpace: kt },
      },
    }),
    i
  );
}
const We = mc();
function pn(i) {
  return i < 0.04045
    ? i * 0.0773993808
    : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function xi(i) {
  return i < 0.0031308 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Jn;
class xc {
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let n;
    if (e instanceof HTMLCanvasElement) n = e;
    else {
      (Jn === void 0 && (Jn = bs("canvas")),
        (Jn.width = e.width),
        (Jn.height = e.height));
      const s = Jn.getContext("2d");
      (e instanceof ImageData
        ? s.putImageData(e, 0, 0)
        : s.drawImage(e, 0, 0, e.width, e.height),
        (n = Jn));
    }
    return n.toDataURL(t);
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = bs("canvas");
      ((t.width = e.width), (t.height = e.height));
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const s = n.getImageData(0, 0, e.width, e.height),
        r = s.data;
      for (let a = 0; a < r.length; a++) r[a] = pn(r[a] / 255) * 255;
      return (n.putImageData(s, 0, 0), t);
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(pn(t[n] / 255) * 255))
          : (t[n] = pn(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        De(
          "ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.",
        ),
        e
      );
  }
}
let _c = 0;
class fa {
  constructor(e = null) {
    ((this.isSource = !0),
      Object.defineProperty(this, "id", { value: _c++ }),
      (this.uuid = ki()),
      (this.data = e),
      (this.dataReady = !0),
      (this.version = 0));
  }
  getSize(e) {
    const t = this.data;
    return (
      typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement
        ? e.set(t.videoWidth, t.videoHeight, 0)
        : t instanceof VideoFrame
          ? e.set(t.displayHeight, t.displayWidth, 0)
          : t !== null
            ? e.set(t.width, t.height, t.depth || 0)
            : e.set(0, 0, 0),
      e
    );
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      s = this.data;
    if (s !== null) {
      let r;
      if (Array.isArray(s)) {
        r = [];
        for (let a = 0, o = s.length; a < o; a++)
          s[a].isDataTexture ? r.push(Gs(s[a].image)) : r.push(Gs(s[a]));
      } else r = Gs(s);
      n.url = r;
    }
    return (t || (e.images[this.uuid] = n), n);
  }
}
function Gs(i) {
  return (typeof HTMLImageElement < "u" && i instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && i instanceof ImageBitmap)
    ? xc.getDataURL(i)
    : i.data
      ? {
          data: Array.from(i.data),
          width: i.width,
          height: i.height,
          type: i.data.constructor.name,
        }
      : (De("Texture: Unable to serialize Texture."), {});
}
let gc = 0;
const Hs = new F();
class Et extends Kn {
  constructor(
    e = Et.DEFAULT_IMAGE,
    t = Et.DEFAULT_MAPPING,
    n = un,
    s = un,
    r = Gt,
    a = Gn,
    o = qt,
    c = mn,
    l = Et.DEFAULT_ANISOTROPY,
    u = An,
  ) {
    (super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: gc++ }),
      (this.uuid = ki()),
      (this.name = ""),
      (this.source = new fa(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.channel = 0),
      (this.wrapS = n),
      (this.wrapT = s),
      (this.magFilter = r),
      (this.minFilter = a),
      (this.anisotropy = l),
      (this.format = o),
      (this.internalFormat = null),
      (this.type = c),
      (this.offset = new Ie(0, 0)),
      (this.repeat = new Ie(1, 1)),
      (this.center = new Ie(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Ue()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = u),
      (this.userData = {}),
      (this.updateRanges = []),
      (this.version = 0),
      (this.onUpdate = null),
      (this.renderTarget = null),
      (this.isRenderTargetTexture = !1),
      (this.isArrayTexture = !!(e && e.depth && e.depth > 1)),
      (this.pmremVersion = 0));
  }
  get width() {
    return this.source.getSize(Hs).x;
  }
  get height() {
    return this.source.getSize(Hs).y;
  }
  get depth() {
    return this.source.getSize(Hs).z;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y,
    );
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.renderTarget = e.renderTarget),
      (this.isRenderTargetTexture = e.isRenderTargetTexture),
      (this.isArrayTexture = e.isArrayTexture),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  setValues(e) {
    for (const t in e) {
      const n = e[t];
      if (n === void 0) {
        De(`Texture.setValues(): parameter '${t}' has value of undefined.`);
        continue;
      }
      const s = this[t];
      if (s === void 0) {
        De(`Texture.setValues(): property '${t}' does not exist.`);
        continue;
      }
      (s && n && s.isVector2 && n.isVector2) ||
      (s && n && s.isVector3 && n.isVector3) ||
      (s && n && s.isMatrix3 && n.isMatrix3)
        ? s.copy(n)
        : (this[t] = n);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Oo) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case Ar:
          e.x = e.x - Math.floor(e.x);
          break;
        case un:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case wr:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Ar:
          e.y = e.y - Math.floor(e.y);
          break;
        case un:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case wr:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return (this.flipY && (e.y = 1 - e.y), e);
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
Et.DEFAULT_IMAGE = null;
Et.DEFAULT_MAPPING = Oo;
Et.DEFAULT_ANISOTROPY = 1;
class ut {
  constructor(e = 0, t = 0, n = 0, s = 1) {
    ((ut.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = s));
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, s) {
    return ((this.x = e), (this.y = t), (this.z = n), (this.w = s), this);
  }
  setScalar(e) {
    return ((this.x = e), (this.y = e), (this.z = e), (this.w = e), this);
  }
  setX(e) {
    return ((this.x = e), this);
  }
  setY(e) {
    return ((this.y = e), this);
  }
  setZ(e) {
    return ((this.z = e), this);
  }
  setW(e) {
    return ((this.w = e), this);
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x),
      (this.y += e.y),
      (this.z += e.z),
      (this.w += e.w),
      this
    );
  }
  addScalar(e) {
    return ((this.x += e), (this.y += e), (this.z += e), (this.w += e), this);
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x),
      (this.y -= e.y),
      (this.z -= e.z),
      (this.w -= e.w),
      this
    );
  }
  subScalar(e) {
    return ((this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this);
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x),
      (this.y *= e.y),
      (this.z *= e.z),
      (this.w *= e.w),
      this
    );
  }
  multiplyScalar(e) {
    return ((this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this);
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      s = this.z,
      r = this.w,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * n + a[8] * s + a[12] * r),
      (this.y = a[1] * t + a[5] * n + a[9] * s + a[13] * r),
      (this.z = a[2] * t + a[6] * n + a[10] * s + a[14] * r),
      (this.w = a[3] * t + a[7] * n + a[11] * s + a[15] * r),
      this
    );
  }
  divide(e) {
    return (
      (this.x /= e.x),
      (this.y /= e.y),
      (this.z /= e.z),
      (this.w /= e.w),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, s, r;
    const c = e.elements,
      l = c[0],
      u = c[4],
      d = c[8],
      f = c[1],
      m = c[5],
      g = c[9],
      M = c[2],
      p = c[6],
      h = c[10];
    if (
      Math.abs(u - f) < 0.01 &&
      Math.abs(d - M) < 0.01 &&
      Math.abs(g - p) < 0.01
    ) {
      if (
        Math.abs(u + f) < 0.1 &&
        Math.abs(d + M) < 0.1 &&
        Math.abs(g + p) < 0.1 &&
        Math.abs(l + m + h - 3) < 0.1
      )
        return (this.set(1, 0, 0, 0), this);
      t = Math.PI;
      const y = (l + 1) / 2,
        C = (m + 1) / 2,
        D = (h + 1) / 2,
        E = (u + f) / 4,
        P = (d + M) / 4,
        z = (g + p) / 4;
      return (
        y > C && y > D
          ? y < 0.01
            ? ((n = 0), (s = 0.707106781), (r = 0.707106781))
            : ((n = Math.sqrt(y)), (s = E / n), (r = P / n))
          : C > D
            ? C < 0.01
              ? ((n = 0.707106781), (s = 0), (r = 0.707106781))
              : ((s = Math.sqrt(C)), (n = E / s), (r = z / s))
            : D < 0.01
              ? ((n = 0.707106781), (s = 0.707106781), (r = 0))
              : ((r = Math.sqrt(D)), (n = P / r), (s = z / r)),
        this.set(n, s, r, t),
        this
      );
    }
    let T = Math.sqrt(
      (p - g) * (p - g) + (d - M) * (d - M) + (f - u) * (f - u),
    );
    return (
      Math.abs(T) < 0.001 && (T = 1),
      (this.x = (p - g) / T),
      (this.y = (d - M) / T),
      (this.z = (f - u) / T),
      (this.w = Math.acos((l + m + h - 1) / 2)),
      this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (
      (this.x = t[12]),
      (this.y = t[13]),
      (this.z = t[14]),
      (this.w = t[15]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Oe(this.x, e.x, t.x)),
      (this.y = Oe(this.y, e.y, t.y)),
      (this.z = Oe(this.z, e.z, t.z)),
      (this.w = Oe(this.w, e.w, t.w)),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Oe(this.x, e, t)),
      (this.y = Oe(this.y, e, t)),
      (this.z = Oe(this.z, e, t)),
      (this.w = Oe(this.w, e, t)),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Oe(n, e, t));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w,
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y, yield this.z, yield this.w);
  }
}
class vc extends Kn {
  constructor(e = 1, t = 1, n = {}) {
    (super(),
      (n = Object.assign(
        {
          generateMipmaps: !1,
          internalFormat: null,
          minFilter: Gt,
          depthBuffer: !0,
          stencilBuffer: !1,
          resolveDepthBuffer: !0,
          resolveStencilBuffer: !0,
          depthTexture: null,
          samples: 0,
          count: 1,
          depth: 1,
          multiview: !1,
        },
        n,
      )),
      (this.isRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = n.depth),
      (this.scissor = new ut(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new ut(0, 0, e, t)));
    const s = { width: e, height: t, depth: n.depth },
      r = new Et(s);
    this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++)
      ((this.textures[o] = r.clone()),
        (this.textures[o].isRenderTargetTexture = !0),
        (this.textures[o].renderTarget = this));
    (this._setTextureOptions(n),
      (this.depthBuffer = n.depthBuffer),
      (this.stencilBuffer = n.stencilBuffer),
      (this.resolveDepthBuffer = n.resolveDepthBuffer),
      (this.resolveStencilBuffer = n.resolveStencilBuffer),
      (this._depthTexture = null),
      (this.depthTexture = n.depthTexture),
      (this.samples = n.samples),
      (this.multiview = n.multiview));
  }
  _setTextureOptions(e = {}) {
    const t = {
      minFilter: Gt,
      generateMipmaps: !1,
      flipY: !1,
      internalFormat: null,
    };
    (e.mapping !== void 0 && (t.mapping = e.mapping),
      e.wrapS !== void 0 && (t.wrapS = e.wrapS),
      e.wrapT !== void 0 && (t.wrapT = e.wrapT),
      e.wrapR !== void 0 && (t.wrapR = e.wrapR),
      e.magFilter !== void 0 && (t.magFilter = e.magFilter),
      e.minFilter !== void 0 && (t.minFilter = e.minFilter),
      e.format !== void 0 && (t.format = e.format),
      e.type !== void 0 && (t.type = e.type),
      e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy),
      e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace),
      e.flipY !== void 0 && (t.flipY = e.flipY),
      e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps),
      e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat));
    for (let n = 0; n < this.textures.length; n++)
      this.textures[n].setValues(t);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    (this._depthTexture !== null && (this._depthTexture.renderTarget = null),
      e !== null && (e.renderTarget = this),
      (this._depthTexture = e));
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      ((this.width = e), (this.height = t), (this.depth = n));
      for (let s = 0, r = this.textures.length; s < r; s++)
        ((this.textures[s].image.width = e),
          (this.textures[s].image.height = t),
          (this.textures[s].image.depth = n),
          this.textures[s].isData3DTexture !== !0 &&
            (this.textures[s].isArrayTexture =
              this.textures[s].image.depth > 1));
      this.dispose();
    }
    (this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t));
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    ((this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.scissor.copy(e.scissor),
      (this.scissorTest = e.scissorTest),
      this.viewport.copy(e.viewport),
      (this.textures.length = 0));
    for (let t = 0, n = e.textures.length; t < n; t++) {
      ((this.textures[t] = e.textures[t].clone()),
        (this.textures[t].isRenderTargetTexture = !0),
        (this.textures[t].renderTarget = this));
      const s = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new fa(s);
    }
    return (
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      (this.resolveDepthBuffer = e.resolveDepthBuffer),
      (this.resolveStencilBuffer = e.resolveStencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Yn extends vc {
  constructor(e = 1, t = 1, n = {}) {
    (super(e, t, n), (this.isWebGLRenderTarget = !0));
  }
}
class Zo extends Et {
  constructor(e = null, t = 1, n = 1, s = 1) {
    (super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: s }),
      (this.magFilter = Ft),
      (this.minFilter = Ft),
      (this.wrapR = un),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.layerUpdates = new Set()));
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Mc extends Et {
  constructor(e = null, t = 1, n = 1, s = 1) {
    (super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: s }),
      (this.magFilter = Ft),
      (this.minFilter = Ft),
      (this.wrapR = un),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1));
  }
}
class Vi {
  constructor(
    e = new F(1 / 0, 1 / 0, 1 / 0),
    t = new F(-1 / 0, -1 / 0, -1 / 0),
  ) {
    ((this.isBox3 = !0), (this.min = e), (this.max = t));
  }
  set(e, t) {
    return (this.min.copy(e), this.max.copy(t), this);
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Wt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Wt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Wt.copy(t).multiplyScalar(0.5);
    return (this.min.copy(e).sub(n), this.max.copy(e).add(n), this);
  }
  setFromObject(e, t = !1) {
    return (this.makeEmpty(), this.expandByObject(e, t));
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (this.min.copy(e.min), this.max.copy(e.max), this);
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return (this.min.min(e), this.max.max(e), this);
  }
  expandByVector(e) {
    return (this.min.sub(e), this.max.add(e), this);
  }
  expandByScalar(e) {
    return (this.min.addScalar(-e), this.max.addScalar(e), this);
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const r = n.getAttribute("position");
      if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = r.count; a < o; a++)
          (e.isMesh === !0
            ? e.getVertexPosition(a, Wt)
            : Wt.fromBufferAttribute(r, a),
            Wt.applyMatrix4(e.matrixWorld),
            this.expandByPoint(Wt));
      else
        (e.boundingBox !== void 0
          ? (e.boundingBox === null && e.computeBoundingBox(),
            Zi.copy(e.boundingBox))
          : (n.boundingBox === null && n.computeBoundingBox(),
            Zi.copy(n.boundingBox)),
          Zi.applyMatrix4(e.matrixWorld),
          this.union(Zi));
    }
    const s = e.children;
    for (let r = 0, a = s.length; r < a; r++) this.expandByObject(s[r], t);
    return this;
  }
  containsPoint(e) {
    return (
      e.x >= this.min.x &&
      e.x <= this.max.x &&
      e.y >= this.min.y &&
      e.y <= this.max.y &&
      e.z >= this.min.z &&
      e.z <= this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z),
    );
  }
  intersectsBox(e) {
    return (
      e.max.x >= this.min.x &&
      e.min.x <= this.max.x &&
      e.max.y >= this.min.y &&
      e.min.y <= this.max.y &&
      e.max.z >= this.min.z &&
      e.min.z <= this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, Wt),
      Wt.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    (this.getCenter(Ri),
      qi.subVectors(this.max, Ri),
      Qn.subVectors(e.a, Ri),
      ei.subVectors(e.b, Ri),
      ti.subVectors(e.c, Ri),
      vn.subVectors(ei, Qn),
      Mn.subVectors(ti, ei),
      In.subVectors(Qn, ti));
    let t = [
      0,
      -vn.z,
      vn.y,
      0,
      -Mn.z,
      Mn.y,
      0,
      -In.z,
      In.y,
      vn.z,
      0,
      -vn.x,
      Mn.z,
      0,
      -Mn.x,
      In.z,
      0,
      -In.x,
      -vn.y,
      vn.x,
      0,
      -Mn.y,
      Mn.x,
      0,
      -In.y,
      In.x,
      0,
    ];
    return !Ws(t, Qn, ei, ti, qi) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !Ws(t, Qn, ei, ti, qi))
      ? !1
      : (Ki.crossVectors(vn, Mn),
        (t = [Ki.x, Ki.y, Ki.z]),
        Ws(t, Qn, ei, ti, qi));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Wt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = this.getSize(Wt).length() * 0.5)),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return (this.min.min(e.min), this.max.max(e.max), this);
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (nn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        nn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        nn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        nn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        nn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        nn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        nn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        nn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(nn),
        this);
  }
  translate(e) {
    return (this.min.add(e), this.max.add(e), this);
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  toJSON() {
    return { min: this.min.toArray(), max: this.max.toArray() };
  }
  fromJSON(e) {
    return (this.min.fromArray(e.min), this.max.fromArray(e.max), this);
  }
}
const nn = [
    new F(),
    new F(),
    new F(),
    new F(),
    new F(),
    new F(),
    new F(),
    new F(),
  ],
  Wt = new F(),
  Zi = new Vi(),
  Qn = new F(),
  ei = new F(),
  ti = new F(),
  vn = new F(),
  Mn = new F(),
  In = new F(),
  Ri = new F(),
  qi = new F(),
  Ki = new F(),
  Nn = new F();
function Ws(i, e, t, n, s) {
  for (let r = 0, a = i.length - 3; r <= a; r += 3) {
    Nn.fromArray(i, r);
    const o =
        s.x * Math.abs(Nn.x) + s.y * Math.abs(Nn.y) + s.z * Math.abs(Nn.z),
      c = e.dot(Nn),
      l = t.dot(Nn),
      u = n.dot(Nn);
    if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > o) return !1;
  }
  return !0;
}
const Sc = new Vi(),
  Pi = new F(),
  Xs = new F();
class pa {
  constructor(e = new F(), t = -1) {
    ((this.isSphere = !0), (this.center = e), (this.radius = t));
  }
  set(e, t) {
    return (this.center.copy(e), (this.radius = t), this);
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Sc.setFromPoints(e).getCenter(n);
    let s = 0;
    for (let r = 0, a = e.length; r < a; r++)
      s = Math.max(s, n.distanceToSquared(e[r]));
    return ((this.radius = Math.sqrt(s)), this);
  }
  copy(e) {
    return (this.center.copy(e.center), (this.radius = e.radius), this);
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return (this.center.set(0, 0, 0), (this.radius = -1), this);
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return (this.center.add(e), this);
  }
  expandByPoint(e) {
    if (this.isEmpty()) return (this.center.copy(e), (this.radius = 0), this);
    Pi.subVectors(e, this.center);
    const t = Pi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        s = (n - this.radius) * 0.5;
      (this.center.addScaledVector(Pi, s / n), (this.radius += s));
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
        ? (this.copy(e), this)
        : (this.center.equals(e.center) === !0
            ? (this.radius = Math.max(this.radius, e.radius))
            : (Xs.subVectors(e.center, this.center).setLength(e.radius),
              this.expandByPoint(Pi.copy(e.center).add(Xs)),
              this.expandByPoint(Pi.copy(e.center).sub(Xs))),
          this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return { radius: this.radius, center: this.center.toArray() };
  }
  fromJSON(e) {
    return ((this.radius = e.radius), this.center.fromArray(e.center), this);
  }
}
const sn = new F(),
  Ys = new F(),
  ji = new F(),
  Sn = new F(),
  Zs = new F(),
  $i = new F(),
  qs = new F();
class ma {
  constructor(e = new F(), t = new F(0, 0, -1)) {
    ((this.origin = e), (this.direction = t));
  }
  set(e, t) {
    return (this.origin.copy(e), this.direction.copy(t), this);
  }
  copy(e) {
    return (this.origin.copy(e.origin), this.direction.copy(e.direction), this);
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return (this.direction.copy(e).sub(this.origin).normalize(), this);
  }
  recast(e) {
    return (this.origin.copy(this.at(e, sn)), this);
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = sn.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (sn.copy(this.origin).addScaledVector(this.direction, t),
        sn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, s) {
    (Ys.copy(e).add(t).multiplyScalar(0.5),
      ji.copy(t).sub(e).normalize(),
      Sn.copy(this.origin).sub(Ys));
    const r = e.distanceTo(t) * 0.5,
      a = -this.direction.dot(ji),
      o = Sn.dot(this.direction),
      c = -Sn.dot(ji),
      l = Sn.lengthSq(),
      u = Math.abs(1 - a * a);
    let d, f, m, g;
    if (u > 0)
      if (((d = a * c - o), (f = a * o - c), (g = r * u), d >= 0))
        if (f >= -g)
          if (f <= g) {
            const M = 1 / u;
            ((d *= M),
              (f *= M),
              (m = d * (d + a * f + 2 * o) + f * (a * d + f + 2 * c) + l));
          } else
            ((f = r),
              (d = Math.max(0, -(a * f + o))),
              (m = -d * d + f * (f + 2 * c) + l));
        else
          ((f = -r),
            (d = Math.max(0, -(a * f + o))),
            (m = -d * d + f * (f + 2 * c) + l));
      else
        f <= -g
          ? ((d = Math.max(0, -(-a * r + o))),
            (f = d > 0 ? -r : Math.min(Math.max(-r, -c), r)),
            (m = -d * d + f * (f + 2 * c) + l))
          : f <= g
            ? ((d = 0),
              (f = Math.min(Math.max(-r, -c), r)),
              (m = f * (f + 2 * c) + l))
            : ((d = Math.max(0, -(a * r + o))),
              (f = d > 0 ? r : Math.min(Math.max(-r, -c), r)),
              (m = -d * d + f * (f + 2 * c) + l));
    else
      ((f = a > 0 ? -r : r),
        (d = Math.max(0, -(a * f + o))),
        (m = -d * d + f * (f + 2 * c) + l));
    return (
      n && n.copy(this.origin).addScaledVector(this.direction, d),
      s && s.copy(Ys).addScaledVector(ji, f),
      m
    );
  }
  intersectSphere(e, t) {
    sn.subVectors(e.center, this.origin);
    const n = sn.dot(this.direction),
      s = sn.dot(sn) - n * n,
      r = e.radius * e.radius;
    if (s > r) return null;
    const a = Math.sqrt(r - s),
      o = n - a,
      c = n + a;
    return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return e.radius < 0
      ? !1
      : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, s, r, a, o, c;
    const l = 1 / this.direction.x,
      u = 1 / this.direction.y,
      d = 1 / this.direction.z,
      f = this.origin;
    return (
      l >= 0
        ? ((n = (e.min.x - f.x) * l), (s = (e.max.x - f.x) * l))
        : ((n = (e.max.x - f.x) * l), (s = (e.min.x - f.x) * l)),
      u >= 0
        ? ((r = (e.min.y - f.y) * u), (a = (e.max.y - f.y) * u))
        : ((r = (e.max.y - f.y) * u), (a = (e.min.y - f.y) * u)),
      n > a ||
      r > s ||
      ((r > n || isNaN(n)) && (n = r),
      (a < s || isNaN(s)) && (s = a),
      d >= 0
        ? ((o = (e.min.z - f.z) * d), (c = (e.max.z - f.z) * d))
        : ((o = (e.max.z - f.z) * d), (c = (e.min.z - f.z) * d)),
      n > c || o > s) ||
      ((o > n || n !== n) && (n = o), (c < s || s !== s) && (s = c), s < 0)
        ? null
        : this.at(n >= 0 ? n : s, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, sn) !== null;
  }
  intersectTriangle(e, t, n, s, r) {
    (Zs.subVectors(t, e), $i.subVectors(n, e), qs.crossVectors(Zs, $i));
    let a = this.direction.dot(qs),
      o;
    if (a > 0) {
      if (s) return null;
      o = 1;
    } else if (a < 0) ((o = -1), (a = -a));
    else return null;
    Sn.subVectors(this.origin, e);
    const c = o * this.direction.dot($i.crossVectors(Sn, $i));
    if (c < 0) return null;
    const l = o * this.direction.dot(Zs.cross(Sn));
    if (l < 0 || c + l > a) return null;
    const u = -o * Sn.dot(qs);
    return u < 0 ? null : this.at(u / a, r);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e),
      this.direction.transformDirection(e),
      this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ft {
  constructor(e, t, n, s, r, a, o, c, l, u, d, f, m, g, M, p) {
    ((ft.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, s, r, a, o, c, l, u, d, f, m, g, M, p));
  }
  set(e, t, n, s, r, a, o, c, l, u, d, f, m, g, M, p) {
    const h = this.elements;
    return (
      (h[0] = e),
      (h[4] = t),
      (h[8] = n),
      (h[12] = s),
      (h[1] = r),
      (h[5] = a),
      (h[9] = o),
      (h[13] = c),
      (h[2] = l),
      (h[6] = u),
      (h[10] = d),
      (h[14] = f),
      (h[3] = m),
      (h[7] = g),
      (h[11] = M),
      (h[15] = p),
      this
    );
  }
  identity() {
    return (this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
  }
  clone() {
    return new ft().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return ((t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this);
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      s = 1 / ni.setFromMatrixColumn(e, 0).length(),
      r = 1 / ni.setFromMatrixColumn(e, 1).length(),
      a = 1 / ni.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * s),
      (t[1] = n[1] * s),
      (t[2] = n[2] * s),
      (t[3] = 0),
      (t[4] = n[4] * r),
      (t[5] = n[5] * r),
      (t[6] = n[6] * r),
      (t[7] = 0),
      (t[8] = n[8] * a),
      (t[9] = n[9] * a),
      (t[10] = n[10] * a),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      s = e.y,
      r = e.z,
      a = Math.cos(n),
      o = Math.sin(n),
      c = Math.cos(s),
      l = Math.sin(s),
      u = Math.cos(r),
      d = Math.sin(r);
    if (e.order === "XYZ") {
      const f = a * u,
        m = a * d,
        g = o * u,
        M = o * d;
      ((t[0] = c * u),
        (t[4] = -c * d),
        (t[8] = l),
        (t[1] = m + g * l),
        (t[5] = f - M * l),
        (t[9] = -o * c),
        (t[2] = M - f * l),
        (t[6] = g + m * l),
        (t[10] = a * c));
    } else if (e.order === "YXZ") {
      const f = c * u,
        m = c * d,
        g = l * u,
        M = l * d;
      ((t[0] = f + M * o),
        (t[4] = g * o - m),
        (t[8] = a * l),
        (t[1] = a * d),
        (t[5] = a * u),
        (t[9] = -o),
        (t[2] = m * o - g),
        (t[6] = M + f * o),
        (t[10] = a * c));
    } else if (e.order === "ZXY") {
      const f = c * u,
        m = c * d,
        g = l * u,
        M = l * d;
      ((t[0] = f - M * o),
        (t[4] = -a * d),
        (t[8] = g + m * o),
        (t[1] = m + g * o),
        (t[5] = a * u),
        (t[9] = M - f * o),
        (t[2] = -a * l),
        (t[6] = o),
        (t[10] = a * c));
    } else if (e.order === "ZYX") {
      const f = a * u,
        m = a * d,
        g = o * u,
        M = o * d;
      ((t[0] = c * u),
        (t[4] = g * l - m),
        (t[8] = f * l + M),
        (t[1] = c * d),
        (t[5] = M * l + f),
        (t[9] = m * l - g),
        (t[2] = -l),
        (t[6] = o * c),
        (t[10] = a * c));
    } else if (e.order === "YZX") {
      const f = a * c,
        m = a * l,
        g = o * c,
        M = o * l;
      ((t[0] = c * u),
        (t[4] = M - f * d),
        (t[8] = g * d + m),
        (t[1] = d),
        (t[5] = a * u),
        (t[9] = -o * u),
        (t[2] = -l * u),
        (t[6] = m * d + g),
        (t[10] = f - M * d));
    } else if (e.order === "XZY") {
      const f = a * c,
        m = a * l,
        g = o * c,
        M = o * l;
      ((t[0] = c * u),
        (t[4] = -d),
        (t[8] = l * u),
        (t[1] = f * d + M),
        (t[5] = a * u),
        (t[9] = m * d - g),
        (t[2] = g * d - m),
        (t[6] = o * u),
        (t[10] = M * d + f));
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(bc, e, yc);
  }
  lookAt(e, t, n) {
    const s = this.elements;
    return (
      It.subVectors(e, t),
      It.lengthSq() === 0 && (It.z = 1),
      It.normalize(),
      bn.crossVectors(n, It),
      bn.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (It.x += 1e-4) : (It.z += 1e-4),
        It.normalize(),
        bn.crossVectors(n, It)),
      bn.normalize(),
      Ji.crossVectors(It, bn),
      (s[0] = bn.x),
      (s[4] = Ji.x),
      (s[8] = It.x),
      (s[1] = bn.y),
      (s[5] = Ji.y),
      (s[9] = It.y),
      (s[2] = bn.z),
      (s[6] = Ji.z),
      (s[10] = It.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      s = t.elements,
      r = this.elements,
      a = n[0],
      o = n[4],
      c = n[8],
      l = n[12],
      u = n[1],
      d = n[5],
      f = n[9],
      m = n[13],
      g = n[2],
      M = n[6],
      p = n[10],
      h = n[14],
      T = n[3],
      y = n[7],
      C = n[11],
      D = n[15],
      E = s[0],
      P = s[4],
      z = s[8],
      S = s[12],
      v = s[1],
      R = s[5],
      B = s[9],
      V = s[13],
      H = s[2],
      q = s[6],
      Y = s[10],
      ne = s[14],
      G = s[3],
      te = s[7],
      re = s[11],
      Se = s[15];
    return (
      (r[0] = a * E + o * v + c * H + l * G),
      (r[4] = a * P + o * R + c * q + l * te),
      (r[8] = a * z + o * B + c * Y + l * re),
      (r[12] = a * S + o * V + c * ne + l * Se),
      (r[1] = u * E + d * v + f * H + m * G),
      (r[5] = u * P + d * R + f * q + m * te),
      (r[9] = u * z + d * B + f * Y + m * re),
      (r[13] = u * S + d * V + f * ne + m * Se),
      (r[2] = g * E + M * v + p * H + h * G),
      (r[6] = g * P + M * R + p * q + h * te),
      (r[10] = g * z + M * B + p * Y + h * re),
      (r[14] = g * S + M * V + p * ne + h * Se),
      (r[3] = T * E + y * v + C * H + D * G),
      (r[7] = T * P + y * R + C * q + D * te),
      (r[11] = T * z + y * B + C * Y + D * re),
      (r[15] = T * S + y * V + C * ne + D * Se),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      s = e[8],
      r = e[12],
      a = e[1],
      o = e[5],
      c = e[9],
      l = e[13],
      u = e[2],
      d = e[6],
      f = e[10],
      m = e[14],
      g = e[3],
      M = e[7],
      p = e[11],
      h = e[15];
    return (
      g *
        (+r * c * d -
          s * l * d -
          r * o * f +
          n * l * f +
          s * o * m -
          n * c * m) +
      M *
        (+t * c * m -
          t * l * f +
          r * a * f -
          s * a * m +
          s * l * u -
          r * c * u) +
      p *
        (+t * l * d -
          t * o * m -
          r * a * d +
          n * a * m +
          r * o * u -
          n * l * u) +
      h *
        (-s * o * u - t * c * d + t * o * f + s * a * d - n * a * f + n * c * u)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const s = this.elements;
    return (
      e.isVector3
        ? ((s[12] = e.x), (s[13] = e.y), (s[14] = e.z))
        : ((s[12] = e), (s[13] = t), (s[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      s = e[2],
      r = e[3],
      a = e[4],
      o = e[5],
      c = e[6],
      l = e[7],
      u = e[8],
      d = e[9],
      f = e[10],
      m = e[11],
      g = e[12],
      M = e[13],
      p = e[14],
      h = e[15],
      T = d * p * l - M * f * l + M * c * m - o * p * m - d * c * h + o * f * h,
      y = g * f * l - u * p * l - g * c * m + a * p * m + u * c * h - a * f * h,
      C = u * M * l - g * d * l + g * o * m - a * M * m - u * o * h + a * d * h,
      D = g * d * c - u * M * c - g * o * f + a * M * f + u * o * p - a * d * p,
      E = t * T + n * y + s * C + r * D;
    if (E === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const P = 1 / E;
    return (
      (e[0] = T * P),
      (e[1] =
        (M * f * r -
          d * p * r -
          M * s * m +
          n * p * m +
          d * s * h -
          n * f * h) *
        P),
      (e[2] =
        (o * p * r -
          M * c * r +
          M * s * l -
          n * p * l -
          o * s * h +
          n * c * h) *
        P),
      (e[3] =
        (d * c * r -
          o * f * r -
          d * s * l +
          n * f * l +
          o * s * m -
          n * c * m) *
        P),
      (e[4] = y * P),
      (e[5] =
        (u * p * r -
          g * f * r +
          g * s * m -
          t * p * m -
          u * s * h +
          t * f * h) *
        P),
      (e[6] =
        (g * c * r -
          a * p * r -
          g * s * l +
          t * p * l +
          a * s * h -
          t * c * h) *
        P),
      (e[7] =
        (a * f * r -
          u * c * r +
          u * s * l -
          t * f * l -
          a * s * m +
          t * c * m) *
        P),
      (e[8] = C * P),
      (e[9] =
        (g * d * r -
          u * M * r -
          g * n * m +
          t * M * m +
          u * n * h -
          t * d * h) *
        P),
      (e[10] =
        (a * M * r -
          g * o * r +
          g * n * l -
          t * M * l -
          a * n * h +
          t * o * h) *
        P),
      (e[11] =
        (u * o * r -
          a * d * r -
          u * n * l +
          t * d * l +
          a * n * m -
          t * o * m) *
        P),
      (e[12] = D * P),
      (e[13] =
        (u * M * s -
          g * d * s +
          g * n * f -
          t * M * f -
          u * n * p +
          t * d * p) *
        P),
      (e[14] =
        (g * o * s -
          a * M * s -
          g * n * c +
          t * M * c +
          a * n * p -
          t * o * p) *
        P),
      (e[15] =
        (a * d * s -
          u * o * s +
          u * n * c -
          t * d * c -
          a * n * f +
          t * o * f) *
        P),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      s = e.y,
      r = e.z;
    return (
      (t[0] *= n),
      (t[4] *= s),
      (t[8] *= r),
      (t[1] *= n),
      (t[5] *= s),
      (t[9] *= r),
      (t[2] *= n),
      (t[6] *= s),
      (t[10] *= r),
      (t[3] *= n),
      (t[7] *= s),
      (t[11] *= r),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      s = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, s));
  }
  makeTranslation(e, t, n) {
    return (
      e.isVector3
        ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return (this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this);
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return (this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this);
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return (this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      s = Math.sin(t),
      r = 1 - n,
      a = e.x,
      o = e.y,
      c = e.z,
      l = r * a,
      u = r * o;
    return (
      this.set(
        l * a + n,
        l * o - s * c,
        l * c + s * o,
        0,
        l * o + s * c,
        u * o + n,
        u * c - s * a,
        0,
        l * c - s * o,
        u * c + s * a,
        r * c * c + n,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return (this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this);
  }
  makeShear(e, t, n, s, r, a) {
    return (this.set(1, n, r, 0, e, 1, a, 0, t, s, 1, 0, 0, 0, 0, 1), this);
  }
  compose(e, t, n) {
    const s = this.elements,
      r = t._x,
      a = t._y,
      o = t._z,
      c = t._w,
      l = r + r,
      u = a + a,
      d = o + o,
      f = r * l,
      m = r * u,
      g = r * d,
      M = a * u,
      p = a * d,
      h = o * d,
      T = c * l,
      y = c * u,
      C = c * d,
      D = n.x,
      E = n.y,
      P = n.z;
    return (
      (s[0] = (1 - (M + h)) * D),
      (s[1] = (m + C) * D),
      (s[2] = (g - y) * D),
      (s[3] = 0),
      (s[4] = (m - C) * E),
      (s[5] = (1 - (f + h)) * E),
      (s[6] = (p + T) * E),
      (s[7] = 0),
      (s[8] = (g + y) * P),
      (s[9] = (p - T) * P),
      (s[10] = (1 - (f + M)) * P),
      (s[11] = 0),
      (s[12] = e.x),
      (s[13] = e.y),
      (s[14] = e.z),
      (s[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const s = this.elements;
    let r = ni.set(s[0], s[1], s[2]).length();
    const a = ni.set(s[4], s[5], s[6]).length(),
      o = ni.set(s[8], s[9], s[10]).length();
    (this.determinant() < 0 && (r = -r),
      (e.x = s[12]),
      (e.y = s[13]),
      (e.z = s[14]),
      Xt.copy(this));
    const l = 1 / r,
      u = 1 / a,
      d = 1 / o;
    return (
      (Xt.elements[0] *= l),
      (Xt.elements[1] *= l),
      (Xt.elements[2] *= l),
      (Xt.elements[4] *= u),
      (Xt.elements[5] *= u),
      (Xt.elements[6] *= u),
      (Xt.elements[8] *= d),
      (Xt.elements[9] *= d),
      (Xt.elements[10] *= d),
      t.setFromRotationMatrix(Xt),
      (n.x = r),
      (n.y = a),
      (n.z = o),
      this
    );
  }
  makePerspective(e, t, n, s, r, a, o = Qt, c = !1) {
    const l = this.elements,
      u = (2 * r) / (t - e),
      d = (2 * r) / (n - s),
      f = (t + e) / (t - e),
      m = (n + s) / (n - s);
    let g, M;
    if (c) ((g = r / (a - r)), (M = (a * r) / (a - r)));
    else if (o === Qt) ((g = -(a + r) / (a - r)), (M = (-2 * a * r) / (a - r)));
    else if (o === Ss) ((g = -a / (a - r)), (M = (-a * r) / (a - r)));
    else
      throw new Error(
        "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o,
      );
    return (
      (l[0] = u),
      (l[4] = 0),
      (l[8] = f),
      (l[12] = 0),
      (l[1] = 0),
      (l[5] = d),
      (l[9] = m),
      (l[13] = 0),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = g),
      (l[14] = M),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = -1),
      (l[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, s, r, a, o = Qt, c = !1) {
    const l = this.elements,
      u = 2 / (t - e),
      d = 2 / (n - s),
      f = -(t + e) / (t - e),
      m = -(n + s) / (n - s);
    let g, M;
    if (c) ((g = 1 / (a - r)), (M = a / (a - r)));
    else if (o === Qt) ((g = -2 / (a - r)), (M = -(a + r) / (a - r)));
    else if (o === Ss) ((g = -1 / (a - r)), (M = -r / (a - r)));
    else
      throw new Error(
        "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o,
      );
    return (
      (l[0] = u),
      (l[4] = 0),
      (l[8] = 0),
      (l[12] = f),
      (l[1] = 0),
      (l[5] = d),
      (l[9] = 0),
      (l[13] = m),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = g),
      (l[14] = M),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = 0),
      (l[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let s = 0; s < 16; s++) if (t[s] !== n[s]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const ni = new F(),
  Xt = new ft(),
  bc = new F(0, 0, 0),
  yc = new F(1, 1, 1),
  bn = new F(),
  Ji = new F(),
  It = new F(),
  za = new ft(),
  ka = new Xn();
class xn {
  constructor(e = 0, t = 0, n = 0, s = xn.DEFAULT_ORDER) {
    ((this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = s));
  }
  get x() {
    return this._x;
  }
  set x(e) {
    ((this._x = e), this._onChangeCallback());
  }
  get y() {
    return this._y;
  }
  set y(e) {
    ((this._y = e), this._onChangeCallback());
  }
  get z() {
    return this._z;
  }
  set z(e) {
    ((this._z = e), this._onChangeCallback());
  }
  get order() {
    return this._order;
  }
  set order(e) {
    ((this._order = e), this._onChangeCallback());
  }
  set(e, t, n, s = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = s),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const s = e.elements,
      r = s[0],
      a = s[4],
      o = s[8],
      c = s[1],
      l = s[5],
      u = s[9],
      d = s[2],
      f = s[6],
      m = s[10];
    switch (t) {
      case "XYZ":
        ((this._y = Math.asin(Oe(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-u, m)), (this._z = Math.atan2(-a, r)))
            : ((this._x = Math.atan2(f, l)), (this._z = 0)));
        break;
      case "YXZ":
        ((this._x = Math.asin(-Oe(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(o, m)), (this._z = Math.atan2(c, l)))
            : ((this._y = Math.atan2(-d, r)), (this._z = 0)));
        break;
      case "ZXY":
        ((this._x = Math.asin(Oe(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._y = Math.atan2(-d, m)), (this._z = Math.atan2(-a, l)))
            : ((this._y = 0), (this._z = Math.atan2(c, r))));
        break;
      case "ZYX":
        ((this._y = Math.asin(-Oe(d, -1, 1))),
          Math.abs(d) < 0.9999999
            ? ((this._x = Math.atan2(f, m)), (this._z = Math.atan2(c, r)))
            : ((this._x = 0), (this._z = Math.atan2(-a, l))));
        break;
      case "YZX":
        ((this._z = Math.asin(Oe(c, -1, 1))),
          Math.abs(c) < 0.9999999
            ? ((this._x = Math.atan2(-u, l)), (this._y = Math.atan2(-d, r)))
            : ((this._x = 0), (this._y = Math.atan2(o, m))));
        break;
      case "XZY":
        ((this._z = Math.asin(-Oe(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(f, l)), (this._y = Math.atan2(o, r)))
            : ((this._x = Math.atan2(-u, m)), (this._y = 0)));
        break;
      default:
        De(
          "Euler: .setFromRotationMatrix() encountered an unknown order: " + t,
        );
    }
    return ((this._order = t), n === !0 && this._onChangeCallback(), this);
  }
  setFromQuaternion(e, t, n) {
    return (
      za.makeRotationFromQuaternion(e),
      this.setFromRotationMatrix(za, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return (ka.setFromEuler(this), this.setFromQuaternion(ka, e));
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return ((this._onChangeCallback = e), this);
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    (yield this._x, yield this._y, yield this._z, yield this._order);
  }
}
xn.DEFAULT_ORDER = "XYZ";
class xa {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let Ec = 0;
const Va = new F(),
  ii = new Xn(),
  rn = new ft(),
  Qi = new F(),
  Di = new F(),
  Tc = new F(),
  Ac = new Xn(),
  Ga = new F(1, 0, 0),
  Ha = new F(0, 1, 0),
  Wa = new F(0, 0, 1),
  Xa = { type: "added" },
  wc = { type: "removed" },
  si = { type: "childadded", child: null },
  Ks = { type: "childremoved", child: null };
class Ot extends Kn {
  constructor() {
    (super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: Ec++ }),
      (this.uuid = ki()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = Ot.DEFAULT_UP.clone()));
    const e = new F(),
      t = new xn(),
      n = new Xn(),
      s = new F(1, 1, 1);
    function r() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    (t._onChange(r),
      n._onChange(a),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: s },
        modelViewMatrix: { value: new ft() },
        normalMatrix: { value: new Ue() },
      }),
      (this.matrix = new ft()),
      (this.matrixWorld = new ft()),
      (this.matrixAutoUpdate = Ot.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new xa()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.customDepthMaterial = void 0),
      (this.customDistanceMaterial = void 0),
      (this.userData = {}));
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    (this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale));
  }
  applyQuaternion(e) {
    return (this.quaternion.premultiply(e), this);
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return (ii.setFromAxisAngle(e, t), this.quaternion.multiply(ii), this);
  }
  rotateOnWorldAxis(e, t) {
    return (ii.setFromAxisAngle(e, t), this.quaternion.premultiply(ii), this);
  }
  rotateX(e) {
    return this.rotateOnAxis(Ga, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Ha, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Wa, e);
  }
  translateOnAxis(e, t) {
    return (
      Va.copy(e).applyQuaternion(this.quaternion),
      this.position.add(Va.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(Ga, e);
  }
  translateY(e) {
    return this.translateOnAxis(Ha, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Wa, e);
  }
  localToWorld(e) {
    return (this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld));
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(rn.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, n) {
    e.isVector3 ? Qi.copy(e) : Qi.set(e, t, n);
    const s = this.parent;
    (this.updateWorldMatrix(!0, !1),
      Di.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? rn.lookAt(Di, Qi, this.up)
        : rn.lookAt(Qi, Di, this.up),
      this.quaternion.setFromRotationMatrix(rn),
      s &&
        (rn.extractRotation(s.matrixWorld),
        ii.setFromRotationMatrix(rn),
        this.quaternion.premultiply(ii.invert())));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (ht("Object3D.add: object can't be added as a child of itself.", e),
        this)
      : (e && e.isObject3D
          ? (e.removeFromParent(),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(Xa),
            (si.child = e),
            this.dispatchEvent(si),
            (si.child = null))
          : ht("Object3D.add: object not an instance of THREE.Object3D.", e),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null),
        this.children.splice(t, 1),
        e.dispatchEvent(wc),
        (Ks.child = e),
        this.dispatchEvent(Ks),
        (Ks.child = null)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return (e !== null && e.remove(this), this);
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      rn.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), rn.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(rn),
      e.removeFromParent(),
      (e.parent = this),
      this.children.push(e),
      e.updateWorldMatrix(!1, !0),
      e.dispatchEvent(Xa),
      (si.child = e),
      this.dispatchEvent(si),
      (si.child = null),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, s = this.children.length; n < s; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const s = this.children;
    for (let r = 0, a = s.length; r < a; r++)
      s[r].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(Di, e, Tc),
      e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(Di, Ac, e),
      e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, s = t.length; n < s; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, s = t.length; n < s; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    (this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0));
  }
  updateMatrixWorld(e) {
    (this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.matrixWorldAutoUpdate === !0 &&
          (this.parent === null
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix,
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0)));
    const t = this.children;
    for (let n = 0, s = t.length; n < s; n++) t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 && n !== null && n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.matrixWorldAutoUpdate === !0 &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix,
            )),
      t === !0)
    ) {
      const s = this.children;
      for (let r = 0, a = s.length; r < a; r++) s[r].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.7,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const s = {};
    ((s.uuid = this.uuid),
      (s.type = this.type),
      this.name !== "" && (s.name = this.name),
      this.castShadow === !0 && (s.castShadow = !0),
      this.receiveShadow === !0 && (s.receiveShadow = !0),
      this.visible === !1 && (s.visible = !1),
      this.frustumCulled === !1 && (s.frustumCulled = !1),
      this.renderOrder !== 0 && (s.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (s.userData = this.userData),
      (s.layers = this.layers.mask),
      (s.matrix = this.matrix.toArray()),
      (s.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (s.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((s.type = "InstancedMesh"),
        (s.count = this.count),
        (s.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (s.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((s.type = "BatchedMesh"),
        (s.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (s.sortObjects = this.sortObjects),
        (s.drawRanges = this._drawRanges),
        (s.reservedRanges = this._reservedRanges),
        (s.geometryInfo = this._geometryInfo.map((o) => ({
          ...o,
          boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0,
          boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0,
        }))),
        (s.instanceInfo = this._instanceInfo.map((o) => ({ ...o }))),
        (s.availableInstanceIds = this._availableInstanceIds.slice()),
        (s.availableGeometryIds = this._availableGeometryIds.slice()),
        (s.nextIndexStart = this._nextIndexStart),
        (s.nextVertexStart = this._nextVertexStart),
        (s.geometryCount = this._geometryCount),
        (s.maxInstanceCount = this._maxInstanceCount),
        (s.maxVertexCount = this._maxVertexCount),
        (s.maxIndexCount = this._maxIndexCount),
        (s.geometryInitialized = this._geometryInitialized),
        (s.matricesTexture = this._matricesTexture.toJSON(e)),
        (s.indirectTexture = this._indirectTexture.toJSON(e)),
        this._colorsTexture !== null &&
          (s.colorsTexture = this._colorsTexture.toJSON(e)),
        this.boundingSphere !== null &&
          (s.boundingSphere = this.boundingSphere.toJSON()),
        this.boundingBox !== null &&
          (s.boundingBox = this.boundingBox.toJSON())));
    function r(o, c) {
      return (o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)), c.uuid);
    }
    if (this.isScene)
      (this.background &&
        (this.background.isColor
          ? (s.background = this.background.toJSON())
          : this.background.isTexture &&
            (s.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (s.environment = this.environment.toJSON(e).uuid));
    else if (this.isMesh || this.isLine || this.isPoints) {
      s.geometry = r(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c))
          for (let l = 0, u = c.length; l < u; l++) {
            const d = c[l];
            r(e.shapes, d);
          }
        else r(e.shapes, c);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((s.bindMode = this.bindMode),
        (s.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (r(e.skeletons, this.skeleton), (s.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const o = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          o.push(r(e.materials, this.material[c]));
        s.material = o;
      } else s.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      s.children = [];
      for (let o = 0; o < this.children.length; o++)
        s.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      s.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        s.animations.push(r(e.animations, c));
      }
    }
    if (t) {
      const o = a(e.geometries),
        c = a(e.materials),
        l = a(e.textures),
        u = a(e.images),
        d = a(e.shapes),
        f = a(e.skeletons),
        m = a(e.animations),
        g = a(e.nodes);
      (o.length > 0 && (n.geometries = o),
        c.length > 0 && (n.materials = c),
        l.length > 0 && (n.textures = l),
        u.length > 0 && (n.images = u),
        d.length > 0 && (n.shapes = d),
        f.length > 0 && (n.skeletons = f),
        m.length > 0 && (n.animations = m),
        g.length > 0 && (n.nodes = g));
    }
    return ((n.object = s), n);
    function a(o) {
      const c = [];
      for (const l in o) {
        const u = o[l];
        (delete u.metadata, c.push(u));
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.animations = e.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const s = e.children[n];
        this.add(s.clone());
      }
    return this;
  }
}
Ot.DEFAULT_UP = new F(0, 1, 0);
Ot.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Yt = new F(),
  an = new F(),
  js = new F(),
  on = new F(),
  ri = new F(),
  ai = new F(),
  Ya = new F(),
  $s = new F(),
  Js = new F(),
  Qs = new F(),
  er = new ut(),
  tr = new ut(),
  nr = new ut();
class Zt {
  constructor(e = new F(), t = new F(), n = new F()) {
    ((this.a = e), (this.b = t), (this.c = n));
  }
  static getNormal(e, t, n, s) {
    (s.subVectors(n, t), Yt.subVectors(e, t), s.cross(Yt));
    const r = s.lengthSq();
    return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, s, r) {
    (Yt.subVectors(s, t), an.subVectors(n, t), js.subVectors(e, t));
    const a = Yt.dot(Yt),
      o = Yt.dot(an),
      c = Yt.dot(js),
      l = an.dot(an),
      u = an.dot(js),
      d = a * l - o * o;
    if (d === 0) return (r.set(0, 0, 0), null);
    const f = 1 / d,
      m = (l * c - o * u) * f,
      g = (a * u - o * c) * f;
    return r.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, s) {
    return this.getBarycoord(e, t, n, s, on) === null
      ? !1
      : on.x >= 0 && on.y >= 0 && on.x + on.y <= 1;
  }
  static getInterpolation(e, t, n, s, r, a, o, c) {
    return this.getBarycoord(e, t, n, s, on) === null
      ? ((c.x = 0),
        (c.y = 0),
        "z" in c && (c.z = 0),
        "w" in c && (c.w = 0),
        null)
      : (c.setScalar(0),
        c.addScaledVector(r, on.x),
        c.addScaledVector(a, on.y),
        c.addScaledVector(o, on.z),
        c);
  }
  static getInterpolatedAttribute(e, t, n, s, r, a) {
    return (
      er.setScalar(0),
      tr.setScalar(0),
      nr.setScalar(0),
      er.fromBufferAttribute(e, t),
      tr.fromBufferAttribute(e, n),
      nr.fromBufferAttribute(e, s),
      a.setScalar(0),
      a.addScaledVector(er, r.x),
      a.addScaledVector(tr, r.y),
      a.addScaledVector(nr, r.z),
      a
    );
  }
  static isFrontFacing(e, t, n, s) {
    return (Yt.subVectors(n, t), an.subVectors(e, t), Yt.cross(an).dot(s) < 0);
  }
  set(e, t, n) {
    return (this.a.copy(e), this.b.copy(t), this.c.copy(n), this);
  }
  setFromPointsAndIndices(e, t, n, s) {
    return (this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[s]), this);
  }
  setFromAttributeAndIndices(e, t, n, s) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, s),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this);
  }
  getArea() {
    return (
      Yt.subVectors(this.c, this.b),
      an.subVectors(this.a, this.b),
      Yt.cross(an).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Zt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Zt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, s, r) {
    return Zt.getInterpolation(e, this.a, this.b, this.c, t, n, s, r);
  }
  containsPoint(e) {
    return Zt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Zt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      s = this.b,
      r = this.c;
    let a, o;
    (ri.subVectors(s, n), ai.subVectors(r, n), $s.subVectors(e, n));
    const c = ri.dot($s),
      l = ai.dot($s);
    if (c <= 0 && l <= 0) return t.copy(n);
    Js.subVectors(e, s);
    const u = ri.dot(Js),
      d = ai.dot(Js);
    if (u >= 0 && d <= u) return t.copy(s);
    const f = c * d - u * l;
    if (f <= 0 && c >= 0 && u <= 0)
      return ((a = c / (c - u)), t.copy(n).addScaledVector(ri, a));
    Qs.subVectors(e, r);
    const m = ri.dot(Qs),
      g = ai.dot(Qs);
    if (g >= 0 && m <= g) return t.copy(r);
    const M = m * l - c * g;
    if (M <= 0 && l >= 0 && g <= 0)
      return ((o = l / (l - g)), t.copy(n).addScaledVector(ai, o));
    const p = u * g - m * d;
    if (p <= 0 && d - u >= 0 && m - g >= 0)
      return (
        Ya.subVectors(r, s),
        (o = (d - u) / (d - u + (m - g))),
        t.copy(s).addScaledVector(Ya, o)
      );
    const h = 1 / (p + M + f);
    return (
      (a = M * h),
      (o = f * h),
      t.copy(n).addScaledVector(ri, a).addScaledVector(ai, o)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const qo = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  yn = { h: 0, s: 0, l: 0 },
  es = { h: 0, s: 0, l: 0 };
function ir(i, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? i + (e - i) * 6 * t
      : t < 1 / 2
        ? e
        : t < 2 / 3
          ? i + (e - i) * 6 * (2 / 3 - t)
          : i
  );
}
class $e {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(e, t, n)
    );
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const s = e;
      s && s.isColor
        ? this.copy(s)
        : typeof s == "number"
          ? this.setHex(s)
          : typeof s == "string" && this.setStyle(s);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return ((this.r = e), (this.g = e), (this.b = e), this);
  }
  setHex(e, t = kt) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      We.colorSpaceToWorking(this, t),
      this
    );
  }
  setRGB(e, t, n, s = We.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      We.colorSpaceToWorking(this, s),
      this
    );
  }
  setHSL(e, t, n, s = We.workingColorSpace) {
    if (((e = fc(e, 1)), (t = Oe(t, 0, 1)), (n = Oe(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        a = 2 * n - r;
      ((this.r = ir(a, r, e + 1 / 3)),
        (this.g = ir(a, r, e)),
        (this.b = ir(a, r, e - 1 / 3)));
    }
    return (We.colorSpaceToWorking(this, s), this);
  }
  setStyle(e, t = kt) {
    function n(r) {
      r !== void 0 &&
        parseFloat(r) < 1 &&
        De("Color: Alpha component of " + e + " will be ignored.");
    }
    let s;
    if ((s = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let r;
      const a = s[1],
        o = s[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (
            (r =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o,
              ))
          )
            return (
              n(r[4]),
              this.setRGB(
                Math.min(255, parseInt(r[1], 10)) / 255,
                Math.min(255, parseInt(r[2], 10)) / 255,
                Math.min(255, parseInt(r[3], 10)) / 255,
                t,
              )
            );
          if (
            (r =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o,
              ))
          )
            return (
              n(r[4]),
              this.setRGB(
                Math.min(100, parseInt(r[1], 10)) / 100,
                Math.min(100, parseInt(r[2], 10)) / 100,
                Math.min(100, parseInt(r[3], 10)) / 100,
                t,
              )
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (r =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o,
              ))
          )
            return (
              n(r[4]),
              this.setHSL(
                parseFloat(r[1]) / 360,
                parseFloat(r[2]) / 100,
                parseFloat(r[3]) / 100,
                t,
              )
            );
          break;
        default:
          De("Color: Unknown color model " + e);
      }
    } else if ((s = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const r = s[1],
        a = r.length;
      if (a === 3)
        return this.setRGB(
          parseInt(r.charAt(0), 16) / 15,
          parseInt(r.charAt(1), 16) / 15,
          parseInt(r.charAt(2), 16) / 15,
          t,
        );
      if (a === 6) return this.setHex(parseInt(r, 16), t);
      De("Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = kt) {
    const n = qo[e.toLowerCase()];
    return (
      n !== void 0 ? this.setHex(n, t) : De("Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return ((this.r = e.r), (this.g = e.g), (this.b = e.b), this);
  }
  copySRGBToLinear(e) {
    return ((this.r = pn(e.r)), (this.g = pn(e.g)), (this.b = pn(e.b)), this);
  }
  copyLinearToSRGB(e) {
    return ((this.r = xi(e.r)), (this.g = xi(e.g)), (this.b = xi(e.b)), this);
  }
  convertSRGBToLinear() {
    return (this.copySRGBToLinear(this), this);
  }
  convertLinearToSRGB() {
    return (this.copyLinearToSRGB(this), this);
  }
  getHex(e = kt) {
    return (
      We.workingToColorSpace(Mt.copy(this), e),
      Math.round(Oe(Mt.r * 255, 0, 255)) * 65536 +
        Math.round(Oe(Mt.g * 255, 0, 255)) * 256 +
        Math.round(Oe(Mt.b * 255, 0, 255))
    );
  }
  getHexString(e = kt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = We.workingColorSpace) {
    We.workingToColorSpace(Mt.copy(this), t);
    const n = Mt.r,
      s = Mt.g,
      r = Mt.b,
      a = Math.max(n, s, r),
      o = Math.min(n, s, r);
    let c, l;
    const u = (o + a) / 2;
    if (o === a) ((c = 0), (l = 0));
    else {
      const d = a - o;
      switch (((l = u <= 0.5 ? d / (a + o) : d / (2 - a - o)), a)) {
        case n:
          c = (s - r) / d + (s < r ? 6 : 0);
          break;
        case s:
          c = (r - n) / d + 2;
          break;
        case r:
          c = (n - s) / d + 4;
          break;
      }
      c /= 6;
    }
    return ((e.h = c), (e.s = l), (e.l = u), e);
  }
  getRGB(e, t = We.workingColorSpace) {
    return (
      We.workingToColorSpace(Mt.copy(this), t),
      (e.r = Mt.r),
      (e.g = Mt.g),
      (e.b = Mt.b),
      e
    );
  }
  getStyle(e = kt) {
    We.workingToColorSpace(Mt.copy(this), e);
    const t = Mt.r,
      n = Mt.g,
      s = Mt.b;
    return e !== kt
      ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`
      : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(s * 255)})`;
  }
  offsetHSL(e, t, n) {
    return (this.getHSL(yn), this.setHSL(yn.h + e, yn.s + t, yn.l + n));
  }
  add(e) {
    return ((this.r += e.r), (this.g += e.g), (this.b += e.b), this);
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r),
      (this.g = e.g + t.g),
      (this.b = e.b + t.b),
      this
    );
  }
  addScalar(e) {
    return ((this.r += e), (this.g += e), (this.b += e), this);
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return ((this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this);
  }
  multiplyScalar(e) {
    return ((this.r *= e), (this.g *= e), (this.b *= e), this);
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    (this.getHSL(yn), e.getHSL(es));
    const n = zs(yn.h, es.h, t),
      s = zs(yn.s, es.s, t),
      r = zs(yn.l, es.l, t);
    return (this.setHSL(n, s, r), this);
  }
  setFromVector3(e) {
    return ((this.r = e.x), (this.g = e.y), (this.b = e.z), this);
  }
  applyMatrix3(e) {
    const t = this.r,
      n = this.g,
      s = this.b,
      r = e.elements;
    return (
      (this.r = r[0] * t + r[3] * n + r[6] * s),
      (this.g = r[1] * t + r[4] * n + r[7] * s),
      (this.b = r[2] * t + r[5] * n + r[8] * s),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return ((this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this);
  }
  toArray(e = [], t = 0) {
    return ((e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e);
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)),
      (this.g = e.getY(t)),
      (this.b = e.getZ(t)),
      this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    (yield this.r, yield this.g, yield this.b);
  }
}
const Mt = new $e();
$e.NAMES = qo;
let Cc = 0;
class Ds extends Kn {
  constructor() {
    (super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: Cc++ }),
      (this.uuid = ki()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = mi),
      (this.side = Rn),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = mr),
      (this.blendDst = xr),
      (this.blendEquation = kn),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new $e(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = _i),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = Da),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = $n),
      (this.stencilZFail = $n),
      (this.stencilZPass = $n),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.allowOverride = !0),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0));
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    (this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e));
  }
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          De(`Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const s = this[t];
        if (s === void 0) {
          De(`Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        s && s.isColor
          ? s.set(n)
          : s && s.isVector3 && n && n.isVector3
            ? s.copy(n)
            : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.7,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    ((n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity !== void 0 &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.sheenColorMap &&
        this.sheenColorMap.isTexture &&
        (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid),
      this.sheenRoughnessMap &&
        this.sheenRoughnessMap.isTexture &&
        (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid),
      this.dispersion !== void 0 && (n.dispersion = this.dispersion),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
      this.anisotropyRotation !== void 0 &&
        (n.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapRotation !== void 0 &&
        (n.envMapRotation = this.envMapRotation.toArray()),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== mi && (n.blending = this.blending),
      this.side !== Rn && (n.side = this.side),
      this.vertexColors === !0 && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = !0),
      this.blendSrc !== mr && (n.blendSrc = this.blendSrc),
      this.blendDst !== xr && (n.blendDst = this.blendDst),
      this.blendEquation !== kn && (n.blendEquation = this.blendEquation),
      this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha),
      this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha),
      this.blendEquationAlpha !== null &&
        (n.blendEquationAlpha = this.blendEquationAlpha),
      this.blendColor &&
        this.blendColor.isColor &&
        (n.blendColor = this.blendColor.getHex()),
      this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha),
      this.depthFunc !== _i && (n.depthFunc = this.depthFunc),
      this.depthTest === !1 && (n.depthTest = this.depthTest),
      this.depthWrite === !1 && (n.depthWrite = this.depthWrite),
      this.colorWrite === !1 && (n.colorWrite = this.colorWrite),
      this.stencilWriteMask !== 255 &&
        (n.stencilWriteMask = this.stencilWriteMask),
      this.stencilFunc !== Da && (n.stencilFunc = this.stencilFunc),
      this.stencilRef !== 0 && (n.stencilRef = this.stencilRef),
      this.stencilFuncMask !== 255 &&
        (n.stencilFuncMask = this.stencilFuncMask),
      this.stencilFail !== $n && (n.stencilFail = this.stencilFail),
      this.stencilZFail !== $n && (n.stencilZFail = this.stencilZFail),
      this.stencilZPass !== $n && (n.stencilZPass = this.stencilZPass),
      this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaHash === !0 && (n.alphaHash = !0),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = !0),
      this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0),
      this.forceSinglePass === !0 && (n.forceSinglePass = !0),
      this.wireframe === !0 && (n.wireframe = !0),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = !0),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData));
    function s(r) {
      const a = [];
      for (const o in r) {
        const c = r[o];
        (delete c.metadata, a.push(c));
      }
      return a;
    }
    if (t) {
      const r = s(e.textures),
        a = s(e.images);
      (r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a));
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    ((this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      this.blendColor.copy(e.blendColor),
      (this.blendAlpha = e.blendAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite));
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const s = t.length;
      n = new Array(s);
      for (let r = 0; r !== s; ++r) n[r] = t[r].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaHash = e.alphaHash),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class it extends Ds {
  constructor(e) {
    (super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new $e(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new xn()),
      (this.combine = Fo),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const dt = new F(),
  ts = new Ie();
let Rc = 0;
class en {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array.",
      );
    ((this.isBufferAttribute = !0),
      Object.defineProperty(this, "id", { value: Rc++ }),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n),
      (this.usage = La),
      (this.updateRanges = []),
      (this.gpuType = dn),
      (this.version = 0));
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return ((this.usage = e), this);
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      (this.gpuType = e.gpuType),
      this
    );
  }
  copyAt(e, t, n) {
    ((e *= this.itemSize), (n *= t.itemSize));
    for (let s = 0, r = this.itemSize; s < r; s++)
      this.array[e + s] = t.array[n + s];
    return this;
  }
  copyArray(e) {
    return (this.array.set(e), this);
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        (ts.fromBufferAttribute(this, t),
          ts.applyMatrix3(e),
          this.setXY(t, ts.x, ts.y));
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        (dt.fromBufferAttribute(this, t),
          dt.applyMatrix3(e),
          this.setXYZ(t, dt.x, dt.y, dt.z));
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      (dt.fromBufferAttribute(this, t),
        dt.applyMatrix4(e),
        this.setXYZ(t, dt.x, dt.y, dt.z));
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      (dt.fromBufferAttribute(this, t),
        dt.applyNormalMatrix(e),
        this.setXYZ(t, dt.x, dt.y, dt.z));
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      (dt.fromBufferAttribute(this, t),
        dt.transformDirection(e),
        this.setXYZ(t, dt.x, dt.y, dt.z));
    return this;
  }
  set(e, t = 0) {
    return (this.array.set(e, t), this);
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return (this.normalized && (n = Ci(n, this.array)), n);
  }
  setComponent(e, t, n) {
    return (
      this.normalized && (n = wt(n, this.array)),
      (this.array[e * this.itemSize + t] = n),
      this
    );
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return (this.normalized && (t = Ci(t, this.array)), t);
  }
  setX(e, t) {
    return (
      this.normalized && (t = wt(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return (this.normalized && (t = Ci(t, this.array)), t);
  }
  setY(e, t) {
    return (
      this.normalized && (t = wt(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return (this.normalized && (t = Ci(t, this.array)), t);
  }
  setZ(e, t) {
    return (
      this.normalized && (t = wt(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return (this.normalized && (t = Ci(t, this.array)), t);
  }
  setW(e, t) {
    return (
      this.normalized && (t = wt(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = wt(t, this.array)), (n = wt(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, s) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = wt(t, this.array)),
        (n = wt(n, this.array)),
        (s = wt(s, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = s),
      this
    );
  }
  setXYZW(e, t, n, s, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = wt(t, this.array)),
        (n = wt(n, this.array)),
        (s = wt(s, this.array)),
        (r = wt(r, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = s),
      (this.array[e + 3] = r),
      this
    );
  }
  onUpload(e) {
    return ((this.onUploadCallback = e), this);
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== La && (e.usage = this.usage),
      e
    );
  }
}
class Ko extends en {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class jo extends en {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Hn extends en {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Pc = 0;
const zt = new ft(),
  sr = new Ot(),
  oi = new F(),
  Nt = new Vi(),
  Li = new Vi(),
  _t = new F();
class Dn extends Kn {
  constructor() {
    (super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: Pc++ }),
      (this.uuid = ki()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.indirect = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {}));
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (Yo(e) ? jo : Ko)(e, 1))
        : (this.index = e),
      this
    );
  }
  setIndirect(e) {
    return ((this.indirect = e), this);
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return ((this.attributes[e] = t), this);
  }
  deleteAttribute(e) {
    return (delete this.attributes[e], this);
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    ((this.drawRange.start = e), (this.drawRange.count = t));
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new Ue().getNormalMatrix(e);
      (n.applyNormalMatrix(r), (n.needsUpdate = !0));
    }
    const s = this.attributes.tangent;
    return (
      s !== void 0 && (s.transformDirection(e), (s.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return (zt.makeRotationFromQuaternion(e), this.applyMatrix4(zt), this);
  }
  rotateX(e) {
    return (zt.makeRotationX(e), this.applyMatrix4(zt), this);
  }
  rotateY(e) {
    return (zt.makeRotationY(e), this.applyMatrix4(zt), this);
  }
  rotateZ(e) {
    return (zt.makeRotationZ(e), this.applyMatrix4(zt), this);
  }
  translate(e, t, n) {
    return (zt.makeTranslation(e, t, n), this.applyMatrix4(zt), this);
  }
  scale(e, t, n) {
    return (zt.makeScale(e, t, n), this.applyMatrix4(zt), this);
  }
  lookAt(e) {
    return (
      sr.lookAt(e),
      sr.updateMatrix(),
      this.applyMatrix4(sr.matrix),
      this
    );
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(oi).negate(),
      this.translate(oi.x, oi.y, oi.z),
      this
    );
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let s = 0, r = e.length; s < r; s++) {
        const a = e[s];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new Hn(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let s = 0; s < n; s++) {
        const r = e[s];
        t.setXYZ(s, r.x, r.y, r.z || 0);
      }
      (e.length > t.count &&
        De(
          "BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.",
        ),
        (t.needsUpdate = !0));
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Vi());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      (ht(
        "BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",
        this,
      ),
        this.boundingBox.set(
          new F(-1 / 0, -1 / 0, -1 / 0),
          new F(1 / 0, 1 / 0, 1 / 0),
        ));
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, s = t.length; n < s; n++) {
          const r = t[n];
          (Nt.setFromBufferAttribute(r),
            this.morphTargetsRelative
              ? (_t.addVectors(this.boundingBox.min, Nt.min),
                this.boundingBox.expandByPoint(_t),
                _t.addVectors(this.boundingBox.max, Nt.max),
                this.boundingBox.expandByPoint(_t))
              : (this.boundingBox.expandByPoint(Nt.min),
                this.boundingBox.expandByPoint(Nt.max)));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      ht(
        'BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this,
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new pa());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      (ht(
        "BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",
        this,
      ),
        this.boundingSphere.set(new F(), 1 / 0));
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((Nt.setFromBufferAttribute(e), t))
        for (let r = 0, a = t.length; r < a; r++) {
          const o = t[r];
          (Li.setFromBufferAttribute(o),
            this.morphTargetsRelative
              ? (_t.addVectors(Nt.min, Li.min),
                Nt.expandByPoint(_t),
                _t.addVectors(Nt.max, Li.max),
                Nt.expandByPoint(_t))
              : (Nt.expandByPoint(Li.min), Nt.expandByPoint(Li.max)));
        }
      Nt.getCenter(n);
      let s = 0;
      for (let r = 0, a = e.count; r < a; r++)
        (_t.fromBufferAttribute(e, r),
          (s = Math.max(s, n.distanceToSquared(_t))));
      if (t)
        for (let r = 0, a = t.length; r < a; r++) {
          const o = t[r],
            c = this.morphTargetsRelative;
          for (let l = 0, u = o.count; l < u; l++)
            (_t.fromBufferAttribute(o, l),
              c && (oi.fromBufferAttribute(e, l), _t.add(oi)),
              (s = Math.max(s, n.distanceToSquared(_t))));
        }
      ((this.boundingSphere.radius = Math.sqrt(s)),
        isNaN(this.boundingSphere.radius) &&
          ht(
            'BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this,
          ));
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      ht(
        "BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)",
      );
      return;
    }
    const n = t.position,
      s = t.normal,
      r = t.uv;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new en(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"),
      o = [],
      c = [];
    for (let z = 0; z < n.count; z++) ((o[z] = new F()), (c[z] = new F()));
    const l = new F(),
      u = new F(),
      d = new F(),
      f = new Ie(),
      m = new Ie(),
      g = new Ie(),
      M = new F(),
      p = new F();
    function h(z, S, v) {
      (l.fromBufferAttribute(n, z),
        u.fromBufferAttribute(n, S),
        d.fromBufferAttribute(n, v),
        f.fromBufferAttribute(r, z),
        m.fromBufferAttribute(r, S),
        g.fromBufferAttribute(r, v),
        u.sub(l),
        d.sub(l),
        m.sub(f),
        g.sub(f));
      const R = 1 / (m.x * g.y - g.x * m.y);
      isFinite(R) &&
        (M.copy(u)
          .multiplyScalar(g.y)
          .addScaledVector(d, -m.y)
          .multiplyScalar(R),
        p
          .copy(d)
          .multiplyScalar(m.x)
          .addScaledVector(u, -g.x)
          .multiplyScalar(R),
        o[z].add(M),
        o[S].add(M),
        o[v].add(M),
        c[z].add(p),
        c[S].add(p),
        c[v].add(p));
    }
    let T = this.groups;
    T.length === 0 && (T = [{ start: 0, count: e.count }]);
    for (let z = 0, S = T.length; z < S; ++z) {
      const v = T[z],
        R = v.start,
        B = v.count;
      for (let V = R, H = R + B; V < H; V += 3)
        h(e.getX(V + 0), e.getX(V + 1), e.getX(V + 2));
    }
    const y = new F(),
      C = new F(),
      D = new F(),
      E = new F();
    function P(z) {
      (D.fromBufferAttribute(s, z), E.copy(D));
      const S = o[z];
      (y.copy(S),
        y.sub(D.multiplyScalar(D.dot(S))).normalize(),
        C.crossVectors(E, S));
      const R = C.dot(c[z]) < 0 ? -1 : 1;
      a.setXYZW(z, y.x, y.y, y.z, R);
    }
    for (let z = 0, S = T.length; z < S; ++z) {
      const v = T[z],
        R = v.start,
        B = v.count;
      for (let V = R, H = R + B; V < H; V += 3)
        (P(e.getX(V + 0)), P(e.getX(V + 1)), P(e.getX(V + 2)));
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        ((n = new en(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", n));
      else for (let f = 0, m = n.count; f < m; f++) n.setXYZ(f, 0, 0, 0);
      const s = new F(),
        r = new F(),
        a = new F(),
        o = new F(),
        c = new F(),
        l = new F(),
        u = new F(),
        d = new F();
      if (e)
        for (let f = 0, m = e.count; f < m; f += 3) {
          const g = e.getX(f + 0),
            M = e.getX(f + 1),
            p = e.getX(f + 2);
          (s.fromBufferAttribute(t, g),
            r.fromBufferAttribute(t, M),
            a.fromBufferAttribute(t, p),
            u.subVectors(a, r),
            d.subVectors(s, r),
            u.cross(d),
            o.fromBufferAttribute(n, g),
            c.fromBufferAttribute(n, M),
            l.fromBufferAttribute(n, p),
            o.add(u),
            c.add(u),
            l.add(u),
            n.setXYZ(g, o.x, o.y, o.z),
            n.setXYZ(M, c.x, c.y, c.z),
            n.setXYZ(p, l.x, l.y, l.z));
        }
      else
        for (let f = 0, m = t.count; f < m; f += 3)
          (s.fromBufferAttribute(t, f + 0),
            r.fromBufferAttribute(t, f + 1),
            a.fromBufferAttribute(t, f + 2),
            u.subVectors(a, r),
            d.subVectors(s, r),
            u.cross(d),
            n.setXYZ(f + 0, u.x, u.y, u.z),
            n.setXYZ(f + 1, u.x, u.y, u.z),
            n.setXYZ(f + 2, u.x, u.y, u.z));
      (this.normalizeNormals(), (n.needsUpdate = !0));
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      (_t.fromBufferAttribute(e, t),
        _t.normalize(),
        e.setXYZ(t, _t.x, _t.y, _t.z));
  }
  toNonIndexed() {
    function e(o, c) {
      const l = o.array,
        u = o.itemSize,
        d = o.normalized,
        f = new l.constructor(c.length * u);
      let m = 0,
        g = 0;
      for (let M = 0, p = c.length; M < p; M++) {
        o.isInterleavedBufferAttribute
          ? (m = c[M] * o.data.stride + o.offset)
          : (m = c[M] * u);
        for (let h = 0; h < u; h++) f[g++] = l[m++];
      }
      return new en(f, u, d);
    }
    if (this.index === null)
      return (
        De(
          "BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.",
        ),
        this
      );
    const t = new Dn(),
      n = this.index.array,
      s = this.attributes;
    for (const o in s) {
      const c = s[o],
        l = e(c, n);
      t.setAttribute(o, l);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const c = [],
        l = r[o];
      for (let u = 0, d = l.length; u < d; u++) {
        const f = l[u],
          m = e(f, n);
        c.push(m);
      }
      t.morphAttributes[o] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.7,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const c = this.parameters;
      for (const l in c) c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const s = {};
    let r = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c],
        u = [];
      for (let d = 0, f = l.length; d < f; d++) {
        const m = l[d];
        u.push(m.toJSON(e.data));
      }
      u.length > 0 && ((s[c] = u), (r = !0));
    }
    r &&
      ((e.data.morphAttributes = s),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return (o !== null && (e.data.boundingSphere = o.toJSON()), e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    ((this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null));
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone());
    const s = e.attributes;
    for (const l in s) {
      const u = s[l];
      this.setAttribute(l, u.clone(t));
    }
    const r = e.morphAttributes;
    for (const l in r) {
      const u = [],
        d = r[l];
      for (let f = 0, m = d.length; f < m; f++) u.push(d[f].clone(t));
      this.morphAttributes[l] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let l = 0, u = a.length; l < u; l++) {
      const d = a[l];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = e.boundingSphere;
    return (
      c !== null && (this.boundingSphere = c.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Za = new ft(),
  Fn = new ma(),
  ns = new pa(),
  qa = new F(),
  is = new F(),
  ss = new F(),
  rs = new F(),
  rr = new F(),
  as = new F(),
  Ka = new F(),
  os = new F();
class Dt extends Ot {
  constructor(e = new Dn(), t = new it()) {
    (super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      (this.morphTargetDictionary = void 0),
      (this.morphTargetInfluences = void 0),
      (this.count = 1),
      this.updateMorphTargets());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary,
        )),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const s = t[n[0]];
      if (s !== void 0) {
        ((this.morphTargetInfluences = []), (this.morphTargetDictionary = {}));
        for (let r = 0, a = s.length; r < a; r++) {
          const o = s[r].name || String(r);
          (this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = r));
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry,
      s = n.attributes.position,
      r = n.morphAttributes.position,
      a = n.morphTargetsRelative;
    t.fromBufferAttribute(s, e);
    const o = this.morphTargetInfluences;
    if (r && o) {
      as.set(0, 0, 0);
      for (let c = 0, l = r.length; c < l; c++) {
        const u = o[c],
          d = r[c];
        u !== 0 &&
          (rr.fromBufferAttribute(d, e),
          a ? as.addScaledVector(rr, u) : as.addScaledVector(rr.sub(t), u));
      }
      t.add(as);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry,
      s = this.material,
      r = this.matrixWorld;
    s !== void 0 &&
      (n.boundingSphere === null && n.computeBoundingSphere(),
      ns.copy(n.boundingSphere),
      ns.applyMatrix4(r),
      Fn.copy(e.ray).recast(e.near),
      !(
        ns.containsPoint(Fn.origin) === !1 &&
        (Fn.intersectSphere(ns, qa) === null ||
          Fn.origin.distanceToSquared(qa) > (e.far - e.near) ** 2)
      ) &&
        (Za.copy(r).invert(),
        Fn.copy(e.ray).applyMatrix4(Za),
        !(n.boundingBox !== null && Fn.intersectsBox(n.boundingBox) === !1) &&
          this._computeIntersections(e, t, Fn)));
  }
  _computeIntersections(e, t, n) {
    let s;
    const r = this.geometry,
      a = this.material,
      o = r.index,
      c = r.attributes.position,
      l = r.attributes.uv,
      u = r.attributes.uv1,
      d = r.attributes.normal,
      f = r.groups,
      m = r.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, M = f.length; g < M; g++) {
          const p = f[g],
            h = a[p.materialIndex],
            T = Math.max(p.start, m.start),
            y = Math.min(
              o.count,
              Math.min(p.start + p.count, m.start + m.count),
            );
          for (let C = T, D = y; C < D; C += 3) {
            const E = o.getX(C),
              P = o.getX(C + 1),
              z = o.getX(C + 2);
            ((s = ls(this, h, e, n, l, u, d, E, P, z)),
              s &&
                ((s.faceIndex = Math.floor(C / 3)),
                (s.face.materialIndex = p.materialIndex),
                t.push(s)));
          }
        }
      else {
        const g = Math.max(0, m.start),
          M = Math.min(o.count, m.start + m.count);
        for (let p = g, h = M; p < h; p += 3) {
          const T = o.getX(p),
            y = o.getX(p + 1),
            C = o.getX(p + 2);
          ((s = ls(this, a, e, n, l, u, d, T, y, C)),
            s && ((s.faceIndex = Math.floor(p / 3)), t.push(s)));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(a))
        for (let g = 0, M = f.length; g < M; g++) {
          const p = f[g],
            h = a[p.materialIndex],
            T = Math.max(p.start, m.start),
            y = Math.min(
              c.count,
              Math.min(p.start + p.count, m.start + m.count),
            );
          for (let C = T, D = y; C < D; C += 3) {
            const E = C,
              P = C + 1,
              z = C + 2;
            ((s = ls(this, h, e, n, l, u, d, E, P, z)),
              s &&
                ((s.faceIndex = Math.floor(C / 3)),
                (s.face.materialIndex = p.materialIndex),
                t.push(s)));
          }
        }
      else {
        const g = Math.max(0, m.start),
          M = Math.min(c.count, m.start + m.count);
        for (let p = g, h = M; p < h; p += 3) {
          const T = p,
            y = p + 1,
            C = p + 2;
          ((s = ls(this, a, e, n, l, u, d, T, y, C)),
            s && ((s.faceIndex = Math.floor(p / 3)), t.push(s)));
        }
      }
  }
}
function Dc(i, e, t, n, s, r, a, o) {
  let c;
  if (
    (e.side === Pt
      ? (c = n.intersectTriangle(a, r, s, !0, o))
      : (c = n.intersectTriangle(s, r, a, e.side === Rn, o)),
    c === null)
  )
    return null;
  (os.copy(o), os.applyMatrix4(i.matrixWorld));
  const l = t.ray.origin.distanceTo(os);
  return l < t.near || l > t.far
    ? null
    : { distance: l, point: os.clone(), object: i };
}
function ls(i, e, t, n, s, r, a, o, c, l) {
  (i.getVertexPosition(o, is),
    i.getVertexPosition(c, ss),
    i.getVertexPosition(l, rs));
  const u = Dc(i, e, t, n, is, ss, rs, Ka);
  if (u) {
    const d = new F();
    (Zt.getBarycoord(Ka, is, ss, rs, d),
      s && (u.uv = Zt.getInterpolatedAttribute(s, o, c, l, d, new Ie())),
      r && (u.uv1 = Zt.getInterpolatedAttribute(r, o, c, l, d, new Ie())),
      a &&
        ((u.normal = Zt.getInterpolatedAttribute(a, o, c, l, d, new F())),
        u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1)));
    const f = { a: o, b: c, c: l, normal: new F(), materialIndex: 0 };
    (Zt.getNormal(is, ss, rs, f.normal), (u.face = f), (u.barycoord = d));
  }
  return u;
}
class Kt extends Dn {
  constructor(e = 1, t = 1, n = 1, s = 1, r = 1, a = 1) {
    (super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: s,
        heightSegments: r,
        depthSegments: a,
      }));
    const o = this;
    ((s = Math.floor(s)), (r = Math.floor(r)), (a = Math.floor(a)));
    const c = [],
      l = [],
      u = [],
      d = [];
    let f = 0,
      m = 0;
    (g("z", "y", "x", -1, -1, n, t, e, a, r, 0),
      g("z", "y", "x", 1, -1, n, t, -e, a, r, 1),
      g("x", "z", "y", 1, 1, e, n, t, s, a, 2),
      g("x", "z", "y", 1, -1, e, n, -t, s, a, 3),
      g("x", "y", "z", 1, -1, e, t, n, s, r, 4),
      g("x", "y", "z", -1, -1, e, t, -n, s, r, 5),
      this.setIndex(c),
      this.setAttribute("position", new Hn(l, 3)),
      this.setAttribute("normal", new Hn(u, 3)),
      this.setAttribute("uv", new Hn(d, 2)));
    function g(M, p, h, T, y, C, D, E, P, z, S) {
      const v = C / P,
        R = D / z,
        B = C / 2,
        V = D / 2,
        H = E / 2,
        q = P + 1,
        Y = z + 1;
      let ne = 0,
        G = 0;
      const te = new F();
      for (let re = 0; re < Y; re++) {
        const Se = re * R - V;
        for (let Ge = 0; Ge < q; Ge++) {
          const Xe = Ge * v - B;
          ((te[M] = Xe * T),
            (te[p] = Se * y),
            (te[h] = H),
            l.push(te.x, te.y, te.z),
            (te[M] = 0),
            (te[p] = 0),
            (te[h] = E > 0 ? 1 : -1),
            u.push(te.x, te.y, te.z),
            d.push(Ge / P),
            d.push(1 - re / z),
            (ne += 1));
        }
      }
      for (let re = 0; re < z; re++)
        for (let Se = 0; Se < P; Se++) {
          const Ge = f + Se + q * re,
            Xe = f + Se + q * (re + 1),
            Qe = f + (Se + 1) + q * (re + 1),
            et = f + (Se + 1) + q * re;
          (c.push(Ge, Xe, et), c.push(Xe, Qe, et), (G += 6));
        }
      (o.addGroup(m, G, S), (m += G), (f += ne));
    }
  }
  copy(e) {
    return (
      super.copy(e),
      (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  static fromJSON(e) {
    return new Kt(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments,
    );
  }
}
function Si(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const s = i[t][n];
      s &&
      (s.isColor ||
        s.isMatrix3 ||
        s.isMatrix4 ||
        s.isVector2 ||
        s.isVector3 ||
        s.isVector4 ||
        s.isTexture ||
        s.isQuaternion)
        ? s.isRenderTargetTexture
          ? (De(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().",
            ),
            (e[t][n] = null))
          : (e[t][n] = s.clone())
        : Array.isArray(s)
          ? (e[t][n] = s.slice())
          : (e[t][n] = s);
    }
  }
  return e;
}
function yt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = Si(i[t]);
    for (const s in n) e[s] = n[s];
  }
  return e;
}
function Lc(i) {
  const e = [];
  for (let t = 0; t < i.length; t++) e.push(i[t].clone());
  return e;
}
function $o(i) {
  const e = i.getRenderTarget();
  return e === null
    ? i.outputColorSpace
    : e.isXRRenderTarget === !0
      ? e.texture.colorSpace
      : We.workingColorSpace;
}
const Uc = { clone: Si, merge: yt };
var Ic = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  Nc = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class _n extends Ds {
  constructor(e) {
    (super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = Ic),
      (this.fragmentShader = Nc),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = { clipCullDistance: !1, multiDraw: !1 }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = Si(e.uniforms)),
      (this.uniformsGroups = Lc(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    ((t.glslVersion = this.glslVersion), (t.uniforms = {}));
    for (const s in this.uniforms) {
      const a = this.uniforms[s].value;
      a && a.isTexture
        ? (t.uniforms[s] = { type: "t", value: a.toJSON(e).uuid })
        : a && a.isColor
          ? (t.uniforms[s] = { type: "c", value: a.getHex() })
          : a && a.isVector2
            ? (t.uniforms[s] = { type: "v2", value: a.toArray() })
            : a && a.isVector3
              ? (t.uniforms[s] = { type: "v3", value: a.toArray() })
              : a && a.isVector4
                ? (t.uniforms[s] = { type: "v4", value: a.toArray() })
                : a && a.isMatrix3
                  ? (t.uniforms[s] = { type: "m3", value: a.toArray() })
                  : a && a.isMatrix4
                    ? (t.uniforms[s] = { type: "m4", value: a.toArray() })
                    : (t.uniforms[s] = { value: a });
    }
    (Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader),
      (t.lights = this.lights),
      (t.clipping = this.clipping));
    const n = {};
    for (const s in this.extensions) this.extensions[s] === !0 && (n[s] = !0);
    return (Object.keys(n).length > 0 && (t.extensions = n), t);
  }
}
class Jo extends Ot {
  constructor() {
    (super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new ft()),
      (this.projectionMatrix = new ft()),
      (this.projectionMatrixInverse = new ft()),
      (this.coordinateSystem = Qt),
      (this._reversedDepth = !1));
  }
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      (this.coordinateSystem = e.coordinateSystem),
      this
    );
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    (super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert());
  }
  updateWorldMatrix(e, t) {
    (super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert());
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const En = new F(),
  ja = new Ie(),
  $a = new Ie();
class Vt extends Jo {
  constructor(e = 50, t = 1, n = 0.1, s = 2e3) {
    (super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = s),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    ((this.fov = na * 2 * Math.atan(t)), this.updateProjectionMatrix());
  }
  getFocalLength() {
    const e = Math.tan(gs * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return na * 2 * Math.atan(Math.tan(gs * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    (En.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      t.set(En.x, En.y).multiplyScalar(-e / En.z),
      En.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      n.set(En.x, En.y).multiplyScalar(-e / En.z));
  }
  getViewSize(e, t) {
    return (this.getViewBounds(e, ja, $a), t.subVectors($a, ja));
  }
  setViewOffset(e, t, n, s, r, a) {
    ((this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = s),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix());
  }
  clearViewOffset() {
    (this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix());
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(gs * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      s = this.aspect * n,
      r = -0.5 * s;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth,
        l = a.fullHeight;
      ((r += (a.offsetX * s) / c),
        (t -= (a.offsetY * n) / l),
        (s *= a.width / c),
        (n *= a.height / l));
    }
    const o = this.filmOffset;
    (o !== 0 && (r += (e * o) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        r,
        r + s,
        t,
        t - n,
        e,
        this.far,
        this.coordinateSystem,
        this.reversedDepth,
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert());
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const li = -90,
  ci = 1;
class Fc extends Ot {
  constructor(e, t, n) {
    (super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = n),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0));
    const s = new Vt(li, ci, e, t);
    ((s.layers = this.layers), this.add(s));
    const r = new Vt(li, ci, e, t);
    ((r.layers = this.layers), this.add(r));
    const a = new Vt(li, ci, e, t);
    ((a.layers = this.layers), this.add(a));
    const o = new Vt(li, ci, e, t);
    ((o.layers = this.layers), this.add(o));
    const c = new Vt(li, ci, e, t);
    ((c.layers = this.layers), this.add(c));
    const l = new Vt(li, ci, e, t);
    ((l.layers = this.layers), this.add(l));
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem,
      t = this.children.concat(),
      [n, s, r, a, o, c] = t;
    for (const l of t) this.remove(l);
    if (e === Qt)
      (n.up.set(0, 1, 0),
        n.lookAt(1, 0, 0),
        s.up.set(0, 1, 0),
        s.lookAt(-1, 0, 0),
        r.up.set(0, 0, -1),
        r.lookAt(0, 1, 0),
        a.up.set(0, 0, 1),
        a.lookAt(0, -1, 0),
        o.up.set(0, 1, 0),
        o.lookAt(0, 0, 1),
        c.up.set(0, 1, 0),
        c.lookAt(0, 0, -1));
    else if (e === Ss)
      (n.up.set(0, -1, 0),
        n.lookAt(-1, 0, 0),
        s.up.set(0, -1, 0),
        s.lookAt(1, 0, 0),
        r.up.set(0, 0, 1),
        r.lookAt(0, 1, 0),
        a.up.set(0, 0, -1),
        a.lookAt(0, -1, 0),
        o.up.set(0, -1, 0),
        o.lookAt(0, 0, 1),
        c.up.set(0, -1, 0),
        c.lookAt(0, 0, -1));
    else
      throw new Error(
        "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
          e,
      );
    for (const l of t) (this.add(l), l.updateMatrixWorld());
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: s } = this;
    this.coordinateSystem !== e.coordinateSystem &&
      ((this.coordinateSystem = e.coordinateSystem),
      this.updateCoordinateSystem());
    const [r, a, o, c, l, u] = this.children,
      d = e.getRenderTarget(),
      f = e.getActiveCubeFace(),
      m = e.getActiveMipmapLevel(),
      g = e.xr.enabled;
    e.xr.enabled = !1;
    const M = n.texture.generateMipmaps;
    ((n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0, s),
      e.render(t, r),
      e.setRenderTarget(n, 1, s),
      e.render(t, a),
      e.setRenderTarget(n, 2, s),
      e.render(t, o),
      e.setRenderTarget(n, 3, s),
      e.render(t, c),
      e.setRenderTarget(n, 4, s),
      e.render(t, l),
      (n.texture.generateMipmaps = M),
      e.setRenderTarget(n, 5, s),
      e.render(t, u),
      e.setRenderTarget(d, f, m),
      (e.xr.enabled = g),
      (n.texture.needsPMREMUpdate = !0));
  }
}
class Qo extends Et {
  constructor(e = [], t = gi, n, s, r, a, o, c, l, u) {
    (super(e, t, n, s, r, a, o, c, l, u),
      (this.isCubeTexture = !0),
      (this.flipY = !1));
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Oc extends Yn {
  constructor(e = 1, t = {}) {
    (super(e, e, t), (this.isWebGLCubeRenderTarget = !0));
    const n = { width: e, height: e, depth: 1 },
      s = [n, n, n, n, n, n];
    ((this.texture = new Qo(s)),
      this._setTextureOptions(t),
      (this.texture.isRenderTargetTexture = !0));
  }
  fromEquirectangularTexture(e, t) {
    ((this.texture.type = t.type),
      (this.texture.colorSpace = t.colorSpace),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter));
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      s = new Kt(5, 5, 5),
      r = new _n({
        name: "CubemapFromEquirect",
        uniforms: Si(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: Pt,
        blending: fn,
      });
    r.uniforms.tEquirect.value = t;
    const a = new Dt(s, r),
      o = t.minFilter;
    return (
      t.minFilter === Gn && (t.minFilter = Gt),
      new Fc(1, 10, this).update(e, a),
      (t.minFilter = o),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(e, t = !0, n = !0, s = !0) {
    const r = e.getRenderTarget();
    for (let a = 0; a < 6; a++) (e.setRenderTarget(this, a), e.clear(t, n, s));
    e.setRenderTarget(r);
  }
}
class cs extends Ot {
  constructor() {
    (super(), (this.isGroup = !0), (this.type = "Group"));
  }
}
const Bc = { type: "move" };
class ar {
  constructor() {
    ((this._targetRay = null), (this._grip = null), (this._hand = null));
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new cs()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new cs()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new F()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new F())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new cs()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new F()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new F())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return (this.dispatchEvent({ type: "connected", data: e }), this);
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let s = null,
      r = null,
      a = null;
    const o = this._targetRay,
      c = this._grip,
      l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        a = !0;
        for (const M of e.hand.values()) {
          const p = t.getJointPose(M, n),
            h = this._getHandJoint(l, M);
          (p !== null &&
            (h.matrix.fromArray(p.transform.matrix),
            h.matrix.decompose(h.position, h.rotation, h.scale),
            (h.matrixWorldNeedsUpdate = !0),
            (h.jointRadius = p.radius)),
            (h.visible = p !== null));
        }
        const u = l.joints["index-finger-tip"],
          d = l.joints["thumb-tip"],
          f = u.position.distanceTo(d.position),
          m = 0.02,
          g = 0.005;
        l.inputState.pinching && f > m + g
          ? ((l.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !l.inputState.pinching &&
            f <= m - g &&
            ((l.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        c !== null &&
          e.gripSpace &&
          ((r = t.getPose(e.gripSpace, n)),
          r !== null &&
            (c.matrix.fromArray(r.transform.matrix),
            c.matrix.decompose(c.position, c.rotation, c.scale),
            (c.matrixWorldNeedsUpdate = !0),
            r.linearVelocity
              ? ((c.hasLinearVelocity = !0),
                c.linearVelocity.copy(r.linearVelocity))
              : (c.hasLinearVelocity = !1),
            r.angularVelocity
              ? ((c.hasAngularVelocity = !0),
                c.angularVelocity.copy(r.angularVelocity))
              : (c.hasAngularVelocity = !1)));
      o !== null &&
        ((s = t.getPose(e.targetRaySpace, n)),
        s === null && r !== null && (s = r),
        s !== null &&
          (o.matrix.fromArray(s.transform.matrix),
          o.matrix.decompose(o.position, o.rotation, o.scale),
          (o.matrixWorldNeedsUpdate = !0),
          s.linearVelocity
            ? ((o.hasLinearVelocity = !0),
              o.linearVelocity.copy(s.linearVelocity))
            : (o.hasLinearVelocity = !1),
          s.angularVelocity
            ? ((o.hasAngularVelocity = !0),
              o.angularVelocity.copy(s.angularVelocity))
            : (o.hasAngularVelocity = !1),
          this.dispatchEvent(Bc)));
    }
    return (
      o !== null && (o.visible = s !== null),
      c !== null && (c.visible = r !== null),
      l !== null && (l.visible = a !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new cs();
      ((n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (e.joints[t.jointName] = n),
        e.add(n));
    }
    return e.joints[t.jointName];
  }
}
class zc extends Ot {
  constructor() {
    (super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.backgroundRotation = new xn()),
      (this.environmentIntensity = 1),
      (this.environmentRotation = new xn()),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this }),
        ));
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      this.backgroundRotation.copy(e.backgroundRotation),
      (this.environmentIntensity = e.environmentIntensity),
      this.environmentRotation.copy(e.environmentRotation),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (t.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (t.object.backgroundIntensity = this.backgroundIntensity),
      (t.object.backgroundRotation = this.backgroundRotation.toArray()),
      this.environmentIntensity !== 1 &&
        (t.object.environmentIntensity = this.environmentIntensity),
      (t.object.environmentRotation = this.environmentRotation.toArray()),
      t
    );
  }
}
class kc extends Et {
  constructor(e = null, t = 1, n = 1, s, r, a, o, c, l = Ft, u = Ft, d, f) {
    (super(null, a, o, c, l, u, s, r, d, f),
      (this.isDataTexture = !0),
      (this.image = { data: e, width: t, height: n }),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1));
  }
}
const or = new F(),
  Vc = new F(),
  Gc = new Ue();
class Tn {
  constructor(e = new F(1, 0, 0), t = 0) {
    ((this.isPlane = !0), (this.normal = e), (this.constant = t));
  }
  set(e, t) {
    return (this.normal.copy(e), (this.constant = t), this);
  }
  setComponents(e, t, n, s) {
    return (this.normal.set(e, t, n), (this.constant = s), this);
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return (this.normal.copy(e), (this.constant = -t.dot(this.normal)), this);
  }
  setFromCoplanarPoints(e, t, n) {
    const s = or.subVectors(n, t).cross(Vc.subVectors(e, t)).normalize();
    return (this.setFromNormalAndCoplanarPoint(s, e), this);
  }
  copy(e) {
    return (this.normal.copy(e.normal), (this.constant = e.constant), this);
  }
  normalize() {
    const e = 1 / this.normal.length();
    return (this.normal.multiplyScalar(e), (this.constant *= e), this);
  }
  negate() {
    return ((this.constant *= -1), this.normal.negate(), this);
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(or),
      s = this.normal.dot(n);
    if (s === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / s;
    return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(n, r);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Gc.getNormalMatrix(e),
      s = this.coplanarPoint(or).applyMatrix4(e),
      r = this.normal.applyMatrix3(n).normalize();
    return ((this.constant = -s.dot(r)), this);
  }
  translate(e) {
    return ((this.constant -= e.dot(this.normal)), this);
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const On = new pa(),
  Hc = new Ie(0.5, 0.5),
  hs = new F();
class el {
  constructor(
    e = new Tn(),
    t = new Tn(),
    n = new Tn(),
    s = new Tn(),
    r = new Tn(),
    a = new Tn(),
  ) {
    this.planes = [e, t, n, s, r, a];
  }
  set(e, t, n, s, r, a) {
    const o = this.planes;
    return (
      o[0].copy(e),
      o[1].copy(t),
      o[2].copy(n),
      o[3].copy(s),
      o[4].copy(r),
      o[5].copy(a),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = Qt, n = !1) {
    const s = this.planes,
      r = e.elements,
      a = r[0],
      o = r[1],
      c = r[2],
      l = r[3],
      u = r[4],
      d = r[5],
      f = r[6],
      m = r[7],
      g = r[8],
      M = r[9],
      p = r[10],
      h = r[11],
      T = r[12],
      y = r[13],
      C = r[14],
      D = r[15];
    if (
      (s[0].setComponents(l - a, m - u, h - g, D - T).normalize(),
      s[1].setComponents(l + a, m + u, h + g, D + T).normalize(),
      s[2].setComponents(l + o, m + d, h + M, D + y).normalize(),
      s[3].setComponents(l - o, m - d, h - M, D - y).normalize(),
      n)
    )
      (s[4].setComponents(c, f, p, C).normalize(),
        s[5].setComponents(l - c, m - f, h - p, D - C).normalize());
    else if (
      (s[4].setComponents(l - c, m - f, h - p, D - C).normalize(), t === Qt)
    )
      s[5].setComponents(l + c, m + f, h + p, D + C).normalize();
    else if (t === Ss) s[5].setComponents(c, f, p, C).normalize();
    else
      throw new Error(
        "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
          t,
      );
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      (e.boundingSphere === null && e.computeBoundingSphere(),
        On.copy(e.boundingSphere).applyMatrix4(e.matrixWorld));
    else {
      const t = e.geometry;
      (t.boundingSphere === null && t.computeBoundingSphere(),
        On.copy(t.boundingSphere).applyMatrix4(e.matrixWorld));
    }
    return this.intersectsSphere(On);
  }
  intersectsSprite(e) {
    On.center.set(0, 0, 0);
    const t = Hc.distanceTo(e.center);
    return (
      (On.radius = 0.7071067811865476 + t),
      On.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(On)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      s = -e.radius;
    for (let r = 0; r < 6; r++) if (t[r].distanceToPoint(n) < s) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const s = t[n];
      if (
        ((hs.x = s.normal.x > 0 ? e.max.x : e.min.x),
        (hs.y = s.normal.y > 0 ? e.max.y : e.min.y),
        (hs.z = s.normal.z > 0 ? e.max.z : e.min.z),
        s.distanceToPoint(hs) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class tl extends Et {
  constructor(e, t, n = Wn, s, r, a, o = Ft, c = Ft, l, u = Oi, d = 1) {
    if (u !== Oi && u !== Bi)
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat",
      );
    const f = { width: e, height: t, depth: d };
    (super(f, s, r, a, o, c, u, n, l),
      (this.isDepthTexture = !0),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.source = new fa(Object.assign({}, e.image))),
      (this.compareFunction = e.compareFunction),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.compareFunction !== null &&
        (t.compareFunction = this.compareFunction),
      t
    );
  }
}
class nl extends Et {
  constructor(e = null) {
    (super(), (this.sourceTexture = e), (this.isExternalTexture = !0));
  }
  copy(e) {
    return (super.copy(e), (this.sourceTexture = e.sourceTexture), this);
  }
}
class Ls extends Dn {
  constructor(e = 1, t = 1, n = 1, s = 1) {
    (super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: s,
      }));
    const r = e / 2,
      a = t / 2,
      o = Math.floor(n),
      c = Math.floor(s),
      l = o + 1,
      u = c + 1,
      d = e / o,
      f = t / c,
      m = [],
      g = [],
      M = [],
      p = [];
    for (let h = 0; h < u; h++) {
      const T = h * f - a;
      for (let y = 0; y < l; y++) {
        const C = y * d - r;
        (g.push(C, -T, 0), M.push(0, 0, 1), p.push(y / o), p.push(1 - h / c));
      }
    }
    for (let h = 0; h < c; h++)
      for (let T = 0; T < o; T++) {
        const y = T + l * h,
          C = T + l * (h + 1),
          D = T + 1 + l * (h + 1),
          E = T + 1 + l * h;
        (m.push(y, C, E), m.push(C, D, E));
      }
    (this.setIndex(m),
      this.setAttribute("position", new Hn(g, 3)),
      this.setAttribute("normal", new Hn(M, 3)),
      this.setAttribute("uv", new Hn(p, 2)));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  static fromJSON(e) {
    return new Ls(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class Wc extends Ds {
  constructor(e) {
    (super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = ec),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class Xc extends Ds {
  constructor(e) {
    (super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
class Yc extends Jo {
  constructor(e = -1, t = 1, n = 1, s = -1, r = 0.1, a = 2e3) {
    (super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = s),
      (this.near = r),
      (this.far = a),
      this.updateProjectionMatrix());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, s, r, a) {
    (this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = s),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix());
  }
  clearViewOffset() {
    (this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix());
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      s = (this.top + this.bottom) / 2;
    let r = n - e,
      a = n + e,
      o = s + t,
      c = s - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom,
        u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      ((r += l * this.view.offsetX),
        (a = r + l * this.view.width),
        (o -= u * this.view.offsetY),
        (c = o - u * this.view.height));
    }
    (this.projectionMatrix.makeOrthographic(
      r,
      a,
      o,
      c,
      this.near,
      this.far,
      this.coordinateSystem,
      this.reversedDepth,
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert());
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
class Zc extends Vt {
  constructor(e = []) {
    (super(),
      (this.isArrayCamera = !0),
      (this.isMultiViewCamera = !1),
      (this.cameras = e));
  }
}
class qc {
  constructor(e = !0) {
    ((this.autoStart = e),
      (this.startTime = 0),
      (this.oldTime = 0),
      (this.elapsedTime = 0),
      (this.running = !1));
  }
  start() {
    ((this.startTime = performance.now()),
      (this.oldTime = this.startTime),
      (this.elapsedTime = 0),
      (this.running = !0));
  }
  stop() {
    (this.getElapsedTime(), (this.running = !1), (this.autoStart = !1));
  }
  getElapsedTime() {
    return (this.getDelta(), this.elapsedTime);
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return (this.start(), 0);
    if (this.running) {
      const t = performance.now();
      ((e = (t - this.oldTime) / 1e3),
        (this.oldTime = t),
        (this.elapsedTime += e));
    }
    return e;
  }
}
const Ja = new ft();
class Kc {
  constructor(e, t, n = 0, s = 1 / 0) {
    ((this.ray = new ma(e, t)),
      (this.near = n),
      (this.far = s),
      (this.camera = null),
      (this.layers = new xa()),
      (this.params = {
        Mesh: {},
        Line: { threshold: 1 },
        LOD: {},
        Points: { threshold: 1 },
        Sprite: {},
      }));
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera
      ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld),
        this.ray.direction
          .set(e.x, e.y, 0.5)
          .unproject(t)
          .sub(this.ray.origin)
          .normalize(),
        (this.camera = t))
      : t.isOrthographicCamera
        ? (this.ray.origin
            .set(e.x, e.y, (t.near + t.far) / (t.near - t.far))
            .unproject(t),
          this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld),
          (this.camera = t))
        : ht("Raycaster: Unsupported camera type: " + t.type);
  }
  setFromXRController(e) {
    return (
      Ja.identity().extractRotation(e.matrixWorld),
      this.ray.origin.setFromMatrixPosition(e.matrixWorld),
      this.ray.direction.set(0, 0, -1).applyMatrix4(Ja),
      this
    );
  }
  intersectObject(e, t = !0, n = []) {
    return (ia(e, this, n, t), n.sort(Qa), n);
  }
  intersectObjects(e, t = !0, n = []) {
    for (let s = 0, r = e.length; s < r; s++) ia(e[s], this, n, t);
    return (n.sort(Qa), n);
  }
}
function Qa(i, e) {
  return i.distance - e.distance;
}
function ia(i, e, t, n) {
  let s = !0;
  if (
    (i.layers.test(e.layers) && i.raycast(e, t) === !1 && (s = !1),
    s === !0 && n === !0)
  ) {
    const r = i.children;
    for (let a = 0, o = r.length; a < o; a++) ia(r[a], e, t, !0);
  }
}
class eo {
  constructor(e = 1, t = 0, n = 0) {
    ((this.radius = e), (this.phi = t), (this.theta = n));
  }
  set(e, t, n) {
    return ((this.radius = e), (this.phi = t), (this.theta = n), this);
  }
  copy(e) {
    return (
      (this.radius = e.radius),
      (this.phi = e.phi),
      (this.theta = e.theta),
      this
    );
  }
  makeSafe() {
    return ((this.phi = Oe(this.phi, 1e-6, Math.PI - 1e-6)), this);
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return (
      (this.radius = Math.sqrt(e * e + t * t + n * n)),
      this.radius === 0
        ? ((this.theta = 0), (this.phi = 0))
        : ((this.theta = Math.atan2(e, n)),
          (this.phi = Math.acos(Oe(t / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class jc extends Kn {
  constructor(e, t = null) {
    (super(),
      (this.object = e),
      (this.domElement = t),
      (this.enabled = !0),
      (this.state = -1),
      (this.keys = {}),
      (this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }),
      (this.touches = { ONE: null, TWO: null }));
  }
  connect(e) {
    if (e === void 0) {
      De("Controls: connect() now requires an element.");
      return;
    }
    (this.domElement !== null && this.disconnect(), (this.domElement = e));
  }
  disconnect() {}
  dispose() {}
  update() {}
}
function to(i, e, t, n) {
  const s = $c(n);
  switch (t) {
    case Go:
      return i * e;
    case Wo:
      return ((i * e) / s.components) * s.byteLength;
    case ca:
      return ((i * e) / s.components) * s.byteLength;
    case ha:
      return ((i * e * 2) / s.components) * s.byteLength;
    case ua:
      return ((i * e * 2) / s.components) * s.byteLength;
    case Ho:
      return ((i * e * 3) / s.components) * s.byteLength;
    case qt:
      return ((i * e * 4) / s.components) * s.byteLength;
    case da:
      return ((i * e * 4) / s.components) * s.byteLength;
    case ps:
    case ms:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case xs:
    case _s:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Rr:
    case Dr:
      return (Math.max(i, 16) * Math.max(e, 8)) / 4;
    case Cr:
    case Pr:
      return (Math.max(i, 8) * Math.max(e, 8)) / 2;
    case Lr:
    case Ur:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Ir:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Nr:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Fr:
      return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case Or:
      return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Br:
      return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case zr:
      return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case kr:
      return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Vr:
      return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Gr:
      return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Hr:
      return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case Wr:
      return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case Xr:
      return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Yr:
      return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case Zr:
      return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case qr:
      return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case Kr:
    case jr:
    case $r:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    case Jr:
    case Qr:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case ea:
    case ta:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function $c(i) {
  switch (i) {
    case mn:
    case Bo:
      return { byteLength: 1, components: 1 };
    case Ni:
    case zo:
    case Ti:
      return { byteLength: 2, components: 1 };
    case oa:
    case la:
      return { byteLength: 2, components: 4 };
    case Wn:
    case aa:
    case dn:
      return { byteLength: 4, components: 1 };
    case ko:
    case Vo:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: ra } }),
  );
typeof window < "u" &&
  (window.__THREE__
    ? De("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = ra));
function il() {
  let i = null,
    e = !1,
    t = null,
    n = null;
  function s(r, a) {
    (t(r, a), (n = i.requestAnimationFrame(s)));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = i.requestAnimationFrame(s)), (e = !0));
    },
    stop: function () {
      (i.cancelAnimationFrame(n), (e = !1));
    },
    setAnimationLoop: function (r) {
      t = r;
    },
    setContext: function (r) {
      i = r;
    },
  };
}
function Jc(i) {
  const e = new WeakMap();
  function t(o, c) {
    const l = o.array,
      u = o.usage,
      d = l.byteLength,
      f = i.createBuffer();
    (i.bindBuffer(c, f), i.bufferData(c, l, u), o.onUploadCallback());
    let m;
    if (l instanceof Float32Array) m = i.FLOAT;
    else if (typeof Float16Array < "u" && l instanceof Float16Array)
      m = i.HALF_FLOAT;
    else if (l instanceof Uint16Array)
      o.isFloat16BufferAttribute ? (m = i.HALF_FLOAT) : (m = i.UNSIGNED_SHORT);
    else if (l instanceof Int16Array) m = i.SHORT;
    else if (l instanceof Uint32Array) m = i.UNSIGNED_INT;
    else if (l instanceof Int32Array) m = i.INT;
    else if (l instanceof Int8Array) m = i.BYTE;
    else if (l instanceof Uint8Array) m = i.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray) m = i.UNSIGNED_BYTE;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + l,
      );
    return {
      buffer: f,
      type: m,
      bytesPerElement: l.BYTES_PER_ELEMENT,
      version: o.version,
      size: d,
    };
  }
  function n(o, c, l) {
    const u = c.array,
      d = c.updateRanges;
    if ((i.bindBuffer(l, o), d.length === 0)) i.bufferSubData(l, 0, u);
    else {
      d.sort((m, g) => m.start - g.start);
      let f = 0;
      for (let m = 1; m < d.length; m++) {
        const g = d[f],
          M = d[m];
        M.start <= g.start + g.count + 1
          ? (g.count = Math.max(g.count, M.start + M.count - g.start))
          : (++f, (d[f] = M));
      }
      d.length = f + 1;
      for (let m = 0, g = d.length; m < g; m++) {
        const M = d[m];
        i.bufferSubData(l, M.start * u.BYTES_PER_ELEMENT, u, M.start, M.count);
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function s(o) {
    return (o.isInterleavedBufferAttribute && (o = o.data), e.get(o));
  }
  function r(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const c = e.get(o);
    c && (i.deleteBuffer(c.buffer), e.delete(o));
  }
  function a(o, c) {
    if (
      (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute)
    ) {
      const u = e.get(o);
      (!u || u.version < o.version) &&
        e.set(o, {
          buffer: o.buffer,
          type: o.type,
          bytesPerElement: o.elementSize,
          version: o.version,
        });
      return;
    }
    const l = e.get(o);
    if (l === void 0) e.set(o, t(o, c));
    else if (l.version < o.version) {
      if (l.size !== o.array.byteLength)
        throw new Error(
          "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.",
        );
      (n(l.buffer, o, c), (l.version = o.version));
    }
  }
  return { get: s, remove: r, update: a };
}
var Qc = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  eh = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  th = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  nh = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  ih = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
  sh = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  rh = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  ah = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  oh = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,
  lh = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
  ch = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  hh = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  uh = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  dh = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  fh = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  ph = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,
  mh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  xh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  _h = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  gh = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  vh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  Mh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,
  Sh = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,
  bh = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  yh = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  Eh = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  Th = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  Ah = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  wh = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  Ch = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  Rh = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  Ph = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  Dh = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  Lh = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,
  Uh = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  Ih = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  Nh = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  Fh = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  Oh = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  Bh = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  zh = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  kh = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  Vh = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  Gh = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  Hh = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  Wh = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  Xh = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,
  Yh = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  Zh = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  qh = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  Kh = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  jh = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
  $h = `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  Jh = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  Qh = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  eu = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  tu = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  nu = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  iu = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  su = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
  ru = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  au = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  ou = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  lu = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  cu = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  hu = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  uu = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
  du = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  fu = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  pu = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,
  mu = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  xu = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  _u = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  gu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  vu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Mu = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  Su = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  bu = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  yu = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  Eu = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  Tu = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  Au = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  wu = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
  Cu = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  Ru = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  Pu = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  Du = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  Lu = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  Uu = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  Iu = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,
  Nu = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  Fu = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  Ou = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  Bu = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  zu = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  ku = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  Vu = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  Gu = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  Hu = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  Wu = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  Xu = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  Yu = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  Zu = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  qu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  Ku = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  ju = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  $u = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Ju = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  Qu = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  ed = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  td = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  nd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  id = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  sd = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  rd = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,
  ad = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  od = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  ld = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  cd = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  hd = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  ud = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  dd = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  fd = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  pd = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  md = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  xd = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  _d = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  gd = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  vd = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  Md = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Sd = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  bd = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  yd = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Ed = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Td = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Ad = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  wd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Cd = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Rd = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  Pd = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  Dd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  Ne = {
    alphahash_fragment: Qc,
    alphahash_pars_fragment: eh,
    alphamap_fragment: th,
    alphamap_pars_fragment: nh,
    alphatest_fragment: ih,
    alphatest_pars_fragment: sh,
    aomap_fragment: rh,
    aomap_pars_fragment: ah,
    batching_pars_vertex: oh,
    batching_vertex: lh,
    begin_vertex: ch,
    beginnormal_vertex: hh,
    bsdfs: uh,
    iridescence_fragment: dh,
    bumpmap_pars_fragment: fh,
    clipping_planes_fragment: ph,
    clipping_planes_pars_fragment: mh,
    clipping_planes_pars_vertex: xh,
    clipping_planes_vertex: _h,
    color_fragment: gh,
    color_pars_fragment: vh,
    color_pars_vertex: Mh,
    color_vertex: Sh,
    common: bh,
    cube_uv_reflection_fragment: yh,
    defaultnormal_vertex: Eh,
    displacementmap_pars_vertex: Th,
    displacementmap_vertex: Ah,
    emissivemap_fragment: wh,
    emissivemap_pars_fragment: Ch,
    colorspace_fragment: Rh,
    colorspace_pars_fragment: Ph,
    envmap_fragment: Dh,
    envmap_common_pars_fragment: Lh,
    envmap_pars_fragment: Uh,
    envmap_pars_vertex: Ih,
    envmap_physical_pars_fragment: Xh,
    envmap_vertex: Nh,
    fog_vertex: Fh,
    fog_pars_vertex: Oh,
    fog_fragment: Bh,
    fog_pars_fragment: zh,
    gradientmap_pars_fragment: kh,
    lightmap_pars_fragment: Vh,
    lights_lambert_fragment: Gh,
    lights_lambert_pars_fragment: Hh,
    lights_pars_begin: Wh,
    lights_toon_fragment: Yh,
    lights_toon_pars_fragment: Zh,
    lights_phong_fragment: qh,
    lights_phong_pars_fragment: Kh,
    lights_physical_fragment: jh,
    lights_physical_pars_fragment: $h,
    lights_fragment_begin: Jh,
    lights_fragment_maps: Qh,
    lights_fragment_end: eu,
    logdepthbuf_fragment: tu,
    logdepthbuf_pars_fragment: nu,
    logdepthbuf_pars_vertex: iu,
    logdepthbuf_vertex: su,
    map_fragment: ru,
    map_pars_fragment: au,
    map_particle_fragment: ou,
    map_particle_pars_fragment: lu,
    metalnessmap_fragment: cu,
    metalnessmap_pars_fragment: hu,
    morphinstance_vertex: uu,
    morphcolor_vertex: du,
    morphnormal_vertex: fu,
    morphtarget_pars_vertex: pu,
    morphtarget_vertex: mu,
    normal_fragment_begin: xu,
    normal_fragment_maps: _u,
    normal_pars_fragment: gu,
    normal_pars_vertex: vu,
    normal_vertex: Mu,
    normalmap_pars_fragment: Su,
    clearcoat_normal_fragment_begin: bu,
    clearcoat_normal_fragment_maps: yu,
    clearcoat_pars_fragment: Eu,
    iridescence_pars_fragment: Tu,
    opaque_fragment: Au,
    packing: wu,
    premultiplied_alpha_fragment: Cu,
    project_vertex: Ru,
    dithering_fragment: Pu,
    dithering_pars_fragment: Du,
    roughnessmap_fragment: Lu,
    roughnessmap_pars_fragment: Uu,
    shadowmap_pars_fragment: Iu,
    shadowmap_pars_vertex: Nu,
    shadowmap_vertex: Fu,
    shadowmask_pars_fragment: Ou,
    skinbase_vertex: Bu,
    skinning_pars_vertex: zu,
    skinning_vertex: ku,
    skinnormal_vertex: Vu,
    specularmap_fragment: Gu,
    specularmap_pars_fragment: Hu,
    tonemapping_fragment: Wu,
    tonemapping_pars_fragment: Xu,
    transmission_fragment: Yu,
    transmission_pars_fragment: Zu,
    uv_pars_fragment: qu,
    uv_pars_vertex: Ku,
    uv_vertex: ju,
    worldpos_vertex: $u,
    background_vert: Ju,
    background_frag: Qu,
    backgroundCube_vert: ed,
    backgroundCube_frag: td,
    cube_vert: nd,
    cube_frag: id,
    depth_vert: sd,
    depth_frag: rd,
    distanceRGBA_vert: ad,
    distanceRGBA_frag: od,
    equirect_vert: ld,
    equirect_frag: cd,
    linedashed_vert: hd,
    linedashed_frag: ud,
    meshbasic_vert: dd,
    meshbasic_frag: fd,
    meshlambert_vert: pd,
    meshlambert_frag: md,
    meshmatcap_vert: xd,
    meshmatcap_frag: _d,
    meshnormal_vert: gd,
    meshnormal_frag: vd,
    meshphong_vert: Md,
    meshphong_frag: Sd,
    meshphysical_vert: bd,
    meshphysical_frag: yd,
    meshtoon_vert: Ed,
    meshtoon_frag: Td,
    points_vert: Ad,
    points_frag: wd,
    shadow_vert: Cd,
    shadow_frag: Rd,
    sprite_vert: Pd,
    sprite_frag: Dd,
  },
  ae = {
    common: {
      diffuse: { value: new $e(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new Ue() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ue() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new Ue() },
    },
    envmap: {
      envMap: { value: null },
      envMapRotation: { value: new Ue() },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
      dfgLUT: { value: null },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new Ue() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new Ue() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new Ue() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new Ue() },
      normalScale: { value: new Ie(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new Ue() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new Ue() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new Ue() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new Ue() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new $e(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new $e(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ue() },
      alphaTest: { value: 0 },
      uvTransform: { value: new Ue() },
    },
    sprite: {
      diffuse: { value: new $e(16777215) },
      opacity: { value: 1 },
      center: { value: new Ie(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new Ue() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ue() },
      alphaTest: { value: 0 },
    },
  },
  Jt = {
    basic: {
      uniforms: yt([
        ae.common,
        ae.specularmap,
        ae.envmap,
        ae.aomap,
        ae.lightmap,
        ae.fog,
      ]),
      vertexShader: Ne.meshbasic_vert,
      fragmentShader: Ne.meshbasic_frag,
    },
    lambert: {
      uniforms: yt([
        ae.common,
        ae.specularmap,
        ae.envmap,
        ae.aomap,
        ae.lightmap,
        ae.emissivemap,
        ae.bumpmap,
        ae.normalmap,
        ae.displacementmap,
        ae.fog,
        ae.lights,
        { emissive: { value: new $e(0) } },
      ]),
      vertexShader: Ne.meshlambert_vert,
      fragmentShader: Ne.meshlambert_frag,
    },
    phong: {
      uniforms: yt([
        ae.common,
        ae.specularmap,
        ae.envmap,
        ae.aomap,
        ae.lightmap,
        ae.emissivemap,
        ae.bumpmap,
        ae.normalmap,
        ae.displacementmap,
        ae.fog,
        ae.lights,
        {
          emissive: { value: new $e(0) },
          specular: { value: new $e(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: Ne.meshphong_vert,
      fragmentShader: Ne.meshphong_frag,
    },
    standard: {
      uniforms: yt([
        ae.common,
        ae.envmap,
        ae.aomap,
        ae.lightmap,
        ae.emissivemap,
        ae.bumpmap,
        ae.normalmap,
        ae.displacementmap,
        ae.roughnessmap,
        ae.metalnessmap,
        ae.fog,
        ae.lights,
        {
          emissive: { value: new $e(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Ne.meshphysical_vert,
      fragmentShader: Ne.meshphysical_frag,
    },
    toon: {
      uniforms: yt([
        ae.common,
        ae.aomap,
        ae.lightmap,
        ae.emissivemap,
        ae.bumpmap,
        ae.normalmap,
        ae.displacementmap,
        ae.gradientmap,
        ae.fog,
        ae.lights,
        { emissive: { value: new $e(0) } },
      ]),
      vertexShader: Ne.meshtoon_vert,
      fragmentShader: Ne.meshtoon_frag,
    },
    matcap: {
      uniforms: yt([
        ae.common,
        ae.bumpmap,
        ae.normalmap,
        ae.displacementmap,
        ae.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Ne.meshmatcap_vert,
      fragmentShader: Ne.meshmatcap_frag,
    },
    points: {
      uniforms: yt([ae.points, ae.fog]),
      vertexShader: Ne.points_vert,
      fragmentShader: Ne.points_frag,
    },
    dashed: {
      uniforms: yt([
        ae.common,
        ae.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Ne.linedashed_vert,
      fragmentShader: Ne.linedashed_frag,
    },
    depth: {
      uniforms: yt([ae.common, ae.displacementmap]),
      vertexShader: Ne.depth_vert,
      fragmentShader: Ne.depth_frag,
    },
    normal: {
      uniforms: yt([
        ae.common,
        ae.bumpmap,
        ae.normalmap,
        ae.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Ne.meshnormal_vert,
      fragmentShader: Ne.meshnormal_frag,
    },
    sprite: {
      uniforms: yt([ae.sprite, ae.fog]),
      vertexShader: Ne.sprite_vert,
      fragmentShader: Ne.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new Ue() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Ne.background_vert,
      fragmentShader: Ne.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
        backgroundRotation: { value: new Ue() },
      },
      vertexShader: Ne.backgroundCube_vert,
      fragmentShader: Ne.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: Ne.cube_vert,
      fragmentShader: Ne.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Ne.equirect_vert,
      fragmentShader: Ne.equirect_frag,
    },
    distanceRGBA: {
      uniforms: yt([
        ae.common,
        ae.displacementmap,
        {
          referencePosition: { value: new F() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Ne.distanceRGBA_vert,
      fragmentShader: Ne.distanceRGBA_frag,
    },
    shadow: {
      uniforms: yt([
        ae.lights,
        ae.fog,
        { color: { value: new $e(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Ne.shadow_vert,
      fragmentShader: Ne.shadow_frag,
    },
  };
Jt.physical = {
  uniforms: yt([
    Jt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new Ue() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new Ue() },
      clearcoatNormalScale: { value: new Ie(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new Ue() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new Ue() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new Ue() },
      sheen: { value: 0 },
      sheenColor: { value: new $e(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new Ue() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new Ue() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new Ue() },
      transmissionSamplerSize: { value: new Ie() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new Ue() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new $e(0) },
      specularColor: { value: new $e(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new Ue() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new Ue() },
      anisotropyVector: { value: new Ie() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new Ue() },
    },
  ]),
  vertexShader: Ne.meshphysical_vert,
  fragmentShader: Ne.meshphysical_frag,
};
const us = { r: 0, b: 0, g: 0 },
  Bn = new xn(),
  Ld = new ft();
function Ud(i, e, t, n, s, r, a) {
  const o = new $e(0);
  let c = r === !0 ? 0 : 1,
    l,
    u,
    d = null,
    f = 0,
    m = null;
  function g(y) {
    let C = y.isScene === !0 ? y.background : null;
    return (
      C && C.isTexture && (C = (y.backgroundBlurriness > 0 ? t : e).get(C)),
      C
    );
  }
  function M(y) {
    let C = !1;
    const D = g(y);
    D === null ? h(o, c) : D && D.isColor && (h(D, 1), (C = !0));
    const E = i.xr.getEnvironmentBlendMode();
    (E === "additive"
      ? n.buffers.color.setClear(0, 0, 0, 1, a)
      : E === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a),
      (i.autoClear || C) &&
        (n.buffers.depth.setTest(!0),
        n.buffers.depth.setMask(!0),
        n.buffers.color.setMask(!0),
        i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil)));
  }
  function p(y, C) {
    const D = g(C);
    D && (D.isCubeTexture || D.mapping === Ps)
      ? (u === void 0 &&
          ((u = new Dt(
            new Kt(1, 1, 1),
            new _n({
              name: "BackgroundCubeMaterial",
              uniforms: Si(Jt.backgroundCube.uniforms),
              vertexShader: Jt.backgroundCube.vertexShader,
              fragmentShader: Jt.backgroundCube.fragmentShader,
              side: Pt,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
              allowOverride: !1,
            }),
          )),
          u.geometry.deleteAttribute("normal"),
          u.geometry.deleteAttribute("uv"),
          (u.onBeforeRender = function (E, P, z) {
            this.matrixWorld.copyPosition(z.matrixWorld);
          }),
          Object.defineProperty(u.material, "envMap", {
            get: function () {
              return this.uniforms.envMap.value;
            },
          }),
          s.update(u)),
        Bn.copy(C.backgroundRotation),
        (Bn.x *= -1),
        (Bn.y *= -1),
        (Bn.z *= -1),
        D.isCubeTexture &&
          D.isRenderTargetTexture === !1 &&
          ((Bn.y *= -1), (Bn.z *= -1)),
        (u.material.uniforms.envMap.value = D),
        (u.material.uniforms.flipEnvMap.value =
          D.isCubeTexture && D.isRenderTargetTexture === !1 ? -1 : 1),
        (u.material.uniforms.backgroundBlurriness.value =
          C.backgroundBlurriness),
        (u.material.uniforms.backgroundIntensity.value = C.backgroundIntensity),
        u.material.uniforms.backgroundRotation.value.setFromMatrix4(
          Ld.makeRotationFromEuler(Bn),
        ),
        (u.material.toneMapped = We.getTransfer(D.colorSpace) !== qe),
        (d !== D || f !== D.version || m !== i.toneMapping) &&
          ((u.material.needsUpdate = !0),
          (d = D),
          (f = D.version),
          (m = i.toneMapping)),
        u.layers.enableAll(),
        y.unshift(u, u.geometry, u.material, 0, 0, null))
      : D &&
        D.isTexture &&
        (l === void 0 &&
          ((l = new Dt(
            new Ls(2, 2),
            new _n({
              name: "BackgroundMaterial",
              uniforms: Si(Jt.background.uniforms),
              vertexShader: Jt.background.vertexShader,
              fragmentShader: Jt.background.fragmentShader,
              side: Rn,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
              allowOverride: !1,
            }),
          )),
          l.geometry.deleteAttribute("normal"),
          Object.defineProperty(l.material, "map", {
            get: function () {
              return this.uniforms.t2D.value;
            },
          }),
          s.update(l)),
        (l.material.uniforms.t2D.value = D),
        (l.material.uniforms.backgroundIntensity.value = C.backgroundIntensity),
        (l.material.toneMapped = We.getTransfer(D.colorSpace) !== qe),
        D.matrixAutoUpdate === !0 && D.updateMatrix(),
        l.material.uniforms.uvTransform.value.copy(D.matrix),
        (d !== D || f !== D.version || m !== i.toneMapping) &&
          ((l.material.needsUpdate = !0),
          (d = D),
          (f = D.version),
          (m = i.toneMapping)),
        l.layers.enableAll(),
        y.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function h(y, C) {
    (y.getRGB(us, $o(i)), n.buffers.color.setClear(us.r, us.g, us.b, C, a));
  }
  function T() {
    (u !== void 0 && (u.geometry.dispose(), u.material.dispose(), (u = void 0)),
      l !== void 0 &&
        (l.geometry.dispose(), l.material.dispose(), (l = void 0)));
  }
  return {
    getClearColor: function () {
      return o;
    },
    setClearColor: function (y, C = 1) {
      (o.set(y), (c = C), h(o, c));
    },
    getClearAlpha: function () {
      return c;
    },
    setClearAlpha: function (y) {
      ((c = y), h(o, c));
    },
    render: M,
    addToRenderList: p,
    dispose: T,
  };
}
function Id(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    n = {},
    s = f(null);
  let r = s,
    a = !1;
  function o(v, R, B, V, H) {
    let q = !1;
    const Y = d(V, B, R);
    (r !== Y && ((r = Y), l(r.object)),
      (q = m(v, V, B, H)),
      q && g(v, V, B, H),
      H !== null && e.update(H, i.ELEMENT_ARRAY_BUFFER),
      (q || a) &&
        ((a = !1),
        C(v, R, B, V),
        H !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(H).buffer)));
  }
  function c() {
    return i.createVertexArray();
  }
  function l(v) {
    return i.bindVertexArray(v);
  }
  function u(v) {
    return i.deleteVertexArray(v);
  }
  function d(v, R, B) {
    const V = B.wireframe === !0;
    let H = n[v.id];
    H === void 0 && ((H = {}), (n[v.id] = H));
    let q = H[R.id];
    q === void 0 && ((q = {}), (H[R.id] = q));
    let Y = q[V];
    return (Y === void 0 && ((Y = f(c())), (q[V] = Y)), Y);
  }
  function f(v) {
    const R = [],
      B = [],
      V = [];
    for (let H = 0; H < t; H++) ((R[H] = 0), (B[H] = 0), (V[H] = 0));
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: R,
      enabledAttributes: B,
      attributeDivisors: V,
      object: v,
      attributes: {},
      index: null,
    };
  }
  function m(v, R, B, V) {
    const H = r.attributes,
      q = R.attributes;
    let Y = 0;
    const ne = B.getAttributes();
    for (const G in ne)
      if (ne[G].location >= 0) {
        const re = H[G];
        let Se = q[G];
        if (
          (Se === void 0 &&
            (G === "instanceMatrix" &&
              v.instanceMatrix &&
              (Se = v.instanceMatrix),
            G === "instanceColor" && v.instanceColor && (Se = v.instanceColor)),
          re === void 0 || re.attribute !== Se || (Se && re.data !== Se.data))
        )
          return !0;
        Y++;
      }
    return r.attributesNum !== Y || r.index !== V;
  }
  function g(v, R, B, V) {
    const H = {},
      q = R.attributes;
    let Y = 0;
    const ne = B.getAttributes();
    for (const G in ne)
      if (ne[G].location >= 0) {
        let re = q[G];
        re === void 0 &&
          (G === "instanceMatrix" &&
            v.instanceMatrix &&
            (re = v.instanceMatrix),
          G === "instanceColor" && v.instanceColor && (re = v.instanceColor));
        const Se = {};
        ((Se.attribute = re),
          re && re.data && (Se.data = re.data),
          (H[G] = Se),
          Y++);
      }
    ((r.attributes = H), (r.attributesNum = Y), (r.index = V));
  }
  function M() {
    const v = r.newAttributes;
    for (let R = 0, B = v.length; R < B; R++) v[R] = 0;
  }
  function p(v) {
    h(v, 0);
  }
  function h(v, R) {
    const B = r.newAttributes,
      V = r.enabledAttributes,
      H = r.attributeDivisors;
    ((B[v] = 1),
      V[v] === 0 && (i.enableVertexAttribArray(v), (V[v] = 1)),
      H[v] !== R && (i.vertexAttribDivisor(v, R), (H[v] = R)));
  }
  function T() {
    const v = r.newAttributes,
      R = r.enabledAttributes;
    for (let B = 0, V = R.length; B < V; B++)
      R[B] !== v[B] && (i.disableVertexAttribArray(B), (R[B] = 0));
  }
  function y(v, R, B, V, H, q, Y) {
    Y === !0
      ? i.vertexAttribIPointer(v, R, B, H, q)
      : i.vertexAttribPointer(v, R, B, V, H, q);
  }
  function C(v, R, B, V) {
    M();
    const H = V.attributes,
      q = B.getAttributes(),
      Y = R.defaultAttributeValues;
    for (const ne in q) {
      const G = q[ne];
      if (G.location >= 0) {
        let te = H[ne];
        if (
          (te === void 0 &&
            (ne === "instanceMatrix" &&
              v.instanceMatrix &&
              (te = v.instanceMatrix),
            ne === "instanceColor" &&
              v.instanceColor &&
              (te = v.instanceColor)),
          te !== void 0)
        ) {
          const re = te.normalized,
            Se = te.itemSize,
            Ge = e.get(te);
          if (Ge === void 0) continue;
          const Xe = Ge.buffer,
            Qe = Ge.type,
            et = Ge.bytesPerElement,
            X = Qe === i.INT || Qe === i.UNSIGNED_INT || te.gpuType === aa;
          if (te.isInterleavedBufferAttribute) {
            const j = te.data,
              de = j.stride,
              Le = te.offset;
            if (j.isInstancedInterleavedBuffer) {
              for (let ge = 0; ge < G.locationSize; ge++)
                h(G.location + ge, j.meshPerAttribute);
              v.isInstancedMesh !== !0 &&
                V._maxInstanceCount === void 0 &&
                (V._maxInstanceCount = j.meshPerAttribute * j.count);
            } else
              for (let ge = 0; ge < G.locationSize; ge++) p(G.location + ge);
            i.bindBuffer(i.ARRAY_BUFFER, Xe);
            for (let ge = 0; ge < G.locationSize; ge++)
              y(
                G.location + ge,
                Se / G.locationSize,
                Qe,
                re,
                de * et,
                (Le + (Se / G.locationSize) * ge) * et,
                X,
              );
          } else {
            if (te.isInstancedBufferAttribute) {
              for (let j = 0; j < G.locationSize; j++)
                h(G.location + j, te.meshPerAttribute);
              v.isInstancedMesh !== !0 &&
                V._maxInstanceCount === void 0 &&
                (V._maxInstanceCount = te.meshPerAttribute * te.count);
            } else for (let j = 0; j < G.locationSize; j++) p(G.location + j);
            i.bindBuffer(i.ARRAY_BUFFER, Xe);
            for (let j = 0; j < G.locationSize; j++)
              y(
                G.location + j,
                Se / G.locationSize,
                Qe,
                re,
                Se * et,
                (Se / G.locationSize) * j * et,
                X,
              );
          }
        } else if (Y !== void 0) {
          const re = Y[ne];
          if (re !== void 0)
            switch (re.length) {
              case 2:
                i.vertexAttrib2fv(G.location, re);
                break;
              case 3:
                i.vertexAttrib3fv(G.location, re);
                break;
              case 4:
                i.vertexAttrib4fv(G.location, re);
                break;
              default:
                i.vertexAttrib1fv(G.location, re);
            }
        }
      }
    }
    T();
  }
  function D() {
    z();
    for (const v in n) {
      const R = n[v];
      for (const B in R) {
        const V = R[B];
        for (const H in V) (u(V[H].object), delete V[H]);
        delete R[B];
      }
      delete n[v];
    }
  }
  function E(v) {
    if (n[v.id] === void 0) return;
    const R = n[v.id];
    for (const B in R) {
      const V = R[B];
      for (const H in V) (u(V[H].object), delete V[H]);
      delete R[B];
    }
    delete n[v.id];
  }
  function P(v) {
    for (const R in n) {
      const B = n[R];
      if (B[v.id] === void 0) continue;
      const V = B[v.id];
      for (const H in V) (u(V[H].object), delete V[H]);
      delete B[v.id];
    }
  }
  function z() {
    (S(), (a = !0), r !== s && ((r = s), l(r.object)));
  }
  function S() {
    ((s.geometry = null), (s.program = null), (s.wireframe = !1));
  }
  return {
    setup: o,
    reset: z,
    resetDefaultState: S,
    dispose: D,
    releaseStatesOfGeometry: E,
    releaseStatesOfProgram: P,
    initAttributes: M,
    enableAttribute: p,
    disableUnusedAttributes: T,
  };
}
function Nd(i, e, t) {
  let n;
  function s(l) {
    n = l;
  }
  function r(l, u) {
    (i.drawArrays(n, l, u), t.update(u, n, 1));
  }
  function a(l, u, d) {
    d !== 0 && (i.drawArraysInstanced(n, l, u, d), t.update(u, n, d));
  }
  function o(l, u, d) {
    if (d === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, u, 0, d);
    let m = 0;
    for (let g = 0; g < d; g++) m += u[g];
    t.update(m, n, 1);
  }
  function c(l, u, d, f) {
    if (d === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null) for (let g = 0; g < l.length; g++) a(l[g], u[g], f[g]);
    else {
      m.multiDrawArraysInstancedWEBGL(n, l, 0, u, 0, f, 0, d);
      let g = 0;
      for (let M = 0; M < d; M++) g += u[M] * f[M];
      t.update(g, n, 1);
    }
  }
  ((this.setMode = s),
    (this.render = r),
    (this.renderInstances = a),
    (this.renderMultiDraw = o),
    (this.renderMultiDrawInstances = c));
}
function Fd(i, e, t, n) {
  let s;
  function r() {
    if (s !== void 0) return s;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const P = e.get("EXT_texture_filter_anisotropic");
      s = i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else s = 0;
    return s;
  }
  function a(P) {
    return !(
      P !== qt &&
      n.convert(P) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)
    );
  }
  function o(P) {
    const z =
      P === Ti &&
      (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(
      P !== mn &&
      n.convert(P) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) &&
      P !== dn &&
      !z
    );
  }
  function c(P) {
    if (P === "highp") {
      if (
        i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision >
          0 &&
        i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      P = "mediump";
    }
    return P === "mediump" &&
      i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision >
        0 &&
      i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision >
        0
      ? "mediump"
      : "lowp";
  }
  let l = t.precision !== void 0 ? t.precision : "highp";
  const u = c(l);
  u !== l &&
    (De("WebGLRenderer:", l, "not supported, using", u, "instead."), (l = u));
  const d = t.logarithmicDepthBuffer === !0,
    f = t.reversedDepthBuffer === !0 && e.has("EXT_clip_control"),
    m = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),
    g = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    M = i.getParameter(i.MAX_TEXTURE_SIZE),
    p = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),
    h = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    T = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),
    y = i.getParameter(i.MAX_VARYING_VECTORS),
    C = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),
    D = g > 0,
    E = i.getParameter(i.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: r,
    getMaxPrecision: c,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: l,
    logarithmicDepthBuffer: d,
    reversedDepthBuffer: f,
    maxTextures: m,
    maxVertexTextures: g,
    maxTextureSize: M,
    maxCubemapSize: p,
    maxAttributes: h,
    maxVertexUniforms: T,
    maxVaryings: y,
    maxFragmentUniforms: C,
    vertexTextures: D,
    maxSamples: E,
  };
}
function Od(i) {
  const e = this;
  let t = null,
    n = 0,
    s = !1,
    r = !1;
  const a = new Tn(),
    o = new Ue(),
    c = { value: null, needsUpdate: !1 };
  ((this.uniform = c),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (d, f) {
      const m = d.length !== 0 || f || n !== 0 || s;
      return ((s = f), (n = d.length), m);
    }),
    (this.beginShadows = function () {
      ((r = !0), u(null));
    }),
    (this.endShadows = function () {
      r = !1;
    }),
    (this.setGlobalState = function (d, f) {
      t = u(d, f, 0);
    }),
    (this.setState = function (d, f, m) {
      const g = d.clippingPlanes,
        M = d.clipIntersection,
        p = d.clipShadows,
        h = i.get(d);
      if (!s || g === null || g.length === 0 || (r && !p)) r ? u(null) : l();
      else {
        const T = r ? 0 : n,
          y = T * 4;
        let C = h.clippingState || null;
        ((c.value = C), (C = u(g, f, y, m)));
        for (let D = 0; D !== y; ++D) C[D] = t[D];
        ((h.clippingState = C),
          (this.numIntersection = M ? this.numPlanes : 0),
          (this.numPlanes += T));
      }
    }));
  function l() {
    (c.value !== t && ((c.value = t), (c.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0));
  }
  function u(d, f, m, g) {
    const M = d !== null ? d.length : 0;
    let p = null;
    if (M !== 0) {
      if (((p = c.value), g !== !0 || p === null)) {
        const h = m + M * 4,
          T = f.matrixWorldInverse;
        (o.getNormalMatrix(T),
          (p === null || p.length < h) && (p = new Float32Array(h)));
        for (let y = 0, C = m; y !== M; ++y, C += 4)
          (a.copy(d[y]).applyMatrix4(T, o),
            a.normal.toArray(p, C),
            (p[C + 3] = a.constant));
      }
      ((c.value = p), (c.needsUpdate = !0));
    }
    return ((e.numPlanes = M), (e.numIntersection = 0), p);
  }
}
function Bd(i) {
  let e = new WeakMap();
  function t(a, o) {
    return (o === Er ? (a.mapping = gi) : o === Tr && (a.mapping = vi), a);
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === Er || o === Tr)
        if (e.has(a)) {
          const c = e.get(a).texture;
          return t(c, a.mapping);
        } else {
          const c = a.image;
          if (c && c.height > 0) {
            const l = new Oc(c.height);
            return (
              l.fromEquirectangularTexture(i, a),
              e.set(a, l),
              a.addEventListener("dispose", s),
              t(l.texture, a.mapping)
            );
          } else return null;
        }
    }
    return a;
  }
  function s(a) {
    const o = a.target;
    o.removeEventListener("dispose", s);
    const c = e.get(o);
    c !== void 0 && (e.delete(o), c.dispose());
  }
  function r() {
    e = new WeakMap();
  }
  return { get: n, dispose: r };
}
const wn = 4,
  no = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  Vn = 20,
  zd = 256,
  Ui = new Yc(),
  io = new $e();
let lr = null,
  cr = 0,
  hr = 0,
  ur = !1;
const kd = new F();
class so {
  constructor(e) {
    ((this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._lodMeshes = []),
      (this._backgroundBox = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      (this._blurMaterial = null),
      (this._ggxMaterial = null));
  }
  fromScene(e, t = 0, n = 0.1, s = 100, r = {}) {
    const { size: a = 256, position: o = kd } = r;
    ((lr = this._renderer.getRenderTarget()),
      (cr = this._renderer.getActiveCubeFace()),
      (hr = this._renderer.getActiveMipmapLevel()),
      (ur = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1),
      this._setSize(a));
    const c = this._allocateTargets();
    return (
      (c.depthBuffer = !0),
      this._sceneToCubeUV(e, n, s, c, o),
      t > 0 && this._blur(c, 0, 0, t),
      this._applyPMREM(c),
      this._cleanup(c),
      c
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = oo()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = ao()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    (this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose(),
      this._backgroundBox !== null &&
        (this._backgroundBox.geometry.dispose(),
        this._backgroundBox.material.dispose()));
  }
  _setSize(e) {
    ((this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax)));
  }
  _dispose() {
    (this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._ggxMaterial !== null && this._ggxMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose());
    for (let e = 0; e < this._lodMeshes.length; e++)
      this._lodMeshes[e].geometry.dispose();
  }
  _cleanup(e) {
    (this._renderer.setRenderTarget(lr, cr, hr),
      (this._renderer.xr.enabled = ur),
      (e.scissorTest = !1),
      hi(e, 0, 0, e.width, e.height));
  }
  _fromTexture(e, t) {
    (e.mapping === gi || e.mapping === vi
      ? this._setSize(
          e.image.length === 0
            ? 16
            : e.image[0].width || e.image[0].image.width,
        )
      : this._setSize(e.image.width / 4),
      (lr = this._renderer.getRenderTarget()),
      (cr = this._renderer.getActiveCubeFace()),
      (hr = this._renderer.getActiveMipmapLevel()),
      (ur = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1));
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n),
      this._applyPMREM(n),
      this._cleanup(n),
      n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: Gt,
        minFilter: Gt,
        generateMipmaps: !1,
        type: Ti,
        format: qt,
        colorSpace: Mi,
        depthBuffer: !1,
      },
      s = ro(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      (this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = ro(e, t, n)));
      const { _lodMax: r } = this;
      (({
        lodMeshes: this._lodMeshes,
        sizeLods: this._sizeLods,
        sigmas: this._sigmas,
      } = Vd(r)),
        (this._blurMaterial = Hd(r, e, t)));
    }
    return s;
  }
  _compileMaterial(e) {
    const t = new Dt(new Dn(), e);
    this._renderer.compile(t, Ui);
  }
  _sceneToCubeUV(e, t, n, s, r) {
    const c = new Vt(90, 1, t, n),
      l = [1, -1, 1, 1, 1, 1],
      u = [1, 1, 1, -1, -1, -1],
      d = this._renderer,
      f = d.autoClear,
      m = d.toneMapping;
    (d.getClearColor(io),
      (d.toneMapping = Cn),
      (d.autoClear = !1),
      d.state.buffers.depth.getReversed() &&
        (d.setRenderTarget(s), d.clearDepth(), d.setRenderTarget(null)),
      this._backgroundBox === null &&
        (this._backgroundBox = new Dt(
          new Kt(),
          new it({
            name: "PMREM.Background",
            side: Pt,
            depthWrite: !1,
            depthTest: !1,
          }),
        )));
    const M = this._backgroundBox,
      p = M.material;
    let h = !1;
    const T = e.background;
    T
      ? T.isColor && (p.color.copy(T), (e.background = null), (h = !0))
      : (p.color.copy(io), (h = !0));
    for (let y = 0; y < 6; y++) {
      const C = y % 3;
      C === 0
        ? (c.up.set(0, l[y], 0),
          c.position.set(r.x, r.y, r.z),
          c.lookAt(r.x + u[y], r.y, r.z))
        : C === 1
          ? (c.up.set(0, 0, l[y]),
            c.position.set(r.x, r.y, r.z),
            c.lookAt(r.x, r.y + u[y], r.z))
          : (c.up.set(0, l[y], 0),
            c.position.set(r.x, r.y, r.z),
            c.lookAt(r.x, r.y, r.z + u[y]));
      const D = this._cubeSize;
      (hi(s, C * D, y > 2 ? D : 0, D, D),
        d.setRenderTarget(s),
        h && d.render(M, c),
        d.render(e, c));
    }
    ((d.toneMapping = m), (d.autoClear = f), (e.background = T));
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      s = e.mapping === gi || e.mapping === vi;
    s
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = oo()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = ao());
    const r = s ? this._cubemapMaterial : this._equirectMaterial,
      a = this._lodMeshes[0];
    a.material = r;
    const o = r.uniforms;
    o.envMap.value = e;
    const c = this._cubeSize;
    (hi(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(a, Ui));
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    const s = this._lodMeshes.length;
    for (let r = 1; r < s; r++) this._applyGGXFilter(e, r - 1, r);
    t.autoClear = n;
  }
  _applyGGXFilter(e, t, n) {
    const s = this._renderer,
      r = this._pingPongRenderTarget;
    if (this._ggxMaterial === null) {
      const T = 3 * Math.max(this._cubeSize, 16),
        y = 4 * this._cubeSize;
      this._ggxMaterial = Gd(this._lodMax, T, y);
    }
    const a = this._ggxMaterial,
      o = this._lodMeshes[n];
    o.material = a;
    const c = a.uniforms,
      l = n / (this._lodMeshes.length - 1),
      u = t / (this._lodMeshes.length - 1),
      d = Math.sqrt(l * l - u * u),
      f = 0.05 + l * 0.95,
      m = d * f,
      { _lodMax: g } = this,
      M = this._sizeLods[n],
      p = 3 * M * (n > g - wn ? n - g + wn : 0),
      h = 4 * (this._cubeSize - M);
    ((c.envMap.value = e.texture),
      (c.roughness.value = m),
      (c.mipInt.value = g - t),
      hi(r, p, h, 3 * M, 2 * M),
      s.setRenderTarget(r),
      s.render(o, Ui),
      (c.envMap.value = r.texture),
      (c.roughness.value = 0),
      (c.mipInt.value = g - n),
      hi(e, p, h, 3 * M, 2 * M),
      s.setRenderTarget(e),
      s.render(o, Ui));
  }
  _blur(e, t, n, s, r) {
    const a = this._pingPongRenderTarget;
    (this._halfBlur(e, a, t, n, s, "latitudinal", r),
      this._halfBlur(a, e, n, n, s, "longitudinal", r));
  }
  _halfBlur(e, t, n, s, r, a, o) {
    const c = this._renderer,
      l = this._blurMaterial;
    a !== "latitudinal" &&
      a !== "longitudinal" &&
      ht("blur direction must be either latitudinal or longitudinal!");
    const u = 3,
      d = this._lodMeshes[s];
    d.material = l;
    const f = l.uniforms,
      m = this._sizeLods[n] - 1,
      g = isFinite(r) ? Math.PI / (2 * m) : (2 * Math.PI) / (2 * Vn - 1),
      M = r / g,
      p = isFinite(r) ? 1 + Math.floor(u * M) : Vn;
    p > Vn &&
      De(
        `sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vn}`,
      );
    const h = [];
    let T = 0;
    for (let P = 0; P < Vn; ++P) {
      const z = P / M,
        S = Math.exp((-z * z) / 2);
      (h.push(S), P === 0 ? (T += S) : P < p && (T += 2 * S));
    }
    for (let P = 0; P < h.length; P++) h[P] = h[P] / T;
    ((f.envMap.value = e.texture),
      (f.samples.value = p),
      (f.weights.value = h),
      (f.latitudinal.value = a === "latitudinal"),
      o && (f.poleAxis.value = o));
    const { _lodMax: y } = this;
    ((f.dTheta.value = g), (f.mipInt.value = y - n));
    const C = this._sizeLods[s],
      D = 3 * C * (s > y - wn ? s - y + wn : 0),
      E = 4 * (this._cubeSize - C);
    (hi(t, D, E, 3 * C, 2 * C), c.setRenderTarget(t), c.render(d, Ui));
  }
}
function Vd(i) {
  const e = [],
    t = [],
    n = [];
  let s = i;
  const r = i - wn + 1 + no.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, s);
    e.push(o);
    let c = 1 / o;
    (a > i - wn ? (c = no[a - i + wn - 1]) : a === 0 && (c = 0), t.push(c));
    const l = 1 / (o - 2),
      u = -l,
      d = 1 + l,
      f = [u, u, d, u, d, d, u, u, d, d, u, d],
      m = 6,
      g = 6,
      M = 3,
      p = 2,
      h = 1,
      T = new Float32Array(M * g * m),
      y = new Float32Array(p * g * m),
      C = new Float32Array(h * g * m);
    for (let E = 0; E < m; E++) {
      const P = ((E % 3) * 2) / 3 - 1,
        z = E > 2 ? 0 : -1,
        S = [
          P,
          z,
          0,
          P + 2 / 3,
          z,
          0,
          P + 2 / 3,
          z + 1,
          0,
          P,
          z,
          0,
          P + 2 / 3,
          z + 1,
          0,
          P,
          z + 1,
          0,
        ];
      (T.set(S, M * g * E), y.set(f, p * g * E));
      const v = [E, E, E, E, E, E];
      C.set(v, h * g * E);
    }
    const D = new Dn();
    (D.setAttribute("position", new en(T, M)),
      D.setAttribute("uv", new en(y, p)),
      D.setAttribute("faceIndex", new en(C, h)),
      n.push(new Dt(D, null)),
      s > wn && s--);
  }
  return { lodMeshes: n, sizeLods: e, sigmas: t };
}
function ro(i, e, t) {
  const n = new Yn(i, e, t);
  return (
    (n.texture.mapping = Ps),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function hi(i, e, t, n, s) {
  (i.viewport.set(e, t, n, s), i.scissor.set(e, t, n, s));
}
function Gd(i, e, t) {
  return new _n({
    name: "PMREMGGXConvolution",
    defines: {
      GGX_SAMPLES: zd,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`,
    },
    uniforms: {
      envMap: { value: null },
      roughness: { value: 0 },
      mipInt: { value: 0 },
    },
    vertexShader: Us(),
    fragmentShader: `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,
    blending: fn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Hd(i, e, t) {
  const n = new Float32Array(Vn),
    s = new F(0, 1, 0);
  return new _n({
    name: "SphericalGaussianBlur",
    defines: {
      n: Vn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: s },
    },
    vertexShader: Us(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: fn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function ao() {
  return new _n({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: Us(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: fn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function oo() {
  return new _n({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: Us(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: fn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Us() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function Wd(i) {
  let e = new WeakMap(),
    t = null;
  function n(o) {
    if (o && o.isTexture) {
      const c = o.mapping,
        l = c === Er || c === Tr,
        u = c === gi || c === vi;
      if (l || u) {
        let d = e.get(o);
        const f = d !== void 0 ? d.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== f)
          return (
            t === null && (t = new so(i)),
            (d = l ? t.fromEquirectangular(o, d) : t.fromCubemap(o, d)),
            (d.texture.pmremVersion = o.pmremVersion),
            e.set(o, d),
            d.texture
          );
        if (d !== void 0) return d.texture;
        {
          const m = o.image;
          return (l && m && m.height > 0) || (u && m && s(m))
            ? (t === null && (t = new so(i)),
              (d = l ? t.fromEquirectangular(o) : t.fromCubemap(o)),
              (d.texture.pmremVersion = o.pmremVersion),
              e.set(o, d),
              o.addEventListener("dispose", r),
              d.texture)
            : null;
        }
      }
    }
    return o;
  }
  function s(o) {
    let c = 0;
    const l = 6;
    for (let u = 0; u < l; u++) o[u] !== void 0 && c++;
    return c === l;
  }
  function r(o) {
    const c = o.target;
    c.removeEventListener("dispose", r);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function a() {
    ((e = new WeakMap()), t !== null && (t.dispose(), (t = null)));
  }
  return { get: n, dispose: a };
}
function Xd(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    const s = i.getExtension(n);
    return ((e[n] = s), s);
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function () {
      (t("EXT_color_buffer_float"),
        t("WEBGL_clip_cull_distance"),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture"),
        t("WEBGL_render_shared_exponent"));
    },
    get: function (n) {
      const s = t(n);
      return (
        s === null && zi("WebGLRenderer: " + n + " extension not supported."),
        s
      );
    },
  };
}
function Yd(i, e, t, n) {
  const s = {},
    r = new WeakMap();
  function a(d) {
    const f = d.target;
    f.index !== null && e.remove(f.index);
    for (const g in f.attributes) e.remove(f.attributes[g]);
    (f.removeEventListener("dispose", a), delete s[f.id]);
    const m = r.get(f);
    (m && (e.remove(m), r.delete(f)),
      n.releaseStatesOfGeometry(f),
      f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount,
      t.memory.geometries--);
  }
  function o(d, f) {
    return (
      s[f.id] === !0 ||
        (f.addEventListener("dispose", a),
        (s[f.id] = !0),
        t.memory.geometries++),
      f
    );
  }
  function c(d) {
    const f = d.attributes;
    for (const m in f) e.update(f[m], i.ARRAY_BUFFER);
  }
  function l(d) {
    const f = [],
      m = d.index,
      g = d.attributes.position;
    let M = 0;
    if (m !== null) {
      const T = m.array;
      M = m.version;
      for (let y = 0, C = T.length; y < C; y += 3) {
        const D = T[y + 0],
          E = T[y + 1],
          P = T[y + 2];
        f.push(D, E, E, P, P, D);
      }
    } else if (g !== void 0) {
      const T = g.array;
      M = g.version;
      for (let y = 0, C = T.length / 3 - 1; y < C; y += 3) {
        const D = y + 0,
          E = y + 1,
          P = y + 2;
        f.push(D, E, E, P, P, D);
      }
    } else return;
    const p = new (Yo(f) ? jo : Ko)(f, 1);
    p.version = M;
    const h = r.get(d);
    (h && e.remove(h), r.set(d, p));
  }
  function u(d) {
    const f = r.get(d);
    if (f) {
      const m = d.index;
      m !== null && f.version < m.version && l(d);
    } else l(d);
    return r.get(d);
  }
  return { get: o, update: c, getWireframeAttribute: u };
}
function Zd(i, e, t) {
  let n;
  function s(f) {
    n = f;
  }
  let r, a;
  function o(f) {
    ((r = f.type), (a = f.bytesPerElement));
  }
  function c(f, m) {
    (i.drawElements(n, m, r, f * a), t.update(m, n, 1));
  }
  function l(f, m, g) {
    g !== 0 && (i.drawElementsInstanced(n, m, r, f * a, g), t.update(m, n, g));
  }
  function u(f, m, g) {
    if (g === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, m, 0, r, f, 0, g);
    let p = 0;
    for (let h = 0; h < g; h++) p += m[h];
    t.update(p, n, 1);
  }
  function d(f, m, g, M) {
    if (g === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null) for (let h = 0; h < f.length; h++) l(f[h] / a, m[h], M[h]);
    else {
      p.multiDrawElementsInstancedWEBGL(n, m, 0, r, f, 0, M, 0, g);
      let h = 0;
      for (let T = 0; T < g; T++) h += m[T] * M[T];
      t.update(h, n, 1);
    }
  }
  ((this.setMode = s),
    (this.setIndex = o),
    (this.render = c),
    (this.renderInstances = l),
    (this.renderMultiDraw = u),
    (this.renderMultiDrawInstances = d));
}
function qd(i) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(r, a, o) {
    switch ((t.calls++, a)) {
      case i.TRIANGLES:
        t.triangles += o * (r / 3);
        break;
      case i.LINES:
        t.lines += o * (r / 2);
        break;
      case i.LINE_STRIP:
        t.lines += o * (r - 1);
        break;
      case i.LINE_LOOP:
        t.lines += o * r;
        break;
      case i.POINTS:
        t.points += o * r;
        break;
      default:
        ht("WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function s() {
    ((t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0));
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: s,
    update: n,
  };
}
function Kd(i, e, t) {
  const n = new WeakMap(),
    s = new ut();
  function r(a, o, c) {
    const l = a.morphTargetInfluences,
      u =
        o.morphAttributes.position ||
        o.morphAttributes.normal ||
        o.morphAttributes.color,
      d = u !== void 0 ? u.length : 0;
    let f = n.get(o);
    if (f === void 0 || f.count !== d) {
      let S = function () {
        (P.dispose(), n.delete(o), o.removeEventListener("dispose", S));
      };
      f !== void 0 && f.texture.dispose();
      const m = o.morphAttributes.position !== void 0,
        g = o.morphAttributes.normal !== void 0,
        M = o.morphAttributes.color !== void 0,
        p = o.morphAttributes.position || [],
        h = o.morphAttributes.normal || [],
        T = o.morphAttributes.color || [];
      let y = 0;
      (m === !0 && (y = 1), g === !0 && (y = 2), M === !0 && (y = 3));
      let C = o.attributes.position.count * y,
        D = 1;
      C > e.maxTextureSize &&
        ((D = Math.ceil(C / e.maxTextureSize)), (C = e.maxTextureSize));
      const E = new Float32Array(C * D * 4 * d),
        P = new Zo(E, C, D, d);
      ((P.type = dn), (P.needsUpdate = !0));
      const z = y * 4;
      for (let v = 0; v < d; v++) {
        const R = p[v],
          B = h[v],
          V = T[v],
          H = C * D * 4 * v;
        for (let q = 0; q < R.count; q++) {
          const Y = q * z;
          (m === !0 &&
            (s.fromBufferAttribute(R, q),
            (E[H + Y + 0] = s.x),
            (E[H + Y + 1] = s.y),
            (E[H + Y + 2] = s.z),
            (E[H + Y + 3] = 0)),
            g === !0 &&
              (s.fromBufferAttribute(B, q),
              (E[H + Y + 4] = s.x),
              (E[H + Y + 5] = s.y),
              (E[H + Y + 6] = s.z),
              (E[H + Y + 7] = 0)),
            M === !0 &&
              (s.fromBufferAttribute(V, q),
              (E[H + Y + 8] = s.x),
              (E[H + Y + 9] = s.y),
              (E[H + Y + 10] = s.z),
              (E[H + Y + 11] = V.itemSize === 4 ? s.w : 1)));
        }
      }
      ((f = { count: d, texture: P, size: new Ie(C, D) }),
        n.set(o, f),
        o.addEventListener("dispose", S));
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      c.getUniforms().setValue(i, "morphTexture", a.morphTexture, t);
    else {
      let m = 0;
      for (let M = 0; M < l.length; M++) m += l[M];
      const g = o.morphTargetsRelative ? 1 : 1 - m;
      (c.getUniforms().setValue(i, "morphTargetBaseInfluence", g),
        c.getUniforms().setValue(i, "morphTargetInfluences", l));
    }
    (c.getUniforms().setValue(i, "morphTargetsTexture", f.texture, t),
      c.getUniforms().setValue(i, "morphTargetsTextureSize", f.size));
  }
  return { update: r };
}
function jd(i, e, t, n) {
  let s = new WeakMap();
  function r(c) {
    const l = n.render.frame,
      u = c.geometry,
      d = e.get(c, u);
    if (
      (s.get(d) !== l && (e.update(d), s.set(d, l)),
      c.isInstancedMesh &&
        (c.hasEventListener("dispose", o) === !1 &&
          c.addEventListener("dispose", o),
        s.get(c) !== l &&
          (t.update(c.instanceMatrix, i.ARRAY_BUFFER),
          c.instanceColor !== null && t.update(c.instanceColor, i.ARRAY_BUFFER),
          s.set(c, l))),
      c.isSkinnedMesh)
    ) {
      const f = c.skeleton;
      s.get(f) !== l && (f.update(), s.set(f, l));
    }
    return d;
  }
  function a() {
    s = new WeakMap();
  }
  function o(c) {
    const l = c.target;
    (l.removeEventListener("dispose", o),
      t.remove(l.instanceMatrix),
      l.instanceColor !== null && t.remove(l.instanceColor));
  }
  return { update: r, dispose: a };
}
const sl = new Et(),
  lo = new tl(1, 1),
  rl = new Zo(),
  al = new Mc(),
  ol = new Qo(),
  co = [],
  ho = [],
  uo = new Float32Array(16),
  fo = new Float32Array(9),
  po = new Float32Array(4);
function Ai(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const s = e * t;
  let r = co[s];
  if ((r === void 0 && ((r = new Float32Array(s)), (co[s] = r)), e !== 0)) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== e; ++a) ((o += t), i[a].toArray(r, o));
  }
  return r;
}
function mt(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++) if (i[t] !== e[t]) return !1;
  return !0;
}
function xt(i, e) {
  for (let t = 0, n = e.length; t < n; t++) i[t] = e[t];
}
function Is(i, e) {
  let t = ho[e];
  t === void 0 && ((t = new Int32Array(e)), (ho[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = i.allocateTextureUnit();
  return t;
}
function $d(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), (t[0] = e));
}
function Jd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (mt(t, e)) return;
    (i.uniform2fv(this.addr, e), xt(t, e));
  }
}
function Qd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (i.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (mt(t, e)) return;
    (i.uniform3fv(this.addr, e), xt(t, e));
  }
}
function ef(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (mt(t, e)) return;
    (i.uniform4fv(this.addr, e), xt(t, e));
  }
}
function tf(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (mt(t, e)) return;
    (i.uniformMatrix2fv(this.addr, !1, e), xt(t, e));
  } else {
    if (mt(t, n)) return;
    (po.set(n), i.uniformMatrix2fv(this.addr, !1, po), xt(t, n));
  }
}
function nf(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (mt(t, e)) return;
    (i.uniformMatrix3fv(this.addr, !1, e), xt(t, e));
  } else {
    if (mt(t, n)) return;
    (fo.set(n), i.uniformMatrix3fv(this.addr, !1, fo), xt(t, n));
  }
}
function sf(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (mt(t, e)) return;
    (i.uniformMatrix4fv(this.addr, !1, e), xt(t, e));
  } else {
    if (mt(t, n)) return;
    (uo.set(n), i.uniformMatrix4fv(this.addr, !1, uo), xt(t, n));
  }
}
function rf(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), (t[0] = e));
}
function af(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (mt(t, e)) return;
    (i.uniform2iv(this.addr, e), xt(t, e));
  }
}
function of(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (mt(t, e)) return;
    (i.uniform3iv(this.addr, e), xt(t, e));
  }
}
function lf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (mt(t, e)) return;
    (i.uniform4iv(this.addr, e), xt(t, e));
  }
}
function cf(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), (t[0] = e));
}
function hf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (mt(t, e)) return;
    (i.uniform2uiv(this.addr, e), xt(t, e));
  }
}
function uf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (mt(t, e)) return;
    (i.uniform3uiv(this.addr, e), xt(t, e));
  }
}
function df(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (mt(t, e)) return;
    (i.uniform4uiv(this.addr, e), xt(t, e));
  }
}
function ff(i, e, t) {
  const n = this.cache,
    s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), (n[0] = s));
  let r;
  (this.type === i.SAMPLER_2D_SHADOW
    ? ((lo.compareFunction = Xo), (r = lo))
    : (r = sl),
    t.setTexture2D(e || r, s));
}
function pf(i, e, t) {
  const n = this.cache,
    s = t.allocateTextureUnit();
  (n[0] !== s && (i.uniform1i(this.addr, s), (n[0] = s)),
    t.setTexture3D(e || al, s));
}
function mf(i, e, t) {
  const n = this.cache,
    s = t.allocateTextureUnit();
  (n[0] !== s && (i.uniform1i(this.addr, s), (n[0] = s)),
    t.setTextureCube(e || ol, s));
}
function xf(i, e, t) {
  const n = this.cache,
    s = t.allocateTextureUnit();
  (n[0] !== s && (i.uniform1i(this.addr, s), (n[0] = s)),
    t.setTexture2DArray(e || rl, s));
}
function _f(i) {
  switch (i) {
    case 5126:
      return $d;
    case 35664:
      return Jd;
    case 35665:
      return Qd;
    case 35666:
      return ef;
    case 35674:
      return tf;
    case 35675:
      return nf;
    case 35676:
      return sf;
    case 5124:
    case 35670:
      return rf;
    case 35667:
    case 35671:
      return af;
    case 35668:
    case 35672:
      return of;
    case 35669:
    case 35673:
      return lf;
    case 5125:
      return cf;
    case 36294:
      return hf;
    case 36295:
      return uf;
    case 36296:
      return df;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return ff;
    case 35679:
    case 36299:
    case 36307:
      return pf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return mf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return xf;
  }
}
function gf(i, e) {
  i.uniform1fv(this.addr, e);
}
function vf(i, e) {
  const t = Ai(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function Mf(i, e) {
  const t = Ai(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function Sf(i, e) {
  const t = Ai(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function bf(i, e) {
  const t = Ai(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function yf(i, e) {
  const t = Ai(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function Ef(i, e) {
  const t = Ai(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function Tf(i, e) {
  i.uniform1iv(this.addr, e);
}
function Af(i, e) {
  i.uniform2iv(this.addr, e);
}
function wf(i, e) {
  i.uniform3iv(this.addr, e);
}
function Cf(i, e) {
  i.uniform4iv(this.addr, e);
}
function Rf(i, e) {
  i.uniform1uiv(this.addr, e);
}
function Pf(i, e) {
  i.uniform2uiv(this.addr, e);
}
function Df(i, e) {
  i.uniform3uiv(this.addr, e);
}
function Lf(i, e) {
  i.uniform4uiv(this.addr, e);
}
function Uf(i, e, t) {
  const n = this.cache,
    s = e.length,
    r = Is(t, s);
  mt(n, r) || (i.uniform1iv(this.addr, r), xt(n, r));
  for (let a = 0; a !== s; ++a) t.setTexture2D(e[a] || sl, r[a]);
}
function If(i, e, t) {
  const n = this.cache,
    s = e.length,
    r = Is(t, s);
  mt(n, r) || (i.uniform1iv(this.addr, r), xt(n, r));
  for (let a = 0; a !== s; ++a) t.setTexture3D(e[a] || al, r[a]);
}
function Nf(i, e, t) {
  const n = this.cache,
    s = e.length,
    r = Is(t, s);
  mt(n, r) || (i.uniform1iv(this.addr, r), xt(n, r));
  for (let a = 0; a !== s; ++a) t.setTextureCube(e[a] || ol, r[a]);
}
function Ff(i, e, t) {
  const n = this.cache,
    s = e.length,
    r = Is(t, s);
  mt(n, r) || (i.uniform1iv(this.addr, r), xt(n, r));
  for (let a = 0; a !== s; ++a) t.setTexture2DArray(e[a] || rl, r[a]);
}
function Of(i) {
  switch (i) {
    case 5126:
      return gf;
    case 35664:
      return vf;
    case 35665:
      return Mf;
    case 35666:
      return Sf;
    case 35674:
      return bf;
    case 35675:
      return yf;
    case 35676:
      return Ef;
    case 5124:
    case 35670:
      return Tf;
    case 35667:
    case 35671:
      return Af;
    case 35668:
    case 35672:
      return wf;
    case 35669:
    case 35673:
      return Cf;
    case 5125:
      return Rf;
    case 36294:
      return Pf;
    case 36295:
      return Df;
    case 36296:
      return Lf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Uf;
    case 35679:
    case 36299:
    case 36307:
      return If;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Nf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Ff;
  }
}
class Bf {
  constructor(e, t, n) {
    ((this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.setValue = _f(t.type)));
  }
}
class zf {
  constructor(e, t, n) {
    ((this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.size = t.size),
      (this.setValue = Of(t.type)));
  }
}
class kf {
  constructor(e) {
    ((this.id = e), (this.seq = []), (this.map = {}));
  }
  setValue(e, t, n) {
    const s = this.seq;
    for (let r = 0, a = s.length; r !== a; ++r) {
      const o = s[r];
      o.setValue(e, t[o.id], n);
    }
  }
}
const dr = /(\w+)(\])?(\[|\.)?/g;
function mo(i, e) {
  (i.seq.push(e), (i.map[e.id] = e));
}
function Vf(i, e, t) {
  const n = i.name,
    s = n.length;
  for (dr.lastIndex = 0; ; ) {
    const r = dr.exec(n),
      a = dr.lastIndex;
    let o = r[1];
    const c = r[2] === "]",
      l = r[3];
    if ((c && (o = o | 0), l === void 0 || (l === "[" && a + 2 === s))) {
      mo(t, l === void 0 ? new Bf(o, i, e) : new zf(o, i, e));
      break;
    } else {
      let d = t.map[o];
      (d === void 0 && ((d = new kf(o)), mo(t, d)), (t = d));
    }
  }
}
class vs {
  constructor(e, t) {
    ((this.seq = []), (this.map = {}));
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let s = 0; s < n; ++s) {
      const r = e.getActiveUniform(t, s),
        a = e.getUniformLocation(t, r.name);
      Vf(r, a, this);
    }
  }
  setValue(e, t, n, s) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, s);
  }
  setOptional(e, t, n) {
    const s = t[n];
    s !== void 0 && this.setValue(e, n, s);
  }
  static upload(e, t, n, s) {
    for (let r = 0, a = t.length; r !== a; ++r) {
      const o = t[r],
        c = n[o.id];
      c.needsUpdate !== !1 && o.setValue(e, c.value, s);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let s = 0, r = e.length; s !== r; ++s) {
      const a = e[s];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function xo(i, e, t) {
  const n = i.createShader(e);
  return (i.shaderSource(n, t), i.compileShader(n), n);
}
const Gf = 37297;
let Hf = 0;
function Wf(i, e) {
  const t = i.split(`
`),
    n = [],
    s = Math.max(e - 6, 0),
    r = Math.min(e + 6, t.length);
  for (let a = s; a < r; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
const _o = new Ue();
function Xf(i) {
  We._getMatrix(_o, We.workingColorSpace, i);
  const e = `mat3( ${_o.elements.map((t) => t.toFixed(4))} )`;
  switch (We.getTransfer(i)) {
    case Ms:
      return [e, "LinearTransferOETF"];
    case qe:
      return [e, "sRGBTransferOETF"];
    default:
      return (
        De("WebGLProgram: Unsupported color space: ", i),
        [e, "LinearTransferOETF"]
      );
  }
}
function go(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS),
    r = (i.getShaderInfoLog(e) || "").trim();
  if (n && r === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(r);
  if (a) {
    const o = parseInt(a[1]);
    return (
      t.toUpperCase() +
      `

` +
      r +
      `

` +
      Wf(i.getShaderSource(e), o)
    );
  } else return r;
}
function Yf(i, e) {
  const t = Xf(e);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}",
  ].join(`
`);
}
function Zf(i, e) {
  let t;
  switch (e) {
    case Yl:
      t = "Linear";
      break;
    case Zl:
      t = "Reinhard";
      break;
    case ql:
      t = "Cineon";
      break;
    case Kl:
      t = "ACESFilmic";
      break;
    case $l:
      t = "AgX";
      break;
    case Jl:
      t = "Neutral";
      break;
    case jl:
      t = "Custom";
      break;
    default:
      (De("WebGLProgram: Unsupported toneMapping:", e), (t = "Linear"));
  }
  return (
    "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
  );
}
const ds = new F();
function qf() {
  We.getLuminanceCoefficients(ds);
  const i = ds.x.toFixed(4),
    e = ds.y.toFixed(4),
    t = ds.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}",
  ].join(`
`);
}
function Kf(i) {
  return [
    i.extensionClipCullDistance
      ? "#extension GL_ANGLE_clip_cull_distance : require"
      : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : "",
  ].filter(Ii).join(`
`);
}
function jf(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function $f(i, e) {
  const t = {},
    n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let s = 0; s < n; s++) {
    const r = i.getActiveAttrib(e, s),
      a = r.name;
    let o = 1;
    (r.type === i.FLOAT_MAT2 && (o = 2),
      r.type === i.FLOAT_MAT3 && (o = 3),
      r.type === i.FLOAT_MAT4 && (o = 4),
      (t[a] = {
        type: r.type,
        location: i.getAttribLocation(e, a),
        locationSize: o,
      }));
  }
  return t;
}
function Ii(i) {
  return i !== "";
}
function vo(i, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Mo(i, e) {
  return i
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection,
    );
}
const Jf = /^[ \t]*#include +<([\w\d./]+)>/gm;
function sa(i) {
  return i.replace(Jf, ep);
}
const Qf = new Map();
function ep(i, e) {
  let t = Ne[e];
  if (t === void 0) {
    const n = Qf.get(e);
    if (n !== void 0)
      ((t = Ne[n]),
        De(
          'WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
          e,
          n,
        ));
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return sa(t);
}
const tp =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function So(i) {
  return i.replace(tp, np);
}
function np(i, e, t, n) {
  let s = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    s += n
      .replace(/\[\s*i\s*\]/g, "[ " + r + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, r);
  return s;
}
function bo(i) {
  let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return (
    i.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : i.precision === "mediump"
        ? (e += `
#define MEDIUM_PRECISION`)
        : i.precision === "lowp" &&
          (e += `
#define LOW_PRECISION`),
    e
  );
}
function ip(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    i.shadowMapType === No
      ? (e = "SHADOWMAP_TYPE_PCF")
      : i.shadowMapType === Tl
        ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
        : i.shadowMapType === cn && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function sp(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case gi:
      case vi:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Ps:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function rp(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case vi:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function ap(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case Fo:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Wl:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Xl:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function op(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)),
    texelHeight: n,
    maxMip: t,
  };
}
function lp(i, e, t, n) {
  const s = i.getContext(),
    r = t.defines;
  let a = t.vertexShader,
    o = t.fragmentShader;
  const c = ip(t),
    l = sp(t),
    u = rp(t),
    d = ap(t),
    f = op(t),
    m = Kf(t),
    g = jf(r),
    M = s.createProgram();
  let p,
    h,
    T = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  (t.isRawShaderMaterial
    ? ((p = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        g,
      ].filter(Ii).join(`
`)),
      p.length > 0 &&
        (p += `
`),
      (h = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        g,
      ].filter(Ii).join(`
`)),
      h.length > 0 &&
        (h += `
`))
    : ((p = [
        bo(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
        t.batching ? "#define USE_BATCHING" : "",
        t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + u : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.mapUv ? "#define MAP_UV " + t.mapUv : "",
        t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
        t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
        t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
        t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
        t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
        t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
        t.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv
          : "",
        t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
        t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
        t.anisotropyMapUv
          ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv
          : "",
        t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
        t.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv
          : "",
        t.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv
          : "",
        t.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv
          : "",
        t.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv
          : "",
        t.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv
          : "",
        t.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv
          : "",
        t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
        t.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv
          : "",
        t.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv
          : "",
        t.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv
          : "",
        t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + c : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
        t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "#ifdef USE_INSTANCING_MORPH",
        "	uniform sampler2D morphTexture;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_UV1",
        "	attribute vec2 uv1;",
        "#endif",
        "#ifdef USE_UV2",
        "	attribute vec2 uv2;",
        "#endif",
        "#ifdef USE_UV3",
        "	attribute vec2 uv3;",
        "#endif",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(Ii).join(`
`)),
      (h = [
        bo(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + l : "",
        t.envMap ? "#define " + u : "",
        t.envMap ? "#define " + d : "",
        f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
        f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
        f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.dispersion ? "#define USE_DISPERSION" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor || t.batchingColor
          ? "#define USE_COLOR"
          : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + c : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.decodeVideoTextureEmissive
          ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE"
          : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
        t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== Cn ? "#define TONE_MAPPING" : "",
        t.toneMapping !== Cn ? Ne.tonemapping_pars_fragment : "",
        t.toneMapping !== Cn ? Zf("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        Ne.colorspace_pars_fragment,
        Yf("linearToOutputTexel", t.outputColorSpace),
        qf(),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(Ii).join(`
`))),
    (a = sa(a)),
    (a = vo(a, t)),
    (a = Mo(a, t)),
    (o = sa(o)),
    (o = vo(o, t)),
    (o = Mo(o, t)),
    (a = So(a)),
    (o = So(o)),
    t.isRawShaderMaterial !== !0 &&
      ((T = `#version 300 es
`),
      (p =
        [
          m,
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        p),
      (h =
        [
          "#define varying in",
          t.glslVersion === Ua
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === Ua ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        h)));
  const y = T + p + a,
    C = T + h + o,
    D = xo(s, s.VERTEX_SHADER, y),
    E = xo(s, s.FRAGMENT_SHADER, C);
  (s.attachShader(M, D),
    s.attachShader(M, E),
    t.index0AttributeName !== void 0
      ? s.bindAttribLocation(M, 0, t.index0AttributeName)
      : t.morphTargets === !0 && s.bindAttribLocation(M, 0, "position"),
    s.linkProgram(M));
  function P(R) {
    if (i.debug.checkShaderErrors) {
      const B = s.getProgramInfoLog(M) || "",
        V = s.getShaderInfoLog(D) || "",
        H = s.getShaderInfoLog(E) || "",
        q = B.trim(),
        Y = V.trim(),
        ne = H.trim();
      let G = !0,
        te = !0;
      if (s.getProgramParameter(M, s.LINK_STATUS) === !1)
        if (((G = !1), typeof i.debug.onShaderError == "function"))
          i.debug.onShaderError(s, M, D, E);
        else {
          const re = go(s, D, "vertex"),
            Se = go(s, E, "fragment");
          ht(
            "THREE.WebGLProgram: Shader Error " +
              s.getError() +
              " - VALIDATE_STATUS " +
              s.getProgramParameter(M, s.VALIDATE_STATUS) +
              `

Material Name: ` +
              R.name +
              `
Material Type: ` +
              R.type +
              `

Program Info Log: ` +
              q +
              `
` +
              re +
              `
` +
              Se,
          );
        }
      else
        q !== ""
          ? De("WebGLProgram: Program Info Log:", q)
          : (Y === "" || ne === "") && (te = !1);
      te &&
        (R.diagnostics = {
          runnable: G,
          programLog: q,
          vertexShader: { log: Y, prefix: p },
          fragmentShader: { log: ne, prefix: h },
        });
    }
    (s.deleteShader(D), s.deleteShader(E), (z = new vs(s, M)), (S = $f(s, M)));
  }
  let z;
  this.getUniforms = function () {
    return (z === void 0 && P(this), z);
  };
  let S;
  this.getAttributes = function () {
    return (S === void 0 && P(this), S);
  };
  let v = t.rendererExtensionParallelShaderCompile === !1;
  return (
    (this.isReady = function () {
      return (v === !1 && (v = s.getProgramParameter(M, Gf)), v);
    }),
    (this.destroy = function () {
      (n.releaseStatesOfProgram(this),
        s.deleteProgram(M),
        (this.program = void 0));
    }),
    (this.type = t.shaderType),
    (this.name = t.shaderName),
    (this.id = Hf++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = M),
    (this.vertexShader = D),
    (this.fragmentShader = E),
    this
  );
}
let cp = 0;
class hp {
  constructor() {
    ((this.shaderCache = new Map()), (this.materialCache = new Map()));
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      s = this._getShaderStage(t),
      r = this._getShaderStage(n),
      a = this._getShaderCacheForMaterial(e);
    return (
      a.has(s) === !1 && (a.add(s), s.usedTimes++),
      a.has(r) === !1 && (a.add(r), r.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      (n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code));
    return (this.materialCache.delete(e), this);
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    (this.shaderCache.clear(), this.materialCache.clear());
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return (n === void 0 && ((n = new Set()), t.set(e, n)), n);
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return (n === void 0 && ((n = new up(e)), t.set(e, n)), n);
  }
}
class up {
  constructor(e) {
    ((this.id = cp++), (this.code = e), (this.usedTimes = 0));
  }
}
function dp(i, e, t, n, s, r, a) {
  const o = new xa(),
    c = new hp(),
    l = new Set(),
    u = [],
    d = s.logarithmicDepthBuffer,
    f = s.vertexTextures;
  let m = s.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function M(S) {
    return (l.add(S), S === 0 ? "uv" : `uv${S}`);
  }
  function p(S, v, R, B, V) {
    const H = B.fog,
      q = V.geometry,
      Y = S.isMeshStandardMaterial ? B.environment : null,
      ne = (S.isMeshStandardMaterial ? t : e).get(S.envMap || Y),
      G = ne && ne.mapping === Ps ? ne.image.height : null,
      te = g[S.type];
    S.precision !== null &&
      ((m = s.getMaxPrecision(S.precision)),
      m !== S.precision &&
        De(
          "WebGLProgram.getParameters:",
          S.precision,
          "not supported, using",
          m,
          "instead.",
        ));
    const re =
        q.morphAttributes.position ||
        q.morphAttributes.normal ||
        q.morphAttributes.color,
      Se = re !== void 0 ? re.length : 0;
    let Ge = 0;
    (q.morphAttributes.position !== void 0 && (Ge = 1),
      q.morphAttributes.normal !== void 0 && (Ge = 2),
      q.morphAttributes.color !== void 0 && (Ge = 3));
    let Xe, Qe, et, X;
    if (te) {
      const Ye = Jt[te];
      ((Xe = Ye.vertexShader), (Qe = Ye.fragmentShader));
    } else
      ((Xe = S.vertexShader),
        (Qe = S.fragmentShader),
        c.update(S),
        (et = c.getVertexShaderID(S)),
        (X = c.getFragmentShaderID(S)));
    const j = i.getRenderTarget(),
      de = i.state.buffers.depth.getReversed(),
      Le = V.isInstancedMesh === !0,
      ge = V.isBatchedMesh === !0,
      Be = !!S.map,
      gt = !!S.matcap,
      Fe = !!ne,
      st = !!S.aoMap,
      A = !!S.lightMap,
      ze = !!S.bumpMap,
      ke = !!S.normalMap,
      tt = !!S.displacementMap,
      me = !!S.emissiveMap,
      rt = !!S.metalnessMap,
      Me = !!S.roughnessMap,
      Pe = S.anisotropy > 0,
      b = S.clearcoat > 0,
      x = S.dispersion > 0,
      I = S.iridescence > 0,
      W = S.sheen > 0,
      K = S.transmission > 0,
      k = Pe && !!S.anisotropyMap,
      _e = b && !!S.clearcoatMap,
      oe = b && !!S.clearcoatNormalMap,
      be = b && !!S.clearcoatRoughnessMap,
      xe = I && !!S.iridescenceMap,
      $ = I && !!S.iridescenceThicknessMap,
      ee = W && !!S.sheenColorMap,
      Ae = W && !!S.sheenRoughnessMap,
      Ee = !!S.specularMap,
      he = !!S.specularColorMap,
      Ce = !!S.specularIntensityMap,
      w = K && !!S.transmissionMap,
      le = K && !!S.thicknessMap,
      ie = !!S.gradientMap,
      se = !!S.alphaMap,
      J = S.alphaTest > 0,
      Z = !!S.alphaHash,
      fe = !!S.extensions;
    let Re = Cn;
    S.toneMapped &&
      (j === null || j.isXRRenderTarget === !0) &&
      (Re = i.toneMapping);
    const nt = {
      shaderID: te,
      shaderType: S.type,
      shaderName: S.name,
      vertexShader: Xe,
      fragmentShader: Qe,
      defines: S.defines,
      customVertexShaderID: et,
      customFragmentShaderID: X,
      isRawShaderMaterial: S.isRawShaderMaterial === !0,
      glslVersion: S.glslVersion,
      precision: m,
      batching: ge,
      batchingColor: ge && V._colorsTexture !== null,
      instancing: Le,
      instancingColor: Le && V.instanceColor !== null,
      instancingMorph: Le && V.morphTexture !== null,
      supportsVertexTextures: f,
      outputColorSpace:
        j === null
          ? i.outputColorSpace
          : j.isXRRenderTarget === !0
            ? j.texture.colorSpace
            : Mi,
      alphaToCoverage: !!S.alphaToCoverage,
      map: Be,
      matcap: gt,
      envMap: Fe,
      envMapMode: Fe && ne.mapping,
      envMapCubeUVHeight: G,
      aoMap: st,
      lightMap: A,
      bumpMap: ze,
      normalMap: ke,
      displacementMap: f && tt,
      emissiveMap: me,
      normalMapObjectSpace: ke && S.normalMapType === ic,
      normalMapTangentSpace: ke && S.normalMapType === nc,
      metalnessMap: rt,
      roughnessMap: Me,
      anisotropy: Pe,
      anisotropyMap: k,
      clearcoat: b,
      clearcoatMap: _e,
      clearcoatNormalMap: oe,
      clearcoatRoughnessMap: be,
      dispersion: x,
      iridescence: I,
      iridescenceMap: xe,
      iridescenceThicknessMap: $,
      sheen: W,
      sheenColorMap: ee,
      sheenRoughnessMap: Ae,
      specularMap: Ee,
      specularColorMap: he,
      specularIntensityMap: Ce,
      transmission: K,
      transmissionMap: w,
      thicknessMap: le,
      gradientMap: ie,
      opaque:
        S.transparent === !1 && S.blending === mi && S.alphaToCoverage === !1,
      alphaMap: se,
      alphaTest: J,
      alphaHash: Z,
      combine: S.combine,
      mapUv: Be && M(S.map.channel),
      aoMapUv: st && M(S.aoMap.channel),
      lightMapUv: A && M(S.lightMap.channel),
      bumpMapUv: ze && M(S.bumpMap.channel),
      normalMapUv: ke && M(S.normalMap.channel),
      displacementMapUv: tt && M(S.displacementMap.channel),
      emissiveMapUv: me && M(S.emissiveMap.channel),
      metalnessMapUv: rt && M(S.metalnessMap.channel),
      roughnessMapUv: Me && M(S.roughnessMap.channel),
      anisotropyMapUv: k && M(S.anisotropyMap.channel),
      clearcoatMapUv: _e && M(S.clearcoatMap.channel),
      clearcoatNormalMapUv: oe && M(S.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: be && M(S.clearcoatRoughnessMap.channel),
      iridescenceMapUv: xe && M(S.iridescenceMap.channel),
      iridescenceThicknessMapUv: $ && M(S.iridescenceThicknessMap.channel),
      sheenColorMapUv: ee && M(S.sheenColorMap.channel),
      sheenRoughnessMapUv: Ae && M(S.sheenRoughnessMap.channel),
      specularMapUv: Ee && M(S.specularMap.channel),
      specularColorMapUv: he && M(S.specularColorMap.channel),
      specularIntensityMapUv: Ce && M(S.specularIntensityMap.channel),
      transmissionMapUv: w && M(S.transmissionMap.channel),
      thicknessMapUv: le && M(S.thicknessMap.channel),
      alphaMapUv: se && M(S.alphaMap.channel),
      vertexTangents: !!q.attributes.tangent && (ke || Pe),
      vertexColors: S.vertexColors,
      vertexAlphas:
        S.vertexColors === !0 &&
        !!q.attributes.color &&
        q.attributes.color.itemSize === 4,
      pointsUvs: V.isPoints === !0 && !!q.attributes.uv && (Be || se),
      fog: !!H,
      useFog: S.fog === !0,
      fogExp2: !!H && H.isFogExp2,
      flatShading: S.flatShading === !0 && S.wireframe === !1,
      sizeAttenuation: S.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      reversedDepthBuffer: de,
      skinning: V.isSkinnedMesh === !0,
      morphTargets: q.morphAttributes.position !== void 0,
      morphNormals: q.morphAttributes.normal !== void 0,
      morphColors: q.morphAttributes.color !== void 0,
      morphTargetsCount: Se,
      morphTextureStride: Ge,
      numDirLights: v.directional.length,
      numPointLights: v.point.length,
      numSpotLights: v.spot.length,
      numSpotLightMaps: v.spotLightMap.length,
      numRectAreaLights: v.rectArea.length,
      numHemiLights: v.hemi.length,
      numDirLightShadows: v.directionalShadowMap.length,
      numPointLightShadows: v.pointShadowMap.length,
      numSpotLightShadows: v.spotShadowMap.length,
      numSpotLightShadowsWithMaps: v.numSpotLightShadowsWithMaps,
      numLightProbes: v.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: S.dithering,
      shadowMapEnabled: i.shadowMap.enabled && R.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: Re,
      decodeVideoTexture:
        Be &&
        S.map.isVideoTexture === !0 &&
        We.getTransfer(S.map.colorSpace) === qe,
      decodeVideoTextureEmissive:
        me &&
        S.emissiveMap.isVideoTexture === !0 &&
        We.getTransfer(S.emissiveMap.colorSpace) === qe,
      premultipliedAlpha: S.premultipliedAlpha,
      doubleSided: S.side === hn,
      flipSided: S.side === Pt,
      useDepthPacking: S.depthPacking >= 0,
      depthPacking: S.depthPacking || 0,
      index0AttributeName: S.index0AttributeName,
      extensionClipCullDistance:
        fe &&
        S.extensions.clipCullDistance === !0 &&
        n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw:
        ((fe && S.extensions.multiDraw === !0) || ge) &&
        n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has(
        "KHR_parallel_shader_compile",
      ),
      customProgramCacheKey: S.customProgramCacheKey(),
    };
    return (
      (nt.vertexUv1s = l.has(1)),
      (nt.vertexUv2s = l.has(2)),
      (nt.vertexUv3s = l.has(3)),
      l.clear(),
      nt
    );
  }
  function h(S) {
    const v = [];
    if (
      (S.shaderID
        ? v.push(S.shaderID)
        : (v.push(S.customVertexShaderID), v.push(S.customFragmentShaderID)),
      S.defines !== void 0)
    )
      for (const R in S.defines) (v.push(R), v.push(S.defines[R]));
    return (
      S.isRawShaderMaterial === !1 &&
        (T(v, S), y(v, S), v.push(i.outputColorSpace)),
      v.push(S.customProgramCacheKey),
      v.join()
    );
  }
  function T(S, v) {
    (S.push(v.precision),
      S.push(v.outputColorSpace),
      S.push(v.envMapMode),
      S.push(v.envMapCubeUVHeight),
      S.push(v.mapUv),
      S.push(v.alphaMapUv),
      S.push(v.lightMapUv),
      S.push(v.aoMapUv),
      S.push(v.bumpMapUv),
      S.push(v.normalMapUv),
      S.push(v.displacementMapUv),
      S.push(v.emissiveMapUv),
      S.push(v.metalnessMapUv),
      S.push(v.roughnessMapUv),
      S.push(v.anisotropyMapUv),
      S.push(v.clearcoatMapUv),
      S.push(v.clearcoatNormalMapUv),
      S.push(v.clearcoatRoughnessMapUv),
      S.push(v.iridescenceMapUv),
      S.push(v.iridescenceThicknessMapUv),
      S.push(v.sheenColorMapUv),
      S.push(v.sheenRoughnessMapUv),
      S.push(v.specularMapUv),
      S.push(v.specularColorMapUv),
      S.push(v.specularIntensityMapUv),
      S.push(v.transmissionMapUv),
      S.push(v.thicknessMapUv),
      S.push(v.combine),
      S.push(v.fogExp2),
      S.push(v.sizeAttenuation),
      S.push(v.morphTargetsCount),
      S.push(v.morphAttributeCount),
      S.push(v.numDirLights),
      S.push(v.numPointLights),
      S.push(v.numSpotLights),
      S.push(v.numSpotLightMaps),
      S.push(v.numHemiLights),
      S.push(v.numRectAreaLights),
      S.push(v.numDirLightShadows),
      S.push(v.numPointLightShadows),
      S.push(v.numSpotLightShadows),
      S.push(v.numSpotLightShadowsWithMaps),
      S.push(v.numLightProbes),
      S.push(v.shadowMapType),
      S.push(v.toneMapping),
      S.push(v.numClippingPlanes),
      S.push(v.numClipIntersection),
      S.push(v.depthPacking));
  }
  function y(S, v) {
    (o.disableAll(),
      v.supportsVertexTextures && o.enable(0),
      v.instancing && o.enable(1),
      v.instancingColor && o.enable(2),
      v.instancingMorph && o.enable(3),
      v.matcap && o.enable(4),
      v.envMap && o.enable(5),
      v.normalMapObjectSpace && o.enable(6),
      v.normalMapTangentSpace && o.enable(7),
      v.clearcoat && o.enable(8),
      v.iridescence && o.enable(9),
      v.alphaTest && o.enable(10),
      v.vertexColors && o.enable(11),
      v.vertexAlphas && o.enable(12),
      v.vertexUv1s && o.enable(13),
      v.vertexUv2s && o.enable(14),
      v.vertexUv3s && o.enable(15),
      v.vertexTangents && o.enable(16),
      v.anisotropy && o.enable(17),
      v.alphaHash && o.enable(18),
      v.batching && o.enable(19),
      v.dispersion && o.enable(20),
      v.batchingColor && o.enable(21),
      v.gradientMap && o.enable(22),
      S.push(o.mask),
      o.disableAll(),
      v.fog && o.enable(0),
      v.useFog && o.enable(1),
      v.flatShading && o.enable(2),
      v.logarithmicDepthBuffer && o.enable(3),
      v.reversedDepthBuffer && o.enable(4),
      v.skinning && o.enable(5),
      v.morphTargets && o.enable(6),
      v.morphNormals && o.enable(7),
      v.morphColors && o.enable(8),
      v.premultipliedAlpha && o.enable(9),
      v.shadowMapEnabled && o.enable(10),
      v.doubleSided && o.enable(11),
      v.flipSided && o.enable(12),
      v.useDepthPacking && o.enable(13),
      v.dithering && o.enable(14),
      v.transmission && o.enable(15),
      v.sheen && o.enable(16),
      v.opaque && o.enable(17),
      v.pointsUvs && o.enable(18),
      v.decodeVideoTexture && o.enable(19),
      v.decodeVideoTextureEmissive && o.enable(20),
      v.alphaToCoverage && o.enable(21),
      S.push(o.mask));
  }
  function C(S) {
    const v = g[S.type];
    let R;
    if (v) {
      const B = Jt[v];
      R = Uc.clone(B.uniforms);
    } else R = S.uniforms;
    return R;
  }
  function D(S, v) {
    let R;
    for (let B = 0, V = u.length; B < V; B++) {
      const H = u[B];
      if (H.cacheKey === v) {
        ((R = H), ++R.usedTimes);
        break;
      }
    }
    return (R === void 0 && ((R = new lp(i, v, S, r)), u.push(R)), R);
  }
  function E(S) {
    if (--S.usedTimes === 0) {
      const v = u.indexOf(S);
      ((u[v] = u[u.length - 1]), u.pop(), S.destroy());
    }
  }
  function P(S) {
    c.remove(S);
  }
  function z() {
    c.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: h,
    getUniforms: C,
    acquireProgram: D,
    releaseProgram: E,
    releaseShaderCache: P,
    programs: u,
    dispose: z,
  };
}
function fp() {
  let i = new WeakMap();
  function e(a) {
    return i.has(a);
  }
  function t(a) {
    let o = i.get(a);
    return (o === void 0 && ((o = {}), i.set(a, o)), o);
  }
  function n(a) {
    i.delete(a);
  }
  function s(a, o, c) {
    i.get(a)[o] = c;
  }
  function r() {
    i = new WeakMap();
  }
  return { has: e, get: t, remove: n, update: s, dispose: r };
}
function pp(i, e) {
  return i.groupOrder !== e.groupOrder
    ? i.groupOrder - e.groupOrder
    : i.renderOrder !== e.renderOrder
      ? i.renderOrder - e.renderOrder
      : i.material.id !== e.material.id
        ? i.material.id - e.material.id
        : i.z !== e.z
          ? i.z - e.z
          : i.id - e.id;
}
function yo(i, e) {
  return i.groupOrder !== e.groupOrder
    ? i.groupOrder - e.groupOrder
    : i.renderOrder !== e.renderOrder
      ? i.renderOrder - e.renderOrder
      : i.z !== e.z
        ? e.z - i.z
        : i.id - e.id;
}
function Eo() {
  const i = [];
  let e = 0;
  const t = [],
    n = [],
    s = [];
  function r() {
    ((e = 0), (t.length = 0), (n.length = 0), (s.length = 0));
  }
  function a(d, f, m, g, M, p) {
    let h = i[e];
    return (
      h === void 0
        ? ((h = {
            id: d.id,
            object: d,
            geometry: f,
            material: m,
            groupOrder: g,
            renderOrder: d.renderOrder,
            z: M,
            group: p,
          }),
          (i[e] = h))
        : ((h.id = d.id),
          (h.object = d),
          (h.geometry = f),
          (h.material = m),
          (h.groupOrder = g),
          (h.renderOrder = d.renderOrder),
          (h.z = M),
          (h.group = p)),
      e++,
      h
    );
  }
  function o(d, f, m, g, M, p) {
    const h = a(d, f, m, g, M, p);
    m.transmission > 0
      ? n.push(h)
      : m.transparent === !0
        ? s.push(h)
        : t.push(h);
  }
  function c(d, f, m, g, M, p) {
    const h = a(d, f, m, g, M, p);
    m.transmission > 0
      ? n.unshift(h)
      : m.transparent === !0
        ? s.unshift(h)
        : t.unshift(h);
  }
  function l(d, f) {
    (t.length > 1 && t.sort(d || pp),
      n.length > 1 && n.sort(f || yo),
      s.length > 1 && s.sort(f || yo));
  }
  function u() {
    for (let d = e, f = i.length; d < f; d++) {
      const m = i[d];
      if (m.id === null) break;
      ((m.id = null),
        (m.object = null),
        (m.geometry = null),
        (m.material = null),
        (m.group = null));
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: s,
    init: r,
    push: o,
    unshift: c,
    finish: u,
    sort: l,
  };
}
function mp() {
  let i = new WeakMap();
  function e(n, s) {
    const r = i.get(n);
    let a;
    return (
      r === void 0
        ? ((a = new Eo()), i.set(n, [a]))
        : s >= r.length
          ? ((a = new Eo()), r.push(a))
          : (a = r[s]),
      a
    );
  }
  function t() {
    i = new WeakMap();
  }
  return { get: e, dispose: t };
}
function xp() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== void 0) return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new F(), color: new $e() };
          break;
        case "SpotLight":
          t = {
            position: new F(),
            direction: new F(),
            color: new $e(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new F(), color: new $e(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new F(), skyColor: new $e(), groundColor: new $e() };
          break;
        case "RectAreaLight":
          t = {
            color: new $e(),
            position: new F(),
            halfWidth: new F(),
            halfHeight: new F(),
          };
          break;
      }
      return ((i[e.id] = t), t);
    },
  };
}
function _p() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== void 0) return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ie(),
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ie(),
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ie(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return ((i[e.id] = t), t);
    },
  };
}
let gp = 0;
function vp(i, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (i.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (i.map ? 1 : 0)
  );
}
function Mp(i) {
  const e = new xp(),
    t = _p(),
    n = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let l = 0; l < 9; l++) n.probe.push(new F());
  const s = new F(),
    r = new ft(),
    a = new ft();
  function o(l) {
    let u = 0,
      d = 0,
      f = 0;
    for (let S = 0; S < 9; S++) n.probe[S].set(0, 0, 0);
    let m = 0,
      g = 0,
      M = 0,
      p = 0,
      h = 0,
      T = 0,
      y = 0,
      C = 0,
      D = 0,
      E = 0,
      P = 0;
    l.sort(vp);
    for (let S = 0, v = l.length; S < v; S++) {
      const R = l[S],
        B = R.color,
        V = R.intensity,
        H = R.distance,
        q = R.shadow && R.shadow.map ? R.shadow.map.texture : null;
      if (R.isAmbientLight) ((u += B.r * V), (d += B.g * V), (f += B.b * V));
      else if (R.isLightProbe) {
        for (let Y = 0; Y < 9; Y++)
          n.probe[Y].addScaledVector(R.sh.coefficients[Y], V);
        P++;
      } else if (R.isDirectionalLight) {
        const Y = e.get(R);
        if ((Y.color.copy(R.color).multiplyScalar(R.intensity), R.castShadow)) {
          const ne = R.shadow,
            G = t.get(R);
          ((G.shadowIntensity = ne.intensity),
            (G.shadowBias = ne.bias),
            (G.shadowNormalBias = ne.normalBias),
            (G.shadowRadius = ne.radius),
            (G.shadowMapSize = ne.mapSize),
            (n.directionalShadow[m] = G),
            (n.directionalShadowMap[m] = q),
            (n.directionalShadowMatrix[m] = R.shadow.matrix),
            T++);
        }
        ((n.directional[m] = Y), m++);
      } else if (R.isSpotLight) {
        const Y = e.get(R);
        (Y.position.setFromMatrixPosition(R.matrixWorld),
          Y.color.copy(B).multiplyScalar(V),
          (Y.distance = H),
          (Y.coneCos = Math.cos(R.angle)),
          (Y.penumbraCos = Math.cos(R.angle * (1 - R.penumbra))),
          (Y.decay = R.decay),
          (n.spot[M] = Y));
        const ne = R.shadow;
        if (
          (R.map &&
            ((n.spotLightMap[D] = R.map),
            D++,
            ne.updateMatrices(R),
            R.castShadow && E++),
          (n.spotLightMatrix[M] = ne.matrix),
          R.castShadow)
        ) {
          const G = t.get(R);
          ((G.shadowIntensity = ne.intensity),
            (G.shadowBias = ne.bias),
            (G.shadowNormalBias = ne.normalBias),
            (G.shadowRadius = ne.radius),
            (G.shadowMapSize = ne.mapSize),
            (n.spotShadow[M] = G),
            (n.spotShadowMap[M] = q),
            C++);
        }
        M++;
      } else if (R.isRectAreaLight) {
        const Y = e.get(R);
        (Y.color.copy(B).multiplyScalar(V),
          Y.halfWidth.set(R.width * 0.5, 0, 0),
          Y.halfHeight.set(0, R.height * 0.5, 0),
          (n.rectArea[p] = Y),
          p++);
      } else if (R.isPointLight) {
        const Y = e.get(R);
        if (
          (Y.color.copy(R.color).multiplyScalar(R.intensity),
          (Y.distance = R.distance),
          (Y.decay = R.decay),
          R.castShadow)
        ) {
          const ne = R.shadow,
            G = t.get(R);
          ((G.shadowIntensity = ne.intensity),
            (G.shadowBias = ne.bias),
            (G.shadowNormalBias = ne.normalBias),
            (G.shadowRadius = ne.radius),
            (G.shadowMapSize = ne.mapSize),
            (G.shadowCameraNear = ne.camera.near),
            (G.shadowCameraFar = ne.camera.far),
            (n.pointShadow[g] = G),
            (n.pointShadowMap[g] = q),
            (n.pointShadowMatrix[g] = R.shadow.matrix),
            y++);
        }
        ((n.point[g] = Y), g++);
      } else if (R.isHemisphereLight) {
        const Y = e.get(R);
        (Y.skyColor.copy(R.color).multiplyScalar(V),
          Y.groundColor.copy(R.groundColor).multiplyScalar(V),
          (n.hemi[h] = Y),
          h++);
      }
    }
    (p > 0 &&
      (i.has("OES_texture_float_linear") === !0
        ? ((n.rectAreaLTC1 = ae.LTC_FLOAT_1), (n.rectAreaLTC2 = ae.LTC_FLOAT_2))
        : ((n.rectAreaLTC1 = ae.LTC_HALF_1), (n.rectAreaLTC2 = ae.LTC_HALF_2))),
      (n.ambient[0] = u),
      (n.ambient[1] = d),
      (n.ambient[2] = f));
    const z = n.hash;
    (z.directionalLength !== m ||
      z.pointLength !== g ||
      z.spotLength !== M ||
      z.rectAreaLength !== p ||
      z.hemiLength !== h ||
      z.numDirectionalShadows !== T ||
      z.numPointShadows !== y ||
      z.numSpotShadows !== C ||
      z.numSpotMaps !== D ||
      z.numLightProbes !== P) &&
      ((n.directional.length = m),
      (n.spot.length = M),
      (n.rectArea.length = p),
      (n.point.length = g),
      (n.hemi.length = h),
      (n.directionalShadow.length = T),
      (n.directionalShadowMap.length = T),
      (n.pointShadow.length = y),
      (n.pointShadowMap.length = y),
      (n.spotShadow.length = C),
      (n.spotShadowMap.length = C),
      (n.directionalShadowMatrix.length = T),
      (n.pointShadowMatrix.length = y),
      (n.spotLightMatrix.length = C + D - E),
      (n.spotLightMap.length = D),
      (n.numSpotLightShadowsWithMaps = E),
      (n.numLightProbes = P),
      (z.directionalLength = m),
      (z.pointLength = g),
      (z.spotLength = M),
      (z.rectAreaLength = p),
      (z.hemiLength = h),
      (z.numDirectionalShadows = T),
      (z.numPointShadows = y),
      (z.numSpotShadows = C),
      (z.numSpotMaps = D),
      (z.numLightProbes = P),
      (n.version = gp++));
  }
  function c(l, u) {
    let d = 0,
      f = 0,
      m = 0,
      g = 0,
      M = 0;
    const p = u.matrixWorldInverse;
    for (let h = 0, T = l.length; h < T; h++) {
      const y = l[h];
      if (y.isDirectionalLight) {
        const C = n.directional[d];
        (C.direction.setFromMatrixPosition(y.matrixWorld),
          s.setFromMatrixPosition(y.target.matrixWorld),
          C.direction.sub(s),
          C.direction.transformDirection(p),
          d++);
      } else if (y.isSpotLight) {
        const C = n.spot[m];
        (C.position.setFromMatrixPosition(y.matrixWorld),
          C.position.applyMatrix4(p),
          C.direction.setFromMatrixPosition(y.matrixWorld),
          s.setFromMatrixPosition(y.target.matrixWorld),
          C.direction.sub(s),
          C.direction.transformDirection(p),
          m++);
      } else if (y.isRectAreaLight) {
        const C = n.rectArea[g];
        (C.position.setFromMatrixPosition(y.matrixWorld),
          C.position.applyMatrix4(p),
          a.identity(),
          r.copy(y.matrixWorld),
          r.premultiply(p),
          a.extractRotation(r),
          C.halfWidth.set(y.width * 0.5, 0, 0),
          C.halfHeight.set(0, y.height * 0.5, 0),
          C.halfWidth.applyMatrix4(a),
          C.halfHeight.applyMatrix4(a),
          g++);
      } else if (y.isPointLight) {
        const C = n.point[f];
        (C.position.setFromMatrixPosition(y.matrixWorld),
          C.position.applyMatrix4(p),
          f++);
      } else if (y.isHemisphereLight) {
        const C = n.hemi[M];
        (C.direction.setFromMatrixPosition(y.matrixWorld),
          C.direction.transformDirection(p),
          M++);
      }
    }
  }
  return { setup: o, setupView: c, state: n };
}
function To(i) {
  const e = new Mp(i),
    t = [],
    n = [];
  function s(u) {
    ((l.camera = u), (t.length = 0), (n.length = 0));
  }
  function r(u) {
    t.push(u);
  }
  function a(u) {
    n.push(u);
  }
  function o() {
    e.setup(t);
  }
  function c(u) {
    e.setupView(t, u);
  }
  const l = {
    lightsArray: t,
    shadowsArray: n,
    camera: null,
    lights: e,
    transmissionRenderTarget: {},
  };
  return {
    init: s,
    state: l,
    setupLights: o,
    setupLightsView: c,
    pushLight: r,
    pushShadow: a,
  };
}
function Sp(i) {
  let e = new WeakMap();
  function t(s, r = 0) {
    const a = e.get(s);
    let o;
    return (
      a === void 0
        ? ((o = new To(i)), e.set(s, [o]))
        : r >= a.length
          ? ((o = new To(i)), a.push(o))
          : (o = a[r]),
      o
    );
  }
  function n() {
    e = new WeakMap();
  }
  return { get: t, dispose: n };
}
const bp = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  yp = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Ep(i, e, t) {
  let n = new el();
  const s = new Ie(),
    r = new Ie(),
    a = new ut(),
    o = new Wc({ depthPacking: tc }),
    c = new Xc(),
    l = {},
    u = t.maxTextureSize,
    d = { [Rn]: Pt, [Pt]: Rn, [hn]: hn },
    f = new _n({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Ie() },
        radius: { value: 4 },
      },
      vertexShader: bp,
      fragmentShader: yp,
    }),
    m = f.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new Dn();
  g.setAttribute(
    "position",
    new en(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3),
  );
  const M = new Dt(g, f),
    p = this;
  ((this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = No));
  let h = this.type;
  this.render = function (E, P, z) {
    if (
      p.enabled === !1 ||
      (p.autoUpdate === !1 && p.needsUpdate === !1) ||
      E.length === 0
    )
      return;
    const S = i.getRenderTarget(),
      v = i.getActiveCubeFace(),
      R = i.getActiveMipmapLevel(),
      B = i.state;
    (B.setBlending(fn),
      B.buffers.depth.getReversed() === !0
        ? B.buffers.color.setClear(0, 0, 0, 0)
        : B.buffers.color.setClear(1, 1, 1, 1),
      B.buffers.depth.setTest(!0),
      B.setScissorTest(!1));
    const V = h !== cn && this.type === cn,
      H = h === cn && this.type !== cn;
    for (let q = 0, Y = E.length; q < Y; q++) {
      const ne = E[q],
        G = ne.shadow;
      if (G === void 0) {
        De("WebGLShadowMap:", ne, "has no shadow.");
        continue;
      }
      if (G.autoUpdate === !1 && G.needsUpdate === !1) continue;
      s.copy(G.mapSize);
      const te = G.getFrameExtents();
      if (
        (s.multiply(te),
        r.copy(G.mapSize),
        (s.x > u || s.y > u) &&
          (s.x > u &&
            ((r.x = Math.floor(u / te.x)),
            (s.x = r.x * te.x),
            (G.mapSize.x = r.x)),
          s.y > u &&
            ((r.y = Math.floor(u / te.y)),
            (s.y = r.y * te.y),
            (G.mapSize.y = r.y))),
        G.map === null || V === !0 || H === !0)
      ) {
        const Se = this.type !== cn ? { minFilter: Ft, magFilter: Ft } : {};
        (G.map !== null && G.map.dispose(),
          (G.map = new Yn(s.x, s.y, Se)),
          (G.map.texture.name = ne.name + ".shadowMap"),
          G.camera.updateProjectionMatrix());
      }
      (i.setRenderTarget(G.map), i.clear());
      const re = G.getViewportCount();
      for (let Se = 0; Se < re; Se++) {
        const Ge = G.getViewport(Se);
        (a.set(r.x * Ge.x, r.y * Ge.y, r.x * Ge.z, r.y * Ge.w),
          B.viewport(a),
          G.updateMatrices(ne, Se),
          (n = G.getFrustum()),
          C(P, z, G.camera, ne, this.type));
      }
      (G.isPointLightShadow !== !0 && this.type === cn && T(G, z),
        (G.needsUpdate = !1));
    }
    ((h = this.type), (p.needsUpdate = !1), i.setRenderTarget(S, v, R));
  };
  function T(E, P) {
    const z = e.update(M);
    (f.defines.VSM_SAMPLES !== E.blurSamples &&
      ((f.defines.VSM_SAMPLES = E.blurSamples),
      (m.defines.VSM_SAMPLES = E.blurSamples),
      (f.needsUpdate = !0),
      (m.needsUpdate = !0)),
      E.mapPass === null && (E.mapPass = new Yn(s.x, s.y)),
      (f.uniforms.shadow_pass.value = E.map.texture),
      (f.uniforms.resolution.value = E.mapSize),
      (f.uniforms.radius.value = E.radius),
      i.setRenderTarget(E.mapPass),
      i.clear(),
      i.renderBufferDirect(P, null, z, f, M, null),
      (m.uniforms.shadow_pass.value = E.mapPass.texture),
      (m.uniforms.resolution.value = E.mapSize),
      (m.uniforms.radius.value = E.radius),
      i.setRenderTarget(E.map),
      i.clear(),
      i.renderBufferDirect(P, null, z, m, M, null));
  }
  function y(E, P, z, S) {
    let v = null;
    const R =
      z.isPointLight === !0 ? E.customDistanceMaterial : E.customDepthMaterial;
    if (R !== void 0) v = R;
    else if (
      ((v = z.isPointLight === !0 ? c : o),
      (i.localClippingEnabled &&
        P.clipShadows === !0 &&
        Array.isArray(P.clippingPlanes) &&
        P.clippingPlanes.length !== 0) ||
        (P.displacementMap && P.displacementScale !== 0) ||
        (P.alphaMap && P.alphaTest > 0) ||
        (P.map && P.alphaTest > 0) ||
        P.alphaToCoverage === !0)
    ) {
      const B = v.uuid,
        V = P.uuid;
      let H = l[B];
      H === void 0 && ((H = {}), (l[B] = H));
      let q = H[V];
      (q === void 0 &&
        ((q = v.clone()), (H[V] = q), P.addEventListener("dispose", D)),
        (v = q));
    }
    if (
      ((v.visible = P.visible),
      (v.wireframe = P.wireframe),
      S === cn
        ? (v.side = P.shadowSide !== null ? P.shadowSide : P.side)
        : (v.side = P.shadowSide !== null ? P.shadowSide : d[P.side]),
      (v.alphaMap = P.alphaMap),
      (v.alphaTest = P.alphaToCoverage === !0 ? 0.5 : P.alphaTest),
      (v.map = P.map),
      (v.clipShadows = P.clipShadows),
      (v.clippingPlanes = P.clippingPlanes),
      (v.clipIntersection = P.clipIntersection),
      (v.displacementMap = P.displacementMap),
      (v.displacementScale = P.displacementScale),
      (v.displacementBias = P.displacementBias),
      (v.wireframeLinewidth = P.wireframeLinewidth),
      (v.linewidth = P.linewidth),
      z.isPointLight === !0 && v.isMeshDistanceMaterial === !0)
    ) {
      const B = i.properties.get(v);
      B.light = z;
    }
    return v;
  }
  function C(E, P, z, S, v) {
    if (E.visible === !1) return;
    if (
      E.layers.test(P.layers) &&
      (E.isMesh || E.isLine || E.isPoints) &&
      (E.castShadow || (E.receiveShadow && v === cn)) &&
      (!E.frustumCulled || n.intersectsObject(E))
    ) {
      E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse, E.matrixWorld);
      const V = e.update(E),
        H = E.material;
      if (Array.isArray(H)) {
        const q = V.groups;
        for (let Y = 0, ne = q.length; Y < ne; Y++) {
          const G = q[Y],
            te = H[G.materialIndex];
          if (te && te.visible) {
            const re = y(E, te, S, v);
            (E.onBeforeShadow(i, E, P, z, V, re, G),
              i.renderBufferDirect(z, null, V, re, E, G),
              E.onAfterShadow(i, E, P, z, V, re, G));
          }
        }
      } else if (H.visible) {
        const q = y(E, H, S, v);
        (E.onBeforeShadow(i, E, P, z, V, q, null),
          i.renderBufferDirect(z, null, V, q, E, null),
          E.onAfterShadow(i, E, P, z, V, q, null));
      }
    }
    const B = E.children;
    for (let V = 0, H = B.length; V < H; V++) C(B[V], P, z, S, v);
  }
  function D(E) {
    E.target.removeEventListener("dispose", D);
    for (const z in l) {
      const S = l[z],
        v = E.target.uuid;
      v in S && (S[v].dispose(), delete S[v]);
    }
  }
}
const Tp = {
  [_r]: gr,
  [vr]: br,
  [Mr]: yr,
  [_i]: Sr,
  [gr]: _r,
  [br]: vr,
  [yr]: Mr,
  [Sr]: _i,
};
function Ap(i, e) {
  function t() {
    let w = !1;
    const le = new ut();
    let ie = null;
    const se = new ut(0, 0, 0, 0);
    return {
      setMask: function (J) {
        ie !== J && !w && (i.colorMask(J, J, J, J), (ie = J));
      },
      setLocked: function (J) {
        w = J;
      },
      setClear: function (J, Z, fe, Re, nt) {
        (nt === !0 && ((J *= Re), (Z *= Re), (fe *= Re)),
          le.set(J, Z, fe, Re),
          se.equals(le) === !1 && (i.clearColor(J, Z, fe, Re), se.copy(le)));
      },
      reset: function () {
        ((w = !1), (ie = null), se.set(-1, 0, 0, 0));
      },
    };
  }
  function n() {
    let w = !1,
      le = !1,
      ie = null,
      se = null,
      J = null;
    return {
      setReversed: function (Z) {
        if (le !== Z) {
          const fe = e.get("EXT_clip_control");
          (Z
            ? fe.clipControlEXT(fe.LOWER_LEFT_EXT, fe.ZERO_TO_ONE_EXT)
            : fe.clipControlEXT(fe.LOWER_LEFT_EXT, fe.NEGATIVE_ONE_TO_ONE_EXT),
            (le = Z));
          const Re = J;
          ((J = null), this.setClear(Re));
        }
      },
      getReversed: function () {
        return le;
      },
      setTest: function (Z) {
        Z ? j(i.DEPTH_TEST) : de(i.DEPTH_TEST);
      },
      setMask: function (Z) {
        ie !== Z && !w && (i.depthMask(Z), (ie = Z));
      },
      setFunc: function (Z) {
        if ((le && (Z = Tp[Z]), se !== Z)) {
          switch (Z) {
            case _r:
              i.depthFunc(i.NEVER);
              break;
            case gr:
              i.depthFunc(i.ALWAYS);
              break;
            case vr:
              i.depthFunc(i.LESS);
              break;
            case _i:
              i.depthFunc(i.LEQUAL);
              break;
            case Mr:
              i.depthFunc(i.EQUAL);
              break;
            case Sr:
              i.depthFunc(i.GEQUAL);
              break;
            case br:
              i.depthFunc(i.GREATER);
              break;
            case yr:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          se = Z;
        }
      },
      setLocked: function (Z) {
        w = Z;
      },
      setClear: function (Z) {
        J !== Z && (le && (Z = 1 - Z), i.clearDepth(Z), (J = Z));
      },
      reset: function () {
        ((w = !1), (ie = null), (se = null), (J = null), (le = !1));
      },
    };
  }
  function s() {
    let w = !1,
      le = null,
      ie = null,
      se = null,
      J = null,
      Z = null,
      fe = null,
      Re = null,
      nt = null;
    return {
      setTest: function (Ye) {
        w || (Ye ? j(i.STENCIL_TEST) : de(i.STENCIL_TEST));
      },
      setMask: function (Ye) {
        le !== Ye && !w && (i.stencilMask(Ye), (le = Ye));
      },
      setFunc: function (Ye, jt, Ht) {
        (ie !== Ye || se !== jt || J !== Ht) &&
          (i.stencilFunc(Ye, jt, Ht), (ie = Ye), (se = jt), (J = Ht));
      },
      setOp: function (Ye, jt, Ht) {
        (Z !== Ye || fe !== jt || Re !== Ht) &&
          (i.stencilOp(Ye, jt, Ht), (Z = Ye), (fe = jt), (Re = Ht));
      },
      setLocked: function (Ye) {
        w = Ye;
      },
      setClear: function (Ye) {
        nt !== Ye && (i.clearStencil(Ye), (nt = Ye));
      },
      reset: function () {
        ((w = !1),
          (le = null),
          (ie = null),
          (se = null),
          (J = null),
          (Z = null),
          (fe = null),
          (Re = null),
          (nt = null));
      },
    };
  }
  const r = new t(),
    a = new n(),
    o = new s(),
    c = new WeakMap(),
    l = new WeakMap();
  let u = {},
    d = {},
    f = new WeakMap(),
    m = [],
    g = null,
    M = !1,
    p = null,
    h = null,
    T = null,
    y = null,
    C = null,
    D = null,
    E = null,
    P = new $e(0, 0, 0),
    z = 0,
    S = !1,
    v = null,
    R = null,
    B = null,
    V = null,
    H = null;
  const q = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let Y = !1,
    ne = 0;
  const G = i.getParameter(i.VERSION);
  G.indexOf("WebGL") !== -1
    ? ((ne = parseFloat(/^WebGL (\d)/.exec(G)[1])), (Y = ne >= 1))
    : G.indexOf("OpenGL ES") !== -1 &&
      ((ne = parseFloat(/^OpenGL ES (\d)/.exec(G)[1])), (Y = ne >= 2));
  let te = null,
    re = {};
  const Se = i.getParameter(i.SCISSOR_BOX),
    Ge = i.getParameter(i.VIEWPORT),
    Xe = new ut().fromArray(Se),
    Qe = new ut().fromArray(Ge);
  function et(w, le, ie, se) {
    const J = new Uint8Array(4),
      Z = i.createTexture();
    (i.bindTexture(w, Z),
      i.texParameteri(w, i.TEXTURE_MIN_FILTER, i.NEAREST),
      i.texParameteri(w, i.TEXTURE_MAG_FILTER, i.NEAREST));
    for (let fe = 0; fe < ie; fe++)
      w === i.TEXTURE_3D || w === i.TEXTURE_2D_ARRAY
        ? i.texImage3D(le, 0, i.RGBA, 1, 1, se, 0, i.RGBA, i.UNSIGNED_BYTE, J)
        : i.texImage2D(le + fe, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, J);
    return Z;
  }
  const X = {};
  ((X[i.TEXTURE_2D] = et(i.TEXTURE_2D, i.TEXTURE_2D, 1)),
    (X[i.TEXTURE_CUBE_MAP] = et(
      i.TEXTURE_CUBE_MAP,
      i.TEXTURE_CUBE_MAP_POSITIVE_X,
      6,
    )),
    (X[i.TEXTURE_2D_ARRAY] = et(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1)),
    (X[i.TEXTURE_3D] = et(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1)),
    r.setClear(0, 0, 0, 1),
    a.setClear(1),
    o.setClear(0),
    j(i.DEPTH_TEST),
    a.setFunc(_i),
    ze(!1),
    ke(wa),
    j(i.CULL_FACE),
    st(fn));
  function j(w) {
    u[w] !== !0 && (i.enable(w), (u[w] = !0));
  }
  function de(w) {
    u[w] !== !1 && (i.disable(w), (u[w] = !1));
  }
  function Le(w, le) {
    return d[w] !== le
      ? (i.bindFramebuffer(w, le),
        (d[w] = le),
        w === i.DRAW_FRAMEBUFFER && (d[i.FRAMEBUFFER] = le),
        w === i.FRAMEBUFFER && (d[i.DRAW_FRAMEBUFFER] = le),
        !0)
      : !1;
  }
  function ge(w, le) {
    let ie = m,
      se = !1;
    if (w) {
      ((ie = f.get(le)), ie === void 0 && ((ie = []), f.set(le, ie)));
      const J = w.textures;
      if (ie.length !== J.length || ie[0] !== i.COLOR_ATTACHMENT0) {
        for (let Z = 0, fe = J.length; Z < fe; Z++)
          ie[Z] = i.COLOR_ATTACHMENT0 + Z;
        ((ie.length = J.length), (se = !0));
      }
    } else ie[0] !== i.BACK && ((ie[0] = i.BACK), (se = !0));
    se && i.drawBuffers(ie);
  }
  function Be(w) {
    return g !== w ? (i.useProgram(w), (g = w), !0) : !1;
  }
  const gt = {
    [kn]: i.FUNC_ADD,
    [wl]: i.FUNC_SUBTRACT,
    [Cl]: i.FUNC_REVERSE_SUBTRACT,
  };
  ((gt[Rl] = i.MIN), (gt[Pl] = i.MAX));
  const Fe = {
    [Dl]: i.ZERO,
    [Ll]: i.ONE,
    [Ul]: i.SRC_COLOR,
    [mr]: i.SRC_ALPHA,
    [zl]: i.SRC_ALPHA_SATURATE,
    [Ol]: i.DST_COLOR,
    [Nl]: i.DST_ALPHA,
    [Il]: i.ONE_MINUS_SRC_COLOR,
    [xr]: i.ONE_MINUS_SRC_ALPHA,
    [Bl]: i.ONE_MINUS_DST_COLOR,
    [Fl]: i.ONE_MINUS_DST_ALPHA,
    [kl]: i.CONSTANT_COLOR,
    [Vl]: i.ONE_MINUS_CONSTANT_COLOR,
    [Gl]: i.CONSTANT_ALPHA,
    [Hl]: i.ONE_MINUS_CONSTANT_ALPHA,
  };
  function st(w, le, ie, se, J, Z, fe, Re, nt, Ye) {
    if (w === fn) {
      M === !0 && (de(i.BLEND), (M = !1));
      return;
    }
    if ((M === !1 && (j(i.BLEND), (M = !0)), w !== Al)) {
      if (w !== p || Ye !== S) {
        if (
          ((h !== kn || C !== kn) &&
            (i.blendEquation(i.FUNC_ADD), (h = kn), (C = kn)),
          Ye)
        )
          switch (w) {
            case mi:
              i.blendFuncSeparate(
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA,
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA,
              );
              break;
            case Ca:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case Ra:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Pa:
              i.blendFuncSeparate(
                i.DST_COLOR,
                i.ONE_MINUS_SRC_ALPHA,
                i.ZERO,
                i.ONE,
              );
              break;
            default:
              ht("WebGLState: Invalid blending: ", w);
              break;
          }
        else
          switch (w) {
            case mi:
              i.blendFuncSeparate(
                i.SRC_ALPHA,
                i.ONE_MINUS_SRC_ALPHA,
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA,
              );
              break;
            case Ca:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE, i.ONE, i.ONE);
              break;
            case Ra:
              ht(
                "WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true",
              );
              break;
            case Pa:
              ht(
                "WebGLState: MultiplyBlending requires material.premultipliedAlpha = true",
              );
              break;
            default:
              ht("WebGLState: Invalid blending: ", w);
              break;
          }
        ((T = null),
          (y = null),
          (D = null),
          (E = null),
          P.set(0, 0, 0),
          (z = 0),
          (p = w),
          (S = Ye));
      }
      return;
    }
    ((J = J || le),
      (Z = Z || ie),
      (fe = fe || se),
      (le !== h || J !== C) &&
        (i.blendEquationSeparate(gt[le], gt[J]), (h = le), (C = J)),
      (ie !== T || se !== y || Z !== D || fe !== E) &&
        (i.blendFuncSeparate(Fe[ie], Fe[se], Fe[Z], Fe[fe]),
        (T = ie),
        (y = se),
        (D = Z),
        (E = fe)),
      (Re.equals(P) === !1 || nt !== z) &&
        (i.blendColor(Re.r, Re.g, Re.b, nt), P.copy(Re), (z = nt)),
      (p = w),
      (S = !1));
  }
  function A(w, le) {
    w.side === hn ? de(i.CULL_FACE) : j(i.CULL_FACE);
    let ie = w.side === Pt;
    (le && (ie = !ie),
      ze(ie),
      w.blending === mi && w.transparent === !1
        ? st(fn)
        : st(
            w.blending,
            w.blendEquation,
            w.blendSrc,
            w.blendDst,
            w.blendEquationAlpha,
            w.blendSrcAlpha,
            w.blendDstAlpha,
            w.blendColor,
            w.blendAlpha,
            w.premultipliedAlpha,
          ),
      a.setFunc(w.depthFunc),
      a.setTest(w.depthTest),
      a.setMask(w.depthWrite),
      r.setMask(w.colorWrite));
    const se = w.stencilWrite;
    (o.setTest(se),
      se &&
        (o.setMask(w.stencilWriteMask),
        o.setFunc(w.stencilFunc, w.stencilRef, w.stencilFuncMask),
        o.setOp(w.stencilFail, w.stencilZFail, w.stencilZPass)),
      me(w.polygonOffset, w.polygonOffsetFactor, w.polygonOffsetUnits),
      w.alphaToCoverage === !0
        ? j(i.SAMPLE_ALPHA_TO_COVERAGE)
        : de(i.SAMPLE_ALPHA_TO_COVERAGE));
  }
  function ze(w) {
    v !== w && (w ? i.frontFace(i.CW) : i.frontFace(i.CCW), (v = w));
  }
  function ke(w) {
    (w !== yl
      ? (j(i.CULL_FACE),
        w !== R &&
          (w === wa
            ? i.cullFace(i.BACK)
            : w === El
              ? i.cullFace(i.FRONT)
              : i.cullFace(i.FRONT_AND_BACK)))
      : de(i.CULL_FACE),
      (R = w));
  }
  function tt(w) {
    w !== B && (Y && i.lineWidth(w), (B = w));
  }
  function me(w, le, ie) {
    w
      ? (j(i.POLYGON_OFFSET_FILL),
        (V !== le || H !== ie) && (i.polygonOffset(le, ie), (V = le), (H = ie)))
      : de(i.POLYGON_OFFSET_FILL);
  }
  function rt(w) {
    w ? j(i.SCISSOR_TEST) : de(i.SCISSOR_TEST);
  }
  function Me(w) {
    (w === void 0 && (w = i.TEXTURE0 + q - 1),
      te !== w && (i.activeTexture(w), (te = w)));
  }
  function Pe(w, le, ie) {
    ie === void 0 && (te === null ? (ie = i.TEXTURE0 + q - 1) : (ie = te));
    let se = re[ie];
    (se === void 0 && ((se = { type: void 0, texture: void 0 }), (re[ie] = se)),
      (se.type !== w || se.texture !== le) &&
        (te !== ie && (i.activeTexture(ie), (te = ie)),
        i.bindTexture(w, le || X[w]),
        (se.type = w),
        (se.texture = le)));
  }
  function b() {
    const w = re[te];
    w !== void 0 &&
      w.type !== void 0 &&
      (i.bindTexture(w.type, null), (w.type = void 0), (w.texture = void 0));
  }
  function x() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (w) {
      w("WebGLState:", w);
    }
  }
  function I() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (w) {
      w("WebGLState:", w);
    }
  }
  function W() {
    try {
      i.texSubImage2D(...arguments);
    } catch (w) {
      w("WebGLState:", w);
    }
  }
  function K() {
    try {
      i.texSubImage3D(...arguments);
    } catch (w) {
      w("WebGLState:", w);
    }
  }
  function k() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (w) {
      w("WebGLState:", w);
    }
  }
  function _e() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (w) {
      w("WebGLState:", w);
    }
  }
  function oe() {
    try {
      i.texStorage2D(...arguments);
    } catch (w) {
      w("WebGLState:", w);
    }
  }
  function be() {
    try {
      i.texStorage3D(...arguments);
    } catch (w) {
      w("WebGLState:", w);
    }
  }
  function xe() {
    try {
      i.texImage2D(...arguments);
    } catch (w) {
      w("WebGLState:", w);
    }
  }
  function $() {
    try {
      i.texImage3D(...arguments);
    } catch (w) {
      w("WebGLState:", w);
    }
  }
  function ee(w) {
    Xe.equals(w) === !1 && (i.scissor(w.x, w.y, w.z, w.w), Xe.copy(w));
  }
  function Ae(w) {
    Qe.equals(w) === !1 && (i.viewport(w.x, w.y, w.z, w.w), Qe.copy(w));
  }
  function Ee(w, le) {
    let ie = l.get(le);
    ie === void 0 && ((ie = new WeakMap()), l.set(le, ie));
    let se = ie.get(w);
    se === void 0 && ((se = i.getUniformBlockIndex(le, w.name)), ie.set(w, se));
  }
  function he(w, le) {
    const se = l.get(le).get(w);
    c.get(le) !== se &&
      (i.uniformBlockBinding(le, se, w.__bindingPointIndex), c.set(le, se));
  }
  function Ce() {
    (i.disable(i.BLEND),
      i.disable(i.CULL_FACE),
      i.disable(i.DEPTH_TEST),
      i.disable(i.POLYGON_OFFSET_FILL),
      i.disable(i.SCISSOR_TEST),
      i.disable(i.STENCIL_TEST),
      i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),
      i.blendEquation(i.FUNC_ADD),
      i.blendFunc(i.ONE, i.ZERO),
      i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO),
      i.blendColor(0, 0, 0, 0),
      i.colorMask(!0, !0, !0, !0),
      i.clearColor(0, 0, 0, 0),
      i.depthMask(!0),
      i.depthFunc(i.LESS),
      a.setReversed(!1),
      i.clearDepth(1),
      i.stencilMask(4294967295),
      i.stencilFunc(i.ALWAYS, 0, 4294967295),
      i.stencilOp(i.KEEP, i.KEEP, i.KEEP),
      i.clearStencil(0),
      i.cullFace(i.BACK),
      i.frontFace(i.CCW),
      i.polygonOffset(0, 0),
      i.activeTexture(i.TEXTURE0),
      i.bindFramebuffer(i.FRAMEBUFFER, null),
      i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
      i.bindFramebuffer(i.READ_FRAMEBUFFER, null),
      i.useProgram(null),
      i.lineWidth(1),
      i.scissor(0, 0, i.canvas.width, i.canvas.height),
      i.viewport(0, 0, i.canvas.width, i.canvas.height),
      (u = {}),
      (te = null),
      (re = {}),
      (d = {}),
      (f = new WeakMap()),
      (m = []),
      (g = null),
      (M = !1),
      (p = null),
      (h = null),
      (T = null),
      (y = null),
      (C = null),
      (D = null),
      (E = null),
      (P = new $e(0, 0, 0)),
      (z = 0),
      (S = !1),
      (v = null),
      (R = null),
      (B = null),
      (V = null),
      (H = null),
      Xe.set(0, 0, i.canvas.width, i.canvas.height),
      Qe.set(0, 0, i.canvas.width, i.canvas.height),
      r.reset(),
      a.reset(),
      o.reset());
  }
  return {
    buffers: { color: r, depth: a, stencil: o },
    enable: j,
    disable: de,
    bindFramebuffer: Le,
    drawBuffers: ge,
    useProgram: Be,
    setBlending: st,
    setMaterial: A,
    setFlipSided: ze,
    setCullFace: ke,
    setLineWidth: tt,
    setPolygonOffset: me,
    setScissorTest: rt,
    activeTexture: Me,
    bindTexture: Pe,
    unbindTexture: b,
    compressedTexImage2D: x,
    compressedTexImage3D: I,
    texImage2D: xe,
    texImage3D: $,
    updateUBOMapping: Ee,
    uniformBlockBinding: he,
    texStorage2D: oe,
    texStorage3D: be,
    texSubImage2D: W,
    texSubImage3D: K,
    compressedTexSubImage2D: k,
    compressedTexSubImage3D: _e,
    scissor: ee,
    viewport: Ae,
    reset: Ce,
  };
}
function wp(i, e, t, n, s, r, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    c =
      typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    l = new Ie(),
    u = new WeakMap();
  let d;
  const f = new WeakMap();
  let m = !1;
  try {
    m =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function g(b, x) {
    return m ? new OffscreenCanvas(b, x) : bs("canvas");
  }
  function M(b, x, I) {
    let W = 1;
    const K = Pe(b);
    if (
      ((K.width > I || K.height > I) && (W = I / Math.max(K.width, K.height)),
      W < 1)
    )
      if (
        (typeof HTMLImageElement < "u" && b instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && b instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && b instanceof ImageBitmap) ||
        (typeof VideoFrame < "u" && b instanceof VideoFrame)
      ) {
        const k = Math.floor(W * K.width),
          _e = Math.floor(W * K.height);
        d === void 0 && (d = g(k, _e));
        const oe = x ? g(k, _e) : d;
        return (
          (oe.width = k),
          (oe.height = _e),
          oe.getContext("2d").drawImage(b, 0, 0, k, _e),
          De(
            "WebGLRenderer: Texture has been resized from (" +
              K.width +
              "x" +
              K.height +
              ") to (" +
              k +
              "x" +
              _e +
              ").",
          ),
          oe
        );
      } else
        return (
          "data" in b &&
            De(
              "WebGLRenderer: Image in DataTexture is too big (" +
                K.width +
                "x" +
                K.height +
                ").",
            ),
          b
        );
    return b;
  }
  function p(b) {
    return b.generateMipmaps;
  }
  function h(b) {
    i.generateMipmap(b);
  }
  function T(b) {
    return b.isWebGLCubeRenderTarget
      ? i.TEXTURE_CUBE_MAP
      : b.isWebGL3DRenderTarget
        ? i.TEXTURE_3D
        : b.isWebGLArrayRenderTarget || b.isCompressedArrayTexture
          ? i.TEXTURE_2D_ARRAY
          : i.TEXTURE_2D;
  }
  function y(b, x, I, W, K = !1) {
    if (b !== null) {
      if (i[b] !== void 0) return i[b];
      De(
        "WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          b +
          "'",
      );
    }
    let k = x;
    if (
      (x === i.RED &&
        (I === i.FLOAT && (k = i.R32F),
        I === i.HALF_FLOAT && (k = i.R16F),
        I === i.UNSIGNED_BYTE && (k = i.R8)),
      x === i.RED_INTEGER &&
        (I === i.UNSIGNED_BYTE && (k = i.R8UI),
        I === i.UNSIGNED_SHORT && (k = i.R16UI),
        I === i.UNSIGNED_INT && (k = i.R32UI),
        I === i.BYTE && (k = i.R8I),
        I === i.SHORT && (k = i.R16I),
        I === i.INT && (k = i.R32I)),
      x === i.RG &&
        (I === i.FLOAT && (k = i.RG32F),
        I === i.HALF_FLOAT && (k = i.RG16F),
        I === i.UNSIGNED_BYTE && (k = i.RG8)),
      x === i.RG_INTEGER &&
        (I === i.UNSIGNED_BYTE && (k = i.RG8UI),
        I === i.UNSIGNED_SHORT && (k = i.RG16UI),
        I === i.UNSIGNED_INT && (k = i.RG32UI),
        I === i.BYTE && (k = i.RG8I),
        I === i.SHORT && (k = i.RG16I),
        I === i.INT && (k = i.RG32I)),
      x === i.RGB_INTEGER &&
        (I === i.UNSIGNED_BYTE && (k = i.RGB8UI),
        I === i.UNSIGNED_SHORT && (k = i.RGB16UI),
        I === i.UNSIGNED_INT && (k = i.RGB32UI),
        I === i.BYTE && (k = i.RGB8I),
        I === i.SHORT && (k = i.RGB16I),
        I === i.INT && (k = i.RGB32I)),
      x === i.RGBA_INTEGER &&
        (I === i.UNSIGNED_BYTE && (k = i.RGBA8UI),
        I === i.UNSIGNED_SHORT && (k = i.RGBA16UI),
        I === i.UNSIGNED_INT && (k = i.RGBA32UI),
        I === i.BYTE && (k = i.RGBA8I),
        I === i.SHORT && (k = i.RGBA16I),
        I === i.INT && (k = i.RGBA32I)),
      x === i.RGB &&
        (I === i.UNSIGNED_INT_5_9_9_9_REV && (k = i.RGB9_E5),
        I === i.UNSIGNED_INT_10F_11F_11F_REV && (k = i.R11F_G11F_B10F)),
      x === i.RGBA)
    ) {
      const _e = K ? Ms : We.getTransfer(W);
      (I === i.FLOAT && (k = i.RGBA32F),
        I === i.HALF_FLOAT && (k = i.RGBA16F),
        I === i.UNSIGNED_BYTE && (k = _e === qe ? i.SRGB8_ALPHA8 : i.RGBA8),
        I === i.UNSIGNED_SHORT_4_4_4_4 && (k = i.RGBA4),
        I === i.UNSIGNED_SHORT_5_5_5_1 && (k = i.RGB5_A1));
    }
    return (
      (k === i.R16F ||
        k === i.R32F ||
        k === i.RG16F ||
        k === i.RG32F ||
        k === i.RGBA16F ||
        k === i.RGBA32F) &&
        e.get("EXT_color_buffer_float"),
      k
    );
  }
  function C(b, x) {
    let I;
    return (
      b
        ? x === null || x === Wn || x === Fi
          ? (I = i.DEPTH24_STENCIL8)
          : x === dn
            ? (I = i.DEPTH32F_STENCIL8)
            : x === Ni &&
              ((I = i.DEPTH24_STENCIL8),
              De(
                "DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.",
              ))
        : x === null || x === Wn || x === Fi
          ? (I = i.DEPTH_COMPONENT24)
          : x === dn
            ? (I = i.DEPTH_COMPONENT32F)
            : x === Ni && (I = i.DEPTH_COMPONENT16),
      I
    );
  }
  function D(b, x) {
    return p(b) === !0 ||
      (b.isFramebufferTexture && b.minFilter !== Ft && b.minFilter !== Gt)
      ? Math.log2(Math.max(x.width, x.height)) + 1
      : b.mipmaps !== void 0 && b.mipmaps.length > 0
        ? b.mipmaps.length
        : b.isCompressedTexture && Array.isArray(b.image)
          ? x.mipmaps.length
          : 1;
  }
  function E(b) {
    const x = b.target;
    (x.removeEventListener("dispose", E),
      z(x),
      x.isVideoTexture && u.delete(x));
  }
  function P(b) {
    const x = b.target;
    (x.removeEventListener("dispose", P), v(x));
  }
  function z(b) {
    const x = n.get(b);
    if (x.__webglInit === void 0) return;
    const I = b.source,
      W = f.get(I);
    if (W) {
      const K = W[x.__cacheKey];
      (K.usedTimes--,
        K.usedTimes === 0 && S(b),
        Object.keys(W).length === 0 && f.delete(I));
    }
    n.remove(b);
  }
  function S(b) {
    const x = n.get(b);
    i.deleteTexture(x.__webglTexture);
    const I = b.source,
      W = f.get(I);
    (delete W[x.__cacheKey], a.memory.textures--);
  }
  function v(b) {
    const x = n.get(b);
    if (
      (b.depthTexture && (b.depthTexture.dispose(), n.remove(b.depthTexture)),
      b.isWebGLCubeRenderTarget)
    )
      for (let W = 0; W < 6; W++) {
        if (Array.isArray(x.__webglFramebuffer[W]))
          for (let K = 0; K < x.__webglFramebuffer[W].length; K++)
            i.deleteFramebuffer(x.__webglFramebuffer[W][K]);
        else i.deleteFramebuffer(x.__webglFramebuffer[W]);
        x.__webglDepthbuffer && i.deleteRenderbuffer(x.__webglDepthbuffer[W]);
      }
    else {
      if (Array.isArray(x.__webglFramebuffer))
        for (let W = 0; W < x.__webglFramebuffer.length; W++)
          i.deleteFramebuffer(x.__webglFramebuffer[W]);
      else i.deleteFramebuffer(x.__webglFramebuffer);
      if (
        (x.__webglDepthbuffer && i.deleteRenderbuffer(x.__webglDepthbuffer),
        x.__webglMultisampledFramebuffer &&
          i.deleteFramebuffer(x.__webglMultisampledFramebuffer),
        x.__webglColorRenderbuffer)
      )
        for (let W = 0; W < x.__webglColorRenderbuffer.length; W++)
          x.__webglColorRenderbuffer[W] &&
            i.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);
      x.__webglDepthRenderbuffer &&
        i.deleteRenderbuffer(x.__webglDepthRenderbuffer);
    }
    const I = b.textures;
    for (let W = 0, K = I.length; W < K; W++) {
      const k = n.get(I[W]);
      (k.__webglTexture &&
        (i.deleteTexture(k.__webglTexture), a.memory.textures--),
        n.remove(I[W]));
    }
    n.remove(b);
  }
  let R = 0;
  function B() {
    R = 0;
  }
  function V() {
    const b = R;
    return (
      b >= s.maxTextures &&
        De(
          "WebGLTextures: Trying to use " +
            b +
            " texture units while this GPU supports only " +
            s.maxTextures,
        ),
      (R += 1),
      b
    );
  }
  function H(b) {
    const x = [];
    return (
      x.push(b.wrapS),
      x.push(b.wrapT),
      x.push(b.wrapR || 0),
      x.push(b.magFilter),
      x.push(b.minFilter),
      x.push(b.anisotropy),
      x.push(b.internalFormat),
      x.push(b.format),
      x.push(b.type),
      x.push(b.generateMipmaps),
      x.push(b.premultiplyAlpha),
      x.push(b.flipY),
      x.push(b.unpackAlignment),
      x.push(b.colorSpace),
      x.join()
    );
  }
  function q(b, x) {
    const I = n.get(b);
    if (
      (b.isVideoTexture && rt(b),
      b.isRenderTargetTexture === !1 &&
        b.isExternalTexture !== !0 &&
        b.version > 0 &&
        I.__version !== b.version)
    ) {
      const W = b.image;
      if (W === null)
        De("WebGLRenderer: Texture marked for update but no image data found.");
      else if (W.complete === !1)
        De("WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        X(I, b, x);
        return;
      }
    } else
      b.isExternalTexture &&
        (I.__webglTexture = b.sourceTexture ? b.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D, I.__webglTexture, i.TEXTURE0 + x);
  }
  function Y(b, x) {
    const I = n.get(b);
    if (
      b.isRenderTargetTexture === !1 &&
      b.version > 0 &&
      I.__version !== b.version
    ) {
      X(I, b, x);
      return;
    } else
      b.isExternalTexture &&
        (I.__webglTexture = b.sourceTexture ? b.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D_ARRAY, I.__webglTexture, i.TEXTURE0 + x);
  }
  function ne(b, x) {
    const I = n.get(b);
    if (
      b.isRenderTargetTexture === !1 &&
      b.version > 0 &&
      I.__version !== b.version
    ) {
      X(I, b, x);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, I.__webglTexture, i.TEXTURE0 + x);
  }
  function G(b, x) {
    const I = n.get(b);
    if (b.version > 0 && I.__version !== b.version) {
      j(I, b, x);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, I.__webglTexture, i.TEXTURE0 + x);
  }
  const te = { [Ar]: i.REPEAT, [un]: i.CLAMP_TO_EDGE, [wr]: i.MIRRORED_REPEAT },
    re = {
      [Ft]: i.NEAREST,
      [Ql]: i.NEAREST_MIPMAP_NEAREST,
      [Yi]: i.NEAREST_MIPMAP_LINEAR,
      [Gt]: i.LINEAR,
      [Bs]: i.LINEAR_MIPMAP_NEAREST,
      [Gn]: i.LINEAR_MIPMAP_LINEAR,
    },
    Se = {
      [sc]: i.NEVER,
      [hc]: i.ALWAYS,
      [rc]: i.LESS,
      [Xo]: i.LEQUAL,
      [ac]: i.EQUAL,
      [cc]: i.GEQUAL,
      [oc]: i.GREATER,
      [lc]: i.NOTEQUAL,
    };
  function Ge(b, x) {
    if (
      (x.type === dn &&
        e.has("OES_texture_float_linear") === !1 &&
        (x.magFilter === Gt ||
          x.magFilter === Bs ||
          x.magFilter === Yi ||
          x.magFilter === Gn ||
          x.minFilter === Gt ||
          x.minFilter === Bs ||
          x.minFilter === Yi ||
          x.minFilter === Gn) &&
        De(
          "WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.",
        ),
      i.texParameteri(b, i.TEXTURE_WRAP_S, te[x.wrapS]),
      i.texParameteri(b, i.TEXTURE_WRAP_T, te[x.wrapT]),
      (b === i.TEXTURE_3D || b === i.TEXTURE_2D_ARRAY) &&
        i.texParameteri(b, i.TEXTURE_WRAP_R, te[x.wrapR]),
      i.texParameteri(b, i.TEXTURE_MAG_FILTER, re[x.magFilter]),
      i.texParameteri(b, i.TEXTURE_MIN_FILTER, re[x.minFilter]),
      x.compareFunction &&
        (i.texParameteri(b, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE),
        i.texParameteri(b, i.TEXTURE_COMPARE_FUNC, Se[x.compareFunction])),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      if (
        x.magFilter === Ft ||
        (x.minFilter !== Yi && x.minFilter !== Gn) ||
        (x.type === dn && e.has("OES_texture_float_linear") === !1)
      )
        return;
      if (x.anisotropy > 1 || n.get(x).__currentAnisotropy) {
        const I = e.get("EXT_texture_filter_anisotropic");
        (i.texParameterf(
          b,
          I.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(x.anisotropy, s.getMaxAnisotropy()),
        ),
          (n.get(x).__currentAnisotropy = x.anisotropy));
      }
    }
  }
  function Xe(b, x) {
    let I = !1;
    b.__webglInit === void 0 &&
      ((b.__webglInit = !0), x.addEventListener("dispose", E));
    const W = x.source;
    let K = f.get(W);
    K === void 0 && ((K = {}), f.set(W, K));
    const k = H(x);
    if (k !== b.__cacheKey) {
      (K[k] === void 0 &&
        ((K[k] = { texture: i.createTexture(), usedTimes: 0 }),
        a.memory.textures++,
        (I = !0)),
        K[k].usedTimes++);
      const _e = K[b.__cacheKey];
      (_e !== void 0 &&
        (K[b.__cacheKey].usedTimes--, _e.usedTimes === 0 && S(x)),
        (b.__cacheKey = k),
        (b.__webglTexture = K[k].texture));
    }
    return I;
  }
  function Qe(b, x, I) {
    return Math.floor(Math.floor(b / I) / x);
  }
  function et(b, x, I, W) {
    const k = b.updateRanges;
    if (k.length === 0)
      t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, x.width, x.height, I, W, x.data);
    else {
      k.sort(($, ee) => $.start - ee.start);
      let _e = 0;
      for (let $ = 1; $ < k.length; $++) {
        const ee = k[_e],
          Ae = k[$],
          Ee = ee.start + ee.count,
          he = Qe(Ae.start, x.width, 4),
          Ce = Qe(ee.start, x.width, 4);
        Ae.start <= Ee + 1 &&
        he === Ce &&
        Qe(Ae.start + Ae.count - 1, x.width, 4) === he
          ? (ee.count = Math.max(ee.count, Ae.start + Ae.count - ee.start))
          : (++_e, (k[_e] = Ae));
      }
      k.length = _e + 1;
      const oe = i.getParameter(i.UNPACK_ROW_LENGTH),
        be = i.getParameter(i.UNPACK_SKIP_PIXELS),
        xe = i.getParameter(i.UNPACK_SKIP_ROWS);
      i.pixelStorei(i.UNPACK_ROW_LENGTH, x.width);
      for (let $ = 0, ee = k.length; $ < ee; $++) {
        const Ae = k[$],
          Ee = Math.floor(Ae.start / 4),
          he = Math.ceil(Ae.count / 4),
          Ce = Ee % x.width,
          w = Math.floor(Ee / x.width),
          le = he,
          ie = 1;
        (i.pixelStorei(i.UNPACK_SKIP_PIXELS, Ce),
          i.pixelStorei(i.UNPACK_SKIP_ROWS, w),
          t.texSubImage2D(i.TEXTURE_2D, 0, Ce, w, le, ie, I, W, x.data));
      }
      (b.clearUpdateRanges(),
        i.pixelStorei(i.UNPACK_ROW_LENGTH, oe),
        i.pixelStorei(i.UNPACK_SKIP_PIXELS, be),
        i.pixelStorei(i.UNPACK_SKIP_ROWS, xe));
    }
  }
  function X(b, x, I) {
    let W = i.TEXTURE_2D;
    ((x.isDataArrayTexture || x.isCompressedArrayTexture) &&
      (W = i.TEXTURE_2D_ARRAY),
      x.isData3DTexture && (W = i.TEXTURE_3D));
    const K = Xe(b, x),
      k = x.source;
    t.bindTexture(W, b.__webglTexture, i.TEXTURE0 + I);
    const _e = n.get(k);
    if (k.version !== _e.__version || K === !0) {
      t.activeTexture(i.TEXTURE0 + I);
      const oe = We.getPrimaries(We.workingColorSpace),
        be = x.colorSpace === An ? null : We.getPrimaries(x.colorSpace),
        xe =
          x.colorSpace === An || oe === be ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      (i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, x.flipY),
        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha),
        i.pixelStorei(i.UNPACK_ALIGNMENT, x.unpackAlignment),
        i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, xe));
      let $ = M(x.image, !1, s.maxTextureSize);
      $ = Me(x, $);
      const ee = r.convert(x.format, x.colorSpace),
        Ae = r.convert(x.type);
      let Ee = y(x.internalFormat, ee, Ae, x.colorSpace, x.isVideoTexture);
      Ge(W, x);
      let he;
      const Ce = x.mipmaps,
        w = x.isVideoTexture !== !0,
        le = _e.__version === void 0 || K === !0,
        ie = k.dataReady,
        se = D(x, $);
      if (x.isDepthTexture)
        ((Ee = C(x.format === Bi, x.type)),
          le &&
            (w
              ? t.texStorage2D(i.TEXTURE_2D, 1, Ee, $.width, $.height)
              : t.texImage2D(
                  i.TEXTURE_2D,
                  0,
                  Ee,
                  $.width,
                  $.height,
                  0,
                  ee,
                  Ae,
                  null,
                )));
      else if (x.isDataTexture)
        if (Ce.length > 0) {
          w &&
            le &&
            t.texStorage2D(i.TEXTURE_2D, se, Ee, Ce[0].width, Ce[0].height);
          for (let J = 0, Z = Ce.length; J < Z; J++)
            ((he = Ce[J]),
              w
                ? ie &&
                  t.texSubImage2D(
                    i.TEXTURE_2D,
                    J,
                    0,
                    0,
                    he.width,
                    he.height,
                    ee,
                    Ae,
                    he.data,
                  )
                : t.texImage2D(
                    i.TEXTURE_2D,
                    J,
                    Ee,
                    he.width,
                    he.height,
                    0,
                    ee,
                    Ae,
                    he.data,
                  ));
          x.generateMipmaps = !1;
        } else
          w
            ? (le && t.texStorage2D(i.TEXTURE_2D, se, Ee, $.width, $.height),
              ie && et(x, $, ee, Ae))
            : t.texImage2D(
                i.TEXTURE_2D,
                0,
                Ee,
                $.width,
                $.height,
                0,
                ee,
                Ae,
                $.data,
              );
      else if (x.isCompressedTexture)
        if (x.isCompressedArrayTexture) {
          w &&
            le &&
            t.texStorage3D(
              i.TEXTURE_2D_ARRAY,
              se,
              Ee,
              Ce[0].width,
              Ce[0].height,
              $.depth,
            );
          for (let J = 0, Z = Ce.length; J < Z; J++)
            if (((he = Ce[J]), x.format !== qt))
              if (ee !== null)
                if (w) {
                  if (ie)
                    if (x.layerUpdates.size > 0) {
                      const fe = to(he.width, he.height, x.format, x.type);
                      for (const Re of x.layerUpdates) {
                        const nt = he.data.subarray(
                          (Re * fe) / he.data.BYTES_PER_ELEMENT,
                          ((Re + 1) * fe) / he.data.BYTES_PER_ELEMENT,
                        );
                        t.compressedTexSubImage3D(
                          i.TEXTURE_2D_ARRAY,
                          J,
                          0,
                          0,
                          Re,
                          he.width,
                          he.height,
                          1,
                          ee,
                          nt,
                        );
                      }
                      x.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(
                        i.TEXTURE_2D_ARRAY,
                        J,
                        0,
                        0,
                        0,
                        he.width,
                        he.height,
                        $.depth,
                        ee,
                        he.data,
                      );
                } else
                  t.compressedTexImage3D(
                    i.TEXTURE_2D_ARRAY,
                    J,
                    Ee,
                    he.width,
                    he.height,
                    $.depth,
                    0,
                    he.data,
                    0,
                    0,
                  );
              else
                De(
                  "WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()",
                );
            else
              w
                ? ie &&
                  t.texSubImage3D(
                    i.TEXTURE_2D_ARRAY,
                    J,
                    0,
                    0,
                    0,
                    he.width,
                    he.height,
                    $.depth,
                    ee,
                    Ae,
                    he.data,
                  )
                : t.texImage3D(
                    i.TEXTURE_2D_ARRAY,
                    J,
                    Ee,
                    he.width,
                    he.height,
                    $.depth,
                    0,
                    ee,
                    Ae,
                    he.data,
                  );
        } else {
          w &&
            le &&
            t.texStorage2D(i.TEXTURE_2D, se, Ee, Ce[0].width, Ce[0].height);
          for (let J = 0, Z = Ce.length; J < Z; J++)
            ((he = Ce[J]),
              x.format !== qt
                ? ee !== null
                  ? w
                    ? ie &&
                      t.compressedTexSubImage2D(
                        i.TEXTURE_2D,
                        J,
                        0,
                        0,
                        he.width,
                        he.height,
                        ee,
                        he.data,
                      )
                    : t.compressedTexImage2D(
                        i.TEXTURE_2D,
                        J,
                        Ee,
                        he.width,
                        he.height,
                        0,
                        he.data,
                      )
                  : De(
                      "WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()",
                    )
                : w
                  ? ie &&
                    t.texSubImage2D(
                      i.TEXTURE_2D,
                      J,
                      0,
                      0,
                      he.width,
                      he.height,
                      ee,
                      Ae,
                      he.data,
                    )
                  : t.texImage2D(
                      i.TEXTURE_2D,
                      J,
                      Ee,
                      he.width,
                      he.height,
                      0,
                      ee,
                      Ae,
                      he.data,
                    ));
        }
      else if (x.isDataArrayTexture)
        if (w) {
          if (
            (le &&
              t.texStorage3D(
                i.TEXTURE_2D_ARRAY,
                se,
                Ee,
                $.width,
                $.height,
                $.depth,
              ),
            ie)
          )
            if (x.layerUpdates.size > 0) {
              const J = to($.width, $.height, x.format, x.type);
              for (const Z of x.layerUpdates) {
                const fe = $.data.subarray(
                  (Z * J) / $.data.BYTES_PER_ELEMENT,
                  ((Z + 1) * J) / $.data.BYTES_PER_ELEMENT,
                );
                t.texSubImage3D(
                  i.TEXTURE_2D_ARRAY,
                  0,
                  0,
                  0,
                  Z,
                  $.width,
                  $.height,
                  1,
                  ee,
                  Ae,
                  fe,
                );
              }
              x.clearLayerUpdates();
            } else
              t.texSubImage3D(
                i.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                $.width,
                $.height,
                $.depth,
                ee,
                Ae,
                $.data,
              );
        } else
          t.texImage3D(
            i.TEXTURE_2D_ARRAY,
            0,
            Ee,
            $.width,
            $.height,
            $.depth,
            0,
            ee,
            Ae,
            $.data,
          );
      else if (x.isData3DTexture)
        w
          ? (le &&
              t.texStorage3D(i.TEXTURE_3D, se, Ee, $.width, $.height, $.depth),
            ie &&
              t.texSubImage3D(
                i.TEXTURE_3D,
                0,
                0,
                0,
                0,
                $.width,
                $.height,
                $.depth,
                ee,
                Ae,
                $.data,
              ))
          : t.texImage3D(
              i.TEXTURE_3D,
              0,
              Ee,
              $.width,
              $.height,
              $.depth,
              0,
              ee,
              Ae,
              $.data,
            );
      else if (x.isFramebufferTexture) {
        if (le)
          if (w) t.texStorage2D(i.TEXTURE_2D, se, Ee, $.width, $.height);
          else {
            let J = $.width,
              Z = $.height;
            for (let fe = 0; fe < se; fe++)
              (t.texImage2D(i.TEXTURE_2D, fe, Ee, J, Z, 0, ee, Ae, null),
                (J >>= 1),
                (Z >>= 1));
          }
      } else if (Ce.length > 0) {
        if (w && le) {
          const J = Pe(Ce[0]);
          t.texStorage2D(i.TEXTURE_2D, se, Ee, J.width, J.height);
        }
        for (let J = 0, Z = Ce.length; J < Z; J++)
          ((he = Ce[J]),
            w
              ? ie && t.texSubImage2D(i.TEXTURE_2D, J, 0, 0, ee, Ae, he)
              : t.texImage2D(i.TEXTURE_2D, J, Ee, ee, Ae, he));
        x.generateMipmaps = !1;
      } else if (w) {
        if (le) {
          const J = Pe($);
          t.texStorage2D(i.TEXTURE_2D, se, Ee, J.width, J.height);
        }
        ie && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ee, Ae, $);
      } else t.texImage2D(i.TEXTURE_2D, 0, Ee, ee, Ae, $);
      (p(x) && h(W), (_e.__version = k.version), x.onUpdate && x.onUpdate(x));
    }
    b.__version = x.version;
  }
  function j(b, x, I) {
    if (x.image.length !== 6) return;
    const W = Xe(b, x),
      K = x.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, b.__webglTexture, i.TEXTURE0 + I);
    const k = n.get(K);
    if (K.version !== k.__version || W === !0) {
      t.activeTexture(i.TEXTURE0 + I);
      const _e = We.getPrimaries(We.workingColorSpace),
        oe = x.colorSpace === An ? null : We.getPrimaries(x.colorSpace),
        be =
          x.colorSpace === An || _e === oe ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      (i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, x.flipY),
        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha),
        i.pixelStorei(i.UNPACK_ALIGNMENT, x.unpackAlignment),
        i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, be));
      const xe = x.isCompressedTexture || x.image[0].isCompressedTexture,
        $ = x.image[0] && x.image[0].isDataTexture,
        ee = [];
      for (let Z = 0; Z < 6; Z++)
        (!xe && !$
          ? (ee[Z] = M(x.image[Z], !0, s.maxCubemapSize))
          : (ee[Z] = $ ? x.image[Z].image : x.image[Z]),
          (ee[Z] = Me(x, ee[Z])));
      const Ae = ee[0],
        Ee = r.convert(x.format, x.colorSpace),
        he = r.convert(x.type),
        Ce = y(x.internalFormat, Ee, he, x.colorSpace),
        w = x.isVideoTexture !== !0,
        le = k.__version === void 0 || W === !0,
        ie = K.dataReady;
      let se = D(x, Ae);
      Ge(i.TEXTURE_CUBE_MAP, x);
      let J;
      if (xe) {
        w &&
          le &&
          t.texStorage2D(i.TEXTURE_CUBE_MAP, se, Ce, Ae.width, Ae.height);
        for (let Z = 0; Z < 6; Z++) {
          J = ee[Z].mipmaps;
          for (let fe = 0; fe < J.length; fe++) {
            const Re = J[fe];
            x.format !== qt
              ? Ee !== null
                ? w
                  ? ie &&
                    t.compressedTexSubImage2D(
                      i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                      fe,
                      0,
                      0,
                      Re.width,
                      Re.height,
                      Ee,
                      Re.data,
                    )
                  : t.compressedTexImage2D(
                      i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                      fe,
                      Ce,
                      Re.width,
                      Re.height,
                      0,
                      Re.data,
                    )
                : De(
                    "WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()",
                  )
              : w
                ? ie &&
                  t.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                    fe,
                    0,
                    0,
                    Re.width,
                    Re.height,
                    Ee,
                    he,
                    Re.data,
                  )
                : t.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                    fe,
                    Ce,
                    Re.width,
                    Re.height,
                    0,
                    Ee,
                    he,
                    Re.data,
                  );
          }
        }
      } else {
        if (((J = x.mipmaps), w && le)) {
          J.length > 0 && se++;
          const Z = Pe(ee[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, se, Ce, Z.width, Z.height);
        }
        for (let Z = 0; Z < 6; Z++)
          if ($) {
            w
              ? ie &&
                t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                  0,
                  0,
                  0,
                  ee[Z].width,
                  ee[Z].height,
                  Ee,
                  he,
                  ee[Z].data,
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                  0,
                  Ce,
                  ee[Z].width,
                  ee[Z].height,
                  0,
                  Ee,
                  he,
                  ee[Z].data,
                );
            for (let fe = 0; fe < J.length; fe++) {
              const nt = J[fe].image[Z].image;
              w
                ? ie &&
                  t.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                    fe + 1,
                    0,
                    0,
                    nt.width,
                    nt.height,
                    Ee,
                    he,
                    nt.data,
                  )
                : t.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                    fe + 1,
                    Ce,
                    nt.width,
                    nt.height,
                    0,
                    Ee,
                    he,
                    nt.data,
                  );
            }
          } else {
            w
              ? ie &&
                t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                  0,
                  0,
                  0,
                  Ee,
                  he,
                  ee[Z],
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                  0,
                  Ce,
                  Ee,
                  he,
                  ee[Z],
                );
            for (let fe = 0; fe < J.length; fe++) {
              const Re = J[fe];
              w
                ? ie &&
                  t.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                    fe + 1,
                    0,
                    0,
                    Ee,
                    he,
                    Re.image[Z],
                  )
                : t.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                    fe + 1,
                    Ce,
                    Ee,
                    he,
                    Re.image[Z],
                  );
            }
          }
      }
      (p(x) && h(i.TEXTURE_CUBE_MAP),
        (k.__version = K.version),
        x.onUpdate && x.onUpdate(x));
    }
    b.__version = x.version;
  }
  function de(b, x, I, W, K, k) {
    const _e = r.convert(I.format, I.colorSpace),
      oe = r.convert(I.type),
      be = y(I.internalFormat, _e, oe, I.colorSpace),
      xe = n.get(x),
      $ = n.get(I);
    if ((($.__renderTarget = x), !xe.__hasExternalTextures)) {
      const ee = Math.max(1, x.width >> k),
        Ae = Math.max(1, x.height >> k);
      K === i.TEXTURE_3D || K === i.TEXTURE_2D_ARRAY
        ? t.texImage3D(K, k, be, ee, Ae, x.depth, 0, _e, oe, null)
        : t.texImage2D(K, k, be, ee, Ae, 0, _e, oe, null);
    }
    (t.bindFramebuffer(i.FRAMEBUFFER, b),
      me(x)
        ? o.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            W,
            K,
            $.__webglTexture,
            0,
            tt(x),
          )
        : (K === i.TEXTURE_2D ||
            (K >= i.TEXTURE_CUBE_MAP_POSITIVE_X &&
              K <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          i.framebufferTexture2D(i.FRAMEBUFFER, W, K, $.__webglTexture, k),
      t.bindFramebuffer(i.FRAMEBUFFER, null));
  }
  function Le(b, x, I) {
    if ((i.bindRenderbuffer(i.RENDERBUFFER, b), x.depthBuffer)) {
      const W = x.depthTexture,
        K = W && W.isDepthTexture ? W.type : null,
        k = C(x.stencilBuffer, K),
        _e = x.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT,
        oe = tt(x);
      (me(x)
        ? o.renderbufferStorageMultisampleEXT(
            i.RENDERBUFFER,
            oe,
            k,
            x.width,
            x.height,
          )
        : I
          ? i.renderbufferStorageMultisample(
              i.RENDERBUFFER,
              oe,
              k,
              x.width,
              x.height,
            )
          : i.renderbufferStorage(i.RENDERBUFFER, k, x.width, x.height),
        i.framebufferRenderbuffer(i.FRAMEBUFFER, _e, i.RENDERBUFFER, b));
    } else {
      const W = x.textures;
      for (let K = 0; K < W.length; K++) {
        const k = W[K],
          _e = r.convert(k.format, k.colorSpace),
          oe = r.convert(k.type),
          be = y(k.internalFormat, _e, oe, k.colorSpace),
          xe = tt(x);
        I && me(x) === !1
          ? i.renderbufferStorageMultisample(
              i.RENDERBUFFER,
              xe,
              be,
              x.width,
              x.height,
            )
          : me(x)
            ? o.renderbufferStorageMultisampleEXT(
                i.RENDERBUFFER,
                xe,
                be,
                x.width,
                x.height,
              )
            : i.renderbufferStorage(i.RENDERBUFFER, be, x.width, x.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function ge(b, x) {
    if (x && x.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported",
      );
    if (
      (t.bindFramebuffer(i.FRAMEBUFFER, b),
      !(x.depthTexture && x.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture",
      );
    const W = n.get(x.depthTexture);
    ((W.__renderTarget = x),
      (!W.__webglTexture ||
        x.depthTexture.image.width !== x.width ||
        x.depthTexture.image.height !== x.height) &&
        ((x.depthTexture.image.width = x.width),
        (x.depthTexture.image.height = x.height),
        (x.depthTexture.needsUpdate = !0)),
      q(x.depthTexture, 0));
    const K = W.__webglTexture,
      k = tt(x);
    if (x.depthTexture.format === Oi)
      me(x)
        ? o.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            i.DEPTH_ATTACHMENT,
            i.TEXTURE_2D,
            K,
            0,
            k,
          )
        : i.framebufferTexture2D(
            i.FRAMEBUFFER,
            i.DEPTH_ATTACHMENT,
            i.TEXTURE_2D,
            K,
            0,
          );
    else if (x.depthTexture.format === Bi)
      me(x)
        ? o.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            i.DEPTH_STENCIL_ATTACHMENT,
            i.TEXTURE_2D,
            K,
            0,
            k,
          )
        : i.framebufferTexture2D(
            i.FRAMEBUFFER,
            i.DEPTH_STENCIL_ATTACHMENT,
            i.TEXTURE_2D,
            K,
            0,
          );
    else throw new Error("Unknown depthTexture format");
  }
  function Be(b) {
    const x = n.get(b),
      I = b.isWebGLCubeRenderTarget === !0;
    if (x.__boundDepthTexture !== b.depthTexture) {
      const W = b.depthTexture;
      if ((x.__depthDisposeCallback && x.__depthDisposeCallback(), W)) {
        const K = () => {
          (delete x.__boundDepthTexture,
            delete x.__depthDisposeCallback,
            W.removeEventListener("dispose", K));
        };
        (W.addEventListener("dispose", K), (x.__depthDisposeCallback = K));
      }
      x.__boundDepthTexture = W;
    }
    if (b.depthTexture && !x.__autoAllocateDepthBuffer) {
      if (I)
        throw new Error(
          "target.depthTexture not supported in Cube render targets",
        );
      const W = b.texture.mipmaps;
      W && W.length > 0
        ? ge(x.__webglFramebuffer[0], b)
        : ge(x.__webglFramebuffer, b);
    } else if (I) {
      x.__webglDepthbuffer = [];
      for (let W = 0; W < 6; W++)
        if (
          (t.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer[W]),
          x.__webglDepthbuffer[W] === void 0)
        )
          ((x.__webglDepthbuffer[W] = i.createRenderbuffer()),
            Le(x.__webglDepthbuffer[W], b, !1));
        else {
          const K = b.stencilBuffer
              ? i.DEPTH_STENCIL_ATTACHMENT
              : i.DEPTH_ATTACHMENT,
            k = x.__webglDepthbuffer[W];
          (i.bindRenderbuffer(i.RENDERBUFFER, k),
            i.framebufferRenderbuffer(i.FRAMEBUFFER, K, i.RENDERBUFFER, k));
        }
    } else {
      const W = b.texture.mipmaps;
      if (
        (W && W.length > 0
          ? t.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer[0])
          : t.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer),
        x.__webglDepthbuffer === void 0)
      )
        ((x.__webglDepthbuffer = i.createRenderbuffer()),
          Le(x.__webglDepthbuffer, b, !1));
      else {
        const K = b.stencilBuffer
            ? i.DEPTH_STENCIL_ATTACHMENT
            : i.DEPTH_ATTACHMENT,
          k = x.__webglDepthbuffer;
        (i.bindRenderbuffer(i.RENDERBUFFER, k),
          i.framebufferRenderbuffer(i.FRAMEBUFFER, K, i.RENDERBUFFER, k));
      }
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function gt(b, x, I) {
    const W = n.get(b);
    (x !== void 0 &&
      de(
        W.__webglFramebuffer,
        b,
        b.texture,
        i.COLOR_ATTACHMENT0,
        i.TEXTURE_2D,
        0,
      ),
      I !== void 0 && Be(b));
  }
  function Fe(b) {
    const x = b.texture,
      I = n.get(b),
      W = n.get(x);
    b.addEventListener("dispose", P);
    const K = b.textures,
      k = b.isWebGLCubeRenderTarget === !0,
      _e = K.length > 1;
    if (
      (_e ||
        (W.__webglTexture === void 0 && (W.__webglTexture = i.createTexture()),
        (W.__version = x.version),
        a.memory.textures++),
      k)
    ) {
      I.__webglFramebuffer = [];
      for (let oe = 0; oe < 6; oe++)
        if (x.mipmaps && x.mipmaps.length > 0) {
          I.__webglFramebuffer[oe] = [];
          for (let be = 0; be < x.mipmaps.length; be++)
            I.__webglFramebuffer[oe][be] = i.createFramebuffer();
        } else I.__webglFramebuffer[oe] = i.createFramebuffer();
    } else {
      if (x.mipmaps && x.mipmaps.length > 0) {
        I.__webglFramebuffer = [];
        for (let oe = 0; oe < x.mipmaps.length; oe++)
          I.__webglFramebuffer[oe] = i.createFramebuffer();
      } else I.__webglFramebuffer = i.createFramebuffer();
      if (_e)
        for (let oe = 0, be = K.length; oe < be; oe++) {
          const xe = n.get(K[oe]);
          xe.__webglTexture === void 0 &&
            ((xe.__webglTexture = i.createTexture()), a.memory.textures++);
        }
      if (b.samples > 0 && me(b) === !1) {
        ((I.__webglMultisampledFramebuffer = i.createFramebuffer()),
          (I.__webglColorRenderbuffer = []),
          t.bindFramebuffer(i.FRAMEBUFFER, I.__webglMultisampledFramebuffer));
        for (let oe = 0; oe < K.length; oe++) {
          const be = K[oe];
          ((I.__webglColorRenderbuffer[oe] = i.createRenderbuffer()),
            i.bindRenderbuffer(i.RENDERBUFFER, I.__webglColorRenderbuffer[oe]));
          const xe = r.convert(be.format, be.colorSpace),
            $ = r.convert(be.type),
            ee = y(
              be.internalFormat,
              xe,
              $,
              be.colorSpace,
              b.isXRRenderTarget === !0,
            ),
            Ae = tt(b);
          (i.renderbufferStorageMultisample(
            i.RENDERBUFFER,
            Ae,
            ee,
            b.width,
            b.height,
          ),
            i.framebufferRenderbuffer(
              i.FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + oe,
              i.RENDERBUFFER,
              I.__webglColorRenderbuffer[oe],
            ));
        }
        (i.bindRenderbuffer(i.RENDERBUFFER, null),
          b.depthBuffer &&
            ((I.__webglDepthRenderbuffer = i.createRenderbuffer()),
            Le(I.__webglDepthRenderbuffer, b, !0)),
          t.bindFramebuffer(i.FRAMEBUFFER, null));
      }
    }
    if (k) {
      (t.bindTexture(i.TEXTURE_CUBE_MAP, W.__webglTexture),
        Ge(i.TEXTURE_CUBE_MAP, x));
      for (let oe = 0; oe < 6; oe++)
        if (x.mipmaps && x.mipmaps.length > 0)
          for (let be = 0; be < x.mipmaps.length; be++)
            de(
              I.__webglFramebuffer[oe][be],
              b,
              x,
              i.COLOR_ATTACHMENT0,
              i.TEXTURE_CUBE_MAP_POSITIVE_X + oe,
              be,
            );
        else
          de(
            I.__webglFramebuffer[oe],
            b,
            x,
            i.COLOR_ATTACHMENT0,
            i.TEXTURE_CUBE_MAP_POSITIVE_X + oe,
            0,
          );
      (p(x) && h(i.TEXTURE_CUBE_MAP), t.unbindTexture());
    } else if (_e) {
      for (let oe = 0, be = K.length; oe < be; oe++) {
        const xe = K[oe],
          $ = n.get(xe);
        let ee = i.TEXTURE_2D;
        ((b.isWebGL3DRenderTarget || b.isWebGLArrayRenderTarget) &&
          (ee = b.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY),
          t.bindTexture(ee, $.__webglTexture),
          Ge(ee, xe),
          de(I.__webglFramebuffer, b, xe, i.COLOR_ATTACHMENT0 + oe, ee, 0),
          p(xe) && h(ee));
      }
      t.unbindTexture();
    } else {
      let oe = i.TEXTURE_2D;
      if (
        ((b.isWebGL3DRenderTarget || b.isWebGLArrayRenderTarget) &&
          (oe = b.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY),
        t.bindTexture(oe, W.__webglTexture),
        Ge(oe, x),
        x.mipmaps && x.mipmaps.length > 0)
      )
        for (let be = 0; be < x.mipmaps.length; be++)
          de(I.__webglFramebuffer[be], b, x, i.COLOR_ATTACHMENT0, oe, be);
      else de(I.__webglFramebuffer, b, x, i.COLOR_ATTACHMENT0, oe, 0);
      (p(x) && h(oe), t.unbindTexture());
    }
    b.depthBuffer && Be(b);
  }
  function st(b) {
    const x = b.textures;
    for (let I = 0, W = x.length; I < W; I++) {
      const K = x[I];
      if (p(K)) {
        const k = T(b),
          _e = n.get(K).__webglTexture;
        (t.bindTexture(k, _e), h(k), t.unbindTexture());
      }
    }
  }
  const A = [],
    ze = [];
  function ke(b) {
    if (b.samples > 0) {
      if (me(b) === !1) {
        const x = b.textures,
          I = b.width,
          W = b.height;
        let K = i.COLOR_BUFFER_BIT;
        const k = b.stencilBuffer
            ? i.DEPTH_STENCIL_ATTACHMENT
            : i.DEPTH_ATTACHMENT,
          _e = n.get(b),
          oe = x.length > 1;
        if (oe)
          for (let xe = 0; xe < x.length; xe++)
            (t.bindFramebuffer(
              i.FRAMEBUFFER,
              _e.__webglMultisampledFramebuffer,
            ),
              i.framebufferRenderbuffer(
                i.FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + xe,
                i.RENDERBUFFER,
                null,
              ),
              t.bindFramebuffer(i.FRAMEBUFFER, _e.__webglFramebuffer),
              i.framebufferTexture2D(
                i.DRAW_FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + xe,
                i.TEXTURE_2D,
                null,
                0,
              ));
        t.bindFramebuffer(
          i.READ_FRAMEBUFFER,
          _e.__webglMultisampledFramebuffer,
        );
        const be = b.texture.mipmaps;
        be && be.length > 0
          ? t.bindFramebuffer(i.DRAW_FRAMEBUFFER, _e.__webglFramebuffer[0])
          : t.bindFramebuffer(i.DRAW_FRAMEBUFFER, _e.__webglFramebuffer);
        for (let xe = 0; xe < x.length; xe++) {
          if (
            (b.resolveDepthBuffer &&
              (b.depthBuffer && (K |= i.DEPTH_BUFFER_BIT),
              b.stencilBuffer &&
                b.resolveStencilBuffer &&
                (K |= i.STENCIL_BUFFER_BIT)),
            oe)
          ) {
            i.framebufferRenderbuffer(
              i.READ_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0,
              i.RENDERBUFFER,
              _e.__webglColorRenderbuffer[xe],
            );
            const $ = n.get(x[xe]).__webglTexture;
            i.framebufferTexture2D(
              i.DRAW_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0,
              i.TEXTURE_2D,
              $,
              0,
            );
          }
          (i.blitFramebuffer(0, 0, I, W, 0, 0, I, W, K, i.NEAREST),
            c === !0 &&
              ((A.length = 0),
              (ze.length = 0),
              A.push(i.COLOR_ATTACHMENT0 + xe),
              b.depthBuffer &&
                b.resolveDepthBuffer === !1 &&
                (A.push(k),
                ze.push(k),
                i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, ze)),
              i.invalidateFramebuffer(i.READ_FRAMEBUFFER, A)));
        }
        if (
          (t.bindFramebuffer(i.READ_FRAMEBUFFER, null),
          t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
          oe)
        )
          for (let xe = 0; xe < x.length; xe++) {
            (t.bindFramebuffer(
              i.FRAMEBUFFER,
              _e.__webglMultisampledFramebuffer,
            ),
              i.framebufferRenderbuffer(
                i.FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + xe,
                i.RENDERBUFFER,
                _e.__webglColorRenderbuffer[xe],
              ));
            const $ = n.get(x[xe]).__webglTexture;
            (t.bindFramebuffer(i.FRAMEBUFFER, _e.__webglFramebuffer),
              i.framebufferTexture2D(
                i.DRAW_FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + xe,
                i.TEXTURE_2D,
                $,
                0,
              ));
          }
        t.bindFramebuffer(
          i.DRAW_FRAMEBUFFER,
          _e.__webglMultisampledFramebuffer,
        );
      } else if (b.depthBuffer && b.resolveDepthBuffer === !1 && c) {
        const x = b.stencilBuffer
          ? i.DEPTH_STENCIL_ATTACHMENT
          : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [x]);
      }
    }
  }
  function tt(b) {
    return Math.min(s.maxSamples, b.samples);
  }
  function me(b) {
    const x = n.get(b);
    return (
      b.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      x.__useRenderToTexture !== !1
    );
  }
  function rt(b) {
    const x = a.render.frame;
    u.get(b) !== x && (u.set(b, x), b.update());
  }
  function Me(b, x) {
    const I = b.colorSpace,
      W = b.format,
      K = b.type;
    return (
      b.isCompressedTexture === !0 ||
        b.isVideoTexture === !0 ||
        (I !== Mi &&
          I !== An &&
          (We.getTransfer(I) === qe
            ? (W !== qt || K !== mn) &&
              De(
                "WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.",
              )
            : ht("WebGLTextures: Unsupported texture color space:", I))),
      x
    );
  }
  function Pe(b) {
    return (
      typeof HTMLImageElement < "u" && b instanceof HTMLImageElement
        ? ((l.width = b.naturalWidth || b.width),
          (l.height = b.naturalHeight || b.height))
        : typeof VideoFrame < "u" && b instanceof VideoFrame
          ? ((l.width = b.displayWidth), (l.height = b.displayHeight))
          : ((l.width = b.width), (l.height = b.height)),
      l
    );
  }
  ((this.allocateTextureUnit = V),
    (this.resetTextureUnits = B),
    (this.setTexture2D = q),
    (this.setTexture2DArray = Y),
    (this.setTexture3D = ne),
    (this.setTextureCube = G),
    (this.rebindTextures = gt),
    (this.setupRenderTarget = Fe),
    (this.updateRenderTargetMipmap = st),
    (this.updateMultisampleRenderTarget = ke),
    (this.setupDepthRenderbuffer = Be),
    (this.setupFrameBufferTexture = de),
    (this.useMultisampledRTT = me));
}
function Cp(i, e) {
  function t(n, s = An) {
    let r;
    const a = We.getTransfer(s);
    if (n === mn) return i.UNSIGNED_BYTE;
    if (n === oa) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === la) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === ko) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Vo) return i.UNSIGNED_INT_10F_11F_11F_REV;
    if (n === Bo) return i.BYTE;
    if (n === zo) return i.SHORT;
    if (n === Ni) return i.UNSIGNED_SHORT;
    if (n === aa) return i.INT;
    if (n === Wn) return i.UNSIGNED_INT;
    if (n === dn) return i.FLOAT;
    if (n === Ti) return i.HALF_FLOAT;
    if (n === Go) return i.ALPHA;
    if (n === Ho) return i.RGB;
    if (n === qt) return i.RGBA;
    if (n === Oi) return i.DEPTH_COMPONENT;
    if (n === Bi) return i.DEPTH_STENCIL;
    if (n === Wo) return i.RED;
    if (n === ca) return i.RED_INTEGER;
    if (n === ha) return i.RG;
    if (n === ua) return i.RG_INTEGER;
    if (n === da) return i.RGBA_INTEGER;
    if (n === ps || n === ms || n === xs || n === _s)
      if (a === qe)
        if (((r = e.get("WEBGL_compressed_texture_s3tc_srgb")), r !== null)) {
          if (n === ps) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === ms) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === xs) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === _s) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((r = e.get("WEBGL_compressed_texture_s3tc")), r !== null)) {
        if (n === ps) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === ms) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === xs) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === _s) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (n === Cr || n === Rr || n === Pr || n === Dr)
      if (((r = e.get("WEBGL_compressed_texture_pvrtc")), r !== null)) {
        if (n === Cr) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === Rr) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === Pr) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === Dr) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (n === Lr || n === Ur || n === Ir)
      if (((r = e.get("WEBGL_compressed_texture_etc")), r !== null)) {
        if (n === Lr || n === Ur)
          return a === qe ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (n === Ir)
          return a === qe
            ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : r.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      n === Nr ||
      n === Fr ||
      n === Or ||
      n === Br ||
      n === zr ||
      n === kr ||
      n === Vr ||
      n === Gr ||
      n === Hr ||
      n === Wr ||
      n === Xr ||
      n === Yr ||
      n === Zr ||
      n === qr
    )
      if (((r = e.get("WEBGL_compressed_texture_astc")), r !== null)) {
        if (n === Nr)
          return a === qe
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === Fr)
          return a === qe
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === Or)
          return a === qe
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === Br)
          return a === qe
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === zr)
          return a === qe
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === kr)
          return a === qe
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === Vr)
          return a === qe
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === Gr)
          return a === qe
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === Hr)
          return a === qe
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === Wr)
          return a === qe
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === Xr)
          return a === qe
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === Yr)
          return a === qe
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === Zr)
          return a === qe
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === qr)
          return a === qe
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (n === Kr || n === jr || n === $r)
      if (((r = e.get("EXT_texture_compression_bptc")), r !== null)) {
        if (n === Kr)
          return a === qe
            ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === jr) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === $r) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (n === Jr || n === Qr || n === ea || n === ta)
      if (((r = e.get("EXT_texture_compression_rgtc")), r !== null)) {
        if (n === Jr) return r.COMPRESSED_RED_RGTC1_EXT;
        if (n === Qr) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === ea) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === ta) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return n === Fi ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: t };
}
const Rp = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
  Pp = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Dp {
  constructor() {
    ((this.texture = null),
      (this.mesh = null),
      (this.depthNear = 0),
      (this.depthFar = 0));
  }
  init(e, t) {
    if (this.texture === null) {
      const n = new nl(e.texture);
      ((e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) &&
        ((this.depthNear = e.depthNear), (this.depthFar = e.depthFar)),
        (this.texture = n));
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport,
        n = new _n({
          vertexShader: Rp,
          fragmentShader: Pp,
          uniforms: {
            depthColor: { value: this.texture },
            depthWidth: { value: t.z },
            depthHeight: { value: t.w },
          },
        });
      this.mesh = new Dt(new Ls(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    ((this.texture = null), (this.mesh = null));
  }
  getDepthTexture() {
    return this.texture;
  }
}
class Lp extends Kn {
  constructor(e, t) {
    super();
    const n = this;
    let s = null,
      r = 1,
      a = null,
      o = "local-floor",
      c = 1,
      l = null,
      u = null,
      d = null,
      f = null,
      m = null,
      g = null;
    const M = typeof XRWebGLBinding < "u",
      p = new Dp(),
      h = {},
      T = t.getContextAttributes();
    let y = null,
      C = null;
    const D = [],
      E = [],
      P = new Ie();
    let z = null;
    const S = new Vt();
    S.viewport = new ut();
    const v = new Vt();
    v.viewport = new ut();
    const R = [S, v],
      B = new Zc();
    let V = null,
      H = null;
    ((this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (X) {
        let j = D[X];
        return (
          j === void 0 && ((j = new ar()), (D[X] = j)),
          j.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (X) {
        let j = D[X];
        return (j === void 0 && ((j = new ar()), (D[X] = j)), j.getGripSpace());
      }),
      (this.getHand = function (X) {
        let j = D[X];
        return (j === void 0 && ((j = new ar()), (D[X] = j)), j.getHandSpace());
      }));
    function q(X) {
      const j = E.indexOf(X.inputSource);
      if (j === -1) return;
      const de = D[j];
      de !== void 0 &&
        (de.update(X.inputSource, X.frame, l || a),
        de.dispatchEvent({ type: X.type, data: X.inputSource }));
    }
    function Y() {
      (s.removeEventListener("select", q),
        s.removeEventListener("selectstart", q),
        s.removeEventListener("selectend", q),
        s.removeEventListener("squeeze", q),
        s.removeEventListener("squeezestart", q),
        s.removeEventListener("squeezeend", q),
        s.removeEventListener("end", Y),
        s.removeEventListener("inputsourceschange", ne));
      for (let X = 0; X < D.length; X++) {
        const j = E[X];
        j !== null && ((E[X] = null), D[X].disconnect(j));
      }
      ((V = null), (H = null), p.reset());
      for (const X in h) delete h[X];
      (e.setRenderTarget(y),
        (m = null),
        (f = null),
        (d = null),
        (s = null),
        (C = null),
        et.stop(),
        (n.isPresenting = !1),
        e.setPixelRatio(z),
        e.setSize(P.width, P.height, !1),
        n.dispatchEvent({ type: "sessionend" }));
    }
    ((this.setFramebufferScaleFactor = function (X) {
      ((r = X),
        n.isPresenting === !0 &&
          De(
            "WebXRManager: Cannot change framebuffer scale while presenting.",
          ));
    }),
      (this.setReferenceSpaceType = function (X) {
        ((o = X),
          n.isPresenting === !0 &&
            De(
              "WebXRManager: Cannot change reference space type while presenting.",
            ));
      }),
      (this.getReferenceSpace = function () {
        return l || a;
      }),
      (this.setReferenceSpace = function (X) {
        l = X;
      }),
      (this.getBaseLayer = function () {
        return f !== null ? f : m;
      }),
      (this.getBinding = function () {
        return (d === null && M && (d = new XRWebGLBinding(s, t)), d);
      }),
      (this.getFrame = function () {
        return g;
      }),
      (this.getSession = function () {
        return s;
      }),
      (this.setSession = async function (X) {
        if (((s = X), s !== null)) {
          if (
            ((y = e.getRenderTarget()),
            s.addEventListener("select", q),
            s.addEventListener("selectstart", q),
            s.addEventListener("selectend", q),
            s.addEventListener("squeeze", q),
            s.addEventListener("squeezestart", q),
            s.addEventListener("squeezeend", q),
            s.addEventListener("end", Y),
            s.addEventListener("inputsourceschange", ne),
            T.xrCompatible !== !0 && (await t.makeXRCompatible()),
            (z = e.getPixelRatio()),
            e.getSize(P),
            M && "createProjectionLayer" in XRWebGLBinding.prototype)
          ) {
            let de = null,
              Le = null,
              ge = null;
            T.depth &&
              ((ge = T.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
              (de = T.stencil ? Bi : Oi),
              (Le = T.stencil ? Fi : Wn));
            const Be = {
              colorFormat: t.RGBA8,
              depthFormat: ge,
              scaleFactor: r,
            };
            ((d = this.getBinding()),
              (f = d.createProjectionLayer(Be)),
              s.updateRenderState({ layers: [f] }),
              e.setPixelRatio(1),
              e.setSize(f.textureWidth, f.textureHeight, !1),
              (C = new Yn(f.textureWidth, f.textureHeight, {
                format: qt,
                type: mn,
                depthTexture: new tl(
                  f.textureWidth,
                  f.textureHeight,
                  Le,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  de,
                ),
                stencilBuffer: T.stencil,
                colorSpace: e.outputColorSpace,
                samples: T.antialias ? 4 : 0,
                resolveDepthBuffer: f.ignoreDepthValues === !1,
                resolveStencilBuffer: f.ignoreDepthValues === !1,
              })));
          } else {
            const de = {
              antialias: T.antialias,
              alpha: !0,
              depth: T.depth,
              stencil: T.stencil,
              framebufferScaleFactor: r,
            };
            ((m = new XRWebGLLayer(s, t, de)),
              s.updateRenderState({ baseLayer: m }),
              e.setPixelRatio(1),
              e.setSize(m.framebufferWidth, m.framebufferHeight, !1),
              (C = new Yn(m.framebufferWidth, m.framebufferHeight, {
                format: qt,
                type: mn,
                colorSpace: e.outputColorSpace,
                stencilBuffer: T.stencil,
                resolveDepthBuffer: m.ignoreDepthValues === !1,
                resolveStencilBuffer: m.ignoreDepthValues === !1,
              })));
          }
          ((C.isXRRenderTarget = !0),
            this.setFoveation(c),
            (l = null),
            (a = await s.requestReferenceSpace(o)),
            et.setContext(s),
            et.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" }));
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (s !== null) return s.environmentBlendMode;
      }),
      (this.getDepthTexture = function () {
        return p.getDepthTexture();
      }));
    function ne(X) {
      for (let j = 0; j < X.removed.length; j++) {
        const de = X.removed[j],
          Le = E.indexOf(de);
        Le >= 0 && ((E[Le] = null), D[Le].disconnect(de));
      }
      for (let j = 0; j < X.added.length; j++) {
        const de = X.added[j];
        let Le = E.indexOf(de);
        if (Le === -1) {
          for (let Be = 0; Be < D.length; Be++)
            if (Be >= E.length) {
              (E.push(de), (Le = Be));
              break;
            } else if (E[Be] === null) {
              ((E[Be] = de), (Le = Be));
              break;
            }
          if (Le === -1) break;
        }
        const ge = D[Le];
        ge && ge.connect(de);
      }
    }
    const G = new F(),
      te = new F();
    function re(X, j, de) {
      (G.setFromMatrixPosition(j.matrixWorld),
        te.setFromMatrixPosition(de.matrixWorld));
      const Le = G.distanceTo(te),
        ge = j.projectionMatrix.elements,
        Be = de.projectionMatrix.elements,
        gt = ge[14] / (ge[10] - 1),
        Fe = ge[14] / (ge[10] + 1),
        st = (ge[9] + 1) / ge[5],
        A = (ge[9] - 1) / ge[5],
        ze = (ge[8] - 1) / ge[0],
        ke = (Be[8] + 1) / Be[0],
        tt = gt * ze,
        me = gt * ke,
        rt = Le / (-ze + ke),
        Me = rt * -ze;
      if (
        (j.matrixWorld.decompose(X.position, X.quaternion, X.scale),
        X.translateX(Me),
        X.translateZ(rt),
        X.matrixWorld.compose(X.position, X.quaternion, X.scale),
        X.matrixWorldInverse.copy(X.matrixWorld).invert(),
        ge[10] === -1)
      )
        (X.projectionMatrix.copy(j.projectionMatrix),
          X.projectionMatrixInverse.copy(j.projectionMatrixInverse));
      else {
        const Pe = gt + rt,
          b = Fe + rt,
          x = tt - Me,
          I = me + (Le - Me),
          W = ((st * Fe) / b) * Pe,
          K = ((A * Fe) / b) * Pe;
        (X.projectionMatrix.makePerspective(x, I, W, K, Pe, b),
          X.projectionMatrixInverse.copy(X.projectionMatrix).invert());
      }
    }
    function Se(X, j) {
      (j === null
        ? X.matrixWorld.copy(X.matrix)
        : X.matrixWorld.multiplyMatrices(j.matrixWorld, X.matrix),
        X.matrixWorldInverse.copy(X.matrixWorld).invert());
    }
    this.updateCamera = function (X) {
      if (s === null) return;
      let j = X.near,
        de = X.far;
      (p.texture !== null &&
        (p.depthNear > 0 && (j = p.depthNear),
        p.depthFar > 0 && (de = p.depthFar)),
        (B.near = v.near = S.near = j),
        (B.far = v.far = S.far = de),
        (V !== B.near || H !== B.far) &&
          (s.updateRenderState({ depthNear: B.near, depthFar: B.far }),
          (V = B.near),
          (H = B.far)),
        (B.layers.mask = X.layers.mask | 6),
        (S.layers.mask = B.layers.mask & 3),
        (v.layers.mask = B.layers.mask & 5));
      const Le = X.parent,
        ge = B.cameras;
      Se(B, Le);
      for (let Be = 0; Be < ge.length; Be++) Se(ge[Be], Le);
      (ge.length === 2
        ? re(B, S, v)
        : B.projectionMatrix.copy(S.projectionMatrix),
        Ge(X, B, Le));
    };
    function Ge(X, j, de) {
      (de === null
        ? X.matrix.copy(j.matrixWorld)
        : (X.matrix.copy(de.matrixWorld),
          X.matrix.invert(),
          X.matrix.multiply(j.matrixWorld)),
        X.matrix.decompose(X.position, X.quaternion, X.scale),
        X.updateMatrixWorld(!0),
        X.projectionMatrix.copy(j.projectionMatrix),
        X.projectionMatrixInverse.copy(j.projectionMatrixInverse),
        X.isPerspectiveCamera &&
          ((X.fov = na * 2 * Math.atan(1 / X.projectionMatrix.elements[5])),
          (X.zoom = 1)));
    }
    ((this.getCamera = function () {
      return B;
    }),
      (this.getFoveation = function () {
        if (!(f === null && m === null)) return c;
      }),
      (this.setFoveation = function (X) {
        ((c = X),
          f !== null && (f.fixedFoveation = X),
          m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = X));
      }),
      (this.hasDepthSensing = function () {
        return p.texture !== null;
      }),
      (this.getDepthSensingMesh = function () {
        return p.getMesh(B);
      }),
      (this.getCameraTexture = function (X) {
        return h[X];
      }));
    let Xe = null;
    function Qe(X, j) {
      if (((u = j.getViewerPose(l || a)), (g = j), u !== null)) {
        const de = u.views;
        m !== null &&
          (e.setRenderTargetFramebuffer(C, m.framebuffer),
          e.setRenderTarget(C));
        let Le = !1;
        de.length !== B.cameras.length && ((B.cameras.length = 0), (Le = !0));
        for (let Fe = 0; Fe < de.length; Fe++) {
          const st = de[Fe];
          let A = null;
          if (m !== null) A = m.getViewport(st);
          else {
            const ke = d.getViewSubImage(f, st);
            ((A = ke.viewport),
              Fe === 0 &&
                (e.setRenderTargetTextures(
                  C,
                  ke.colorTexture,
                  ke.depthStencilTexture,
                ),
                e.setRenderTarget(C)));
          }
          let ze = R[Fe];
          (ze === void 0 &&
            ((ze = new Vt()),
            ze.layers.enable(Fe),
            (ze.viewport = new ut()),
            (R[Fe] = ze)),
            ze.matrix.fromArray(st.transform.matrix),
            ze.matrix.decompose(ze.position, ze.quaternion, ze.scale),
            ze.projectionMatrix.fromArray(st.projectionMatrix),
            ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),
            ze.viewport.set(A.x, A.y, A.width, A.height),
            Fe === 0 &&
              (B.matrix.copy(ze.matrix),
              B.matrix.decompose(B.position, B.quaternion, B.scale)),
            Le === !0 && B.cameras.push(ze));
        }
        const ge = s.enabledFeatures;
        if (
          ge &&
          ge.includes("depth-sensing") &&
          s.depthUsage == "gpu-optimized" &&
          M
        ) {
          d = n.getBinding();
          const Fe = d.getDepthInformation(de[0]);
          Fe && Fe.isValid && Fe.texture && p.init(Fe, s.renderState);
        }
        if (ge && ge.includes("camera-access") && M) {
          (e.state.unbindTexture(), (d = n.getBinding()));
          for (let Fe = 0; Fe < de.length; Fe++) {
            const st = de[Fe].camera;
            if (st) {
              let A = h[st];
              A || ((A = new nl()), (h[st] = A));
              const ze = d.getCameraImage(st);
              A.sourceTexture = ze;
            }
          }
        }
      }
      for (let de = 0; de < D.length; de++) {
        const Le = E[de],
          ge = D[de];
        Le !== null && ge !== void 0 && ge.update(Le, j, l || a);
      }
      (Xe && Xe(X, j),
        j.detectedPlanes &&
          n.dispatchEvent({ type: "planesdetected", data: j }),
        (g = null));
    }
    const et = new il();
    (et.setAnimationLoop(Qe),
      (this.setAnimationLoop = function (X) {
        Xe = X;
      }),
      (this.dispose = function () {}));
  }
}
const zn = new xn(),
  Up = new ft();
function Ip(i, e) {
  function t(p, h) {
    (p.matrixAutoUpdate === !0 && p.updateMatrix(), h.value.copy(p.matrix));
  }
  function n(p, h) {
    (h.color.getRGB(p.fogColor.value, $o(i)),
      h.isFog
        ? ((p.fogNear.value = h.near), (p.fogFar.value = h.far))
        : h.isFogExp2 && (p.fogDensity.value = h.density));
  }
  function s(p, h, T, y, C) {
    h.isMeshBasicMaterial || h.isMeshLambertMaterial
      ? r(p, h)
      : h.isMeshToonMaterial
        ? (r(p, h), d(p, h))
        : h.isMeshPhongMaterial
          ? (r(p, h), u(p, h))
          : h.isMeshStandardMaterial
            ? (r(p, h), f(p, h), h.isMeshPhysicalMaterial && m(p, h, C))
            : h.isMeshMatcapMaterial
              ? (r(p, h), g(p, h))
              : h.isMeshDepthMaterial
                ? r(p, h)
                : h.isMeshDistanceMaterial
                  ? (r(p, h), M(p, h))
                  : h.isMeshNormalMaterial
                    ? r(p, h)
                    : h.isLineBasicMaterial
                      ? (a(p, h), h.isLineDashedMaterial && o(p, h))
                      : h.isPointsMaterial
                        ? c(p, h, T, y)
                        : h.isSpriteMaterial
                          ? l(p, h)
                          : h.isShadowMaterial
                            ? (p.color.value.copy(h.color),
                              (p.opacity.value = h.opacity))
                            : h.isShaderMaterial && (h.uniformsNeedUpdate = !1);
  }
  function r(p, h) {
    ((p.opacity.value = h.opacity),
      h.color && p.diffuse.value.copy(h.color),
      h.emissive &&
        p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),
      h.map && ((p.map.value = h.map), t(h.map, p.mapTransform)),
      h.alphaMap &&
        ((p.alphaMap.value = h.alphaMap), t(h.alphaMap, p.alphaMapTransform)),
      h.bumpMap &&
        ((p.bumpMap.value = h.bumpMap),
        t(h.bumpMap, p.bumpMapTransform),
        (p.bumpScale.value = h.bumpScale),
        h.side === Pt && (p.bumpScale.value *= -1)),
      h.normalMap &&
        ((p.normalMap.value = h.normalMap),
        t(h.normalMap, p.normalMapTransform),
        p.normalScale.value.copy(h.normalScale),
        h.side === Pt && p.normalScale.value.negate()),
      h.displacementMap &&
        ((p.displacementMap.value = h.displacementMap),
        t(h.displacementMap, p.displacementMapTransform),
        (p.displacementScale.value = h.displacementScale),
        (p.displacementBias.value = h.displacementBias)),
      h.emissiveMap &&
        ((p.emissiveMap.value = h.emissiveMap),
        t(h.emissiveMap, p.emissiveMapTransform)),
      h.specularMap &&
        ((p.specularMap.value = h.specularMap),
        t(h.specularMap, p.specularMapTransform)),
      h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest));
    const T = e.get(h),
      y = T.envMap,
      C = T.envMapRotation;
    (y &&
      ((p.envMap.value = y),
      zn.copy(C),
      (zn.x *= -1),
      (zn.y *= -1),
      (zn.z *= -1),
      y.isCubeTexture &&
        y.isRenderTargetTexture === !1 &&
        ((zn.y *= -1), (zn.z *= -1)),
      p.envMapRotation.value.setFromMatrix4(Up.makeRotationFromEuler(zn)),
      (p.flipEnvMap.value =
        y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1),
      (p.reflectivity.value = h.reflectivity),
      (p.ior.value = h.ior),
      (p.refractionRatio.value = h.refractionRatio)),
      h.lightMap &&
        ((p.lightMap.value = h.lightMap),
        (p.lightMapIntensity.value = h.lightMapIntensity),
        t(h.lightMap, p.lightMapTransform)),
      h.aoMap &&
        ((p.aoMap.value = h.aoMap),
        (p.aoMapIntensity.value = h.aoMapIntensity),
        t(h.aoMap, p.aoMapTransform)));
  }
  function a(p, h) {
    (p.diffuse.value.copy(h.color),
      (p.opacity.value = h.opacity),
      h.map && ((p.map.value = h.map), t(h.map, p.mapTransform)));
  }
  function o(p, h) {
    ((p.dashSize.value = h.dashSize),
      (p.totalSize.value = h.dashSize + h.gapSize),
      (p.scale.value = h.scale));
  }
  function c(p, h, T, y) {
    (p.diffuse.value.copy(h.color),
      (p.opacity.value = h.opacity),
      (p.size.value = h.size * T),
      (p.scale.value = y * 0.5),
      h.map && ((p.map.value = h.map), t(h.map, p.uvTransform)),
      h.alphaMap &&
        ((p.alphaMap.value = h.alphaMap), t(h.alphaMap, p.alphaMapTransform)),
      h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest));
  }
  function l(p, h) {
    (p.diffuse.value.copy(h.color),
      (p.opacity.value = h.opacity),
      (p.rotation.value = h.rotation),
      h.map && ((p.map.value = h.map), t(h.map, p.mapTransform)),
      h.alphaMap &&
        ((p.alphaMap.value = h.alphaMap), t(h.alphaMap, p.alphaMapTransform)),
      h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest));
  }
  function u(p, h) {
    (p.specular.value.copy(h.specular),
      (p.shininess.value = Math.max(h.shininess, 1e-4)));
  }
  function d(p, h) {
    h.gradientMap && (p.gradientMap.value = h.gradientMap);
  }
  function f(p, h) {
    ((p.metalness.value = h.metalness),
      h.metalnessMap &&
        ((p.metalnessMap.value = h.metalnessMap),
        t(h.metalnessMap, p.metalnessMapTransform)),
      (p.roughness.value = h.roughness),
      h.roughnessMap &&
        ((p.roughnessMap.value = h.roughnessMap),
        t(h.roughnessMap, p.roughnessMapTransform)),
      h.envMap && (p.envMapIntensity.value = h.envMapIntensity));
  }
  function m(p, h, T) {
    ((p.ior.value = h.ior),
      h.sheen > 0 &&
        (p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),
        (p.sheenRoughness.value = h.sheenRoughness),
        h.sheenColorMap &&
          ((p.sheenColorMap.value = h.sheenColorMap),
          t(h.sheenColorMap, p.sheenColorMapTransform)),
        h.sheenRoughnessMap &&
          ((p.sheenRoughnessMap.value = h.sheenRoughnessMap),
          t(h.sheenRoughnessMap, p.sheenRoughnessMapTransform))),
      h.clearcoat > 0 &&
        ((p.clearcoat.value = h.clearcoat),
        (p.clearcoatRoughness.value = h.clearcoatRoughness),
        h.clearcoatMap &&
          ((p.clearcoatMap.value = h.clearcoatMap),
          t(h.clearcoatMap, p.clearcoatMapTransform)),
        h.clearcoatRoughnessMap &&
          ((p.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap),
          t(h.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)),
        h.clearcoatNormalMap &&
          ((p.clearcoatNormalMap.value = h.clearcoatNormalMap),
          t(h.clearcoatNormalMap, p.clearcoatNormalMapTransform),
          p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),
          h.side === Pt && p.clearcoatNormalScale.value.negate())),
      h.dispersion > 0 && (p.dispersion.value = h.dispersion),
      h.iridescence > 0 &&
        ((p.iridescence.value = h.iridescence),
        (p.iridescenceIOR.value = h.iridescenceIOR),
        (p.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0]),
        (p.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1]),
        h.iridescenceMap &&
          ((p.iridescenceMap.value = h.iridescenceMap),
          t(h.iridescenceMap, p.iridescenceMapTransform)),
        h.iridescenceThicknessMap &&
          ((p.iridescenceThicknessMap.value = h.iridescenceThicknessMap),
          t(h.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))),
      h.transmission > 0 &&
        ((p.transmission.value = h.transmission),
        (p.transmissionSamplerMap.value = T.texture),
        p.transmissionSamplerSize.value.set(T.width, T.height),
        h.transmissionMap &&
          ((p.transmissionMap.value = h.transmissionMap),
          t(h.transmissionMap, p.transmissionMapTransform)),
        (p.thickness.value = h.thickness),
        h.thicknessMap &&
          ((p.thicknessMap.value = h.thicknessMap),
          t(h.thicknessMap, p.thicknessMapTransform)),
        (p.attenuationDistance.value = h.attenuationDistance),
        p.attenuationColor.value.copy(h.attenuationColor)),
      h.anisotropy > 0 &&
        (p.anisotropyVector.value.set(
          h.anisotropy * Math.cos(h.anisotropyRotation),
          h.anisotropy * Math.sin(h.anisotropyRotation),
        ),
        h.anisotropyMap &&
          ((p.anisotropyMap.value = h.anisotropyMap),
          t(h.anisotropyMap, p.anisotropyMapTransform))),
      (p.specularIntensity.value = h.specularIntensity),
      p.specularColor.value.copy(h.specularColor),
      h.specularColorMap &&
        ((p.specularColorMap.value = h.specularColorMap),
        t(h.specularColorMap, p.specularColorMapTransform)),
      h.specularIntensityMap &&
        ((p.specularIntensityMap.value = h.specularIntensityMap),
        t(h.specularIntensityMap, p.specularIntensityMapTransform)));
  }
  function g(p, h) {
    h.matcap && (p.matcap.value = h.matcap);
  }
  function M(p, h) {
    const T = e.get(h).light;
    (p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),
      (p.nearDistance.value = T.shadow.camera.near),
      (p.farDistance.value = T.shadow.camera.far));
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: s };
}
function Np(i, e, t, n) {
  let s = {},
    r = {},
    a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(T, y) {
    const C = y.program;
    n.uniformBlockBinding(T, C);
  }
  function l(T, y) {
    let C = s[T.id];
    C === void 0 &&
      (g(T), (C = u(T)), (s[T.id] = C), T.addEventListener("dispose", p));
    const D = y.program;
    n.updateUBOMapping(T, D);
    const E = e.render.frame;
    r[T.id] !== E && (f(T), (r[T.id] = E));
  }
  function u(T) {
    const y = d();
    T.__bindingPointIndex = y;
    const C = i.createBuffer(),
      D = T.__size,
      E = T.usage;
    return (
      i.bindBuffer(i.UNIFORM_BUFFER, C),
      i.bufferData(i.UNIFORM_BUFFER, D, E),
      i.bindBuffer(i.UNIFORM_BUFFER, null),
      i.bindBufferBase(i.UNIFORM_BUFFER, y, C),
      C
    );
  }
  function d() {
    for (let T = 0; T < o; T++) if (a.indexOf(T) === -1) return (a.push(T), T);
    return (
      ht(
        "WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.",
      ),
      0
    );
  }
  function f(T) {
    const y = s[T.id],
      C = T.uniforms,
      D = T.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, y);
    for (let E = 0, P = C.length; E < P; E++) {
      const z = Array.isArray(C[E]) ? C[E] : [C[E]];
      for (let S = 0, v = z.length; S < v; S++) {
        const R = z[S];
        if (m(R, E, S, D) === !0) {
          const B = R.__offset,
            V = Array.isArray(R.value) ? R.value : [R.value];
          let H = 0;
          for (let q = 0; q < V.length; q++) {
            const Y = V[q],
              ne = M(Y);
            typeof Y == "number" || typeof Y == "boolean"
              ? ((R.__data[0] = Y),
                i.bufferSubData(i.UNIFORM_BUFFER, B + H, R.__data))
              : Y.isMatrix3
                ? ((R.__data[0] = Y.elements[0]),
                  (R.__data[1] = Y.elements[1]),
                  (R.__data[2] = Y.elements[2]),
                  (R.__data[3] = 0),
                  (R.__data[4] = Y.elements[3]),
                  (R.__data[5] = Y.elements[4]),
                  (R.__data[6] = Y.elements[5]),
                  (R.__data[7] = 0),
                  (R.__data[8] = Y.elements[6]),
                  (R.__data[9] = Y.elements[7]),
                  (R.__data[10] = Y.elements[8]),
                  (R.__data[11] = 0))
                : (Y.toArray(R.__data, H),
                  (H += ne.storage / Float32Array.BYTES_PER_ELEMENT));
          }
          i.bufferSubData(i.UNIFORM_BUFFER, B, R.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function m(T, y, C, D) {
    const E = T.value,
      P = y + "_" + C;
    if (D[P] === void 0)
      return (
        typeof E == "number" || typeof E == "boolean"
          ? (D[P] = E)
          : (D[P] = E.clone()),
        !0
      );
    {
      const z = D[P];
      if (typeof E == "number" || typeof E == "boolean") {
        if (z !== E) return ((D[P] = E), !0);
      } else if (z.equals(E) === !1) return (z.copy(E), !0);
    }
    return !1;
  }
  function g(T) {
    const y = T.uniforms;
    let C = 0;
    const D = 16;
    for (let P = 0, z = y.length; P < z; P++) {
      const S = Array.isArray(y[P]) ? y[P] : [y[P]];
      for (let v = 0, R = S.length; v < R; v++) {
        const B = S[v],
          V = Array.isArray(B.value) ? B.value : [B.value];
        for (let H = 0, q = V.length; H < q; H++) {
          const Y = V[H],
            ne = M(Y),
            G = C % D,
            te = G % ne.boundary,
            re = G + te;
          ((C += te),
            re !== 0 && D - re < ne.storage && (C += D - re),
            (B.__data = new Float32Array(
              ne.storage / Float32Array.BYTES_PER_ELEMENT,
            )),
            (B.__offset = C),
            (C += ne.storage));
        }
      }
    }
    const E = C % D;
    return (E > 0 && (C += D - E), (T.__size = C), (T.__cache = {}), this);
  }
  function M(T) {
    const y = { boundary: 0, storage: 0 };
    return (
      typeof T == "number" || typeof T == "boolean"
        ? ((y.boundary = 4), (y.storage = 4))
        : T.isVector2
          ? ((y.boundary = 8), (y.storage = 8))
          : T.isVector3 || T.isColor
            ? ((y.boundary = 16), (y.storage = 12))
            : T.isVector4
              ? ((y.boundary = 16), (y.storage = 16))
              : T.isMatrix3
                ? ((y.boundary = 48), (y.storage = 48))
                : T.isMatrix4
                  ? ((y.boundary = 64), (y.storage = 64))
                  : T.isTexture
                    ? De(
                        "WebGLRenderer: Texture samplers can not be part of an uniforms group.",
                      )
                    : De("WebGLRenderer: Unsupported uniform value type.", T),
      y
    );
  }
  function p(T) {
    const y = T.target;
    y.removeEventListener("dispose", p);
    const C = a.indexOf(y.__bindingPointIndex);
    (a.splice(C, 1), i.deleteBuffer(s[y.id]), delete s[y.id], delete r[y.id]);
  }
  function h() {
    for (const T in s) i.deleteBuffer(s[T]);
    ((a = []), (s = {}), (r = {}));
  }
  return { bind: c, update: l, dispose: h };
}
const Fp = new Uint16Array([
  11481, 15204, 11534, 15171, 11808, 15015, 12385, 14843, 12894, 14716, 13396,
  14600, 13693, 14483, 13976, 14366, 14237, 14171, 14405, 13961, 14511, 13770,
  14605, 13598, 14687, 13444, 14760, 13305, 14822, 13066, 14876, 12857, 14923,
  12675, 14963, 12517, 14997, 12379, 15025, 12230, 15049, 12023, 15070, 11843,
  15086, 11687, 15100, 11551, 15111, 11433, 15120, 11330, 15127, 11217, 15132,
  11060, 15135, 10922, 15138, 10801, 15139, 10695, 15139, 10600, 13012, 14923,
  13020, 14917, 13064, 14886, 13176, 14800, 13349, 14666, 13513, 14526, 13724,
  14398, 13960, 14230, 14200, 14020, 14383, 13827, 14488, 13651, 14583, 13491,
  14667, 13348, 14740, 13132, 14803, 12908, 14856, 12713, 14901, 12542, 14938,
  12394, 14968, 12241, 14992, 12017, 15010, 11822, 15024, 11654, 15034, 11507,
  15041, 11380, 15044, 11269, 15044, 11081, 15042, 10913, 15037, 10764, 15031,
  10635, 15023, 10520, 15014, 10419, 15003, 10330, 13657, 14676, 13658, 14673,
  13670, 14660, 13698, 14622, 13750, 14547, 13834, 14442, 13956, 14317, 14112,
  14093, 14291, 13889, 14407, 13704, 14499, 13538, 14586, 13389, 14664, 13201,
  14733, 12966, 14792, 12758, 14842, 12577, 14882, 12418, 14915, 12272, 14940,
  12033, 14959, 11826, 14972, 11646, 14980, 11490, 14983, 11355, 14983, 11212,
  14979, 11008, 14971, 10830, 14961, 10675, 14950, 10540, 14936, 10420, 14923,
  10315, 14909, 10204, 14894, 10041, 14089, 14460, 14090, 14459, 14096, 14452,
  14112, 14431, 14141, 14388, 14186, 14305, 14252, 14130, 14341, 13941, 14399,
  13756, 14467, 13585, 14539, 13430, 14610, 13272, 14677, 13026, 14737, 12808,
  14790, 12617, 14833, 12449, 14869, 12303, 14896, 12065, 14916, 11845, 14929,
  11655, 14937, 11490, 14939, 11347, 14936, 11184, 14930, 10970, 14921, 10783,
  14912, 10621, 14900, 10480, 14885, 10356, 14867, 10247, 14848, 10062, 14827,
  9894, 14805, 9745, 14400, 14208, 14400, 14206, 14402, 14198, 14406, 14174,
  14415, 14122, 14427, 14035, 14444, 13913, 14469, 13767, 14504, 13613, 14548,
  13463, 14598, 13324, 14651, 13082, 14704, 12858, 14752, 12658, 14795, 12483,
  14831, 12330, 14860, 12106, 14881, 11875, 14895, 11675, 14903, 11501, 14905,
  11351, 14903, 11178, 14900, 10953, 14892, 10757, 14880, 10589, 14865, 10442,
  14847, 10313, 14827, 10162, 14805, 9965, 14782, 9792, 14757, 9642, 14731,
  9507, 14562, 13883, 14562, 13883, 14563, 13877, 14566, 13862, 14570, 13830,
  14576, 13773, 14584, 13689, 14595, 13582, 14613, 13461, 14637, 13336, 14668,
  13120, 14704, 12897, 14741, 12695, 14776, 12516, 14808, 12358, 14835, 12150,
  14856, 11910, 14870, 11701, 14878, 11519, 14882, 11361, 14884, 11187, 14880,
  10951, 14871, 10748, 14858, 10572, 14842, 10418, 14823, 10286, 14801, 10099,
  14777, 9897, 14751, 9722, 14725, 9567, 14696, 9430, 14666, 9309, 14702, 13604,
  14702, 13604, 14702, 13600, 14703, 13591, 14705, 13570, 14707, 13533, 14709,
  13477, 14712, 13400, 14718, 13305, 14727, 13106, 14743, 12907, 14762, 12716,
  14784, 12539, 14807, 12380, 14827, 12190, 14844, 11943, 14855, 11727, 14863,
  11539, 14870, 11376, 14871, 11204, 14868, 10960, 14858, 10748, 14845, 10565,
  14829, 10406, 14809, 10269, 14786, 10058, 14761, 9852, 14734, 9671, 14705,
  9512, 14674, 9374, 14641, 9253, 14608, 9076, 14821, 13366, 14821, 13365,
  14821, 13364, 14821, 13358, 14821, 13344, 14821, 13320, 14819, 13252, 14817,
  13145, 14815, 13011, 14814, 12858, 14817, 12698, 14823, 12539, 14832, 12389,
  14841, 12214, 14850, 11968, 14856, 11750, 14861, 11558, 14866, 11390, 14867,
  11226, 14862, 10972, 14853, 10754, 14840, 10565, 14823, 10401, 14803, 10259,
  14780, 10032, 14754, 9820, 14725, 9635, 14694, 9473, 14661, 9333, 14627, 9203,
  14593, 8988, 14557, 8798, 14923, 13014, 14922, 13014, 14922, 13012, 14922,
  13004, 14920, 12987, 14919, 12957, 14915, 12907, 14909, 12834, 14902, 12738,
  14894, 12623, 14888, 12498, 14883, 12370, 14880, 12203, 14878, 11970, 14875,
  11759, 14873, 11569, 14874, 11401, 14872, 11243, 14865, 10986, 14855, 10762,
  14842, 10568, 14825, 10401, 14804, 10255, 14781, 10017, 14754, 9799, 14725,
  9611, 14692, 9445, 14658, 9301, 14623, 9139, 14587, 8920, 14548, 8729, 14509,
  8562, 15008, 12672, 15008, 12672, 15008, 12671, 15007, 12667, 15005, 12656,
  15001, 12637, 14997, 12605, 14989, 12556, 14978, 12490, 14966, 12407, 14953,
  12313, 14940, 12136, 14927, 11934, 14914, 11742, 14903, 11563, 14896, 11401,
  14889, 11247, 14879, 10992, 14866, 10767, 14851, 10570, 14833, 10400, 14812,
  10252, 14789, 10007, 14761, 9784, 14731, 9592, 14698, 9424, 14663, 9279,
  14627, 9088, 14588, 8868, 14548, 8676, 14508, 8508, 14467, 8360, 15080, 12386,
  15080, 12386, 15079, 12385, 15078, 12383, 15076, 12378, 15072, 12367, 15066,
  12347, 15057, 12315, 15045, 12253, 15030, 12138, 15012, 11998, 14993, 11845,
  14972, 11685, 14951, 11530, 14935, 11383, 14920, 11228, 14904, 10981, 14887,
  10762, 14870, 10567, 14850, 10397, 14827, 10248, 14803, 9997, 14774, 9771,
  14743, 9578, 14710, 9407, 14674, 9259, 14637, 9048, 14596, 8826, 14555, 8632,
  14514, 8464, 14471, 8317, 14427, 8182, 15139, 12008, 15139, 12008, 15138,
  12008, 15137, 12007, 15135, 12003, 15130, 11990, 15124, 11969, 15115, 11929,
  15102, 11872, 15086, 11794, 15064, 11693, 15041, 11581, 15013, 11459, 14987,
  11336, 14966, 11170, 14944, 10944, 14921, 10738, 14898, 10552, 14875, 10387,
  14850, 10239, 14824, 9983, 14794, 9758, 14762, 9563, 14728, 9392, 14692, 9244,
  14653, 9014, 14611, 8791, 14569, 8597, 14526, 8427, 14481, 8281, 14436, 8110,
  14391, 7885, 15188, 11617, 15188, 11617, 15187, 11617, 15186, 11618, 15183,
  11617, 15179, 11612, 15173, 11601, 15163, 11581, 15150, 11546, 15133, 11495,
  15110, 11427, 15083, 11346, 15051, 11246, 15024, 11057, 14996, 10868, 14967,
  10687, 14938, 10517, 14911, 10362, 14882, 10206, 14853, 9956, 14821, 9737,
  14787, 9543, 14752, 9375, 14715, 9228, 14675, 8980, 14632, 8760, 14589, 8565,
  14544, 8395, 14498, 8248, 14451, 8049, 14404, 7824, 14357, 7630, 15228, 11298,
  15228, 11298, 15227, 11299, 15226, 11301, 15223, 11303, 15219, 11302, 15213,
  11299, 15204, 11290, 15191, 11271, 15174, 11217, 15150, 11129, 15119, 11015,
  15087, 10886, 15057, 10744, 15024, 10599, 14990, 10455, 14957, 10318, 14924,
  10143, 14891, 9911, 14856, 9701, 14820, 9516, 14782, 9352, 14744, 9200, 14703,
  8946, 14659, 8725, 14615, 8533, 14568, 8366, 14521, 8220, 14472, 7992, 14423,
  7770, 14374, 7578, 14315, 7408, 15260, 10819, 15260, 10819, 15259, 10822,
  15258, 10826, 15256, 10832, 15251, 10836, 15246, 10841, 15237, 10838, 15225,
  10821, 15207, 10788, 15183, 10734, 15151, 10660, 15120, 10571, 15087, 10469,
  15049, 10359, 15012, 10249, 14974, 10041, 14937, 9837, 14900, 9647, 14860,
  9475, 14820, 9320, 14779, 9147, 14736, 8902, 14691, 8688, 14646, 8499, 14598,
  8335, 14549, 8189, 14499, 7940, 14448, 7720, 14397, 7529, 14347, 7363, 14256,
  7218, 15285, 10410, 15285, 10411, 15285, 10413, 15284, 10418, 15282, 10425,
  15278, 10434, 15272, 10442, 15264, 10449, 15252, 10445, 15235, 10433, 15210,
  10403, 15179, 10358, 15149, 10301, 15113, 10218, 15073, 10059, 15033, 9894,
  14991, 9726, 14951, 9565, 14909, 9413, 14865, 9273, 14822, 9073, 14777, 8845,
  14730, 8641, 14682, 8459, 14633, 8300, 14583, 8129, 14531, 7883, 14479, 7670,
  14426, 7482, 14373, 7321, 14305, 7176, 14201, 6939, 15305, 9939, 15305, 9940,
  15305, 9945, 15304, 9955, 15302, 9967, 15298, 9989, 15293, 10010, 15286,
  10033, 15274, 10044, 15258, 10045, 15233, 10022, 15205, 9975, 15174, 9903,
  15136, 9808, 15095, 9697, 15053, 9578, 15009, 9451, 14965, 9327, 14918, 9198,
  14871, 8973, 14825, 8766, 14775, 8579, 14725, 8408, 14675, 8259, 14622, 8058,
  14569, 7821, 14515, 7615, 14460, 7435, 14405, 7276, 14350, 7108, 14256, 6866,
  14149, 6653, 15321, 9444, 15321, 9445, 15321, 9448, 15320, 9458, 15317, 9470,
  15314, 9490, 15310, 9515, 15302, 9540, 15292, 9562, 15276, 9579, 15251, 9577,
  15226, 9559, 15195, 9519, 15156, 9463, 15116, 9389, 15071, 9304, 15025, 9208,
  14978, 9023, 14927, 8838, 14878, 8661, 14827, 8496, 14774, 8344, 14722, 8206,
  14667, 7973, 14612, 7749, 14556, 7555, 14499, 7382, 14443, 7229, 14385, 7025,
  14322, 6791, 14210, 6588, 14100, 6409, 15333, 8920, 15333, 8921, 15332, 8927,
  15332, 8943, 15329, 8965, 15326, 9002, 15322, 9048, 15316, 9106, 15307, 9162,
  15291, 9204, 15267, 9221, 15244, 9221, 15212, 9196, 15175, 9134, 15133, 9043,
  15088, 8930, 15040, 8801, 14990, 8665, 14938, 8526, 14886, 8391, 14830, 8261,
  14775, 8087, 14719, 7866, 14661, 7664, 14603, 7482, 14544, 7322, 14485, 7178,
  14426, 6936, 14367, 6713, 14281, 6517, 14166, 6348, 14054, 6198, 15341, 8360,
  15341, 8361, 15341, 8366, 15341, 8379, 15339, 8399, 15336, 8431, 15332, 8473,
  15326, 8527, 15318, 8585, 15302, 8632, 15281, 8670, 15258, 8690, 15227, 8690,
  15191, 8664, 15149, 8612, 15104, 8543, 15055, 8456, 15001, 8360, 14948, 8259,
  14892, 8122, 14834, 7923, 14776, 7734, 14716, 7558, 14656, 7397, 14595, 7250,
  14534, 7070, 14472, 6835, 14410, 6628, 14350, 6443, 14243, 6283, 14125, 6135,
  14010, 5889, 15348, 7715, 15348, 7717, 15348, 7725, 15347, 7745, 15345, 7780,
  15343, 7836, 15339, 7905, 15334, 8e3, 15326, 8103, 15310, 8193, 15293, 8239,
  15270, 8270, 15240, 8287, 15204, 8283, 15163, 8260, 15118, 8223, 15067, 8143,
  15014, 8014, 14958, 7873, 14899, 7723, 14839, 7573, 14778, 7430, 14715, 7293,
  14652, 7164, 14588, 6931, 14524, 6720, 14460, 6531, 14396, 6362, 14330, 6210,
  14207, 6015, 14086, 5781, 13969, 5576, 15352, 7114, 15352, 7116, 15352, 7128,
  15352, 7159, 15350, 7195, 15348, 7237, 15345, 7299, 15340, 7374, 15332, 7457,
  15317, 7544, 15301, 7633, 15280, 7703, 15251, 7754, 15216, 7775, 15176, 7767,
  15131, 7733, 15079, 7670, 15026, 7588, 14967, 7492, 14906, 7387, 14844, 7278,
  14779, 7171, 14714, 6965, 14648, 6770, 14581, 6587, 14515, 6420, 14448, 6269,
  14382, 6123, 14299, 5881, 14172, 5665, 14049, 5477, 13929, 5310, 15355, 6329,
  15355, 6330, 15355, 6339, 15355, 6362, 15353, 6410, 15351, 6472, 15349, 6572,
  15344, 6688, 15337, 6835, 15323, 6985, 15309, 7142, 15287, 7220, 15260, 7277,
  15226, 7310, 15188, 7326, 15142, 7318, 15090, 7285, 15036, 7239, 14976, 7177,
  14914, 7045, 14849, 6892, 14782, 6736, 14714, 6581, 14645, 6433, 14576, 6293,
  14506, 6164, 14438, 5946, 14369, 5733, 14270, 5540, 14140, 5369, 14014, 5216,
  13892, 5043, 15357, 5483, 15357, 5484, 15357, 5496, 15357, 5528, 15356, 5597,
  15354, 5692, 15351, 5835, 15347, 6011, 15339, 6195, 15328, 6317, 15314, 6446,
  15293, 6566, 15268, 6668, 15235, 6746, 15197, 6796, 15152, 6811, 15101, 6790,
  15046, 6748, 14985, 6673, 14921, 6583, 14854, 6479, 14785, 6371, 14714, 6259,
  14643, 6149, 14571, 5946, 14499, 5750, 14428, 5567, 14358, 5401, 14242, 5250,
  14109, 5111, 13980, 4870, 13856, 4657, 15359, 4555, 15359, 4557, 15358, 4573,
  15358, 4633, 15357, 4715, 15355, 4841, 15353, 5061, 15349, 5216, 15342, 5391,
  15331, 5577, 15318, 5770, 15299, 5967, 15274, 6150, 15243, 6223, 15206, 6280,
  15161, 6310, 15111, 6317, 15055, 6300, 14994, 6262, 14928, 6208, 14860, 6141,
  14788, 5994, 14715, 5838, 14641, 5684, 14566, 5529, 14492, 5384, 14418, 5247,
  14346, 5121, 14216, 4892, 14079, 4682, 13948, 4496, 13822, 4330, 15359, 3498,
  15359, 3501, 15359, 3520, 15359, 3598, 15358, 3719, 15356, 3860, 15355, 4137,
  15351, 4305, 15344, 4563, 15334, 4809, 15321, 5116, 15303, 5273, 15280, 5418,
  15250, 5547, 15214, 5653, 15170, 5722, 15120, 5761, 15064, 5763, 15002, 5733,
  14935, 5673, 14865, 5597, 14792, 5504, 14716, 5400, 14640, 5294, 14563, 5185,
  14486, 5041, 14410, 4841, 14335, 4655, 14191, 4482, 14051, 4325, 13918, 4183,
  13790, 4012, 15360, 2282, 15360, 2285, 15360, 2306, 15360, 2401, 15359, 2547,
  15357, 2748, 15355, 3103, 15352, 3349, 15345, 3675, 15336, 4020, 15324, 4272,
  15307, 4496, 15285, 4716, 15255, 4908, 15220, 5086, 15178, 5170, 15128, 5214,
  15072, 5234, 15010, 5231, 14943, 5206, 14871, 5166, 14796, 5102, 14718, 4971,
  14639, 4833, 14559, 4687, 14480, 4541, 14402, 4401, 14315, 4268, 14167, 4142,
  14025, 3958, 13888, 3747, 13759, 3556, 15360, 923, 15360, 925, 15360, 946,
  15360, 1052, 15359, 1214, 15357, 1494, 15356, 1892, 15352, 2274, 15346, 2663,
  15338, 3099, 15326, 3393, 15309, 3679, 15288, 3980, 15260, 4183, 15226, 4325,
  15185, 4437, 15136, 4517, 15080, 4570, 15018, 4591, 14950, 4581, 14877, 4545,
  14800, 4485, 14720, 4411, 14638, 4325, 14556, 4231, 14475, 4136, 14395, 3988,
  14297, 3803, 14145, 3628, 13999, 3465, 13861, 3314, 13729, 3177, 15360, 263,
  15360, 264, 15360, 272, 15360, 325, 15359, 407, 15358, 548, 15356, 780, 15352,
  1144, 15347, 1580, 15339, 2099, 15328, 2425, 15312, 2795, 15292, 3133, 15264,
  3329, 15232, 3517, 15191, 3689, 15143, 3819, 15088, 3923, 15025, 3978, 14956,
  3999, 14882, 3979, 14804, 3931, 14722, 3855, 14639, 3756, 14554, 3645, 14470,
  3529, 14388, 3409, 14279, 3289, 14124, 3173, 13975, 3055, 13834, 2848, 13701,
  2658, 15360, 49, 15360, 49, 15360, 52, 15360, 75, 15359, 111, 15358, 201,
  15356, 283, 15353, 519, 15348, 726, 15340, 1045, 15329, 1415, 15314, 1795,
  15295, 2173, 15269, 2410, 15237, 2649, 15197, 2866, 15150, 3054, 15095, 3140,
  15032, 3196, 14963, 3228, 14888, 3236, 14808, 3224, 14725, 3191, 14639, 3146,
  14553, 3088, 14466, 2976, 14382, 2836, 14262, 2692, 14103, 2549, 13952, 2409,
  13808, 2278, 13674, 2154, 15360, 4, 15360, 4, 15360, 4, 15360, 13, 15359, 33,
  15358, 59, 15357, 112, 15353, 199, 15348, 302, 15341, 456, 15331, 628, 15316,
  827, 15297, 1082, 15272, 1332, 15241, 1601, 15202, 1851, 15156, 2069, 15101,
  2172, 15039, 2256, 14970, 2314, 14894, 2348, 14813, 2358, 14728, 2344, 14640,
  2311, 14551, 2263, 14463, 2203, 14376, 2133, 14247, 2059, 14084, 1915, 13930,
  1761, 13784, 1609, 13648, 1464, 15360, 0, 15360, 0, 15360, 0, 15360, 3, 15359,
  18, 15358, 26, 15357, 53, 15354, 80, 15348, 97, 15341, 165, 15332, 238, 15318,
  326, 15299, 427, 15275, 529, 15245, 654, 15207, 771, 15161, 885, 15108, 994,
  15046, 1089, 14976, 1170, 14900, 1229, 14817, 1266, 14731, 1284, 14641, 1282,
  14550, 1260, 14460, 1223, 14370, 1174, 14232, 1116, 14066, 1050, 13909, 981,
  13761, 910, 13623, 839,
]);
let ln = null;
function Op() {
  return (
    ln === null &&
      ((ln = new kc(Fp, 32, 32, ha, Ti)),
      (ln.minFilter = Gt),
      (ln.magFilter = Gt),
      (ln.wrapS = un),
      (ln.wrapT = un),
      (ln.generateMipmaps = !1),
      (ln.needsUpdate = !0)),
    ln
  );
}
class Bp {
  constructor(e = {}) {
    const {
      canvas: t = uc(),
      context: n = null,
      depth: s = !0,
      stencil: r = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: d = !1,
      reversedDepthBuffer: f = !1,
    } = e;
    this.isWebGLRenderer = !0;
    let m;
    if (n !== null) {
      if (
        typeof WebGLRenderingContext < "u" &&
        n instanceof WebGLRenderingContext
      )
        throw new Error(
          "THREE.WebGLRenderer: WebGL 1 is not supported since r163.",
        );
      m = n.getContextAttributes().alpha;
    } else m = a;
    const g = new Set([da, ua, ca]),
      M = new Set([mn, Wn, Ni, Fi, oa, la]),
      p = new Uint32Array(4),
      h = new Int32Array(4);
    let T = null,
      y = null;
    const C = [],
      D = [];
    ((this.domElement = t),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this.toneMapping = Cn),
      (this.toneMappingExposure = 1),
      (this.transmissionResolutionScale = 1));
    const E = this;
    let P = !1;
    this._outputColorSpace = kt;
    let z = 0,
      S = 0,
      v = null,
      R = -1,
      B = null;
    const V = new ut(),
      H = new ut();
    let q = null;
    const Y = new $e(0);
    let ne = 0,
      G = t.width,
      te = t.height,
      re = 1,
      Se = null,
      Ge = null;
    const Xe = new ut(0, 0, G, te),
      Qe = new ut(0, 0, G, te);
    let et = !1;
    const X = new el();
    let j = !1,
      de = !1;
    const Le = new ft(),
      ge = new F(),
      Be = new ut(),
      gt = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    let Fe = !1;
    function st() {
      return v === null ? re : 1;
    }
    let A = n;
    function ze(_, L) {
      return t.getContext(_, L);
    }
    try {
      const _ = {
        alpha: !0,
        depth: s,
        stencil: r,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: u,
        failIfMajorPerformanceCaveat: d,
      };
      if (
        ("setAttribute" in t &&
          t.setAttribute("data-engine", `three.js r${ra}`),
        t.addEventListener("webglcontextlost", J, !1),
        t.addEventListener("webglcontextrestored", Z, !1),
        t.addEventListener("webglcontextcreationerror", fe, !1),
        A === null)
      ) {
        const L = "webgl2";
        if (((A = ze(L, _)), A === null))
          throw ze(L)
            ? new Error(
                "Error creating WebGL context with your selected attributes.",
              )
            : new Error("Error creating WebGL context.");
      }
    } catch (_) {
      throw (_("WebGLRenderer: " + _.message), _);
    }
    let ke,
      tt,
      me,
      rt,
      Me,
      Pe,
      b,
      x,
      I,
      W,
      K,
      k,
      _e,
      oe,
      be,
      xe,
      $,
      ee,
      Ae,
      Ee,
      he,
      Ce,
      w,
      le;
    function ie() {
      ((ke = new Xd(A)),
        ke.init(),
        (Ce = new Cp(A, ke)),
        (tt = new Fd(A, ke, e, Ce)),
        (me = new Ap(A, ke)),
        tt.reversedDepthBuffer && f && me.buffers.depth.setReversed(!0),
        (rt = new qd(A)),
        (Me = new fp()),
        (Pe = new wp(A, ke, me, Me, tt, Ce, rt)),
        (b = new Bd(E)),
        (x = new Wd(E)),
        (I = new Jc(A)),
        (w = new Id(A, I)),
        (W = new Yd(A, I, rt, w)),
        (K = new jd(A, W, I, rt)),
        (Ae = new Kd(A, tt, Pe)),
        (xe = new Od(Me)),
        (k = new dp(E, b, x, ke, tt, w, xe)),
        (_e = new Ip(E, Me)),
        (oe = new mp()),
        (be = new Sp(ke)),
        (ee = new Ud(E, b, x, me, K, m, c)),
        ($ = new Ep(E, K, tt)),
        (le = new Np(A, rt, tt, me)),
        (Ee = new Nd(A, ke, rt)),
        (he = new Zd(A, ke, rt)),
        (rt.programs = k.programs),
        (E.capabilities = tt),
        (E.extensions = ke),
        (E.properties = Me),
        (E.renderLists = oe),
        (E.shadowMap = $),
        (E.state = me),
        (E.info = rt));
    }
    ie();
    const se = new Lp(E, A);
    ((this.xr = se),
      (this.getContext = function () {
        return A;
      }),
      (this.getContextAttributes = function () {
        return A.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const _ = ke.get("WEBGL_lose_context");
        _ && _.loseContext();
      }),
      (this.forceContextRestore = function () {
        const _ = ke.get("WEBGL_lose_context");
        _ && _.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return re;
      }),
      (this.setPixelRatio = function (_) {
        _ !== void 0 && ((re = _), this.setSize(G, te, !1));
      }),
      (this.getSize = function (_) {
        return _.set(G, te);
      }),
      (this.setSize = function (_, L, N = !0) {
        if (se.isPresenting) {
          De("WebGLRenderer: Can't change size while VR device is presenting.");
          return;
        }
        ((G = _),
          (te = L),
          (t.width = Math.floor(_ * re)),
          (t.height = Math.floor(L * re)),
          N === !0 && ((t.style.width = _ + "px"), (t.style.height = L + "px")),
          this.setViewport(0, 0, _, L));
      }),
      (this.getDrawingBufferSize = function (_) {
        return _.set(G * re, te * re).floor();
      }),
      (this.setDrawingBufferSize = function (_, L, N) {
        ((G = _),
          (te = L),
          (re = N),
          (t.width = Math.floor(_ * N)),
          (t.height = Math.floor(L * N)),
          this.setViewport(0, 0, _, L));
      }),
      (this.getCurrentViewport = function (_) {
        return _.copy(V);
      }),
      (this.getViewport = function (_) {
        return _.copy(Xe);
      }),
      (this.setViewport = function (_, L, N, O) {
        (_.isVector4 ? Xe.set(_.x, _.y, _.z, _.w) : Xe.set(_, L, N, O),
          me.viewport(V.copy(Xe).multiplyScalar(re).round()));
      }),
      (this.getScissor = function (_) {
        return _.copy(Qe);
      }),
      (this.setScissor = function (_, L, N, O) {
        (_.isVector4 ? Qe.set(_.x, _.y, _.z, _.w) : Qe.set(_, L, N, O),
          me.scissor(H.copy(Qe).multiplyScalar(re).round()));
      }),
      (this.getScissorTest = function () {
        return et;
      }),
      (this.setScissorTest = function (_) {
        me.setScissorTest((et = _));
      }),
      (this.setOpaqueSort = function (_) {
        Se = _;
      }),
      (this.setTransparentSort = function (_) {
        Ge = _;
      }),
      (this.getClearColor = function (_) {
        return _.copy(ee.getClearColor());
      }),
      (this.setClearColor = function () {
        ee.setClearColor(...arguments);
      }),
      (this.getClearAlpha = function () {
        return ee.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        ee.setClearAlpha(...arguments);
      }),
      (this.clear = function (_ = !0, L = !0, N = !0) {
        let O = 0;
        if (_) {
          let U = !1;
          if (v !== null) {
            const Q = v.texture.format;
            U = g.has(Q);
          }
          if (U) {
            const Q = v.texture.type,
              ce = M.has(Q),
              pe = ee.getClearColor(),
              ue = ee.getClearAlpha(),
              Te = pe.r,
              we = pe.g,
              ve = pe.b;
            ce
              ? ((p[0] = Te),
                (p[1] = we),
                (p[2] = ve),
                (p[3] = ue),
                A.clearBufferuiv(A.COLOR, 0, p))
              : ((h[0] = Te),
                (h[1] = we),
                (h[2] = ve),
                (h[3] = ue),
                A.clearBufferiv(A.COLOR, 0, h));
          } else O |= A.COLOR_BUFFER_BIT;
        }
        (L && (O |= A.DEPTH_BUFFER_BIT),
          N &&
            ((O |= A.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(4294967295)),
          A.clear(O));
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        (t.removeEventListener("webglcontextlost", J, !1),
          t.removeEventListener("webglcontextrestored", Z, !1),
          t.removeEventListener("webglcontextcreationerror", fe, !1),
          ee.dispose(),
          oe.dispose(),
          be.dispose(),
          Me.dispose(),
          b.dispose(),
          x.dispose(),
          K.dispose(),
          w.dispose(),
          le.dispose(),
          k.dispose(),
          se.dispose(),
          se.removeEventListener("sessionstart", Ma),
          se.removeEventListener("sessionend", Sa),
          Ln.stop());
      }));
    function J(_) {
      (_.preventDefault(), Na("WebGLRenderer: Context Lost."), (P = !0));
    }
    function Z() {
      (Na("WebGLRenderer: Context Restored."), (P = !1));
      const _ = rt.autoReset,
        L = $.enabled,
        N = $.autoUpdate,
        O = $.needsUpdate,
        U = $.type;
      (ie(),
        (rt.autoReset = _),
        ($.enabled = L),
        ($.autoUpdate = N),
        ($.needsUpdate = O),
        ($.type = U));
    }
    function fe(_) {
      ht(
        "WebGLRenderer: A WebGL context could not be created. Reason: ",
        _.statusMessage,
      );
    }
    function Re(_) {
      const L = _.target;
      (L.removeEventListener("dispose", Re), nt(L));
    }
    function nt(_) {
      (Ye(_), Me.remove(_));
    }
    function Ye(_) {
      const L = Me.get(_).programs;
      L !== void 0 &&
        (L.forEach(function (N) {
          k.releaseProgram(N);
        }),
        _.isShaderMaterial && k.releaseShaderCache(_));
    }
    this.renderBufferDirect = function (_, L, N, O, U, Q) {
      L === null && (L = gt);
      const ce = U.isMesh && U.matrixWorld.determinant() < 0,
        pe = _l(_, L, N, O, U);
      me.setMaterial(O, ce);
      let ue = N.index,
        Te = 1;
      if (O.wireframe === !0) {
        if (((ue = W.getWireframeAttribute(N)), ue === void 0)) return;
        Te = 2;
      }
      const we = N.drawRange,
        ve = N.attributes.position;
      let Ve = we.start * Te,
        Ze = (we.start + we.count) * Te;
      (Q !== null &&
        ((Ve = Math.max(Ve, Q.start * Te)),
        (Ze = Math.min(Ze, (Q.start + Q.count) * Te))),
        ue !== null
          ? ((Ve = Math.max(Ve, 0)), (Ze = Math.min(Ze, ue.count)))
          : ve != null &&
            ((Ve = Math.max(Ve, 0)), (Ze = Math.min(Ze, ve.count))));
      const lt = Ze - Ve;
      if (lt < 0 || lt === 1 / 0) return;
      w.setup(U, O, pe, N, ue);
      let ct,
        Je = Ee;
      if (
        (ue !== null && ((ct = I.get(ue)), (Je = he), Je.setIndex(ct)),
        U.isMesh)
      )
        O.wireframe === !0
          ? (me.setLineWidth(O.wireframeLinewidth * st()), Je.setMode(A.LINES))
          : Je.setMode(A.TRIANGLES);
      else if (U.isLine) {
        let ye = O.linewidth;
        (ye === void 0 && (ye = 1),
          me.setLineWidth(ye * st()),
          U.isLineSegments
            ? Je.setMode(A.LINES)
            : U.isLineLoop
              ? Je.setMode(A.LINE_LOOP)
              : Je.setMode(A.LINE_STRIP));
      } else
        U.isPoints
          ? Je.setMode(A.POINTS)
          : U.isSprite && Je.setMode(A.TRIANGLES);
      if (U.isBatchedMesh)
        if (U._multiDrawInstances !== null)
          (zi(
            "WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection.",
          ),
            Je.renderMultiDrawInstances(
              U._multiDrawStarts,
              U._multiDrawCounts,
              U._multiDrawCount,
              U._multiDrawInstances,
            ));
        else if (ke.get("WEBGL_multi_draw"))
          Je.renderMultiDraw(
            U._multiDrawStarts,
            U._multiDrawCounts,
            U._multiDrawCount,
          );
        else {
          const ye = U._multiDrawStarts,
            at = U._multiDrawCounts,
            He = U._multiDrawCount,
            Lt = ue ? I.get(ue).bytesPerElement : 1,
            jn = Me.get(O).currentProgram.getUniforms();
          for (let Ut = 0; Ut < He; Ut++)
            (jn.setValue(A, "_gl_DrawID", Ut), Je.render(ye[Ut] / Lt, at[Ut]));
        }
      else if (U.isInstancedMesh) Je.renderInstances(Ve, lt, U.count);
      else if (N.isInstancedBufferGeometry) {
        const ye = N._maxInstanceCount !== void 0 ? N._maxInstanceCount : 1 / 0,
          at = Math.min(N.instanceCount, ye);
        Je.renderInstances(Ve, lt, at);
      } else Je.render(Ve, lt);
    };
    function jt(_, L, N) {
      _.transparent === !0 && _.side === hn && _.forceSinglePass === !1
        ? ((_.side = Pt),
          (_.needsUpdate = !0),
          Xi(_, L, N),
          (_.side = Rn),
          (_.needsUpdate = !0),
          Xi(_, L, N),
          (_.side = hn))
        : Xi(_, L, N);
    }
    ((this.compile = function (_, L, N = null) {
      (N === null && (N = _),
        (y = be.get(N)),
        y.init(L),
        D.push(y),
        N.traverseVisible(function (U) {
          U.isLight &&
            U.layers.test(L.layers) &&
            (y.pushLight(U), U.castShadow && y.pushShadow(U));
        }),
        _ !== N &&
          _.traverseVisible(function (U) {
            U.isLight &&
              U.layers.test(L.layers) &&
              (y.pushLight(U), U.castShadow && y.pushShadow(U));
          }),
        y.setupLights());
      const O = new Set();
      return (
        _.traverse(function (U) {
          if (!(U.isMesh || U.isPoints || U.isLine || U.isSprite)) return;
          const Q = U.material;
          if (Q)
            if (Array.isArray(Q))
              for (let ce = 0; ce < Q.length; ce++) {
                const pe = Q[ce];
                (jt(pe, N, U), O.add(pe));
              }
            else (jt(Q, N, U), O.add(Q));
        }),
        (y = D.pop()),
        O
      );
    }),
      (this.compileAsync = function (_, L, N = null) {
        const O = this.compile(_, L, N);
        return new Promise((U) => {
          function Q() {
            if (
              (O.forEach(function (ce) {
                Me.get(ce).currentProgram.isReady() && O.delete(ce);
              }),
              O.size === 0)
            ) {
              U(_);
              return;
            }
            setTimeout(Q, 10);
          }
          ke.get("KHR_parallel_shader_compile") !== null
            ? Q()
            : setTimeout(Q, 10);
        });
      }));
    let Ht = null;
    function xl(_) {
      Ht && Ht(_);
    }
    function Ma() {
      Ln.stop();
    }
    function Sa() {
      Ln.start();
    }
    const Ln = new il();
    (Ln.setAnimationLoop(xl),
      typeof self < "u" && Ln.setContext(self),
      (this.setAnimationLoop = function (_) {
        ((Ht = _), se.setAnimationLoop(_), _ === null ? Ln.stop() : Ln.start());
      }),
      se.addEventListener("sessionstart", Ma),
      se.addEventListener("sessionend", Sa),
      (this.render = function (_, L) {
        if (L !== void 0 && L.isCamera !== !0) {
          ht(
            "WebGLRenderer.render: camera is not an instance of THREE.Camera.",
          );
          return;
        }
        if (P === !0) return;
        if (
          (_.matrixWorldAutoUpdate === !0 && _.updateMatrixWorld(),
          L.parent === null &&
            L.matrixWorldAutoUpdate === !0 &&
            L.updateMatrixWorld(),
          se.enabled === !0 &&
            se.isPresenting === !0 &&
            (se.cameraAutoUpdate === !0 && se.updateCamera(L),
            (L = se.getCamera())),
          _.isScene === !0 && _.onBeforeRender(E, _, L, v),
          (y = be.get(_, D.length)),
          y.init(L),
          D.push(y),
          Le.multiplyMatrices(L.projectionMatrix, L.matrixWorldInverse),
          X.setFromProjectionMatrix(Le, Qt, L.reversedDepth),
          (de = this.localClippingEnabled),
          (j = xe.init(this.clippingPlanes, de)),
          (T = oe.get(_, C.length)),
          T.init(),
          C.push(T),
          se.enabled === !0 && se.isPresenting === !0)
        ) {
          const Q = E.xr.getDepthSensingMesh();
          Q !== null && Fs(Q, L, -1 / 0, E.sortObjects);
        }
        (Fs(_, L, 0, E.sortObjects),
          T.finish(),
          E.sortObjects === !0 && T.sort(Se, Ge),
          (Fe =
            se.enabled === !1 ||
            se.isPresenting === !1 ||
            se.hasDepthSensing() === !1),
          Fe && ee.addToRenderList(T, _),
          this.info.render.frame++,
          j === !0 && xe.beginShadows());
        const N = y.state.shadowsArray;
        ($.render(N, _, L),
          j === !0 && xe.endShadows(),
          this.info.autoReset === !0 && this.info.reset());
        const O = T.opaque,
          U = T.transmissive;
        if ((y.setupLights(), L.isArrayCamera)) {
          const Q = L.cameras;
          if (U.length > 0)
            for (let ce = 0, pe = Q.length; ce < pe; ce++) {
              const ue = Q[ce];
              ya(O, U, _, ue);
            }
          Fe && ee.render(_);
          for (let ce = 0, pe = Q.length; ce < pe; ce++) {
            const ue = Q[ce];
            ba(T, _, ue, ue.viewport);
          }
        } else
          (U.length > 0 && ya(O, U, _, L), Fe && ee.render(_), ba(T, _, L));
        (v !== null &&
          S === 0 &&
          (Pe.updateMultisampleRenderTarget(v), Pe.updateRenderTargetMipmap(v)),
          _.isScene === !0 && _.onAfterRender(E, _, L),
          w.resetDefaultState(),
          (R = -1),
          (B = null),
          D.pop(),
          D.length > 0
            ? ((y = D[D.length - 1]),
              j === !0 && xe.setGlobalState(E.clippingPlanes, y.state.camera))
            : (y = null),
          C.pop(),
          C.length > 0 ? (T = C[C.length - 1]) : (T = null));
      }));
    function Fs(_, L, N, O) {
      if (_.visible === !1) return;
      if (_.layers.test(L.layers)) {
        if (_.isGroup) N = _.renderOrder;
        else if (_.isLOD) _.autoUpdate === !0 && _.update(L);
        else if (_.isLight) (y.pushLight(_), _.castShadow && y.pushShadow(_));
        else if (_.isSprite) {
          if (!_.frustumCulled || X.intersectsSprite(_)) {
            O && Be.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Le);
            const ce = K.update(_),
              pe = _.material;
            pe.visible && T.push(_, ce, pe, N, Be.z, null);
          }
        } else if (
          (_.isMesh || _.isLine || _.isPoints) &&
          (!_.frustumCulled || X.intersectsObject(_))
        ) {
          const ce = K.update(_),
            pe = _.material;
          if (
            (O &&
              (_.boundingSphere !== void 0
                ? (_.boundingSphere === null && _.computeBoundingSphere(),
                  Be.copy(_.boundingSphere.center))
                : (ce.boundingSphere === null && ce.computeBoundingSphere(),
                  Be.copy(ce.boundingSphere.center)),
              Be.applyMatrix4(_.matrixWorld).applyMatrix4(Le)),
            Array.isArray(pe))
          ) {
            const ue = ce.groups;
            for (let Te = 0, we = ue.length; Te < we; Te++) {
              const ve = ue[Te],
                Ve = pe[ve.materialIndex];
              Ve && Ve.visible && T.push(_, ce, Ve, N, Be.z, ve);
            }
          } else pe.visible && T.push(_, ce, pe, N, Be.z, null);
        }
      }
      const Q = _.children;
      for (let ce = 0, pe = Q.length; ce < pe; ce++) Fs(Q[ce], L, N, O);
    }
    function ba(_, L, N, O) {
      const { opaque: U, transmissive: Q, transparent: ce } = _;
      (y.setupLightsView(N),
        j === !0 && xe.setGlobalState(E.clippingPlanes, N),
        O && me.viewport(V.copy(O)),
        U.length > 0 && Wi(U, L, N),
        Q.length > 0 && Wi(Q, L, N),
        ce.length > 0 && Wi(ce, L, N),
        me.buffers.depth.setTest(!0),
        me.buffers.depth.setMask(!0),
        me.buffers.color.setMask(!0),
        me.setPolygonOffset(!1));
    }
    function ya(_, L, N, O) {
      if ((N.isScene === !0 ? N.overrideMaterial : null) !== null) return;
      y.state.transmissionRenderTarget[O.id] === void 0 &&
        (y.state.transmissionRenderTarget[O.id] = new Yn(1, 1, {
          generateMipmaps: !0,
          type:
            ke.has("EXT_color_buffer_half_float") ||
            ke.has("EXT_color_buffer_float")
              ? Ti
              : mn,
          minFilter: Gn,
          samples: 4,
          stencilBuffer: r,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: We.workingColorSpace,
        }));
      const Q = y.state.transmissionRenderTarget[O.id],
        ce = O.viewport || V;
      Q.setSize(
        ce.z * E.transmissionResolutionScale,
        ce.w * E.transmissionResolutionScale,
      );
      const pe = E.getRenderTarget(),
        ue = E.getActiveCubeFace(),
        Te = E.getActiveMipmapLevel();
      (E.setRenderTarget(Q),
        E.getClearColor(Y),
        (ne = E.getClearAlpha()),
        ne < 1 && E.setClearColor(16777215, 0.5),
        E.clear(),
        Fe && ee.render(N));
      const we = E.toneMapping;
      E.toneMapping = Cn;
      const ve = O.viewport;
      if (
        (O.viewport !== void 0 && (O.viewport = void 0),
        y.setupLightsView(O),
        j === !0 && xe.setGlobalState(E.clippingPlanes, O),
        Wi(_, N, O),
        Pe.updateMultisampleRenderTarget(Q),
        Pe.updateRenderTargetMipmap(Q),
        ke.has("WEBGL_multisampled_render_to_texture") === !1)
      ) {
        let Ve = !1;
        for (let Ze = 0, lt = L.length; Ze < lt; Ze++) {
          const ct = L[Ze],
            { object: Je, geometry: ye, material: at, group: He } = ct;
          if (at.side === hn && Je.layers.test(O.layers)) {
            const Lt = at.side;
            ((at.side = Pt),
              (at.needsUpdate = !0),
              Ea(Je, N, O, ye, at, He),
              (at.side = Lt),
              (at.needsUpdate = !0),
              (Ve = !0));
          }
        }
        Ve === !0 &&
          (Pe.updateMultisampleRenderTarget(Q), Pe.updateRenderTargetMipmap(Q));
      }
      (E.setRenderTarget(pe, ue, Te),
        E.setClearColor(Y, ne),
        ve !== void 0 && (O.viewport = ve),
        (E.toneMapping = we));
    }
    function Wi(_, L, N) {
      const O = L.isScene === !0 ? L.overrideMaterial : null;
      for (let U = 0, Q = _.length; U < Q; U++) {
        const ce = _[U],
          { object: pe, geometry: ue, group: Te } = ce;
        let we = ce.material;
        (we.allowOverride === !0 && O !== null && (we = O),
          pe.layers.test(N.layers) && Ea(pe, L, N, ue, we, Te));
      }
    }
    function Ea(_, L, N, O, U, Q) {
      (_.onBeforeRender(E, L, N, O, U, Q),
        _.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, _.matrixWorld),
        _.normalMatrix.getNormalMatrix(_.modelViewMatrix),
        U.onBeforeRender(E, L, N, O, _, Q),
        U.transparent === !0 && U.side === hn && U.forceSinglePass === !1
          ? ((U.side = Pt),
            (U.needsUpdate = !0),
            E.renderBufferDirect(N, L, O, U, _, Q),
            (U.side = Rn),
            (U.needsUpdate = !0),
            E.renderBufferDirect(N, L, O, U, _, Q),
            (U.side = hn))
          : E.renderBufferDirect(N, L, O, U, _, Q),
        _.onAfterRender(E, L, N, O, U, Q));
    }
    function Xi(_, L, N) {
      L.isScene !== !0 && (L = gt);
      const O = Me.get(_),
        U = y.state.lights,
        Q = y.state.shadowsArray,
        ce = U.state.version,
        pe = k.getParameters(_, U.state, Q, L, N),
        ue = k.getProgramCacheKey(pe);
      let Te = O.programs;
      ((O.environment = _.isMeshStandardMaterial ? L.environment : null),
        (O.fog = L.fog),
        (O.envMap = (_.isMeshStandardMaterial ? x : b).get(
          _.envMap || O.environment,
        )),
        (O.envMapRotation =
          O.environment !== null && _.envMap === null
            ? L.environmentRotation
            : _.envMapRotation),
        Te === void 0 &&
          (_.addEventListener("dispose", Re),
          (Te = new Map()),
          (O.programs = Te)));
      let we = Te.get(ue);
      if (we !== void 0) {
        if (O.currentProgram === we && O.lightsStateVersion === ce)
          return (Aa(_, pe), we);
      } else
        ((pe.uniforms = k.getUniforms(_)),
          _.onBeforeCompile(pe, E),
          (we = k.acquireProgram(pe, ue)),
          Te.set(ue, we),
          (O.uniforms = pe.uniforms));
      const ve = O.uniforms;
      return (
        ((!_.isShaderMaterial && !_.isRawShaderMaterial) ||
          _.clipping === !0) &&
          (ve.clippingPlanes = xe.uniform),
        Aa(_, pe),
        (O.needsLights = vl(_)),
        (O.lightsStateVersion = ce),
        O.needsLights &&
          ((ve.ambientLightColor.value = U.state.ambient),
          (ve.lightProbe.value = U.state.probe),
          (ve.directionalLights.value = U.state.directional),
          (ve.directionalLightShadows.value = U.state.directionalShadow),
          (ve.spotLights.value = U.state.spot),
          (ve.spotLightShadows.value = U.state.spotShadow),
          (ve.rectAreaLights.value = U.state.rectArea),
          (ve.ltc_1.value = U.state.rectAreaLTC1),
          (ve.ltc_2.value = U.state.rectAreaLTC2),
          (ve.pointLights.value = U.state.point),
          (ve.pointLightShadows.value = U.state.pointShadow),
          (ve.hemisphereLights.value = U.state.hemi),
          (ve.directionalShadowMap.value = U.state.directionalShadowMap),
          (ve.directionalShadowMatrix.value = U.state.directionalShadowMatrix),
          (ve.spotShadowMap.value = U.state.spotShadowMap),
          (ve.spotLightMatrix.value = U.state.spotLightMatrix),
          (ve.spotLightMap.value = U.state.spotLightMap),
          (ve.pointShadowMap.value = U.state.pointShadowMap),
          (ve.pointShadowMatrix.value = U.state.pointShadowMatrix)),
        (O.currentProgram = we),
        (O.uniformsList = null),
        we
      );
    }
    function Ta(_) {
      if (_.uniformsList === null) {
        const L = _.currentProgram.getUniforms();
        _.uniformsList = vs.seqWithValue(L.seq, _.uniforms);
      }
      return _.uniformsList;
    }
    function Aa(_, L) {
      const N = Me.get(_);
      ((N.outputColorSpace = L.outputColorSpace),
        (N.batching = L.batching),
        (N.batchingColor = L.batchingColor),
        (N.instancing = L.instancing),
        (N.instancingColor = L.instancingColor),
        (N.instancingMorph = L.instancingMorph),
        (N.skinning = L.skinning),
        (N.morphTargets = L.morphTargets),
        (N.morphNormals = L.morphNormals),
        (N.morphColors = L.morphColors),
        (N.morphTargetsCount = L.morphTargetsCount),
        (N.numClippingPlanes = L.numClippingPlanes),
        (N.numIntersection = L.numClipIntersection),
        (N.vertexAlphas = L.vertexAlphas),
        (N.vertexTangents = L.vertexTangents),
        (N.toneMapping = L.toneMapping));
    }
    function _l(_, L, N, O, U) {
      (L.isScene !== !0 && (L = gt), Pe.resetTextureUnits());
      const Q = L.fog,
        ce = O.isMeshStandardMaterial ? L.environment : null,
        pe =
          v === null
            ? E.outputColorSpace
            : v.isXRRenderTarget === !0
              ? v.texture.colorSpace
              : Mi,
        ue = (O.isMeshStandardMaterial ? x : b).get(O.envMap || ce),
        Te =
          O.vertexColors === !0 &&
          !!N.attributes.color &&
          N.attributes.color.itemSize === 4,
        we = !!N.attributes.tangent && (!!O.normalMap || O.anisotropy > 0),
        ve = !!N.morphAttributes.position,
        Ve = !!N.morphAttributes.normal,
        Ze = !!N.morphAttributes.color;
      let lt = Cn;
      O.toneMapped &&
        (v === null || v.isXRRenderTarget === !0) &&
        (lt = E.toneMapping);
      const ct =
          N.morphAttributes.position ||
          N.morphAttributes.normal ||
          N.morphAttributes.color,
        Je = ct !== void 0 ? ct.length : 0,
        ye = Me.get(O),
        at = y.state.lights;
      if (j === !0 && (de === !0 || _ !== B)) {
        const bt = _ === B && O.id === R;
        xe.setState(O, _, bt);
      }
      let He = !1;
      O.version === ye.__version
        ? ((ye.needsLights && ye.lightsStateVersion !== at.state.version) ||
            ye.outputColorSpace !== pe ||
            (U.isBatchedMesh && ye.batching === !1) ||
            (!U.isBatchedMesh && ye.batching === !0) ||
            (U.isBatchedMesh &&
              ye.batchingColor === !0 &&
              U.colorTexture === null) ||
            (U.isBatchedMesh &&
              ye.batchingColor === !1 &&
              U.colorTexture !== null) ||
            (U.isInstancedMesh && ye.instancing === !1) ||
            (!U.isInstancedMesh && ye.instancing === !0) ||
            (U.isSkinnedMesh && ye.skinning === !1) ||
            (!U.isSkinnedMesh && ye.skinning === !0) ||
            (U.isInstancedMesh &&
              ye.instancingColor === !0 &&
              U.instanceColor === null) ||
            (U.isInstancedMesh &&
              ye.instancingColor === !1 &&
              U.instanceColor !== null) ||
            (U.isInstancedMesh &&
              ye.instancingMorph === !0 &&
              U.morphTexture === null) ||
            (U.isInstancedMesh &&
              ye.instancingMorph === !1 &&
              U.morphTexture !== null) ||
            ye.envMap !== ue ||
            (O.fog === !0 && ye.fog !== Q) ||
            (ye.numClippingPlanes !== void 0 &&
              (ye.numClippingPlanes !== xe.numPlanes ||
                ye.numIntersection !== xe.numIntersection)) ||
            ye.vertexAlphas !== Te ||
            ye.vertexTangents !== we ||
            ye.morphTargets !== ve ||
            ye.morphNormals !== Ve ||
            ye.morphColors !== Ze ||
            ye.toneMapping !== lt ||
            ye.morphTargetsCount !== Je) &&
          (He = !0)
        : ((He = !0), (ye.__version = O.version));
      let Lt = ye.currentProgram;
      He === !0 && (Lt = Xi(O, L, U));
      let jn = !1,
        Ut = !1,
        wi = !1;
      const ot = Lt.getUniforms(),
        Tt = ye.uniforms;
      if (
        (me.useProgram(Lt.program) && ((jn = !0), (Ut = !0), (wi = !0)),
        O.id !== R && ((R = O.id), (Ut = !0)),
        jn || B !== _)
      ) {
        (me.buffers.depth.getReversed() &&
          _.reversedDepth !== !0 &&
          ((_._reversedDepth = !0), _.updateProjectionMatrix()),
          ot.setValue(A, "projectionMatrix", _.projectionMatrix),
          ot.setValue(A, "viewMatrix", _.matrixWorldInverse));
        const At = ot.map.cameraPosition;
        (At !== void 0 &&
          At.setValue(A, ge.setFromMatrixPosition(_.matrixWorld)),
          tt.logarithmicDepthBuffer &&
            ot.setValue(
              A,
              "logDepthBufFC",
              2 / (Math.log(_.far + 1) / Math.LN2),
            ),
          (O.isMeshPhongMaterial ||
            O.isMeshToonMaterial ||
            O.isMeshLambertMaterial ||
            O.isMeshBasicMaterial ||
            O.isMeshStandardMaterial ||
            O.isShaderMaterial) &&
            ot.setValue(A, "isOrthographic", _.isOrthographicCamera === !0),
          B !== _ && ((B = _), (Ut = !0), (wi = !0)));
      }
      if (U.isSkinnedMesh) {
        (ot.setOptional(A, U, "bindMatrix"),
          ot.setOptional(A, U, "bindMatrixInverse"));
        const bt = U.skeleton;
        bt &&
          (bt.boneTexture === null && bt.computeBoneTexture(),
          ot.setValue(A, "boneTexture", bt.boneTexture, Pe));
      }
      U.isBatchedMesh &&
        (ot.setOptional(A, U, "batchingTexture"),
        ot.setValue(A, "batchingTexture", U._matricesTexture, Pe),
        ot.setOptional(A, U, "batchingIdTexture"),
        ot.setValue(A, "batchingIdTexture", U._indirectTexture, Pe),
        ot.setOptional(A, U, "batchingColorTexture"),
        U._colorsTexture !== null &&
          ot.setValue(A, "batchingColorTexture", U._colorsTexture, Pe));
      const Bt = N.morphAttributes;
      if (
        ((Bt.position !== void 0 ||
          Bt.normal !== void 0 ||
          Bt.color !== void 0) &&
          Ae.update(U, N, Lt),
        (Ut || ye.receiveShadow !== U.receiveShadow) &&
          ((ye.receiveShadow = U.receiveShadow),
          ot.setValue(A, "receiveShadow", U.receiveShadow)),
        O.isMeshGouraudMaterial &&
          O.envMap !== null &&
          ((Tt.envMap.value = ue),
          (Tt.flipEnvMap.value =
            ue.isCubeTexture && ue.isRenderTargetTexture === !1 ? -1 : 1)),
        O.isMeshStandardMaterial &&
          O.envMap === null &&
          L.environment !== null &&
          (Tt.envMapIntensity.value = L.environmentIntensity),
        Tt.dfgLUT !== void 0 && (Tt.dfgLUT.value = Op()),
        Ut &&
          (ot.setValue(A, "toneMappingExposure", E.toneMappingExposure),
          ye.needsLights && gl(Tt, wi),
          Q && O.fog === !0 && _e.refreshFogUniforms(Tt, Q),
          _e.refreshMaterialUniforms(
            Tt,
            O,
            re,
            te,
            y.state.transmissionRenderTarget[_.id],
          ),
          vs.upload(A, Ta(ye), Tt, Pe)),
        O.isShaderMaterial &&
          O.uniformsNeedUpdate === !0 &&
          (vs.upload(A, Ta(ye), Tt, Pe), (O.uniformsNeedUpdate = !1)),
        O.isSpriteMaterial && ot.setValue(A, "center", U.center),
        ot.setValue(A, "modelViewMatrix", U.modelViewMatrix),
        ot.setValue(A, "normalMatrix", U.normalMatrix),
        ot.setValue(A, "modelMatrix", U.matrixWorld),
        O.isShaderMaterial || O.isRawShaderMaterial)
      ) {
        const bt = O.uniformsGroups;
        for (let At = 0, Os = bt.length; At < Os; At++) {
          const Un = bt[At];
          (le.update(Un, Lt), le.bind(Un, Lt));
        }
      }
      return Lt;
    }
    function gl(_, L) {
      ((_.ambientLightColor.needsUpdate = L),
        (_.lightProbe.needsUpdate = L),
        (_.directionalLights.needsUpdate = L),
        (_.directionalLightShadows.needsUpdate = L),
        (_.pointLights.needsUpdate = L),
        (_.pointLightShadows.needsUpdate = L),
        (_.spotLights.needsUpdate = L),
        (_.spotLightShadows.needsUpdate = L),
        (_.rectAreaLights.needsUpdate = L),
        (_.hemisphereLights.needsUpdate = L));
    }
    function vl(_) {
      return (
        _.isMeshLambertMaterial ||
        _.isMeshToonMaterial ||
        _.isMeshPhongMaterial ||
        _.isMeshStandardMaterial ||
        _.isShadowMaterial ||
        (_.isShaderMaterial && _.lights === !0)
      );
    }
    ((this.getActiveCubeFace = function () {
      return z;
    }),
      (this.getActiveMipmapLevel = function () {
        return S;
      }),
      (this.getRenderTarget = function () {
        return v;
      }),
      (this.setRenderTargetTextures = function (_, L, N) {
        const O = Me.get(_);
        ((O.__autoAllocateDepthBuffer = _.resolveDepthBuffer === !1),
          O.__autoAllocateDepthBuffer === !1 && (O.__useRenderToTexture = !1),
          (Me.get(_.texture).__webglTexture = L),
          (Me.get(_.depthTexture).__webglTexture = O.__autoAllocateDepthBuffer
            ? void 0
            : N),
          (O.__hasExternalTextures = !0));
      }),
      (this.setRenderTargetFramebuffer = function (_, L) {
        const N = Me.get(_);
        ((N.__webglFramebuffer = L),
          (N.__useDefaultFramebuffer = L === void 0));
      }));
    const Ml = A.createFramebuffer();
    ((this.setRenderTarget = function (_, L = 0, N = 0) {
      ((v = _), (z = L), (S = N));
      let O = !0,
        U = null,
        Q = !1,
        ce = !1;
      if (_) {
        const ue = Me.get(_);
        if (ue.__useDefaultFramebuffer !== void 0)
          (me.bindFramebuffer(A.FRAMEBUFFER, null), (O = !1));
        else if (ue.__webglFramebuffer === void 0) Pe.setupRenderTarget(_);
        else if (ue.__hasExternalTextures)
          Pe.rebindTextures(
            _,
            Me.get(_.texture).__webglTexture,
            Me.get(_.depthTexture).__webglTexture,
          );
        else if (_.depthBuffer) {
          const ve = _.depthTexture;
          if (ue.__boundDepthTexture !== ve) {
            if (
              ve !== null &&
              Me.has(ve) &&
              (_.width !== ve.image.width || _.height !== ve.image.height)
            )
              throw new Error(
                "WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.",
              );
            Pe.setupDepthRenderbuffer(_);
          }
        }
        const Te = _.texture;
        (Te.isData3DTexture ||
          Te.isDataArrayTexture ||
          Te.isCompressedArrayTexture) &&
          (ce = !0);
        const we = Me.get(_).__webglFramebuffer;
        (_.isWebGLCubeRenderTarget
          ? (Array.isArray(we[L]) ? (U = we[L][N]) : (U = we[L]), (Q = !0))
          : _.samples > 0 && Pe.useMultisampledRTT(_) === !1
            ? (U = Me.get(_).__webglMultisampledFramebuffer)
            : Array.isArray(we)
              ? (U = we[N])
              : (U = we),
          V.copy(_.viewport),
          H.copy(_.scissor),
          (q = _.scissorTest));
      } else
        (V.copy(Xe).multiplyScalar(re).floor(),
          H.copy(Qe).multiplyScalar(re).floor(),
          (q = et));
      if (
        (N !== 0 && (U = Ml),
        me.bindFramebuffer(A.FRAMEBUFFER, U) && O && me.drawBuffers(_, U),
        me.viewport(V),
        me.scissor(H),
        me.setScissorTest(q),
        Q)
      ) {
        const ue = Me.get(_.texture);
        A.framebufferTexture2D(
          A.FRAMEBUFFER,
          A.COLOR_ATTACHMENT0,
          A.TEXTURE_CUBE_MAP_POSITIVE_X + L,
          ue.__webglTexture,
          N,
        );
      } else if (ce) {
        const ue = L;
        for (let Te = 0; Te < _.textures.length; Te++) {
          const we = Me.get(_.textures[Te]);
          A.framebufferTextureLayer(
            A.FRAMEBUFFER,
            A.COLOR_ATTACHMENT0 + Te,
            we.__webglTexture,
            N,
            ue,
          );
        }
      } else if (_ !== null && N !== 0) {
        const ue = Me.get(_.texture);
        A.framebufferTexture2D(
          A.FRAMEBUFFER,
          A.COLOR_ATTACHMENT0,
          A.TEXTURE_2D,
          ue.__webglTexture,
          N,
        );
      }
      R = -1;
    }),
      (this.readRenderTargetPixels = function (_, L, N, O, U, Q, ce, pe = 0) {
        if (!(_ && _.isWebGLRenderTarget)) {
          ht(
            "WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.",
          );
          return;
        }
        let ue = Me.get(_).__webglFramebuffer;
        if ((_.isWebGLCubeRenderTarget && ce !== void 0 && (ue = ue[ce]), ue)) {
          me.bindFramebuffer(A.FRAMEBUFFER, ue);
          try {
            const Te = _.textures[pe],
              we = Te.format,
              ve = Te.type;
            if (!tt.textureFormatReadable(we)) {
              ht(
                "WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.",
              );
              return;
            }
            if (!tt.textureTypeReadable(ve)) {
              ht(
                "WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.",
              );
              return;
            }
            L >= 0 &&
              L <= _.width - O &&
              N >= 0 &&
              N <= _.height - U &&
              (_.textures.length > 1 && A.readBuffer(A.COLOR_ATTACHMENT0 + pe),
              A.readPixels(L, N, O, U, Ce.convert(we), Ce.convert(ve), Q));
          } finally {
            const Te = v !== null ? Me.get(v).__webglFramebuffer : null;
            me.bindFramebuffer(A.FRAMEBUFFER, Te);
          }
        }
      }),
      (this.readRenderTargetPixelsAsync = async function (
        _,
        L,
        N,
        O,
        U,
        Q,
        ce,
        pe = 0,
      ) {
        if (!(_ && _.isWebGLRenderTarget))
          throw new Error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.",
          );
        let ue = Me.get(_).__webglFramebuffer;
        if ((_.isWebGLCubeRenderTarget && ce !== void 0 && (ue = ue[ce]), ue))
          if (L >= 0 && L <= _.width - O && N >= 0 && N <= _.height - U) {
            me.bindFramebuffer(A.FRAMEBUFFER, ue);
            const Te = _.textures[pe],
              we = Te.format,
              ve = Te.type;
            if (!tt.textureFormatReadable(we))
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.",
              );
            if (!tt.textureTypeReadable(ve))
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.",
              );
            const Ve = A.createBuffer();
            (A.bindBuffer(A.PIXEL_PACK_BUFFER, Ve),
              A.bufferData(A.PIXEL_PACK_BUFFER, Q.byteLength, A.STREAM_READ),
              _.textures.length > 1 && A.readBuffer(A.COLOR_ATTACHMENT0 + pe),
              A.readPixels(L, N, O, U, Ce.convert(we), Ce.convert(ve), 0));
            const Ze = v !== null ? Me.get(v).__webglFramebuffer : null;
            me.bindFramebuffer(A.FRAMEBUFFER, Ze);
            const lt = A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE, 0);
            return (
              A.flush(),
              await dc(A, lt, 4),
              A.bindBuffer(A.PIXEL_PACK_BUFFER, Ve),
              A.getBufferSubData(A.PIXEL_PACK_BUFFER, 0, Q),
              A.deleteBuffer(Ve),
              A.deleteSync(lt),
              Q
            );
          } else
            throw new Error(
              "THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.",
            );
      }),
      (this.copyFramebufferToTexture = function (_, L = null, N = 0) {
        const O = Math.pow(2, -N),
          U = Math.floor(_.image.width * O),
          Q = Math.floor(_.image.height * O),
          ce = L !== null ? L.x : 0,
          pe = L !== null ? L.y : 0;
        (Pe.setTexture2D(_, 0),
          A.copyTexSubImage2D(A.TEXTURE_2D, N, 0, 0, ce, pe, U, Q),
          me.unbindTexture());
      }));
    const Sl = A.createFramebuffer(),
      bl = A.createFramebuffer();
    ((this.copyTextureToTexture = function (
      _,
      L,
      N = null,
      O = null,
      U = 0,
      Q = null,
    ) {
      Q === null &&
        (U !== 0
          ? (zi(
              "WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels.",
            ),
            (Q = U),
            (U = 0))
          : (Q = 0));
      let ce, pe, ue, Te, we, ve, Ve, Ze, lt;
      const ct = _.isCompressedTexture ? _.mipmaps[Q] : _.image;
      if (N !== null)
        ((ce = N.max.x - N.min.x),
          (pe = N.max.y - N.min.y),
          (ue = N.isBox3 ? N.max.z - N.min.z : 1),
          (Te = N.min.x),
          (we = N.min.y),
          (ve = N.isBox3 ? N.min.z : 0));
      else {
        const Bt = Math.pow(2, -U);
        ((ce = Math.floor(ct.width * Bt)),
          (pe = Math.floor(ct.height * Bt)),
          _.isDataArrayTexture
            ? (ue = ct.depth)
            : _.isData3DTexture
              ? (ue = Math.floor(ct.depth * Bt))
              : (ue = 1),
          (Te = 0),
          (we = 0),
          (ve = 0));
      }
      O !== null
        ? ((Ve = O.x), (Ze = O.y), (lt = O.z))
        : ((Ve = 0), (Ze = 0), (lt = 0));
      const Je = Ce.convert(L.format),
        ye = Ce.convert(L.type);
      let at;
      (L.isData3DTexture
        ? (Pe.setTexture3D(L, 0), (at = A.TEXTURE_3D))
        : L.isDataArrayTexture || L.isCompressedArrayTexture
          ? (Pe.setTexture2DArray(L, 0), (at = A.TEXTURE_2D_ARRAY))
          : (Pe.setTexture2D(L, 0), (at = A.TEXTURE_2D)),
        A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL, L.flipY),
        A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL, L.premultiplyAlpha),
        A.pixelStorei(A.UNPACK_ALIGNMENT, L.unpackAlignment));
      const He = A.getParameter(A.UNPACK_ROW_LENGTH),
        Lt = A.getParameter(A.UNPACK_IMAGE_HEIGHT),
        jn = A.getParameter(A.UNPACK_SKIP_PIXELS),
        Ut = A.getParameter(A.UNPACK_SKIP_ROWS),
        wi = A.getParameter(A.UNPACK_SKIP_IMAGES);
      (A.pixelStorei(A.UNPACK_ROW_LENGTH, ct.width),
        A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, ct.height),
        A.pixelStorei(A.UNPACK_SKIP_PIXELS, Te),
        A.pixelStorei(A.UNPACK_SKIP_ROWS, we),
        A.pixelStorei(A.UNPACK_SKIP_IMAGES, ve));
      const ot = _.isDataArrayTexture || _.isData3DTexture,
        Tt = L.isDataArrayTexture || L.isData3DTexture;
      if (_.isDepthTexture) {
        const Bt = Me.get(_),
          bt = Me.get(L),
          At = Me.get(Bt.__renderTarget),
          Os = Me.get(bt.__renderTarget);
        (me.bindFramebuffer(A.READ_FRAMEBUFFER, At.__webglFramebuffer),
          me.bindFramebuffer(A.DRAW_FRAMEBUFFER, Os.__webglFramebuffer));
        for (let Un = 0; Un < ue; Un++)
          (ot &&
            (A.framebufferTextureLayer(
              A.READ_FRAMEBUFFER,
              A.COLOR_ATTACHMENT0,
              Me.get(_).__webglTexture,
              U,
              ve + Un,
            ),
            A.framebufferTextureLayer(
              A.DRAW_FRAMEBUFFER,
              A.COLOR_ATTACHMENT0,
              Me.get(L).__webglTexture,
              Q,
              lt + Un,
            )),
            A.blitFramebuffer(
              Te,
              we,
              ce,
              pe,
              Ve,
              Ze,
              ce,
              pe,
              A.DEPTH_BUFFER_BIT,
              A.NEAREST,
            ));
        (me.bindFramebuffer(A.READ_FRAMEBUFFER, null),
          me.bindFramebuffer(A.DRAW_FRAMEBUFFER, null));
      } else if (U !== 0 || _.isRenderTargetTexture || Me.has(_)) {
        const Bt = Me.get(_),
          bt = Me.get(L);
        (me.bindFramebuffer(A.READ_FRAMEBUFFER, Sl),
          me.bindFramebuffer(A.DRAW_FRAMEBUFFER, bl));
        for (let At = 0; At < ue; At++)
          (ot
            ? A.framebufferTextureLayer(
                A.READ_FRAMEBUFFER,
                A.COLOR_ATTACHMENT0,
                Bt.__webglTexture,
                U,
                ve + At,
              )
            : A.framebufferTexture2D(
                A.READ_FRAMEBUFFER,
                A.COLOR_ATTACHMENT0,
                A.TEXTURE_2D,
                Bt.__webglTexture,
                U,
              ),
            Tt
              ? A.framebufferTextureLayer(
                  A.DRAW_FRAMEBUFFER,
                  A.COLOR_ATTACHMENT0,
                  bt.__webglTexture,
                  Q,
                  lt + At,
                )
              : A.framebufferTexture2D(
                  A.DRAW_FRAMEBUFFER,
                  A.COLOR_ATTACHMENT0,
                  A.TEXTURE_2D,
                  bt.__webglTexture,
                  Q,
                ),
            U !== 0
              ? A.blitFramebuffer(
                  Te,
                  we,
                  ce,
                  pe,
                  Ve,
                  Ze,
                  ce,
                  pe,
                  A.COLOR_BUFFER_BIT,
                  A.NEAREST,
                )
              : Tt
                ? A.copyTexSubImage3D(at, Q, Ve, Ze, lt + At, Te, we, ce, pe)
                : A.copyTexSubImage2D(at, Q, Ve, Ze, Te, we, ce, pe));
        (me.bindFramebuffer(A.READ_FRAMEBUFFER, null),
          me.bindFramebuffer(A.DRAW_FRAMEBUFFER, null));
      } else
        Tt
          ? _.isDataTexture || _.isData3DTexture
            ? A.texSubImage3D(at, Q, Ve, Ze, lt, ce, pe, ue, Je, ye, ct.data)
            : L.isCompressedArrayTexture
              ? A.compressedTexSubImage3D(
                  at,
                  Q,
                  Ve,
                  Ze,
                  lt,
                  ce,
                  pe,
                  ue,
                  Je,
                  ct.data,
                )
              : A.texSubImage3D(at, Q, Ve, Ze, lt, ce, pe, ue, Je, ye, ct)
          : _.isDataTexture
            ? A.texSubImage2D(A.TEXTURE_2D, Q, Ve, Ze, ce, pe, Je, ye, ct.data)
            : _.isCompressedTexture
              ? A.compressedTexSubImage2D(
                  A.TEXTURE_2D,
                  Q,
                  Ve,
                  Ze,
                  ct.width,
                  ct.height,
                  Je,
                  ct.data,
                )
              : A.texSubImage2D(A.TEXTURE_2D, Q, Ve, Ze, ce, pe, Je, ye, ct);
      (A.pixelStorei(A.UNPACK_ROW_LENGTH, He),
        A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, Lt),
        A.pixelStorei(A.UNPACK_SKIP_PIXELS, jn),
        A.pixelStorei(A.UNPACK_SKIP_ROWS, Ut),
        A.pixelStorei(A.UNPACK_SKIP_IMAGES, wi),
        Q === 0 && L.generateMipmaps && A.generateMipmap(at),
        me.unbindTexture());
    }),
      (this.initRenderTarget = function (_) {
        Me.get(_).__webglFramebuffer === void 0 && Pe.setupRenderTarget(_);
      }),
      (this.initTexture = function (_) {
        (_.isCubeTexture
          ? Pe.setTextureCube(_, 0)
          : _.isData3DTexture
            ? Pe.setTexture3D(_, 0)
            : _.isDataArrayTexture || _.isCompressedArrayTexture
              ? Pe.setTexture2DArray(_, 0)
              : Pe.setTexture2D(_, 0),
          me.unbindTexture());
      }),
      (this.resetState = function () {
        ((z = 0), (S = 0), (v = null), me.reset(), w.reset());
      }),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this }),
        ));
  }
  get coordinateSystem() {
    return Qt;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    ((t.drawingBufferColorSpace = We._getDrawingBufferColorSpace(e)),
      (t.unpackColorSpace = We._getUnpackColorSpace()));
  }
}
const Ao = { type: "change" },
  _a = { type: "start" },
  ll = { type: "end" },
  fs = new ma(),
  wo = new Tn(),
  zp = Math.cos(70 * pc.DEG2RAD),
  pt = new F(),
  Ct = 2 * Math.PI,
  je = {
    NONE: -1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    TOUCH_ROTATE: 3,
    TOUCH_PAN: 4,
    TOUCH_DOLLY_PAN: 5,
    TOUCH_DOLLY_ROTATE: 6,
  },
  fr = 1e-6;
class kp extends jc {
  constructor(e, t = null) {
    (super(e, t),
      (this.state = je.NONE),
      (this.target = new F()),
      (this.cursor = new F()),
      (this.minDistance = 0),
      (this.maxDistance = 1 / 0),
      (this.minZoom = 0),
      (this.maxZoom = 1 / 0),
      (this.minTargetRadius = 0),
      (this.maxTargetRadius = 1 / 0),
      (this.minPolarAngle = 0),
      (this.maxPolarAngle = Math.PI),
      (this.minAzimuthAngle = -1 / 0),
      (this.maxAzimuthAngle = 1 / 0),
      (this.enableDamping = !1),
      (this.dampingFactor = 0.05),
      (this.enableZoom = !0),
      (this.zoomSpeed = 1),
      (this.enableRotate = !0),
      (this.rotateSpeed = 1),
      (this.keyRotateSpeed = 1),
      (this.enablePan = !0),
      (this.panSpeed = 1),
      (this.screenSpacePanning = !0),
      (this.keyPanSpeed = 7),
      (this.zoomToCursor = !1),
      (this.autoRotate = !1),
      (this.autoRotateSpeed = 2),
      (this.keys = {
        LEFT: "ArrowLeft",
        UP: "ArrowUp",
        RIGHT: "ArrowRight",
        BOTTOM: "ArrowDown",
      }),
      (this.mouseButtons = {
        LEFT: pi.ROTATE,
        MIDDLE: pi.DOLLY,
        RIGHT: pi.PAN,
      }),
      (this.touches = { ONE: di.ROTATE, TWO: di.DOLLY_PAN }),
      (this.target0 = this.target.clone()),
      (this.position0 = this.object.position.clone()),
      (this.zoom0 = this.object.zoom),
      (this._domElementKeyEvents = null),
      (this._lastPosition = new F()),
      (this._lastQuaternion = new Xn()),
      (this._lastTargetPosition = new F()),
      (this._quat = new Xn().setFromUnitVectors(e.up, new F(0, 1, 0))),
      (this._quatInverse = this._quat.clone().invert()),
      (this._spherical = new eo()),
      (this._sphericalDelta = new eo()),
      (this._scale = 1),
      (this._panOffset = new F()),
      (this._rotateStart = new Ie()),
      (this._rotateEnd = new Ie()),
      (this._rotateDelta = new Ie()),
      (this._panStart = new Ie()),
      (this._panEnd = new Ie()),
      (this._panDelta = new Ie()),
      (this._dollyStart = new Ie()),
      (this._dollyEnd = new Ie()),
      (this._dollyDelta = new Ie()),
      (this._dollyDirection = new F()),
      (this._mouse = new Ie()),
      (this._performCursorZoom = !1),
      (this._pointers = []),
      (this._pointerPositions = {}),
      (this._controlActive = !1),
      (this._onPointerMove = Gp.bind(this)),
      (this._onPointerDown = Vp.bind(this)),
      (this._onPointerUp = Hp.bind(this)),
      (this._onContextMenu = jp.bind(this)),
      (this._onMouseWheel = Yp.bind(this)),
      (this._onKeyDown = Zp.bind(this)),
      (this._onTouchStart = qp.bind(this)),
      (this._onTouchMove = Kp.bind(this)),
      (this._onMouseDown = Wp.bind(this)),
      (this._onMouseMove = Xp.bind(this)),
      (this._interceptControlDown = $p.bind(this)),
      (this._interceptControlUp = Jp.bind(this)),
      this.domElement !== null && this.connect(this.domElement),
      this.update());
  }
  connect(e) {
    (super.connect(e),
      this.domElement.addEventListener("pointerdown", this._onPointerDown),
      this.domElement.addEventListener("pointercancel", this._onPointerUp),
      this.domElement.addEventListener("contextmenu", this._onContextMenu),
      this.domElement.addEventListener("wheel", this._onMouseWheel, {
        passive: !1,
      }),
      this.domElement
        .getRootNode()
        .addEventListener("keydown", this._interceptControlDown, {
          passive: !0,
          capture: !0,
        }),
      (this.domElement.style.touchAction = "none"));
  }
  disconnect() {
    (this.domElement.removeEventListener("pointerdown", this._onPointerDown),
      this.domElement.removeEventListener("pointermove", this._onPointerMove),
      this.domElement.removeEventListener("pointerup", this._onPointerUp),
      this.domElement.removeEventListener("pointercancel", this._onPointerUp),
      this.domElement.removeEventListener("wheel", this._onMouseWheel),
      this.domElement.removeEventListener("contextmenu", this._onContextMenu),
      this.stopListenToKeyEvents(),
      this.domElement
        .getRootNode()
        .removeEventListener("keydown", this._interceptControlDown, {
          capture: !0,
        }),
      (this.domElement.style.touchAction = "auto"));
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(e) {
    (e.addEventListener("keydown", this._onKeyDown),
      (this._domElementKeyEvents = e));
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null &&
      (this._domElementKeyEvents.removeEventListener(
        "keydown",
        this._onKeyDown,
      ),
      (this._domElementKeyEvents = null));
  }
  saveState() {
    (this.target0.copy(this.target),
      this.position0.copy(this.object.position),
      (this.zoom0 = this.object.zoom));
  }
  reset() {
    (this.target.copy(this.target0),
      this.object.position.copy(this.position0),
      (this.object.zoom = this.zoom0),
      this.object.updateProjectionMatrix(),
      this.dispatchEvent(Ao),
      this.update(),
      (this.state = je.NONE));
  }
  update(e = null) {
    const t = this.object.position;
    (pt.copy(t).sub(this.target),
      pt.applyQuaternion(this._quat),
      this._spherical.setFromVector3(pt),
      this.autoRotate &&
        this.state === je.NONE &&
        this._rotateLeft(this._getAutoRotationAngle(e)),
      this.enableDamping
        ? ((this._spherical.theta +=
            this._sphericalDelta.theta * this.dampingFactor),
          (this._spherical.phi +=
            this._sphericalDelta.phi * this.dampingFactor))
        : ((this._spherical.theta += this._sphericalDelta.theta),
          (this._spherical.phi += this._sphericalDelta.phi)));
    let n = this.minAzimuthAngle,
      s = this.maxAzimuthAngle;
    (isFinite(n) &&
      isFinite(s) &&
      (n < -Math.PI ? (n += Ct) : n > Math.PI && (n -= Ct),
      s < -Math.PI ? (s += Ct) : s > Math.PI && (s -= Ct),
      n <= s
        ? (this._spherical.theta = Math.max(
            n,
            Math.min(s, this._spherical.theta),
          ))
        : (this._spherical.theta =
            this._spherical.theta > (n + s) / 2
              ? Math.max(n, this._spherical.theta)
              : Math.min(s, this._spherical.theta))),
      (this._spherical.phi = Math.max(
        this.minPolarAngle,
        Math.min(this.maxPolarAngle, this._spherical.phi),
      )),
      this._spherical.makeSafe(),
      this.enableDamping === !0
        ? this.target.addScaledVector(this._panOffset, this.dampingFactor)
        : this.target.add(this._panOffset),
      this.target.sub(this.cursor),
      this.target.clampLength(this.minTargetRadius, this.maxTargetRadius),
      this.target.add(this.cursor));
    let r = !1;
    if (
      (this.zoomToCursor && this._performCursorZoom) ||
      this.object.isOrthographicCamera
    )
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const a = this._spherical.radius;
      ((this._spherical.radius = this._clampDistance(
        this._spherical.radius * this._scale,
      )),
        (r = a != this._spherical.radius));
    }
    if (
      (pt.setFromSpherical(this._spherical),
      pt.applyQuaternion(this._quatInverse),
      t.copy(this.target).add(pt),
      this.object.lookAt(this.target),
      this.enableDamping === !0
        ? ((this._sphericalDelta.theta *= 1 - this.dampingFactor),
          (this._sphericalDelta.phi *= 1 - this.dampingFactor),
          this._panOffset.multiplyScalar(1 - this.dampingFactor))
        : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)),
      this.zoomToCursor && this._performCursorZoom)
    ) {
      let a = null;
      if (this.object.isPerspectiveCamera) {
        const o = pt.length();
        a = this._clampDistance(o * this._scale);
        const c = o - a;
        (this.object.position.addScaledVector(this._dollyDirection, c),
          this.object.updateMatrixWorld(),
          (r = !!c));
      } else if (this.object.isOrthographicCamera) {
        const o = new F(this._mouse.x, this._mouse.y, 0);
        o.unproject(this.object);
        const c = this.object.zoom;
        ((this.object.zoom = Math.max(
          this.minZoom,
          Math.min(this.maxZoom, this.object.zoom / this._scale),
        )),
          this.object.updateProjectionMatrix(),
          (r = c !== this.object.zoom));
        const l = new F(this._mouse.x, this._mouse.y, 0);
        (l.unproject(this.object),
          this.object.position.sub(l).add(o),
          this.object.updateMatrixWorld(),
          (a = pt.length()));
      } else
        (console.warn(
          "WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.",
        ),
          (this.zoomToCursor = !1));
      a !== null &&
        (this.screenSpacePanning
          ? this.target
              .set(0, 0, -1)
              .transformDirection(this.object.matrix)
              .multiplyScalar(a)
              .add(this.object.position)
          : (fs.origin.copy(this.object.position),
            fs.direction.set(0, 0, -1).transformDirection(this.object.matrix),
            Math.abs(this.object.up.dot(fs.direction)) < zp
              ? this.object.lookAt(this.target)
              : (wo.setFromNormalAndCoplanarPoint(this.object.up, this.target),
                fs.intersectPlane(wo, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const a = this.object.zoom;
      ((this.object.zoom = Math.max(
        this.minZoom,
        Math.min(this.maxZoom, this.object.zoom / this._scale),
      )),
        a !== this.object.zoom &&
          (this.object.updateProjectionMatrix(), (r = !0)));
    }
    return (
      (this._scale = 1),
      (this._performCursorZoom = !1),
      r ||
      this._lastPosition.distanceToSquared(this.object.position) > fr ||
      8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > fr ||
      this._lastTargetPosition.distanceToSquared(this.target) > fr
        ? (this.dispatchEvent(Ao),
          this._lastPosition.copy(this.object.position),
          this._lastQuaternion.copy(this.object.quaternion),
          this._lastTargetPosition.copy(this.target),
          !0)
        : !1
    );
  }
  _getAutoRotationAngle(e) {
    return e !== null
      ? (Ct / 60) * this.autoRotateSpeed * e
      : (Ct / 60 / 60) * this.autoRotateSpeed;
  }
  _getZoomScale(e) {
    const t = Math.abs(e * 0.01);
    return Math.pow(0.95, this.zoomSpeed * t);
  }
  _rotateLeft(e) {
    this._sphericalDelta.theta -= e;
  }
  _rotateUp(e) {
    this._sphericalDelta.phi -= e;
  }
  _panLeft(e, t) {
    (pt.setFromMatrixColumn(t, 0),
      pt.multiplyScalar(-e),
      this._panOffset.add(pt));
  }
  _panUp(e, t) {
    (this.screenSpacePanning === !0
      ? pt.setFromMatrixColumn(t, 1)
      : (pt.setFromMatrixColumn(t, 0), pt.crossVectors(this.object.up, pt)),
      pt.multiplyScalar(e),
      this._panOffset.add(pt));
  }
  _pan(e, t) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const s = this.object.position;
      pt.copy(s).sub(this.target);
      let r = pt.length();
      ((r *= Math.tan(((this.object.fov / 2) * Math.PI) / 180)),
        this._panLeft((2 * e * r) / n.clientHeight, this.object.matrix),
        this._panUp((2 * t * r) / n.clientHeight, this.object.matrix));
    } else
      this.object.isOrthographicCamera
        ? (this._panLeft(
            (e * (this.object.right - this.object.left)) /
              this.object.zoom /
              n.clientWidth,
            this.object.matrix,
          ),
          this._panUp(
            (t * (this.object.top - this.object.bottom)) /
              this.object.zoom /
              n.clientHeight,
            this.object.matrix,
          ))
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.",
          ),
          (this.enablePan = !1));
  }
  _dollyOut(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera
      ? (this._scale /= e)
      : (console.warn(
          "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.",
        ),
        (this.enableZoom = !1));
  }
  _dollyIn(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera
      ? (this._scale *= e)
      : (console.warn(
          "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.",
        ),
        (this.enableZoom = !1));
  }
  _updateZoomParameters(e, t) {
    if (!this.zoomToCursor) return;
    this._performCursorZoom = !0;
    const n = this.domElement.getBoundingClientRect(),
      s = e - n.left,
      r = t - n.top,
      a = n.width,
      o = n.height;
    ((this._mouse.x = (s / a) * 2 - 1),
      (this._mouse.y = -(r / o) * 2 + 1),
      this._dollyDirection
        .set(this._mouse.x, this._mouse.y, 1)
        .unproject(this.object)
        .sub(this.object.position)
        .normalize());
  }
  _clampDistance(e) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, e));
  }
  _handleMouseDownRotate(e) {
    this._rotateStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownDolly(e) {
    (this._updateZoomParameters(e.clientX, e.clientX),
      this._dollyStart.set(e.clientX, e.clientY));
  }
  _handleMouseDownPan(e) {
    this._panStart.set(e.clientX, e.clientY);
  }
  _handleMouseMoveRotate(e) {
    (this._rotateEnd.set(e.clientX, e.clientY),
      this._rotateDelta
        .subVectors(this._rotateEnd, this._rotateStart)
        .multiplyScalar(this.rotateSpeed));
    const t = this.domElement;
    (this._rotateLeft((Ct * this._rotateDelta.x) / t.clientHeight),
      this._rotateUp((Ct * this._rotateDelta.y) / t.clientHeight),
      this._rotateStart.copy(this._rotateEnd),
      this.update());
  }
  _handleMouseMoveDolly(e) {
    (this._dollyEnd.set(e.clientX, e.clientY),
      this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart),
      this._dollyDelta.y > 0
        ? this._dollyOut(this._getZoomScale(this._dollyDelta.y))
        : this._dollyDelta.y < 0 &&
          this._dollyIn(this._getZoomScale(this._dollyDelta.y)),
      this._dollyStart.copy(this._dollyEnd),
      this.update());
  }
  _handleMouseMovePan(e) {
    (this._panEnd.set(e.clientX, e.clientY),
      this._panDelta
        .subVectors(this._panEnd, this._panStart)
        .multiplyScalar(this.panSpeed),
      this._pan(this._panDelta.x, this._panDelta.y),
      this._panStart.copy(this._panEnd),
      this.update());
  }
  _handleMouseWheel(e) {
    (this._updateZoomParameters(e.clientX, e.clientY),
      e.deltaY < 0
        ? this._dollyIn(this._getZoomScale(e.deltaY))
        : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)),
      this.update());
  }
  _handleKeyDown(e) {
    let t = !1;
    switch (e.code) {
      case this.keys.UP:
        (e.ctrlKey || e.metaKey || e.shiftKey
          ? this.enableRotate &&
            this._rotateUp(
              (Ct * this.keyRotateSpeed) / this.domElement.clientHeight,
            )
          : this.enablePan && this._pan(0, this.keyPanSpeed),
          (t = !0));
        break;
      case this.keys.BOTTOM:
        (e.ctrlKey || e.metaKey || e.shiftKey
          ? this.enableRotate &&
            this._rotateUp(
              (-Ct * this.keyRotateSpeed) / this.domElement.clientHeight,
            )
          : this.enablePan && this._pan(0, -this.keyPanSpeed),
          (t = !0));
        break;
      case this.keys.LEFT:
        (e.ctrlKey || e.metaKey || e.shiftKey
          ? this.enableRotate &&
            this._rotateLeft(
              (Ct * this.keyRotateSpeed) / this.domElement.clientHeight,
            )
          : this.enablePan && this._pan(this.keyPanSpeed, 0),
          (t = !0));
        break;
      case this.keys.RIGHT:
        (e.ctrlKey || e.metaKey || e.shiftKey
          ? this.enableRotate &&
            this._rotateLeft(
              (-Ct * this.keyRotateSpeed) / this.domElement.clientHeight,
            )
          : this.enablePan && this._pan(-this.keyPanSpeed, 0),
          (t = !0));
        break;
    }
    t && (e.preventDefault(), this.update());
  }
  _handleTouchStartRotate(e) {
    if (this._pointers.length === 1) this._rotateStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e),
        n = 0.5 * (e.pageX + t.x),
        s = 0.5 * (e.pageY + t.y);
      this._rotateStart.set(n, s);
    }
  }
  _handleTouchStartPan(e) {
    if (this._pointers.length === 1) this._panStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e),
        n = 0.5 * (e.pageX + t.x),
        s = 0.5 * (e.pageY + t.y);
      this._panStart.set(n, s);
    }
  }
  _handleTouchStartDolly(e) {
    const t = this._getSecondPointerPosition(e),
      n = e.pageX - t.x,
      s = e.pageY - t.y,
      r = Math.sqrt(n * n + s * s);
    this._dollyStart.set(0, r);
  }
  _handleTouchStartDollyPan(e) {
    (this.enableZoom && this._handleTouchStartDolly(e),
      this.enablePan && this._handleTouchStartPan(e));
  }
  _handleTouchStartDollyRotate(e) {
    (this.enableZoom && this._handleTouchStartDolly(e),
      this.enableRotate && this._handleTouchStartRotate(e));
  }
  _handleTouchMoveRotate(e) {
    if (this._pointers.length == 1) this._rotateEnd.set(e.pageX, e.pageY);
    else {
      const n = this._getSecondPointerPosition(e),
        s = 0.5 * (e.pageX + n.x),
        r = 0.5 * (e.pageY + n.y);
      this._rotateEnd.set(s, r);
    }
    this._rotateDelta
      .subVectors(this._rotateEnd, this._rotateStart)
      .multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    (this._rotateLeft((Ct * this._rotateDelta.x) / t.clientHeight),
      this._rotateUp((Ct * this._rotateDelta.y) / t.clientHeight),
      this._rotateStart.copy(this._rotateEnd));
  }
  _handleTouchMovePan(e) {
    if (this._pointers.length === 1) this._panEnd.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e),
        n = 0.5 * (e.pageX + t.x),
        s = 0.5 * (e.pageY + t.y);
      this._panEnd.set(n, s);
    }
    (this._panDelta
      .subVectors(this._panEnd, this._panStart)
      .multiplyScalar(this.panSpeed),
      this._pan(this._panDelta.x, this._panDelta.y),
      this._panStart.copy(this._panEnd));
  }
  _handleTouchMoveDolly(e) {
    const t = this._getSecondPointerPosition(e),
      n = e.pageX - t.x,
      s = e.pageY - t.y,
      r = Math.sqrt(n * n + s * s);
    (this._dollyEnd.set(0, r),
      this._dollyDelta.set(
        0,
        Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed),
      ),
      this._dollyOut(this._dollyDelta.y),
      this._dollyStart.copy(this._dollyEnd));
    const a = (e.pageX + t.x) * 0.5,
      o = (e.pageY + t.y) * 0.5;
    this._updateZoomParameters(a, o);
  }
  _handleTouchMoveDollyPan(e) {
    (this.enableZoom && this._handleTouchMoveDolly(e),
      this.enablePan && this._handleTouchMovePan(e));
  }
  _handleTouchMoveDollyRotate(e) {
    (this.enableZoom && this._handleTouchMoveDolly(e),
      this.enableRotate && this._handleTouchMoveRotate(e));
  }
  _addPointer(e) {
    this._pointers.push(e.pointerId);
  }
  _removePointer(e) {
    delete this._pointerPositions[e.pointerId];
    for (let t = 0; t < this._pointers.length; t++)
      if (this._pointers[t] == e.pointerId) {
        this._pointers.splice(t, 1);
        return;
      }
  }
  _isTrackingPointer(e) {
    for (let t = 0; t < this._pointers.length; t++)
      if (this._pointers[t] == e.pointerId) return !0;
    return !1;
  }
  _trackPointer(e) {
    let t = this._pointerPositions[e.pointerId];
    (t === void 0 &&
      ((t = new Ie()), (this._pointerPositions[e.pointerId] = t)),
      t.set(e.pageX, e.pageY));
  }
  _getSecondPointerPosition(e) {
    const t =
      e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[t];
  }
  _customWheelEvent(e) {
    const t = e.deltaMode,
      n = { clientX: e.clientX, clientY: e.clientY, deltaY: e.deltaY };
    switch (t) {
      case 1:
        n.deltaY *= 16;
        break;
      case 2:
        n.deltaY *= 100;
        break;
    }
    return (e.ctrlKey && !this._controlActive && (n.deltaY *= 10), n);
  }
}
function Vp(i) {
  this.enabled !== !1 &&
    (this._pointers.length === 0 &&
      (this.domElement.setPointerCapture(i.pointerId),
      this.domElement.addEventListener("pointermove", this._onPointerMove),
      this.domElement.addEventListener("pointerup", this._onPointerUp)),
    !this._isTrackingPointer(i) &&
      (this._addPointer(i),
      i.pointerType === "touch"
        ? this._onTouchStart(i)
        : this._onMouseDown(i)));
}
function Gp(i) {
  this.enabled !== !1 &&
    (i.pointerType === "touch" ? this._onTouchMove(i) : this._onMouseMove(i));
}
function Hp(i) {
  switch ((this._removePointer(i), this._pointers.length)) {
    case 0:
      (this.domElement.releasePointerCapture(i.pointerId),
        this.domElement.removeEventListener("pointermove", this._onPointerMove),
        this.domElement.removeEventListener("pointerup", this._onPointerUp),
        this.dispatchEvent(ll),
        (this.state = je.NONE));
      break;
    case 1:
      const e = this._pointers[0],
        t = this._pointerPositions[e];
      this._onTouchStart({ pointerId: e, pageX: t.x, pageY: t.y });
      break;
  }
}
function Wp(i) {
  let e;
  switch (i.button) {
    case 0:
      e = this.mouseButtons.LEFT;
      break;
    case 1:
      e = this.mouseButtons.MIDDLE;
      break;
    case 2:
      e = this.mouseButtons.RIGHT;
      break;
    default:
      e = -1;
  }
  switch (e) {
    case pi.DOLLY:
      if (this.enableZoom === !1) return;
      (this._handleMouseDownDolly(i), (this.state = je.DOLLY));
      break;
    case pi.ROTATE:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enablePan === !1) return;
        (this._handleMouseDownPan(i), (this.state = je.PAN));
      } else {
        if (this.enableRotate === !1) return;
        (this._handleMouseDownRotate(i), (this.state = je.ROTATE));
      }
      break;
    case pi.PAN:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enableRotate === !1) return;
        (this._handleMouseDownRotate(i), (this.state = je.ROTATE));
      } else {
        if (this.enablePan === !1) return;
        (this._handleMouseDownPan(i), (this.state = je.PAN));
      }
      break;
    default:
      this.state = je.NONE;
  }
  this.state !== je.NONE && this.dispatchEvent(_a);
}
function Xp(i) {
  switch (this.state) {
    case je.ROTATE:
      if (this.enableRotate === !1) return;
      this._handleMouseMoveRotate(i);
      break;
    case je.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseMoveDolly(i);
      break;
    case je.PAN:
      if (this.enablePan === !1) return;
      this._handleMouseMovePan(i);
      break;
  }
}
function Yp(i) {
  this.enabled === !1 ||
    this.enableZoom === !1 ||
    this.state !== je.NONE ||
    (i.preventDefault(),
    this.dispatchEvent(_a),
    this._handleMouseWheel(this._customWheelEvent(i)),
    this.dispatchEvent(ll));
}
function Zp(i) {
  this.enabled !== !1 && this._handleKeyDown(i);
}
function qp(i) {
  switch ((this._trackPointer(i), this._pointers.length)) {
    case 1:
      switch (this.touches.ONE) {
        case di.ROTATE:
          if (this.enableRotate === !1) return;
          (this._handleTouchStartRotate(i), (this.state = je.TOUCH_ROTATE));
          break;
        case di.PAN:
          if (this.enablePan === !1) return;
          (this._handleTouchStartPan(i), (this.state = je.TOUCH_PAN));
          break;
        default:
          this.state = je.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case di.DOLLY_PAN:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          (this._handleTouchStartDollyPan(i),
            (this.state = je.TOUCH_DOLLY_PAN));
          break;
        case di.DOLLY_ROTATE:
          if (this.enableZoom === !1 && this.enableRotate === !1) return;
          (this._handleTouchStartDollyRotate(i),
            (this.state = je.TOUCH_DOLLY_ROTATE));
          break;
        default:
          this.state = je.NONE;
      }
      break;
    default:
      this.state = je.NONE;
  }
  this.state !== je.NONE && this.dispatchEvent(_a);
}
function Kp(i) {
  switch ((this._trackPointer(i), this.state)) {
    case je.TOUCH_ROTATE:
      if (this.enableRotate === !1) return;
      (this._handleTouchMoveRotate(i), this.update());
      break;
    case je.TOUCH_PAN:
      if (this.enablePan === !1) return;
      (this._handleTouchMovePan(i), this.update());
      break;
    case je.TOUCH_DOLLY_PAN:
      if (this.enableZoom === !1 && this.enablePan === !1) return;
      (this._handleTouchMoveDollyPan(i), this.update());
      break;
    case je.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === !1 && this.enableRotate === !1) return;
      (this._handleTouchMoveDollyRotate(i), this.update());
      break;
    default:
      this.state = je.NONE;
  }
}
function jp(i) {
  this.enabled !== !1 && i.preventDefault();
}
function $p(i) {
  i.key === "Control" &&
    ((this._controlActive = !0),
    this.domElement
      .getRootNode()
      .addEventListener("keyup", this._interceptControlUp, {
        passive: !0,
        capture: !0,
      }));
}
function Jp(i) {
  i.key === "Control" &&
    ((this._controlActive = !1),
    this.domElement
      .getRootNode()
      .removeEventListener("keyup", this._interceptControlUp, {
        passive: !0,
        capture: !0,
      }));
}
const Qp = "modulepreload",
  em = function (i) {
    return "/CMPM121-F/" + i;
  },
  Co = {},
  tm = function (e, t, n) {
    let s = Promise.resolve();
    if (t && t.length > 0) {
      let c = function (l) {
        return Promise.all(
          l.map((u) =>
            Promise.resolve(u).then(
              (d) => ({ status: "fulfilled", value: d }),
              (d) => ({ status: "rejected", reason: d }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const a = document.querySelector("meta[property=csp-nonce]"),
        o = a?.nonce || a?.getAttribute("nonce");
      s = c(
        t.map((l) => {
          if (((l = em(l)), l in Co)) return;
          Co[l] = !0;
          const u = l.endsWith(".css"),
            d = u ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${l}"]${d}`)) return;
          const f = document.createElement("link");
          if (
            ((f.rel = u ? "stylesheet" : Qp),
            u || (f.as = "script"),
            (f.crossOrigin = ""),
            (f.href = l),
            o && f.setAttribute("nonce", o),
            document.head.appendChild(f),
            u)
          )
            return new Promise((m, g) => {
              (f.addEventListener("load", m),
                f.addEventListener("error", () =>
                  g(new Error(`Unable to preload CSS for ${l}`)),
                ));
            });
        }),
      );
    }
    function r(a) {
      const o = new Event("vite:preloadError", { cancelable: !0 });
      if (((o.payload = a), window.dispatchEvent(o), !o.defaultPrevented))
        throw a;
    }
    return s.then((a) => {
      for (const o of a || []) o.status === "rejected" && r(o.reason);
      return e().catch(r);
    });
  };
async function ga() {
  const i = await tm(() => import("./ammo-B9oaJM7s.js").then((t) => t.a), []),
    e = i.default ?? i;
  if (typeof e == "function") {
    const t = e();
    return t && typeof t.then == "function" ? await t : t;
  }
  return e;
}
function va(i) {
  const e = new i.btDefaultCollisionConfiguration(),
    t = new i.btCollisionDispatcher(e),
    n = new i.btDbvtBroadphase(),
    s = new i.btSequentialImpulseConstraintSolver(),
    r = new i.btDiscreteDynamicsWorld(t, n, s, e);
  return (
    r.setGravity(new i.btVector3(0, -9.8, 0)),
    {
      physicsWorld: r,
      collisionConfiguration: e,
      dispatcher: t,
      broadphase: n,
      solver: s,
    }
  );
}
function bi(i, e, t, n) {
  const s = new i.btBoxShape(e),
    r = new i.btTransform();
  (r.setIdentity(), r.setOrigin(t));
  const a = new i.btVector3(0, 0, 0);
  n > 0 && s.calculateLocalInertia(n, a);
  const o = new i.btDefaultMotionState(r),
    c = new i.btRigidBodyConstructionInfo(n, o, s, a);
  return {
    body: new i.btRigidBody(c),
    shape: s,
    motionState: o,
    rbInfo: c,
    transform: r,
  };
}
const $t = { inventory: {} };
class St {
  static getGameStateInventory() {
    return $t.inventory;
  }
  static setGameStateInventory(e) {
    $t.inventory = e;
  }
  static addItem(e, t = 1) {
    ($t.inventory[e] || ($t.inventory[e] = { quantity: 0 }),
      ($t.inventory[e].quantity += t));
  }
  static removeItem(e, t = 1) {
    $t.inventory[e] &&
      (($t.inventory[e].quantity -= t),
      $t.inventory[e].quantity <= 0 && delete $t.inventory[e]);
  }
  static hasItem(e, t = 1) {
    return $t.inventory[e]?.quantity >= t;
  }
}
const Ro = {
  ground_Material: {
    light: new it({ color: 15658734 }),
    dark: new it({ color: 3552822 }),
  },
  barrier_Material: {
    light: new it({ color: 14540253 }),
    dark: new it({ color: 1776411 }),
  },
  appTheme: {
    light: {
      startBgSrc: "titleLight.png",
      endGifSrc: "endLight.gif",
      endBackground: "#ffffff",
      clearColor: 16777215,
      endTextColor: "#111827",
    },
    dark: {
      startBgSrc: "titleDark.png",
      endGifSrc: "endDark.gif",
      endBackground: "#000000",
      clearColor: 0,
      endTextColor: "#e5e7eb",
    },
  },
};
class gn {
  static currentMode = "light";
  static listeners = new Set();
  static get() {
    return this;
  }
  static init() {
    const e = window.matchMedia("(prefers-color-scheme: dark)");
    (this.setTheme(e.matches ? "dark" : "light"),
      e.addEventListener("change", (t) => {
        this.setTheme(t.matches ? "dark" : "light");
      }));
  }
  static setTheme(e) {
    ((this.currentMode = e),
      this.listeners.forEach((t) => t(this.currentMode)));
  }
  static getMode() {
    return this.currentMode;
  }
  static subscribe(e) {
    return (this.listeners.add(e), () => this.listeners.delete(e));
  }
  static getAsset(e) {
    const t = Ro[e][this.currentMode],
      n = Object.create(t);
    return (
      this.subscribe((s) => {
        const r = Ro[e][s];
        Object.setPrototypeOf(n, r);
      }),
      n
    );
  }
}
class Ke {
  static language = "en";
  static record = {};
  static listeners = new Set();
  static async initalizeRecord() {
    const t = await fetch("/CMPM121-F/localization.json");
    this.record = await t.json();
  }
  static setLanguage(e) {
    ((this.language = e), this.listeners.forEach((t) => t(this.language)));
  }
  static getLanguage() {
    return this.language;
  }
  static getText(e) {
    const t = this.record[e];
    return t ? (t[this.language] ?? e) : e;
  }
  static getLocalizedString(e) {
    return () => this.getText(e);
  }
  static subscribe(e) {
    return (this.listeners.add(e), () => this.listeners.delete(e));
  }
}
class cl {
  physicsWorld;
  AmmoLib;
  playerMesh;
  playerBody;
  goalMesh;
  bodies = [];
  falseChests = [];
  trueChest;
  input = { forward: !1, backward: !1, left: !1, right: !1 };
  win = !1;
  key = null;
  scene;
  uiText;
  barrierMeshes = [];
  barrierBodies = [];
  barrierOpen = !1;
  coinCount = 5.5;
  coinBodies = [];
  onSceneLeave;
  onSaveGame;
  onGameComplete;
  async init(e) {
    this.AmmoLib = await ga();
    const { physicsWorld: t } = va(this.AmmoLib);
    ((this.physicsWorld = t),
      (this.scene = e),
      (this.uiText = document.getElementById("ui-text")),
      (this.uiText.style.top = ""),
      (this.uiText.style.bottom = "20px"),
      (this.uiText.textContent = Ke.getText("controls")),
      this.makeGround(),
      this.makeWalls(),
      this.makePlayer(),
      this.makeGoal(),
      this.makeFalseChests(),
      this.makeTrueChest(),
      this.makeKey(),
      this.makeCoins(),
      this.makeGoalBarrier());
  }
  makeBox(e) {
    const t = new this.AmmoLib.btVector3(e.sizeX / 2, e.sizeY / 2, e.sizeZ / 2),
      n = new this.AmmoLib.btVector3(e.posX, e.posY, e.posZ),
      s = new Kt(e.sizeX, e.sizeY, e.sizeZ),
      r = bi(this.AmmoLib, t, n, 0);
    e.collide && this.physicsWorld.addRigidBody(r.body);
    const a = new Dt(s, e.color);
    return (
      a.position.set(e.posX, e.posY, e.posZ),
      this.scene.add(a),
      this.bodies.push({ mesh: a, body: r.body }),
      a
    );
  }
  makeGround() {
    const e = {
      posX: 0,
      posY: 0,
      posZ: 0,
      sizeX: 20,
      sizeY: 1,
      sizeZ: 20,
      color: gn.getAsset("ground_Material"),
      collide: !0,
    };
    this.makeBox(e);
  }
  makeWalls() {
    const e = gn.getAsset("barrier_Material");
    [
      {
        posX: 0,
        posY: 1,
        posZ: 10,
        sizeX: 20,
        sizeY: 1,
        sizeZ: 1,
        color: e,
        collide: !0,
      },
      {
        posX: 0,
        posY: 1,
        posZ: -10,
        sizeX: 20,
        sizeY: 1,
        sizeZ: 1,
        color: e,
        collide: !0,
      },
      {
        posX: 10,
        posY: 1,
        posZ: 0,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 21,
        color: e,
        collide: !0,
      },
      {
        posX: -10,
        posY: 1,
        posZ: 0,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 21,
        color: e,
        collide: !0,
      },
    ].forEach((n) => {
      this.makeBox(n);
    });
  }
  makePlayer() {
    const t = new Kt(0.5, 0.5, 0.5),
      n = new it({ color: 33023 }),
      s = new Dt(t, n);
    (s.position.set(0, 5, 0), this.scene.add(s));
    const r = new this.AmmoLib.btVector3(0.5 / 2, 0.5 / 2, 0.5 / 2),
      a = new this.AmmoLib.btVector3(0, 0, 0),
      o = bi(this.AmmoLib, r, a, 1);
    (this.physicsWorld.addRigidBody(o.body),
      (this.playerMesh = s),
      (this.playerBody = o.body),
      this.bodies.push({ mesh: s, body: o.body }));
  }
  makeGoal() {
    const e = {
      posX: -9,
      posY: 0.1,
      posZ: -9,
      sizeX: 1,
      sizeY: 1,
      sizeZ: 1,
      color: new it({ color: 65280 }),
      collide: !0,
    };
    this.goalMesh = this.makeBox(e);
  }
  makeGoalBarrier() {
    if (!this.goalMesh) return;
    const e = new it({ color: 16711680 }),
      t = this.makeBox({
        posX: this.goalMesh.position.x + 1,
        posY: 1,
        posZ: this.goalMesh.position.z,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 1,
        color: e,
        collide: !0,
      }),
      n = this.makeBox({
        posX: this.goalMesh.position.x,
        posY: 1,
        posZ: this.goalMesh.position.z + 1,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 1,
        color: e,
        collide: !0,
      });
    (this.barrierMeshes.push(t, n),
      this.barrierBodies.push(
        this.bodies[this.bodies.length - 1].body,
        this.bodies[this.bodies.length - 2].body,
      ));
  }
  handleBarrierEvent() {
    if (this.barrierOpen) return;
    const e = this.playerMesh;
    if (!this.barrierMeshes.some((s) => this.isNear(e, s, 1.5))) return;
    (St.getGameStateInventory().Coin?.quantity ?? 0) >= this.coinCount
      ? this.openBarrier()
      : (this.uiText.textContent = Ke.getText("need_more_coins"));
  }
  openBarrier() {
    ((this.barrierOpen = !0),
      (this.uiText.textContent = Ke.getText("bank_opened")));
    for (let e = 0; e < this.barrierMeshes.length; e++)
      (this.scene.remove(this.barrierMeshes[e]),
        this.physicsWorld.removeRigidBody(this.barrierBodies[e]));
    ((this.barrierMeshes = []),
      (this.barrierBodies = []),
      St.removeItem("Coin", this.coinCount),
      this.onSaveGame?.());
  }
  makeFalseChests() {
    const e = new it({ color: 8347712 });
    [
      {
        posX: -6,
        posY: 1,
        posZ: -8,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 1,
        color: e,
        collide: !0,
      },
      {
        posX: 3,
        posY: 1,
        posZ: -4,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 1,
        color: e,
        collide: !0,
      },
      {
        posX: 7,
        posY: 1,
        posZ: 1,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 1,
        color: e,
        collide: !0,
      },
      {
        posX: 4,
        posY: 1,
        posZ: 7,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 1,
        color: e,
        collide: !0,
      },
      {
        posX: 6,
        posY: 1,
        posZ: 3,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 1,
        color: e,
        collide: !0,
      },
      {
        posX: 8,
        posY: 1,
        posZ: 2,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 1,
        color: e,
        collide: !0,
      },
      {
        posX: 5,
        posY: 1,
        posZ: 1,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 1,
        color: e,
        collide: !0,
      },
      {
        posX: -3,
        posY: 1,
        posZ: 6,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 1,
        color: e,
        collide: !0,
      },
      {
        posX: 1,
        posY: 1,
        posZ: 3,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 1,
        color: e,
        collide: !0,
      },
      {
        posX: -5,
        posY: 1,
        posZ: 2,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 1,
        color: e,
        collide: !0,
      },
      {
        posX: 2,
        posY: 1,
        posZ: 8,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 1,
        color: e,
        collide: !0,
      },
    ].forEach((n) => {
      this.falseChests.push(this.makeBox(n));
    });
  }
  handleFalseChestEvent() {
    this.falseChests.forEach((e) => {
      if (!this.win && this.isNear(this.playerMesh, e, 1)) {
        const t = document.getElementById("ui-text");
        t.textContent = Ke.getText("incorrect_chest");
      }
    });
  }
  makeTrueChest() {
    const e = {
      posX: -3,
      posY: 1,
      posZ: 3,
      sizeX: 1,
      sizeY: 1,
      sizeZ: 1,
      color: new it({ color: 8347712 }),
      collide: !0,
    };
    this.trueChest = this.makeBox(e);
  }
  handleTrueChestEvent() {
    !this.win &&
      this.key != null &&
      this.isNear(this.playerMesh, this.trueChest, 1) &&
      ((this.uiText.textContent = Ke.getText("key_acquired")),
      this.scene.add(this.key));
  }
  makeKey() {
    const e = {
      posX: -3,
      posY: 1,
      posZ: 4,
      sizeX: 0.3,
      sizeY: 0.5,
      sizeZ: 0.3,
      color: new it({ color: 16777044 }),
      collide: !1,
    };
    ((this.key = this.makeBox(e)),
      this.scene.remove(this.key),
      (this.key.userData.type = "Key3"));
  }
  makeCoins() {
    const e = new it({ color: 16753920 });
    [
      {
        posX: 7,
        posY: 1,
        posZ: 5,
        sizeX: 0.2,
        sizeY: 0.2,
        sizeZ: 0.2,
        color: e,
        collide: !0,
      },
      {
        posX: 6,
        posY: 1,
        posZ: 4,
        sizeX: 0.2,
        sizeY: 0.2,
        sizeZ: 0.2,
        color: e,
        collide: !0,
      },
      {
        posX: 9,
        posY: 1,
        posZ: 9,
        sizeX: 0.2,
        sizeY: 0.2,
        sizeZ: 0.2,
        color: e,
        collide: !0,
      },
      {
        posX: 6,
        posY: 1,
        posZ: 2,
        sizeX: 0.2,
        sizeY: 0.2,
        sizeZ: 0.2,
        color: e,
        collide: !0,
      },
      {
        posX: 6,
        posY: 1,
        posZ: -8,
        sizeX: 0.2,
        sizeY: 0.2,
        sizeZ: 0.2,
        color: e,
        collide: !0,
      },
      {
        posX: 6,
        posY: 1,
        posZ: -2,
        sizeX: 0.2,
        sizeY: 0.2,
        sizeZ: 0.2,
        color: e,
        collide: !0,
      },
      {
        posX: -5,
        posY: 1,
        posZ: 8,
        sizeX: 0.2,
        sizeY: 0.2,
        sizeZ: 0.2,
        color: e,
        collide: !0,
      },
      {
        posX: -2,
        posY: 1,
        posZ: 2,
        sizeX: 0.2,
        sizeY: 0.2,
        sizeZ: 0.2,
        color: e,
        collide: !0,
      },
      {
        posX: -3,
        posY: 1,
        posZ: -4,
        sizeX: 0.2,
        sizeY: 0.2,
        sizeZ: 0.2,
        color: e,
        collide: !0,
      },
      {
        posX: 4,
        posY: 1,
        posZ: -6,
        sizeX: 0.2,
        sizeY: 0.2,
        sizeZ: 0.2,
        color: e,
        collide: !0,
      },
      {
        posX: -7,
        posY: 1,
        posZ: 3,
        sizeX: 0.2,
        sizeY: 0.2,
        sizeZ: 0.2,
        color: e,
        collide: !0,
      },
      {
        posX: 1,
        posY: 1,
        posZ: 7,
        sizeX: 0.2,
        sizeY: 0.2,
        sizeZ: 0.2,
        color: e,
        collide: !0,
      },
      {
        posX: -8,
        posY: 1,
        posZ: -1,
        sizeX: 0.2,
        sizeY: 0.2,
        sizeZ: 0.2,
        color: e,
        collide: !0,
      },
    ].forEach((n) => {
      const s = this.makeBox(n);
      ((s.userData.type = "Coin"), this.coinBodies.push(s));
    });
  }
  handleCoinEvent() {
    this.coinBodies.forEach((e) => {
      if (this.isNear(this.playerMesh, e, 1)) {
        const t = 0.1 * Math.floor(Math.random() * 10);
        (St.addItem("Coin", t),
          this.scene.remove(e),
          (this.coinBodies = this.coinBodies.filter((n) => n !== e)),
          this.onSaveGame?.());
      }
    });
  }
  keyPickedUp = !1;
  pickupKey(e) {
    this.keyPickedUp ||
      (this.scene.remove(e),
      (this.key = null),
      (this.keyPickedUp = !0),
      St.addItem("Key3", 1),
      this.onSaveGame?.());
  }
  handleGoalKeyEvents() {
    (!this.keyPickedUp &&
      this.isNear(this.playerMesh, this.goalMesh, 0.5) &&
      (this.uiText.textContent = Ke.getText("need_key")),
      this.key &&
        this.isNear(this.playerMesh, this.key, 0.5) &&
        this.pickupKey(this.key),
      this.keyPickedUp &&
        this.isNear(this.playerMesh, this.goalMesh, 1) &&
        this.handleSceneLeave());
  }
  handleMovement = (e) => {
    switch (e.code) {
      case "KeyW":
        this.input.forward = !0;
        break;
      case "KeyS":
        this.input.backward = !0;
        break;
      case "KeyA":
        this.input.left = !0;
        break;
      case "KeyD":
        this.input.right = !0;
        break;
    }
  };
  handleMovementUp = (e) => {
    switch (e.code) {
      case "KeyW":
        this.input.forward = !1;
        break;
      case "KeyS":
        this.input.backward = !1;
        break;
      case "KeyA":
        this.input.left = !1;
        break;
      case "KeyD":
        this.input.right = !1;
        break;
    }
  };
  handleSceneLeave = () => {
    this.onGameComplete?.();
  };
  onEnter() {
    (window.addEventListener("keydown", this.handleMovement),
      window.addEventListener("keyup", this.handleMovementUp));
  }
  onExit() {
    (window.removeEventListener("keydown", this.handleMovement),
      window.removeEventListener("keyup", this.handleMovementUp));
  }
  update(e) {
    (this.applyMovement(),
      this.physicsWorld.stepSimulation(e, 10),
      this.updateMotion(),
      this.handleFalseChestEvent(),
      this.handleTrueChestEvent(),
      this.handleGoalKeyEvents(),
      this.handleCoinEvent(),
      this.handleBarrierEvent());
  }
  updateMotion() {
    const e = new this.AmmoLib.btTransform();
    for (const t of this.bodies) {
      const n = t.body.getMotionState();
      if (!n) continue;
      n.getWorldTransform(e);
      const s = e.getOrigin(),
        r = e.getRotation();
      (t.mesh.position.set(s.x(), s.y(), s.z()),
        t.mesh.quaternion.set(r.x(), r.y(), r.z(), r.w()));
    }
  }
  applyMovement() {
    const e = this.playerBody;
    if (!e) return;
    const t = new this.AmmoLib.btVector3(0, 0, 0),
      n = 0.5;
    (this.input.forward && t.op_add(new this.AmmoLib.btVector3(0, 0, -n)),
      this.input.backward && t.op_add(new this.AmmoLib.btVector3(0, 0, n)),
      this.input.left && t.op_add(new this.AmmoLib.btVector3(-n, 0, 0)),
      this.input.right && t.op_add(new this.AmmoLib.btVector3(n, 0, 0)),
      e.isActive() || e.setActivationState(1),
      e.applyCentralImpulse(t));
  }
  isNear(e, t, n) {
    return e.position.distanceTo(t.position) < n;
  }
  onCollect(e) {
    if (
      (e.userData.type == "Key3" && this.pickupKey(e),
      e.userData.type == "Coin")
    ) {
      const t = 0.1 * Math.floor(Math.random() * 10);
      (St.addItem("Coin", t), this.scene.remove(e), this.onSaveGame?.());
    }
  }
}
class hl {
  physicsWorld;
  AmmoLib;
  playerMesh;
  playerBody;
  goalMesh;
  bodies = [];
  falseChests = [];
  trueChest;
  input = { forward: !1, backward: !1, left: !1, right: !1 };
  win = !1;
  key = null;
  scene;
  uiText;
  barrierMeshes = [];
  barrierBodies = [];
  barrierOpen = !1;
  coinCount = 5.5;
  coinBodies = [];
  onSceneLeave;
  onSaveGame;
  onGameComplete;
  async init(e) {
    this.AmmoLib = await ga();
    const { physicsWorld: t } = va(this.AmmoLib);
    ((this.physicsWorld = t),
      (this.scene = e),
      (this.uiText = document.getElementById("ui-text")),
      (this.uiText.style.top = ""),
      (this.uiText.style.bottom = "20px"),
      (this.uiText.textContent = Ke.getText("controls")),
      this.makeGround(),
      this.makeWalls(),
      this.makePlayer(),
      this.makeGoal(),
      this.makeFalseChests(),
      this.makeTrueChest(),
      this.makeKey(),
      this.makeCoins());
  }
  makeBox(e) {
    const t = new this.AmmoLib.btVector3(e.sizeX / 2, e.sizeY / 2, e.sizeZ / 2),
      n = new this.AmmoLib.btVector3(e.posX, e.posY, e.posZ),
      s = new Kt(e.sizeX, e.sizeY, e.sizeZ),
      r = bi(this.AmmoLib, t, n, 0);
    e.collide && this.physicsWorld.addRigidBody(r.body);
    const a = new Dt(s, e.color);
    return (
      a.position.set(e.posX, e.posY, e.posZ),
      this.scene.add(a),
      this.bodies.push({ mesh: a, body: r.body }),
      a
    );
  }
  makeGround() {
    const e = {
      posX: 0,
      posY: 0,
      posZ: 0,
      sizeX: 20,
      sizeY: 1,
      sizeZ: 20,
      color: gn.getAsset("ground_Material"),
      collide: !0,
    };
    this.makeBox(e);
  }
  makeWalls() {
    const e = gn.getAsset("barrier_Material");
    [
      {
        posX: 0,
        posY: 1,
        posZ: 10,
        sizeX: 20,
        sizeY: 1,
        sizeZ: 1,
        color: e,
        collide: !0,
      },
      {
        posX: 0,
        posY: 1,
        posZ: -10,
        sizeX: 20,
        sizeY: 1,
        sizeZ: 1,
        color: e,
        collide: !0,
      },
      {
        posX: 10,
        posY: 1,
        posZ: 0,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 21,
        color: e,
        collide: !0,
      },
      {
        posX: -10,
        posY: 1,
        posZ: 0,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 21,
        color: e,
        collide: !0,
      },
    ].forEach((n) => {
      this.makeBox(n);
    });
  }
  makePlayer() {
    const t = new Kt(0.5, 0.5, 0.5),
      n = new it({ color: 33023 }),
      s = new Dt(t, n);
    (s.position.set(0, 5, 0), this.scene.add(s));
    const r = new this.AmmoLib.btVector3(0.5 / 2, 0.5 / 2, 0.5 / 2),
      a = new this.AmmoLib.btVector3(0, 0, 0),
      o = bi(this.AmmoLib, r, a, 1);
    (this.physicsWorld.addRigidBody(o.body),
      (this.playerMesh = s),
      (this.playerBody = o.body),
      this.bodies.push({ mesh: s, body: o.body }));
  }
  makeGoal() {
    const e = {
      posX: -3,
      posY: 0.1,
      posZ: -3,
      sizeX: 1,
      sizeY: 1,
      sizeZ: 1,
      color: new it({ color: 65280 }),
      collide: !0,
    };
    this.goalMesh = this.makeBox(e);
  }
  makeFalseChests() {
    const e = new it({ color: 8347712 });
    [
      {
        posX: 0,
        posY: -1,
        posZ: -5,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 1,
        color: e,
        collide: !0,
      },
      {
        posX: 2,
        posY: 1,
        posZ: -5,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 1,
        color: e,
        collide: !0,
      },
      {
        posX: 8,
        posY: 1,
        posZ: 0,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 1,
        color: e,
        collide: !0,
      },
      {
        posX: 5,
        posY: 1,
        posZ: 8,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 1,
        color: e,
        collide: !0,
      },
      {
        posX: 7,
        posY: 1,
        posZ: 4,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 1,
        color: e,
        collide: !0,
      },
      {
        posX: 9,
        posY: 1,
        posZ: 1,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 1,
        color: e,
        collide: !0,
      },
    ].forEach((n) => {
      this.falseChests.push(this.makeBox(n));
    });
  }
  handleFalseChestEvent() {
    this.falseChests.forEach((e) => {
      if (!this.win && this.isNear(this.playerMesh, e, 1)) {
        const t = document.getElementById("ui-text");
        t.textContent = Ke.getText("incorrect_chest");
      }
    });
  }
  makeTrueChest() {
    const e = {
      posX: -8,
      posY: 1,
      posZ: 9,
      sizeX: 1,
      sizeY: 1,
      sizeZ: 1,
      color: new it({ color: 8347712 }),
      collide: !0,
    };
    this.trueChest = this.makeBox(e);
  }
  handleTrueChestEvent() {
    !this.win &&
      this.key != null &&
      this.isNear(this.playerMesh, this.trueChest, 1) &&
      ((this.uiText.textContent = Ke.getText("key_acquired")),
      this.scene.add(this.key));
  }
  makeKey() {
    const e = {
      posX: -8,
      posY: 1,
      posZ: 8,
      sizeX: 0.3,
      sizeY: 0.5,
      sizeZ: 0.3,
      color: new it({ color: 16777044 }),
      collide: !1,
    };
    ((this.key = this.makeBox(e)),
      this.scene.remove(this.key),
      (this.key.userData.type = "Key2"));
  }
  makeCoins() {
    const e = new it({ color: 16753920 });
    [
      {
        posX: 7,
        posY: 1,
        posZ: 5,
        sizeX: 0.2,
        sizeY: 0.2,
        sizeZ: 0.2,
        color: e,
        collide: !0,
      },
      {
        posX: 6,
        posY: 1,
        posZ: 4,
        sizeX: 0.2,
        sizeY: 0.2,
        sizeZ: 0.2,
        color: e,
        collide: !0,
      },
      {
        posX: 9,
        posY: 1,
        posZ: 9,
        sizeX: 0.2,
        sizeY: 0.2,
        sizeZ: 0.2,
        color: e,
        collide: !0,
      },
      {
        posX: 6,
        posY: 1,
        posZ: 2,
        sizeX: 0.2,
        sizeY: 0.2,
        sizeZ: 0.2,
        color: e,
        collide: !0,
      },
      {
        posX: 6,
        posY: 1,
        posZ: -8,
        sizeX: 0.2,
        sizeY: 0.2,
        sizeZ: 0.2,
        color: e,
        collide: !0,
      },
      {
        posX: 6,
        posY: 1,
        posZ: -2,
        sizeX: 0.2,
        sizeY: 0.2,
        sizeZ: 0.2,
        color: e,
        collide: !0,
      },
      {
        posX: -5,
        posY: 1,
        posZ: 8,
        sizeX: 0.2,
        sizeY: 0.2,
        sizeZ: 0.2,
        color: e,
        collide: !0,
      },
    ].forEach((n) => {
      const s = this.makeBox(n);
      ((s.userData.type = "Coin"), this.coinBodies.push(s));
    });
  }
  handleCoinEvent() {
    this.coinBodies.forEach((e) => {
      if (this.isNear(this.playerMesh, e, 1)) {
        const t = 0.1 * Math.floor(Math.random() * 10);
        (St.addItem("Coin", t),
          this.scene.remove(e),
          (this.coinBodies = this.coinBodies.filter((n) => n !== e)),
          this.onSaveGame?.());
      }
    });
  }
  keyPickedUp = !1;
  pickupKey(e) {
    this.keyPickedUp ||
      (this.scene.remove(e),
      (this.key = null),
      (this.keyPickedUp = !0),
      St.addItem("Key2", 1),
      this.onSaveGame?.());
  }
  handleGoalKeyEvents() {
    (!this.keyPickedUp &&
      this.isNear(this.playerMesh, this.goalMesh, 0.5) &&
      (this.uiText.textContent = Ke.getText("need_key")),
      this.key &&
        this.isNear(this.playerMesh, this.key, 0.5) &&
        this.pickupKey(this.key),
      this.keyPickedUp &&
        this.isNear(this.playerMesh, this.goalMesh, 1) &&
        this.handleSceneLeave());
  }
  handleMovement = (e) => {
    switch (e.code) {
      case "KeyW":
        this.input.forward = !0;
        break;
      case "KeyS":
        this.input.backward = !0;
        break;
      case "KeyA":
        this.input.left = !0;
        break;
      case "KeyD":
        this.input.right = !0;
        break;
    }
  };
  handleMovementUp = (e) => {
    switch (e.code) {
      case "KeyW":
        this.input.forward = !1;
        break;
      case "KeyS":
        this.input.backward = !1;
        break;
      case "KeyA":
        this.input.left = !1;
        break;
      case "KeyD":
        this.input.right = !1;
        break;
    }
  };
  handleSceneLeave = () => {
    this.onSceneLeave?.(new cl());
  };
  onEnter() {
    (window.addEventListener("keydown", this.handleMovement),
      window.addEventListener("keyup", this.handleMovementUp));
  }
  onExit() {
    (window.removeEventListener("keydown", this.handleMovement),
      window.removeEventListener("keyup", this.handleMovementUp));
  }
  update(e) {
    (this.applyMovement(),
      this.physicsWorld.stepSimulation(e, 10),
      this.updateMotion(),
      this.handleFalseChestEvent(),
      this.handleTrueChestEvent(),
      this.handleGoalKeyEvents(),
      this.handleCoinEvent());
  }
  updateMotion() {
    const e = new this.AmmoLib.btTransform();
    for (const t of this.bodies) {
      const n = t.body.getMotionState();
      if (!n) continue;
      n.getWorldTransform(e);
      const s = e.getOrigin(),
        r = e.getRotation();
      (t.mesh.position.set(s.x(), s.y(), s.z()),
        t.mesh.quaternion.set(r.x(), r.y(), r.z(), r.w()));
    }
  }
  applyMovement() {
    const e = this.playerBody;
    if (!e) return;
    const t = new this.AmmoLib.btVector3(0, 0, 0),
      n = 0.5;
    (this.input.forward && t.op_add(new this.AmmoLib.btVector3(0, 0, -n)),
      this.input.backward && t.op_add(new this.AmmoLib.btVector3(0, 0, n)),
      this.input.left && t.op_add(new this.AmmoLib.btVector3(-n, 0, 0)),
      this.input.right && t.op_add(new this.AmmoLib.btVector3(n, 0, 0)),
      e.isActive() || e.setActivationState(1),
      e.applyCentralImpulse(t));
  }
  isNear(e, t, n) {
    return e.position.distanceTo(t.position) < n;
  }
  onCollect(e) {
    if (
      (e.userData.type == "Key2" && this.pickupKey(e),
      e.userData.type == "Coin")
    ) {
      const t = 0.1 * Math.floor(Math.random() * 10);
      (St.addItem("Coin", t), this.scene.remove(e), this.onSaveGame?.());
    }
  }
}
class ul {
  physicsWorld;
  AmmoLib;
  playerMesh;
  playerBody;
  goalMesh;
  bodies = [];
  falseChests = [];
  trueChest;
  input = { forward: !1, backward: !1, left: !1, right: !1 };
  win = !1;
  key = null;
  scene;
  uiText;
  barrierMeshes = [];
  barrierBodies = [];
  barrierOpen = !1;
  coinCount = 5.5;
  coinBodies = [];
  onSceneLeave;
  onSaveGame;
  onGameComplete;
  async init(e) {
    this.AmmoLib = await ga();
    const { physicsWorld: t } = va(this.AmmoLib);
    ((this.physicsWorld = t),
      (this.scene = e),
      (this.uiText = document.getElementById("ui-text")),
      (this.uiText.style.top = ""),
      (this.uiText.style.bottom = "20px"),
      (this.uiText.textContent = Ke.getText("controls")),
      this.makeGround(),
      this.makeWalls(),
      this.makePlayer(),
      this.makeGoal(),
      this.makeFalseChests(),
      this.makeTrueChest(),
      this.makeKey(),
      this.makeCoins());
  }
  makeBox(e) {
    const t = new this.AmmoLib.btVector3(e.sizeX / 2, e.sizeY / 2, e.sizeZ / 2),
      n = new this.AmmoLib.btVector3(e.posX, e.posY, e.posZ),
      s = new Kt(e.sizeX, e.sizeY, e.sizeZ),
      r = bi(this.AmmoLib, t, n, 0);
    e.collide && this.physicsWorld.addRigidBody(r.body);
    const a = new Dt(s, e.color);
    return (
      a.position.set(e.posX, e.posY, e.posZ),
      this.scene.add(a),
      this.bodies.push({ mesh: a, body: r.body }),
      a
    );
  }
  makeGround() {
    const e = {
      posX: 0,
      posY: 0,
      posZ: 0,
      sizeX: 20,
      sizeY: 1,
      sizeZ: 20,
      color: gn.getAsset("ground_Material"),
      collide: !0,
    };
    this.makeBox(e);
  }
  makeWalls() {
    const e = gn.getAsset("barrier_Material");
    [
      {
        posX: 0,
        posY: 1,
        posZ: 10,
        sizeX: 20,
        sizeY: 1,
        sizeZ: 1,
        color: e,
        collide: !0,
      },
      {
        posX: 0,
        posY: 1,
        posZ: -10,
        sizeX: 20,
        sizeY: 1,
        sizeZ: 1,
        color: e,
        collide: !0,
      },
      {
        posX: 10,
        posY: 1,
        posZ: 0,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 21,
        color: e,
        collide: !0,
      },
      {
        posX: -10,
        posY: 1,
        posZ: 0,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 21,
        color: e,
        collide: !0,
      },
    ].forEach((n) => {
      this.makeBox(n);
    });
  }
  makePlayer() {
    const t = new Kt(0.5, 0.5, 0.5),
      n = new it({ color: 33023 }),
      s = new Dt(t, n);
    (s.position.set(0, 5, 0), this.scene.add(s));
    const r = new this.AmmoLib.btVector3(0.5 / 2, 0.5 / 2, 0.5 / 2),
      a = new this.AmmoLib.btVector3(0, 0, 0),
      o = bi(this.AmmoLib, r, a, 1);
    (this.physicsWorld.addRigidBody(o.body),
      (this.playerMesh = s),
      (this.playerBody = o.body),
      this.bodies.push({ mesh: s, body: o.body }));
  }
  makeGoal() {
    const e = {
      posX: -3,
      posY: 0.1,
      posZ: -3,
      sizeX: 1,
      sizeY: 1,
      sizeZ: 1,
      color: new it({ color: 65280 }),
      collide: !0,
    };
    this.goalMesh = this.makeBox(e);
  }
  makeFalseChests() {
    const e = new it({ color: 8347712 });
    [
      {
        posX: 0,
        posY: 1,
        posZ: 5,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 1,
        color: e,
        collide: !0,
      },
      {
        posX: 0,
        posY: 1,
        posZ: -5,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 1,
        color: e,
        collide: !0,
      },
      {
        posX: 5,
        posY: 1,
        posZ: 0,
        sizeX: 1,
        sizeY: 1,
        sizeZ: 1,
        color: e,
        collide: !0,
      },
    ].forEach((n) => {
      this.falseChests.push(this.makeBox(n));
    });
  }
  handleFalseChestEvent() {
    this.falseChests.forEach((e) => {
      if (!this.win && this.isNear(this.playerMesh, e, 1)) {
        const t = document.getElementById("ui-text");
        t.textContent = Ke.getText("incorrect_chest");
      }
    });
  }
  makeTrueChest() {
    const e = {
      posX: -5,
      posY: 1,
      posZ: 0,
      sizeX: 1,
      sizeY: 1,
      sizeZ: 1,
      color: new it({ color: 8347712 }),
      collide: !0,
    };
    this.trueChest = this.makeBox(e);
  }
  handleTrueChestEvent() {
    !this.win &&
      this.key != null &&
      this.isNear(this.playerMesh, this.trueChest, 1) &&
      ((this.uiText.textContent = Ke.getText("key_acquired")),
      this.scene.add(this.key));
  }
  makeKey() {
    const e = {
      posX: -6,
      posY: 1,
      posZ: 0,
      sizeX: 0.3,
      sizeY: 0.5,
      sizeZ: 0.3,
      color: new it({ color: 16777044 }),
      collide: !1,
    };
    ((this.key = this.makeBox(e)),
      this.scene.remove(this.key),
      (this.key.userData.type = "Key1"));
  }
  makeCoins() {
    const e = new it({ color: 16753920 });
    [
      {
        posX: 0,
        posY: 1,
        posZ: 2,
        sizeX: 0.2,
        sizeY: 0.2,
        sizeZ: 0.2,
        color: e,
        collide: !0,
      },
      {
        posX: 1,
        posY: 1,
        posZ: 5,
        sizeX: 0.2,
        sizeY: 0.2,
        sizeZ: 0.2,
        color: e,
        collide: !0,
      },
      {
        posX: 2,
        posY: 1,
        posZ: 1,
        sizeX: 0.2,
        sizeY: 0.2,
        sizeZ: 0.2,
        color: e,
        collide: !0,
      },
    ].forEach((n) => {
      const s = this.makeBox(n);
      ((s.userData.type = "Coin"), this.coinBodies.push(s));
    });
  }
  handleCoinEvent() {
    this.coinBodies.forEach((e) => {
      if (this.isNear(this.playerMesh, e, 1)) {
        const t = 0.1 * Math.floor(Math.random() * 10);
        (St.addItem("Coin", t),
          this.scene.remove(e),
          (this.coinBodies = this.coinBodies.filter((n) => n !== e)),
          this.onSaveGame?.());
      }
    });
  }
  keyPickedUp = !1;
  pickupKey(e) {
    this.keyPickedUp ||
      (this.scene.remove(e),
      (this.key = null),
      (this.keyPickedUp = !0),
      St.addItem("Key1", 1),
      this.onSaveGame?.());
  }
  handleGoalKeyEvents() {
    (!this.keyPickedUp &&
      this.isNear(this.playerMesh, this.goalMesh, 0.5) &&
      (this.uiText.textContent = Ke.getText("need_key")),
      this.key &&
        this.isNear(this.playerMesh, this.key, 0.5) &&
        this.pickupKey(this.key),
      this.keyPickedUp &&
        this.isNear(this.playerMesh, this.goalMesh, 1) &&
        this.handleSceneLeave());
  }
  handleMovement = (e) => {
    switch (e.code) {
      case "KeyW":
        this.input.forward = !0;
        break;
      case "KeyS":
        this.input.backward = !0;
        break;
      case "KeyA":
        this.input.left = !0;
        break;
      case "KeyD":
        this.input.right = !0;
        break;
    }
  };
  handleMovementUp = (e) => {
    switch (e.code) {
      case "KeyW":
        this.input.forward = !1;
        break;
      case "KeyS":
        this.input.backward = !1;
        break;
      case "KeyA":
        this.input.left = !1;
        break;
      case "KeyD":
        this.input.right = !1;
        break;
    }
  };
  handleSceneLeave = () => {
    this.onSceneLeave?.(new hl());
  };
  onEnter() {
    (window.addEventListener("keydown", this.handleMovement),
      window.addEventListener("keyup", this.handleMovementUp));
  }
  onExit() {
    (window.removeEventListener("keydown", this.handleMovement),
      window.removeEventListener("keyup", this.handleMovementUp));
  }
  update(e) {
    (this.applyMovement(),
      this.physicsWorld.stepSimulation(e, 10),
      this.updateMotion(),
      this.handleFalseChestEvent(),
      this.handleTrueChestEvent(),
      this.handleGoalKeyEvents(),
      this.handleCoinEvent());
  }
  updateMotion() {
    const e = new this.AmmoLib.btTransform();
    for (const t of this.bodies) {
      const n = t.body.getMotionState();
      if (!n) continue;
      n.getWorldTransform(e);
      const s = e.getOrigin(),
        r = e.getRotation();
      (t.mesh.position.set(s.x(), s.y(), s.z()),
        t.mesh.quaternion.set(r.x(), r.y(), r.z(), r.w()));
    }
  }
  applyMovement() {
    const e = this.playerBody;
    if (!e) return;
    const t = new this.AmmoLib.btVector3(0, 0, 0),
      n = 0.5;
    (this.input.forward && t.op_add(new this.AmmoLib.btVector3(0, 0, -n)),
      this.input.backward && t.op_add(new this.AmmoLib.btVector3(0, 0, n)),
      this.input.left && t.op_add(new this.AmmoLib.btVector3(-n, 0, 0)),
      this.input.right && t.op_add(new this.AmmoLib.btVector3(n, 0, 0)),
      e.isActive() || e.setActivationState(1),
      e.applyCentralImpulse(t));
  }
  isNear(e, t, n) {
    return e.position.distanceTo(t.position) < n;
  }
  onCollect(e) {
    if (
      (e.userData.type == "Key1" && this.pickupKey(e),
      e.userData.type == "Coin")
    ) {
      const t = 0.1 * Math.floor(Math.random() * 10);
      (St.addItem("Coin", t), this.scene.remove(e), this.onSaveGame?.());
    }
  }
}
const fi = new zc();
let Rt,
  Zn = !1;
const Po = new Kc();
let Do = new Ie();
async function Gi(i) {
  for (Zn = !0; fi.children.length; ) fi.remove(fi.children[0]);
  (Rt && (Rt.onExit(), (Rt.onSceneLeave = void 0), (Rt.onSaveGame = void 0)),
    (Rt = i),
    await Rt.init(fi),
    (Rt.onSceneLeave = (e) => Gi(e)),
    (Rt.onSaveGame = () => Io()),
    (Rt.onGameComplete = () => {
      qn && qn.classList.add("visible");
    }),
    Rt.onEnter(),
    (Zn = !1),
    Io());
}
const Ns = new Vt(75, window.innerWidth / window.innerHeight, 0.1, 1e3),
  nm = 15;
Ns.position.y = nm;
const Hi = new Bp();
Hi.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(Hi.domElement);
const Pn = document.getElementById("start-screen"),
  ys = document.getElementById("start-button"),
  Es = document.getElementById("level-button"),
  tn = document.getElementById("level-select-screen"),
  Lo = document.querySelector("#level-select-screen .level-title"),
  Ts = document.getElementById("level1-button"),
  yi = document.getElementById("level2-button"),
  Ei = document.getElementById("level3-button"),
  As = document.getElementById("level-back-button"),
  qn = document.getElementById("end-screen"),
  ws = document.querySelector("#end-screen .end-text"),
  Uo = document.querySelector("#end-screen .end-gif"),
  Cs = document.getElementById("restart-button"),
  Rs = document.getElementById("language-button");
Pn && Pn.classList.add("visible");
qn && qn.classList.remove("visible");
tn && tn.classList.remove("visible");
const ui = gn.getAsset("appTheme");
gn.subscribe((i) => {
  (document.documentElement.setAttribute("data-theme", i),
    Pn && (Pn.style.backgroundImage = `url(${ui.startBgSrc})`),
    tn && (tn.style.backgroundImage = ui.endBackground),
    Uo && (Uo.src = ui.endGifSrc),
    qn && (qn.style.backgroundColor = ui.endBackground),
    ws && (ws.style.color = ui.endTextColor),
    Hi.setClearColor(ui.clearColor, 1));
});
function dl() {
  (ys && (ys.textContent = Ke.getText("start_button")),
    Rs && (Rs.textContent = Ke.getText("language_button")),
    ws && (ws.textContent = Ke.getText("end_text")),
    Cs && (Cs.textContent = Ke.getText("restart_button")),
    Es && (Es.textContent = Ke.getText("level_button")),
    Lo && (Lo.textContent = Ke.getText("level_select_title")),
    Ts && (Ts.textContent = Ke.getText("level1_button")),
    yi && (yi.textContent = Ke.getText("level2_button")),
    Ei && (Ei.textContent = Ke.getText("level3_button")),
    As && (As.textContent = Ke.getText("back_button")));
}
const pr = ["en", "jp", "ar"];
Rs &&
  Rs.addEventListener("click", () => {
    const i = Ke.getLanguage(),
      e = pr.indexOf(i),
      t = pr[(e + 1) % pr.length];
    Ke.setLanguage(t);
  });
ys &&
  ys.addEventListener("click", async () => {
    Zn || (Pn?.classList.remove("visible"), await Gi(new ul()));
  });
Es &&
  Es.addEventListener("click", () => {
    tn && (Pn?.classList.remove("visible"), tn.classList.add("visible"));
  });
Ts &&
  Ts.addEventListener("click", async () => {
    Zn || (tn?.classList.remove("visible"), await Gi(new ul()));
  });
yi &&
  yi.addEventListener("click", async () => {
    Zn || (tn?.classList.remove("visible"), await Gi(new hl()));
  });
Ei &&
  Ei.addEventListener("click", async () => {
    Zn || (tn?.classList.remove("visible"), await Gi(new cl()));
  });
As &&
  As.addEventListener("click", () => {
    (tn?.classList.remove("visible"), Pn?.classList.add("visible"));
  });
Cs &&
  Cs.addEventListener("click", () => {
    (fl(),
      qn?.classList.remove("visible"),
      Pn?.classList.add("visible"),
      window.location.reload());
  });
window.addEventListener("click", (i) => {
  ((Do = new Ie(
    (i.clientX / window.innerWidth) * 2 - 1,
    -(i.clientY / window.innerHeight) * 2 + 1,
  )),
    Po.setFromCamera(Do, Ns));
  const e = Po.intersectObjects(fi.children);
  if (e.length == 0) return;
  const t = e[0].object;
  Rt && Rt.onCollect(t);
});
function Io() {
  const i = { inventory: St.getGameStateInventory() };
  localStorage.setItem("gameSave", JSON.stringify(i));
}
function im() {
  const i = localStorage.getItem("gameSave");
  if (!i) return null;
  const e = JSON.parse(i);
  return (St.setGameStateInventory(e.inventory), e);
}
function fl() {
  (localStorage.removeItem("gameSave"), St.setGameStateInventory({}));
}
window.addEventListener("keydown", (i) => {
  i.code === "KeyN" && fl();
});
const pl = new kp(Ns, Hi.domElement);
pl.enabled = !1;
im();
yi && St.hasItem("Key1") && (yi.disabled = !1);
Ei && St.hasItem("Key2") && (Ei.disabled = !1);
gn.init();
await Ke.initalizeRecord();
Ke.subscribe(() => dl());
dl();
const sm = new qc();
ml();
function ml() {
  requestAnimationFrame(ml);
  const i = sm.getDelta();
  (pl.update(), Rt && !Zn && Rt.update(i), Hi.render(fi, Ns));
}
//# sourceMappingURL=index-Bsi7oPK4.js.map
