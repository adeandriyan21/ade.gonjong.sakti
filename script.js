let WA = "628123456789";

function R(seed) { let s = seed * 9301 + 49297; return () => { s = (s * 9301 + 49297) % 233280; return s / 233280 } }
function grad(id, a, b) { return `<radialGradient id="${id}" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></radialGradient>` }
function chunk(x, y, rx, ry, rot, fill) { return `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${rot.toFixed(0)})"><ellipse rx="${rx.toFixed(1)}" ry="${ry.toFixed(1)}" fill="${fill}"/><ellipse cx="${(-rx * .25).toFixed(1)}" cy="${(-ry * .4).toFixed(1)}" rx="${(rx * .5).toFixed(1)}" ry="${(ry * .22).toFixed(1)}" fill="#fff" opacity=".2"/></g>` }
function scatter(n, cx, cy, spr, rx, ry, fill, seed, jit = .4) { const r = R(seed); let o = ""; for (let i = 0; i < n; i++) { const a = r() * 6.283, d = Math.sqrt(r()) * spr; o += chunk(cx + Math.cos(a) * d, cy + Math.sin(a) * d * .85, rx * (1 - jit / 2 + r() * jit), ry * (1 - jit / 2 + r() * jit), r() * 180, fill) } return o }
function piring(p, inner, defs) {
    const idn = +p.slice(1), kn = !!FOOD[idn], tunggal = [5, 19, 24, 104, 130].includes(idn), sam = [9, 12, 106, 108, 121, 129].includes(idn);
    const T = (tr, sc) => `<g filter="url(#${p}s2)" transform="translate(100 102) ${tr} scale(${sc}) translate(-100 -102)">${inner}</g>`;
    const lap = !kn ? T("", 1.2) : sam ? T("", 1.28) : tunggal ? T("translate(-16 14) rotate(-30)", .95) + T("translate(18 -14) rotate(25)", .9) + T("", 1.05) : T("rotate(251)", 1.06) + T("rotate(137)", 1.14) + T("", 1.04);
    return `<defs><radialGradient id="${p}pl" cx=".4" cy=".35" r=".85"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#e9e2d3"/></radialGradient><filter id="${p}sh" x="-20%" y="-20%" width="140%" height="145%"><feDropShadow dx="0" dy="7" stdDeviation="6" flood-opacity=".5"/></filter><filter id="${p}b"><feGaussianBlur stdDeviation="4"/></filter><filter id="${p}s2" x="-10%" y="-10%" width="120%" height="120%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity=".3"/></filter><clipPath id="${p}cp"><circle cx="100" cy="100" r="74"/></clipPath>${defs}</defs><circle cx="100" cy="100" r="88" fill="url(#${p}pl)" filter="url(#${p}sh)"/><circle cx="100" cy="100" r="68" fill="none" stroke="#d6cdbb" stroke-width="2"/><circle cx="100" cy="100" r="66" fill="#fcfaf4" opacity=".7"/><g clip-path="url(#${p}cp)">${lap}</g>`
}
const kuah = (p, rx = 58, ry = 50) => `<ellipse cx="100" cy="104" rx="${rx}" ry="${ry}" fill="url(#${p}k)" filter="url(#${p}b)"/><ellipse cx="100" cy="102" rx="${rx - 6}" ry="${ry - 6}" fill="url(#${p}k)"/>`;
const minyak = (p, n, c, s) => scatter(n, 100, 102, 46, 3.2, 2.4, c, s, .8);
function telur(p, x, y, rot) { return `<g transform="translate(${x} ${y}) rotate(${rot})"><ellipse rx="21" ry="27" fill="#fffaf0"/><ellipse rx="18" ry="24" fill="url(#${p}r)"/><ellipse cy="-2" rx="9" ry="9" fill="#f2b21c"/><ellipse cy="-2" rx="9" ry="9" fill="#d02b1a" opacity=".3"/><ellipse cx="-3" cy="-5" rx="3" ry="2" fill="#fff" opacity=".5"/></g>` }
function gelas(p, liq, top, extra, atas = "") {
    const g = "M58 40 L142 40 L132 172 Q100 182 68 172Z";
    return `<defs><linearGradient id="${p}l" x1="0" x2="1"><stop offset="0" stop-color="${liq}"/><stop offset=".5" stop-color="${top}"/><stop offset="1" stop-color="${liq}"/></linearGradient><linearGradient id="${p}g" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset=".3" stop-color="#fff" stop-opacity=".05"/><stop offset="1" stop-color="#fff" stop-opacity=".3"/></linearGradient><filter id="${p}sh"><feDropShadow dx="0" dy="8" stdDeviation="6" flood-opacity=".5"/></filter></defs><ellipse cx="100" cy="176" rx="52" ry="9" fill="#000" opacity=".35"/><path d="${g}" fill="url(#${p}l)" filter="url(#${p}sh)"/>${extra}<path d="${g}" fill="url(#${p}g)" stroke="#fff" stroke-opacity=".5"/><ellipse cx="100" cy="40" rx="42" ry="7" fill="${top}" stroke="#fff" stroke-opacity=".6"/>${atas}`
}
function krim(p, a, b, saus, sprinkle) {
    const sc = (cx, cy, r) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#${p}s)"/><ellipse cx="${cx - r * .3}" cy="${cy - r * .4}" rx="${r * .38}" ry="${r * .2}" fill="#fff" opacity=".35"/>`;
    return `<defs>${grad(p + "s", a, b)}<linearGradient id="${p}c" x1="0" x2="1"><stop offset="0" stop-color="#f1ebdf"/><stop offset=".5" stop-color="#fff"/><stop offset="1" stop-color="#d6cfc0"/></linearGradient><filter id="${p}sh"><feDropShadow dx="0" dy="8" stdDeviation="6" flood-opacity=".5"/></filter></defs>
  <ellipse cx="100" cy="180" rx="52" ry="8" fill="#000" opacity=".35"/>
  <g filter="url(#${p}sh)"><path d="M50 116L150 116Q148 152 120 162L120 172L136 178L64 178L80 172L80 162Q52 152 50 116Z" fill="url(#${p}c)"/></g>
  <ellipse cx="100" cy="116" rx="50" ry="9" fill="#e6dfd0"/>
  ${sc(74, 104, 26)}${sc(126, 104, 26)}${sc(100, 76, 30)}
  <path d="M70 72Q100 54 130 72L130 82Q124 100 117 84Q111 104 104 86Q98 96 92 84Q86 100 80 84Q74 90 70 82Z" fill="${saus}"/>
  ${scatter(sprinkle ? 18 : 0, 100, 84, 34, 3.4, 1.4, "#ffd54a", 5, .5)}${scatter(sprinkle ? 14 : 0, 100, 84, 34, 3.4, 1.4, "#ffffff", 6, .5)}${scatter(sprinkle ? 10 : 0, 100, 84, 34, 3.4, 1.4, "#7fc85a", 7, .5)}
  <path d="M100 48Q104 36 114 32" stroke="#5a3a1a" stroke-width="3" fill="none" stroke-linecap="round"/>
  <circle cx="100" cy="52" r="9" fill="#c4121f"/><ellipse cx="97" cy="49" rx="3" ry="2" fill="#fff" opacity=".5"/>`;
}
const es = s => scatter(14, 100, 104, 36, 13, 12, "rgba(255,255,255,.34)", s, .3);
const FOOD = {
    1: p => piring(p, kuah(p, 56, 46) + scatter(8, 100, 102, 32, 20, 14, `url(#${p}a)`, 3) + scatter(26, 100, 102, 48, 3, 2, "#1b0c05", 5, .8) + scatter(4, 100, 100, 34, 6, 2.5, "#c4281b", 9), grad(p + "k", "#4d2410", "#2a1208") + grad(p + "a", "#a8663a", "#3b1d0e")),
    2: p => piring(p, scatter(3, 100, 100, 26, 30, 17, `url(#${p}a)`, 7, .3) + scatter(14, 100, 100, 40, 3, 2, "#f7e0a8", 4, .8), grad(p + "a", "#f3cf8f", "#b9772f")),
    3: p => piring(p, kuah(p) + scatter(4, 100, 102, 28, 22, 15, `url(#${p}a)`, 2) + minyak(p, 22, "#d2491a", 6), grad(p + "k", "#f2b73a", "#c77a10") + grad(p + "a", "#e0b078", "#a8702f")),
    4: p => piring(p, scatter(5, 100, 102, 28, 32, 8, `url(#${p}a)`, 11, .3) + scatter(24, 100, 102, 40, 4.5, 3, "#c8281b", 13, .7) + scatter(5, 100, 102, 36, 8, 2, "#5aa33a", 15), grad(p + "a", "#a8452a", "#4d170c")),
    5: p => piring(p, kuah(p, 60, 50) + `<g transform="translate(100 102) rotate(-14)"><path d="M-44 0 Q-20 -22 20 -14 L40 -26 L40 26 L20 14 Q-20 22 -44 0Z" fill="url(#${p}a)"/><circle cx="-30" cy="-3" r="3" fill="#2a1208"/></g>` + scatter(5, 100, 102, 44, 7, 7, "#e23a2a", 21, .2) + scatter(4, 100, 102, 44, 9, 2.5, "#5aa33a", 23), grad(p + "k", "#df4a22", "#962210") + grad(p + "a", "#f0a56a", "#b8602e")),
    6: p => piring(p, kuah(p) + scatter(3, 100, 102, 24, 23, 16, `url(#${p}a)`, 8, .3) + minyak(p, 22, "#d2491a", 4), grad(p + "k", "#f0b036", "#c27614") + grad(p + "a", "#f4e4c4", "#c9a877")),
    7: p => piring(p, telur(p, 72, 88, -20) + telur(p, 128, 90, 15) + telur(p, 100, 128, 5) + scatter(10, 100, 104, 46, 5, 2.5, "#6aab3d", 31), grad(p + "r", "#e0452a", "#a31c10")),
    8: p => piring(p, scatter(3, 100, 102, 26, 25, 22, `url(#${p}a)`, 5, .1) + scatter(34, 100, 102, 44, 2.4, 1.8, "#7a4310", 6, .8), grad(p + "a", "#eab75f", "#a8691f")),
    9: p => piring(p, `<ellipse cx="100" cy="106" rx="54" ry="46" fill="#e4dccb"/>` + scatter(130, 100, 102, 48, 5.2, 2.3, "#fffdf6", 41, .5) + scatter(36, 100, 106, 44, 5, 2.2, "#e8e0cf", 43, .5), ""),
    10: p => piring(p, kuah(p) + scatter(9, 100, 102, 38, 14, 10, `url(#${p}a)`, 12) + minyak(p, 20, "#d2491a", 7), grad(p + "k", "#efc04a", "#c28a1c") + grad(p + "a", "#e8c76e", "#a57a22")),
    11: p => piring(p, kuah(p, 52, 44) + scatter(11, 100, 102, 34, 26, 7, `url(#${p}a)`, 14, .3) + scatter(4, 100, 102, 36, 7, 7, "#e23a2a", 17, .2), grad(p + "k", "#c9cf4a", "#7c8f22") + grad(p + "a", "#58a63f", "#1f5a1c")),
    12: p => piring(p, `<circle cx="100" cy="102" r="50" fill="#ece4d2" stroke="#cfc5ad" stroke-width="2"/><circle cx="100" cy="102" r="42" fill="#2f6a26"/>` + scatter(46, 100, 102, 36, 6.5, 4, `url(#${p}a)`, 25, .5) + scatter(6, 100, 102, 34, 9, 2.4, "#d9e86a", 27), grad(p + "a", "#8ccf6f", "#2f7a2a")),
    13: p => gelas(p, "#b8732f", "#e7b877", "", "<ellipse cx=\"100\" cy=\"40\" rx=\"36\" ry=\"5\" fill=\"#f6dcae\" opacity=\".8\"/>"),
    14: p => gelas(p, "#a8430f", "#c9651f", es(51)),
    15: p => gelas(p, "#f5a21c", "#fcc34a", es(53), `<g transform="translate(140 44)"><circle r="21" fill="#ffb326" stroke="#ff8f00" stroke-width="3"/><path d="M0 0L0-18M0 0L16-9M0 0L16 9M0 0L0 18M0 0L-16 9M0 0L-16-9" stroke="#fff3c4" stroke-width="2"/></g>`),
    16: p => gelas(p, "#f5ebd8", "#fffaf0", `<path d="M63 92 L137 92 L132 172 Q100 182 68 172Z" fill="#6a3416"/><path d="M63 92 Q100 104 137 92 L137 100 Q100 112 63 100Z" fill="#8a4a22" opacity=".8"/>` + scatter(10, 100, 76, 24, 10, 2.6, "#7ccf5a", 62, .5) + scatter(26, 100, 110, 30, 10, 2.6, "#6fc24f", 57, .5) + scatter(24, 100, 148, 24, 10, 2.6, "#5fb844", 59, .5) + scatter(8, 100, 66, 28, 12, 10, "rgba(255,255,255,.45)", 60, .3), `<ellipse cx="100" cy="36" rx="40" ry="11" fill="#fff" opacity=".95"/>` + scatter(5, 100, 34, 26, 8, 2.2, "#6fc24f", 58, .3) + scatter(6, 100, 32, 28, 7, 5, "rgba(255,255,255,.9)", 61, .3)),
    17: p => piring(p, kuah(p, 56, 46) + scatter(8, 100, 102, 32, 19, 13, `url(#${p}a)`, 61) + scatter(22, 100, 102, 46, 3, 2, "#2a1008", 62, .8) + scatter(4, 100, 100, 34, 6, 2.5, "#c4281b", 63), grad(p + "k", "#7a3c16", "#3a1a0a") + grad(p + "a", "#c98a48", "#6b3414")),
    18: p => piring(p, scatter(3, 100, 100, 26, 31, 17, `url(#${p}a)`, 64, .3) + scatter(20, 100, 100, 42, 3.5, 2, "#1a0a04", 65, .8) + scatter(8, 100, 100, 40, 2.5, 2, "#e0a030", 66, .6), grad(p + "a", "#9a4a1a", "#3a1606")),
    19: p => piring(p, kuah(p, 56, 44) + `<g stroke="#c9a56a" stroke-width="3" stroke-linecap="round"><path d="M40 70L160 62M38 100L162 100M40 130L160 138"/></g>` + [70, 100, 130].map((y, i) => [0, 1, 2, 3, 4].map(j => chunk(62 + j * 19, y + (i === 0 ? -j * 1.5 : i === 2 ? j * 1.5 : 0), 9, 8, j * 30, `url(#${p}a)`)).join("")).join(""), grad(p + "k", "#e6b23a", "#b07414") + grad(p + "a", "#8a4a20", "#3a1a0a")),
    20: p => piring(p, kuah(p, 56, 46) + scatter(6, 100, 102, 30, 17, 8, `url(#${p}a)`, 68, .3) + scatter(14, 100, 102, 44, 3, 2.2, "#b0150e", 69, .8) + scatter(3, 100, 102, 40, 9, 2.4, "#5aa33a", 70), grad(p + "k", "#d3361c", "#8a1a0e") + grad(p + "a", "#f08a52", "#c4452a")),
    21: p => piring(p, scatter(8, 100, 102, 34, 23, 9, `url(#${p}a)`, 71, .4) + scatter(16, 100, 102, 42, 3, 2, "#5a330e", 72, .8), grad(p + "a", "#cc9650", "#6e4113")),
    22: p => piring(p, kuah(p) + scatter(4, 100, 102, 28, 22, 14, `url(#${p}a)`, 73, .3) + scatter(24, 100, 102, 44, 6, 3, "#4f9a2a", 74, .6) + scatter(8, 100, 102, 44, 5, 3, "#d6e86a", 75), grad(p + "k", "#7ab53f", "#3c7a1c") + grad(p + "a", "#d9ae78", "#a8722f")),
    23: p => piring(p, kuah(p) + scatter(7, 100, 102, 32, 15, 11, `url(#${p}a)`, 76, .4) + minyak(p, 20, "#d2491a", 77), grad(p + "k", "#f0b036", "#c27614") + grad(p + "a", "#f7ecd6", "#d9c39a")),
    24: p => piring(p, kuah(p, 60, 50) + `<g transform="translate(100 102) rotate(-10)"><ellipse rx="40" ry="26" fill="url(#${p}a)"/><path d="M36-6L58-20L58 20L36 6Z" fill="url(#${p}a)"/><circle cx="-18" cy="-6" r="6" fill="#fff"/><circle cx="-18" cy="-6" r="3" fill="#2a1208"/></g>` + minyak(p, 20, "#d2491a", 78), grad(p + "k", "#f0b036", "#c27614") + grad(p + "a", "#f0b57a", "#b8602e")),
    25: p => piring(p, scatter(6, 100, 102, 32, 26, 9, `url(#${p}a)`, 79, .3) + scatter(34, 100, 102, 44, 5, 3.4, "#c8281b", 80, .7) + scatter(5, 100, 102, 40, 8, 2.4, "#5aa33a", 81), grad(p + "a", "#6a2a5a", "#2f0f2a")),
    26: p => piring(p, scatter(4, 100, 102, 28, 28, 15, `url(#${p}a)`, 82, .2) + scatter(30, 100, 102, 44, 2.2, 1.6, "#5a3410", 83, .8), grad(p + "a", "#dcaa5c", "#8a5a1a")),
    27: p => piring(p, scatter(8, 100, 102, 38, 24, 15, `url(#${p}a)`, 84, .5) + scatter(22, 100, 102, 46, 3, 2, "#fff2cf", 85, .8), grad(p + "a", "#f4dba6", "#c28f3d")),
    28: p => piring(p, scatter(8, 100, 102, 36, 22, 8, `url(#${p}a)`, 86, .5) + scatter(7, 100, 102, 38, 13, 12, "#d6ecb0", 87, .2) + scatter(4, 100, 102, 40, 8, 8, "#e23a2a", 88, .2), grad(p + "a", "#6ab04a", "#2a7a2a")),
    29: p => gelas(p, "#9fbf4a", "#c4d96a", "", `<path d="M70 40 Q85 52 100 40 T130 40" stroke="#4a2a14" stroke-width="5" fill="none"/>`),
    30: p => gelas(p, "#c98a4a", "#e8bd86", "", `<ellipse cx="100" cy="40" rx="38" ry="5" fill="#f6e6c8" opacity=".9"/>`),
    31: p => gelas(p, "#3f2412", "#7a4c24", "", `<ellipse cx="100" cy="40" rx="38" ry="5" fill="#d9a870" opacity=".8"/>`),
    32: p => gelas(p, "#f6a0b2", "#fcd0d8", es(89) + scatter(6, 100, 140, 26, 8, 8, "#ffd54a", 90, .3) + scatter(5, 100, 140, 26, 8, 8, "#6fc24f", 91, .3)),
    33: p => gelas(p, "#bfe3f0", "#e8f7fb", es(92)),
    101: p => piring(p, kuah(p) + scatter(4, 100, 102, 28, 28, 16, `url(#${p}a)`, 101, .3) + scatter(24, 100, 102, 44, 6, 3, "#4f9a2a", 102, .6) + scatter(8, 100, 102, 44, 5, 3, "#d6e86a", 103), grad(p + "k", "#7ab53f", "#3c7a1c") + grad(p + "a", "#f0cf8f", "#b9772f")),
    102: p => piring(p, kuah(p) + scatter(14, 100, 102, 40, 15, 8, `url(#${p}a)`, 104, .5) + minyak(p, 20, "#d2491a", 105), grad(p + "k", "#f0b036", "#c27614") + grad(p + "a", "#efe0bf", "#bf9d63")),
    103: p => piring(p, kuah(p, 54, 44) + scatter(8, 100, 102, 34, 24, 9, `url(#${p}a)`, 106, .4) + scatter(26, 100, 102, 48, 3, 2, "#1b0c05", 107, .8), grad(p + "k", "#4d2410", "#2a1208") + grad(p + "a", "#9a5a2e", "#3b1d0e")),
    104: p => piring(p, `<g transform="translate(100 102) rotate(-18)"><path d="M-48 0 Q-22 -24 22 -16 L44 -28 L44 28 L22 16 Q-22 24 -48 0Z" fill="url(#${p}a)"/><circle cx="-34" cy="-3" r="3.2" fill="#1a0a04"/><path d="M-18 -12L-12 12M-4 -14L2 14M10 -13L15 12" stroke="#3a1606" stroke-width="3" opacity=".6"/></g>` + scatter(16, 100, 104, 40, 8, 3, "#c8281b", 108, .7) + scatter(4, 100, 102, 40, 8, 2.4, "#5aa33a", 109), grad(p + "a", "#c98448", "#6e3412")),
    105: p => piring(p, kuah(p, 56, 46) + scatter(8, 100, 102, 32, 18, 9, `url(#${p}a)`, 110, .4) + scatter(6, 100, 102, 34, 8, 8, "#f1e8d8", 111, .2), grad(p + "k", "#2b2b33", "#0e0e12") + grad(p + "a", "#4a4a55", "#17171c")),
    106: p => piring(p, `<ellipse cx="100" cy="104" rx="58" ry="52" fill="url(#${p}a)"/>` + scatter(30, 100, 102, 44, 5, 3, "#f7e08a", 112, .6) + scatter(18, 100, 102, 44, 4, 3, "#c98a2e", 113, .7) + scatter(8, 100, 102, 40, 5, 2.5, "#6aab3d", 114), grad(p + "a", "#f4cf55", "#c68a1c")),
    107: p => piring(p, scatter(5, 100, 102, 30, 22, 18, `url(#${p}a)`, 115, .3) + scatter(40, 100, 102, 46, 3, 2.4, "#f4cf4a", 116, .7) + scatter(26, 100, 102, 46, 2, 1.6, "#6aab3d", 117, .8), grad(p + "a", "#e0a850", "#9a6420")),
    108: p => piring(p, `<circle cx="100" cy="102" r="50" fill="#ece4d2" stroke="#cfc5ad" stroke-width="2"/><circle cx="100" cy="102" r="42" fill="#8a1410"/>` + scatter(46, 100, 102, 36, 6.5, 4, `url(#${p}a)`, 118, .5) + scatter(10, 100, 102, 34, 3, 2, "#ffd3a0", 119), grad(p + "a", "#e8452d", "#a31c10")),
    109: p => piring(p, scatter(14, 100, 102, 40, 10, 10, "#cfe8a0", 120, .4) + scatter(14, 100, 102, 42, 9, 9, "#f08a2a", 121, .4) + scatter(6, 100, 102, 42, 8, 2.4, "#d94a2a", 122) + scatter(10, 100, 102, 40, 2, 2, "#fff", 123), ""),
    110: p => gelas(p, "#f1d37a", "#f8e6a3", es(124) + scatter(7, 100, 138, 28, 12, 8, "#f7c84a", 125, .4)),
    111: p => gelas(p, "#a8743f", "#d9b58a", es(126)),
    112: p => gelas(p, "#e4f3e0", "#f6fcf4", es(127) + scatter(8, 100, 138, 28, 12, 3, "#ffffff", 128, .4)),
    113: p => piring(p, scatter(5, 100, 102, 28, 32, 8, `url(#${p}a)`, 131, .3) + scatter(22, 100, 102, 44, 6, 3, "#4f9a2a", 132, .6) + scatter(8, 100, 102, 40, 5, 3, "#d6e86a", 133) + scatter(6, 100, 102, 36, 5, 3, "#c8281b", 134), grad(p + "a", "#a8452a", "#4d170c")),
    114: p => piring(p, kuah(p) + scatter(6, 100, 102, 32, 22, 14, `url(#${p}a)`, 135, .5) + minyak(p, 22, "#d2491a", 136), grad(p + "k", "#d99b2a", "#9a5c10") + grad(p + "a", "#b8774a", "#6b3a1c")),
    115: p => piring(p, kuah(p, 56, 46) + scatter(3, 100, 102, 26, 22, 28, `url(#${p}a)`, 137, .1) + scatter(22, 100, 102, 46, 3, 2, "#1b0c05", 138, .8), grad(p + "k", "#4d2410", "#2a1208") + grad(p + "a", "#8a4a24", "#3a1c0e")),
    116: p => piring(p, scatter(40, 100, 102, 44, 9, 2.2, "#e8d9b8", 139, .6) + scatter(24, 100, 102, 44, 5, 5, "#c98a4a", 140, .5) + scatter(20, 100, 102, 44, 5, 3, "#c8281b", 141, .7), ""),
    117: p => piring(p, kuah(p, 52, 44) + scatter(8, 100, 102, 34, 18, 7, `url(#${p}a)`, 142, .4) + scatter(6, 100, 102, 34, 10, 8, "#f08a2a", 143, .4) + scatter(10, 100, 102, 36, 9, 5, "#e8d870", 144, .4), grad(p + "k", "#efd56a", "#c9a82a") + grad(p + "a", "#58a63f", "#1f5a1c")),
    118: p => gelas(p, "#f5ebd8", "#fffaf0", es(145) + scatter(10, 100, 140, 28, 12, 10, "#1b1d1a", 146, .4)),
    119: p => gelas(p, "#c8e86a", "#e2f59a", es(147), `<g transform="translate(140 44)"><circle r="19" fill="#9ed03a" stroke="#6fa81e" stroke-width="3"/><path d="M0 0L0-16M0 0L14-8M0 0L14 8M0 0L0 16M0 0L-14 8M0 0L-14-8" stroke="#e8f5b0" stroke-width="2"/></g>`),
    120: p => piring(p, kuah(p, 56, 46) + scatter(7, 100, 102, 32, 20, 9, `url(#${p}a)`, 148, .3) + scatter(6, 100, 102, 34, 9, 9, "#d9a050", 149, .4), grad(p + "k", "#c27a2a", "#7a3d10") + grad(p + "a", "#f1d97a", "#c9a22a")),
    121: p => piring(p, `<circle cx="100" cy="102" r="52" fill="#ece4d2"/><circle cx="100" cy="102" r="45" fill="url(#${p}k)"/>` + scatter(8, 100, 102, 36, 11, 9, "#8fd06a", 150, .4) + scatter(6, 100, 102, 36, 10, 8, "#e8576a", 151, .4) + scatter(6, 100, 102, 36, 10, 8, "#3a2418", 152, .4) + scatter(6, 100, 102, 30, 9, 7, "#fff7e6", 153, .3), grad(p + "k", "#d9a860", "#a8702c")),
    122: p => piring(p, scatter(6, 100, 102, 34, 26, 11, `url(#${p}a)`, 154, .3) + scatter(30, 100, 102, 46, 2.5, 1.8, "#6a3a10", 155, .8), grad(p + "a", "#f0c060", "#b8741c")),
    123: p => piring(p, scatter(7, 100, 102, 34, 20, 13, `url(#${p}a)`, 156, .3) + scatter(8, 100, 102, 34, 9, 6, "#c98a4a", 157, .5), grad(p + "a", "#fff4d8", "#e0cf9a")),
    124: p => gelas(p, "#f6a8b8", "#fcd0d8", es(158) + scatter(6, 100, 138, 28, 10, 8, "#7fc85a", 159, .4) + scatter(5, 100, 128, 28, 9, 9, "#ffd54a", 160, .4) + scatter(4, 100, 150, 26, 8, 8, "#6a3416", 161, .4)),
    125: p => krim(p, "#fff4d0", "#e8d18a", "#c27a2a", false),
    126: p => krim(p, "#8a5a3a", "#4a2a18", "#2a120a", false),
    127: p => krim(p, "#ffb3c1", "#f27a98", "#d93a52", true),
    128: p => piring(p, kuah(p, 52, 44) + scatter(9, 100, 102, 32, 22, 8, `url(#${p}a)`, 171, .4) + scatter(26, 100, 102, 46, 5, 3.2, "#a01510", 172, .7) + scatter(8, 100, 102, 42, 8, 2.4, "#5aa33a", 173) + scatter(5, 100, 102, 36, 6, 5, "#e23a2a", 174, .2), grad(p + "k", "#d3361c", "#8a1a0e") + grad(p + "a", "#f0a05a", "#b8441e")),
    129: p => piring(p, kuah(p, 56, 48) + [-30, -10, 10, 30].map((y, i) => `<g transform="translate(100 ${104 + y}) rotate(${(i - 1.5) * 7})"><rect x="-30" y="-9" width="60" height="18" rx="9" fill="url(#${p}a)"/><circle cx="-30" cy="0" r="7" fill="#f3e9d2"/><circle cx="30" cy="0" r="7" fill="#f3e9d2"/><ellipse cx="-8" cy="-4" rx="16" ry="3" fill="#fff" opacity=".18"/></g>`).join("") + minyak(p, 22, "#d2491a", 175), grad(p + "k", "#f0b036", "#c27614") + grad(p + "a", "#b8774a", "#5e2f14")),
    130: p => piring(p, `<g transform="translate(100 102) rotate(-12)"><path d="M-52 0Q-26 -26 24 -17L48 -30L48 30L24 17Q-26 26 -52 0Z" fill="url(#${p}a)"/><circle cx="-38" cy="-3" r="3.2" fill="#2a1208"/><path d="M-22 -13L-17 13M-8 -15L-3 15M6 -14L10 14M20 -10L23 10" stroke="#7a4a14" stroke-width="3" opacity=".6"/><path d="M-48 -6L-60 -14M-48 4L-60 12" stroke="#5a3410" stroke-width="2" stroke-linecap="round"/></g>` + scatter(10, 142, 138, 12, 7, 4, "#c8281b", 176, .5) + scatter(6, 58, 136, 12, 9, 3, "#5aa33a", 177) + scatter(4, 62, 66, 10, 8, 6, "#e8d870", 178, .3), grad(p + "a", "#e8b45c", "#9a5a1c")),
    131: p => piring(p, scatter(6, 100, 102, 32, 17, 15, `url(#${p}a)`, 179, .2) + scatter(34, 100, 102, 46, 5, 3.2, "#c8281b", 180, .7) + scatter(8, 100, 102, 42, 8, 2.4, "#5aa33a", 181), grad(p + "a", "#f0cf7a", "#c08a2c"))
};
const svgFood = (id, p) => { const m = MENU.find(x => x.id == id); const isi = FOOD[id] ? FOOD[id](p) : piring(p, `<text x="100" y="128" font-size="76" text-anchor="middle">${m ? m.e : "🍽️"}</text>`, ""); return `<svg viewBox="0 0 200 200" role="img" aria-label="Foto ilustrasi hidangan">${isi}</svg>` };
function heroMeja() {
    const n = (id, x, y, w) => `<svg x="${x}" y="${y}" width="${w}" height="${w}" viewBox="0 0 200 200">${FOOD[id]("h" + id)}</svg>`;
    return `<svg viewBox="0 0 400 400" role="img" aria-label="Hidangan khas Padang di atas daun pisang"><defs><radialGradient id="kayu" cx=".5" cy=".4" r=".7"><stop offset="0" stop-color="#7d5638"/><stop offset="1" stop-color="#2a180d"/></radialGradient><linearGradient id="daun" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5faa45"/><stop offset="1" stop-color="#1f6a2c"/></linearGradient></defs><circle cx="200" cy="200" r="196" fill="url(#kayu)" stroke="#E3A82B" stroke-width="4"/><ellipse cx="200" cy="205" rx="170" ry="150" fill="url(#daun)" transform="rotate(-18 200 200)"/><path d="M60 330 Q200 190 340 70" stroke="#2c7a34" stroke-width="3" fill="none" opacity=".6"/>${n(1, 6, 20, 140)}${n(3, 254, 20, 140)}${n(7, 6, 240, 140)}${n(11, 254, 240, 140)}${n(12, 150, 2, 100)}${n(9, 120, 120, 160)}<g class="steam"><ellipse cx="200" cy="170" rx="9" ry="22"/><ellipse cx="224" cy="182" rx="7" ry="18"/><ellipse cx="178" cy="184" rx="7" ry="18"/></g></svg>`
}

const MENU = [
    { id: 1, k: true, n: "Rendang Daging", c: "Lauk", p: 28000, s: 2, e: "🥩", d: "Daging sapi dimasak 4 jam dalam santan dan cabai." },
    { id: 2, n: "Ayam Pop", c: "Lauk", p: 24000, s: 0, e: "🍗", d: "Ayam rebus bumbu bawang putih, digoreng sebentar. Tidak pedas." },
    { id: 3, n: "Ayam Gulai", c: "Lauk", p: 25000, s: 2, e: "🍛", d: "Potongan ayam dalam kuah gulai kuning yang gurih." },
    { id: 4, n: "Dendeng Balado", c: "Lauk", p: 27000, s: 3, e: "🌶️", d: "Dendeng sapi tipis renyah dengan balado merah." },
    { id: 5, k: true, n: "Ikan Asam Padeh", c: "Lauk", p: 26000, s: 3, e: "🐟", d: "Ikan tongkol dalam kuah asam pedas segar." },
    { id: 6, n: "Gulai Otak", c: "Lauk", p: 22000, s: 2, e: "🍲", d: "Otak sapi lembut dalam gulai santan kental." },
    { id: 7, n: "Telur Balado", c: "Lauk", p: 8000, s: 2, e: "🥚", d: "Telur rebus goreng dengan sambal balado." },
    { id: 8, n: "Perkedel Kentang", c: "Lauk", p: 5000, s: 0, e: "🧆", d: "Perkedel kentang gurih, teman makan sambal." },
    { id: 9, n: "Nasi Putih", c: "Pelengkap", p: 5000, s: 0, e: "🍚", d: "Nasi hangat, porsi satu piring." },
    { id: 10, n: "Gulai Nangka", c: "Pelengkap", p: 7000, s: 1, e: "🥬", d: "Nangka muda dalam santan, kuah kental." },
    { id: 11, n: "Daun Singkong", c: "Pelengkap", p: 6000, s: 0, e: "🌿", d: "Daun singkong rebus lembut dengan sedikit gulai." },
    { id: 12, n: "Sambal Ijo", c: "Pelengkap", p: 3000, s: 3, e: "🫑", d: "Cabai hijau giling kasar. Hati-hati, ini pedas." },
    { id: 13, k: true, n: "Teh Talua", c: "Minuman", p: 12000, s: 0, e: "☕", d: "Teh panas dikocok dengan kuning telur dan jeruk nipis." },
    { id: 14, n: "Es Teh Manis", c: "Minuman", p: 5000, s: 0, e: "🧊", d: "Teh manis dingin." },
    { id: 15, n: "Es Jeruk", c: "Minuman", p: 8000, s: 0, e: "🍊", d: "Jeruk peras segar dengan es." },
    { id: 16, n: "Es Cendol", c: "Minuman", p: 12000, s: 0, e: "🥤", d: "Cendol, santan, dan gula merah." },
    { id: 17, n: "Rendang Ayam", c: "Lauk", p: 22000, s: 2, e: "🍗", d: "Ayam kampung dimasak dalam bumbu rendang yang pekat." },
    { id: 18, n: "Ayam Bakar Padang", c: "Lauk", p: 25000, s: 1, e: "🍗", d: "Ayam bakar berbumbu kuning, disiram kuah gulai." },
    { id: 19, n: "Sate Padang", c: "Lauk", p: 25000, s: 2, e: "🍢", d: "Sate daging dengan kuah kental kuning kecokelatan." },
    { id: 20, n: "Udang Balado", c: "Lauk", p: 30000, s: 3, e: "🦐", d: "Udang segar dimasak dengan sambal balado merah." },
    { id: 21, n: "Paru Goreng", c: "Lauk", p: 20000, s: 1, e: "🥩", d: "Paru sapi iris tipis, digoreng renyah dan gurih." },
    { id: 22, n: "Itik Lado Mudo", c: "Lauk", p: 32000, s: 3, e: "🦆", d: "Bebek empuk dengan sambal cabai hijau khas Minang." },
    { id: 23, n: "Gulai Tunjang", c: "Lauk", p: 26000, s: 2, e: "🍲", d: "Kikil sapi empuk dalam gulai santan kental." },
    { id: 24, n: "Gulai Kepala Ikan", c: "Lauk", p: 35000, s: 2, e: "🐟", d: "Kepala ikan kakap dalam kuah gulai kuning." },
    { id: 25, n: "Terong Balado", c: "Pelengkap", p: 8000, s: 2, e: "🍆", d: "Terong goreng dengan sambal balado." },
    { id: 26, n: "Tempe Goreng", c: "Pelengkap", p: 4000, s: 0, e: "🟫", d: "Tempe goreng garing, teman makan sambal." },
    { id: 27, n: "Kerupuk Jangek", c: "Pelengkap", p: 6000, s: 0, e: "🍘", d: "Kerupuk kulit sapi yang renyah." },
    { id: 28, n: "Lalapan Segar", c: "Pelengkap", p: 5000, s: 0, e: "🥗", d: "Selada, timun, dan tomat untuk menyeimbangkan rasa." },
    { id: 29, n: "Jus Alpukat", c: "Minuman", p: 15000, s: 0, e: "🥑", d: "Alpukat kental dengan siraman cokelat." },
    { id: 30, n: "Teh Tarik", c: "Minuman", p: 10000, s: 0, e: "🫖", d: "Teh susu panas dengan busa tebal." },
    { id: 31, n: "Kopi Talua", c: "Minuman", p: 14000, s: 0, e: "☕", d: "Kopi panas dikocok dengan kuning telur." },
    { id: 32, n: "Es Tebak", c: "Minuman", p: 13000, s: 0, e: "🍧", d: "Santan, sirup merah muda, dan potongan jeli." },
    { id: 33, n: "Air Mineral", c: "Minuman", p: 4000, s: 0, e: "💧", d: "Air mineral dingin." },
    { id: 101, n: "Ayam Lado Hijau", c: "Lauk", p: 24000, s: 3, e: "🍗", d: "Ayam goreng disiram sambal cabai hijau yang segar dan pedas." },
    { id: 102, n: "Gulai Babat", c: "Lauk", p: 24000, s: 2, e: "🍲", d: "Babat sapi empuk dalam kuah gulai kuning yang gurih." },
    { id: 103, n: "Rendang Paru", c: "Lauk", p: 27000, s: 2, e: "🥩", d: "Paru sapi iris tipis dimasak kering dalam bumbu rendang." },
    { id: 104, n: "Ikan Bakar Sambal Merah", c: "Lauk", p: 30000, s: 2, e: "🐟", d: "Ikan bakar dengan sambal merah yang harum." },
    { id: 105, n: "Cumi Hitam", c: "Lauk", p: 32000, s: 1, e: "🦑", d: "Cumi segar dimasak dengan tinta hitamnya sendiri." },
    { id: 106, n: "Telur Dadar Padang", c: "Lauk", p: 12000, s: 0, e: "🍳", d: "Telur dadar tebal dengan irisan bawang dan cabai hijau." },
    { id: 107, n: "Bakwan Jagung", c: "Pelengkap", p: 6000, s: 0, e: "🌽", d: "Bakwan jagung manis yang digoreng garing." },
    { id: 108, n: "Sambal Lado Merah", c: "Pelengkap", p: 3000, s: 3, e: "🌶️", d: "Sambal cabai merah giling kasar. Pedasnya berani." },
    { id: 109, n: "Acar Timun Wortel", c: "Pelengkap", p: 5000, s: 0, e: "🥒", d: "Acar segar penyeimbang rasa gulai yang kental." },
    { id: 110, n: "Es Durian", c: "Minuman", p: 20000, s: 0, e: "🍨", d: "Durian lembut dengan santan dan es serut." },
    { id: 111, n: "Es Kopi Susu", c: "Minuman", p: 15000, s: 0, e: "🧋", d: "Kopi dingin dengan susu dan gula aren." },
    { id: 112, n: "Es Kelapa Muda", c: "Minuman", p: 12000, s: 0, e: "🥥", d: "Air kelapa muda dengan serutan daging kelapa." },
    { id: 113, n: "Dendeng Batokok", c: "Lauk", p: 28000, s: 2, e: "🥩", d: "Dendeng sapi dipukul tipis, disiram sambal lado hijau." },
    { id: 114, n: "Gulai Cancang", c: "Lauk", p: 27000, s: 2, e: "🍲", d: "Daging dan jeroan dicincang dalam gulai kental berbumbu pekat." },
    { id: 115, n: "Rendang Telur", c: "Lauk", p: 10000, s: 2, e: "🥚", d: "Telur rebus dimasak dalam bumbu rendang hingga kering." },
    { id: 116, n: "Teri Kacang Balado", c: "Pelengkap", p: 7000, s: 2, e: "🐟", d: "Teri renyah dan kacang tanah dengan sambal balado." },
    { id: 117, n: "Sayur Kapau", c: "Pelengkap", p: 7000, s: 1, e: "🥬", d: "Sayuran campur dalam kuah santan khas Bukittinggi." },
    { id: 118, n: "Es Cincau Santan", c: "Minuman", p: 10000, s: 0, e: "🥤", d: "Cincau hitam, santan, dan gula merah yang menyegarkan." },
    { id: 119, n: "Es Jeruk Nipis", c: "Minuman", p: 8000, s: 0, e: "🍋", d: "Jeruk nipis segar, asam manisnya pas." },
    { id: 120, n: "Kolak Pisang", c: "Penutup", p: 12000, s: 0, e: "🍌", d: "Pisang dan ubi dalam kuah santan gula aren yang hangat." },
    { id: 121, n: "Bubur Kampiun", c: "Penutup", p: 14000, s: 0, e: "🥣", d: "Bubur campur khas Minang dengan ketan hitam dan candil." },
    { id: 122, n: "Pisang Goreng", c: "Penutup", p: 10000, s: 0, e: "🍌", d: "Pisang goreng renyah di luar, manis dan lembut di dalam." },
    { id: 123, n: "Lamang Tapai", c: "Penutup", p: 13000, s: 0, e: "🍙", d: "Ketan bambu dengan tapai ketan hitam yang manis asam." },
    { id: 124, n: "Es Campur Padang", c: "Penutup", p: 15000, s: 0, e: "🍧", d: "Es campur dengan cendol, kolang-kaling, dan sirup merah muda." },
    { id: 125, n: "Es Krim Vanila", c: "Penutup", p: 12000, s: 0, e: "🍦", d: "Es krim vanila lembut dengan saus karamel dan ceri." },
    { id: 126, n: "Es Krim Cokelat", c: "Penutup", p: 12000, s: 0, e: "🍨", d: "Es krim cokelat pekat dengan saus cokelat dan ceri." },
    { id: 127, n: "Es Krim Stroberi", c: "Penutup", p: 12000, s: 0, e: "🍧", d: "Es krim stroberi segar dengan saus stroberi dan taburan warna-warni." },
    { id: 128, n: "Kikil Balado", c: "Lauk", p: 27000, s: 3, e: "🌶️", d: "Kikil sapi empuk dan kenyal dibalut sambal balado merah yang pedas." },
    { id: 129, n: "Gulai Iga", c: "Lauk", p: 32000, s: 2, e: "🍖", d: "Iga sapi empuk dimasak lama dalam kuah gulai kuning yang kental." },
    { id: 130, n: "Lele Goreng Padang", c: "Lauk", p: 22000, s: 1, e: "🐟", d: "Lele goreng renyah dengan lalapan dan sambal." },
    { id: 131, n: "Tahu Balado", c: "Pelengkap", p: 8000, s: 2, e: "🟨", d: "Tahu goreng dilumuri sambal balado, pedas dan gurih." }
];
const rp = n => "Rp" + n.toLocaleString("id-ID");
const $ = id => document.getElementById(id);
const simpan = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)) } catch (e) { } };
const muat = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v } catch (e) { return d } };
const tersimpan = muat("rmp_menu", null), penandaDef = muat("rmp_defmax", 33), DEF_MAX = Math.max(...MENU.map(m => m.id));
if (Array.isArray(tersimpan) && tersimpan.length) {
    const tambahan = MENU.filter(m => m.id > penandaDef && !tersimpan.some(t => t.id === m.id));
    MENU.splice(0, MENU.length, ...tersimpan, ...tambahan);
    if (tambahan.length) simpan("rmp_menu", MENU);
}
simpan("rmp_defmax", DEF_MAX);
WA = muat("rmp_wa", WA);
let ONGKIR = muat("rmp_ongkir", 8000);
let cart = muat("rmp_cart", {}), favs = muat("rmp_fav", []), kupon = muat("rmp_kupon", "");
Object.keys(cart).forEach(id => { if (!MENU.find(m => m.id == id)) delete cart[id] });
let kat = "Semua", pedasSaja = false, favSaja = false, urut = "", tampil = 12;
let KUPON = muat("rmp_kuponlist", { PADANG10: { p: 10, t: "Diskon 10%" }, HEMAT5K: { r: 5000, t: "Potongan Rp5.000" } });
const PAKET = [
    { n: "Paket Rendang", d: "Untuk makan sendiri", i: { 9: 1, 1: 1, 11: 1, 12: 1, 14: 1 } },
    { n: "Paket Ayam Pop", d: "Tidak pedas, cocok untuk anak", i: { 9: 1, 2: 1, 8: 1, 10: 1, 14: 1 } },
    { n: "Paket Pedas Berani", d: "Untuk pencinta cabai", i: { 9: 1, 20: 1, 25: 1, 12: 1, 15: 1 } },
    { n: "Paket Keluarga", d: "Untuk 4 orang", i: { 9: 4, 1: 1, 3: 1, 4: 1, 5: 1, 7: 2, 11: 1, 12: 2, 14: 4 } }
];
const menuById = id => MENU.find(m => m.id == id);
const hargaPaket = i => Object.entries(i).reduce((t, [id, q]) => t + menuById(id).p * q, 0);
const labelPedas = s => s ? "🌶".repeat(s) + " " + ["", "Sedang", "Pedas", "Sangat pedas"][s] : "Tidak pedas";

function setTema(t) { document.documentElement.dataset.theme = t; simpan("rmp_tema", t) }
setTema(muat("rmp_tema", "terang"));
$("tema").onclick = () => setTema(document.documentElement.dataset.theme === "dark" ? "terang" : "dark");

const urutPaket = ([a], [b]) => { const k = id => id == 9 ? 0 : ["Lauk", "Pelengkap", "Minuman"].indexOf(menuById(id).c) + 1; return k(a) - k(b) || a - b };
function renderPaket() {
    $("paketGrid").innerHTML = PAKET.map((p, k) => [p, k]).filter(([p]) => Object.keys(p.i).every(id => { const m = menuById(id); return m && !m.habis })).map(([p, k]) => `<article class="paket"><h3>${p.n}</h3><small>${p.d}</small>
    <ul>${Object.entries(p.i).sort(urutPaket).map(([id, q]) => `<li>${q > 1 ? "<b>" + q + "×</b> " : ""}${menuById(id).n}</li>`).join("")}</ul>
    <div class="baris"><span class="harga">${rp(hargaPaket(p.i))}</span><button class="tambah" data-paket="${k}">Tambah paket</button></div></article>`).join("");
}
$("paketGrid").onclick = e => {
    const b = e.target.closest("[data-paket]"); if (!b) return;
    const p = PAKET[+b.dataset.paket]; Object.entries(p.i).forEach(([id, q]) => { cart[id] = (cart[id] || 0) + q }); renderCart(); toast(p.n + " ditambahkan");
};

for (let i = 1; i <= 12; i++)$("plOrg").add(new Option(i + " orang", i));
$("plOrg").value = 2;
$("plBtn").onclick = () => {
    const n = +$("plOrg").value, sel = $("plSel").value, maks = { tidak: 0, sedang: 1, pedas: 3 }[sel];
    const lauk = MENU.filter(m => m.c === "Lauk" && !m.habis && m.s <= maks).slice(0, Math.max(2, Math.ceil(n / 2)));
    const add = (id, q) => { const m = menuById(id); if (m && !m.habis) cart[id] = (cart[id] || 0) + q };
    add(9, n); lauk.forEach(m => add(m.id, 1)); add(11, Math.ceil(n / 4)); if (sel === "pedas") add(12, Math.ceil(n / 3)); add(14, n);
    renderCart(); bukaCart(true); toast("Hidangan untuk " + n + " orang sudah disusun");
};

const katEl = $("kat");
["Semua", "Lauk", "Pelengkap", "Minuman", "Penutup"].forEach(k => {
    const b = document.createElement("button");
    b.className = "chip"; b.textContent = k; b.setAttribute("aria-pressed", k === kat);
    b.onclick = () => { kat = k; tampil = 12;[...katEl.children].forEach(x => x.setAttribute("aria-pressed", x === b)); renderMenu(); };
    katEl.appendChild(b);
});
$("pedasBtn").onclick = e => { pedasSaja = !pedasSaja; tampil = 12; e.currentTarget.setAttribute("aria-pressed", pedasSaja); renderMenu(); };
$("favBtn").onclick = e => { favSaja = !favSaja; tampil = 12; e.currentTarget.setAttribute("aria-pressed", favSaja); renderMenu(); };
$("urut").onchange = e => { urut = e.target.value; tampil = 12; renderMenu(); };
$("cari").oninput = () => { tampil = 12; renderMenu() };
$("lagi").onclick = () => { tampil += 12; renderMenu() };

function kartu(m) {
    const f = favs.includes(m.id);
    return `<article class="item${m.habis ? " habis" : ""}"><div class="pic">
    <button class="love ${f ? "on" : ""}" data-fav="${m.id}" aria-pressed="${f}" aria-label="Favorit ${m.n}">♥</button>
    ${m.k ? '<span class="koki">★ Pilihan koki</span>' : ""}<button class="lihat" data-det="${m.id}" aria-label="Lihat detail ${m.n}">${svgFood(m.id, "c" + m.id)}</button>
    ${m.f ? `<img src="${m.f}" alt="${m.n}" loading="lazy" onerror="this.remove()">` : ""}</div>
    <div class="isi"><h3>${m.n}</h3><span class="pedas p${m.s}">${labelPedas(m.s)}</span>${typeof m.stok === "number" && m.stok > 0 && m.stok <= 5 ? `<span class="sisa">Sisa ${m.stok} porsi</span>` : ""}<p>${m.d}</p>
    <div class="baris"><span class="harga">${rp(m.p)}</span><button class="tambah" data-id="${m.id}" ${m.habis ? "disabled" : ""}>${m.habis ? "Habis" : "Tambah"}</button></div></div></article>`;
}
function renderMenu() {
    const q = $("cari").value.trim().toLowerCase();
    const list = MENU.filter(m => (kat === "Semua" || m.c === kat) && (!pedasSaja || m.s > 0) && (!favSaja || favs.includes(m.id)) && (!kokiSaja || m.k) && (m.n.toLowerCase().includes(q) || m.d.toLowerCase().includes(q)));
    if (urut === "murah") list.sort((a, b) => a.p - b.p); else if (urut === "mahal") list.sort((a, b) => b.p - a.p); else if (urut === "nama") list.sort((a, b) => a.n.localeCompare(b.n));
    const batas = kat === "Semua" && !q ? tampil : Infinity, sisa = Math.max(0, list.length - batas);
    $("lagi").hidden = !sisa; $("lagiSisa").textContent = sisa;
    $("grid").innerHTML = list.length ? list.slice(0, batas).map(kartu).join("") : `<p class="kosong">${favSaja ? "Belum ada favorit. Tekan ikon hati pada menu untuk menyimpannya." : "Tidak ada menu yang cocok. Coba kata kunci lain atau ubah filter."}</p>`;
}
function toggleFav(id) {
    favs = favs.includes(id) ? favs.filter(x => x !== id) : [...favs, id]; simpan("rmp_fav", favs); renderMenu();
    toast(favs.includes(id) ? "Disimpan ke favorit" : "Dihapus dari favorit");
}
$("grid").onclick = e => {
    const t = e.target.closest("[data-id],[data-fav],[data-det]"); if (!t) return;
    if (t.dataset.id) { tambah(+t.dataset.id, 1); toast(menuById(t.dataset.id).n + " ditambahkan"); }
    else if (t.dataset.fav) toggleFav(+t.dataset.fav);
    else detail(+t.dataset.det);
};

const dlg = $("dlg"); let detId = 0, detQty = 1;
function detail(id) {
    const m = menuById(id); detId = id; detQty = 1;
    $("dArt").innerHTML = svgFood(id, "d" + id) + (m.f ? `<img class="dfoto" src="${m.f}" alt="" onerror="this.remove()">` : ""); $("dTambah").disabled = !!m.habis; $("dTambah").textContent = m.habis ? "Stok habis" : "Tambah ke pesanan"; $("dNama").textContent = m.n; $("dDesk").textContent = m.d;
    $("dPedas").textContent = labelPedas(m.s); $("dPedas").className = "pedas p" + m.s;
    $("dQty").textContent = 1; $("dHarga").textContent = rp(m.p); dlg.showModal();
}
$("dMin").onclick = () => { detQty = Math.max(1, detQty - 1); $("dQty").textContent = detQty };
$("dPlus").onclick = () => { detQty = Math.min(20, detQty + 1); $("dQty").textContent = detQty };
$("dTambah").onclick = () => { tambah(detId, detQty); toast(menuById(detId).n + " x" + detQty + " ditambahkan"); dlg.close(); };
$("dTutup").onclick = () => dlg.close();
dlg.onclick = e => { if (e.target === dlg) dlg.close() };

function tambah(id, d) { const m = menuById(id); if (d > 0 && m && typeof m.stok === "number" && (cart[id] || 0) + d > m.stok) { toast("Stok " + m.n + " tinggal " + m.stok); return } cart[id] = (cart[id] || 0) + d; if (cart[id] <= 0) delete cart[id]; renderCart(); }
function hitung() {
    const s = Object.keys(cart).reduce((t, id) => t + menuById(id).p * cart[id], 0);
    const k = KUPON[kupon]; let dsk = 0;
    if (k) dsk = k.p ? Math.round(s * k.p / 100) : Math.min(k.r, s);
    const ok = $("mode").value === "Diantar ke alamat" && s > 0 ? ONGKIR : 0;
    const us = userAktif(); let pt = 0; if (us && $("pakaiPoin").checked) { pt = Math.max(0, Math.min(poinSaldo(us.u), Math.floor((s - dsk) * 0.5 / NILAI_POIN))) }
    return { s, dsk, pt, pp: pt * NILAI_POIN, ok, t: s - dsk - pt * NILAI_POIN + ok };
}
function renderCart() {
    const ids = Object.keys(cart); let count = 0;
    $("lines").innerHTML = ids.length ? ids.map(id => {
        const m = menuById(id), q = cart[id]; count += q;
        return `<div class="line"><div><b>${m.n}</b><br><small>${rp(m.p)}</small></div>
      <div class="qty"><button data-id="${id}" data-d="-1" aria-label="Kurangi ${m.n}">−</button><b>${q}</b><button data-id="${id}" data-d="1" aria-label="Tambah ${m.n}">+</button></div></div>`;
    }).join("") : `<p class="kosong" style="padding:40px 0">Keranjang masih kosong. Pilih lauk dari menu atau paket untuk mulai memesan.</p>`;
    const h = hitung();
    $("sub").textContent = rp(h.s); $("total").textContent = rp(h.t); $("count").textContent = count;
    $("rowOngkir").hidden = !h.ok; $("ongkir").textContent = rp(h.ok);
    const us = userAktif(), sal = us ? poinSaldo(us.u) : 0; $("rowPoin").hidden = !us || sal < 1; $("poinN").textContent = sal; $("poinRp").textContent = h.pt ? "-" + rp(h.pp) : "";
    const jml = Object.values(cart).reduce((a, b) => a + b, 0); $("estimasi").textContent = jml ? "Estimasi siap: sekitar " + (10 + Math.ceil(jml / 3) * 3 + (h.ok ? 15 : 0)) + " menit" : "Estimasi siap: -";
    const nb = +$("bagi").value || 1; $("rowBagi").hidden = nb < 2 || !h.t; $("perOrang").textContent = rp(Math.ceil(h.t / nb));
    $("rowDisk").hidden = !h.dsk; $("diskNama").textContent = kupon && KUPON[kupon] ? KUPON[kupon].t + " (" + kupon + ")" : "Diskon"; $("disk").textContent = "-" + rp(h.dsk);
    simpan("rmp_cart", cart);
}
$("lines").onclick = e => { const b = e.target.closest("button[data-id]"); if (b) tambah(+b.dataset.id, +b.dataset.d); };
$("kupon").value = kupon;
$("pakaiKupon").onclick = () => {
    const k = $("kupon").value.trim().toUpperCase();
    if (!k) kupon = "";
    else if (KUPON[k]) { kupon = k; toast(KUPON[k].t + " dipakai"); }
    else { toast("Kode kupon tidak dikenal"); return; }
    simpan("rmp_kupon", kupon); renderCart();
};
const drawer = $("drawer"), ov = $("overlay");
function bukaCart(on) { drawer.classList.toggle("on", on); ov.classList.toggle("on", on); drawer.setAttribute("aria-hidden", !on); }
$("openCart").onclick = () => bukaCart(true); $("closeCart").onclick = () => bukaCart(false); ov.onclick = () => bukaCart(false);
document.addEventListener("keydown", e => { if (e.key === "Escape") bukaCart(false); });

$("kirim").onclick = () => {
    const ids = Object.keys(cart);
    if (!ids.length) { toast("Pilih menu dulu sebelum memesan"); return; }
    if (tutupManual) { toast("Maaf, restoran sedang tutup sementara"); return; }
    if (!$("nm").value.trim()) { toast("Isi nama Anda dulu"); $("nm").focus(); return; }
    const antar = $("mode").value === "Diantar ke alamat";
    if (antar && $("alamat").value.trim().length < 8) { toast("Isi alamat pengantaran dengan lengkap"); $("alamat").focus(); return; }
    const h = hitung(), id = Date.now(), kode = String(id).slice(-5);
    const metode = $("bayar").value === "QRIS" && qrisSiap() ? "QRIS" : "Kasir";
    const items = ids.map(i => ({ n: menuById(i).n, q: cart[i], p: menuById(i).p }));
    const o = { id, kode, user: (userAktif() || {}).u || "", t: new Date().toLocaleString("id-ID"), nama: $("nm").value.trim(), mode: $("mode").value, meja: antar ? "" : $("meja").value, alamat: antar ? $("alamat").value.trim() : "", cat: $("cat").value, items, sub: h.s, dsk: h.dsk, ongkir: h.ok, kupon, poinPakai: h.pt, poinRp: h.pp, total: h.t, bayar: metode, byr: metode === "QRIS" ? "Menunggu pembayaran" : "Di kasir", st: "Baru" };
    ids.forEach(i => { const m = menuById(i); if (m && typeof m.stok === "number") { m.stok = Math.max(0, m.stok - cart[i]); if (m.stok === 0) m.habis = true } }); simpan("rmp_menu", MENU);
    const ord = muat("rmp_orders", []); ord.unshift(o); simpan("rmp_orders", ord); cekNotif("Pesanan baru #" + kode);
    bukaCart(false); if (metode === "QRIS") bayarQris(o); else struk(o);
    cart = {}; kupon = ""; simpan("rmp_kupon", ""); $("kupon").value = ""; $("cat").value = ""; $("pakaiPoin").checked = false; renderCart(); renderMenu(); renderPaket();
};

addEventListener("scroll", () => {
    const e = document.documentElement;
    $("prog").style.width = (e.scrollTop / Math.max(1, e.scrollHeight - e.clientHeight) * 100) + "%";
    $("top").classList.toggle("on", e.scrollTop > 600);
}, { passive: true });
$("top").onclick = () => scrollTo({ top: 0, behavior: "smooth" });

const hash = s => { let a = 0xdeadbeef, b = 0x41c6ce57; for (let i = 0; i < s.length; i++) { const k = s.charCodeAt(i); a = Math.imul(a ^ k, 2654435761); b = Math.imul(b ^ k, 1597334677) } a = Math.imul(a ^ (a >>> 16), 2246822507) ^ Math.imul(b ^ (b >>> 13), 3266489909); b = Math.imul(b ^ (b >>> 16), 2246822507) ^ Math.imul(a ^ (a >>> 13), 3266489909); return (4294967296 * (2097151 & b) + (a >>> 0)).toString(36) };
const ses = (k, v) => { try { if (v === undefined) return sessionStorage.getItem(k); v === null ? sessionStorage.removeItem(k) : sessionStorage.setItem(k, v) } catch (e) { } };
const esc = s => String(s).replace(/[&<>"']/g, x => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[x]));
const bersih = s => s.replace(/[<>"`]/g, "");
const ADMIN_AWAL = { u: "Alfyuu", h: "20nd42i8gjk" };
let admin = muat("rmp_admin", ADMIN_AWAL);
if (muat("rmp_admin_v", 0) < 2) { admin = ADMIN_AWAL; simpan("rmp_admin", admin); simpan("rmp_admin_v", 2) }
let masuk = ses("rmp_masuk") === "1", gagal = 0, kunci = 0, admTab = "ringkas", editId = null;
const ordAll = () => muat("rmp_orders", []);
const STATUS = ["Baru", "Diproses", "Selesai", "Batal"];
let akun = muat("rmp_akun", []);
const userAktif = () => akun.find(a => a.u === ses("rmp_user")) || null;
let lihat = muat("rmp_lihat", { pesanan: Date.now(), reservasi: Date.now(), ulasan: Date.now() });
const JUDUL = document.title;
const dataTab = k => k === "pesanan" ? ordAll() : k === "reservasi" ? muat("rmp_reservasi", []) : k === "ulasan" ? muat("rmp_ulasan", []) : [];
const baru = k => dataTab(k).filter(x => x.id > (lihat[k] || 0)).length;
const totalBaru = () => ["pesanan", "reservasi", "ulasan"].reduce((t, k) => t + baru(k), 0);
function updMasuk() { const n = masuk ? totalBaru() : 0; $("masukBtn").innerHTML = (masuk ? "Panel admin" : userAktif() ? "Halo, " + esc(userAktif().n.split(" ")[0]) : "Masuk") + (n ? `<i class="notif">${n}</i>` : ""); document.title = (n ? "(" + n + ") " : "") + JUDUL }
let TABS = [];
function renderTabs(t) { if (t) TABS = t; $("admTab").innerHTML = TABS.map(([k, nm]) => { const n = k === admTab ? 0 : baru(k); return `<button data-tab="${k}" aria-current="${k === admTab}">${nm}${n ? `<i class="notif">${n}</i>` : ""}</button>` }).join("") }
function tandaiLihat() { if (["pesanan", "reservasi", "ulasan"].includes(admTab)) { lihat[admTab] = Date.now(); simpan("rmp_lihat", lihat) } updMasuk() }
function cekNotif(pesan) {
    updMasuk();
    if (!masuk) return;
    if (!$("admin").hidden) { if (["ringkas", "pesanan", "reservasi", "ulasan"].includes(admTab)) renderAdmin(); else renderTabs() }
    if (pesan) toast(pesan);
}
updMasuk();
function muatUlang() { renderMenu(); renderPaket(); renderCart() }
$("masukBtn").onclick = () => { if (masuk) { bukaAdmin(); return } if (userAktif()) { akunSaya(); return } tabLogin("masuk"); $("lgP").value = ""; $("loginErr").textContent = ""; $("dlgLogin").showModal(); $("lgU").focus() };
$("lgBatal").onclick = () => $("dlgLogin").close();
$("formLogin").onsubmit = e => {
    e.preventDefault();
    if (Date.now() < kunci) { $("loginErr").textContent = "Terlalu banyak percobaan. Tunggu 30 detik lalu coba lagi."; return }
    if ($("lgU").value.trim().toLowerCase() === admin.u.toLowerCase() && hash($("lgP").value) === admin.h) { gagal = 0; ses("rmp_masuk", "1"); masuk = true; $("dlgLogin").close(); updMasuk(); bukaAdmin() }
    else if (loginPelanggan($("lgU").value.trim(), $("lgP").value)) { gagal = 0 }
    else { gagal++; if (gagal >= 5) { kunci = Date.now() + 30000; gagal = 0 } $("loginErr").textContent = "Nama pengguna atau kata sandi salah." }
};
function bukaAdmin() { if (!masuk) return; $("admin").hidden = false; document.body.style.overflow = "hidden"; renderAdmin() }
function tutupAdmin() { $("admin").hidden = true; document.body.style.overflow = ""; muatUlang(); updMasuk() }
$("admTutup").onclick = tutupAdmin;
$("admKeluar").onclick = () => { masuk = false; ses("rmp_masuk", null); $("admin").hidden = true; document.body.style.overflow = ""; updMasuk(); muatUlang(); toast("Anda sudah keluar") };

function renderAdmin() {
    const tabs = [["ringkas", "Ringkasan"], ["menu", "Menu"], ["pesanan", "Pesanan"], ["reservasi", "Reservasi"], ["kupon", "Kupon"], ["ulasan", "Ulasan"], ["akun", "Pelanggan"], ["atur", "Pengaturan"]];
    tandaiLihat(); renderTabs(tabs);
    const o = ordAll(), B = $("admBody");
    if (admTab === "ringkas") {
        const laku = {}; o.filter(x => x.st !== "Batal").forEach(x => x.items.forEach(i => laku[i.n] = (laku[i.n] || 0) + i.q));
        const top = Object.entries(laku).sort((a, b) => b[1] - a[1]).slice(0, 5);
        B.innerHTML = `<h2>Ringkasan</h2><div class="stat-grid">
      <div class="stat"><span>Total pesanan</span><b>${o.length}</b></div>
      <div class="stat"><span>Pesanan baru</span><b>${o.filter(x => x.st === "Baru").length}</b></div>
      <div class="stat"><span>Pendapatan (selesai)</span><b>${rp(o.filter(x => x.st === "Selesai").reduce((t, x) => t + x.total, 0))}</b></div>
      <div class="stat"><span>Reservasi baru</span><b>${muat("rmp_reservasi", []).filter(x => x.st === "Baru").length}</b></div>
      <div class="stat"><span>Menu tersedia</span><b>${MENU.filter(m => !m.habis).length} / ${MENU.length}</b></div></div>
      <div class="panel"><h3>Menu paling sering dipesan</h3>${top.length ? `<ol>${top.map(([n, q]) => `<li>${esc(n)}: ${q} porsi</li>`).join("")}</ol>` : "<p>Belum ada data pesanan.</p>"}</div>${grafik(o)}`;
    } else if (admTab === "menu") {
        B.innerHTML = `<h2>Kelola menu</h2><div class="panel"><h3>${editId ? "Ubah menu" : "Tambah menu baru"}</h3><div class="frm">
      <label>Nama<input id="mNama" maxlength="40"></label>
      <label>Kategori<select id="mKat"><option>Lauk</option><option>Pelengkap</option><option>Minuman</option><option>Penutup</option></select></label>
      <label>Harga (Rp)<input id="mHarga" type="number" min="500" step="500"></label>
      <label>Pedas<select id="mPedas"><option value="0">Tidak pedas</option><option value="1">Sedang</option><option value="2">Pedas</option><option value="3">Sangat pedas</option></select></label>
      <label>Emoji<input id="mEmoji" maxlength="4" placeholder="🍽️"></label>
      <label>Foto (alamat gambar, opsional)<input id="mFoto" placeholder="foto/menu-baru.jpg"></label>
      <label>Stok harian (opsional)<input id="mStok" type="number" min="0" placeholder="kosong = tak terbatas"></label></div>
      <label style="margin-top:12px">Deskripsi<textarea id="mDesk" rows="2" maxlength="120"></textarea></label>
      <div style="display:flex;gap:10px;margin-top:12px"><button class="btn emas" id="mSimpan">Simpan menu</button>${editId ? '<button class="mini-btn" id="mBatal">Batal ubah</button>' : ""}</div></div>
      <div class="panel tbl-wrap"><div class="cari-adm"><input id="mCari" type="search" placeholder="Cari menu, misalnya rendang atau minuman" value="${esc(admCari)}" aria-label="Cari menu di daftar"><small id="mHasil"></small></div><p id="mKosong" class="kosong" hidden>Tidak ada menu yang cocok.</p><table class="tbl"><thead><tr><th>Menu</th><th>Kategori</th><th>Harga</th><th>Stok</th><th></th></tr></thead><tbody>
      ${MENU.map(m => `<tr data-cari="${esc((m.n + " " + m.c).toLowerCase())}"><td>${esc(m.n)}</td><td>${m.c}</td><td>${rp(m.p)}</td><td><span class="badge ${m.habis ? "habis" : ""}">${m.habis ? "Habis" : "Tersedia"}</span>${m.stok != null ? ` <small>(stok ${m.stok})</small>` : ""}</td>
      <td style="white-space:nowrap"><button class="mini-btn" data-act="stok" data-id="${m.id}">${m.habis ? "Tandai tersedia" : "Tandai habis"}</button> <button class="mini-btn" data-act="koki" data-id="${m.id}">${m.k ? "Cabut ★" : "Jadikan ★"}</button> <button class="mini-btn" data-act="edit" data-id="${m.id}">Ubah</button> <button class="mini-btn bahaya" data-act="hapus" data-id="${m.id}">Hapus</button></td></tr>`).join("")}</tbody></table></div>`;
        saringMenu();
        if (editId) { const m = menuById(editId); $("mNama").value = m.n; $("mKat").value = m.c; $("mHarga").value = m.p; $("mPedas").value = m.s; $("mEmoji").value = m.e || ""; $("mFoto").value = m.f || ""; $("mStok").value = m.stok == null ? "" : m.stok; $("mDesk").value = m.d }
    } else if (admTab === "pesanan") {
        B.innerHTML = `<h2>Pesanan</h2>${o.length ? `<div class="panel tbl-wrap"><table class="tbl"><thead><tr><th>Waktu</th><th>Pelanggan</th><th>Pesanan</th><th>Total</th><th>Pembayaran</th><th>Status</th><th></th></tr></thead><tbody>
      ${o.map(x => `<tr><td>${x.kode ? "<b>#" + x.kode + "</b><br>" : ""}${esc(x.t)}</td><td>${esc(x.nama)}<br><small>${esc(x.mode)}${x.meja ? " (meja " + esc(x.meja) + ")" : ""}${x.alamat ? "<br>" + esc(x.alamat) : ""}</small></td>
      <td>${x.items.map(i => esc(i.n) + " x" + i.q).join(", ")}${x.cat ? `<br><small>Catatan: ${esc(x.cat)}</small>` : ""}</td><td>${rp(x.total)}</td><td>${bayarCell(x)}</td>
      <td><select data-st="${x.id}" aria-label="Status pesanan">${STATUS.map(s => `<option${s === x.st ? " selected" : ""}>${s}</option>`).join("")}</select></td>
      <td><button class="mini-btn bahaya" data-act="hapusOrd" data-id="${x.id}">Hapus</button></td></tr>`).join("")}</tbody></table></div>`
            : `<div class="panel"><p>Belum ada pesanan. Pesanan muncul di sini setelah pelanggan menekan Pesan lewat WhatsApp dari browser ini.</p></div>`}`;
    } else if (admTab === "reservasi") {
        const rs = muat("rmp_reservasi", []);
        B.innerHTML = `<h2>Reservasi meja</h2>${rs.length ? `<div class="panel tbl-wrap"><table class="tbl"><thead><tr><th>Kode</th><th>Nama</th><th>Tanggal dan jam</th><th>Orang</th><th>Status</th><th></th></tr></thead><tbody>${rs.map(x => `<tr><td><b>#${esc(x.kode)}</b></td><td>${esc(x.nama)}</td><td>${esc(x.tgl)} ${esc(x.jam)}</td><td>${x.org}</td><td><select data-rs="${x.id}" aria-label="Status reservasi">${["Baru", "Dikonfirmasi", "Selesai", "Batal"].map(s => `<option${s === x.st ? " selected" : ""}>${s}</option>`).join("")}</select></td><td><button class="mini-btn bahaya" data-act="hapusRes" data-id="${x.id}">Hapus</button></td></tr>`).join("")}</tbody></table></div>` : '<div class="panel"><p>Belum ada reservasi.</p></div>'}`;
    } else if (admTab === "kupon") {
        B.innerHTML = `<h2>Kupon</h2><div class="panel"><h3>Tambah kupon</h3><div class="frm"><label>Kode<input id="kKode" maxlength="14"></label><label>Jenis<select id="kJenis"><option value="p">Persen (%)</option><option value="r">Potongan (Rp)</option></select></label><label>Nilai<input id="kNilai" type="number" min="1"></label></div><button class="btn emas" id="kSimpan" style="margin-top:12px">Simpan kupon</button></div>
      <div class="panel tbl-wrap"><table class="tbl"><thead><tr><th>Kode</th><th>Potongan</th><th></th></tr></thead><tbody>${Object.entries(KUPON).map(([k, v]) => `<tr><td><b>${esc(k)}</b></td><td>${esc(v.t)}</td><td><button class="mini-btn bahaya" data-act="hapusKupon" data-k="${esc(k)}">Hapus</button></td></tr>`).join("")}</tbody></table></div>`;
    } else if (admTab === "akun") {
        const jml = u => o.filter(x => x.user === u).length;
        B.innerHTML = `<h2>Akun pelanggan</h2>${akun.length ? `<div class="panel tbl-wrap"><table class="tbl"><thead><tr><th>Nama</th><th>Pengguna</th><th>Bergabung</th><th>Pesanan</th><th></th></tr></thead><tbody>${akun.map(a => `<tr><td>${esc(a.n)}</td><td>@${esc(a.u)}</td><td>${esc(a.t)}</td><td>${jml(a.u)}</td><td><button class="mini-btn bahaya" data-act="hapusAkun" data-id="${a.id}">Hapus</button></td></tr>`).join("")}</tbody></table></div>` : '<div class="panel"><p>Belum ada akun pelanggan.</p></div>'}`;
    } else if (admTab === "ulasan") {
        B.innerHTML = `<h2>Ulasan</h2>${ulasan.length ? `<div class="panel tbl-wrap"><table class="tbl"><tbody>${ulasan.map(u => `<tr><td>${bin(u.b)}</td><td>${esc(u.n)}</td><td>${esc(u.i)}</td><td><button class="mini-btn bahaya" data-act="hapusUlasan" data-id="${u.id}">Hapus</button></td></tr>`).join("")}</tbody></table></div>` : '<div class="panel"><p>Belum ada ulasan.</p></div>'}`;
    } else {
        B.innerHTML = `<h2>Pengaturan</h2>
      <div class="panel"><h3>Nomor WhatsApp kontak</h3><div class="kup"><input id="aWA" value="${esc(WA)}" inputmode="numeric" aria-label="Nomor WhatsApp"><button class="btn emas" id="aWAsimpan">Simpan</button></div><small>Hanya ditampilkan di footer. Format 62, tanpa tanda plus atau angka 0 di depan.</small></div>
      <div class="panel"><h3>Pembayaran QRIS</h3>
      <label>Teks QRIS statis<textarea id="aQris" rows="3" placeholder="Tempel teks QRIS, diawali 000201...">${esc(muat("rmp_qris", ""))}</textarea></label>
      <small>Dengan teks ini, kode QR dibuat otomatis dengan nominal pesanan. Teksnya bisa diperoleh dengan memindai QRIS toko Anda memakai aplikasi pembaca QR.</small>
      <label style="margin-top:10px">Atau gambar QRIS (cadangan)<input type="file" id="aQrisImg" accept="image/*"></label>
      ${muat("rmp_qrisimg", "") ? `<img src="${muat("rmp_qrisimg", "")}" alt="QRIS tersimpan" style="max-width:140px;margin-top:8px;border-radius:8px;display:block">` : ""}
      <div style="display:flex;gap:10px;margin-top:12px"><button class="btn emas" id="aQrisSimpan">Simpan QRIS</button><button class="mini-btn bahaya" id="aQrisHapus">Hapus QRIS</button></div></div>
      <div class="panel"><h3>Operasional</h3><div class="frm"><label>Jam buka (0 sampai 23)<input id="aBuka" type="number" min="0" max="23" value="${JAM.b}"></label><label>Jam tutup (1 sampai 24)<input id="aTutup" type="number" min="1" max="24" value="${JAM.t}"></label></div>
      <label class="cek"><input type="checkbox" id="cTutup" ${tutupManual ? "checked" : ""}> Tutup sementara (pesanan tidak diterima)</label>
      <label class="cek"><input type="checkbox" id="cBunyi" ${bunyiOn ? "checked" : ""}> Bunyi notifikasi saat ada pesanan baru dari tab lain</label>
      <button class="btn emas" id="aOperSimpan" style="margin-top:12px">Simpan</button></div>
      <div class="panel"><h3>Ongkos kirim</h3><div class="kup"><input id="aOngkir" type="number" min="0" step="500" value="${ONGKIR}" aria-label="Ongkos kirim"><button class="btn emas" id="aOngkirSimpan">Simpan</button></div><small>Dipakai untuk pesanan Diantar ke alamat.</small></div>
      <div class="panel"><h3>Akun admin</h3><div class="frm"><label>Nama pengguna<input id="aU" value="${esc(admin.u)}"></label><label>Kata sandi lama<input id="aLama" type="password" autocomplete="current-password"></label><label>Kata sandi baru (min. 6 karakter)<input id="aBaru" type="password" autocomplete="new-password"></label></div><button class="btn emas" id="aAkun" style="margin-top:12px">Simpan akun</button></div>
      <div class="panel"><h3>Data</h3><div style="display:flex;gap:10px;flex-wrap:wrap"><button class="mini-btn" data-act="csv">Unduh pesanan (CSV)</button><button class="mini-btn" data-act="cadang">Unduh cadangan data</button><label class="mini-btn" style="cursor:pointer;display:inline-block">Pulihkan dari file<input type="file" id="pulih" accept="application/json,.json" hidden></label><button class="mini-btn bahaya" data-act="hapusSemua">Hapus semua pesanan</button><button class="mini-btn bahaya" data-act="resetMenu">Kembalikan menu awal</button><button class="mini-btn bahaya" data-act="resetSemua">Reset semua data</button></div></div>`;
    }
}
$("admTab").onclick = e => { const b = e.target.closest("[data-tab]"); if (b) { admTab = b.dataset.tab; editId = null; renderAdmin() } };
function simpanItem() {
    const nama = bersih($("mNama").value.trim()), harga = +$("mHarga").value;
    if (!nama || !(harga > 0)) { toast("Isi nama dan harga dengan benar"); return }
    const data = { n: nama, c: $("mKat").value, p: Math.round(harga), s: +$("mPedas").value, e: bersih($("mEmoji").value.trim()) || "🍽️", d: bersih($("mDesk").value.trim()) || "Hidangan khas rumah makan kami." };
    const f = bersih($("mFoto").value.trim()); if (f) data.f = f;
    const sv = $("mStok").value.trim();
    let m; if (editId) { m = menuById(editId); Object.assign(m, data); if (!f) delete m.f } else { data.id = Math.max(0, ...MENU.map(x => x.id)) + 1; MENU.push(data); m = data }
    if (sv === "") { delete m.stok } else { m.stok = Math.max(0, Math.floor(+sv) || 0); m.habis = m.stok === 0 }
    simpan("rmp_menu", MENU); editId = null; toast("Menu disimpan"); renderAdmin();
}
function unduhCSV() {
    const sf = v => { v = String(v); return /^[=+\-@]/.test(v) ? "'" + v : v };
    const rows = [["ID", "Waktu", "Nama", "Cara", "Meja", "Pesanan", "Total", "Status"], ...ordAll().map(x => [x.id, x.t, x.nama, x.mode, x.meja || "", x.items.map(i => i.n + " x" + i.q).join("; "), x.total, x.st])];
    const csv = rows.map(r => r.map(v => `"${sf(v).replace(/"/g, '""')}"`).join(",")).join("\n");
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob(["\ufeff" + csv], { type: "text/csv" })); a.download = "pesanan.csv"; a.click(); URL.revokeObjectURL(a.href);
}
$("admBody").onclick = e => {
    const b = e.target.closest("button"); if (!b) return;
    const id = +b.dataset.id, act = b.dataset.act;
    if (b.id === "mSimpan") simpanItem();
    else if (b.id === "mBatal") { editId = null; renderAdmin() }
    else if (act === "stok") { const m = menuById(id); m.habis = !m.habis; simpan("rmp_menu", MENU); renderAdmin() }
    else if (act === "edit") { editId = id; renderAdmin(); scrollTo(0, 0); $("admin").scrollTo(0, 0) }
    else if (act === "hapus") { if (confirm("Hapus menu ini?")) { MENU.splice(MENU.findIndex(m => m.id === id), 1); delete cart[id]; simpan("rmp_menu", MENU); renderAdmin() } }
    else if (act === "hapusOrd") { simpan("rmp_orders", ordAll().filter(x => x.id !== id)); renderAdmin() }
    else if (act === "csv") unduhCSV();
    else if (act === "hapusSemua") { if (confirm("Hapus semua pesanan?")) { simpan("rmp_orders", []); renderAdmin() } }
    else if (act === "resetMenu") { if (confirm("Kembalikan menu ke daftar awal? Menu tambahan akan hilang.")) { try { localStorage.removeItem("rmp_menu") } catch (x) { } location.reload() } }
    else if (b.id === "aWAsimpan") { const v = $("aWA").value.replace(/\D/g, ""); if (v.length < 9) { toast("Nomor tidak valid"); return } WA = v; simpan("rmp_wa", v); $("waFooter").textContent = WA.replace(/^62/, "0"); toast("Nomor WhatsApp disimpan") }
    else if (b.id === "aAkun") {
        const u = $("aU").value.trim(), baru = $("aBaru").value;
        if (hash($("aLama").value) !== admin.h) { toast("Kata sandi lama salah"); return }
        if (!u || baru.length < 6) { toast("Isi nama pengguna dan kata sandi baru minimal 6 karakter"); return }
        admin = { u, h: hash(baru) }; simpan("rmp_admin", admin); toast("Akun admin diperbarui"); renderAdmin();
    }
};
$("admBody").onchange = e => { const s = e.target.closest("[data-st]"); if (!s) return; const o = ordAll(), x = o.find(v => v.id === +s.dataset.st); if (x) { x.st = s.value; simpan("rmp_orders", o); toast("Status diperbarui") } };

const ULASAN_AWAL = [
    { id: 1, n: "Dewi", b: 5, i: "Rendangnya empuk dan bumbunya meresap sampai ke dalam. Porsinya pas, harganya masuk akal.", t: "12/11/2026" },
    { id: 2, n: "Hendra", b: 5, i: "Sambal ijonya segar dan pedasnya mantap. Pesan lewat website gampang, tidak perlu antre.", t: "10/11/2026" },
    { id: 3, n: "Sari", b: 4, i: "Teh talua-nya unik dan enak. Ayam ponya juga empuk, cocok untuk anak.", t: "08/11/2026" },
    { id: 4, n: "Pak Joko", b: 5, i: "Kami pesan paket keluarga untuk acara kecil. Semua kebagian dan hidangannya datang cepat.", t: "05/11/2026" },
    { id: 5, n: "Nadia", b: 4, i: "Dendeng baladonya renyah dan pedas pas. Nasinya hangat, pelayanannya ramah.", t: "02/11/2026" },
    { id: 6, n: "Rizky", b: 5, i: "Gulai tunjangnya empuk sekali. Tempatnya bersih dan menunya lengkap.", t: "30/10/2026" }
];
let kokiSaja = false, ulasan = muat("rmp_ulasan", ULASAN_AWAL);
const bin = n => "★".repeat(n) + "☆".repeat(5 - n);
$("kokiBtn").onclick = e => { kokiSaja = !kokiSaja; tampil = 12; e.currentTarget.setAttribute("aria-pressed", kokiSaja); renderMenu() };
for (let i = 1; i <= 10; i++)$("bagi").add(new Option(i, i));
$("bagi").onchange = renderCart;
$("mode").onchange = () => { const a = $("mode").value === "Diantar ke alamat"; $("alamat").hidden = !a; $("meja").hidden = a; renderCart() };

function struk(o) {
    $("strukIsi").innerHTML = `<h3>RM Gonjong Sakti</h3><p>Pesanan #${o.kode}<br>${esc(o.t)}<br>${esc(o.nama)} (${esc(o.mode)}${o.meja ? ", meja " + esc(o.meja) : ""})</p><hr>
    ${o.items.map(i => `<div class="mini"><span>${esc(i.n)} x${i.q}</span><span>${rp(i.p * i.q)}</span></div>`).join("")}<hr>
    <div class="mini"><span>Subtotal</span><span>${rp(o.sub)}</span></div>${o.dsk ? `<div class="mini"><span>Diskon</span><span>-${rp(o.dsk)}</span></div>` : ""}${o.ongkir ? `<div class="mini"><span>Ongkos kirim</span><span>${rp(o.ongkir)}</span></div>` : ""}
    ${o.poinRp ? `<div class="mini"><span>Tukar poin</span><span>-${rp(o.poinRp)}</span></div>` : ""}<div class="total"><span>Total</span><span>${rp(o.total)}</span></div><div class="mini"><span>Pembayaran</span><span>${o.bayar === "QRIS" ? "QRIS, " + esc(o.byr) : "Di kasir"}</span></div><p class="kecil">Pesanan Anda sudah diterima tim kami. Pantau statusnya lewat Lacak pesanan.</p>`;
    $("dlgStruk").showModal();
}
$("strukCetak").onclick = () => print();
$("strukTutup").onclick = () => $("dlgStruk").close();

function lacak(pesan) {
    const o = ordAll().slice(0, 10);
    $("lacakIsi").innerHTML = o.length ? o.map(x => `<div class="line"><div><b>#${x.kode || String(x.id).slice(-5)}</b> <small>${esc(x.t)}</small><br><small>${x.items.map(i => esc(i.n) + " x" + i.q).join(", ")}</small>${x.byr ? `<br><small>Bayar: ${esc(x.byr)}</small>` : ""}</div><span style="text-align:right"><span class="badge st-${x.st}">${x.st}</span>${x.bayar === "QRIS" && x.byr === "Menunggu pembayaran" && x.st !== "Batal" ? `<br><button class="mini-btn" data-bayar="${x.id}">Bayar QRIS</button>` : ""}</span></div>`).join("") : `<p class="kosong">Belum ada pesanan dari perangkat ini.</p>`;
    const rs = muat("rmp_reservasi", []).slice(0, 10);
    if (rs.length) $("lacakIsi").innerHTML += `<h4 style="margin:14px 0 4px">Reservasi meja</h4>` + rs.map(x => `<div class="line"><div><b>#${esc(x.kode)}</b> <small>${esc(x.tgl)} ${esc(x.jam)}, ${x.org} orang</small><br><small>${esc(x.nama)}</small></div><span class="badge st-${x.st}">${x.st}</span></div>`).join("");
    if (pesan) $("lacakIsi").innerHTML = `<p style="font-weight:700;color:var(--hijau);margin-bottom:10px">${pesan}</p>` + $("lacakIsi").innerHTML;
    $("dlgLacak").showModal();
}
document.querySelectorAll(".lacak").forEach(a => a.onclick = e => { e.preventDefault(); lacak() });
$("lacakTutup").onclick = () => $("dlgLacak").close();

function renderUlasan() {
    $("rataUlasan").textContent = ulasan.length ? `Rata-rata ${(ulasan.reduce((t, u) => t + u.b, 0) / ulasan.length).toFixed(1)} dari 5, dari ${ulasan.length} ulasan` : "Belum ada ulasan. Jadilah yang pertama.";
    $("ulasanList").innerHTML = ulasan.slice(0, 3).map(u => `<blockquote><b>${bin(u.b)}</b><br>${esc(u.i)}<footer>${esc(u.n)}, ${esc(u.t)}</footer></blockquote>`).join("");
}
$("formUlasan").onsubmit = e => {
    e.preventDefault();
    ulasan.unshift({ id: Date.now(), n: bersih($("uNama").value.trim()), b: +$("uBintang").value, i: bersih($("uIsi").value.trim()), t: new Date().toLocaleDateString("id-ID") });
    ulasan = ulasan.slice(0, 50); simpan("rmp_ulasan", ulasan); e.target.reset(); renderUlasan(); cekNotif("Ulasan baru masuk"); toast("Terima kasih atas ulasan Anda");
};

function grafik(o) {
    const hari = [...Array(7)].map((_, i) => { const t = new Date(); t.setDate(t.getDate() - 6 + i); return t });
    const tot = hari.map(t => o.filter(x => x.st !== "Batal" && new Date(x.id).toDateString() === t.toDateString()).reduce((s, x) => s + x.total, 0));
    const mx = Math.max(1, ...tot);
    return `<div class="panel"><h3>Nilai pesanan 7 hari terakhir</h3><div class="grafik">${hari.map((t, i) => `<div class="gbar"><i style="height:${Math.round(tot[i] / mx * 100)}%" title="${rp(tot[i])}"></i><span>${t.toLocaleDateString("id-ID", { weekday: "short" })}</span></div>`).join("")}</div></div>`;
}

$("admBody").addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    const id = +b.dataset.id, act = b.dataset.act;
    if (act === "koki") { const m = menuById(id); m.k = !m.k; simpan("rmp_menu", MENU); renderAdmin() }
    else if (b.id === "kSimpan") {
        const kode = $("kKode").value.trim().toUpperCase().replace(/[^A-Z0-9]/g, ""), v = +$("kNilai").value, jenis = $("kJenis").value;
        if (!kode || !(v > 0) || (jenis === "p" && v > 100)) { toast("Isi kode dan nilai kupon dengan benar"); return }
        KUPON[kode] = jenis === "p" ? { p: v, t: "Diskon " + v + "%" } : { r: v, t: "Potongan " + rp(v) }; simpan("rmp_kuponlist", KUPON); renderAdmin(); toast("Kupon disimpan");
    }
    else if (act === "hapusKupon") { const k = b.dataset.k; delete KUPON[k]; if (kupon === k) { kupon = ""; simpan("rmp_kupon", ""); $("kupon").value = "" } simpan("rmp_kuponlist", KUPON); renderAdmin() }
    else if (act === "hapusUlasan") { ulasan = ulasan.filter(u => u.id !== id); simpan("rmp_ulasan", ulasan); renderUlasan(); renderAdmin() }
    else if (b.id === "aOngkirSimpan") { ONGKIR = Math.max(0, +$("aOngkir").value || 0); simpan("rmp_ongkir", ONGKIR); renderCart(); toast("Ongkos kirim disimpan") }
});

$("admBody").addEventListener("click", e => {
    const b = e.target.closest('[data-act="hapusRes"]');
    if (b) { simpan("rmp_reservasi", muat("rmp_reservasi", []).filter(x => x.id !== +b.dataset.id)); renderAdmin() }
});
$("admBody").addEventListener("change", e => {
    const s = e.target.closest("[data-rs]"); if (!s) return;
    const r = muat("rmp_reservasi", []), x = r.find(v => v.id === +s.dataset.rs);
    if (x) { x.st = s.value; simpan("rmp_reservasi", r); toast("Status reservasi diperbarui") }
});
addEventListener("storage", e => {
    const pes = { rmp_orders: "Pesanan baru masuk", rmp_reservasi: "Reservasi baru masuk", rmp_ulasan: "Ulasan baru masuk" }[e.key];
    if (!pes) return;
    let tambah = false; try { tambah = JSON.parse(e.newValue || "[]").length > JSON.parse(e.oldValue || "[]").length } catch (x) { }
    if (e.key === "rmp_ulasan") { ulasan = muat("rmp_ulasan", []); renderUlasan() }
    cekNotif(tambah ? pes : ""); if (tambah && masuk) bunyi();
});

function tabLogin(t) {
    $("formLogin").hidden = t !== "masuk"; $("formDaftar").hidden = t !== "daftar";
    document.querySelectorAll("[data-lg]").forEach(b => b.setAttribute("aria-current", b.dataset.lg === t));
    $("loginErr").textContent = ""; $("daftarErr").textContent = "";
}
document.querySelectorAll("[data-lg]").forEach(b => b.onclick = () => { tabLogin(b.dataset.lg); (b.dataset.lg === "masuk" ? $("lgU") : $("dfN")).focus() });
$("dfBatal").onclick = () => $("dlgLogin").close();
function isiNama() { const a = userAktif(); if (a && !$("nm").value) $("nm").value = a.n }
function loginPelanggan(u, p) {
    const a = akun.find(x => x.u.toLowerCase() === u.toLowerCase());
    if (!a || a.h !== hash(p)) return false;
    ses("rmp_user", a.u); $("dlgLogin").close(); updMasuk(); isiNama(); toast("Halo, " + a.n.split(" ")[0]); return true;
}
$("formDaftar").onsubmit = e => {
    e.preventDefault();
    const n = bersih($("dfN").value.trim()), u = $("dfU").value.trim(), p = $("dfP").value, err = m => { $("daftarErr").textContent = m };
    if (!n) return err("Isi nama lengkap Anda.");
    if (!/^[A-Za-z0-9_]{3,20}$/.test(u)) return err("Nama pengguna 3 sampai 20 karakter: huruf, angka, atau garis bawah.");
    if (u.toLowerCase() === admin.u.toLowerCase() || akun.some(a => a.u.toLowerCase() === u.toLowerCase())) return err("Nama pengguna sudah dipakai.");
    if (p.length < 6) return err("Kata sandi minimal 6 karakter.");
    if (p !== $("dfP2").value) return err("Kata sandi dan pengulangannya tidak sama.");
    akun.push({ id: Date.now(), u, n, h: hash(p), t: new Date().toLocaleDateString("id-ID") }); simpan("rmp_akun", akun);
    e.target.reset(); ses("rmp_user", u); $("dlgLogin").close(); updMasuk(); isiNama(); toast("Akun dibuat. Selamat datang, " + n.split(" ")[0]);
};
function akunSaya() {
    const a = userAktif(); if (!a) return;
    $("akunInfo").innerHTML = `<b>${esc(a.n)}</b><br><small>@${esc(a.u)}, bergabung ${esc(a.t)}</small><br>Poin Anda: <b>${poinSaldo(a.u)}</b> <small>(1 poin per Rp1.000 pesanan selesai, 1 poin = Rp100)</small>`;
    const o = ordAll().filter(x => x.user === a.u).slice(0, 10);
    $("akunRiwayat").innerHTML = o.length ? o.map(x => `<div class="line"><div><b>#${esc(x.kode || "")}</b> <small>${esc(x.t)}</small><br><small>${x.items.map(i => esc(i.n) + " x" + i.q).join(", ")}</small></div><div style="text-align:right"><b>${rp(x.total)}</b><br><span class="badge st-${x.st}">${x.st}</span></div></div>`).join("") : `<p class="kosong">Belum ada pesanan dari akun ini.</p>`;
    $("dlgAkun").showModal();
}
$("akunTutup").onclick = () => $("dlgAkun").close();
$("akunKeluar").onclick = () => { ses("rmp_user", null); $("dlgAkun").close(); updMasuk(); toast("Anda sudah keluar") };
$("admBody").addEventListener("click", e => {
    const b = e.target.closest('[data-act="hapusAkun"]');
    if (b && confirm("Hapus akun ini?")) {
        const a = akun.find(x => x.id === +b.dataset.id); akun = akun.filter(x => x.id !== +b.dataset.id); simpan("rmp_akun", akun);
        if (a && ses("rmp_user") === a.u) ses("rmp_user", null);
        renderAdmin(); updMasuk();
    }
});

const NILAI_POIN = 100;
const poinSaldo = u => ordAll().filter(x => x.user === u).reduce((t, x) => t + (x.st === "Selesai" ? Math.floor(x.total / 1000) : 0) - (x.st !== "Batal" ? (x.poinPakai || 0) : 0), 0);
$("pakaiPoin").onchange = renderCart;
let JAM = muat("rmp_jam", { b: 7, t: 22 }), tutupManual = muat("rmp_tutup", false), bunyiOn = muat("rmp_bunyi", true);
function updStatus() {
    const jam = +new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Jakarta", hour: "numeric", hour12: false }).format(new Date()) % 24;
    const buka = !tutupManual && jam >= JAM.b && jam < JAM.t, p = n => String(n).padStart(2, "0") + ".00";
    $("dot").className = "dot " + (buka ? "buka" : "tutup");
    $("statusText").textContent = tutupManual ? "Tutup sementara, pesanan belum diterima" : buka ? "Buka sekarang, tutup " + p(JAM.t) + " WIB" : "Tutup sekarang, buka lagi " + p(JAM.b) + " WIB";
    $("jamFooter").textContent = p(JAM.b) + " – " + p(JAM.t);
}
function bunyi() {
    if (!bunyiOn) return;
    try {
        const a = new (window.AudioContext || window.webkitAudioContext)(), o = a.createOscillator(), g = a.createGain();
        o.connect(g); g.connect(a.destination); o.type = "sine"; o.frequency.value = 880;
        g.gain.setValueAtTime(.15, a.currentTime); g.gain.exponentialRampToValueAtTime(.001, a.currentTime + .4); o.start(); o.stop(a.currentTime + .4)
    } catch (e) { }
}
const KEYS_CADANG = ["rmp_menu", "rmp_orders", "rmp_reservasi", "rmp_ulasan", "rmp_kuponlist", "rmp_akun", "rmp_wa", "rmp_ongkir", "rmp_jam", "rmp_tutup", "rmp_bunyi", "rmp_defmax", "rmp_qris", "rmp_qrisimg"];
$("admBody").addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    if (b.id === "aOperSimpan") {
        const bk = Math.floor(+$("aBuka").value), tp = Math.floor(+$("aTutup").value);
        if (!(bk >= 0 && bk <= 23 && tp >= 1 && tp <= 24 && bk < tp)) { toast("Jam buka harus lebih kecil dari jam tutup"); return }
        JAM = { b: bk, t: tp }; tutupManual = $("cTutup").checked; bunyiOn = $("cBunyi").checked;
        simpan("rmp_jam", JAM); simpan("rmp_tutup", tutupManual); simpan("rmp_bunyi", bunyiOn); updStatus(); toast("Pengaturan operasional disimpan");
    } else if (b.dataset.act === "cadang") {
        const o = {}; KEYS_CADANG.forEach(k => { try { const v = localStorage.getItem(k); if (v != null) o[k] = JSON.parse(v) } catch (x) { } });
        const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([JSON.stringify(o, null, 1)], { type: "application/json" })); a.download = "cadangan-rm-gonjong-sakti.json"; a.click(); URL.revokeObjectURL(a.href);
    } else if (b.dataset.act === "resetSemua") {
        if (!confirm("Reset SEMUA data situs? Menu, pesanan, reservasi, ulasan, kupon, akun pelanggan, dan pengaturan akan kembali ke awal. Akun admin tidak berubah.")) return;
        if (prompt("Ketik RESET (huruf besar) untuk melanjutkan") !== "RESET") { toast("Reset dibatalkan"); return }
        try { Object.keys(localStorage).filter(k => k.startsWith("rmp_") && k !== "rmp_admin" && k !== "rmp_admin_v" && k !== "rmp_tema").forEach(k => localStorage.removeItem(k)) } catch (x) { }
        ses("rmp_user", null); location.reload();
    }
});
$("admBody").addEventListener("change", e => {
    if (e.target.id !== "pulih") return;
    const f = e.target.files[0]; if (!f) return;
    const r = new FileReader();
    r.onload = () => {
        try {
            const o = JSON.parse(r.result), LIST = ["rmp_menu", "rmp_orders", "rmp_reservasi", "rmp_ulasan", "rmp_akun"];
            if (!o || typeof o !== "object" || Array.isArray(o)) throw 0;
            const ok = Object.keys(o).filter(k => KEYS_CADANG.includes(k));
            if (!ok.length || ok.some(k => LIST.includes(k) && !Array.isArray(o[k]))) throw 0;
            if (!confirm("Pulihkan data dari file ini? Data saat ini akan diganti.")) return;
            ok.forEach(k => localStorage.setItem(k, JSON.stringify(o[k]))); location.reload();
        } catch (x) { toast("File cadangan tidak valid") }
    };
    r.readAsText(f);
});

function crc16(str) { let crc = 0xFFFF; for (let i = 0; i < str.length; i++) { crc ^= str.charCodeAt(i) << 8; for (let k = 0; k < 8; k++)crc = (crc & 0x8000) ? ((crc << 1) ^ 0x1021) & 0xFFFF : (crc << 1) & 0xFFFF } return crc.toString(16).toUpperCase().padStart(4, "0") }
const qrisValid = s => /^000201/.test(s) && s.slice(-8, -4) === "6304" && crc16(s.slice(0, -4)) === s.slice(-4).toUpperCase();
function qrisDinamis(s, nominal) {
    s = s.trim(); if (!qrisValid(s)) return null;
    const body = s.slice(0, -4).replace(/^000201010211/, "000201010212"), i = body.indexOf("5802ID");
    if (i < 0) return null;
    const amt = String(Math.round(nominal)), out = body.slice(0, i) + "54" + String(amt.length).padStart(2, "0") + amt + body.slice(i);
    return out + crc16(out);
}
const qrisSiap = () => !!(muat("rmp_qris", "") || muat("rmp_qrisimg", ""));
function updBayar() { const on = qrisSiap(); $("rowBayar").hidden = !on; if (!on) $("bayar").value = "Kasir" }
function kecilkan(file, maks, cb) {
    const r = new FileReader();
    r.onload = () => {
        const im = new Image();
        im.onload = () => {
            const k = Math.min(1, maks / Math.max(im.width, im.height)), cv = document.createElement("canvas");
            cv.width = Math.round(im.width * k); cv.height = Math.round(im.height * k);
            const cx = cv.getContext("2d"); cx.fillStyle = "#fff"; cx.fillRect(0, 0, cv.width, cv.height); cx.drawImage(im, 0, 0, cv.width, cv.height);
            cb(cv.toDataURL("image/jpeg", .7))
        };
        im.onerror = () => toast("Gambar tidak dapat dibaca"); im.src = r.result
    };
    r.readAsDataURL(file);
}
const ubahOrder = (id, fn) => { const o = ordAll(), x = o.find(v => v.id === id); if (x) { fn(x); simpan("rmp_orders", o) } return x };
const bayarCell = x => x.bayar === "QRIS"
    ? `<span class="badge ${x.byr === "Lunas" ? "" : "st-Diproses"}">QRIS: ${esc(x.byr)}</span>${x.bukti ? `<br><button class="mini-btn" data-act="bukti" data-id="${x.id}">Lihat bukti</button>` : ""}${x.byr !== "Lunas" ? `<br><button class="mini-btn" data-act="lunas" data-id="${x.id}">Tandai lunas</button>` : ""}`
    : `<small>${esc(x.byr || "Di kasir")}</small>`;
let byrAktif = 0;
function bayarQris(o) {
    byrAktif = o.id;
    $("byrInfo").innerHTML = `Pesanan <b>#${esc(o.kode)}</b><br>Total <b style="font-size:1.5rem;color:var(--merah)">${rp(o.total)}</b>`;
    const box = $("qrisBox"); box.innerHTML = "";
    const st = muat("rmp_qris", ""), img = muat("rmp_qrisimg", ""), dyn = st ? qrisDinamis(st, o.total) : null;
    if (dyn && window.QRCode) {
        new QRCode(box, { text: dyn, width: 240, height: 240, correctLevel: QRCode.CorrectLevel.M });
        $("byrCatatan").textContent = "Scan dengan aplikasi bank atau e-wallet apa pun. Nominal sudah terisi otomatis.";
    } else if (img) {
        box.innerHTML = `<img src="${img}" alt="Kode QRIS restoran">`;
        $("byrCatatan").textContent = "Scan kode ini, lalu masukkan nominal " + rp(o.total) + " secara manual.";
    } else {
        box.textContent = "Kode QR belum bisa ditampilkan. Pustaka QR belum termuat, periksa koneksi internet."; $("byrCatatan").textContent = "";
    }
    $("byrBukti").textContent = o.bukti ? "Bukti bayar sudah diunggah." : "";
    $("dlgBayar").showModal();
}
$("buktiFile").onchange = e => {
    const f = e.target.files[0]; if (!f) return;
    kecilkan(f, 700, url => { ubahOrder(byrAktif, o => { o.bukti = url }); $("byrBukti").textContent = "Bukti bayar terunggah." });
    e.target.value = "";
};
$("byrSudah").onclick = () => {
    const x = ubahOrder(byrAktif, o => { o.byr = "Menunggu verifikasi" });
    $("dlgBayar").close();
    if (x) { cekNotif("Pembayaran QRIS #" + x.kode + " menunggu verifikasi"); struk(x) }
};
$("byrNanti").onclick = () => { const x = ordAll().find(v => v.id === byrAktif); $("dlgBayar").close(); if (x) struk(x) };
$("lacakIsi").onclick = e => { const b = e.target.closest("[data-bayar]"); if (!b) return; const o = ordAll().find(x => x.id === +b.dataset.bayar); if (o) { $("dlgLacak").close(); bayarQris(o) } };
$("buktiTutup").onclick = () => $("dlgBukti").close();
$("admBody").addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    const id = +b.dataset.id;
    if (b.dataset.act === "lunas") { ubahOrder(id, x => { x.byr = "Lunas" }); toast("Pembayaran ditandai lunas"); renderAdmin() }
    else if (b.dataset.act === "bukti") { const x = ordAll().find(v => v.id === id); if (x && x.bukti) { $("buktiImg").src = x.bukti; $("dlgBukti").showModal() } }
    else if (b.id === "aQrisSimpan") {
        const s = $("aQris").value.trim();
        if (s && !qrisValid(s)) { toast("Teks QRIS tidak valid. Pastikan diawali 000201 dan disalin utuh."); return }
        simpan("rmp_qris", s); updBayar(); toast("QRIS disimpan"); renderAdmin();
    }
    else if (b.id === "aQrisHapus") { if (confirm("Hapus pengaturan QRIS?")) { simpan("rmp_qris", ""); simpan("rmp_qrisimg", ""); updBayar(); renderAdmin() } }
});
$("admBody").addEventListener("change", e => {
    if (e.target.id !== "aQrisImg") return;
    const f = e.target.files[0]; if (!f) return;
    kecilkan(f, 700, url => { simpan("rmp_qrisimg", url); updBayar(); toast("Gambar QRIS disimpan"); renderAdmin() });
});

let admCari = "";
function saringMenu() {
    const q = admCari.trim().toLowerCase(); let n = 0;
    document.querySelectorAll("#admBody tr[data-cari]").forEach(tr => { const ok = !q || tr.dataset.cari.includes(q); tr.hidden = !ok; if (ok) n++ });
    const h = $("mHasil"); if (h) h.textContent = q ? n + " dari " + MENU.length + " menu" : MENU.length + " menu";
    const k = $("mKosong"); if (k) k.hidden = !(q && n === 0);
}
$("admBody").addEventListener("input", e => { if (e.target.id === "mCari") { admCari = e.target.value; saringMenu() } });

const org = document.querySelector("select[name=org]");
for (let i = 1; i <= 12; i++)org.add(new Option(i + " orang", i));
const tgl = document.querySelector("input[name=tgl]"); tgl.min = new Date().toISOString().slice(0, 10);
$("resForm").onsubmit = e => {
    e.preventDefault(); const f = new FormData(e.target);
    const id = Date.now(), r = { id, kode: String(id).slice(-5), nama: bersih(String(f.get("nama")).trim()), tgl: f.get("tgl"), jam: f.get("jam"), org: +f.get("org"), st: "Baru" };
    const all = muat("rmp_reservasi", []); all.unshift(r); simpan("rmp_reservasi", all);
    e.target.reset();
    cekNotif("Reservasi baru #" + r.kode);
    lacak("Reservasi Anda tercatat dengan kode #" + r.kode + ". Tim kami akan mengonfirmasinya.");
};

updStatus();

let tm; function toast(t) { const el = $("toast"); el.textContent = t; el.classList.add("on"); clearTimeout(tm); tm = setTimeout(() => el.classList.remove("on"), 1800); }

$("heroMeja").innerHTML = heroMeja();
renderPaket(); renderMenu(); renderCart(); renderUlasan();
$("waFooter").textContent = WA.replace(/^62/, "0"); isiNama(); updBayar();

(function () {
    const $ = id => document.getElementById(id);
    const kotak = $("musik"), btn = $("musikBtn"), txt = $("musikTxt"), vol = $("musikVol");
    if (!kotak || !btn || !vol || !(window.AudioContext || window.webkitAudioContext)) return;
    const simpan = (k, v) => { try { localStorage.setItem(k, v) } catch (e) { } };
    const muat = (k, d) => { try { const v = localStorage.getItem(k); return v == null ? d : v } catch (e) { return d } };

    const BPM = 74, BT = 60 / BPM, L16 = BT / 4;
    const hz = m => 440 * Math.pow(2, (m - 69) / 12);
    const AKOR = [[53, 57, 60, 64], [53, 59, 62, 64], [55, 59, 62, 64], [55, 60, 64, 67]];
    const BASS = [38, 43, 36, 45];
    const SKALA = [62, 65, 67, 69, 72, 74, 77];

    let ctx, master, padF, send, nbuf, timer, nextT = 0, step = 0, bar = 0, main = false, pref = muat("rmp_musik", "on"), disembunyi = false;

    function init() {
        if (ctx) return;
        const AC = window.AudioContext || window.webkitAudioContext;
        ctx = new AC();
        master = ctx.createGain(); master.gain.value = 0;
        const comp = ctx.createDynamicsCompressor();
        master.connect(comp); comp.connect(ctx.destination);
        padF = ctx.createBiquadFilter(); padF.type = "lowpass"; padF.frequency.value = 1100; padF.connect(master);
        send = ctx.createGain(); send.gain.value = .4;
        const dl = ctx.createDelay(1); dl.delayTime.value = BT * .75;
        const fb = ctx.createGain(); fb.gain.value = .38;
        const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 1800;
        send.connect(dl); dl.connect(lp); lp.connect(fb); fb.connect(dl); lp.connect(master);
        nbuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
        const d = nbuf.getChannelData(0); for (let i = 0; i < d.length; i++)d[i] = Math.random() * 2 - 1;
    }

    function tone(t, f, dur, type, g0, dests, att, rel) {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.type = type; o.frequency.value = f;
        g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(g0, t + att); g.gain.exponentialRampToValueAtTime(.0001, t + dur + rel);
        o.connect(g); dests.forEach(x => g.connect(x)); o.start(t); o.stop(t + dur + rel + .05);
    }
    function noise(t, dur, hp, g0, dest) {
        const s = ctx.createBufferSource(); s.buffer = nbuf;
        const f = ctx.createBiquadFilter(); f.type = "highpass"; f.frequency.value = hp;
        const g = ctx.createGain(); g.gain.setValueAtTime(g0, t); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
        s.connect(f); f.connect(g); g.connect(dest); s.start(t, Math.random() * 1.5, dur + .05);
    }
    function kick(t) {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.type = "sine"; o.frequency.setValueAtTime(130, t); o.frequency.exponentialRampToValueAtTime(42, t + .14);
        g.gain.setValueAtTime(.45, t); g.gain.exponentialRampToValueAtTime(.001, t + .28);
        o.connect(g); g.connect(master); o.start(t); o.stop(t + .3);
    }

    function langkah(s, t) {
        const b = bar;
        if (s === 0) {
            const dur = BT * 4;
            AKOR[b].forEach((m, i) => {
                tone(t + i * .012, hz(m), dur * .95, "sine", .05, [padF, send], .08, .8);
                tone(t + i * .012, hz(m + 12), dur * .9, "triangle", .012, [padF], .1, .8);
            });
            tone(t, hz(BASS[b]), BT * 1.6, "sine", .22, [master], .01, .3);
            for (let i = 0; i < 7; i++)noise(t + Math.random() * dur, .012, 3500, .025, master);
            const slot = [2, 4, 6, 8, 10, 12, 14].sort(() => Math.random() - .5).slice(0, Math.random() < .8 ? 3 : 2);
            slot.forEach(st => {
                const n = SKALA[Math.floor(Math.random() * SKALA.length)];
                tone(t + st * L16, hz(n), L16 * (2 + Math.floor(Math.random() * 4)), "triangle", .04, [master, send], .02, .5);
            });
        }
        if (s === 10) tone(t, hz(BASS[b]), BT * .7, "sine", .16, [master], .01, .2);
        if (s === 0 || s === 6 || s === 10) kick(t);
        if (s === 4 || s === 12) { noise(t, .16, 1500, .09, master); tone(t, 185, .08, "triangle", .05, [master], .002, .08) }
        if (s % 2 === 0) noise(t + (s % 4 === 2 ? .02 : 0), s % 4 === 2 ? .07 : .04, 7000, .05, master);
    }
    function jadwal() {
        while (nextT < ctx.currentTime + .4) {
            langkah(step, nextT); nextT += L16; step++;
            if (step === 16) { step = 0; bar = (bar + 1) % 4 }
        }
    }

    const level = () => (+vol.value / 100) * .8;
    const EV = ["pointerdown", "click", "keydown", "touchend"];
    function buka(e) { if (kotak.contains(e.target)) return; if (pref === "on" && !main) putar() }
    function ui() {
        kotak.classList.toggle("main", main);
        kotak.classList.toggle("hint", !main && pref === "on");
        btn.setAttribute("aria-pressed", main ? "true" : "false");
        txt.textContent = main ? "Musik nyala" : "Putar musik";
    }
    function putar() {
        init();
        ctx.resume().then(() => {
            if (main) return;
            main = true; clearInterval(timer);
            nextT = ctx.currentTime + .15; step = 0; bar = 0;
            timer = setInterval(jadwal, 100);
            master.gain.cancelScheduledValues(ctx.currentTime);
            master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
            master.gain.linearRampToValueAtTime(level(), ctx.currentTime + 2.5);
            EV.forEach(n => document.removeEventListener(n, buka, true));
            ui();
        }).catch(() => { });
    }
    function jeda() {
        if (!main) return; main = false;
        master.gain.cancelScheduledValues(ctx.currentTime);
        master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
        master.gain.linearRampToValueAtTime(0, ctx.currentTime + .5);
        setTimeout(() => { if (!main) { clearInterval(timer); ctx.suspend() } }, 600);
        ui();
    }

    btn.onclick = () => {
        if (main) { pref = "off"; simpan("rmp_musik", "off"); jeda() }
        else { pref = "on"; simpan("rmp_musik", "on"); putar() }
    };
    vol.value = muat("rmp_musikvol", 35);
    vol.oninput = () => { simpan("rmp_musikvol", vol.value); if (ctx && main) master.gain.setTargetAtTime(level(), ctx.currentTime, .1) };

    document.addEventListener("visibilitychange", () => {
        if (!ctx || !main) return;
        if (document.hidden) { ctx.suspend(); disembunyi = true }
        else if (disembunyi) { disembunyi = false; ctx.resume() }
    });

    ui();
    if (pref === "on") {
        try { init(); if (ctx.state === "running") putar() } catch (e) { }
        EV.forEach(n => document.addEventListener(n, buka, true));
    }
})();