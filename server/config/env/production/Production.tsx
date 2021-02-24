//         maximumInactiveTimeMs: 86400000 - 1 day in milliseconds (24 * 60 * 60 * 1000)

const mongodb_password = "W4cHLBX8CGOHiQmQ";
const dbname = "books_1";
const mongoUrl = `mongodb+srv://admin_1:${mongodb_password}@cluster0.t7ruf.mongodb.net/${dbname}?retryWrites=true&w=majority`;



export default {
    port:               process.env.PORT || 80,
    mongoPort:          37882,
    mongoUrl:           (process.env.MONGODB_URI == undefined)? mongoUrl : process.env.MONGODB_URI,
    publicHostname:     "waikato-books.herokuapp.com",
    publicUrl:          "waikato-books.herokuapp.com",
    GithubOAuthSettings: {
        GITHUB_CLIENT_ID: "a8d2a6d3788ebae00cbe",
        GITHUB_CLIENT_SECRET: "433486f96e223ef3ef48c71032185e83f6ccd262",
        GITHUB_CALLBACK: `http://waikato-books.herokuapp.com/auth/github/callback`
    },
    businessRules:{
        minimumPasswordLength: 6,
        minimumPasswordStrength: 2,
        maximumInactiveTimeMs: 86400000
    }
}