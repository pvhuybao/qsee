import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "QSEE JSC - Giải pháp năng lượng mặt trời & Cơ điện lạnh",
  description:
    "Công ty Cổ phần Xây dựng và Dịch vụ Kỹ thuật QSEE: Cơ - Điện - Lạnh, cấp thoát nước, hệ thống điện mặt trời. Tư vấn, thiết kế, tài chính, mua sắm và lắp đặt trọn gói.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionTwo />
      <Features />
      <Blog type="company" />
      <Blog type="fetured" />
      <Blog type="family" />
      <Products />
      {/* <Blog /> */}
      {/* <Video /> */}
      <Brands />
      <AboutSectionOne />
      <Testimonials />
      {/* <Pricing /> */}
      <Contact />
    </>
  );
}
