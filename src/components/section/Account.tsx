import Flex from "../Flex";
import React from "react";
import Text from "../Text";

const Account = ({
  name,
  bankInfo
}: {
  name: string;
  bankInfo: { bankName: string; accountNumber: string };
}) => {
  return (
    <Flex
      direction="row"
      justify="space-between"
      align="center"
      className="p-16pxr bg-[#F4F4F4]"
    >
      <Flex align="start text-14pxr leading-16.5pxr">
        <Text className="font-bold">{name}</Text>
        <Text className="mt-6pxr">{`${bankInfo.bankName} ${bankInfo.accountNumber}`}</Text>
      </Flex>
      <button className="text-[#474747] text-12pxr leading-25pxr bg-[#E2E2E2] px-12pxr font-bold">
        복사
      </button>
    </Flex>
  );
};

export default Account;
