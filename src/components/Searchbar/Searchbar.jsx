import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyledSearch,
  StyledForm,
  StyledButton,
  StyledLabel,
  StyledInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = { value: '' };

  onHandleInput = e => {
    this.setState({ value: e.currentTarget.value });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    if (this.state.value.trim() === '') {
      alert('Введите данные для поиска');
      return;
    }
    const { onSubmit } = this.props;
    onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <StyledSearch>
        <StyledForm onSubmit={this.onHandleSubmit}>
          <StyledButton type="submit">
            <StyledLabel>Search</StyledLabel>
          </StyledButton>

          <StyledInput
            type="text"
            name="search"
            value={this.state.value}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onHandleInput}
          />
        </StyledForm>
      </StyledSearch>
    );
  }
}

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Searchbar;
