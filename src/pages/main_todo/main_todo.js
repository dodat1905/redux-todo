import React, { Component } from 'react';
import NewForm from '../../components/new_form'
import './main_todo.scss'
import ListTodo from '../../components/listTodo'
import classNames from 'classnames/bind';
import Todo from '../../components/todo'

class MainTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {content: "a", done: false},
        {content: "b", done: true}
      ],
      value: ''
    };
  }

  updateStatus(event){
    const list = this.state.list;
    const list_id = list[event.currentTarget.id];
    (list_id.done === true) ? list_id.done = false : list_id.done = true;
    this.setState({
      list: list
    })
  }

  remove(event) {
    const list = this.state.list;
    const list_id = list[event.currentTarget.id];
    list.pop(list_id);
    this.setState({
      list: list
    })
  }

  handleChange(e) {
    this.setState({
      value: e.currentTarget.value
    })
  }

  addList(event) {
    const item = {content: this.state.value, done: false};
    const list = [...this.state.list, item];
    event.preventDefault();
    this.setState({
      list: list
    });
  }

  sort(event) {
  }

  render(){
    const styleToggle = classNames('togglebutton-wrapper', { 'togglebutton-checked' : this.props.sortItem})
    let list = this.state.list;
    return (
      <div className="main-todo">
        <ListTodo list={list} updateStatus={(e) => this.updateStatus(e)}
          remove={(e) => this.remove(e)} />
        <div className={styleToggle}>
          <label >
            <span className="togglebutton-label">Move done items at the end?</span>
            <span className="tooglebutton-box"></span>
            <input type="checkbox" onClick={(e) => this.sort(e)} />
          </label>
        </div>
        <NewForm addList={(e) => this.addList(e)}
          handleChange={(e) => this.handleChange(e)} />
      </div>
    );
  }
}

export default MainTodo;
