import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2em;
  }
`;

class Component extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <h1>
          <FormattedMessage
            id="main.welcome"
            values={{
              name: <b>Lorem</b>
            }}
          />
        </h1>
        <Button primary>Click</Button>
      </Wrapper>
    );
  }
}

export default Component;
