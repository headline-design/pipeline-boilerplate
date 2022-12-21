import React, { useState } from "react";
import Pipeline from "@pipeline-ui-2/pipeline";
import { sendTxns, configAlgosdk } from "@pipeline-ui-2/pipeline/utils";
import { ToastContainer, toast } from "react-toastify";
import OfferForm from "./components/OfferForm";
import algosdk from "algosdk";

const MainNode = "https://node.testnet.algoexplorerapi.io";
const token = "";
const server = MainNode;
const port = "";
const algodclient = new algosdk.Algodv2(token, server, port);
const indexer = "https://algoindexer.testnet.algoexplorerapi.io/v2/";
const myAlgoWallet = Pipeline.init();

Pipeline.main = true;

var refresh = false;
var mynet = Pipeline.main ? "MainNet" : "TestNet";

const tealNames = ["nftOffer"];

const tealContracts = {
  nftOffer: {},
};

const nftId = 712922982;

var asset = 0;
var appId = 12345678;

let appAddress = 0;
// Make an offer on the NFT

// The NFT is transferred from Bob to Alice and the offer amount is transferred from Alice to Bob

const App = () => {
  // Alice wants to buy an NFT from Bob for 1000 Algos
  const offerAmount = 1000;
  const offerMaker = Pipeline.address;
  const offerTaker = Pipeline.address;
  // Alice makes an offer on the NFT

  {
    /*const makeOffer = async (offerAmount, offerMaker) => {
  let txid1 = await Pipeline.send(
    appAddress,
    1000000,
    'funding app address',
    undefined,
    undefined,
    0
)
};


makeOffer(offerAmount, offerMaker);

// Accept the current offer on the NFT
const acceptOffer = async (offerTaker) => {
  let result = await Pipeline.send(
    appAddress,
    "acceptOffer",
    offerTaker
  ).execute(Pipeline);
  console.log(result);
};



// Bob sees the offer and decides to accept it
acceptOffer(offerTaker);
  // Set the contract address
*/
  }

  const [address, setAddress] = useState("");
  async function connect() {
    let address = await Pipeline.connect();
    alert(address);
    setAddress(address);
  }
  const showToast = (type, message) => {
    if (type === "error") {
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
    } else {
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
    }
  };

  return (
    <div>
      <OfferForm
        amount={offerAmount}
        recipient={offerTaker}
        nftId={nftId}
        showToast={showToast}
      />
      <ToastContainer />
    </div>
  );
};

export default App;
