import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Hợp tác cùng QSEE"
        description="Chúng tôi hân hạnh được đồng hành và phục vụ Quý vị với tinh thần trách nhiệm, tiến độ đảm bảo và chất lượng cao nhất."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
