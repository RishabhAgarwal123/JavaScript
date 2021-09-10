import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = useState(mockUser);
    const [githubRepos, setGithubRepos] = useState(mockRepos);
    const [githubFollowers, setGithubFollowers] = useState(mockFollowers);

    const [request, setRequest] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({ show: false, message: '' });

    const checkRequestCounts = () => {
        axios(`${rootUrl}/rate_limit`).then(({ data }) => {
            let { remaining } = data.rate;
            setRequest(remaining);
            console.log(remaining);
            if (remaining === 0) {
                checkError(true, 'Search limit reached try after 1 hour')
            }
        }).catch((error) => {
            console.log(error);
        })
    };

    const checkError = (show = false, message = '') => {
        setError({ show: show, message: message });
    }

    const searchGithubUser = async (user) => {
        checkError();
        setLoading(true);
        const response = await axios(`${rootUrl}/users/${user}`).catch(error => console.log(error));
        if (response) {
            setGithubUser(response.data);
            const { login } = response.data;
            //repos
            // await axios(`${rootUrl}/users/${login}/repos?per_page=100`).then((response) => {
            //     setGithubRepos(response.data);
            // });
            // Followers
            // await axios(`${followers_url}/?per_page=100`).then((response) => {
            //     setGithubFollowers(response.data);
            // });

            await Promise.allSettled([axios(`${rootUrl}/users/${login}/repos?per_page=100`), axios(`${rootUrl}/users/${login}/followers`)]).then((results) => {
                const [repos, followers] = results;
                const status = 'fulfilled'
                if (repos.status === status) {
                    setGithubRepos(repos.value.data);
                }
                if (followers.status === status) {
                    setGithubFollowers(followers.value.data);
                }
            });
        } else {
            checkError(true, 'No user found with that name');
        }
        setLoading(false);
        checkRequestCounts();
    }

    useEffect(() => {
        checkRequestCounts();
    }, []);

    return (
        <GithubContext.Provider value={{ githubUser, githubRepos, githubFollowers, request, error, searchGithubUser, loading }}>{children}</GithubContext.Provider>
    );
}
export { GithubContext, GithubProvider };
