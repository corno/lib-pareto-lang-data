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
exports.typeReference = exports.typeParameter = exports.externalTypeReference = exports.typeArgument = exports.step = exports.dictionary = exports.optional = exports.computed = exports.array = exports.taggedUnion = exports.propMutable = exports.prop = exports.group = exports.boolean = exports.number = exports.string = exports.null_ = exports.procedure = exports.addressFunction = exports.valueFunction = exports.local = exports.parentSibling = exports.ns = void 0;
const pd = __importStar(require("pareto-core-data"));
function ref($) {
    return {
        'referent': pd.getLocationInfo(2),
        'key': $,
    };
}
function dict($) {
    return pd.d($);
}
///////////////////////////////////////////////////////////
function ns(namespaces, typeParameters, types) {
    return {
        'namespaces': dict(namespaces),
        'parameters': {
            'local': dict(typeParameters),
            'aggregated': dict({}),
        },
        'types': dict(types),
    };
}
exports.ns = ns;
function parentSibling(name) {
    return ['parent sibling', {
            'namespace': ref(name)
        }];
}
exports.parentSibling = parentSibling;
function local(typeParameters, namespaces, types) {
    return ['local', {
            'parameters': {
                'local': dict(typeParameters),
                'aggregated': dict({})
            },
            'namespaces': dict(namespaces),
            'types': dict(types),
        }];
}
exports.local = local;
function valueFunction(typeParameters, context, parameters, returnType) {
    return ['value function', {
            'declaration': {
                'type parameters': {
                    'local': dict(typeParameters),
                    'aggregated': dict({})
                },
                'context': context,
                'parameters': dict(parameters),
            },
            'return type': returnType,
        }];
}
exports.valueFunction = valueFunction;
function addressFunction(typeParameters, context, parameters, returnType) {
    return ['address function', {
            'declaration': {
                'type parameters': {
                    'local': dict(typeParameters),
                    'aggregated': dict({})
                },
                'context': context,
                'parameters': dict(parameters),
            },
            'return type': returnType,
        }];
}
exports.addressFunction = addressFunction;
function procedure(typeParameters, context, parameters, returnType) {
    return ['procedure', {
            'declaration': {
                'type parameters': {
                    'local': dict(typeParameters),
                    'aggregated': dict({})
                },
                'context': context,
                'parameters': dict(parameters),
            },
        }];
}
exports.procedure = procedure;
function null_() {
    return ['null', null];
}
exports.null_ = null_;
function string() {
    return ['string', null];
}
exports.string = string;
function number() {
    return ['number', null];
}
exports.number = number;
function boolean() {
    return ['boolean', null];
}
exports.boolean = boolean;
function group(properties) {
    return ['group', dict(properties)];
}
exports.group = group;
function prop(type) {
    return {
        'type': type,
        'mutable': [false]
    };
}
exports.prop = prop;
function propMutable(type) {
    return {
        'type': type,
        'mutable': [true, null]
    };
}
exports.propMutable = propMutable;
function taggedUnion(options) {
    return ['tagged union', dict(options)];
}
exports.taggedUnion = taggedUnion;
function array(type) {
    return ['array', type];
}
exports.array = array;
function computed(type) {
    return ['computed', type];
}
exports.computed = computed;
function optional(type) {
    return ['optional', type];
}
exports.optional = optional;
function dictionary(type) {
    return ['dictionary', type];
}
exports.dictionary = dictionary;
function step(ns, args, tail) {
    return {
        'namespace': ref(ns),
        'arguments': dict(args === undefined ? {} : args),
        'tail': tail === undefined ? [false] : [true, tail]
    };
}
exports.step = step;
function typeArgument(type) {
    return {
        'type': type
    };
}
exports.typeArgument = typeArgument;
function externalTypeReference(nsPath, type) {
    return ['type reference', ['external', {
                'namespaces': nsPath,
                'type': ref(type)
            }]];
}
exports.externalTypeReference = externalTypeReference;
function typeParameter(typeParameter) {
    return ['type parameter', ref(typeParameter)];
}
exports.typeParameter = typeParameter;
function typeReference(type, cyclic) {
    if (cyclic) {
        return ['type reference', ['cyclic sibling', ref(type)]];
    }
    else {
        return ['type reference', ['sibling', ref(type)]];
    }
}
exports.typeReference = typeReference;
