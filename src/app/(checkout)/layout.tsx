import CheckoutFooter from "@/components/checkout/CheckoutFooter";
import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Thanh toan",
  description: "Generated by create next app",
};

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <CheckoutFooter />
      </body>
    </html>
  );
}
