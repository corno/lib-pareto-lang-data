import * as pl from 'pareto-core-lib'

import * as g_this from "../../typesystem"

import Select2 = g_this.pareto__lang__data.Select

import * as Select from "./Select"

export const Type__Selection: Select2.Type__Selection = ($) => {
    return pl.optional(
        $.tail,
        ($) => Type__Selection__Tail($),
        () => $['global type'].referent.type
    )
}

export const Type__Selection__Tail__Step__Type: Select.Type__Selection__Tail__Step__Type = ($) => {
    switch ($[0]) {
        case 'array': return pl.ss($, ($) => $.array.type)
        case 'dictionary': return pl.ss($, ($) => $.dictionary.type)
        case 'group': return pl.ss($, ($) => $.property.referent.type)
        case 'optional': return pl.ss($, ($) => $.optional.type)
        case 'state group': return pl.ss($, ($) => $.state.referent.type)
        default: return pl.au($[0])
    }
}

export const Type__Selection__Tail: Select2.Type__Selection__Tail = ($) => {
    return pl.optional(
        $.tail,
        ($) => Type__Selection__Tail($),
        () => pl.cc($['step type'], ($) => Type__Selection__Tail__Step__Type($))
    )
}