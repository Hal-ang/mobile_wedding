"use client";

import React, { useCallback } from "react";

import Flex from "../Flex";
import Text from "../Text";
import copy from "copy-to-clipboard";
import { useToast } from "../toast/ToastProvider";

const Account = ({
  name,
  bankInfo
}: {
  name: string;
  bankInfo: { bankName: string; accountNumber: string };
}) => {
  const { show } = useToast();

  const handleAccountCopy = useCallback(() => {
    copy(bankInfo.accountNumber.split("-").join(""));
    show("계좌번호가 복사되었어요");
  }, [show, bankInfo.accountNumber]);

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
      <button
        onClick={handleAccountCopy}
        className="text-[#474747] text-12pxr leading-25pxr bg-[#E2E2E2] px-12pxr font-bold"
      >
        복사
      </button>
    </Flex>
  );
};

export default Account;
