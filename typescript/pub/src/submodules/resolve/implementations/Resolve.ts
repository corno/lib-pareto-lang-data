import * as pt from 'pareto-core-types'

import * as g_in from "../../unresolved"
import * as g_out from "../../resolved"

export type Atom<Annotation> =  (
    $: g_in.T.Atom<Annotation>,
    $p: {
        'atom types': g_out.T.Atom__Types,
    }
) => g_out.T.Atom

export type Dictionary__Selection<Annotation> =  (
    $: g_in.T.Dictionary__Selection<Annotation>,
    $p: {
        'imports': g_out.T.Imports,
        'sibling global types': pt.Lookup<g_out.T.Global__Type__Definition>
        'cyclic sibling global types': pt.Lookup<() => g_out.T.Global__Type__Definition>,
    },
) => g_out.T.Dictionary__Selection

export type Global__Type__Selection<Annotation> =  (
    $: g_in.T.Global__Type__Selection<Annotation>,
    $p: {
        'imports': g_out.T.Imports,
        'sibling global types': pt.Lookup<g_out.T.Global__Type__Definition>
        'cyclic sibling global types': pt.Lookup<() => g_out.T.Global__Type__Definition>,
    },
) => g_out.T.Global__Type__Selection

export type Model<Annotation> =  (
    $: g_in.T.Model<Annotation>,
    $p: {
        'external type libraries': pt.Lookup<g_out.T.Type__Library>,
    }
) => g_out.T.Model

export type Root<Annotation> =  (
    $: g_in.T.Root<Annotation>,
    $p: {
    }
) => g_out.T.Root

export type Type<Annotation> =  (
    $: g_in.T.Type<Annotation>,
    $p: {
        'atom types': g_out.T.Atom__Types,
        'imports': g_out.T.Imports,
        'sibling global types': pt.Lookup<g_out.T.Global__Type__Definition>,
        'cyclic sibling global types': pt.Lookup<() => g_out.T.Global__Type__Definition>,
    }
) => g_out.T.Type

export type Type__Selection<Annotation> =  (
    $: g_in.T.Type__Selection<Annotation>,
    $p: {
        'imports': g_out.T.Imports,
        'sibling global types': pt.Lookup<g_out.T.Global__Type__Definition>
    },
) => g_out.T.Type__Selection

export type Type__Selection__Tail<Annotation> =  (
    $: g_in.T.Type__Selection__Tail<Annotation>,
    $p: {
        'context': g_out.T.Type,
    },
) => g_out.T.Type__Selection__Tail

export type Type__Library<Annotation> =  (
    $: g_in.T.Type__Library<Annotation>,
    $p: {
        'external type libraries': pt.Lookup<g_out.T.Type__Library>,
    }
) => g_out.T.Type__Library

export type Project<Annotation> =  (
    $: g_in.T.Project<Annotation>,
    $p: {
    }
) => g_out.T.Project

export type Resolve<Annotation> = {
    //Atom__Types: Atom__Types<Annotation>
    Atom: Atom<Annotation>
    Dictionary__Selection: Dictionary__Selection<Annotation>
    //Global__Type: Global__Type<Annotation>
    //Global__Types: Global__Types<Annotation>
    Global__Type__Selection: Global__Type__Selection<Annotation>
    //Imports: Imports<Annotation>
    Model: Model<Annotation>
    Project: Project<Annotation>
    Root: Root<Annotation>
    Type: Type<Annotation>
    Type__Library: Type__Library<Annotation>
    Type__Selection: Type__Selection<Annotation>
    Type__Selection__Tail: Type__Selection__Tail<Annotation>
}