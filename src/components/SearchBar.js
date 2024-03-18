import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from "react-bootstrap";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      navigate(`/focusify/search?query=${searchTerm}`);
    }
  };

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
          <Form.Control
            className="form-control me-2"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
          <Button variant="dark" type="submit" >
            Search
          </Button>
        </Form>
  );
}

export default SearchBar;
