import { Request, Response, NextFunction } from 'express';
type AsyncController = (req: Request, res: Response, next: NextFunction) => Promise<any>;
declare const catchAsync: (fn: AsyncController) => (req: Request, res: Response, next: NextFunction) => void;
export default catchAsync;
//# sourceMappingURL=catchAsync.d.ts.map