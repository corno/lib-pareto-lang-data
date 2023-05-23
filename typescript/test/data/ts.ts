
import * as _pt from 'pareto-core-types'

namespace _ {
    
    export type Address<T> = { get: () => T, set: ($: T) => void } 
}

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
        
        export type Imports$D$<_TAnnotation> = null
        
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
        
        export type Root$<_TAnnotation> = Model$<_TAnnotation>
    }
    
    export namespace T {
        
        export namespace Atom__Types {
            
            export namespace D {
                
                export type $<_TAnnotation> = Flat.Atom__Types$D$<_TAnnotation>
            }
            
            export type $<_TAnnotation> = Flat.Atom__Types$<_TAnnotation>
        }
        
        export namespace Atom {
            
            export namespace _ltype {
                
                export type $<_TAnnotation> = Flat.Atom$type$<_TAnnotation>
            }
            
            export type $<_TAnnotation> = Flat.Atom$<_TAnnotation>
        }
        
        export namespace TType {
            
            export namespace _ltype {
                
                export namespace array {
                    
                    export namespace _ltype {
                        
                        export type $<_TAnnotation> = Flat.Type$type$array$type$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = Flat.Type$type$array$<_TAnnotation>
                }
                
                export namespace atom {
                    
                    export namespace atom {
                        
                        export type $<_TAnnotation> = Flat.Type$type$atom$atom$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = Flat.Type$type$atom$<_TAnnotation>
                }
                
                export namespace component {
                    
                    export namespace _ltype {
                        
                        export type $<_TAnnotation> = Flat.Type$type$component$type$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = Flat.Type$type$component$<_TAnnotation>
                }
                
                export namespace constraint {
                    
                    export type $<_TAnnotation> = Flat.Type$type$constraint$<_TAnnotation>
                }
                
                export namespace cyclic__reference {
                    
                    export namespace atom {
                        
                        export type $<_TAnnotation> = Flat.Type$type$cyclic__reference$atom$<_TAnnotation>
                    }
                    
                    export namespace sibling {
                        
                        export type $<_TAnnotation> = Flat.Type$type$cyclic__reference$sibling$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = Flat.Type$type$cyclic__reference$<_TAnnotation>
                }
                
                export namespace dictionary {
                    
                    export namespace key {
                        
                        export type $<_TAnnotation> = Flat.Type$type$dictionary$key$<_TAnnotation>
                    }
                    
                    export namespace constraints {
                        
                        export namespace D {
                            
                            export namespace dictionary {
                                
                                export namespace dictionary {
                                    
                                    export type $<_TAnnotation> = Flat.Type$type$dictionary$constraints$D$dictionary$dictionary$<_TAnnotation>
                                }
                                
                                export namespace dense {
                                    
                                    export namespace no {
                                        
                                        export type $<_TAnnotation> = Flat.Type$type$dictionary$constraints$D$dictionary$dense$no$<_TAnnotation>
                                    }
                                    
                                    export namespace yes {
                                        
                                        export type $<_TAnnotation> = Flat.Type$type$dictionary$constraints$D$dictionary$dense$yes$<_TAnnotation>
                                    }
                                    
                                    export type $<_TAnnotation> = Flat.Type$type$dictionary$constraints$D$dictionary$dense$<_TAnnotation>
                                }
                                
                                export type $<_TAnnotation> = Flat.Type$type$dictionary$constraints$D$dictionary$<_TAnnotation>
                            }
                            
                            export namespace lookup {
                                
                                export type $<_TAnnotation> = Flat.Type$type$dictionary$constraints$D$lookup$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = Flat.Type$type$dictionary$constraints$D$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = Flat.Type$type$dictionary$constraints$<_TAnnotation>
                    }
                    
                    export namespace _ltype {
                        
                        export type $<_TAnnotation> = Flat.Type$type$dictionary$type$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = Flat.Type$type$dictionary$<_TAnnotation>
                }
                
                export namespace group {
                    
                    export namespace properties {
                        
                        export namespace D {
                            
                            export namespace _ltype {
                                
                                export type $<_TAnnotation> = Flat.Type$type$group$properties$D$type$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = Flat.Type$type$group$properties$D$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = Flat.Type$type$group$properties$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = Flat.Type$type$group$<_TAnnotation>
                }
                
                export namespace nothing {
                    
                    export type $<_TAnnotation> = Flat.Type$type$nothing$<_TAnnotation>
                }
                
                export namespace optional {
                    
                    export namespace _ltype {
                        
                        export type $<_TAnnotation> = Flat.Type$type$optional$type$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = Flat.Type$type$optional$<_TAnnotation>
                }
                
                export namespace resolved__reference {
                    
                    export namespace atom {
                        
                        export type $<_TAnnotation> = Flat.Type$type$resolved__reference$atom$<_TAnnotation>
                    }
                    
                    export namespace value {
                        
                        export namespace dictionary {
                            
                            export type $<_TAnnotation> = Flat.Type$type$resolved__reference$value$dictionary$<_TAnnotation>
                        }
                        
                        export namespace lookup {
                            
                            export type $<_TAnnotation> = Flat.Type$type$resolved__reference$value$lookup$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = Flat.Type$type$resolved__reference$value$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = Flat.Type$type$resolved__reference$<_TAnnotation>
                }
                
                export namespace state__group {
                    
                    export namespace states {
                        
                        export namespace D {
                            
                            export namespace _ltype {
                                
                                export type $<_TAnnotation> = Flat.Type$type$state__group$states$D$type$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = Flat.Type$type$state__group$states$D$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = Flat.Type$type$state__group$states$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = Flat.Type$type$state__group$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = Flat.Type$type$<_TAnnotation>
            }
            
            export type $<_TAnnotation> = Flat.Type$<_TAnnotation>
        }
        
        export namespace Imports {
            
            export namespace D {
                
                export type $<_TAnnotation> = Flat.Imports$D$<_TAnnotation>
            }
            
            export type $<_TAnnotation> = Flat.Imports$<_TAnnotation>
        }
        
        export namespace Global__Type {
            
            export namespace _ltype {
                
                export type $<_TAnnotation> = Flat.Global__Type$type$<_TAnnotation>
            }
            
            export type $<_TAnnotation> = Flat.Global__Type$<_TAnnotation>
        }
        
        export namespace TType__Selection__Tail {
            
            export namespace step__type {
                
                export namespace dictionary {
                    
                    export namespace dictionary {
                        
                        export type $<_TAnnotation> = Flat.Type__Selection__Tail$step__type$dictionary$dictionary$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = Flat.Type__Selection__Tail$step__type$dictionary$<_TAnnotation>
                }
                
                export namespace optional {
                    
                    export namespace optional {
                        
                        export type $<_TAnnotation> = Flat.Type__Selection__Tail$step__type$optional$optional$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = Flat.Type__Selection__Tail$step__type$optional$<_TAnnotation>
                }
                
                export namespace array {
                    
                    export namespace array {
                        
                        export type $<_TAnnotation> = Flat.Type__Selection__Tail$step__type$array$array$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = Flat.Type__Selection__Tail$step__type$array$<_TAnnotation>
                }
                
                export namespace group {
                    
                    export namespace group {
                        
                        export type $<_TAnnotation> = Flat.Type__Selection__Tail$step__type$group$group$<_TAnnotation>
                    }
                    
                    export namespace property {
                        
                        export type $<_TAnnotation> = Flat.Type__Selection__Tail$step__type$group$property$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = Flat.Type__Selection__Tail$step__type$group$<_TAnnotation>
                }
                
                export namespace state__group {
                    
                    export namespace state__group {
                        
                        export type $<_TAnnotation> = Flat.Type__Selection__Tail$step__type$state__group$state__group$<_TAnnotation>
                    }
                    
                    export namespace state {
                        
                        export type $<_TAnnotation> = Flat.Type__Selection__Tail$step__type$state__group$state$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = Flat.Type__Selection__Tail$step__type$state__group$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = Flat.Type__Selection__Tail$step__type$<_TAnnotation>
            }
            
            export namespace tail {
                
                export namespace O {
                    
                    export type $<_TAnnotation> = Flat.Type__Selection__Tail$tail$O$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = Flat.Type__Selection__Tail$tail$<_TAnnotation>
            }
            
            export type $<_TAnnotation> = Flat.Type__Selection__Tail$<_TAnnotation>
        }
        
        export namespace TType__Selection {
            
            export namespace _limport {
                
                export namespace O {
                    
                    export type $<_TAnnotation> = Flat.Type__Selection$import$O$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = Flat.Type__Selection$import$<_TAnnotation>
            }
            
            export namespace global__type {
                
                export type $<_TAnnotation> = Flat.Type__Selection$global__type$<_TAnnotation>
            }
            
            export namespace tail {
                
                export namespace O {
                    
                    export type $<_TAnnotation> = Flat.Type__Selection$tail$O$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = Flat.Type__Selection$tail$<_TAnnotation>
            }
            
            export type $<_TAnnotation> = Flat.Type__Selection$<_TAnnotation>
        }
        
        export namespace Dictionary__Selection {
            
            export namespace _ltype {
                
                export type $<_TAnnotation> = Flat.Dictionary__Selection$type$<_TAnnotation>
            }
            
            export namespace dictionary {
                
                export type $<_TAnnotation> = Flat.Dictionary__Selection$dictionary$<_TAnnotation>
            }
            
            export type $<_TAnnotation> = Flat.Dictionary__Selection$<_TAnnotation>
        }
        
        export namespace TType__Library {
            
            export namespace imports {
                
                export type $<_TAnnotation> = Flat.Type__Library$imports$<_TAnnotation>
            }
            
            export namespace atom__types {
                
                export type $<_TAnnotation> = Flat.Type__Library$atom__types$<_TAnnotation>
            }
            
            export namespace global__types {
                
                export namespace D {
                    
                    export type $<_TAnnotation> = Flat.Type__Library$global__types$D$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = Flat.Type__Library$global__types$<_TAnnotation>
            }
            
            export type $<_TAnnotation> = Flat.Type__Library$<_TAnnotation>
        }
        
        export namespace Global__Type__Selection {
            
            export namespace resolved__sibling {
                
                export namespace _ltype {
                    
                    export type $<_TAnnotation> = Flat.Global__Type__Selection$resolved__sibling$type$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = Flat.Global__Type__Selection$resolved__sibling$<_TAnnotation>
            }
            
            export namespace _limport {
                
                export namespace library {
                    
                    export type $<_TAnnotation> = Flat.Global__Type__Selection$import$library$<_TAnnotation>
                }
                
                export namespace _ltype {
                    
                    export type $<_TAnnotation> = Flat.Global__Type__Selection$import$type$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = Flat.Global__Type__Selection$import$<_TAnnotation>
            }
            
            export namespace cyclic__sibling {
                
                export namespace _ltype {
                    
                    export type $<_TAnnotation> = Flat.Global__Type__Selection$cyclic__sibling$type$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = Flat.Global__Type__Selection$cyclic__sibling$<_TAnnotation>
            }
            
            export type $<_TAnnotation> = Flat.Global__Type__Selection$<_TAnnotation>
        }
        
        export namespace Model {
            
            export namespace type__library {
                
                export type $<_TAnnotation> = Flat.Model$type__library$<_TAnnotation>
            }
            
            export namespace root {
                
                export type $<_TAnnotation> = Flat.Model$root$<_TAnnotation>
            }
            
            export type $<_TAnnotation> = Flat.Model$<_TAnnotation>
        }
        
        export namespace Root {
            
            export type $<_TAnnotation> = Flat.Root$<_TAnnotation>
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
        
        export type Imports$D$ = null
        
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
        
        export type Root$ = Model$
    }
    
    export namespace T {
        
        export namespace Atom__Types {
            
            export namespace D {
                
                export type $ = Flat.Atom__Types$D$
            }
            
            export type $ = Flat.Atom__Types$
        }
        
        export namespace Atom {
            
            export namespace _ltype {
                
                export type $ = Flat.Atom$type$
            }
            
            export type $ = Flat.Atom$
        }
        
        export namespace TType {
            
            export namespace _ltype {
                
                export namespace array {
                    
                    export namespace _ltype {
                        
                        export type $ = Flat.Type$type$array$type$
                    }
                    
                    export type $ = Flat.Type$type$array$
                }
                
                export namespace atom {
                    
                    export namespace atom {
                        
                        export type $ = Flat.Type$type$atom$atom$
                    }
                    
                    export type $ = Flat.Type$type$atom$
                }
                
                export namespace component {
                    
                    export namespace _ltype {
                        
                        export type $ = Flat.Type$type$component$type$
                    }
                    
                    export type $ = Flat.Type$type$component$
                }
                
                export namespace constraint {
                    
                    export type $ = Flat.Type$type$constraint$
                }
                
                export namespace cyclic__reference {
                    
                    export namespace atom {
                        
                        export type $ = Flat.Type$type$cyclic__reference$atom$
                    }
                    
                    export namespace sibling {
                        
                        export type $ = Flat.Type$type$cyclic__reference$sibling$
                    }
                    
                    export type $ = Flat.Type$type$cyclic__reference$
                }
                
                export namespace dictionary {
                    
                    export namespace key {
                        
                        export type $ = Flat.Type$type$dictionary$key$
                    }
                    
                    export namespace constraints {
                        
                        export namespace D {
                            
                            export namespace dictionary {
                                
                                export namespace dictionary {
                                    
                                    export type $ = Flat.Type$type$dictionary$constraints$D$dictionary$dictionary$
                                }
                                
                                export namespace dense {
                                    
                                    export namespace no {
                                        
                                        export type $ = Flat.Type$type$dictionary$constraints$D$dictionary$dense$no$
                                    }
                                    
                                    export namespace yes {
                                        
                                        export type $ = Flat.Type$type$dictionary$constraints$D$dictionary$dense$yes$
                                    }
                                    
                                    export type $ = Flat.Type$type$dictionary$constraints$D$dictionary$dense$
                                }
                                
                                export type $ = Flat.Type$type$dictionary$constraints$D$dictionary$
                            }
                            
                            export namespace lookup {
                                
                                export type $ = Flat.Type$type$dictionary$constraints$D$lookup$
                            }
                            
                            export type $ = Flat.Type$type$dictionary$constraints$D$
                        }
                        
                        export type $ = Flat.Type$type$dictionary$constraints$
                    }
                    
                    export namespace _ltype {
                        
                        export type $ = Flat.Type$type$dictionary$type$
                    }
                    
                    export type $ = Flat.Type$type$dictionary$
                }
                
                export namespace group {
                    
                    export namespace properties {
                        
                        export namespace D {
                            
                            export namespace _ltype {
                                
                                export type $ = Flat.Type$type$group$properties$D$type$
                            }
                            
                            export type $ = Flat.Type$type$group$properties$D$
                        }
                        
                        export type $ = Flat.Type$type$group$properties$
                    }
                    
                    export type $ = Flat.Type$type$group$
                }
                
                export namespace nothing {
                    
                    export type $ = Flat.Type$type$nothing$
                }
                
                export namespace optional {
                    
                    export namespace _ltype {
                        
                        export type $ = Flat.Type$type$optional$type$
                    }
                    
                    export type $ = Flat.Type$type$optional$
                }
                
                export namespace resolved__reference {
                    
                    export namespace atom {
                        
                        export type $ = Flat.Type$type$resolved__reference$atom$
                    }
                    
                    export namespace value {
                        
                        export namespace dictionary {
                            
                            export type $ = Flat.Type$type$resolved__reference$value$dictionary$
                        }
                        
                        export namespace lookup {
                            
                            export type $ = Flat.Type$type$resolved__reference$value$lookup$
                        }
                        
                        export type $ = Flat.Type$type$resolved__reference$value$
                    }
                    
                    export type $ = Flat.Type$type$resolved__reference$
                }
                
                export namespace state__group {
                    
                    export namespace states {
                        
                        export namespace D {
                            
                            export namespace _ltype {
                                
                                export type $ = Flat.Type$type$state__group$states$D$type$
                            }
                            
                            export type $ = Flat.Type$type$state__group$states$D$
                        }
                        
                        export type $ = Flat.Type$type$state__group$states$
                    }
                    
                    export type $ = Flat.Type$type$state__group$
                }
                
                export type $ = Flat.Type$type$
            }
            
            export type $ = Flat.Type$
        }
        
        export namespace Imports {
            
            export namespace D {
                
                export type $ = Flat.Imports$D$
            }
            
            export type $ = Flat.Imports$
        }
        
        export namespace Global__Type {
            
            export namespace _ltype {
                
                export type $ = Flat.Global__Type$type$
            }
            
            export type $ = Flat.Global__Type$
        }
        
        export namespace TType__Selection__Tail {
            
            export namespace step__type {
                
                export namespace dictionary {
                    
                    export namespace dictionary {
                        
                        export type $ = Flat.Type__Selection__Tail$step__type$dictionary$dictionary$
                    }
                    
                    export type $ = Flat.Type__Selection__Tail$step__type$dictionary$
                }
                
                export namespace optional {
                    
                    export namespace optional {
                        
                        export type $ = Flat.Type__Selection__Tail$step__type$optional$optional$
                    }
                    
                    export type $ = Flat.Type__Selection__Tail$step__type$optional$
                }
                
                export namespace array {
                    
                    export namespace array {
                        
                        export type $ = Flat.Type__Selection__Tail$step__type$array$array$
                    }
                    
                    export type $ = Flat.Type__Selection__Tail$step__type$array$
                }
                
                export namespace group {
                    
                    export namespace group {
                        
                        export type $ = Flat.Type__Selection__Tail$step__type$group$group$
                    }
                    
                    export namespace property {
                        
                        export type $ = Flat.Type__Selection__Tail$step__type$group$property$
                    }
                    
                    export type $ = Flat.Type__Selection__Tail$step__type$group$
                }
                
                export namespace state__group {
                    
                    export namespace state__group {
                        
                        export type $ = Flat.Type__Selection__Tail$step__type$state__group$state__group$
                    }
                    
                    export namespace state {
                        
                        export type $ = Flat.Type__Selection__Tail$step__type$state__group$state$
                    }
                    
                    export type $ = Flat.Type__Selection__Tail$step__type$state__group$
                }
                
                export type $ = Flat.Type__Selection__Tail$step__type$
            }
            
            export namespace tail {
                
                export namespace O {
                    
                    export type $ = Flat.Type__Selection__Tail$tail$O$
                }
                
                export type $ = Flat.Type__Selection__Tail$tail$
            }
            
            export type $ = Flat.Type__Selection__Tail$
        }
        
        export namespace TType__Selection {
            
            export namespace _limport {
                
                export namespace O {
                    
                    export type $ = Flat.Type__Selection$import$O$
                }
                
                export type $ = Flat.Type__Selection$import$
            }
            
            export namespace global__type {
                
                export type $ = Flat.Type__Selection$global__type$
            }
            
            export namespace tail {
                
                export namespace O {
                    
                    export type $ = Flat.Type__Selection$tail$O$
                }
                
                export type $ = Flat.Type__Selection$tail$
            }
            
            export type $ = Flat.Type__Selection$
        }
        
        export namespace Dictionary__Selection {
            
            export namespace _ltype {
                
                export type $ = Flat.Dictionary__Selection$type$
            }
            
            export namespace dictionary {
                
                export type $ = Flat.Dictionary__Selection$dictionary$
            }
            
            export type $ = Flat.Dictionary__Selection$
        }
        
        export namespace TType__Library {
            
            export namespace imports {
                
                export type $ = Flat.Type__Library$imports$
            }
            
            export namespace atom__types {
                
                export type $ = Flat.Type__Library$atom__types$
            }
            
            export namespace global__types {
                
                export namespace D {
                    
                    export type $ = Flat.Type__Library$global__types$D$
                }
                
                export type $ = Flat.Type__Library$global__types$
            }
            
            export type $ = Flat.Type__Library$
        }
        
        export namespace Global__Type__Selection {
            
            export namespace resolved__sibling {
                
                export namespace _ltype {
                    
                    export type $ = Flat.Global__Type__Selection$resolved__sibling$type$
                }
                
                export type $ = Flat.Global__Type__Selection$resolved__sibling$
            }
            
            export namespace _limport {
                
                export namespace library {
                    
                    export type $ = Flat.Global__Type__Selection$import$library$
                }
                
                export namespace _ltype {
                    
                    export type $ = Flat.Global__Type__Selection$import$type$
                }
                
                export type $ = Flat.Global__Type__Selection$import$
            }
            
            export namespace cyclic__sibling {
                
                export namespace _ltype {
                    
                    export type $ = Flat.Global__Type__Selection$cyclic__sibling$type$
                }
                
                export type $ = Flat.Global__Type__Selection$cyclic__sibling$
            }
            
            export type $ = Flat.Global__Type__Selection$
        }
        
        export namespace Model {
            
            export namespace type__library {
                
                export type $ = Flat.Model$type__library$
            }
            
            export namespace root {
                
                export type $ = Flat.Model$root$
            }
            
            export type $ = Flat.Model$
        }
        
        export namespace Root {
            
            export type $ = Flat.Root$
        }
    }
}

export namespace Resolve {
    
    export type Atom__Types<_TAnnotation> = (
        $: Unresolved.Flat.Atom__Types$<_TAnnotation>,
    ) => Resolved.Flat.Atom__Types$
    
    export type Atom<_TAnnotation> = (
        $: Unresolved.Flat.Atom$<_TAnnotation>,
    ) => Resolved.Flat.Atom$
    
    export type Type<_TAnnotation> = (
        $: Unresolved.Flat.Type$<_TAnnotation>,
    ) => Resolved.Flat.Type$
    
    export type Imports<_TAnnotation> = (
        $: Unresolved.Flat.Imports$<_TAnnotation>,
    ) => Resolved.Flat.Imports$
    
    export type Global__Type<_TAnnotation> = (
        $: Unresolved.Flat.Global__Type$<_TAnnotation>,
    ) => Resolved.Flat.Global__Type$
    
    export type Type__Selection__Tail<_TAnnotation> = (
        $: Unresolved.Flat.Type__Selection__Tail$<_TAnnotation>,
    ) => Resolved.Flat.Type__Selection__Tail$
    
    export type Type__Selection<_TAnnotation> = (
        $: Unresolved.Flat.Type__Selection$<_TAnnotation>,
    ) => Resolved.Flat.Type__Selection$
    
    export type Dictionary__Selection<_TAnnotation> = (
        $: Unresolved.Flat.Dictionary__Selection$<_TAnnotation>,
    ) => Resolved.Flat.Dictionary__Selection$
    
    export type Type__Library<_TAnnotation> = (
        $: Unresolved.Flat.Type__Library$<_TAnnotation>,
    ) => Resolved.Flat.Type__Library$
    
    export type Global__Type__Selection<_TAnnotation> = (
        $: Unresolved.Flat.Global__Type__Selection$<_TAnnotation>,
    ) => Resolved.Flat.Global__Type__Selection$
    
    export type Model<_TAnnotation> = (
        $: Unresolved.Flat.Model$<_TAnnotation>,
    ) => Resolved.Flat.Model$
    
    export type Root<_TAnnotation> = (
        $: Unresolved.Flat.Root$<_TAnnotation>,
    ) => Resolved.Flat.Root$
}