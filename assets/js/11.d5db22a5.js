(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{363:function(e,t,n){"use strict";n.r(t);var a=n(42),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("The Frontier suite contains several crates that can be used\nindependently.")]),e._v(" "),n("h2",{attrs:{id:"evm-execution-only"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#evm-execution-only"}},[e._v("#")]),e._v(" EVM execution only")]),e._v(" "),n("p",[e._v("In many situations, a Substrate blockchain may only want to include\nEVM execution capatibilities. In this way, it functions similarly to\n"),n("code",[e._v("pallet-contracts")]),e._v(", integrates with Substrate better and is less\nintrusive. The module, and its EVM execution capatibilties, can be\nadded or removed at any moment via forkless upgrades. With EVM\nexecution only, Substrate uses its account model fully and signs\ntransactions on behalf of EVM accounts.")]),e._v(" "),n("p",[e._v("In this model, however, Ethereum RPCs are not available, and dapps\nmust rewrite their frontend using the Substrate API.")]),e._v(" "),n("p",[e._v("If this is the intended way of usage, take a look at the\n"),n("RouterLink",{attrs:{to:"/frame/evm.html"}},[n("code",[e._v("pallet-evm")])]),e._v(" documentation.")],1),e._v(" "),n("h2",{attrs:{id:"post-block-generation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#post-block-generation"}},[e._v("#")]),e._v(" Post-block generation")]),e._v(" "),n("p",[e._v("On other situations, a full emulation of Ethereum may be desired so\nthat Ethereum RPCs become available. In this model, a full Ethereum\nblock is emulated within the Substrate runtime, and is generated\npost-block for the consumption rest of the APIs. In addition to\nSubstrate account signing, traditional Ethereum transactions are also\nprocessed and validated.")]),e._v(" "),n("p",[e._v("If this is the intended way of usage, take a look at the\n"),n("RouterLink",{attrs:{to:"/frame/ethereum.html"}},[n("code",[e._v("pallet-ethereum")])]),e._v(" documentation.")],1),e._v(" "),n("h2",{attrs:{id:"pre-block-feeding"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pre-block-feeding"}},[e._v("#")]),e._v(" Pre-block feeding")]),e._v(" "),n("p",[e._v("An Ethereum-based blockchain can use the pre-block feeding strategy to\nmigrate to Substrate. In the post-block generation model, the Ethereum\nblock is generated "),n("em",[e._v("after")]),e._v(" runtime execution. In the pre-block feeding\nmodel, the Ethereum block is feeded in "),n("em",[e._v("before")]),e._v(" runtime\nexecution.")]),e._v(" "),n("p",[e._v("A blockchain can first use pre-block feeding with empty extrinsic\nrequirement. In this way, because no other external information is\nfeeded, combined with a suitable consensus engine, one Ethereum block\nwill have an exact corresponding Substrate block. This is called the\n"),n("strong",[e._v("wrapper block")]),e._v(" strategy, and it allows Frontier to function as a\nnormal Ethereum client.")]),e._v(" "),n("p",[e._v("With a sufficient number of the network running a Frontier node, the\nblockchain can then initiate a hard fork, allowing extrinsic to be\nadded in. From there on, the blockchain is migrated to Substrate and\ncan enjoy Substrate-specific features like on-chain governance and\nforkless upgrade.")]),e._v(" "),n("p",[e._v("A complete in-storage pre-block feeding requires using Substrate's\nchild storage. It can also be implemented using the stateless client\nstrategy to eliminate that need.")]),e._v(" "),n("p",[e._v("Pre-block feeding is still work-in-progress.")])])}),[],!1,null,null,null);t.default=i.exports}}]);