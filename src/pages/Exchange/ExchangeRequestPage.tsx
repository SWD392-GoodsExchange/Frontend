import React, { useEffect, useState } from "react";
import exchangeApi from "../../services/exchangeApi";
import { ExchangeRequest } from "../../interfaces/ExchangeRequest";
import ExchangeRequestList from "../../components/ExchangeRequest/ExchangeRequestList";

const ExchangeRequestPage = () => {
  const [requestExchangeList, setRequestExchangeList] =
    useState<ExchangeRequest[]>();
  useEffect(() => {
    const fetchRequestExchange = async () => {
      const requestExchanges: any = await exchangeApi.getAllRequestExchange();
      setRequestExchangeList(requestExchanges.data);
    };
    fetchRequestExchange();
  }, [requestExchangeList]);
  return (
    <div className="bg-orange-300 h-auto text-white pt-[100px]">
      <ExchangeRequestList exchangeList={requestExchangeList} />
    </div>
  );
};

export default ExchangeRequestPage;
