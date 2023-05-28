import * as pt from 'pareto-core-types'
import * as pl from 'pareto-core-lib'

//import * as Select from "./Select"


import * as g_this from "../../ts"

import Out = g_this.proto__typesystem.Resolved.T
import Select = g_this.proto__typesystem.Select

export const selectLocalNSFromNS2: Select.Namespace__2 = ($) => {
    switch ($[0]) {
        case 'local': return pl.ss($, ($) => $)
        case 'parent sibling': return pl.ss($, ($) => selectLocalNSFromNS2($.namespace.referent))
        default: return pl.au($[0])
    }
}

export const Namespace__Selection: Select.Namespace__Selection = ($) =>{
    return pl.optional(
        $.tail,
        ($) => Namespace__Selection($),
        () => $.namespace.referent
    )
}