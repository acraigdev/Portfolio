import React, { ReactNode } from 'react';
import { ContentBox } from '../../components/ContentBox';
import { Link } from 'react-router-dom';
import { RouteData } from '../../Router';
import { LayoutFrame } from '../../components/LayoutFrame';

export function About() {
  let diff = (new Date().valueOf() - new Date('04/01/2016').valueOf()) / 1000;
  diff /= 60 * 60 * 24;

  return (
    <LayoutFrame>
      <ContentBox>
        <h1 className="mb-4">I'm Allie</h1>
        <Section>
          <p>
            Front end engineer in Colorado Springs, CO. Currently working at
            Amazon Web Services on the{' '}
            <a className="link" href="https://aws.amazon.com/image-builder/">
              EC2 Image Builder
            </a>{' '}
            team.
          </p>
        </Section>
        <Section>
          <h2 className="mb-2">Developer</h2>
          <p>
            I've been a software developer for{' '}
            {Math.abs(Math.round(diff / 365.25))} years. Originally working as a
            full-stack developer, I found a passion in front-end development
            making intuitive, responsive, and accessible experiences for users.
            My understanding of both front-end and back-end allows me to bridge
            the gap between design and functionality to deliver dynamic,
            efficient and scalable solutions. In addition to web development, I
            enjoy increasing developer efficiency, tackling complex issues in
            fast-paced environments, and collaborating with teammates while
            staying up-to-date on the latest trends and standards.
          </p>
          <p>
            {/* Want to learn more? Click <Link to={RouteData.Work.path}>here</Link>{' '}
          to see more of my work history or{' '}
          <Link to={RouteData.Contact.path}>contact me directly</Link>! */}
            Want to learn more?{' '}
            <Link to={RouteData.Contact.path}>Contact me!</Link>
          </p>
        </Section>
        <Section>
          <h2 className="mb-2">Creator</h2>
          <p>
            I have a passion for creativity and enjoy experimenting with
            different hobbies. Some of my favorites are laser crafting, stained
            glass, and yarn/needlework. Much like with my career, I love
            learning new things and trying new crafts to create beautiful and
            often useful things.
          </p>
        </Section>
        <Section>
          <i>
            This portfolio is a continuous work in progress to learn new
            technologies. Additional information will be added, but please feel
            free to reach out directly if you're seeking a highly motivated and
            passionate front end engineer!
          </i>
        </Section>
      </ContentBox>
    </LayoutFrame>
  );
}

function Section({ children }: { children: ReactNode }) {
  return <div className="mb-4">{children}</div>;
}
