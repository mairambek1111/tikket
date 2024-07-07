import React from "react";
import Image from "next/image";
import galery1 from "../../../public/galery1.jpg";
import galery2 from "../../../public/galery2.jpg";
import galery4 from "../../../public/galery4.jpg";
import galery5 from "../../../public/galery5.jpg";
import galery9 from "../../../public/galery9.jpg";
import galery10 from "../../../public/galery10.jpg";
import galery12 from "../../../public/galery12.jpg";
import galery13 from "../../../public/galery13.jpg";
import galery14 from "../../../public/galery14.jpg";
import galery15 from "../../../public/galery15.jpg";
import galery16 from "../../../public/image1.jpg";

function Galery() {
  const imageSources = [
    galery2,
    galery4,
    galery1,
    galery5,
    galery9,
    galery10,
    galery12,
    galery13,
    galery14,
    galery15,
    galery16,
  ];

  return (
    <div className="galery">
      <div className="container">
        <h2 className="text-center mb-[3pc] text-[36px] mt-[5pc]">Галерея</h2>
        <div className="galery__content flex flex-wrap justify-center gap-5">
          {imageSources.map((src, index) => (
            <div
              key={index}
              className="galery__content__block"
              style={{ width: "calc(50% - 10px)", marginBottom: "10px" }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "75%",
                }}
              >
                <Image
                  src={src}
                  layout="fill"
                  objectFit="cover"
                  alt={`конгресс фотография ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Galery;
