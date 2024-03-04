import { Button } from '@alfalab/core-components/button';
import { Gap } from '@alfalab/core-components/gap';
import { Grid } from '@alfalab/core-components/grid';
import { Tag } from '@alfalab/core-components/tag';
import { Typography } from '@alfalab/core-components/typography';
import { useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const tags = [
  'Дивидендные акции',
  'Двойной доход',
  'Стратегия роста',
  'Идеальный баланс',
  'Стабильный доход',
  'Рантье',
  'Акции +',
  'Вечный портфель',
];

const data: Record<
  string,
  {
    income: string;
    risk: string;
    minAmount?: string;
  }
> = {
  'Дивидендные акции': {
    income: '30%',
    risk: 'Высокий',
    minAmount: '200 000 ₽',
  },
  'Двойной доход': {
    income: '25%',
    risk: 'Низкий',
    minAmount: '200 000 ₽',
  },
  'Стратегия роста': {
    income: '24,4%',
    risk: 'Высокий',
  },
  'Идеальный баланс': {
    income: '19,4%',
    risk: 'Средний',
  },
  'Стабильный доход': {
    income: '12%',
    risk: 'Низкий',
  },
  Рантье: {
    income: '11,5%',
    risk: 'Очень низкий',
  },
  'Акции +': {
    income: '23,5%',
    risk: 'Высокий',
  },
  'Вечный портфель': {
    income: '15%',
    risk: 'Средний',
  },
};

export const DynamicSection = () => {
  const [checkedTag, setCheckedTag] = useState(tags[0]);
  return (
    <>
      <Typography.TitleResponsive font="system" tag="h2" view="small" weight="bold" style={{ textAlign: 'center' }}>
        Выберите свою стратегию
      </Typography.TitleResponsive>
      <Gap size={16} />
      <Swiper style={{ padding: '0 .5rem' }} spaceBetween={8} slidesPerView="auto">
        {tags.map(tagLabel => (
          <SwiperSlide style={{ width: 'auto' }} key={tagLabel}>
            <Tag view="filled" size="xxs" checked={checkedTag === tagLabel} onClick={() => setCheckedTag(tagLabel)}>
              {tagLabel}
            </Tag>
          </SwiperSlide>
        ))}
      </Swiper>
      <Gap size={16} />
      <Typography.TitleResponsive tag="h3" view="small" weight="bold" style={{ padding: '0 .5rem' }}>
        {checkedTag}
      </Typography.TitleResponsive>
      <Gap size={16} />
      <div style={{ padding: '0 .5rem' }}>
        <Grid.Row gutter={{ mobile: 8, desktop: 12 }}>
          <Grid.Col width="6">
            <Typography.Text tag="p" view="primary-medium">
              Ожидаемая доходность
            </Typography.Text>
          </Grid.Col>
          <Grid.Col width="6">
            <Typography.Text tag="p" view="primary-medium" weight="bold" style={{ textAlign: 'right' }}>
              {data[checkedTag].income}
            </Typography.Text>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row gutter={{ mobile: 8, desktop: 16 }}>
          <Grid.Col width="6">
            <Typography.Text tag="p" view="primary-medium">
              Уровень риска
            </Typography.Text>
          </Grid.Col>
          <Grid.Col width="6">
            <Typography.Text tag="p" view="primary-medium" weight="bold" style={{ textAlign: 'right' }}>
              {data[checkedTag].risk}
            </Typography.Text>
          </Grid.Col>
        </Grid.Row>
        {data[checkedTag].minAmount ? (
          <Grid.Row gutter={{ mobile: 8, desktop: 16 }}>
            <Grid.Col width="6">
              <Typography.Text tag="p" view="primary-medium">
                Минимальная сумма
              </Typography.Text>
            </Grid.Col>
            <Grid.Col width="6">
              <Typography.Text tag="p" view="primary-medium" weight="bold" style={{ textAlign: 'right' }}>
                {data[checkedTag].minAmount}
              </Typography.Text>
            </Grid.Col>
          </Grid.Row>
        ) : null}
        <Gap size={16} />
        <Button href="alfabank://investments/open_brokerage_account" block size="s" view="tertiary">
          Подробнее
        </Button>

        <Gap size={16} />
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Информация о стратегиях доступна только клиентам Альфа-Инвестиций
        </Typography.Text>
        <Gap size={16} />
      </div>
      <div style={{ padding: '0 .5rem' }}>
        <Button href="alfabank://investments/open_brokerage_account" block size="s" view="accent">
          Открыть брокерский счет
        </Button>
      </div>
    </>
  );
};
