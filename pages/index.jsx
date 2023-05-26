import { useState } from "react";

import clientPromise from "../lib/mongodb";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { MainContent } from "../components/MainContent/MainContent";

import styled from "styled-components";

const StyledWrapper = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 10px;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    height: calc(100vh - 84px);
    width: 768px;
    display: grid;
    gap: 1rem;
    grid-template-columns: 200px auto;
    grid-template-areas: "sidebar main";
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 300px auto;
    width: 1200px;
  }
`;

export const getServerSideProps = async () => {
  try {
    await clientPromise;
    const res = await fetch(process.env.PUBLIC_URL + "/api/goods");
    const goods = await res.json();

    const shops = goods
      .map((good) => good.shop)
      .filter((value, index, self) => self.indexOf(value) === index);

    return {
      props: { goods, shops },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};

export default function Home({ goods, shops }) {
  const [selectedShop, setSelectedShop] = useState(shops[0]);

  return (
    <StyledWrapper>
      <Sidebar
        shops={shops}
        handleShopClick={(shop) => {
          setSelectedShop(shop);
        }}
      />
      <MainContent goods={goods.filter((item) => item.shop === selectedShop)} />
    </StyledWrapper>
  );
}
