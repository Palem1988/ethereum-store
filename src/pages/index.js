import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '../layout';
import tshirtPreview from '../assets/tshirt-preview.jpg';
import walletConnectLogo from '../assets/walletconnect-logo.svg';
import { fonts, colors } from '../styles';

const SFlex = styled.div`
  width: 100%;
  display: flex;
  padding: 40px 0;
`;

const SPreview = styled.div`
  width: 70%;
  padding-right: 40px;
  & img {
    width: 100%;
    padding-bottom: 120px;
  }
`;

const SDetails = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;

const STitle = styled.h1`
  font-size: ${fonts.size.h2};
`;

const SDescription = styled.p`
  border-width: 1px 0 1px 0;
  border-style: solid;
  border-color: rgb(${colors.grey});
  padding: 20px 0;
`;

const SSizes = styled.div`
  width: 50%;
  margin: 0.5em 0;
  & p {
    margin-left: 8px;
  }
  & ul {
    display: flex;
    justify-content: space-between;
  }
`;

const SSizeOption = styled.li`
  cursor: pointer;
  margin: 4px;
  padding: 4px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ selected }) =>
    selected ? `rgb(${colors.dark})` : 'transparent'};
  &:hover {
    opacity: 0.7;
  }
`;

const SPrice = styled.p`
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.xlarge};
  font-family: ${fonts.family.SFMono};
  margin: 0 0 0 0;
`;

const SActions = styled.div`
  display: flex;
`;

const SPayWithWalletConnect = styled.button`
  position: relative;
  margin-top: 24px;
  cursor: pointer;
  padding: 0 0 4px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-family: ${fonts.family.SFProText};
  letter-spacing: -0.63px;
  font-size: ${fonts.size.h4};
  font-weight: 600;
  width: 300px;
  height: 53px;
  box-shadow: 0 4px 6px 0 rgba(50, 50, 93, 0.11),
    0 1px 3px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06);
  color: rgb(${colors.white});
  background-color: rgb(${colors.blue});
  transition: 0.15s ease;
  will-change: transform;
  & span {
    margin-left: 4px;
    margin-right: 10px;
  }
  &:hover {
    box-shadow: 0 7px 14px 0 rgba(50, 50, 93, 0.1),
      0 3px 6px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06);
    transform: translateY(-1px);
    background-color: #3388ff;
  }
  &:active {
    box-shadow: 0 4px 6px 0 rgba(50, 50, 93, 0.11),
      0 1px 3px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06);
    transform: translateY(1px);
    background-color: #227af5;
  }
`;

const SWalletConnectLogo = styled.div`
  width: 30px;
  height: 18px;
  background: url(${walletConnectLogo});
`;

class Homepage extends Component {
  state = {
    modalShow: false,
    sizeOptions: ['S', 'M', 'L', 'XL'],
    productName: 'Ethereum T-Shirt',
    productSize: 'M',
    productPrice: 20,
    currency: { value: 'USD', symbol: '$' }
  };
  modalToggle = bool =>
    this.setState({
      modalShow: typeof bool !== 'undefined' ? bool : !this.state.modalShow
    });
  render = () => {
    const order = {
      product: {
        name: this.state.productName,
        size: this.state.productSize,
        price: this.state.productPrice,
        currency: this.state.currency
      }
    };
    return (
      <Layout
        modalShow={this.state.modalShow}
        modalData={order}
        modalToggle={this.modalToggle}
      >
        <SFlex>
          <SPreview>
            <img src={tshirtPreview} alt="Ethereum T-Shirt" />
          </SPreview>
          <SDetails>
            <STitle>{this.state.productName}</STitle>
            <SDescription>
              The perfect t-shirt for buidlers on Ethereum
            </SDescription>
            <SSizes>
              <p>Select Size</p>
              <ul>
                {this.state.sizeOptions.map(option => (
                  <SSizeOption
                    key={option}
                    selected={this.state.productSize === option}
                    onClick={() => this.setState({ productSize: option })}
                  >
                    {option}
                  </SSizeOption>
                ))}
              </ul>
            </SSizes>
            <SPrice>{`${this.state.currency.symbol}${Number(
              this.state.productPrice
            ).toFixed(2)}`}</SPrice>
            <SActions>
              <SPayWithWalletConnect onClick={() => this.modalToggle()}>
                <SWalletConnectLogo />
                <span>Pay</span>
              </SPayWithWalletConnect>
            </SActions>
          </SDetails>
        </SFlex>
      </Layout>
    );
  };
}

export default Homepage;
