"use client";

import { useParams } from "next/navigation";

function Page() {
  const { slug } = useParams();

  return (
    <div>
      <h1>Trang: {slug}</h1>
      <p>Hiển thị nội dung tương ứng với {slug}</p>
    </div>
  );
}

export default Page;
