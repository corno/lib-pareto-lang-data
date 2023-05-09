import * as pm from 'pareto-core-map'
import * as pa from 'pareto-core-async'
import * as pd from 'pareto-core-data'
import * as pv from 'pareto-core-dev'
import * as pl from 'pareto-core-lib'

import * as a_pub from "../../../../../pub"
import * as a_resolve from "res-pareto-resolve"
import * as a_glossary from "lib-pareto-typescript-project"

import { $ as d_pareto_lang_data } from "../../../data/pareto-lang-data.data"

import * as a_fp from "lib-fountain-pen"
import * as a_2glossary from "../../../../../pub/dist/submodules/2glossary"
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
    const resolved = resolve({
        'imports': pd.d({}),
        'root': {
            'type library': d_pareto_lang_data,
            'root': {
                'annotation': pd.getLocationInfo(0),
                'key': "Root",
            }
        },
    })

    const glossary = a_pub.$b.map2Glossary()({
        'library': resolved['type library'],
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

    a_fp.$b.createFile()(
        ($i) => {
            $i(
                pd.a([$.testDirectory, "FOO.ts"]),
                ($i) => {
                    a_glossary.$b.serializeGlossary()(glossary, $i)
                }
            )
        },
        {
            'logError': () => {

            }
        })

    resolved['type library']['global types'].__forEach(() => false, ($) => {
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

    return pa.asyncValue({
        elements: pm.wrapRawDictionary({})
    })
}