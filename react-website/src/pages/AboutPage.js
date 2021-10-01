import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title="about" />
    <Wrapper className="page section section-center">
      <img src={aboutImg} alt="About image" />
      <article>
        <div className="title">
          <h2>Our Story</h2>
          <div className="underline"></div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur turpis sapien, porttitor id vehicula et, fringilla eget tellus. Sed quis ligula mauris. Ut vel cursus nunc, mattis gravida lectus. Nam vitae risus euismod, blandit dolor aliquam, eleifend ex. Nullam mi turpis, porttitor at rutrum in, scelerisque at turpis. In a enim at mauris tincidunt sodales non ac velit. Nunc elit neque, hendrerit molestie porta ac, fermentum nec tellus.</p>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
