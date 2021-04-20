import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Cast from './components/Cast';
import CastCard from './components/CastCard';
import Pagination from './components/Pagination';

afterEach(cleanup);

describe('Cast', () => {
  it('load the cast component', async () => {
    render(
      <Cast
        displayCast={[
          {
            id: 0,
            fullName: 'Daenerys Targaryen',
            imageUrl: 'https://thronesapi.com/assets/images/daenerys.jpg',
          },
        ]}
        castLength={60}
        castPerPage={6}
      />,
    );
  });
});

describe('CastCard', () => {
  it('load the actor card component', async () => {
    render(
      <CastCard
        cast={
          {
            id: 0,
            fullName: 'Daenerys Targaryen',
            imageUrl: 'https://thronesapi.com/assets/images/daenerys.jpg',
          }
        }
      />,
    );
  });
});

describe('Pagination', () => {
  it('load the Pagination component', async () => {
    render(
      <Pagination
        castsPerPage={6}
        totalCasts={60}
      />,
    );
    expect.toMatchInlineSnapshot(`
      <ul>
        <li>
          <button>1</button>
        </li>
      </ul>
    `);
  });
});
