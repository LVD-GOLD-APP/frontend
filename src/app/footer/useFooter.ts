import { useEffect, useState } from "react";
import { IFooterData } from "@/lib/types/IFooter";
import { IMeta } from "@/lib/types/IPagination";
import axios from "axios";

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
      const response = await axios(`/api/footers?populate=*`);
      const footers: IFooters = response.data;
      console.log(response);
      const footer = Array.isArray(footers.data) ? footers.data[0]?.footer_data : footers.data?.footer_data || null;
      setFooterData(footer);
    };

    fetchFooter();
  }, []);

  return { footerData };
};
