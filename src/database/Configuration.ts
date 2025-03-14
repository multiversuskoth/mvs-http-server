import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { Base } from "@typegoose/typegoose/lib/defaultClasses";
import mongoose from "mongoose";

@modelOptions({ schemaOptions: { _id: false } })
export class ConfigurationGcm {
  @prop({ default: null })
  enabled?: boolean | null;

  @prop({ default: null })
  project_number?: boolean | null;
}

@modelOptions({ schemaOptions: { _id: false } })
export class ConfigurationGpgs {
  @prop({ default: null })
  google_play_client_id?: string | null;
}

@modelOptions({ schemaOptions: { _id: false } })
export class ConfigurationApns {
  @prop({ default: null })
  enabled?: boolean | null;
  @prop({ default: null })
  environment?: string | null;
  @prop({ default: null })
  sha1?: string | null;
}

@modelOptions({ schemaOptions: { _id: false } })
export class ConfigurationServerSideCodeDeploy {
  @prop({ required: true })
  sha!: string; // sha-1

  @prop({ required: true })
  instance!: string;
}

@modelOptions({ schemaOptions: { _id: false } })
export class ConfigurationServer {
  @prop({ required: true })
  ws!: string;
  @prop({ required: true })
  wss!: string;
  @prop({ required: true })
  udp!: string;
}

@modelOptions({ schemaOptions: { _id: false } })
export class ConfigurationCluster {
  @prop({ type: () => ConfigurationServer, required: true })
  servers!: Map<string, Map<string, ConfigurationServer>>;
}

@modelOptions({ schemaOptions: { _id: false } })
export class ConfigurationRealTime {
  @prop({ required: true })
  enabled!: boolean;

  @prop({ required: true })
  "default-cluster"!: string;

  @prop({ type: () => Map<string,ConfigurationCluster>, required: true })
  servers!: Map<string, Map<string,ConfigurationCluster>>;
}

export class Configuration {
  @prop({required: true})
  public _id!: string

  @prop({ required: true })
  gcm!: ConfigurationGcm;

  @prop({ required: true })
  gpgs!: ConfigurationGpgs;

  @prop({ required: true })
  apns!: ConfigurationApns;

  @prop({ required: true })
  server_side_code_deploy!: ConfigurationServerSideCodeDeploy;

  @prop({ required: true })
  realtime!: ConfigurationRealTime;
}

export const configurationModel = getModelForClass(Configuration);
