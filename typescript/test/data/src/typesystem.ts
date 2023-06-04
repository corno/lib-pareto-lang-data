
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
            
            export type Type$type$component$<_TAnnotation> = {
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
            
            export type Global__Type$type$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Global__Type$<_TAnnotation> = {
                readonly 'type': Global__Type$type$<_TAnnotation>
            }
            
            export type Type__Selection__Tail$step__type$dictionary$dictionary$<_TAnnotation> = _TAnnotation
            
            export type Type__Selection__Tail$step__type$dictionary$<_TAnnotation> = {
                readonly 'dictionary': Type__Selection__Tail$step__type$dictionary$dictionary$<_TAnnotation>
            }
            
            export type Type__Selection__Tail$step__type$optional$optional$<_TAnnotation> = _TAnnotation
            
            export type Type__Selection__Tail$step__type$optional$<_TAnnotation> = {
                readonly 'optional': Type__Selection__Tail$step__type$optional$optional$<_TAnnotation>
            }
            
            export type Type__Selection__Tail$step__type$array$array$<_TAnnotation> = _TAnnotation
            
            export type Type__Selection__Tail$step__type$array$<_TAnnotation> = {
                readonly 'array': Type__Selection__Tail$step__type$array$array$<_TAnnotation>
            }
            
            export type Type__Selection__Tail$step__type$group$group$<_TAnnotation> = _TAnnotation
            
            export type Type__Selection__Tail$step__type$group$property$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Type__Selection__Tail$step__type$group$<_TAnnotation> = {
                readonly 'group': Type__Selection__Tail$step__type$group$group$<_TAnnotation>
                readonly 'property': Type__Selection__Tail$step__type$group$property$<_TAnnotation>
            }
            
            export type Type__Selection__Tail$step__type$state__group$state__group$<_TAnnotation> = _TAnnotation
            
            export type Type__Selection__Tail$step__type$state__group$state$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Type__Selection__Tail$step__type$state__group$<_TAnnotation> = {
                readonly 'state': Type__Selection__Tail$step__type$state__group$state$<_TAnnotation>
                readonly 'state group': Type__Selection__Tail$step__type$state__group$state__group$<_TAnnotation>
            }
            
            export type Type__Selection__Tail$step__type$<_TAnnotation> = 
                | ['array', Type__Selection__Tail$step__type$array$<_TAnnotation>]
                | ['dictionary', Type__Selection__Tail$step__type$dictionary$<_TAnnotation>]
                | ['group', Type__Selection__Tail$step__type$group$<_TAnnotation>]
                | ['optional', Type__Selection__Tail$step__type$optional$<_TAnnotation>]
                | ['state group', Type__Selection__Tail$step__type$state__group$<_TAnnotation>]
            
            export type Type__Selection__Tail$tail$O$<_TAnnotation> = Type__Selection__Tail$<_TAnnotation>
            
            export type Type__Selection__Tail$tail$<_TAnnotation> = _pt.OptionalValue<Type__Selection__Tail$tail$O$<_TAnnotation>>
            
            export type Type__Selection__Tail$<_TAnnotation> = {
                readonly 'step type': Type__Selection__Tail$step__type$<_TAnnotation>
                readonly 'tail': Type__Selection__Tail$tail$<_TAnnotation>
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
            
            export type Type__Library$global__types$D$<_TAnnotation> = Global__Type$<_TAnnotation>
            
            export type Type__Library$global__types$<_TAnnotation> = _pt.Dictionary<Type__Library$global__types$D$<_TAnnotation>>
            
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
            
            export namespace Global__Type {
                
                
                export namespace _ltype {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Global__Type$type$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Global__Type$<_TAnnotation>
            }
            
            export namespace TType__Selection__Tail {
                
                
                export namespace step__type {
                    
                    
                    export namespace dictionary {
                        
                        
                        export namespace dictionary {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$dictionary$dictionary$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$dictionary$<_TAnnotation>
                    }
                    
                    export namespace optional {
                        
                        
                        export namespace optional {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$optional$optional$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$optional$<_TAnnotation>
                    }
                    
                    export namespace array {
                        
                        
                        export namespace array {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$array$array$<_TAnnotation>
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
                        
                        export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$group$<_TAnnotation>
                    }
                    
                    export namespace state__group {
                        
                        
                        export namespace state__group {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$state__group$state__group$<_TAnnotation>
                        }
                        
                        export namespace state {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$state__group$state$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$state__group$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$<_TAnnotation>
                }
                
                export namespace tail {
                    
                    
                    export namespace O {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$tail$O$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$tail$<_TAnnotation>
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
                    
                    
                    export namespace D {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Type__Library$global__types$D$<_TAnnotation>
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
            
            export type Type$type$component$ = {
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
            
            export type Global__Type$type$ = Type$
            
            export type Global__Type$ = {
                readonly 'type': Global__Type$type$
            }
            
            export type Type__Selection__Tail$step__type$dictionary$dictionary$ = Type$type$dictionary$
            
            export type Type__Selection__Tail$step__type$dictionary$ = {
                readonly 'dictionary': Type__Selection__Tail$step__type$dictionary$dictionary$
            }
            
            export type Type__Selection__Tail$step__type$optional$optional$ = Type$type$optional$
            
            export type Type__Selection__Tail$step__type$optional$ = {
                readonly 'optional': Type__Selection__Tail$step__type$optional$optional$
            }
            
            export type Type__Selection__Tail$step__type$array$array$ = Type$type$array$
            
            export type Type__Selection__Tail$step__type$array$ = {
                readonly 'array': Type__Selection__Tail$step__type$array$array$
            }
            
            export type Type__Selection__Tail$step__type$group$group$ = Type$type$group$
            
            export type Type__Selection__Tail$step__type$group$property$ = {
                readonly 'key': string
                readonly 'referent': Type$type$group$properties$D$
            }
            
            export type Type__Selection__Tail$step__type$group$ = {
                readonly 'group': Type__Selection__Tail$step__type$group$group$
                readonly 'property': Type__Selection__Tail$step__type$group$property$
            }
            
            export type Type__Selection__Tail$step__type$state__group$state__group$ = Type$type$state__group$
            
            export type Type__Selection__Tail$step__type$state__group$state$ = {
                readonly 'key': string
                readonly 'referent': Type$type$state__group$states$D$
            }
            
            export type Type__Selection__Tail$step__type$state__group$ = {
                readonly 'state': Type__Selection__Tail$step__type$state__group$state$
                readonly 'state group': Type__Selection__Tail$step__type$state__group$state__group$
            }
            
            export type Type__Selection__Tail$step__type$ = 
                | ['array', Type__Selection__Tail$step__type$array$]
                | ['dictionary', Type__Selection__Tail$step__type$dictionary$]
                | ['group', Type__Selection__Tail$step__type$group$]
                | ['optional', Type__Selection__Tail$step__type$optional$]
                | ['state group', Type__Selection__Tail$step__type$state__group$]
            
            export type Type__Selection__Tail$tail$O$ = Type__Selection__Tail$
            
            export type Type__Selection__Tail$tail$ = _pt.OptionalValue<Type__Selection__Tail$tail$O$>
            
            export type Type__Selection__Tail$ = {
                readonly 'step type': Type__Selection__Tail$step__type$
                readonly 'tail': Type__Selection__Tail$tail$
            }
            
            export type Type__Selection$import$O$ = {
                readonly 'key': string
                readonly 'referent': Imports$D$
            }
            
            export type Type__Selection$import$ = _pt.OptionalValue<Type__Selection$import$O$>
            
            export type Type__Selection$global__type$ = {
                readonly 'key': string
                readonly 'referent': Global__Type$
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
            
            export type Type__Library$global__types$D$ = Global__Type$
            
            export type Type__Library$global__types$ = _pt.Dictionary<Type__Library$global__types$D$>
            
            export type Type__Library$ = {
                readonly 'atom types': Type__Library$atom__types$
                readonly 'global types': Type__Library$global__types$
                readonly 'imports': Type__Library$imports$
            }
            
            export type Global__Type__Selection$resolved__sibling$type$ = {
                readonly 'key': string
                readonly 'referent': Global__Type$
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
                readonly 'referent': Type__Library$global__types$D$
            }
            
            export type Global__Type__Selection$import$ = {
                readonly 'library': Global__Type__Selection$import$library$
                readonly 'type': Global__Type__Selection$import$type$
            }
            
            export type Global__Type__Selection$cyclic__sibling$type$ = {
                readonly 'key': string
                readonly 'referent': _pt.ComputedValue<Global__Type$>
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
                readonly 'referent': Type__Library$global__types$D$
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
            
            export namespace Global__Type {
                
                
                export namespace _ltype {
                    
                    
                    export type $ = _IFlat.Global__Type$type$
                }
                
                export type $ = _IFlat.Global__Type$
            }
            
            export namespace TType__Selection__Tail {
                
                
                export namespace step__type {
                    
                    
                    export namespace dictionary {
                        
                        
                        export namespace dictionary {
                            
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$dictionary$dictionary$
                        }
                        
                        export type $ = _IFlat.Type__Selection__Tail$step__type$dictionary$
                    }
                    
                    export namespace optional {
                        
                        
                        export namespace optional {
                            
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$optional$optional$
                        }
                        
                        export type $ = _IFlat.Type__Selection__Tail$step__type$optional$
                    }
                    
                    export namespace array {
                        
                        
                        export namespace array {
                            
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$array$array$
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
                        
                        export type $ = _IFlat.Type__Selection__Tail$step__type$group$
                    }
                    
                    export namespace state__group {
                        
                        
                        export namespace state__group {
                            
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$state__group$state__group$
                        }
                        
                        export namespace state {
                            
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$state__group$state$
                        }
                        
                        export type $ = _IFlat.Type__Selection__Tail$step__type$state__group$
                    }
                    
                    export type $ = _IFlat.Type__Selection__Tail$step__type$
                }
                
                export namespace tail {
                    
                    
                    export namespace O {
                        
                        
                        export type $ = _IFlat.Type__Selection__Tail$tail$O$
                    }
                    
                    export type $ = _IFlat.Type__Selection__Tail$tail$
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
                    
                    
                    export namespace D {
                        
                        
                        export type $ = _IFlat.Type__Library$global__types$D$
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
                readonly 'cyclic sibling global types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Global__Type$>>
                readonly 'imports': _IResolved.Flat.Imports$
                readonly 'sibling global types': _pt.Lookup<_IResolved.Flat.Global__Type$>
            }
        ) => _IResolved.Flat.Dictionary__Selection$
        
        export type Global__Type__Selection = <_TAnnotation>(
            $: _IUnresolved.Flat.Global__Type__Selection$<_TAnnotation>,
            $p: {
                readonly 'cyclic sibling global types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Global__Type$>>
                readonly 'imports': _IResolved.Flat.Imports$
                readonly 'sibling global types': _pt.Lookup<_IResolved.Flat.Global__Type$>
            }
        ) => _IResolved.Flat.Global__Type__Selection$
        
        export type Global__Type = <_TAnnotation>(
            $: _IUnresolved.Flat.Global__Type$<_TAnnotation>,
        ) => _IResolved.Flat.Global__Type$
        
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
                readonly 'sibling global types': _pt.Lookup<_IResolved.Flat.Global__Type$>
            }
        ) => _IResolved.Flat.Type__Selection$
        
        export type Type = <_TAnnotation>(
            $: _IUnresolved.Flat.Type$<_TAnnotation>,
            $p: {
                readonly 'atom types': _IResolved.Flat.Atom__Types$
                readonly 'cyclic sibling global types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Global__Type$>>
                readonly 'imports': _IResolved.Flat.Imports$
                readonly 'sibling global types': _pt.Lookup<_IResolved.Flat.Global__Type$>
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
        
        export type Global__Type = (
            $: _IResolved.Flat.Global__Type$,
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
        readonly 'Global Type': {
            readonly 'Resolve': Resolve.Global__Type
            readonly 'Serialize': Serialize.Global__Type
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
            
            export type Namespace__2$parent__sibling$namespace$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Namespace__2$parent__sibling$<_TAnnotation> = {
                readonly 'namespace': Namespace__2$parent__sibling$namespace$<_TAnnotation>
            }
            
            export type Namespace__2$local$<_TAnnotation> = Local__Namespace$<_TAnnotation>
            
            export type Namespace__2$<_TAnnotation> = 
                | ['local', Namespace__2$local$<_TAnnotation>]
                | ['parent sibling', Namespace__2$parent__sibling$<_TAnnotation>]
            
            export type Local__Namespace$namespaces$D$<_TAnnotation> = Namespace__2$<_TAnnotation>
            
            export type Local__Namespace$namespaces$<_TAnnotation> = _pt.Dictionary<Local__Namespace$namespaces$D$<_TAnnotation>>
            
            export type Local__Namespace$parameters$<_TAnnotation> = Type__Parameters$<_TAnnotation>
            
            export type Local__Namespace$types$D$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Local__Namespace$types$<_TAnnotation> = _pt.Dictionary<Local__Namespace$types$D$<_TAnnotation>>
            
            export type Local__Namespace$<_TAnnotation> = {
                readonly 'namespaces': Local__Namespace$namespaces$<_TAnnotation>
                readonly 'parameters': Local__Namespace$parameters$<_TAnnotation>
                readonly 'types': Local__Namespace$types$<_TAnnotation>
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
            
            export type Type$type__reference$external$namespaces$<_TAnnotation> = Namespace__Selection$<_TAnnotation>
            
            export type Type$type__reference$external$type$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Type$type__reference$external$<_TAnnotation> = {
                readonly 'namespaces': Type$type__reference$external$namespaces$<_TAnnotation>
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
            
            export type Namespace__Selection$namespace$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Namespace__Selection$arguments$<_TAnnotation> = Type__Arguments$<_TAnnotation>
            
            export type Namespace__Selection$tail$O$<_TAnnotation> = Namespace__Selection$<_TAnnotation>
            
            export type Namespace__Selection$tail$<_TAnnotation> = _pt.OptionalValue<Namespace__Selection$tail$O$<_TAnnotation>>
            
            export type Namespace__Selection$<_TAnnotation> = {
                readonly 'arguments': Namespace__Selection$arguments$<_TAnnotation>
                readonly 'namespace': Namespace__Selection$namespace$<_TAnnotation>
                readonly 'tail': Namespace__Selection$tail$<_TAnnotation>
            }
            
            export type Root$<_TAnnotation> = Local__Namespace$<_TAnnotation>
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
            
            export namespace Namespace__2 {
                
                
                export namespace parent__sibling {
                    
                    
                    export namespace namespace {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Namespace__2$parent__sibling$namespace$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Namespace__2$parent__sibling$<_TAnnotation>
                }
                
                export namespace local {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Namespace__2$local$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Namespace__2$<_TAnnotation>
            }
            
            export namespace Local__Namespace {
                
                
                export namespace namespaces {
                    
                    
                    export namespace D {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Local__Namespace$namespaces$D$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Local__Namespace$namespaces$<_TAnnotation>
                }
                
                export namespace parameters {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Local__Namespace$parameters$<_TAnnotation>
                }
                
                export namespace types {
                    
                    
                    export namespace D {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Local__Namespace$types$D$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Local__Namespace$types$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Local__Namespace$<_TAnnotation>
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
                        
                        
                        export namespace namespaces {
                            
                            
                            export type $<_TAnnotation> = _IFlat.Type$type__reference$external$namespaces$<_TAnnotation>
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
            
            export namespace Namespace__Selection {
                
                
                export namespace namespace {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Namespace__Selection$namespace$<_TAnnotation>
                }
                
                export namespace arguments {
                    
                    
                    export type $<_TAnnotation> = _IFlat.Namespace__Selection$arguments$<_TAnnotation>
                }
                
                export namespace tail {
                    
                    
                    export namespace O {
                        
                        
                        export type $<_TAnnotation> = _IFlat.Namespace__Selection$tail$O$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Namespace__Selection$tail$<_TAnnotation>
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
            
            export type Namespace__2$parent__sibling$namespace$ = {
                readonly 'key': string
                readonly 'referent': Namespace__2$
            }
            
            export type Namespace__2$parent__sibling$ = {
                readonly 'namespace': Namespace__2$parent__sibling$namespace$
            }
            
            export type Namespace__2$local$ = Local__Namespace$
            
            export type Namespace__2$ = 
                | ['local', Namespace__2$local$]
                | ['parent sibling', Namespace__2$parent__sibling$]
            
            export type Local__Namespace$namespaces$D$ = Namespace__2$
            
            export type Local__Namespace$namespaces$ = _pt.Dictionary<Local__Namespace$namespaces$D$>
            
            export type Local__Namespace$parameters$ = Type__Parameters$
            
            export type Local__Namespace$types$D$ = Type$
            
            export type Local__Namespace$types$ = _pt.Dictionary<Local__Namespace$types$D$>
            
            export type Local__Namespace$ = {
                readonly 'namespaces': Local__Namespace$namespaces$
                readonly 'parameters': Local__Namespace$parameters$
                readonly 'types': Local__Namespace$types$
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
            
            export type Type$type__reference$external$namespaces$ = Namespace__Selection$
            
            export type Type$type__reference$external$type$ = {
                readonly 'key': string
                readonly 'referent': Local__Namespace$types$D$
            }
            
            export type Type$type__reference$external$ = {
                readonly 'namespaces': Type$type__reference$external$namespaces$
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
            
            export type Namespace__Selection$namespace$ = {
                readonly 'key': string
                readonly 'referent': Local__Namespace$namespaces$D$
            }
            
            export type Namespace__Selection$arguments$ = Type__Arguments$
            
            export type Namespace__Selection$tail$O$ = Namespace__Selection$
            
            export type Namespace__Selection$tail$ = _pt.OptionalValue<Namespace__Selection$tail$O$>
            
            export type Namespace__Selection$ = {
                readonly 'arguments': Namespace__Selection$arguments$
                readonly 'namespace': Namespace__Selection$namespace$
                readonly 'tail': Namespace__Selection$tail$
            }
            
            export type Root$ = Local__Namespace$
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
            
            export namespace Namespace__2 {
                
                
                export namespace parent__sibling {
                    
                    
                    export namespace namespace {
                        
                        
                        export type $ = _IFlat.Namespace__2$parent__sibling$namespace$
                    }
                    
                    export type $ = _IFlat.Namespace__2$parent__sibling$
                }
                
                export namespace local {
                    
                    
                    export type $ = _IFlat.Namespace__2$local$
                }
                
                export type $ = _IFlat.Namespace__2$
            }
            
            export namespace Local__Namespace {
                
                
                export namespace namespaces {
                    
                    
                    export namespace D {
                        
                        
                        export type $ = _IFlat.Local__Namespace$namespaces$D$
                    }
                    
                    export type $ = _IFlat.Local__Namespace$namespaces$
                }
                
                export namespace parameters {
                    
                    
                    export type $ = _IFlat.Local__Namespace$parameters$
                }
                
                export namespace types {
                    
                    
                    export namespace D {
                        
                        
                        export type $ = _IFlat.Local__Namespace$types$D$
                    }
                    
                    export type $ = _IFlat.Local__Namespace$types$
                }
                
                export type $ = _IFlat.Local__Namespace$
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
                        
                        
                        export namespace namespaces {
                            
                            
                            export type $ = _IFlat.Type$type__reference$external$namespaces$
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
            
            export namespace Namespace__Selection {
                
                
                export namespace namespace {
                    
                    
                    export type $ = _IFlat.Namespace__Selection$namespace$
                }
                
                export namespace arguments {
                    
                    
                    export type $ = _IFlat.Namespace__Selection$arguments$
                }
                
                export namespace tail {
                    
                    
                    export namespace O {
                        
                        
                        export type $ = _IFlat.Namespace__Selection$tail$O$
                    }
                    
                    export type $ = _IFlat.Namespace__Selection$tail$
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
                readonly 'resolved namespaces': _pt.Lookup<_IResolved.Flat.Namespace__2$>
                readonly 'resolved sibling types': _pt.Lookup<_IResolved.Flat.Type$>
                readonly 'type parameters': _IResolved.Flat.Aggregated__Type__Parameters$
            }
        ) => _IResolved.Flat.Function__Declaration$
        
        export type Local__Namespace = <_TAnnotation>(
            $: _IUnresolved.Flat.Local__Namespace$<_TAnnotation>,
            $p: {
                readonly 'parent type parameters': _pt.OptionalValue<_IResolved.Flat.Aggregated__Type__Parameters$>
                readonly 'resolved sibling namespaces': _pt.OptionalValue<_pt.Lookup<_IResolved.Flat.Namespace__2$>>
            }
        ) => _IResolved.Flat.Local__Namespace$
        
        export type Namespace__2 = <_TAnnotation>(
            $: _IUnresolved.Flat.Namespace__2$<_TAnnotation>,
            $p: {
                readonly 'resolved parent sibling namespaces': _pt.OptionalValue<_pt.Lookup<_IResolved.Flat.Namespace__2$>>
            }
        ) => _IResolved.Flat.Namespace__2$
        
        export type Namespace__Selection = <_TAnnotation>(
            $: _IUnresolved.Flat.Namespace__Selection$<_TAnnotation>,
            $p: {
                readonly 'cyclic sibling types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Type$>>
                readonly 'resolved namespaces': _pt.Lookup<_IResolved.Flat.Namespace__2$>
                readonly 'resolved sibling types': _pt.Lookup<_IResolved.Flat.Type$>
                readonly 'type parameters': _IResolved.Flat.Aggregated__Type__Parameters$
            }
        ) => _IResolved.Flat.Namespace__Selection$
        
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
                readonly 'resolved namespaces': _pt.Lookup<_IResolved.Flat.Namespace__2$>
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
        
        export type Namespace__2 = (
            $: _IResolved.Flat.Namespace__2$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Local__Namespace = (
            $: _IResolved.Flat.Local__Namespace$,
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
        
        export type Namespace__2 = (
            $: _IResolved.Flat.Namespace__2$,
        ) => _IResolved.Flat.Local__Namespace$
        
        export type Namespace__Selection = (
            $: _IResolved.Flat.Namespace__Selection$,
        ) => _IResolved.Flat.Namespace__2$
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
        readonly 'Local Namespace': {
            readonly 'Resolve': Resolve.Local__Namespace
            readonly 'Serialize': Serialize.Local__Namespace
        }
        readonly 'Namespace 2': {
            readonly 'Resolve': Resolve.Namespace__2
            readonly 'Serialize': Serialize.Namespace__2
        }
        readonly 'Namespace Selection': {
            readonly 'Resolve': Resolve.Namespace__Selection
            readonly 'Serialize': Serialize.Namespace__Selection
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
            
            export type Address__Selection__Tail$O$step$call$address__function$<_TAnnotation> = _TAnnotation
            
            export type Address__Selection__Tail$O$step$call$type__arguments$<_TAnnotation> = Type__Arguments$<_TAnnotation>
            
            export type Address__Selection__Tail$O$step$call$<_TAnnotation> = {
                readonly 'address function': Address__Selection__Tail$O$step$call$address__function$<_TAnnotation>
                readonly 'type arguments': Address__Selection__Tail$O$step$call$type__arguments$<_TAnnotation>
            }
            
            export type Address__Selection__Tail$O$step$property$group$<_TAnnotation> = _TAnnotation
            
            export type Address__Selection__Tail$O$step$property$property$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Address__Selection__Tail$O$step$property$<_TAnnotation> = {
                readonly 'group': Address__Selection__Tail$O$step$property$group$<_TAnnotation>
                readonly 'property': Address__Selection__Tail$O$step$property$property$<_TAnnotation>
            }
            
            export type Address__Selection__Tail$O$step$<_TAnnotation> = 
                | ['call', Address__Selection__Tail$O$step$call$<_TAnnotation>]
                | ['property', Address__Selection__Tail$O$step$property$<_TAnnotation>]
            
            export type Address__Selection__Tail$O$tail$<_TAnnotation> = Address__Selection__Tail$<_TAnnotation>
            
            export type Address__Selection__Tail$O$<_TAnnotation> = {
                readonly 'step': Address__Selection__Tail$O$step$<_TAnnotation>
                readonly 'tail': Address__Selection__Tail$O$tail$<_TAnnotation>
            }
            
            export type Address__Selection__Tail$<_TAnnotation> = _pt.OptionalValue<Address__Selection__Tail$O$<_TAnnotation>>
            
            export type Variables$D$type$variable__stack2$variable$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Variables$D$type$variable__stack2$<_TAnnotation> = {
                readonly 'variable': Variables$D$type$variable__stack2$variable$<_TAnnotation>
            }
            
            export type Variables$D$type$local$type$<_TAnnotation> = Type__Selection$<_TAnnotation>
            
            export type Variables$D$type$local$initialization$<_TAnnotation> = Initialization$<_TAnnotation>
            
            export type Variables$D$type$local$<_TAnnotation> = {
                readonly 'initialization': Variables$D$type$local$initialization$<_TAnnotation>
                readonly 'type': Variables$D$type$local$type$<_TAnnotation>
            }
            
            export type Variables$D$type$<_TAnnotation> = 
                | ['local', Variables$D$type$local$<_TAnnotation>]
                | ['variable stack2', Variables$D$type$variable__stack2$<_TAnnotation>]
            
            export type Variables$D$<_TAnnotation> = {
                readonly 'type': Variables$D$type$<_TAnnotation>
            }
            
            export type Variables$<_TAnnotation> = _pt.Dictionary<Variables$D$<_TAnnotation>>
            
            export type Address__Selection$variable$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Address__Selection$tail$<_TAnnotation> = Address__Selection__Tail$<_TAnnotation>
            
            export type Address__Selection$<_TAnnotation> = {
                readonly 'tail': Address__Selection$tail$<_TAnnotation>
                readonly 'variable': Address__Selection$variable$<_TAnnotation>
            }
            
            export type Initialization__Or__Selection$initialization$<_TAnnotation> = Initialization$<_TAnnotation>
            
            export type Initialization__Or__Selection$selection$selection$<_TAnnotation> = Address__Selection$<_TAnnotation>
            
            export type Initialization__Or__Selection$selection$string$<_TAnnotation> = _TAnnotation
            
            export type Initialization__Or__Selection$selection$<_TAnnotation> = {
                readonly 'selection': Initialization__Or__Selection$selection$selection$<_TAnnotation>
                readonly 'string': Initialization__Or__Selection$selection$string$<_TAnnotation>
            }
            
            export type Initialization__Or__Selection$<_TAnnotation> = 
                | ['initialization', Initialization__Or__Selection$initialization$<_TAnnotation>]
                | ['selection', Initialization__Or__Selection$selection$<_TAnnotation>]
            
            export type String__Initialization__Or__Selection$initialization$<_TAnnotation> = String__Initialization$<_TAnnotation>
            
            export type String__Initialization__Or__Selection$selection$selection$<_TAnnotation> = Address__Selection$<_TAnnotation>
            
            export type String__Initialization__Or__Selection$selection$string$<_TAnnotation> = _TAnnotation
            
            export type String__Initialization__Or__Selection$selection$<_TAnnotation> = {
                readonly 'selection': String__Initialization__Or__Selection$selection$selection$<_TAnnotation>
                readonly 'string': String__Initialization__Or__Selection$selection$string$<_TAnnotation>
            }
            
            export type String__Initialization__Or__Selection$<_TAnnotation> = 
                | ['initialization', String__Initialization__Or__Selection$initialization$<_TAnnotation>]
                | ['selection', String__Initialization__Or__Selection$selection$<_TAnnotation>]
            
            export type Numerical__Initialization__Or__Selection$initialization$<_TAnnotation> = Numerical__Initialization$<_TAnnotation>
            
            export type Numerical__Initialization__Or__Selection$selection$selection$<_TAnnotation> = Address__Selection$<_TAnnotation>
            
            export type Numerical__Initialization__Or__Selection$selection$number$<_TAnnotation> = _TAnnotation
            
            export type Numerical__Initialization__Or__Selection$selection$<_TAnnotation> = {
                readonly 'number': Numerical__Initialization__Or__Selection$selection$number$<_TAnnotation>
                readonly 'selection': Numerical__Initialization__Or__Selection$selection$selection$<_TAnnotation>
            }
            
            export type Numerical__Initialization__Or__Selection$<_TAnnotation> = 
                | ['initialization', Numerical__Initialization__Or__Selection$initialization$<_TAnnotation>]
                | ['selection', Numerical__Initialization__Or__Selection$selection$<_TAnnotation>]
            
            export type Boolean__Initialization__Or__Selection$initialization$<_TAnnotation> = Boolean__Initialization$<_TAnnotation>
            
            export type Boolean__Initialization__Or__Selection$selection$selection$<_TAnnotation> = Address__Selection$<_TAnnotation>
            
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
            
            export type Initialization$array__literal$A$array$<_TAnnotation> = _TAnnotation
            
            export type Initialization$array__literal$A$initialization$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>
            
            export type Initialization$array__literal$A$<_TAnnotation> = {
                readonly 'array': Initialization$array__literal$A$array$<_TAnnotation>
                readonly 'initialization': Initialization$array__literal$A$initialization$<_TAnnotation>
            }
            
            export type Initialization$array__literal$<_TAnnotation> = _pt.Array<Initialization$array__literal$A$<_TAnnotation>>
            
            export type Initialization$object__literal$group$<_TAnnotation> = _TAnnotation
            
            export type Initialization$object__literal$properties$D$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>
            
            export type Initialization$object__literal$properties$<_TAnnotation> = _pt.Dictionary<Initialization$object__literal$properties$D$<_TAnnotation>>
            
            export type Initialization$object__literal$<_TAnnotation> = {
                readonly 'group': Initialization$object__literal$group$<_TAnnotation>
                readonly 'properties': Initialization$object__literal$properties$<_TAnnotation>
            }
            
            export type Initialization$boolean$boolean$<_TAnnotation> = _TAnnotation
            
            export type Initialization$boolean$x$<_TAnnotation> = Boolean__Initialization$<_TAnnotation>
            
            export type Initialization$boolean$<_TAnnotation> = {
                readonly 'boolean': Initialization$boolean$boolean$<_TAnnotation>
                readonly 'x': Initialization$boolean$x$<_TAnnotation>
            }
            
            export type Initialization$numerical$number$<_TAnnotation> = _TAnnotation
            
            export type Initialization$numerical$x$<_TAnnotation> = Numerical__Initialization$<_TAnnotation>
            
            export type Initialization$numerical$<_TAnnotation> = {
                readonly 'number': Initialization$numerical$number$<_TAnnotation>
                readonly 'x': Initialization$numerical$x$<_TAnnotation>
            }
            
            export type Initialization$string$number$<_TAnnotation> = _TAnnotation
            
            export type Initialization$string$x$<_TAnnotation> = String__Initialization$<_TAnnotation>
            
            export type Initialization$string$<_TAnnotation> = {
                readonly 'number': Initialization$string$number$<_TAnnotation>
                readonly 'x': Initialization$string$x$<_TAnnotation>
            }
            
            export type Initialization$null$null$<_TAnnotation> = _TAnnotation
            
            export type Initialization$null$<_TAnnotation> = {
                readonly 'null': Initialization$null$null$<_TAnnotation>
            }
            
            export type Initialization$<_TAnnotation> = 
                | ['array literal', Initialization$array__literal$<_TAnnotation>]
                | ['boolean', Initialization$boolean$<_TAnnotation>]
                | ['null', Initialization$null$<_TAnnotation>]
                | ['numerical', Initialization$numerical$<_TAnnotation>]
                | ['object literal', Initialization$object__literal$<_TAnnotation>]
                | ['string', Initialization$string$<_TAnnotation>]
            
            export type Block$variables$<_TAnnotation> = Variables$<_TAnnotation>
            
            export type Block$statements$<_TAnnotation> = Statements$<_TAnnotation>
            
            export type Block$<_TAnnotation> = {
                readonly 'statements': Block$statements$<_TAnnotation>
                readonly 'variables': Block$variables$<_TAnnotation>
            }
            
            export type Assign$target$<_TAnnotation> = Address__Selection$<_TAnnotation>
            
            export type Assign$initialization$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>
            
            export type Assign$<_TAnnotation> = {
                readonly 'initialization': Assign$initialization$<_TAnnotation>
                readonly 'target': Assign$target$<_TAnnotation>
            }
            
            export type Statements$A$block$<_TAnnotation> = Block$<_TAnnotation>
            
            export type Statements$A$with$address$<_TAnnotation> = Address__Selection$<_TAnnotation>
            
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
                readonly 'address': Statements$A$with$address$<_TAnnotation>
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
            
            export type Statements$A$while$condition$<_TAnnotation> = Boolean__Initialization__Or__Selection$<_TAnnotation>
            
            export type Statements$A$while$block$<_TAnnotation> = Block$<_TAnnotation>
            
            export type Statements$A$while$<_TAnnotation> = {
                readonly 'block': Statements$A$while$block$<_TAnnotation>
                readonly 'condition': Statements$A$while$condition$<_TAnnotation>
            }
            
            export type Statements$A$<_TAnnotation> = 
                | ['block', Statements$A$block$<_TAnnotation>]
                | ['if', Statements$A$if$<_TAnnotation>]
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
            
            export namespace Address__Selection__Tail {
                
                
                
                export namespace O {
                    
                    
                    
                    export namespace step {
                        
                        
                        
                        export namespace call {
                            
                            
                            
                            export namespace address__function {
                                
                                
                                
                                export type $<_TAnnotation> = _IFlat.Address__Selection__Tail$O$step$call$address__function$<_TAnnotation>
                            }
                            
                            export namespace type__arguments {
                                
                                
                                
                                export type $<_TAnnotation> = _IFlat.Address__Selection__Tail$O$step$call$type__arguments$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Address__Selection__Tail$O$step$call$<_TAnnotation>
                        }
                        
                        export namespace property {
                            
                            
                            
                            export namespace group {
                                
                                
                                
                                export type $<_TAnnotation> = _IFlat.Address__Selection__Tail$O$step$property$group$<_TAnnotation>
                            }
                            
                            export namespace property {
                                
                                
                                
                                export type $<_TAnnotation> = _IFlat.Address__Selection__Tail$O$step$property$property$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Address__Selection__Tail$O$step$property$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Address__Selection__Tail$O$step$<_TAnnotation>
                    }
                    
                    export namespace tail {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Address__Selection__Tail$O$tail$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Address__Selection__Tail$O$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Address__Selection__Tail$<_TAnnotation>
            }
            
            export namespace Variables {
                
                
                
                export namespace D {
                    
                    
                    
                    export namespace _ltype {
                        
                        
                        
                        export namespace variable__stack2 {
                            
                            
                            
                            export namespace variable {
                                
                                
                                
                                export type $<_TAnnotation> = _IFlat.Variables$D$type$variable__stack2$variable$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Variables$D$type$variable__stack2$<_TAnnotation>
                        }
                        
                        export namespace local {
                            
                            
                            
                            export namespace _ltype {
                                
                                
                                
                                export type $<_TAnnotation> = _IFlat.Variables$D$type$local$type$<_TAnnotation>
                            }
                            
                            export namespace initialization {
                                
                                
                                
                                export type $<_TAnnotation> = _IFlat.Variables$D$type$local$initialization$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Variables$D$type$local$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Variables$D$type$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Variables$D$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Variables$<_TAnnotation>
            }
            
            export namespace Address__Selection {
                
                
                
                export namespace variable {
                    
                    
                    
                    export type $<_TAnnotation> = _IFlat.Address__Selection$variable$<_TAnnotation>
                }
                
                export namespace tail {
                    
                    
                    
                    export type $<_TAnnotation> = _IFlat.Address__Selection$tail$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Address__Selection$<_TAnnotation>
            }
            
            export namespace Initialization__Or__Selection {
                
                
                
                export namespace initialization {
                    
                    
                    
                    export type $<_TAnnotation> = _IFlat.Initialization__Or__Selection$initialization$<_TAnnotation>
                }
                
                export namespace selection {
                    
                    
                    
                    export namespace selection {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization__Or__Selection$selection$selection$<_TAnnotation>
                    }
                    
                    export namespace _lstring {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization__Or__Selection$selection$string$<_TAnnotation>
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
                    
                    
                    
                    export namespace A {
                        
                        
                        
                        export namespace array {
                            
                            
                            
                            export type $<_TAnnotation> = _IFlat.Initialization$array__literal$A$array$<_TAnnotation>
                        }
                        
                        export namespace initialization {
                            
                            
                            
                            export type $<_TAnnotation> = _IFlat.Initialization$array__literal$A$initialization$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$array__literal$A$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Initialization$array__literal$<_TAnnotation>
                }
                
                export namespace object__literal {
                    
                    
                    
                    export namespace group {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$object__literal$group$<_TAnnotation>
                    }
                    
                    export namespace properties {
                        
                        
                        
                        export namespace D {
                            
                            
                            
                            export type $<_TAnnotation> = _IFlat.Initialization$object__literal$properties$D$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$object__literal$properties$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Initialization$object__literal$<_TAnnotation>
                }
                
                export namespace _lboolean {
                    
                    
                    
                    export namespace _lboolean {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$boolean$boolean$<_TAnnotation>
                    }
                    
                    export namespace x {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$boolean$x$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Initialization$boolean$<_TAnnotation>
                }
                
                export namespace numerical {
                    
                    
                    
                    export namespace _lnumber {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$numerical$number$<_TAnnotation>
                    }
                    
                    export namespace x {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$numerical$x$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Initialization$numerical$<_TAnnotation>
                }
                
                export namespace _lstring {
                    
                    
                    
                    export namespace _lnumber {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$string$number$<_TAnnotation>
                    }
                    
                    export namespace x {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$string$x$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Initialization$string$<_TAnnotation>
                }
                
                export namespace _lnull {
                    
                    
                    
                    export namespace _lnull {
                        
                        
                        
                        export type $<_TAnnotation> = _IFlat.Initialization$null$null$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Initialization$null$<_TAnnotation>
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
                    
                    export namespace _lwith {
                        
                        
                        
                        export namespace address {
                            
                            
                            
                            export type $<_TAnnotation> = _IFlat.Statements$A$with$address$<_TAnnotation>
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
                readonly 'referent': _Itypesystem.Resolved.Flat.Local__Namespace$types$D$
            }
            
            export type Type__Selection$child__namespace$namespacex$ = {
                readonly 'key': string
                readonly 'referent': _Itypesystem.Resolved.Flat.Local__Namespace$namespaces$D$
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
            
            export type Address__Selection__Tail$O$step$call$address__function$ = _Itypesystem.Resolved.Flat.Type$address__function$
            
            export type Address__Selection__Tail$O$step$call$type__arguments$ = Type__Arguments$
            
            export type Address__Selection__Tail$O$step$call$ = {
                readonly 'address function': Address__Selection__Tail$O$step$call$address__function$
                readonly 'type arguments': Address__Selection__Tail$O$step$call$type__arguments$
            }
            
            export type Address__Selection__Tail$O$step$property$group$ = _Itypesystem.Resolved.Flat.Type$group$
            
            export type Address__Selection__Tail$O$step$property$property$ = {
                readonly 'key': string
                readonly 'referent': _Itypesystem.Resolved.Flat.Type$group$D$
            }
            
            export type Address__Selection__Tail$O$step$property$ = {
                readonly 'group': Address__Selection__Tail$O$step$property$group$
                readonly 'property': Address__Selection__Tail$O$step$property$property$
            }
            
            export type Address__Selection__Tail$O$step$ = 
                | ['call', Address__Selection__Tail$O$step$call$]
                | ['property', Address__Selection__Tail$O$step$property$]
            
            export type Address__Selection__Tail$O$tail$ = Address__Selection__Tail$
            
            export type Address__Selection__Tail$O$ = {
                readonly 'step': Address__Selection__Tail$O$step$
                readonly 'tail': Address__Selection__Tail$O$tail$
            }
            
            export type Address__Selection__Tail$ = _pt.OptionalValue<Address__Selection__Tail$O$>
            
            export type Variables$D$type$variable__stack2$variable$ = {
                readonly 'key': string
                readonly 'referent': Variables$
            }
            
            export type Variables$D$type$variable__stack2$ = {
                readonly 'variable': Variables$D$type$variable__stack2$variable$
            }
            
            export type Variables$D$type$local$type$ = Type__Selection$
            
            export type Variables$D$type$local$initialization$ = Initialization$
            
            export type Variables$D$type$local$ = {
                readonly 'initialization': Variables$D$type$local$initialization$
                readonly 'type': Variables$D$type$local$type$
            }
            
            export type Variables$D$type$ = 
                | ['local', Variables$D$type$local$]
                | ['variable stack2', Variables$D$type$variable__stack2$]
            
            export type Variables$D$ = {
                readonly 'type': Variables$D$type$
            }
            
            export type Variables$ = _pt.Dictionary<Variables$D$>
            
            export type Address__Selection$variable$ = {
                readonly 'key': string
                readonly 'referent': Variables$D$
            }
            
            export type Address__Selection$tail$ = Address__Selection__Tail$
            
            export type Address__Selection$ = {
                readonly 'tail': Address__Selection$tail$
                readonly 'variable': Address__Selection$variable$
            }
            
            export type Initialization__Or__Selection$initialization$ = Initialization$
            
            export type Initialization__Or__Selection$selection$selection$ = Address__Selection$
            
            export type Initialization__Or__Selection$selection$string$ = _Itypesystem.Resolved.Flat.Type$string$
            
            export type Initialization__Or__Selection$selection$ = {
                readonly 'selection': Initialization__Or__Selection$selection$selection$
                readonly 'string': Initialization__Or__Selection$selection$string$
            }
            
            export type Initialization__Or__Selection$ = 
                | ['initialization', Initialization__Or__Selection$initialization$]
                | ['selection', Initialization__Or__Selection$selection$]
            
            export type String__Initialization__Or__Selection$initialization$ = String__Initialization$
            
            export type String__Initialization__Or__Selection$selection$selection$ = Address__Selection$
            
            export type String__Initialization__Or__Selection$selection$string$ = _Itypesystem.Resolved.Flat.Type$string$
            
            export type String__Initialization__Or__Selection$selection$ = {
                readonly 'selection': String__Initialization__Or__Selection$selection$selection$
                readonly 'string': String__Initialization__Or__Selection$selection$string$
            }
            
            export type String__Initialization__Or__Selection$ = 
                | ['initialization', String__Initialization__Or__Selection$initialization$]
                | ['selection', String__Initialization__Or__Selection$selection$]
            
            export type Numerical__Initialization__Or__Selection$initialization$ = Numerical__Initialization$
            
            export type Numerical__Initialization__Or__Selection$selection$selection$ = Address__Selection$
            
            export type Numerical__Initialization__Or__Selection$selection$number$ = _Itypesystem.Resolved.Flat.Type$number$
            
            export type Numerical__Initialization__Or__Selection$selection$ = {
                readonly 'number': Numerical__Initialization__Or__Selection$selection$number$
                readonly 'selection': Numerical__Initialization__Or__Selection$selection$selection$
            }
            
            export type Numerical__Initialization__Or__Selection$ = 
                | ['initialization', Numerical__Initialization__Or__Selection$initialization$]
                | ['selection', Numerical__Initialization__Or__Selection$selection$]
            
            export type Boolean__Initialization__Or__Selection$initialization$ = Boolean__Initialization$
            
            export type Boolean__Initialization__Or__Selection$selection$selection$ = Address__Selection$
            
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
            
            export type Initialization$array__literal$A$array$ = _Itypesystem.Resolved.Flat.Type$array$
            
            export type Initialization$array__literal$A$initialization$ = Initialization__Or__Selection$
            
            export type Initialization$array__literal$A$ = {
                readonly 'array': Initialization$array__literal$A$array$
                readonly 'initialization': Initialization$array__literal$A$initialization$
            }
            
            export type Initialization$array__literal$ = _pt.Array<Initialization$array__literal$A$>
            
            export type Initialization$object__literal$group$ = _Itypesystem.Resolved.Flat.Type$group$
            
            export type Initialization$object__literal$properties$D$ = Initialization__Or__Selection$
            
            export type Initialization$object__literal$properties$ = _pt.Dictionary<Initialization$object__literal$properties$D$>
            
            export type Initialization$object__literal$ = {
                readonly 'group': Initialization$object__literal$group$
                readonly 'properties': Initialization$object__literal$properties$
            }
            
            export type Initialization$boolean$boolean$ = _Itypesystem.Resolved.Flat.Type$boolean$
            
            export type Initialization$boolean$x$ = Boolean__Initialization$
            
            export type Initialization$boolean$ = {
                readonly 'boolean': Initialization$boolean$boolean$
                readonly 'x': Initialization$boolean$x$
            }
            
            export type Initialization$numerical$number$ = _Itypesystem.Resolved.Flat.Type$number$
            
            export type Initialization$numerical$x$ = Numerical__Initialization$
            
            export type Initialization$numerical$ = {
                readonly 'number': Initialization$numerical$number$
                readonly 'x': Initialization$numerical$x$
            }
            
            export type Initialization$string$number$ = _Itypesystem.Resolved.Flat.Type$string$
            
            export type Initialization$string$x$ = String__Initialization$
            
            export type Initialization$string$ = {
                readonly 'number': Initialization$string$number$
                readonly 'x': Initialization$string$x$
            }
            
            export type Initialization$null$null$ = _Itypesystem.Resolved.Flat.Type$null$
            
            export type Initialization$null$ = {
                readonly 'null': Initialization$null$null$
            }
            
            export type Initialization$ = 
                | ['array literal', Initialization$array__literal$]
                | ['boolean', Initialization$boolean$]
                | ['null', Initialization$null$]
                | ['numerical', Initialization$numerical$]
                | ['object literal', Initialization$object__literal$]
                | ['string', Initialization$string$]
            
            export type Block$variables$ = Variables$
            
            export type Block$statements$ = Statements$
            
            export type Block$ = {
                readonly 'statements': Block$statements$
                readonly 'variables': Block$variables$
            }
            
            export type Assign$target$ = Address__Selection$
            
            export type Assign$initialization$ = Initialization__Or__Selection$
            
            export type Assign$ = {
                readonly 'initialization': Assign$initialization$
                readonly 'target': Assign$target$
            }
            
            export type Statements$A$block$ = Block$
            
            export type Statements$A$with$address$ = Address__Selection$
            
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
                readonly 'address': Statements$A$with$address$
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
            
            export type Statements$A$while$condition$ = Boolean__Initialization__Or__Selection$
            
            export type Statements$A$while$block$ = Block$
            
            export type Statements$A$while$ = {
                readonly 'block': Statements$A$while$block$
                readonly 'condition': Statements$A$while$condition$
            }
            
            export type Statements$A$ = 
                | ['block', Statements$A$block$]
                | ['if', Statements$A$if$]
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
            
            export namespace Address__Selection__Tail {
                
                
                
                export namespace O {
                    
                    
                    
                    export namespace step {
                        
                        
                        
                        export namespace call {
                            
                            
                            
                            export namespace address__function {
                                
                                
                                
                                export type $ = _IFlat.Address__Selection__Tail$O$step$call$address__function$
                            }
                            
                            export namespace type__arguments {
                                
                                
                                
                                export type $ = _IFlat.Address__Selection__Tail$O$step$call$type__arguments$
                            }
                            
                            export type $ = _IFlat.Address__Selection__Tail$O$step$call$
                        }
                        
                        export namespace property {
                            
                            
                            
                            export namespace group {
                                
                                
                                
                                export type $ = _IFlat.Address__Selection__Tail$O$step$property$group$
                            }
                            
                            export namespace property {
                                
                                
                                
                                export type $ = _IFlat.Address__Selection__Tail$O$step$property$property$
                            }
                            
                            export type $ = _IFlat.Address__Selection__Tail$O$step$property$
                        }
                        
                        export type $ = _IFlat.Address__Selection__Tail$O$step$
                    }
                    
                    export namespace tail {
                        
                        
                        
                        export type $ = _IFlat.Address__Selection__Tail$O$tail$
                    }
                    
                    export type $ = _IFlat.Address__Selection__Tail$O$
                }
                
                export type $ = _IFlat.Address__Selection__Tail$
            }
            
            export namespace Variables {
                
                
                
                export namespace D {
                    
                    
                    
                    export namespace _ltype {
                        
                        
                        
                        export namespace variable__stack2 {
                            
                            
                            
                            export namespace variable {
                                
                                
                                
                                export type $ = _IFlat.Variables$D$type$variable__stack2$variable$
                            }
                            
                            export type $ = _IFlat.Variables$D$type$variable__stack2$
                        }
                        
                        export namespace local {
                            
                            
                            
                            export namespace _ltype {
                                
                                
                                
                                export type $ = _IFlat.Variables$D$type$local$type$
                            }
                            
                            export namespace initialization {
                                
                                
                                
                                export type $ = _IFlat.Variables$D$type$local$initialization$
                            }
                            
                            export type $ = _IFlat.Variables$D$type$local$
                        }
                        
                        export type $ = _IFlat.Variables$D$type$
                    }
                    
                    export type $ = _IFlat.Variables$D$
                }
                
                export type $ = _IFlat.Variables$
            }
            
            export namespace Address__Selection {
                
                
                
                export namespace variable {
                    
                    
                    
                    export type $ = _IFlat.Address__Selection$variable$
                }
                
                export namespace tail {
                    
                    
                    
                    export type $ = _IFlat.Address__Selection$tail$
                }
                
                export type $ = _IFlat.Address__Selection$
            }
            
            export namespace Initialization__Or__Selection {
                
                
                
                export namespace initialization {
                    
                    
                    
                    export type $ = _IFlat.Initialization__Or__Selection$initialization$
                }
                
                export namespace selection {
                    
                    
                    
                    export namespace selection {
                        
                        
                        
                        export type $ = _IFlat.Initialization__Or__Selection$selection$selection$
                    }
                    
                    export namespace _lstring {
                        
                        
                        
                        export type $ = _IFlat.Initialization__Or__Selection$selection$string$
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
                    
                    
                    
                    export namespace A {
                        
                        
                        
                        export namespace array {
                            
                            
                            
                            export type $ = _IFlat.Initialization$array__literal$A$array$
                        }
                        
                        export namespace initialization {
                            
                            
                            
                            export type $ = _IFlat.Initialization$array__literal$A$initialization$
                        }
                        
                        export type $ = _IFlat.Initialization$array__literal$A$
                    }
                    
                    export type $ = _IFlat.Initialization$array__literal$
                }
                
                export namespace object__literal {
                    
                    
                    
                    export namespace group {
                        
                        
                        
                        export type $ = _IFlat.Initialization$object__literal$group$
                    }
                    
                    export namespace properties {
                        
                        
                        
                        export namespace D {
                            
                            
                            
                            export type $ = _IFlat.Initialization$object__literal$properties$D$
                        }
                        
                        export type $ = _IFlat.Initialization$object__literal$properties$
                    }
                    
                    export type $ = _IFlat.Initialization$object__literal$
                }
                
                export namespace _lboolean {
                    
                    
                    
                    export namespace _lboolean {
                        
                        
                        
                        export type $ = _IFlat.Initialization$boolean$boolean$
                    }
                    
                    export namespace x {
                        
                        
                        
                        export type $ = _IFlat.Initialization$boolean$x$
                    }
                    
                    export type $ = _IFlat.Initialization$boolean$
                }
                
                export namespace numerical {
                    
                    
                    
                    export namespace _lnumber {
                        
                        
                        
                        export type $ = _IFlat.Initialization$numerical$number$
                    }
                    
                    export namespace x {
                        
                        
                        
                        export type $ = _IFlat.Initialization$numerical$x$
                    }
                    
                    export type $ = _IFlat.Initialization$numerical$
                }
                
                export namespace _lstring {
                    
                    
                    
                    export namespace _lnumber {
                        
                        
                        
                        export type $ = _IFlat.Initialization$string$number$
                    }
                    
                    export namespace x {
                        
                        
                        
                        export type $ = _IFlat.Initialization$string$x$
                    }
                    
                    export type $ = _IFlat.Initialization$string$
                }
                
                export namespace _lnull {
                    
                    
                    
                    export namespace _lnull {
                        
                        
                        
                        export type $ = _IFlat.Initialization$null$null$
                    }
                    
                    export type $ = _IFlat.Initialization$null$
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
                    
                    export namespace _lwith {
                        
                        
                        
                        export namespace address {
                            
                            
                            
                            export type $ = _IFlat.Statements$A$with$address$
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
        
        
        export type Address__Selection__Tail = <_TAnnotation>(
            $: _IUnresolved.Flat.Address__Selection__Tail$<_TAnnotation>,
        ) => _IResolved.Flat.Address__Selection__Tail$
        
        export type Address__Selection = <_TAnnotation>(
            $: _IUnresolved.Flat.Address__Selection$<_TAnnotation>,
        ) => _IResolved.Flat.Address__Selection$
        
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
        
        export type Statements = <_TAnnotation>(
            $: _IUnresolved.Flat.Statements$<_TAnnotation>,
        ) => _IResolved.Flat.Statements$
        
        export type String__Initialization__Or__Selection = <_TAnnotation>(
            $: _IUnresolved.Flat.String__Initialization__Or__Selection$<_TAnnotation>,
        ) => _IResolved.Flat.String__Initialization__Or__Selection$
        
        export type String__Initialization = <_TAnnotation>(
            $: _IUnresolved.Flat.String__Initialization$<_TAnnotation>,
        ) => _IResolved.Flat.String__Initialization$
        
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
        
        export type Address__Selection__Tail = (
            $: _IResolved.Flat.Address__Selection__Tail$,
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
        
        export type Address__Selection = (
            $: _IResolved.Flat.Address__Selection$,
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
        readonly 'Address Selection': {
            readonly 'Resolve': Resolve.Address__Selection
            readonly 'Serialize': Serialize.Address__Selection
        }
        readonly 'Address Selection Tail': {
            readonly 'Resolve': Resolve.Address__Selection__Tail
            readonly 'Serialize': Serialize.Address__Selection__Tail
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
            readonly 'Global Type': pareto__lang__data.Resolve.Global__Type
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
            readonly 'Global Type': pareto__lang__data.Serialize.Global__Type
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
            readonly 'Address Selection': proto__implementation.Resolve.Address__Selection
            readonly 'Address Selection Tail': proto__implementation.Resolve.Address__Selection__Tail
            readonly 'Assign': proto__implementation.Resolve.Assign
            readonly 'Block': proto__implementation.Resolve.Block
            readonly 'Boolean Initialization': proto__implementation.Resolve.Boolean__Initialization
            readonly 'Boolean Initialization Or Selection': proto__implementation.Resolve.Boolean__Initialization__Or__Selection
            readonly 'Initialization': proto__implementation.Resolve.Initialization
            readonly 'Initialization Or Selection': proto__implementation.Resolve.Initialization__Or__Selection
            readonly 'Numerical Initialization': proto__implementation.Resolve.Numerical__Initialization
            readonly 'Numerical Initialization Or Selection': proto__implementation.Resolve.Numerical__Initialization__Or__Selection
            readonly 'Root': proto__implementation.Resolve.Root
            readonly 'Source File': proto__implementation.Resolve.Source__File
            readonly 'Statements': proto__implementation.Resolve.Statements
            readonly 'String Initialization': proto__implementation.Resolve.String__Initialization
            readonly 'String Initialization Or Selection': proto__implementation.Resolve.String__Initialization__Or__Selection
            readonly 'Type Arguments': proto__implementation.Resolve.Type__Arguments
            readonly 'Type Selection': proto__implementation.Resolve.Type__Selection
            readonly 'Variables': proto__implementation.Resolve.Variables
        }
        readonly 'Serialize': (
            $: null,
        ) => {
            readonly 'Address Selection': proto__implementation.Serialize.Address__Selection
            readonly 'Address Selection Tail': proto__implementation.Serialize.Address__Selection__Tail
            readonly 'Assign': proto__implementation.Serialize.Assign
            readonly 'Block': proto__implementation.Serialize.Block
            readonly 'Boolean Initialization': proto__implementation.Serialize.Boolean__Initialization
            readonly 'Boolean Initialization Or Selection': proto__implementation.Serialize.Boolean__Initialization__Or__Selection
            readonly 'Initialization': proto__implementation.Serialize.Initialization
            readonly 'Initialization Or Selection': proto__implementation.Serialize.Initialization__Or__Selection
            readonly 'Numerical Initialization': proto__implementation.Serialize.Numerical__Initialization
            readonly 'Numerical Initialization Or Selection': proto__implementation.Serialize.Numerical__Initialization__Or__Selection
            readonly 'Root': proto__implementation.Serialize.Root
            readonly 'Source File': proto__implementation.Serialize.Source__File
            readonly 'Statements': proto__implementation.Serialize.Statements
            readonly 'String Initialization': proto__implementation.Serialize.String__Initialization
            readonly 'String Initialization Or Selection': proto__implementation.Serialize.String__Initialization__Or__Selection
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
            readonly 'Local Namespace': proto__typesystem.Resolve.Local__Namespace
            readonly 'Namespace 2': proto__typesystem.Resolve.Namespace__2
            readonly 'Namespace Selection': proto__typesystem.Resolve.Namespace__Selection
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
            readonly 'Local Namespace': proto__typesystem.Serialize.Local__Namespace
            readonly 'Namespace 2': proto__typesystem.Serialize.Namespace__2
            readonly 'Namespace Selection': proto__typesystem.Serialize.Namespace__Selection
            readonly 'Root': proto__typesystem.Serialize.Root
            readonly 'Type': proto__typesystem.Serialize.Type
            readonly 'Type Arguments': proto__typesystem.Serialize.Type__Arguments
            readonly 'Type Parameters': proto__typesystem.Serialize.Type__Parameters
        }
    }
}