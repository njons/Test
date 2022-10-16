// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const t = window, e = t.ShadowRoot && (t.ShadyCSS === void 0 || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s = Symbol(), n = new WeakMap();
class o {
    constructor(t2, e2, n2){
        if (this._$cssResult$ = true, n2 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t2, this.t = e2;
    }
    get styleSheet() {
        let t2 = this.o;
        const s2 = this.t;
        if (e && t2 === void 0) {
            const e2 = s2 !== void 0 && s2.length === 1;
            e2 && (t2 = n.get(s2)), t2 === void 0 && ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText), e2 && n.set(s2, t2));
        }
        return t2;
    }
    toString() {
        return this.cssText;
    }
}
const r = (t2)=>new o(typeof t2 == "string" ? t2 : t2 + "", void 0, s), S = (s2, n2)=>{
    e ? s2.adoptedStyleSheets = n2.map((t2)=>t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet) : n2.forEach((e2)=>{
        const n3 = document.createElement("style"), o2 = t.litNonce;
        o2 !== void 0 && n3.setAttribute("nonce", o2), n3.textContent = e2.cssText, s2.appendChild(n3);
    });
}, c = e ? (t2)=>t2 : (t2)=>t2 instanceof CSSStyleSheet ? ((t3)=>{
        let e2 = "";
        for (const s2 of t3.cssRules)e2 += s2.cssText;
        return r(e2);
    })(t2) : t2;
var s1;
const e1 = window, r1 = e1.trustedTypes, h = r1 ? r1.emptyScript : "", o1 = e1.reactiveElementPolyfillSupport, n1 = {
    toAttribute (t, i) {
        switch(i){
            case Boolean:
                t = t ? h : null;
                break;
            case Object:
            case Array:
                t = t == null ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, i) {
        let s2 = t;
        switch(i){
            case Boolean:
                s2 = t !== null;
                break;
            case Number:
                s2 = t === null ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    s2 = JSON.parse(t);
                } catch (t2) {
                    s2 = null;
                }
        }
        return s2;
    }
}, a = (t, i)=>i !== t && (i == i || t == t), l = {
    attribute: true,
    type: String,
    converter: n1,
    reflect: false,
    hasChanged: a
};
class d extends HTMLElement {
    constructor(){
        super(), this._$Ei = new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this.u();
    }
    static addInitializer(t) {
        var i;
        (i = this.h) !== null && i !== void 0 || (this.h = []), this.h.push(t);
    }
    static get observedAttributes() {
        this.finalize();
        const t = [];
        return this.elementProperties.forEach((i, s2)=>{
            const e2 = this._$Ep(s2, i);
            e2 !== void 0 && (this._$Ev.set(e2, s2), t.push(e2));
        }), t;
    }
    static createProperty(t, i = l) {
        if (i.state && (i.attribute = false), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
            const s2 = typeof t == "symbol" ? Symbol() : "__" + t, e2 = this.getPropertyDescriptor(t, s2, i);
            e2 !== void 0 && Object.defineProperty(this.prototype, t, e2);
        }
    }
    static getPropertyDescriptor(t, i, s2) {
        return {
            get () {
                return this[i];
            },
            set (e2) {
                const r2 = this[t];
                this[i] = e2, this.requestUpdate(t, r2, s2);
            },
            configurable: true,
            enumerable: true
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) || l;
    }
    static finalize() {
        if (this.hasOwnProperty("finalized")) return false;
        this.finalized = true;
        const t = Object.getPrototypeOf(this);
        if (t.finalize(), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map(), this.hasOwnProperty("properties")) {
            const t2 = this.properties, i = [
                ...Object.getOwnPropertyNames(t2),
                ...Object.getOwnPropertySymbols(t2)
            ];
            for (const s2 of i)this.createProperty(s2, t2[s2]);
        }
        return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(i) {
        const s2 = [];
        if (Array.isArray(i)) {
            const e2 = new Set(i.flat(1 / 0).reverse());
            for (const i2 of e2)s2.unshift(c(i2));
        } else i !== void 0 && s2.push(c(i));
        return s2;
    }
    static _$Ep(t, i) {
        const s2 = i.attribute;
        return s2 === false ? void 0 : typeof s2 == "string" ? s2 : typeof t == "string" ? t.toLowerCase() : void 0;
    }
    u() {
        var t;
        this._$E_ = new Promise((t2)=>this.enableUpdating = t2), this._$AL = new Map(), this._$Eg(), this.requestUpdate(), (t = this.constructor.h) === null || t === void 0 || t.forEach((t2)=>t2(this));
    }
    addController(t) {
        var i, s2;
        ((i = this._$ES) !== null && i !== void 0 ? i : this._$ES = []).push(t), this.renderRoot !== void 0 && this.isConnected && ((s2 = t.hostConnected) === null || s2 === void 0 || s2.call(t));
    }
    removeController(t) {
        var i;
        (i = this._$ES) === null || i === void 0 || i.splice(this._$ES.indexOf(t) >>> 0, 1);
    }
    _$Eg() {
        this.constructor.elementProperties.forEach((t, i)=>{
            this.hasOwnProperty(i) && (this._$Ei.set(i, this[i]), delete this[i]);
        });
    }
    createRenderRoot() {
        var t;
        const s2 = (t = this.shadowRoot) !== null && t !== void 0 ? t : this.attachShadow(this.constructor.shadowRootOptions);
        return S(s2, this.constructor.elementStyles), s2;
    }
    connectedCallback() {
        var t;
        this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t = this._$ES) === null || t === void 0 || t.forEach((t2)=>{
            var i;
            return (i = t2.hostConnected) === null || i === void 0 ? void 0 : i.call(t2);
        });
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        var t;
        (t = this._$ES) === null || t === void 0 || t.forEach((t2)=>{
            var i;
            return (i = t2.hostDisconnected) === null || i === void 0 ? void 0 : i.call(t2);
        });
    }
    attributeChangedCallback(t, i, s2) {
        this._$AK(t, s2);
    }
    _$EO(t, i, s2 = l) {
        var e2;
        const r2 = this.constructor._$Ep(t, s2);
        if (r2 !== void 0 && s2.reflect === true) {
            const h2 = (((e2 = s2.converter) === null || e2 === void 0 ? void 0 : e2.toAttribute) !== void 0 ? s2.converter : n1).toAttribute(i, s2.type);
            this._$El = t, h2 == null ? this.removeAttribute(r2) : this.setAttribute(r2, h2), this._$El = null;
        }
    }
    _$AK(t, i) {
        var s2;
        const e2 = this.constructor, r2 = e2._$Ev.get(t);
        if (r2 !== void 0 && this._$El !== r2) {
            const t2 = e2.getPropertyOptions(r2), h2 = typeof t2.converter == "function" ? {
                fromAttribute: t2.converter
            } : ((s2 = t2.converter) === null || s2 === void 0 ? void 0 : s2.fromAttribute) !== void 0 ? t2.converter : n1;
            this._$El = r2, this[r2] = h2.fromAttribute(i, t2.type), this._$El = null;
        }
    }
    requestUpdate(t, i, s2) {
        let e2 = true;
        t !== void 0 && (((s2 = s2 || this.constructor.getPropertyOptions(t)).hasChanged || a)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), s2.reflect === true && this._$El !== t && (this._$EC === void 0 && (this._$EC = new Map()), this._$EC.set(t, s2))) : e2 = false), !this.isUpdatePending && e2 && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
        this.isUpdatePending = true;
        try {
            await this._$E_;
        } catch (t2) {
            Promise.reject(t2);
        }
        const t = this.scheduleUpdate();
        return t != null && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        var t;
        if (!this.isUpdatePending) return;
        this.hasUpdated, this._$Ei && (this._$Ei.forEach((t2, i2)=>this[i2] = t2), this._$Ei = void 0);
        let i = false;
        const s2 = this._$AL;
        try {
            i = this.shouldUpdate(s2), i ? (this.willUpdate(s2), (t = this._$ES) === null || t === void 0 || t.forEach((t2)=>{
                var i2;
                return (i2 = t2.hostUpdate) === null || i2 === void 0 ? void 0 : i2.call(t2);
            }), this.update(s2)) : this._$Ek();
        } catch (t2) {
            throw i = false, this._$Ek(), t2;
        }
        i && this._$AE(s2);
    }
    willUpdate(t) {}
    _$AE(t) {
        var i;
        (i = this._$ES) === null || i === void 0 || i.forEach((t2)=>{
            var i2;
            return (i2 = t2.hostUpdated) === null || i2 === void 0 ? void 0 : i2.call(t2);
        }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t)), this.updated(t);
    }
    _$Ek() {
        this._$AL = new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$E_;
    }
    shouldUpdate(t) {
        return true;
    }
    update(t) {
        this._$EC !== void 0 && (this._$EC.forEach((t2, i)=>this._$EO(i, this[i], t2)), this._$EC = void 0), this._$Ek();
    }
    updated(t) {}
    firstUpdated(t) {}
}
d.finalized = true, d.elementProperties = new Map(), d.elementStyles = [], d.shadowRootOptions = {
    mode: "open"
}, o1 == null || o1({
    ReactiveElement: d
}), ((s1 = e1.reactiveElementVersions) !== null && s1 !== void 0 ? s1 : e1.reactiveElementVersions = []).push("1.4.1");
var t1;
const i = window, s2 = i.trustedTypes, e2 = s2 ? s2.createPolicy("lit-html", {
    createHTML: (t2)=>t2
}) : void 0, o2 = `lit$${(Math.random() + "").slice(9)}$`, n2 = "?" + o2, l1 = `<${n2}>`, h1 = document, r2 = (t2 = "")=>h1.createComment(t2), d1 = (t2)=>t2 === null || typeof t2 != "object" && typeof t2 != "function", u = Array.isArray, c1 = (t2)=>u(t2) || typeof (t2 == null ? void 0 : t2[Symbol.iterator]) == "function", v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, a1 = /-->/g, f = />/g, _ = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), m = /'/g, p = /"/g, $ = /^(?:script|style|textarea|title)$/i, g = (t2)=>(i2, ...s2)=>({
            _$litType$: t2,
            strings: i2,
            values: s2
        }), y = g(1), w = g(2), x = Symbol.for("lit-noChange"), b = Symbol.for("lit-nothing"), T = new WeakMap(), A = h1.createTreeWalker(h1, 129, null, false), E = (t2, i2)=>{
    const s2 = t2.length - 1, n2 = [];
    let h2, r2 = i2 === 2 ? "<svg>" : "", d2 = v;
    for(let i3 = 0; i3 < s2; i3++){
        const s3 = t2[i3];
        let e21, u3, c2 = -1, g2 = 0;
        for(; g2 < s3.length && (d2.lastIndex = g2, u3 = d2.exec(s3), u3 !== null);)g2 = d2.lastIndex, d2 === v ? u3[1] === "!--" ? d2 = a1 : u3[1] !== void 0 ? d2 = f : u3[2] !== void 0 ? ($.test(u3[2]) && (h2 = RegExp("</" + u3[2], "g")), d2 = _) : u3[3] !== void 0 && (d2 = _) : d2 === _ ? u3[0] === ">" ? (d2 = h2 != null ? h2 : v, c2 = -1) : u3[1] === void 0 ? c2 = -2 : (c2 = d2.lastIndex - u3[2].length, e21 = u3[1], d2 = u3[3] === void 0 ? _ : u3[3] === '"' ? p : m) : d2 === p || d2 === m ? d2 = _ : d2 === a1 || d2 === f ? d2 = v : (d2 = _, h2 = void 0);
        const y2 = d2 === _ && t2[i3 + 1].startsWith("/>") ? " " : "";
        r2 += d2 === v ? s3 + l1 : c2 >= 0 ? (n2.push(e21), s3.slice(0, c2) + "$lit$" + s3.slice(c2) + o2 + y2) : s3 + o2 + (c2 === -2 ? (n2.push(void 0), i3) : y2);
    }
    const u2 = r2 + (t2[s2] || "<?>") + (i2 === 2 ? "</svg>" : "");
    if (!Array.isArray(t2) || !t2.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return [
        e2 !== void 0 ? e2.createHTML(u2) : u2,
        n2
    ];
};
class C {
    constructor({ strings: t2 , _$litType$: i2  }, e2){
        let l2;
        this.parts = [];
        let h2 = 0, d2 = 0;
        const u2 = t2.length - 1, c2 = this.parts, [v2, a2] = E(t2, i2);
        if (this.el = C.createElement(v2, e2), A.currentNode = this.el.content, i2 === 2) {
            const t3 = this.el.content, i3 = t3.firstChild;
            i3.remove(), t3.append(...i3.childNodes);
        }
        for(; (l2 = A.nextNode()) !== null && c2.length < u2;){
            if (l2.nodeType === 1) {
                if (l2.hasAttributes()) {
                    const t31 = [];
                    for (const i31 of l2.getAttributeNames())if (i31.endsWith("$lit$") || i31.startsWith(o2)) {
                        const s21 = a2[d2++];
                        if (t31.push(i31), s21 !== void 0) {
                            const t4 = l2.getAttribute(s21.toLowerCase() + "$lit$").split(o2), i4 = /([.?@])?(.*)/.exec(s21);
                            c2.push({
                                type: 1,
                                index: h2,
                                name: i4[2],
                                strings: t4,
                                ctor: i4[1] === "." ? M : i4[1] === "?" ? k : i4[1] === "@" ? H : S1
                            });
                        } else c2.push({
                            type: 6,
                            index: h2
                        });
                    }
                    for (const i32 of t31)l2.removeAttribute(i32);
                }
                if ($.test(l2.tagName)) {
                    const t32 = l2.textContent.split(o2), i33 = t32.length - 1;
                    if (i33 > 0) {
                        l2.textContent = s2 ? s2.emptyScript : "";
                        for(let s211 = 0; s211 < i33; s211++)l2.append(t32[s211], r2()), A.nextNode(), c2.push({
                            type: 2,
                            index: ++h2
                        });
                        l2.append(t32[i33], r2());
                    }
                }
            } else if (l2.nodeType === 8) if (l2.data === n2) c2.push({
                type: 2,
                index: h2
            });
            else {
                let t33 = -1;
                for(; (t33 = l2.data.indexOf(o2, t33 + 1)) !== -1;)c2.push({
                    type: 7,
                    index: h2
                }), t33 += o2.length - 1;
            }
            h2++;
        }
    }
    static createElement(t2, i2) {
        const s2 = h1.createElement("template");
        return s2.innerHTML = t2, s2;
    }
}
function P(t2, i2, s2 = t2, e2) {
    var o2, n2, l2, h2;
    if (i2 === x) return i2;
    let r2 = e2 !== void 0 ? (o2 = s2._$Co) === null || o2 === void 0 ? void 0 : o2[e2] : s2._$Cl;
    const u2 = d1(i2) ? void 0 : i2._$litDirective$;
    return (r2 == null ? void 0 : r2.constructor) !== u2 && ((n2 = r2 == null ? void 0 : r2._$AO) === null || n2 === void 0 || n2.call(r2, false), u2 === void 0 ? r2 = void 0 : (r2 = new u2(t2), r2._$AT(t2, s2, e2)), e2 !== void 0 ? ((l2 = (h2 = s2)._$Co) !== null && l2 !== void 0 ? l2 : h2._$Co = [])[e2] = r2 : s2._$Cl = r2), r2 !== void 0 && (i2 = P(t2, r2._$AS(t2, i2.values), r2, e2)), i2;
}
class V {
    constructor(t2, i2){
        this.u = [], this._$AN = void 0, this._$AD = t2, this._$AM = i2;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    v(t2) {
        var i2;
        const { el: { content: s2  } , parts: e2  } = this._$AD, o2 = ((i2 = t2 == null ? void 0 : t2.creationScope) !== null && i2 !== void 0 ? i2 : h1).importNode(s2, true);
        A.currentNode = o2;
        let n2 = A.nextNode(), l2 = 0, r2 = 0, d2 = e2[0];
        for(; d2 !== void 0;){
            if (l2 === d2.index) {
                let i3;
                d2.type === 2 ? i3 = new N(n2, n2.nextSibling, this, t2) : d2.type === 1 ? i3 = new d2.ctor(n2, d2.name, d2.strings, this, t2) : d2.type === 6 && (i3 = new I(n2, this, t2)), this.u.push(i3), d2 = e2[++r2];
            }
            l2 !== (d2 == null ? void 0 : d2.index) && (n2 = A.nextNode(), l2++);
        }
        return o2;
    }
    p(t2) {
        let i2 = 0;
        for (const s2 of this.u)s2 !== void 0 && (s2.strings !== void 0 ? (s2._$AI(t2, s2, i2), i2 += s2.strings.length - 2) : s2._$AI(t2[i2])), i2++;
    }
}
class N {
    constructor(t2, i2, s2, e2){
        var o2;
        this.type = 2, this._$AH = b, this._$AN = void 0, this._$AA = t2, this._$AB = i2, this._$AM = s2, this.options = e2, this._$Cm = (o2 = e2 == null ? void 0 : e2.isConnected) === null || o2 === void 0 || o2;
    }
    get _$AU() {
        var t2, i2;
        return (i2 = (t2 = this._$AM) === null || t2 === void 0 ? void 0 : t2._$AU) !== null && i2 !== void 0 ? i2 : this._$Cm;
    }
    get parentNode() {
        let t2 = this._$AA.parentNode;
        const i2 = this._$AM;
        return i2 !== void 0 && t2.nodeType === 11 && (t2 = i2.parentNode), t2;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t2, i2 = this) {
        t2 = P(this, t2, i2), d1(t2) ? t2 === b || t2 == null || t2 === "" ? (this._$AH !== b && this._$AR(), this._$AH = b) : t2 !== this._$AH && t2 !== x && this.g(t2) : t2._$litType$ !== void 0 ? this.$(t2) : t2.nodeType !== void 0 ? this.T(t2) : c1(t2) ? this.k(t2) : this.g(t2);
    }
    O(t2, i2 = this._$AB) {
        return this._$AA.parentNode.insertBefore(t2, i2);
    }
    T(t2) {
        this._$AH !== t2 && (this._$AR(), this._$AH = this.O(t2));
    }
    g(t2) {
        this._$AH !== b && d1(this._$AH) ? this._$AA.nextSibling.data = t2 : this.T(h1.createTextNode(t2)), this._$AH = t2;
    }
    $(t2) {
        var i2;
        const { values: s2 , _$litType$: e2  } = t2, o2 = typeof e2 == "number" ? this._$AC(t2) : (e2.el === void 0 && (e2.el = C.createElement(e2.h, this.options)), e2);
        if (((i2 = this._$AH) === null || i2 === void 0 ? void 0 : i2._$AD) === o2) this._$AH.p(s2);
        else {
            const t3 = new V(o2, this), i3 = t3.v(this.options);
            t3.p(s2), this.T(i3), this._$AH = t3;
        }
    }
    _$AC(t2) {
        let i2 = T.get(t2.strings);
        return i2 === void 0 && T.set(t2.strings, i2 = new C(t2)), i2;
    }
    k(t2) {
        u(this._$AH) || (this._$AH = [], this._$AR());
        const i2 = this._$AH;
        let s2, e2 = 0;
        for (const o2 of t2)e2 === i2.length ? i2.push(s2 = new N(this.O(r2()), this.O(r2()), this, this.options)) : s2 = i2[e2], s2._$AI(o2), e2++;
        e2 < i2.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i2.length = e2);
    }
    _$AR(t2 = this._$AA.nextSibling, i2) {
        var s2;
        for((s2 = this._$AP) === null || s2 === void 0 || s2.call(this, false, true, i2); t2 && t2 !== this._$AB;){
            const i3 = t2.nextSibling;
            t2.remove(), t2 = i3;
        }
    }
    setConnected(t2) {
        var i2;
        this._$AM === void 0 && (this._$Cm = t2, (i2 = this._$AP) === null || i2 === void 0 || i2.call(this, t2));
    }
}
class S1 {
    constructor(t2, i2, s2, e2, o2){
        this.type = 1, this._$AH = b, this._$AN = void 0, this.element = t2, this.name = i2, this._$AM = e2, this.options = o2, s2.length > 2 || s2[0] !== "" || s2[1] !== "" ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = b;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t2, i2 = this, s2, e2) {
        const o2 = this.strings;
        let n2 = false;
        if (o2 === void 0) t2 = P(this, t2, i2, 0), n2 = !d1(t2) || t2 !== this._$AH && t2 !== x, n2 && (this._$AH = t2);
        else {
            const e3 = t2;
            let l2, h2;
            for(t2 = o2[0], l2 = 0; l2 < o2.length - 1; l2++)h2 = P(this, e3[s2 + l2], i2, l2), h2 === x && (h2 = this._$AH[l2]), n2 || (n2 = !d1(h2) || h2 !== this._$AH[l2]), h2 === b ? t2 = b : t2 !== b && (t2 += (h2 != null ? h2 : "") + o2[l2 + 1]), this._$AH[l2] = h2;
        }
        n2 && !e2 && this.j(t2);
    }
    j(t2) {
        t2 === b ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 != null ? t2 : "");
    }
}
class M extends S1 {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t2) {
        this.element[this.name] = t2 === b ? void 0 : t2;
    }
}
const R = s2 ? s2.emptyScript : "";
class k extends S1 {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t2) {
        t2 && t2 !== b ? this.element.setAttribute(this.name, R) : this.element.removeAttribute(this.name);
    }
}
class H extends S1 {
    constructor(t2, i2, s2, e2, o2){
        super(t2, i2, s2, e2, o2), this.type = 5;
    }
    _$AI(t2, i2 = this) {
        var s2;
        if ((t2 = (s2 = P(this, t2, i2, 0)) !== null && s2 !== void 0 ? s2 : b) === x) return;
        const e2 = this._$AH, o2 = t2 === b && e2 !== b || t2.capture !== e2.capture || t2.once !== e2.once || t2.passive !== e2.passive, n2 = t2 !== b && (e2 === b || o2);
        o2 && this.element.removeEventListener(this.name, this, e2), n2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
    }
    handleEvent(t2) {
        var i2, s2;
        typeof this._$AH == "function" ? this._$AH.call((s2 = (i2 = this.options) === null || i2 === void 0 ? void 0 : i2.host) !== null && s2 !== void 0 ? s2 : this.element, t2) : this._$AH.handleEvent(t2);
    }
}
class I {
    constructor(t2, i2, s2){
        this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i2, this.options = s2;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t2) {
        P(this, t2);
    }
}
const z = i.litHtmlPolyfillSupport;
z == null || z(C, N), ((t1 = i.litHtmlVersions) !== null && t1 !== void 0 ? t1 : i.litHtmlVersions = []).push("2.4.0");
const t2 = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, e3 = Symbol(), n3 = new WeakMap();
class s3 {
    constructor(t2, n2, s3){
        if (this._$cssResult$ = true, s3 !== e3) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t2, this.t = n2;
    }
    get styleSheet() {
        let e2 = this.o;
        const s3 = this.t;
        if (t2 && e2 === void 0) {
            const t21 = s3 !== void 0 && s3.length === 1;
            t21 && (e2 = n3.get(s3)), e2 === void 0 && ((this.o = e2 = new CSSStyleSheet()).replaceSync(this.cssText), t21 && n3.set(s3, e2));
        }
        return e2;
    }
    toString() {
        return this.cssText;
    }
}
const o3 = (t2)=>new s3(typeof t2 == "string" ? t2 : t2 + "", void 0, e3), i1 = (e2, n2)=>{
    t2 ? e2.adoptedStyleSheets = n2.map((t2)=>t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet) : n2.forEach((t2)=>{
        const n3 = document.createElement("style"), s2 = window.litNonce;
        s2 !== void 0 && n3.setAttribute("nonce", s2), n3.textContent = t2.cssText, e2.appendChild(n3);
    });
}, S2 = t2 ? (t2)=>t2 : (t2)=>t2 instanceof CSSStyleSheet ? ((t3)=>{
        let e2 = "";
        for (const n2 of t3.cssRules)e2 += n2.cssText;
        return o3(e2);
    })(t2) : t2;
var s4;
const e4 = window.trustedTypes, r3 = e4 ? e4.emptyScript : "", h2 = window.reactiveElementPolyfillSupport, o4 = {
    toAttribute (t, i2) {
        switch(i2){
            case Boolean:
                t = t ? r3 : null;
                break;
            case Object:
            case Array:
                t = t == null ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, i2) {
        let s2 = t;
        switch(i2){
            case Boolean:
                s2 = t !== null;
                break;
            case Number:
                s2 = t === null ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    s2 = JSON.parse(t);
                } catch (t2) {
                    s2 = null;
                }
        }
        return s2;
    }
}, n4 = (t, i2)=>i2 !== t && (i2 == i2 || t == t), l2 = {
    attribute: true,
    type: String,
    converter: o4,
    reflect: false,
    hasChanged: n4
};
class a2 extends HTMLElement {
    constructor(){
        super(), this._$Ei = new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this.u();
    }
    static addInitializer(t) {
        var i2;
        (i2 = this.h) !== null && i2 !== void 0 || (this.h = []), this.h.push(t);
    }
    static get observedAttributes() {
        this.finalize();
        const t = [];
        return this.elementProperties.forEach((i2, s2)=>{
            const e2 = this._$Ep(s2, i2);
            e2 !== void 0 && (this._$Ev.set(e2, s2), t.push(e2));
        }), t;
    }
    static createProperty(t, i2 = l2) {
        if (i2.state && (i2.attribute = false), this.finalize(), this.elementProperties.set(t, i2), !i2.noAccessor && !this.prototype.hasOwnProperty(t)) {
            const s2 = typeof t == "symbol" ? Symbol() : "__" + t, e2 = this.getPropertyDescriptor(t, s2, i2);
            e2 !== void 0 && Object.defineProperty(this.prototype, t, e2);
        }
    }
    static getPropertyDescriptor(t, i2, s2) {
        return {
            get () {
                return this[i2];
            },
            set (e2) {
                const r2 = this[t];
                this[i2] = e2, this.requestUpdate(t, r2, s2);
            },
            configurable: true,
            enumerable: true
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) || l2;
    }
    static finalize() {
        if (this.hasOwnProperty("finalized")) return false;
        this.finalized = true;
        const t = Object.getPrototypeOf(this);
        if (t.finalize(), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map(), this.hasOwnProperty("properties")) {
            const t2 = this.properties, i2 = [
                ...Object.getOwnPropertyNames(t2),
                ...Object.getOwnPropertySymbols(t2)
            ];
            for (const s2 of i2)this.createProperty(s2, t2[s2]);
        }
        return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(i2) {
        const s2 = [];
        if (Array.isArray(i2)) {
            const e2 = new Set(i2.flat(1 / 0).reverse());
            for (const i3 of e2)s2.unshift(S2(i3));
        } else i2 !== void 0 && s2.push(S2(i2));
        return s2;
    }
    static _$Ep(t, i2) {
        const s2 = i2.attribute;
        return s2 === false ? void 0 : typeof s2 == "string" ? s2 : typeof t == "string" ? t.toLowerCase() : void 0;
    }
    u() {
        var t;
        this._$E_ = new Promise((t2)=>this.enableUpdating = t2), this._$AL = new Map(), this._$Eg(), this.requestUpdate(), (t = this.constructor.h) === null || t === void 0 || t.forEach((t2)=>t2(this));
    }
    addController(t) {
        var i2, s2;
        ((i2 = this._$ES) !== null && i2 !== void 0 ? i2 : this._$ES = []).push(t), this.renderRoot !== void 0 && this.isConnected && ((s2 = t.hostConnected) === null || s2 === void 0 || s2.call(t));
    }
    removeController(t) {
        var i2;
        (i2 = this._$ES) === null || i2 === void 0 || i2.splice(this._$ES.indexOf(t) >>> 0, 1);
    }
    _$Eg() {
        this.constructor.elementProperties.forEach((t, i2)=>{
            this.hasOwnProperty(i2) && (this._$Ei.set(i2, this[i2]), delete this[i2]);
        });
    }
    createRenderRoot() {
        var t;
        const s2 = (t = this.shadowRoot) !== null && t !== void 0 ? t : this.attachShadow(this.constructor.shadowRootOptions);
        return i1(s2, this.constructor.elementStyles), s2;
    }
    connectedCallback() {
        var t;
        this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t = this._$ES) === null || t === void 0 || t.forEach((t2)=>{
            var i2;
            return (i2 = t2.hostConnected) === null || i2 === void 0 ? void 0 : i2.call(t2);
        });
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        var t;
        (t = this._$ES) === null || t === void 0 || t.forEach((t2)=>{
            var i2;
            return (i2 = t2.hostDisconnected) === null || i2 === void 0 ? void 0 : i2.call(t2);
        });
    }
    attributeChangedCallback(t, i2, s2) {
        this._$AK(t, s2);
    }
    _$EO(t, i2, s2 = l2) {
        var e2, r2;
        const h2 = this.constructor._$Ep(t, s2);
        if (h2 !== void 0 && s2.reflect === true) {
            const n2 = ((r2 = (e2 = s2.converter) === null || e2 === void 0 ? void 0 : e2.toAttribute) !== null && r2 !== void 0 ? r2 : o4.toAttribute)(i2, s2.type);
            this._$El = t, n2 == null ? this.removeAttribute(h2) : this.setAttribute(h2, n2), this._$El = null;
        }
    }
    _$AK(t, i2) {
        var s2, e2;
        const r2 = this.constructor, h2 = r2._$Ev.get(t);
        if (h2 !== void 0 && this._$El !== h2) {
            const t2 = r2.getPropertyOptions(h2), n2 = t2.converter, l2 = (e2 = (s2 = n2 == null ? void 0 : n2.fromAttribute) !== null && s2 !== void 0 ? s2 : typeof n2 == "function" ? n2 : null) !== null && e2 !== void 0 ? e2 : o4.fromAttribute;
            this._$El = h2, this[h2] = l2(i2, t2.type), this._$El = null;
        }
    }
    requestUpdate(t, i2, s2) {
        let e2 = true;
        t !== void 0 && (((s2 = s2 || this.constructor.getPropertyOptions(t)).hasChanged || n4)(this[t], i2) ? (this._$AL.has(t) || this._$AL.set(t, i2), s2.reflect === true && this._$El !== t && (this._$EC === void 0 && (this._$EC = new Map()), this._$EC.set(t, s2))) : e2 = false), !this.isUpdatePending && e2 && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
        this.isUpdatePending = true;
        try {
            await this._$E_;
        } catch (t2) {
            Promise.reject(t2);
        }
        const t = this.scheduleUpdate();
        return t != null && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        var t;
        if (!this.isUpdatePending) return;
        this.hasUpdated, this._$Ei && (this._$Ei.forEach((t2, i3)=>this[i3] = t2), this._$Ei = void 0);
        let i2 = false;
        const s2 = this._$AL;
        try {
            i2 = this.shouldUpdate(s2), i2 ? (this.willUpdate(s2), (t = this._$ES) === null || t === void 0 || t.forEach((t2)=>{
                var i3;
                return (i3 = t2.hostUpdate) === null || i3 === void 0 ? void 0 : i3.call(t2);
            }), this.update(s2)) : this._$Ek();
        } catch (t2) {
            throw i2 = false, this._$Ek(), t2;
        }
        i2 && this._$AE(s2);
    }
    willUpdate(t) {}
    _$AE(t) {
        var i2;
        (i2 = this._$ES) === null || i2 === void 0 || i2.forEach((t2)=>{
            var i3;
            return (i3 = t2.hostUpdated) === null || i3 === void 0 ? void 0 : i3.call(t2);
        }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t)), this.updated(t);
    }
    _$Ek() {
        this._$AL = new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$E_;
    }
    shouldUpdate(t) {
        return true;
    }
    update(t) {
        this._$EC !== void 0 && (this._$EC.forEach((t2, i2)=>this._$EO(i2, this[i2], t2)), this._$EC = void 0), this._$Ek();
    }
    updated(t) {}
    firstUpdated(t) {}
}
a2.finalized = true, a2.elementProperties = new Map(), a2.elementStyles = [], a2.shadowRootOptions = {
    mode: "open"
}, h2 == null || h2({
    ReactiveElement: a2
}), ((s4 = globalThis.reactiveElementVersions) !== null && s4 !== void 0 ? s4 : globalThis.reactiveElementVersions = []).push("1.3.4");
var t3;
const i2 = globalThis.trustedTypes, s5 = i2 ? i2.createPolicy("lit-html", {
    createHTML: (t2)=>t2
}) : void 0, e5 = `lit$${(Math.random() + "").slice(9)}$`, o5 = "?" + e5, n5 = `<${o5}>`, l3 = document, h3 = (t2 = "")=>l3.createComment(t2), r4 = (t2)=>t2 === null || typeof t2 != "object" && typeof t2 != "function", d2 = Array.isArray, u1 = (t2)=>d2(t2) || typeof (t2 == null ? void 0 : t2[Symbol.iterator]) == "function", c2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v1 = /-->/g, a3 = />/g, f1 = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), _1 = /'/g, g1 = /"/g, m1 = /^(?:script|style|textarea|title)$/i, p1 = (t2)=>(i2, ...s2)=>({
            _$litType$: t2,
            strings: i2,
            values: s2
        }), $1 = p1(1), y1 = p1(2), b1 = Symbol.for("lit-noChange"), w1 = Symbol.for("lit-nothing"), x1 = new WeakMap(), T1 = (t2, i2, s2)=>{
    var e2, o2;
    const n2 = (e2 = s2 == null ? void 0 : s2.renderBefore) !== null && e2 !== void 0 ? e2 : i2;
    let l2 = n2._$litPart$;
    if (l2 === void 0) {
        const t3 = (o2 = s2 == null ? void 0 : s2.renderBefore) !== null && o2 !== void 0 ? o2 : null;
        n2._$litPart$ = l2 = new N1(i2.insertBefore(h3(), t3), t3, void 0, s2 != null ? s2 : {});
    }
    return l2._$AI(t2), l2;
}, A1 = l3.createTreeWalker(l3, 129, null, false), E1 = (t2, i2)=>{
    const o2 = t2.length - 1, l2 = [];
    let h2, r2 = i2 === 2 ? "<svg>" : "", d2 = c2;
    for(let i3 = 0; i3 < o2; i3++){
        const s2 = t2[i3];
        let o3, u3, p2 = -1, $2 = 0;
        for(; $2 < s2.length && (d2.lastIndex = $2, u3 = d2.exec(s2), u3 !== null);)$2 = d2.lastIndex, d2 === c2 ? u3[1] === "!--" ? d2 = v1 : u3[1] !== void 0 ? d2 = a3 : u3[2] !== void 0 ? (m1.test(u3[2]) && (h2 = RegExp("</" + u3[2], "g")), d2 = f1) : u3[3] !== void 0 && (d2 = f1) : d2 === f1 ? u3[0] === ">" ? (d2 = h2 != null ? h2 : c2, p2 = -1) : u3[1] === void 0 ? p2 = -2 : (p2 = d2.lastIndex - u3[2].length, o3 = u3[1], d2 = u3[3] === void 0 ? f1 : u3[3] === '"' ? g1 : _1) : d2 === g1 || d2 === _1 ? d2 = f1 : d2 === v1 || d2 === a3 ? d2 = c2 : (d2 = f1, h2 = void 0);
        const y2 = d2 === f1 && t2[i3 + 1].startsWith("/>") ? " " : "";
        r2 += d2 === c2 ? s2 + n5 : p2 >= 0 ? (l2.push(o3), s2.slice(0, p2) + "$lit$" + s2.slice(p2) + e5 + y2) : s2 + e5 + (p2 === -2 ? (l2.push(void 0), i3) : y2);
    }
    const u2 = r2 + (t2[o2] || "<?>") + (i2 === 2 ? "</svg>" : "");
    if (!Array.isArray(t2) || !t2.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return [
        s5 !== void 0 ? s5.createHTML(u2) : u2,
        l2
    ];
};
class C1 {
    constructor({ strings: t2 , _$litType$: s2  }, n2){
        let l2;
        this.parts = [];
        let r2 = 0, d2 = 0;
        const u2 = t2.length - 1, c2 = this.parts, [v2, a2] = E1(t2, s2);
        if (this.el = C1.createElement(v2, n2), A1.currentNode = this.el.content, s2 === 2) {
            const t3 = this.el.content, i21 = t3.firstChild;
            i21.remove(), t3.append(...i21.childNodes);
        }
        for(; (l2 = A1.nextNode()) !== null && c2.length < u2;){
            if (l2.nodeType === 1) {
                if (l2.hasAttributes()) {
                    const t31 = [];
                    for (const i211 of l2.getAttributeNames())if (i211.endsWith("$lit$") || i211.startsWith(e5)) {
                        const s3 = a2[d2++];
                        if (t31.push(i211), s3 !== void 0) {
                            const t4 = l2.getAttribute(s3.toLowerCase() + "$lit$").split(e5), i3 = /([.?@])?(.*)/.exec(s3);
                            c2.push({
                                type: 1,
                                index: r2,
                                name: i3[2],
                                strings: t4,
                                ctor: i3[1] === "." ? M1 : i3[1] === "?" ? k1 : i3[1] === "@" ? H1 : S3
                            });
                        } else c2.push({
                            type: 6,
                            index: r2
                        });
                    }
                    for (const i22 of t31)l2.removeAttribute(i22);
                }
                if (m1.test(l2.tagName)) {
                    const t32 = l2.textContent.split(e5), s31 = t32.length - 1;
                    if (s31 > 0) {
                        l2.textContent = i2 ? i2.emptyScript : "";
                        for(let i23 = 0; i23 < s31; i23++)l2.append(t32[i23], h3()), A1.nextNode(), c2.push({
                            type: 2,
                            index: ++r2
                        });
                        l2.append(t32[s31], h3());
                    }
                }
            } else if (l2.nodeType === 8) if (l2.data === o5) c2.push({
                type: 2,
                index: r2
            });
            else {
                let t33 = -1;
                for(; (t33 = l2.data.indexOf(e5, t33 + 1)) !== -1;)c2.push({
                    type: 7,
                    index: r2
                }), t33 += e5.length - 1;
            }
            r2++;
        }
    }
    static createElement(t2, i2) {
        const s2 = l3.createElement("template");
        return s2.innerHTML = t2, s2;
    }
}
function P1(t2, i2, s2 = t2, e2) {
    var o2, n2, l2, h2;
    if (i2 === b1) return i2;
    let d2 = e2 !== void 0 ? (o2 = s2._$Cl) === null || o2 === void 0 ? void 0 : o2[e2] : s2._$Cu;
    const u2 = r4(i2) ? void 0 : i2._$litDirective$;
    return (d2 == null ? void 0 : d2.constructor) !== u2 && ((n2 = d2 == null ? void 0 : d2._$AO) === null || n2 === void 0 || n2.call(d2, false), u2 === void 0 ? d2 = void 0 : (d2 = new u2(t2), d2._$AT(t2, s2, e2)), e2 !== void 0 ? ((l2 = (h2 = s2)._$Cl) !== null && l2 !== void 0 ? l2 : h2._$Cl = [])[e2] = d2 : s2._$Cu = d2), d2 !== void 0 && (i2 = P1(t2, d2._$AS(t2, i2.values), d2, e2)), i2;
}
class V1 {
    constructor(t2, i2){
        this.v = [], this._$AN = void 0, this._$AD = t2, this._$AM = i2;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    p(t2) {
        var i2;
        const { el: { content: s2  } , parts: e2  } = this._$AD, o2 = ((i2 = t2 == null ? void 0 : t2.creationScope) !== null && i2 !== void 0 ? i2 : l3).importNode(s2, true);
        A1.currentNode = o2;
        let n2 = A1.nextNode(), h2 = 0, r2 = 0, d2 = e2[0];
        for(; d2 !== void 0;){
            if (h2 === d2.index) {
                let i3;
                d2.type === 2 ? i3 = new N1(n2, n2.nextSibling, this, t2) : d2.type === 1 ? i3 = new d2.ctor(n2, d2.name, d2.strings, this, t2) : d2.type === 6 && (i3 = new I1(n2, this, t2)), this.v.push(i3), d2 = e2[++r2];
            }
            h2 !== (d2 == null ? void 0 : d2.index) && (n2 = A1.nextNode(), h2++);
        }
        return o2;
    }
    m(t2) {
        let i2 = 0;
        for (const s2 of this.v)s2 !== void 0 && (s2.strings !== void 0 ? (s2._$AI(t2, s2, i2), i2 += s2.strings.length - 2) : s2._$AI(t2[i2])), i2++;
    }
}
class N1 {
    constructor(t2, i2, s2, e2){
        var o2;
        this.type = 2, this._$AH = w1, this._$AN = void 0, this._$AA = t2, this._$AB = i2, this._$AM = s2, this.options = e2, this._$C_ = (o2 = e2 == null ? void 0 : e2.isConnected) === null || o2 === void 0 || o2;
    }
    get _$AU() {
        var t2, i2;
        return (i2 = (t2 = this._$AM) === null || t2 === void 0 ? void 0 : t2._$AU) !== null && i2 !== void 0 ? i2 : this._$C_;
    }
    get parentNode() {
        let t2 = this._$AA.parentNode;
        const i2 = this._$AM;
        return i2 !== void 0 && t2.nodeType === 11 && (t2 = i2.parentNode), t2;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t2, i2 = this) {
        t2 = P1(this, t2, i2), r4(t2) ? t2 === w1 || t2 == null || t2 === "" ? (this._$AH !== w1 && this._$AR(), this._$AH = w1) : t2 !== this._$AH && t2 !== b1 && this.T(t2) : t2._$litType$ !== void 0 ? this.$(t2) : t2.nodeType !== void 0 ? this.k(t2) : u1(t2) ? this.S(t2) : this.T(t2);
    }
    j(t2, i2 = this._$AB) {
        return this._$AA.parentNode.insertBefore(t2, i2);
    }
    k(t2) {
        this._$AH !== t2 && (this._$AR(), this._$AH = this.j(t2));
    }
    T(t2) {
        this._$AH !== w1 && r4(this._$AH) ? this._$AA.nextSibling.data = t2 : this.k(l3.createTextNode(t2)), this._$AH = t2;
    }
    $(t2) {
        var i2;
        const { values: s2 , _$litType$: e2  } = t2, o2 = typeof e2 == "number" ? this._$AC(t2) : (e2.el === void 0 && (e2.el = C1.createElement(e2.h, this.options)), e2);
        if (((i2 = this._$AH) === null || i2 === void 0 ? void 0 : i2._$AD) === o2) this._$AH.m(s2);
        else {
            const t3 = new V1(o2, this), i3 = t3.p(this.options);
            t3.m(s2), this.k(i3), this._$AH = t3;
        }
    }
    _$AC(t2) {
        let i2 = x1.get(t2.strings);
        return i2 === void 0 && x1.set(t2.strings, i2 = new C1(t2)), i2;
    }
    S(t2) {
        d2(this._$AH) || (this._$AH = [], this._$AR());
        const i2 = this._$AH;
        let s2, e2 = 0;
        for (const o2 of t2)e2 === i2.length ? i2.push(s2 = new N1(this.j(h3()), this.j(h3()), this, this.options)) : s2 = i2[e2], s2._$AI(o2), e2++;
        e2 < i2.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i2.length = e2);
    }
    _$AR(t2 = this._$AA.nextSibling, i2) {
        var s2;
        for((s2 = this._$AP) === null || s2 === void 0 || s2.call(this, false, true, i2); t2 && t2 !== this._$AB;){
            const i3 = t2.nextSibling;
            t2.remove(), t2 = i3;
        }
    }
    setConnected(t2) {
        var i2;
        this._$AM === void 0 && (this._$C_ = t2, (i2 = this._$AP) === null || i2 === void 0 || i2.call(this, t2));
    }
}
class S3 {
    constructor(t2, i2, s2, e2, o2){
        this.type = 1, this._$AH = w1, this._$AN = void 0, this.element = t2, this.name = i2, this._$AM = e2, this.options = o2, s2.length > 2 || s2[0] !== "" || s2[1] !== "" ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = w1;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t2, i2 = this, s2, e2) {
        const o2 = this.strings;
        let n2 = false;
        if (o2 === void 0) t2 = P1(this, t2, i2, 0), n2 = !r4(t2) || t2 !== this._$AH && t2 !== b1, n2 && (this._$AH = t2);
        else {
            const e3 = t2;
            let l2, h2;
            for(t2 = o2[0], l2 = 0; l2 < o2.length - 1; l2++)h2 = P1(this, e3[s2 + l2], i2, l2), h2 === b1 && (h2 = this._$AH[l2]), n2 || (n2 = !r4(h2) || h2 !== this._$AH[l2]), h2 === w1 ? t2 = w1 : t2 !== w1 && (t2 += (h2 != null ? h2 : "") + o2[l2 + 1]), this._$AH[l2] = h2;
        }
        n2 && !e2 && this.P(t2);
    }
    P(t2) {
        t2 === w1 ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 != null ? t2 : "");
    }
}
class M1 extends S3 {
    constructor(){
        super(...arguments), this.type = 3;
    }
    P(t2) {
        this.element[this.name] = t2 === w1 ? void 0 : t2;
    }
}
const R1 = i2 ? i2.emptyScript : "";
class k1 extends S3 {
    constructor(){
        super(...arguments), this.type = 4;
    }
    P(t2) {
        t2 && t2 !== w1 ? this.element.setAttribute(this.name, R1) : this.element.removeAttribute(this.name);
    }
}
class H1 extends S3 {
    constructor(t2, i2, s2, e2, o2){
        super(t2, i2, s2, e2, o2), this.type = 5;
    }
    _$AI(t2, i2 = this) {
        var s2;
        if ((t2 = (s2 = P1(this, t2, i2, 0)) !== null && s2 !== void 0 ? s2 : w1) === b1) return;
        const e2 = this._$AH, o2 = t2 === w1 && e2 !== w1 || t2.capture !== e2.capture || t2.once !== e2.once || t2.passive !== e2.passive, n2 = t2 !== w1 && (e2 === w1 || o2);
        o2 && this.element.removeEventListener(this.name, this, e2), n2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
    }
    handleEvent(t2) {
        var i2, s2;
        typeof this._$AH == "function" ? this._$AH.call((s2 = (i2 = this.options) === null || i2 === void 0 ? void 0 : i2.host) !== null && s2 !== void 0 ? s2 : this.element, t2) : this._$AH.handleEvent(t2);
    }
}
class I1 {
    constructor(t2, i2, s2){
        this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i2, this.options = s2;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t2) {
        P1(this, t2);
    }
}
const z1 = window.litHtmlPolyfillSupport;
z1 == null || z1(C1, N1), ((t3 = globalThis.litHtmlVersions) !== null && t3 !== void 0 ? t3 : globalThis.litHtmlVersions = []).push("2.2.7");
var l4, o6;
class s6 extends a2 {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        var t, e;
        const i = super.createRenderRoot();
        return (t = (e = this.renderOptions).renderBefore) !== null && t !== void 0 || (e.renderBefore = i.firstChild), i;
    }
    update(t) {
        const i = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = T1(i, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        var t;
        super.connectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(true);
    }
    disconnectedCallback() {
        var t;
        super.disconnectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(false);
    }
    render() {
        return b1;
    }
}
s6.finalized = true, s6._$litElement$ = true, (l4 = globalThis.litElementHydrateSupport) === null || l4 === void 0 || l4.call(globalThis, {
    LitElement: s6
});
const n6 = globalThis.litElementPolyfillSupport;
n6 == null || n6({
    LitElement: s6
});
((o6 = globalThis.litElementVersions) !== null && o6 !== void 0 ? o6 : globalThis.litElementVersions = []).push("3.2.2");
const e6 = (e2)=>(n)=>typeof n == "function" ? ((e3, n2)=>(customElements.define(e3, n2), n2))(e2, n) : ((e3, n2)=>{
            const { kind: t , elements: s  } = n2;
            return {
                kind: t,
                elements: s,
                finisher (n3) {
                    customElements.define(e3, n3);
                }
            };
        })(e2, n);
const i3 = (i2, e2)=>e2.kind === "method" && e2.descriptor && !("value" in e2.descriptor) ? {
        ...e2,
        finisher (n) {
            n.createProperty(e2.key, i2);
        }
    } : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        originalKey: e2.key,
        initializer () {
            typeof e2.initializer == "function" && (this[e2.key] = e2.initializer.call(this));
        },
        finisher (n) {
            n.createProperty(e2.key, i2);
        }
    };
function e7(e2) {
    return (n, t)=>t !== void 0 ? ((i2, e3, n2)=>{
            e3.constructor.createProperty(n2, i2);
        })(e2, n, t) : i3(e2, n);
}
var n7;
((n7 = window.HTMLSlotElement) === null || n7 === void 0 ? void 0 : n7.prototype.assignedElements) != null ? (o2, n2)=>o2.assignedElements(n2) : (o2, n2)=>o2.assignedNodes(n2).filter((o3)=>o3.nodeType === Node.ELEMENT_NODE);
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let MyElement = class MyElement extends s6 {
    status = "";
    render() {
        return $1` <p>Basic Lit behavior works.</p>
      <p>Click this text to test reactive properties in external events.</p>
      <p>
        Once clicked, this text -> [<b>${this.status}</b>] will be updated.
      </p>`;
    }
};
__decorate([
    e7()
], MyElement.prototype, "status", void 0);
MyElement = __decorate([
    e6("my-element")
], MyElement);
const ele = document.querySelector("my-element");
ele.addEventListener("click", ()=>{
    console.log(`my-element was clicked, the status will be changed next.  current status: [${ele.status}]`);
    ele.status = "Clicked!!!";
    console.log(`my-element's status has been changed.  current status: [${ele.status}]`);
});
ele.status = "waiting ...";
var __decorate1 = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ButtonTest = class ButtonTest extends s6 {
    constructor(){
        super();
        this.count = 0;
    }
    _increment(e) {
        console.log("this.count increment", this.count);
        this.count++;
    }
    render() {
        console.log("this.count render", this.count);
        return $1`
      <button @click="${this._increment}">Click Me!</button>
      <p>Click count: ${this.count}</p>
    `;
    }
};
__decorate1([
    e7({
        type: Number
    })
], ButtonTest.prototype, "count", void 0);
ButtonTest = __decorate1([
    e6("button-test")
], ButtonTest);
