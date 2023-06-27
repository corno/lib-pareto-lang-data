
import * as _pt from 'pareto-core-types'

namespace _ {
    
    export type Address<T> = { get: () => T, set: ($: T) => void } 
}

export namespace pareto__lang__data {
    
    export namespace Unresolved {
        
        export namespace Flat {}
        
        export namespace T {
            
            import _IFlat = Flat
        }
    }
    
    export namespace Resolved {
        
        export namespace Flat {}
        
        export namespace T {
            
            import _IFlat = Flat
        }
    }
    
    export namespace Resolve {
        
        import _IResolved = Resolved
        
        import _IUnresolved = Unresolved
        
        export namespace selectors {
            
            
        }
        
        export namespace resolvers {
            
            
        }
        
        export type $ = null
    }
    
    export namespace Serialize {
        
        import _IResolved = Resolved
        
        export namespace types {
            
        }
        
        export type $ = null
    }
}

export type $ = {
    readonly 'pareto lang data': {
        readonly 'createResolveContext': (
            $: null,
        ) => pareto__lang__data.Resolve.$
        readonly 'createSerializeContext': (
            $: null,
        ) => pareto__lang__data.Serialize.$
    }
}