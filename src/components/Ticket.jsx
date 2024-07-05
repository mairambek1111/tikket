// "use client";
// import React, { useEffect, useRef } from "react";
// import { toJpeg } from "html-to-image";
// import fileDownload from "js-file-download";
// const ResponseData = ({ data, download, setTicket }) => {
//   const ref = useRef(null);

//   const handleSaveAndClose = async () => {
//     if (ref.current === null) {
//       return;
//     }

//     try {
//       const dataUrl = await toJpeg(ref.current, {
//         quality: 0.95,
//         backgroundColor: "#ffffff",
//       });
//       if (dataUrl) {
//         const binaryString = atob(dataUrl.split(",")[1]);
//         const len = binaryString.length;
//         const bytes = new Uint8Array(len);
//         for (let i = 0; i < len; i++) {
//           bytes[i] = binaryString.charCodeAt(i);
//         }
//         const blob = new Blob([bytes], { type: "image/jpeg" });
//         fileDownload(blob, "response-data.jpg");
//       } else {
//         console.error("Data URL is null or undefined");
//       }
//     } catch (error) {
//       console.error("Could not convert to image", error);
//     }
//   };
//   useEffect(() => {
//     if (download == true) {
//       handleSaveAndClose();
//     }
//   }, [download]);
//   return (
//     <div
//       style={{
//         height: "350px",
//         width: "40%",
//         padding: "15px 30px",
//         backgroundSize: "cover",
//         padding: "20px",
//         boxSizing: "border-box",
//       }}
//       className="contianer flex items-center justify-between"
//     >
//       <div></div>
//       <div className="flex flex-">
//         <h1 className="text-center text-[36px] text-black">ваш билет</h1>
//         <div ref={ref}>
//           <h6 style={{ fontSize: "26px", color: "black" }}>
//             {data.surname} {data.name}
//           </h6>
//           <h6 style={{ color: "#000", fontSize: "24px" }}>
//             Ваш номер:
//             {data.phone}
//           </h6>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResponseData;
"use client";
import React, { useEffect, useRef } from "react";
import { toJpeg } from "html-to-image";

const ResponseData = ({ data, download, setTicket }) => {
  const ref = useRef(null);

  const handleSaveAndClose = async () => {
    if (ref.current === null) {
      return;
    }

    try {
      const dataUrl = await toJpeg(ref.current, {
        quality: 0.95,
        backgroundColor: "#ffffff",
      });
      const binaryString = atob(dataUrl.split(",")[1]);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const blob = new Blob([bytes], { type: "image/jpeg" });

      const file = new File([blob], "response-data.jpg", {
        type: "image/jpeg",
      });
      console.log(file);
      setTicket(file, "file");
    } catch (error) {
      console.error("Could not convert to image", error);
    }
  };

  useEffect(() => {
    if (download) {
      handleSaveAndClose();
      console.log(1);
    }
  }, [download]);

  return (
    <div
      style={{
        height: "350px",
        width: "40%",
        padding: "15px 30px",
        backgroundSize: "cover",
        boxSizing: "border-box",
      }}
      className="container flex items-center justify-between"
    >
      <div></div>
      <div className="flex flex-col">
        <h1 className="text-center text-[36px] text-black">ваш билет</h1>
        <div ref={ref}>
          <h6 style={{ fontSize: "26px", color: "black" }}>
            {data.surname} {data.name}
          </h6>
          <h6 style={{ color: "#000", fontSize: "24px" }}>
            Ваш номер: {data.phone}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default ResponseData;
