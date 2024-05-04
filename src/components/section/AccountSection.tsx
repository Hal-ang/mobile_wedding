"use client";

import Account from "./Account";
import Arcodion from "../Arcodion";
import Flex from "../Flex";
import React from "react";
import Spacing from "../Spacing";
import Text from "../Text";
import Title from "./Title";

const AccountSection = () => {
  return (
    <section className="w-full px-24pxr">
      <Title>{`GIFT FOR\nWEDDING\nCEREMONY`}</Title>
      <Spacing size={20} />
      <Arcodion>
        <Arcodion.Header className="w-full py-21.5pxr border-t border-black">
          <Text>신랑측 계좌번호</Text>
          <Arcodion.Arrow />
        </Arcodion.Header>
        <Arcodion.Content>
          <Account
            name="구태훈"
            bankInfo={{ bankName: "신한은행", accountNumber: "110-123-45678" }}
          />
          <Spacing size={1} />
          <Account
            name="구태훈"
            bankInfo={{ bankName: "신한은행", accountNumber: "110-123-45678" }}
          />
        </Arcodion.Content>
      </Arcodion>
      <Spacing size={20} />
      <Arcodion>
        <Arcodion.Header className="w-full py-21.5pxr border-t border-black">
          <Text>신부측 계좌번호</Text>
          <Arcodion.Arrow />
        </Arcodion.Header>
        <Arcodion.Content>
          <Account
            name="구태훈"
            bankInfo={{ bankName: "신한은행", accountNumber: "110-123-45678" }}
          />
          <Spacing size={1} />
          <Account
            name="구태훈"
            bankInfo={{ bankName: "신한은행", accountNumber: "110-123-45678" }}
          />
        </Arcodion.Content>
      </Arcodion>
    </section>
  );
};

export default AccountSection;
