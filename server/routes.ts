import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMeetupSignupSchema, insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { sendMeetupWelcomeEmail, sendCommunityWelcomeEmail, sendStoryWelcomeEmail } from "./emailService";

export async function registerRoutes(app: Express): Promise<Server> {
  // Meetup signup endpoint
  app.post("/api/meetup-signup", async (req, res) => {
    try {
      const signupData = insertMeetupSignupSchema.parse(req.body);
      const signup = await storage.createMeetupSignup(signupData);
      
      // Send welcome email
      await sendMeetupWelcomeEmail(signupData.email);
      
      res.json({ success: true, signup });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to process signup" 
        });
      }
    }
  });

  // Contact message endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const messageData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(messageData);
      
      // Send welcome email based on message type
      if (messageData.message.toLowerCase().includes('community')) {
        await sendCommunityWelcomeEmail(messageData.email);
      } else if (messageData.message.toLowerCase().includes('story')) {
        await sendStoryWelcomeEmail(messageData.email, messageData.name);
      } else {
        // For general inquiries, send community welcome
        await sendCommunityWelcomeEmail(messageData.email);
      }
      
      res.json({ success: true, message });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message" 
        });
      }
    }
  });

  // Admin login endpoint
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      const adminUsername = process.env.ADMIN_USERNAME || "admin";
      const adminPassword = process.env.ADMIN_PASSWORD || "ChaiCoffee123!";
      
      if (username === adminUsername && password === adminPassword) {
        res.json({ success: true, message: "Login successful" });
      } else {
        res.status(401).json({ 
          success: false, 
          message: "Invalid credentials" 
        });
      }
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Login failed" 
      });
    }
  });

  // Get meetup signups (admin endpoint)
  app.get("/api/admin/meetup-signups", async (req, res) => {
    try {
      const signups = await storage.getMeetupSignups();
      res.json(signups);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch signups" 
      });
    }
  });

  // Get contact messages (admin endpoint)
  app.get("/api/admin/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch messages" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
