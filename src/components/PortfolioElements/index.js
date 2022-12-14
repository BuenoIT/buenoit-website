import React, { useState, useEffect } from 'react';
import Card from './CardElement';
import { CardContainer, CardH1, CardWrapper } from './PorfolioElements';

const Portolio = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [csharpProjects, setCsharpProjects] = useState([]);
  const [reactJSProjects, setReactJSProjects] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch('https://api.github.com/orgs/BuenoIT-csharp-projects/repos')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCsharpProjects(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  useEffect(() => {
    fetch('https://api.github.com/orgs/BuenoIT-reactJS-projects/repos')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setReactJSProjects(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <CardContainer>
          <CardH1>C#</CardH1>
          <CardWrapper>
            {csharpProjects.map((item) => (
              <a key={item.id} href={item.html_url}>
                {' '}
                <Card title={item.name} description={item.description} />
              </a>
            ))}
          </CardWrapper>
        </CardContainer>
        <CardContainer>
          <CardH1>ReactJS</CardH1>
          <CardWrapper>
            {reactJSProjects.map((item) => (
              <a key={item.id} href={item.html_url}>
                {' '}
                <Card title={item.name} description={item.description} />
              </a>
            ))}
          </CardWrapper>
        </CardContainer>
      </div>
    );
  }
};

export default Portolio;
