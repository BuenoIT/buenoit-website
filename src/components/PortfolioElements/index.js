import React, { useState, useEffect } from 'react';
import { favoritesProjectsData, cSharpProjectsData } from './Data';
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
  const [favoriteProjects, setFavoritesProjects] = useState([]);
  const [csharpProjects, setCsharpProjects] = useState([]);
  const [reactJSProjects, setReactJSProjects] = useState([]);
  // const [javascriptProjects, setJavascriptProjects] = useState([]);
  // const [aspNetProjects, setAspNetProjects] = useState([]);

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
  // useEffect(() => {
  //   fetch('https://api.github.com/orgs/BuenoIT-javascript-projects/repos')
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setJavascriptProjects(result);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // }, []);
  // useEffect(() => {
  //   fetch('https://api.github.com/orgs/BuenoIT-asp-net-projects/repos')
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setAspNetProjects(result);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // }, []);
  useEffect(() => {
    fetch('https://api.github.com/users/BuenoIT/repos')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setFavoritesProjects(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  //merge arrays favorites projects - add additional content to be displayed from Data file.
  var favorites = favoriteProjects.map((t1) => ({
    ...t1,
    ...favoritesProjectsData.find((t2) => t2.id === t1.id),
  }));
  //remove readme file from array. It is not meant to be displayed
  favorites.shift();

  //merge arrays csharp projects - add additional content to be displayed from Data file.
  var csharp = csharpProjects.map((t1) => ({
    ...t1,
    ...cSharpProjectsData.find((t2) => t2.id === t1.id),
  }));

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <CardContainer id="favorites">
          <CardH1>Favorites</CardH1>
          <CardWrapper>
            {favorites.map((item) => (
              <CardAnchor key={item.id} href={item.html_url} target="_blank">
                {' '}
                <Card
                  image={item.image}
                  alt={item.alt}
                  language={item.language}
                  framework={item.framework}
                  title={item.name}
                  dateCreate={item.created_at}
                  dateUpdate={item.pushed_at}
                  description={item.description}
                />
              </CardAnchor>
            ))}
          </CardWrapper>
        </CardContainer>
        <CardContainer id="c#">
          <CardH1>C#</CardH1>
          <CardWrapper>
            {csharp.map((item) => (
              <CardAnchor key={item.id} href={item.html_url} target="_blank">
                {' '}
                <Card
                  image={item.image}
                  alt={item.alt}
                  language={item.language}
                  framework={item.framework}
                  title={item.name}
                  dateCreate={item.created_at}
                  dateUpdate={item.pushed_at}
                  description={item.description}
                />
              </CardAnchor>
            ))}
          </CardWrapper>
        </CardContainer>
        <CardContainer id="react">
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
        {/* <CardContainer id="javascript">
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
        <CardContainer id="aspNet">
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
        </CardContainer> */}
      </>
    );
  }
};

export default PortolioStructure;
