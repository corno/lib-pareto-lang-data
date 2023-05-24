import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_in from "../../resolved"
import * as g_out from "lib-proto-typesystem/dist/submodules/unresolved"

export namespace N {}

export namespace T {
    
    export namespace MapParameters {
        
        export namespace atom__mappings {
            
            export namespace D {
                
                export namespace _lboolean {}
                
                export type _lboolean = null
                
                export namespace _lnumber {}
                
                export type _lnumber = null
                
                export namespace _lstring {}
                
                export type _lstring = null
            }
            
            export type D = 
                | ['boolean', null]
                | ['number', null]
                | ['string', null]
        }
        
        export type atom__mappings = pt.Dictionary<
            | ['boolean', null]
            | ['number', null]
            | ['string', null]
        >
        
        export type data = g_in.T.Type__Library
    }
    
    export type MapParameters = {
        readonly 'atom mappings': pt.Dictionary<
            | ['boolean', null]
            | ['number', null]
            | ['string', null]
        >
        readonly 'data': g_in.T.Type__Library
    }
    
    export namespace SourceLocation {
        
        export type column = number
        
        export type file = string
        
        export type line = number
    }
    
    export type SourceLocation = {
        readonly 'column': number
        readonly 'file': string
        readonly 'line': number
    }
}