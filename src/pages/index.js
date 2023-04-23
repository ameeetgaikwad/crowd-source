import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "@/components/card";
const inter = Inter({ subsets: ["latin"] });
import About from "./about";
import Link from "next/link";

import { useState } from "react";

export default function Home() {
  //
  useState(() => {
    async function fetchAirtableData() {
      const baseId = "appXXXXXXXXXXXXXX";
      const tableName = "MyTable";
      const url =
        "https://api.airtable.com/v0/appr0xSKd3TeDCKhI/tblbyU6xGfJKyCWgt/";
      const token =
        "patuYSb1TiUfIJZ6d.2df1b08d28aebc0caa42fd9c630eabad2601a2b1a0135887a9f4ad2e1d50355a";

      fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.records);
          // Do something with the records
        })
        .catch((error) => {
          console.error(error);
        });
    }
    fetchAirtableData();
  }, []);
  return (
    // className="flex min-h-screen flex-col items-center justify-between"
    <main className="">
      <div className="flex flex-row basis-0 flex-wrap max-w-full justify-center ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}

// .btn-grad {
//   background-image: linear-gradient(to right, #1F1C2C 0%, #928DAB  51%, #1F1C2C  100%);
//   margin: 10px;
//   padding: 15px 45px;
//   text-align: center;
//   text-transform: uppercase;
//   transition: 0.5s;
//   background-size: 200% auto;
//   color: white;
//   box-shadow: 0 0 20px #eee;
//   border-radius: 10px;
//   display: block;
// }

// .btn-grad:hover {
//   background-position: right center; /* change the direction of the change here */
//   color: #fff;
//   text-decoration: none;
// }
