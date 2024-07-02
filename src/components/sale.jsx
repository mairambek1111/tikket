// // "use client"
// // import Image from "next/image";
// // import "@/components/sale.scss";
// // import { useState } from "react";
// // import axios from "axios";

// // ("https://t.me/ticketGroup");
// // function Sale() {
// //   const [message, setMessage] = useState("lfpqwcvlwp[elc");

// //   const Baseurl =
// //     "https://api.telegram.org/bot7467791253:AAGUyLEzf9mKHlMr8KZEYHOMdD57MCdhT0U/";
// //   const sendMesage = async () => {
// //     try {
// //       const url = `${Baseurl}sendMessage?chat_id=@ticketGroup&text=${message}`;
// //       await axios.get(url);
// //     } catch (e) {
// //       console.log(e, "error");
// //     }
// //   };
// //   return (
// //     <div className="sale mt-[7pc]">
// //       <div className="container max-w-[1140px] m-auto">
// //         <h2 className="mb-[60px]">Купить билеты для конгресса косметологов</h2>
// //         <div className="sale__content flex">
// //           <div className="sale__content__left">
// //             <div className="w-[80px] flex gap-[15px] items-center">
// //               <Image src={"/mbank.png"} alt="Mbank" width={100} height={100} />
// //               <p className="text-xl pt-[5px]">1030120002306208</p>
// //             </div>
// //           </div>
// //           <div className="sale__content__right">
// //             <div>
// //               <p>Ваше фамилие</p>
// //               <input type="text" name="surname" placeholder="Муратова" />
// //             </div>
// //             <div>
// //               <p>Ваше имя</p>
// //               <input type="text" name="name" placeholder="Махабат" />
// //             </div>
// //             <div>
// //               <p>Ваш номер телефона</p>
// //               <input type="text" name="phone" placeholder="+996700700700" />
// //             </div>
// //             <div>
// //               <p>Ваш nickname в телеграмм</p>
// //               <input type="text" name="telegram" placeholder="@nickname" />
// //             </div>
// //             <div className="w-[100%] flex justify-end mr-[100px]">
// //               <button onClick={sendMesage}>отправить</button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Sale;
// "use client";
// import Image from "next/image";
// import "@/components/sale.scss";
// import { useState } from "react";
// import axios from "axios";

// function Sale() {
//   const [message, setMessage] = useState("");
//   const [surname, setSurname] = useState("");
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [telegram, setTelegram] = useState("");
//   const [photo, setPhoto] = useState(null);

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
//     if (!photo) {
//       console.log("No photo selected");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("chat_id", "@ticketGroup");
//     formData.append("photo", photo);
//     formData.append("caption", message);

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

//   return (
//     <div className="sale mt-[7pc]">
//       <div className="container max-w-[1140px] m-auto">
//         <h2 className="mb-[60px]">Купить билеты для конгресса косметологов</h2>
//         <div className="sale__content flex">
//           <div className="sale__content__left">
//             <div className="w-[80px] flex gap-[15px] items-center">
//               <Image src={"/mbank.png"} alt="Mbank" width={100} height={100} />
//               <p className="text-xl pt-[5px]">1030120002306208</p>
//             </div>
//           </div>
//           <div className="sale__content__right">
//             <div>
//               <p>Ваше фамилие</p>
//               <input
//                 type="text"
//                 name="surname"
//                 placeholder="Муратова"
//                 value={surname}
//                 onChange={(e) => setSurname(e.target.value)}
//               />
//             </div>
//             <div>
//               <p>Ваше имя</p>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Махабат"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div>
//               <p>Ваш номер телефона</p>
//               <input
//                 type="text"
//                 name="phone"
//                 placeholder="+996700700700"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//               />
//             </div>
//             <div>
//               <p>Ваш nickname в телеграмм</p>
//               <input
//                 type="text"
//                 name="telegram"
//                 placeholder="@nickname"
//                 value={telegram}
//                 onChange={(e) => setTelegram(e.target.value)}
//               />
//             </div>
//             <div>
//               <p>Загрузить фотографию</p>
//               <input
//                 type="file"
//                 onChange={(e) => setPhoto(e.target.files[0])}
//               />
//             </div>
//             <div className="w-[100%] flex justify-end mr-[100px] gap-[10px]">
//               <button onClick={(sendPhoto, sendMessage)}>Отправить фото</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sale;
"use client";
import Image from "next/image";
import "@/components/sale.scss";
import { useState } from "react";
import axios from "axios";

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
    <div className="sale mt-[7pc]">
      <div className="container max-w-[1140px] m-auto">
        <h2 className="mb-[60px]">Купить билеты для конгресса косметологов</h2>
        <div className="sale__content flex">
          <div className="sale__content__left">
            <div className="w-[80px] flex gap-[15px] items-center">
              <Image src={"/mbank.png"} alt="Mbank" width={100} height={100} />
              <p className="text-xl pt-[5px]">1030120002306208</p>
            </div>
          </div>
          <div className="sale__content__right">
            <div>
              <p>Ваше фамилие</p>
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
                type="file"
                onChange={(e) => setPhoto(e.target.files[0])}
              />
            </div>
            <div className="w-[100%] flex justify-end mr-[100px] gap-[10px]">
              <button onClick={handleSubmit}>Отправить сообщение и фото</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sale;
