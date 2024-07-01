import Image from "next/image";
import "@/components/sale.scss";

function Sale() {
  return (
    <div className="sale">
      <div className="container max-w-[1140px] m-auto">
        <h2>Купить билеты для конгресса косметологов</h2>
        <div className="sale__content flex">
          <div className="sale__content__left">
            <div className="w-[80px] flex gap-[15px] items-center">
              <Image src={"/mbank.png"} alt="Mbank" width={100} height={100} />
              <p className="text-xl">1030120002306208</p>
            </div>
          </div>
          <div className="sale__content__right">
            <div>
              <p>Ваше фамилие</p>
              <input type="text" name="surname" placeholder="Муратова" />
            </div>
            <div>
              <p>Ваше имя</p>
              <input type="text" name="name" placeholder="Махабат" />
            </div>
            <div>
              <p>Ваш номер телефона</p>
              <input type="text" name="phone" placeholder="+996700700700" />
            </div>
            <div>
              <p>Ваш nickname в телеграмм</p>
              <input type="text" name="telegram" placeholder="@nickname" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sale;
