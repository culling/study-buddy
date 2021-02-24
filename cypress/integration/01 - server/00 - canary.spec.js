// import { config } from '../../server/config';
// const port = config.port;

const baseUrl = `http://localhost:5000`;
console.log(`baseUrl: ${baseUrl}`);

describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    });
});

describe('My First Test visit home', () => {
    it(`GIVEN 
    The server is running
    `, ()=>{

    });
    it(`WHEN 
    The user loads the homepage
    `, ()=>{
        cy.visit(baseUrl);
    });

    it(`THEN 
    Has a 200 status code
    `, ()=>{
        cy.request(baseUrl).then(res =>{
            console.log("res: ", res);
        })

    });

});
