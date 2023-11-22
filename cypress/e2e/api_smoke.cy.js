// api_smoke.spec.js
describe("API Smoke Tests", () => {
  const apiUrl = Cypress.env('NEXT_PUBLIC_API_URL');

  it("successfully retrieves the unique visitor count", () => {
    cy.request('POST', apiUrl).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('unique_visits');
      expect(response.body.unique_visits).to.be.a('number');
    });
  });

  it("does not increment count for non-unique visitors within the same day", () => {
    // Send the first POST request
    cy.request('POST', apiUrl).then((firstResponse) => {
      expect(firstResponse.status).to.eq(200);
      const firstCount = firstResponse.body.unique_visits;

      // Send another identical POST request
      cy.request('POST', apiUrl).then((secondResponse) => {
        expect(secondResponse.status).to.eq(200);
        const secondCount = secondResponse.body.unique_visits;
        expect(secondCount).to.eq(firstCount);
      });
    });
  });

  it("rejects the request with an unexpected body", () => {
    cy.request({
      method: "POST",
      url: apiUrl,
      failOnStatusCode: false,
      body: {
        unexpected: "data",
      },
    }).then((response) => {
      expect(response.status).to.eq(400);
    });
  });

  it("accepts the request with no body", () => {
    cy.request('POST', apiUrl).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('unique_visits');
    });
  });

});
