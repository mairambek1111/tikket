import styles from "./events.module.scss";
function Events() {
  return (
    <>
      <div className={styles.event}>
        <div className="container">
          <div className={styles.content}>
            <h1 className={styles.title}>
              Уважаемые косметологи посетите данное мероприятие.
            </h1>
            <h3 className={styles.pretitle}>
              Основные направления работы ОКК:
            </h3>
            <ol className={styles.lists}>
              <li className={styles.list}>
                1. Качественные знания и последние протоколы лечения в анти-эйдж
                терапии.
              </li>
              <li className={styles.list}>
                2. Обсудите все волнующие вас профессиональные вопросы с
                ведущими международными спикерами.
              </li>
              <li className={styles.list}>
                3. Пообщаетесь и ближе познакомитесь с профессионалами
                международного уровня.
              </li>
              <li className={styles.list}>
                4. Природа Иссыкуля подарит вам отличный отдых.
              </li>
              <li className={styles.list}>
                5. Весело проведете время со своими коллегами и друзьями.
              </li>
              <li className={styles.list}>6. Получите 12 кредит часов</li>
              <li className={styles.list}>
                7. Познакомитесь с косметологической продукцией,
                зарегистрированной и сертифицированной в КР
              </li>{" "}
              <li className={styles.list}>
                8. Получите подарки, бонусы и скидки от производителей и
                дистрибьюторов косметологической продукции. 4. Природа Иссыкуля
                подарит вам отличный отдых.
              </li>
            </ol>
            <h3 className={styles.okktitle}>
              Преимущества участия в нашем конгрессе :
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
      </div>
    </>
  );
}

export default Events;
