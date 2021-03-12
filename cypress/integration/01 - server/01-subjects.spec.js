// subjects-container
// import { config } from '../../server/config';
// const port = config.port;

const baseUrl = `http://localhost:5000`;
console.log(`baseUrl: ${baseUrl}`);

describe('Canary Test', () => {
    it('should always pass', () => {
        expect(true).to.equal(true)
    });
});


// describe('Subjects Container', () => {
//     it(`GIVEN 
//     The server is running
//     `, ()=>{
//         given();
//     });

//     it(`WHEN 
//     The user loads the homepage
//     `, ()=>{
//         when();
//     });


//     it(`THEN 
//     The subjects-container is displayed
//     `, ()=>{
//         then();
//     });

//     const given = ()=>{

//     }

//     const when = ()=>{
//         cy.visit(baseUrl);
//     }

//     const then = ()=>{
//         cy.visit(baseUrl);
//         cy.get("subjects-container")
//         .should("be.visible");
//         cy.get("subjects-container").should(($text)=>{
//             expect($text).to.contain('subjectsContainer');
//         });
//     }
// });


describe("Loading Data", () => {
    describe("Should load from local Storage", () => {
        beforeEach(() => {
            cy.restoreLocalStorage();
        });

        afterEach(() => {
            cy.saveLocalStorage();
        });

        it(`GIVEN 
        Local storage is populated with an array of subjects
        `, () => {
            given();
        });

        it(`WHEN 
        The user visits the page
        `, () => {
            when();
        });


        it(`THEN 
        The subjects-container is displayed and the contents of the local storage are used to populate the subjects-container
        `, () => {
            then();
            // cy.visit(baseUrl);
        });

        const given = () => {
            cy.visit(baseUrl);
            cy.clearLocalStorage();

            const subjectInfo = [
                {
                    courseShortName: "COMP307",
                    courseFullName: "Introduction to Artificial Intelligence",
                    currentGradeTotal: 40.52369008,
                    maximumPossibleGrade: 70,
                },
                {
                    courseShortName: "STAT292",
                    courseFullName: "Applied Statistics 2A",
                    currentGradeTotal: 86.99095588,
                    maximumPossibleGrade: 101.75,
                },
                {
                    courseShortName: "SWEN301",
                    courseFullName: "Structured Methods",
                    currentGradeTotal: 90.13,
                    maximumPossibleGrade: 100,
                },
                {
                    courseShortName: "SWEN326",
                    courseFullName: "Safety-Critical Systems",
                    currentGradeTotal: 88.78287179,
                    maximumPossibleGrade: 100,
                },
            ];
            cy.setLocalStorage("subjects", subjectInfo);
        }
        
        const when = () => { 
            cy.visit(baseUrl);
        }
        const then = () => {

            cy.get("subjects-container")
                .should(() => {
                    const subjectsFromLocalStorage = window.localStorage.getItem("subjects");
                    console.log("subjectsFromLocalStorage: ", subjectsFromLocalStorage);
                    expect(subjectsFromLocalStorage.length).to.be.gt(0);
                });
        }


    })
})