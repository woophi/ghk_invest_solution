import { style } from '@vanilla-extract/css';

const card = style({
  borderRadius: '1rem',
  backgroundColor: '#f3f4f5',
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  margin: '0 .5rem',
});

const img = style({
  margin: 'auto',
});
const box = style({
  margin: '0 .5rem',
  backgroundColor: '#f3f4f5',
  borderRadius: '.5rem',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const cardImg = style({
  borderRadius: '1rem',
  backgroundColor: '#fff',
  border: '1px solid #f3f4f5',
  display: 'flex',
  flexDirection: 'column',
  margin: '0 .5rem',
  overflow: 'hidden',
});

const text = style({
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
  textAlign: 'center',
});

export const appStyles = {
  card,
  img,
  box,
  cardImg,
  text,
};
