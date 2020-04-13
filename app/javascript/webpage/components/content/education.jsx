import React from 'react';

export default function Education(props) {
  const list = 'HTML, CSS, Bootstrap, JavaScript ES2015, SQL, git, GitHub, Heroku, Ruby on Rails, React'.split(', ');
  return (
    <div id="education">
      <h1>EDUCATION</h1>
      <ul>
        <li>
          <h3>Mechanical Engineering Diploma</h3>
          <p>Instituto Tecnológico de Buenos Aires (ITBA)</p>

          <p>For the early years of my professional moulding I studied the complex and insatiable world of Engineering. From Mathematics and Fisics, to Finite Element Analysis. ITBA, my university, gave me all the tools I needed to face any and all challenges that present themselves. In a way it structured the way I approach problems.</p>
        </li>
        <li>
          <h3>Le Wagon Full-Stack Developer Certificate</h3>
          <p>After graduating from ITBA as a Mechanical Engineer and persuing a professional career as a Mechanical Designer for a while, I decided to turn a corner and persue another passion of mine which was surfacing for some time.. Programming. Writting code just feels right at home. So I decided to join Le Wagon bootcamp. A 9 week full-time coding bootcamp for web development.

            I honestly had one of the most rewarding experiences of my life. Learned more than I ever thought I could in 2 months, and to top that I met a great group of people from all over the world.

            During the bootcamp I learned:
          </p>
          <ul className="margin-zero">
            { list.map((el) => {
              return <li key={el} className="margin-zero">{el}</li>
              })
            }
          </ul>

        </li>
      </ul>
    </div>
  );
}
