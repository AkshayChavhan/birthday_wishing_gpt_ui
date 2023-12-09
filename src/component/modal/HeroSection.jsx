import React from "react";

function HeroSection({ source = "", alt_name = "", sectionPara }) {
  return (
    <div className="register_items flex flex-col">
      {sectionPara && (
        <h2
          className="dairymilk text-center text-white text-xl font-bold p-4"
        >
          {sectionPara}
        </h2>
      )}
      {source !== "" && (
        <div className="crop_div self-center">
          <img
            className="image_center"
            height={"100%"}
            width={"100%"}
            src={source}
            alt={alt_name}
          />
        </div>
      )}
    </div>
  );
}

export default HeroSection;
