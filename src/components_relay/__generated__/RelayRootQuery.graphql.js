/**
 * @flow
 * @relayHash 98051a77fa14d75a819060b87e83b1d8
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type RelayRootQueryResponse = {|
  +count: ?number;
|};
*/


/*
query RelayRootQuery {
  count
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RelayRootQuery",
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "count",
        "storageKey": null
      }
    ],
    "type": "RelayRootQuery"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "RelayRootQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "RelayRootQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "count",
        "storageKey": null
      }
    ]
  },
  "text": "query RelayRootQuery {\n  count\n}\n"
};

module.exports = batch;
