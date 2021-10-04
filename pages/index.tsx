import type { NextPage } from "next";

import MarketOrder from "../modules/market-order";

// import Toast from "../common/components/toast";

const Home: NextPage = () => {
  return (
    <main>
      {/* <Toast /> */}
      <MarketOrder />
    </main>
  );
};

export default Home;
