(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{362:function(e,t,a){"use strict";a.r(t);var n=a(42),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"evm-pallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#evm-pallet"}},[e._v("#")]),e._v(" EVM pallet")]),e._v(" "),a("p",[e._v("The EVM module allows unmodified EVM code to be executed in a\nSubstrate-based blockchain.")]),e._v(" "),a("h2",{attrs:{id:"evm-engine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#evm-engine"}},[e._v("#")]),e._v(" EVM engine")]),e._v(" "),a("p",[e._v("The EVM module uses\n"),a("a",{attrs:{href:"https://github.com/rust-blockchain/evm",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("SputnikVM")]),a("OutboundLink")],1),e._v(" as the\nunderlying EVM engine.")]),e._v(" "),a("h2",{attrs:{id:"execution-lifecycle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#execution-lifecycle"}},[e._v("#")]),e._v(" Execution lifecycle")]),e._v(" "),a("p",[e._v("There are a separate set of accounts managed by the EVM\nmodule. Substrate based accounts can call the EVM Module to deposit or\nwithdraw balance from the Substrate base-currency into a different\nbalance managed and used by the EVM module. Once a user has populated\ntheir balance, they can create and call smart contracts using this\nmodule.")]),e._v(" "),a("p",[e._v("Substrate accounts and EVM external accounts are mapped via\ncustomizable conversion functions.")]),e._v(" "),a("h2",{attrs:{id:"evm-module-vs-ethereum-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#evm-module-vs-ethereum-network"}},[e._v("#")]),e._v(" EVM module vs Ethereum network")]),e._v(" "),a("p",[e._v("The EVM module should be able to produce nearly identical results\ncompared to the Ethereum mainnet, including gas cost and balance\nchanges.")]),e._v(" "),a("p",[e._v("Observable differences include:")]),e._v(" "),a("ul",[a("li",[e._v("The available length of block hashes may not be 256 depending on the\nconfiguration of the System module in the Substrate runtime.")]),e._v(" "),a("li",[e._v("Difficulty and coinbase, which do not make sense in this module and\nis currently hard coded to zero.")])]),e._v(" "),a("p",[e._v("We currently do not aim to make unobservable behaviors, such as state\nroot, to be the same. We also don't aim to follow the exact same\ntransaction / receipt format. However, given one Ethereum transaction\nand one Substrate account's private key, one should be able to convert\nany Ethereum transaction into a transaction compatible with this\nmodule.")]),e._v(" "),a("p",[e._v("The gas configurations are configurable. Right now, a pre-defined\nIstanbul hard fork configuration option is provided.")])])}),[],!1,null,null,null);t.default=o.exports}}]);