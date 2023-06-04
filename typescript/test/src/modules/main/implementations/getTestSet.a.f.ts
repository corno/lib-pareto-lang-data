import * as pm from 'pareto-core-map'
import * as pa from 'pareto-core-async'
import * as pd from 'pareto-core-data'
import * as pv from 'pareto-core-dev'
import * as pl from 'pareto-core-lib'

import * as a_pub from "../../../../../pub"
import * as a_resolve from "res-pareto-resolve"
import * as a_dictionary from "res-pareto-dictionary"
import * as a_string from "res-pareto-string"
import * as a_glossary from "lib-pareto-typescript-project"
import * as a_pld from "lib-proto-typesystem"
import * as a_pli from "lib-proto-implementation"

import { $ as d_playground } from "../../../data/playground.data"

import * as a_fp from "lib-fountain-pen"
import * as a_2prototypesystem from "../../../../../pub/dist/submodules/2prototypesystem"
import * as a_2protoimplementation from "../../../../../pub/dist/submodules/2protoimplementation"
import * as a_pareto_lang_data_resolve from "../../../../../pub/dist/submodules/resolve"
import * as g_resolved from "../../../../../pub/dist/submodules/resolved"


import { A } from "../api.generated"

export const $$: A.getTestSet = ($) => {

    const resolve = a_pareto_lang_data_resolve.$a.resolve<pd.SourceLocation>(
        {
            'resolveDictionary': a_resolve.$r.safeResolveDictionary({
                'onError': ($) => {
                    pv.logDebugMessage(`ERROR: ${$}`)
                }
            })
        },
        {
            'onError': ($) => {
                pv.logDebugMessage(`${$.annotation.file}:${$.annotation.line}:${$.annotation.column}: ->`)
                pl.cc($.message, ($) => {
                    switch ($[0]) {
                        case 'no such entry':
                            pl.ss($, ($) => {
                                pv.logDebugMessage(`no such entry: ${$.key}`)
                            })
                            break
                        case 'not the right state':
                            pl.ss($, ($) => {

                            })
                            break
                        default: pl.au($[0])
                    }
                })
                //$.annotation.
            }
        }
    )
    const resolved_project = resolve({
        'root': d_playground,
    })

    const resolved = resolved_project['type libraries'].__unsafeGetEntry("pareto lang data")

    const glossary = a_pub.$b.map2Glossary()({
        'library': resolved,
        'atom mappings': pd.d({
            "text": ['string', null],
            "identifier": ['string', null],
        }),
        'mapping settings': {
            'constraints mapping': {
                'constraints': [true, ['required', null]],
                'terminal values': true,
            },
            'create annotations': true,
        }
    })

    // a_fp.$b.createFile()(
    //     ($i) => {
    //         $i(
    //             pd.a([$.testDirectory, "FOO.ts"]),
    //             ($i) => {
    //                 a_glossary.$b.serializeGlossary()(glossary, $i)
    //             }
    //         )
    //     },
    //     {
    //         'logError': () => {

    //         }
    //     })

    resolved['global types'].definitions.__forEach(() => false, ($) => {
        function type($: g_resolved.T.Type) {
            pl.cc($.type, ($) => {
                switch ($[0]) {
                    case 'array':
                        pl.ss($, ($) => {

                        })
                        break
                    case 'dictionary':
                        pl.ss($, ($) => {
                            // $.constraints.__forEach(() => false, ($) => {
                            //     pl.cc($.cast, ($) => {
                            //       switch ($[0]) {
                            //           case 'dictionary': 
                            //               pl.ss($, ($) => {
                            //                   $.constraints.dictionary.type
                            //               })
                            //               break
                            //           default: pl.au($[0])
                            //       }
                            //     })
                            // })
                        })
                        break
                    case 'optional':
                        pl.ss($, ($) => {
                            type($.type)
                        })
                        break
                    //default: pl.au($[0])
                }
            })
        }
        type($.type)
    })


    const pld = a_pld.$b.resolve()(a_2prototypesystem.$a.map(
        {
            'filter': a_dictionary.$r.filter(),
            'resolveDictionary': a_resolve.$r.safeResolveDictionary({
                'onError': () => {

                }
            }),
            'rekey': a_dictionary.$r.unsafeRekey(),
            'escape': a_string.$r.escape(),
            'merge': a_dictionary.$r.mergeAndIgnore(
                {
                    'error': {
                        'data': () => {

                        },
                        'end': () => {

                        }
                    }
                }
            ),
            'addEntry': a_dictionary.$r.unsafeAddEntry(),
            'mergeDictionaries': a_dictionary.$r.mergeDictionaries(),
        }
    )({
        'data': resolved_project,
        'atom mappings': pd.d({
            "pareto lang data": pd.d({
                "text": ['string', null],
                "identifier": ['string', null],
            }),
            "proto typesystem": pd.d({
                "identifier": ['string', null],
            }),
            "proto implementation": pd.d({
                "identifier": ['string', null],
                "numeric literal": ['number', null],
                "string literal": ['string', null],
            }),
        }),
    }))

    a_pld.$b.serializeToFileSystem()(
        {
            'data': pld,
            'path': pm.wrapRawArray([$.testDirectory, "src", "typesystem.ts"])
        },
        null,
    )


    
    const pli = a_2protoimplementation.$a.map(
        {
            'filter': a_dictionary.$r.filter(),
            'resolveDictionary': a_resolve.$r.safeResolveDictionary({
                'onError': () => {

                }
            }),
            'rekey': a_dictionary.$r.unsafeRekey(),
            'escape': a_string.$r.escape(),
            'merge': a_dictionary.$r.mergeAndIgnore(
                {
                    'error': {
                        'data': () => {

                        },
                        'end': () => {

                        }
                    }
                }
            ),
            'addEntry': a_dictionary.$r.unsafeAddEntry(),
            'mergeDictionaries': a_dictionary.$r.mergeDictionaries(),
        }
    )({
        'data': resolved_project,
        // 'atom mappings': pd.d({
        //     "pareto lang data": pd.d({
        //         "text": ['string', null],
        //         "identifier": ['string', null],
        //     }),
        //     "proto typesystem": pd.d({
        //         "identifier": ['string', null],
        //     }),
        //     "proto implementation": pd.d({
        //         "identifier": ['string', null],
        //         "numeric literal": ['number', null],
        //         "string literal": ['string', null],
        //     }),
        // }),
    })

    a_pli.$b.serializeToFileSystem()(
        {
            'data': pli,
            'path': pm.wrapRawArray([$.testDirectory, "src", "index.ts"])
        },
        null,
    )





    return pa.asyncValue({
        elements: pm.wrapRawDictionary({})
    })
}