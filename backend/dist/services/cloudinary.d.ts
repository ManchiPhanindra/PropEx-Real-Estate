import { IImage } from '../models/Listing.js';
/**
 * Uploads a file to Cloudinary
 * @param fileData - Base64 encoded image data or data URL
 * @param folder - Folder name in Cloudinary
 * @returns Promise<IImage> - Uploaded image details
 */
export declare const uploadImage: (fileData: string, folder: string) => Promise<IImage>;
/**
 * Deletes an image from Cloudinary
 * @param publicId - The public ID of the image to delete
 * @returns Promise<void>
 */
export declare const deleteImage: (publicId: string) => Promise<void>;
//# sourceMappingURL=cloudinary.d.ts.map