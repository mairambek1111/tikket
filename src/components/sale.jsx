// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import axios from "axios";
// import { Element } from "react-scroll";
// import "./sale.scss";
// import ResponseData from "./Ticket";

// function Sale() {
//   const [ticket, setTicket] = useState(null);
//   const [surname, setSurname] = useState("");
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [telegram, setTelegram] = useState("");
//   const [photo, setPhoto] = useState(null);
//   const [download, setDownload] = useState(false);

//   const Baseurl =
//     "https://api.telegram.org/bot7467791253:AAGUyLEzf9mKHlMr8KZEYHOMdD57MCdhT0U/";

//   const sendMessage = async () => {
//     const fullMessage = `Фамилия: ${surname}\nИмя: ${name}\nТелефон: ${phone}\nТелеграмм: ${telegram}`;
//     try {
//       const url = `${Baseurl}sendMessage?chat_id=@ticketGroup&text=${encodeURIComponent(
//         fullMessage
//       )}`;
//       await axios.get(url);
//     } catch (e) {
//       console.log(e, "error");
//     }
//   };

//   const sendPhoto = async () => {
//     if (!ticket) {
//       console.log("No ticket image generated");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("chat_id", "@ticketGroup");
//     formData.append("photo", ticket);

//     try {
//       const url = `${Baseurl}sendPhoto`;
//       await axios.post(url, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//     } catch (e) {
//       console.log(e, "error");
//     }
//   };

//   const handleSubmit = () => {
//     setDownload(true);
//   };

//   const handleDownloadComplete = () => {
//     sendMessage();
//     sendPhoto();
//   };

//   return (
//     <>
//       <div className="sale mt-[7pc]">
//         <div className="container max-w-[1140px] m-auto">
//           <h2 className="mb-[60px]">III международный конгресс косметологов</h2>
//           <div className="sale__content flex items-start">
//             <div className="sale__content__left mt-[40px]">
//               <div className="mbank__block w-[80px] flex gap-[15px] items-center">
//                 <Image
//                   src={"/mbank.png"}
//                   alt="Mbank"
//                   width={150}
//                   height={150}
//                 />
//                 <p className="sale__mbank text-xl pt-[5px]">1030120002306208</p>
//               </div>
//               <div className="ul__div mt-[45px]">
//                 <p className="text-[24px]">Цены на билеты</p>
//                 <ul className="list-disc ml-[20px] text-[16px]">
//                   <li>один день: 3500 сом</li>
//                   <li>два дня: 6000 сом</li>
//                 </ul>
//               </div>
//             </div>
//             <div className="sale__content__right">
//               <div>
//                 <p>Ваша Фамилия</p>
//                 <input
//                   type="text"
//                   name="surname"
//                   placeholder="Муратова"
//                   value={surname}
//                   onChange={(e) => setSurname(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <p>Ваше имя</p>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Махабат"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <p>Ваш номер телефона</p>
//                 <input
//                   type="text"
//                   name="phone"
//                   placeholder="+996700700700"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <p>Ваш nickname в телеграмм, или же номер WhatsApp</p>
//                 <input
//                   type="text"
//                   name="telegram"
//                   placeholder="@nickname"
//                   value={telegram}
//                   onChange={(e) => setTelegram(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <p>Загрузить чек</p>
//                 <input
//                   className="file__input"
//                   type="file"
//                   onChange={(e) => setPhoto(e.target.files[0])}
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="sale__btn w-[100%] ml-[30%] mt-[40px] mb-[90px] gap-[10px]">
//             <button onClick={handleSubmit}>Отправить сообщение и фото</button>
//           </div>
//         </div>
//       </div>
//       <Element name="test1"></Element>
//     </>
//   );
// }

// export default Sale;
"use client";
import Image from "next/image";
import "@/components/sale.scss";
import { useState } from "react";
import axios from "axios";
import { Element } from "react-scroll";

function Sale() {
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [telegram, setTelegram] = useState("");
  const [photo, setPhoto] = useState(null);

  const Baseurl =
    "https://api.telegram.org/bot7467791253:AAGUyLEzf9mKHlMr8KZEYHOMdD57MCdhT0U/";

  const sendMessage = async () => {
    const fullMessage = `Фамилия: ${surname}\nИмя: ${name}\nТелефон: ${phone}\nТелеграмм: ${telegram}`;
    try {
      const url = `${Baseurl}sendMessage?chat_id=@ticketGroup&text=${encodeURIComponent(
        fullMessage
      )}`;
      await axios.get(url);
    } catch (e) {
      console.log(e, "error");
    }
  };

  const sendPhoto = async () => {
    if (!photo) {
      console.log("No photo selected");
      return;
    }

    const formData = new FormData();
    formData.append("chat_id", "@ticketGroup");
    formData.append("photo", photo);

    try {
      const url = `${Baseurl}sendPhoto`;
      await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (e) {
      console.log(e, "error");
    }
  };

  const handleSubmit = () => {
    sendMessage();
    sendPhoto();
  };

  return (
    <>
      <div className="sale mt-[7pc]">
        <div className="container max-w-[1140px] m-auto">
          <h2 className="mb-[60px]">Купить билет на III Международный</h2>
          <div className="sale__content flex items-start">
            <div className="sale__content__left mt-[40px]">
              <div className="mbank__block w-[80px] flex gap-[15px] items-center">
                <Image
                  src={"/mbank.png"}
                  alt="Mbank"
                  width={150}
                  height={150}
                />
                <p className="sale__mbank text-xl pt-[5px]">1030120002306208</p>
              </div>
              <div className="ul__div mt-[45px]">
                <p className="text-[24px]">Цены на билеты</p>
                <ul className="list-disc	ml-[20px] text-[16px]">
                  <li>1 день 3500</li>
                  <li>2 дня 6000</li>
                </ul>
              </div>
            </div>
            <div className="sale__content__right">
              <div>
                <p>Ваша Фамилия</p>
                <input
                  type="text"
                  name="surname"
                  placeholder="Муратова"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>
              <div>
                <p>Ваше имя</p>
                <input
                  type="text"
                  name="name"
                  placeholder="Махабат"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <p>Ваш номер телефона</p>
                <input
                  type="text"
                  name="phone"
                  placeholder="+996700700700"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <p>Ваш nickname в телеграмм,или же номер WhatsApp</p>
                <input
                  type="text"
                  name="telegram"
                  placeholder="@nickname"
                  value={telegram}
                  onChange={(e) => setTelegram(e.target.value)}
                />
              </div>
              <div>
                <p>Загрузить чек</p>
                <input
                  className="file__input"
                  type="file"
                  onChange={(e) => setPhoto(e.target.files[0])}
                />
              </div>
            </div>
          </div>
          <div className="sale__btn w-[100%]  ml-[30%] mt-[40px] mb-[90px] gap-[10px]">
            <button onClick={handleSubmit}>Отправить сообщение и фото</button>
          </div>
        </div>
      </div>
      <Element name="test1"></Element>
    </>
  );
}

export default Sale;
