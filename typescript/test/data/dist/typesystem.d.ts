import * as _pt from 'pareto-core-types';
export declare namespace pareto__lang__data {
    namespace Unresolved {
        namespace Flat {
            type Atom__Types$D$<_TAnnotation> = null;
            type Atom__Types$<_TAnnotation> = _pt.Dictionary<Atom__Types$D$<_TAnnotation>>;
            type Atom$type$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Atom$<_TAnnotation> = {
                readonly 'type': Atom$type$<_TAnnotation>;
            };
            type Type$type$array$type$<_TAnnotation> = Type$<_TAnnotation>;
            type Type$type$array$<_TAnnotation> = {
                readonly 'type': Type$type$array$type$<_TAnnotation>;
            };
            type Type$type$atom$atom$<_TAnnotation> = Atom$<_TAnnotation>;
            type Type$type$atom$<_TAnnotation> = {
                readonly 'atom': Type$type$atom$atom$<_TAnnotation>;
            };
            type Type$type$component$type$<_TAnnotation> = Global__Type__Selection$<_TAnnotation>;
            type Type$type$component$<_TAnnotation> = {
                readonly 'type': Type$type$component$type$<_TAnnotation>;
            };
            type Type$type$constraint$<_TAnnotation> = Type__Selection$<_TAnnotation>;
            type Type$type$cyclic__reference$atom$<_TAnnotation> = Atom$<_TAnnotation>;
            type Type$type$cyclic__reference$sibling$<_TAnnotation> = Global__Type__Selection$<_TAnnotation>;
            type Type$type$cyclic__reference$<_TAnnotation> = {
                readonly 'atom': Type$type$cyclic__reference$atom$<_TAnnotation>;
                readonly 'sibling': Type$type$cyclic__reference$sibling$<_TAnnotation>;
            };
            type Type$type$dictionary$key$<_TAnnotation> = Atom$<_TAnnotation>;
            type Type$type$dictionary$constraints$D$dictionary$dictionary$<_TAnnotation> = Dictionary__Selection$<_TAnnotation>;
            type Type$type$dictionary$constraints$D$dictionary$dense$no$<_TAnnotation> = null;
            type Type$type$dictionary$constraints$D$dictionary$dense$yes$<_TAnnotation> = null;
            type Type$type$dictionary$constraints$D$dictionary$dense$<_TAnnotation> = ['no', Type$type$dictionary$constraints$D$dictionary$dense$no$<_TAnnotation>] | ['yes', Type$type$dictionary$constraints$D$dictionary$dense$yes$<_TAnnotation>];
            type Type$type$dictionary$constraints$D$dictionary$<_TAnnotation> = {
                readonly 'dense': Type$type$dictionary$constraints$D$dictionary$dense$<_TAnnotation>;
                readonly 'dictionary': Type$type$dictionary$constraints$D$dictionary$dictionary$<_TAnnotation>;
            };
            type Type$type$dictionary$constraints$D$lookup$<_TAnnotation> = Global__Type__Selection$<_TAnnotation>;
            type Type$type$dictionary$constraints$D$<_TAnnotation> = ['dictionary', Type$type$dictionary$constraints$D$dictionary$<_TAnnotation>] | ['lookup', Type$type$dictionary$constraints$D$lookup$<_TAnnotation>];
            type Type$type$dictionary$constraints$<_TAnnotation> = _pt.Dictionary<Type$type$dictionary$constraints$D$<_TAnnotation>>;
            type Type$type$dictionary$type$<_TAnnotation> = Type$<_TAnnotation>;
            type Type$type$dictionary$<_TAnnotation> = {
                readonly 'constraints': Type$type$dictionary$constraints$<_TAnnotation>;
                readonly 'key': Type$type$dictionary$key$<_TAnnotation>;
                readonly 'type': Type$type$dictionary$type$<_TAnnotation>;
            };
            type Type$type$group$properties$D$type$<_TAnnotation> = Type$<_TAnnotation>;
            type Type$type$group$properties$D$<_TAnnotation> = {
                readonly 'type': Type$type$group$properties$D$type$<_TAnnotation>;
            };
            type Type$type$group$properties$<_TAnnotation> = _pt.Dictionary<Type$type$group$properties$D$<_TAnnotation>>;
            type Type$type$group$<_TAnnotation> = {
                readonly 'properties': Type$type$group$properties$<_TAnnotation>;
            };
            type Type$type$nothing$<_TAnnotation> = null;
            type Type$type$optional$type$<_TAnnotation> = Type$<_TAnnotation>;
            type Type$type$optional$<_TAnnotation> = {
                readonly 'type': Type$type$optional$type$<_TAnnotation>;
            };
            type Type$type$resolved__reference$atom$<_TAnnotation> = Atom$<_TAnnotation>;
            type Type$type$resolved__reference$value$dictionary$<_TAnnotation> = Dictionary__Selection$<_TAnnotation>;
            type Type$type$resolved__reference$value$lookup$<_TAnnotation> = Global__Type__Selection$<_TAnnotation>;
            type Type$type$resolved__reference$value$<_TAnnotation> = ['dictionary', Type$type$resolved__reference$value$dictionary$<_TAnnotation>] | ['lookup', Type$type$resolved__reference$value$lookup$<_TAnnotation>];
            type Type$type$resolved__reference$<_TAnnotation> = {
                readonly 'atom': Type$type$resolved__reference$atom$<_TAnnotation>;
                readonly 'value': Type$type$resolved__reference$value$<_TAnnotation>;
            };
            type Type$type$state__group$states$D$type$<_TAnnotation> = Type$<_TAnnotation>;
            type Type$type$state__group$states$D$<_TAnnotation> = {
                readonly 'type': Type$type$state__group$states$D$type$<_TAnnotation>;
            };
            type Type$type$state__group$states$<_TAnnotation> = _pt.Dictionary<Type$type$state__group$states$D$<_TAnnotation>>;
            type Type$type$state__group$<_TAnnotation> = {
                readonly 'states': Type$type$state__group$states$<_TAnnotation>;
            };
            type Type$type$<_TAnnotation> = ['array', Type$type$array$<_TAnnotation>] | ['atom', Type$type$atom$<_TAnnotation>] | ['component', Type$type$component$<_TAnnotation>] | ['constraint', Type$type$constraint$<_TAnnotation>] | ['cyclic reference', Type$type$cyclic__reference$<_TAnnotation>] | ['dictionary', Type$type$dictionary$<_TAnnotation>] | ['group', Type$type$group$<_TAnnotation>] | ['nothing', Type$type$nothing$<_TAnnotation>] | ['optional', Type$type$optional$<_TAnnotation>] | ['resolved reference', Type$type$resolved__reference$<_TAnnotation>] | ['state group', Type$type$state__group$<_TAnnotation>];
            type Type$<_TAnnotation> = {
                readonly 'type': Type$type$<_TAnnotation>;
            };
            type Imports$D$library$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Imports$D$<_TAnnotation> = {
                readonly 'library': Imports$D$library$<_TAnnotation>;
            };
            type Imports$<_TAnnotation> = _pt.Dictionary<Imports$D$<_TAnnotation>>;
            type Global__Type$type$<_TAnnotation> = Type$<_TAnnotation>;
            type Global__Type$<_TAnnotation> = {
                readonly 'type': Global__Type$type$<_TAnnotation>;
            };
            type Type__Selection__Tail$step__type$dictionary$dictionary$<_TAnnotation> = _TAnnotation;
            type Type__Selection__Tail$step__type$dictionary$<_TAnnotation> = {
                readonly 'dictionary': Type__Selection__Tail$step__type$dictionary$dictionary$<_TAnnotation>;
            };
            type Type__Selection__Tail$step__type$optional$optional$<_TAnnotation> = _TAnnotation;
            type Type__Selection__Tail$step__type$optional$<_TAnnotation> = {
                readonly 'optional': Type__Selection__Tail$step__type$optional$optional$<_TAnnotation>;
            };
            type Type__Selection__Tail$step__type$array$array$<_TAnnotation> = _TAnnotation;
            type Type__Selection__Tail$step__type$array$<_TAnnotation> = {
                readonly 'array': Type__Selection__Tail$step__type$array$array$<_TAnnotation>;
            };
            type Type__Selection__Tail$step__type$group$group$<_TAnnotation> = _TAnnotation;
            type Type__Selection__Tail$step__type$group$property$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Type__Selection__Tail$step__type$group$<_TAnnotation> = {
                readonly 'group': Type__Selection__Tail$step__type$group$group$<_TAnnotation>;
                readonly 'property': Type__Selection__Tail$step__type$group$property$<_TAnnotation>;
            };
            type Type__Selection__Tail$step__type$state__group$state__group$<_TAnnotation> = _TAnnotation;
            type Type__Selection__Tail$step__type$state__group$state$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Type__Selection__Tail$step__type$state__group$<_TAnnotation> = {
                readonly 'state': Type__Selection__Tail$step__type$state__group$state$<_TAnnotation>;
                readonly 'state group': Type__Selection__Tail$step__type$state__group$state__group$<_TAnnotation>;
            };
            type Type__Selection__Tail$step__type$<_TAnnotation> = ['array', Type__Selection__Tail$step__type$array$<_TAnnotation>] | ['dictionary', Type__Selection__Tail$step__type$dictionary$<_TAnnotation>] | ['group', Type__Selection__Tail$step__type$group$<_TAnnotation>] | ['optional', Type__Selection__Tail$step__type$optional$<_TAnnotation>] | ['state group', Type__Selection__Tail$step__type$state__group$<_TAnnotation>];
            type Type__Selection__Tail$tail$O$<_TAnnotation> = Type__Selection__Tail$<_TAnnotation>;
            type Type__Selection__Tail$tail$<_TAnnotation> = _pt.OptionalValue<Type__Selection__Tail$tail$O$<_TAnnotation>>;
            type Type__Selection__Tail$<_TAnnotation> = {
                readonly 'step type': Type__Selection__Tail$step__type$<_TAnnotation>;
                readonly 'tail': Type__Selection__Tail$tail$<_TAnnotation>;
            };
            type Type__Selection$import$O$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Type__Selection$import$<_TAnnotation> = _pt.OptionalValue<Type__Selection$import$O$<_TAnnotation>>;
            type Type__Selection$global__type$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Type__Selection$tail$O$<_TAnnotation> = Type__Selection__Tail$<_TAnnotation>;
            type Type__Selection$tail$<_TAnnotation> = _pt.OptionalValue<Type__Selection$tail$O$<_TAnnotation>>;
            type Type__Selection$<_TAnnotation> = {
                readonly 'global type': Type__Selection$global__type$<_TAnnotation>;
                readonly 'import': Type__Selection$import$<_TAnnotation>;
                readonly 'tail': Type__Selection$tail$<_TAnnotation>;
            };
            type Dictionary__Selection$type$<_TAnnotation> = Type__Selection$<_TAnnotation>;
            type Dictionary__Selection$dictionary$<_TAnnotation> = _TAnnotation;
            type Dictionary__Selection$<_TAnnotation> = {
                readonly 'dictionary': Dictionary__Selection$dictionary$<_TAnnotation>;
                readonly 'type': Dictionary__Selection$type$<_TAnnotation>;
            };
            type Type__Library$imports$<_TAnnotation> = Imports$<_TAnnotation>;
            type Type__Library$atom__types$<_TAnnotation> = Atom__Types$<_TAnnotation>;
            type Type__Library$global__types$D$<_TAnnotation> = Global__Type$<_TAnnotation>;
            type Type__Library$global__types$<_TAnnotation> = _pt.Dictionary<Type__Library$global__types$D$<_TAnnotation>>;
            type Type__Library$<_TAnnotation> = {
                readonly 'atom types': Type__Library$atom__types$<_TAnnotation>;
                readonly 'global types': Type__Library$global__types$<_TAnnotation>;
                readonly 'imports': Type__Library$imports$<_TAnnotation>;
            };
            type Global__Type__Selection$resolved__sibling$type$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Global__Type__Selection$resolved__sibling$<_TAnnotation> = {
                readonly 'type': Global__Type__Selection$resolved__sibling$type$<_TAnnotation>;
            };
            type Global__Type__Selection$import$library$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Global__Type__Selection$import$type$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Global__Type__Selection$import$<_TAnnotation> = {
                readonly 'library': Global__Type__Selection$import$library$<_TAnnotation>;
                readonly 'type': Global__Type__Selection$import$type$<_TAnnotation>;
            };
            type Global__Type__Selection$cyclic__sibling$type$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Global__Type__Selection$cyclic__sibling$<_TAnnotation> = {
                readonly 'type': Global__Type__Selection$cyclic__sibling$type$<_TAnnotation>;
            };
            type Global__Type__Selection$<_TAnnotation> = ['cyclic sibling', Global__Type__Selection$cyclic__sibling$<_TAnnotation>] | ['import', Global__Type__Selection$import$<_TAnnotation>] | ['resolved sibling', Global__Type__Selection$resolved__sibling$<_TAnnotation>];
            type Model$type__library$<_TAnnotation> = Type__Library$<_TAnnotation>;
            type Model$root$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Model$<_TAnnotation> = {
                readonly 'root': Model$root$<_TAnnotation>;
                readonly 'type library': Model$type__library$<_TAnnotation>;
            };
            type Project$type__libraries$D$<_TAnnotation> = Type__Library$<_TAnnotation>;
            type Project$type__libraries$<_TAnnotation> = _pt.Dictionary<Project$type__libraries$D$<_TAnnotation>>;
            type Project$<_TAnnotation> = {
                readonly 'type libraries': Project$type__libraries$<_TAnnotation>;
            };
            type Root$<_TAnnotation> = Project$<_TAnnotation>;
        }
        namespace T {
            import _IFlat = Flat;
            namespace Atom__Types {
                namespace D {
                    type $<_TAnnotation> = _IFlat.Atom__Types$D$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Atom__Types$<_TAnnotation>;
            }
            namespace Atom {
                namespace _ltype {
                    type $<_TAnnotation> = _IFlat.Atom$type$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Atom$<_TAnnotation>;
            }
            namespace TType {
                namespace _ltype {
                    namespace array {
                        namespace _ltype {
                            type $<_TAnnotation> = _IFlat.Type$type$array$type$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type$type$array$<_TAnnotation>;
                    }
                    namespace atom {
                        namespace atom {
                            type $<_TAnnotation> = _IFlat.Type$type$atom$atom$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type$type$atom$<_TAnnotation>;
                    }
                    namespace component {
                        namespace _ltype {
                            type $<_TAnnotation> = _IFlat.Type$type$component$type$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type$type$component$<_TAnnotation>;
                    }
                    namespace constraint {
                        type $<_TAnnotation> = _IFlat.Type$type$constraint$<_TAnnotation>;
                    }
                    namespace cyclic__reference {
                        namespace atom {
                            type $<_TAnnotation> = _IFlat.Type$type$cyclic__reference$atom$<_TAnnotation>;
                        }
                        namespace sibling {
                            type $<_TAnnotation> = _IFlat.Type$type$cyclic__reference$sibling$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type$type$cyclic__reference$<_TAnnotation>;
                    }
                    namespace dictionary {
                        namespace key {
                            type $<_TAnnotation> = _IFlat.Type$type$dictionary$key$<_TAnnotation>;
                        }
                        namespace constraints {
                            namespace D {
                                namespace dictionary {
                                    namespace dictionary {
                                        type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$dictionary$dictionary$<_TAnnotation>;
                                    }
                                    namespace dense {
                                        namespace no {
                                            type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$dictionary$dense$no$<_TAnnotation>;
                                        }
                                        namespace yes {
                                            type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$dictionary$dense$yes$<_TAnnotation>;
                                        }
                                        type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$dictionary$dense$<_TAnnotation>;
                                    }
                                    type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$dictionary$<_TAnnotation>;
                                }
                                namespace lookup {
                                    type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$lookup$<_TAnnotation>;
                                }
                                type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$<_TAnnotation>;
                        }
                        namespace _ltype {
                            type $<_TAnnotation> = _IFlat.Type$type$dictionary$type$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type$type$dictionary$<_TAnnotation>;
                    }
                    namespace group {
                        namespace properties {
                            namespace D {
                                namespace _ltype {
                                    type $<_TAnnotation> = _IFlat.Type$type$group$properties$D$type$<_TAnnotation>;
                                }
                                type $<_TAnnotation> = _IFlat.Type$type$group$properties$D$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Type$type$group$properties$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type$type$group$<_TAnnotation>;
                    }
                    namespace nothing {
                        type $<_TAnnotation> = _IFlat.Type$type$nothing$<_TAnnotation>;
                    }
                    namespace optional {
                        namespace _ltype {
                            type $<_TAnnotation> = _IFlat.Type$type$optional$type$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type$type$optional$<_TAnnotation>;
                    }
                    namespace resolved__reference {
                        namespace atom {
                            type $<_TAnnotation> = _IFlat.Type$type$resolved__reference$atom$<_TAnnotation>;
                        }
                        namespace value {
                            namespace dictionary {
                                type $<_TAnnotation> = _IFlat.Type$type$resolved__reference$value$dictionary$<_TAnnotation>;
                            }
                            namespace lookup {
                                type $<_TAnnotation> = _IFlat.Type$type$resolved__reference$value$lookup$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Type$type$resolved__reference$value$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type$type$resolved__reference$<_TAnnotation>;
                    }
                    namespace state__group {
                        namespace states {
                            namespace D {
                                namespace _ltype {
                                    type $<_TAnnotation> = _IFlat.Type$type$state__group$states$D$type$<_TAnnotation>;
                                }
                                type $<_TAnnotation> = _IFlat.Type$type$state__group$states$D$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Type$type$state__group$states$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type$type$state__group$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type$type$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Type$<_TAnnotation>;
            }
            namespace Imports {
                namespace D {
                    namespace library {
                        type $<_TAnnotation> = _IFlat.Imports$D$library$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Imports$D$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Imports$<_TAnnotation>;
            }
            namespace Global__Type {
                namespace _ltype {
                    type $<_TAnnotation> = _IFlat.Global__Type$type$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Global__Type$<_TAnnotation>;
            }
            namespace TType__Selection__Tail {
                namespace step__type {
                    namespace dictionary {
                        namespace dictionary {
                            type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$dictionary$dictionary$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$dictionary$<_TAnnotation>;
                    }
                    namespace optional {
                        namespace optional {
                            type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$optional$optional$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$optional$<_TAnnotation>;
                    }
                    namespace array {
                        namespace array {
                            type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$array$array$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$array$<_TAnnotation>;
                    }
                    namespace group {
                        namespace group {
                            type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$group$group$<_TAnnotation>;
                        }
                        namespace property {
                            type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$group$property$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$group$<_TAnnotation>;
                    }
                    namespace state__group {
                        namespace state__group {
                            type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$state__group$state__group$<_TAnnotation>;
                        }
                        namespace state {
                            type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$state__group$state$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$state__group$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$<_TAnnotation>;
                }
                namespace tail {
                    namespace O {
                        type $<_TAnnotation> = _IFlat.Type__Selection__Tail$tail$O$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type__Selection__Tail$tail$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Type__Selection__Tail$<_TAnnotation>;
            }
            namespace TType__Selection {
                namespace _limport {
                    namespace O {
                        type $<_TAnnotation> = _IFlat.Type__Selection$import$O$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type__Selection$import$<_TAnnotation>;
                }
                namespace global__type {
                    type $<_TAnnotation> = _IFlat.Type__Selection$global__type$<_TAnnotation>;
                }
                namespace tail {
                    namespace O {
                        type $<_TAnnotation> = _IFlat.Type__Selection$tail$O$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type__Selection$tail$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Type__Selection$<_TAnnotation>;
            }
            namespace Dictionary__Selection {
                namespace _ltype {
                    type $<_TAnnotation> = _IFlat.Dictionary__Selection$type$<_TAnnotation>;
                }
                namespace dictionary {
                    type $<_TAnnotation> = _IFlat.Dictionary__Selection$dictionary$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Dictionary__Selection$<_TAnnotation>;
            }
            namespace TType__Library {
                namespace imports {
                    type $<_TAnnotation> = _IFlat.Type__Library$imports$<_TAnnotation>;
                }
                namespace atom__types {
                    type $<_TAnnotation> = _IFlat.Type__Library$atom__types$<_TAnnotation>;
                }
                namespace global__types {
                    namespace D {
                        type $<_TAnnotation> = _IFlat.Type__Library$global__types$D$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type__Library$global__types$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Type__Library$<_TAnnotation>;
            }
            namespace Global__Type__Selection {
                namespace resolved__sibling {
                    namespace _ltype {
                        type $<_TAnnotation> = _IFlat.Global__Type__Selection$resolved__sibling$type$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Global__Type__Selection$resolved__sibling$<_TAnnotation>;
                }
                namespace _limport {
                    namespace library {
                        type $<_TAnnotation> = _IFlat.Global__Type__Selection$import$library$<_TAnnotation>;
                    }
                    namespace _ltype {
                        type $<_TAnnotation> = _IFlat.Global__Type__Selection$import$type$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Global__Type__Selection$import$<_TAnnotation>;
                }
                namespace cyclic__sibling {
                    namespace _ltype {
                        type $<_TAnnotation> = _IFlat.Global__Type__Selection$cyclic__sibling$type$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Global__Type__Selection$cyclic__sibling$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Global__Type__Selection$<_TAnnotation>;
            }
            namespace Model {
                namespace type__library {
                    type $<_TAnnotation> = _IFlat.Model$type__library$<_TAnnotation>;
                }
                namespace root {
                    type $<_TAnnotation> = _IFlat.Model$root$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Model$<_TAnnotation>;
            }
            namespace Project {
                namespace type__libraries {
                    namespace D {
                        type $<_TAnnotation> = _IFlat.Project$type__libraries$D$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Project$type__libraries$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Project$<_TAnnotation>;
            }
            namespace Root {
                type $<_TAnnotation> = _IFlat.Root$<_TAnnotation>;
            }
        }
    }
    namespace Resolved {
        namespace Flat {
            type Atom__Types$D$ = null;
            type Atom__Types$ = _pt.Dictionary<Atom__Types$D$>;
            type Atom$type$ = {
                readonly 'key': string;
                readonly 'referent': Atom__Types$D$;
            };
            type Atom$ = {
                readonly 'type': Atom$type$;
            };
            type Type$type$array$type$ = Type$;
            type Type$type$array$ = {
                readonly 'type': Type$type$array$type$;
            };
            type Type$type$atom$atom$ = Atom$;
            type Type$type$atom$ = {
                readonly 'atom': Type$type$atom$atom$;
            };
            type Type$type$component$type$ = Global__Type__Selection$;
            type Type$type$component$ = {
                readonly 'type': Type$type$component$type$;
            };
            type Type$type$constraint$ = Type__Selection$;
            type Type$type$cyclic__reference$atom$ = Atom$;
            type Type$type$cyclic__reference$sibling$ = Global__Type__Selection$;
            type Type$type$cyclic__reference$ = {
                readonly 'atom': Type$type$cyclic__reference$atom$;
                readonly 'sibling': Type$type$cyclic__reference$sibling$;
            };
            type Type$type$dictionary$key$ = Atom$;
            type Type$type$dictionary$constraints$D$dictionary$dictionary$ = Dictionary__Selection$;
            type Type$type$dictionary$constraints$D$dictionary$dense$no$ = null;
            type Type$type$dictionary$constraints$D$dictionary$dense$yes$ = null;
            type Type$type$dictionary$constraints$D$dictionary$dense$ = ['no', Type$type$dictionary$constraints$D$dictionary$dense$no$] | ['yes', Type$type$dictionary$constraints$D$dictionary$dense$yes$];
            type Type$type$dictionary$constraints$D$dictionary$ = {
                readonly 'dense': Type$type$dictionary$constraints$D$dictionary$dense$;
                readonly 'dictionary': Type$type$dictionary$constraints$D$dictionary$dictionary$;
            };
            type Type$type$dictionary$constraints$D$lookup$ = Global__Type__Selection$;
            type Type$type$dictionary$constraints$D$ = ['dictionary', Type$type$dictionary$constraints$D$dictionary$] | ['lookup', Type$type$dictionary$constraints$D$lookup$];
            type Type$type$dictionary$constraints$ = _pt.Dictionary<Type$type$dictionary$constraints$D$>;
            type Type$type$dictionary$type$ = Type$;
            type Type$type$dictionary$ = {
                readonly 'constraints': Type$type$dictionary$constraints$;
                readonly 'key': Type$type$dictionary$key$;
                readonly 'type': Type$type$dictionary$type$;
            };
            type Type$type$group$properties$D$type$ = Type$;
            type Type$type$group$properties$D$ = {
                readonly 'type': Type$type$group$properties$D$type$;
            };
            type Type$type$group$properties$ = _pt.Dictionary<Type$type$group$properties$D$>;
            type Type$type$group$ = {
                readonly 'properties': Type$type$group$properties$;
            };
            type Type$type$nothing$ = null;
            type Type$type$optional$type$ = Type$;
            type Type$type$optional$ = {
                readonly 'type': Type$type$optional$type$;
            };
            type Type$type$resolved__reference$atom$ = Atom$;
            type Type$type$resolved__reference$value$dictionary$ = Dictionary__Selection$;
            type Type$type$resolved__reference$value$lookup$ = Global__Type__Selection$;
            type Type$type$resolved__reference$value$ = ['dictionary', Type$type$resolved__reference$value$dictionary$] | ['lookup', Type$type$resolved__reference$value$lookup$];
            type Type$type$resolved__reference$ = {
                readonly 'atom': Type$type$resolved__reference$atom$;
                readonly 'value': Type$type$resolved__reference$value$;
            };
            type Type$type$state__group$states$D$type$ = Type$;
            type Type$type$state__group$states$D$ = {
                readonly 'type': Type$type$state__group$states$D$type$;
            };
            type Type$type$state__group$states$ = _pt.Dictionary<Type$type$state__group$states$D$>;
            type Type$type$state__group$ = {
                readonly 'states': Type$type$state__group$states$;
            };
            type Type$type$ = ['array', Type$type$array$] | ['atom', Type$type$atom$] | ['component', Type$type$component$] | ['constraint', Type$type$constraint$] | ['cyclic reference', Type$type$cyclic__reference$] | ['dictionary', Type$type$dictionary$] | ['group', Type$type$group$] | ['nothing', Type$type$nothing$] | ['optional', Type$type$optional$] | ['resolved reference', Type$type$resolved__reference$] | ['state group', Type$type$state__group$];
            type Type$ = {
                readonly 'type': Type$type$;
            };
            type Imports$D$library$ = {
                readonly 'key': string;
                readonly 'referent': Type__Library$;
            };
            type Imports$D$ = {
                readonly 'library': Imports$D$library$;
            };
            type Imports$ = _pt.Dictionary<Imports$D$>;
            type Global__Type$type$ = Type$;
            type Global__Type$ = {
                readonly 'type': Global__Type$type$;
            };
            type Type__Selection__Tail$step__type$dictionary$dictionary$ = Type$type$dictionary$;
            type Type__Selection__Tail$step__type$dictionary$ = {
                readonly 'dictionary': Type__Selection__Tail$step__type$dictionary$dictionary$;
            };
            type Type__Selection__Tail$step__type$optional$optional$ = Type$type$optional$;
            type Type__Selection__Tail$step__type$optional$ = {
                readonly 'optional': Type__Selection__Tail$step__type$optional$optional$;
            };
            type Type__Selection__Tail$step__type$array$array$ = Type$type$array$;
            type Type__Selection__Tail$step__type$array$ = {
                readonly 'array': Type__Selection__Tail$step__type$array$array$;
            };
            type Type__Selection__Tail$step__type$group$group$ = Type$type$group$;
            type Type__Selection__Tail$step__type$group$property$ = {
                readonly 'key': string;
                readonly 'referent': Type$type$group$properties$D$;
            };
            type Type__Selection__Tail$step__type$group$ = {
                readonly 'group': Type__Selection__Tail$step__type$group$group$;
                readonly 'property': Type__Selection__Tail$step__type$group$property$;
            };
            type Type__Selection__Tail$step__type$state__group$state__group$ = Type$type$state__group$;
            type Type__Selection__Tail$step__type$state__group$state$ = {
                readonly 'key': string;
                readonly 'referent': Type$type$state__group$states$D$;
            };
            type Type__Selection__Tail$step__type$state__group$ = {
                readonly 'state': Type__Selection__Tail$step__type$state__group$state$;
                readonly 'state group': Type__Selection__Tail$step__type$state__group$state__group$;
            };
            type Type__Selection__Tail$step__type$ = ['array', Type__Selection__Tail$step__type$array$] | ['dictionary', Type__Selection__Tail$step__type$dictionary$] | ['group', Type__Selection__Tail$step__type$group$] | ['optional', Type__Selection__Tail$step__type$optional$] | ['state group', Type__Selection__Tail$step__type$state__group$];
            type Type__Selection__Tail$tail$O$ = Type__Selection__Tail$;
            type Type__Selection__Tail$tail$ = _pt.OptionalValue<Type__Selection__Tail$tail$O$>;
            type Type__Selection__Tail$ = {
                readonly 'step type': Type__Selection__Tail$step__type$;
                readonly 'tail': Type__Selection__Tail$tail$;
            };
            type Type__Selection$import$O$ = {
                readonly 'key': string;
                readonly 'referent': Imports$D$;
            };
            type Type__Selection$import$ = _pt.OptionalValue<Type__Selection$import$O$>;
            type Type__Selection$global__type$ = {
                readonly 'key': string;
                readonly 'referent': Global__Type$;
            };
            type Type__Selection$tail$O$ = Type__Selection__Tail$;
            type Type__Selection$tail$ = _pt.OptionalValue<Type__Selection$tail$O$>;
            type Type__Selection$ = {
                readonly 'global type': Type__Selection$global__type$;
                readonly 'import': Type__Selection$import$;
                readonly 'tail': Type__Selection$tail$;
            };
            type Dictionary__Selection$type$ = Type__Selection$;
            type Dictionary__Selection$dictionary$ = Type$type$dictionary$;
            type Dictionary__Selection$ = {
                readonly 'dictionary': Dictionary__Selection$dictionary$;
                readonly 'type': Dictionary__Selection$type$;
            };
            type Type__Library$imports$ = Imports$;
            type Type__Library$atom__types$ = Atom__Types$;
            type Type__Library$global__types$D$ = Global__Type$;
            type Type__Library$global__types$ = _pt.Dictionary<Type__Library$global__types$D$>;
            type Type__Library$ = {
                readonly 'atom types': Type__Library$atom__types$;
                readonly 'global types': Type__Library$global__types$;
                readonly 'imports': Type__Library$imports$;
            };
            type Global__Type__Selection$resolved__sibling$type$ = {
                readonly 'key': string;
                readonly 'referent': Global__Type$;
            };
            type Global__Type__Selection$resolved__sibling$ = {
                readonly 'type': Global__Type__Selection$resolved__sibling$type$;
            };
            type Global__Type__Selection$import$library$ = {
                readonly 'key': string;
                readonly 'referent': Imports$D$;
            };
            type Global__Type__Selection$import$type$ = {
                readonly 'key': string;
                readonly 'referent': Type__Library$global__types$D$;
            };
            type Global__Type__Selection$import$ = {
                readonly 'library': Global__Type__Selection$import$library$;
                readonly 'type': Global__Type__Selection$import$type$;
            };
            type Global__Type__Selection$cyclic__sibling$type$ = {
                readonly 'key': string;
                readonly 'referent': _pt.ComputedValue<Global__Type$>;
            };
            type Global__Type__Selection$cyclic__sibling$ = {
                readonly 'type': Global__Type__Selection$cyclic__sibling$type$;
            };
            type Global__Type__Selection$ = ['cyclic sibling', Global__Type__Selection$cyclic__sibling$] | ['import', Global__Type__Selection$import$] | ['resolved sibling', Global__Type__Selection$resolved__sibling$];
            type Model$type__library$ = Type__Library$;
            type Model$root$ = {
                readonly 'key': string;
                readonly 'referent': Type__Library$global__types$D$;
            };
            type Model$ = {
                readonly 'root': Model$root$;
                readonly 'type library': Model$type__library$;
            };
            type Project$type__libraries$D$ = Type__Library$;
            type Project$type__libraries$ = _pt.Dictionary<Project$type__libraries$D$>;
            type Project$ = {
                readonly 'type libraries': Project$type__libraries$;
            };
            type Root$ = Project$;
        }
        namespace T {
            import _IFlat = Flat;
            namespace Atom__Types {
                namespace D {
                    type $ = _IFlat.Atom__Types$D$;
                }
                type $ = _IFlat.Atom__Types$;
            }
            namespace Atom {
                namespace _ltype {
                    type $ = _IFlat.Atom$type$;
                }
                type $ = _IFlat.Atom$;
            }
            namespace TType {
                namespace _ltype {
                    namespace array {
                        namespace _ltype {
                            type $ = _IFlat.Type$type$array$type$;
                        }
                        type $ = _IFlat.Type$type$array$;
                    }
                    namespace atom {
                        namespace atom {
                            type $ = _IFlat.Type$type$atom$atom$;
                        }
                        type $ = _IFlat.Type$type$atom$;
                    }
                    namespace component {
                        namespace _ltype {
                            type $ = _IFlat.Type$type$component$type$;
                        }
                        type $ = _IFlat.Type$type$component$;
                    }
                    namespace constraint {
                        type $ = _IFlat.Type$type$constraint$;
                    }
                    namespace cyclic__reference {
                        namespace atom {
                            type $ = _IFlat.Type$type$cyclic__reference$atom$;
                        }
                        namespace sibling {
                            type $ = _IFlat.Type$type$cyclic__reference$sibling$;
                        }
                        type $ = _IFlat.Type$type$cyclic__reference$;
                    }
                    namespace dictionary {
                        namespace key {
                            type $ = _IFlat.Type$type$dictionary$key$;
                        }
                        namespace constraints {
                            namespace D {
                                namespace dictionary {
                                    namespace dictionary {
                                        type $ = _IFlat.Type$type$dictionary$constraints$D$dictionary$dictionary$;
                                    }
                                    namespace dense {
                                        namespace no {
                                            type $ = _IFlat.Type$type$dictionary$constraints$D$dictionary$dense$no$;
                                        }
                                        namespace yes {
                                            type $ = _IFlat.Type$type$dictionary$constraints$D$dictionary$dense$yes$;
                                        }
                                        type $ = _IFlat.Type$type$dictionary$constraints$D$dictionary$dense$;
                                    }
                                    type $ = _IFlat.Type$type$dictionary$constraints$D$dictionary$;
                                }
                                namespace lookup {
                                    type $ = _IFlat.Type$type$dictionary$constraints$D$lookup$;
                                }
                                type $ = _IFlat.Type$type$dictionary$constraints$D$;
                            }
                            type $ = _IFlat.Type$type$dictionary$constraints$;
                        }
                        namespace _ltype {
                            type $ = _IFlat.Type$type$dictionary$type$;
                        }
                        type $ = _IFlat.Type$type$dictionary$;
                    }
                    namespace group {
                        namespace properties {
                            namespace D {
                                namespace _ltype {
                                    type $ = _IFlat.Type$type$group$properties$D$type$;
                                }
                                type $ = _IFlat.Type$type$group$properties$D$;
                            }
                            type $ = _IFlat.Type$type$group$properties$;
                        }
                        type $ = _IFlat.Type$type$group$;
                    }
                    namespace nothing {
                        type $ = _IFlat.Type$type$nothing$;
                    }
                    namespace optional {
                        namespace _ltype {
                            type $ = _IFlat.Type$type$optional$type$;
                        }
                        type $ = _IFlat.Type$type$optional$;
                    }
                    namespace resolved__reference {
                        namespace atom {
                            type $ = _IFlat.Type$type$resolved__reference$atom$;
                        }
                        namespace value {
                            namespace dictionary {
                                type $ = _IFlat.Type$type$resolved__reference$value$dictionary$;
                            }
                            namespace lookup {
                                type $ = _IFlat.Type$type$resolved__reference$value$lookup$;
                            }
                            type $ = _IFlat.Type$type$resolved__reference$value$;
                        }
                        type $ = _IFlat.Type$type$resolved__reference$;
                    }
                    namespace state__group {
                        namespace states {
                            namespace D {
                                namespace _ltype {
                                    type $ = _IFlat.Type$type$state__group$states$D$type$;
                                }
                                type $ = _IFlat.Type$type$state__group$states$D$;
                            }
                            type $ = _IFlat.Type$type$state__group$states$;
                        }
                        type $ = _IFlat.Type$type$state__group$;
                    }
                    type $ = _IFlat.Type$type$;
                }
                type $ = _IFlat.Type$;
            }
            namespace Imports {
                namespace D {
                    namespace library {
                        type $ = _IFlat.Imports$D$library$;
                    }
                    type $ = _IFlat.Imports$D$;
                }
                type $ = _IFlat.Imports$;
            }
            namespace Global__Type {
                namespace _ltype {
                    type $ = _IFlat.Global__Type$type$;
                }
                type $ = _IFlat.Global__Type$;
            }
            namespace TType__Selection__Tail {
                namespace step__type {
                    namespace dictionary {
                        namespace dictionary {
                            type $ = _IFlat.Type__Selection__Tail$step__type$dictionary$dictionary$;
                        }
                        type $ = _IFlat.Type__Selection__Tail$step__type$dictionary$;
                    }
                    namespace optional {
                        namespace optional {
                            type $ = _IFlat.Type__Selection__Tail$step__type$optional$optional$;
                        }
                        type $ = _IFlat.Type__Selection__Tail$step__type$optional$;
                    }
                    namespace array {
                        namespace array {
                            type $ = _IFlat.Type__Selection__Tail$step__type$array$array$;
                        }
                        type $ = _IFlat.Type__Selection__Tail$step__type$array$;
                    }
                    namespace group {
                        namespace group {
                            type $ = _IFlat.Type__Selection__Tail$step__type$group$group$;
                        }
                        namespace property {
                            type $ = _IFlat.Type__Selection__Tail$step__type$group$property$;
                        }
                        type $ = _IFlat.Type__Selection__Tail$step__type$group$;
                    }
                    namespace state__group {
                        namespace state__group {
                            type $ = _IFlat.Type__Selection__Tail$step__type$state__group$state__group$;
                        }
                        namespace state {
                            type $ = _IFlat.Type__Selection__Tail$step__type$state__group$state$;
                        }
                        type $ = _IFlat.Type__Selection__Tail$step__type$state__group$;
                    }
                    type $ = _IFlat.Type__Selection__Tail$step__type$;
                }
                namespace tail {
                    namespace O {
                        type $ = _IFlat.Type__Selection__Tail$tail$O$;
                    }
                    type $ = _IFlat.Type__Selection__Tail$tail$;
                }
                type $ = _IFlat.Type__Selection__Tail$;
            }
            namespace TType__Selection {
                namespace _limport {
                    namespace O {
                        type $ = _IFlat.Type__Selection$import$O$;
                    }
                    type $ = _IFlat.Type__Selection$import$;
                }
                namespace global__type {
                    type $ = _IFlat.Type__Selection$global__type$;
                }
                namespace tail {
                    namespace O {
                        type $ = _IFlat.Type__Selection$tail$O$;
                    }
                    type $ = _IFlat.Type__Selection$tail$;
                }
                type $ = _IFlat.Type__Selection$;
            }
            namespace Dictionary__Selection {
                namespace _ltype {
                    type $ = _IFlat.Dictionary__Selection$type$;
                }
                namespace dictionary {
                    type $ = _IFlat.Dictionary__Selection$dictionary$;
                }
                type $ = _IFlat.Dictionary__Selection$;
            }
            namespace TType__Library {
                namespace imports {
                    type $ = _IFlat.Type__Library$imports$;
                }
                namespace atom__types {
                    type $ = _IFlat.Type__Library$atom__types$;
                }
                namespace global__types {
                    namespace D {
                        type $ = _IFlat.Type__Library$global__types$D$;
                    }
                    type $ = _IFlat.Type__Library$global__types$;
                }
                type $ = _IFlat.Type__Library$;
            }
            namespace Global__Type__Selection {
                namespace resolved__sibling {
                    namespace _ltype {
                        type $ = _IFlat.Global__Type__Selection$resolved__sibling$type$;
                    }
                    type $ = _IFlat.Global__Type__Selection$resolved__sibling$;
                }
                namespace _limport {
                    namespace library {
                        type $ = _IFlat.Global__Type__Selection$import$library$;
                    }
                    namespace _ltype {
                        type $ = _IFlat.Global__Type__Selection$import$type$;
                    }
                    type $ = _IFlat.Global__Type__Selection$import$;
                }
                namespace cyclic__sibling {
                    namespace _ltype {
                        type $ = _IFlat.Global__Type__Selection$cyclic__sibling$type$;
                    }
                    type $ = _IFlat.Global__Type__Selection$cyclic__sibling$;
                }
                type $ = _IFlat.Global__Type__Selection$;
            }
            namespace Model {
                namespace type__library {
                    type $ = _IFlat.Model$type__library$;
                }
                namespace root {
                    type $ = _IFlat.Model$root$;
                }
                type $ = _IFlat.Model$;
            }
            namespace Project {
                namespace type__libraries {
                    namespace D {
                        type $ = _IFlat.Project$type__libraries$D$;
                    }
                    type $ = _IFlat.Project$type__libraries$;
                }
                type $ = _IFlat.Project$;
            }
            namespace Root {
                type $ = _IFlat.Root$;
            }
        }
    }
    namespace Resolve {
        import _IResolved = Resolved;
        import _IUnresolved = Unresolved;
        type Atom__Types = <_TAnnotation>($: _IUnresolved.Flat.Atom__Types$<_TAnnotation>) => _IResolved.Flat.Atom__Types$;
        type Atom = <_TAnnotation>($: _IUnresolved.Flat.Atom$<_TAnnotation>, $p: {
            readonly 'atom types': _IResolved.Flat.Atom__Types$;
        }) => _IResolved.Flat.Atom$;
        type Dictionary__Selection = <_TAnnotation>($: _IUnresolved.Flat.Dictionary__Selection$<_TAnnotation>, $p: {
            readonly 'cyclic sibling global types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Global__Type$>>;
            readonly 'imports': _IResolved.Flat.Imports$;
            readonly 'sibling global types': _pt.Lookup<_IResolved.Flat.Global__Type$>;
        }) => _IResolved.Flat.Dictionary__Selection$;
        type Global__Type__Selection = <_TAnnotation>($: _IUnresolved.Flat.Global__Type__Selection$<_TAnnotation>, $p: {
            readonly 'cyclic sibling global types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Global__Type$>>;
            readonly 'imports': _IResolved.Flat.Imports$;
            readonly 'sibling global types': _pt.Lookup<_IResolved.Flat.Global__Type$>;
        }) => _IResolved.Flat.Global__Type__Selection$;
        type Global__Type = <_TAnnotation>($: _IUnresolved.Flat.Global__Type$<_TAnnotation>) => _IResolved.Flat.Global__Type$;
        type Imports = <_TAnnotation>($: _IUnresolved.Flat.Imports$<_TAnnotation>) => _IResolved.Flat.Imports$;
        type Model = <_TAnnotation>($: _IUnresolved.Flat.Model$<_TAnnotation>, $p: {
            readonly 'external type libraries': _pt.Lookup<_IResolved.Flat.Type__Library$>;
        }) => _IResolved.Flat.Model$;
        type Project = <_TAnnotation>($: _IUnresolved.Flat.Project$<_TAnnotation>) => _IResolved.Flat.Project$;
        type Root = <_TAnnotation>($: _IUnresolved.Flat.Root$<_TAnnotation>) => _IResolved.Flat.Root$;
        type Type__Library = <_TAnnotation>($: _IUnresolved.Flat.Type__Library$<_TAnnotation>, $p: {
            readonly 'external type libraries': _pt.Lookup<_IResolved.Flat.Type__Library$>;
        }) => _IResolved.Flat.Type__Library$;
        type Type__Selection__Tail = <_TAnnotation>($: _IUnresolved.Flat.Type__Selection__Tail$<_TAnnotation>, $p: {
            readonly 'context': _IResolved.Flat.Type$;
        }) => _IResolved.Flat.Type__Selection__Tail$;
        type Type__Selection = <_TAnnotation>($: _IUnresolved.Flat.Type__Selection$<_TAnnotation>, $p: {
            readonly 'imports': _IResolved.Flat.Imports$;
            readonly 'sibling global types': _pt.Lookup<_IResolved.Flat.Global__Type$>;
        }) => _IResolved.Flat.Type__Selection$;
        type Type = <_TAnnotation>($: _IUnresolved.Flat.Type$<_TAnnotation>, $p: {
            readonly 'atom types': _IResolved.Flat.Atom__Types$;
            readonly 'cyclic sibling global types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Global__Type$>>;
            readonly 'imports': _IResolved.Flat.Imports$;
            readonly 'sibling global types': _pt.Lookup<_IResolved.Flat.Global__Type$>;
        }) => _IResolved.Flat.Type$;
    }
    namespace Serialize {
        import _IResolved = Resolved;
        type Atom__Types = ($: _IResolved.Flat.Atom__Types$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Atom = ($: _IResolved.Flat.Atom$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Type = ($: _IResolved.Flat.Type$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Imports = ($: _IResolved.Flat.Imports$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Global__Type = ($: _IResolved.Flat.Global__Type$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Type__Selection__Tail = ($: _IResolved.Flat.Type__Selection__Tail$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Type__Selection = ($: _IResolved.Flat.Type__Selection$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Dictionary__Selection = ($: _IResolved.Flat.Dictionary__Selection$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Type__Library = ($: _IResolved.Flat.Type__Library$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Global__Type__Selection = ($: _IResolved.Flat.Global__Type__Selection$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Model = ($: _IResolved.Flat.Model$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Project = ($: _IResolved.Flat.Project$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Root = ($: _IResolved.Flat.Root$, $p: {
            readonly 'out': boolean;
        }) => void;
    }
    namespace Select {
        import _IResolved = Resolved;
        type Type__Selection__Tail = ($: _IResolved.Flat.Type__Selection__Tail$) => _IResolved.Flat.Type$;
        type Type__Selection = ($: _IResolved.Flat.Type__Selection$) => _IResolved.Flat.Type$;
    }
    type _$ = ($: null) => {
        readonly 'Atom': {
            readonly 'Resolve': Resolve.Atom;
            readonly 'Serialize': Serialize.Atom;
        };
        readonly 'Atom Types': {
            readonly 'Resolve': Resolve.Atom__Types;
            readonly 'Serialize': Serialize.Atom__Types;
        };
        readonly 'Dictionary Selection': {
            readonly 'Resolve': Resolve.Dictionary__Selection;
            readonly 'Serialize': Serialize.Dictionary__Selection;
        };
        readonly 'Global Type': {
            readonly 'Resolve': Resolve.Global__Type;
            readonly 'Serialize': Serialize.Global__Type;
        };
        readonly 'Global Type Selection': {
            readonly 'Resolve': Resolve.Global__Type__Selection;
            readonly 'Serialize': Serialize.Global__Type__Selection;
        };
        readonly 'Imports': {
            readonly 'Resolve': Resolve.Imports;
            readonly 'Serialize': Serialize.Imports;
        };
        readonly 'Model': {
            readonly 'Resolve': Resolve.Model;
            readonly 'Serialize': Serialize.Model;
        };
        readonly 'Project': {
            readonly 'Resolve': Resolve.Project;
            readonly 'Serialize': Serialize.Project;
        };
        readonly 'Root': {
            readonly 'Resolve': Resolve.Root;
            readonly 'Serialize': Serialize.Root;
        };
        readonly 'Type': {
            readonly 'Resolve': Resolve.Type;
            readonly 'Serialize': Serialize.Type;
        };
        readonly 'Type Library': {
            readonly 'Resolve': Resolve.Type__Library;
            readonly 'Serialize': Serialize.Type__Library;
        };
        readonly 'Type Selection': {
            readonly 'Resolve': Resolve.Type__Selection;
            readonly 'Serialize': Serialize.Type__Selection;
        };
        readonly 'Type Selection Tail': {
            readonly 'Resolve': Resolve.Type__Selection__Tail;
            readonly 'Serialize': Serialize.Type__Selection__Tail;
        };
    };
}
export declare namespace proto__typesystem {
    namespace Unresolved {
        namespace Flat {
            type Aggregated__Type__Parameters$D$<_TAnnotation> = null;
            type Aggregated__Type__Parameters$<_TAnnotation> = _pt.Dictionary<Aggregated__Type__Parameters$D$<_TAnnotation>>;
            type Type__Parameters$local$D$<_TAnnotation> = null;
            type Type__Parameters$local$<_TAnnotation> = _pt.Dictionary<Type__Parameters$local$D$<_TAnnotation>>;
            type Type__Parameters$aggregated$<_TAnnotation> = Aggregated__Type__Parameters$<_TAnnotation>;
            type Type__Parameters$<_TAnnotation> = {
                readonly 'aggregated': Type__Parameters$aggregated$<_TAnnotation>;
                readonly 'local': Type__Parameters$local$<_TAnnotation>;
            };
            type Function__Declaration$type__parameters$<_TAnnotation> = Type__Parameters$<_TAnnotation>;
            type Function__Declaration$context$<_TAnnotation> = Type$<_TAnnotation>;
            type Function__Declaration$parameters$D$<_TAnnotation> = Type$<_TAnnotation>;
            type Function__Declaration$parameters$<_TAnnotation> = _pt.Dictionary<Function__Declaration$parameters$D$<_TAnnotation>>;
            type Function__Declaration$<_TAnnotation> = {
                readonly 'context': Function__Declaration$context$<_TAnnotation>;
                readonly 'parameters': Function__Declaration$parameters$<_TAnnotation>;
                readonly 'type parameters': Function__Declaration$type__parameters$<_TAnnotation>;
            };
            type Namespace__2$parent__sibling$namespace$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Namespace__2$parent__sibling$<_TAnnotation> = {
                readonly 'namespace': Namespace__2$parent__sibling$namespace$<_TAnnotation>;
            };
            type Namespace__2$local$<_TAnnotation> = Local__Namespace$<_TAnnotation>;
            type Namespace__2$<_TAnnotation> = ['local', Namespace__2$local$<_TAnnotation>] | ['parent sibling', Namespace__2$parent__sibling$<_TAnnotation>];
            type Local__Namespace$namespaces$D$<_TAnnotation> = Namespace__2$<_TAnnotation>;
            type Local__Namespace$namespaces$<_TAnnotation> = _pt.Dictionary<Local__Namespace$namespaces$D$<_TAnnotation>>;
            type Local__Namespace$parameters$<_TAnnotation> = Type__Parameters$<_TAnnotation>;
            type Local__Namespace$types$D$<_TAnnotation> = Type$<_TAnnotation>;
            type Local__Namespace$types$<_TAnnotation> = _pt.Dictionary<Local__Namespace$types$D$<_TAnnotation>>;
            type Local__Namespace$<_TAnnotation> = {
                readonly 'namespaces': Local__Namespace$namespaces$<_TAnnotation>;
                readonly 'parameters': Local__Namespace$parameters$<_TAnnotation>;
                readonly 'types': Local__Namespace$types$<_TAnnotation>;
            };
            type Type$address__function$declaration$<_TAnnotation> = Function__Declaration$<_TAnnotation>;
            type Type$address__function$return__type$<_TAnnotation> = Type$<_TAnnotation>;
            type Type$address__function$<_TAnnotation> = {
                readonly 'declaration': Type$address__function$declaration$<_TAnnotation>;
                readonly 'return type': Type$address__function$return__type$<_TAnnotation>;
            };
            type Type$array$<_TAnnotation> = Type$<_TAnnotation>;
            type Type$boolean$<_TAnnotation> = null;
            type Type$computed$<_TAnnotation> = Type$<_TAnnotation>;
            type Type$dictionary$<_TAnnotation> = Type$<_TAnnotation>;
            type Type$group$D$type$<_TAnnotation> = Type$<_TAnnotation>;
            type Type$group$D$mutable$O$<_TAnnotation> = null;
            type Type$group$D$mutable$<_TAnnotation> = _pt.OptionalValue<Type$group$D$mutable$O$<_TAnnotation>>;
            type Type$group$D$<_TAnnotation> = {
                readonly 'mutable': Type$group$D$mutable$<_TAnnotation>;
                readonly 'type': Type$group$D$type$<_TAnnotation>;
            };
            type Type$group$<_TAnnotation> = _pt.Dictionary<Type$group$D$<_TAnnotation>>;
            type Type$null$<_TAnnotation> = null;
            type Type$number$<_TAnnotation> = null;
            type Type$optional$<_TAnnotation> = Type$<_TAnnotation>;
            type Type$procedure$declaration$<_TAnnotation> = Function__Declaration$<_TAnnotation>;
            type Type$procedure$<_TAnnotation> = {
                readonly 'declaration': Type$procedure$declaration$<_TAnnotation>;
            };
            type Type$string$<_TAnnotation> = null;
            type Type$tagged__union$D$<_TAnnotation> = Type$<_TAnnotation>;
            type Type$tagged__union$<_TAnnotation> = _pt.Dictionary<Type$tagged__union$D$<_TAnnotation>>;
            type Type$type__parameter$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Type$type__reference$external$namespaces$<_TAnnotation> = Namespace__Selection$<_TAnnotation>;
            type Type$type__reference$external$type$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Type$type__reference$external$<_TAnnotation> = {
                readonly 'namespaces': Type$type__reference$external$namespaces$<_TAnnotation>;
                readonly 'type': Type$type__reference$external$type$<_TAnnotation>;
            };
            type Type$type__reference$sibling$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Type$type__reference$cyclic__sibling$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Type$type__reference$<_TAnnotation> = ['cyclic sibling', Type$type__reference$cyclic__sibling$<_TAnnotation>] | ['external', Type$type__reference$external$<_TAnnotation>] | ['sibling', Type$type__reference$sibling$<_TAnnotation>];
            type Type$value__function$declaration$<_TAnnotation> = Function__Declaration$<_TAnnotation>;
            type Type$value__function$return__type$<_TAnnotation> = Type$<_TAnnotation>;
            type Type$value__function$<_TAnnotation> = {
                readonly 'declaration': Type$value__function$declaration$<_TAnnotation>;
                readonly 'return type': Type$value__function$return__type$<_TAnnotation>;
            };
            type Type$<_TAnnotation> = ['address function', Type$address__function$<_TAnnotation>] | ['array', Type$array$<_TAnnotation>] | ['boolean', Type$boolean$<_TAnnotation>] | ['computed', Type$computed$<_TAnnotation>] | ['dictionary', Type$dictionary$<_TAnnotation>] | ['group', Type$group$<_TAnnotation>] | ['null', Type$null$<_TAnnotation>] | ['number', Type$number$<_TAnnotation>] | ['optional', Type$optional$<_TAnnotation>] | ['procedure', Type$procedure$<_TAnnotation>] | ['string', Type$string$<_TAnnotation>] | ['tagged union', Type$tagged__union$<_TAnnotation>] | ['type parameter', Type$type__parameter$<_TAnnotation>] | ['type reference', Type$type__reference$<_TAnnotation>] | ['value function', Type$value__function$<_TAnnotation>];
            type Type__Arguments$D$type$<_TAnnotation> = Type$<_TAnnotation>;
            type Type__Arguments$D$<_TAnnotation> = {
                readonly 'type': Type__Arguments$D$type$<_TAnnotation>;
            };
            type Type__Arguments$<_TAnnotation> = _pt.Dictionary<Type__Arguments$D$<_TAnnotation>>;
            type Namespace__Selection$namespace$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Namespace__Selection$arguments$<_TAnnotation> = Type__Arguments$<_TAnnotation>;
            type Namespace__Selection$tail$O$<_TAnnotation> = Namespace__Selection$<_TAnnotation>;
            type Namespace__Selection$tail$<_TAnnotation> = _pt.OptionalValue<Namespace__Selection$tail$O$<_TAnnotation>>;
            type Namespace__Selection$<_TAnnotation> = {
                readonly 'arguments': Namespace__Selection$arguments$<_TAnnotation>;
                readonly 'namespace': Namespace__Selection$namespace$<_TAnnotation>;
                readonly 'tail': Namespace__Selection$tail$<_TAnnotation>;
            };
            type Root$<_TAnnotation> = Local__Namespace$<_TAnnotation>;
        }
        namespace T {
            import _IFlat = Flat;
            namespace Aggregated__Type__Parameters {
                namespace D {
                    type $<_TAnnotation> = _IFlat.Aggregated__Type__Parameters$D$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Aggregated__Type__Parameters$<_TAnnotation>;
            }
            namespace TType__Parameters {
                namespace local {
                    namespace D {
                        type $<_TAnnotation> = _IFlat.Type__Parameters$local$D$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type__Parameters$local$<_TAnnotation>;
                }
                namespace aggregated {
                    type $<_TAnnotation> = _IFlat.Type__Parameters$aggregated$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Type__Parameters$<_TAnnotation>;
            }
            namespace Function__Declaration {
                namespace type__parameters {
                    type $<_TAnnotation> = _IFlat.Function__Declaration$type__parameters$<_TAnnotation>;
                }
                namespace context {
                    type $<_TAnnotation> = _IFlat.Function__Declaration$context$<_TAnnotation>;
                }
                namespace parameters {
                    namespace D {
                        type $<_TAnnotation> = _IFlat.Function__Declaration$parameters$D$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Function__Declaration$parameters$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Function__Declaration$<_TAnnotation>;
            }
            namespace Namespace__2 {
                namespace parent__sibling {
                    namespace namespace {
                        type $<_TAnnotation> = _IFlat.Namespace__2$parent__sibling$namespace$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Namespace__2$parent__sibling$<_TAnnotation>;
                }
                namespace local {
                    type $<_TAnnotation> = _IFlat.Namespace__2$local$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Namespace__2$<_TAnnotation>;
            }
            namespace Local__Namespace {
                namespace namespaces {
                    namespace D {
                        type $<_TAnnotation> = _IFlat.Local__Namespace$namespaces$D$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Local__Namespace$namespaces$<_TAnnotation>;
                }
                namespace parameters {
                    type $<_TAnnotation> = _IFlat.Local__Namespace$parameters$<_TAnnotation>;
                }
                namespace types {
                    namespace D {
                        type $<_TAnnotation> = _IFlat.Local__Namespace$types$D$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Local__Namespace$types$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Local__Namespace$<_TAnnotation>;
            }
            namespace TType {
                namespace address__function {
                    namespace declaration {
                        type $<_TAnnotation> = _IFlat.Type$address__function$declaration$<_TAnnotation>;
                    }
                    namespace return__type {
                        type $<_TAnnotation> = _IFlat.Type$address__function$return__type$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type$address__function$<_TAnnotation>;
                }
                namespace array {
                    type $<_TAnnotation> = _IFlat.Type$array$<_TAnnotation>;
                }
                namespace _lboolean {
                    type $<_TAnnotation> = _IFlat.Type$boolean$<_TAnnotation>;
                }
                namespace computed {
                    type $<_TAnnotation> = _IFlat.Type$computed$<_TAnnotation>;
                }
                namespace dictionary {
                    type $<_TAnnotation> = _IFlat.Type$dictionary$<_TAnnotation>;
                }
                namespace group {
                    namespace D {
                        namespace _ltype {
                            type $<_TAnnotation> = _IFlat.Type$group$D$type$<_TAnnotation>;
                        }
                        namespace mutable {
                            namespace O {
                                type $<_TAnnotation> = _IFlat.Type$group$D$mutable$O$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Type$group$D$mutable$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type$group$D$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type$group$<_TAnnotation>;
                }
                namespace _lnull {
                    type $<_TAnnotation> = _IFlat.Type$null$<_TAnnotation>;
                }
                namespace _lnumber {
                    type $<_TAnnotation> = _IFlat.Type$number$<_TAnnotation>;
                }
                namespace optional {
                    type $<_TAnnotation> = _IFlat.Type$optional$<_TAnnotation>;
                }
                namespace procedure {
                    namespace declaration {
                        type $<_TAnnotation> = _IFlat.Type$procedure$declaration$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type$procedure$<_TAnnotation>;
                }
                namespace _lstring {
                    type $<_TAnnotation> = _IFlat.Type$string$<_TAnnotation>;
                }
                namespace tagged__union {
                    namespace D {
                        type $<_TAnnotation> = _IFlat.Type$tagged__union$D$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type$tagged__union$<_TAnnotation>;
                }
                namespace type__parameter {
                    type $<_TAnnotation> = _IFlat.Type$type__parameter$<_TAnnotation>;
                }
                namespace type__reference {
                    namespace external {
                        namespace namespaces {
                            type $<_TAnnotation> = _IFlat.Type$type__reference$external$namespaces$<_TAnnotation>;
                        }
                        namespace _ltype {
                            type $<_TAnnotation> = _IFlat.Type$type__reference$external$type$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Type$type__reference$external$<_TAnnotation>;
                    }
                    namespace sibling {
                        type $<_TAnnotation> = _IFlat.Type$type__reference$sibling$<_TAnnotation>;
                    }
                    namespace cyclic__sibling {
                        type $<_TAnnotation> = _IFlat.Type$type__reference$cyclic__sibling$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type$type__reference$<_TAnnotation>;
                }
                namespace value__function {
                    namespace declaration {
                        type $<_TAnnotation> = _IFlat.Type$value__function$declaration$<_TAnnotation>;
                    }
                    namespace return__type {
                        type $<_TAnnotation> = _IFlat.Type$value__function$return__type$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type$value__function$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Type$<_TAnnotation>;
            }
            namespace TType__Arguments {
                namespace D {
                    namespace _ltype {
                        type $<_TAnnotation> = _IFlat.Type__Arguments$D$type$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type__Arguments$D$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Type__Arguments$<_TAnnotation>;
            }
            namespace Namespace__Selection {
                namespace namespace {
                    type $<_TAnnotation> = _IFlat.Namespace__Selection$namespace$<_TAnnotation>;
                }
                namespace arguments {
                    type $<_TAnnotation> = _IFlat.Namespace__Selection$arguments$<_TAnnotation>;
                }
                namespace tail {
                    namespace O {
                        type $<_TAnnotation> = _IFlat.Namespace__Selection$tail$O$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Namespace__Selection$tail$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Namespace__Selection$<_TAnnotation>;
            }
            namespace Root {
                type $<_TAnnotation> = _IFlat.Root$<_TAnnotation>;
            }
        }
    }
    namespace Resolved {
        namespace Flat {
            type Aggregated__Type__Parameters$D$ = null;
            type Aggregated__Type__Parameters$ = _pt.Dictionary<Aggregated__Type__Parameters$D$>;
            type Type__Parameters$local$D$ = null;
            type Type__Parameters$local$ = _pt.Dictionary<Type__Parameters$local$D$>;
            type Type__Parameters$aggregated$ = Aggregated__Type__Parameters$;
            type Type__Parameters$ = {
                readonly 'aggregated': Type__Parameters$aggregated$;
                readonly 'local': Type__Parameters$local$;
            };
            type Function__Declaration$type__parameters$ = Type__Parameters$;
            type Function__Declaration$context$ = Type$;
            type Function__Declaration$parameters$D$ = Type$;
            type Function__Declaration$parameters$ = _pt.Dictionary<Function__Declaration$parameters$D$>;
            type Function__Declaration$ = {
                readonly 'context': Function__Declaration$context$;
                readonly 'parameters': Function__Declaration$parameters$;
                readonly 'type parameters': Function__Declaration$type__parameters$;
            };
            type Namespace__2$parent__sibling$namespace$ = {
                readonly 'key': string;
                readonly 'referent': Namespace__2$;
            };
            type Namespace__2$parent__sibling$ = {
                readonly 'namespace': Namespace__2$parent__sibling$namespace$;
            };
            type Namespace__2$local$ = Local__Namespace$;
            type Namespace__2$ = ['local', Namespace__2$local$] | ['parent sibling', Namespace__2$parent__sibling$];
            type Local__Namespace$namespaces$D$ = Namespace__2$;
            type Local__Namespace$namespaces$ = _pt.Dictionary<Local__Namespace$namespaces$D$>;
            type Local__Namespace$parameters$ = Type__Parameters$;
            type Local__Namespace$types$D$ = Type$;
            type Local__Namespace$types$ = _pt.Dictionary<Local__Namespace$types$D$>;
            type Local__Namespace$ = {
                readonly 'namespaces': Local__Namespace$namespaces$;
                readonly 'parameters': Local__Namespace$parameters$;
                readonly 'types': Local__Namespace$types$;
            };
            type Type$address__function$declaration$ = Function__Declaration$;
            type Type$address__function$return__type$ = Type$;
            type Type$address__function$ = {
                readonly 'declaration': Type$address__function$declaration$;
                readonly 'return type': Type$address__function$return__type$;
            };
            type Type$array$ = Type$;
            type Type$boolean$ = null;
            type Type$computed$ = Type$;
            type Type$dictionary$ = Type$;
            type Type$group$D$type$ = Type$;
            type Type$group$D$mutable$O$ = null;
            type Type$group$D$mutable$ = _pt.OptionalValue<Type$group$D$mutable$O$>;
            type Type$group$D$ = {
                readonly 'mutable': Type$group$D$mutable$;
                readonly 'type': Type$group$D$type$;
            };
            type Type$group$ = _pt.Dictionary<Type$group$D$>;
            type Type$null$ = null;
            type Type$number$ = null;
            type Type$optional$ = Type$;
            type Type$procedure$declaration$ = Function__Declaration$;
            type Type$procedure$ = {
                readonly 'declaration': Type$procedure$declaration$;
            };
            type Type$string$ = null;
            type Type$tagged__union$D$ = Type$;
            type Type$tagged__union$ = _pt.Dictionary<Type$tagged__union$D$>;
            type Type$type__parameter$ = {
                readonly 'key': string;
                readonly 'referent': Aggregated__Type__Parameters$D$;
            };
            type Type$type__reference$external$namespaces$ = Namespace__Selection$;
            type Type$type__reference$external$type$ = {
                readonly 'key': string;
                readonly 'referent': Local__Namespace$types$D$;
            };
            type Type$type__reference$external$ = {
                readonly 'namespaces': Type$type__reference$external$namespaces$;
                readonly 'type': Type$type__reference$external$type$;
            };
            type Type$type__reference$sibling$ = {
                readonly 'key': string;
                readonly 'referent': Type$;
            };
            type Type$type__reference$cyclic__sibling$ = {
                readonly 'key': string;
                readonly 'referent': _pt.ComputedValue<Type$>;
            };
            type Type$type__reference$ = ['cyclic sibling', Type$type__reference$cyclic__sibling$] | ['external', Type$type__reference$external$] | ['sibling', Type$type__reference$sibling$];
            type Type$value__function$declaration$ = Function__Declaration$;
            type Type$value__function$return__type$ = Type$;
            type Type$value__function$ = {
                readonly 'declaration': Type$value__function$declaration$;
                readonly 'return type': Type$value__function$return__type$;
            };
            type Type$ = ['address function', Type$address__function$] | ['array', Type$array$] | ['boolean', Type$boolean$] | ['computed', Type$computed$] | ['dictionary', Type$dictionary$] | ['group', Type$group$] | ['null', Type$null$] | ['number', Type$number$] | ['optional', Type$optional$] | ['procedure', Type$procedure$] | ['string', Type$string$] | ['tagged union', Type$tagged__union$] | ['type parameter', Type$type__parameter$] | ['type reference', Type$type__reference$] | ['value function', Type$value__function$];
            type Type__Arguments$D$type$ = Type$;
            type Type__Arguments$D$ = {
                readonly 'type': Type__Arguments$D$type$;
            };
            type Type__Arguments$ = _pt.Dictionary<Type__Arguments$D$>;
            type Namespace__Selection$namespace$ = {
                readonly 'key': string;
                readonly 'referent': Local__Namespace$namespaces$D$;
            };
            type Namespace__Selection$arguments$ = Type__Arguments$;
            type Namespace__Selection$tail$O$ = Namespace__Selection$;
            type Namespace__Selection$tail$ = _pt.OptionalValue<Namespace__Selection$tail$O$>;
            type Namespace__Selection$ = {
                readonly 'arguments': Namespace__Selection$arguments$;
                readonly 'namespace': Namespace__Selection$namespace$;
                readonly 'tail': Namespace__Selection$tail$;
            };
            type Root$ = Local__Namespace$;
        }
        namespace T {
            import _IFlat = Flat;
            namespace Aggregated__Type__Parameters {
                namespace D {
                    type $ = _IFlat.Aggregated__Type__Parameters$D$;
                }
                type $ = _IFlat.Aggregated__Type__Parameters$;
            }
            namespace TType__Parameters {
                namespace local {
                    namespace D {
                        type $ = _IFlat.Type__Parameters$local$D$;
                    }
                    type $ = _IFlat.Type__Parameters$local$;
                }
                namespace aggregated {
                    type $ = _IFlat.Type__Parameters$aggregated$;
                }
                type $ = _IFlat.Type__Parameters$;
            }
            namespace Function__Declaration {
                namespace type__parameters {
                    type $ = _IFlat.Function__Declaration$type__parameters$;
                }
                namespace context {
                    type $ = _IFlat.Function__Declaration$context$;
                }
                namespace parameters {
                    namespace D {
                        type $ = _IFlat.Function__Declaration$parameters$D$;
                    }
                    type $ = _IFlat.Function__Declaration$parameters$;
                }
                type $ = _IFlat.Function__Declaration$;
            }
            namespace Namespace__2 {
                namespace parent__sibling {
                    namespace namespace {
                        type $ = _IFlat.Namespace__2$parent__sibling$namespace$;
                    }
                    type $ = _IFlat.Namespace__2$parent__sibling$;
                }
                namespace local {
                    type $ = _IFlat.Namespace__2$local$;
                }
                type $ = _IFlat.Namespace__2$;
            }
            namespace Local__Namespace {
                namespace namespaces {
                    namespace D {
                        type $ = _IFlat.Local__Namespace$namespaces$D$;
                    }
                    type $ = _IFlat.Local__Namespace$namespaces$;
                }
                namespace parameters {
                    type $ = _IFlat.Local__Namespace$parameters$;
                }
                namespace types {
                    namespace D {
                        type $ = _IFlat.Local__Namespace$types$D$;
                    }
                    type $ = _IFlat.Local__Namespace$types$;
                }
                type $ = _IFlat.Local__Namespace$;
            }
            namespace TType {
                namespace address__function {
                    namespace declaration {
                        type $ = _IFlat.Type$address__function$declaration$;
                    }
                    namespace return__type {
                        type $ = _IFlat.Type$address__function$return__type$;
                    }
                    type $ = _IFlat.Type$address__function$;
                }
                namespace array {
                    type $ = _IFlat.Type$array$;
                }
                namespace _lboolean {
                    type $ = _IFlat.Type$boolean$;
                }
                namespace computed {
                    type $ = _IFlat.Type$computed$;
                }
                namespace dictionary {
                    type $ = _IFlat.Type$dictionary$;
                }
                namespace group {
                    namespace D {
                        namespace _ltype {
                            type $ = _IFlat.Type$group$D$type$;
                        }
                        namespace mutable {
                            namespace O {
                                type $ = _IFlat.Type$group$D$mutable$O$;
                            }
                            type $ = _IFlat.Type$group$D$mutable$;
                        }
                        type $ = _IFlat.Type$group$D$;
                    }
                    type $ = _IFlat.Type$group$;
                }
                namespace _lnull {
                    type $ = _IFlat.Type$null$;
                }
                namespace _lnumber {
                    type $ = _IFlat.Type$number$;
                }
                namespace optional {
                    type $ = _IFlat.Type$optional$;
                }
                namespace procedure {
                    namespace declaration {
                        type $ = _IFlat.Type$procedure$declaration$;
                    }
                    type $ = _IFlat.Type$procedure$;
                }
                namespace _lstring {
                    type $ = _IFlat.Type$string$;
                }
                namespace tagged__union {
                    namespace D {
                        type $ = _IFlat.Type$tagged__union$D$;
                    }
                    type $ = _IFlat.Type$tagged__union$;
                }
                namespace type__parameter {
                    type $ = _IFlat.Type$type__parameter$;
                }
                namespace type__reference {
                    namespace external {
                        namespace namespaces {
                            type $ = _IFlat.Type$type__reference$external$namespaces$;
                        }
                        namespace _ltype {
                            type $ = _IFlat.Type$type__reference$external$type$;
                        }
                        type $ = _IFlat.Type$type__reference$external$;
                    }
                    namespace sibling {
                        type $ = _IFlat.Type$type__reference$sibling$;
                    }
                    namespace cyclic__sibling {
                        type $ = _IFlat.Type$type__reference$cyclic__sibling$;
                    }
                    type $ = _IFlat.Type$type__reference$;
                }
                namespace value__function {
                    namespace declaration {
                        type $ = _IFlat.Type$value__function$declaration$;
                    }
                    namespace return__type {
                        type $ = _IFlat.Type$value__function$return__type$;
                    }
                    type $ = _IFlat.Type$value__function$;
                }
                type $ = _IFlat.Type$;
            }
            namespace TType__Arguments {
                namespace D {
                    namespace _ltype {
                        type $ = _IFlat.Type__Arguments$D$type$;
                    }
                    type $ = _IFlat.Type__Arguments$D$;
                }
                type $ = _IFlat.Type__Arguments$;
            }
            namespace Namespace__Selection {
                namespace namespace {
                    type $ = _IFlat.Namespace__Selection$namespace$;
                }
                namespace arguments {
                    type $ = _IFlat.Namespace__Selection$arguments$;
                }
                namespace tail {
                    namespace O {
                        type $ = _IFlat.Namespace__Selection$tail$O$;
                    }
                    type $ = _IFlat.Namespace__Selection$tail$;
                }
                type $ = _IFlat.Namespace__Selection$;
            }
            namespace Root {
                type $ = _IFlat.Root$;
            }
        }
    }
    namespace Resolve {
        import _IResolved = Resolved;
        import _IUnresolved = Unresolved;
        type Aggregated__Type__Parameters = <_TAnnotation>($: _IUnresolved.Flat.Aggregated__Type__Parameters$<_TAnnotation>) => _IResolved.Flat.Aggregated__Type__Parameters$;
        type Function__Declaration = <_TAnnotation>($: _IUnresolved.Flat.Function__Declaration$<_TAnnotation>, $p: {
            readonly 'cyclic sibling types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Type$>>;
            readonly 'resolved namespaces': _pt.Lookup<_IResolved.Flat.Namespace__2$>;
            readonly 'resolved sibling types': _pt.Lookup<_IResolved.Flat.Type$>;
            readonly 'type parameters': _IResolved.Flat.Aggregated__Type__Parameters$;
        }) => _IResolved.Flat.Function__Declaration$;
        type Local__Namespace = <_TAnnotation>($: _IUnresolved.Flat.Local__Namespace$<_TAnnotation>, $p: {
            readonly 'parent type parameters': _pt.OptionalValue<_IResolved.Flat.Aggregated__Type__Parameters$>;
            readonly 'resolved sibling namespaces': _pt.OptionalValue<_pt.Lookup<_IResolved.Flat.Namespace__2$>>;
        }) => _IResolved.Flat.Local__Namespace$;
        type Namespace__2 = <_TAnnotation>($: _IUnresolved.Flat.Namespace__2$<_TAnnotation>, $p: {
            readonly 'resolved parent sibling namespaces': _pt.OptionalValue<_pt.Lookup<_IResolved.Flat.Namespace__2$>>;
        }) => _IResolved.Flat.Namespace__2$;
        type Namespace__Selection = <_TAnnotation>($: _IUnresolved.Flat.Namespace__Selection$<_TAnnotation>, $p: {
            readonly 'cyclic sibling types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Type$>>;
            readonly 'resolved namespaces': _pt.Lookup<_IResolved.Flat.Namespace__2$>;
            readonly 'resolved sibling types': _pt.Lookup<_IResolved.Flat.Type$>;
            readonly 'type parameters': _IResolved.Flat.Aggregated__Type__Parameters$;
        }) => _IResolved.Flat.Namespace__Selection$;
        type Root = <_TAnnotation>($: _IUnresolved.Flat.Root$<_TAnnotation>) => _IResolved.Flat.Root$;
        type Type__Arguments = <_TAnnotation>($: _IUnresolved.Flat.Type__Arguments$<_TAnnotation>) => _IResolved.Flat.Type__Arguments$;
        type Type__Parameters = <_TAnnotation>($: _IUnresolved.Flat.Type__Parameters$<_TAnnotation>, $p: {
            readonly 'parent type parameters': _pt.OptionalValue<_IResolved.Flat.Aggregated__Type__Parameters$>;
        }) => _IResolved.Flat.Type__Parameters$;
        type Type = <_TAnnotation>($: _IUnresolved.Flat.Type$<_TAnnotation>, $p: {
            readonly 'cyclic sibling types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Type$>>;
            readonly 'resolved namespaces': _pt.Lookup<_IResolved.Flat.Namespace__2$>;
            readonly 'resolved sibling types': _pt.Lookup<_IResolved.Flat.Type$>;
            readonly 'type parameters': _IResolved.Flat.Aggregated__Type__Parameters$;
        }) => _IResolved.Flat.Type$;
    }
    namespace Serialize {
        import _IResolved = Resolved;
        type Aggregated__Type__Parameters = ($: _IResolved.Flat.Aggregated__Type__Parameters$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Type__Parameters = ($: _IResolved.Flat.Type__Parameters$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Function__Declaration = ($: _IResolved.Flat.Function__Declaration$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Namespace__2 = ($: _IResolved.Flat.Namespace__2$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Local__Namespace = ($: _IResolved.Flat.Local__Namespace$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Type = ($: _IResolved.Flat.Type$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Type__Arguments = ($: _IResolved.Flat.Type__Arguments$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Namespace__Selection = ($: _IResolved.Flat.Namespace__Selection$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Root = ($: _IResolved.Flat.Root$, $p: {
            readonly 'out': boolean;
        }) => void;
    }
    namespace Select {
        import _IResolved = Resolved;
        type Namespace__2 = ($: _IResolved.Flat.Namespace__2$) => _IResolved.Flat.Local__Namespace$;
        type Namespace__Selection = ($: _IResolved.Flat.Namespace__Selection$) => _IResolved.Flat.Namespace__2$;
    }
    type _$ = ($: null) => {
        readonly 'Aggregated Type Parameters': {
            readonly 'Resolve': Resolve.Aggregated__Type__Parameters;
            readonly 'Serialize': Serialize.Aggregated__Type__Parameters;
        };
        readonly 'Function Declaration': {
            readonly 'Resolve': Resolve.Function__Declaration;
            readonly 'Serialize': Serialize.Function__Declaration;
        };
        readonly 'Local Namespace': {
            readonly 'Resolve': Resolve.Local__Namespace;
            readonly 'Serialize': Serialize.Local__Namespace;
        };
        readonly 'Namespace 2': {
            readonly 'Resolve': Resolve.Namespace__2;
            readonly 'Serialize': Serialize.Namespace__2;
        };
        readonly 'Namespace Selection': {
            readonly 'Resolve': Resolve.Namespace__Selection;
            readonly 'Serialize': Serialize.Namespace__Selection;
        };
        readonly 'Root': {
            readonly 'Resolve': Resolve.Root;
            readonly 'Serialize': Serialize.Root;
        };
        readonly 'Type': {
            readonly 'Resolve': Resolve.Type;
            readonly 'Serialize': Serialize.Type;
        };
        readonly 'Type Arguments': {
            readonly 'Resolve': Resolve.Type__Arguments;
            readonly 'Serialize': Serialize.Type__Arguments;
        };
        readonly 'Type Parameters': {
            readonly 'Resolve': Resolve.Type__Parameters;
            readonly 'Serialize': Serialize.Type__Parameters;
        };
    };
}
export declare namespace proto__implementation {
    import _Itypesystem = proto__typesystem;
    namespace Unresolved {
        namespace Flat {
            type Type__Selection$current__namespaceXXXXX$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Type__Selection$child__namespace$namespacex$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Type__Selection$child__namespace$selection$<_TAnnotation> = Type__Selection$<_TAnnotation>;
            type Type__Selection$child__namespace$<_TAnnotation> = {
                readonly 'namespacex': Type__Selection$child__namespace$namespacex$<_TAnnotation>;
                readonly 'selection': Type__Selection$child__namespace$selection$<_TAnnotation>;
            };
            type Type__Selection$<_TAnnotation> = ['child namespace', Type__Selection$child__namespace$<_TAnnotation>] | ['current namespaceXXXXX', Type__Selection$current__namespaceXXXXX$<_TAnnotation>];
            type Type__Arguments$D$type$<_TAnnotation> = Type__Selection$<_TAnnotation>;
            type Type__Arguments$D$<_TAnnotation> = {
                readonly 'type': Type__Arguments$D$type$<_TAnnotation>;
            };
            type Type__Arguments$<_TAnnotation> = _pt.Dictionary<Type__Arguments$D$<_TAnnotation>>;
            type Address__Selection__Tail$O$step$call$address__function$<_TAnnotation> = _TAnnotation;
            type Address__Selection__Tail$O$step$call$type__arguments$<_TAnnotation> = Type__Arguments$<_TAnnotation>;
            type Address__Selection__Tail$O$step$call$<_TAnnotation> = {
                readonly 'address function': Address__Selection__Tail$O$step$call$address__function$<_TAnnotation>;
                readonly 'type arguments': Address__Selection__Tail$O$step$call$type__arguments$<_TAnnotation>;
            };
            type Address__Selection__Tail$O$step$property$group$<_TAnnotation> = _TAnnotation;
            type Address__Selection__Tail$O$step$property$property$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Address__Selection__Tail$O$step$property$<_TAnnotation> = {
                readonly 'group': Address__Selection__Tail$O$step$property$group$<_TAnnotation>;
                readonly 'property': Address__Selection__Tail$O$step$property$property$<_TAnnotation>;
            };
            type Address__Selection__Tail$O$step$<_TAnnotation> = ['call', Address__Selection__Tail$O$step$call$<_TAnnotation>] | ['property', Address__Selection__Tail$O$step$property$<_TAnnotation>];
            type Address__Selection__Tail$O$tail$<_TAnnotation> = Address__Selection__Tail$<_TAnnotation>;
            type Address__Selection__Tail$O$<_TAnnotation> = {
                readonly 'step': Address__Selection__Tail$O$step$<_TAnnotation>;
                readonly 'tail': Address__Selection__Tail$O$tail$<_TAnnotation>;
            };
            type Address__Selection__Tail$<_TAnnotation> = _pt.OptionalValue<Address__Selection__Tail$O$<_TAnnotation>>;
            type Variables$D$type$variable__stack2$variable$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Variables$D$type$variable__stack2$<_TAnnotation> = {
                readonly 'variable': Variables$D$type$variable__stack2$variable$<_TAnnotation>;
            };
            type Variables$D$type$local$type$<_TAnnotation> = Type__Selection$<_TAnnotation>;
            type Variables$D$type$local$initialization$<_TAnnotation> = Initialization$<_TAnnotation>;
            type Variables$D$type$local$<_TAnnotation> = {
                readonly 'initialization': Variables$D$type$local$initialization$<_TAnnotation>;
                readonly 'type': Variables$D$type$local$type$<_TAnnotation>;
            };
            type Variables$D$type$<_TAnnotation> = ['local', Variables$D$type$local$<_TAnnotation>] | ['variable stack2', Variables$D$type$variable__stack2$<_TAnnotation>];
            type Variables$D$<_TAnnotation> = {
                readonly 'type': Variables$D$type$<_TAnnotation>;
            };
            type Variables$<_TAnnotation> = _pt.Dictionary<Variables$D$<_TAnnotation>>;
            type Address__Selection$variable$<_TAnnotation> = {
                readonly 'key': string;
                readonly 'referent': _TAnnotation;
            };
            type Address__Selection$tail$<_TAnnotation> = Address__Selection__Tail$<_TAnnotation>;
            type Address__Selection$<_TAnnotation> = {
                readonly 'tail': Address__Selection$tail$<_TAnnotation>;
                readonly 'variable': Address__Selection$variable$<_TAnnotation>;
            };
            type Initialization__Or__Selection$initialization$<_TAnnotation> = Initialization$<_TAnnotation>;
            type Initialization__Or__Selection$selection$selection$<_TAnnotation> = Address__Selection$<_TAnnotation>;
            type Initialization__Or__Selection$selection$string$<_TAnnotation> = _TAnnotation;
            type Initialization__Or__Selection$selection$<_TAnnotation> = {
                readonly 'selection': Initialization__Or__Selection$selection$selection$<_TAnnotation>;
                readonly 'string': Initialization__Or__Selection$selection$string$<_TAnnotation>;
            };
            type Initialization__Or__Selection$<_TAnnotation> = ['initialization', Initialization__Or__Selection$initialization$<_TAnnotation>] | ['selection', Initialization__Or__Selection$selection$<_TAnnotation>];
            type String__Initialization__Or__Selection$initialization$<_TAnnotation> = String__Initialization$<_TAnnotation>;
            type String__Initialization__Or__Selection$selection$selection$<_TAnnotation> = Address__Selection$<_TAnnotation>;
            type String__Initialization__Or__Selection$selection$string$<_TAnnotation> = _TAnnotation;
            type String__Initialization__Or__Selection$selection$<_TAnnotation> = {
                readonly 'selection': String__Initialization__Or__Selection$selection$selection$<_TAnnotation>;
                readonly 'string': String__Initialization__Or__Selection$selection$string$<_TAnnotation>;
            };
            type String__Initialization__Or__Selection$<_TAnnotation> = ['initialization', String__Initialization__Or__Selection$initialization$<_TAnnotation>] | ['selection', String__Initialization__Or__Selection$selection$<_TAnnotation>];
            type Numerical__Initialization__Or__Selection$initialization$<_TAnnotation> = Numerical__Initialization$<_TAnnotation>;
            type Numerical__Initialization__Or__Selection$selection$selection$<_TAnnotation> = Address__Selection$<_TAnnotation>;
            type Numerical__Initialization__Or__Selection$selection$number$<_TAnnotation> = _TAnnotation;
            type Numerical__Initialization__Or__Selection$selection$<_TAnnotation> = {
                readonly 'number': Numerical__Initialization__Or__Selection$selection$number$<_TAnnotation>;
                readonly 'selection': Numerical__Initialization__Or__Selection$selection$selection$<_TAnnotation>;
            };
            type Numerical__Initialization__Or__Selection$<_TAnnotation> = ['initialization', Numerical__Initialization__Or__Selection$initialization$<_TAnnotation>] | ['selection', Numerical__Initialization__Or__Selection$selection$<_TAnnotation>];
            type Boolean__Initialization__Or__Selection$initialization$<_TAnnotation> = Boolean__Initialization$<_TAnnotation>;
            type Boolean__Initialization__Or__Selection$selection$selection$<_TAnnotation> = Address__Selection$<_TAnnotation>;
            type Boolean__Initialization__Or__Selection$selection$boolean$<_TAnnotation> = _TAnnotation;
            type Boolean__Initialization__Or__Selection$selection$<_TAnnotation> = {
                readonly 'boolean': Boolean__Initialization__Or__Selection$selection$boolean$<_TAnnotation>;
                readonly 'selection': Boolean__Initialization__Or__Selection$selection$selection$<_TAnnotation>;
            };
            type Boolean__Initialization__Or__Selection$<_TAnnotation> = ['initialization', Boolean__Initialization__Or__Selection$initialization$<_TAnnotation>] | ['selection', Boolean__Initialization__Or__Selection$selection$<_TAnnotation>];
            type Boolean__Initialization$and$left__hand__side$<_TAnnotation> = Boolean__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$and$right__hand__side$<_TAnnotation> = Boolean__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$and$<_TAnnotation> = {
                readonly 'left hand side': Boolean__Initialization$and$left__hand__side$<_TAnnotation>;
                readonly 'right hand side': Boolean__Initialization$and$right__hand__side$<_TAnnotation>;
            };
            type Boolean__Initialization$or$left__hand__side$<_TAnnotation> = Boolean__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$or$right__hand__side$<_TAnnotation> = Boolean__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$or$<_TAnnotation> = {
                readonly 'left hand side': Boolean__Initialization$or$left__hand__side$<_TAnnotation>;
                readonly 'right hand side': Boolean__Initialization$or$right__hand__side$<_TAnnotation>;
            };
            type Boolean__Initialization$false$<_TAnnotation> = null;
            type Boolean__Initialization$not$<_TAnnotation> = Boolean__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$true$<_TAnnotation> = null;
            type Boolean__Initialization$string__equals$left__hand__side$<_TAnnotation> = String__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$string__equals$right__hand__side$<_TAnnotation> = String__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$string__equals$<_TAnnotation> = {
                readonly 'left hand side': Boolean__Initialization$string__equals$left__hand__side$<_TAnnotation>;
                readonly 'right hand side': Boolean__Initialization$string__equals$right__hand__side$<_TAnnotation>;
            };
            type Boolean__Initialization$string__not__equals$left__hand__side$<_TAnnotation> = String__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$string__not__equals$right__hand__side$<_TAnnotation> = String__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$string__not__equals$<_TAnnotation> = {
                readonly 'left hand side': Boolean__Initialization$string__not__equals$left__hand__side$<_TAnnotation>;
                readonly 'right hand side': Boolean__Initialization$string__not__equals$right__hand__side$<_TAnnotation>;
            };
            type Boolean__Initialization$number__equals$left__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$number__equals$right__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$number__equals$<_TAnnotation> = {
                readonly 'left hand side': Boolean__Initialization$number__equals$left__hand__side$<_TAnnotation>;
                readonly 'right hand side': Boolean__Initialization$number__equals$right__hand__side$<_TAnnotation>;
            };
            type Boolean__Initialization$number__not__equals$left__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$number__not__equals$right__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$number__not__equals$<_TAnnotation> = {
                readonly 'left hand side': Boolean__Initialization$number__not__equals$left__hand__side$<_TAnnotation>;
                readonly 'right hand side': Boolean__Initialization$number__not__equals$right__hand__side$<_TAnnotation>;
            };
            type Boolean__Initialization$greater__than$left__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$greater__than$right__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$greater__than$<_TAnnotation> = {
                readonly 'left hand side': Boolean__Initialization$greater__than$left__hand__side$<_TAnnotation>;
                readonly 'right hand side': Boolean__Initialization$greater__than$right__hand__side$<_TAnnotation>;
            };
            type Boolean__Initialization$less__than$left__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$less__than$right__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Boolean__Initialization$less__than$<_TAnnotation> = {
                readonly 'left hand side': Boolean__Initialization$less__than$left__hand__side$<_TAnnotation>;
                readonly 'right hand side': Boolean__Initialization$less__than$right__hand__side$<_TAnnotation>;
            };
            type Boolean__Initialization$<_TAnnotation> = ['and', Boolean__Initialization$and$<_TAnnotation>] | ['false', Boolean__Initialization$false$<_TAnnotation>] | ['greater than', Boolean__Initialization$greater__than$<_TAnnotation>] | ['less than', Boolean__Initialization$less__than$<_TAnnotation>] | ['not', Boolean__Initialization$not$<_TAnnotation>] | ['number equals', Boolean__Initialization$number__equals$<_TAnnotation>] | ['number not equals', Boolean__Initialization$number__not__equals$<_TAnnotation>] | ['or', Boolean__Initialization$or$<_TAnnotation>] | ['string equals', Boolean__Initialization$string__equals$<_TAnnotation>] | ['string not equals', Boolean__Initialization$string__not__equals$<_TAnnotation>] | ['true', Boolean__Initialization$true$<_TAnnotation>];
            type Numerical__Initialization$minus$left__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Numerical__Initialization$minus$right__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Numerical__Initialization$minus$<_TAnnotation> = {
                readonly 'left hand side': Numerical__Initialization$minus$left__hand__side$<_TAnnotation>;
                readonly 'right hand side': Numerical__Initialization$minus$right__hand__side$<_TAnnotation>;
            };
            type Numerical__Initialization$plus$left__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Numerical__Initialization$plus$right__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Numerical__Initialization$plus$<_TAnnotation> = {
                readonly 'left hand side': Numerical__Initialization$plus$left__hand__side$<_TAnnotation>;
                readonly 'right hand side': Numerical__Initialization$plus$right__hand__side$<_TAnnotation>;
            };
            type Numerical__Initialization$predecrement$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Numerical__Initialization$preincrement$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Numerical__Initialization$postdecrement$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Numerical__Initialization$postincrement$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Numerical__Initialization$numeric__literal$<_TAnnotation> = number;
            type Numerical__Initialization$<_TAnnotation> = ['minus', Numerical__Initialization$minus$<_TAnnotation>] | ['numeric literal', Numerical__Initialization$numeric__literal$<_TAnnotation>] | ['plus', Numerical__Initialization$plus$<_TAnnotation>] | ['postdecrement', Numerical__Initialization$postdecrement$<_TAnnotation>] | ['postincrement', Numerical__Initialization$postincrement$<_TAnnotation>] | ['predecrement', Numerical__Initialization$predecrement$<_TAnnotation>] | ['preincrement', Numerical__Initialization$preincrement$<_TAnnotation>];
            type String__Initialization$string__literal$<_TAnnotation> = string;
            type String__Initialization$<_TAnnotation> = ['string literal', String__Initialization$string__literal$<_TAnnotation>];
            type Initialization$array__literal$A$array$<_TAnnotation> = _TAnnotation;
            type Initialization$array__literal$A$initialization$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>;
            type Initialization$array__literal$A$<_TAnnotation> = {
                readonly 'array': Initialization$array__literal$A$array$<_TAnnotation>;
                readonly 'initialization': Initialization$array__literal$A$initialization$<_TAnnotation>;
            };
            type Initialization$array__literal$<_TAnnotation> = _pt.Array<Initialization$array__literal$A$<_TAnnotation>>;
            type Initialization$object__literal$group$<_TAnnotation> = _TAnnotation;
            type Initialization$object__literal$properties$D$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>;
            type Initialization$object__literal$properties$<_TAnnotation> = _pt.Dictionary<Initialization$object__literal$properties$D$<_TAnnotation>>;
            type Initialization$object__literal$<_TAnnotation> = {
                readonly 'group': Initialization$object__literal$group$<_TAnnotation>;
                readonly 'properties': Initialization$object__literal$properties$<_TAnnotation>;
            };
            type Initialization$boolean$boolean$<_TAnnotation> = _TAnnotation;
            type Initialization$boolean$x$<_TAnnotation> = Boolean__Initialization$<_TAnnotation>;
            type Initialization$boolean$<_TAnnotation> = {
                readonly 'boolean': Initialization$boolean$boolean$<_TAnnotation>;
                readonly 'x': Initialization$boolean$x$<_TAnnotation>;
            };
            type Initialization$numerical$number$<_TAnnotation> = _TAnnotation;
            type Initialization$numerical$x$<_TAnnotation> = Numerical__Initialization$<_TAnnotation>;
            type Initialization$numerical$<_TAnnotation> = {
                readonly 'number': Initialization$numerical$number$<_TAnnotation>;
                readonly 'x': Initialization$numerical$x$<_TAnnotation>;
            };
            type Initialization$string$number$<_TAnnotation> = _TAnnotation;
            type Initialization$string$x$<_TAnnotation> = String__Initialization$<_TAnnotation>;
            type Initialization$string$<_TAnnotation> = {
                readonly 'number': Initialization$string$number$<_TAnnotation>;
                readonly 'x': Initialization$string$x$<_TAnnotation>;
            };
            type Initialization$null$null$<_TAnnotation> = _TAnnotation;
            type Initialization$null$<_TAnnotation> = {
                readonly 'null': Initialization$null$null$<_TAnnotation>;
            };
            type Initialization$<_TAnnotation> = ['array literal', Initialization$array__literal$<_TAnnotation>] | ['boolean', Initialization$boolean$<_TAnnotation>] | ['null', Initialization$null$<_TAnnotation>] | ['numerical', Initialization$numerical$<_TAnnotation>] | ['object literal', Initialization$object__literal$<_TAnnotation>] | ['string', Initialization$string$<_TAnnotation>];
            type Block$variables$<_TAnnotation> = Variables$<_TAnnotation>;
            type Block$statements$<_TAnnotation> = Statements$<_TAnnotation>;
            type Block$<_TAnnotation> = {
                readonly 'statements': Block$statements$<_TAnnotation>;
                readonly 'variables': Block$variables$<_TAnnotation>;
            };
            type Assign$target$<_TAnnotation> = Address__Selection$<_TAnnotation>;
            type Assign$initialization$<_TAnnotation> = Initialization__Or__Selection$<_TAnnotation>;
            type Assign$<_TAnnotation> = {
                readonly 'initialization': Assign$initialization$<_TAnnotation>;
                readonly 'target': Assign$target$<_TAnnotation>;
            };
            type Statements$A$block$<_TAnnotation> = Block$<_TAnnotation>;
            type Statements$A$with$address$<_TAnnotation> = Address__Selection$<_TAnnotation>;
            type Statements$A$with$action$assign$<_TAnnotation> = Assign$<_TAnnotation>;
            type Statements$A$with$action$minus__assign$number$<_TAnnotation> = _TAnnotation;
            type Statements$A$with$action$minus__assign$right__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Statements$A$with$action$minus__assign$<_TAnnotation> = {
                readonly 'number': Statements$A$with$action$minus__assign$number$<_TAnnotation>;
                readonly 'right hand side': Statements$A$with$action$minus__assign$right__hand__side$<_TAnnotation>;
            };
            type Statements$A$with$action$plus__assign$number$<_TAnnotation> = _TAnnotation;
            type Statements$A$with$action$plus__assign$right__hand__side$<_TAnnotation> = Numerical__Initialization__Or__Selection$<_TAnnotation>;
            type Statements$A$with$action$plus__assign$<_TAnnotation> = {
                readonly 'number': Statements$A$with$action$plus__assign$number$<_TAnnotation>;
                readonly 'right hand side': Statements$A$with$action$plus__assign$right__hand__side$<_TAnnotation>;
            };
            type Statements$A$with$action$<_TAnnotation> = ['assign', Statements$A$with$action$assign$<_TAnnotation>] | ['minus assign', Statements$A$with$action$minus__assign$<_TAnnotation>] | ['plus assign', Statements$A$with$action$plus__assign$<_TAnnotation>];
            type Statements$A$with$<_TAnnotation> = {
                readonly 'action': Statements$A$with$action$<_TAnnotation>;
                readonly 'address': Statements$A$with$address$<_TAnnotation>;
            };
            type Statements$A$if$condition$<_TAnnotation> = Boolean__Initialization__Or__Selection$<_TAnnotation>;
            type Statements$A$if$then$<_TAnnotation> = Block$<_TAnnotation>;
            type Statements$A$if$else$O$<_TAnnotation> = Block$<_TAnnotation>;
            type Statements$A$if$else$<_TAnnotation> = _pt.OptionalValue<Statements$A$if$else$O$<_TAnnotation>>;
            type Statements$A$if$<_TAnnotation> = {
                readonly 'condition': Statements$A$if$condition$<_TAnnotation>;
                readonly 'else': Statements$A$if$else$<_TAnnotation>;
                readonly 'then': Statements$A$if$then$<_TAnnotation>;
            };
            type Statements$A$while$condition$<_TAnnotation> = Boolean__Initialization__Or__Selection$<_TAnnotation>;
            type Statements$A$while$block$<_TAnnotation> = Block$<_TAnnotation>;
            type Statements$A$while$<_TAnnotation> = {
                readonly 'block': Statements$A$while$block$<_TAnnotation>;
                readonly 'condition': Statements$A$while$condition$<_TAnnotation>;
            };
            type Statements$A$<_TAnnotation> = ['block', Statements$A$block$<_TAnnotation>] | ['if', Statements$A$if$<_TAnnotation>] | ['while', Statements$A$while$<_TAnnotation>] | ['with', Statements$A$with$<_TAnnotation>];
            type Statements$<_TAnnotation> = _pt.Array<Statements$A$<_TAnnotation>>;
            type Source__File$type$<_TAnnotation> = Type__Selection$<_TAnnotation>;
            type Source__File$initialization$<_TAnnotation> = Initialization$<_TAnnotation>;
            type Source__File$<_TAnnotation> = {
                readonly 'initialization': Source__File$initialization$<_TAnnotation>;
                readonly 'type': Source__File$type$<_TAnnotation>;
            };
            type Root$<_TAnnotation> = Source__File$<_TAnnotation>;
        }
        namespace T {
            import _IFlat = Flat;
            namespace TType__Selection {
                namespace current__namespaceXXXXX {
                    type $<_TAnnotation> = _IFlat.Type__Selection$current__namespaceXXXXX$<_TAnnotation>;
                }
                namespace child__namespace {
                    namespace namespacex {
                        type $<_TAnnotation> = _IFlat.Type__Selection$child__namespace$namespacex$<_TAnnotation>;
                    }
                    namespace selection {
                        type $<_TAnnotation> = _IFlat.Type__Selection$child__namespace$selection$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type__Selection$child__namespace$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Type__Selection$<_TAnnotation>;
            }
            namespace TType__Arguments {
                namespace D {
                    namespace _ltype {
                        type $<_TAnnotation> = _IFlat.Type__Arguments$D$type$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Type__Arguments$D$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Type__Arguments$<_TAnnotation>;
            }
            namespace Address__Selection__Tail {
                namespace O {
                    namespace step {
                        namespace call {
                            namespace address__function {
                                type $<_TAnnotation> = _IFlat.Address__Selection__Tail$O$step$call$address__function$<_TAnnotation>;
                            }
                            namespace type__arguments {
                                type $<_TAnnotation> = _IFlat.Address__Selection__Tail$O$step$call$type__arguments$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Address__Selection__Tail$O$step$call$<_TAnnotation>;
                        }
                        namespace property {
                            namespace group {
                                type $<_TAnnotation> = _IFlat.Address__Selection__Tail$O$step$property$group$<_TAnnotation>;
                            }
                            namespace property {
                                type $<_TAnnotation> = _IFlat.Address__Selection__Tail$O$step$property$property$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Address__Selection__Tail$O$step$property$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Address__Selection__Tail$O$step$<_TAnnotation>;
                    }
                    namespace tail {
                        type $<_TAnnotation> = _IFlat.Address__Selection__Tail$O$tail$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Address__Selection__Tail$O$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Address__Selection__Tail$<_TAnnotation>;
            }
            namespace Variables {
                namespace D {
                    namespace _ltype {
                        namespace variable__stack2 {
                            namespace variable {
                                type $<_TAnnotation> = _IFlat.Variables$D$type$variable__stack2$variable$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Variables$D$type$variable__stack2$<_TAnnotation>;
                        }
                        namespace local {
                            namespace _ltype {
                                type $<_TAnnotation> = _IFlat.Variables$D$type$local$type$<_TAnnotation>;
                            }
                            namespace initialization {
                                type $<_TAnnotation> = _IFlat.Variables$D$type$local$initialization$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Variables$D$type$local$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Variables$D$type$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Variables$D$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Variables$<_TAnnotation>;
            }
            namespace Address__Selection {
                namespace variable {
                    type $<_TAnnotation> = _IFlat.Address__Selection$variable$<_TAnnotation>;
                }
                namespace tail {
                    type $<_TAnnotation> = _IFlat.Address__Selection$tail$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Address__Selection$<_TAnnotation>;
            }
            namespace Initialization__Or__Selection {
                namespace initialization {
                    type $<_TAnnotation> = _IFlat.Initialization__Or__Selection$initialization$<_TAnnotation>;
                }
                namespace selection {
                    namespace selection {
                        type $<_TAnnotation> = _IFlat.Initialization__Or__Selection$selection$selection$<_TAnnotation>;
                    }
                    namespace _lstring {
                        type $<_TAnnotation> = _IFlat.Initialization__Or__Selection$selection$string$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Initialization__Or__Selection$selection$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Initialization__Or__Selection$<_TAnnotation>;
            }
            namespace String__Initialization__Or__Selection {
                namespace initialization {
                    type $<_TAnnotation> = _IFlat.String__Initialization__Or__Selection$initialization$<_TAnnotation>;
                }
                namespace selection {
                    namespace selection {
                        type $<_TAnnotation> = _IFlat.String__Initialization__Or__Selection$selection$selection$<_TAnnotation>;
                    }
                    namespace _lstring {
                        type $<_TAnnotation> = _IFlat.String__Initialization__Or__Selection$selection$string$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.String__Initialization__Or__Selection$selection$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.String__Initialization__Or__Selection$<_TAnnotation>;
            }
            namespace Numerical__Initialization__Or__Selection {
                namespace initialization {
                    type $<_TAnnotation> = _IFlat.Numerical__Initialization__Or__Selection$initialization$<_TAnnotation>;
                }
                namespace selection {
                    namespace selection {
                        type $<_TAnnotation> = _IFlat.Numerical__Initialization__Or__Selection$selection$selection$<_TAnnotation>;
                    }
                    namespace _lnumber {
                        type $<_TAnnotation> = _IFlat.Numerical__Initialization__Or__Selection$selection$number$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Numerical__Initialization__Or__Selection$selection$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Numerical__Initialization__Or__Selection$<_TAnnotation>;
            }
            namespace Boolean__Initialization__Or__Selection {
                namespace initialization {
                    type $<_TAnnotation> = _IFlat.Boolean__Initialization__Or__Selection$initialization$<_TAnnotation>;
                }
                namespace selection {
                    namespace selection {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization__Or__Selection$selection$selection$<_TAnnotation>;
                    }
                    namespace _lboolean {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization__Or__Selection$selection$boolean$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Boolean__Initialization__Or__Selection$selection$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Boolean__Initialization__Or__Selection$<_TAnnotation>;
            }
            namespace Boolean__Initialization {
                namespace and {
                    namespace left__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$and$left__hand__side$<_TAnnotation>;
                    }
                    namespace right__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$and$right__hand__side$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Boolean__Initialization$and$<_TAnnotation>;
                }
                namespace or {
                    namespace left__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$or$left__hand__side$<_TAnnotation>;
                    }
                    namespace right__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$or$right__hand__side$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Boolean__Initialization$or$<_TAnnotation>;
                }
                namespace _lfalse {
                    type $<_TAnnotation> = _IFlat.Boolean__Initialization$false$<_TAnnotation>;
                }
                namespace not {
                    type $<_TAnnotation> = _IFlat.Boolean__Initialization$not$<_TAnnotation>;
                }
                namespace _ltrue {
                    type $<_TAnnotation> = _IFlat.Boolean__Initialization$true$<_TAnnotation>;
                }
                namespace string__equals {
                    namespace left__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$string__equals$left__hand__side$<_TAnnotation>;
                    }
                    namespace right__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$string__equals$right__hand__side$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Boolean__Initialization$string__equals$<_TAnnotation>;
                }
                namespace string__not__equals {
                    namespace left__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$string__not__equals$left__hand__side$<_TAnnotation>;
                    }
                    namespace right__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$string__not__equals$right__hand__side$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Boolean__Initialization$string__not__equals$<_TAnnotation>;
                }
                namespace number__equals {
                    namespace left__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$number__equals$left__hand__side$<_TAnnotation>;
                    }
                    namespace right__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$number__equals$right__hand__side$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Boolean__Initialization$number__equals$<_TAnnotation>;
                }
                namespace number__not__equals {
                    namespace left__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$number__not__equals$left__hand__side$<_TAnnotation>;
                    }
                    namespace right__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$number__not__equals$right__hand__side$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Boolean__Initialization$number__not__equals$<_TAnnotation>;
                }
                namespace greater__than {
                    namespace left__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$greater__than$left__hand__side$<_TAnnotation>;
                    }
                    namespace right__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$greater__than$right__hand__side$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Boolean__Initialization$greater__than$<_TAnnotation>;
                }
                namespace less__than {
                    namespace left__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$less__than$left__hand__side$<_TAnnotation>;
                    }
                    namespace right__hand__side {
                        type $<_TAnnotation> = _IFlat.Boolean__Initialization$less__than$right__hand__side$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Boolean__Initialization$less__than$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Boolean__Initialization$<_TAnnotation>;
            }
            namespace Numerical__Initialization {
                namespace minus {
                    namespace left__hand__side {
                        type $<_TAnnotation> = _IFlat.Numerical__Initialization$minus$left__hand__side$<_TAnnotation>;
                    }
                    namespace right__hand__side {
                        type $<_TAnnotation> = _IFlat.Numerical__Initialization$minus$right__hand__side$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Numerical__Initialization$minus$<_TAnnotation>;
                }
                namespace plus {
                    namespace left__hand__side {
                        type $<_TAnnotation> = _IFlat.Numerical__Initialization$plus$left__hand__side$<_TAnnotation>;
                    }
                    namespace right__hand__side {
                        type $<_TAnnotation> = _IFlat.Numerical__Initialization$plus$right__hand__side$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Numerical__Initialization$plus$<_TAnnotation>;
                }
                namespace predecrement {
                    type $<_TAnnotation> = _IFlat.Numerical__Initialization$predecrement$<_TAnnotation>;
                }
                namespace preincrement {
                    type $<_TAnnotation> = _IFlat.Numerical__Initialization$preincrement$<_TAnnotation>;
                }
                namespace postdecrement {
                    type $<_TAnnotation> = _IFlat.Numerical__Initialization$postdecrement$<_TAnnotation>;
                }
                namespace postincrement {
                    type $<_TAnnotation> = _IFlat.Numerical__Initialization$postincrement$<_TAnnotation>;
                }
                namespace numeric__literal {
                    type $<_TAnnotation> = _IFlat.Numerical__Initialization$numeric__literal$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Numerical__Initialization$<_TAnnotation>;
            }
            namespace String__Initialization {
                namespace string__literal {
                    type $<_TAnnotation> = _IFlat.String__Initialization$string__literal$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.String__Initialization$<_TAnnotation>;
            }
            namespace Initialization {
                namespace array__literal {
                    namespace A {
                        namespace array {
                            type $<_TAnnotation> = _IFlat.Initialization$array__literal$A$array$<_TAnnotation>;
                        }
                        namespace initialization {
                            type $<_TAnnotation> = _IFlat.Initialization$array__literal$A$initialization$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Initialization$array__literal$A$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Initialization$array__literal$<_TAnnotation>;
                }
                namespace object__literal {
                    namespace group {
                        type $<_TAnnotation> = _IFlat.Initialization$object__literal$group$<_TAnnotation>;
                    }
                    namespace properties {
                        namespace D {
                            type $<_TAnnotation> = _IFlat.Initialization$object__literal$properties$D$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Initialization$object__literal$properties$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Initialization$object__literal$<_TAnnotation>;
                }
                namespace _lboolean {
                    namespace _lboolean {
                        type $<_TAnnotation> = _IFlat.Initialization$boolean$boolean$<_TAnnotation>;
                    }
                    namespace x {
                        type $<_TAnnotation> = _IFlat.Initialization$boolean$x$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Initialization$boolean$<_TAnnotation>;
                }
                namespace numerical {
                    namespace _lnumber {
                        type $<_TAnnotation> = _IFlat.Initialization$numerical$number$<_TAnnotation>;
                    }
                    namespace x {
                        type $<_TAnnotation> = _IFlat.Initialization$numerical$x$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Initialization$numerical$<_TAnnotation>;
                }
                namespace _lstring {
                    namespace _lnumber {
                        type $<_TAnnotation> = _IFlat.Initialization$string$number$<_TAnnotation>;
                    }
                    namespace x {
                        type $<_TAnnotation> = _IFlat.Initialization$string$x$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Initialization$string$<_TAnnotation>;
                }
                namespace _lnull {
                    namespace _lnull {
                        type $<_TAnnotation> = _IFlat.Initialization$null$null$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Initialization$null$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Initialization$<_TAnnotation>;
            }
            namespace Block {
                namespace variables {
                    type $<_TAnnotation> = _IFlat.Block$variables$<_TAnnotation>;
                }
                namespace statements {
                    type $<_TAnnotation> = _IFlat.Block$statements$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Block$<_TAnnotation>;
            }
            namespace Assign {
                namespace target {
                    type $<_TAnnotation> = _IFlat.Assign$target$<_TAnnotation>;
                }
                namespace initialization {
                    type $<_TAnnotation> = _IFlat.Assign$initialization$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Assign$<_TAnnotation>;
            }
            namespace Statements {
                namespace A {
                    namespace block {
                        type $<_TAnnotation> = _IFlat.Statements$A$block$<_TAnnotation>;
                    }
                    namespace _lwith {
                        namespace address {
                            type $<_TAnnotation> = _IFlat.Statements$A$with$address$<_TAnnotation>;
                        }
                        namespace action {
                            namespace assign {
                                type $<_TAnnotation> = _IFlat.Statements$A$with$action$assign$<_TAnnotation>;
                            }
                            namespace minus__assign {
                                namespace _lnumber {
                                    type $<_TAnnotation> = _IFlat.Statements$A$with$action$minus__assign$number$<_TAnnotation>;
                                }
                                namespace right__hand__side {
                                    type $<_TAnnotation> = _IFlat.Statements$A$with$action$minus__assign$right__hand__side$<_TAnnotation>;
                                }
                                type $<_TAnnotation> = _IFlat.Statements$A$with$action$minus__assign$<_TAnnotation>;
                            }
                            namespace plus__assign {
                                namespace _lnumber {
                                    type $<_TAnnotation> = _IFlat.Statements$A$with$action$plus__assign$number$<_TAnnotation>;
                                }
                                namespace right__hand__side {
                                    type $<_TAnnotation> = _IFlat.Statements$A$with$action$plus__assign$right__hand__side$<_TAnnotation>;
                                }
                                type $<_TAnnotation> = _IFlat.Statements$A$with$action$plus__assign$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Statements$A$with$action$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Statements$A$with$<_TAnnotation>;
                    }
                    namespace _lif {
                        namespace condition {
                            type $<_TAnnotation> = _IFlat.Statements$A$if$condition$<_TAnnotation>;
                        }
                        namespace then {
                            type $<_TAnnotation> = _IFlat.Statements$A$if$then$<_TAnnotation>;
                        }
                        namespace _lelse {
                            namespace O {
                                type $<_TAnnotation> = _IFlat.Statements$A$if$else$O$<_TAnnotation>;
                            }
                            type $<_TAnnotation> = _IFlat.Statements$A$if$else$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Statements$A$if$<_TAnnotation>;
                    }
                    namespace _lwhile {
                        namespace condition {
                            type $<_TAnnotation> = _IFlat.Statements$A$while$condition$<_TAnnotation>;
                        }
                        namespace block {
                            type $<_TAnnotation> = _IFlat.Statements$A$while$block$<_TAnnotation>;
                        }
                        type $<_TAnnotation> = _IFlat.Statements$A$while$<_TAnnotation>;
                    }
                    type $<_TAnnotation> = _IFlat.Statements$A$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Statements$<_TAnnotation>;
            }
            namespace Source__File {
                namespace _ltype {
                    type $<_TAnnotation> = _IFlat.Source__File$type$<_TAnnotation>;
                }
                namespace initialization {
                    type $<_TAnnotation> = _IFlat.Source__File$initialization$<_TAnnotation>;
                }
                type $<_TAnnotation> = _IFlat.Source__File$<_TAnnotation>;
            }
            namespace Root {
                type $<_TAnnotation> = _IFlat.Root$<_TAnnotation>;
            }
        }
    }
    namespace Resolved {
        namespace Flat {
            type Type__Selection$current__namespaceXXXXX$ = {
                readonly 'key': string;
                readonly 'referent': _Itypesystem.Resolved.Flat.Local__Namespace$types$D$;
            };
            type Type__Selection$child__namespace$namespacex$ = {
                readonly 'key': string;
                readonly 'referent': _Itypesystem.Resolved.Flat.Local__Namespace$namespaces$D$;
            };
            type Type__Selection$child__namespace$selection$ = Type__Selection$;
            type Type__Selection$child__namespace$ = {
                readonly 'namespacex': Type__Selection$child__namespace$namespacex$;
                readonly 'selection': Type__Selection$child__namespace$selection$;
            };
            type Type__Selection$ = ['child namespace', Type__Selection$child__namespace$] | ['current namespaceXXXXX', Type__Selection$current__namespaceXXXXX$];
            type Type__Arguments$D$type$ = Type__Selection$;
            type Type__Arguments$D$ = {
                readonly 'type': Type__Arguments$D$type$;
            };
            type Type__Arguments$ = _pt.Dictionary<Type__Arguments$D$>;
            type Address__Selection__Tail$O$step$call$address__function$ = _Itypesystem.Resolved.Flat.Type$address__function$;
            type Address__Selection__Tail$O$step$call$type__arguments$ = Type__Arguments$;
            type Address__Selection__Tail$O$step$call$ = {
                readonly 'address function': Address__Selection__Tail$O$step$call$address__function$;
                readonly 'type arguments': Address__Selection__Tail$O$step$call$type__arguments$;
            };
            type Address__Selection__Tail$O$step$property$group$ = _Itypesystem.Resolved.Flat.Type$group$;
            type Address__Selection__Tail$O$step$property$property$ = {
                readonly 'key': string;
                readonly 'referent': _Itypesystem.Resolved.Flat.Type$group$D$;
            };
            type Address__Selection__Tail$O$step$property$ = {
                readonly 'group': Address__Selection__Tail$O$step$property$group$;
                readonly 'property': Address__Selection__Tail$O$step$property$property$;
            };
            type Address__Selection__Tail$O$step$ = ['call', Address__Selection__Tail$O$step$call$] | ['property', Address__Selection__Tail$O$step$property$];
            type Address__Selection__Tail$O$tail$ = Address__Selection__Tail$;
            type Address__Selection__Tail$O$ = {
                readonly 'step': Address__Selection__Tail$O$step$;
                readonly 'tail': Address__Selection__Tail$O$tail$;
            };
            type Address__Selection__Tail$ = _pt.OptionalValue<Address__Selection__Tail$O$>;
            type Variables$D$type$variable__stack2$variable$ = {
                readonly 'key': string;
                readonly 'referent': Variables$;
            };
            type Variables$D$type$variable__stack2$ = {
                readonly 'variable': Variables$D$type$variable__stack2$variable$;
            };
            type Variables$D$type$local$type$ = Type__Selection$;
            type Variables$D$type$local$initialization$ = Initialization$;
            type Variables$D$type$local$ = {
                readonly 'initialization': Variables$D$type$local$initialization$;
                readonly 'type': Variables$D$type$local$type$;
            };
            type Variables$D$type$ = ['local', Variables$D$type$local$] | ['variable stack2', Variables$D$type$variable__stack2$];
            type Variables$D$ = {
                readonly 'type': Variables$D$type$;
            };
            type Variables$ = _pt.Dictionary<Variables$D$>;
            type Address__Selection$variable$ = {
                readonly 'key': string;
                readonly 'referent': Variables$D$;
            };
            type Address__Selection$tail$ = Address__Selection__Tail$;
            type Address__Selection$ = {
                readonly 'tail': Address__Selection$tail$;
                readonly 'variable': Address__Selection$variable$;
            };
            type Initialization__Or__Selection$initialization$ = Initialization$;
            type Initialization__Or__Selection$selection$selection$ = Address__Selection$;
            type Initialization__Or__Selection$selection$string$ = _Itypesystem.Resolved.Flat.Type$string$;
            type Initialization__Or__Selection$selection$ = {
                readonly 'selection': Initialization__Or__Selection$selection$selection$;
                readonly 'string': Initialization__Or__Selection$selection$string$;
            };
            type Initialization__Or__Selection$ = ['initialization', Initialization__Or__Selection$initialization$] | ['selection', Initialization__Or__Selection$selection$];
            type String__Initialization__Or__Selection$initialization$ = String__Initialization$;
            type String__Initialization__Or__Selection$selection$selection$ = Address__Selection$;
            type String__Initialization__Or__Selection$selection$string$ = _Itypesystem.Resolved.Flat.Type$string$;
            type String__Initialization__Or__Selection$selection$ = {
                readonly 'selection': String__Initialization__Or__Selection$selection$selection$;
                readonly 'string': String__Initialization__Or__Selection$selection$string$;
            };
            type String__Initialization__Or__Selection$ = ['initialization', String__Initialization__Or__Selection$initialization$] | ['selection', String__Initialization__Or__Selection$selection$];
            type Numerical__Initialization__Or__Selection$initialization$ = Numerical__Initialization$;
            type Numerical__Initialization__Or__Selection$selection$selection$ = Address__Selection$;
            type Numerical__Initialization__Or__Selection$selection$number$ = _Itypesystem.Resolved.Flat.Type$number$;
            type Numerical__Initialization__Or__Selection$selection$ = {
                readonly 'number': Numerical__Initialization__Or__Selection$selection$number$;
                readonly 'selection': Numerical__Initialization__Or__Selection$selection$selection$;
            };
            type Numerical__Initialization__Or__Selection$ = ['initialization', Numerical__Initialization__Or__Selection$initialization$] | ['selection', Numerical__Initialization__Or__Selection$selection$];
            type Boolean__Initialization__Or__Selection$initialization$ = Boolean__Initialization$;
            type Boolean__Initialization__Or__Selection$selection$selection$ = Address__Selection$;
            type Boolean__Initialization__Or__Selection$selection$boolean$ = _Itypesystem.Resolved.Flat.Type$boolean$;
            type Boolean__Initialization__Or__Selection$selection$ = {
                readonly 'boolean': Boolean__Initialization__Or__Selection$selection$boolean$;
                readonly 'selection': Boolean__Initialization__Or__Selection$selection$selection$;
            };
            type Boolean__Initialization__Or__Selection$ = ['initialization', Boolean__Initialization__Or__Selection$initialization$] | ['selection', Boolean__Initialization__Or__Selection$selection$];
            type Boolean__Initialization$and$left__hand__side$ = Boolean__Initialization__Or__Selection$;
            type Boolean__Initialization$and$right__hand__side$ = Boolean__Initialization__Or__Selection$;
            type Boolean__Initialization$and$ = {
                readonly 'left hand side': Boolean__Initialization$and$left__hand__side$;
                readonly 'right hand side': Boolean__Initialization$and$right__hand__side$;
            };
            type Boolean__Initialization$or$left__hand__side$ = Boolean__Initialization__Or__Selection$;
            type Boolean__Initialization$or$right__hand__side$ = Boolean__Initialization__Or__Selection$;
            type Boolean__Initialization$or$ = {
                readonly 'left hand side': Boolean__Initialization$or$left__hand__side$;
                readonly 'right hand side': Boolean__Initialization$or$right__hand__side$;
            };
            type Boolean__Initialization$false$ = null;
            type Boolean__Initialization$not$ = Boolean__Initialization__Or__Selection$;
            type Boolean__Initialization$true$ = null;
            type Boolean__Initialization$string__equals$left__hand__side$ = String__Initialization__Or__Selection$;
            type Boolean__Initialization$string__equals$right__hand__side$ = String__Initialization__Or__Selection$;
            type Boolean__Initialization$string__equals$ = {
                readonly 'left hand side': Boolean__Initialization$string__equals$left__hand__side$;
                readonly 'right hand side': Boolean__Initialization$string__equals$right__hand__side$;
            };
            type Boolean__Initialization$string__not__equals$left__hand__side$ = String__Initialization__Or__Selection$;
            type Boolean__Initialization$string__not__equals$right__hand__side$ = String__Initialization__Or__Selection$;
            type Boolean__Initialization$string__not__equals$ = {
                readonly 'left hand side': Boolean__Initialization$string__not__equals$left__hand__side$;
                readonly 'right hand side': Boolean__Initialization$string__not__equals$right__hand__side$;
            };
            type Boolean__Initialization$number__equals$left__hand__side$ = Numerical__Initialization__Or__Selection$;
            type Boolean__Initialization$number__equals$right__hand__side$ = Numerical__Initialization__Or__Selection$;
            type Boolean__Initialization$number__equals$ = {
                readonly 'left hand side': Boolean__Initialization$number__equals$left__hand__side$;
                readonly 'right hand side': Boolean__Initialization$number__equals$right__hand__side$;
            };
            type Boolean__Initialization$number__not__equals$left__hand__side$ = Numerical__Initialization__Or__Selection$;
            type Boolean__Initialization$number__not__equals$right__hand__side$ = Numerical__Initialization__Or__Selection$;
            type Boolean__Initialization$number__not__equals$ = {
                readonly 'left hand side': Boolean__Initialization$number__not__equals$left__hand__side$;
                readonly 'right hand side': Boolean__Initialization$number__not__equals$right__hand__side$;
            };
            type Boolean__Initialization$greater__than$left__hand__side$ = Numerical__Initialization__Or__Selection$;
            type Boolean__Initialization$greater__than$right__hand__side$ = Numerical__Initialization__Or__Selection$;
            type Boolean__Initialization$greater__than$ = {
                readonly 'left hand side': Boolean__Initialization$greater__than$left__hand__side$;
                readonly 'right hand side': Boolean__Initialization$greater__than$right__hand__side$;
            };
            type Boolean__Initialization$less__than$left__hand__side$ = Numerical__Initialization__Or__Selection$;
            type Boolean__Initialization$less__than$right__hand__side$ = Numerical__Initialization__Or__Selection$;
            type Boolean__Initialization$less__than$ = {
                readonly 'left hand side': Boolean__Initialization$less__than$left__hand__side$;
                readonly 'right hand side': Boolean__Initialization$less__than$right__hand__side$;
            };
            type Boolean__Initialization$ = ['and', Boolean__Initialization$and$] | ['false', Boolean__Initialization$false$] | ['greater than', Boolean__Initialization$greater__than$] | ['less than', Boolean__Initialization$less__than$] | ['not', Boolean__Initialization$not$] | ['number equals', Boolean__Initialization$number__equals$] | ['number not equals', Boolean__Initialization$number__not__equals$] | ['or', Boolean__Initialization$or$] | ['string equals', Boolean__Initialization$string__equals$] | ['string not equals', Boolean__Initialization$string__not__equals$] | ['true', Boolean__Initialization$true$];
            type Numerical__Initialization$minus$left__hand__side$ = Numerical__Initialization__Or__Selection$;
            type Numerical__Initialization$minus$right__hand__side$ = Numerical__Initialization__Or__Selection$;
            type Numerical__Initialization$minus$ = {
                readonly 'left hand side': Numerical__Initialization$minus$left__hand__side$;
                readonly 'right hand side': Numerical__Initialization$minus$right__hand__side$;
            };
            type Numerical__Initialization$plus$left__hand__side$ = Numerical__Initialization__Or__Selection$;
            type Numerical__Initialization$plus$right__hand__side$ = Numerical__Initialization__Or__Selection$;
            type Numerical__Initialization$plus$ = {
                readonly 'left hand side': Numerical__Initialization$plus$left__hand__side$;
                readonly 'right hand side': Numerical__Initialization$plus$right__hand__side$;
            };
            type Numerical__Initialization$predecrement$ = Numerical__Initialization__Or__Selection$;
            type Numerical__Initialization$preincrement$ = Numerical__Initialization__Or__Selection$;
            type Numerical__Initialization$postdecrement$ = Numerical__Initialization__Or__Selection$;
            type Numerical__Initialization$postincrement$ = Numerical__Initialization__Or__Selection$;
            type Numerical__Initialization$numeric__literal$ = number;
            type Numerical__Initialization$ = ['minus', Numerical__Initialization$minus$] | ['numeric literal', Numerical__Initialization$numeric__literal$] | ['plus', Numerical__Initialization$plus$] | ['postdecrement', Numerical__Initialization$postdecrement$] | ['postincrement', Numerical__Initialization$postincrement$] | ['predecrement', Numerical__Initialization$predecrement$] | ['preincrement', Numerical__Initialization$preincrement$];
            type String__Initialization$string__literal$ = string;
            type String__Initialization$ = ['string literal', String__Initialization$string__literal$];
            type Initialization$array__literal$A$array$ = _Itypesystem.Resolved.Flat.Type$array$;
            type Initialization$array__literal$A$initialization$ = Initialization__Or__Selection$;
            type Initialization$array__literal$A$ = {
                readonly 'array': Initialization$array__literal$A$array$;
                readonly 'initialization': Initialization$array__literal$A$initialization$;
            };
            type Initialization$array__literal$ = _pt.Array<Initialization$array__literal$A$>;
            type Initialization$object__literal$group$ = _Itypesystem.Resolved.Flat.Type$group$;
            type Initialization$object__literal$properties$D$ = Initialization__Or__Selection$;
            type Initialization$object__literal$properties$ = _pt.Dictionary<Initialization$object__literal$properties$D$>;
            type Initialization$object__literal$ = {
                readonly 'group': Initialization$object__literal$group$;
                readonly 'properties': Initialization$object__literal$properties$;
            };
            type Initialization$boolean$boolean$ = _Itypesystem.Resolved.Flat.Type$boolean$;
            type Initialization$boolean$x$ = Boolean__Initialization$;
            type Initialization$boolean$ = {
                readonly 'boolean': Initialization$boolean$boolean$;
                readonly 'x': Initialization$boolean$x$;
            };
            type Initialization$numerical$number$ = _Itypesystem.Resolved.Flat.Type$number$;
            type Initialization$numerical$x$ = Numerical__Initialization$;
            type Initialization$numerical$ = {
                readonly 'number': Initialization$numerical$number$;
                readonly 'x': Initialization$numerical$x$;
            };
            type Initialization$string$number$ = _Itypesystem.Resolved.Flat.Type$string$;
            type Initialization$string$x$ = String__Initialization$;
            type Initialization$string$ = {
                readonly 'number': Initialization$string$number$;
                readonly 'x': Initialization$string$x$;
            };
            type Initialization$null$null$ = _Itypesystem.Resolved.Flat.Type$null$;
            type Initialization$null$ = {
                readonly 'null': Initialization$null$null$;
            };
            type Initialization$ = ['array literal', Initialization$array__literal$] | ['boolean', Initialization$boolean$] | ['null', Initialization$null$] | ['numerical', Initialization$numerical$] | ['object literal', Initialization$object__literal$] | ['string', Initialization$string$];
            type Block$variables$ = Variables$;
            type Block$statements$ = Statements$;
            type Block$ = {
                readonly 'statements': Block$statements$;
                readonly 'variables': Block$variables$;
            };
            type Assign$target$ = Address__Selection$;
            type Assign$initialization$ = Initialization__Or__Selection$;
            type Assign$ = {
                readonly 'initialization': Assign$initialization$;
                readonly 'target': Assign$target$;
            };
            type Statements$A$block$ = Block$;
            type Statements$A$with$address$ = Address__Selection$;
            type Statements$A$with$action$assign$ = Assign$;
            type Statements$A$with$action$minus__assign$number$ = _Itypesystem.Resolved.Flat.Type$number$;
            type Statements$A$with$action$minus__assign$right__hand__side$ = Numerical__Initialization__Or__Selection$;
            type Statements$A$with$action$minus__assign$ = {
                readonly 'number': Statements$A$with$action$minus__assign$number$;
                readonly 'right hand side': Statements$A$with$action$minus__assign$right__hand__side$;
            };
            type Statements$A$with$action$plus__assign$number$ = _Itypesystem.Resolved.Flat.Type$number$;
            type Statements$A$with$action$plus__assign$right__hand__side$ = Numerical__Initialization__Or__Selection$;
            type Statements$A$with$action$plus__assign$ = {
                readonly 'number': Statements$A$with$action$plus__assign$number$;
                readonly 'right hand side': Statements$A$with$action$plus__assign$right__hand__side$;
            };
            type Statements$A$with$action$ = ['assign', Statements$A$with$action$assign$] | ['minus assign', Statements$A$with$action$minus__assign$] | ['plus assign', Statements$A$with$action$plus__assign$];
            type Statements$A$with$ = {
                readonly 'action': Statements$A$with$action$;
                readonly 'address': Statements$A$with$address$;
            };
            type Statements$A$if$condition$ = Boolean__Initialization__Or__Selection$;
            type Statements$A$if$then$ = Block$;
            type Statements$A$if$else$O$ = Block$;
            type Statements$A$if$else$ = _pt.OptionalValue<Statements$A$if$else$O$>;
            type Statements$A$if$ = {
                readonly 'condition': Statements$A$if$condition$;
                readonly 'else': Statements$A$if$else$;
                readonly 'then': Statements$A$if$then$;
            };
            type Statements$A$while$condition$ = Boolean__Initialization__Or__Selection$;
            type Statements$A$while$block$ = Block$;
            type Statements$A$while$ = {
                readonly 'block': Statements$A$while$block$;
                readonly 'condition': Statements$A$while$condition$;
            };
            type Statements$A$ = ['block', Statements$A$block$] | ['if', Statements$A$if$] | ['while', Statements$A$while$] | ['with', Statements$A$with$];
            type Statements$ = _pt.Array<Statements$A$>;
            type Source__File$type$ = Type__Selection$;
            type Source__File$initialization$ = Initialization$;
            type Source__File$ = {
                readonly 'initialization': Source__File$initialization$;
                readonly 'type': Source__File$type$;
            };
            type Root$ = Source__File$;
        }
        namespace T {
            import _IFlat = Flat;
            namespace TType__Selection {
                namespace current__namespaceXXXXX {
                    type $ = _IFlat.Type__Selection$current__namespaceXXXXX$;
                }
                namespace child__namespace {
                    namespace namespacex {
                        type $ = _IFlat.Type__Selection$child__namespace$namespacex$;
                    }
                    namespace selection {
                        type $ = _IFlat.Type__Selection$child__namespace$selection$;
                    }
                    type $ = _IFlat.Type__Selection$child__namespace$;
                }
                type $ = _IFlat.Type__Selection$;
            }
            namespace TType__Arguments {
                namespace D {
                    namespace _ltype {
                        type $ = _IFlat.Type__Arguments$D$type$;
                    }
                    type $ = _IFlat.Type__Arguments$D$;
                }
                type $ = _IFlat.Type__Arguments$;
            }
            namespace Address__Selection__Tail {
                namespace O {
                    namespace step {
                        namespace call {
                            namespace address__function {
                                type $ = _IFlat.Address__Selection__Tail$O$step$call$address__function$;
                            }
                            namespace type__arguments {
                                type $ = _IFlat.Address__Selection__Tail$O$step$call$type__arguments$;
                            }
                            type $ = _IFlat.Address__Selection__Tail$O$step$call$;
                        }
                        namespace property {
                            namespace group {
                                type $ = _IFlat.Address__Selection__Tail$O$step$property$group$;
                            }
                            namespace property {
                                type $ = _IFlat.Address__Selection__Tail$O$step$property$property$;
                            }
                            type $ = _IFlat.Address__Selection__Tail$O$step$property$;
                        }
                        type $ = _IFlat.Address__Selection__Tail$O$step$;
                    }
                    namespace tail {
                        type $ = _IFlat.Address__Selection__Tail$O$tail$;
                    }
                    type $ = _IFlat.Address__Selection__Tail$O$;
                }
                type $ = _IFlat.Address__Selection__Tail$;
            }
            namespace Variables {
                namespace D {
                    namespace _ltype {
                        namespace variable__stack2 {
                            namespace variable {
                                type $ = _IFlat.Variables$D$type$variable__stack2$variable$;
                            }
                            type $ = _IFlat.Variables$D$type$variable__stack2$;
                        }
                        namespace local {
                            namespace _ltype {
                                type $ = _IFlat.Variables$D$type$local$type$;
                            }
                            namespace initialization {
                                type $ = _IFlat.Variables$D$type$local$initialization$;
                            }
                            type $ = _IFlat.Variables$D$type$local$;
                        }
                        type $ = _IFlat.Variables$D$type$;
                    }
                    type $ = _IFlat.Variables$D$;
                }
                type $ = _IFlat.Variables$;
            }
            namespace Address__Selection {
                namespace variable {
                    type $ = _IFlat.Address__Selection$variable$;
                }
                namespace tail {
                    type $ = _IFlat.Address__Selection$tail$;
                }
                type $ = _IFlat.Address__Selection$;
            }
            namespace Initialization__Or__Selection {
                namespace initialization {
                    type $ = _IFlat.Initialization__Or__Selection$initialization$;
                }
                namespace selection {
                    namespace selection {
                        type $ = _IFlat.Initialization__Or__Selection$selection$selection$;
                    }
                    namespace _lstring {
                        type $ = _IFlat.Initialization__Or__Selection$selection$string$;
                    }
                    type $ = _IFlat.Initialization__Or__Selection$selection$;
                }
                type $ = _IFlat.Initialization__Or__Selection$;
            }
            namespace String__Initialization__Or__Selection {
                namespace initialization {
                    type $ = _IFlat.String__Initialization__Or__Selection$initialization$;
                }
                namespace selection {
                    namespace selection {
                        type $ = _IFlat.String__Initialization__Or__Selection$selection$selection$;
                    }
                    namespace _lstring {
                        type $ = _IFlat.String__Initialization__Or__Selection$selection$string$;
                    }
                    type $ = _IFlat.String__Initialization__Or__Selection$selection$;
                }
                type $ = _IFlat.String__Initialization__Or__Selection$;
            }
            namespace Numerical__Initialization__Or__Selection {
                namespace initialization {
                    type $ = _IFlat.Numerical__Initialization__Or__Selection$initialization$;
                }
                namespace selection {
                    namespace selection {
                        type $ = _IFlat.Numerical__Initialization__Or__Selection$selection$selection$;
                    }
                    namespace _lnumber {
                        type $ = _IFlat.Numerical__Initialization__Or__Selection$selection$number$;
                    }
                    type $ = _IFlat.Numerical__Initialization__Or__Selection$selection$;
                }
                type $ = _IFlat.Numerical__Initialization__Or__Selection$;
            }
            namespace Boolean__Initialization__Or__Selection {
                namespace initialization {
                    type $ = _IFlat.Boolean__Initialization__Or__Selection$initialization$;
                }
                namespace selection {
                    namespace selection {
                        type $ = _IFlat.Boolean__Initialization__Or__Selection$selection$selection$;
                    }
                    namespace _lboolean {
                        type $ = _IFlat.Boolean__Initialization__Or__Selection$selection$boolean$;
                    }
                    type $ = _IFlat.Boolean__Initialization__Or__Selection$selection$;
                }
                type $ = _IFlat.Boolean__Initialization__Or__Selection$;
            }
            namespace Boolean__Initialization {
                namespace and {
                    namespace left__hand__side {
                        type $ = _IFlat.Boolean__Initialization$and$left__hand__side$;
                    }
                    namespace right__hand__side {
                        type $ = _IFlat.Boolean__Initialization$and$right__hand__side$;
                    }
                    type $ = _IFlat.Boolean__Initialization$and$;
                }
                namespace or {
                    namespace left__hand__side {
                        type $ = _IFlat.Boolean__Initialization$or$left__hand__side$;
                    }
                    namespace right__hand__side {
                        type $ = _IFlat.Boolean__Initialization$or$right__hand__side$;
                    }
                    type $ = _IFlat.Boolean__Initialization$or$;
                }
                namespace _lfalse {
                    type $ = _IFlat.Boolean__Initialization$false$;
                }
                namespace not {
                    type $ = _IFlat.Boolean__Initialization$not$;
                }
                namespace _ltrue {
                    type $ = _IFlat.Boolean__Initialization$true$;
                }
                namespace string__equals {
                    namespace left__hand__side {
                        type $ = _IFlat.Boolean__Initialization$string__equals$left__hand__side$;
                    }
                    namespace right__hand__side {
                        type $ = _IFlat.Boolean__Initialization$string__equals$right__hand__side$;
                    }
                    type $ = _IFlat.Boolean__Initialization$string__equals$;
                }
                namespace string__not__equals {
                    namespace left__hand__side {
                        type $ = _IFlat.Boolean__Initialization$string__not__equals$left__hand__side$;
                    }
                    namespace right__hand__side {
                        type $ = _IFlat.Boolean__Initialization$string__not__equals$right__hand__side$;
                    }
                    type $ = _IFlat.Boolean__Initialization$string__not__equals$;
                }
                namespace number__equals {
                    namespace left__hand__side {
                        type $ = _IFlat.Boolean__Initialization$number__equals$left__hand__side$;
                    }
                    namespace right__hand__side {
                        type $ = _IFlat.Boolean__Initialization$number__equals$right__hand__side$;
                    }
                    type $ = _IFlat.Boolean__Initialization$number__equals$;
                }
                namespace number__not__equals {
                    namespace left__hand__side {
                        type $ = _IFlat.Boolean__Initialization$number__not__equals$left__hand__side$;
                    }
                    namespace right__hand__side {
                        type $ = _IFlat.Boolean__Initialization$number__not__equals$right__hand__side$;
                    }
                    type $ = _IFlat.Boolean__Initialization$number__not__equals$;
                }
                namespace greater__than {
                    namespace left__hand__side {
                        type $ = _IFlat.Boolean__Initialization$greater__than$left__hand__side$;
                    }
                    namespace right__hand__side {
                        type $ = _IFlat.Boolean__Initialization$greater__than$right__hand__side$;
                    }
                    type $ = _IFlat.Boolean__Initialization$greater__than$;
                }
                namespace less__than {
                    namespace left__hand__side {
                        type $ = _IFlat.Boolean__Initialization$less__than$left__hand__side$;
                    }
                    namespace right__hand__side {
                        type $ = _IFlat.Boolean__Initialization$less__than$right__hand__side$;
                    }
                    type $ = _IFlat.Boolean__Initialization$less__than$;
                }
                type $ = _IFlat.Boolean__Initialization$;
            }
            namespace Numerical__Initialization {
                namespace minus {
                    namespace left__hand__side {
                        type $ = _IFlat.Numerical__Initialization$minus$left__hand__side$;
                    }
                    namespace right__hand__side {
                        type $ = _IFlat.Numerical__Initialization$minus$right__hand__side$;
                    }
                    type $ = _IFlat.Numerical__Initialization$minus$;
                }
                namespace plus {
                    namespace left__hand__side {
                        type $ = _IFlat.Numerical__Initialization$plus$left__hand__side$;
                    }
                    namespace right__hand__side {
                        type $ = _IFlat.Numerical__Initialization$plus$right__hand__side$;
                    }
                    type $ = _IFlat.Numerical__Initialization$plus$;
                }
                namespace predecrement {
                    type $ = _IFlat.Numerical__Initialization$predecrement$;
                }
                namespace preincrement {
                    type $ = _IFlat.Numerical__Initialization$preincrement$;
                }
                namespace postdecrement {
                    type $ = _IFlat.Numerical__Initialization$postdecrement$;
                }
                namespace postincrement {
                    type $ = _IFlat.Numerical__Initialization$postincrement$;
                }
                namespace numeric__literal {
                    type $ = _IFlat.Numerical__Initialization$numeric__literal$;
                }
                type $ = _IFlat.Numerical__Initialization$;
            }
            namespace String__Initialization {
                namespace string__literal {
                    type $ = _IFlat.String__Initialization$string__literal$;
                }
                type $ = _IFlat.String__Initialization$;
            }
            namespace Initialization {
                namespace array__literal {
                    namespace A {
                        namespace array {
                            type $ = _IFlat.Initialization$array__literal$A$array$;
                        }
                        namespace initialization {
                            type $ = _IFlat.Initialization$array__literal$A$initialization$;
                        }
                        type $ = _IFlat.Initialization$array__literal$A$;
                    }
                    type $ = _IFlat.Initialization$array__literal$;
                }
                namespace object__literal {
                    namespace group {
                        type $ = _IFlat.Initialization$object__literal$group$;
                    }
                    namespace properties {
                        namespace D {
                            type $ = _IFlat.Initialization$object__literal$properties$D$;
                        }
                        type $ = _IFlat.Initialization$object__literal$properties$;
                    }
                    type $ = _IFlat.Initialization$object__literal$;
                }
                namespace _lboolean {
                    namespace _lboolean {
                        type $ = _IFlat.Initialization$boolean$boolean$;
                    }
                    namespace x {
                        type $ = _IFlat.Initialization$boolean$x$;
                    }
                    type $ = _IFlat.Initialization$boolean$;
                }
                namespace numerical {
                    namespace _lnumber {
                        type $ = _IFlat.Initialization$numerical$number$;
                    }
                    namespace x {
                        type $ = _IFlat.Initialization$numerical$x$;
                    }
                    type $ = _IFlat.Initialization$numerical$;
                }
                namespace _lstring {
                    namespace _lnumber {
                        type $ = _IFlat.Initialization$string$number$;
                    }
                    namespace x {
                        type $ = _IFlat.Initialization$string$x$;
                    }
                    type $ = _IFlat.Initialization$string$;
                }
                namespace _lnull {
                    namespace _lnull {
                        type $ = _IFlat.Initialization$null$null$;
                    }
                    type $ = _IFlat.Initialization$null$;
                }
                type $ = _IFlat.Initialization$;
            }
            namespace Block {
                namespace variables {
                    type $ = _IFlat.Block$variables$;
                }
                namespace statements {
                    type $ = _IFlat.Block$statements$;
                }
                type $ = _IFlat.Block$;
            }
            namespace Assign {
                namespace target {
                    type $ = _IFlat.Assign$target$;
                }
                namespace initialization {
                    type $ = _IFlat.Assign$initialization$;
                }
                type $ = _IFlat.Assign$;
            }
            namespace Statements {
                namespace A {
                    namespace block {
                        type $ = _IFlat.Statements$A$block$;
                    }
                    namespace _lwith {
                        namespace address {
                            type $ = _IFlat.Statements$A$with$address$;
                        }
                        namespace action {
                            namespace assign {
                                type $ = _IFlat.Statements$A$with$action$assign$;
                            }
                            namespace minus__assign {
                                namespace _lnumber {
                                    type $ = _IFlat.Statements$A$with$action$minus__assign$number$;
                                }
                                namespace right__hand__side {
                                    type $ = _IFlat.Statements$A$with$action$minus__assign$right__hand__side$;
                                }
                                type $ = _IFlat.Statements$A$with$action$minus__assign$;
                            }
                            namespace plus__assign {
                                namespace _lnumber {
                                    type $ = _IFlat.Statements$A$with$action$plus__assign$number$;
                                }
                                namespace right__hand__side {
                                    type $ = _IFlat.Statements$A$with$action$plus__assign$right__hand__side$;
                                }
                                type $ = _IFlat.Statements$A$with$action$plus__assign$;
                            }
                            type $ = _IFlat.Statements$A$with$action$;
                        }
                        type $ = _IFlat.Statements$A$with$;
                    }
                    namespace _lif {
                        namespace condition {
                            type $ = _IFlat.Statements$A$if$condition$;
                        }
                        namespace then {
                            type $ = _IFlat.Statements$A$if$then$;
                        }
                        namespace _lelse {
                            namespace O {
                                type $ = _IFlat.Statements$A$if$else$O$;
                            }
                            type $ = _IFlat.Statements$A$if$else$;
                        }
                        type $ = _IFlat.Statements$A$if$;
                    }
                    namespace _lwhile {
                        namespace condition {
                            type $ = _IFlat.Statements$A$while$condition$;
                        }
                        namespace block {
                            type $ = _IFlat.Statements$A$while$block$;
                        }
                        type $ = _IFlat.Statements$A$while$;
                    }
                    type $ = _IFlat.Statements$A$;
                }
                type $ = _IFlat.Statements$;
            }
            namespace Source__File {
                namespace _ltype {
                    type $ = _IFlat.Source__File$type$;
                }
                namespace initialization {
                    type $ = _IFlat.Source__File$initialization$;
                }
                type $ = _IFlat.Source__File$;
            }
            namespace Root {
                type $ = _IFlat.Root$;
            }
        }
    }
    namespace Resolve {
        import _IResolved = Resolved;
        import _IUnresolved = Unresolved;
        type Address__Selection__Tail = <_TAnnotation>($: _IUnresolved.Flat.Address__Selection__Tail$<_TAnnotation>) => _IResolved.Flat.Address__Selection__Tail$;
        type Address__Selection = <_TAnnotation>($: _IUnresolved.Flat.Address__Selection$<_TAnnotation>) => _IResolved.Flat.Address__Selection$;
        type Assign = <_TAnnotation>($: _IUnresolved.Flat.Assign$<_TAnnotation>) => _IResolved.Flat.Assign$;
        type Block = <_TAnnotation>($: _IUnresolved.Flat.Block$<_TAnnotation>) => _IResolved.Flat.Block$;
        type Boolean__Initialization__Or__Selection = <_TAnnotation>($: _IUnresolved.Flat.Boolean__Initialization__Or__Selection$<_TAnnotation>) => _IResolved.Flat.Boolean__Initialization__Or__Selection$;
        type Boolean__Initialization = <_TAnnotation>($: _IUnresolved.Flat.Boolean__Initialization$<_TAnnotation>) => _IResolved.Flat.Boolean__Initialization$;
        type Initialization__Or__Selection = <_TAnnotation>($: _IUnresolved.Flat.Initialization__Or__Selection$<_TAnnotation>) => _IResolved.Flat.Initialization__Or__Selection$;
        type Initialization = <_TAnnotation>($: _IUnresolved.Flat.Initialization$<_TAnnotation>) => _IResolved.Flat.Initialization$;
        type Numerical__Initialization__Or__Selection = <_TAnnotation>($: _IUnresolved.Flat.Numerical__Initialization__Or__Selection$<_TAnnotation>) => _IResolved.Flat.Numerical__Initialization__Or__Selection$;
        type Numerical__Initialization = <_TAnnotation>($: _IUnresolved.Flat.Numerical__Initialization$<_TAnnotation>) => _IResolved.Flat.Numerical__Initialization$;
        type Root = <_TAnnotation>($: _IUnresolved.Flat.Root$<_TAnnotation>) => _IResolved.Flat.Root$;
        type Source__File = <_TAnnotation>($: _IUnresolved.Flat.Source__File$<_TAnnotation>) => _IResolved.Flat.Source__File$;
        type Statements = <_TAnnotation>($: _IUnresolved.Flat.Statements$<_TAnnotation>) => _IResolved.Flat.Statements$;
        type String__Initialization__Or__Selection = <_TAnnotation>($: _IUnresolved.Flat.String__Initialization__Or__Selection$<_TAnnotation>) => _IResolved.Flat.String__Initialization__Or__Selection$;
        type String__Initialization = <_TAnnotation>($: _IUnresolved.Flat.String__Initialization$<_TAnnotation>) => _IResolved.Flat.String__Initialization$;
        type Type__Arguments = <_TAnnotation>($: _IUnresolved.Flat.Type__Arguments$<_TAnnotation>) => _IResolved.Flat.Type__Arguments$;
        type Type__Selection = <_TAnnotation>($: _IUnresolved.Flat.Type__Selection$<_TAnnotation>) => _IResolved.Flat.Type__Selection$;
        type Variables = <_TAnnotation>($: _IUnresolved.Flat.Variables$<_TAnnotation>) => _IResolved.Flat.Variables$;
    }
    namespace Serialize {
        import _IResolved = Resolved;
        type Type__Selection = ($: _IResolved.Flat.Type__Selection$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Type__Arguments = ($: _IResolved.Flat.Type__Arguments$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Address__Selection__Tail = ($: _IResolved.Flat.Address__Selection__Tail$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Variables = ($: _IResolved.Flat.Variables$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Address__Selection = ($: _IResolved.Flat.Address__Selection$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Initialization__Or__Selection = ($: _IResolved.Flat.Initialization__Or__Selection$, $p: {
            readonly 'out': boolean;
        }) => void;
        type String__Initialization__Or__Selection = ($: _IResolved.Flat.String__Initialization__Or__Selection$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Numerical__Initialization__Or__Selection = ($: _IResolved.Flat.Numerical__Initialization__Or__Selection$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Boolean__Initialization__Or__Selection = ($: _IResolved.Flat.Boolean__Initialization__Or__Selection$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Boolean__Initialization = ($: _IResolved.Flat.Boolean__Initialization$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Numerical__Initialization = ($: _IResolved.Flat.Numerical__Initialization$, $p: {
            readonly 'out': boolean;
        }) => void;
        type String__Initialization = ($: _IResolved.Flat.String__Initialization$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Initialization = ($: _IResolved.Flat.Initialization$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Block = ($: _IResolved.Flat.Block$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Assign = ($: _IResolved.Flat.Assign$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Statements = ($: _IResolved.Flat.Statements$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Source__File = ($: _IResolved.Flat.Source__File$, $p: {
            readonly 'out': boolean;
        }) => void;
        type Root = ($: _IResolved.Flat.Root$, $p: {
            readonly 'out': boolean;
        }) => void;
    }
    namespace Select {
    }
    type _$ = ($: null) => {
        readonly 'Address Selection': {
            readonly 'Resolve': Resolve.Address__Selection;
            readonly 'Serialize': Serialize.Address__Selection;
        };
        readonly 'Address Selection Tail': {
            readonly 'Resolve': Resolve.Address__Selection__Tail;
            readonly 'Serialize': Serialize.Address__Selection__Tail;
        };
        readonly 'Assign': {
            readonly 'Resolve': Resolve.Assign;
            readonly 'Serialize': Serialize.Assign;
        };
        readonly 'Block': {
            readonly 'Resolve': Resolve.Block;
            readonly 'Serialize': Serialize.Block;
        };
        readonly 'Boolean Initialization': {
            readonly 'Resolve': Resolve.Boolean__Initialization;
            readonly 'Serialize': Serialize.Boolean__Initialization;
        };
        readonly 'Boolean Initialization Or Selection': {
            readonly 'Resolve': Resolve.Boolean__Initialization__Or__Selection;
            readonly 'Serialize': Serialize.Boolean__Initialization__Or__Selection;
        };
        readonly 'Initialization': {
            readonly 'Resolve': Resolve.Initialization;
            readonly 'Serialize': Serialize.Initialization;
        };
        readonly 'Initialization Or Selection': {
            readonly 'Resolve': Resolve.Initialization__Or__Selection;
            readonly 'Serialize': Serialize.Initialization__Or__Selection;
        };
        readonly 'Numerical Initialization': {
            readonly 'Resolve': Resolve.Numerical__Initialization;
            readonly 'Serialize': Serialize.Numerical__Initialization;
        };
        readonly 'Numerical Initialization Or Selection': {
            readonly 'Resolve': Resolve.Numerical__Initialization__Or__Selection;
            readonly 'Serialize': Serialize.Numerical__Initialization__Or__Selection;
        };
        readonly 'Root': {
            readonly 'Resolve': Resolve.Root;
            readonly 'Serialize': Serialize.Root;
        };
        readonly 'Source File': {
            readonly 'Resolve': Resolve.Source__File;
            readonly 'Serialize': Serialize.Source__File;
        };
        readonly 'Statements': {
            readonly 'Resolve': Resolve.Statements;
            readonly 'Serialize': Serialize.Statements;
        };
        readonly 'String Initialization': {
            readonly 'Resolve': Resolve.String__Initialization;
            readonly 'Serialize': Serialize.String__Initialization;
        };
        readonly 'String Initialization Or Selection': {
            readonly 'Resolve': Resolve.String__Initialization__Or__Selection;
            readonly 'Serialize': Serialize.String__Initialization__Or__Selection;
        };
        readonly 'Type Arguments': {
            readonly 'Resolve': Resolve.Type__Arguments;
            readonly 'Serialize': Serialize.Type__Arguments;
        };
        readonly 'Type Selection': {
            readonly 'Resolve': Resolve.Type__Selection;
            readonly 'Serialize': Serialize.Type__Selection;
        };
        readonly 'Variables': {
            readonly 'Resolve': Resolve.Variables;
            readonly 'Serialize': Serialize.Variables;
        };
    };
}
export type $ = {
    readonly 'pareto lang data': {
        readonly 'Resolve': ($: null) => {
            readonly 'Atom': pareto__lang__data.Resolve.Atom;
            readonly 'Atom Types': pareto__lang__data.Resolve.Atom__Types;
            readonly 'Dictionary Selection': pareto__lang__data.Resolve.Dictionary__Selection;
            readonly 'Global Type': pareto__lang__data.Resolve.Global__Type;
            readonly 'Global Type Selection': pareto__lang__data.Resolve.Global__Type__Selection;
            readonly 'Imports': pareto__lang__data.Resolve.Imports;
            readonly 'Model': pareto__lang__data.Resolve.Model;
            readonly 'Project': pareto__lang__data.Resolve.Project;
            readonly 'Root': pareto__lang__data.Resolve.Root;
            readonly 'Type': pareto__lang__data.Resolve.Type;
            readonly 'Type Library': pareto__lang__data.Resolve.Type__Library;
            readonly 'Type Selection': pareto__lang__data.Resolve.Type__Selection;
            readonly 'Type Selection Tail': pareto__lang__data.Resolve.Type__Selection__Tail;
        };
        readonly 'Serialize': ($: null) => {
            readonly 'Atom': pareto__lang__data.Serialize.Atom;
            readonly 'Atom Types': pareto__lang__data.Serialize.Atom__Types;
            readonly 'Dictionary Selection': pareto__lang__data.Serialize.Dictionary__Selection;
            readonly 'Global Type': pareto__lang__data.Serialize.Global__Type;
            readonly 'Global Type Selection': pareto__lang__data.Serialize.Global__Type__Selection;
            readonly 'Imports': pareto__lang__data.Serialize.Imports;
            readonly 'Model': pareto__lang__data.Serialize.Model;
            readonly 'Project': pareto__lang__data.Serialize.Project;
            readonly 'Root': pareto__lang__data.Serialize.Root;
            readonly 'Type': pareto__lang__data.Serialize.Type;
            readonly 'Type Library': pareto__lang__data.Serialize.Type__Library;
            readonly 'Type Selection': pareto__lang__data.Serialize.Type__Selection;
            readonly 'Type Selection Tail': pareto__lang__data.Serialize.Type__Selection__Tail;
        };
    };
    readonly 'proto implementation': {
        readonly 'Resolve': ($: null) => {
            readonly 'Address Selection': proto__implementation.Resolve.Address__Selection;
            readonly 'Address Selection Tail': proto__implementation.Resolve.Address__Selection__Tail;
            readonly 'Assign': proto__implementation.Resolve.Assign;
            readonly 'Block': proto__implementation.Resolve.Block;
            readonly 'Boolean Initialization': proto__implementation.Resolve.Boolean__Initialization;
            readonly 'Boolean Initialization Or Selection': proto__implementation.Resolve.Boolean__Initialization__Or__Selection;
            readonly 'Initialization': proto__implementation.Resolve.Initialization;
            readonly 'Initialization Or Selection': proto__implementation.Resolve.Initialization__Or__Selection;
            readonly 'Numerical Initialization': proto__implementation.Resolve.Numerical__Initialization;
            readonly 'Numerical Initialization Or Selection': proto__implementation.Resolve.Numerical__Initialization__Or__Selection;
            readonly 'Root': proto__implementation.Resolve.Root;
            readonly 'Source File': proto__implementation.Resolve.Source__File;
            readonly 'Statements': proto__implementation.Resolve.Statements;
            readonly 'String Initialization': proto__implementation.Resolve.String__Initialization;
            readonly 'String Initialization Or Selection': proto__implementation.Resolve.String__Initialization__Or__Selection;
            readonly 'Type Arguments': proto__implementation.Resolve.Type__Arguments;
            readonly 'Type Selection': proto__implementation.Resolve.Type__Selection;
            readonly 'Variables': proto__implementation.Resolve.Variables;
        };
        readonly 'Serialize': ($: null) => {
            readonly 'Address Selection': proto__implementation.Serialize.Address__Selection;
            readonly 'Address Selection Tail': proto__implementation.Serialize.Address__Selection__Tail;
            readonly 'Assign': proto__implementation.Serialize.Assign;
            readonly 'Block': proto__implementation.Serialize.Block;
            readonly 'Boolean Initialization': proto__implementation.Serialize.Boolean__Initialization;
            readonly 'Boolean Initialization Or Selection': proto__implementation.Serialize.Boolean__Initialization__Or__Selection;
            readonly 'Initialization': proto__implementation.Serialize.Initialization;
            readonly 'Initialization Or Selection': proto__implementation.Serialize.Initialization__Or__Selection;
            readonly 'Numerical Initialization': proto__implementation.Serialize.Numerical__Initialization;
            readonly 'Numerical Initialization Or Selection': proto__implementation.Serialize.Numerical__Initialization__Or__Selection;
            readonly 'Root': proto__implementation.Serialize.Root;
            readonly 'Source File': proto__implementation.Serialize.Source__File;
            readonly 'Statements': proto__implementation.Serialize.Statements;
            readonly 'String Initialization': proto__implementation.Serialize.String__Initialization;
            readonly 'String Initialization Or Selection': proto__implementation.Serialize.String__Initialization__Or__Selection;
            readonly 'Type Arguments': proto__implementation.Serialize.Type__Arguments;
            readonly 'Type Selection': proto__implementation.Serialize.Type__Selection;
            readonly 'Variables': proto__implementation.Serialize.Variables;
        };
    };
    readonly 'proto typesystem': {
        readonly 'Resolve': ($: null) => {
            readonly 'Aggregated Type Parameters': proto__typesystem.Resolve.Aggregated__Type__Parameters;
            readonly 'Function Declaration': proto__typesystem.Resolve.Function__Declaration;
            readonly 'Local Namespace': proto__typesystem.Resolve.Local__Namespace;
            readonly 'Namespace 2': proto__typesystem.Resolve.Namespace__2;
            readonly 'Namespace Selection': proto__typesystem.Resolve.Namespace__Selection;
            readonly 'Root': proto__typesystem.Resolve.Root;
            readonly 'Type': proto__typesystem.Resolve.Type;
            readonly 'Type Arguments': proto__typesystem.Resolve.Type__Arguments;
            readonly 'Type Parameters': proto__typesystem.Resolve.Type__Parameters;
        };
        readonly 'Serialize': ($: null) => {
            readonly 'Aggregated Type Parameters': proto__typesystem.Serialize.Aggregated__Type__Parameters;
            readonly 'Function Declaration': proto__typesystem.Serialize.Function__Declaration;
            readonly 'Local Namespace': proto__typesystem.Serialize.Local__Namespace;
            readonly 'Namespace 2': proto__typesystem.Serialize.Namespace__2;
            readonly 'Namespace Selection': proto__typesystem.Serialize.Namespace__Selection;
            readonly 'Root': proto__typesystem.Serialize.Root;
            readonly 'Type': proto__typesystem.Serialize.Type;
            readonly 'Type Arguments': proto__typesystem.Serialize.Type__Arguments;
            readonly 'Type Parameters': proto__typesystem.Serialize.Type__Parameters;
        };
    };
};
