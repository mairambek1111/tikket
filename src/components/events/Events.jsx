"use client"
import { Element } from "react-scroll";
import styles from "./events.module.scss";
function Events() {
  return (
    <>
      <div className={styles.event}>
        <div className="container">
          <div className={styles.content}>
            <h1 className={styles.title}>О Мероприятии</h1>
            <p className={styles.text}>
              Общество косметологов Кыргызстана ОКК Общество косметологов
              Кыргызстана ОКК – профессиональное сообщество специалистов в
              области косметологии, основанное в 2019 году. В него входят
              врачи-дерматокосметологи, медсестры и мастера эстетики.
            </p>
            <h3 className={styles.pretitle}>
              Основные направления работы ОКК:
            </h3>
            <ol className={styles.lists}>
              <li className={styles.list}>
                1. Аккредитация врачей-дерматокосметологов.
              </li>
              <li className={styles.list}>
                2. Обучающие курсы по аппаратной косметологии, контурной
                пластике и ботулинотерапии.
              </li>
              <li className={styles.list}>3. Международные конгрессы.</li>
              <li className={styles.list}>
                4. Разработка профессиональных стандартов и клинических
                протоколов.
              </li>
            </ol>
            <h3 className={styles.okktitle}>
              Преимущества участия в мероприятиях ОКК:
            </h3>
            <ul className={styles.lists2}>
              <li className={styles.list2}>
                1. Новейшие знания и протоколы анти-эйдж терапии.
              </li>
              <li className={styles.list2}>
                2. Обсуждение профессиональных вопросов с международными
                экспертами.
              </li>
              <li className={styles.list2}>
                3. Общение с профессионалами мирового уровня.
              </li>
              <li className={styles.list2}>
                4. Прекрасный отдых на Иссык-Куле.
              </li>
              <li className={styles.list2}>
                5. Приятное время с коллегами и друзьями.
              </li>
              <li className={styles.list2}>5. 12 кредитных часов.</li>
              <li className={styles.list2}>
                6.Знакомство с сертифицированной косметологической продукцией.
              </li>
              <li className={styles.list2}>
                7. Подарки и скидки от производителей и дистрибьюторов.
              </li>
            </ul>
          </div>
        </div>
        <br />
      <Element name="test2"></Element>
      </div>
    </>
  );
}

export default Events;
