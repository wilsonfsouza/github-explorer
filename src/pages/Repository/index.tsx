import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { RepositoryInfo, Issues } from './styles';
import api from '../../services/api';
import Header from '../../components/Header';
import { RepositoryTypes, Issue, RepositoryParams } from '../../@types';
import { IssueCard } from '../../components/IssueCard';

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<RepositoryTypes | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();
  // Execute both async requests at the same time
  useEffect(() => {
    api.get(`/repos/${params.repository}`).then(response => {
      setRepository(response.data);
    });

    api.get(`/repos/${params.repository}/issues`).then(response => {
      setIssues(response.data);
    });
    // or
    // async function loadData(): Promise<void> {
    //   const [repository, issues] = await Promise.all([
    //     api.get(`/repos/${params.repository}`),
    //     api.get(`/repos/${params.repository}/isuues`),
    //   ]);
    //   console.log(repository);
    //   console.log(issues);
    // }
    // loadData();
  }, [params.repository]);

  return (
    <>
      <Header>
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Open Issues</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map(issue => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </Issues>
    </>
  );
};

export default Repository;
