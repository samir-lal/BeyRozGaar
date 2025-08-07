import { type User, type InsertUser, type MeetupSignup, type InsertMeetupSignup, type ContactMessage, type InsertContactMessage, users, meetupSignups, contactMessages } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createMeetupSignup(signup: InsertMeetupSignup): Promise<MeetupSignup>;
  getMeetupSignups(): Promise<MeetupSignup[]>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createMeetupSignup(insertSignup: InsertMeetupSignup): Promise<MeetupSignup> {
    const [signup] = await db
      .insert(meetupSignups)
      .values(insertSignup)
      .returning();
    return signup;
  }

  async getMeetupSignups(): Promise<MeetupSignup[]> {
    return await db.select().from(meetupSignups);
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const [message] = await db
      .insert(contactMessages)
      .values(insertMessage)
      .returning();
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return await db.select().from(contactMessages);
  }
}

export const storage = new DatabaseStorage();
