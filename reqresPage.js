// pages/reqresPage.js

const config = require('../utils/config');

class ReqResPage {
  constructor(request) {
    this.request = request;
    this.baseUrl = config.baseUrl;
  }

  async getUsers(page) {
    const response = await this.request.get(this.baseUrl + '?page=' + page);   // ?page= this end point
    return response;
  }

  async createUser(user) {
    const response = await this.request.post(this.baseUrl, {
      data: user
    });
    return response;
  }

  async updateUser(userId, updatedData) {
    const response = await this.request.put(this.baseUrl + '/' + userId, {
      data: updatedData
    });
    return response;
  }

  async deleteUser(userId) {
    const response = await this.request.delete(this.baseUrl + '/' + userId);
    return response;
  }

  // async getUserById(userId) {
  //   const response = await this.request.get(this.baseUrl + '/' + userId);
  //   return response;
  // }
}

module.exports = ReqResPage;

