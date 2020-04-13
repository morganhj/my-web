import React from 'react';
import Card from './card'

export default function Career(props) {
  const cards = [
      {
        id: 'invap',
        company: 'INVAP S.E.',
        type: 'Internship',
        year: '2014',
        description: 'Software programming for material testing hardware. 2 month development of a data logger and analyzer for real-time testing.'
      },
      {
        id: 'vds',
        company: 'VORTEX DESIGN SOLUTIONS S.R.L.',
        type: 'CAE Engineer',
        year: '2015 - 2017',
        description: 'Software programming for material testing hardware. 2 month development of a data logger and analyzer for real-time testing.'
      },
      {
        id: 'vking',
        company: 'VKING INGENIERIA',
        type: 'CAE Engineer',
        year: '2017 - 2018',
        description: 'Software programming for material testing hardware. 2 month development of a data logger and analyzer for real-time testing.'
      },
      {
        id: 'maper',
        company: 'MAPER TECH',
        type: 'Mechanical Engineering consultant',
        year: '2018 - 2019',
        description: 'Software programming for material testing hardware. 2 month development of a data logger and analyzer for real-time testing.'
      }];
  return (
    <div id="career">
      <h1>CAREER</h1>
      <div className="career-cards">
        { cards.map((card) => {
            return <Card key={card.id} info={card} />
          })
        }
      </div>
    </div>
  );
}
