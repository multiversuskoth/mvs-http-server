import express from 'express';
import 'reflect-metadata';
import mongoose from 'mongoose';
import { getModelForClass, prop } from '@typegoose/typegoose';
import { randomUUID } from 'crypto';

// Define the PlayerTester model
export class PlayerTester {
  @prop({ default: '' })
  public name!: string;

  @prop({ required: true, unique: true })
  public ip!: string;

  // MongoDB will auto-generate _id for each document
  @prop({ default: () => new mongoose.Types.ObjectId(), unique: true })
  public profile_id!: mongoose.Types.ObjectId;

  @prop({ default: () => randomUUID(), unique: true })
  public public_id!: string;

  @prop({ default: 'profile_icon_default'})
  public profile_icon!: string;

  @prop({ default: 'character_shaggy'})
  public character!: string;

  @prop({ default: 'character_shaggy_default'})
  public variant!: string;
}




export const PlayerTesterModel = getModelForClass(PlayerTester);