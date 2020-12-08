import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner'
import { getGithubRepos } from '../../actions/profile';

const ProfileGithub = ({
  username,
  getGithubRepos,
  repos
}) => {
  // get github repos on load
  useEffect(() => {
    getGithubRepos(username)
  }, [getGithubRepos])
  return (
    <div class="profile-github">
      <h2 class="text-primary my-1">
        <i class="fab fa-github"></i> Github Repos
      </h2>
      {repos === null ? <Spinner /> : (
        repos.map(repo => (
          <div class="repo bg-white p-1 my-1">
            <div>
              <h4>
                <a href={repo.hrml_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
              </h4>
              <p>{repo.description ? <span>{repo.description}</span> : <span>No Description</span>}</p>
            </div>
            <div>
              <ul>
                <li class="badge badge-primary">Stars: {repo.stargazers_count}</li>
                <li class="badge badge-dark">Watchers: {repo.watchers_count}</li>
                <li class="badge badge-light">Forks: {repo.forks_count}</li>
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  repos: state.profile.repos
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);