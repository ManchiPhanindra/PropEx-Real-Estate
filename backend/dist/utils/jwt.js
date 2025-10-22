// src/utils/jwt.ts
import jwt from 'jsonwebtoken';
// Generate a JWT
export const signToken = (user) => {
    const secret = process.env.JWT_SECRET;
    const expiresIn = process.env.JWT_EXPIRES_IN || '7d';
    if (!secret) {
        throw new Error('JWT_SECRET is not defined in environment variables.');
    }
    // Create payload with required fields
    const payload = {
        id: user._id.toString(),
        email: user.email,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
    };
    // Sign and return the token with proper type assertion
    return jwt.sign(payload, secret, { expiresIn });
};
//# sourceMappingURL=jwt.js.map