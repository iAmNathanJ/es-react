import'./react.production.min-2585db34.js';import {c as createCommonjsModule}from'./_commonjsHelpers-62a4d7f9.js';import'./checkPropTypes-ce559044.js';import {r as require$$0}from'./index-b10834c6.js';var k = Object.assign;

function q(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);

  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}

var t = "function" === typeof Symbol && Symbol.for,
    aa = t ? Symbol.for("react.portal") : 60106,
    u = t ? Symbol.for("react.fragment") : 60107,
    ba = t ? Symbol.for("react.strict_mode") : 60108,
    ca = t ? Symbol.for("react.profiler") : 60114,
    w = t ? Symbol.for("react.provider") : 60109,
    da = t ? Symbol.for("react.context") : 60110,
    ea = t ? Symbol.for("react.concurrent_mode") : 60111,
    fa = t ? Symbol.for("react.forward_ref") : 60112,
    B = t ? Symbol.for("react.suspense") : 60113,
    ha = t ? Symbol.for("react.suspense_list") : 60120,
    ia = t ? Symbol.for("react.memo") : 60115,
    ja = t ? Symbol.for("react.lazy") : 60116,
    ka = t ? Symbol.for("react.fundamental") : 60117,
    la = t ? Symbol.for("react.scope") : 60119,
    C = require$$0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
C.hasOwnProperty("ReactCurrentDispatcher") || (C.ReactCurrentDispatcher = {
  current: null
});
C.hasOwnProperty("ReactCurrentBatchConfig") || (C.ReactCurrentBatchConfig = {
  suspense: null
});

function ma(a) {
  if (-1 === a._status) {
    a._status = 0;
    var b = a._ctor;
    b = b();
    a._result = b;
    b.then(function (c) {
      0 === a._status && (c = c.default, a._status = 1, a._result = c);
    }, function (c) {
      0 === a._status && (a._status = 2, a._result = c);
    });
  }
}

function D(a) {
  if (null == a) return null;
  if ("function" === typeof a) return a.displayName || a.name || null;
  if ("string" === typeof a) return a;

  switch (a) {
    case u:
      return "Fragment";

    case aa:
      return "Portal";

    case ca:
      return "Profiler";

    case ba:
      return "StrictMode";

    case B:
      return "Suspense";

    case ha:
      return "SuspenseList";
  }

  if ("object" === typeof a) switch (a.$$typeof) {
    case da:
      return "Context.Consumer";

    case w:
      return "Context.Provider";

    case fa:
      var b = a.render;
      b = b.displayName || b.name || "";
      return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");

    case ia:
      return D(a.type);

    case ja:
      if (a = 1 === a._status ? a._result : null) return D(a);
  }
  return null;
}

var na = {};

function E(a, b) {
  for (var c = a._threadCount | 0; c <= b; c++) a[c] = a._currentValue2, a._threadCount = c + 1;
}

function oa(a, b, c, d) {
  if (d && (d = a.contextType, "object" === typeof d && null !== d)) return E(d, c), d[c];

  if (a = a.contextTypes) {
    c = {};

    for (var f in a) c[f] = b[f];

    b = c;
  } else b = na;

  return b;
}

for (var F = new Uint16Array(16), H = 0; 15 > H; H++) F[H] = H + 1;

F[15] = 0;
var pa = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    qa = Object.prototype.hasOwnProperty,
    ra = {},
    sa = {};

function ta(a) {
  if (qa.call(sa, a)) return !0;
  if (qa.call(ra, a)) return !1;
  if (pa.test(a)) return sa[a] = !0;
  ra[a] = !0;
  return !1;
}

function ua(a, b, c, d) {
  if (null !== c && 0 === c.type) return !1;

  switch (typeof b) {
    case "function":
    case "symbol":
      return !0;

    case "boolean":
      if (d) return !1;
      if (null !== c) return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;

    default:
      return !1;
  }
}

function va(a, b, c, d) {
  if (null === b || "undefined" === typeof b || ua(a, b, c, d)) return !0;
  if (d) return !1;
  if (null !== c) switch (c.type) {
    case 3:
      return !b;

    case 4:
      return !1 === b;

    case 5:
      return isNaN(b);

    case 6:
      return isNaN(b) || 1 > b;
  }
  return !1;
}

function J(a, b, c, d, f, g) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = f;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = g;
}

var K = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
  K[a] = new J(a, 0, !1, a, null, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
  var b = a[0];
  K[b] = new J(b, 1, !1, a[1], null, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
  K[a] = new J(a, 2, !1, a.toLowerCase(), null, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
  K[a] = new J(a, 2, !1, a, null, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
  K[a] = new J(a, 3, !1, a.toLowerCase(), null, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function (a) {
  K[a] = new J(a, 3, !0, a, null, !1);
});
["capture", "download"].forEach(function (a) {
  K[a] = new J(a, 4, !1, a, null, !1);
});
["cols", "rows", "size", "span"].forEach(function (a) {
  K[a] = new J(a, 6, !1, a, null, !1);
});
["rowSpan", "start"].forEach(function (a) {
  K[a] = new J(a, 5, !1, a.toLowerCase(), null, !1);
});
var L = /[\-:]([a-z])/g;

function M(a) {
  return a[1].toUpperCase();
}

"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
  var b = a.replace(L, M);
  K[b] = new J(b, 1, !1, a, null, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
  var b = a.replace(L, M);
  K[b] = new J(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
  var b = a.replace(L, M);
  K[b] = new J(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1);
});
["tabIndex", "crossOrigin"].forEach(function (a) {
  K[a] = new J(a, 1, !1, a.toLowerCase(), null, !1);
});
K.xlinkHref = new J("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0);
["src", "href", "action", "formAction"].forEach(function (a) {
  K[a] = new J(a, 1, !1, a.toLowerCase(), null, !0);
});
var wa = /["'&<>]/;

function N(a) {
  if ("boolean" === typeof a || "number" === typeof a) return "" + a;
  a = "" + a;
  var b = wa.exec(a);

  if (b) {
    var c = "",
        d,
        f = 0;

    for (d = b.index; d < a.length; d++) {
      switch (a.charCodeAt(d)) {
        case 34:
          b = "&quot;";
          break;

        case 38:
          b = "&amp;";
          break;

        case 39:
          b = "&#x27;";
          break;

        case 60:
          b = "&lt;";
          break;

        case 62:
          b = "&gt;";
          break;

        default:
          continue;
      }

      f !== d && (c += a.substring(f, d));
      f = d + 1;
      c += b;
    }

    a = f !== d ? c + a.substring(f, d) : c;
  }

  return a;
}

function xa(a, b) {
  var c = K.hasOwnProperty(a) ? K[a] : null;
  var d;
  if (d = "style" !== a) d = null !== c ? 0 === c.type : !(2 < a.length) || "o" !== a[0] && "O" !== a[0] || "n" !== a[1] && "N" !== a[1] ? !1 : !0;
  if (d || va(a, b, c, !1)) return "";

  if (null !== c) {
    a = c.attributeName;
    d = c.type;
    if (3 === d || 4 === d && !0 === b) return a + '=""';
    c.sanitizeURL && (b = "" + b);
    return a + "=" + ('"' + N(b) + '"');
  }

  return ta(a) ? a + "=" + ('"' + N(b) + '"') : "";
}

function ya(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}

var za = "function" === typeof Object.is ? Object.is : ya,
    O = null,
    P = null,
    Q = null,
    R = !1,
    S = !1,
    U = null,
    V = 0;

function W() {
  if (null === O) throw Error(q(321));
  return O;
}

function Aa() {
  if (0 < V) throw Error(q(312));
  return {
    memoizedState: null,
    queue: null,
    next: null
  };
}

function Ba() {
  null === Q ? null === P ? (R = !1, P = Q = Aa()) : (R = !0, Q = P) : null === Q.next ? (R = !1, Q = Q.next = Aa()) : (R = !0, Q = Q.next);
  return Q;
}

function Ca(a, b, c, d) {
  for (; S;) S = !1, V += 1, Q = null, c = a(b, d);

  P = O = null;
  V = 0;
  Q = U = null;
  return c;
}

function Da(a, b) {
  return "function" === typeof b ? b(a) : b;
}

function Ea(a, b, c) {
  O = W();
  Q = Ba();

  if (R) {
    var d = Q.queue;
    b = d.dispatch;

    if (null !== U && (c = U.get(d), void 0 !== c)) {
      U.delete(d);
      d = Q.memoizedState;

      do d = a(d, c.action), c = c.next; while (null !== c);

      Q.memoizedState = d;
      return [d, b];
    }

    return [Q.memoizedState, b];
  }

  a = a === Da ? "function" === typeof b ? b() : b : void 0 !== c ? c(b) : b;
  Q.memoizedState = a;
  a = Q.queue = {
    last: null,
    dispatch: null
  };
  a = a.dispatch = Fa.bind(null, O, a);
  return [Q.memoizedState, a];
}

function Fa(a, b, c) {
  if (!(25 > V)) throw Error(q(301));
  if (a === O) if (S = !0, a = {
    action: c,
    next: null
  }, null === U && (U = new Map()), c = U.get(b), void 0 === c) U.set(b, a);else {
    for (b = c; null !== b.next;) b = b.next;

    b.next = a;
  }
}

function Ga() {}

var X = 0,
    Ha = {
  readContext: function (a) {
    var b = X;
    E(a, b);
    return a[b];
  },
  useContext: function (a) {
    W();
    var b = X;
    E(a, b);
    return a[b];
  },
  useMemo: function (a, b) {
    O = W();
    Q = Ba();
    b = void 0 === b ? null : b;

    if (null !== Q) {
      var c = Q.memoizedState;

      if (null !== c && null !== b) {
        a: {
          var d = c[1];
          if (null === d) d = !1;else {
            for (var f = 0; f < d.length && f < b.length; f++) if (!za(b[f], d[f])) {
              d = !1;
              break a;
            }

            d = !0;
          }
        }

        if (d) return c[0];
      }
    }

    a = a();
    Q.memoizedState = [a, b];
    return a;
  },
  useReducer: Ea,
  useRef: function (a) {
    O = W();
    Q = Ba();
    var b = Q.memoizedState;
    return null === b ? (a = {
      current: a
    }, Q.memoizedState = a) : b;
  },
  useState: function (a) {
    return Ea(Da, a);
  },
  useLayoutEffect: function () {},
  useCallback: function (a) {
    return a;
  },
  useImperativeHandle: Ga,
  useEffect: Ga,
  useDebugValue: Ga,
  useResponder: function (a, b) {
    return {
      props: b,
      responder: a
    };
  },
  useDeferredValue: function (a) {
    W();
    return a;
  },
  useTransition: function () {
    W();
    return [function (a) {
      a();
    }, !1];
  }
},
    Ia = {
  html: "http://www.w3.org/1999/xhtml",
  mathml: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg"
};

function Ja(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";

    case "math":
      return "http://www.w3.org/1998/Math/MathML";

    default:
      return "http://www.w3.org/1999/xhtml";
  }
}

var Ka = {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
},
    La = k({
  menuitem: !0
}, Ka),
    Y = {
  animationIterationCount: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
},
    Ma = ["Webkit", "ms", "Moz", "O"];
Object.keys(Y).forEach(function (a) {
  Ma.forEach(function (b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    Y[b] = Y[a];
  });
});
var Na = /([A-Z])/g,
    Oa = /^ms-/,
    Z = require$$0.Children.toArray,
    Pa = C.ReactCurrentDispatcher,
    Qa = {
  listing: !0,
  pre: !0,
  textarea: !0
},
    Ra = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
    Sa = {},
    Ta = {};

function Ua(a) {
  if (void 0 === a || null === a) return a;
  var b = "";
  require$$0.Children.forEach(a, function (a) {
    null != a && (b += a);
  });
  return b;
}

var Va = Object.prototype.hasOwnProperty,
    Wa = {
  children: null,
  dangerouslySetInnerHTML: null,
  suppressContentEditableWarning: null,
  suppressHydrationWarning: null
};

function Xa(a, b) {
  if (void 0 === a) throw Error(q(152, D(b) || "Component"));
}

function Ya(a, b, c) {
  function d(d, g) {
    var e = g.prototype && g.prototype.isReactComponent,
        f = oa(g, b, c, e),
        x = [],
        h = !1,
        m = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {
        if (null === x) return null;
      },
      enqueueReplaceState: function (a, c) {
        h = !0;
        x = [c];
      },
      enqueueSetState: function (a, c) {
        if (null === x) return null;
        x.push(c);
      }
    };

    if (e) {
      if (e = new g(d.props, f, m), "function" === typeof g.getDerivedStateFromProps) {
        var v = g.getDerivedStateFromProps.call(null, d.props, e.state);
        null != v && (e.state = k({}, e.state, v));
      }
    } else if (O = {}, e = g(d.props, f, m), e = Ca(g, d.props, e, f), null == e || null == e.render) {
      a = e;
      Xa(a, g);
      return;
    }

    e.props = d.props;
    e.context = f;
    e.updater = m;
    m = e.state;
    void 0 === m && (e.state = m = null);
    if ("function" === typeof e.UNSAFE_componentWillMount || "function" === typeof e.componentWillMount) if ("function" === typeof e.componentWillMount && "function" !== typeof g.getDerivedStateFromProps && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && "function" !== typeof g.getDerivedStateFromProps && e.UNSAFE_componentWillMount(), x.length) {
      m = x;
      var r = h;
      x = null;
      h = !1;
      if (r && 1 === m.length) e.state = m[0];else {
        v = r ? m[0] : e.state;
        var y = !0;

        for (r = r ? 1 : 0; r < m.length; r++) {
          var p = m[r];
          p = "function" === typeof p ? p.call(e, v, d.props, f) : p;
          null != p && (y ? (y = !1, v = k({}, v, p)) : k(v, p));
        }

        e.state = v;
      }
    } else x = null;
    a = e.render();
    Xa(a, g);

    if ("function" === typeof e.getChildContext && (d = g.childContextTypes, "object" === typeof d)) {
      var A = e.getChildContext();

      for (var T in A) if (!(T in d)) throw Error(q(108, D(g) || "Unknown", T));
    }

    A && (b = k({}, b, A));
  }

  for (; require$$0.isValidElement(a);) {
    var f = a,
        g = f.type;
    if ("function" !== typeof g) break;
    d(f, g);
  }

  return {
    child: a,
    context: b
  };
}

var Za = function () {
  function a(a, b) {
    require$$0.isValidElement(a) ? a.type !== u ? a = [a] : (a = a.props.children, a = require$$0.isValidElement(a) ? [a] : Z(a)) : a = Z(a);
    a = {
      type: null,
      domNamespace: Ia.html,
      children: a,
      childIndex: 0,
      context: na,
      footer: ""
    };
    var c = F[0];

    if (0 === c) {
      var g = F;
      c = g.length;
      var d = 2 * c;
      if (!(65536 >= d)) throw Error(q(304));
      var h = new Uint16Array(d);
      h.set(g);
      F = h;
      F[0] = c + 1;

      for (g = c; g < d - 1; g++) F[g] = g + 1;

      F[d - 1] = 0;
    } else F[0] = F[c];

    this.threadID = c;
    this.stack = [a];
    this.exhausted = !1;
    this.currentSelectValue = null;
    this.previousWasTextNode = !1;
    this.makeStaticMarkup = b;
    this.suspenseDepth = 0;
    this.contextIndex = -1;
    this.contextStack = [];
    this.contextValueStack = [];
  }

  var b = a.prototype;

  b.destroy = function () {
    if (!this.exhausted) {
      this.exhausted = !0;
      this.clearProviders();
      var a = this.threadID;
      F[a] = F[0];
      F[0] = a;
    }
  };

  b.pushProvider = function (a) {
    var c = ++this.contextIndex,
        b = a.type._context,
        g = this.threadID;
    E(b, g);
    var x = b[g];
    this.contextStack[c] = b;
    this.contextValueStack[c] = x;
    b[g] = a.props.value;
  };

  b.popProvider = function () {
    var a = this.contextIndex,
        b = this.contextStack[a],
        f = this.contextValueStack[a];
    this.contextStack[a] = null;
    this.contextValueStack[a] = null;
    this.contextIndex--;
    b[this.threadID] = f;
  };

  b.clearProviders = function () {
    for (var a = this.contextIndex; 0 <= a; a--) this.contextStack[a][this.threadID] = this.contextValueStack[a];
  };

  b.read = function (a) {
    if (this.exhausted) return null;
    var b = X;
    X = this.threadID;
    var c = Pa.current;
    Pa.current = Ha;

    try {
      for (var g = [""], x = !1; g[0].length < a;) {
        if (0 === this.stack.length) {
          this.exhausted = !0;
          var h = this.threadID;
          F[h] = F[0];
          F[0] = h;
          break;
        }

        var e = this.stack[this.stack.length - 1];

        if (x || e.childIndex >= e.children.length) {
          var I = e.footer;
          "" !== I && (this.previousWasTextNode = !1);
          this.stack.pop();
          if ("select" === e.type) this.currentSelectValue = null;else if (null != e.type && null != e.type.type && e.type.type.$$typeof === w) this.popProvider(e.type);else if (e.type === B) {
            this.suspenseDepth--;
            var G = g.pop();

            if (x) {
              x = !1;
              var n = e.fallbackFrame;
              if (!n) throw Error(q(303));
              this.stack.push(n);
              g[this.suspenseDepth] += "\x3c!--$!--\x3e";
              continue;
            } else g[this.suspenseDepth] += G;
          }
          g[this.suspenseDepth] += I;
        } else {
          var m = e.children[e.childIndex++],
              v = "";

          try {
            v += this.render(m, e.context, e.domNamespace);
          } catch (r) {
            if (null != r && "function" === typeof r.then) throw Error(q(294));
            throw r;
          } finally {}

          g.length <= this.suspenseDepth && g.push("");
          g[this.suspenseDepth] += v;
        }
      }

      return g[0];
    } finally {
      Pa.current = c, X = b;
    }
  };

  b.render = function (a, b, f) {
    if ("string" === typeof a || "number" === typeof a) {
      f = "" + a;
      if ("" === f) return "";
      if (this.makeStaticMarkup) return N(f);
      if (this.previousWasTextNode) return "\x3c!-- --\x3e" + N(f);
      this.previousWasTextNode = !0;
      return N(f);
    }

    b = Ya(a, b, this.threadID);
    a = b.child;
    b = b.context;
    if (null === a || !1 === a) return "";

    if (!require$$0.isValidElement(a)) {
      if (null != a && null != a.$$typeof) {
        f = a.$$typeof;
        if (f === aa) throw Error(q(257));
        throw Error(q(258, f.toString()));
      }

      a = Z(a);
      this.stack.push({
        type: null,
        domNamespace: f,
        children: a,
        childIndex: 0,
        context: b,
        footer: ""
      });
      return "";
    }

    var c = a.type;
    if ("string" === typeof c) return this.renderDOM(a, b, f);

    switch (c) {
      case ba:
      case ea:
      case ca:
      case ha:
      case u:
        return a = Z(a.props.children), this.stack.push({
          type: null,
          domNamespace: f,
          children: a,
          childIndex: 0,
          context: b,
          footer: ""
        }), "";

      case B:
        throw Error(q(294));
    }

    if ("object" === typeof c && null !== c) switch (c.$$typeof) {
      case fa:
        O = {};
        var d = c.render(a.props, a.ref);
        d = Ca(c.render, a.props, d, a.ref);
        d = Z(d);
        this.stack.push({
          type: null,
          domNamespace: f,
          children: d,
          childIndex: 0,
          context: b,
          footer: ""
        });
        return "";

      case ia:
        return a = [require$$0.createElement(c.type, k({
          ref: a.ref
        }, a.props))], this.stack.push({
          type: null,
          domNamespace: f,
          children: a,
          childIndex: 0,
          context: b,
          footer: ""
        }), "";

      case w:
        return c = Z(a.props.children), f = {
          type: a,
          domNamespace: f,
          children: c,
          childIndex: 0,
          context: b,
          footer: ""
        }, this.pushProvider(a), this.stack.push(f), "";

      case da:
        c = a.type;
        d = a.props;
        var h = this.threadID;
        E(c, h);
        c = Z(d.children(c[h]));
        this.stack.push({
          type: a,
          domNamespace: f,
          children: c,
          childIndex: 0,
          context: b,
          footer: ""
        });
        return "";

      case ka:
        throw Error(q(338));

      case ja:
        switch (c = a.type, ma(c), c._status) {
          case 1:
            return a = [require$$0.createElement(c._result, k({
              ref: a.ref
            }, a.props))], this.stack.push({
              type: null,
              domNamespace: f,
              children: a,
              childIndex: 0,
              context: b,
              footer: ""
            }), "";

          case 2:
            throw c._result;

          default:
            throw Error(q(295));
        }

      case la:
        throw Error(q(343));
    }
    throw Error(q(130, null == c ? c : typeof c, ""));
  };

  b.renderDOM = function (a, b, f) {
    var c = a.type.toLowerCase();

    if (!Sa.hasOwnProperty(c)) {
      if (!Ra.test(c)) throw Error(q(65, c));
      Sa[c] = !0;
    }

    var d = a.props;
    if ("input" === c) d = k({
      type: void 0
    }, d, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: null != d.value ? d.value : d.defaultValue,
      checked: null != d.checked ? d.checked : d.defaultChecked
    });else if ("textarea" === c) {
      var h = d.value;

      if (null == h) {
        h = d.defaultValue;
        var e = d.children;

        if (null != e) {
          if (null != h) throw Error(q(92));

          if (Array.isArray(e)) {
            if (!(1 >= e.length)) throw Error(q(93));
            e = e[0];
          }

          h = "" + e;
        }

        null == h && (h = "");
      }

      d = k({}, d, {
        value: void 0,
        children: "" + h
      });
    } else if ("select" === c) this.currentSelectValue = null != d.value ? d.value : d.defaultValue, d = k({}, d, {
      value: void 0
    });else if ("option" === c) {
      e = this.currentSelectValue;
      var I = Ua(d.children);

      if (null != e) {
        var G = null != d.value ? d.value + "" : I;
        h = !1;
        if (Array.isArray(e)) for (var n = 0; n < e.length; n++) {
          if ("" + e[n] === G) {
            h = !0;
            break;
          }
        } else h = "" + e === G;
        d = k({
          selected: void 0,
          children: void 0
        }, d, {
          selected: h,
          children: I
        });
      }
    }

    if (h = d) {
      if (La[c] && (null != h.children || null != h.dangerouslySetInnerHTML)) throw Error(q(137, c, ""));

      if (null != h.dangerouslySetInnerHTML) {
        if (null != h.children) throw Error(q(60));
        if (!("object" === typeof h.dangerouslySetInnerHTML && "__html" in h.dangerouslySetInnerHTML)) throw Error(q(61));
      }

      if (null != h.style && "object" !== typeof h.style) throw Error(q(62, ""));
    }

    h = d;
    e = this.makeStaticMarkup;
    I = 1 === this.stack.length;
    G = "<" + a.type;

    for (z in h) if (Va.call(h, z)) {
      var m = h[z];

      if (null != m) {
        if ("style" === z) {
          n = void 0;
          var v = "",
              r = "";

          for (n in m) if (m.hasOwnProperty(n)) {
            var y = 0 === n.indexOf("--"),
                p = m[n];

            if (null != p) {
              if (y) var A = n;else if (A = n, Ta.hasOwnProperty(A)) A = Ta[A];else {
                var T = A.replace(Na, "-$1").toLowerCase().replace(Oa, "-ms-");
                A = Ta[A] = T;
              }
              v += r + A + ":";
              r = n;
              y = null == p || "boolean" === typeof p || "" === p ? "" : y || "number" !== typeof p || 0 === p || Y.hasOwnProperty(r) && Y[r] ? ("" + p).trim() : p + "px";
              v += y;
              r = ";";
            }
          }

          m = v || null;
        }

        n = null;

        b: if (y = c, p = h, -1 === y.indexOf("-")) y = "string" === typeof p.is;else switch (y) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            y = !1;
            break b;

          default:
            y = !0;
        }

        y ? Wa.hasOwnProperty(z) || (n = z, n = ta(n) && null != m ? n + "=" + ('"' + N(m) + '"') : "") : n = xa(z, m);
        n && (G += " " + n);
      }
    }

    e || I && (G += ' data-reactroot=""');
    var z = G;
    h = "";
    Ka.hasOwnProperty(c) ? z += "/>" : (z += ">", h = "</" + a.type + ">");

    a: {
      e = d.dangerouslySetInnerHTML;

      if (null != e) {
        if (null != e.__html) {
          e = e.__html;
          break a;
        }
      } else if (e = d.children, "string" === typeof e || "number" === typeof e) {
        e = N(e);
        break a;
      }

      e = null;
    }

    null != e ? (d = [], Qa[c] && "\n" === e.charAt(0) && (z += "\n"), z += e) : d = Z(d.children);
    a = a.type;
    f = null == f || "http://www.w3.org/1999/xhtml" === f ? Ja(a) : "http://www.w3.org/2000/svg" === f && "foreignObject" === a ? "http://www.w3.org/1999/xhtml" : f;
    this.stack.push({
      domNamespace: f,
      type: c,
      children: d,
      childIndex: 0,
      context: b,
      footer: h
    });
    this.previousWasTextNode = !1;
    return z;
  };

  return a;
}(),
    $a = {
  renderToString: function (a) {
    a = new Za(a, !1);

    try {
      return a.read(Infinity);
    } finally {
      a.destroy();
    }
  },
  renderToStaticMarkup: function (a) {
    a = new Za(a, !0);

    try {
      return a.read(Infinity);
    } finally {
      a.destroy();
    }
  },
  renderToNodeStream: function () {
    throw Error(q(207));
  },
  renderToStaticNodeStream: function () {
    throw Error(q(208));
  },
  version: "16.12.0"
},
    ab = {
  default: $a
},
    bb = ab && $a || ab;

var reactDomServer_browser_production_min = bb.default || bb;var server_browser = createCommonjsModule(function (module) {

{
  module.exports = reactDomServer_browser_production_min;
}
});export default server_browser;