/* eslint-disable @typescript-eslint/no-unused-vars */
import instance from "@/lib/axios-interceptor";
import { IFooterData } from "@/lib/types/IFooter";
import { IMeta } from "@/lib/types/IPagination";
import { useEffect, useState } from "react";

interface IFooters {
  data: {
    footer_data: IFooterData;
  };
  meta: IMeta;
}

export const useFooter = () => {
  const [footerData, setFooterData] = useState<IFooterData | null>(null);

  // useEffect(() => {
  //   // Thay vì fetch từ API, sử dụng mock data
  //   import("").then(({ mockFooterData }) => {
  //     setFooterData(mockFooterData);
  //   });
  // }, []);

  return { footerData };
};
