/* eslint-disable prettier/prettier */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import Intro from './Intro';

import IndexPage from '../src/index/indexPage';
import RelayPage from '../src/relay/main';
import RestfulPage from '../src/restinpeace/restful';
import UserRepo from '../src/container/UserRepo';
import BranchesTable from '../src/container/BranchesTable';
import BranchInfoRow from '../src/container/BranchInfoRow';

import User from '../src/components/User';
import CommitWithStatuses from '../src/components/CommitWithStatuses';
import Repo from '../src/components/Repo';

import { withLinks } from '@storybook/addon-links';

storiesOf('Intro', module).addWithJSX('to this storybook', () => <Intro showApp={linkTo('UserRepo')} />);

const userWithoutAvatar = {
    user: {
        login: 'login',
        id: '1234',
        company: 'company',
    },
};
const userWithAvatar = {
    user: {
        ...userWithoutAvatar.user,
        avatar_url: 'https://avatars2.githubusercontent.com/u/217931?v=3',
    },
};

const commit = {
    user: {
        ...userWithoutAvatar.user,
        avatar_url: 'https://avatars2.githubusercontent.com/u/217931?v=3',
    },
    commit: {
        sha : 'no-sha',
        date : 'no-date',
        message : 'no-message',
        status : [],
        author: {
            ...userWithAvatar.user,
            email: 'me@work',
            name: 'My-Name'
        }
    }
};

const branchInfo = {
    branch: {
        name: 'branch-x',
        lastCommit: commit.commit
    },
};

const branches = {
    repo: {branches: [branchInfo.branch]}
};

const repo = {
    repo: {
        owner: userWithAvatar.user,
        name: 'demo-repo',
        branches: branches.repo.branches
    },
};

const userRepo = {
    github: {
        user: userWithAvatar.user,
        repo: repo.repo
    }
};

storiesOf('Pages', module)
    .addDecorator(withLinks)
    .addWithJSX('main', () => <IndexPage />)
    .addWithJSX('restful', () => <RestfulPage />)
    .addWithJSX('relay', () => <RelayPage />);

storiesOf('Repo', module)
    .addWithJSX('fake data', () => <Repo {...repo} />);

storiesOf('User', module)
    .addWithJSX('without avatar', () => <User {...userWithoutAvatar} />)
    .addWithJSX('with avatar', () => <User {...userWithAvatar} />);

storiesOf('CommitStatus', module)
    .addWithJSX('with data', () => <CommitWithStatuses {...commit} />)
    .addWithJSX('with no data', () => <CommitWithStatuses />);

storiesOf('BranchesTable', module)
    .addWithJSX('with one branch', () => <BranchesTable {...branches} />);

storiesOf('BranchInfoRow', module)
    .addWithJSX('with info', () => <BranchInfoRow {...branchInfo} />);

storiesOf('UserRepo', module)
    .addWithJSX('with user and repo', () => <UserRepo {...userRepo} />);
