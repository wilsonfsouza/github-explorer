import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Container } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface RepositoryCardProps {
  repository: Repository;
}

export function RepositoryCard({ repository }: RepositoryCardProps) {
  return (
    <Container to={`/repository/${repository.full_name}`}>
      <img src={repository.owner.avatar_url} alt={repository.owner.login} />
      <div>
        <strong>{repository.full_name}</strong>
        <p>{repository.description}</p>
      </div>
      <FiChevronRight size={20} />
    </Container>
  );
}
