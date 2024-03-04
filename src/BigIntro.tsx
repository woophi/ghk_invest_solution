import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import { appStyles } from './app.css';
import simg1 from './assets/simg_1.png';
import simg2 from './assets/simg_2.png';
import simg3 from './assets/simg_3.png';
import simg4 from './assets/simg_4.png';

export const BigIntro = () => {
  return (
    <div style={{ padding: '0 .5rem' }}>
      <Typography.Text tag="p" weight="bold" view="primary-medium">
        Стратегии инвестирования в акции и облигации: как получать 30% годовых с помощью 3% ежемесячных инвестиций
      </Typography.Text>
      <Gap size={16} />
      <Typography.Text tag="p" view="primary-medium">
        Инвестирование является ключевым элементом финансового планирования и может значительно увеличить ваш капитал с
        течением времени. Мы рассмотрим некоторые возможные стратегии инвестирования в акции и облигации, которые позволят
        вам получать до 30% годовых от 3% ежемесячных вложений.
      </Typography.Text>
      <Gap size={16} />
      <div className={appStyles.smallCard}>
        <img src={simg1} className={appStyles.smallImg} />
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          <b>Стратегия ‘3-3’:</b> Данная стратегия предполагает ежемесячное инвестирование 3% своего капитала в акции и еще
          3% - в облигации. Это позволит вам диверсифицировать свой портфель и снизить риски.
        </Typography.Text>
      </div>
      <Gap size={16} />
      <div className={appStyles.smallCard}>
        <img src={simg2} className={appStyles.smallImg} />
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          <b>Стратегия реинвестирования дивидендов:</b> Если вы уже инвестируете, то регулярно реинвестируя дивиденды,
          полученные от акций, ваш капитал будет расти быстрее благодаря сложным процентам.
        </Typography.Text>
      </div>
      <Gap size={16} />
      <div className={appStyles.smallCard}>
        <img src={simg3} className={appStyles.smallImg} />
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          <b>Стратегия усреднения издержек:</b> Вместо того чтобы делать крупные инвестиции раз в несколько месяцев, делайте
          небольшие инвестиции ежемесячно. Это поможет снизить среднюю стоимость ваших инвестиций.
        </Typography.Text>
      </div>
      <Gap size={16} />
      <div className={appStyles.smallCard}>
        <img src={simg4} className={appStyles.smallImg} />
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          <b>Стратегия стоимостного инвестирования:</b> Вложение в недооцененные акции с потенциалом роста может принести
          значительную прибыль.
        </Typography.Text>
      </div>
      <Gap size={16} />
      <Typography.Text tag="p" view="primary-medium">
        Таким образом, используя стратегии ежемесячных вложений в акции и облигации и, реинвестируя проценты,{' '}
        <b>можно значительно увеличить свою доходность</b>. Но не стоит забывать, что все эти стратегии требует дисциплины и
        терпения, так как результаты будут видны только через определенное время. К тому же стратегия вложения в
        недооцененные акции может потребовать много времени на поиск и анализ таковых. Поэтому, если у вас{' '}
        <b>нет времени или желания</b> подбирать акции или облигации для вложений, то вам в помощь{' '}
        <b>готовые инвестиционные решения</b>.
      </Typography.Text>
    </div>
  );
};
