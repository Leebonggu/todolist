import React, { Component, Fragment } from 'react';
import Input from './components/input';
import Memo from './components/memo';
import Title from './components/mainTitle';
import { firebaseDB } from './firebase';

import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0;

`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const MemoText = styled.div`
  flex: 6;
`;

class App extends Component {

  state = {
    memo: [],
  }

  // componentDidMount(){
  //   this.getFirebaseDB();
  // }

  getMemoText = (event) => {
    event.preventDefault();
    const text = document.querySelector('.text').value;
    this.writeFirebaseDB(text);
    this.getFirebaseDB();
    document.querySelector('.text').value = '';
  }

  getRemoveItem = (event) => {
    const id = event.target.id;

    const ref = firebaseDB.ref('/memos');
    ref.child(id).remove()
  }

  writeFirebaseDB = (text) => {
    const nowDate = new Date().toLocaleDateString();
    const nowTime = new Date().toLocaleTimeString();
    
    firebaseDB.ref('/memos').push({
      createdAt: `${nowDate} ${nowTime}`,
      memo: text,
    })
  };

  getFirebaseDB = () => {
    const value = firebaseDB.ref('/memos');
    
    value.on('value', snapshot => {
      const data = snapshot.val();
      this.setState({
        memo: data,
      });
    })
  };

  render() {
   return !this.state.memo ? 
   (
      <Fragment>
        <Wrapper>
          <Title/>
          <Container>
            <Input
              getInputData={this.getMemoText}
            />
          </Container>
        </Wrapper>
      </Fragment>
    )
    :
    (
      <Fragment>
        <Wrapper>
          <Title/>
          <Container>
            <Input
              getInputData={this.getMemoText}
            />
            <MemoText>
              {
                Object.entries(this.state.memo).map((item) => (
                  <Memo 
                    id={item[0]}
                    item={item[1].memo}
                    remove={() => this.getRemoveItem}
                  />
                ))
              }
            </MemoText>
          </Container>
        </Wrapper>
      </Fragment>
    );
  }
}

export default App;
