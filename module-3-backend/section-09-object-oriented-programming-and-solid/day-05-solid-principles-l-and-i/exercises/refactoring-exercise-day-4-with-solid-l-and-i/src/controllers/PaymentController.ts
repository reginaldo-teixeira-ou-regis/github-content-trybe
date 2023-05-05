/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import PaymentService from '../services/PaymentService';

export default class PaymentController {
  constructor(
    private paymentService: PaymentService,
  ) {}
  
  async toExecutePix(req: Request, res: Response) {
    const { keyPix, accountDestinationId, accountOriginId, value } = req.body;

    const { code } = await this.paymentService.toExecutePix({
      keyPix,
      accountDestinationId,
      accountOriginId,
      value,
    });
  
    return res.status(200).json({ code });
  }
}