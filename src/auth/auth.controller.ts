import { Request, Response } from 'express'

class AuthController {
  index (req: Request, res: Response) {
    return res
      .json({ hw: 'User controller 🌈 🍩 🍟' })
      .status(200)
  }
}

export default new AuthController()
