import axios from "axios";

export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
})

