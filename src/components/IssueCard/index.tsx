import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Issue } from '../../@types';
import { Container } from './styles';

interface IssueCardProps {
  issue: Issue;
}

export function IssueCard({ issue }: IssueCardProps) {
  return (
    <Container href={issue.html_url}>
      <div>
        <strong>{issue.title}</strong>
        <p>{issue.user.login}</p>
      </div>
      <FiChevronRight size={20} />
    </Container>
  );
}
