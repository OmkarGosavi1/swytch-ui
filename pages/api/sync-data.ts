// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import AppConfig from "@config/appConfig";
import { UserModel } from "models/User";
import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await mongoose.connect(AppConfig.mongoUri)

    const { id } = req.query
    if(!id) {
      res.status(400).json({
        success: false,
        message: "Please specify id."
      })
      return
    }

    const dataToPush = await UserModel.find({ _id: { $gt: id } })
    
    res.status(200).json({
      success: true,
      data: dataToPush,
      message: 'Data was fetched.'
    });
    
  } catch (error) {
    console.log('Something went wrong:', error)
    res.status(500).json({
      success: false,
      message: "Something went wrong."
    });
  } finally {
    await mongoose.disconnect()
  }
}
