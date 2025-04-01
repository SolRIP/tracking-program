/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/solrip_contract.json`.
 */
export type SolripContract = {
  "address": "RiPnkGhwuYN7ET3aMuGUAdomE3CFxBPUSonXsJrW4HS",
  "metadata": {
    "name": "solripContract",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "init",
      "discriminator": [
        220,
        59,
        207,
        236,
        108,
        250,
        47,
        100
      ],
      "accounts": [],
      "args": []
    },
    {
      "name": "solrip",
      "discriminator": [
        67,
        7,
        255,
        68,
        88,
        118,
        248,
        19
      ],
      "accounts": [],
      "args": []
    }
  ]
};
