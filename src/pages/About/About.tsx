import React, { ReactNode } from 'react';
import { ContentBox } from '../../components/ContentBox';
import { Link } from 'react-router-dom';
import { RouteData } from '../../Router';

export function About() {
  let diff = (new Date().valueOf() - new Date('04/01/2016').valueOf()) / 1000;
  diff /= 60 * 60 * 24;

  return (
    <ContentBox>
      <h1 className="mb-4">I'm Allie</h1>
      <Section>
        <p>
          Front-end leaning full stack engineer in Colorado Springs, CO.
          Currently working at{' '}
          <a className="link" href="https://thrivemarket.com/">
            Thrive Market
          </a>{' '}
          and loving the mission.
        </p>
      </Section>
      <Section>
        <h2 className="mb-2">Developer</h2>
        <p className="mb-2">
          Early in my career, I found a passion in front-end
          development making intuitive, responsive, and accessible experiences
          for users. In short, I love crafting beautiful and usable things. My understanding of both front-end and back-end allows me
          to bridge the gap between design and functionality to deliver dynamic,
          efficient and scalable solutions. I enjoy increasing developer
          efficiency, tackling complex issues in fast-paced environments, and
          collaborating with teammates and stakeholders.
        </p>
        <p>
          Want to learn more? Click{' '}
          <Link className="link" to={RouteData.Work.path}>
            here
          </Link>{' '}
          to see more of my work history or{' '}
          <Link className="link" to={RouteData.Contact.path}>
            contact me directly
          </Link>
          !
        </p>
      </Section>
      <Section>
        <h2 className="mb-2">Creator</h2>
        <p>
          I love creating and enjoy experimenting with different hobbies. Some
          of my favorites are laser crafting, stained glass, and
          yarn/needlework. Much like with my career, I love learning new things
          and trying new crafts to create beautiful and often useful things.
        </p>
      </Section>
      {/* <Section>
          <p>
            <i>
              This portfolio is a continuous work in progress to learn new
              technologies. Additional information will be added, but please
              feel free to reach out directly if you're seeking a highly
              motivated and passionate front end engineer!
            </i>
          </p>
        </Section> */}
    </ContentBox>
  );
}

function Section({ children }: { children: ReactNode }) {
  return <div className="mb-4">{children}</div>;
}
