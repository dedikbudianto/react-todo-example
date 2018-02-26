import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleAddList, updateKeyword, updateShowType } from '../redux/action/todoAction';

import { TodoWrapper } from './index.style'

import SearchBar from '../SearchBar'
import Item from '../Item'
import ActionBar from '../ActionBar'

class Todo extends Component {

  renderSearchBar = keyword => {
    return <SearchBar
      keyword={keyword}
      addList={this.props.handleAddList}
      updateKeyword={this.props.updateKeyword}
    />
  }

  renderTodoList = (list, showType, keyword) => {
    let renderList
    switch (showType) {
      case 'all':
        renderList = list
          .filter(item => item.content.includes(keyword))
          .map(item => this.renderItem(item))
        break
      case 'completed':
        renderList = list
          .filter(item => item.status === 'completed' && item.content.includes(keyword))
          .map(item => this.renderItem(item))
        break
      case 'incompleted':
        renderList = list
          .filter(item => item.status === 'incompleted' && item.content.includes(keyword))
          .map(item => this.renderItem(item))
        break
      default:
        renderList = list
          .filter(item => item.content.includes(keyword))
          .map(item => this.renderItem(item))
    }
    return <ul>{renderList}</ul>
  }

  renderActionBar = type => {
    return <ActionBar type={type} onChange={this.props.updateShowType} />
  }

  renderItem = item => (
    <Item
      key={item.id}
      status={item.status}
      onClick={() => this.handleItemClicked(item.id)}
      keyword={this.props.keyword}>
      {item.content}
    </Item>
  )

  handleItemClicked = id => {
    const { list } = this.props
    let clickedItem = list.find(item => item.id === id)
    let itemStatus = clickedItem.status
    clickedItem.status = itemStatus === 'completed' ? 'incompleted' : 'completed'
    this.setState({ list })
  }

  render() {
    const { keyword, showType, width, list } = this.props;
    return (
      <TodoWrapper width={width}>
        {this.renderSearchBar(keyword)}
        {this.renderTodoList(list, showType, keyword)}
        {this.renderActionBar(showType)}
      </TodoWrapper>
    )
  }
}

Todo.propTypes = {
  list: PropTypes.array,
  keyword: PropTypes.string,
  showType: PropTypes.string,
  width: PropTypes.string,
}

Todo.defaultProps = {
  list: [],
  showType: 'all',
  keyword: '',
  width: '300px'
}

const mapStateToProps = (state) => {
  return {
    list: state.adding.list,
    showType: state.updating.showType,
    keyword: state.updating.keyword
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    handleAddList: handleAddList,
    updateKeyword: updateKeyword,
    updateShowType: updateShowType
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
