import * as pt from 'pareto-core-types'

import * as g_this from "../../ts"

import Res = g_this.pareto__lang__data.Resolve



export type Resolve = {
    //Atom__Types: Atom__Types<Annotation>
    Atom: Res.Atom
    Dictionary__Selection: Res.Dictionary__Selection
    //Global__Type: Res.Global__Type
    //Global__Types: Res.Global__Types
    Global__Type__Selection: Res.Global__Type__Selection
    //Imports: Res.Imports
    Model: Res.Model
    Project: Res.Project
    Root: Res.Root
    Type: Res.Type
    Type__Library: Res.Type__Library
    Type__Selection: Res.Type__Selection
    Type__Selection__Tail: Res.Type__Selection__Tail
}