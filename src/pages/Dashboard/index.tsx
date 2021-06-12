import React, { useState, FormEvent, useEffect } from 'react';
import api from '../../services/api';

import { Title, Form, Repositories, Error } from './styles';
import Header from '../../components/Header';
import { RepositoryTypes } from '../../@types';
import { RepositoryCard } from '../../components/RepositoryCard';

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<RepositoryTypes[]>(() => {
    const storageRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );
    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);
  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    // Prevent Form to reload the page
    event.preventDefault();
    if (!newRepo) {
      setInputError('Type the author/repository name.');
      return;
    }

    try {
      const response = await api.get<RepositoryTypes>(`repos/${newRepo}`);
      const repository = response.data;
      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Repository not found.');
    }
  }

  return (
    <>
      <Header />
      <Title>Search for GitHub Repositories</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          type="text"
          placeholder="Try facebook/react"
        />
        <button type="submit">Search</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map(repository => (
          <RepositoryCard key={repository.full_name} repository={repository} />
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
