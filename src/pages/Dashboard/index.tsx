import React, { useState, FormEvent, useEffect } from 'react';
import api from '../../services/api';

import { Title, Form, Repositories, Error } from './styles';
import Header from '../../components/Header';
import { RepositoryCard } from '../../components/RepositoryCard';

interface Repository {
  full_name: string;
  description: string;
  stargazers_count?: number;
  forks_count?: number;
  open_issues_count?: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export default function Dashboard() {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
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
      const response = await api.get<Repository>(`repos/${newRepo}`);
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
}
