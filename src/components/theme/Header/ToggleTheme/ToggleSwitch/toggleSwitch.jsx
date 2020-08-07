import PropTypes from "prop-types";
import React, { Component } from "react";

import "./toggleSwitch.css";
import sunIcon from 'assets/icons/sun.svg';
import moonIcon from 'assets/icons/moon.svg';


export class ToggleSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { selected, toggleSelected } = this.props;
    return (
      <div className="toggle-container" onClick={toggleSelected}>
        <div className={`dialog-button ${selected ? "" : "disabled"}`}>
          {selected ? <img src={sunIcon} /> : <img src={moonIcon} />}
        </div>
      </div>
    );
  }
}

ToggleSwitch.propTypes = {
  selected: PropTypes.bool.isRequired,
  toggleSelected: PropTypes.func.isRequired
};

      {/* <img src={theme === 'light' ? moonIcon : sunIcon} alt={theme} /> */}
