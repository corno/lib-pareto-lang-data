"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Namespace__Selection = exports.selectLocalNSFromNS2 = void 0;
const pl = __importStar(require("pareto-core-lib"));
const selectLocalNSFromNS2 = ($) => {
    switch ($[0]) {
        case 'local': return pl.ss($, ($) => $);
        case 'parent sibling': return pl.ss($, ($) => (0, exports.selectLocalNSFromNS2)($.namespace.referent));
        default: return pl.au($[0]);
    }
};
exports.selectLocalNSFromNS2 = selectLocalNSFromNS2;
const Namespace__Selection = ($) => {
    return pl.optional($.tail, ($) => (0, exports.Namespace__Selection)($), () => $.namespace.referent);
};
exports.Namespace__Selection = Namespace__Selection;
