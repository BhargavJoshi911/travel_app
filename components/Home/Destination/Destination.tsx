import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import DestinationSlider from "./DestinationSlider";

const Destination = () => {
  return (
    <div className="pt-20 pb-20">
      <SectionHeading heading="Exploring Popular Destination" />

      {/* Section Content*/}
      <div
        className="mt-14 w-[80%] mx-auto"
        data-aos="flip-up"
        data-aos-anchor-placement="top-center"
      >
        {/* Slider */}
        <DestinationSlider />
      </div>
    </div>
  );
};

export default Destination;
