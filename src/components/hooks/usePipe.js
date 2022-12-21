import { useEffect, useState } from "react";
import Pipeline from "@pipeline-ui-2/pipeline";

const usePipe = (contractId) => {
  const [contract, setContract] = useState(null);
  const [connection, setConnection] = useState(null);
  const [connected, setConnected] = useState(null);

  useEffect(() => {
    Pipeline.connect().then((conn) => {
      setConnection(connected);
    });
  }, [contractId]);

  return { contract, connection };
};

export default usePipe;
