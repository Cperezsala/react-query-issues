import axios from "axios";

export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
})

