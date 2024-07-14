import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import CreateProduct from "../components/CreateProduct/CreateProduct";
import { Card, Divider, Grid } from "@mui/material";
import { RiSearchLine } from "react-icons/ri";
import { BsFilterRight } from "react-icons/bs";
import ExchangeList from "../components/ExchangeList/ExchangeList";
import Menu from "../components/Menu/Menu";
import Top5PostProduct from "../components/TopAccount/Top5PostProduct";
import Top5Transaction from "../components/TopAccount/Top5Transaction";
import Weather from "../components/Weather";
import SignalRServices from "../services/signalR/signalRServices";

const HomePage = () => {
  const [auth, setAuth] = useState<string | null>();
  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    setAuth(loggedIn);
  }, [auth]);
  return (
    <div className="mt-[100px]">
      {auth == "true" && (
        <SignalRServices token={localStorage.getItem("jwtToken")} />
      )}
      <Grid
        className="flex justify-between text-center text-black"
        container
        xs={12}
      >
        <Grid item xs={3} spacing={1}>
          <div className="fixed w-[20%]">
            {auth == "true" ? (
              <>
                <div className="ml-2 my-4 flex flex-col">
                  <Menu />
                </div>
                <Divider variant="middle" orientation="horizontal" />
                <div className="my-5 mx-3">
                  <Weather />
                </div>{" "}
              </>
            ) : (
              <></>
            )}
          </div>
        </Grid>

        <Grid item xs={4}>
          <div className="my-4">
            {auth == "true" ? <CreateProduct /> : <div></div>}
            <div className="flex justify-center text-center items-center my-1">
              <Card className="flex items-center p-2 text-black bg-slate-200 w-auto">
                <div className="bg-slate-200 p-3 rounded-tl-md rounded-bl-md">
                  <RiSearchLine size={"24px"} />
                </div>
                <input
                  placeholder="Search..."
                  className="py-3 pr-12 md:pr-52 w-[80%] outline-none bg-slate-200 rounded-tr-md rounded-br-md"
                />
                <div className="p-3 rounded-full bg-slate-200 ml-1 cursor-pointer transition-all duration-300 hover:bg-slate-400 hover:text-white">
                  <BsFilterRight size={"25px"} />
                </div>
              </Card>
            </div>
            <div className=" text-center text-black flex flex-col s my-1">
              <ExchangeList />
            </div>
          </div>
        </Grid>
        <Grid item xs={3} spacing={1}>
          <div className="mr-2 h-[auto] w-[350px] my-4 gap-4 fixed flex flex-col overflow-y-auto">
            <Top5PostProduct />
            <Divider variant="middle" />
            <Top5Transaction />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
