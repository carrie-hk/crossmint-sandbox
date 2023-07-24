import * as React from "react";
import { motion } from "framer-motion";
import {CrossmintPayButton} from "@crossmint/client-sdk-react-ui";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "#DD9C27"
  }
};

export const Example = () => (
  <div className="container">
    <CrossmintPayButton
            clientId="16680770-552e-4d07-a8c1-acf66f24eaca"
            mintConfig={{
              type: 'solana-auction-house',
              buyPrice: '1',
              sellerWallet: '5WLH3kvG3HRSPbaXkHJHiEEFqrNg3oXtdXbgzcWXxpu',
              mintHash: 'CgW71R65bUtr6pDPG1ohMWnZfgU6Vk82GSTvUZ4ByUrs',
            }}
            environment="staging"
          ></CrossmintPayButton>
  </div>
);
