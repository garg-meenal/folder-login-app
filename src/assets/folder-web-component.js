function S() {
}
function he(t) {
  return t();
}
function me() {
  return /* @__PURE__ */ Object.create(null);
}
function P(t) {
  t.forEach(he);
}
function de(t) {
  return typeof t == "function";
}
function Be(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Pe(t) {
  return Object.keys(t).length === 0;
}
function Ge(t, ...e) {
  if (t == null)
    return S;
  const l = t.subscribe(...e);
  return l.unsubscribe ? () => l.unsubscribe() : l;
}
function ee(t, e, l) {
  t.$$.on_destroy.push(Ge(e, l));
}
const Je = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
"WeakMap" in Je;
function _(t, e) {
  t.appendChild(e);
}
function m(t, e, l) {
  t.insertBefore(e, l || null);
}
function b(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function I(t, e) {
  for (let l = 0; l < t.length; l += 1)
    t[l] && t[l].d(e);
}
function a(t) {
  return document.createElement(t);
}
function A(t) {
  return document.createTextNode(t);
}
function C() {
  return A(" ");
}
function X() {
  return A("");
}
function q(t, e, l, n) {
  return t.addEventListener(e, l, n), () => t.removeEventListener(e, l, n);
}
function Y(t, e, l) {
  l == null ? t.removeAttribute(e) : t.getAttribute(e) !== l && t.setAttribute(e, l);
}
function Ke(t) {
  return Array.from(t.childNodes);
}
function Z(t, e) {
  e = "" + e, t.data !== e && (t.data = e);
}
function be(t, e) {
  t.value = e ?? "";
}
function B(t, e, l) {
  for (let n = 0; n < t.options.length; n += 1) {
    const i = t.options[n];
    if (i.__value === e) {
      i.selected = !0;
      return;
    }
  }
  (!l || e !== void 0) && (t.selectedIndex = -1);
}
function oe(t) {
  const e = t.querySelector(":checked");
  return e && e.__value;
}
function Qe(t) {
  const e = {};
  for (const l of t)
    e[l.name] = l.value;
  return e;
}
let Q;
function K(t) {
  Q = t;
}
function Xe() {
  if (!Q)
    throw new Error("Function called outside component initialization");
  return Q;
}
function Ye(t) {
  Xe().$$.on_mount.push(t);
}
const O = [], ge = [];
let z = [];
const ke = [], Ze = /* @__PURE__ */ Promise.resolve();
let ae = !1;
function xe() {
  ae || (ae = !0, Ze.then(ne));
}
function W(t) {
  z.push(t);
}
const re = /* @__PURE__ */ new Set();
let D = 0;
function ne() {
  if (D !== 0)
    return;
  const t = Q;
  do {
    try {
      for (; D < O.length; ) {
        const e = O[D];
        D++, K(e), et(e.$$);
      }
    } catch (e) {
      throw O.length = 0, D = 0, e;
    }
    for (K(null), O.length = 0, D = 0; ge.length; )
      ge.pop()();
    for (let e = 0; e < z.length; e += 1) {
      const l = z[e];
      re.has(l) || (re.add(l), l());
    }
    z.length = 0;
  } while (O.length);
  for (; ke.length; )
    ke.pop()();
  ae = !1, re.clear(), K(t);
}
function et(t) {
  if (t.fragment !== null) {
    t.update(), P(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(W);
  }
}
function tt(t) {
  const e = [], l = [];
  z.forEach((n) => t.indexOf(n) === -1 ? e.push(n) : l.push(n)), l.forEach((n) => n()), z = e;
}
const lt = /* @__PURE__ */ new Set();
function nt(t, e) {
  t && t.i && (lt.delete(t), t.i(e));
}
const it = [
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
];
[...it];
function ot(t, e, l, n) {
  const { fragment: i, after_update: r } = t.$$;
  i && i.m(e, l), n || W(() => {
    const o = t.$$.on_mount.map(he).filter(de);
    t.$$.on_destroy ? t.$$.on_destroy.push(...o) : P(o), t.$$.on_mount = [];
  }), r.forEach(W);
}
function rt(t, e) {
  const l = t.$$;
  l.fragment !== null && (tt(l.after_update), P(l.on_destroy), l.fragment && l.fragment.d(e), l.on_destroy = l.fragment = null, l.ctx = []);
}
function ut(t, e) {
  t.$$.dirty[0] === -1 && (O.push(t), xe(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ct(t, e, l, n, i, r, o, u = [-1]) {
  const f = Q;
  K(t);
  const c = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: S,
    not_equal: i,
    bound: me(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: me(),
    dirty: u,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  o && o(c.root);
  let d = !1;
  if (c.ctx = l ? l(t, e.props || {}, (s, h, ...p) => {
    const N = p.length ? p[0] : h;
    return c.ctx && i(c.ctx[s], c.ctx[s] = N) && (!c.skip_bound && c.bound[s] && c.bound[s](N), d && ut(t, s)), h;
  }) : [], c.update(), d = !0, P(c.before_update), c.fragment = n ? n(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const s = Ke(e.target);
      c.fragment && c.fragment.l(s), s.forEach(b);
    } else
      c.fragment && c.fragment.c();
    e.intro && nt(t.$$.fragment), ot(t, e.target, e.anchor, e.customElement), ne();
  }
  K(f);
}
let We;
typeof HTMLElement == "function" && (We = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(he).filter(de);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(t, e, l) {
    this[t] = l;
  }
  disconnectedCallback() {
    P(this.$$.on_disconnect);
  }
  $destroy() {
    rt(this, 1), this.$destroy = S;
  }
  $on(t, e) {
    if (!de(e))
      return S;
    const l = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return l.push(e), () => {
      const n = l.indexOf(e);
      n !== -1 && l.splice(n, 1);
    };
  }
  $set(t) {
    this.$$set && !Pe(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
let te;
const ft = new Uint8Array(16);
function st() {
  if (!te && (te = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !te))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return te(ft);
}
const y = [];
for (let t = 0; t < 256; ++t)
  y.push((t + 256).toString(16).slice(1));
function dt(t, e = 0) {
  return (y[t[e + 0]] + y[t[e + 1]] + y[t[e + 2]] + y[t[e + 3]] + "-" + y[t[e + 4]] + y[t[e + 5]] + "-" + y[t[e + 6]] + y[t[e + 7]] + "-" + y[t[e + 8]] + y[t[e + 9]] + "-" + y[t[e + 10]] + y[t[e + 11]] + y[t[e + 12]] + y[t[e + 13]] + y[t[e + 14]] + y[t[e + 15]]).toLowerCase();
}
const at = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), ve = {
  randomUUID: at
};
function ue(t, e, l) {
  if (ve.randomUUID && !e && !t)
    return ve.randomUUID();
  t = t || {};
  const n = t.random || (t.rng || st)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, e) {
    l = l || 0;
    for (let i = 0; i < 16; ++i)
      e[l + i] = n[i];
    return e;
  }
  return dt(n);
}
const V = [];
function ie(t, e = S) {
  let l;
  const n = /* @__PURE__ */ new Set();
  function i(u) {
    if (Be(t, u) && (t = u, l)) {
      const f = !V.length;
      for (const c of n)
        c[1](), V.push(c, t);
      if (f) {
        for (let c = 0; c < V.length; c += 2)
          V[c][0](V[c + 1]);
        V.length = 0;
      }
    }
  }
  function r(u) {
    i(u(t));
  }
  function o(u, f = S) {
    const c = [u, f];
    return n.add(c), n.size === 1 && (l = e(i) || S), u(t), () => {
      n.delete(c), n.size === 0 && l && (l(), l = null);
    };
  }
  return { set: i, update: r, subscribe: o };
}
const ce = ie(""), le = ie([]), fe = ie(null), se = ie(null);
function ye(t, e, l) {
  const n = t.slice();
  return n[18] = e[l], n;
}
function we(t, e, l) {
  const n = t.slice();
  return n[21] = e[l], n;
}
function $e(t, e, l) {
  const n = t.slice();
  return n[24] = e[l], n;
}
function Fe(t, e, l) {
  const n = t.slice();
  return n[18] = e[l], n;
}
function Ee(t, e, l) {
  const n = t.slice();
  return n[18] = e[l], n;
}
function Ce(t, e, l) {
  const n = t.slice();
  return n[24] = e[l], n;
}
function Se(t, e, l) {
  const n = t.slice();
  return n[33] = e[l], n;
}
function _t(t) {
  let e;
  return {
    c() {
      e = a("h1"), e.textContent = "User is not authenticated!", Y(e, "class", "error");
    },
    m(l, n) {
      m(l, e, n);
    },
    p: S,
    d(l) {
      l && b(e);
    }
  };
}
function ht(t) {
  let e, l, n = (
    /*showForm*/
    t[2] && Ne(t)
  ), i = !/*showForm*/
  t[2] && Ie(t);
  return {
    c() {
      n && n.c(), e = C(), l = a("div"), i && i.c(), Y(l, "id", "showHierarchy");
    },
    m(r, o) {
      n && n.m(r, o), m(r, e, o), m(r, l, o), i && i.m(l, null);
    },
    p(r, o) {
      /*showForm*/
      r[2] ? n ? n.p(r, o) : (n = Ne(r), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null), /*showForm*/
      r[2] ? i && (i.d(1), i = null) : i ? i.p(r, o) : (i = Ie(r), i.c(), i.m(l, null));
    },
    d(r) {
      n && n.d(r), r && b(e), r && b(l), i && i.d();
    }
  };
}
function Ne(t) {
  let e, l, n, i, r, o, u, f, c, d, s, h, p, N, M, G, H, J, j, x, k, w, T, L, U = (
    /*types*/
    t[7]
  ), $ = [];
  for (let g = 0; g < U.length; g += 1)
    $[g] = Te(Se(t, U, g));
  let F = (
    /*$selectedType*/
    t[5] === "File" && Le(t)
  ), E = (
    /*$selectedType*/
    t[5] === "Folder" && He(t)
  );
  return {
    c() {
      e = a("form"), l = a("table"), n = a("tr"), i = a("td"), i.innerHTML = '<label for="fileName">File/Folder Name:</label>', r = C(), o = a("td"), u = a("input"), f = C(), c = a("tr"), d = a("td"), d.innerHTML = '<label for="type">Type:</label>', s = C(), h = a("td"), p = a("select");
      for (let g = 0; g < $.length; g += 1)
        $[g].c();
      N = C(), F && F.c(), M = C(), E && E.c(), G = C(), H = a("tr"), J = a("td"), j = a("button"), j.textContent = "Save", x = C(), k = a("td"), w = a("button"), w.textContent = "Cancel", u.required = !0, Y(u, "placeholder", "Enter File/Folder Name"), p.required = !0, /*$selectedType*/
      t[5] === void 0 && W(() => (
        /*select_change_handler*/
        t[12].call(p)
      ));
    },
    m(g, R) {
      m(g, e, R), _(e, l), _(l, n), _(n, i), _(n, r), _(n, o), _(o, u), be(
        u,
        /*name*/
        t[1]
      ), _(l, f), _(l, c), _(c, d), _(c, s), _(c, h), _(h, p);
      for (let v = 0; v < $.length; v += 1)
        $[v] && $[v].m(p, null);
      B(
        p,
        /*$selectedType*/
        t[5],
        !0
      ), _(l, N), F && F.m(l, null), _(l, M), E && E.m(l, null), _(l, G), _(l, H), _(H, J), _(J, j), _(H, x), _(H, k), _(k, w), T || (L = [
        q(
          u,
          "input",
          /*input_input_handler*/
          t[11]
        ),
        q(
          p,
          "change",
          /*select_change_handler*/
          t[12]
        ),
        q(
          j,
          "click",
          /*onSave*/
          t[8]
        ),
        q(
          w,
          "click",
          /*onCancel*/
          t[9]
        )
      ], T = !0);
    },
    p(g, R) {
      if (R[0] & /*name*/
      2 && u.value !== /*name*/
      g[1] && be(
        u,
        /*name*/
        g[1]
      ), R[0] & /*types*/
      128) {
        U = /*types*/
        g[7];
        let v;
        for (v = 0; v < U.length; v += 1) {
          const pe = Se(g, U, v);
          $[v] ? $[v].p(pe, R) : ($[v] = Te(pe), $[v].c(), $[v].m(p, null));
        }
        for (; v < $.length; v += 1)
          $[v].d(1);
        $.length = U.length;
      }
      R[0] & /*$selectedType, types*/
      160 && B(
        p,
        /*$selectedType*/
        g[5]
      ), /*$selectedType*/
      g[5] === "File" ? F ? F.p(g, R) : (F = Le(g), F.c(), F.m(l, M)) : F && (F.d(1), F = null), /*$selectedType*/
      g[5] === "Folder" ? E ? E.p(g, R) : (E = He(g), E.c(), E.m(l, G)) : E && (E.d(1), E = null);
    },
    d(g) {
      g && b(e), I($, g), F && F.d(), E && E.d(), T = !1, P(L);
    }
  };
}
function Te(t) {
  let e, l = (
    /*type*/
    t[33] + ""
  ), n;
  return {
    c() {
      e = a("option"), n = A(l), e.__value = /*type*/
      t[33], e.value = e.__value;
    },
    m(i, r) {
      m(i, e, r), _(e, n);
    },
    p: S,
    d(i) {
      i && b(e);
    }
  };
}
function Le(t) {
  let e, l, n, i, r, o, u, f = (
    /*$folders*/
    t[6]
  ), c = [];
  for (let d = 0; d < f.length; d += 1)
    c[d] = Ae(Ee(t, f, d));
  return {
    c() {
      e = a("tr"), l = a("td"), l.innerHTML = '<label for="folder">Select Folder:</label>', n = C(), i = a("td"), r = a("select");
      for (let d = 0; d < c.length; d += 1)
        c[d].c();
      /*$selectedFolder*/
      t[3] === void 0 && W(() => (
        /*select_change_handler_1*/
        t[13].call(r)
      ));
    },
    m(d, s) {
      m(d, e, s), _(e, l), _(e, n), _(e, i), _(i, r);
      for (let h = 0; h < c.length; h += 1)
        c[h] && c[h].m(r, null);
      B(
        r,
        /*$selectedFolder*/
        t[3],
        !0
      ), o || (u = q(
        r,
        "change",
        /*select_change_handler_1*/
        t[13]
      ), o = !0);
    },
    p(d, s) {
      if (s[0] & /*$folders*/
      64) {
        f = /*$folders*/
        d[6];
        let h;
        for (h = 0; h < f.length; h += 1) {
          const p = Ee(d, f, h);
          c[h] ? c[h].p(p, s) : (c[h] = Ae(p), c[h].c(), c[h].m(r, null));
        }
        for (; h < c.length; h += 1)
          c[h].d(1);
        c.length = f.length;
      }
      s[0] & /*$selectedFolder, $folders*/
      72 && B(
        r,
        /*$selectedFolder*/
        d[3]
      );
    },
    d(d) {
      d && b(e), I(c, d), o = !1, u();
    }
  };
}
function Ue(t) {
  let e, l = (
    /*folder*/
    t[18].files
  ), n = [];
  for (let i = 0; i < l.length; i += 1)
    n[i] = Re(Ce(t, l, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = X();
    },
    m(i, r) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(i, r);
      m(i, e, r);
    },
    p(i, r) {
      if (r[0] & /*$folders*/
      64) {
        l = /*folder*/
        i[18].files;
        let o;
        for (o = 0; o < l.length; o += 1) {
          const u = Ce(i, l, o);
          n[o] ? n[o].p(u, r) : (n[o] = Re(u), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = l.length;
      }
    },
    d(i) {
      I(n, i), i && b(e);
    }
  };
}
function Me(t) {
  let e, l = (
    /*file*/
    t[24].name + ""
  ), n, i;
  return {
    c() {
      e = a("option"), n = A(l), e.__value = i = /*file*/
      t[24], e.value = e.__value;
    },
    m(r, o) {
      m(r, e, o), _(e, n);
    },
    p(r, o) {
      o[0] & /*$folders*/
      64 && l !== (l = /*file*/
      r[24].name + "") && Z(n, l), o[0] & /*$folders*/
      64 && i !== (i = /*file*/
      r[24]) && (e.__value = i, e.value = e.__value);
    },
    d(r) {
      r && b(e);
    }
  };
}
function Re(t) {
  let e, l = (
    /*file*/
    t[24].type === "folder" && Me(t)
  );
  return {
    c() {
      l && l.c(), e = X();
    },
    m(n, i) {
      l && l.m(n, i), m(n, e, i);
    },
    p(n, i) {
      /*file*/
      n[24].type === "folder" ? l ? l.p(n, i) : (l = Me(n), l.c(), l.m(e.parentNode, e)) : l && (l.d(1), l = null);
    },
    d(n) {
      l && l.d(n), n && b(e);
    }
  };
}
function Ae(t) {
  let e, l = (
    /*folder*/
    t[18].name + ""
  ), n, i, r, o = (
    /*folder*/
    t[18].files && Ue(t)
  );
  return {
    c() {
      e = a("option"), n = A(l), o && o.c(), r = X(), e.__value = i = /*folder*/
      t[18], e.value = e.__value;
    },
    m(u, f) {
      m(u, e, f), _(e, n), o && o.m(u, f), m(u, r, f);
    },
    p(u, f) {
      f[0] & /*$folders*/
      64 && l !== (l = /*folder*/
      u[18].name + "") && Z(n, l), f[0] & /*$folders*/
      64 && i !== (i = /*folder*/
      u[18]) && (e.__value = i, e.value = e.__value), /*folder*/
      u[18].files ? o ? o.p(u, f) : (o = Ue(u), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
    },
    d(u) {
      u && b(e), o && o.d(u), u && b(r);
    }
  };
}
function He(t) {
  let e, l, n, i, r, o, u, f, c = (
    /*$folders*/
    t[6]
  ), d = [];
  for (let s = 0; s < c.length; s += 1)
    d[s] = qe(Fe(t, c, s));
  return {
    c() {
      e = a("tr"), l = a("td"), l.innerHTML = '<label for="folder">Select Level:</label>', n = C(), i = a("td"), r = a("select"), o = a("option"), o.textContent = "At Root";
      for (let s = 0; s < d.length; s += 1)
        d[s].c();
      o.__value = "At Root", o.value = o.__value, /*$selectedLevel*/
      t[4] === void 0 && W(() => (
        /*select_change_handler_2*/
        t[14].call(r)
      ));
    },
    m(s, h) {
      m(s, e, h), _(e, l), _(e, n), _(e, i), _(i, r), _(r, o);
      for (let p = 0; p < d.length; p += 1)
        d[p] && d[p].m(r, null);
      B(
        r,
        /*$selectedLevel*/
        t[4],
        !0
      ), u || (f = q(
        r,
        "change",
        /*select_change_handler_2*/
        t[14]
      ), u = !0);
    },
    p(s, h) {
      if (h[0] & /*$folders*/
      64) {
        c = /*$folders*/
        s[6];
        let p;
        for (p = 0; p < c.length; p += 1) {
          const N = Fe(s, c, p);
          d[p] ? d[p].p(N, h) : (d[p] = qe(N), d[p].c(), d[p].m(r, null));
        }
        for (; p < d.length; p += 1)
          d[p].d(1);
        d.length = c.length;
      }
      h[0] & /*$selectedLevel, $folders*/
      80 && B(
        r,
        /*$selectedLevel*/
        s[4]
      );
    },
    d(s) {
      s && b(e), I(d, s), u = !1, f();
    }
  };
}
function qe(t) {
  let e, l = (
    /*folder*/
    t[18].name + ""
  ), n, i;
  return {
    c() {
      e = a("option"), n = A(l), e.__value = i = /*folder*/
      t[18], e.value = e.__value;
    },
    m(r, o) {
      m(r, e, o), _(e, n);
    },
    p(r, o) {
      o[0] & /*$folders*/
      64 && l !== (l = /*folder*/
      r[18].name + "") && Z(n, l), o[0] & /*$folders*/
      64 && i !== (i = /*folder*/
      r[18]) && (e.__value = i, e.value = e.__value);
    },
    d(r) {
      r && b(e);
    }
  };
}
function Ie(t) {
  let e, l, n, i, r, o, u = (
    /*$folders*/
    t[6]
  ), f = [];
  for (let c = 0; c < u.length; c += 1)
    f[c] = ze(ye(t, u, c));
  return {
    c() {
      e = a("button"), e.textContent = "Back", l = C(), n = a("div"), i = a("ul");
      for (let c = 0; c < f.length; c += 1)
        f[c].c();
      Y(n, "id", "folders");
    },
    m(c, d) {
      m(c, e, d), m(c, l, d), m(c, n, d), _(n, i);
      for (let s = 0; s < f.length; s += 1)
        f[s] && f[s].m(i, null);
      r || (o = q(
        e,
        "click",
        /*click_handler*/
        t[15]
      ), r = !0);
    },
    p(c, d) {
      if (d[0] & /*$folders*/
      64) {
        u = /*$folders*/
        c[6];
        let s;
        for (s = 0; s < u.length; s += 1) {
          const h = ye(c, u, s);
          f[s] ? f[s].p(h, d) : (f[s] = ze(h), f[s].c(), f[s].m(i, null));
        }
        for (; s < f.length; s += 1)
          f[s].d(1);
        f.length = u.length;
      }
    },
    d(c) {
      c && b(e), c && b(l), c && b(n), I(f, c), r = !1, o();
    }
  };
}
function je(t) {
  let e, l, n = (
    /*folder*/
    t[18].files
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = Oe(we(t, n, r));
  return {
    c() {
      e = a("ul");
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      l = C();
    },
    m(r, o) {
      m(r, e, o);
      for (let u = 0; u < i.length; u += 1)
        i[u] && i[u].m(e, null);
      _(e, l);
    },
    p(r, o) {
      if (o[0] & /*$folders*/
      64) {
        n = /*folder*/
        r[18].files;
        let u;
        for (u = 0; u < n.length; u += 1) {
          const f = we(r, n, u);
          i[u] ? i[u].p(f, o) : (i[u] = Oe(f), i[u].c(), i[u].m(e, l));
        }
        for (; u < i.length; u += 1)
          i[u].d(1);
        i.length = n.length;
      }
    },
    d(r) {
      r && b(e), I(i, r);
    }
  };
}
function De(t) {
  let e, l = (
    /*item*/
    t[21].files
  ), n = [];
  for (let i = 0; i < l.length; i += 1)
    n[i] = Ve($e(t, l, i));
  return {
    c() {
      e = a("ul");
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
    },
    m(i, r) {
      m(i, e, r);
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(e, null);
    },
    p(i, r) {
      if (r[0] & /*$folders*/
      64) {
        l = /*item*/
        i[21].files;
        let o;
        for (o = 0; o < l.length; o += 1) {
          const u = $e(i, l, o);
          n[o] ? n[o].p(u, r) : (n[o] = Ve(), n[o].c(), n[o].m(e, null));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = l.length;
      }
    },
    d(i) {
      i && b(e), I(n, i);
    }
  };
}
function Ve(t) {
  let e;
  return {
    c() {
      e = a("li"), e.textContent = "file";
    },
    m(l, n) {
      m(l, e, n);
    },
    p: S,
    d(l) {
      l && b(e);
    }
  };
}
function Oe(t) {
  let e, l = (
    /*item*/
    t[21].name + ""
  ), n, i, r, o = (
    /*item*/
    t[21].files && De(t)
  );
  return {
    c() {
      e = a("li"), n = A(l), i = C(), o && o.c(), r = X();
    },
    m(u, f) {
      m(u, e, f), _(e, n), m(u, i, f), o && o.m(u, f), m(u, r, f);
    },
    p(u, f) {
      f[0] & /*$folders*/
      64 && l !== (l = /*item*/
      u[21].name + "") && Z(n, l), /*item*/
      u[21].files ? o ? o.p(u, f) : (o = De(u), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
    },
    d(u) {
      u && b(e), u && b(i), o && o.d(u), u && b(r);
    }
  };
}
function ze(t) {
  let e, l, n = (
    /*folder*/
    t[18].name + ""
  ), i, r, o, u = (
    /*folder*/
    t[18].files && je(t)
  );
  return {
    c() {
      e = a("li"), l = a("span"), i = A(n), r = C(), u && u.c(), o = X();
    },
    m(f, c) {
      m(f, e, c), _(e, l), _(l, i), m(f, r, c), u && u.m(f, c), m(f, o, c);
    },
    p(f, c) {
      c[0] & /*$folders*/
      64 && n !== (n = /*folder*/
      f[18].name + "") && Z(i, n), /*folder*/
      f[18].files ? u ? u.p(f, c) : (u = je(f), u.c(), u.m(o.parentNode, o)) : u && (u.d(1), u = null);
    },
    d(f) {
      f && b(e), f && b(r), u && u.d(f), f && b(o);
    }
  };
}
function pt(t) {
  let e;
  function l(r, o) {
    return (
      /*is_user_authenticated*/
      r[0] ? ht : _t
    );
  }
  let n = l(t), i = n(t);
  return {
    c() {
      e = a("div"), i.c(), this.c = S, Y(e, "class", "card");
    },
    m(r, o) {
      m(r, e, o), i.m(e, null);
    },
    p(r, o) {
      n === (n = l(r)) && i ? i.p(r, o) : (i.d(1), i = n(r), i && (i.c(), i.m(e, null)));
    },
    i: S,
    o: S,
    d(r) {
      r && b(e), i.d();
    }
  };
}
function _e(t, e) {
  var l;
  for (const n of t) {
    if (n.id === e)
      return n;
    if (((l = n.files) == null ? void 0 : l.length) > 0) {
      const i = _e(n.files, e);
      if (i)
        return i;
    }
  }
  return null;
}
function mt(t, e, l) {
  let n, i, r, o;
  ee(t, fe, (k) => l(3, n = k)), ee(t, se, (k) => l(4, i = k)), ee(t, ce, (k) => l(5, r = k)), ee(t, le, (k) => l(6, o = k));
  let { is_user_authenticated: u } = e, f = "", c = ["File", "Folder"], d = !0;
  Ye(() => {
    const k = {
      id: ue(),
      name: "DefaultFolder",
      files: [],
      level: "root",
      type: "folder"
    };
    le.update((w) => (w && w.length === 0 && w.push(k), w));
  });
  function s() {
    f && r ? (l(2, d = !1), r === "File" && n ? h(f) : r === "Folder" && i && p(f, i === "At Root" ? null : i)) : M();
  }
  function h(k) {
    const w = {
      id: ue(),
      name: k,
      type: "file"
    };
    le.update((T) => {
      const L = _e(T, n.id);
      return L && L.files.push(w), T;
    });
  }
  function p(k, w) {
    const T = {
      id: ue(),
      name: k,
      files: [],
      level: w === null ? "root" : w.level === "root" ? "first" : "second",
      type: "folder"
    };
    le.update((L) => {
      if (w === null)
        L.push(T);
      else {
        const U = _e(L, w.id);
        U && U.files.push(T);
      }
      return L;
    });
  }
  function N() {
    M();
  }
  function M() {
    l(1, f = ""), ce.set(""), fe.set(null), se.set(null);
  }
  function G() {
    f = this.value, l(1, f);
  }
  function H() {
    r = oe(this), ce.set(r), l(7, c);
  }
  function J() {
    n = oe(this), fe.set(n);
  }
  function j() {
    i = oe(this), se.set(i);
  }
  const x = () => {
    M(), l(2, d = !0);
  };
  return t.$$set = (k) => {
    "is_user_authenticated" in k && l(0, u = k.is_user_authenticated);
  }, [
    u,
    f,
    d,
    n,
    i,
    r,
    o,
    c,
    s,
    N,
    M,
    G,
    H,
    J,
    j,
    x
  ];
}
class bt extends We {
  constructor(e) {
    super();
    const l = document.createElement("style");
    l.textContent = ".card{background-color:#b8c0d8;width:fit-content;padding:30px;margin:auto;margin-top:50px;vertical-align:middle}.card input{display:block;width:193px;height:25px}.card select{display:block;width:200px;text-align:center;height:30px}.card #folders{text-align:left;padding:20px 40px 20px 20px}.card table td{padding-bottom:10px}.card button{display:block;margin:auto;width:100px;height:30px}.card button:hover{background-color:#3e67d9;color:black;font-weight:bold;cursor:pointer}.card .error{color:red}", this.shadowRoot.appendChild(l), ct(
      this,
      {
        target: this.shadowRoot,
        props: Qe(this.attributes),
        customElement: !0
      },
      mt,
      pt,
      Be,
      { is_user_authenticated: 0 },
      null,
      [-1, -1]
    ), e && (e.target && m(e.target, this, e.anchor), e.props && (this.$set(e.props), ne()));
  }
  static get observedAttributes() {
    return ["is_user_authenticated"];
  }
  get is_user_authenticated() {
    return this.$$.ctx[0];
  }
  set is_user_authenticated(e) {
    this.$$set({ is_user_authenticated: e }), ne();
  }
}
customElements.define("folder-component", bt);
