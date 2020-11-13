import React from 'react';

import { Container, Header, Categories, Plans } from './styles';
import CategoryCard from '../../components/CategoryCard';
import GraphBar from '../../components/GraphBar';

import Logo from '../../assets/logo.svg';
import Nature from '../../assets/categoryImages/slice1.jpg';
import Daily from '../../assets/categoryImages/slice2.jpg';
import Together from '../../assets/categoryImages/slice3.jpg';
import Analisys from '../../assets/categoryImages/slice4.jpg';
import Pictures from '../../assets/categoryImages/slice5.jpg';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={Logo} width="150px" alt="" />
        <h1>we have ideas to growth your business</h1>
        <button type="button">SEE NOW</button>
      </Header>
      <Categories>
        <div className="titles">
          <h2>categories</h2>
          <p>discover new possibilities to help you today</p>
        </div>
        <div className="cards">
          <div className="row">
            <CategoryCard
              image={Nature}
              size="small"
              title="nature"
              subtitle="Lorem ipsum"
            />
            <CategoryCard
              image={Daily}
              size="medium"
              title="daily"
              subtitle="Lorem ipsum"
            />
          </div>
          <div className="row">
            <CategoryCard
              image={Together}
              size="big"
              title="together"
              subtitle="Vivamus non arcu tincidunt, tempus nunc eu, scelerisque ipsum"
            />
          </div>
          <div className="row">
            <CategoryCard
              image={Analisys}
              size="medium-right"
              title="analysis"
              subtitle="Lorem ipsum"
            />
            <CategoryCard
              image={Pictures}
              size="small"
              title="pictures"
              subtitle="Lorem ipsum"
            />
          </div>
        </div>
      </Categories>
      <Plans>
        <div className="graph-area">
          <div className="titles">
            <h2>growth plans</h2>
            <p>take your business to the next level</p>
          </div>
          <div className="graphs">
            <GraphBar
              value={100}
              time={100}
              description="Lorem ipsum dolor sitamet,consecte turadipiscing elit."
              size={80}
            />
            <GraphBar
              value={100}
              time={100}
              description="Lorem ipsum dolor sitamet,consecte turadipiscing elit."
              size={120}
            />
            <GraphBar
              value={100}
              time={100}
              description="Lorem ipsum dolor sitamet,consecte turadipiscing elit."
              size={160}
            />
            <GraphBar
              value={100}
              time={100}
              description="Lorem ipsum dolor sitamet,consecte turadipiscing elit."
              size={200}
            />
            <GraphBar
              value={100}
              time={100}
              description="Lorem ipsum dolor sitamet,consecte turadipiscing elit."
              size={240}
            />
            <GraphBar
              value={100}
              time={100}
              description="Lorem ipsum dolor sitamet,consecte turadipiscing elit."
              size={280}
            />
          </div>
        </div>
      </Plans>
    </Container>
  );
};

export default Home;
