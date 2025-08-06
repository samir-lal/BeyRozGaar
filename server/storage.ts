import { type User, type InsertUser, type MeetupSignup, type InsertMeetupSignup, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createMeetupSignup(signup: InsertMeetupSignup): Promise<MeetupSignup>;
  getMeetupSignups(): Promise<MeetupSignup[]>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private meetupSignups: Map<string, MeetupSignup>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.users = new Map();
    this.meetupSignups = new Map();
    this.contactMessages = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createMeetupSignup(insertSignup: InsertMeetupSignup): Promise<MeetupSignup> {
    const id = randomUUID();
    const signup: MeetupSignup = { 
      ...insertSignup, 
      id, 
      createdAt: new Date() 
    };
    this.meetupSignups.set(id, signup);
    return signup;
  }

  async getMeetupSignups(): Promise<MeetupSignup[]> {
    return Array.from(this.meetupSignups.values());
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = { 
      ...insertMessage, 
      id, 
      createdAt: new Date() 
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
}

export const storage = new MemStorage();
