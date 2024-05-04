"use client";

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
          <Flex>
            <Flex>
              <Text>구태훈</Text>
              <Text>신한은행 110-123</Text>
            </Flex>
            <button>복사</button>
          </Flex>
        </Arcodion.Content>
      </Arcodion>
      <Spacing size={20} />
      <Arcodion>
        <Arcodion.Header className="w-full py-21.5pxr border-t border-black">
          <Text>신부측 계좌번호</Text>
          <Arcodion.Arrow />
        </Arcodion.Header>
        <Arcodion.Content>
          <Flex>
            <Flex>
              <Text>구태훈</Text>
              <Text>신한은행 110-123</Text>
            </Flex>
            <button>복사</button>
          </Flex>
        </Arcodion.Content>
      </Arcodion>
    </section>
  );
};

export default AccountSection;
