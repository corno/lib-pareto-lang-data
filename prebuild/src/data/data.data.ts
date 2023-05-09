import * as pd from 'pareto-core-data'
import * as pv from 'pareto-core-dev'

import * as g_pareto_lang_data_settings from "lib-pareto-lang-data/dist/submodules/2submodules"
import * as g_pareto_lang_data from "lib-pareto-lang-data"

import { $ as d_model } from "./models/pareto-lang-data.data"

const d = pd.d
const a = pd.a

export const $: g_pareto_lang_data_settings.T.GenerateSubmodulesParameters = {
    'path': a([`../../pareto/src/data/submodules`]),
    'data': {
        'library': g_pareto_lang_data.$b.resolve({
            'onError': ($) => {
                pv.logDebugMessage($.message[0])
            }
        })({
            'imports': d({}),
            'root': {
                'type library': d_model,
                'root': {
                    'annotation': pd.getLocationInfo(0),
                    'key': "Root"
                }
            }
        })['type library'],
        'atom mappings': d({
            "identifier": ['string', null],
            "text": ['string', null],
        })
    }

}