/**
 * Low-level function to send a transactional email.
 * @param toEmail The recipient's email address (the Agent).
 * @param subject The email subject line.
 * @param text The plain text content of the email.
 * @param html The HTML content of the email.
 */
export declare const sendEmail: (toEmail: string, subject: string, text: string, html: string) => Promise<void>;
/**
 * High-level function to send a notification about a new buyer lead.
 */
export declare const sendNewLeadNotification: (agentEmail: string, listingTitle: string, leadDetails: {
    name: string;
    email: string;
    phone?: string;
    message: string;
}) => Promise<void>;
//# sourceMappingURL=email.d.ts.map