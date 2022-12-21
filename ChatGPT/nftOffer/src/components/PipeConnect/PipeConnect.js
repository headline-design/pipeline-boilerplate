2 / 2;

import React, { useState } from "react";
import Pipeline from "@pipeline-ui-2/pipeline";

const PipeConnect = () => {
  const [myAddress, setMyAddress] = useState("");
  const [walletBalance, setWalletBalance] = useState(0);
  const [checked, setChecked] = useState(true);
  const [labelNet, setLabelNet] = useState("MainNet");

  const wallet = Pipeline.init();
  Pipeline.main = true;

  const setNet = (event) => {
    if (event.target.value === "TestNet") {
      Pipeline.main = false;
    } else {
      Pipeline.main = true;
    }
  };

  const switchWallet = (event) => {
    Pipeline.pipeConnector = event.target.id;
    Pipeline.connect(wallet).then((data) => {
      document.getElementById("wallet-connect-2").style.display = "none";
      document.getElementById("wallet-connected").style.display = "flex";
      setMyAddress(data);
      Pipeline.balance(data).then((data2) => {
        document.getElementById("modal-root-1").style.display = "none";
        document.getElementById("modal-root-2").style.display = "none";
        setWalletBalance(data2);
        // this.refresh(data)
        setInterval(refresh, 5000);
      });
    });
  };

  const switchNet = (event) => {
    Pipeline.main = event.target.checked;
    setChecked(!checked);
    const message1 = "MainNet";
    const message2 = "Testnet";
    if (Pipeline.main) {
      setLabelNet(message1);
    } else {
      setLabelNet(message2);
    }
  };

  const refresh = () => {
    Pipeline.balance(myAddress).then((data3) => {
      setWalletBalance(data3);
    });
  };

  return (
    <div>
      <button
        id="WalletConnect"
        className="crayons-btn w-100"
        onClick={switchWallet}
      >
        WalletConnect
      </button>
      <button
        id="AlgoSigner"
        className="crayons-btn w-100"
        onClick={switchWallet}
      >
        AlgoSigner
      </button>
      <button
        id="myAlgoWallet"
        className="crayons-btn w-100"
        onClick={switchWallet}
      >
        MyAlgoWallet
      </button>
    </div>
  );
};

export default PipeConnect;
