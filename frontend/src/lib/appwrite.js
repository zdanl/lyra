import { Functions, Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('lyra');

export const account = new Account(client);
export const functions = new Functions(client);

export { ID } from 'appwrite';

