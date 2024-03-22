import HttpClient from './utils/HttpClient';

class ContactService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
  }

  async getContact() {
    return this.httpClient.get('/contacts/');
  }

  async createContacts(contact) {
    return this.httpClient.get('/contacts', contact);
  }
}

export default new ContactService();
