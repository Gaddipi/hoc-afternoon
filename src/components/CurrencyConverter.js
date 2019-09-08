import React, { Component } from "react";
import CurrencyDisplay from "./CurrencyDisplay";

const withCurrency = BaseComponent =>
  class Currency extends Component {
    state = {
      currencyChosen: false,
      selectedCurrency: "Select Currency",
      amount: 0
    };

    handleOptionSelect = evt => {
      const userValue = evt.target.value;
      this.setState(() => {
        return {
          selectedCurrency: userValue,
          currencyChosen: userValue === "Select Currency" ? false : true
        };
      });
    };
    // OTHER STEPS
    render() {
      // OTHER STEPS
      return (
        <div>
          {/*OTHER STEPS*/}
          {this.state.currencyChosen ? (
            <BaseComponent
              currency={CurrencyDisplay[this.state.selectedCurrency]}
              amount={this.state.amount}
            />
          ) : (
            <p>Please Select Currency</p>
          )}
        </div>
      );
    }
  };

const ExchangedCurrency = withCurrency(CurrencyDisplay);

export default ExchangedCurrency;
