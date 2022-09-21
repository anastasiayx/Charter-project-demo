
describe('TransactionRewardsPage', () => {
    it('should show TransactionRewardsPage page', () => {

        let sendResponse;
        const trigger = new Promise((resolve) => {
            setTimeout(() => {
                sendResponse = resolve;
            }, 1000)
        });
        cy.intercept('/api/transactions', (request) => {
            return trigger.then(() => {
                request.reply();
            });
        });


        cy.visit('http://localhost:3000/')
        cy.get('header').contains('Transactions Rewards Portal');
        cy.get('.loading-spinner').should('be.visible').then(() => {
            sendResponse();
            cy.get('.loading-spinner').should('not.exist');
            cy.get('.ant-collapse').should('be.visible');
            cy.get('.ant-collapse-header-text').should('have.length', 5)
            cy.get('.ant-collapse-header-text').eq(0).should('contain.text', 'Customer ID:sdfs34234fss, Total Rewards:808')
            cy.get('.ant-collapse-header-text').eq(1).should('contain.text', '2022-08, Monthly Rewards:334')
            cy.get('.ant-collapse-header-text').eq(2).should('contain.text', '2022-07, Monthly Rewards:474')
            cy.get('.ant-collapse-header-text').eq(3).should('contain.text', '2022-06, Monthly Rewards:0')
            cy.get('.ant-collapse-header-text').eq(4).should('contain.text', 'Customer ID:asdfdsffddsf, Total Rewards:632')
        })


    })
})
