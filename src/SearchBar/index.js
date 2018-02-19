import React, { Component } from "react";
import PropTypes from "prop-types";
import { SearchBarWrapper } from "./index.style";

import { AddButton } from '../Button'

class SearchBar extends Component {
  state = {
    keyword: this.props.keyword,
    list: this.props.list
  };

  setKeyword = (keyword = "") => {
    this.setState({ keyword });
  };

  handleKeywordChanged = e => {
    const keyword = e.target.value;
    this.setKeyword(keyword);
    if (this.props.keywordChanged) {
      this.props.keywordChanged(keyword);
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.keyword) {
      this.setKeyword(nextProps.keyword);
    } else {
      this.setKeyword();
    }
  }

  renderInput = () => {
    const { keyword } = this.state;
    return <input value={keyword} onChange={this.handleKeywordChanged} />;
  };

  renderAddButton = () => {
    const { keyword, list } = this.state;
    return <AddButton onClick={() => this.props.addList(keyword, list)} />
  }

  render() {
    return <SearchBarWrapper>{this.renderInput()} {this.renderAddButton()}</SearchBarWrapper>;
  }
}

SearchBar.propTypes = {
  keyword: PropTypes.string,
  keywordChanged: PropTypes.func
};

SearchBar.defaultProps = {
  keyword: ""
};

export default SearchBar;
