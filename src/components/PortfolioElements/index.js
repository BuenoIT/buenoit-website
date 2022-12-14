import React, { useState, useEffect } from 'react';
import Card from './CardElement';
import {
  CardAnchor,
  CardContainer,
  CardH1,
  CardWrapper,
} from './PorfolioElements';

const PortolioStructure = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [csharpProjects, setCsharpProjects] = useState([]);
  const [reactJSProjects, setReactJSProjects] = useState([]);
  const [javascriptProjects, setJavascriptProjects] = useState([]);
  const [aspNetProjects, setAspNetProjects] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/BuenoIT-csharp-projects/repos')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCsharpProjects(result);
        },
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
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  useEffect(() => {
    fetch('https://api.github.com/orgs/BuenoIT-javascript-projects/repos')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setJavascriptProjects(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  useEffect(() => {
    fetch('https://api.github.com/orgs/BuenoIT-asp-net-projects/repos')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setAspNetProjects(result);
        },
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
        <p>
          BuenoIT's github is automatically fetching API information for this
          page
        </p>
        <CardContainer>
          <CardH1>C#</CardH1>
          <CardWrapper>
            {csharpProjects.map((item) => (
              <CardAnchor key={item.id} href={item.html_url} target="_blank">
                {' '}
                <Card
                  title={item.name}
                  dateCreate={item.created_at}
                  dateUpdate={item.pushed_at}
                  description={item.description}
                />
              </CardAnchor>
            ))}
          </CardWrapper>
        </CardContainer>
        <CardContainer>
          <CardH1>ReactJS</CardH1>
          <CardWrapper>
            {reactJSProjects.map((item) => (
              <CardAnchor key={item.id} href={item.html_url} target="_blank">
                {' '}
                <Card
                  title={item.name}
                  dateCreate={item.created_at}
                  dateUpdate={item.pushed_at}
                  description={item.description}
                />
              </CardAnchor>
            ))}
          </CardWrapper>
        </CardContainer>
        <CardContainer>
          <CardH1>Javascript</CardH1>
          <CardWrapper>
            {javascriptProjects.map((item) => (
              <CardAnchor key={item.id} href={item.html_url} target="_blank">
                {' '}
                <Card
                  title={item.name}
                  dateCreate={item.created_at}
                  dateUpdate={item.pushed_at}
                  description={item.description}
                />
              </CardAnchor>
            ))}
          </CardWrapper>
        </CardContainer>
        <CardContainer>
          <CardH1>AspNet</CardH1>
          <CardWrapper>
            {aspNetProjects.map((item) => (
              <CardAnchor key={item.id} href={item.html_url} target="_blank">
                {' '}
                <Card
                  title={item.name}
                  dateCreate={item.created_at}
                  dateUpdate={item.pushed_at}
                  description={item.description}
                />
              </CardAnchor>
            ))}
          </CardWrapper>
        </CardContainer>
      </div>
    );
  }
};

export default PortolioStructure;
