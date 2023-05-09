import * as pt from 'pareto-core-types'

import * as g_2glossary from "../2glossary"
import * as g_array from "res-pareto-array"
import * as g_fp from "lib-fountain-pen"
import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary_serialize"
import * as g_this from "./glossary"

export namespace D {
    
    export type generateSubmodules = {
        readonly 'createFile': g_fp.SYNC.A.P.CreateFile
        readonly 'map2Glossary': g_2glossary.SYNC.A.F.Map
        readonly 'merge': g_array.SYNC.A.F.Merge
        readonly 'serializeGlossary': g_glossary.SYNC.A.P.Serialize<null>
    }
}

export namespace A {
    
    export type generateSubmodules = ($d: D.generateSubmodules, ) => g_this.SYNC.A.P.GenerateSubmodules
}

export type API = {
    readonly 'generateSubmodules': A.generateSubmodules
}