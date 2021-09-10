import { items } from 'fusioncharts';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';
const Repos = () => {
  const { githubRepos } = useContext(GithubContext);

  const languages = githubRepos.reduce((response, currentRepo) => {
    const { language, stargazers_count } = currentRepo;
    if (!language) return response;
    if (response[language]) {
      response[language] = { ...response[language], value: response[language].value + 1, stars: response[language].stars + stargazers_count };
    } else {
      response[language] = { label: language, value: 1, stars: stargazers_count };
    }
    return response;
  }, {});
  const mostUsedLanguage = Object.values(languages).sort((a, b) => b.value - a.value).slice(0, 5);
  const mostPopularlanguage = Object.values(languages).sort((a, b) => b.stars - a.stars).map((item) => {
    return { ...item, value: item.stars };
  }).slice(0, 5);

  let { stars, forks } = githubRepos.reduce((response, current) => {
    const { stargazers_count, name, forks } = current;
    response.stars[stargazers_count] = { label: name, value: stargazers_count };
    response.forks[forks] = { label: name, value: forks };
    return response;
  }, {
    stars: {}, forks: {}
  });

  stars = Object.values(stars).slice(-5).reverse();
  forks = Object.values(forks).slice(-5).reverse();

  return <section className='section'>
    <Wrapper className='section-center'>
      {/* <ExampleChart /> */}
      <Pie3D dataForChart={mostUsedLanguage} />
      <Column3D dataForChart={stars} />
      <Doughnut2D dataForChart={mostPopularlanguage} />
      <Bar3D dataForChart={forks} />
    </Wrapper>
  </section>
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
