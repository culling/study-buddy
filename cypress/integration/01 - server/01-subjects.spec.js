import { assert, expect } from "chai";
import { settings } from "./../../support/settings";
console.log("settings: ", settings);
const baseUrl = settings.urls.base;
console.log(`baseUrl: ${baseUrl}`);

describe('Canary Test', () => {
    it('should always pass', () => {
        expect(true).to.equal(true)
    });
});


describe('Subjects Container', () => {
    it(`GIVEN 
    The server is running
    `, ()=>{
        given();
    });

    it(`WHEN 
    The user loads the homepage
    `, ()=>{
        when();
    });


    it(`THEN 
    The subjects-container is displayed
    `, ()=>{
        then();
    });

    const given = ()=>{

    }

    const when = ()=>{
        cy.visit(baseUrl);
    }

    const then = ()=>{
        cy.visit(baseUrl);
        cy.get("subjects-container")
        .should("be.visible");
        cy.get("subjects-container").should(($text)=>{
            expect($text).to.contain('subjectsContainer');
        });
    }
});


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
    });
});

describe("Add subject", () => {
    beforeEach(() => {
        cy.restoreLocalStorage();
    });

    afterEach(() => {
        cy.saveLocalStorage();
    });

    it(`GIVEN 
        local storage does not contain any subjects
        WHEN
        The user is on the subjects page
        The course name and the course code are input
        Add subject is clicked
        THEN
        It should have added the subject to the local storage for subjects
    `, () => {
        given();
        when();
        then();
    });
    const testCourse = {
        courseShortName: "TEST101",
        courseFullName: "Study Buddy - Testing With Cypress",
        currentGradeTotal: 88.0,
        maximumPossibleGrade: 100,
    }

    const given = () => {
        console.log("given hit!");
        cy.clearLocalStorage();
    }

    const when = () => {
        console.log("when hit!");
        cy.visit(`${settings.urls.base}`);
        cy.get("#course-name").type(`{selectall}{backspace}${testCourse.courseFullName}`, { force: true });
        cy.get("#course-code").type(`{selectall}{backspace}${testCourse.courseShortName}`, { force: true });
        cy.get(".add-subject-button").click();
        cy.wait(1.5 * 1000);
    }

    const then = () => {
        const subjectsFromLocalStorage = window.localStorage.getItem("subjects");
        expect(subjectsFromLocalStorage).to.not.be.null;
        assert.isNotNull(subjectsFromLocalStorage, "subjects from localStorage");
        console.log("subjectsFromLocalStorage: ", subjectsFromLocalStorage);
        expect(subjectsFromLocalStorage.length).to.be.gt(0);
    }
});


describe.only("Create new subject card", () => {
    const testCourse = {
        courseShortName: "TEST101",
        courseFullName: "Study Buddy - Testing With Cypress",
        currentGradeTotal: 88.0,
        maximumPossibleGrade: 100,
    }

    beforeEach(() => {
        cy.restoreLocalStorage();
    });

    afterEach(() => {
        cy.saveLocalStorage();
    });

    it(`GIVEN 
        local storage does not contain any subjects
        WHEN
        The user is on the subjects page
        The course name and the course code are input
        Add subject is clicked
        THEN
        It should have added the subject to the local storage for subjects
    `, () => {
        // console.log("given hit!");
        cy.clearLocalStorage();
    })

    it("do", () => {
        // console.log("when hit!");
        cy.visit(`${settings.urls.base}`);
        cy.get("#course-name").type(`{selectall}{backspace}${testCourse.courseFullName}`, { force: true });
        cy.get("#course-code").type(`{selectall}{backspace}${testCourse.courseShortName}`, { force: true });
        cy.get(".add-subject-button").click();
        cy.wait(2.5 * 1000);
    });
    it("then", () => {
        console.log("then hit!");
        console.log(`cy.get("subject-card"):`, cy.get("subject-card"));

        const subjectsFromLocalStorage = window.localStorage.getItem("subjects");
        expect(subjectsFromLocalStorage).to.not.be.null;
        expect(subjectsFromLocalStorage.length).to.be.gt(0);

        // console.log("cy.get('subjects-container')", cy.get('subjects-container'));
    });


    
});
