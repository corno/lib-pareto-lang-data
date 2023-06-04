
import * as _pt from 'pareto-core-types'

namespace _ {
    
    export type Address<T> = { get: () => T, set: ($: T) => void } 
}

export namespace pareto__lang__data {
    
    export namespace Unresolved {
        
        export namespace Flat {
            
            export type Atom__Types$D$<_TAnnotation> = null
            
            export type Atom__Types$<_TAnnotation> = _pt.Dictionary<Atom__Types$D$<_TAnnotation>>
            
            export type Atom$type$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Atom$<_TAnnotation> = {
                readonly 'type': Atom$type$<_TAnnotation>
            }
            
            export type Type$type$array$type$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$type$array$<_TAnnotation> = {
                readonly 'type': Type$type$array$type$<_TAnnotation>
            }
            
            export type Type$type$atom$atom$<_TAnnotation> = Atom$<_TAnnotation>
            
            export type Type$type$atom$<_TAnnotation> = {
                readonly 'atom': Type$type$atom$atom$<_TAnnotation>
            }
            
            export type Type$type$component$type$<_TAnnotation> = Global__Type__Selection$<_TAnnotation>
            
            export type Type$type$component$arguments$D$<_TAnnotation> = null
            
            export type Type$type$component$arguments$<_TAnnotation> = _pt.Dictionary<Type$type$component$arguments$D$<_TAnnotation>>
            
            export type Type$type$component$<_TAnnotation> = {
                readonly 'arguments': Type$type$component$arguments$<_TAnnotation>
                readonly 'type': Type$type$component$type$<_TAnnotation>
            }
            
            export type Type$type$constraint$<_TAnnotation> = Type__Selection$<_TAnnotation>
            
            export type Type$type$cyclic__reference$atom$<_TAnnotation> = Atom$<_TAnnotation>
            
            export type Type$type$cyclic__reference$sibling$<_TAnnotation> = Global__Type__Selection$<_TAnnotation>
            
            export type Type$type$cyclic__reference$<_TAnnotation> = {
                readonly 'atom': Type$type$cyclic__reference$atom$<_TAnnotation>
                readonly 'sibling': Type$type$cyclic__reference$sibling$<_TAnnotation>
            }
            
            export type Type$type$dictionary$key$<_TAnnotation> = Atom$<_TAnnotation>
            
            export type Type$type$dictionary$constraints$D$dictionary$dictionary$<_TAnnotation> = Dictionary__Selection$<_TAnnotation>
            
            export type Type$type$dictionary$constraints$D$dictionary$dense$no$<_TAnnotation> = null
            
            export type Type$type$dictionary$constraints$D$dictionary$dense$yes$<_TAnnotation> = null
            
            export type Type$type$dictionary$constraints$D$dictionary$dense$<_TAnnotation> = 
                | ['no', Type$type$dictionary$constraints$D$dictionary$dense$no$<_TAnnotation>]
                | ['yes', Type$type$dictionary$constraints$D$dictionary$dense$yes$<_TAnnotation>]
            
            export type Type$type$dictionary$constraints$D$dictionary$<_TAnnotation> = {
                readonly 'dense': Type$type$dictionary$constraints$D$dictionary$dense$<_TAnnotation>
                readonly 'dictionary': Type$type$dictionary$constraints$D$dictionary$dictionary$<_TAnnotation>
            }
            
            export type Type$type$dictionary$constraints$D$lookup$<_TAnnotation> = Global__Type__Selection$<_TAnnotation>
            
            export type Type$type$dictionary$constraints$D$<_TAnnotation> = 
                | ['dictionary', Type$type$dictionary$constraints$D$dictionary$<_TAnnotation>]
                | ['lookup', Type$type$dictionary$constraints$D$lookup$<_TAnnotation>]
            
            export type Type$type$dictionary$constraints$<_TAnnotation> = _pt.Dictionary<Type$type$dictionary$constraints$D$<_TAnnotation>>
            
            export type Type$type$dictionary$type$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$type$dictionary$<_TAnnotation> = {
                readonly 'constraints': Type$type$dictionary$constraints$<_TAnnotation>
                readonly 'key': Type$type$dictionary$key$<_TAnnotation>
                readonly 'type': Type$type$dictionary$type$<_TAnnotation>
            }
            
            export type Type$type$group$properties$D$type$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$type$group$properties$D$<_TAnnotation> = {
                readonly 'type': Type$type$group$properties$D$type$<_TAnnotation>
            }
            
            export type Type$type$group$properties$<_TAnnotation> = _pt.Dictionary<Type$type$group$properties$D$<_TAnnotation>>
            
            export type Type$type$group$<_TAnnotation> = {
                readonly 'properties': Type$type$group$properties$<_TAnnotation>
            }
            
            export type Type$type$nothing$<_TAnnotation> = null
            
            export type Type$type$optional$type$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$type$optional$<_TAnnotation> = {
                readonly 'type': Type$type$optional$type$<_TAnnotation>
            }
            
            export type Type$type$resolved__reference$atom$<_TAnnotation> = Atom$<_TAnnotation>
            
            export type Type$type$resolved__reference$value$dictionary$<_TAnnotation> = Dictionary__Selection$<_TAnnotation>
            
            export type Type$type$resolved__reference$value$lookup$<_TAnnotation> = Global__Type__Selection$<_TAnnotation>
            
            export type Type$type$resolved__reference$value$<_TAnnotation> = 
                | ['dictionary', Type$type$resolved__reference$value$dictionary$<_TAnnotation>]
                | ['lookup', Type$type$resolved__reference$value$lookup$<_TAnnotation>]
            
            export type Type$type$resolved__reference$<_TAnnotation> = {
                readonly 'atom': Type$type$resolved__reference$atom$<_TAnnotation>
                readonly 'value': Type$type$resolved__reference$value$<_TAnnotation>
            }
            
            export type Type$type$state__group$states$D$type$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$type$state__group$states$D$<_TAnnotation> = {
                readonly 'type': Type$type$state__group$states$D$type$<_TAnnotation>
            }
            
            export type Type$type$state__group$states$<_TAnnotation> = _pt.Dictionary<Type$type$state__group$states$D$<_TAnnotation>>
            
            export type Type$type$state__group$<_TAnnotation> = {
                readonly 'states': Type$type$state__group$states$<_TAnnotation>
            }
            
            export type Type$type$<_TAnnotation> = 
                | ['array', Type$type$array$<_TAnnotation>]
                | ['atom', Type$type$atom$<_TAnnotation>]
                | ['component', Type$type$component$<_TAnnotation>]
                | ['constraint', Type$type$constraint$<_TAnnotation>]
                | ['cyclic reference', Type$type$cyclic__reference$<_TAnnotation>]
                | ['dictionary', Type$type$dictionary$<_TAnnotation>]
                | ['group', Type$type$group$<_TAnnotation>]
                | ['nothing', Type$type$nothing$<_TAnnotation>]
                | ['optional', Type$type$optional$<_TAnnotation>]
                | ['resolved reference', Type$type$resolved__reference$<_TAnnotation>]
                | ['state group', Type$type$state__group$<_TAnnotation>]
            
            export type Type$<_TAnnotation> = {
                readonly 'type': Type$type$<_TAnnotation>
            }
            
            export type Imports$D$library$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Imports$D$<_TAnnotation> = {
                readonly 'library': Imports$D$library$<_TAnnotation>
            }
            
            export type Imports$<_TAnnotation> = _pt.Dictionary<Imports$D$<_TAnnotation>>
            
            export type Global__Type__Declaration$parameters$D$type$resolved__value$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Global__Type__Declaration$parameters$D$type$sibling__lookup$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Global__Type__Declaration$parameters$D$type$cyclic__sibling__lookup$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Global__Type__Declaration$parameters$D$type$<_TAnnotation> = 
                | ['cyclic sibling lookup', Global__Type__Declaration$parameters$D$type$cyclic__sibling__lookup$<_TAnnotation>]
                | ['resolved value', Global__Type__Declaration$parameters$D$type$resolved__value$<_TAnnotation>]
                | ['sibling lookup', Global__Type__Declaration$parameters$D$type$sibling__lookup$<_TAnnotation>]
            
            export type Global__Type__Declaration$parameters$D$optional$O$<_TAnnotation> = null
            
            export type Global__Type__Declaration$parameters$D$optional$<_TAnnotation> = _pt.OptionalValue<Global__Type__Declaration$parameters$D$optional$O$<_TAnnotation>>
            
            export type Global__Type__Declaration$parameters$D$<_TAnnotation> = {
                readonly 'optional': Global__Type__Declaration$parameters$D$optional$<_TAnnotation>
                readonly 'type': Global__Type__Declaration$parameters$D$type$<_TAnnotation>
            }
            
            export type Global__Type__Declaration$parameters$<_TAnnotation> = _pt.Dictionary<Global__Type__Declaration$parameters$D$<_TAnnotation>>
            
            export type Global__Type__Declaration$result$O$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Global__Type__Declaration$result$<_TAnnotation> = _pt.OptionalValue<Global__Type__Declaration$result$O$<_TAnnotation>>
            
            export type Global__Type__Declaration$<_TAnnotation> = {
                readonly 'parameters': Global__Type__Declaration$parameters$<_TAnnotation>
                readonly 'result': Global__Type__Declaration$result$<_TAnnotation>
            }
            
            export type Global__Type__Declarations$D$<_TAnnotation> = Global__Type__Declaration$<_TAnnotation>
            
            export type Global__Type__Declarations$<_TAnnotation> = _pt.Dictionary<Global__Type__Declarations$D$<_TAnnotation>>
            
            export type Global__Type__Definition$declaration$<_TAnnotation> = _TAnnotation
            
            export type Global__Type__Definition$type$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Global__Type__Definition$<_TAnnotation> = {
                readonly 'declaration': Global__Type__Definition$declaration$<_TAnnotation>
                readonly 'type': Global__Type__Definition$type$<_TAnnotation>
            }
            
            export type Type__Selection__Tail$step__type$dictionary$dictionary$<_TAnnotation> = _TAnnotation
            
            export type Type__Selection__Tail$step__type$dictionary$tail$O$<_TAnnotation> = Type__Selection__Tail$<_TAnnotation>
            
            export type Type__Selection__Tail$step__type$dictionary$tail$<_TAnnotation> = _pt.OptionalValue<Type__Selection__Tail$step__type$dictionary$tail$O$<_TAnnotation>>
            
            export type Type__Selection__Tail$step__type$dictionary$<_TAnnotation> = {
                readonly 'dictionary': Type__Selection__Tail$step__type$dictionary$dictionary$<_TAnnotation>
                readonly 'tail': Type__Selection__Tail$step__type$dictionary$tail$<_TAnnotation>
            }
            
            export type Type__Selection__Tail$step__type$optional$optional$<_TAnnotation> = _TAnnotation
            
            export type Type__Selection__Tail$step__type$optional$tail$O$<_TAnnotation> = Type__Selection__Tail$<_TAnnotation>
            
            export type Type__Selection__Tail$step__type$optional$tail$<_TAnnotation> = _pt.OptionalValue<Type__Selection__Tail$step__type$optional$tail$O$<_TAnnotation>>
            
            export type Type__Selection__Tail$step__type$optional$<_TAnnotation> = {
                readonly 'optional': Type__Selection__Tail$step__type$optional$optional$<_TAnnotation>
                readonly 'tail': Type__Selection__Tail$step__type$optional$tail$<_TAnnotation>
            }
            
            export type Type__Selection__Tail$step__type$array$array$<_TAnnotation> = _TAnnotation
            
            export type Type__Selection__Tail$step__type$array$tail$O$<_TAnnotation> = Type__Selection__Tail$<_TAnnotation>
            
            export type Type__Selection__Tail$step__type$array$tail$<_TAnnotation> = _pt.OptionalValue<Type__Selection__Tail$step__type$array$tail$O$<_TAnnotation>>
            
            export type Type__Selection__Tail$step__type$array$<_TAnnotation> = {
                readonly 'array': Type__Selection__Tail$step__type$array$array$<_TAnnotation>
                readonly 'tail': Type__Selection__Tail$step__type$array$tail$<_TAnnotation>
            }
            
            export type Type__Selection__Tail$step__type$group$group$<_TAnnotation> = _TAnnotation
            
            export type Type__Selection__Tail$step__type$group$property$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Type__Selection__Tail$step__type$group$tail$O$<_TAnnotation> = Type__Selection__Tail$<_TAnnotation>
            
            export type Type__Selection__Tail$step__type$group$tail$<_TAnnotation> = _pt.OptionalValue<Type__Selection__Tail$step__type$group$tail$O$<_TAnnotation>>
            
            export type Type__Selection__Tail$step__type$group$<_TAnnotation> = {
                readonly 'group': Type__Selection__Tail$step__type$group$group$<_TAnnotation>
                readonly 'property': Type__Selection__Tail$step__type$group$property$<_TAnnotation>
                readonly 'tail': Type__Selection__Tail$step__type$group$tail$<_TAnnotation>
            }
            
            export type Type__Selection__Tail$step__type$state__group$state__group$<_TAnnotation> = _TAnnotation
            
            export type Type__Selection__Tail$step__type$state__group$state$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Type__Selection__Tail$step__type$state__group$tail$O$<_TAnnotation> = Type__Selection__Tail$<_TAnnotation>
            
            export type Type__Selection__Tail$step__type$state__group$tail$<_TAnnotation> = _pt.OptionalValue<Type__Selection__Tail$step__type$state__group$tail$O$<_TAnnotation>>
            
            export type Type__Selection__Tail$step__type$state__group$<_TAnnotation> = {
                readonly 'state': Type__Selection__Tail$step__type$state__group$state$<_TAnnotation>
                readonly 'state group': Type__Selection__Tail$step__type$state__group$state__group$<_TAnnotation>
                readonly 'tail': Type__Selection__Tail$step__type$state__group$tail$<_TAnnotation>
            }
            
            export type Type__Selection__Tail$step__type$<_TAnnotation> = 
                | ['array', Type__Selection__Tail$step__type$array$<_TAnnotation>]
                | ['dictionary', Type__Selection__Tail$step__type$dictionary$<_TAnnotation>]
                | ['group', Type__Selection__Tail$step__type$group$<_TAnnotation>]
                | ['optional', Type__Selection__Tail$step__type$optional$<_TAnnotation>]
                | ['state group', Type__Selection__Tail$step__type$state__group$<_TAnnotation>]
            
            export type Type__Selection__Tail$<_TAnnotation> = {
                readonly 'step type': Type__Selection__Tail$step__type$<_TAnnotation>
            }
            
            export type Type__Selection$import$O$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Type__Selection$import$<_TAnnotation> = _pt.OptionalValue<Type__Selection$import$O$<_TAnnotation>>
            
            export type Type__Selection$global__type$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Type__Selection$tail$O$<_TAnnotation> = Type__Selection__Tail$<_TAnnotation>
            
            export type Type__Selection$tail$<_TAnnotation> = _pt.OptionalValue<Type__Selection$tail$O$<_TAnnotation>>
            
            export type Type__Selection$<_TAnnotation> = {
                readonly 'global type': Type__Selection$global__type$<_TAnnotation>
                readonly 'import': Type__Selection$import$<_TAnnotation>
                readonly 'tail': Type__Selection$tail$<_TAnnotation>
            }
            
            export type Dictionary__Selection$type$<_TAnnotation> = Type__Selection$<_TAnnotation>
            
            export type Dictionary__Selection$dictionary$<_TAnnotation> = _TAnnotation
            
            export type Dictionary__Selection$<_TAnnotation> = {
                readonly 'dictionary': Dictionary__Selection$dictionary$<_TAnnotation>
                readonly 'type': Dictionary__Selection$type$<_TAnnotation>
            }
            
            export type Type__Library$imports$<_TAnnotation> = Imports$<_TAnnotation>
            
            export type Type__Library$atom__types$<_TAnnotation> = Atom__Types$<_TAnnotation>
            
            export type Type__Library$global__types$declarations$<_TAnnotation> = Global__Type__Declarations$<_TAnnotation>
            
            export type Type__Library$global__types$definitions$D$<_TAnnotation> = Global__Type__Definition$<_TAnnotation>
            
            export type Type__Library$global__types$definitions$<_TAnnotation> = _pt.Dictionary<Type__Library$global__types$definitions$D$<_TAnnotation>>
            
            export type Type__Library$global__types$<_TAnnotation> = {
                readonly 'declarations': Type__Library$global__types$declarations$<_TAnnotation>
                readonly 'definitions': Type__Library$global__types$definitions$<_TAnnotation>
            }
            
            export type Type__Library$<_TAnnotation> = {
                readonly 'atom types': Type__Library$atom__types$<_TAnnotation>
                readonly 'global types': Type__Library$global__types$<_TAnnotation>
                readonly 'imports': Type__Library$imports$<_TAnnotation>
            }
            
            export type Global__Type__Selection$resolved__sibling$type$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Global__Type__Selection$resolved__sibling$<_TAnnotation> = {
                readonly 'type': Global__Type__Selection$resolved__sibling$type$<_TAnnotation>
            }
            
            export type Global__Type__Selection$import$library$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Global__Type__Selection$import$type$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Global__Type__Selection$import$<_TAnnotation> = {
                readonly 'library': Global__Type__Selection$import$library$<_TAnnotation>
                readonly 'type': Global__Type__Selection$import$type$<_TAnnotation>
            }
            
            export type Global__Type__Selection$cyclic__sibling$type$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Global__Type__Selection$cyclic__sibling$<_TAnnotation> = {
                readonly 'type': Global__Type__Selection$cyclic__sibling$type$<_TAnnotation>
            }
            
            export type Global__Type__Selection$<_TAnnotation> = 
                | ['cyclic sibling', Global__Type__Selection$cyclic__sibling$<_TAnnotation>]
                | ['import', Global__Type__Selection$import$<_TAnnotation>]
                | ['resolved sibling', Global__Type__Selection$resolved__sibling$<_TAnnotation>]
            
            export type Model$type__library$<_TAnnotation> = Type__Library$<_TAnnotation>
            
            export type Model$root$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Model$<_TAnnotation> = {
                readonly 'root': Model$root$<_TAnnotation>
                readonly 'type library': Model$type__library$<_TAnnotation>
            }
            
            export type Project$type__libraries$D$<_TAnnotation> = Type__Library$<_TAnnotation>
            
            export type Project$type__libraries$<_TAnnotation> = _pt.Dictionary<Project$type__libraries$D$<_TAnnotation>>
            
            export type Project$<_TAnnotation> = {
                readonly 'type libraries': Project$type__libraries$<_TAnnotation>
            }
            
            export type Root$<_TAnnotation> = Project$<_TAnnotation>
        }
        
        export namespace T {
            
            import _IFlat = Flat
            
            export namespace Atom__Types {
                
                
                export namespace D {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Atom__Types$D$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Atom__Types$<_TAnnotation>
            }
            
            export namespace Atom {
                
                
                export namespace _ltype {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Atom$type$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Atom$<_TAnnotation>
            }
            
            export namespace TType {
                
                
                export namespace _ltype {
                    
                    
                    export namespace array {
                        
                        
                        export namespace _ltype {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$array$type$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$array$<_TAnnotation>
                    }
                    
                    export namespace atom {
                        
                        
                        export namespace atom {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$atom$atom$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$atom$<_TAnnotation>
                    }
                    
                    export namespace component {
                        
                        
                        export namespace _ltype {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$component$type$<_TAnnotation>
                        }
                        
                        export namespace _larguments {
                            
                            
                            export namespace D {
                                
                                
                                export type $<_TAnnotation> = _IFlat.Type$type$component$arguments$D$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$component$arguments$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$component$<_TAnnotation>
                    }
                    
                    export namespace constraint {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$constraint$<_TAnnotation>
                    }
                    
                    export namespace cyclic__reference {
                        
                        
                        export namespace atom {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$cyclic__reference$atom$<_TAnnotation>
                        }
                        
                        export namespace sibling {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$cyclic__reference$sibling$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$cyclic__reference$<_TAnnotation>
                    }
                    
                    export namespace dictionary {
                        
                        
                        export namespace key {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$dictionary$key$<_TAnnotation>
                        }
                        
                        export namespace constraints {
                            
                            
                            export namespace D {
                                
                                
                                export namespace dictionary {
                                    
                                    
                                    export namespace dictionary {
                                        
                                        
                                        export type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$dictionary$dictionary$<_TAnnotation>
                                    }
                                    
                                    export namespace dense {
                                        
                                        
                                        export namespace no {
                                            
                                            
                                            export type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$dictionary$dense$no$<_TAnnotation>
                                        }
                                        
                                        export namespace yes {
                                            
                                            
                                            export type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$dictionary$dense$yes$<_TAnnotation>
                                        }
                                        
                                        export type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$dictionary$dense$<_TAnnotation>
                                    }
                                    
                                    export type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$dictionary$<_TAnnotation>
                                }
                                
                                export namespace lookup {
                                    
                                    
                                    export type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$lookup$<_TAnnotation>
                                }
                                
                                export type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$<_TAnnotation>
                        }
                        
                        export namespace _ltype {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$dictionary$type$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$dictionary$<_TAnnotation>
                    }
                    
                    export namespace group {
                        
                        
                        export namespace properties {
                            
                            
                            export namespace D {
                                
                                
                                export namespace _ltype {
                                    
                                    
                                    export type $<_TAnnotation> = _IFlat.Type$type$group$properties$D$type$<_TAnnotation>
                                }
                                
                                export type $<_TAnnotation> = _IFlat.Type$type$group$properties$D$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$group$properties$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$group$<_TAnnotation>
                    }
                    
                    export namespace nothing {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$nothing$<_TAnnotation>
                    }
                    
                    export namespace optional {
                        
                        
                        export namespace _ltype {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$optional$type$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$optional$<_TAnnotation>
                    }
                    
                    export namespace resolved__reference {
                        
                        
                        export namespace atom {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$resolved__reference$atom$<_TAnnotation>
                        }
                        
                        export namespace value {
                            
                            
                            export namespace dictionary {
                                
                                
                                export type $<_TAnnotation> = _IFlat.Type$type$resolved__reference$value$dictionary$<_TAnnotation>
                            }
                            
                            export namespace lookup {
                                
                                
                                export type $<_TAnnotation> = _IFlat.Type$type$resolved__reference$value$lookup$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$resolved__reference$value$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$resolved__reference$<_TAnnotation>
                    }
                    
                    export namespace state__group {
                        
                        
                        export namespace states {
                            
                            
                            export namespace D {
                                
                                
                                export namespace _ltype {
                                    
                                    
                                    export type $<_TAnnotation> = _IFlat.Type$type$state__group$states$D$type$<_TAnnotation>
                                }
                                
                                export type $<_TAnnotation> = _IFlat.Type$type$state__group$states$D$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$state__group$states$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$state__group$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type$type$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Type$<_TAnnotation>
            }
            
            export namespace Imports {
                
                
                export namespace D {
                    
                    
                    export namespace library {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Imports$D$library$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Imports$D$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Imports$<_TAnnotation>
            }
            
            export namespace Global__Type__Declaration {
                
                
                export namespace parameters {
                    
                    
                    export namespace D {
                        
                        
                        export namespace _ltype {
                            
                            
                            export namespace resolved__value {
                                
                                
                                export type $<_TAnnotation> = _IFlat.Global__Type__Declaration$parameters$D$type$resolved__value$<_TAnnotation>
                            }
                            
                            export namespace sibling__lookup {
                                
                                
                                export type $<_TAnnotation> = _IFlat.Global__Type__Declaration$parameters$D$type$sibling__lookup$<_TAnnotation>
                            }
                            
                            export namespace cyclic__sibling__lookup {
                                
                                
                                export type $<_TAnnotation> = _IFlat.Global__Type__Declaration$parameters$D$type$cyclic__sibling__lookup$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Global__Type__Declaration$parameters$D$type$<_TAnnotation>
                        }
                        
                        export namespace optional {
                            
                            
                            export namespace O {
                                
                                
                                export type $<_TAnnotation> = _IFlat.Global__Type__Declaration$parameters$D$optional$O$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Global__Type__Declaration$parameters$D$optional$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Global__Type__Declaration$parameters$D$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Global__Type__Declaration$parameters$<_TAnnotation>
                }
                
                export namespace result {
                    
                    
                    export namespace O {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Global__Type__Declaration$result$O$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Global__Type__Declaration$result$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Global__Type__Declaration$<_TAnnotation>
            }
            
            export namespace Global__Type__Declarations {
                
                
                export namespace D {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Global__Type__Declarations$D$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Global__Type__Declarations$<_TAnnotation>
            }
            
            export namespace Global__Type__Definition {
                
                
                export namespace declaration {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Global__Type__Definition$declaration$<_TAnnotation>
                }
                
                export namespace _ltype {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Global__Type__Definition$type$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Global__Type__Definition$<_TAnnotation>
            }
            
            export namespace TType__Selection__Tail {
                
                
                export namespace step__type {
                    
                    
                    export namespace dictionary {
                        
                        
                        export namespace dictionary {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$dictionary$dictionary$<_TAnnotation>
                        }
                        
                        export namespace tail {
                            
                            
                            export namespace O {
                                
                                
                                export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$dictionary$tail$O$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$dictionary$tail$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$dictionary$<_TAnnotation>
                    }
                    
                    export namespace optional {
                        
                        
                        export namespace optional {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$optional$optional$<_TAnnotation>
                        }
                        
                        export namespace tail {
                            
                            
                            export namespace O {
                                
                                
                                export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$optional$tail$O$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$optional$tail$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$optional$<_TAnnotation>
                    }
                    
                    export namespace array {
                        
                        
                        export namespace array {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$array$array$<_TAnnotation>
                        }
                        
                        export namespace tail {
                            
                            
                            export namespace O {
                                
                                
                                export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$array$tail$O$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$array$tail$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$array$<_TAnnotation>
                    }
                    
                    export namespace group {
                        
                        
                        export namespace group {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$group$group$<_TAnnotation>
                        }
                        
                        export namespace property {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$group$property$<_TAnnotation>
                        }
                        
                        export namespace tail {
                            
                            
                            export namespace O {
                                
                                
                                export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$group$tail$O$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$group$tail$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$group$<_TAnnotation>
                    }
                    
                    export namespace state__group {
                        
                        
                        export namespace state__group {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$state__group$state__group$<_TAnnotation>
                        }
                        
                        export namespace state {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$state__group$state$<_TAnnotation>
                        }
                        
                        export namespace tail {
                            
                            
                            export namespace O {
                                
                                
                                export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$state__group$tail$O$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$state__group$tail$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$state__group$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$<_TAnnotation>
            }
            
            export namespace TType__Selection {
                
                
                export namespace _limport {
                    
                    
                    export namespace O {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Type__Selection$import$O$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type__Selection$import$<_TAnnotation>
                }
                
                export namespace global__type {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Type__Selection$global__type$<_TAnnotation>
                }
                
                export namespace tail {
                    
                    
                    export namespace O {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Type__Selection$tail$O$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type__Selection$tail$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Type__Selection$<_TAnnotation>
            }
            
            export namespace Dictionary__Selection {
                
                
                export namespace _ltype {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Dictionary__Selection$type$<_TAnnotation>
                }
                
                export namespace dictionary {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Dictionary__Selection$dictionary$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Dictionary__Selection$<_TAnnotation>
            }
            
            export namespace TType__Library {
                
                
                export namespace imports {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Type__Library$imports$<_TAnnotation>
                }
                
                export namespace atom__types {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Type__Library$atom__types$<_TAnnotation>
                }
                
                export namespace global__types {
                    
                    
                    export namespace declarations {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Type__Library$global__types$declarations$<_TAnnotation>
                    }
                    
                    export namespace definitions {
                        
                        
                        export namespace D {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type__Library$global__types$definitions$D$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type__Library$global__types$definitions$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type__Library$global__types$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Type__Library$<_TAnnotation>
            }
            
            export namespace Global__Type__Selection {
                
                
                export namespace resolved__sibling {
                    
                    
                    export namespace _ltype {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Global__Type__Selection$resolved__sibling$type$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Global__Type__Selection$resolved__sibling$<_TAnnotation>
                }
                
                export namespace _limport {
                    
                    
                    export namespace library {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Global__Type__Selection$import$library$<_TAnnotation>
                    }
                    
                    export namespace _ltype {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Global__Type__Selection$import$type$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Global__Type__Selection$import$<_TAnnotation>
                }
                
                export namespace cyclic__sibling {
                    
                    
                    export namespace _ltype {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Global__Type__Selection$cyclic__sibling$type$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Global__Type__Selection$cyclic__sibling$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Global__Type__Selection$<_TAnnotation>
            }
            
            export namespace Model {
                
                
                export namespace type__library {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Model$type__library$<_TAnnotation>
                }
                
                export namespace root {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Model$root$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Model$<_TAnnotation>
            }
            
            export namespace Project {
                
                
                export namespace type__libraries {
                    
                    
                    export namespace D {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Project$type__libraries$D$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Project$type__libraries$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Project$<_TAnnotation>
            }
            
            export namespace Root {
                
                
                export type $<_TAnnotation> = _IFlat.Root$<_TAnnotation>
            }
        }
    }
    
    export namespace Resolved {
        
        export namespace Flat {
            
            export type Atom__Types$D$ = null
            
            export type Atom__Types$ = _pt.Dictionary<Atom__Types$D$>
            
            export type Atom$type$ = {
                readonly 'key': string
                readonly 'referent': Atom__Types$D$
            }
            
            export type Atom$ = {
                readonly 'type': Atom$type$
            }
            
            export type Type$type$array$type$ = Type$
            
            export type Type$type$array$ = {
                readonly 'type': Type$type$array$type$
            }
            
            export type Type$type$atom$atom$ = Atom$
            
            export type Type$type$atom$ = {
                readonly 'atom': Type$type$atom$atom$
            }
            
            export type Type$type$component$type$ = Global__Type__Selection$
            
            export type Type$type$component$arguments$D$ = null
            
            export type Type$type$component$arguments$ = _pt.Dictionary<Type$type$component$arguments$D$>
            
            export type Type$type$component$ = {
                readonly 'arguments': Type$type$component$arguments$
                readonly 'type': Type$type$component$type$
            }
            
            export type Type$type$constraint$ = Type__Selection$
            
            export type Type$type$cyclic__reference$atom$ = Atom$
            
            export type Type$type$cyclic__reference$sibling$ = Global__Type__Selection$
            
            export type Type$type$cyclic__reference$ = {
                readonly 'atom': Type$type$cyclic__reference$atom$
                readonly 'sibling': Type$type$cyclic__reference$sibling$
            }
            
            export type Type$type$dictionary$key$ = Atom$
            
            export type Type$type$dictionary$constraints$D$dictionary$dictionary$ = Dictionary__Selection$
            
            export type Type$type$dictionary$constraints$D$dictionary$dense$no$ = null
            
            export type Type$type$dictionary$constraints$D$dictionary$dense$yes$ = null
            
            export type Type$type$dictionary$constraints$D$dictionary$dense$ = 
                | ['no', Type$type$dictionary$constraints$D$dictionary$dense$no$]
                | ['yes', Type$type$dictionary$constraints$D$dictionary$dense$yes$]
            
            export type Type$type$dictionary$constraints$D$dictionary$ = {
                readonly 'dense': Type$type$dictionary$constraints$D$dictionary$dense$
                readonly 'dictionary': Type$type$dictionary$constraints$D$dictionary$dictionary$
            }
            
            export type Type$type$dictionary$constraints$D$lookup$ = Global__Type__Selection$
            
            export type Type$type$dictionary$constraints$D$ = 
                | ['dictionary', Type$type$dictionary$constraints$D$dictionary$]
                | ['lookup', Type$type$dictionary$constraints$D$lookup$]
            
            export type Type$type$dictionary$constraints$ = _pt.Dictionary<Type$type$dictionary$constraints$D$>
            
            export type Type$type$dictionary$type$ = Type$
            
            export type Type$type$dictionary$ = {
                readonly 'constraints': Type$type$dictionary$constraints$
                readonly 'key': Type$type$dictionary$key$
                readonly 'type': Type$type$dictionary$type$
            }
            
            export type Type$type$group$properties$D$type$ = Type$
            
            export type Type$type$group$properties$D$ = {
                readonly 'type': Type$type$group$properties$D$type$
            }
            
            export type Type$type$group$properties$ = _pt.Dictionary<Type$type$group$properties$D$>
            
            export type Type$type$group$ = {
                readonly 'properties': Type$type$group$properties$
            }
            
            export type Type$type$nothing$ = null
            
            export type Type$type$optional$type$ = Type$
            
            export type Type$type$optional$ = {
                readonly 'type': Type$type$optional$type$
            }
            
            export type Type$type$resolved__reference$atom$ = Atom$
            
            export type Type$type$resolved__reference$value$dictionary$ = Dictionary__Selection$
            
            export type Type$type$resolved__reference$value$lookup$ = Global__Type__Selection$
            
            export type Type$type$resolved__reference$value$ = 
                | ['dictionary', Type$type$resolved__reference$value$dictionary$]
                | ['lookup', Type$type$resolved__reference$value$lookup$]
            
            export type Type$type$resolved__reference$ = {
                readonly 'atom': Type$type$resolved__reference$atom$
                readonly 'value': Type$type$resolved__reference$value$
            }
            
            export type Type$type$state__group$states$D$type$ = Type$
            
            export type Type$type$state__group$states$D$ = {
                readonly 'type': Type$type$state__group$states$D$type$
            }
            
            export type Type$type$state__group$states$ = _pt.Dictionary<Type$type$state__group$states$D$>
            
            export type Type$type$state__group$ = {
                readonly 'states': Type$type$state__group$states$
            }
            
            export type Type$type$ = 
                | ['array', Type$type$array$]
                | ['atom', Type$type$atom$]
                | ['component', Type$type$component$]
                | ['constraint', Type$type$constraint$]
                | ['cyclic reference', Type$type$cyclic__reference$]
                | ['dictionary', Type$type$dictionary$]
                | ['group', Type$type$group$]
                | ['nothing', Type$type$nothing$]
                | ['optional', Type$type$optional$]
                | ['resolved reference', Type$type$resolved__reference$]
                | ['state group', Type$type$state__group$]
            
            export type Type$ = {
                readonly 'type': Type$type$
            }
            
            export type Imports$D$library$ = {
                readonly 'key': string
                readonly 'referent': Type__Library$
            }
            
            export type Imports$D$ = {
                readonly 'library': Imports$D$library$
            }
            
            export type Imports$ = _pt.Dictionary<Imports$D$>
            
            export type Global__Type__Declaration$parameters$D$type$resolved__value$ = {
                readonly 'key': string
                readonly 'referent': _pt.ComputedValue<Global__Type__Declaration$>
            }
            
            export type Global__Type__Declaration$parameters$D$type$sibling__lookup$ = {
                readonly 'key': string
                readonly 'referent': _pt.ComputedValue<Global__Type__Declaration$>
            }
            
            export type Global__Type__Declaration$parameters$D$type$cyclic__sibling__lookup$ = {
                readonly 'key': string
                readonly 'referent': _pt.ComputedValue<Global__Type__Declaration$>
            }
            
            export type Global__Type__Declaration$parameters$D$type$ = 
                | ['cyclic sibling lookup', Global__Type__Declaration$parameters$D$type$cyclic__sibling__lookup$]
                | ['resolved value', Global__Type__Declaration$parameters$D$type$resolved__value$]
                | ['sibling lookup', Global__Type__Declaration$parameters$D$type$sibling__lookup$]
            
            export type Global__Type__Declaration$parameters$D$optional$O$ = null
            
            export type Global__Type__Declaration$parameters$D$optional$ = _pt.OptionalValue<Global__Type__Declaration$parameters$D$optional$O$>
            
            export type Global__Type__Declaration$parameters$D$ = {
                readonly 'optional': Global__Type__Declaration$parameters$D$optional$
                readonly 'type': Global__Type__Declaration$parameters$D$type$
            }
            
            export type Global__Type__Declaration$parameters$ = _pt.Dictionary<Global__Type__Declaration$parameters$D$>
            
            export type Global__Type__Declaration$result$O$ = {
                readonly 'key': string
                readonly 'referent': _pt.ComputedValue<Global__Type__Declaration$>
            }
            
            export type Global__Type__Declaration$result$ = _pt.OptionalValue<Global__Type__Declaration$result$O$>
            
            export type Global__Type__Declaration$ = {
                readonly 'parameters': Global__Type__Declaration$parameters$
                readonly 'result': Global__Type__Declaration$result$
            }
            
            export type Global__Type__Declarations$D$ = Global__Type__Declaration$
            
            export type Global__Type__Declarations$ = _pt.Dictionary<Global__Type__Declarations$D$>
            
            export type Global__Type__Definition$declaration$ = Global__Type__Declarations$D$
            
            export type Global__Type__Definition$type$ = Type$
            
            export type Global__Type__Definition$ = {
                readonly 'declaration': Global__Type__Definition$declaration$
                readonly 'type': Global__Type__Definition$type$
            }
            
            export type Type__Selection__Tail$step__type$dictionary$dictionary$ = Type$type$dictionary$
            
            export type Type__Selection__Tail$step__type$dictionary$tail$O$ = Type__Selection__Tail$
            
            export type Type__Selection__Tail$step__type$dictionary$tail$ = _pt.OptionalValue<Type__Selection__Tail$step__type$dictionary$tail$O$>
            
            export type Type__Selection__Tail$step__type$dictionary$ = {
                readonly 'dictionary': Type__Selection__Tail$step__type$dictionary$dictionary$
                readonly 'tail': Type__Selection__Tail$step__type$dictionary$tail$
            }
            
            export type Type__Selection__Tail$step__type$optional$optional$ = Type$type$optional$
            
            export type Type__Selection__Tail$step__type$optional$tail$O$ = Type__Selection__Tail$
            
            export type Type__Selection__Tail$step__type$optional$tail$ = _pt.OptionalValue<Type__Selection__Tail$step__type$optional$tail$O$>
            
            export type Type__Selection__Tail$step__type$optional$ = {
                readonly 'optional': Type__Selection__Tail$step__type$optional$optional$
                readonly 'tail': Type__Selection__Tail$step__type$optional$tail$
            }
            
            export type Type__Selection__Tail$step__type$array$array$ = Type$type$array$
            
            export type Type__Selection__Tail$step__type$array$tail$O$ = Type__Selection__Tail$
            
            export type Type__Selection__Tail$step__type$array$tail$ = _pt.OptionalValue<Type__Selection__Tail$step__type$array$tail$O$>
            
            export type Type__Selection__Tail$step__type$array$ = {
                readonly 'array': Type__Selection__Tail$step__type$array$array$
                readonly 'tail': Type__Selection__Tail$step__type$array$tail$
            }
            
            export type Type__Selection__Tail$step__type$group$group$ = Type$type$group$
            
            export type Type__Selection__Tail$step__type$group$property$ = {
                readonly 'key': string
                readonly 'referent': Type$type$group$properties$D$
            }
            
            export type Type__Selection__Tail$step__type$group$tail$O$ = Type__Selection__Tail$
            
            export type Type__Selection__Tail$step__type$group$tail$ = _pt.OptionalValue<Type__Selection__Tail$step__type$group$tail$O$>
            
            export type Type__Selection__Tail$step__type$group$ = {
                readonly 'group': Type__Selection__Tail$step__type$group$group$
                readonly 'property': Type__Selection__Tail$step__type$group$property$
                readonly 'tail': Type__Selection__Tail$step__type$group$tail$
            }
            
            export type Type__Selection__Tail$step__type$state__group$state__group$ = Type$type$state__group$
            
            export type Type__Selection__Tail$step__type$state__group$state$ = {
                readonly 'key': string
                readonly 'referent': Type$type$state__group$states$D$
            }
            
            export type Type__Selection__Tail$step__type$state__group$tail$O$ = Type__Selection__Tail$
            
            export type Type__Selection__Tail$step__type$state__group$tail$ = _pt.OptionalValue<Type__Selection__Tail$step__type$state__group$tail$O$>
            
            export type Type__Selection__Tail$step__type$state__group$ = {
                readonly 'state': Type__Selection__Tail$step__type$state__group$state$
                readonly 'state group': Type__Selection__Tail$step__type$state__group$state__group$
                readonly 'tail': Type__Selection__Tail$step__type$state__group$tail$
            }
            
            export type Type__Selection__Tail$step__type$ = 
                | ['array', Type__Selection__Tail$step__type$array$]
                | ['dictionary', Type__Selection__Tail$step__type$dictionary$]
                | ['group', Type__Selection__Tail$step__type$group$]
                | ['optional', Type__Selection__Tail$step__type$optional$]
                | ['state group', Type__Selection__Tail$step__type$state__group$]
            
            export type Type__Selection__Tail$ = {
                readonly 'step type': Type__Selection__Tail$step__type$
            }
            
            export type Type__Selection$import$O$ = {
                readonly 'key': string
                readonly 'referent': Imports$D$
            }
            
            export type Type__Selection$import$ = _pt.OptionalValue<Type__Selection$import$O$>
            
            export type Type__Selection$global__type$ = {
                readonly 'key': string
                readonly 'referent': Global__Type__Definition$
            }
            
            export type Type__Selection$tail$O$ = Type__Selection__Tail$
            
            export type Type__Selection$tail$ = _pt.OptionalValue<Type__Selection$tail$O$>
            
            export type Type__Selection$ = {
                readonly 'global type': Type__Selection$global__type$
                readonly 'import': Type__Selection$import$
                readonly 'tail': Type__Selection$tail$
            }
            
            export type Dictionary__Selection$type$ = Type__Selection$
            
            export type Dictionary__Selection$dictionary$ = Type$type$dictionary$
            
            export type Dictionary__Selection$ = {
                readonly 'dictionary': Dictionary__Selection$dictionary$
                readonly 'type': Dictionary__Selection$type$
            }
            
            export type Type__Library$imports$ = Imports$
            
            export type Type__Library$atom__types$ = Atom__Types$
            
            export type Type__Library$global__types$declarations$ = Global__Type__Declarations$
            
            export type Type__Library$global__types$definitions$D$ = Global__Type__Definition$
            
            export type Type__Library$global__types$definitions$ = _pt.Dictionary<Type__Library$global__types$definitions$D$>
            
            export type Type__Library$global__types$ = {
                readonly 'declarations': Type__Library$global__types$declarations$
                readonly 'definitions': Type__Library$global__types$definitions$
            }
            
            export type Type__Library$ = {
                readonly 'atom types': Type__Library$atom__types$
                readonly 'global types': Type__Library$global__types$
                readonly 'imports': Type__Library$imports$
            }
            
            export type Global__Type__Selection$resolved__sibling$type$ = {
                readonly 'key': string
                readonly 'referent': Global__Type__Definition$
            }
            
            export type Global__Type__Selection$resolved__sibling$ = {
                readonly 'type': Global__Type__Selection$resolved__sibling$type$
            }
            
            export type Global__Type__Selection$import$library$ = {
                readonly 'key': string
                readonly 'referent': Imports$D$
            }
            
            export type Global__Type__Selection$import$type$ = {
                readonly 'key': string
                readonly 'referent': Type__Library$global__types$definitions$D$
            }
            
            export type Global__Type__Selection$import$ = {
                readonly 'library': Global__Type__Selection$import$library$
                readonly 'type': Global__Type__Selection$import$type$
            }
            
            export type Global__Type__Selection$cyclic__sibling$type$ = {
                readonly 'key': string
                readonly 'referent': _pt.ComputedValue<Global__Type__Definition$>
            }
            
            export type Global__Type__Selection$cyclic__sibling$ = {
                readonly 'type': Global__Type__Selection$cyclic__sibling$type$
            }
            
            export type Global__Type__Selection$ = 
                | ['cyclic sibling', Global__Type__Selection$cyclic__sibling$]
                | ['import', Global__Type__Selection$import$]
                | ['resolved sibling', Global__Type__Selection$resolved__sibling$]
            
            export type Model$type__library$ = Type__Library$
            
            export type Model$root$ = {
                readonly 'key': string
                readonly 'referent': Type__Library$global__types$definitions$D$
            }
            
            export type Model$ = {
                readonly 'root': Model$root$
                readonly 'type library': Model$type__library$
            }
            
            export type Project$type__libraries$D$ = Type__Library$
            
            export type Project$type__libraries$ = _pt.Dictionary<Project$type__libraries$D$>
            
            export type Project$ = {
                readonly 'type libraries': Project$type__libraries$
            }
            
            export type Root$ = Project$
        }
        
        export namespace T {
            
            import _IFlat = Flat
            
            export namespace Atom__Types {
                
                
                export namespace D {
                    
                    
                    export type $ = _IFlat.Atom__Types$D$
                }
                
                export type $ = _IFlat.Atom__Types$
            }
            
            export namespace Atom {
                
                
                export namespace _ltype {
                    
                    
                    export type $ = _IFlat.Atom$type$
                }
                
                export type $ = _IFlat.Atom$
            }
            
            export namespace TType {
                
                
                export namespace _ltype {
                    
                    
                    export namespace array {
                        
                        
                        export namespace _ltype {
                            
                            
                            export type $ = _IFlat.Type$type$array$type$
                        }
                        
                        export type $ = _IFlat.Type$type$array$
                    }
                    
                    export namespace atom {
                        
                        
                        export namespace atom {
                            
                            
                            export type $ = _IFlat.Type$type$atom$atom$
                        }
                        
                        export type $ = _IFlat.Type$type$atom$
                    }
                    
                    export namespace component {
                        
                        
                        export namespace _ltype {
                            
                            
                            export type $ = _IFlat.Type$type$component$type$
                        }
                        
                        export namespace _larguments {
                            
                            
                            export namespace D {
                                
                                
                                export type $ = _IFlat.Type$type$component$arguments$D$
                            }
                            
                            export type $ = _IFlat.Type$type$component$arguments$
                        }
                        
                        export type $ = _IFlat.Type$type$component$
                    }
                    
                    export namespace constraint {
                        
                        
                        export type $ = _IFlat.Type$type$constraint$
                    }
                    
                    export namespace cyclic__reference {
                        
                        
                        export namespace atom {
                            
                            
                            export type $ = _IFlat.Type$type$cyclic__reference$atom$
                        }
                        
                        export namespace sibling {
                            
                            
                            export type $ = _IFlat.Type$type$cyclic__reference$sibling$
                        }
                        
                        export type $ = _IFlat.Type$type$cyclic__reference$
                    }
                    
                    export namespace dictionary {
                        
                        
                        export namespace key {
                            
                            
                            export type $ = _IFlat.Type$type$dictionary$key$
                        }
                        
                        export namespace constraints {
                            
                            
                            export namespace D {
                                
                                
                                export namespace dictionary {
                                    
                                    
                                    export namespace dictionary {
                                        
                                        
                                        export type $ = _IFlat.Type$type$dictionary$constraints$D$dictionary$dictionary$
                                    }
                                    
                                    export namespace dense {
                                        
                                        
                                        export namespace no {
                                            
                                            
                                            export type $ = _IFlat.Type$type$dictionary$constraints$D$dictionary$dense$no$
                                        }
                                        
                                        export namespace yes {
                                            
                                            
                                            export type $ = _IFlat.Type$type$dictionary$constraints$D$dictionary$dense$yes$
                                        }
                                        
                                        export type $ = _IFlat.Type$type$dictionary$constraints$D$dictionary$dense$
                                    }
                                    
                                    export type $ = _IFlat.Type$type$dictionary$constraints$D$dictionary$
                                }
                                
                                export namespace lookup {
                                    
                                    
                                    export type $ = _IFlat.Type$type$dictionary$constraints$D$lookup$
                                }
                                
                                export type $ = _IFlat.Type$type$dictionary$constraints$D$
                            }
                            
                            export type $ = _IFlat.Type$type$dictionary$constraints$
                        }
                        
                        export namespace _ltype {
                            
                            
                            export type $ = _IFlat.Type$type$dictionary$type$
                        }
                        
                        export type $ = _IFlat.Type$type$dictionary$
                    }
                    
                    export namespace group {
                        
                        
                        export namespace properties {
                            
                            
                            export namespace D {
                                
                                
                                export namespace _ltype {
                                    
                                    
                                    export type $ = _IFlat.Type$type$group$properties$D$type$
                                }
                                
                                export type $ = _IFlat.Type$type$group$properties$D$
                            }
                            
                            export type $ = _IFlat.Type$type$group$properties$
                        }
                        
                        export type $ = _IFlat.Type$type$group$
                    }
                    
                    export namespace nothing {
                        
                        
                        export type $ = _IFlat.Type$type$nothing$
                    }
                    
                    export namespace optional {
                        
                        
                        export namespace _ltype {
                            
                            
                            export type $ = _IFlat.Type$type$optional$type$
                        }
                        
                        export type $ = _IFlat.Type$type$optional$
                    }
                    
                    export namespace resolved__reference {
                        
                        
                        export namespace atom {
                            
                            
                            export type $ = _IFlat.Type$type$resolved__reference$atom$
                        }
                        
                        export namespace value {
                            
                            
                            export namespace dictionary {
                                
                                
                                export type $ = _IFlat.Type$type$resolved__reference$value$dictionary$
                            }
                            
                            export namespace lookup {
                                
                                
                                export type $ = _IFlat.Type$type$resolved__reference$value$lookup$
                            }
                            
                            export type $ = _IFlat.Type$type$resolved__reference$value$
                        }
                        
                        export type $ = _IFlat.Type$type$resolved__reference$
                    }
                    
                    export namespace state__group {
                        
                        
                        export namespace states {
                            
                            
                            export namespace D {
                                
                                
                                export namespace _ltype {
                                    
                                    
                                    export type $ = _IFlat.Type$type$state__group$states$D$type$
                                }
                                
                                export type $ = _IFlat.Type$type$state__group$states$D$
                            }
                            
                            export type $ = _IFlat.Type$type$state__group$states$
                        }
                        
                        export type $ = _IFlat.Type$type$state__group$
                    }
                    
                    export type $ = _IFlat.Type$type$
                }
                
                export type $ = _IFlat.Type$
            }
            
            export namespace Imports {
                
                
                export namespace D {
                    
                    
                    export namespace library {
                        
                        
                        export type $ = _IFlat.Imports$D$library$
                    }
                    
                    export type $ = _IFlat.Imports$D$
                }
                
                export type $ = _IFlat.Imports$
            }
            
            export namespace Global__Type__Declaration {
                
                
                export namespace parameters {
                    
                    
                    export namespace D {
                        
                        
                        export namespace _ltype {
                            
                            
                            export namespace resolved__value {
                                
                                
                                export type $ = _IFlat.Global__Type__Declaration$parameters$D$type$resolved__value$
                            }
                            
                            export namespace sibling__lookup {
                                
                                
                                export type $ = _IFlat.Global__Type__Declaration$parameters$D$type$sibling__lookup$
                            }
                            
                            export namespace cyclic__sibling__lookup {
                                
                                
                                export type $ = _IFlat.Global__Type__Declaration$parameters$D$type$cyclic__sibling__lookup$
                            }
                            
                            export type $ = _IFlat.Global__Type__Declaration$parameters$D$type$
                        }
                        
                        export namespace optional {
                            
                            
                            export namespace O {
                                
                                
                                export type $ = _IFlat.Global__Type__Declaration$parameters$D$optional$O$
                            }
                            
                            export type $ = _IFlat.Global__Type__Declaration$parameters$D$optional$
                        }
                        
                        export type $ = _IFlat.Global__Type__Declaration$parameters$D$
                    }
                    
                    export type $ = _IFlat.Global__Type__Declaration$parameters$
                }
                
                export namespace result {
                    
                    
                    export namespace O {
                        
                        
                        export type $ = _IFlat.Global__Type__Declaration$result$O$
                    }
                    
                    export type $ = _IFlat.Global__Type__Declaration$result$
                }
                
                export type $ = _IFlat.Global__Type__Declaration$
            }
            
            export namespace Global__Type__Declarations {
                
                
                export namespace D {
                    
                    
                    export type $ = _IFlat.Global__Type__Declarations$D$
                }
                
                export type $ = _IFlat.Global__Type__Declarations$
            }
            
            export namespace Global__Type__Definition {
                
                
                export namespace declaration {
                    
                    
                    export type $ = _IFlat.Global__Type__Definition$declaration$
                }
                
                export namespace _ltype {
                    
                    
                    export type $ = _IFlat.Global__Type__Definition$type$
                }
                
                export type $ = _IFlat.Global__Type__Definition$
            }
            
            export namespace TType__Selection__Tail {
                
                
                export namespace step__type {
                    
                    
                    export namespace dictionary {
                        
                        
                        export namespace dictionary {
                            
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$dictionary$dictionary$
                        }
                        
                        export namespace tail {
                            
                            
                            export namespace O {
                                
                                
                                export type $ = _IFlat.Type__Selection__Tail$step__type$dictionary$tail$O$
                            }
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$dictionary$tail$
                        }
                        
                        export type $ = _IFlat.Type__Selection__Tail$step__type$dictionary$
                    }
                    
                    export namespace optional {
                        
                        
                        export namespace optional {
                            
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$optional$optional$
                        }
                        
                        export namespace tail {
                            
                            
                            export namespace O {
                                
                                
                                export type $ = _IFlat.Type__Selection__Tail$step__type$optional$tail$O$
                            }
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$optional$tail$
                        }
                        
                        export type $ = _IFlat.Type__Selection__Tail$step__type$optional$
                    }
                    
                    export namespace array {
                        
                        
                        export namespace array {
                            
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$array$array$
                        }
                        
                        export namespace tail {
                            
                            
                            export namespace O {
                                
                                
                                export type $ = _IFlat.Type__Selection__Tail$step__type$array$tail$O$
                            }
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$array$tail$
                        }
                        
                        export type $ = _IFlat.Type__Selection__Tail$step__type$array$
                    }
                    
                    export namespace group {
                        
                        
                        export namespace group {
                            
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$group$group$
                        }
                        
                        export namespace property {
                            
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$group$property$
                        }
                        
                        export namespace tail {
                            
                            
                            export namespace O {
                                
                                
                                export type $ = _IFlat.Type__Selection__Tail$step__type$group$tail$O$
                            }
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$group$tail$
                        }
                        
                        export type $ = _IFlat.Type__Selection__Tail$step__type$group$
                    }
                    
                    export namespace state__group {
                        
                        
                        export namespace state__group {
                            
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$state__group$state__group$
                        }
                        
                        export namespace state {
                            
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$state__group$state$
                        }
                        
                        export namespace tail {
                            
                            
                            export namespace O {
                                
                                
                                export type $ = _IFlat.Type__Selection__Tail$step__type$state__group$tail$O$
                            }
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$state__group$tail$
                        }
                        
                        export type $ = _IFlat.Type__Selection__Tail$step__type$state__group$
                    }
                    
                    export type $ = _IFlat.Type__Selection__Tail$step__type$
                }
                
                export type $ = _IFlat.Type__Selection__Tail$
            }
            
            export namespace TType__Selection {
                
                
                export namespace _limport {
                    
                    
                    export namespace O {
                        
                        
                        export type $ = _IFlat.Type__Selection$import$O$
                    }
                    
                    export type $ = _IFlat.Type__Selection$import$
                }
                
                export namespace global__type {
                    
                    
                    export type $ = _IFlat.Type__Selection$global__type$
                }
                
                export namespace tail {
                    
                    
                    export namespace O {
                        
                        
                        export type $ = _IFlat.Type__Selection$tail$O$
                    }
                    
                    export type $ = _IFlat.Type__Selection$tail$
                }
                
                export type $ = _IFlat.Type__Selection$
            }
            
            export namespace Dictionary__Selection {
                
                
                export namespace _ltype {
                    
                    
                    export type $ = _IFlat.Dictionary__Selection$type$
                }
                
                export namespace dictionary {
                    
                    
                    export type $ = _IFlat.Dictionary__Selection$dictionary$
                }
                
                export type $ = _IFlat.Dictionary__Selection$
            }
            
            export namespace TType__Library {
                
                
                export namespace imports {
                    
                    
                    export type $ = _IFlat.Type__Library$imports$
                }
                
                export namespace atom__types {
                    
                    
                    export type $ = _IFlat.Type__Library$atom__types$
                }
                
                export namespace global__types {
                    
                    
                    export namespace declarations {
                        
                        
                        export type $ = _IFlat.Type__Library$global__types$declarations$
                    }
                    
                    export namespace definitions {
                        
                        
                        export namespace D {
                            
                            
                            export type $ = _IFlat.Type__Library$global__types$definitions$D$
                        }
                        
                        export type $ = _IFlat.Type__Library$global__types$definitions$
                    }
                    
                    export type $ = _IFlat.Type__Library$global__types$
                }
                
                export type $ = _IFlat.Type__Library$
            }
            
            export namespace Global__Type__Selection {
                
                
                export namespace resolved__sibling {
                    
                    
                    export namespace _ltype {
                        
                        
                        export type $ = _IFlat.Global__Type__Selection$resolved__sibling$type$
                    }
                    
                    export type $ = _IFlat.Global__Type__Selection$resolved__sibling$
                }
                
                export namespace _limport {
                    
                    
                    export namespace library {
                        
                        
                        export type $ = _IFlat.Global__Type__Selection$import$library$
                    }
                    
                    export namespace _ltype {
                        
                        
                        export type $ = _IFlat.Global__Type__Selection$import$type$
                    }
                    
                    export type $ = _IFlat.Global__Type__Selection$import$
                }
                
                export namespace cyclic__sibling {
                    
                    
                    export namespace _ltype {
                        
                        
                        export type $ = _IFlat.Global__Type__Selection$cyclic__sibling$type$
                    }
                    
                    export type $ = _IFlat.Global__Type__Selection$cyclic__sibling$
                }
                
                export type $ = _IFlat.Global__Type__Selection$
            }
            
            export namespace Model {
                
                
                export namespace type__library {
                    
                    
                    export type $ = _IFlat.Model$type__library$
                }
                
                export namespace root {
                    
                    
                    export type $ = _IFlat.Model$root$
                }
                
                export type $ = _IFlat.Model$
            }
            
            export namespace Project {
                
                
                export namespace type__libraries {
                    
                    
                    export namespace D {
                        
                        
                        export type $ = _IFlat.Project$type__libraries$D$
                    }
                    
                    export type $ = _IFlat.Project$type__libraries$
                }
                
                export type $ = _IFlat.Project$
            }
            
            export namespace Root {
                
                
                export type $ = _IFlat.Root$
            }
        }
    }
    
    export namespace Resolve {
        
        import _IResolved = Resolved
        
        import _IUnresolved = Unresolved
        
        export type Atom__Types = <_TAnnotation>(
            $: _IUnresolved.Flat.Atom__Types$<_TAnnotation>,
        ) => _IResolved.Flat.Atom__Types$
        
        export type Atom = <_TAnnotation>(
            $: _IUnresolved.Flat.Atom$<_TAnnotation>,
            $p: {
                readonly 'atom types': _IResolved.Flat.Atom__Types$
            }
        ) => _IResolved.Flat.Atom$
        
        export type Dictionary__Selection = <_TAnnotation>(
            $: _IUnresolved.Flat.Dictionary__Selection$<_TAnnotation>,
            $p: {
                readonly 'cyclic sibling global types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Global__Type__Definition$>>
                readonly 'imports': _IResolved.Flat.Imports$
                readonly 'sibling global types': _pt.Lookup<_IResolved.Flat.Global__Type__Definition$>
            }
        ) => _IResolved.Flat.Dictionary__Selection$
        
        export type Global__Type__Declaration = <_TAnnotation>(
            $: _IUnresolved.Flat.Global__Type__Declaration$<_TAnnotation>,
        ) => _IResolved.Flat.Global__Type__Declaration$
        
        export type Global__Type__Declarations = <_TAnnotation>(
            $: _IUnresolved.Flat.Global__Type__Declarations$<_TAnnotation>,
        ) => _IResolved.Flat.Global__Type__Declarations$
        
        export type Global__Type__Definition = <_TAnnotation>(
            $: _IUnresolved.Flat.Global__Type__Definition$<_TAnnotation>,
        ) => _IResolved.Flat.Global__Type__Definition$
        
        export type Global__Type__Selection = <_TAnnotation>(
            $: _IUnresolved.Flat.Global__Type__Selection$<_TAnnotation>,
            $p: {
                readonly 'cyclic sibling global types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Global__Type__Definition$>>
                readonly 'imports': _IResolved.Flat.Imports$
                readonly 'sibling global types': _pt.Lookup<_IResolved.Flat.Global__Type__Definition$>
            }
        ) => _IResolved.Flat.Global__Type__Selection$
        
        export type Imports = <_TAnnotation>(
            $: _IUnresolved.Flat.Imports$<_TAnnotation>,
        ) => _IResolved.Flat.Imports$
        
        export type Model = <_TAnnotation>(
            $: _IUnresolved.Flat.Model$<_TAnnotation>,
            $p: {
                readonly 'external type libraries': _pt.Lookup<_IResolved.Flat.Type__Library$>
            }
        ) => _IResolved.Flat.Model$
        
        export type Project = <_TAnnotation>(
            $: _IUnresolved.Flat.Project$<_TAnnotation>,
        ) => _IResolved.Flat.Project$
        
        export type Root = <_TAnnotation>(
            $: _IUnresolved.Flat.Root$<_TAnnotation>,
        ) => _IResolved.Flat.Root$
        
        export type Type__Library = <_TAnnotation>(
            $: _IUnresolved.Flat.Type__Library$<_TAnnotation>,
            $p: {
                readonly 'external type libraries': _pt.Lookup<_IResolved.Flat.Type__Library$>
            }
        ) => _IResolved.Flat.Type__Library$
        
        export type Type__Selection__Tail = <_TAnnotation>(
            $: _IUnresolved.Flat.Type__Selection__Tail$<_TAnnotation>,
            $p: {
                readonly 'context': _IResolved.Flat.Type$
            }
        ) => _IResolved.Flat.Type__Selection__Tail$
        
        export type Type__Selection = <_TAnnotation>(
            $: _IUnresolved.Flat.Type__Selection$<_TAnnotation>,
            $p: {
                readonly 'imports': _IResolved.Flat.Imports$
                readonly 'sibling global types': _pt.Lookup<_IResolved.Flat.Global__Type__Definition$>
            }
        ) => _IResolved.Flat.Type__Selection$
        
        export type Type = <_TAnnotation>(
            $: _IUnresolved.Flat.Type$<_TAnnotation>,
            $p: {
                readonly 'atom types': _IResolved.Flat.Atom__Types$
                readonly 'cyclic sibling global types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Global__Type__Definition$>>
                readonly 'imports': _IResolved.Flat.Imports$
                readonly 'sibling global types': _pt.Lookup<_IResolved.Flat.Global__Type__Definition$>
            }
        ) => _IResolved.Flat.Type$
    }
    
    export namespace Serialize {
        
        import _IResolved = Resolved
        
        export type Atom__Types = (
            $: _IResolved.Flat.Atom__Types$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Atom = (
            $: _IResolved.Flat.Atom$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Type = (
            $: _IResolved.Flat.Type$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Imports = (
            $: _IResolved.Flat.Imports$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Global__Type__Declaration = (
            $: _IResolved.Flat.Global__Type__Declaration$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Global__Type__Declarations = (
            $: _IResolved.Flat.Global__Type__Declarations$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Global__Type__Definition = (
            $: _IResolved.Flat.Global__Type__Definition$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Type__Selection__Tail = (
            $: _IResolved.Flat.Type__Selection__Tail$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Type__Selection = (
            $: _IResolved.Flat.Type__Selection$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Dictionary__Selection = (
            $: _IResolved.Flat.Dictionary__Selection$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Type__Library = (
            $: _IResolved.Flat.Type__Library$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Global__Type__Selection = (
            $: _IResolved.Flat.Global__Type__Selection$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Model = (
            $: _IResolved.Flat.Model$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Project = (
            $: _IResolved.Flat.Project$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Root = (
            $: _IResolved.Flat.Root$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
    }
    
    export namespace Select {
        
        import _IResolved = Resolved
        
        export type Type__Selection__Tail = (
            $: _IResolved.Flat.Type__Selection__Tail$,
        ) => _IResolved.Flat.Type$
        
        export type Type__Selection = (
            $: _IResolved.Flat.Type__Selection$,
        ) => _IResolved.Flat.Type$
    }
    
    export type _$ = (
        $: null,
    ) => {
        readonly 'Atom': {
            readonly 'Resolve': Resolve.Atom
            readonly 'Serialize': Serialize.Atom
        }
        readonly 'Atom Types': {
            readonly 'Resolve': Resolve.Atom__Types
            readonly 'Serialize': Serialize.Atom__Types
        }
        readonly 'Dictionary Selection': {
            readonly 'Resolve': Resolve.Dictionary__Selection
            readonly 'Serialize': Serialize.Dictionary__Selection
        }
        readonly 'Global Type Declaration': {
            readonly 'Resolve': Resolve.Global__Type__Declaration
            readonly 'Serialize': Serialize.Global__Type__Declaration
        }
        readonly 'Global Type Declarations': {
            readonly 'Resolve': Resolve.Global__Type__Declarations
            readonly 'Serialize': Serialize.Global__Type__Declarations
        }
        readonly 'Global Type Definition': {
            readonly 'Resolve': Resolve.Global__Type__Definition
            readonly 'Serialize': Serialize.Global__Type__Definition
        }
        readonly 'Global Type Selection': {
            readonly 'Resolve': Resolve.Global__Type__Selection
            readonly 'Serialize': Serialize.Global__Type__Selection
        }
        readonly 'Imports': {
            readonly 'Resolve': Resolve.Imports
            readonly 'Serialize': Serialize.Imports
        }
        readonly 'Model': {
            readonly 'Resolve': Resolve.Model
            readonly 'Serialize': Serialize.Model
        }
        readonly 'Project': {
            readonly 'Resolve': Resolve.Project
            readonly 'Serialize': Serialize.Project
        }
        readonly 'Root': {
            readonly 'Resolve': Resolve.Root
            readonly 'Serialize': Serialize.Root
        }
        readonly 'Type': {
            readonly 'Resolve': Resolve.Type
            readonly 'Serialize': Serialize.Type
        }
        readonly 'Type Library': {
            readonly 'Resolve': Resolve.Type__Library
            readonly 'Serialize': Serialize.Type__Library
        }
        readonly 'Type Selection': {
            readonly 'Resolve': Resolve.Type__Selection
            readonly 'Serialize': Serialize.Type__Selection
        }
        readonly 'Type Selection Tail': {
            readonly 'Resolve': Resolve.Type__Selection__Tail
            readonly 'Serialize': Serialize.Type__Selection__Tail
        }
    }
}

export namespace proto__typesystem {
    
    export namespace Unresolved {
        
        export namespace Flat {
            
            export type Aggregated__Type__Parameters$D$<_TAnnotation> = null
            
            export type Aggregated__Type__Parameters$<_TAnnotation> = _pt.Dictionary<Aggregated__Type__Parameters$D$<_TAnnotation>>
            
            export type Type__Parameters$local$D$<_TAnnotation> = null
            
            export type Type__Parameters$local$<_TAnnotation> = _pt.Dictionary<Type__Parameters$local$D$<_TAnnotation>>
            
            export type Type__Parameters$aggregated$<_TAnnotation> = Aggregated__Type__Parameters$<_TAnnotation>
            
            export type Type__Parameters$<_TAnnotation> = {
                readonly 'aggregated': Type__Parameters$aggregated$<_TAnnotation>
                readonly 'local': Type__Parameters$local$<_TAnnotation>
            }
            
            export type Function__Declaration$type__parameters$<_TAnnotation> = Type__Parameters$<_TAnnotation>
            
            export type Function__Declaration$context$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Function__Declaration$parameters$D$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Function__Declaration$parameters$<_TAnnotation> = _pt.Dictionary<Function__Declaration$parameters$D$<_TAnnotation>>
            
            export type Function__Declaration$<_TAnnotation> = {
                readonly 'context': Function__Declaration$context$<_TAnnotation>
                readonly 'parameters': Function__Declaration$parameters$<_TAnnotation>
                readonly 'type parameters': Function__Declaration$type__parameters$<_TAnnotation>
            }
            
            export type Imports$D$<_TAnnotation> = Import$<_TAnnotation>
            
            export type Imports$<_TAnnotation> = _pt.Dictionary<Imports$D$<_TAnnotation>>
            
            export type Nested__Namespace$imports$<_TAnnotation> = Imports$<_TAnnotation>
            
            export type Nested__Namespace$namespace$<_TAnnotation> = Namespace$<_TAnnotation>
            
            export type Nested__Namespace$<_TAnnotation> = {
                readonly 'imports': Nested__Namespace$imports$<_TAnnotation>
                readonly 'namespace': Nested__Namespace$namespace$<_TAnnotation>
            }
            
            export type Import$sibling$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Import$parent__import$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Import$<_TAnnotation> = 
                | ['parent import', Import$parent__import$<_TAnnotation>]
                | ['sibling', Import$sibling$<_TAnnotation>]
            
            export type Namespace$namespaces$D$<_TAnnotation> = Nested__Namespace$<_TAnnotation>
            
            export type Namespace$namespaces$<_TAnnotation> = _pt.Dictionary<Namespace$namespaces$D$<_TAnnotation>>
            
            export type Namespace$parameters$<_TAnnotation> = Type__Parameters$<_TAnnotation>
            
            export type Namespace$types$D$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Namespace$types$<_TAnnotation> = _pt.Dictionary<Namespace$types$D$<_TAnnotation>>
            
            export type Namespace$<_TAnnotation> = {
                readonly 'namespaces': Namespace$namespaces$<_TAnnotation>
                readonly 'parameters': Namespace$parameters$<_TAnnotation>
                readonly 'types': Namespace$types$<_TAnnotation>
            }
            
            export type Type$address__function$declaration$<_TAnnotation> = Function__Declaration$<_TAnnotation>
            
            export type Type$address__function$return__type$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$address__function$<_TAnnotation> = {
                readonly 'declaration': Type$address__function$declaration$<_TAnnotation>
                readonly 'return type': Type$address__function$return__type$<_TAnnotation>
            }
            
            export type Type$array$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$boolean$<_TAnnotation> = null
            
            export type Type$computed$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$dictionary$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$group$D$type$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$group$D$mutable$O$<_TAnnotation> = null
            
            export type Type$group$D$mutable$<_TAnnotation> = _pt.OptionalValue<Type$group$D$mutable$O$<_TAnnotation>>
            
            export type Type$group$D$<_TAnnotation> = {
                readonly 'mutable': Type$group$D$mutable$<_TAnnotation>
                readonly 'type': Type$group$D$type$<_TAnnotation>
            }
            
            export type Type$group$<_TAnnotation> = _pt.Dictionary<Type$group$D$<_TAnnotation>>
            
            export type Type$lookup$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$null$<_TAnnotation> = null
            
            export type Type$number$<_TAnnotation> = null
            
            export type Type$optional$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$procedure$declaration$<_TAnnotation> = Function__Declaration$<_TAnnotation>
            
            export type Type$procedure$<_TAnnotation> = {
                readonly 'declaration': Type$procedure$declaration$<_TAnnotation>
            }
            
            export type Type$string$<_TAnnotation> = null
            
            export type Type$tagged__union$D$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$tagged__union$<_TAnnotation> = _pt.Dictionary<Type$tagged__union$D$<_TAnnotation>>
            
            export type Type$type__parameter$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Type$type__reference$external$namespace__path$<_TAnnotation> = Namespace__Selection$<_TAnnotation>
            
            export type Type$type__reference$external$type$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Type$type__reference$external$<_TAnnotation> = {
                readonly 'namespace path': Type$type__reference$external$namespace__path$<_TAnnotation>
                readonly 'type': Type$type__reference$external$type$<_TAnnotation>
            }
            
            export type Type$type__reference$sibling$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Type$type__reference$cyclic__sibling$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Type$type__reference$<_TAnnotation> = 
                | ['cyclic sibling', Type$type__reference$cyclic__sibling$<_TAnnotation>]
                | ['external', Type$type__reference$external$<_TAnnotation>]
                | ['sibling', Type$type__reference$sibling$<_TAnnotation>]
            
            export type Type$value__function$declaration$<_TAnnotation> = Function__Declaration$<_TAnnotation>
            
            export type Type$value__function$return__type$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$value__function$<_TAnnotation> = {
                readonly 'declaration': Type$value__function$declaration$<_TAnnotation>
                readonly 'return type': Type$value__function$return__type$<_TAnnotation>
            }
            
            export type Type$<_TAnnotation> = 
                | ['address function', Type$address__function$<_TAnnotation>]
                | ['array', Type$array$<_TAnnotation>]
                | ['boolean', Type$boolean$<_TAnnotation>]
                | ['computed', Type$computed$<_TAnnotation>]
                | ['dictionary', Type$dictionary$<_TAnnotation>]
                | ['group', Type$group$<_TAnnotation>]
                | ['lookup', Type$lookup$<_TAnnotation>]
                | ['null', Type$null$<_TAnnotation>]
                | ['number', Type$number$<_TAnnotation>]
                | ['optional', Type$optional$<_TAnnotation>]
                | ['procedure', Type$procedure$<_TAnnotation>]
                | ['string', Type$string$<_TAnnotation>]
                | ['tagged union', Type$tagged__union$<_TAnnotation>]
                | ['type parameter', Type$type__parameter$<_TAnnotation>]
                | ['type reference', Type$type__reference$<_TAnnotation>]
                | ['value function', Type$value__function$<_TAnnotation>]
            
            export type Type__Arguments$D$type$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type__Arguments$D$<_TAnnotation> = {
                readonly 'type': Type__Arguments$D$type$<_TAnnotation>
            }
            
            export type Type__Arguments$<_TAnnotation> = _pt.Dictionary<Type__Arguments$D$<_TAnnotation>>
            
            export type Namespace__Selection__Tail$namespace$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Namespace__Selection__Tail$arguments$<_TAnnotation> = Type__Arguments$<_TAnnotation>
            
            export type Namespace__Selection__Tail$tail$O$<_TAnnotation> = Namespace__Selection__Tail$<_TAnnotation>
            
            export type Namespace__Selection__Tail$tail$<_TAnnotation> = _pt.OptionalValue<Namespace__Selection__Tail$tail$O$<_TAnnotation>>
            
            export type Namespace__Selection__Tail$<_TAnnotation> = {
                readonly 'arguments': Namespace__Selection__Tail$arguments$<_TAnnotation>
                readonly 'namespace': Namespace__Selection__Tail$namespace$<_TAnnotation>
                readonly 'tail': Namespace__Selection__Tail$tail$<_TAnnotation>
            }
            
            export type Namespace__Selection$start$import$namespace$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Namespace__Selection$start$import$arguments$<_TAnnotation> = Type__Arguments$<_TAnnotation>
            
            export type Namespace__Selection$start$import$tail$O$<_TAnnotation> = Namespace__Selection__Tail$<_TAnnotation>
            
            export type Namespace__Selection$start$import$tail$<_TAnnotation> = _pt.OptionalValue<Namespace__Selection$start$import$tail$O$<_TAnnotation>>
            
            export type Namespace__Selection$start$import$<_TAnnotation> = {
                readonly 'arguments': Namespace__Selection$start$import$arguments$<_TAnnotation>
                readonly 'namespace': Namespace__Selection$start$import$namespace$<_TAnnotation>
                readonly 'tail': Namespace__Selection$start$import$tail$<_TAnnotation>
            }
            
            export type Namespace__Selection$start$local$namespace$<_TAnnotation> = Namespace__Selection__Tail$<_TAnnotation>
            
            export type Namespace__Selection$start$local$<_TAnnotation> = {
                readonly 'namespace': Namespace__Selection$start$local$namespace$<_TAnnotation>
            }
            
            export type Namespace__Selection$start$<_TAnnotation> = 
                | ['import', Namespace__Selection$start$import$<_TAnnotation>]
                | ['local', Namespace__Selection$start$local$<_TAnnotation>]
            
            export type Namespace__Selection$<_TAnnotation> = {
                readonly 'start': Namespace__Selection$start$<_TAnnotation>
            }
            
            export type Root$<_TAnnotation> = Namespace$<_TAnnotation>
        }
        
        export namespace T {
            
            import _IFlat = Flat
            
            export namespace Aggregated__Type__Parameters {
                
                
                export namespace D {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Aggregated__Type__Parameters$D$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Aggregated__Type__Parameters$<_TAnnotation>
            }
            
            export namespace TType__Parameters {
                
                
                export namespace local {
                    
                    
                    export namespace D {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Type__Parameters$local$D$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type__Parameters$local$<_TAnnotation>
                }
                
                export namespace aggregated {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Type__Parameters$aggregated$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Type__Parameters$<_TAnnotation>
            }
            
            export namespace Function__Declaration {
                
                
                export namespace type__parameters {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Function__Declaration$type__parameters$<_TAnnotation>
                }
                
                export namespace context {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Function__Declaration$context$<_TAnnotation>
                }
                
                export namespace parameters {
                    
                    
                    export namespace D {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Function__Declaration$parameters$D$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Function__Declaration$parameters$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Function__Declaration$<_TAnnotation>
            }
            
            export namespace Imports {
                
                
                export namespace D {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Imports$D$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Imports$<_TAnnotation>
            }
            
            export namespace Nested__Namespace {
                
                
                export namespace imports {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Nested__Namespace$imports$<_TAnnotation>
                }
                
                export namespace namespace {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Nested__Namespace$namespace$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Nested__Namespace$<_TAnnotation>
            }
            
            export namespace Import {
                
                
                export namespace sibling {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Import$sibling$<_TAnnotation>
                }
                
                export namespace parent__import {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Import$parent__import$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Import$<_TAnnotation>
            }
            
            export namespace Namespace {
                
                
                export namespace namespaces {
                    
                    
                    export namespace D {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Namespace$namespaces$D$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Namespace$namespaces$<_TAnnotation>
                }
                
                export namespace parameters {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Namespace$parameters$<_TAnnotation>
                }
                
                export namespace types {
                    
                    
                    export namespace D {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Namespace$types$D$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Namespace$types$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Namespace$<_TAnnotation>
            }
            
            export namespace TType {
                
                
                export namespace address__function {
                    
                    
                    export namespace declaration {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Type$address__function$declaration$<_TAnnotation>
                    }
                    
                    export namespace return__type {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Type$address__function$return__type$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type$address__function$<_TAnnotation>
                }
                
                export namespace array {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Type$array$<_TAnnotation>
                }
                
                export namespace _lboolean {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Type$boolean$<_TAnnotation>
                }
                
                export namespace computed {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Type$computed$<_TAnnotation>
                }
                
                export namespace dictionary {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Type$dictionary$<_TAnnotation>
                }
                
                export namespace group {
                    
                    
                    export namespace D {
                        
                        
                        export namespace _ltype {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type$group$D$type$<_TAnnotation>
                        }
                        
                        export namespace mutable {
                            
                            
                            export namespace O {
                                
                                
                                export type $<_TAnnotation> = _IFlat.Type$group$D$mutable$O$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Type$group$D$mutable$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$group$D$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type$group$<_TAnnotation>
                }
                
                export namespace lookup {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Type$lookup$<_TAnnotation>
                }
                
                export namespace _lnull {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Type$null$<_TAnnotation>
                }
                
                export namespace _lnumber {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Type$number$<_TAnnotation>
                }
                
                export namespace optional {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Type$optional$<_TAnnotation>
                }
                
                export namespace procedure {
                    
                    
                    export namespace declaration {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Type$procedure$declaration$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type$procedure$<_TAnnotation>
                }
                
                export namespace _lstring {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Type$string$<_TAnnotation>
                }
                
                export namespace tagged__union {
                    
                    
                    export namespace D {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Type$tagged__union$D$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type$tagged__union$<_TAnnotation>
                }
                
                export namespace type__parameter {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Type$type__parameter$<_TAnnotation>
                }
                
                export namespace type__reference {
                    
                    
                    export namespace external {
                        
                        
                        export namespace namespace__path {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type$type__reference$external$namespace__path$<_TAnnotation>
                        }
                        
                        export namespace _ltype {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type$type__reference$external$type$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$type__reference$external$<_TAnnotation>
                    }
                    
                    export namespace sibling {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Type$type__reference$sibling$<_TAnnotation>
                    }
                    
                    export namespace cyclic__sibling {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Type$type__reference$cyclic__sibling$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type$type__reference$<_TAnnotation>
                }
                
                export namespace value__function {
                    
                    
                    export namespace declaration {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Type$value__function$declaration$<_TAnnotation>
                    }
                    
                    export namespace return__type {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Type$value__function$return__type$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type$value__function$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Type$<_TAnnotation>
            }
            
            export namespace TType__Arguments {
                
                
                export namespace D {
                    
                    
                    export namespace _ltype {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Type__Arguments$D$type$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type__Arguments$D$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Type__Arguments$<_TAnnotation>
            }
            
            export namespace Namespace__Selection__Tail {
                
                
                export namespace namespace {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Namespace__Selection__Tail$namespace$<_TAnnotation>
                }
                
                export namespace _larguments {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Namespace__Selection__Tail$arguments$<_TAnnotation>
                }
                
                export namespace tail {
                    
                    
                    export namespace O {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Namespace__Selection__Tail$tail$O$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Namespace__Selection__Tail$tail$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Namespace__Selection__Tail$<_TAnnotation>
            }
            
            export namespace Namespace__Selection {
                
                
                export namespace start {
                    
                    
                    export namespace _limport {
                        
                        
                        export namespace namespace {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Namespace__Selection$start$import$namespace$<_TAnnotation>
                        }
                        
                        export namespace _larguments {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Namespace__Selection$start$import$arguments$<_TAnnotation>
                        }
                        
                        export namespace tail {
                            
                            
                            export namespace O {
                                
                                
                                export type $<_TAnnotation> = _IFlat.Namespace__Selection$start$import$tail$O$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Namespace__Selection$start$import$tail$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Namespace__Selection$start$import$<_TAnnotation>
                    }
                    
                    export namespace local {
                        
                        
                        export namespace namespace {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Namespace__Selection$start$local$namespace$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Namespace__Selection$start$local$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Namespace__Selection$start$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Namespace__Selection$<_TAnnotation>
            }
            
            export namespace Root {
                
                
                export type $<_TAnnotation> = _IFlat.Root$<_TAnnotation>
            }
        }
    }
    
    export namespace Resolved {
        
        export namespace Flat {
            
            export type Aggregated__Type__Parameters$D$ = null
            
            export type Aggregated__Type__Parameters$ = _pt.Dictionary<Aggregated__Type__Parameters$D$>
            
            export type Type__Parameters$local$D$ = null
            
            export type Type__Parameters$local$ = _pt.Dictionary<Type__Parameters$local$D$>
            
            export type Type__Parameters$aggregated$ = Aggregated__Type__Parameters$
            
            export type Type__Parameters$ = {
                readonly 'aggregated': Type__Parameters$aggregated$
                readonly 'local': Type__Parameters$local$
            }
            
            export type Function__Declaration$type__parameters$ = Type__Parameters$
            
            export type Function__Declaration$context$ = Type$
            
            export type Function__Declaration$parameters$D$ = Type$
            
            export type Function__Declaration$parameters$ = _pt.Dictionary<Function__Declaration$parameters$D$>
            
            export type Function__Declaration$ = {
                readonly 'context': Function__Declaration$context$
                readonly 'parameters': Function__Declaration$parameters$
                readonly 'type parameters': Function__Declaration$type__parameters$
            }
            
            export type Imports$D$ = Import$
            
            export type Imports$ = _pt.Dictionary<Imports$D$>
            
            export type Nested__Namespace$imports$ = Imports$
            
            export type Nested__Namespace$namespace$ = Namespace$
            
            export type Nested__Namespace$ = {
                readonly 'imports': Nested__Namespace$imports$
                readonly 'namespace': Nested__Namespace$namespace$
            }
            
            export type Import$sibling$ = {
                readonly 'key': string
                readonly 'referent': Nested__Namespace$
            }
            
            export type Import$parent__import$ = {
                readonly 'key': string
                readonly 'referent': Imports$D$
            }
            
            export type Import$ = 
                | ['parent import', Import$parent__import$]
                | ['sibling', Import$sibling$]
            
            export type Namespace$namespaces$D$ = Nested__Namespace$
            
            export type Namespace$namespaces$ = _pt.Dictionary<Namespace$namespaces$D$>
            
            export type Namespace$parameters$ = Type__Parameters$
            
            export type Namespace$types$D$ = Type$
            
            export type Namespace$types$ = _pt.Dictionary<Namespace$types$D$>
            
            export type Namespace$ = {
                readonly 'namespaces': Namespace$namespaces$
                readonly 'parameters': Namespace$parameters$
                readonly 'types': Namespace$types$
            }
            
            export type Type$address__function$declaration$ = Function__Declaration$
            
            export type Type$address__function$return__type$ = Type$
            
            export type Type$address__function$ = {
                readonly 'declaration': Type$address__function$declaration$
                readonly 'return type': Type$address__function$return__type$
            }
            
            export type Type$array$ = Type$
            
            export type Type$boolean$ = null
            
            export type Type$computed$ = Type$
            
            export type Type$dictionary$ = Type$
            
            export type Type$group$D$type$ = Type$
            
            export type Type$group$D$mutable$O$ = null
            
            export type Type$group$D$mutable$ = _pt.OptionalValue<Type$group$D$mutable$O$>
            
            export type Type$group$D$ = {
                readonly 'mutable': Type$group$D$mutable$
                readonly 'type': Type$group$D$type$
            }
            
            export type Type$group$ = _pt.Dictionary<Type$group$D$>
            
            export type Type$lookup$ = Type$
            
            export type Type$null$ = null
            
            export type Type$number$ = null
            
            export type Type$optional$ = Type$
            
            export type Type$procedure$declaration$ = Function__Declaration$
            
            export type Type$procedure$ = {
                readonly 'declaration': Type$procedure$declaration$
            }
            
            export type Type$string$ = null
            
            export type Type$tagged__union$D$ = Type$
            
            export type Type$tagged__union$ = _pt.Dictionary<Type$tagged__union$D$>
            
            export type Type$type__parameter$ = {
                readonly 'key': string
                readonly 'referent': Aggregated__Type__Parameters$D$
            }
            
            export type Type$type__reference$external$namespace__path$ = Namespace__Selection$
            
            export type Type$type__reference$external$type$ = {
                readonly 'key': string
                readonly 'referent': Namespace$types$D$
            }
            
            export type Type$type__reference$external$ = {
                readonly 'namespace path': Type$type__reference$external$namespace__path$
                readonly 'type': Type$type__reference$external$type$
            }
            
            export type Type$type__reference$sibling$ = {
                readonly 'key': string
                readonly 'referent': Type$
            }
            
            export type Type$type__reference$cyclic__sibling$ = {
                readonly 'key': string
                readonly 'referent': _pt.ComputedValue<Type$>
            }
            
            export type Type$type__reference$ = 
                | ['cyclic sibling', Type$type__reference$cyclic__sibling$]
                | ['external', Type$type__reference$external$]
                | ['sibling', Type$type__reference$sibling$]
            
            export type Type$value__function$declaration$ = Function__Declaration$
            
            export type Type$value__function$return__type$ = Type$
            
            export type Type$value__function$ = {
                readonly 'declaration': Type$value__function$declaration$
                readonly 'return type': Type$value__function$return__type$
            }
            
            export type Type$ = 
                | ['address function', Type$address__function$]
                | ['array', Type$array$]
                | ['boolean', Type$boolean$]
                | ['computed', Type$computed$]
                | ['dictionary', Type$dictionary$]
                | ['group', Type$group$]
                | ['lookup', Type$lookup$]
                | ['null', Type$null$]
                | ['number', Type$number$]
                | ['optional', Type$optional$]
                | ['procedure', Type$procedure$]
                | ['string', Type$string$]
                | ['tagged union', Type$tagged__union$]
                | ['type parameter', Type$type__parameter$]
                | ['type reference', Type$type__reference$]
                | ['value function', Type$value__function$]
            
            export type Type__Arguments$D$type$ = Type$
            
            export type Type__Arguments$D$ = {
                readonly 'type': Type__Arguments$D$type$
            }
            
            export type Type__Arguments$ = _pt.Dictionary<Type__Arguments$D$>
            
            export type Namespace__Selection__Tail$namespace$ = {
                readonly 'key': string
                readonly 'referent': Namespace$namespaces$D$
            }
            
            export type Namespace__Selection__Tail$arguments$ = Type__Arguments$
            
            export type Namespace__Selection__Tail$tail$O$ = Namespace__Selection__Tail$
            
            export type Namespace__Selection__Tail$tail$ = _pt.OptionalValue<Namespace__Selection__Tail$tail$O$>
            
            export type Namespace__Selection__Tail$ = {
                readonly 'arguments': Namespace__Selection__Tail$arguments$
                readonly 'namespace': Namespace__Selection__Tail$namespace$
                readonly 'tail': Namespace__Selection__Tail$tail$
            }
            
            export type Namespace__Selection$start$import$namespace$ = {
                readonly 'key': string
                readonly 'referent': Imports$D$
            }
            
            export type Namespace__Selection$start$import$arguments$ = Type__Arguments$
            
            export type Namespace__Selection$start$import$tail$O$ = Namespace__Selection__Tail$
            
            export type Namespace__Selection$start$import$tail$ = _pt.OptionalValue<Namespace__Selection$start$import$tail$O$>
            
            export type Namespace__Selection$start$import$ = {
                readonly 'arguments': Namespace__Selection$start$import$arguments$
                readonly 'namespace': Namespace__Selection$start$import$namespace$
                readonly 'tail': Namespace__Selection$start$import$tail$
            }
            
            export type Namespace__Selection$start$local$namespace$ = Namespace__Selection__Tail$
            
            export type Namespace__Selection$start$local$ = {
                readonly 'namespace': Namespace__Selection$start$local$namespace$
            }
            
            export type Namespace__Selection$start$ = 
                | ['import', Namespace__Selection$start$import$]
                | ['local', Namespace__Selection$start$local$]
            
            export type Namespace__Selection$ = {
                readonly 'start': Namespace__Selection$start$
            }
            
            export type Root$ = Namespace$
        }
        
        export namespace T {
            
            import _IFlat = Flat
            
            export namespace Aggregated__Type__Parameters {
                
                
                export namespace D {
                    
                    
                    export type $ = _IFlat.Aggregated__Type__Parameters$D$
                }
                
                export type $ = _IFlat.Aggregated__Type__Parameters$
            }
            
            export namespace TType__Parameters {
                
                
                export namespace local {
                    
                    
                    export namespace D {
                        
                        
                        export type $ = _IFlat.Type__Parameters$local$D$
                    }
                    
                    export type $ = _IFlat.Type__Parameters$local$
                }
                
                export namespace aggregated {
                    
                    
                    export type $ = _IFlat.Type__Parameters$aggregated$
                }
                
                export type $ = _IFlat.Type__Parameters$
            }
            
            export namespace Function__Declaration {
                
                
                export namespace type__parameters {
                    
                    
                    export type $ = _IFlat.Function__Declaration$type__parameters$
                }
                
                export namespace context {
                    
                    
                    export type $ = _IFlat.Function__Declaration$context$
                }
                
                export namespace parameters {
                    
                    
                    export namespace D {
                        
                        
                        export type $ = _IFlat.Function__Declaration$parameters$D$
                    }
                    
                    export type $ = _IFlat.Function__Declaration$parameters$
                }
                
                export type $ = _IFlat.Function__Declaration$
            }
            
            export namespace Imports {
                
                
                export namespace D {
                    
                    
                    export type $ = _IFlat.Imports$D$
                }
                
                export type $ = _IFlat.Imports$
            }
            
            export namespace Nested__Namespace {
                
                
                export namespace imports {
                    
                    
                    export type $ = _IFlat.Nested__Namespace$imports$
                }
                
                export namespace namespace {
                    
                    
                    export type $ = _IFlat.Nested__Namespace$namespace$
                }
                
                export type $ = _IFlat.Nested__Namespace$
            }
            
            export namespace Import {
                
                
                export namespace sibling {
                    
                    
                    export type $ = _IFlat.Import$sibling$
                }
                
                export namespace parent__import {
                    
                    
                    export type $ = _IFlat.Import$parent__import$
                }
                
                export type $ = _IFlat.Import$
            }
            
            export namespace Namespace {
                
                
                export namespace namespaces {
                    
                    
                    export namespace D {
                        
                        
                        export type $ = _IFlat.Namespace$namespaces$D$
                    }
                    
                    export type $ = _IFlat.Namespace$namespaces$
                }
                
                export namespace parameters {
                    
                    
                    export type $ = _IFlat.Namespace$parameters$
                }
                
                export namespace types {
                    
                    
                    export namespace D {
                        
                        
                        export type $ = _IFlat.Namespace$types$D$
                    }
                    
                    export type $ = _IFlat.Namespace$types$
                }
                
                export type $ = _IFlat.Namespace$
            }
            
            export namespace TType {
                
                
                export namespace address__function {
                    
                    
                    export namespace declaration {
                        
                        
                        export type $ = _IFlat.Type$address__function$declaration$
                    }
                    
                    export namespace return__type {
                        
                        
                        export type $ = _IFlat.Type$address__function$return__type$
                    }
                    
                    export type $ = _IFlat.Type$address__function$
                }
                
                export namespace array {
                    
                    
                    export type $ = _IFlat.Type$array$
                }
                
                export namespace _lboolean {
                    
                    
                    export type $ = _IFlat.Type$boolean$
                }
                
                export namespace computed {
                    
                    
                    export type $ = _IFlat.Type$computed$
                }
                
                export namespace dictionary {
                    
                    
                    export type $ = _IFlat.Type$dictionary$
                }
                
                export namespace group {
                    
                    
                    export namespace D {
                        
                        
                        export namespace _ltype {
                            
                            
                            export type $ = _IFlat.Type$group$D$type$
                        }
                        
                        export namespace mutable {
                            
                            
                            export namespace O {
                                
                                
                                export type $ = _IFlat.Type$group$D$mutable$O$
                            }
                            
                            export type $ = _IFlat.Type$group$D$mutable$
                        }
                        
                        export type $ = _IFlat.Type$group$D$
                    }
                    
                    export type $ = _IFlat.Type$group$
                }
                
                export namespace lookup {
                    
                    
                    export type $ = _IFlat.Type$lookup$
                }
                
                export namespace _lnull {
                    
                    
                    export type $ = _IFlat.Type$null$
                }
                
                export namespace _lnumber {
                    
                    
                    export type $ = _IFlat.Type$number$
                }
                
                export namespace optional {
                    
                    
                    export type $ = _IFlat.Type$optional$
                }
                
                export namespace procedure {
                    
                    
                    export namespace declaration {
                        
                        
                        export type $ = _IFlat.Type$procedure$declaration$
                    }
                    
                    export type $ = _IFlat.Type$procedure$
                }
                
                export namespace _lstring {
                    
                    
                    export type $ = _IFlat.Type$string$
                }
                
                export namespace tagged__union {
                    
                    
                    export namespace D {
                        
                        
                        export type $ = _IFlat.Type$tagged__union$D$
                    }
                    
                    export type $ = _IFlat.Type$tagged__union$
                }
                
                export namespace type__parameter {
                    
                    
                    export type $ = _IFlat.Type$type__parameter$
                }
                
                export namespace type__reference {
                    
                    
                    export namespace external {
                        
                        
                        export namespace namespace__path {
                            
                            
                            export type $ = _IFlat.Type$type__reference$external$namespace__path$
                        }
                        
                        export namespace _ltype {
                            
                            
                            export type $ = _IFlat.Type$type__reference$external$type$
                        }
                        
                        export type $ = _IFlat.Type$type__reference$external$
                    }
                    
                    export namespace sibling {
                        
                        
                        export type $ = _IFlat.Type$type__reference$sibling$
                    }
                    
                    export namespace cyclic__sibling {
                        
                        
                        export type $ = _IFlat.Type$type__reference$cyclic__sibling$
                    }
                    
                    export type $ = _IFlat.Type$type__reference$
                }
                
                export namespace value__function {
                    
                    
                    export namespace declaration {
                        
                        
                        export type $ = _IFlat.Type$value__function$declaration$
                    }
                    
                    export namespace return__type {
                        
                        
                        export type $ = _IFlat.Type$value__function$return__type$
                    }
                    
                    export type $ = _IFlat.Type$value__function$
                }
                
                export type $ = _IFlat.Type$
            }
            
            export namespace TType__Arguments {
                
                
                export namespace D {
                    
                    
                    export namespace _ltype {
                        
                        
                        export type $ = _IFlat.Type__Arguments$D$type$
                    }
                    
                    export type $ = _IFlat.Type__Arguments$D$
                }
                
                export type $ = _IFlat.Type__Arguments$
            }
            
            export namespace Namespace__Selection__Tail {
                
                
                export namespace namespace {
                    
                    
                    export type $ = _IFlat.Namespace__Selection__Tail$namespace$
                }
                
                export namespace _larguments {
                    
                    
                    export type $ = _IFlat.Namespace__Selection__Tail$arguments$
                }
                
                export namespace tail {
                    
                    
                    export namespace O {
                        
                        
                        export type $ = _IFlat.Namespace__Selection__Tail$tail$O$
                    }
                    
                    export type $ = _IFlat.Namespace__Selection__Tail$tail$
                }
                
                export type $ = _IFlat.Namespace__Selection__Tail$
            }
            
            export namespace Namespace__Selection {
                
                
                export namespace start {
                    
                    
                    export namespace _limport {
                        
                        
                        export namespace namespace {
                            
                            
                            export type $ = _IFlat.Namespace__Selection$start$import$namespace$
                        }
                        
                        export namespace _larguments {
                            
                            
                            export type $ = _IFlat.Namespace__Selection$start$import$arguments$
                        }
                        
                        export namespace tail {
                            
                            
                            export namespace O {
                                
                                
                                export type $ = _IFlat.Namespace__Selection$start$import$tail$O$
                            }
                            
                            export type $ = _IFlat.Namespace__Selection$start$import$tail$
                        }
                        
                        export type $ = _IFlat.Namespace__Selection$start$import$
                    }
                    
                    export namespace local {
                        
                        
                        export namespace namespace {
                            
                            
                            export type $ = _IFlat.Namespace__Selection$start$local$namespace$
                        }
                        
                        export type $ = _IFlat.Namespace__Selection$start$local$
                    }
                    
                    export type $ = _IFlat.Namespace__Selection$start$
                }
                
                export type $ = _IFlat.Namespace__Selection$
            }
            
            export namespace Root {
                
                
                export type $ = _IFlat.Root$
            }
        }
    }
    
    export namespace Resolve {
        
        import _IResolved = Resolved
        
        import _IUnresolved = Unresolved
        
        export type Aggregated__Type__Parameters = <_TAnnotation>(
            $: _IUnresolved.Flat.Aggregated__Type__Parameters$<_TAnnotation>,
        ) => _IResolved.Flat.Aggregated__Type__Parameters$
        
        export type Function__Declaration = <_TAnnotation>(
            $: _IUnresolved.Flat.Function__Declaration$<_TAnnotation>,
            $p: {
                readonly 'cyclic sibling types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Type$>>
                readonly 'resolved namespaces': _pt.Lookup<_IResolved.Flat.Nested__Namespace$>
                readonly 'resolved sibling types': _pt.Lookup<_IResolved.Flat.Type$>
                readonly 'type parameters': _IResolved.Flat.Aggregated__Type__Parameters$
            }
        ) => _IResolved.Flat.Function__Declaration$
        
        export type Import = <_TAnnotation>(
            $: _IUnresolved.Flat.Import$<_TAnnotation>,
        ) => _IResolved.Flat.Import$
        
        export type Imports = <_TAnnotation>(
            $: _IUnresolved.Flat.Imports$<_TAnnotation>,
        ) => _IResolved.Flat.Imports$
        
        export type Namespace = <_TAnnotation>(
            $: _IUnresolved.Flat.Namespace$<_TAnnotation>,
            $p: {
                readonly 'parent type parameters': _pt.OptionalValue<_IResolved.Flat.Aggregated__Type__Parameters$>
                readonly 'resolved sibling namespaces': _pt.OptionalValue<_pt.Lookup<_IResolved.Flat.Nested__Namespace$>>
            }
        ) => _IResolved.Flat.Namespace$
        
        export type Nested__Namespace = <_TAnnotation>(
            $: _IUnresolved.Flat.Nested__Namespace$<_TAnnotation>,
            $p: {
                readonly 'resolved parent sibling namespaces': _pt.OptionalValue<_pt.Lookup<_IResolved.Flat.Nested__Namespace$>>
            }
        ) => _IResolved.Flat.Nested__Namespace$
        
        export type Namespace__Selection = <_TAnnotation>(
            $: _IUnresolved.Flat.Namespace__Selection$<_TAnnotation>,
            $p: {
                readonly 'cyclic sibling types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Type$>>
                readonly 'resolved namespaces': _pt.Lookup<_IResolved.Flat.Nested__Namespace$>
                readonly 'resolved sibling types': _pt.Lookup<_IResolved.Flat.Type$>
                readonly 'type parameters': _IResolved.Flat.Aggregated__Type__Parameters$
            }
        ) => _IResolved.Flat.Namespace__Selection$
        
        export type Namespace__Selection__Tail = <_TAnnotation>(
            $: _IUnresolved.Flat.Namespace__Selection__Tail$<_TAnnotation>,
        ) => _IResolved.Flat.Namespace__Selection__Tail$
        
        export type Root = <_TAnnotation>(
            $: _IUnresolved.Flat.Root$<_TAnnotation>,
        ) => _IResolved.Flat.Root$
        
        export type Type__Arguments = <_TAnnotation>(
            $: _IUnresolved.Flat.Type__Arguments$<_TAnnotation>,
        ) => _IResolved.Flat.Type__Arguments$
        
        export type Type__Parameters = <_TAnnotation>(
            $: _IUnresolved.Flat.Type__Parameters$<_TAnnotation>,
            $p: {
                readonly 'parent type parameters': _pt.OptionalValue<_IResolved.Flat.Aggregated__Type__Parameters$>
            }
        ) => _IResolved.Flat.Type__Parameters$
        
        export type Type = <_TAnnotation>(
            $: _IUnresolved.Flat.Type$<_TAnnotation>,
            $p: {
                readonly 'cyclic sibling types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Type$>>
                readonly 'resolved namespaces': _pt.Lookup<_IResolved.Flat.Nested__Namespace$>
                readonly 'resolved sibling types': _pt.Lookup<_IResolved.Flat.Type$>
                readonly 'type parameters': _IResolved.Flat.Aggregated__Type__Parameters$
            }
        ) => _IResolved.Flat.Type$
    }
    
    export namespace Serialize {
        
        import _IResolved = Resolved
        
        export type Aggregated__Type__Parameters = (
            $: _IResolved.Flat.Aggregated__Type__Parameters$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Type__Parameters = (
            $: _IResolved.Flat.Type__Parameters$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Function__Declaration = (
            $: _IResolved.Flat.Function__Declaration$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Imports = (
            $: _IResolved.Flat.Imports$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Nested__Namespace = (
            $: _IResolved.Flat.Nested__Namespace$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Import = (
            $: _IResolved.Flat.Import$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Namespace = (
            $: _IResolved.Flat.Namespace$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Type = (
            $: _IResolved.Flat.Type$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Type__Arguments = (
            $: _IResolved.Flat.Type__Arguments$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Namespace__Selection__Tail = (
            $: _IResolved.Flat.Namespace__Selection__Tail$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Namespace__Selection = (
            $: _IResolved.Flat.Namespace__Selection$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Root = (
            $: _IResolved.Flat.Root$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
    }
    
    export namespace Select {
        
        import _IResolved = Resolved
        
        export type Nested__Namespace = (
            $: _IResolved.Flat.Nested__Namespace$,
        ) => _IResolved.Flat.Namespace$
        
        export type Namespace__Selection = (
            $: _IResolved.Flat.Namespace__Selection$,
        ) => _IResolved.Flat.Nested__Namespace$
    }
    
    export type _$ = (
        $: null,
    ) => {
        readonly 'Aggregated Type Parameters': {
            readonly 'Resolve': Resolve.Aggregated__Type__Parameters
            readonly 'Serialize': Serialize.Aggregated__Type__Parameters
        }
        readonly 'Function Declaration': {
            readonly 'Resolve': Resolve.Function__Declaration
            readonly 'Serialize': Serialize.Function__Declaration
        }
        readonly 'Import': {
            readonly 'Resolve': Resolve.Import
            readonly 'Serialize': Serialize.Import
        }
        readonly 'Imports': {
            readonly 'Resolve': Resolve.Imports
            readonly 'Serialize': Serialize.Imports
        }
        readonly 'Namespace': {
            readonly 'Resolve': Resolve.Namespace
            readonly 'Serialize': Serialize.Namespace
        }
        readonly 'Namespace Selection': {
            readonly 'Resolve': Resolve.Namespace__Selection
            readonly 'Serialize': Serialize.Namespace__Selection
        }
        readonly 'Namespace Selection Tail': {
            readonly 'Resolve': Resolve.Namespace__Selection__Tail
            readonly 'Serialize': Serialize.Namespace__Selection__Tail
        }
        readonly 'Nested Namespace': {
            readonly 'Resolve': Resolve.Nested__Namespace
            readonly 'Serialize': Serialize.Nested__Namespace
        }
        readonly 'Root': {
            readonly 'Resolve': Resolve.Root
            readonly 'Serialize': Serialize.Root
        }
        readonly 'Type': {
            readonly 'Resolve': Resolve.Type
            readonly 'Serialize': Serialize.Type
        }
        readonly 'Type Arguments': {
            readonly 'Resolve': Resolve.Type__Arguments
            readonly 'Serialize': Serialize.Type__Arguments
        }
        readonly 'Type Parameters': {
            readonly 'Resolve': Resolve.Type__Parameters
            readonly 'Serialize': Serialize.Type__Parameters
        }
    }
}

export namespace proto__implementation {
    
    import _Itypesystem = proto__typesystem
    
    export namespace Unresolved {
        
        
        export namespace Flat {
            
            
            export type Type__Selection$current__namespaceXXXXX$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Type__Selection$child__namespace$namespacex$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Type__Selection$child__namespace$selection$<_TAnnotation> = Type__Selection$<_TAnnotation>
            
            export type Type__Selection$child__namespace$<_TAnnotation> = {
                readonly 'namespacex': Type__Selection$child__namespace$namespacex$<_TAnnotation>
                readonly 'selection': Type__Selection$child__namespace$selection$<_TAnnotation>
            }
            
            export type Type__Selection$<_TAnnotation> = 
                | ['child namespace', Type__Selection$child__namespace$<_TAnnotation>]
                | ['current namespaceXXXXX', Type__Selection$current__namespaceXXXXX$<_TAnnotation>]
            
            export type Type__Arguments$D$type$<_TAnnotation> = Type__Selection$<_TAnnotation>
            
            export type Type__Arguments$D$<_TAnnotation> = {
                readonly 'type': Type__Arguments$D$type$<_TAnnotation>
            }
            
            export type Type__Arguments$<_TAnnotation> = _pt.Dictionary<Type__Arguments$D$<_TAnnotation>>
            
            export type Local__Variables$D$type$<_TAnnotation> = Type__Selection$<_TAnnotation>
            
            export type Local__Variables$D$initialization$<_TAnnotation> = Initialization$<_TAnnotation>
            
            export type Local__Variables$D$<_TAnnotation> = {
                readonly 'initialization': Local__Variables$D$initialization$<_TAnnotation>
                readonly 'type': Local__Variables$D$type$<_TAnnotation>
            }
            
            export type Local__Variables$<_TAnnotation> = _pt.Dictionary<Local__Variables$D$<_TAnnotation>>
            
            export type Aggregated__Variable$type$variable__stack2$variable$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Aggregated__Variable$type$variable__stack2$<_TAnnotation> = {
                readonly 'variable': Aggregated__Variable$type$variable__stack2$variable$<_TAnnotation>
            }
            
            export type Aggregated__Variable$type$local$<_TAnnotation> = null
            
            export type Aggregated__Variable$type$<_TAnnotation> = 
                | ['local', Aggregated__Variable$type$local$<_TAnnotation>]
                | ['variable stack2', Aggregated__Variable$type$variable__stack2$<_TAnnotation>]
            
            export type Aggregated__Variable$<_TAnnotation> = {
                readonly 'type': Aggregated__Variable$type$<_TAnnotation>
            }
            
            export type Aggregated__Variables$D$<_TAnnotation> = Aggregated__Variable$<_TAnnotation>
            
            export type Aggregated__Variables$<_TAnnotation> = _pt.Dictionary<Aggregated__Variables$D$<_TAnnotation>>
            
            export type Variables$local$<_TAnnotation> = Local__Variables$<_TAnnotation>
            
            export type Variables$aggregated$<_TAnnotation> = Aggregated__Variables$<_TAnnotation>
            
            export type Variables$<_TAnnotation> = {
                readonly 'aggregated': Variables$aggregated$<_TAnnotation>
                readonly 'local': Variables$local$<_TAnnotation>
            }
            
            export type Target__Selection__Tail$O$step$property$group$<_TAnnotation> = _TAnnotation
            
            export type Target__Selection__Tail$O$step$property$property$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Target__Selection__Tail$O$step$property$<_TAnnotation> = {
                readonly 'group': Target__Selection__Tail$O$step$property$group$<_TAnnotation>
                readonly 'property': Target__Selection__Tail$O$step$property$property$<_TAnnotation>
            }
            
            export type Target__Selection__Tail$O$step$<_TAnnotation> = 
                | ['property', Target__Selection__Tail$O$step$property$<_TAnnotation>]
            
            export type Target__Selection__Tail$O$tail$<_TAnnotation> = Target__Selection__Tail$<_TAnnotation>
            
            export type Target__Selection__Tail$O$<_TAnnotation> = {
                readonly 'step': Target__Selection__Tail$O$step$<_TAnnotation>
                readonly 'tail': Target__Selection__Tail$O$tail$<_TAnnotation>
            }
            
            export type Target__Selection__Tail$<_TAnnotation> = _pt.OptionalValue<Target__Selection__Tail$O$<_TAnnotation>>
            
            export type Target__Selection$variable$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Target__Selection$tail$<_TAnnotation> = Target__Selection__Tail$<_TAnnotation>
            
            export type Target__Selection$<_TAnnotation> = {
                readonly 'tail': Target__Selection$tail$<_TAnnotation>
                readonly 'variable': Target__Selection$variable$<_TAnnotation>
            }
            
            export type Source__Selection__Tail$O$step$call$address__function$<_TAnnotation> = _TAnnotation
            
            export type Source__Selection__Tail$O$step$call$type__arguments$<_TAnnotation> = Type__Arguments$<_TAnnotation>
            
            export type Source__Selection__Tail$O$step$call$context$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>
            
            export type Source__Selection__Tail$O$step$call$arguments$D$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>
            
            export type Source__Selection__Tail$O$step$call$arguments$<_TAnnotation> = _pt.Dictionary<Source__Selection__Tail$O$step$call$arguments$D$<_TAnnotation>>
            
            export type Source__Selection__Tail$O$step$call$<_TAnnotation> = {
                readonly 'address function': Source__Selection__Tail$O$step$call$address__function$<_TAnnotation>
                readonly 'arguments': Source__Selection__Tail$O$step$call$arguments$<_TAnnotation>
                readonly 'context': Source__Selection__Tail$O$step$call$context$<_TAnnotation>
                readonly 'type arguments': Source__Selection__Tail$O$step$call$type__arguments$<_TAnnotation>
            }
            
            export type Source__Selection__Tail$O$step$property$group$<_TAnnotation> = _TAnnotation
            
            export type Source__Selection__Tail$O$step$property$property$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Source__Selection__Tail$O$step$property$<_TAnnotation> = {
                readonly 'group': Source__Selection__Tail$O$step$property$group$<_TAnnotation>
                readonly 'property': Source__Selection__Tail$O$step$property$property$<_TAnnotation>
            }
            
            export type Source__Selection__Tail$O$step$<_TAnnotation> = 
                | ['call', Source__Selection__Tail$O$step$call$<_TAnnotation>]
                | ['property', Source__Selection__Tail$O$step$property$<_TAnnotation>]
            
            export type Source__Selection__Tail$O$tail$<_TAnnotation> = Source__Selection__Tail$<_TAnnotation>
            
            export type Source__Selection__Tail$O$<_TAnnotation> = {
                readonly 'step': Source__Selection__Tail$O$step$<_TAnnotation>
                readonly 'tail': Source__Selection__Tail$O$tail$<_TAnnotation>
            }
            
            export type Source__Selection__Tail$<_TAnnotation> = _pt.OptionalValue<Source__Selection__Tail$O$<_TAnnotation>>
            
            export type Source__Selection$start$context$<_TAnnotation> = null
            
            export type Source__Selection$start$variable$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Source__Selection$start$<_TAnnotation> = 
                | ['context', Source__Selection$start$context$<_TAnnotation>]
                | ['variable', Source__Selection$start$variable$<_TAnnotation>]
            
            export type Source__Selection$tail$<_TAnnotation> = Source__Selection__Tail$<_TAnnotation>
            
            export type Source__Selection$<_TAnnotation> = {
                readonly 'start': Source__Selection$start$<_TAnnotation>
                readonly 'tail': Source__Selection$tail$<_TAnnotation>
            }
            
            export type Initialization__Or__Selection$initialization$<_TAnnotation> = Initialization$<_TAnnotation>
            
            export type Initialization__Or__Selection$selection$selection$<_TAnnotation> = Source__Selection$<_TAnnotation>
            
            export type Initialization__Or__Selection$selection$<_TAnnotation> = {
                readonly 'selection': Initialization__Or__Selection$selection$selection$<_TAnnotation>
            }
            
            export type Initialization__Or__Selection$<_TAnnotation> = 
                | ['initialization', Initialization__Or__Selection$initialization$<_TAnnotation>]
                | ['selection', Initialization__Or__Selection$selection$<_TAnnotation>]
            
            export type String__Initialization__Or__Selection$initialization$<_TAnnotation> = String__Initialization$<_TAnnotation>
            
            export type String__Initialization__Or__Selection$selection$selection$<_TAnnotation> = Source__Selection$<_TAnnotation>
            
            export type String__Initialization__Or__Selection$selection$string$<_TAnnotation> = _TAnnotation
            
            export type String__Initialization__Or__Selection$selection$<_TAnnotation> = {
                readonly 'selection': String__Initialization__Or__Selection$selection$selection$<_TAnnotation>
                readonly 'string': String__Initialization__Or__Selection$selection$string$<_TAnnotation>
            }
            
            export type String__Initialization__Or__Selection$<_TAnnotation> = 
                | ['initialization', String__Initialization__Or__Selection$initialization$<_TAnnotation>]
                | ['selection', String__Initialization__Or__Selection$selection$<_TAnnotation>]
            
            export type Numerical__Initialization__Or__Selection$initialization$<_TAnnotation> = Numerical__Initialization$<_TAnnotation>
            
            export type Numerical__Initialization__Or__Selection$selection$selection$<_TAnnotation> = Source__Selection$<_TAnnotation>
            
            export type Numerical__Initialization__Or__Selection$selection$number$<_TAnnotation> = _TAnnotation
            
            export type Numerical__Initialization__Or__Selection$selection$<_TAnnotation> = {
                readonly 'number': Numerical__Initialization__Or__Selection$selection$number$<_TAnnotation>
                readonly 'selection': Numerical__Initialization__Or__Selection$selection$selection$<_TAnnotation>
            }
            
            export type Numerical__Initialization__Or__Selection$<_TAnnotation> = 
                | ['initialization', Numerical__Initialization__Or__Selection$initialization$<_TAnnotation>]
                | ['selection', Numerical__Initialization__Or__Selection$selection$<_TAnnotation>]
            
            export type Boolean__Initialization__Or__Selection$initialization$<_TAnnotation> = Boolean__Initialization$<_TAnnotation>
            
            export type Boolean__Initialization__Or__Selection$selection$selection$<_TAnnotation> = Source__Selection$<_TAnnotation>
            
            export type Boolean__Initialization__Or__Selection$selection$boolean$<_TAnnotation> = _TAnnotation
            
            export type Boolean__Initialization__Or__Selection$selection$<_TAnnotation> = {
                readonly 'boolean': Boolean__Initialization__Or__Selection$selection$boolean$<_TAnnotation>
                readonly 'selection': Boolean__Initialization__Or__Selection$selection$selection$<_TAnnotation>
            }
            
            export type Boolean__Initialization__Or__Selection$<_TAnnotation> = 
                | ['initialization', Boolean__Initialization__Or__Selection$initialization$<_TAnnotation>]
                | ['selection', Boolean__Initialization__Or__Selection$selection$<_TAnnotation>]
            
            export type Boolean__Initialization$and$left__hand__side$<_TAnnotation> = Boolean__Initialization__Or__Selection$<_TAnnotation>
            
            export type Boolean__Initialization$and$right__hand__side$<_TAnnotation> = Boolean__Initialization__Or__Selection$<_TAnnotation>
            
            export type Boolean__Initialization$and$<_TAnnotation> = {
                readonly 'left hand side': Boolean__Initialization$and$left__hand__side$<_TAnnotation>
                readonly 'right hand side': Boolean__Initialization$and$right__hand__side$<_TAnnotation>
            }
            
            export type Boolean__Initialization$or$left__hand__side$<_TAnnotation> = Boolean__Initialization__Or__Selection$<_TAnnotation>
            
            export type Boolean__Initialization$or$right__hand__side$<_TAnnotation> = Boolean__Initialization__Or__Selection$<_TAnnotation>
            
            export type Boolean__Initialization$or$<_TAnnotation> = {
                readonly 'left hand side': Boolean__Initialization$or$left__hand__side$<_TAnnotation>
                readonly 'right hand side': Boolean__Initialization$or$right__hand__side$<_TAnnotation>
            }
            
            export type Boolean__Initialization$false$<_TAnnotation> = null
            
            export type Boolean__Initialization$not$<_TAnnotation> = Boolean__Initialization__Or__Selection$<_TAnnotation>
            
            export type Boolean__Initialization$true$<_TAnnotation> = null
            
            export type Boolean__Initialization$string__equals$left__hand__side$<_TAnnotation> = String__Initialization__Or__Selection$<_TAnnotation>
            
            export type Boolean__Initialization$string__equals$right__hand__side$<_TAnnotation> = String__Initialization__Or__Selection$<_TAnnotation>
            
            export type Boolean__Initialization$string__equals$<_TAnnotation> = {
                readonly 'left hand side': Boolean__Initialization$string__equals$left__hand__side$<_TAnnotation>
                readonly 'right hand side': Boolean__Initialization$string__equals$right__hand__side$<_TAnnotation>
            }
            
            export type Boolean__Initialization$string__not__equals$left__hand__side$<_TAnnotation> = String__Initialization__Or__Selection$<_TAnnotation>
            
            export type Boolean__Initialization$string__not__equals$right__hand__side$<_TAnnotation> = String__Initialization__Or__Selection$<_TAnnotation>
            
            export type Boolean__Initialization$string__not__equals$<_TAnnotation> = {
                readonly 'left hand side': Boolean__Initialization$string__not__equals$left__hand__side$<_TAnnotation>
                readonly 'right hand side': Boolean__Initialization$string__not__equals$right__hand__side$<_TAnnotation>
            }
            
            export type Boolean__Initialization$number__equals$left__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>
            
            export type Boolean__Initialization$number__equals$right__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>
            
            export type Boolean__Initialization$number__equals$<_TAnnotation> = {
                readonly 'left hand side': Boolean__Initialization$number__equals$left__hand__side$<_TAnnotation>
                readonly 'right hand side': Boolean__Initialization$number__equals$right__hand__side$<_TAnnotation>
            }
            
            export type Boolean__Initialization$number__not__equals$left__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>
            
            export type Boolean__Initialization$number__not__equals$right__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>
            
            export type Boolean__Initialization$number__not__equals$<_TAnnotation> = {
                readonly 'left hand side': Boolean__Initialization$number__not__equals$left__hand__side$<_TAnnotation>
                readonly 'right hand side': Boolean__Initialization$number__not__equals$right__hand__side$<_TAnnotation>
            }
            
            export type Boolean__Initialization$greater__than$left__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>
            
            export type Boolean__Initialization$greater__than$right__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>
            
            export type Boolean__Initialization$greater__than$<_TAnnotation> = {
                readonly 'left hand side': Boolean__Initialization$greater__than$left__hand__side$<_TAnnotation>
                readonly 'right hand side': Boolean__Initialization$greater__than$right__hand__side$<_TAnnotation>
            }
            
            export type Boolean__Initialization$less__than$left__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>
            
            export type Boolean__Initialization$less__than$right__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>
            
            export type Boolean__Initialization$less__than$<_TAnnotation> = {
                readonly 'left hand side': Boolean__Initialization$less__than$left__hand__side$<_TAnnotation>
                readonly 'right hand side': Boolean__Initialization$less__than$right__hand__side$<_TAnnotation>
            }
            
            export type Boolean__Initialization$<_TAnnotation> = 
                | ['and', Boolean__Initialization$and$<_TAnnotation>]
                | ['false', Boolean__Initialization$false$<_TAnnotation>]
                | ['greater than', Boolean__Initialization$greater__than$<_TAnnotation>]
                | ['less than', Boolean__Initialization$less__than$<_TAnnotation>]
                | ['not', Boolean__Initialization$not$<_TAnnotation>]
                | ['number equals', Boolean__Initialization$number__equals$<_TAnnotation>]
                | ['number not equals', Boolean__Initialization$number__not__equals$<_TAnnotation>]
                | ['or', Boolean__Initialization$or$<_TAnnotation>]
                | ['string equals', Boolean__Initialization$string__equals$<_TAnnotation>]
                | ['string not equals', Boolean__Initialization$string__not__equals$<_TAnnotation>]
                | ['true', Boolean__Initialization$true$<_TAnnotation>]
            
            export type Numerical__Initialization$minus$left__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>
            
            export type Numerical__Initialization$minus$right__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>
            
            export type Numerical__Initialization$minus$<_TAnnotation> = {
                readonly 'left hand side': Numerical__Initialization$minus$left__hand__side$<_TAnnotation>
                readonly 'right hand side': Numerical__Initialization$minus$right__hand__side$<_TAnnotation>
            }
            
            export type Numerical__Initialization$plus$left__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>
            
            export type Numerical__Initialization$plus$right__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>
            
            export type Numerical__Initialization$plus$<_TAnnotation> = {
                readonly 'left hand side': Numerical__Initialization$plus$left__hand__side$<_TAnnotation>
                readonly 'right hand side': Numerical__Initialization$plus$right__hand__side$<_TAnnotation>
            }
            
            export type Numerical__Initialization$predecrement$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>
            
            export type Numerical__Initialization$preincrement$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>
            
            export type Numerical__Initialization$postdecrement$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>
            
            export type Numerical__Initialization$postincrement$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>
            
            export type Numerical__Initialization$numeric__literal$<_TAnnotation> = number
            
            export type Numerical__Initialization$<_TAnnotation> = 
                | ['minus', Numerical__Initialization$minus$<_TAnnotation>]
                | ['numeric literal', Numerical__Initialization$numeric__literal$<_TAnnotation>]
                | ['plus', Numerical__Initialization$plus$<_TAnnotation>]
                | ['postdecrement', Numerical__Initialization$postdecrement$<_TAnnotation>]
                | ['postincrement', Numerical__Initialization$postincrement$<_TAnnotation>]
                | ['predecrement', Numerical__Initialization$predecrement$<_TAnnotation>]
                | ['preincrement', Numerical__Initialization$preincrement$<_TAnnotation>]
            
            export type String__Initialization$string__literal$<_TAnnotation> = string
            
            export type String__Initialization$<_TAnnotation> = 
                | ['string literal', String__Initialization$string__literal$<_TAnnotation>]
            
            export type Initialization$array__literal$definition$<_TAnnotation> = _TAnnotation
            
            export type Initialization$array__literal$initialization$A$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>
            
            export type Initialization$array__literal$initialization$<_TAnnotation> = _pt.Array<Initialization$array__literal$initialization$A$<_TAnnotation>>
            
            export type Initialization$array__literal$<_TAnnotation> = {
                readonly 'definition': Initialization$array__literal$definition$<_TAnnotation>
                readonly 'initialization': Initialization$array__literal$initialization$<_TAnnotation>
            }
            
            export type Initialization$array__map$definition$<_TAnnotation> = _TAnnotation
            
            export type Initialization$array__map$source$<_TAnnotation> = Source__Selection$<_TAnnotation>
            
            export type Initialization$array__map$initialization$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>
            
            export type Initialization$array__map$<_TAnnotation> = {
                readonly 'definition': Initialization$array__map$definition$<_TAnnotation>
                readonly 'initialization': Initialization$array__map$initialization$<_TAnnotation>
                readonly 'source': Initialization$array__map$source$<_TAnnotation>
            }
            
            export type Initialization$boolean$definition$<_TAnnotation> = _TAnnotation
            
            export type Initialization$boolean$initialization$<_TAnnotation> = Boolean__Initialization$<_TAnnotation>
            
            export type Initialization$boolean$<_TAnnotation> = {
                readonly 'definition': Initialization$boolean$definition$<_TAnnotation>
                readonly 'initialization': Initialization$boolean$initialization$<_TAnnotation>
            }
            
            export type Initialization$change__context$source$<_TAnnotation> = Source__Selection$<_TAnnotation>
            
            export type Initialization$change__context$initialization$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>
            
            export type Initialization$change__context$<_TAnnotation> = {
                readonly 'initialization': Initialization$change__context$initialization$<_TAnnotation>
                readonly 'source': Initialization$change__context$source$<_TAnnotation>
            }
            
            export type Initialization$dictionary__literal$definition$<_TAnnotation> = _TAnnotation
            
            export type Initialization$dictionary__literal$initialization$D$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>
            
            export type Initialization$dictionary__literal$initialization$<_TAnnotation> = _pt.Dictionary<Initialization$dictionary__literal$initialization$D$<_TAnnotation>>
            
            export type Initialization$dictionary__literal$<_TAnnotation> = {
                readonly 'definition': Initialization$dictionary__literal$definition$<_TAnnotation>
                readonly 'initialization': Initialization$dictionary__literal$initialization$<_TAnnotation>
            }
            
            export type Initialization$dictionary__map$definition$<_TAnnotation> = _TAnnotation
            
            export type Initialization$dictionary__map$source$<_TAnnotation> = Source__Selection$<_TAnnotation>
            
            export type Initialization$dictionary__map$initialization$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>
            
            export type Initialization$dictionary__map$<_TAnnotation> = {
                readonly 'definition': Initialization$dictionary__map$definition$<_TAnnotation>
                readonly 'initialization': Initialization$dictionary__map$initialization$<_TAnnotation>
                readonly 'source': Initialization$dictionary__map$source$<_TAnnotation>
            }
            
            export type Initialization$group__literal$definition$<_TAnnotation> = _TAnnotation
            
            export type Initialization$group__literal$properties$D$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>
            
            export type Initialization$group__literal$properties$<_TAnnotation> = _pt.Dictionary<Initialization$group__literal$properties$D$<_TAnnotation>>
            
            export type Initialization$group__literal$<_TAnnotation> = {
                readonly 'definition': Initialization$group__literal$definition$<_TAnnotation>
                readonly 'properties': Initialization$group__literal$properties$<_TAnnotation>
            }
            
            export type Initialization$implement__me$<_TAnnotation> = string
            
            export type Initialization$null$definition$<_TAnnotation> = _TAnnotation
            
            export type Initialization$null$<_TAnnotation> = {
                readonly 'definition': Initialization$null$definition$<_TAnnotation>
            }
            
            export type Initialization$numerical$definition$<_TAnnotation> = _TAnnotation
            
            export type Initialization$numerical$initialization$<_TAnnotation> = Numerical__Initialization$<_TAnnotation>
            
            export type Initialization$numerical$<_TAnnotation> = {
                readonly 'definition': Initialization$numerical$definition$<_TAnnotation>
                readonly 'initialization': Initialization$numerical$initialization$<_TAnnotation>
            }
            
            export type Initialization$optional$definition$<_TAnnotation> = _TAnnotation
            
            export type Initialization$optional$<_TAnnotation> = {
                readonly 'definition': Initialization$optional$definition$<_TAnnotation>
            }
            
            export type Initialization$procedure$definition$<_TAnnotation> = _TAnnotation
            
            export type Initialization$procedure$temp__has__parameters$O$<_TAnnotation> = null
            
            export type Initialization$procedure$temp__has__parameters$<_TAnnotation> = _pt.OptionalValue<Initialization$procedure$temp__has__parameters$O$<_TAnnotation>>
            
            export type Initialization$procedure$variables$<_TAnnotation> = Aggregated__Variables$<_TAnnotation>
            
            export type Initialization$procedure$block$<_TAnnotation> = Block$<_TAnnotation>
            
            export type Initialization$procedure$<_TAnnotation> = {
                readonly 'block': Initialization$procedure$block$<_TAnnotation>
                readonly 'definition': Initialization$procedure$definition$<_TAnnotation>
                readonly 'temp has parameters': Initialization$procedure$temp__has__parameters$<_TAnnotation>
                readonly 'variables': Initialization$procedure$variables$<_TAnnotation>
            }
            
            export type Initialization$tagged__union__literal$definition$<_TAnnotation> = _TAnnotation
            
            export type Initialization$tagged__union__literal$state$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Initialization$tagged__union__literal$initialization$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>
            
            export type Initialization$tagged__union__literal$<_TAnnotation> = {
                readonly 'definition': Initialization$tagged__union__literal$definition$<_TAnnotation>
                readonly 'initialization': Initialization$tagged__union__literal$initialization$<_TAnnotation>
                readonly 'state': Initialization$tagged__union__literal$state$<_TAnnotation>
            }
            
            export type Initialization$string$definition$<_TAnnotation> = _TAnnotation
            
            export type Initialization$string$initialization$<_TAnnotation> = String__Initialization$<_TAnnotation>
            
            export type Initialization$string$<_TAnnotation> = {
                readonly 'definition': Initialization$string$definition$<_TAnnotation>
                readonly 'initialization': Initialization$string$initialization$<_TAnnotation>
            }
            
            export type Initialization$switch$definition$<_TAnnotation> = _TAnnotation
            
            export type Initialization$switch$temp__type$<_TAnnotation> = Type__Selection$<_TAnnotation>
            
            export type Initialization$switch$source$<_TAnnotation> = Source__Selection$<_TAnnotation>
            
            export type Initialization$switch$cases$D$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>
            
            export type Initialization$switch$cases$<_TAnnotation> = _pt.Dictionary<Initialization$switch$cases$D$<_TAnnotation>>
            
            export type Initialization$switch$default$O$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>
            
            export type Initialization$switch$default$<_TAnnotation> = _pt.OptionalValue<Initialization$switch$default$O$<_TAnnotation>>
            
            export type Initialization$switch$<_TAnnotation> = {
                readonly 'cases': Initialization$switch$cases$<_TAnnotation>
                readonly 'default': Initialization$switch$default$<_TAnnotation>
                readonly 'definition': Initialization$switch$definition$<_TAnnotation>
                readonly 'source': Initialization$switch$source$<_TAnnotation>
                readonly 'temp type': Initialization$switch$temp__type$<_TAnnotation>
            }
            
            export type Initialization$value__function$definition$<_TAnnotation> = _TAnnotation
            
            export type Initialization$value__function$temp__has__parameters$O$<_TAnnotation> = null
            
            export type Initialization$value__function$temp__has__parameters$<_TAnnotation> = _pt.OptionalValue<Initialization$value__function$temp__has__parameters$O$<_TAnnotation>>
            
            export type Initialization$value__function$variables$<_TAnnotation> = Aggregated__Variables$<_TAnnotation>
            
            export type Initialization$value__function$initialization$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>
            
            export type Initialization$value__function$<_TAnnotation> = {
                readonly 'definition': Initialization$value__function$definition$<_TAnnotation>
                readonly 'initialization': Initialization$value__function$initialization$<_TAnnotation>
                readonly 'temp has parameters': Initialization$value__function$temp__has__parameters$<_TAnnotation>
                readonly 'variables': Initialization$value__function$variables$<_TAnnotation>
            }
            
            export type Initialization$variables$variables$<_TAnnotation> = Variables$<_TAnnotation>
            
            export type Initialization$variables$initialization$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>
            
            export type Initialization$variables$<_TAnnotation> = {
                readonly 'initialization': Initialization$variables$initialization$<_TAnnotation>
                readonly 'variables': Initialization$variables$variables$<_TAnnotation>
            }
            
            export type Initialization$<_TAnnotation> = 
                | ['array literal', Initialization$array__literal$<_TAnnotation>]
                | ['array map', Initialization$array__map$<_TAnnotation>]
                | ['boolean', Initialization$boolean$<_TAnnotation>]
                | ['change context', Initialization$change__context$<_TAnnotation>]
                | ['dictionary literal', Initialization$dictionary__literal$<_TAnnotation>]
                | ['dictionary map', Initialization$dictionary__map$<_TAnnotation>]
                | ['group literal', Initialization$group__literal$<_TAnnotation>]
                | ['implement me', Initialization$implement__me$<_TAnnotation>]
                | ['null', Initialization$null$<_TAnnotation>]
                | ['numerical', Initialization$numerical$<_TAnnotation>]
                | ['optional', Initialization$optional$<_TAnnotation>]
                | ['procedure', Initialization$procedure$<_TAnnotation>]
                | ['string', Initialization$string$<_TAnnotation>]
                | ['switch', Initialization$switch$<_TAnnotation>]
                | ['tagged union literal', Initialization$tagged__union__literal$<_TAnnotation>]
                | ['value function', Initialization$value__function$<_TAnnotation>]
                | ['variables', Initialization$variables$<_TAnnotation>]
            
            export type Block$variables$<_TAnnotation> = Variables$<_TAnnotation>
            
            export type Block$statements$<_TAnnotation> = Statements$<_TAnnotation>
            
            export type Block$<_TAnnotation> = {
                readonly 'statements': Block$statements$<_TAnnotation>
                readonly 'variables': Block$variables$<_TAnnotation>
            }
            
            export type Assign$target$<_TAnnotation> = Target__Selection$<_TAnnotation>
            
            export type Assign$initialization$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>
            
            export type Assign$<_TAnnotation> = {
                readonly 'initialization': Assign$initialization$<_TAnnotation>
                readonly 'target': Assign$target$<_TAnnotation>
            }
            
            export type Statements$A$block$<_TAnnotation> = Block$<_TAnnotation>
            
            export type Statements$A$call$function$<_TAnnotation> = Source__Selection$<_TAnnotation>
            
            export type Statements$A$call$context__definition$<_TAnnotation> = _TAnnotation
            
            export type Statements$A$call$context$<_TAnnotation> = Source__Selection$<_TAnnotation>
            
            export type Statements$A$call$arguments$D$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>
            
            export type Statements$A$call$arguments$<_TAnnotation> = _pt.Dictionary<Statements$A$call$arguments$D$<_TAnnotation>>
            
            export type Statements$A$call$<_TAnnotation> = {
                readonly 'arguments': Statements$A$call$arguments$<_TAnnotation>
                readonly 'context': Statements$A$call$context$<_TAnnotation>
                readonly 'context definition': Statements$A$call$context__definition$<_TAnnotation>
                readonly 'function': Statements$A$call$function$<_TAnnotation>
            }
            
            export type Statements$A$change__context$source$<_TAnnotation> = Source__Selection$<_TAnnotation>
            
            export type Statements$A$change__context$block$<_TAnnotation> = Block$<_TAnnotation>
            
            export type Statements$A$change__context$<_TAnnotation> = {
                readonly 'block': Statements$A$change__context$block$<_TAnnotation>
                readonly 'source': Statements$A$change__context$source$<_TAnnotation>
            }
            
            export type Statements$A$if$condition$<_TAnnotation> = Boolean__Initialization__Or__Selection$<_TAnnotation>
            
            export type Statements$A$if$then$<_TAnnotation> = Block$<_TAnnotation>
            
            export type Statements$A$if$else$O$<_TAnnotation> = Block$<_TAnnotation>
            
            export type Statements$A$if$else$<_TAnnotation> = _pt.OptionalValue<Statements$A$if$else$O$<_TAnnotation>>
            
            export type Statements$A$if$<_TAnnotation> = {
                readonly 'condition': Statements$A$if$condition$<_TAnnotation>
                readonly 'else': Statements$A$if$else$<_TAnnotation>
                readonly 'then': Statements$A$if$then$<_TAnnotation>
            }
            
            export type Statements$A$switch$source$<_TAnnotation> = Source__Selection$<_TAnnotation>
            
            export type Statements$A$switch$context__definition$<_TAnnotation> = _TAnnotation
            
            export type Statements$A$switch$cases$D$<_TAnnotation> = Block$<_TAnnotation>
            
            export type Statements$A$switch$cases$<_TAnnotation> = _pt.Dictionary<Statements$A$switch$cases$D$<_TAnnotation>>
            
            export type Statements$A$switch$default$O$<_TAnnotation> = Block$<_TAnnotation>
            
            export type Statements$A$switch$default$<_TAnnotation> = _pt.OptionalValue<Statements$A$switch$default$O$<_TAnnotation>>
            
            export type Statements$A$switch$<_TAnnotation> = {
                readonly 'cases': Statements$A$switch$cases$<_TAnnotation>
                readonly 'context definition': Statements$A$switch$context__definition$<_TAnnotation>
                readonly 'default': Statements$A$switch$default$<_TAnnotation>
                readonly 'source': Statements$A$switch$source$<_TAnnotation>
            }
            
            export type Statements$A$with$source$<_TAnnotation> = Source__Selection$<_TAnnotation>
            
            export type Statements$A$with$action$assign$<_TAnnotation> = Assign$<_TAnnotation>
            
            export type Statements$A$with$action$minus__assign$number$<_TAnnotation> = _TAnnotation
            
            export type Statements$A$with$action$minus__assign$right__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>
            
            export type Statements$A$with$action$minus__assign$<_TAnnotation> = {
                readonly 'number': Statements$A$with$action$minus__assign$number$<_TAnnotation>
                readonly 'right hand side': Statements$A$with$action$minus__assign$right__hand__side$<_TAnnotation>
            }
            
            export type Statements$A$with$action$plus__assign$number$<_TAnnotation> = _TAnnotation
            
            export type Statements$A$with$action$plus__assign$right__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>
            
            export type Statements$A$with$action$plus__assign$<_TAnnotation> = {
                readonly 'number': Statements$A$with$action$plus__assign$number$<_TAnnotation>
                readonly 'right hand side': Statements$A$with$action$plus__assign$right__hand__side$<_TAnnotation>
            }
            
            export type Statements$A$with$action$<_TAnnotation> = 
                | ['assign', Statements$A$with$action$assign$<_TAnnotation>]
                | ['minus assign', Statements$A$with$action$minus__assign$<_TAnnotation>]
                | ['plus assign', Statements$A$with$action$plus__assign$<_TAnnotation>]
            
            export type Statements$A$with$<_TAnnotation> = {
                readonly 'action': Statements$A$with$action$<_TAnnotation>
                readonly 'source': Statements$A$with$source$<_TAnnotation>
            }
            
            export type Statements$A$while$condition$<_TAnnotation> = Boolean__Initialization__Or__Selection$<_TAnnotation>
            
            export type Statements$A$while$block$<_TAnnotation> = Block$<_TAnnotation>
            
            export type Statements$A$while$<_TAnnotation> = {
                readonly 'block': Statements$A$while$block$<_TAnnotation>
                readonly 'condition': Statements$A$while$condition$<_TAnnotation>
            }
            
            export type Statements$A$<_TAnnotation> = 
                | ['block', Statements$A$block$<_TAnnotation>]
                | ['call', Statements$A$call$<_TAnnotation>]
                | ['change context', Statements$A$change__context$<_TAnnotation>]
                | ['if', Statements$A$if$<_TAnnotation>]
                | ['switch', Statements$A$switch$<_TAnnotation>]
                | ['while', Statements$A$while$<_TAnnotation>]
                | ['with', Statements$A$with$<_TAnnotation>]
            
            export type Statements$<_TAnnotation> = _pt.Array<Statements$A$<_TAnnotation>>
            
            export type Source__File$type$<_TAnnotation> = Type__Selection$<_TAnnotation>
            
            export type Source__File$initialization$<_TAnnotation> = Initialization$<_TAnnotation>
            
            export type Source__File$<_TAnnotation> = {
                readonly 'initialization': Source__File$initialization$<_TAnnotation>
                readonly 'type': Source__File$type$<_TAnnotation>
            }
            
            export type Root$<_TAnnotation> = Source__File$<_TAnnotation>
        }
        
        export namespace T {
            
            import _IFlat = Flat
            
            
            export namespace TType__Selection {
                
                
                
                export namespace current__namespaceXXXXX {
                    
                    
                    
                    export type $<_TAnnotation> = _IFlat.Type__Selection$current__namespaceXXXXX$<_TAnnotation>
                }
                
                export namespace child__namespace {
                    
                    
                    
                    export namespace namespacex {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Type__Selection$child__namespace$namespacex$<_TAnnotation>
                    }
                    
                    export namespace selection {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Type__Selection$child__namespace$selection$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type__Selection$child__namespace$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Type__Selection$<_TAnnotation>
            }
            
            export namespace TType__Arguments {
                
                
                
                export namespace D {
                    
                    
                    
                    export namespace _ltype {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Type__Arguments$D$type$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type__Arguments$D$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Type__Arguments$<_TAnnotation>
            }
            
            export namespace Local__Variables {
                
                
                
                export namespace D {
                    
                    
                    
                    export namespace _ltype {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Local__Variables$D$type$<_TAnnotation>
                    }
                    
                    export namespace initialization {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Local__Variables$D$initialization$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Local__Variables$D$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Local__Variables$<_TAnnotation>
            }
            
            export namespace Aggregated__Variable {
                
                
                
                export namespace _ltype {
                    
                    
                    
                    export namespace variable__stack2 {
                        
                        
                        
                        export namespace variable {
                            
                            
                            
                            export type $<_TAnnotation> = _IFlat.Aggregated__Variable$type$variable__stack2$variable$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Aggregated__Variable$type$variable__stack2$<_TAnnotation>
                    }
                    
                    export namespace local {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Aggregated__Variable$type$local$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Aggregated__Variable$type$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Aggregated__Variable$<_TAnnotation>
            }
            
            export namespace Aggregated__Variables {
                
                
                
                export namespace D {
                    
                    
                    
                    export type $<_TAnnotation> = _IFlat.Aggregated__Variables$D$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Aggregated__Variables$<_TAnnotation>
            }
            
            export namespace Variables {
                
                
                
                export namespace local {
                    
                    
                    
                    export type $<_TAnnotation> = _IFlat.Variables$local$<_TAnnotation>
                }
                
                export namespace aggregated {
                    
                    
                    
                    export type $<_TAnnotation> = _IFlat.Variables$aggregated$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Variables$<_TAnnotation>
            }
            
            export namespace TTarget__Selection__Tail {
                
                
                
                export namespace O {
                    
                    
                    
                    export namespace step {
                        
                        
                        
                        export namespace property {
                            
                            
                            
                            export namespace group {
                                
                                
                                
                                export type $<_TAnnotation> = _IFlat.Target__Selection__Tail$O$step$property$group$<_TAnnotation>
                            }
                            
                            export namespace property {
                                
                                
                                
                                export type $<_TAnnotation> = _IFlat.Target__Selection__Tail$O$step$property$property$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Target__Selection__Tail$O$step$property$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Target__Selection__Tail$O$step$<_TAnnotation>
                    }
                    
                    export namespace tail {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Target__Selection__Tail$O$tail$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Target__Selection__Tail$O$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Target__Selection__Tail$<_TAnnotation>
            }
            
            export namespace TTarget__Selection {
                
                
                
                export namespace variable {
                    
                    
                    
                    export type $<_TAnnotation> = _IFlat.Target__Selection$variable$<_TAnnotation>
                }
                
                export namespace tail {
                    
                    
                    
                    export type $<_TAnnotation> = _IFlat.Target__Selection$tail$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Target__Selection$<_TAnnotation>
            }
            
            export namespace Source__Selection__Tail {
                
                
                
                export namespace O {
                    
                    
                    
                    export namespace step {
                        
                        
                        
                        export namespace call {
                            
                            
                            
                            export namespace address__function {
                                
                                
                                
                                export type $<_TAnnotation> = _IFlat.Source__Selection__Tail$O$step$call$address__function$<_TAnnotation>
                            }
                            
                            export namespace type__arguments {
                                
                                
                                
                                export type $<_TAnnotation> = _IFlat.Source__Selection__Tail$O$step$call$type__arguments$<_TAnnotation>
                            }
                            
                            export namespace context {
                                
                                
                                
                                export type $<_TAnnotation> = _IFlat.Source__Selection__Tail$O$step$call$context$<_TAnnotation>
                            }
                            
                            export namespace _larguments {
                                
                                
                                
                                export namespace D {
                                    
                                    
                                    
                                    export type $<_TAnnotation> = _IFlat.Source__Selection__Tail$O$step$call$arguments$D$<_TAnnotation>
                                }
                                
                                export type $<_TAnnotation> = _IFlat.Source__Selection__Tail$O$step$call$arguments$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Source__Selection__Tail$O$step$call$<_TAnnotation>
                        }
                        
                        export namespace property {
                            
                            
                            
                            export namespace group {
                                
                                
                                
                                export type $<_TAnnotation> = _IFlat.Source__Selection__Tail$O$step$property$group$<_TAnnotation>
                            }
                            
                            export namespace property {
                                
                                
                                
                                export type $<_TAnnotation> = _IFlat.Source__Selection__Tail$O$step$property$property$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Source__Selection__Tail$O$step$property$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Source__Selection__Tail$O$step$<_TAnnotation>
                    }
                    
                    export namespace tail {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Source__Selection__Tail$O$tail$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Source__Selection__Tail$O$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Source__Selection__Tail$<_TAnnotation>
            }
            
            export namespace Source__Selection {
                
                
                
                export namespace start {
                    
                    
                    
                    export namespace context {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Source__Selection$start$context$<_TAnnotation>
                    }
                    
                    export namespace variable {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Source__Selection$start$variable$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Source__Selection$start$<_TAnnotation>
                }
                
                export namespace tail {
                    
                    
                    
                    export type $<_TAnnotation> = _IFlat.Source__Selection$tail$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Source__Selection$<_TAnnotation>
            }
            
            export namespace Initialization__Or__Selection {
                
                
                
                export namespace initialization {
                    
                    
                    
                    export type $<_TAnnotation> = _IFlat.Initialization__Or__Selection$initialization$<_TAnnotation>
                }
                
                export namespace selection {
                    
                    
                    
                    export namespace selection {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization__Or__Selection$selection$selection$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Initialization__Or__Selection$selection$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Initialization__Or__Selection$<_TAnnotation>
            }
            
            export namespace String__Initialization__Or__Selection {
                
                
                
                export namespace initialization {
                    
                    
                    
                    export type $<_TAnnotation> = _IFlat.String__Initialization__Or__Selection$initialization$<_TAnnotation>
                }
                
                export namespace selection {
                    
                    
                    
                    export namespace selection {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.String__Initialization__Or__Selection$selection$selection$<_TAnnotation>
                    }
                    
                    export namespace _lstring {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.String__Initialization__Or__Selection$selection$string$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.String__Initialization__Or__Selection$selection$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.String__Initialization__Or__Selection$<_TAnnotation>
            }
            
            export namespace Numerical__Initialization__Or__Selection {
                
                
                
                export namespace initialization {
                    
                    
                    
                    export type $<_TAnnotation> = _IFlat.Numerical__Initialization__Or__Selection$initialization$<_TAnnotation>
                }
                
                export namespace selection {
                    
                    
                    
                    export namespace selection {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Numerical__Initialization__Or__Selection$selection$selection$<_TAnnotation>
                    }
                    
                    export namespace _lnumber {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Numerical__Initialization__Or__Selection$selection$number$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Numerical__Initialization__Or__Selection$selection$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Numerical__Initialization__Or__Selection$<_TAnnotation>
            }
            
            export namespace Boolean__Initialization__Or__Selection {
                
                
                
                export namespace initialization {
                    
                    
                    
                    export type $<_TAnnotation> = _IFlat.Boolean__Initialization__Or__Selection$initialization$<_TAnnotation>
                }
                
                export namespace selection {
                    
                    
                    
                    export namespace selection {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Boolean__Initialization__Or__Selection$selection$selection$<_TAnnotation>
                    }
                    
                    export namespace _lboolean {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Boolean__Initialization__Or__Selection$selection$boolean$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Boolean__Initialization__Or__Selection$selection$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Boolean__Initialization__Or__Selection$<_TAnnotation>
            }
            
            export namespace Boolean__Initialization {
                
                
                
                export namespace and {
                    
                    
                    
                    export namespace left__hand__side {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Boolean__Initialization$and$left__hand__side$<_TAnnotation>
                    }
                    
                    export namespace right__hand__side {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Boolean__Initialization$and$right__hand__side$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Boolean__Initialization$and$<_TAnnotation>
                }
                
                export namespace or {
                    
                    
                    
                    export namespace left__hand__side {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Boolean__Initialization$or$left__hand__side$<_TAnnotation>
                    }
                    
                    export namespace right__hand__side {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Boolean__Initialization$or$right__hand__side$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Boolean__Initialization$or$<_TAnnotation>
                }
                
                export namespace _lfalse {
                    
                    
                    
                    export type $<_TAnnotation> = _IFlat.Boolean__Initialization$false$<_TAnnotation>
                }
                
                export namespace not {
                    
                    
                    
                    export type $<_TAnnotation> = _IFlat.Boolean__Initialization$not$<_TAnnotation>
                }
                
                export namespace _ltrue {
                    
                    
                    
                    export type $<_TAnnotation> = _IFlat.Boolean__Initialization$true$<_TAnnotation>
                }
                
                export namespace string__equals {
                    
                    
                    
                    export namespace left__hand__side {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Boolean__Initialization$string__equals$left__hand__side$<_TAnnotation>
                    }
                    
                    export namespace right__hand__side {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Boolean__Initialization$string__equals$right__hand__side$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Boolean__Initialization$string__equals$<_TAnnotation>
                }
                
                export namespace string__not__equals {
                    
                    
                    
                    export namespace left__hand__side {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Boolean__Initialization$string__not__equals$left__hand__side$<_TAnnotation>
                    }
                    
                    export namespace right__hand__side {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Boolean__Initialization$string__not__equals$right__hand__side$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Boolean__Initialization$string__not__equals$<_TAnnotation>
                }
                
                export namespace number__equals {
                    
                    
                    
                    export namespace left__hand__side {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Boolean__Initialization$number__equals$left__hand__side$<_TAnnotation>
                    }
                    
                    export namespace right__hand__side {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Boolean__Initialization$number__equals$right__hand__side$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Boolean__Initialization$number__equals$<_TAnnotation>
                }
                
                export namespace number__not__equals {
                    
                    
                    
                    export namespace left__hand__side {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Boolean__Initialization$number__not__equals$left__hand__side$<_TAnnotation>
                    }
                    
                    export namespace right__hand__side {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Boolean__Initialization$number__not__equals$right__hand__side$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Boolean__Initialization$number__not__equals$<_TAnnotation>
                }
                
                export namespace greater__than {
                    
                    
                    
                    export namespace left__hand__side {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Boolean__Initialization$greater__than$left__hand__side$<_TAnnotation>
                    }
                    
                    export namespace right__hand__side {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Boolean__Initialization$greater__than$right__hand__side$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Boolean__Initialization$greater__than$<_TAnnotation>
                }
                
                export namespace less__than {
                    
                    
                    
                    export namespace left__hand__side {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Boolean__Initialization$less__than$left__hand__side$<_TAnnotation>
                    }
                    
                    export namespace right__hand__side {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Boolean__Initialization$less__than$right__hand__side$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Boolean__Initialization$less__than$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Boolean__Initialization$<_TAnnotation>
            }
            
            export namespace Numerical__Initialization {
                
                
                
                export namespace minus {
                    
                    
                    
                    export namespace left__hand__side {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Numerical__Initialization$minus$left__hand__side$<_TAnnotation>
                    }
                    
                    export namespace right__hand__side {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Numerical__Initialization$minus$right__hand__side$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Numerical__Initialization$minus$<_TAnnotation>
                }
                
                export namespace plus {
                    
                    
                    
                    export namespace left__hand__side {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Numerical__Initialization$plus$left__hand__side$<_TAnnotation>
                    }
                    
                    export namespace right__hand__side {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Numerical__Initialization$plus$right__hand__side$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Numerical__Initialization$plus$<_TAnnotation>
                }
                
                export namespace predecrement {
                    
                    
                    
                    export type $<_TAnnotation> = _IFlat.Numerical__Initialization$predecrement$<_TAnnotation>
                }
                
                export namespace preincrement {
                    
                    
                    
                    export type $<_TAnnotation> = _IFlat.Numerical__Initialization$preincrement$<_TAnnotation>
                }
                
                export namespace postdecrement {
                    
                    
                    
                    export type $<_TAnnotation> = _IFlat.Numerical__Initialization$postdecrement$<_TAnnotation>
                }
                
                export namespace postincrement {
                    
                    
                    
                    export type $<_TAnnotation> = _IFlat.Numerical__Initialization$postincrement$<_TAnnotation>
                }
                
                export namespace numeric__literal {
                    
                    
                    
                    export type $<_TAnnotation> = _IFlat.Numerical__Initialization$numeric__literal$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Numerical__Initialization$<_TAnnotation>
            }
            
            export namespace String__Initialization {
                
                
                
                export namespace string__literal {
                    
                    
                    
                    export type $<_TAnnotation> = _IFlat.String__Initialization$string__literal$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.String__Initialization$<_TAnnotation>
            }
            
            export namespace Initialization {
                
                
                
                export namespace array__literal {
                    
                    
                    
                    export namespace definition {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$array__literal$definition$<_TAnnotation>
                    }
                    
                    export namespace initialization {
                        
                        
                        
                        export namespace A {
                            
                            
                            
                            export type $<_TAnnotation> = _IFlat.Initialization$array__literal$initialization$A$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$array__literal$initialization$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Initialization$array__literal$<_TAnnotation>
                }
                
                export namespace array__map {
                    
                    
                    
                    export namespace definition {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$array__map$definition$<_TAnnotation>
                    }
                    
                    export namespace source {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$array__map$source$<_TAnnotation>
                    }
                    
                    export namespace initialization {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$array__map$initialization$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Initialization$array__map$<_TAnnotation>
                }
                
                export namespace _lboolean {
                    
                    
                    
                    export namespace definition {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$boolean$definition$<_TAnnotation>
                    }
                    
                    export namespace initialization {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$boolean$initialization$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Initialization$boolean$<_TAnnotation>
                }
                
                export namespace change__context {
                    
                    
                    
                    export namespace source {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$change__context$source$<_TAnnotation>
                    }
                    
                    export namespace initialization {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$change__context$initialization$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Initialization$change__context$<_TAnnotation>
                }
                
                export namespace dictionary__literal {
                    
                    
                    
                    export namespace definition {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$dictionary__literal$definition$<_TAnnotation>
                    }
                    
                    export namespace initialization {
                        
                        
                        
                        export namespace D {
                            
                            
                            
                            export type $<_TAnnotation> = _IFlat.Initialization$dictionary__literal$initialization$D$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$dictionary__literal$initialization$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Initialization$dictionary__literal$<_TAnnotation>
                }
                
                export namespace dictionary__map {
                    
                    
                    
                    export namespace definition {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$dictionary__map$definition$<_TAnnotation>
                    }
                    
                    export namespace source {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$dictionary__map$source$<_TAnnotation>
                    }
                    
                    export namespace initialization {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$dictionary__map$initialization$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Initialization$dictionary__map$<_TAnnotation>
                }
                
                export namespace group__literal {
                    
                    
                    
                    export namespace definition {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$group__literal$definition$<_TAnnotation>
                    }
                    
                    export namespace properties {
                        
                        
                        
                        export namespace D {
                            
                            
                            
                            export type $<_TAnnotation> = _IFlat.Initialization$group__literal$properties$D$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$group__literal$properties$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Initialization$group__literal$<_TAnnotation>
                }
                
                export namespace implement__me {
                    
                    
                    
                    export type $<_TAnnotation> = _IFlat.Initialization$implement__me$<_TAnnotation>
                }
                
                export namespace _lnull {
                    
                    
                    
                    export namespace definition {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$null$definition$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Initialization$null$<_TAnnotation>
                }
                
                export namespace numerical {
                    
                    
                    
                    export namespace definition {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$numerical$definition$<_TAnnotation>
                    }
                    
                    export namespace initialization {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$numerical$initialization$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Initialization$numerical$<_TAnnotation>
                }
                
                export namespace optional {
                    
                    
                    
                    export namespace definition {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$optional$definition$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Initialization$optional$<_TAnnotation>
                }
                
                export namespace procedure {
                    
                    
                    
                    export namespace definition {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$procedure$definition$<_TAnnotation>
                    }
                    
                    export namespace temp__has__parameters {
                        
                        
                        
                        export namespace O {
                            
                            
                            
                            export type $<_TAnnotation> = _IFlat.Initialization$procedure$temp__has__parameters$O$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$procedure$temp__has__parameters$<_TAnnotation>
                    }
                    
                    export namespace variables {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$procedure$variables$<_TAnnotation>
                    }
                    
                    export namespace block {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$procedure$block$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Initialization$procedure$<_TAnnotation>
                }
                
                export namespace tagged__union__literal {
                    
                    
                    
                    export namespace definition {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$tagged__union__literal$definition$<_TAnnotation>
                    }
                    
                    export namespace state {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$tagged__union__literal$state$<_TAnnotation>
                    }
                    
                    export namespace initialization {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$tagged__union__literal$initialization$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Initialization$tagged__union__literal$<_TAnnotation>
                }
                
                export namespace _lstring {
                    
                    
                    
                    export namespace definition {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$string$definition$<_TAnnotation>
                    }
                    
                    export namespace initialization {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$string$initialization$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Initialization$string$<_TAnnotation>
                }
                
                export namespace _lswitch {
                    
                    
                    
                    export namespace definition {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$switch$definition$<_TAnnotation>
                    }
                    
                    export namespace temp__type {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$switch$temp__type$<_TAnnotation>
                    }
                    
                    export namespace source {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$switch$source$<_TAnnotation>
                    }
                    
                    export namespace cases {
                        
                        
                        
                        export namespace D {
                            
                            
                            
                            export type $<_TAnnotation> = _IFlat.Initialization$switch$cases$D$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$switch$cases$<_TAnnotation>
                    }
                    
                    export namespace _ldefault {
                        
                        
                        
                        export namespace O {
                            
                            
                            
                            export type $<_TAnnotation> = _IFlat.Initialization$switch$default$O$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$switch$default$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Initialization$switch$<_TAnnotation>
                }
                
                export namespace value__function {
                    
                    
                    
                    export namespace definition {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$value__function$definition$<_TAnnotation>
                    }
                    
                    export namespace temp__has__parameters {
                        
                        
                        
                        export namespace O {
                            
                            
                            
                            export type $<_TAnnotation> = _IFlat.Initialization$value__function$temp__has__parameters$O$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$value__function$temp__has__parameters$<_TAnnotation>
                    }
                    
                    export namespace variables {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$value__function$variables$<_TAnnotation>
                    }
                    
                    export namespace initialization {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$value__function$initialization$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Initialization$value__function$<_TAnnotation>
                }
                
                export namespace variables {
                    
                    
                    
                    export namespace variables {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$variables$variables$<_TAnnotation>
                    }
                    
                    export namespace initialization {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$variables$initialization$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Initialization$variables$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Initialization$<_TAnnotation>
            }
            
            export namespace Block {
                
                
                
                export namespace variables {
                    
                    
                    
                    export type $<_TAnnotation> = _IFlat.Block$variables$<_TAnnotation>
                }
                
                export namespace statements {
                    
                    
                    
                    export type $<_TAnnotation> = _IFlat.Block$statements$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Block$<_TAnnotation>
            }
            
            export namespace Assign {
                
                
                
                export namespace target {
                    
                    
                    
                    export type $<_TAnnotation> = _IFlat.Assign$target$<_TAnnotation>
                }
                
                export namespace initialization {
                    
                    
                    
                    export type $<_TAnnotation> = _IFlat.Assign$initialization$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Assign$<_TAnnotation>
            }
            
            export namespace Statements {
                
                
                
                export namespace A {
                    
                    
                    
                    export namespace block {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Statements$A$block$<_TAnnotation>
                    }
                    
                    export namespace call {
                        
                        
                        
                        export namespace _lfunction {
                            
                            
                            
                            export type $<_TAnnotation> = _IFlat.Statements$A$call$function$<_TAnnotation>
                        }
                        
                        export namespace context__definition {
                            
                            
                            
                            export type $<_TAnnotation> = _IFlat.Statements$A$call$context__definition$<_TAnnotation>
                        }
                        
                        export namespace context {
                            
                            
                            
                            export type $<_TAnnotation> = _IFlat.Statements$A$call$context$<_TAnnotation>
                        }
                        
                        export namespace _larguments {
                            
                            
                            
                            export namespace D {
                                
                                
                                
                                export type $<_TAnnotation> = _IFlat.Statements$A$call$arguments$D$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Statements$A$call$arguments$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Statements$A$call$<_TAnnotation>
                    }
                    
                    export namespace change__context {
                        
                        
                        
                        export namespace source {
                            
                            
                            
                            export type $<_TAnnotation> = _IFlat.Statements$A$change__context$source$<_TAnnotation>
                        }
                        
                        export namespace block {
                            
                            
                            
                            export type $<_TAnnotation> = _IFlat.Statements$A$change__context$block$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Statements$A$change__context$<_TAnnotation>
                    }
                    
                    export namespace _lif {
                        
                        
                        
                        export namespace condition {
                            
                            
                            
                            export type $<_TAnnotation> = _IFlat.Statements$A$if$condition$<_TAnnotation>
                        }
                        
                        export namespace then {
                            
                            
                            
                            export type $<_TAnnotation> = _IFlat.Statements$A$if$then$<_TAnnotation>
                        }
                        
                        export namespace _lelse {
                            
                            
                            
                            export namespace O {
                                
                                
                                
                                export type $<_TAnnotation> = _IFlat.Statements$A$if$else$O$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Statements$A$if$else$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Statements$A$if$<_TAnnotation>
                    }
                    
                    export namespace _lswitch {
                        
                        
                        
                        export namespace source {
                            
                            
                            
                            export type $<_TAnnotation> = _IFlat.Statements$A$switch$source$<_TAnnotation>
                        }
                        
                        export namespace context__definition {
                            
                            
                            
                            export type $<_TAnnotation> = _IFlat.Statements$A$switch$context__definition$<_TAnnotation>
                        }
                        
                        export namespace cases {
                            
                            
                            
                            export namespace D {
                                
                                
                                
                                export type $<_TAnnotation> = _IFlat.Statements$A$switch$cases$D$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Statements$A$switch$cases$<_TAnnotation>
                        }
                        
                        export namespace _ldefault {
                            
                            
                            
                            export namespace O {
                                
                                
                                
                                export type $<_TAnnotation> = _IFlat.Statements$A$switch$default$O$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Statements$A$switch$default$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Statements$A$switch$<_TAnnotation>
                    }
                    
                    export namespace _lwith {
                        
                        
                        
                        export namespace source {
                            
                            
                            
                            export type $<_TAnnotation> = _IFlat.Statements$A$with$source$<_TAnnotation>
                        }
                        
                        export namespace action {
                            
                            
                            
                            export namespace assign {
                                
                                
                                
                                export type $<_TAnnotation> = _IFlat.Statements$A$with$action$assign$<_TAnnotation>
                            }
                            
                            export namespace minus__assign {
                                
                                
                                
                                export namespace _lnumber {
                                    
                                    
                                    
                                    export type $<_TAnnotation> = _IFlat.Statements$A$with$action$minus__assign$number$<_TAnnotation>
                                }
                                
                                export namespace right__hand__side {
                                    
                                    
                                    
                                    export type $<_TAnnotation> = _IFlat.Statements$A$with$action$minus__assign$right__hand__side$<_TAnnotation>
                                }
                                
                                export type $<_TAnnotation> = _IFlat.Statements$A$with$action$minus__assign$<_TAnnotation>
                            }
                            
                            export namespace plus__assign {
                                
                                
                                
                                export namespace _lnumber {
                                    
                                    
                                    
                                    export type $<_TAnnotation> = _IFlat.Statements$A$with$action$plus__assign$number$<_TAnnotation>
                                }
                                
                                export namespace right__hand__side {
                                    
                                    
                                    
                                    export type $<_TAnnotation> = _IFlat.Statements$A$with$action$plus__assign$right__hand__side$<_TAnnotation>
                                }
                                
                                export type $<_TAnnotation> = _IFlat.Statements$A$with$action$plus__assign$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Statements$A$with$action$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Statements$A$with$<_TAnnotation>
                    }
                    
                    export namespace _lwhile {
                        
                        
                        
                        export namespace condition {
                            
                            
                            
                            export type $<_TAnnotation> = _IFlat.Statements$A$while$condition$<_TAnnotation>
                        }
                        
                        export namespace block {
                            
                            
                            
                            export type $<_TAnnotation> = _IFlat.Statements$A$while$block$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Statements$A$while$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Statements$A$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Statements$<_TAnnotation>
            }
            
            export namespace Source__File {
                
                
                
                export namespace _ltype {
                    
                    
                    
                    export type $<_TAnnotation> = _IFlat.Source__File$type$<_TAnnotation>
                }
                
                export namespace initialization {
                    
                    
                    
                    export type $<_TAnnotation> = _IFlat.Source__File$initialization$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Source__File$<_TAnnotation>
            }
            
            export namespace Root {
                
                
                
                export type $<_TAnnotation> = _IFlat.Root$<_TAnnotation>
            }
        }
    }
    
    export namespace Resolved {
        
        
        export namespace Flat {
            
            
            export type Type__Selection$current__namespaceXXXXX$ = {
                readonly 'key': string
                readonly 'referent': _Itypesystem.Resolved.Flat.Namespace$types$D$
            }
            
            export type Type__Selection$child__namespace$namespacex$ = {
                readonly 'key': string
                readonly 'referent': _Itypesystem.Resolved.Flat.Namespace$namespaces$D$
            }
            
            export type Type__Selection$child__namespace$selection$ = Type__Selection$
            
            export type Type__Selection$child__namespace$ = {
                readonly 'namespacex': Type__Selection$child__namespace$namespacex$
                readonly 'selection': Type__Selection$child__namespace$selection$
            }
            
            export type Type__Selection$ = 
                | ['child namespace', Type__Selection$child__namespace$]
                | ['current namespaceXXXXX', Type__Selection$current__namespaceXXXXX$]
            
            export type Type__Arguments$D$type$ = Type__Selection$
            
            export type Type__Arguments$D$ = {
                readonly 'type': Type__Arguments$D$type$
            }
            
            export type Type__Arguments$ = _pt.Dictionary<Type__Arguments$D$>
            
            export type Local__Variables$D$type$ = Type__Selection$
            
            export type Local__Variables$D$initialization$ = Initialization$
            
            export type Local__Variables$D$ = {
                readonly 'initialization': Local__Variables$D$initialization$
                readonly 'type': Local__Variables$D$type$
            }
            
            export type Local__Variables$ = _pt.Dictionary<Local__Variables$D$>
            
            export type Aggregated__Variable$type$variable__stack2$variable$ = {
                readonly 'key': string
                readonly 'referent': Aggregated__Variable$
            }
            
            export type Aggregated__Variable$type$variable__stack2$ = {
                readonly 'variable': Aggregated__Variable$type$variable__stack2$variable$
            }
            
            export type Aggregated__Variable$type$local$ = null
            
            export type Aggregated__Variable$type$ = 
                | ['local', Aggregated__Variable$type$local$]
                | ['variable stack2', Aggregated__Variable$type$variable__stack2$]
            
            export type Aggregated__Variable$ = {
                readonly 'type': Aggregated__Variable$type$
            }
            
            export type Aggregated__Variables$D$ = Aggregated__Variable$
            
            export type Aggregated__Variables$ = _pt.Dictionary<Aggregated__Variables$D$>
            
            export type Variables$local$ = Local__Variables$
            
            export type Variables$aggregated$ = Aggregated__Variables$
            
            export type Variables$ = {
                readonly 'aggregated': Variables$aggregated$
                readonly 'local': Variables$local$
            }
            
            export type Target__Selection__Tail$O$step$property$group$ = _Itypesystem.Resolved.Flat.Type$group$
            
            export type Target__Selection__Tail$O$step$property$property$ = {
                readonly 'key': string
                readonly 'referent': _Itypesystem.Resolved.Flat.Type$group$D$
            }
            
            export type Target__Selection__Tail$O$step$property$ = {
                readonly 'group': Target__Selection__Tail$O$step$property$group$
                readonly 'property': Target__Selection__Tail$O$step$property$property$
            }
            
            export type Target__Selection__Tail$O$step$ = 
                | ['property', Target__Selection__Tail$O$step$property$]
            
            export type Target__Selection__Tail$O$tail$ = Target__Selection__Tail$
            
            export type Target__Selection__Tail$O$ = {
                readonly 'step': Target__Selection__Tail$O$step$
                readonly 'tail': Target__Selection__Tail$O$tail$
            }
            
            export type Target__Selection__Tail$ = _pt.OptionalValue<Target__Selection__Tail$O$>
            
            export type Target__Selection$variable$ = {
                readonly 'key': string
                readonly 'referent': Aggregated__Variables$D$
            }
            
            export type Target__Selection$tail$ = Target__Selection__Tail$
            
            export type Target__Selection$ = {
                readonly 'tail': Target__Selection$tail$
                readonly 'variable': Target__Selection$variable$
            }
            
            export type Source__Selection__Tail$O$step$call$address__function$ = _Itypesystem.Resolved.Flat.Type$address__function$
            
            export type Source__Selection__Tail$O$step$call$type__arguments$ = Type__Arguments$
            
            export type Source__Selection__Tail$O$step$call$context$ = Initialization__Or__Selection$
            
            export type Source__Selection__Tail$O$step$call$arguments$D$ = Initialization__Or__Selection$
            
            export type Source__Selection__Tail$O$step$call$arguments$ = _pt.Dictionary<Source__Selection__Tail$O$step$call$arguments$D$>
            
            export type Source__Selection__Tail$O$step$call$ = {
                readonly 'address function': Source__Selection__Tail$O$step$call$address__function$
                readonly 'arguments': Source__Selection__Tail$O$step$call$arguments$
                readonly 'context': Source__Selection__Tail$O$step$call$context$
                readonly 'type arguments': Source__Selection__Tail$O$step$call$type__arguments$
            }
            
            export type Source__Selection__Tail$O$step$property$group$ = _Itypesystem.Resolved.Flat.Type$group$
            
            export type Source__Selection__Tail$O$step$property$property$ = {
                readonly 'key': string
                readonly 'referent': _Itypesystem.Resolved.Flat.Type$group$D$
            }
            
            export type Source__Selection__Tail$O$step$property$ = {
                readonly 'group': Source__Selection__Tail$O$step$property$group$
                readonly 'property': Source__Selection__Tail$O$step$property$property$
            }
            
            export type Source__Selection__Tail$O$step$ = 
                | ['call', Source__Selection__Tail$O$step$call$]
                | ['property', Source__Selection__Tail$O$step$property$]
            
            export type Source__Selection__Tail$O$tail$ = Source__Selection__Tail$
            
            export type Source__Selection__Tail$O$ = {
                readonly 'step': Source__Selection__Tail$O$step$
                readonly 'tail': Source__Selection__Tail$O$tail$
            }
            
            export type Source__Selection__Tail$ = _pt.OptionalValue<Source__Selection__Tail$O$>
            
            export type Source__Selection$start$context$ = null
            
            export type Source__Selection$start$variable$ = {
                readonly 'key': string
                readonly 'referent': Aggregated__Variables$D$
            }
            
            export type Source__Selection$start$ = 
                | ['context', Source__Selection$start$context$]
                | ['variable', Source__Selection$start$variable$]
            
            export type Source__Selection$tail$ = Source__Selection__Tail$
            
            export type Source__Selection$ = {
                readonly 'start': Source__Selection$start$
                readonly 'tail': Source__Selection$tail$
            }
            
            export type Initialization__Or__Selection$initialization$ = Initialization$
            
            export type Initialization__Or__Selection$selection$selection$ = Source__Selection$
            
            export type Initialization__Or__Selection$selection$ = {
                readonly 'selection': Initialization__Or__Selection$selection$selection$
            }
            
            export type Initialization__Or__Selection$ = 
                | ['initialization', Initialization__Or__Selection$initialization$]
                | ['selection', Initialization__Or__Selection$selection$]
            
            export type String__Initialization__Or__Selection$initialization$ = String__Initialization$
            
            export type String__Initialization__Or__Selection$selection$selection$ = Source__Selection$
            
            export type String__Initialization__Or__Selection$selection$string$ = _Itypesystem.Resolved.Flat.Type$string$
            
            export type String__Initialization__Or__Selection$selection$ = {
                readonly 'selection': String__Initialization__Or__Selection$selection$selection$
                readonly 'string': String__Initialization__Or__Selection$selection$string$
            }
            
            export type String__Initialization__Or__Selection$ = 
                | ['initialization', String__Initialization__Or__Selection$initialization$]
                | ['selection', String__Initialization__Or__Selection$selection$]
            
            export type Numerical__Initialization__Or__Selection$initialization$ = Numerical__Initialization$
            
            export type Numerical__Initialization__Or__Selection$selection$selection$ = Source__Selection$
            
            export type Numerical__Initialization__Or__Selection$selection$number$ = _Itypesystem.Resolved.Flat.Type$number$
            
            export type Numerical__Initialization__Or__Selection$selection$ = {
                readonly 'number': Numerical__Initialization__Or__Selection$selection$number$
                readonly 'selection': Numerical__Initialization__Or__Selection$selection$selection$
            }
            
            export type Numerical__Initialization__Or__Selection$ = 
                | ['initialization', Numerical__Initialization__Or__Selection$initialization$]
                | ['selection', Numerical__Initialization__Or__Selection$selection$]
            
            export type Boolean__Initialization__Or__Selection$initialization$ = Boolean__Initialization$
            
            export type Boolean__Initialization__Or__Selection$selection$selection$ = Source__Selection$
            
            export type Boolean__Initialization__Or__Selection$selection$boolean$ = _Itypesystem.Resolved.Flat.Type$boolean$
            
            export type Boolean__Initialization__Or__Selection$selection$ = {
                readonly 'boolean': Boolean__Initialization__Or__Selection$selection$boolean$
                readonly 'selection': Boolean__Initialization__Or__Selection$selection$selection$
            }
            
            export type Boolean__Initialization__Or__Selection$ = 
                | ['initialization', Boolean__Initialization__Or__Selection$initialization$]
                | ['selection', Boolean__Initialization__Or__Selection$selection$]
            
            export type Boolean__Initialization$and$left__hand__side$ = Boolean__Initialization__Or__Selection$
            
            export type Boolean__Initialization$and$right__hand__side$ = Boolean__Initialization__Or__Selection$
            
            export type Boolean__Initialization$and$ = {
                readonly 'left hand side': Boolean__Initialization$and$left__hand__side$
                readonly 'right hand side': Boolean__Initialization$and$right__hand__side$
            }
            
            export type Boolean__Initialization$or$left__hand__side$ = Boolean__Initialization__Or__Selection$
            
            export type Boolean__Initialization$or$right__hand__side$ = Boolean__Initialization__Or__Selection$
            
            export type Boolean__Initialization$or$ = {
                readonly 'left hand side': Boolean__Initialization$or$left__hand__side$
                readonly 'right hand side': Boolean__Initialization$or$right__hand__side$
            }
            
            export type Boolean__Initialization$false$ = null
            
            export type Boolean__Initialization$not$ = Boolean__Initialization__Or__Selection$
            
            export type Boolean__Initialization$true$ = null
            
            export type Boolean__Initialization$string__equals$left__hand__side$ = String__Initialization__Or__Selection$
            
            export type Boolean__Initialization$string__equals$right__hand__side$ = String__Initialization__Or__Selection$
            
            export type Boolean__Initialization$string__equals$ = {
                readonly 'left hand side': Boolean__Initialization$string__equals$left__hand__side$
                readonly 'right hand side': Boolean__Initialization$string__equals$right__hand__side$
            }
            
            export type Boolean__Initialization$string__not__equals$left__hand__side$ = String__Initialization__Or__Selection$
            
            export type Boolean__Initialization$string__not__equals$right__hand__side$ = String__Initialization__Or__Selection$
            
            export type Boolean__Initialization$string__not__equals$ = {
                readonly 'left hand side': Boolean__Initialization$string__not__equals$left__hand__side$
                readonly 'right hand side': Boolean__Initialization$string__not__equals$right__hand__side$
            }
            
            export type Boolean__Initialization$number__equals$left__hand__side$ = Numerical__Initialization__Or__Selection$
            
            export type Boolean__Initialization$number__equals$right__hand__side$ = Numerical__Initialization__Or__Selection$
            
            export type Boolean__Initialization$number__equals$ = {
                readonly 'left hand side': Boolean__Initialization$number__equals$left__hand__side$
                readonly 'right hand side': Boolean__Initialization$number__equals$right__hand__side$
            }
            
            export type Boolean__Initialization$number__not__equals$left__hand__side$ = Numerical__Initialization__Or__Selection$
            
            export type Boolean__Initialization$number__not__equals$right__hand__side$ = Numerical__Initialization__Or__Selection$
            
            export type Boolean__Initialization$number__not__equals$ = {
                readonly 'left hand side': Boolean__Initialization$number__not__equals$left__hand__side$
                readonly 'right hand side': Boolean__Initialization$number__not__equals$right__hand__side$
            }
            
            export type Boolean__Initialization$greater__than$left__hand__side$ = Numerical__Initialization__Or__Selection$
            
            export type Boolean__Initialization$greater__than$right__hand__side$ = Numerical__Initialization__Or__Selection$
            
            export type Boolean__Initialization$greater__than$ = {
                readonly 'left hand side': Boolean__Initialization$greater__than$left__hand__side$
                readonly 'right hand side': Boolean__Initialization$greater__than$right__hand__side$
            }
            
            export type Boolean__Initialization$less__than$left__hand__side$ = Numerical__Initialization__Or__Selection$
            
            export type Boolean__Initialization$less__than$right__hand__side$ = Numerical__Initialization__Or__Selection$
            
            export type Boolean__Initialization$less__than$ = {
                readonly 'left hand side': Boolean__Initialization$less__than$left__hand__side$
                readonly 'right hand side': Boolean__Initialization$less__than$right__hand__side$
            }
            
            export type Boolean__Initialization$ = 
                | ['and', Boolean__Initialization$and$]
                | ['false', Boolean__Initialization$false$]
                | ['greater than', Boolean__Initialization$greater__than$]
                | ['less than', Boolean__Initialization$less__than$]
                | ['not', Boolean__Initialization$not$]
                | ['number equals', Boolean__Initialization$number__equals$]
                | ['number not equals', Boolean__Initialization$number__not__equals$]
                | ['or', Boolean__Initialization$or$]
                | ['string equals', Boolean__Initialization$string__equals$]
                | ['string not equals', Boolean__Initialization$string__not__equals$]
                | ['true', Boolean__Initialization$true$]
            
            export type Numerical__Initialization$minus$left__hand__side$ = Numerical__Initialization__Or__Selection$
            
            export type Numerical__Initialization$minus$right__hand__side$ = Numerical__Initialization__Or__Selection$
            
            export type Numerical__Initialization$minus$ = {
                readonly 'left hand side': Numerical__Initialization$minus$left__hand__side$
                readonly 'right hand side': Numerical__Initialization$minus$right__hand__side$
            }
            
            export type Numerical__Initialization$plus$left__hand__side$ = Numerical__Initialization__Or__Selection$
            
            export type Numerical__Initialization$plus$right__hand__side$ = Numerical__Initialization__Or__Selection$
            
            export type Numerical__Initialization$plus$ = {
                readonly 'left hand side': Numerical__Initialization$plus$left__hand__side$
                readonly 'right hand side': Numerical__Initialization$plus$right__hand__side$
            }
            
            export type Numerical__Initialization$predecrement$ = Numerical__Initialization__Or__Selection$
            
            export type Numerical__Initialization$preincrement$ = Numerical__Initialization__Or__Selection$
            
            export type Numerical__Initialization$postdecrement$ = Numerical__Initialization__Or__Selection$
            
            export type Numerical__Initialization$postincrement$ = Numerical__Initialization__Or__Selection$
            
            export type Numerical__Initialization$numeric__literal$ = number
            
            export type Numerical__Initialization$ = 
                | ['minus', Numerical__Initialization$minus$]
                | ['numeric literal', Numerical__Initialization$numeric__literal$]
                | ['plus', Numerical__Initialization$plus$]
                | ['postdecrement', Numerical__Initialization$postdecrement$]
                | ['postincrement', Numerical__Initialization$postincrement$]
                | ['predecrement', Numerical__Initialization$predecrement$]
                | ['preincrement', Numerical__Initialization$preincrement$]
            
            export type String__Initialization$string__literal$ = string
            
            export type String__Initialization$ = 
                | ['string literal', String__Initialization$string__literal$]
            
            export type Initialization$array__literal$definition$ = _Itypesystem.Resolved.Flat.Type$array$
            
            export type Initialization$array__literal$initialization$A$ = Initialization__Or__Selection$
            
            export type Initialization$array__literal$initialization$ = _pt.Array<Initialization$array__literal$initialization$A$>
            
            export type Initialization$array__literal$ = {
                readonly 'definition': Initialization$array__literal$definition$
                readonly 'initialization': Initialization$array__literal$initialization$
            }
            
            export type Initialization$array__map$definition$ = _Itypesystem.Resolved.Flat.Type$array$
            
            export type Initialization$array__map$source$ = Source__Selection$
            
            export type Initialization$array__map$initialization$ = Initialization__Or__Selection$
            
            export type Initialization$array__map$ = {
                readonly 'definition': Initialization$array__map$definition$
                readonly 'initialization': Initialization$array__map$initialization$
                readonly 'source': Initialization$array__map$source$
            }
            
            export type Initialization$boolean$definition$ = _Itypesystem.Resolved.Flat.Type$boolean$
            
            export type Initialization$boolean$initialization$ = Boolean__Initialization$
            
            export type Initialization$boolean$ = {
                readonly 'definition': Initialization$boolean$definition$
                readonly 'initialization': Initialization$boolean$initialization$
            }
            
            export type Initialization$change__context$source$ = Source__Selection$
            
            export type Initialization$change__context$initialization$ = Initialization__Or__Selection$
            
            export type Initialization$change__context$ = {
                readonly 'initialization': Initialization$change__context$initialization$
                readonly 'source': Initialization$change__context$source$
            }
            
            export type Initialization$dictionary__literal$definition$ = _Itypesystem.Resolved.Flat.Type$dictionary$
            
            export type Initialization$dictionary__literal$initialization$D$ = Initialization__Or__Selection$
            
            export type Initialization$dictionary__literal$initialization$ = _pt.Dictionary<Initialization$dictionary__literal$initialization$D$>
            
            export type Initialization$dictionary__literal$ = {
                readonly 'definition': Initialization$dictionary__literal$definition$
                readonly 'initialization': Initialization$dictionary__literal$initialization$
            }
            
            export type Initialization$dictionary__map$definition$ = _Itypesystem.Resolved.Flat.Type$dictionary$
            
            export type Initialization$dictionary__map$source$ = Source__Selection$
            
            export type Initialization$dictionary__map$initialization$ = Initialization__Or__Selection$
            
            export type Initialization$dictionary__map$ = {
                readonly 'definition': Initialization$dictionary__map$definition$
                readonly 'initialization': Initialization$dictionary__map$initialization$
                readonly 'source': Initialization$dictionary__map$source$
            }
            
            export type Initialization$group__literal$definition$ = _Itypesystem.Resolved.Flat.Type$group$
            
            export type Initialization$group__literal$properties$D$ = Initialization__Or__Selection$
            
            export type Initialization$group__literal$properties$ = _pt.Dictionary<Initialization$group__literal$properties$D$>
            
            export type Initialization$group__literal$ = {
                readonly 'definition': Initialization$group__literal$definition$
                readonly 'properties': Initialization$group__literal$properties$
            }
            
            export type Initialization$implement__me$ = string
            
            export type Initialization$null$definition$ = _Itypesystem.Resolved.Flat.Type$null$
            
            export type Initialization$null$ = {
                readonly 'definition': Initialization$null$definition$
            }
            
            export type Initialization$numerical$definition$ = _Itypesystem.Resolved.Flat.Type$number$
            
            export type Initialization$numerical$initialization$ = Numerical__Initialization$
            
            export type Initialization$numerical$ = {
                readonly 'definition': Initialization$numerical$definition$
                readonly 'initialization': Initialization$numerical$initialization$
            }
            
            export type Initialization$optional$definition$ = _Itypesystem.Resolved.Flat.Type$optional$
            
            export type Initialization$optional$ = {
                readonly 'definition': Initialization$optional$definition$
            }
            
            export type Initialization$procedure$definition$ = _Itypesystem.Resolved.Flat.Type$procedure$
            
            export type Initialization$procedure$temp__has__parameters$O$ = null
            
            export type Initialization$procedure$temp__has__parameters$ = _pt.OptionalValue<Initialization$procedure$temp__has__parameters$O$>
            
            export type Initialization$procedure$variables$ = Aggregated__Variables$
            
            export type Initialization$procedure$block$ = Block$
            
            export type Initialization$procedure$ = {
                readonly 'block': Initialization$procedure$block$
                readonly 'definition': Initialization$procedure$definition$
                readonly 'temp has parameters': Initialization$procedure$temp__has__parameters$
                readonly 'variables': Initialization$procedure$variables$
            }
            
            export type Initialization$tagged__union__literal$definition$ = _Itypesystem.Resolved.Flat.Type$tagged__union$
            
            export type Initialization$tagged__union__literal$state$ = {
                readonly 'key': string
                readonly 'referent': _Itypesystem.Resolved.Flat.Type$tagged__union$D$
            }
            
            export type Initialization$tagged__union__literal$initialization$ = Initialization__Or__Selection$
            
            export type Initialization$tagged__union__literal$ = {
                readonly 'definition': Initialization$tagged__union__literal$definition$
                readonly 'initialization': Initialization$tagged__union__literal$initialization$
                readonly 'state': Initialization$tagged__union__literal$state$
            }
            
            export type Initialization$string$definition$ = _Itypesystem.Resolved.Flat.Type$string$
            
            export type Initialization$string$initialization$ = String__Initialization$
            
            export type Initialization$string$ = {
                readonly 'definition': Initialization$string$definition$
                readonly 'initialization': Initialization$string$initialization$
            }
            
            export type Initialization$switch$definition$ = _Itypesystem.Resolved.Flat.Type$tagged__union$
            
            export type Initialization$switch$temp__type$ = Type__Selection$
            
            export type Initialization$switch$source$ = Source__Selection$
            
            export type Initialization$switch$cases$D$ = Initialization__Or__Selection$
            
            export type Initialization$switch$cases$ = _pt.Dictionary<Initialization$switch$cases$D$>
            
            export type Initialization$switch$default$O$ = Initialization__Or__Selection$
            
            export type Initialization$switch$default$ = _pt.OptionalValue<Initialization$switch$default$O$>
            
            export type Initialization$switch$ = {
                readonly 'cases': Initialization$switch$cases$
                readonly 'default': Initialization$switch$default$
                readonly 'definition': Initialization$switch$definition$
                readonly 'source': Initialization$switch$source$
                readonly 'temp type': Initialization$switch$temp__type$
            }
            
            export type Initialization$value__function$definition$ = _Itypesystem.Resolved.Flat.Type$procedure$
            
            export type Initialization$value__function$temp__has__parameters$O$ = null
            
            export type Initialization$value__function$temp__has__parameters$ = _pt.OptionalValue<Initialization$value__function$temp__has__parameters$O$>
            
            export type Initialization$value__function$variables$ = Aggregated__Variables$
            
            export type Initialization$value__function$initialization$ = Initialization__Or__Selection$
            
            export type Initialization$value__function$ = {
                readonly 'definition': Initialization$value__function$definition$
                readonly 'initialization': Initialization$value__function$initialization$
                readonly 'temp has parameters': Initialization$value__function$temp__has__parameters$
                readonly 'variables': Initialization$value__function$variables$
            }
            
            export type Initialization$variables$variables$ = Variables$
            
            export type Initialization$variables$initialization$ = Initialization__Or__Selection$
            
            export type Initialization$variables$ = {
                readonly 'initialization': Initialization$variables$initialization$
                readonly 'variables': Initialization$variables$variables$
            }
            
            export type Initialization$ = 
                | ['array literal', Initialization$array__literal$]
                | ['array map', Initialization$array__map$]
                | ['boolean', Initialization$boolean$]
                | ['change context', Initialization$change__context$]
                | ['dictionary literal', Initialization$dictionary__literal$]
                | ['dictionary map', Initialization$dictionary__map$]
                | ['group literal', Initialization$group__literal$]
                | ['implement me', Initialization$implement__me$]
                | ['null', Initialization$null$]
                | ['numerical', Initialization$numerical$]
                | ['optional', Initialization$optional$]
                | ['procedure', Initialization$procedure$]
                | ['string', Initialization$string$]
                | ['switch', Initialization$switch$]
                | ['tagged union literal', Initialization$tagged__union__literal$]
                | ['value function', Initialization$value__function$]
                | ['variables', Initialization$variables$]
            
            export type Block$variables$ = Variables$
            
            export type Block$statements$ = Statements$
            
            export type Block$ = {
                readonly 'statements': Block$statements$
                readonly 'variables': Block$variables$
            }
            
            export type Assign$target$ = Target__Selection$
            
            export type Assign$initialization$ = Initialization__Or__Selection$
            
            export type Assign$ = {
                readonly 'initialization': Assign$initialization$
                readonly 'target': Assign$target$
            }
            
            export type Statements$A$block$ = Block$
            
            export type Statements$A$call$function$ = Source__Selection$
            
            export type Statements$A$call$context__definition$ = _Itypesystem.Resolved.Flat.Type$procedure$
            
            export type Statements$A$call$context$ = Source__Selection$
            
            export type Statements$A$call$arguments$D$ = Initialization__Or__Selection$
            
            export type Statements$A$call$arguments$ = _pt.Dictionary<Statements$A$call$arguments$D$>
            
            export type Statements$A$call$ = {
                readonly 'arguments': Statements$A$call$arguments$
                readonly 'context': Statements$A$call$context$
                readonly 'context definition': Statements$A$call$context__definition$
                readonly 'function': Statements$A$call$function$
            }
            
            export type Statements$A$change__context$source$ = Source__Selection$
            
            export type Statements$A$change__context$block$ = Block$
            
            export type Statements$A$change__context$ = {
                readonly 'block': Statements$A$change__context$block$
                readonly 'source': Statements$A$change__context$source$
            }
            
            export type Statements$A$if$condition$ = Boolean__Initialization__Or__Selection$
            
            export type Statements$A$if$then$ = Block$
            
            export type Statements$A$if$else$O$ = Block$
            
            export type Statements$A$if$else$ = _pt.OptionalValue<Statements$A$if$else$O$>
            
            export type Statements$A$if$ = {
                readonly 'condition': Statements$A$if$condition$
                readonly 'else': Statements$A$if$else$
                readonly 'then': Statements$A$if$then$
            }
            
            export type Statements$A$switch$source$ = Source__Selection$
            
            export type Statements$A$switch$context__definition$ = _Itypesystem.Resolved.Flat.Type$tagged__union$
            
            export type Statements$A$switch$cases$D$ = Block$
            
            export type Statements$A$switch$cases$ = _pt.Dictionary<Statements$A$switch$cases$D$>
            
            export type Statements$A$switch$default$O$ = Block$
            
            export type Statements$A$switch$default$ = _pt.OptionalValue<Statements$A$switch$default$O$>
            
            export type Statements$A$switch$ = {
                readonly 'cases': Statements$A$switch$cases$
                readonly 'context definition': Statements$A$switch$context__definition$
                readonly 'default': Statements$A$switch$default$
                readonly 'source': Statements$A$switch$source$
            }
            
            export type Statements$A$with$source$ = Source__Selection$
            
            export type Statements$A$with$action$assign$ = Assign$
            
            export type Statements$A$with$action$minus__assign$number$ = _Itypesystem.Resolved.Flat.Type$number$
            
            export type Statements$A$with$action$minus__assign$right__hand__side$ = Numerical__Initialization__Or__Selection$
            
            export type Statements$A$with$action$minus__assign$ = {
                readonly 'number': Statements$A$with$action$minus__assign$number$
                readonly 'right hand side': Statements$A$with$action$minus__assign$right__hand__side$
            }
            
            export type Statements$A$with$action$plus__assign$number$ = _Itypesystem.Resolved.Flat.Type$number$
            
            export type Statements$A$with$action$plus__assign$right__hand__side$ = Numerical__Initialization__Or__Selection$
            
            export type Statements$A$with$action$plus__assign$ = {
                readonly 'number': Statements$A$with$action$plus__assign$number$
                readonly 'right hand side': Statements$A$with$action$plus__assign$right__hand__side$
            }
            
            export type Statements$A$with$action$ = 
                | ['assign', Statements$A$with$action$assign$]
                | ['minus assign', Statements$A$with$action$minus__assign$]
                | ['plus assign', Statements$A$with$action$plus__assign$]
            
            export type Statements$A$with$ = {
                readonly 'action': Statements$A$with$action$
                readonly 'source': Statements$A$with$source$
            }
            
            export type Statements$A$while$condition$ = Boolean__Initialization__Or__Selection$
            
            export type Statements$A$while$block$ = Block$
            
            export type Statements$A$while$ = {
                readonly 'block': Statements$A$while$block$
                readonly 'condition': Statements$A$while$condition$
            }
            
            export type Statements$A$ = 
                | ['block', Statements$A$block$]
                | ['call', Statements$A$call$]
                | ['change context', Statements$A$change__context$]
                | ['if', Statements$A$if$]
                | ['switch', Statements$A$switch$]
                | ['while', Statements$A$while$]
                | ['with', Statements$A$with$]
            
            export type Statements$ = _pt.Array<Statements$A$>
            
            export type Source__File$type$ = Type__Selection$
            
            export type Source__File$initialization$ = Initialization$
            
            export type Source__File$ = {
                readonly 'initialization': Source__File$initialization$
                readonly 'type': Source__File$type$
            }
            
            export type Root$ = Source__File$
        }
        
        export namespace T {
            
            import _IFlat = Flat
            
            
            export namespace TType__Selection {
                
                
                
                export namespace current__namespaceXXXXX {
                    
                    
                    
                    export type $ = _IFlat.Type__Selection$current__namespaceXXXXX$
                }
                
                export namespace child__namespace {
                    
                    
                    
                    export namespace namespacex {
                        
                        
                        
                        export type $ = _IFlat.Type__Selection$child__namespace$namespacex$
                    }
                    
                    export namespace selection {
                        
                        
                        
                        export type $ = _IFlat.Type__Selection$child__namespace$selection$
                    }
                    
                    export type $ = _IFlat.Type__Selection$child__namespace$
                }
                
                export type $ = _IFlat.Type__Selection$
            }
            
            export namespace TType__Arguments {
                
                
                
                export namespace D {
                    
                    
                    
                    export namespace _ltype {
                        
                        
                        
                        export type $ = _IFlat.Type__Arguments$D$type$
                    }
                    
                    export type $ = _IFlat.Type__Arguments$D$
                }
                
                export type $ = _IFlat.Type__Arguments$
            }
            
            export namespace Local__Variables {
                
                
                
                export namespace D {
                    
                    
                    
                    export namespace _ltype {
                        
                        
                        
                        export type $ = _IFlat.Local__Variables$D$type$
                    }
                    
                    export namespace initialization {
                        
                        
                        
                        export type $ = _IFlat.Local__Variables$D$initialization$
                    }
                    
                    export type $ = _IFlat.Local__Variables$D$
                }
                
                export type $ = _IFlat.Local__Variables$
            }
            
            export namespace Aggregated__Variable {
                
                
                
                export namespace _ltype {
                    
                    
                    
                    export namespace variable__stack2 {
                        
                        
                        
                        export namespace variable {
                            
                            
                            
                            export type $ = _IFlat.Aggregated__Variable$type$variable__stack2$variable$
                        }
                        
                        export type $ = _IFlat.Aggregated__Variable$type$variable__stack2$
                    }
                    
                    export namespace local {
                        
                        
                        
                        export type $ = _IFlat.Aggregated__Variable$type$local$
                    }
                    
                    export type $ = _IFlat.Aggregated__Variable$type$
                }
                
                export type $ = _IFlat.Aggregated__Variable$
            }
            
            export namespace Aggregated__Variables {
                
                
                
                export namespace D {
                    
                    
                    
                    export type $ = _IFlat.Aggregated__Variables$D$
                }
                
                export type $ = _IFlat.Aggregated__Variables$
            }
            
            export namespace Variables {
                
                
                
                export namespace local {
                    
                    
                    
                    export type $ = _IFlat.Variables$local$
                }
                
                export namespace aggregated {
                    
                    
                    
                    export type $ = _IFlat.Variables$aggregated$
                }
                
                export type $ = _IFlat.Variables$
            }
            
            export namespace TTarget__Selection__Tail {
                
                
                
                export namespace O {
                    
                    
                    
                    export namespace step {
                        
                        
                        
                        export namespace property {
                            
                            
                            
                            export namespace group {
                                
                                
                                
                                export type $ = _IFlat.Target__Selection__Tail$O$step$property$group$
                            }
                            
                            export namespace property {
                                
                                
                                
                                export type $ = _IFlat.Target__Selection__Tail$O$step$property$property$
                            }
                            
                            export type $ = _IFlat.Target__Selection__Tail$O$step$property$
                        }
                        
                        export type $ = _IFlat.Target__Selection__Tail$O$step$
                    }
                    
                    export namespace tail {
                        
                        
                        
                        export type $ = _IFlat.Target__Selection__Tail$O$tail$
                    }
                    
                    export type $ = _IFlat.Target__Selection__Tail$O$
                }
                
                export type $ = _IFlat.Target__Selection__Tail$
            }
            
            export namespace TTarget__Selection {
                
                
                
                export namespace variable {
                    
                    
                    
                    export type $ = _IFlat.Target__Selection$variable$
                }
                
                export namespace tail {
                    
                    
                    
                    export type $ = _IFlat.Target__Selection$tail$
                }
                
                export type $ = _IFlat.Target__Selection$
            }
            
            export namespace Source__Selection__Tail {
                
                
                
                export namespace O {
                    
                    
                    
                    export namespace step {
                        
                        
                        
                        export namespace call {
                            
                            
                            
                            export namespace address__function {
                                
                                
                                
                                export type $ = _IFlat.Source__Selection__Tail$O$step$call$address__function$
                            }
                            
                            export namespace type__arguments {
                                
                                
                                
                                export type $ = _IFlat.Source__Selection__Tail$O$step$call$type__arguments$
                            }
                            
                            export namespace context {
                                
                                
                                
                                export type $ = _IFlat.Source__Selection__Tail$O$step$call$context$
                            }
                            
                            export namespace _larguments {
                                
                                
                                
                                export namespace D {
                                    
                                    
                                    
                                    export type $ = _IFlat.Source__Selection__Tail$O$step$call$arguments$D$
                                }
                                
                                export type $ = _IFlat.Source__Selection__Tail$O$step$call$arguments$
                            }
                            
                            export type $ = _IFlat.Source__Selection__Tail$O$step$call$
                        }
                        
                        export namespace property {
                            
                            
                            
                            export namespace group {
                                
                                
                                
                                export type $ = _IFlat.Source__Selection__Tail$O$step$property$group$
                            }
                            
                            export namespace property {
                                
                                
                                
                                export type $ = _IFlat.Source__Selection__Tail$O$step$property$property$
                            }
                            
                            export type $ = _IFlat.Source__Selection__Tail$O$step$property$
                        }
                        
                        export type $ = _IFlat.Source__Selection__Tail$O$step$
                    }
                    
                    export namespace tail {
                        
                        
                        
                        export type $ = _IFlat.Source__Selection__Tail$O$tail$
                    }
                    
                    export type $ = _IFlat.Source__Selection__Tail$O$
                }
                
                export type $ = _IFlat.Source__Selection__Tail$
            }
            
            export namespace Source__Selection {
                
                
                
                export namespace start {
                    
                    
                    
                    export namespace context {
                        
                        
                        
                        export type $ = _IFlat.Source__Selection$start$context$
                    }
                    
                    export namespace variable {
                        
                        
                        
                        export type $ = _IFlat.Source__Selection$start$variable$
                    }
                    
                    export type $ = _IFlat.Source__Selection$start$
                }
                
                export namespace tail {
                    
                    
                    
                    export type $ = _IFlat.Source__Selection$tail$
                }
                
                export type $ = _IFlat.Source__Selection$
            }
            
            export namespace Initialization__Or__Selection {
                
                
                
                export namespace initialization {
                    
                    
                    
                    export type $ = _IFlat.Initialization__Or__Selection$initialization$
                }
                
                export namespace selection {
                    
                    
                    
                    export namespace selection {
                        
                        
                        
                        export type $ = _IFlat.Initialization__Or__Selection$selection$selection$
                    }
                    
                    export type $ = _IFlat.Initialization__Or__Selection$selection$
                }
                
                export type $ = _IFlat.Initialization__Or__Selection$
            }
            
            export namespace String__Initialization__Or__Selection {
                
                
                
                export namespace initialization {
                    
                    
                    
                    export type $ = _IFlat.String__Initialization__Or__Selection$initialization$
                }
                
                export namespace selection {
                    
                    
                    
                    export namespace selection {
                        
                        
                        
                        export type $ = _IFlat.String__Initialization__Or__Selection$selection$selection$
                    }
                    
                    export namespace _lstring {
                        
                        
                        
                        export type $ = _IFlat.String__Initialization__Or__Selection$selection$string$
                    }
                    
                    export type $ = _IFlat.String__Initialization__Or__Selection$selection$
                }
                
                export type $ = _IFlat.String__Initialization__Or__Selection$
            }
            
            export namespace Numerical__Initialization__Or__Selection {
                
                
                
                export namespace initialization {
                    
                    
                    
                    export type $ = _IFlat.Numerical__Initialization__Or__Selection$initialization$
                }
                
                export namespace selection {
                    
                    
                    
                    export namespace selection {
                        
                        
                        
                        export type $ = _IFlat.Numerical__Initialization__Or__Selection$selection$selection$
                    }
                    
                    export namespace _lnumber {
                        
                        
                        
                        export type $ = _IFlat.Numerical__Initialization__Or__Selection$selection$number$
                    }
                    
                    export type $ = _IFlat.Numerical__Initialization__Or__Selection$selection$
                }
                
                export type $ = _IFlat.Numerical__Initialization__Or__Selection$
            }
            
            export namespace Boolean__Initialization__Or__Selection {
                
                
                
                export namespace initialization {
                    
                    
                    
                    export type $ = _IFlat.Boolean__Initialization__Or__Selection$initialization$
                }
                
                export namespace selection {
                    
                    
                    
                    export namespace selection {
                        
                        
                        
                        export type $ = _IFlat.Boolean__Initialization__Or__Selection$selection$selection$
                    }
                    
                    export namespace _lboolean {
                        
                        
                        
                        export type $ = _IFlat.Boolean__Initialization__Or__Selection$selection$boolean$
                    }
                    
                    export type $ = _IFlat.Boolean__Initialization__Or__Selection$selection$
                }
                
                export type $ = _IFlat.Boolean__Initialization__Or__Selection$
            }
            
            export namespace Boolean__Initialization {
                
                
                
                export namespace and {
                    
                    
                    
                    export namespace left__hand__side {
                        
                        
                        
                        export type $ = _IFlat.Boolean__Initialization$and$left__hand__side$
                    }
                    
                    export namespace right__hand__side {
                        
                        
                        
                        export type $ = _IFlat.Boolean__Initialization$and$right__hand__side$
                    }
                    
                    export type $ = _IFlat.Boolean__Initialization$and$
                }
                
                export namespace or {
                    
                    
                    
                    export namespace left__hand__side {
                        
                        
                        
                        export type $ = _IFlat.Boolean__Initialization$or$left__hand__side$
                    }
                    
                    export namespace right__hand__side {
                        
                        
                        
                        export type $ = _IFlat.Boolean__Initialization$or$right__hand__side$
                    }
                    
                    export type $ = _IFlat.Boolean__Initialization$or$
                }
                
                export namespace _lfalse {
                    
                    
                    
                    export type $ = _IFlat.Boolean__Initialization$false$
                }
                
                export namespace not {
                    
                    
                    
                    export type $ = _IFlat.Boolean__Initialization$not$
                }
                
                export namespace _ltrue {
                    
                    
                    
                    export type $ = _IFlat.Boolean__Initialization$true$
                }
                
                export namespace string__equals {
                    
                    
                    
                    export namespace left__hand__side {
                        
                        
                        
                        export type $ = _IFlat.Boolean__Initialization$string__equals$left__hand__side$
                    }
                    
                    export namespace right__hand__side {
                        
                        
                        
                        export type $ = _IFlat.Boolean__Initialization$string__equals$right__hand__side$
                    }
                    
                    export type $ = _IFlat.Boolean__Initialization$string__equals$
                }
                
                export namespace string__not__equals {
                    
                    
                    
                    export namespace left__hand__side {
                        
                        
                        
                        export type $ = _IFlat.Boolean__Initialization$string__not__equals$left__hand__side$
                    }
                    
                    export namespace right__hand__side {
                        
                        
                        
                        export type $ = _IFlat.Boolean__Initialization$string__not__equals$right__hand__side$
                    }
                    
                    export type $ = _IFlat.Boolean__Initialization$string__not__equals$
                }
                
                export namespace number__equals {
                    
                    
                    
                    export namespace left__hand__side {
                        
                        
                        
                        export type $ = _IFlat.Boolean__Initialization$number__equals$left__hand__side$
                    }
                    
                    export namespace right__hand__side {
                        
                        
                        
                        export type $ = _IFlat.Boolean__Initialization$number__equals$right__hand__side$
                    }
                    
                    export type $ = _IFlat.Boolean__Initialization$number__equals$
                }
                
                export namespace number__not__equals {
                    
                    
                    
                    export namespace left__hand__side {
                        
                        
                        
                        export type $ = _IFlat.Boolean__Initialization$number__not__equals$left__hand__side$
                    }
                    
                    export namespace right__hand__side {
                        
                        
                        
                        export type $ = _IFlat.Boolean__Initialization$number__not__equals$right__hand__side$
                    }
                    
                    export type $ = _IFlat.Boolean__Initialization$number__not__equals$
                }
                
                export namespace greater__than {
                    
                    
                    
                    export namespace left__hand__side {
                        
                        
                        
                        export type $ = _IFlat.Boolean__Initialization$greater__than$left__hand__side$
                    }
                    
                    export namespace right__hand__side {
                        
                        
                        
                        export type $ = _IFlat.Boolean__Initialization$greater__than$right__hand__side$
                    }
                    
                    export type $ = _IFlat.Boolean__Initialization$greater__than$
                }
                
                export namespace less__than {
                    
                    
                    
                    export namespace left__hand__side {
                        
                        
                        
                        export type $ = _IFlat.Boolean__Initialization$less__than$left__hand__side$
                    }
                    
                    export namespace right__hand__side {
                        
                        
                        
                        export type $ = _IFlat.Boolean__Initialization$less__than$right__hand__side$
                    }
                    
                    export type $ = _IFlat.Boolean__Initialization$less__than$
                }
                
                export type $ = _IFlat.Boolean__Initialization$
            }
            
            export namespace Numerical__Initialization {
                
                
                
                export namespace minus {
                    
                    
                    
                    export namespace left__hand__side {
                        
                        
                        
                        export type $ = _IFlat.Numerical__Initialization$minus$left__hand__side$
                    }
                    
                    export namespace right__hand__side {
                        
                        
                        
                        export type $ = _IFlat.Numerical__Initialization$minus$right__hand__side$
                    }
                    
                    export type $ = _IFlat.Numerical__Initialization$minus$
                }
                
                export namespace plus {
                    
                    
                    
                    export namespace left__hand__side {
                        
                        
                        
                        export type $ = _IFlat.Numerical__Initialization$plus$left__hand__side$
                    }
                    
                    export namespace right__hand__side {
                        
                        
                        
                        export type $ = _IFlat.Numerical__Initialization$plus$right__hand__side$
                    }
                    
                    export type $ = _IFlat.Numerical__Initialization$plus$
                }
                
                export namespace predecrement {
                    
                    
                    
                    export type $ = _IFlat.Numerical__Initialization$predecrement$
                }
                
                export namespace preincrement {
                    
                    
                    
                    export type $ = _IFlat.Numerical__Initialization$preincrement$
                }
                
                export namespace postdecrement {
                    
                    
                    
                    export type $ = _IFlat.Numerical__Initialization$postdecrement$
                }
                
                export namespace postincrement {
                    
                    
                    
                    export type $ = _IFlat.Numerical__Initialization$postincrement$
                }
                
                export namespace numeric__literal {
                    
                    
                    
                    export type $ = _IFlat.Numerical__Initialization$numeric__literal$
                }
                
                export type $ = _IFlat.Numerical__Initialization$
            }
            
            export namespace String__Initialization {
                
                
                
                export namespace string__literal {
                    
                    
                    
                    export type $ = _IFlat.String__Initialization$string__literal$
                }
                
                export type $ = _IFlat.String__Initialization$
            }
            
            export namespace Initialization {
                
                
                
                export namespace array__literal {
                    
                    
                    
                    export namespace definition {
                        
                        
                        
                        export type $ = _IFlat.Initialization$array__literal$definition$
                    }
                    
                    export namespace initialization {
                        
                        
                        
                        export namespace A {
                            
                            
                            
                            export type $ = _IFlat.Initialization$array__literal$initialization$A$
                        }
                        
                        export type $ = _IFlat.Initialization$array__literal$initialization$
                    }
                    
                    export type $ = _IFlat.Initialization$array__literal$
                }
                
                export namespace array__map {
                    
                    
                    
                    export namespace definition {
                        
                        
                        
                        export type $ = _IFlat.Initialization$array__map$definition$
                    }
                    
                    export namespace source {
                        
                        
                        
                        export type $ = _IFlat.Initialization$array__map$source$
                    }
                    
                    export namespace initialization {
                        
                        
                        
                        export type $ = _IFlat.Initialization$array__map$initialization$
                    }
                    
                    export type $ = _IFlat.Initialization$array__map$
                }
                
                export namespace _lboolean {
                    
                    
                    
                    export namespace definition {
                        
                        
                        
                        export type $ = _IFlat.Initialization$boolean$definition$
                    }
                    
                    export namespace initialization {
                        
                        
                        
                        export type $ = _IFlat.Initialization$boolean$initialization$
                    }
                    
                    export type $ = _IFlat.Initialization$boolean$
                }
                
                export namespace change__context {
                    
                    
                    
                    export namespace source {
                        
                        
                        
                        export type $ = _IFlat.Initialization$change__context$source$
                    }
                    
                    export namespace initialization {
                        
                        
                        
                        export type $ = _IFlat.Initialization$change__context$initialization$
                    }
                    
                    export type $ = _IFlat.Initialization$change__context$
                }
                
                export namespace dictionary__literal {
                    
                    
                    
                    export namespace definition {
                        
                        
                        
                        export type $ = _IFlat.Initialization$dictionary__literal$definition$
                    }
                    
                    export namespace initialization {
                        
                        
                        
                        export namespace D {
                            
                            
                            
                            export type $ = _IFlat.Initialization$dictionary__literal$initialization$D$
                        }
                        
                        export type $ = _IFlat.Initialization$dictionary__literal$initialization$
                    }
                    
                    export type $ = _IFlat.Initialization$dictionary__literal$
                }
                
                export namespace dictionary__map {
                    
                    
                    
                    export namespace definition {
                        
                        
                        
                        export type $ = _IFlat.Initialization$dictionary__map$definition$
                    }
                    
                    export namespace source {
                        
                        
                        
                        export type $ = _IFlat.Initialization$dictionary__map$source$
                    }
                    
                    export namespace initialization {
                        
                        
                        
                        export type $ = _IFlat.Initialization$dictionary__map$initialization$
                    }
                    
                    export type $ = _IFlat.Initialization$dictionary__map$
                }
                
                export namespace group__literal {
                    
                    
                    
                    export namespace definition {
                        
                        
                        
                        export type $ = _IFlat.Initialization$group__literal$definition$
                    }
                    
                    export namespace properties {
                        
                        
                        
                        export namespace D {
                            
                            
                            
                            export type $ = _IFlat.Initialization$group__literal$properties$D$
                        }
                        
                        export type $ = _IFlat.Initialization$group__literal$properties$
                    }
                    
                    export type $ = _IFlat.Initialization$group__literal$
                }
                
                export namespace implement__me {
                    
                    
                    
                    export type $ = _IFlat.Initialization$implement__me$
                }
                
                export namespace _lnull {
                    
                    
                    
                    export namespace definition {
                        
                        
                        
                        export type $ = _IFlat.Initialization$null$definition$
                    }
                    
                    export type $ = _IFlat.Initialization$null$
                }
                
                export namespace numerical {
                    
                    
                    
                    export namespace definition {
                        
                        
                        
                        export type $ = _IFlat.Initialization$numerical$definition$
                    }
                    
                    export namespace initialization {
                        
                        
                        
                        export type $ = _IFlat.Initialization$numerical$initialization$
                    }
                    
                    export type $ = _IFlat.Initialization$numerical$
                }
                
                export namespace optional {
                    
                    
                    
                    export namespace definition {
                        
                        
                        
                        export type $ = _IFlat.Initialization$optional$definition$
                    }
                    
                    export type $ = _IFlat.Initialization$optional$
                }
                
                export namespace procedure {
                    
                    
                    
                    export namespace definition {
                        
                        
                        
                        export type $ = _IFlat.Initialization$procedure$definition$
                    }
                    
                    export namespace temp__has__parameters {
                        
                        
                        
                        export namespace O {
                            
                            
                            
                            export type $ = _IFlat.Initialization$procedure$temp__has__parameters$O$
                        }
                        
                        export type $ = _IFlat.Initialization$procedure$temp__has__parameters$
                    }
                    
                    export namespace variables {
                        
                        
                        
                        export type $ = _IFlat.Initialization$procedure$variables$
                    }
                    
                    export namespace block {
                        
                        
                        
                        export type $ = _IFlat.Initialization$procedure$block$
                    }
                    
                    export type $ = _IFlat.Initialization$procedure$
                }
                
                export namespace tagged__union__literal {
                    
                    
                    
                    export namespace definition {
                        
                        
                        
                        export type $ = _IFlat.Initialization$tagged__union__literal$definition$
                    }
                    
                    export namespace state {
                        
                        
                        
                        export type $ = _IFlat.Initialization$tagged__union__literal$state$
                    }
                    
                    export namespace initialization {
                        
                        
                        
                        export type $ = _IFlat.Initialization$tagged__union__literal$initialization$
                    }
                    
                    export type $ = _IFlat.Initialization$tagged__union__literal$
                }
                
                export namespace _lstring {
                    
                    
                    
                    export namespace definition {
                        
                        
                        
                        export type $ = _IFlat.Initialization$string$definition$
                    }
                    
                    export namespace initialization {
                        
                        
                        
                        export type $ = _IFlat.Initialization$string$initialization$
                    }
                    
                    export type $ = _IFlat.Initialization$string$
                }
                
                export namespace _lswitch {
                    
                    
                    
                    export namespace definition {
                        
                        
                        
                        export type $ = _IFlat.Initialization$switch$definition$
                    }
                    
                    export namespace temp__type {
                        
                        
                        
                        export type $ = _IFlat.Initialization$switch$temp__type$
                    }
                    
                    export namespace source {
                        
                        
                        
                        export type $ = _IFlat.Initialization$switch$source$
                    }
                    
                    export namespace cases {
                        
                        
                        
                        export namespace D {
                            
                            
                            
                            export type $ = _IFlat.Initialization$switch$cases$D$
                        }
                        
                        export type $ = _IFlat.Initialization$switch$cases$
                    }
                    
                    export namespace _ldefault {
                        
                        
                        
                        export namespace O {
                            
                            
                            
                            export type $ = _IFlat.Initialization$switch$default$O$
                        }
                        
                        export type $ = _IFlat.Initialization$switch$default$
                    }
                    
                    export type $ = _IFlat.Initialization$switch$
                }
                
                export namespace value__function {
                    
                    
                    
                    export namespace definition {
                        
                        
                        
                        export type $ = _IFlat.Initialization$value__function$definition$
                    }
                    
                    export namespace temp__has__parameters {
                        
                        
                        
                        export namespace O {
                            
                            
                            
                            export type $ = _IFlat.Initialization$value__function$temp__has__parameters$O$
                        }
                        
                        export type $ = _IFlat.Initialization$value__function$temp__has__parameters$
                    }
                    
                    export namespace variables {
                        
                        
                        
                        export type $ = _IFlat.Initialization$value__function$variables$
                    }
                    
                    export namespace initialization {
                        
                        
                        
                        export type $ = _IFlat.Initialization$value__function$initialization$
                    }
                    
                    export type $ = _IFlat.Initialization$value__function$
                }
                
                export namespace variables {
                    
                    
                    
                    export namespace variables {
                        
                        
                        
                        export type $ = _IFlat.Initialization$variables$variables$
                    }
                    
                    export namespace initialization {
                        
                        
                        
                        export type $ = _IFlat.Initialization$variables$initialization$
                    }
                    
                    export type $ = _IFlat.Initialization$variables$
                }
                
                export type $ = _IFlat.Initialization$
            }
            
            export namespace Block {
                
                
                
                export namespace variables {
                    
                    
                    
                    export type $ = _IFlat.Block$variables$
                }
                
                export namespace statements {
                    
                    
                    
                    export type $ = _IFlat.Block$statements$
                }
                
                export type $ = _IFlat.Block$
            }
            
            export namespace Assign {
                
                
                
                export namespace target {
                    
                    
                    
                    export type $ = _IFlat.Assign$target$
                }
                
                export namespace initialization {
                    
                    
                    
                    export type $ = _IFlat.Assign$initialization$
                }
                
                export type $ = _IFlat.Assign$
            }
            
            export namespace Statements {
                
                
                
                export namespace A {
                    
                    
                    
                    export namespace block {
                        
                        
                        
                        export type $ = _IFlat.Statements$A$block$
                    }
                    
                    export namespace call {
                        
                        
                        
                        export namespace _lfunction {
                            
                            
                            
                            export type $ = _IFlat.Statements$A$call$function$
                        }
                        
                        export namespace context__definition {
                            
                            
                            
                            export type $ = _IFlat.Statements$A$call$context__definition$
                        }
                        
                        export namespace context {
                            
                            
                            
                            export type $ = _IFlat.Statements$A$call$context$
                        }
                        
                        export namespace _larguments {
                            
                            
                            
                            export namespace D {
                                
                                
                                
                                export type $ = _IFlat.Statements$A$call$arguments$D$
                            }
                            
                            export type $ = _IFlat.Statements$A$call$arguments$
                        }
                        
                        export type $ = _IFlat.Statements$A$call$
                    }
                    
                    export namespace change__context {
                        
                        
                        
                        export namespace source {
                            
                            
                            
                            export type $ = _IFlat.Statements$A$change__context$source$
                        }
                        
                        export namespace block {
                            
                            
                            
                            export type $ = _IFlat.Statements$A$change__context$block$
                        }
                        
                        export type $ = _IFlat.Statements$A$change__context$
                    }
                    
                    export namespace _lif {
                        
                        
                        
                        export namespace condition {
                            
                            
                            
                            export type $ = _IFlat.Statements$A$if$condition$
                        }
                        
                        export namespace then {
                            
                            
                            
                            export type $ = _IFlat.Statements$A$if$then$
                        }
                        
                        export namespace _lelse {
                            
                            
                            
                            export namespace O {
                                
                                
                                
                                export type $ = _IFlat.Statements$A$if$else$O$
                            }
                            
                            export type $ = _IFlat.Statements$A$if$else$
                        }
                        
                        export type $ = _IFlat.Statements$A$if$
                    }
                    
                    export namespace _lswitch {
                        
                        
                        
                        export namespace source {
                            
                            
                            
                            export type $ = _IFlat.Statements$A$switch$source$
                        }
                        
                        export namespace context__definition {
                            
                            
                            
                            export type $ = _IFlat.Statements$A$switch$context__definition$
                        }
                        
                        export namespace cases {
                            
                            
                            
                            export namespace D {
                                
                                
                                
                                export type $ = _IFlat.Statements$A$switch$cases$D$
                            }
                            
                            export type $ = _IFlat.Statements$A$switch$cases$
                        }
                        
                        export namespace _ldefault {
                            
                            
                            
                            export namespace O {
                                
                                
                                
                                export type $ = _IFlat.Statements$A$switch$default$O$
                            }
                            
                            export type $ = _IFlat.Statements$A$switch$default$
                        }
                        
                        export type $ = _IFlat.Statements$A$switch$
                    }
                    
                    export namespace _lwith {
                        
                        
                        
                        export namespace source {
                            
                            
                            
                            export type $ = _IFlat.Statements$A$with$source$
                        }
                        
                        export namespace action {
                            
                            
                            
                            export namespace assign {
                                
                                
                                
                                export type $ = _IFlat.Statements$A$with$action$assign$
                            }
                            
                            export namespace minus__assign {
                                
                                
                                
                                export namespace _lnumber {
                                    
                                    
                                    
                                    export type $ = _IFlat.Statements$A$with$action$minus__assign$number$
                                }
                                
                                export namespace right__hand__side {
                                    
                                    
                                    
                                    export type $ = _IFlat.Statements$A$with$action$minus__assign$right__hand__side$
                                }
                                
                                export type $ = _IFlat.Statements$A$with$action$minus__assign$
                            }
                            
                            export namespace plus__assign {
                                
                                
                                
                                export namespace _lnumber {
                                    
                                    
                                    
                                    export type $ = _IFlat.Statements$A$with$action$plus__assign$number$
                                }
                                
                                export namespace right__hand__side {
                                    
                                    
                                    
                                    export type $ = _IFlat.Statements$A$with$action$plus__assign$right__hand__side$
                                }
                                
                                export type $ = _IFlat.Statements$A$with$action$plus__assign$
                            }
                            
                            export type $ = _IFlat.Statements$A$with$action$
                        }
                        
                        export type $ = _IFlat.Statements$A$with$
                    }
                    
                    export namespace _lwhile {
                        
                        
                        
                        export namespace condition {
                            
                            
                            
                            export type $ = _IFlat.Statements$A$while$condition$
                        }
                        
                        export namespace block {
                            
                            
                            
                            export type $ = _IFlat.Statements$A$while$block$
                        }
                        
                        export type $ = _IFlat.Statements$A$while$
                    }
                    
                    export type $ = _IFlat.Statements$A$
                }
                
                export type $ = _IFlat.Statements$
            }
            
            export namespace Source__File {
                
                
                
                export namespace _ltype {
                    
                    
                    
                    export type $ = _IFlat.Source__File$type$
                }
                
                export namespace initialization {
                    
                    
                    
                    export type $ = _IFlat.Source__File$initialization$
                }
                
                export type $ = _IFlat.Source__File$
            }
            
            export namespace Root {
                
                
                
                export type $ = _IFlat.Root$
            }
        }
    }
    
    export namespace Resolve {
        
        import _IResolved = Resolved
        
        import _IUnresolved = Unresolved
        
        
        export type Aggregated__Variable = <_TAnnotation>(
            $: _IUnresolved.Flat.Aggregated__Variable$<_TAnnotation>,
        ) => _IResolved.Flat.Aggregated__Variable$
        
        export type Aggregated__Variables = <_TAnnotation>(
            $: _IUnresolved.Flat.Aggregated__Variables$<_TAnnotation>,
        ) => _IResolved.Flat.Aggregated__Variables$
        
        export type Assign = <_TAnnotation>(
            $: _IUnresolved.Flat.Assign$<_TAnnotation>,
        ) => _IResolved.Flat.Assign$
        
        export type Block = <_TAnnotation>(
            $: _IUnresolved.Flat.Block$<_TAnnotation>,
        ) => _IResolved.Flat.Block$
        
        export type Boolean__Initialization__Or__Selection = <_TAnnotation>(
            $: _IUnresolved.Flat.Boolean__Initialization__Or__Selection$<_TAnnotation>,
        ) => _IResolved.Flat.Boolean__Initialization__Or__Selection$
        
        export type Boolean__Initialization = <_TAnnotation>(
            $: _IUnresolved.Flat.Boolean__Initialization$<_TAnnotation>,
        ) => _IResolved.Flat.Boolean__Initialization$
        
        export type Initialization__Or__Selection = <_TAnnotation>(
            $: _IUnresolved.Flat.Initialization__Or__Selection$<_TAnnotation>,
        ) => _IResolved.Flat.Initialization__Or__Selection$
        
        export type Initialization = <_TAnnotation>(
            $: _IUnresolved.Flat.Initialization$<_TAnnotation>,
        ) => _IResolved.Flat.Initialization$
        
        export type Local__Variables = <_TAnnotation>(
            $: _IUnresolved.Flat.Local__Variables$<_TAnnotation>,
        ) => _IResolved.Flat.Local__Variables$
        
        export type Numerical__Initialization__Or__Selection = <_TAnnotation>(
            $: _IUnresolved.Flat.Numerical__Initialization__Or__Selection$<_TAnnotation>,
        ) => _IResolved.Flat.Numerical__Initialization__Or__Selection$
        
        export type Numerical__Initialization = <_TAnnotation>(
            $: _IUnresolved.Flat.Numerical__Initialization$<_TAnnotation>,
        ) => _IResolved.Flat.Numerical__Initialization$
        
        export type Root = <_TAnnotation>(
            $: _IUnresolved.Flat.Root$<_TAnnotation>,
        ) => _IResolved.Flat.Root$
        
        export type Source__File = <_TAnnotation>(
            $: _IUnresolved.Flat.Source__File$<_TAnnotation>,
        ) => _IResolved.Flat.Source__File$
        
        export type Source__Selection__Tail = <_TAnnotation>(
            $: _IUnresolved.Flat.Source__Selection__Tail$<_TAnnotation>,
        ) => _IResolved.Flat.Source__Selection__Tail$
        
        export type Source__Selection = <_TAnnotation>(
            $: _IUnresolved.Flat.Source__Selection$<_TAnnotation>,
        ) => _IResolved.Flat.Source__Selection$
        
        export type Statements = <_TAnnotation>(
            $: _IUnresolved.Flat.Statements$<_TAnnotation>,
        ) => _IResolved.Flat.Statements$
        
        export type String__Initialization__Or__Selection = <_TAnnotation>(
            $: _IUnresolved.Flat.String__Initialization__Or__Selection$<_TAnnotation>,
        ) => _IResolved.Flat.String__Initialization__Or__Selection$
        
        export type String__Initialization = <_TAnnotation>(
            $: _IUnresolved.Flat.String__Initialization$<_TAnnotation>,
        ) => _IResolved.Flat.String__Initialization$
        
        export type Target__Selection__Tail = <_TAnnotation>(
            $: _IUnresolved.Flat.Target__Selection__Tail$<_TAnnotation>,
        ) => _IResolved.Flat.Target__Selection__Tail$
        
        export type Target__Selection = <_TAnnotation>(
            $: _IUnresolved.Flat.Target__Selection$<_TAnnotation>,
        ) => _IResolved.Flat.Target__Selection$
        
        export type Type__Arguments = <_TAnnotation>(
            $: _IUnresolved.Flat.Type__Arguments$<_TAnnotation>,
        ) => _IResolved.Flat.Type__Arguments$
        
        export type Type__Selection = <_TAnnotation>(
            $: _IUnresolved.Flat.Type__Selection$<_TAnnotation>,
        ) => _IResolved.Flat.Type__Selection$
        
        export type Variables = <_TAnnotation>(
            $: _IUnresolved.Flat.Variables$<_TAnnotation>,
        ) => _IResolved.Flat.Variables$
    }
    
    export namespace Serialize {
        
        import _IResolved = Resolved
        
        
        export type Type__Selection = (
            $: _IResolved.Flat.Type__Selection$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Type__Arguments = (
            $: _IResolved.Flat.Type__Arguments$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Local__Variables = (
            $: _IResolved.Flat.Local__Variables$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Aggregated__Variable = (
            $: _IResolved.Flat.Aggregated__Variable$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Aggregated__Variables = (
            $: _IResolved.Flat.Aggregated__Variables$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Variables = (
            $: _IResolved.Flat.Variables$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Target__Selection__Tail = (
            $: _IResolved.Flat.Target__Selection__Tail$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Target__Selection = (
            $: _IResolved.Flat.Target__Selection$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Source__Selection__Tail = (
            $: _IResolved.Flat.Source__Selection__Tail$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Source__Selection = (
            $: _IResolved.Flat.Source__Selection$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Initialization__Or__Selection = (
            $: _IResolved.Flat.Initialization__Or__Selection$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type String__Initialization__Or__Selection = (
            $: _IResolved.Flat.String__Initialization__Or__Selection$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Numerical__Initialization__Or__Selection = (
            $: _IResolved.Flat.Numerical__Initialization__Or__Selection$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Boolean__Initialization__Or__Selection = (
            $: _IResolved.Flat.Boolean__Initialization__Or__Selection$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Boolean__Initialization = (
            $: _IResolved.Flat.Boolean__Initialization$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Numerical__Initialization = (
            $: _IResolved.Flat.Numerical__Initialization$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type String__Initialization = (
            $: _IResolved.Flat.String__Initialization$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Initialization = (
            $: _IResolved.Flat.Initialization$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Block = (
            $: _IResolved.Flat.Block$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Assign = (
            $: _IResolved.Flat.Assign$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Statements = (
            $: _IResolved.Flat.Statements$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Source__File = (
            $: _IResolved.Flat.Source__File$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Root = (
            $: _IResolved.Flat.Root$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
    }
    
    export namespace Select {
        
        import _IResolved = Resolved
        
    }
    
    export type _$ = (
        $: null,
    ) => {
        readonly 'Aggregated Variable': {
            readonly 'Resolve': Resolve.Aggregated__Variable
            readonly 'Serialize': Serialize.Aggregated__Variable
        }
        readonly 'Aggregated Variables': {
            readonly 'Resolve': Resolve.Aggregated__Variables
            readonly 'Serialize': Serialize.Aggregated__Variables
        }
        readonly 'Assign': {
            readonly 'Resolve': Resolve.Assign
            readonly 'Serialize': Serialize.Assign
        }
        readonly 'Block': {
            readonly 'Resolve': Resolve.Block
            readonly 'Serialize': Serialize.Block
        }
        readonly 'Boolean Initialization': {
            readonly 'Resolve': Resolve.Boolean__Initialization
            readonly 'Serialize': Serialize.Boolean__Initialization
        }
        readonly 'Boolean Initialization Or Selection': {
            readonly 'Resolve': Resolve.Boolean__Initialization__Or__Selection
            readonly 'Serialize': Serialize.Boolean__Initialization__Or__Selection
        }
        readonly 'Initialization': {
            readonly 'Resolve': Resolve.Initialization
            readonly 'Serialize': Serialize.Initialization
        }
        readonly 'Initialization Or Selection': {
            readonly 'Resolve': Resolve.Initialization__Or__Selection
            readonly 'Serialize': Serialize.Initialization__Or__Selection
        }
        readonly 'Local Variables': {
            readonly 'Resolve': Resolve.Local__Variables
            readonly 'Serialize': Serialize.Local__Variables
        }
        readonly 'Numerical Initialization': {
            readonly 'Resolve': Resolve.Numerical__Initialization
            readonly 'Serialize': Serialize.Numerical__Initialization
        }
        readonly 'Numerical Initialization Or Selection': {
            readonly 'Resolve': Resolve.Numerical__Initialization__Or__Selection
            readonly 'Serialize': Serialize.Numerical__Initialization__Or__Selection
        }
        readonly 'Root': {
            readonly 'Resolve': Resolve.Root
            readonly 'Serialize': Serialize.Root
        }
        readonly 'Source File': {
            readonly 'Resolve': Resolve.Source__File
            readonly 'Serialize': Serialize.Source__File
        }
        readonly 'Source Selection': {
            readonly 'Resolve': Resolve.Source__Selection
            readonly 'Serialize': Serialize.Source__Selection
        }
        readonly 'Source Selection Tail': {
            readonly 'Resolve': Resolve.Source__Selection__Tail
            readonly 'Serialize': Serialize.Source__Selection__Tail
        }
        readonly 'Statements': {
            readonly 'Resolve': Resolve.Statements
            readonly 'Serialize': Serialize.Statements
        }
        readonly 'String Initialization': {
            readonly 'Resolve': Resolve.String__Initialization
            readonly 'Serialize': Serialize.String__Initialization
        }
        readonly 'String Initialization Or Selection': {
            readonly 'Resolve': Resolve.String__Initialization__Or__Selection
            readonly 'Serialize': Serialize.String__Initialization__Or__Selection
        }
        readonly 'Target Selection': {
            readonly 'Resolve': Resolve.Target__Selection
            readonly 'Serialize': Serialize.Target__Selection
        }
        readonly 'Target Selection Tail': {
            readonly 'Resolve': Resolve.Target__Selection__Tail
            readonly 'Serialize': Serialize.Target__Selection__Tail
        }
        readonly 'Type Arguments': {
            readonly 'Resolve': Resolve.Type__Arguments
            readonly 'Serialize': Serialize.Type__Arguments
        }
        readonly 'Type Selection': {
            readonly 'Resolve': Resolve.Type__Selection
            readonly 'Serialize': Serialize.Type__Selection
        }
        readonly 'Variables': {
            readonly 'Resolve': Resolve.Variables
            readonly 'Serialize': Serialize.Variables
        }
    }
}

export type $ = {
    readonly 'pareto lang data': {
        readonly 'Resolve': (
            $: null,
        ) => {
            readonly 'Atom': pareto__lang__data.Resolve.Atom
            readonly 'Atom Types': pareto__lang__data.Resolve.Atom__Types
            readonly 'Dictionary Selection': pareto__lang__data.Resolve.Dictionary__Selection
            readonly 'Global Type Declaration': pareto__lang__data.Resolve.Global__Type__Declaration
            readonly 'Global Type Declarations': pareto__lang__data.Resolve.Global__Type__Declarations
            readonly 'Global Type Definition': pareto__lang__data.Resolve.Global__Type__Definition
            readonly 'Global Type Selection': pareto__lang__data.Resolve.Global__Type__Selection
            readonly 'Imports': pareto__lang__data.Resolve.Imports
            readonly 'Model': pareto__lang__data.Resolve.Model
            readonly 'Project': pareto__lang__data.Resolve.Project
            readonly 'Root': pareto__lang__data.Resolve.Root
            readonly 'Type': pareto__lang__data.Resolve.Type
            readonly 'Type Library': pareto__lang__data.Resolve.Type__Library
            readonly 'Type Selection': pareto__lang__data.Resolve.Type__Selection
            readonly 'Type Selection Tail': pareto__lang__data.Resolve.Type__Selection__Tail
        }
        readonly 'Serialize': (
            $: null,
        ) => {
            readonly 'Atom': pareto__lang__data.Serialize.Atom
            readonly 'Atom Types': pareto__lang__data.Serialize.Atom__Types
            readonly 'Dictionary Selection': pareto__lang__data.Serialize.Dictionary__Selection
            readonly 'Global Type Declaration': pareto__lang__data.Serialize.Global__Type__Declaration
            readonly 'Global Type Declarations': pareto__lang__data.Serialize.Global__Type__Declarations
            readonly 'Global Type Definition': pareto__lang__data.Serialize.Global__Type__Definition
            readonly 'Global Type Selection': pareto__lang__data.Serialize.Global__Type__Selection
            readonly 'Imports': pareto__lang__data.Serialize.Imports
            readonly 'Model': pareto__lang__data.Serialize.Model
            readonly 'Project': pareto__lang__data.Serialize.Project
            readonly 'Root': pareto__lang__data.Serialize.Root
            readonly 'Type': pareto__lang__data.Serialize.Type
            readonly 'Type Library': pareto__lang__data.Serialize.Type__Library
            readonly 'Type Selection': pareto__lang__data.Serialize.Type__Selection
            readonly 'Type Selection Tail': pareto__lang__data.Serialize.Type__Selection__Tail
        }
    }
    readonly 'proto implementation': {
        readonly 'Resolve': (
            $: null,
        ) => {
            readonly 'Aggregated Variable': proto__implementation.Resolve.Aggregated__Variable
            readonly 'Aggregated Variables': proto__implementation.Resolve.Aggregated__Variables
            readonly 'Assign': proto__implementation.Resolve.Assign
            readonly 'Block': proto__implementation.Resolve.Block
            readonly 'Boolean Initialization': proto__implementation.Resolve.Boolean__Initialization
            readonly 'Boolean Initialization Or Selection': proto__implementation.Resolve.Boolean__Initialization__Or__Selection
            readonly 'Initialization': proto__implementation.Resolve.Initialization
            readonly 'Initialization Or Selection': proto__implementation.Resolve.Initialization__Or__Selection
            readonly 'Local Variables': proto__implementation.Resolve.Local__Variables
            readonly 'Numerical Initialization': proto__implementation.Resolve.Numerical__Initialization
            readonly 'Numerical Initialization Or Selection': proto__implementation.Resolve.Numerical__Initialization__Or__Selection
            readonly 'Root': proto__implementation.Resolve.Root
            readonly 'Source File': proto__implementation.Resolve.Source__File
            readonly 'Source Selection': proto__implementation.Resolve.Source__Selection
            readonly 'Source Selection Tail': proto__implementation.Resolve.Source__Selection__Tail
            readonly 'Statements': proto__implementation.Resolve.Statements
            readonly 'String Initialization': proto__implementation.Resolve.String__Initialization
            readonly 'String Initialization Or Selection': proto__implementation.Resolve.String__Initialization__Or__Selection
            readonly 'Target Selection': proto__implementation.Resolve.Target__Selection
            readonly 'Target Selection Tail': proto__implementation.Resolve.Target__Selection__Tail
            readonly 'Type Arguments': proto__implementation.Resolve.Type__Arguments
            readonly 'Type Selection': proto__implementation.Resolve.Type__Selection
            readonly 'Variables': proto__implementation.Resolve.Variables
        }
        readonly 'Serialize': (
            $: null,
        ) => {
            readonly 'Aggregated Variable': proto__implementation.Serialize.Aggregated__Variable
            readonly 'Aggregated Variables': proto__implementation.Serialize.Aggregated__Variables
            readonly 'Assign': proto__implementation.Serialize.Assign
            readonly 'Block': proto__implementation.Serialize.Block
            readonly 'Boolean Initialization': proto__implementation.Serialize.Boolean__Initialization
            readonly 'Boolean Initialization Or Selection': proto__implementation.Serialize.Boolean__Initialization__Or__Selection
            readonly 'Initialization': proto__implementation.Serialize.Initialization
            readonly 'Initialization Or Selection': proto__implementation.Serialize.Initialization__Or__Selection
            readonly 'Local Variables': proto__implementation.Serialize.Local__Variables
            readonly 'Numerical Initialization': proto__implementation.Serialize.Numerical__Initialization
            readonly 'Numerical Initialization Or Selection': proto__implementation.Serialize.Numerical__Initialization__Or__Selection
            readonly 'Root': proto__implementation.Serialize.Root
            readonly 'Source File': proto__implementation.Serialize.Source__File
            readonly 'Source Selection': proto__implementation.Serialize.Source__Selection
            readonly 'Source Selection Tail': proto__implementation.Serialize.Source__Selection__Tail
            readonly 'Statements': proto__implementation.Serialize.Statements
            readonly 'String Initialization': proto__implementation.Serialize.String__Initialization
            readonly 'String Initialization Or Selection': proto__implementation.Serialize.String__Initialization__Or__Selection
            readonly 'Target Selection': proto__implementation.Serialize.Target__Selection
            readonly 'Target Selection Tail': proto__implementation.Serialize.Target__Selection__Tail
            readonly 'Type Arguments': proto__implementation.Serialize.Type__Arguments
            readonly 'Type Selection': proto__implementation.Serialize.Type__Selection
            readonly 'Variables': proto__implementation.Serialize.Variables
        }
    }
    readonly 'proto typesystem': {
        readonly 'Resolve': (
            $: null,
        ) => {
            readonly 'Aggregated Type Parameters': proto__typesystem.Resolve.Aggregated__Type__Parameters
            readonly 'Function Declaration': proto__typesystem.Resolve.Function__Declaration
            readonly 'Import': proto__typesystem.Resolve.Import
            readonly 'Imports': proto__typesystem.Resolve.Imports
            readonly 'Namespace': proto__typesystem.Resolve.Namespace
            readonly 'Namespace Selection': proto__typesystem.Resolve.Namespace__Selection
            readonly 'Namespace Selection Tail': proto__typesystem.Resolve.Namespace__Selection__Tail
            readonly 'Nested Namespace': proto__typesystem.Resolve.Nested__Namespace
            readonly 'Root': proto__typesystem.Resolve.Root
            readonly 'Type': proto__typesystem.Resolve.Type
            readonly 'Type Arguments': proto__typesystem.Resolve.Type__Arguments
            readonly 'Type Parameters': proto__typesystem.Resolve.Type__Parameters
        }
        readonly 'Serialize': (
            $: null,
        ) => {
            readonly 'Aggregated Type Parameters': proto__typesystem.Serialize.Aggregated__Type__Parameters
            readonly 'Function Declaration': proto__typesystem.Serialize.Function__Declaration
            readonly 'Import': proto__typesystem.Serialize.Import
            readonly 'Imports': proto__typesystem.Serialize.Imports
            readonly 'Namespace': proto__typesystem.Serialize.Namespace
            readonly 'Namespace Selection': proto__typesystem.Serialize.Namespace__Selection
            readonly 'Namespace Selection Tail': proto__typesystem.Serialize.Namespace__Selection__Tail
            readonly 'Nested Namespace': proto__typesystem.Serialize.Nested__Namespace
            readonly 'Root': proto__typesystem.Serialize.Root
            readonly 'Type': proto__typesystem.Serialize.Type
            readonly 'Type Arguments': proto__typesystem.Serialize.Type__Arguments
            readonly 'Type Parameters': proto__typesystem.Serialize.Type__Parameters
        }
    }
}