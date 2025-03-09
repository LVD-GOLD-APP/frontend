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

  useEffect(() => {
    const fetchFooter = async () => {
      const response = await instance(`/api/footers?populate=*`);
      const footers: IFooters = response.data;

      setFooterData(response.data[0].footer_data);
    };

    fetchFooter();
  }, []);

  return { footerData };
};
