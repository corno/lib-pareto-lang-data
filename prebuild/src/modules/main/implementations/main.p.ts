import * as pd from 'pareto-core-data'
import * as pv from 'pareto-core-dev'

import * as a_pld from "lib-pareto-lang-data"
import * as a_main from "res-pareto-main"

import { $ as data } from "../../../data/data.data"
// import { $ as lli } from "../../../data/models/lowlevel_implementation.data"
// import { $ as glossary } from "../../../data/models/glossary.data"

import { main } from "../api"

export const $$: main = ($) => {
    //pv.logDebugMessage("REENABLE")
    const el = a_main.$r.createErrorLogger().construct()
    pv.logDebugMessage("HIER")
    const x = a_pld.$b.generateSubmodules()
    
    pv.logDebugMessage("DAAR")
    x(data, null)
    pv.logDebugMessage("UUUUUUUUUUU")

    el.end()
}