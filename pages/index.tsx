import type { NextPage } from "next";

import MarketOrder from "../modules/order-card";

// import Toast from "../common/components/toast";

const Home: NextPage = () => {
  return (
    <main className="main">
      {/* <Toast /> */}
      <MarketOrder />
    </main>
  );
};

export default Home;
