import React, { Component } from "react";
import PropTypes from "prop-types";
import { SearchBarWrapper } from "./index.style";

import { AddButton } from '../Button'

class SearchBar extends Component {

  handleKeywordChanged = e => {
    const keyword = e.target.value;
    if (this.props.updateKeyword) {
      this.props.updateKeyword(keyword);
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.keyword) {
      this.props.updateKeyword(nextProps.keyword);
    }
  }

  renderInput = () => {
    const { keyword } = this.props;
    return <input value={keyword} onChange={this.handleKeywordChanged} />;
  };

  handleAddNewList = () => {
    const { keyword, addList, updateKeyword } = this.props;
    addList(keyword);
    updateKeyword('');
  }

  renderAddButton = () => {
    return <AddButton onClick={this.handleAddNewList} />
  }

  render() {
    return (
      <SearchBarWrapper>
        {this.renderInput()}
        {this.renderAddButton()}
      </SearchBarWrapper>
    );
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
