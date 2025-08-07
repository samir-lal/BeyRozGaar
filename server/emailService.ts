import { MailService } from '@sendgrid/mail';

const mailService = new MailService();

// Initialize SendGrid with API key if available
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  html: string;
}

async function sendEmail(params: EmailParams): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.log('SendGrid API key not configured. Email would have been sent to:', params.to);
    console.log('Subject:', params.subject);
    return false;
  }

  try {
    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      html: params.html,
    });
    console.log('Welcome email sent successfully to:', params.to);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

// Welcome email templates
export const emailTemplates = {
  meetupWelcome: (email: string) => ({
    subject: "Welcome to BeyRozGaar चाय (chai) Meetup! 🎉",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to BeyRozGaar</title>
          <style>
            body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
            .header { background: linear-gradient(135deg, #FF7B54 0%, #FF9F73 100%); padding: 30px; text-align: center; border-radius: 12px 12px 0 0; }
            .header h1 { color: white; margin: 0; font-size: 28px; font-weight: bold; }
            .header p { color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 14px; }
            .content { background: white; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #eee; }
            .greeting { font-size: 18px; color: #2D2D2D; margin-bottom: 20px; }
            .message { color: #666; margin-bottom: 25px; line-height: 1.7; }
            .meetup-details { background: linear-gradient(135deg, #4FD1C7 10%, #81C784 100%); padding: 20px; border-radius: 10px; margin: 25px 0; }
            .meetup-details h3 { color: white; margin: 0 0 15px 0; font-size: 20px; }
            .meetup-details ul { color: white; margin: 0; padding-left: 20px; }
            .meetup-details li { margin-bottom: 8px; }
            .quote { background: #FFF8E1; border-left: 4px solid #FFB74D; padding: 20px; margin: 25px 0; border-radius: 0 8px 8px 0; }
            .quote p { margin: 0; font-style: italic; color: #5D4037; }
            .signature { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; }
            .signature p { margin: 5px 0; }
            .footer { text-align: center; margin-top: 30px; padding: 20px; background: #f9f9f9; border-radius: 8px; }
            .footer p { margin: 5px 0; color: #888; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Welcome to BeyRozGaar!</h1>
            <p>बे-रोज़गार (unemployed) → Your next chapter starts here</p>
          </div>
          
          <div class="content">
            <div class="greeting">
              Namaste and welcome! 🙏
            </div>
            
            <div class="message">
              <p>I'm absolutely thrilled that you've signed up for our weekly चाय (chai) meetup! Your journey toward discovering unlimited potential has just taken an exciting step forward.</p>
              
              <p>At BeyRozGaar, we believe that every great idea, every breakthrough moment, and every life-changing connection starts with a simple conversation over warm beverages. You're not just joining a meetup – you're becoming part of a community that believes in the power of authentic connections.</p>
            </div>
            
            <div class="meetup-details">
              <h3>🗓️ Your Meetup Details</h3>
              <ul>
                <li><strong>When:</strong> Thursday, August 21st at 3:00 PM - 4:00 PM</li>
                <li><strong>Where:</strong> Online via Zoom (link will be shared 24 hours before)</li>
                <li><strong>What to bring:</strong> Your favorite beverage and an open heart</li>
                <li><strong>What to expect:</strong> Genuine गप-शप (chitchat), inspiration, and new connections</li>
              </ul>
            </div>
            
            <div class="quote">
              <p>"You don't need to be intelligent or stupid, just simply be <strong>YOU</strong>. Every great product starts with a simple idea and the courage to build it."</p>
            </div>
            
            <div class="message">
              <p>Remember, this isn't about perfection or having all the answers. It's about showing up authentically and connecting with fellow dreamers who understand your journey. Whether you're exploring new opportunities, building something amazing, or simply seeking meaningful connections, you belong here.</p>
              
              <p>I'm looking forward to meeting you very soon and hearing about your dreams, ideas, and aspirations. Together, we'll explore what's possible when unlimited potential meets authentic community.</p>
            </div>
            
            <div class="signature">
              <p><strong>With excitement and warm regards,</strong></p>
              <p><strong>Sanjay Sahni</strong></p>
              <p>Product Expert & Founder, BeyRozGaar</p>
              <p><em>"Empowering unlimited potential through authentic connections"</em></p>
            </div>
          </div>
          
          <div class="footer">
            <p>BeyRozGaar Community Platform</p>
            <p>Made with ❤️ for dreamers everywhere</p>
            <p>Questions? Reply to this email – I read every single one!</p>
          </div>
        </body>
      </html>
    `
  }),

  communityWelcome: (email: string) => ({
    subject: "Welcome to the BeyRozGaar Community! Your journey begins now ✨",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to BeyRozGaar Community</title>
          <style>
            body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
            .header { background: linear-gradient(135deg, #4FD1C7 0%, #81C784 100%); padding: 30px; text-align: center; border-radius: 12px 12px 0 0; }
            .header h1 { color: white; margin: 0; font-size: 28px; font-weight: bold; }
            .header p { color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 14px; }
            .content { background: white; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #eee; }
            .greeting { font-size: 18px; color: #2D2D2D; margin-bottom: 20px; }
            .message { color: #666; margin-bottom: 25px; line-height: 1.7; }
            .community-benefits { background: linear-gradient(135deg, #FFB74D 10%, #FF7B54 100%); padding: 20px; border-radius: 10px; margin: 25px 0; }
            .community-benefits h3 { color: white; margin: 0 0 15px 0; font-size: 20px; }
            .community-benefits ul { color: white; margin: 0; padding-left: 20px; }
            .community-benefits li { margin-bottom: 8px; }
            .quote { background: #E8F5E8; border-left: 4px solid #4FD1C7; padding: 20px; margin: 25px 0; border-radius: 0 8px 8px 0; }
            .quote p { margin: 0; font-style: italic; color: #2E7D32; }
            .signature { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; }
            .signature p { margin: 5px 0; }
            .footer { text-align: center; margin-top: 30px; padding: 20px; background: #f9f9f9; border-radius: 8px; }
            .footer p { margin: 5px 0; color: #888; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Welcome to Our Community!</h1>
            <p>Where dreams meet reality and potential becomes purpose</p>
          </div>
          
          <div class="content">
            <div class="greeting">
              Welcome to the BeyRozGaar family! 🌟
            </div>
            
            <div class="message">
              <p>What an incredible step you've just taken! By joining our community, you've chosen to believe in something powerful – that your dreams have unlimited potential and that authentic connections can transform lives.</p>
              
              <p>As someone who has helped launch products worth over $100M and mentored 100+ entrepreneurs, I can tell you this with certainty: every breakthrough begins with someone who dared to believe in their ideas and connected with others who shared that vision.</p>
            </div>
            
            <div class="community-benefits">
              <h3>🚀 What's Next for You</h3>
              <ul>
                <li><strong>Weekly गप-शप (chitchat) Meetups:</strong> Connect with fellow dreamers every Thursday</li>
                <li><strong>Idea Development Support:</strong> Turn your concepts into actionable plans</li>
                <li><strong>Mentorship Opportunities:</strong> Learn from those who've walked the path before</li>
                <li><strong>Community Stories:</strong> Be inspired by real transformation journeys</li>
                <li><strong>Product Launch Guidance:</strong> From MVP to market success</li>
              </ul>
            </div>
            
            <div class="quote">
              <p>"After launching countless products and seeing amazing ideas come to life, I realized the biggest barrier isn't technical skills—it's belief and connection. You've just removed that barrier."</p>
            </div>
            
            <div class="message">
              <p>Remember, being बे-रोज़गार (unemployed) doesn't define your worth – it's simply your starting point for something extraordinary. Every successful entrepreneur, every innovative product, every life-changing idea started with someone exactly where you are now.</p>
              
              <p>I encourage you to jump into our next meetup, share your story when you're ready, and most importantly – be authentically YOU. The community is here to support, inspire, and grow alongside you.</p>
              
              <p>Your next chapter starts now, and I couldn't be more excited to be part of your journey!</p>
            </div>
            
            <div class="signature">
              <p><strong>With belief in your unlimited potential,</strong></p>
              <p><strong>Sanjay Sahni</strong></p>
              <p>Product Expert & Founder, BeyRozGaar</p>
              <p><em>"Every great innovation starts with a simple conversation"</em></p>
            </div>
          </div>
          
          <div class="footer">
            <p>BeyRozGaar Community Platform</p>
            <p>Made with ❤️ for dreamers everywhere</p>
            <p>Ready to share your story? Reply to this email!</p>
          </div>
        </body>
      </html>
    `
  }),

  storyWelcome: (email: string, name?: string) => ({
    subject: "Thank you for sharing your story with BeyRozGaar! 💫",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You for Your Story</title>
          <style>
            body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
            .header { background: linear-gradient(135deg, #FFB74D 0%, #FF7B54 100%); padding: 30px; text-align: center; border-radius: 12px 12px 0 0; }
            .header h1 { color: white; margin: 0; font-size: 28px; font-weight: bold; }
            .header p { color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 14px; }
            .content { background: white; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #eee; }
            .greeting { font-size: 18px; color: #2D2D2D; margin-bottom: 20px; }
            .message { color: #666; margin-bottom: 25px; line-height: 1.7; }
            .story-impact { background: linear-gradient(135deg, #E1F5FE 0%, #B3E5FC 100%); padding: 20px; border-radius: 10px; margin: 25px 0; border: 1px solid #4FC3F7; }
            .story-impact h3 { color: #0277BD; margin: 0 0 15px 0; font-size: 20px; }
            .story-impact p { color: #01579B; margin-bottom: 10px; }
            .quote { background: #FFF3E0; border-left: 4px solid #FF9800; padding: 20px; margin: 25px 0; border-radius: 0 8px 8px 0; }
            .quote p { margin: 0; font-style: italic; color: #E65100; }
            .signature { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; }
            .signature p { margin: 5px 0; }
            .footer { text-align: center; margin-top: 30px; padding: 20px; background: #f9f9f9; border-radius: 8px; }
            .footer p { margin: 5px 0; color: #888; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Your Story Matters!</h1>
            <p>Thank you for inspiring our community</p>
          </div>
          
          <div class="content">
            <div class="greeting">
              ${name ? `Dear ${name},` : 'Dear Storyteller,'} ✨
            </div>
            
            <div class="message">
              <p>I am genuinely moved that you chose to share your story with the BeyRozGaar community. Your courage to be vulnerable and authentic is exactly what makes our community so special and powerful.</p>
              
              <p>Having mentored hundreds of entrepreneurs and seen countless transformation journeys, I can tell you that sharing your story is often the first step toward inspiring others to take their own leap of faith. You've just planted seeds of possibility in minds you may never even meet.</p>
            </div>
            
            <div class="story-impact">
              <h3>🌟 The Ripple Effect of Your Story</h3>
              <p><strong>Inspiration:</strong> Someone reading your story will find the courage to start their own journey</p>
              <p><strong>Connection:</strong> Others with similar experiences will feel less alone in their struggles</p>
              <p><strong>Hope:</strong> Your transformation shows that change is possible for everyone</p>
              <p><strong>Community:</strong> You've strengthened the bonds that make BeyRozGaar a family</p>
            </div>
            
            <div class="quote">
              <p>"Every great innovation starts with a simple conversation, and every transformation begins with someone brave enough to share their truth. Thank you for being that person."</p>
            </div>
            
            <div class="message">
              <p>Your story will be reviewed with care and respect, and if selected for sharing, it will be presented in a way that honors your journey while protecting your privacy. We believe that authentic stories like yours are what transform a simple platform into a movement.</p>
              
              <p>Whether your story gets featured or not, know that it has already made an impact. It has reminded us all why we do this work – to create spaces where people can simply be themselves and discover their unlimited potential.</p>
              
              <p>Please don't let this be your only interaction with our community. Join our weekly meetups, connect with fellow dreamers, and continue being the inspiration that others need to see.</p>
            </div>
            
            <div class="signature">
              <p><strong>With deep gratitude and admiration,</strong></p>
              <p><strong>Sanjay Sahni</strong></p>
              <p>Product Expert & Founder, BeyRozGaar</p>
              <p><em>"Your story is someone else's survival guide"</em></p>
            </div>
          </div>
          
          <div class="footer">
            <p>BeyRozGaar Community Platform</p>
            <p>Made with ❤️ for brave souls who dare to share</p>
            <p>Keep being amazing – your journey inspires us all!</p>
          </div>
        </body>
      </html>
    `
  })
};

export async function sendMeetupWelcomeEmail(email: string): Promise<boolean> {
  const template = emailTemplates.meetupWelcome(email);
  return sendEmail({
    to: email,
    from: 'hello@beyrozgaar.com',
    subject: template.subject,
    html: template.html
  });
}

export async function sendCommunityWelcomeEmail(email: string): Promise<boolean> {
  const template = emailTemplates.communityWelcome(email);
  return sendEmail({
    to: email,
    from: 'hello@beyrozgaar.com',
    subject: template.subject,
    html: template.html
  });
}

export async function sendStoryWelcomeEmail(email: string, name?: string): Promise<boolean> {
  const template = emailTemplates.storyWelcome(email, name);
  return sendEmail({
    to: email,
    from: 'hello@beyrozgaar.com',
    subject: template.subject,
    html: template.html
  });
}