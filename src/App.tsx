import { Button } from '@alfalab/core-components/button';
import { Divider } from '@alfalab/core-components/divider';
import { Gap } from '@alfalab/core-components/gap';
import { Grid } from '@alfalab/core-components/grid';
import { Typography } from '@alfalab/core-components/typography';
import { useCallback } from 'react';
import { appStyles } from './app.css';
import card1Img from './assets/card_1_img.png';
import piechart from './assets/piechart.webp';
import tile1 from './assets/tile1.webp';
import tile2 from './assets/tile2.webp';
import tile3 from './assets/tile3.webp';
import tile4 from './assets/tile4.webp';

export const App = () => {
  const scroll = useCallback((id: string) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 10);
  }, []);

  return (
    <>
      <Typography.TitleResponsive tag="h1" view="medium" font="system" style={{ padding: '1rem' }}>
        Готовые инвестиционные решения
      </Typography.TitleResponsive>
      <Gap size={16} />
      <div className={appStyles.card}>
        <Typography.TitleResponsive tag="h2" view="small" font="system">
          Готовые инвестиционные стратегии
        </Typography.TitleResponsive>
        <Gap size={12} />
        <Typography.Text tag="p" view="primary-medium">
          Профессиональный автор стратегии подбирает бумаги, дает рекомендации по актуальному составу портфеля и присылает
          комментарии по событиям на рынке
        </Typography.Text>
        <Gap size={16} />
        <img src={card1Img} width={150} height={150} className={appStyles.img} />
        <Gap size={16} />
        <Typography.Text tag="p" view="primary-medium">
          Управление портфелем : 1% от портфеля
        </Typography.Text>
        <Grid.Row gutter={{ mobile: 8, desktop: 16 }}>
          <Grid.Col width="6">
            <Typography.Text tag="p" view="primary-medium" weight="bold">
              от 10 000 ₽
            </Typography.Text>
          </Grid.Col>
          <Grid.Col width="6">
            <Typography.Text tag="p" view="primary-medium">
              Сумма
            </Typography.Text>
          </Grid.Col>
        </Grid.Row>
        <Divider />
        <Gap size={12} />

        <Grid.Row gutter={{ mobile: 8, desktop: 16 }}>
          <Grid.Col width="6">
            <Typography.Text tag="p" view="primary-medium" weight="bold">
              RUB
            </Typography.Text>
          </Grid.Col>
          <Grid.Col width="6">
            <Typography.Text tag="p" view="primary-medium">
              Валюта
            </Typography.Text>
          </Grid.Col>
        </Grid.Row>
        <Divider />
        <Gap size={12} />

        <Grid.Row gutter={{ mobile: 8, desktop: 16 }}>
          <Grid.Col width="6">
            <Typography.Text tag="p" view="primary-medium" weight="bold">
              От 3-х лет
            </Typography.Text>
          </Grid.Col>
          <Grid.Col width="6">
            <Typography.Text tag="p" view="primary-medium">
              Срок
            </Typography.Text>
          </Grid.Col>
        </Grid.Row>
        <Button size="s" view="accent" onClick={() => scroll('desc')}>
          Узнать больше
        </Button>
      </div>
      <Gap size={16} />
      <div className={appStyles.card}>
        <Typography.TitleResponsive tag="h2" view="small" font="system">
          Идеи от гуру
        </Typography.TitleResponsive>
        <Gap size={12} />

        <Typography.Text tag="p" view="primary-medium">
          Сервис торговых рекомендаций от экспертов Альфа-Банка
        </Typography.Text>
        <Gap size={16} />
        <img src={card1Img} width={150} height={150} className={appStyles.img} />
        <Gap size={16} />
        <Grid.Row gutter={{ mobile: 8, desktop: 16 }}>
          <Grid.Col width="6">
            <Typography.Text tag="p" view="primary-medium" weight="bold">
              от 10 000 ₽
            </Typography.Text>
          </Grid.Col>
          <Grid.Col width="6">
            <Typography.Text tag="p" view="primary-medium">
              Сумма
            </Typography.Text>
          </Grid.Col>
        </Grid.Row>
        <Divider />
        <Gap size={12} />

        <Grid.Row gutter={{ mobile: 8, desktop: 16 }}>
          <Grid.Col width="6">
            <Typography.Text tag="p" view="primary-medium" weight="bold">
              RUB
            </Typography.Text>
          </Grid.Col>
          <Grid.Col width="6">
            <Typography.Text tag="p" view="primary-medium">
              Валюта
            </Typography.Text>
          </Grid.Col>
        </Grid.Row>
        <Divider />
        <Gap size={12} />

        <Grid.Row gutter={{ mobile: 8, desktop: 16 }}>
          <Grid.Col width="6">
            <Typography.Text tag="p" view="primary-medium" weight="bold">
              От 3-х лет
            </Typography.Text>
          </Grid.Col>
          <Grid.Col width="6">
            <Typography.Text tag="p" view="primary-medium">
              Срок
            </Typography.Text>
          </Grid.Col>
        </Grid.Row>
        <Button size="s" view="accent" onClick={() => scroll('guru')}>
          Узнать больше
        </Button>
      </div>

      <Gap size={32} />
      <Typography.TitleResponsive tag="h2" view="small" style={{ textAlign: 'center' }}>
        Готовые торговые стратегии
      </Typography.TitleResponsive>
      <Gap size={16} />
      <div id="desc" className={appStyles.card}>
        <Typography.TitleResponsive tag="h3" view="xlarge" weight="bold">
          1
        </Typography.TitleResponsive>
        <Gap size={12} />

        <Typography.TitleResponsive tag="h4" view="small" weight="bold">
          Определите свой инвестиционный профиль
        </Typography.TitleResponsive>
        <Gap size={8} />

        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Для этого пройдите короткий тест в приложении или Альфа-Инвестициях Онлай. Вам будут доступны только те стратегии,
          которые соответствуют вашему инвестиционному профилю.
        </Typography.Text>
      </div>
      <Gap size={16} />
      <div className={appStyles.card}>
        <Typography.TitleResponsive tag="h3" view="xlarge" weight="bold">
          2
        </Typography.TitleResponsive>
        <Gap size={12} />

        <Typography.TitleResponsive tag="h4" view="small" weight="bold">
          Выберите подходящую стратегию
        </Typography.TitleResponsive>
        <Gap size={8} />

        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          При выборе обратите внимание на доходность, уровень риска стратегии и на сумму стартовых вложений. А также на
          соответствие стратегии вашему инвестиционному профилю.
        </Typography.Text>
      </div>
      <Gap size={16} />
      <div className={appStyles.card}>
        <Typography.TitleResponsive tag="h3" view="xlarge" weight="bold">
          3
        </Typography.TitleResponsive>
        <Gap size={12} />

        <Typography.TitleResponsive tag="h4" view="small" weight="bold">
          Подключитесь и пополните счет
        </Typography.TitleResponsive>
        <Gap size={8} />

        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          После подключения счета на нужную сумму вы получите рекоммендацию по формированию портфеля. Принять ее и совершить
          все сделки можно одной кнопкой.
        </Typography.Text>
      </div>
      <Gap size={16} />
      <div className={appStyles.card}>
        <Typography.TitleResponsive tag="h3" view="xlarge" weight="bold">
          4
        </Typography.TitleResponsive>
        <Gap size={12} />

        <Typography.TitleResponsive tag="h4" view="small" weight="bold">
          Следуйте рекомендациям
        </Typography.TitleResponsive>
        <Gap size={8} />

        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Автор стратегии будет давать рекомендации по актуальному составу портфеля и присылать комментарии по рыночным
          событиям.
        </Typography.Text>
      </div>
      <Gap size={16} />
      <div style={{ padding: '0 .5rem' }}>
        <Button href="alfabank://investments/open_brokerage_account" block size="s" view="accent">
          Открыть брокерский счет
        </Button>
      </div>

      <Gap size={32} />

      <Typography.TitleResponsive tag="h2" view="small" style={{ textAlign: 'center' }}>
        Идеи от гуру
      </Typography.TitleResponsive>
      <Gap size={16} />
      <div id="guru" className={appStyles.card}>
        <img src={tile1} width={40} height={40} />
        <Gap size={12} />

        <Typography.TitleResponsive tag="h4" view="small" weight="bold">
          Исполнение в один клик
        </Typography.TitleResponsive>
        <Gap size={8} />

        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Подготовим заявку под каждую идею, вам останется только подтвердить её.
        </Typography.Text>
      </div>
      <Gap size={16} />
      <div className={appStyles.card}>
        <img src={tile2} width={40} height={40} />
        <Gap size={12} />

        <Typography.TitleResponsive tag="h4" view="small" weight="bold">
          Объясняем почему
        </Typography.TitleResponsive>
        <Gap size={8} />

        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Рассказываем о компаниях, которые хотим покупать и почему это стоит сделать прямо сейчас. Вы всегда можете
          ознакомиться с драйверами роста для каждой идеи.
        </Typography.Text>
      </div>
      <Gap size={16} />
      <div className={appStyles.card}>
        <img src={tile3} width={40} height={40} />
        <Gap size={12} />

        <Typography.TitleResponsive tag="h4" view="small" weight="bold">
          Готовый торговый план
        </Typography.TitleResponsive>
        <Gap size={8} />

        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Во всех рекомендациях мы указываем цену покупки и продажи, вы всегда будете знать как действовать.
        </Typography.Text>
      </div>
      <Gap size={16} />
      <div className={appStyles.card}>
        <img src={tile4} width={40} height={40} />
        <Gap size={12} />

        <Typography.TitleResponsive tag="h4" view="small" weight="bold">
          Следим за каждой идеей
        </Typography.TitleResponsive>
        <Gap size={8} />

        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Если цена компании дошла по цели или срок действия идеи закончился, мы пришлём уведомление на продажу.
        </Typography.Text>
      </div>
      <Gap size={16} />
      <div style={{ padding: '0 .5rem' }}>
        <Button href="alfabank://investments/open_brokerage_account" block size="s" view="accent">
          Открыть брокерский счет
        </Button>
      </div>
      <Gap size={32} />
      <Typography.TitleResponsive tag="h2" view="small" style={{ textAlign: 'center' }} weight="bold">
        Результаты стратегии
      </Typography.TitleResponsive>
      <Gap size={16} />
      <Typography.Text tag="p" view="primary-medium" style={{ margin: '0 1rem', textAlign: 'center' }}>
        Активный подход обеспечивает доход и на падающем и на растущем рынке
      </Typography.Text>
      <Gap size={16} />

      <div className={appStyles.box}>
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Среднегодовая доходность стратегии
        </Typography.Text>
        <Typography.TitleResponsive tag="h3" view="medium" weight="bold">
          14%
        </Typography.TitleResponsive>
      </div>

      <Gap size={16} />

      <div className={appStyles.cardImg}>
        <img src={piechart} />
        <div className={appStyles.text}>
          <Typography.TitleResponsive tag="h3" view="small" weight="bold">
            70% идеи приносят прибыль
          </Typography.TitleResponsive>
          <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
            Средний срок реализации 31 день
          </Typography.Text>
        </div>
      </div>
      <Gap size={16} />
      <div style={{ padding: '0 .5rem' }}>
        <Typography.Text tag="p" view="primary-medium">
          Результат среднегодовой доходности модельного портфеля с июня 2020 по июнь 2021
        </Typography.Text>
      </div>
      <div style={{ padding: '0 .5rem' }}>
        <Button href="alfabank://investments/open_brokerage_account" block size="s" view="accent">
          Открыть брокерский счет
        </Button>
      </div>
    </>
  );
};
