import user from "../fixtures/user.json";
import updateUser from "../fixtures/updateUser.json";
import responseBody from "../fixtures/responseBody.json"

describe('pet shop tests', () => {
  it('created new user', () => {
    cy.request({
      method: 'POST',
      url: '/user',
      body: user
    }).then((response) => {
      expect(response.status).be.eql(200)
      expect(response.body).to.eql(responseBody);
    })
  })

  it("update user", () => {
    cy.request({
      method: 'PUT',
      url: '/user/${user.username}',
      body: updateUser
    }).then((response) => {
      expect(response.status).be.eq(200)
      expect(response.body).to.eql(responseBody);
    });
  })

  it("delete user", () => {
    cy.request({
      method: 'DELETE',
      url: '/user/Bro'  
    }).then((response) => {
      expect(response.status).be.eq(200)
    });
  });
})