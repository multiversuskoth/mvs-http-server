# MVS HTTP & Websocket Server

Express server with a mongoDB backend

Everything is typescript including using typegoose.

## Routes

Routes are auto generated all routes from a postmancollection.json from [mvs-dump](https://github.com/multiversuskoth/mvs-dump). `router.ts` should be edited since its auto generated

## Request/Response/Query Interfaces

Request/Response/Query interfaces are also auto generated and inside the interfaces folder. These are auto added inside the router.ts file and should also be used in the handlers req, res interfaces to get body and response auto completion

## Handlers

All handlers are inside the `handlers` folder. To implement a handler copy the handler name and signature from the router.ts and create a new file inside the handlers folder. Make sure to add your file to the handlers/index.ts file so it can be picked up by the auto generated router.ts file

## Hydra middleware

The hydra middleware decodes/encodes x-ag-binary responses and adds them to the req body. Response will be encoded back to hydra.

Common hydra headers are also appended to all requests

## Schema

Database schema are contained inside the database folder and use typegoose models

### Date

For date that is used as number -> set dateToMVSTime as getter

```
@prop({ type:Date, required: true, get: dateToMVSTime })
updated_at!: number;
```

And add `toJSON:{getters: true}` to top-level model, or model that calls toJSON, for example

```
@modelOptions({
  schemaOptions: {
    toJSON: { ...toJSONVirtualId, getters: true },
  },
})
export class Account {
```

### Nullable

It will appear in MongoDB

```
@prop({default:null, type: InventoryCharacter})
garnet: InventoryCharacter|null=null;
```

Note the type in prop, it is necessary with union type.

Don't use optional field for nullable like `garnet?`

### Undefined

Undefined will not appear in MongoDB unlike null

If a field can be undefined, put question mark at the end of it (better than undefined union type because it can be omitted)

```
@prop()
character_BananaGuard?: InventoryItem;
```
