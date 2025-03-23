import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-24">
      {/*Section Heading*/}
      <SectionHeading heading="Why Choose Us?" />
      <div className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20">
        {/*Why Choose Card*/}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <WhyChooseCard
            image="/images/c1.svg"
            title="Best Price Guarantee"
            description="We offer the most competitive prices in the market. Found a better deal elsewhere? We’ll match it! Enjoy premium services at the best rates, guaranteed."
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
        >
          <WhyChooseCard
            image="/images/c2.svg"
            title="Easy & Quick Booking"
            description="Our seamless booking process ensures you can secure your spot in just a few clicks. No hassle, no complications—just a smooth and effortless experience."
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <WhyChooseCard
            image="/images/c3.svg"
            title="Customer Care 24/7"
            description="Need assistance? Our dedicated support team is available around the clock to help with any questions or concerns, ensuring a worry-free experience for you."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
