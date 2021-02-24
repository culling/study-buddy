//DEV on Windows with Heroku BE
//         maximumInactiveTimeMs: 86400000 - 1 day in milliseconds (24 * 60 * 60 * 1000)
export default {
    port: 5000,
    mongoPort: 27017,
    mongoUrl: (process.env.MONGODB_URI == undefined) ? "mongodb://localhost:27017/mydb" : process.env.MONGODB_URI,
    publicHostname: "localhost",
    publicUrl: "localhost:5000",
    GithubOAuthSettings: {
        GITHUB_CLIENT_ID: "f001cb60218ae6f5077b",
        GITHUB_CLIENT_SECRET: "1f83ad8bfa96b153a95d15c68f4b141c34e25b0b",
        GITHUB_CALLBACK: `http://localhost:5000/auth/github/callback`
    },
    businessRules: {
        minimumPasswordLength: 6,
        minimumPasswordStrength: 2,
        maximumInactiveTimeMs: 86400000
    },
};