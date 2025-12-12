// Storage interface - currently not needed for this application
// The contact form sends data directly to the API endpoint
// which logs it and returns a success message

export interface IStorage {
  // Future storage methods can be added here
}

export class MemStorage implements IStorage {
  constructor() {}
}

export const storage = new MemStorage();
